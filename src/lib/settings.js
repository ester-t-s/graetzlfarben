export const landuseFieldname = "NUTZUNG_LEVEL1";

export const mapBounds = [ //should be bigger than city boundingbox, because city boundingbox borders should be possible to be dragged to center of screen, where the landuse analysis takes place
    [16.0,48.05],
    [16.75,48.4],
  ];

export const initialMapCenter = [16.370402529206963, 48.20996163502622];

export const mapMinZoom = 11;

export const mapMaxZoom = 14;

export const projectTitle = "Grätzlfarben";

export let landuses = {
    Grünlandnutzung: {
      category: "nature",
      info: "",
      name: "Grünfläche",
      name_en: "greenspace",
    },
    Verkehr: {
      category: "street",
      info: "",
      name: "Straßenverkehr",
      name_en: "Street traffic",
    },
    Baulandnutzung: {
      category: "living",
      info: "",
      name: "Wohnbau",
      name_en: "Residential",
    }
  };
  
export let categories = {
    street: { color: "#292929", name_en: "Street", name: "Straßen" },
    living: { color: "#cf4b56", name_en: "Living", name: "Baulandnutzung" },
    // transport: { color: "#4d5759", name_en: "Transport", name: "Verkehr" },
    // water: { color: "#277da1", name_en: "Water", name: "Wasser" },
    nature: { color: "#53935c", name_en: "Nature", name: "Grünlandnutzung" },
    // industry: { color: "#f9c74f", name_en: "Economy", name: "Wirtschaft" },
    // leisure: { color: "#a4ba72", name_en: "Leisure", name: "Freizeit" },
    /* trash: {
        color: "#89775c",
        name_en: "Trash, Open pit",
        name: "Halde, Tagebau",
    },*/
    //other: { color: "#9c6a74", name_en: "Other", name: "Andere" },
};
  
