import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M206 308h100c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2z"}"></path><path d="${"M64 96v320c0 17.7 14.3 32 32 32h320c17.7 0 32-14.3 32-32V96c0-17.7-14.3-32-32-32H96c-17.7 0-32 14.3-32 32zm330 108h-56c-1.1 0-2 .9-2 2v100c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14h-56c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2H206c-1.1 0-2 .9-2 2v56c0 7.7-6.3 14-14 14s-14-6.3-14-14v-56c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2V206c0-1.1-.9-2-2-2h-56c-7.7 0-14-6.3-14-14s6.3-14 14-14h56c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h100c1.1 0 2-.9 2-2v-56c0-7.7 6.3-14 14-14s14 6.3 14 14v56c0 1.1.9 2 2 2h56c7.7 0 14 6.3 14 14s-6.3 14-14 14z"}"></path></svg>`;
});
export {
  Component as default
};