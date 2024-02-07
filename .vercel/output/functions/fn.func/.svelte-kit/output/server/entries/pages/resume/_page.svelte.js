import { c as create_ssr_component, d as add_attribute } from "../../../chunks/ssr.js";
const pdf = "/_app/immutable/assets/brackbill_resume.4uTP-9gc.pdf";
const png = "/_app/immutable/assets/brackbill_resume.nK12ppqW.png";
const css = {
  code: "embed.svelte-xuqmnb{max-width:800px;min-width:300px}",
  map: null
};
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  $$result.css.add(css);
  return `<h2 data-svelte-h="svelte-9yyawe"><a${add_attribute("href", pdf, 0)} download>Download a PDF</a></h2> <embed${add_attribute("src", png, 0)} class="svelte-xuqmnb">`;
});
export {
  Page as default
};
