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
  )}><path fill-rule="${"evenodd"}" d="${"m13.086 7-2.39-2.398.702-.704L15 7.5l-3.602 3.602-.703-.704 2.383-2.382V8H3V7h10.086zM1 4h1v7H1V4z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
