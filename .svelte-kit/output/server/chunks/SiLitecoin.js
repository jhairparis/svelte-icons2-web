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
  )}><path d="${"M12 0a12 12 0 1 0 12 12A12 12 0 0 0 12 0zm-.262 3.678h2.584a.343.343 0 0 1 .33.435l-2.03 6.918 1.905-.582-.408 1.385-1.924.56-1.248 4.214h6.676a.343.343 0 0 1 .328.437l-.582 2a.459.459 0 0 1-.44.33H6.733l1.723-5.822-1.906.58.42-1.361 1.91-.58 2.422-8.18a.456.456 0 0 1 .437-.334Z"}"></path></svg>`;
});
export {
  Component as default
};
