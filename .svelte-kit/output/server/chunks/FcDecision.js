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
  )}><g fill="${"#FFCC80"}"><circle cx="${"38"}" cy="${"26"}" r="${"4"}"></circle><circle cx="${"10"}" cy="${"26"}" r="${"4"}"></circle><path d="${"M39 19c0-12.7-30-8.3-30 0v10c0 8.3 6.7 15 15 15s15-6.7 15-15V19z"}"></path><path d="${"M24 4C15.2 4 8 11.2 8 20v3.5l2.1.6V19l19.5-6.3 8.2 6.3v5.1l2.1-.6V20C40 12.5 34.6 4 24 4z"}"></path></g><path fill="${"#0277BD"}" d="${"M21.8 29.6c0-6.6 5.1-6.2 5.1-10.2 0-1-.3-3-2.9-3-2.8 0-3 2.3-3 2.8h-3.8c0-1 .4-6 6.8-6 6.5 0 6.7 5.1 6.7 6 0 4.9-5.4 5.6-5.4 10.3h-3.5zm-.3 4.9c0-.3.1-2.1 2.1-2.1s2.2 1.8 2.2 2.1c0 .6-.3 2-2.2 2-1.8 0-2.1-1.4-2.1-2z"}"></path></svg>`;
});
export {
  Component as default
};