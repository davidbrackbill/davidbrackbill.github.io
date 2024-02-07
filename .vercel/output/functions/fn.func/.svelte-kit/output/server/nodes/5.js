

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/resume/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/5.J6vbtGyM.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.bt5f5KBO.js"];
export const stylesheets = ["_app/immutable/assets/5.5mBcclnh.css"];
export const fonts = [];
