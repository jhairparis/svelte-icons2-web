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
  )}><g data-name="${"Parking 1"}"><path d="${"M12 21.933A9.933 9.933 0 1 1 21.933 12 9.944 9.944 0 0 1 12 21.933Zm0-18.866A8.933 8.933 0 1 0 20.933 12 8.943 8.943 0 0 0 12 3.067Z"}"></path><path d="${"M12.569 8.5h-1.75a.749.749 0 0 0-.75.75v5.74a.5.5 0 0 0 .5.5.5.5 0 0 0 .5-.5V13.5h1.5a2.5 2.5 0 0 0 0-5Zm0 4h-1.5v-3h1.5a1.5 1.5 0 0 1 0 3Z"}"></path></g></svg>`;
});
export {
  Component as default
};