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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M4 10H2c0-5.523 0-9 10-9s10 3.477 10 9h-2m-8 0c4.418 0 8-.895 8-2s-3.582-2-8-2-8 .895-8 2 3.582 2 8 2ZM4 20c0 1.657 3.582 3 8 3s8-1.343 8-3m0-12v12V8ZM4 20V8v12Zm4-7v4m5-4v4m-6-5c-1.5 0-3-1-3-4m14 5.5V12c0-2 2-1 2-4M8 13a1 1 0 0 0-1-1m6 1a1 1 0 0 1 2 0v.5m0 0a1.5 1.5 0 0 0 3 0M8 17a2.5 2.5 0 1 0 5 0"}"></path></svg>`;
});
export {
  Component as default
};
