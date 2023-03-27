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
  )}><path d="${"M19.48 12.63c.643-.372.643-1.01 0-1.38l-4.769-2.755c-.642-.37-1.195-.052-1.195.69v5.508c0 .742.553 1.06 1.195.69zM12 2.724a9.275 9.275 0 1 1-.001 18.55 9.275 9.275 0 0 1 0-18.55M12 0C5.383 0 .002 5.383.002 12s5.382 12 12 12S24 18.617 24 12 18.617 0 12 0z"}"></path></svg>`;
});
export {
  Component as default
};