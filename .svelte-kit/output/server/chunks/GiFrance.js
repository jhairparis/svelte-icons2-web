import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M283.4 19.83c-3.2 0-31.2 5.09-31.2 5.09-1.3 41.61-30.4 78.48-90.3 84.88l-12.8-23.07-25.1 2.48 11.3 60.09-113.79-4.9 12.2 41.5C156.3 225.4 150.7 338.4 124 439.4c47 53 141.8 47.8 186 43.1 3.1-62.2 52.4-64.5 135.9-32.2 11.3-17.6 18.8-36 44.6-50.7l-46.6-139.5-27.5 6.2c11-21.1 32.2-49.9 50.4-63.4l15.6-86.9c-88.6-6.3-146.4-46.36-199-96.17z"}"></path></svg>`;
});
export {
  Component as default
};