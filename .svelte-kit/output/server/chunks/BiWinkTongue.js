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
  )}><path d="${"M15.5 9c-2 0-2.5 2-2.5 2h5s-.501-2-2.5-2z"}"></path><path d="${"M12 2C6.486 2 2 6.486 2 12s4.486 10 10 10 10-4.486 10-10S17.514 2 12 2zm-2 16v-3h4v3c0 1.103-.897 2-2 2s-2-.897-2-2zm5.856 1.005c.085-.323.144-.656.144-1.005v-1.499C17.589 15.028 18 13 18 13H6s.412 2.028 2 3.501V18c0 .349.059.682.144 1.005A8.005 8.005 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8a8.005 8.005 0 0 1-4.144 7.005z"}"></path><circle cx="${"8.5"}" cy="${"9.5"}" r="${"1.5"}"></circle></svg>`;
});
export {
  Component as default
};