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
  )}><path d="${"M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM8 1.5a6.5 6.5 0 1 1 0 13 6.5 6.5 0 0 1 0-13zm0 7.856c1.812 0 3.535-.481 5-1.327C12.772 10.817 10.607 13 8 13s-4.772-2.186-5-4.973a10.017 10.017 0 0 0 5 1.329zM4 5.5C4 4.672 4.448 4 5 4s1 .672 1 1.5S5.552 7 5 7s-1-.672-1-1.5zm6 0c0-.828.448-1.5 1-1.5s1 .672 1 1.5S11.552 7 11 7s-1-.672-1-1.5z"}"></path></svg>`;
});
export {
  Component as default
};
