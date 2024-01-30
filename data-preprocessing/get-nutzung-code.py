import geojson
import geopandas as gpd
import pandas as pd
import requests

def getWfs(l:str, url:str="https://data.wien.gv.at/daten/geo") -> requests.models.Response:  
    tname = 'ogdwien:'+l+'OGD'
    params = dict(
        service="WFS",
        version="1.1.0",
        request="GetFeature",
        typeName=tname,
        outputFormat="json",
    )
    return requests.get(url, params=params)

realnutGdf = gpd.GeoDataFrame.from_features(
    geojson.loads(
        getWfs('REALNUT2020').content
        ),
    crs="EPSG:31256"
)

realnutGdf.groupby(['NUTZUNG_CODE','NUTZUNG_LEVEL3']).size().to_csv("data-preprocessing/realnutzung_codes.csv")
