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
  )}><path fill="${"#444"}" d="${"M16 5.308c-6.081 0-11.011 4.915-11.011 10.977S9.919 27.262 16 27.262s11.011-4.915 11.011-10.977c0-6.063-4.93-10.977-11.011-10.977zm10.105 10.978c0 5.564-4.524 10.074-10.105 10.074S5.895 21.85 5.895 16.286 10.419 6.212 16 6.212s10.105 4.51 10.105 10.074zM8.462 20.664v-8.607h2.064l1.239 5.871 1.225-5.871h2.069v8.607h-1.281v-6.775l-1.356 6.775h-1.328l-1.351-6.775v6.775H8.462zm7.925 0v-8.607h1.379v8.607h-1.379zm4.23 0v-7.151H18.59v-1.456h5.428v1.456h-2.022v7.151h-1.379z"}"></path></svg>`;
});
export {
  Component as default
};
