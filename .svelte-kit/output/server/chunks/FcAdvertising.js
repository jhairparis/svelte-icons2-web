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
  )}><path fill="${"#90CAF9"}" d="${"M17.4 33H15v-4h4l.4 1.5c.3 1.3-.7 2.5-2 2.5zM37 36s-11.8-7-18-7V15c5.8 0 18-7 18-7v28z"}"></path><g fill="${"#283593"}"><circle cx="${"9"}" cy="${"22"}" r="${"5"}"></circle><path d="${"M40 19h-3v6h3c1.7 0 3-1.3 3-3s-1.3-3-3-3zM18.6 41.2c-.9.6-2.5 1.2-4.6 1.4-.6.1-1.2-.3-1.4-1L8.2 27.9S17 21.7 17 29c0 5.5 1.5 8.4 2.2 9.5.5.7.5 1.6 0 2.3-.2.2-.4.3-.6.4z"}"></path></g><path fill="${"#3F51B5"}" d="${"M9 29h10V15H9c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2z"}"></path><path fill="${"#42A5F5"}" d="${"M38 38c-1.1 0-2-.9-2-2V8c0-1.1.9-2 2-2s2 .9 2 2v28c0 1.1-.9 2-2 2z"}"></path></svg>`;
});
export {
  Component as default
};
