import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M7.71 3h6.79l.51.5v10l-.5.5h-13l-.5-.5v-11l.5-.5h5l.35.15.85.85zm6.28 10v-1.51l.01-4v-1.5H7.7l-.86.86-.35.15H2v6h11.99zm-6.5-8h6.5l.01-.99H7.5l-.36-.15-.85-.85H2v3h4.28l.86-.86.35-.15zm2.29 4.07L8.42 7.7l.74-.69 2.22 2.22v.71l-2.29 2.21-.7-.72 1.4-1.35H8.42a2 2 0 0 0-1.35.61A1.8 1.8 0 0 0 6.54 12h-1a2.76 2.76 0 0 1 .81-2 3 3 0 0 1 2-.93h1.43z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
