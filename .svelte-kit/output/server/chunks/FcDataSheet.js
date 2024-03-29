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
  )}><path fill="${"#90CAF9"}" d="${"M39 16v7h-6v-7h-2v7h-6v-7h-2v7h-7v2h7v6h-7v2h7v6h-7v2h25V16h-2zm0 9v6h-6v-6h6zm-14 0h6v6h-6v-6zm0 8h6v6h-6v-6zm8 6v-6h6v6h-6z"}"></path><path fill="${"#00BCD4"}" d="${"M40 8H8v32h8V16h24z"}"></path><path fill="${"#0097A7"}" d="${"M7 7v34h10V17h24V7H7zm2 16v-6h6v6H9zm6 2v6H9v-6h6zm2-16h6v6h-6V9zm8 0h6v6h-6V9zM15 9v6H9V9h6zM9 39v-6h6v6H9zm30-24h-6V9h6v6z"}"></path></svg>`;
});
export {
  Component as default
};
