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
  )}><path d="${"M2.654 13.753c.81 4.437 4.676 7.81 9.339 7.81 4.677 0 8.617-4.088 9.396-8.542h-2.563c-.75 3.06-3.55 6.039-6.833 6.039-2.369 0-4.453-1.199-5.727-3h5.292c.435 0 .854-.23 1.214-.702l1.29-1.858a.668.668 0 0 1 .614-.36h7.54L24 10.831H13.612a.782.782 0 0 0-.615.328l-1.709 2.293a.577.577 0 0 1-.495.288zm18.678-3.506c-.81-4.44-4.647-7.81-9.324-7.81s-8.5 3.975-9.279 8.43h2.563c.75-3.06 3.433-5.927 6.73-5.927 2.37 0 4.453 1.198 5.727 2.996h-5.307c-.434 0-.854.23-1.214.706L9.938 10.5a.669.669 0 0 1-.614.36h-7.54L0 13.138h10.388c.254 0 .48-.145.615-.329l1.709-2.31a.577.577 0 0 1 .495-.289z"}"></path></svg>`;
});
export {
  Component as default
};