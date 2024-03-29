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
  )}><path fill-rule="${"evenodd"}" d="${"M12.948 3.21A1 1 0 0 0 12 2.632a1 1 0 0 0-.948.576l-5.917 12.69a1 1 0 1 0 1.813.845l1.45-3.111h7.203l1.451 3.111a1 1 0 0 0 1.813-.845L12.948 3.209Zm1.72 8.422L12 5.909l-2.669 5.723h5.338Z"}" clip-rule="${"evenodd"}"></path><path d="${"M6 19.368a1 1 0 0 0 0 2h12a1 1 0 1 0 0-2H6Z"}"></path></svg>`;
});
export {
  Component as default
};
