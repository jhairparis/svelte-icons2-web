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
  )}><path d="${"M6.562 21.94a2.5 2.5 0 0 1-2.5-2.5V4.56A2.5 2.5 0 0 1 7.978 2.5l10.877 7.439a2.5 2.5 0 0 1 0 4.12L7.977 21.5a2.5 2.5 0 0 1-1.415.44Zm0-18.884a1.494 1.494 0 0 0-.7.177 1.477 1.477 0 0 0-.8 1.327v14.879a1.5 1.5 0 0 0 2.35 1.235l10.877-7.44a1.5 1.5 0 0 0 0-2.471L7.413 3.326a1.491 1.491 0 0 0-.849-.27Z"}" data-name="${"Play 1"}"></path></svg>`;
});
export {
  Component as default
};
