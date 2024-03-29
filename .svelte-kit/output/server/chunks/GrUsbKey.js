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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"M3 6a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h14v-1h7V7h-7V6H3Zm14 3v5h5V9h-5Zm-2 6V8H3a1 1 0 0 0-1 1v5a1 1 0 0 0 1 1h12Zm4-3.992h1.01v-1.01H19v1.01Zm.51 2h-.5v-1.01h1.01v1.01h-.51Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
