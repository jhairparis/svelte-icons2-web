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
  )}><path fill="${"#333"}" fill-rule="${"evenodd"}" d="${"M8.421 0 5 15.127h2.138L10.56 0H8.421Zm8.993 8.873-1.496 6.225h2.138l1.496-6.225h-2.138Zm-3.635 0L10.36 24h2.138l3.42-15.127H13.78Zm-3.647 0-1.497 6.225h2.138l1.496-6.225h-2.137Z"}"></path></svg>`;
});
export {
  Component as default
};