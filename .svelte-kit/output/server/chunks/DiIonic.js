import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 27 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M20.873 10.726a1.3 1.3 0 0 0-1.83-1.831 9.204 9.204 0 0 0-5.559-1.861c-5.101 0-9.252 4.15-9.252 9.252s4.15 9.252 9.252 9.252 9.251-4.15 9.251-9.252a9.2 9.2 0 0 0-1.861-5.559zm-7.39 14.5c-4.93 0-8.94-4.011-8.94-8.94s4.011-8.94 8.94-8.94c2.004 0 3.857.663 5.349 1.781a1.3 1.3 0 0 0 1.809 1.809 8.896 8.896 0 0 1 1.781 5.35c0 4.93-4.01 8.94-8.94 8.94zm3.777-8.941a3.777 3.777 0 1 1-7.554 0 3.777 3.777 0 0 1 7.554 0z"}"></path></svg>`;
});
export {
  Component as default
};
