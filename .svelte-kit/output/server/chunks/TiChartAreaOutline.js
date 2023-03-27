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
  )}><path d="${"M20 17H4a1 1 0 0 1-1-1v-3c0-.68.234-1.346.658-1.874l4-5c.98-1.226 2.885-1.469 4.143-.524l1.674 1.254 2.185-2.729A2.974 2.974 0 0 1 18.001 3 3 3 0 0 1 21 6v10a1 1 0 0 1-1 1zM5 15h14V6a.988.988 0 0 0-.375-.779.996.996 0 0 0-1.406.155L14.43 8.861a1 1 0 0 1-1.381.176L10.6 7.2a1.02 1.02 0 0 0-1.381.176l-4 5A.993.993 0 0 0 5 13v2zm15 6H4a1 1 0 1 1 0-2h16a1 1 0 1 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};