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
  )}><path d="${"m0 6.46 21.389 11.297a.917.917 0 0 1 .2 1.485h-.011a10.04 10.04 0 0 1-2.234 1.53c-6.912 3.474-14.991-1.837-14.543-9.56l2.86 1.975c.856 4.508 5.618 7.11 9.874 5.393zm8.647 3.151 14.366 5.679a.87.87 0 0 1 .52 1.046v.018a.872.872 0 0 1-1.257.526zm5.29-7.437c2.71-.233 6.095.787 8.111 3.387 1.7 2.195 2.05 4.877 1.93 7.646V13.2a.878.878 0 0 1-1.197.745l-9.765-3.86 9.065 2.432a7.296 7.296 0 0 0-1.068-4.563c-2.968-4.768-9.984-4.535-12.63.42a7.505 7.505 0 0 0-.397.883L5.555 7.961c.069-.101.141-.198.214-.296.116-.241.242-.487.38-.727 1.612-2.79 4.31-4.433 7.156-4.697.21-.018.421-.049.632-.067z"}"></path></svg>`;
});
export {
  Component as default
};