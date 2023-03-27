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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M6.05 8.05a7.007 7.007 0 0 0 0 9.9C7.42 19.32 9.21 20 11 20s3.58-.68 4.95-2.05C19.43 14.47 20 4 20 4S9.53 4.57 6.05 8.05zm8.49 8.49c-.95.94-2.2 1.46-3.54 1.46-.89 0-1.73-.25-2.48-.68.92-2.88 2.62-5.41 4.88-7.32-2.63 1.36-4.84 3.46-6.37 6-1.48-1.96-1.35-4.75.44-6.54C9.21 7.72 14.04 6.65 17.8 6.2c-.45 3.76-1.52 8.59-3.26 10.34z"}"></path></svg>`;
});
export {
  Component as default
};