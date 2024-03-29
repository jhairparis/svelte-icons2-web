import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#90CAF9"}" d="${"M7 7v34h34V7H7zm32 8h-6V9h6v6zm-14 0V9h6v6h-6zm6 2v6h-6v-6h6zm-8-2h-6V9h6v6zm0 2v6h-6v-6h6zm-8 6H9v-6h6v6zm0 2v6H9v-6h6zm2 0h6v6h-6v-6zm6 8v6h-6v-6h6zm2 0h6v6h-6v-6zm0-2v-6h6v6h-6zm8-6h6v6h-6v-6zm0-2v-6h6v6h-6zM15 9v6H9V9h6zM9 33h6v6H9v-6zm24 6v-6h6v6h-6z"}"></path></svg>`;
});
export {
  Component as default
};
