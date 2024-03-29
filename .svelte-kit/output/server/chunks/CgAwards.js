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
  )}><path fill-rule="${"evenodd"}" d="${"M19 9a6.992 6.992 0 0 1-3 5.745V22h-2.586L12 20.586 10.586 22H8v-7.255A7 7 0 1 1 19 9Zm-2 0A5 5 0 1 1 7 9a5 5 0 0 1 10 0Zm-7 10.757 2-2 2 2V15.71a7.001 7.001 0 0 1-2 .29 7.001 7.001 0 0 1-2-.29v4.047Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
