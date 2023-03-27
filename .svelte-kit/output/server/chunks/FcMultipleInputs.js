import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#90A4AE"}" d="${"M40 35v5H8v-5H4v5c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4v-5h-4z"}"></path><g fill="${"#1565C0"}"><path d="${"M24 23.4 17 15h14z"}"></path><path d="${"M22 4h4v14h-4zm9.5 22.9-.7 1.1 3.5 1.9.6-1.2c1.6-3 2.6-4.7 3.5-5.2.9-.5 2.6-.5 5.6-.5v-4c-7.7 0-8.4.4-12.5 7.9z"}"></path><path d="${"m38.4 31-9 4L28 25zm-21.9-4.1.6 1.2-3.5 1.9-.6-1.2c-1.6-3-2.6-4.7-3.5-5.2C8.7 23 7 23 4 23v-4c7.7 0 8.4.4 12.5 7.9z"}"></path><path d="${"m20 25-1.4 10-9-4z"}"></path></g></svg>`;
});
export {
  Component as default
};