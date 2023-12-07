import geopandas as gpd
import pandas as pd
import requests
import geojson
from pyproj import CRS
from typing import List
from shapely.geometry import Polygon, MultiPolygon


def load_from_file(fpath:str) -> gpd.geodataframe.GeoDataFrame:
    return gpd.GeoDataFrame.from_features(geojson.load(open(fpath)))