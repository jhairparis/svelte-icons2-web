import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14 8H3V7h11v1zm3-5v11H0V3h17zm-1 1H1v9h15V4zm-9.643 7h4.286V9H6.357v2z"}"></path></svg>`;
});
export {
  Component as default
};
