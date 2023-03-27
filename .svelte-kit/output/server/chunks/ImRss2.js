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
  )}><path d="${"M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM4.359 12.988c-.75 0-1.359-.603-1.359-1.353a1.36 1.36 0 0 1 2.718 0c0 .75-.609 1.353-1.359 1.353zM7.772 13a4.753 4.753 0 0 0-1.397-3.381A4.74 4.74 0 0 0 3 8.219V6.263c3.713 0 6.738 3.022 6.738 6.737H7.772zm3.472 0c0-4.547-3.697-8.25-8.241-8.25V2.794c5.625 0 10.203 4.581 10.203 10.206h-1.963z"}"></path></svg>`;
});
export {
  Component as default
};