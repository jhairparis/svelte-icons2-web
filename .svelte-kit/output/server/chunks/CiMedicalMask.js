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
  )}><g data-name="${"Medical Mask"}"><path d="${"M21.435 12.53H19.5V9.17h1.94a.5.5 0 0 0 .5-.5.5.5 0 0 0-.5-.5H19.5v-.94a2.5 2.5 0 0 0-2.5-2.5H7a2.507 2.507 0 0 0-2.5 2.5v.94H2.565a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5H4.5v3.36H2.565a.5.5 0 0 0-.5.5.5.5 0 0 0 .5.5H4.5v.33a4.283 4.283 0 0 0 2.43 3.84l1.74.82a7.79 7.79 0 0 0 6.67 0l1.73-.82h.01a4.274 4.274 0 0 0 2.42-3.84v-.33h1.94a.5.5 0 0 0 .5-.5.5.5 0 0 0-.505-.5ZM18.5 13.86a3.238 3.238 0 0 1-1.85 2.93l-1.73.82a6.767 6.767 0 0 1-5.83 0l-1.73-.82a3.248 3.248 0 0 1-1.86-2.93V7.23A1.5 1.5 0 0 1 7 5.73h10a1.5 1.5 0 0 1 1.5 1.5Z"}"></path><path d="${"M14.5 14.534h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1Zm1.5-4.366H8a.5.5 0 1 1 0-1h8a.5.5 0 0 1 0 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};