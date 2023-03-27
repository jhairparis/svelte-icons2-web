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
  )}><path d="${"M11 6c2.206 0 4 1.794 4 4s-1.794 4-4 4c-2.204 0-3.998-1.794-3.998-4S8.796 6 11 6m0-2a5.998 5.998 0 0 0-5.998 6A5.998 5.998 0 1 0 17 10a6 6 0 0 0-6-6zm6 16h-4v-1.23a8.92 8.92 0 0 0 4.363-2.406A8.944 8.944 0 0 0 20 10.001a8.927 8.927 0 0 0-1.968-5.619l.675-.673a1.001 1.001 0 0 0-1.414-1.416l-2.052 2.049.708.708C17.271 6.371 18 8.13 18 10s-.729 3.627-2.051 4.949S12.87 17 11 17s-3.627-.729-4.949-2.051a.999.999 0 1 0-1.414 1.414A8.942 8.942 0 0 0 11 19v1H7a1 1 0 1 0 0 2h10a1 1 0 1 0 0-2z"}"></path></svg>`;
});
export {
  Component as default
};