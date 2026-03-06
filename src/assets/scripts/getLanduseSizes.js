import intersect from "@turf/intersect";
import area from "@turf/area";
import { landuseFieldname } from "$lib/settings";

export default function (map, circleGeom, landuses) {
  const circleArea = area(circleGeom);

  const landuse = map.queryRenderedFeatures({ layers: ["landuse"] });
  const areaPerCategory = landuse.reduce((acc, feature) => {
    const intersection = intersect(circleGeom, feature.geometry);
    if (intersection) {
      const m = area(intersection);
      const category = landuses[feature.properties[landuseFieldname]].category;
      if (!acc[category]) acc[category] = {m: 0, p: 0};
      acc[category].m += m;
      acc[category].p = acc[category].m / circleArea * 100;
    }
    return acc;
  }, {});
  const totalAreaCategories = Object.values(areaPerCategory).reduce((sum, value) => sum + value.m, 0);
  const nodata = {m: circleArea - totalAreaCategories, p: (circleArea - totalAreaCategories) / circleArea * 100};

  return { sizes: {...areaPerCategory, nodata }, sumSizes: totalAreaCategories };
}
