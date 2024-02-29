import * as universal from '../entries/pages/_layout.js';

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export { universal };
export const universal_id = "src/routes/+layout.js";
export const imports = ["_app/immutable/nodes/0.dab60f0a.js","_app/immutable/chunks/index.c6f817c9.js"];
export const stylesheets = ["_app/immutable/assets/0.a73a1337.css"];
export const fonts = [];
