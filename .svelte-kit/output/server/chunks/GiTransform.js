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
  )}><path d="${"M128 32a96 96 0 0 0-96 96 96 96 0 0 0 96 96 96 96 0 0 0 30.285-4.986L140.29 201.02l64.353-64.352 6.363-6.363 11.86 11.86A96 96 0 0 0 224 128a96 96 0 0 0-96-96zm83.006 123.76-45.26 45.26L252.73 288l-23.468 23.467 115.24 23.047-23.05-115.24-23.466 23.466-86.98-86.98zM353.556 288l13.89 69.46L288 341.57V480h192V288H353.555z"}"></path></svg>`;
});
export {
  Component as default
};