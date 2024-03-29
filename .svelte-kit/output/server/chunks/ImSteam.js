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
  )}><path d="${"M11 4.5a1.5 1.5 0 1 1 3.001.001A1.5 1.5 0 0 1 11 4.5zm3.975-2.475A3.5 3.5 0 0 0 9.036 4L5.838 8.847c-.43.022-.856.132-1.249.328L2.122 7.247A1.313 1.313 0 0 0 .506 9.315l2.436 1.905a3.157 3.157 0 1 0 6.168.228l3.891-3.484a3.5 3.5 0 0 0 1.975-5.939zM6 14.105A2.105 2.105 0 0 1 3.895 12l.001-.033 1.046.817a1.31 1.31 0 1 0 1.616-2.068l-.992-.776A2.105 2.105 0 1 1 6 14.105zM12.5 7a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5z"}"></path></svg>`;
});
export {
  Component as default
};
