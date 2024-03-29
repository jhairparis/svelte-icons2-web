import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M17 4H8c-.55 0-1 .45-1 1v12c0 .55.45 1 1 1h3.5a1 1 0 1 0 2 0H17c.55 0 1-.45 1-1V5c0-.55-.45-1-1-1zm0 13H8V5h9v12zm1-16H7C5.346 1 4 2.346 4 4v15c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V4c0-1.654-1.346-3-3-3zm1 18c0 .551-.449 1-1 1H7c-.551 0-1-.449-1-1V4c0-.551.449-1 1-1h11c.551 0 1 .449 1 1v15z"}"></path></svg>`;
});
export {
  Component as default
};
