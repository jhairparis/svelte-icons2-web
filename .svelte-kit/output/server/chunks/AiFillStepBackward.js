import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m347.6 528.95 383.2 301.02c14.25 11.2 35.2 1.1 35.2-16.95V210.97c0-18.05-20.95-28.14-35.2-16.94L347.6 495.05a21.53 21.53 0 0 0 0 33.9M330 864h-64a8 8 0 0 1-8-8V168a8 8 0 0 1 8-8h64a8 8 0 0 1 8 8v688a8 8 0 0 1-8 8"}"></path></svg>`;
});
export {
  Component as default
};
