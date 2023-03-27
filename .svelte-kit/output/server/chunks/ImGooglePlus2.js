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
  )}><path d="${"M14.5 0h-13C.675 0 0 .675 0 1.5v13c0 .825.675 1.5 1.5 1.5h13c.825 0 1.5-.675 1.5-1.5v-13c0-.825-.675-1.5-1.5-1.5zM6 12c-2.212 0-4-1.787-4-4s1.788-4 4-4c1.081 0 1.984.394 2.681 1.047L7.593 6.091c-.297-.284-.816-.616-1.594-.616-1.366 0-2.481 1.131-2.481 2.525s1.116 2.525 2.481 2.525c1.584 0 2.178-1.137 2.269-1.725H5.999V7.428h3.778c.034.2.063.4.063.663C9.84 10.378 8.309 12 5.999 12zm8-4h-1v1h-1V8h-1V7h1V6h1v1h1v1z"}"></path></svg>`;
});
export {
  Component as default
};