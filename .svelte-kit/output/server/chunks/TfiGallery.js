import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13 10V0H0v13h13v-3zM1 1h11v8h-.755L8.681 5.681 7.522 6.895 5.274 3.014 1.698 9H1V1zm8.982 8H2.863l2.398-4.014L7.325 8.55 8.6 7.213 9.982 9zM1 12v-2h11v2H1zm16-9v13H4v-1.984h1V15h11V4h-2V3h3z"}"></path></svg>`;
});
export {
  Component as default
};
