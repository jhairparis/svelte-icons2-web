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
  )}><path fill="${"#546E7A"}" d="${"M12 40V10h20c2.2 0 4 1.8 4 4v26c0 2.2-1.8 4-4 4H16c-2.2 0-4-1.8-4-4z"}"></path><path fill="${"#4FC3F7"}" d="${"M32 13H16c-.6 0-1 .4-1 1v8c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-8c0-.6-.4-1-1-1z"}"></path><path fill="${"#B3E5FC"}" d="${"M19 30h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm-12 5h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1zm6 0h-2c-.6 0-1-.4-1-1v-1c0-.6.4-1 1-1h2c.6 0 1 .4 1 1v1c0 .6-.4 1-1 1z"}"></path><path fill="${"#37474F"}" d="${"M16 10h-4V4c0-1.1.9-2 2-2s2 .9 2 2v6z"}"></path></svg>`;
});
export {
  Component as default
};
