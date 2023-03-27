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
  )}><path d="${"M256.1 34.05c-17.9 0-35.6 4.64-48 12.91-12.4 8.28-19.7 19.1-19.7 35.1 0 6.15 4.6 32.04 12 61.34 7.3 29.2 17.1 63.6 26.8 92.7l4.9 14.7h-94.2c-16 0-33.3 8.2-46.35 21.3-10.06 10-17.27 22.7-20.06 35.2H440.6c-2.8-12.5-10-25.2-20.1-35.2-13-13.1-30.3-21.3-46.3-21.3H280l4.9-14.7c9.7-29.1 19.5-63.5 26.8-92.7 7.4-29.3 12-55.19 12-61.34 0-16-7.3-26.83-19.7-35.1-12.4-8.27-30.1-12.91-47.9-12.91zM89.87 329.6v36.7H422.2v-36.7zM41 432v46h430v-46z"}"></path></svg>`;
});
export {
  Component as default
};