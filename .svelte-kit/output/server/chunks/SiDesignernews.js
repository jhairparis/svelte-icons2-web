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
  )}><path d="${"M11.27 11.98c0-3.83-2.354-6.43-6.84-6.43H0v12.9h4.524c4.354 0 6.747-2.624 6.747-6.464v-.005zM8.056 12c0 2.766-1.42 3.963-3.7 3.963h-1.16V8.037h1.16c2.185 0 3.7 1.252 3.7 3.963zM24 18.45V5.55h-2.97v7.213L16.28 5.55h-3.105v12.9h2.973v-7.723l5.084 7.718H24v.004z"}"></path></svg>`;
});
export {
  Component as default
};
