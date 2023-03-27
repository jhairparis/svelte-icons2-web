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
  )}><path d="${"M382.1 21.72c-8.5 0-16.9.92-25.2 2.58-33.2 6.64-63.3 25.83-78.8 41.36-3.6 3.53-6 9.78-6.8 18.63-.8 8.85.2 19.91 2.2 31.41 2.7 15.3 7.2 31.2 11.6 45.2l36.3-50.8.5-.6c5.9-5.8 13.9-9.3 22.7-9.9 2.9-.21 5.9-.11 9 .33 12.2 1.77 25.2 8.57 37.6 20.87 12.3 12.4 19.1 25.4 20.9 37.6 1.7 12.3-1.9 23.9-9.6 31.7l-.6.5-50.8 36.3c14 4.4 29.9 8.9 45.2 11.6 11.5 2 22.6 3 31.4 2.2 8.9-.8 15.1-3.2 18.6-6.8 15.6-15.5 34.8-45.6 41.4-78.8 6.6-33.1 1.8-68.91-30.1-100.74-23.8-23.87-49.9-32.54-75.5-32.64zm-36.3 95.78c-4.6.3-8.2 2-10.8 4.5l-51.5 72.1 34.4 34.4L390 177c3.3-3.5 5.3-8.7 4.3-16-1.1-7.6-5.6-17.2-15.9-27.4-10.2-10.3-19.8-14.8-27.4-15.9-1.4-.2-2.7-.2-4-.2zm-74.2 90.3L18 461.5V494h32.53L304.2 240.4z"}"></path></svg>`;
});
export {
  Component as default
};