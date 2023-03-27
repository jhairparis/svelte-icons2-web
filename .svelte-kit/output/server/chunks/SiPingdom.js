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
  )}><path d="${"m11.96 17.804 7.959-3.396-7.049 7.241a14.392 14.392 0 0 0-.91-3.844v-.001zM24 11.118a44.234 44.234 0 0 0-15.087 1.92 14.56 14.56 0 0 1 2.535 3.621c4.042-2.25 9.646-5.123 12.552-5.531v-.015.005zm-12.574.275.207-.06a40.124 40.124 0 0 0 4.523-1.656 16.586 16.586 0 0 0 4.159-2.367 9.023 9.023 0 0 0 2.915-4.122c.12-.267.211-.549.267-.837-2.024 2.76-10.041 3.048-10.041 3.048l1.89-1.734A26.413 26.413 0 0 0 0 8.645a14.44 14.44 0 0 1 8.139 3.634c1.086-.336 2.196-.576 3.286-.879v-.006l.001-.001z"}"></path></svg>`;
});
export {
  Component as default
};