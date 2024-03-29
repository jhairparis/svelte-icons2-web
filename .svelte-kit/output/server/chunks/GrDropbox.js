import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#007EE5"}" fill-rule="${"evenodd"}" d="${"M7.06 1 0 5.61l4.882 3.908L12 5.123 7.06 1ZM0 13.428l7.06 4.61L12 13.914 4.882 9.52 0 13.43Zm12 .486 4.94 4.124 7.06-4.61-4.882-3.91L12 13.914ZM24 5.61 16.94 1 12 5.124l7.118 4.395L24 5.609ZM12.014 14.8 7.06 18.913l-2.12-1.385v1.552l7.074 4.243 7.075-4.243v-1.552l-2.12 1.385-4.955-4.112Z"}"></path></svg>`;
});
export {
  Component as default
};
