

export const index = 1;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/fallbacks/error.svelte.js')).default;
export const imports = ["_app/immutable/nodes/1.TIRVwXwx.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.bt5f5KBO.js","_app/immutable/chunks/entry.81KvO83j.js"];
export const stylesheets = [];
export const fonts = [];
