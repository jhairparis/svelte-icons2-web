import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m15.54.5-1.28 14.379L8.48 16.5l-5.74-1.621L1.46.5h14.08zm-2.62 2.939H4.08l.47 5.34h6.121l-.222 2.279-1.969.532-1.96-.531-.13-1.399H4.641l.22 2.779 3.62 1h.039v-.01l3.591-.99.5-5.44H6.17l-.15-1.81h6.74l.16-1.75z"}"></path></svg>`;
});
export {
  Component as default
};
