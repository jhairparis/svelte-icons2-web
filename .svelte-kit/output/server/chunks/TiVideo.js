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
  )}><path d="${"M22.525 7.149a.997.997 0 0 0-.972-.044L19 8.382V8c0-1.654-1.346-3-3-3H5C3.346 5 2 6.346 2 8v8c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3v-.382l2.553 1.276a.992.992 0 0 0 .972-.043c.295-.183.475-.504.475-.851V8c0-.347-.18-.668-.475-.851zM7 13.5a1.5 1.5 0 1 1-.001-2.999A1.5 1.5 0 0 1 7 13.5z"}"></path></svg>`;
});
export {
  Component as default
};
