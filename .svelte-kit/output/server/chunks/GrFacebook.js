import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#3B5998"}" fill-rule="${"evenodd"}" d="${"M23 0H1a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h11.75v-9h-3v-3.75h3v-3c0-3.1 1.963-4.625 4.728-4.625 1.324 0 2.463.099 2.794.142v3.24l-1.917.001c-1.504 0-1.855.715-1.855 1.763v2.479h3.75L19.5 15h-3l.06 9H23a1 1 0 0 0 1-1V1a1 1 0 0 0-1-1"}"></path></svg>`;
});
export {
  Component as default
};
