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
  )}><path d="${"M9.624 5.2c-.571.3-.079 1.124.5.864.509-.227 1.068-.287 1.115-.95.028-.41.014-.81.476-.993a.776.776 0 0 1 1.035.71c.048.461.035.821.548 1.024a4.811 4.811 0 0 1 2.812 2.432 5.63 5.63 0 0 1 .414 2.467v2.02a.5.5 0 0 0 1 0c0-1.646.185-3.394-.521-4.929a5.542 5.542 0 0 0-3.019-2.808c-.034-.013-.155-.069-.227-.092v-.059a2.009 2.009 0 0 0-.257-.945 1.739 1.739 0 0 0-3.1.172 1.992 1.992 0 0 0-.153.792v.052a6.93 6.93 0 0 0-.623.243ZM4.57 3.86c-.46-.46-1.17.25-.71.7 1.06 1.06 2.12 2.13 3.18 3.19a5.535 5.535 0 0 0-.57 2.44v4.54a2.122 2.122 0 0 0-1.88 2.11v.53a2.121 2.121 0 0 0 2.12 2.12h3.59a1.725 1.725 0 0 0 3.4 0h3.59a2.12 2.12 0 0 0 1.15-.34l.99.99a.5.5 0 0 0 .71-.71ZM17.7 18.41a1.15 1.15 0 0 1-.41.08H6.71a1.118 1.118 0 0 1-1.12-1.12v-.53a1.118 1.118 0 0 1 1.12-1.12.762.762 0 0 0 .76-.77v-4.76a4.375 4.375 0 0 1 .33-1.68Z"}" data-name="${"Bell Off"}"></path></svg>`;
});
export {
  Component as default
};