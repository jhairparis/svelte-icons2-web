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
  )}><path d="${"M.479 7.534v12.128A2.021 2.021 0 0 0 2.5 21.683h2.389l1.323 2.095a.478.478 0 0 0 .404.22.478.478 0 0 0 .441-.22l1.323-2.095h6.983l1.323 2.095a.478.478 0 0 0 .44.22c.185 0 .332-.073.405-.22l1.323-2.095H21.5a2.021 2.021 0 0 0 2.022-2.021V7.534A2.021 2.021 0 0 0 21.5 5.549h-7.68l4.446-4.447L17.164 0l-5.146 5.145L6.8 0 5.697 1.103l4.41 4.41h-7.57A2.021 2.021 0 0 0 .479 7.57z"}"></path></svg>`;
});
export {
  Component as default
};