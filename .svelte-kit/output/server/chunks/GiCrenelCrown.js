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
  )}><path d="${"M256 68.02 169.7 240.7l14.8 44.5-17 5.6-15.2-45.6-66.42-53-12.18 60.9 12.62 12.6-12.66 12.6-15.21-15.2-30.53-20.4 25.15 163.4 39.17-65.2 89.66 35.8 30.9 46.4h86.4l30.9-46.4 89.7-35.8 39.1 65.2 25.2-163.4-30.6 20.4-15.2 15.2-12.6-12.6 12.6-12.6-12.2-60.9-66.4 53-15.2 45.6-17-5.6 14.8-44.5zm0 122.58 55.7 92.8 1.9 3.2-17.5 70-20.4 20.3h-39.4l-20.4-20.3-17.5-70zm0 34.8-38.4 64 14.5 58 11.6 11.7h24.6l11.6-11.7 14.5-58z"}"></path></svg>`;
});
export {
  Component as default
};