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
  )}><path d="${"M9.317 9.451a.248.248 0 0 0 .37.063l.015-.012c.39-.325.741-.66 1.071-1.017 3.209-3.483 1.335-7.759 1.32-7.799a.5.5 0 0 1 .15-.594.493.493 0 0 1 .615.033c10.875 10.114 7.995 17.818 7.785 18.337-.87 3.141-4.335 5.414-8.444 5.53-.138.008-.242.008-.363.008-4.852 0-8.977-2.989-8.977-6.807v-.06c0-5.297 4.795-10.522 5.009-10.744a.439.439 0 0 1 .525-.105c.18.076.297.255.291.451-.043 1.036.167 1.935.631 2.7v.015l.002.001z"}"></path></svg>`;
});
export {
  Component as default
};