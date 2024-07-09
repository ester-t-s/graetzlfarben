// Some global settings you may want to adjust when adapting the project to your city

export const projectTitle = "Grätzlfarben";

export const country = "AT"; //for Nominatim request

export const url = "https://cartolab.at/graetzlfarben";

// App settings and defaults

export const useLocationAsText = false; // Show lat/lng as text on the card

export const defaultTextOnCard = ""; // leave empty to show placeholder text

export const defaultLanguage = "de";

export const printBackUI = false;

export const downloadFilename = "Graetzlfarben-postcard"

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

export const mapMinZoom = 11;

export const mapMaxZoom = 14;

export const analysisRadiusInMeters = 750;

// Landuse tiles settings

export const landuseFieldname = "NUTZUNG_CODE";

export let categories = {
    street: { color: "#3A3838", name_en: "Street", name: "Straßen" },
    living: { color: "#F0BD9F", name_en: "Living", name: "Wohnen" },
    rail: { color: "#898989", name_en: "Rail", name: "Bahn" },
    water: { color: "#D0E4DE", name_en: "Water", name: "Wasser" },
    greenspace: { color: "#92BA95", name_en: "Nature", name: "Grünflächen" },
    industry: { color: "#B68B3A", name_en: "Economy", name: "Wirtschaft" },
    leisure: { color: "#8B515C", name_en: "Culture and Leisure", name: "Kultur und Freizeit" },
    sports: {color: "#E8D569", name_en: "Sports", name: "Sport"},
    education: {color: "#758EBA", name_en: "Education", name: "Schule und Bildung"},
    infrastructure: { color: "#665B44", name_en: "Infrastructure", name: "Infrastruktur" },
};

// Mapping of landuse codes to categories

export let landuses = {
    1: {
      category: "living",
      info: "",
      name: "locker bebautes Wohn(misch)gebiet",
      name_en: "living",
    },
    2: {
      category: "living",
      info: "",
      name: "Wohn(misch)gebiet mittlerer Dichte",
      name_en: "living",
    },
    3: {
      category: "living",
      info: "",
      name: "dichtes Wohn(misch)gebiet",
      name_en: "living",
    },
    4: {
      category: "living",
      info: "",
      name: "großvolumiger, solitärer Wohn(misch)bau",
      name_en: "living",
    },
    5: {
      category: "industry",
      info: "",
      name: "Büro- und Verwaltungsviertel",
      name_en: "industry",
    },
    6: {
      category: "industry",
      info: "",
      name: "solitäre Handelsstrukturen",
      name_en: "industry",
    },
    7: {
      category: "industry",
      info: "",
      name: "Geschäfts-, Kern- u. Mischgebiete",
      name_en: "industry",
    },
    8: {
      category: "industry",
      info: "",
      name: "Mischnutzung wenig dicht",
      name_en: "industry",
    },
    9: {
      category: "industry",
      info: "",
      name: "Industrie, prod. Gewerbe, Großhandel inkl. Lager",
      name_en: "industry",
    },
    10: {
      category: "leisure",
      info: "",
      name: "Kultur, Freizeit, Messe",
      name_en: "culture and leisure",
    },
    11: {
      category: "infrastructure",
      info: "",
      name: "Gesundheit und Einsatzorg",
      name_en: "health",
    },
    12: {
      category: "education",
      info: "",
      name: "Bildung",
      name_en: "education",
    },
    13: {
      category: "sports",
      info: "",
      name: "Sport und Bad (Indoor)",
      name_en: "sports and swimming indoor",
    },
    14: {
      category: "infrastructure",
      info: "",
      name: "Militärische Anlagen",
      name_en: "military",
    },
    15: {
      category: "infrastructure",
      info: "",
      name: "Kläranlage, Deponie",
      name_en: "sewage plant or landfill ",
    },
    16: {
      category: "infrastructure",
      info: "",
      name: "Energieversorgung u. Rundfunkanlagen",
      name_en: "Power supply and broadcasting equipment",
    },
    17: {
      category: "infrastructure",
      info: "",
      name: "Wasserversorgung",
      name_en: "water supply",
    },
    18: {
      category: "infrastructure",
      info: "",
      name: "Transformationsfläche, Baustelle, Materialgew.",
      name_en: "Transformation area, construction site, material weight",
    },
    19: {
      category: "street",
      info: "",
      name: "Straßenraum begrünt",
      name_en: "Street traffic",
    },
    20: {
      category: "street",
      info: "",
      name: "Straßenraum unbegrünt", //are name and name_en relevant anywhere?
      name_en: "Street traffic",
    },
    21: {
      category: "street",
      info: "",
      name: "Parkplätze u. Parkhäuser",
      name_en: "parking",
    },
    22: {
      category: "rail",
      info: "",
      name: "Bahnhöfe und Bahnanlagen",
      name_en: "railways",
    },
    23: {
      category: "industry",
      info: "",
      name: "Transport und Logistik inkl. Lager",
      name_en: "transport and logistics",
    },
    24: {
      category: "greenspace",
      info: "",
      name: "Park, Grünanlage",
      name_en: "park",
    },
    25: {
      category: "sports",
      info: "",
      name: "Sport und Bad (Outdoor), Camping",
      name_en: "sports and swimming outdoor, camping",
    },
    26: {
      category: "greenspace",
      info: "",
      name: "Friedhof",
      name_en: "cemetery",
    },
    27: {
      category: "greenspace",
      info: "",
      name: "Acker",
      name_en: "field",
    },
    28: {
      category: "greenspace",
      info: "",
      name: "Weingarten",
      name_en: "vineyard",
    },
    29: {
      category: "industry",
      info: "",
      name: "Gärtnerei, Obstplantagen",
      name_en: "orchards",
    },
    30: {
      category: "greenspace",
      info: "",
      name: "Wald",
      name_en: "forest",
    },
    31: {
      category: "greenspace",
      info: "",
      name: "Wiese",
      name_en: "meadow",
    },
    32: {
      category: "water",
      info: "",
      name: "Gewässer inkl. Bachbett",
      name_en: "water",
    },
  };
  

  
