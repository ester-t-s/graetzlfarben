import { writable, readable } from "svelte/store";
import * as settings from "./settings.js";

export let areaSizes = writable();
export let circleRadius = writable();
export let dimensions = writable([settings.postcardWidth, settings.postcardHeight]);  // [148 * 3, 210 * 3]
export let svg = writable();
export let svgBack = writable();
export let totalSize = writable(0);
export let mapCenter = writable();
export let showBasemap = writable(false);
export let locationText = writable();
export let useLocationAsText = writable(settings.useLocationAsText);
export let lang = writable(settings.defaultLanguage);
export let newBounds = writable();
export let showBack = writable(false);
export let printBackUI = writable(settings.printBackUI);
export let screenHeight = writable();
export let isMobile = writable(true);
export let screenWidth = writable(0);
export let textVis = writable(settings.defaultTextOnCard);
