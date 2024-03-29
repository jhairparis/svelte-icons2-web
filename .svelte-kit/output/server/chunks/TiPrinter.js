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
  )}><path d="${"M17 5V3a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v2C4.346 5 3 6.346 3 8v10c0 1.654 1.346 3 3 3h11c1.654 0 3-1.346 3-3V8c0-1.654-1.346-3-3-3zM8 4h7v5H8V4zM6 7v3a1 1 0 0 0 1 1h9a1 1 0 0 0 1-1V7c.551 0 1 .449 1 1v2.5c0 .827-.673 1.5-1.5 1.5h-10c-.827 0-1.5-.673-1.5-1.5V8c0-.551.449-1 1-1zm11 12H6c-.551 0-1-.449-1-1v-5.513c.419.318.935.513 1.5.513h10c.565 0 1.081-.195 1.5-.513V18c0 .551-.449 1-1 1zM13.5 7h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1zm1.5 9H8a.5.5 0 0 0 0 1h7a.5.5 0 0 0 0-1zM13.5 5h-4a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1z"}"></path></svg>`;
});
export {
  Component as default
};
