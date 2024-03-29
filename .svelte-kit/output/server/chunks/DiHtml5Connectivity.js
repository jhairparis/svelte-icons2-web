import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M21.68 20.569h2.801v-6.726l-3.156-3.156-1.981 1.981 2.335 2.336v5.565zm2.808 1.404h-9.771l-2.335-2.336.99-.99 1.929 1.929h3.969l-3.91-3.917.998-.998 3.91 3.91v-3.969l-1.922-1.922.983-.983-4.856-4.878H4.717l2.794 2.794v.007h5.795l2.047 2.047-2.993 2.993-2.047-2.047v-1.589H7.512v2.749l4.848 4.848-1.973 1.973 3.156 3.156h13.74l-2.794-2.779z"}"></path></svg>`;
});
export {
  Component as default
};
