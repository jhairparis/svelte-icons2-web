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
  )}><path stroke="${"#000"}" stroke-linecap="${"round"}" stroke-linejoin="${"round"}" stroke-width="${"2"}" d="${"M12 4V2m0 20v-2m8-8h2M2 12h2m13.657-5.657L19.07 4.93M4.93 19.07l1.414-1.414m0-11.314L4.93 4.93m14.14 14.14-1.414-1.414M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10z"}"></path></svg>`;
});
export {
  Component as default
};
