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
  )}><path d="${"M152.6 26.32 137.2 441.9 256 486.4l118.8-44.5-15.4-415.58L256 41.09 152.6 26.32zM64 89c-36 0-36 78 0 78h9.51l13-39-13-39H64zm374.5 0-13 39 13 39h9.5c36 0 36-78 0-78h-9.5zM192 112a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm128 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-217.6 7 2.1 6.2 1 2.8-3 9h28l.7-18h-28.8zm278.4 0 .7 18h28.1l-2.1-6.2-1-2.8 3-9h-28.7zM60 217c-36 0-36 78 0 78h9.51l13-39-13-39H60zm382.5 0-13 39 13 39h9.5c36 0 36-78 0-78h-9.5zM192 240a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm128 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-221.56 7 2.06 6.2 1 2.8-3 9h27.3l.7-18H98.44zm287.06 0 .7 18h27.4l-2.1-6.2-1-2.8 3-9h-28zM56 345c-36 0-36 78 0 78h9.51l13-39-13-39H56zm390.5 0-13 39 13 39h9.5c36 0 36-78 0-78h-9.5zM192 368a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm128 0a16 16 0 0 1 16 16 16 16 0 0 1-16 16 16 16 0 0 1-16-16 16 16 0 0 1 16-16zm-225.53 7 2.07 6.2.95 2.8-3 9h26.61l.6-18H94.47zm295.83 0 .6 18h26.7l-2.1-6.2-1-2.8 3-9h-27.2z"}"></path></svg>`;
});
export {
  Component as default
};