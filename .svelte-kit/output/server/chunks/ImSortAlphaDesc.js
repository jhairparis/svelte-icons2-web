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
  )}><path d="${"M5 12V0H3v12H.5L4 15.5 7.5 12H5zm9.5-5h-4a.5.5 0 0 1-.416-.777L13.566 1H10.5a.5.5 0 0 1 0-1h4a.502.502 0 0 1 .416.777L11.434 6H14.5a.5.5 0 0 1 0 1zm1.447 8.276-3-6a.5.5 0 0 0-.894 0l-3 6a.5.5 0 0 0 .895.447l.862-1.724h3.382l.862 1.724a.5.5 0 0 0 .895-.447zM11.309 13l1.191-2.382L13.691 13h-2.382z"}"></path></svg>`;
});
export {
  Component as default
};