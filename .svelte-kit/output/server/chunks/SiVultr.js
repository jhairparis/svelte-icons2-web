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
  )}><path d="${"M8.36 2.172A1.194 1.194 0 0 0 7.348 1.6H1.2A1.2 1.2 0 0 0 0 2.8a1.211 1.211 0 0 0 .182.64l11.6 18.4a1.206 1.206 0 0 0 2.035 0l3.075-4.874a1.229 1.229 0 0 0 .182-.64 1.211 1.211 0 0 0-.182-.642zm10.349 8.68a1.206 1.206 0 0 0 2.035 0L21.8 9.178l2.017-3.2a1.211 1.211 0 0 0 .183-.64 1.229 1.229 0 0 0-.183-.64l-1.6-2.526a1.206 1.206 0 0 0-1.016-.571h-6.148a1.2 1.2 0 0 0-1.201 1.2 1.143 1.143 0 0 0 .188.64z"}"></path></svg>`;
});
export {
  Component as default
};