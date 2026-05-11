// Some global settings you may want to adjust when adapting the project to your city

export const projectTitle = "Grätzlfarben";

export const og_siteName = "Forschungsbereich Kartographie @ TU Wien";

export const country = "AT"; //for Nominatim request

export const url = "https://cartolab.at/graetzlfarben";

// App settings and defaults

export const useLocationAsText = true; // Show lat/lng as text on the card

export const defaultTextOnCard = ""; // leave empty to show placeholder text

export const defaultLanguage = "de";

export const printBackUI = false;

export const reloadAfterPrint = true;

export const downloadFilename = "Graetzlfarben-postcard";

export const backsideSuffix = "-backside";

// Design settings (interim solution as long as Tailwind is used in this project)

export const colors= {
  primary: "#313178",
  secondary: "#9F4305"
}; // set button colors

// Postcard (diagram) settings

export const postcardFooter = "Geo-Tag 2024 — cartolab.at/graetzlfarben";

export const labelContrast = 1.3;

export const postcardWidth = 105; // in mm

export const postcardHeight = 148; // in mm

export const postcardMargin = 8; // in layout units, TODO convert to mm!

// Map settings

export const mapBounds = [ //should be bigger than city boundingbox, because city boundingbox borders should be possible to be dragged to center of screen, where the landuse analysis takes place
    [16.0,48.05],
    [16.75,48.4],
  ];

export const initialMapCenter = [16.370402529206963, 48.20996163502622];

export const mapMinZoom = 11.3;

export const mapMaxZoom = 14;

export const analysisRadiusInMeters = 750;

// Landuse tiles settings

export const landuseFieldname = "CODE";

export let categories = {
    street: { color: "#3A3838", name_en: "Street traffic", name: "Straßenverkehr" },
    living: { color: "#F0BD9F", name_en: "Living", name: "Wohnen" },
    rail: { color: "#898989", name_en: "Rail", name: "Bahn" },
    water: { color: "#D0E4DE", name_en: "Water", name: "Wasser" },
    greenspace: { color: "#92BA95", name_en: "Nature", name: "Grünflächen" },
    industry: { color: "#B68B3A", name_en: "Economy", name: "Wirtschaft" },
    leisure: { color: "#8B515C", name_en: "Culture and Leisure", name: "Kultur und Freizeit" },
    sports: {color: "#E8D569", name_en: "Sports", name: "Sport"},
    education: {color: "#758EBA", name_en: "Education", name: "Schule und Bildung"},
    infrastructure: { color: "#665B44", name_en: "Infrastructure", name: "Infrastruktur" },
    nodata: {color: "#afafaf", name_en: "No data", name: "Keine Daten" },
};

// Mapping of landuse codes to categories

export let landuses = {
    114: {
      category: "living",
      info: "",
      name: "locker bebautes Wohn(misch)gebiet",
      name_en: "living",
    },
    113: {
      category: "living",
      info: "",
      name: "Wohn(misch)gebiet mittlerer Dichte",
      name_en: "living",
    },
    111: {
      category: "living",
      info: "",
      name: "dichtes Wohn(misch)gebiet",
      name_en: "living",
    },
    112: {
      category: "living",
      info: "",
      name: "dichtes, durchgrüntes Wohn(misch)gebiet",
      name_en: "living",
    },
    122: {
      category: "industry",
      info: "",
      name: "Büro, Verwaltung",
      name_en: "industry",
    },
    123: {
      category: "industry",
      info: "",
      name: "solitäre Handelsstrukturen",
      name_en: "industry",
    },
    121: {
      category: "industry",
      info: "",
      name: "Geschäfts-, Kern-, Mischgebiete",
      name_en: "industry",
    },
    131: {
      category: "industry",
      info: "",
      name: "Industrie, produzierendes Gewerbe, Großhandel",
      name_en: "industry",
    },
    142: {
      category: "leisure",
      info: "",
      name: "Kultur, Freizeit, Messe",
      name_en: "culture and leisure",
    },
    143: {
      category: "infrastructure",
      info: "",
      name: "Gesundheit, Einsatzorganisation",
      name_en: "health",
    },
    141: {
      category: "education",
      info: "",
      name: "Bildung",
      name_en: "education",
    },
    144: {
      category: "sports",
      info: "",
      name: "Sporthalle, Hallenbad",
      name_en: "sports and swimming indoor",
    },
    151: {
      category: "infrastructure",
      info: "",
      name: "Militärische Anlage",
      name_en: "military",
    },
    155: {
      category: "infrastructure",
      info: "",
      name: "Kläranlage, Deponie",
      name_en: "sewage plant or landfill ",
    },
    152: {
      category: "infrastructure",
      info: "",
      name: "Energieversorgung, Rundfunkanlage",
      name_en: "Power supply and broadcasting equipment",
    },
    153: {
      category: "infrastructure",
      info: "",
      name: "Wasserversorgung",
      name_en: "water supply",
    },
    154: {
      category: "infrastructure",
      info: "",
      name: "Transformationsfläche, Baustelle, Materialgewinnung",
      name_en: "Transformation area, construction site, extraction of materials",
    },
    311: {
      category: "street",
      info: "",
      name: "Straßenraum",
      name_en: "Street traffic",
    },
    321: {
      category: "street",
      info: "",
      name: "Parkplatz, Parkhaus",
      name_en: "parking",
    },
    322: {
      category: "rail",
      info: "",
      name: "Bahnhof, Bahnanlage",
      name_en: "railways",
    },
    323: {
      category: "industry",
      info: "",
      name: "Transport, Logistik inkl. Lager",
      name_en: "transport and logistics",
    },
    232: {
      category: "greenspace",
      info: "",
      name: "Parkanlage",
      name_en: "park",
    },
    233: {
      category: "sports",
      info: "",
      name: "Sportanlage, Freibad, Camping",
      name_en: "sports and swimming outdoor, camping",
    },
    231: {
      category: "greenspace",
      info: "",
      name: "Friedhof",
      name_en: "cemetery",
    },
    221: {
      category: "greenspace",
      info: "",
      name: "Acker",
      name_en: "field",
    },
    222: {
      category: "greenspace",
      info: "",
      name: "Weingarten",
      name_en: "vineyard",
    },
    223: {
      category: "industry",
      info: "",
      name: "Gärtnerei, sonstige landwirtschaftliche Fläche",
      name_en: "nursery and other agricultural use",
    },
    211: {
      category: "greenspace",
      info: "",
      name: "Wald",
      name_en: "forest",
    },
    212: {
      category: "greenspace",
      info: "",
      name: "Wiese, sonstige Grünfläche",
      name_en: "meadow, other green space",
    },
    241: {
      category: "water",
      info: "",
      name: "Gewässer inkl. Bachbett",
      name_en: "water",
    },
  };
  

  
