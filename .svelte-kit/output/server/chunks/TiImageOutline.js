import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.5 7.999c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5m0-1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zm7.5 5c.45.051 1.27 1.804 1.779 4.001H6.387c.434-1.034 1.055-2.001 1.612-2.001.806 0 1.125.185 1.53.42.447.258 1.006.58 1.97.58 1.138 0 1.942-.885 2.653-1.666.627-.687 1.218-1.334 1.848-1.334m0-1c-2 0-3 3-4.5 3s-1.499-1-3.5-1c-2 0-3.001 4-3.001 4H19s-1-6-3-6zM22 6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6zm-2 12H4V6h16.003L20 18z"}"></path></svg>`;
});
export {
  Component as default
};
