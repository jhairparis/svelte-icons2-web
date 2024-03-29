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
  )}><path d="${"M19.435 11.5h-2.72V4.56a1.5 1.5 0 0 0-1.5-1.5h-6.43a1.5 1.5 0 0 0-1.5 1.5v6.94h-2.72a1.5 1.5 0 0 0-1.5 1.5v6.44a1.5 1.5 0 0 0 1.5 1.5H11a1.468 1.468 0 0 0 1-.39 1.487 1.487 0 0 0 1 .39h6.44a1.5 1.5 0 0 0 1.5-1.5V13a1.5 1.5 0 0 0-1.505-1.5ZM11.5 19.44a.5.5 0 0 1-.5.5H4.565a.5.5 0 0 1-.5-.5V13a.5.5 0 0 1 .5-.5h1.97v2a.5.5 0 0 0 .5.5h1.5a.508.508 0 0 0 .5-.5v-2H11.5ZM8.285 11.5V4.56a.5.5 0 0 1 .5-.5h1.96v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5v6.94Zm11.65 7.94a.508.508 0 0 1-.5.5H13a.508.508 0 0 1-.5-.5V12.5h2.47v2a.5.5 0 0 0 .5.5h1.5a.5.5 0 0 0 .5-.5v-2h1.97a.5.5 0 0 1 .5.5Z"}"></path></svg>`;
});
export {
  Component as default
};
