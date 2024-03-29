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
  )}><path fill="${"none"}" stroke="${"#000"}" stroke-width="${"2"}" d="${"M1 19h22V1H1v18Zm4 4h14H5Zm3 0h8v-4H8v4ZM7.757 5.757l2.122 2.122-2.122-2.122ZM9 10H6h3Zm.879 2.121-2.122 2.122 2.122-2.122ZM12 13v3-3Zm2.121-.879 2.122 2.122-2.122-2.122ZM18 10h-3 3Zm-1.757-4.243-2.122 2.122 2.122-2.122ZM12 7V4v3Zm0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6Z"}"></path></svg>`;
});
export {
  Component as default
};
