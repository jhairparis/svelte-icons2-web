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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"m16 2 5 5v14.008a.993.993 0 0 1-.993.992H3.993A1 1 0 0 1 3 21.008V2.992C3 2.444 3.445 2 3.993 2H16zm1.657 10L14.12 8.464 12.707 9.88 14.828 12l-2.12 2.121 1.413 1.415L17.657 12zM6.343 12l3.536 3.536 1.414-1.415L9.172 12l2.12-2.121L9.88 8.464 6.343 12z"}"></path></svg>`;
});
export {
  Component as default
};
