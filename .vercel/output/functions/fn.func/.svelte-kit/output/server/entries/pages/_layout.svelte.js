import { c as create_ssr_component } from "../../chunks/ssr.js";
const Layout = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<header data-svelte-h="svelte-1wion6r"><h1><a href="/">David Brackbill</a></h1> <nav><a href="/">Home</a> <a href="/resume">Resume</a> <a href="/projects">Projects</a> <a href="/blog">Blog</a></nav></header> ${slots.default ? slots.default({}) : ``}`;
});
export {
  Layout as default
};
