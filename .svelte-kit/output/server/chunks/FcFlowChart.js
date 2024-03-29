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
  )}><path fill="${"#CFD8DC"}" d="${"M35 36h4V22H26v-9h-4v9H9v14h4V26h9v10h4V26h9z"}"></path><path fill="${"#3F51B5"}" d="${"M17 6h14v10H17z"}"></path><path fill="${"#00BCD4"}" d="${"M32 32h10v10H32zM6 32h10v10H6zm13 0h10v10H19z"}"></path></svg>`;
});
export {
  Component as default
};
