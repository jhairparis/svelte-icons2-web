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
  )}><path d="${"M12 14.5a2.5 2.5 0 1 1 2.5-2.5 2.5 2.5 0 0 1-2.5 2.5Zm0-4a1.5 1.5 0 1 0 1.5 1.5 1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M21.435 11.505h-1.46a7.98 7.98 0 0 0-7.48-7.48v-1.46a.508.508 0 0 0-.5-.5.515.515 0 0 0-.5.5v1.46a8 8 0 0 0-7.48 7.48h-1.45a.5.5 0 1 0 0 1h1.45a8.012 8.012 0 0 0 7.48 7.48v1.45a.508.508 0 0 0 .5.5.5.5 0 0 0 .5-.5v-1.45a8 8 0 0 0 7.48-7.48h1.46a.5.5 0 0 0 0-1ZM12 19.005a7 7 0 1 1 7-7 7.021 7.021 0 0 1-7 7Z"}"></path></svg>`;
});
export {
  Component as default
};