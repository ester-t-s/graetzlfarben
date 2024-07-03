import { get } from "svelte/store";
import { browser } from "$app/environment"

import {
  country,
  mapBounds,
} from "$lib/settings.js";

export default function getAddress(filterText) {
  // hacky: if there is no browser and thus no XMLHttpRequest, return empty promise
  if (!browser) return new Promise((resolve, reject) => {});
  return new Promise((resolve, reject) => {
    const xhr = new XMLHttpRequest();
    xhr.open(
      "GET",
      `https://nominatim.openstreetmap.org/search?viewbox=${mapBounds[0]},${mapBounds[1]}&bounded=1&q=${filterText.toLowerCase()}&countrycodes=${country}&format=json`
    );
    xhr.send();

    xhr.onload = () => {
      if (xhr.status >= 200 && xhr.status < 300) {
        // add the prop adressen to geocoding response
        const response = JSON.parse(xhr.response);

        setTimeout(resolve(response), 5000);
      } else {
        reject();
      }
    };
  });
}
