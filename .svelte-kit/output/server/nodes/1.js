

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.d40c74ac.js","_app/immutable/chunks/index.c6f817c9.js","_app/immutable/chunks/singletons.4dc45195.js","_app/immutable/chunks/index.cb7dbe23.js"];
export const stylesheets = [];
export const fonts = [];
