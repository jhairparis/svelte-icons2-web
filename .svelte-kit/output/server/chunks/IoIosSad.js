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
  )}><path d="${"M256 48C141.1 48 48 141.1 48 256c0 114.7 93.3 208 208 208 114.9 0 208-93.1 208-208 0-114.7-93.3-208-208-208zm-73.9 152.1c14.8-1.2 27 11.1 25.9 25.9-.9 11.6-10.3 21.1-22 22-14.8 1.2-27-11.1-25.9-25.9.9-11.7 10.3-21.1 22-22zm-.7 151.9c-11.5 0-19.3-11.8-14.7-22.4 15-34.5 49.2-58.6 89.3-58.6s74.2 24.1 89.3 58.6c4.6 10.6-3.1 22.4-14.7 22.4 0 0-34.7-4-73.1-4-38.5 0-76.1 4-76.1 4zm148.5-104.1c-14.8 1.2-27-11.1-25.9-25.9.9-11.6 10.3-21.1 22-22 14.8-1.2 27 11.1 25.9 25.9-.9 11.7-10.3 21.1-22 22z"}"></path></svg>`;
});
export {
  Component as default
};