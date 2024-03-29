import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 18 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 2h-1V1c0-.55-.45-1-1-1H1C.45 0 0 .45 0 1v12c0 .55.45 1 1 1h1v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1zM2 3v10h-.998L1 12.998V1.002L1.002 1h13.996l.002.002V2H3c-.55 0-1 .45-1 1zm15 11.998-.002.002H3.002L3 14.998V3.002L3.002 3h13.996l.002.002v11.996z"}"></path><path d="${"M15 5.5a1.5 1.5 0 1 1-3.001-.001A1.5 1.5 0 0 1 15 5.5zm1 8.5H4v-2l3.5-6 4 5h1L16 8z"}"></path></svg>`;
});
export {
  Component as default
};
