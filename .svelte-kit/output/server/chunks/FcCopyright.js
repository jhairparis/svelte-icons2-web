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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#9C27B0"}"></circle><path fill="${"#E1BEE7"}" d="${"M33.5 28.1c-.6 6.4-5.6 8.1-9.3 8.1-3.1 0-9.6-1.6-9.6-11.2v-1.5c0-8.7 5.5-11.2 9.7-11.2 8.5 0 9.2 7 9.3 8.2h-4.8c-.3-3.6-2.2-4.3-4.5-4.3-1.6 0-4.8.5-4.8 7.2V25c-.1 7.5 3.8 7.2 4.7 7.2 4.3 0 4.3-2.9 4.6-4.1h4.7z"}"></path></svg>`;
});
export {
  Component as default
};
