import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M0 10V2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm4.79-6.907A.5.5 0 0 0 4 3.5v5a.5.5 0 0 0 .79.407L7.5 6.972V8.5a.5.5 0 0 0 .79.407L11 6.972V8.5a.5.5 0 0 0 1 0v-5a.5.5 0 0 0-1 0v1.528L8.29 3.093a.5.5 0 0 0-.79.407v1.528L4.79 3.093z"}"></path></svg>`;
});
export {
  Component as default
};
