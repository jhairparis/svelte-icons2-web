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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M5.5 20a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 5.5 20zm13 0a1.5 1.5 0 1 1-.001 3.001A1.5 1.5 0 0 1 18.5 20zM2.172 1.757l3.827 3.828V17H20v2H5a1 1 0 0 1-1-1V6.413L.756 3.172l1.415-1.415zM16 3a1 1 0 0 1 1 1v2h2.993C20.55 6 21 6.456 21 6.995v8.01a1 1 0 0 1-1.007.995H8.007A1.007 1.007 0 0 1 7 15.005v-8.01A1 1 0 0 1 8.007 6h2.992L11 4a1 1 0 0 1 1-1h4zm-5 5h-1v6h1V8zm7 0h-1v6h1V8zm-3-3h-2v1h2V5z"}"></path></svg>`;
});
export {
  Component as default
};
