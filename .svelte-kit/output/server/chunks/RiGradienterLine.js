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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M2.05 13h2.012a8.001 8.001 0 0 0 15.876 0h2.013c-.502 5.053-4.766 9-9.951 9-5.185 0-9.449-3.947-9.95-9zm0-2c.5-5.053 4.764-9 9.95-9s9.449 3.947 9.95 9h-2.012a8.001 8.001 0 0 0-15.876 0H2.049zM12 14a2 2 0 1 1 0-4 2 2 0 0 1 0 4z"}"></path></svg>`;
});
export {
  Component as default
};
