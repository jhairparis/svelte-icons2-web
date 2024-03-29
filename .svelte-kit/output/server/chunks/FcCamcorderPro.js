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
  )}><path fill="${"#37474F"}" d="${"M27 8h10v4H27z"}"></path><path fill="${"#607D8B"}" d="${"M27 8h-9.7c-1.5 0-2.8.8-3.5 2.1l-3.3 6L14 18l3.3-6H27v7.2h4V12c0-2.2-1.8-4-4-4z"}"></path><path fill="${"#607D8B"}" d="${"M30 40H6c-2.2 0-4-1.8-4-4V20c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v16c0 2.2-1.8 4-4 4zm8-5 5 5h3V18h-3l-5 5v12z"}"></path><path fill="${"#546E7A"}" d="${"M22 35H8c-1.1 0-2-.9-2-2V23c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v10c0 1.1-.9 2-2 2z"}"></path><path fill="${"#455A64"}" d="${"M34 23h4v12h-4z"}"></path><path fill="${"#263238"}" d="${"M41 13h-4c-.6 0-1-.4-1-1V8c0-.6.4-1 1-1h4c1.7 0 3 1.3 3 3s-1.3 3-3 3z"}"></path><path fill="${"#03A9F4"}" d="${"M8 23h14v10H8z"}"></path><path fill="${"#4FC3F7"}" d="${"M13.5 25.5 9 32h9z"}"></path><g fill="${"#B3E5FC"}"><circle cx="${"19.5"}" cy="${"25.5"}" r="${"1.5"}"></circle><path d="${"M17.5 27.6 14 32h7z"}"></path></g></svg>`;
});
export {
  Component as default
};
