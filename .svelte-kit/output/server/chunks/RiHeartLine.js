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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12.001 4.529a5.998 5.998 0 0 1 8.242.228 6 6 0 0 1 .236 8.236l-8.48 8.492-8.478-8.492a6 6 0 0 1 8.48-8.464zm6.826 1.641a3.998 3.998 0 0 0-5.49-.153l-1.335 1.198-1.336-1.197a3.999 3.999 0 0 0-5.494.154 4 4 0 0 0-.192 5.451L12 18.654l7.02-7.03a4 4 0 0 0-.193-5.454z"}"></path></svg>`;
});
export {
  Component as default
};
