import { c as create_ssr_component, a as setContext, v as validate_component, m as missing_component } from "./ssr.js";
let base = "";
let assets = base;
const initial = { base, assets };
function override(paths) {
  base = paths.base;
  assets = paths.assets;
}
function reset() {
  base = initial.base;
  assets = initial.assets;
}
function set_assets(path) {
  assets = initial.assets = path;
}
let public_env = {};
let safe_public_env = {};
function set_private_env(environment) {
}
function set_public_env(environment) {
  public_env = environment;
}
function set_safe_public_env(environment) {
  safe_public_env = environment;
}
function afterUpdate() {
}
let prerendering = false;
function set_building() {
}
function set_prerendering() {
  prerendering = true;
}
const Root = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { stores } = $$props;
  let { page } = $$props;
  let { constructors } = $$props;
  let { components = [] } = $$props;
  let { form } = $$props;
  let { data_0 = null } = $$props;
  let { data_1 = null } = $$props;
  {
    setContext("__svelte__", stores);
  }
  afterUpdate(stores.page.notify);
  if ($$props.stores === void 0 && $$bindings.stores && stores !== void 0)
    $$bindings.stores(stores);
  if ($$props.page === void 0 && $$bindings.page && page !== void 0)
    $$bindings.page(page);
  if ($$props.constructors === void 0 && $$bindings.constructors && constructors !== void 0)
    $$bindings.constructors(constructors);
  if ($$props.components === void 0 && $$bindings.components && components !== void 0)
    $$bindings.components(components);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0)
    $$bindings.form(form);
  if ($$props.data_0 === void 0 && $$bindings.data_0 && data_0 !== void 0)
    $$bindings.data_0(data_0);
  if ($$props.data_1 === void 0 && $$bindings.data_1 && data_1 !== void 0)
    $$bindings.data_1(data_1);
  let $$settled;
  let $$rendered;
  let previous_head = $$result.head;
  do {
    $$settled = true;
    $$result.head = previous_head;
    {
      stores.page.set(page);
    }
    $$rendered = `  ${constructors[1] ? `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {
        default: () => {
          return `${validate_component(constructors[1] || missing_component, "svelte:component").$$render(
            $$result,
            { data: data_1, form, this: components[1] },
            {
              this: ($$value) => {
                components[1] = $$value;
                $$settled = false;
              }
            },
            {}
          )}`;
        }
      }
    )}` : `${validate_component(constructors[0] || missing_component, "svelte:component").$$render(
      $$result,
      { data: data_0, form, this: components[0] },
      {
        this: ($$value) => {
          components[0] = $$value;
          $$settled = false;
        }
      },
      {}
    )}`} ${``}`;
  } while (!$$settled);
  return $$rendered;
});
function set_read_implementation(fn) {
}
function set_manifest(_) {
}
const options = {
  app_dir: "_app",
  app_template_contains_nonce: false,
  csp: { "mode": "auto", "directives": { "upgrade-insecure-requests": false, "block-all-mixed-content": false }, "reportOnly": { "upgrade-insecure-requests": false, "block-all-mixed-content": false } },
  csrf_check_origin: true,
  embedded: false,
  env_public_prefix: "PUBLIC_",
  env_private_prefix: "",
  hooks: null,
  // added lazily, via `get_hooks`
  preload_strategy: "modulepreload",
  root: Root,
  service_worker: false,
  templates: {
    app: ({ head, body, assets: assets2, nonce, env }) => '<!DOCTYPE html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<link rel="icon" href="' + assets2 + '/favicon.png" />\n		<meta name="viewport" content="width=device-width, initial-scale=1" />\n		<meta name="color-scheme" content="dark light" />\n		' + head + '\n\n	</head>\n	<body>\n		<div style="display: contents">' + body + "</div>\n		<!--script><\/script-->\n	</body>\n\n<style>\nbody {\n				--bg-1: hsl(0, 0%, 100%);\n				--bg-2: hsl(206, 20%, 90%);\n				--bg-3: hsl(206, 20%, 80%);\n				--fg-1: hsl(0, 0%, 13%);\n				--fg-2: hsl(0, 0%, 20%);\n				--fg-2: hsl(0, 0%, 30%);\n				--link: hsl(208, 77%, 47%);\n				--link-hover: hsl(208, 77%, 55%);\n				--link-active: hsl(208, 77%, 40%);\n				--border-radius: 4px;\n				--font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell,\n					'Open Sans', 'Helvetica Neue', sans-serif;\n				--font-mono: ui-monospace, 'Cascadia Code', 'Source Code Pro', Menlo, Consolas,\n					'DejaVu Sans Mono', monospace;\n				background: var(--bg-1);\n				color: var(--fg-1);\n				font-family: var(--font);\n				line-height: 1.5;\n				margin: 1rem;\n				height: calc(100vh - 2rem);\n}\n\n			h1,\n			h2,\n			h3,\n			h4,\n			h5,\nh6 {\n				font-weight: normal;\n				font-variant-numeric: tabular-nums;\n				line-height: 1.1;\n}\n\n:is(h1, h2, h3, h4, h5, h6, p) {\n				margin: 1rem 0.1rem;\n}\n\nlabel {\n				margin: 0.5rem 0.1rem;\n}\n\n:is(h1, h2, h3, h4, h5, h6, p, label):first-child {\n				margin-top: 0;\n}\n\n:is(h1, h2, h3, h4, h5, h6, p, label):last-child {\n				margin-bottom: 0;\n}\n\na {\n				color: var(--link);\n}\n\na:hover {\n				color: var(--link-hover);\n}\n\na:active {\n				color: var(--link-active);\n}\n\nlabel {\n				display: flex;\n				gap: 0.5rem;\n				align-items: center;\n}\n\nlabel input {\n				margin: 0;\n}\n\n			button,\n			input,\nselect {\n				font-family: inherit;\n				font-size: inherit;\n}\n\nbutton {\n				background: var(--link);\n				color: var(--bg-1);\n				padding: 0.5rem 1rem;\n				border: none;\n				border-radius: var(--border-radius);\n}\n\nbutton:hover {\n				background: var(--link-hover);\n}\n\nbutton:active {\n				background: var(--link-active);\n}\n\n:is(button, button:hover, button:active):disabled {\n				background: var(--link);\n				filter: grayscale(1);\n				opacity: 0.4;\n}\n\n			input,\n			textarea,\nselect {\n				padding: 0.5rem;\n				border: 1px solid var(--bg-2);\n				border-radius: var(--border-radius);\n				box-sizing: border-box;\n}\n\n			input,\ntextarea {\n				background: var(--bg-1);\n				color: inherit;\n}\n\nselect:not([multiple]) {\n				background: var(--bg-2);\n}\n\ntextarea {\n				font-family: var(--font-mono);\n				font-size: 0.9rem;\n}\n\nform {\n				display: flex;\n				flex-direction: column;\n				gap: 1rem;\n				align-items: baseline;\n}\n\nul:has(li):has(form) {\n				list-style: none;\n				padding: 0;\n}\n\nli form {\n				flex-direction: row;\n				gap: 0.5rem;\n				margin: 0.5rem 0;\n}\n\nnav {\n				position: relative;\n				display: flex;\n				gap: 1em;\n				padding: 1em;\n				background: var(--bg-2);\n				z-index: 2;\n				margin: 0 0 1em 0;\n				border-radius: var(--border-radius);\n}\n\nnav a {\n				text-decoration: none;\n}\n\nnav a[aria-current='true'] {\n				border-bottom: 2px solid;\n}\n\nul:has(form) {\n				list-style: none;\n				padding: 0;\n}\n\nprogress {\n				margin: 0.5rem 0;\n}\n\nprogress:first-child {\n				margin-top: 0;\n}\n\nprogress:lsat-child {\n				margin-bottom: 0;\n}\n\n.error {\n				color: red;\n}\n\ncode {\n				background: var(--bg-2);\n				font-family: var(--font-mono);\n				font-size: 0.9em;\n				padding: 0.15rem 0.3rem;\n				border-radius: var(--border-radius);\n}\n\nul.todos {\n				padding: 0;\n}\n\nul.todos li:not(:has(> form)),\nul.todos li form {\n				position: relative;\n				display: flex;\n				align-items: center;\n				padding: 0.5em 0.5em 0.5em 1em;\n				margin: 0 0 0.5em 0;\n				gap: 0.5em;\n				border-radius: 5px;\n				user-select: none;\n				background: var(--bg-1);\n				filter: drop-shadow(2px 3px 6px rgba(0, 0, 0, 0.1));\n				transition: filter 0.2s, opacity 0.2s;\n}\n\nul.todos .done {\n				filter: none;\n				opacity: 0.4;\n}\n\nul.todos button {\n				border: none;\n				background-color: transparent;\n				background-repeat: no-repeat;\n				background-position: 50% 50%;\n				background-size: 1rem 1rem;\n				cursor: pointer;\n				width: 3em;\n				height: 3em;\n				margin: -0.5em -0.5em -0.5em 0;\n				aspect-ratio: 1;\n				opacity: 0.5;\n				transition: opacity 0.2s;\n}\n\nul.todos button:hover {\n				opacity: 1;\n}\n\nbody.dark {\n				--bg-1: hsl(0, 0%, 18%);\n				--bg-2: hsl(0, 0%, 30%);\n				--bg-3: hsl(0, 0%, 40%);\n				--fg-1: hsl(0, 0%, 90%);\n				--fg-2: hsl(0, 0%, 70%);\n				--fg-3: hsl(0, 0%, 60%);\n				--link: hsl(206, 96%, 72%);\n				--link-hover: hsl(206, 96%, 78%);\n				--link-active: hsl(206, 96%, 64%);\n}\n</style>\n</html>\n",
    error: ({ status, message }) => '<!doctype html>\n<html lang="en">\n	<head>\n		<meta charset="utf-8" />\n		<title>' + message + `</title>

		<style>
			body {
				--bg: white;
				--fg: #222;
				--divider: #ccc;
				background: var(--bg);
				color: var(--fg);
				font-family:
					system-ui,
					-apple-system,
					BlinkMacSystemFont,
					'Segoe UI',
					Roboto,
					Oxygen,
					Ubuntu,
					Cantarell,
					'Open Sans',
					'Helvetica Neue',
					sans-serif;
				display: flex;
				align-items: center;
				justify-content: center;
				height: 100vh;
				margin: 0;
			}

			.error {
				display: flex;
				align-items: center;
				max-width: 32rem;
				margin: 0 1rem;
			}

			.status {
				font-weight: 200;
				font-size: 3rem;
				line-height: 1;
				position: relative;
				top: -0.05rem;
			}

			.message {
				border-left: 1px solid var(--divider);
				padding: 0 0 0 1rem;
				margin: 0 0 0 1rem;
				min-height: 2.5rem;
				display: flex;
				align-items: center;
			}

			.message h1 {
				font-weight: 400;
				font-size: 1em;
				margin: 0;
			}

			@media (prefers-color-scheme: dark) {
				body {
					--bg: #222;
					--fg: #ddd;
					--divider: #666;
				}
			}
		</style>
	</head>
	<body>
		<div class="error">
			<span class="status">` + status + '</span>\n			<div class="message">\n				<h1>' + message + "</h1>\n			</div>\n		</div>\n	</body>\n</html>\n"
  },
  version_hash: "1lhfys2"
};
async function get_hooks() {
  return {};
}
export {
  assets as a,
  base as b,
  options as c,
  set_private_env as d,
  prerendering as e,
  set_public_env as f,
  get_hooks as g,
  set_safe_public_env as h,
  set_assets as i,
  set_building as j,
  set_manifest as k,
  set_prerendering as l,
  set_read_implementation as m,
  override as o,
  public_env as p,
  reset as r,
  safe_public_env as s
};
