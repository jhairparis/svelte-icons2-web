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
  )}><path d="${"M13.333 0H2.667A2.675 2.675 0 0 0 0 2.667v10.666C0 14.801 1.2 16 2.667 16h10.666A2.674 2.674 0 0 0 16 13.333V2.667C16 1.2 14.8 0 13.333 0zM2.854 13.854l-1.207-1.207 4-4 .457.457-3.25 4.75zm-.458-10.75.457-.457 5.146 4.146 5.146-4.146.457.457-5.604 6.604-5.604-6.604zm10.75 10.75-3.25-4.75.457-.457 4 4-1.207 1.207z"}"></path></svg>`;
});
export {
  Component as default
};
