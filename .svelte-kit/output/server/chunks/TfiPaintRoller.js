import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15 2V0H2v2h-.516C.666 2 0 2.675 0 3.505v2.99C0 7.325.666 8 1.484 8h6.024c.275 0 .5.225.5.5V10H7v7h3v-7h-.992V8.5c0-.827-.673-1.5-1.5-1.5H1.484A.496.496 0 0 1 1 6.495v-2.99C1 3.227 1.218 3 1.484 3H2v3h13V3h1V2h-1zM9 16H8v-5h1v5zm5-11H3V1h11v4z"}"></path></svg>`;
});
export {
  Component as default
};