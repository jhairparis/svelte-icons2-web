import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6 7.25c0 .412-.338.75-.75.75h-1.5A.752.752 0 0 1 3 7.25v-1.5c0-.412.337-.75.75-.75h1.5c.412 0 .75.338.75.75v1.5zm5 0c0 .412-.338.75-.75.75h-1.5A.753.753 0 0 1 8 7.25v-1.5c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.5zm-5 5c0 .412-.338.75-.75.75h-1.5a.752.752 0 0 1-.75-.75v-1.5c0-.412.337-.75.75-.75h1.5c.412 0 .75.338.75.75v1.5zm5 0c0 .412-.338.75-.75.75h-1.5a.753.753 0 0 1-.75-.75v-1.5c0-.412.338-.75.75-.75h1.5c.412 0 .75.338.75.75v1.5zm3.251-9.75L16 .751V0h-.751L13.5 1.749 11.751 0H11v.751L12.749 2.5 11 4.249V5h.751L13.5 3.251 15.249 5H16v-.751zM0 12h1v2H0v-2zm0-3h1v2H0V9zm13-2h1v2h-1V7zm0 6h1v2h-1v-2zm0-3h1v2h-1v-2zM0 6h1v2H0V6zm0-3h1v2H0V3zm8-1h2v1H8V2zM5 2h2v1H5V2zM2 2h2v1H2V2zm5 13h2v1H7v-1zm3 0h2v1h-2v-1zm-6 0h2v1H4v-1zm-3 0h2v1H1v-1z"}"></path></svg>`;
});
export {
  Component as default
};
