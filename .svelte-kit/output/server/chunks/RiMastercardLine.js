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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 18.294a7.3 7.3 0 1 1 0-12.588 7.3 7.3 0 1 1 0 12.588zm1.702-1.384a5.3 5.3 0 1 0 0-9.82A7.273 7.273 0 0 1 15.6 12c0 1.89-.719 3.614-1.898 4.91zm-3.404-9.82a5.3 5.3 0 1 0 0 9.82A7.273 7.273 0 0 1 8.4 12c0-1.89.719-3.614 1.898-4.91zM12 8.205A5.284 5.284 0 0 0 10.4 12c0 1.488.613 2.832 1.6 3.795A5.284 5.284 0 0 0 13.6 12 5.284 5.284 0 0 0 12 8.205z"}"></path></svg>`;
});
export {
  Component as default
};
