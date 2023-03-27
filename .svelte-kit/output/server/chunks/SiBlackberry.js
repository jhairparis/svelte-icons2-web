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
  )}><path d="${"M2.05 3.54 1.17 7.7h3.28c2.52 0 3.28-1.23 3.28-2.34 0-.82-.47-1.82-2.52-1.82H2.05m8.49 0L9.66 7.7h3.28c2.56 0 3.28-1.23 3.28-2.34 0-.82-.47-1.82-2.52-1.82h-3.16m7.78 3.69-.93 4.16h3.28c2.57 0 3.33-1.17 3.33-2.34 0-.82-.47-1.82-2.5-1.82h-3.18M.88 9.8 0 13.96h3.28c2.57 0 3.28-1.23 3.28-2.34 0-.82-.47-1.82-2.52-1.82H.88m8.55 0-.93 4.16h3.27c2.57 0 3.34-1.23 3.34-2.34 0-.82-.47-1.82-2.52-1.82H9.42m7.67 3.93-.87 4.15h3.28c2.5 0 3.27-1.17 3.27-2.34 0-.82-.47-1.81-2.51-1.81h-3.17M8.2 16.3l-.88 4.16h3.28c2.51 0 3.27-1.23 3.27-2.34 0-.82-.46-1.82-2.51-1.82H8.2Z"}"></path></svg>`;
});
export {
  Component as default
};