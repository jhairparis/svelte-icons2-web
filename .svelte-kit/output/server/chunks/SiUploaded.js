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
  )}><path d="${"M14.651 13.862a4.613 4.613 0 1 1-9.226 0c0-6.15 9.226-6.15 9.226 0zm3.497 6.04c-1.33 1.334-3.109 3.957-8.119 4.095C4.578 24.145.07 19.513.051 13.715c-.01-2.945.774-4.659 2.82-6.792C4.095 5.645 9.875 0 9.875 0c2.052 2.052.96 4.873-.108 5.93L6.035 9.635c-.47.465-1.968 1.925-1.931 4.444.045 3.202 2.51 5.85 5.799 5.8 2.632-.042 3.756-1.356 4.376-1.98l3.841-3.828c1.103-1.093 3.77-2.027 5.829.005z"}"></path></svg>`;
});
export {
  Component as default
};
