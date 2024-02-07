

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/blog/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/3.tLMrgoJk.js","_app/immutable/chunks/scheduler.tKmLD9AE.js","_app/immutable/chunks/index.bt5f5KBO.js"];
export const stylesheets = [];
export const fonts = [];
