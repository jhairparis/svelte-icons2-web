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
  )}><path d="${"M15 3H8C6.346 3 5 4.346 5 6v12c0 1.654 1.346 3 3 3h7c1.654 0 3-1.346 3-3V6c0-1.654-1.346-3-3-3zm1 15c0 .551-.449 1-1 1H8c-.551 0-1-.449-1-1V6c0-.551.449-1 1-1h7c.551 0 1 .449 1 1v12zM14 6H9c-.55 0-1 .45-1 1v9c0 .55.45 1 1 1h1.5a1 1 0 1 0 2 0H14c.55 0 1-.45 1-1V7c0-.55-.45-1-1-1zm0 10H9V7h5v9z"}"></path></svg>`;
});
export {
  Component as default
};
