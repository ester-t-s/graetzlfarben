import geopandas as gpd
import pandas as pd
import requests
import geojson
from pyproj import CRS
from owslib.wfs import WebFeatureService

url = "https://data.wien.gv.at/daten/geo"

all_layers = ['GRUEN1', 'GRUEN2', 'GEW', 'MAU', 'GEB', 'VERKEHR1', 'VERKEHR2']

def get_layer(l:str, url:str=url) -> requests.models.Response:  
    tname = 'ogdwien:FMZK'+l+'OGD'
    params = dict(
        service="WFS",
        version="1.1.0",
        request="GetFeature",
        typeName=tname,
        outputFormat="json",
    )
    return requests.get(url, params=params)

def save_layer(l:str, gdf:gpd.geodataframe.GeoDataFrame):
    geojson_fname = r'data-preprocessing\individual_layers\\' + l +'.geojson'
    gdf.to_file(geojson_fname, driver="GeoJSON")

all_data = dict()  
for l in all_layers:
    response = get_layer(l)
    gdf = gpd.GeoDataFrame.from_features(geojson.loads(response.content), crs="EPSG:31256")
    save_layer(l, gdf)
    all_data[l] = gdf
    print("successfully fetched data for", l)
    
fmzk = pd.concat(all_data.values())
fmzk.to_file(r'data-preprocessing\fmzk.geojson', driver="GeoJSON")