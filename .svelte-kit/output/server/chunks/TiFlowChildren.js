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
  )}><path d="${"M17 16a2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-3.025A4.954 4.954 0 0 0 11 13h3.184A2.99 2.99 0 0 0 17 15a3 3 0 1 0 0-6 2.99 2.99 0 0 0-2.816 2H11c-1.654 0-3-1.346-3-3v-.184A2.99 2.99 0 0 0 10 5a3 3 0 1 0-6 0 2.99 2.99 0 0 0 2 2.816V15c0 2.757 2.243 5 5 5h3.184A2.99 2.99 0 0 0 17 22a3 3 0 1 0 0-6zm0-5a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zM7 4a1.001 1.001 0 1 1-1 1c0-.551.448-1 1-1zm10 16a1.001 1.001 0 0 1 0-2 1.001 1.001 0 0 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
