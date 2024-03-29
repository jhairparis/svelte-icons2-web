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
  )}><path d="${"M10.544 19a7 7 0 1 0-4.95-11.95L3.475 4.93l-.019.018A9.969 9.969 0 0 1 10.545 2c5.522 0 10 4.477 10 10s-4.478 10-10 10a9.969 9.969 0 0 1-7.072-2.929l2.122-2.121a6.978 6.978 0 0 0 4.95 2.05Z"}"></path><path d="${"M10.544 14c.594 0 1.126-.258 1.493-.668l2.122 2.122a5 5 0 1 1 0-6.909l-2.122 2.123A2 2 0 1 0 10.545 14Z"}"></path></svg>`;
});
export {
  Component as default
};
