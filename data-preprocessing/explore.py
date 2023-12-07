import geopandas as gpd
import pandas as pd
import requests
import geojson
from pyproj import CRS
import pprint
from typing import List, Set
from shapely.geometry import Polygon, MultiPolygon
from utils import load_from_file


fmzk = load_from_file(r"data-preprocessing\fmzk_cleaned.geojson")

def get_col_values(col:str, df:gpd.geodataframe.GeoDataFrame=fmzk) -> pd.core.series.Series:
    return df[col].value_counts(dropna=False)
    
def filter_df(col:str, val:str|int|list, df:gpd.geodataframe.GeoDataFrame=fmzk) -> gpd.geodataframe.GeoDataFrame:
    if type(val)==list:
        return df[df[col].isin(val)]
    else:
        return df[df[col]==val]

fmzk[['F_KLASSE', 'KLASSE_SUB']].apply(pd.Series.value_counts)
fmzk['LAYER'].value_counts(dropna=False)
fmzk.dtypes

# check which layers are given e.g. for class 52 (Wald)
fmzk[fmzk['F_KLASSE']==52]['LAYER'].value_counts(dropna=False)

# find unique combinations of F_KLASSE and LAYER
table = pd.pivot_table(fmzk, values='FMZK_ID', index=['F_KLASSE', 'LAYER'], aggfunc="count")
# 50/51 Kategorien vorhanden, alle außer 99 - sonstige nicht zuordenbare Fläche
# LAYER entspricht Übersetzung der Kategorie (abzüglich Details), speichern in dict
translation = table.reset_index().set_index('F_KLASSE').to_dict()['LAYER']
fklassen = set(translation.keys())
translation[0] = 'nan'
translation[99] = 'Sonstige nicht zuordenbare Fläche'

def translate(object:Set[int]|List[int], t:dict=translation):
    result = []
    for number in object:
        result.append((number, t[number]))
    return result
        

# find unique combinations of F_Klasse, Layer und Klasse_Sub
table = pd.pivot_table(fmzk[fmzk['KLASSE_SUB']!=0], values='FMZK_ID', index=['F_KLASSE', 'LAYER', 'KLASSE_SUB'], aggfunc="count")

# explore Klasse_SUB
subklassen = set(fmzk['KLASSE_SUB'])
len(subklassen) #50, inkl. 0 und hier auch 99
translate(fklassen.difference(subklassen)) #62, 64, 91, 92
translate(subklassen.difference(fklassen)) #0, 99
len(fmzk[fmzk['KLASSE_SUB']!=0])/len(fmzk) # ca. 7% der Einträge haben eine Subklasse
# get frequency of classes with subclasses
class_with_subclass = fmzk[fmzk['KLASSE_SUB']!=0][['F_KLASSE','LAYER']].value_counts().to_dict()
for c in class_with_subclass:
    print("subclasses of entries with fklasse", c)
    d = ((fmzk[(fmzk['KLASSE_SUB']!=0) & (fmzk['F_KLASSE']==c[0]) & (fmzk['KLASSE_SUB']!=c[0])]['KLASSE_SUB'].value_counts())).to_dict()
    for key, value in d.items():
        d[key] = (translation[key], value)
    pprint.pprint(d)
    

### EXPLORE GEOMETRIES
# test if they overlap anywhere
