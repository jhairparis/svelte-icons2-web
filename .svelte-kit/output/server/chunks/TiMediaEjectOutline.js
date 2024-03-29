import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M16 21H8c-1.654 0-3-1.346-3-3s1.346-3 3-3h8c1.654 0 3 1.346 3 3s-1.346 3-3 3zm-8-4a1.001 1.001 0 0 0 0 2h8a1.001 1.001 0 0 0 0-2H8zm4-10.134 4.964 5.096L17 12l-10 .004.08-.087L12 6.866M12 4l-6.433 6.604A2 2 0 0 0 7 14h10a2 2 0 0 0 2-2c0-.543-.218-1.033-.568-1.393L12 4z"}"></path></svg>`;
});
export {
  Component as default
};
