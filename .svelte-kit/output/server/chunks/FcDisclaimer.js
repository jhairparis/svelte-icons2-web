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
  )}><g fill="${"#FFCC80"}"><path d="${"M13 22H8v-8.5c0-1.4 1.1-2.5 2.5-2.5s2.5 1.1 2.5 2.5V22zm7 0h-5V7.5C15 6.1 16.1 5 17.5 5S20 6.1 20 7.5V22zm7 0h-5V5.5C22 4.1 23.1 3 24.5 3S27 4.1 27 5.5V22zm7 0h-5V8.5C29 7.1 30.1 6 31.5 6S34 7.1 34 8.5V22zm-1.9 21-5-5 10-10c1.4-1.4 3.6-1.4 4.9 0 1.4 1.4 1.4 3.6 0 4.9L32.1 43z"}"></path><path d="${"M29 21c0 .6-.4 1-1 1s-1-.4-1-1h-5c0 .6-.4 1-1 1s-1-.4-1-1h-5c0 .6-.4 1-1 1s-1-.4-1-1H8v16c0 4.4 3.6 8 8 8h11.2c3.7 0 6.8-3 6.8-6.8V21h-5z"}"></path></g><g fill="${"#F44336"}"><path d="${"m15.413 28.971 2.474-2.474 10.605 10.605-2.474 2.474z"}"></path><path d="${"m25.993 26.504 2.475 2.474-10.605 10.605-2.475-2.474z"}"></path></g></svg>`;
});
export {
  Component as default
};