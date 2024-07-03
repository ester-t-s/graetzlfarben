import { landuses, categories, landuseFieldname } from '$lib/settings.js';

const landuseColors = [];
Object.keys(landuses).forEach((key) => {
	landuseColors.push(key);
	landuseColors.push(categories[landuses[key].category].color);
});

export default function (location) {
	return {
		version: 8,
		name: 'orthoPhotos',
		metadata: {},
		transition: {
			duration: 3500,
			delay: 0
		},
		sources: {
			osm: {
				type: 'raster',
				tiles: ['https://c.tile.openstreetmap.org/{z}/{x}/{y}.png'],
				tileSize: 256,
				attribution:
					"&copy; <a target='_blank' href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors &copy; <a target='_blank' href='https://carto.com/attributions'>CARTO</a>"
			},
			'landuse-source': {
				type: 'vector',
				tiles: [location + 'tiles/{z}/{x}/{y}.pbf'],
				minzoom: 10,
				maxzoom: 13
			}
		},
		layers: [
			{
				id: 'background',
				type: 'background',
				paint: {
					'background-color': '#ccc'
				}
			},
			{
				id: 'landuse',
				type: 'fill',
				source: 'landuse-source',
				'source-layer': 'landuse-data',
				maxzoom: 24,
				paint: {
					'fill-opacity': 1,
					'fill-color': ['match', ['to-string', ['get', landuseFieldname]], ...landuseColors, '#fff']
				}
			},
			{
				id: 'landuse-line',
				type: 'line',
				source: 'landuse-source',
				'source-layer': 'fleachen',
				maxzoom: 24,
				paint: {
					'line-opacity': 0.5,
					'line-color': '#000000'
				}
			},
			{
				id: 'osm',
				type: 'raster',
				source: 'osm',
				layout: {
					visibility: 'none' // visible
				},
				paint: {
					'raster-saturation': -1,
					'raster-contrast': 0.1,
					'raster-opacity': 0.7
				},
				minzoom: 0
			}
		]
	};
}
