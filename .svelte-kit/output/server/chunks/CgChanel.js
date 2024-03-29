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
  )}><path fill-rule="${"evenodd"}" d="${"M6.072 3.173a9 9 0 0 0-4.608 2.463l2.13 2.13a5.989 5.989 0 0 1 5.701-1.571 9.002 9.002 0 0 0 0 11.61 5.987 5.987 0 0 1-5.702-1.57l-2.13 2.129A9 9 0 0 0 12 19.974a9.003 9.003 0 0 0 10.536-1.61l-2.13-2.13a5.988 5.988 0 0 1-5.701 1.571A9.012 9.012 0 0 0 16.828 12a9 9 0 0 0-2.123-5.805 5.988 5.988 0 0 1 5.702 1.57l2.13-2.129A9 9 0 0 0 12 4.026a9 9 0 0 0-5.928-.853ZM12 7.705a5.99 5.99 0 0 0-.806 7.622c.235.352.505.676.806.968a5.987 5.987 0 0 0 0-8.59Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
