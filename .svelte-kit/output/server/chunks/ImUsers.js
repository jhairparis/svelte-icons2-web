import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 18 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M12 12.041v-.825c1.102-.621 2-2.168 2-3.716C14 5.015 14 3 11 3S8 5.015 8 7.5c0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h14c0-2.015-2.608-3.682-6-3.959z"}"></path><path d="${"M5.112 12.427c.864-.565 1.939-.994 3.122-1.256a5.667 5.667 0 0 1-.633-.922 5.726 5.726 0 0 1-.726-2.748c0-1.344 0-2.614.478-3.653.464-1.008 1.299-1.633 2.488-1.867C9.577.786 8.873.001 7 .001c-3 0-3 2.015-3 4.5 0 1.548.898 3.095 2 3.716v.825c-3.392.277-6 1.944-6 3.959h4.359c.227-.202.478-.393.753-.573z"}"></path></svg>`;
});
export {
  Component as default
};