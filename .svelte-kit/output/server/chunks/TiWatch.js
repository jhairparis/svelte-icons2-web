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
  )}><path d="${"M12 13h2c.55 0 1-.45 1-1s-.45-1-1-1h-1v-1c0-.55-.45-1-1-1s-1 .45-1 1v2c0 .55.45 1 1 1zm5-5.895V5c0-1.654-1.346-3-3-3h-4C8.346 2 7 3.346 7 5v2.105C5.764 8.368 5 10.094 5 12s.764 3.632 2 4.895V19c0 1.654 1.346 3 3 3h4c1.654 0 3-1.346 3-3v-2.105c1.236-1.262 2-2.988 2-4.895s-.764-3.632-2-4.895zM9 5c0-.551.449-1 1-1h4c.551 0 1 .449 1 1v1.809a5.96 5.96 0 0 0-6 0V5zm6 14c0 .551-.449 1-1 1h-4c-.551 0-1-.449-1-1v-1.811a5.952 5.952 0 0 0 6 0V19zm-3-2c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5z"}"></path></svg>`;
});
export {
  Component as default
};
