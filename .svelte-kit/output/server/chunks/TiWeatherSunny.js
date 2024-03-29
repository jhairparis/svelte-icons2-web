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
  )}><path d="${"m13 4-1 2.934L11 4a1.056 1.056 0 1 1 2 0zm-9 7 2.934 1L4 13a1.056 1.056 0 1 1 0-2zm7 9 1-2.934L13 20a1.056 1.056 0 1 1-2 0zm9-7.002-2.934-1 2.934-1a1.056 1.056 0 1 1 0 2zM7.05 5.636l1.367 2.781L5.636 7.05A1.057 1.057 0 1 1 7.05 5.636zM5.636 16.949l2.781-1.367-1.367 2.781a1.057 1.057 0 1 1-1.414-1.414zm11.313 1.414-1.367-2.781 2.781 1.367a1.057 1.057 0 1 1-1.414 1.414zm1.413-11.315L15.58 8.416l1.368-2.782a1.057 1.057 0 1 1 1.414 1.414zM12 16.5c-2.481 0-4.5-2.019-4.5-4.5S9.519 7.5 12 7.5s4.5 2.019 4.5 4.5-2.019 4.5-4.5 4.5zm0-7c-1.379 0-2.5 1.121-2.5 2.5s1.121 2.5 2.5 2.5 2.5-1.121 2.5-2.5-1.121-2.5-2.5-2.5z"}"></path></svg>`;
});
export {
  Component as default
};
