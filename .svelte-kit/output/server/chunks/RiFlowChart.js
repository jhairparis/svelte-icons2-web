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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6 21.5A3.5 3.5 0 1 1 9.355 17H15v-2h2V9.242L14.757 7H9v2H3V3h6v2h5.757L18 1.756 22.243 6 19 9.241V15h2v6h-6v-2H9.355A3.501 3.501 0 0 1 6 21.5zm0-5a1.5 1.5 0 1 0 .001 3.001A1.5 1.5 0 0 0 6 16.5zm13 .5h-2v2h2v-2zM18 4.586 16.586 6 18 7.414 19.414 6 18 4.586zM7 5H5v2h2V5z"}"></path></svg>`;
});
export {
  Component as default
};
