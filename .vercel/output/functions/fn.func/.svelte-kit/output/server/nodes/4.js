

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/projects/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/4.KTRgtJnc.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.bt5f5KBO.js"];
export const stylesheets = [];
export const fonts = [];
