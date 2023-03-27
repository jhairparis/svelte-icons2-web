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
  )}><path d="${"M256 46c-27.713 84-55.438 84-55.438 140 0 0 27.725 28 55.438 28 27.712 0 55.438-28 55.438-28 0-56-27.726-56-55.438-140zm3.25 168.063A110.852 112 0 0 0 145.156 326a110.852 112 0 0 0 221.688 0A110.852 112 0 0 0 259.25 214.062zM108.28 347.5c-48 28-34.137 52.25-92.28 118.5 85.856-17.75 99.72 6.5 147.72-21.5 0 0 10.137-38.25-3.72-62.5-13.856-24.25-51.72-34.5-51.72-34.5zm295.44 0S365.856 357.75 352 382c-13.856 24.25-3.72 62.5-3.72 62.5 48 28 61.863 3.75 147.72 21.5-58.144-66.25-44.28-90.5-92.28-118.5z"}"></path></svg>`;
});
export {
  Component as default
};