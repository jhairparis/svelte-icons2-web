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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M14.956 15.564A8.008 8.008 0 0 1 19.938 22H4.062a8.008 8.008 0 0 1 4.982-6.436L12 20l2.956-4.436zM18 2v6A6 6 0 1 1 6 8V2h12zm-2 6H8c0 2.21 1.79 4 4 4s4-1.79 4-4z"}"></path></svg>`;
});
export {
  Component as default
};
