import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"m2.5 1.007 12.999.17.43.501-1.82 12.872-.57.489-13-.17-.43-.502L1.93 1.495l.57-.488zM1.18 13.885l11.998.157 1.68-11.882L2.86 2.003 1.18 13.885zm5.791-3.49-.14.991 5 .066.14-.99-5-.066zm1.71-2.457-3.663-2.93-.692.796 2.636 2.112L3.739 9.95l.465.812L8.68 7.938z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
