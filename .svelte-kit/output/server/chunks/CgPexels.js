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
  )}><path fill-rule="${"evenodd"}" d="${"M12 5a5.001 5.001 0 0 1 0 10v4H6V5h6ZM8 7v10h2v-4h2l.003-.001a2.993 2.993 0 0 0 3.041-3.044l-.007-.39a2.61 2.61 0 0 0-2.711-2.562l-.306.005L12 7H8Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
