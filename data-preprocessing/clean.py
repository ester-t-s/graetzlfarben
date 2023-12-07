import geopandas as gpd
import pandas as pd
import requests
import geojson
from pyproj import CRS
from typing import List
from shapely.geometry import Polygon, MultiPolygon
from utils import load_from_file

fmzk = load_from_file(r"data-preprocessing\fmzk.geojson")

#drop irrelevant columns
fmzk = fmzk[['geometry', 'FMZK_ID','F_KLASSE', 'KLASSE_SUB', 'LAYER']]

#project
fmzk = fmzk.to_crs(epsg=4326)

#clean KLASSE_SUB
fmzk['KLASSE_SUB'] = fmzk['KLASSE_SUB'].fillna(0)
fmzk['KLASSE_SUB'] = fmzk['KLASSE_SUB'].astype(int)
fmzk.loc[fmzk['KLASSE_SUB'].isin([8,72]), "KLASSE_SUB"]=0 # because no translation for code 8 (one entry) and 72 (eight entries)

fmzk.to_file(r'data-preprocessing\fmzk_cleaned.geojson', driver="GeoJSON")