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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M17 4a5 5 0 1 1-.892 9.92l-2.651 1.989A3.999 3.999 0 0 1 9.5 20.5a3.999 3.999 0 0 1-3.966-4.524L1.708 14.43l.75-1.854 3.826 1.545a3.996 3.996 0 0 1 3.696-1.592l2.042-3.061A5 5 0 0 1 17 4zM9.5 14.5c-.464 0-.892.158-1.231.424l1.606.649a1 1 0 1 1-.75 1.854L7.52 16.78a2.001 2.001 0 0 0 3.981-.279 2 2 0 0 0-2-2zm3.364-2.69-.983 1.476c.284.21.54.458.758.735l1.36-1.02a5.056 5.056 0 0 1-1.135-1.191zM17 6a3 3 0 1 0 0 6 3 3 0 0 0 0-6zm0 1a2 2 0 1 1 .001 3.999A2 2 0 0 1 17 7z"}"></path></svg>`;
});
export {
  Component as default
};
