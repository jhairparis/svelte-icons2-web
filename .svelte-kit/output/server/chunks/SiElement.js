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
  )}><path d="${"M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm-1.314 4.715c3.289 0 5.956 2.66 5.956 5.943a.879.879 0 0 1-1.758 0 4.194 4.194 0 0 0-4.198-4.189.878.878 0 1 1 0-1.754zm-5.092 9.504a.879.879 0 0 1-.879-.877 5.95 5.95 0 0 1 5.956-5.945.878.878 0 1 1 0 1.753 4.195 4.195 0 0 0-4.198 4.191.88.88 0 0 1-.879.878zm7.735 5.067c-3.29 0-5.957-2.662-5.957-5.944a.88.88 0 0 1 1.758 0 4.194 4.194 0 0 0 4.199 4.189.879.879 0 1 1 0 1.755zm0-2.683a.88.88 0 0 1-.88-.876.88.88 0 0 1 .88-.878 4.195 4.195 0 0 0 4.199-4.19.878.878 0 0 1 1.758 0c0 3.282-2.667 5.944-5.957 5.944z"}"></path></svg>`;
});
export {
  Component as default
};