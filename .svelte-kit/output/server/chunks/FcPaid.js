import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#2E7D32"}" d="${"M25.4 5.6c-.8-.8-2-.8-2.8 0l-12 12c-.8.8-.8 2 0 2.8.4.4.9.6 1.4.6s1-.2 1.4-.6l12-12c.8-.8.8-2 0-2.8z"}"></path><path fill="${"#1B5E20"}" d="${"m37.4 17.6-12-12c-.8-.8-2-.8-2.8 0-.8.8-.8 2 0 2.8l12 12c.4.4.9.6 1.4.6s1-.2 1.4-.6c.8-.8.8-2 0-2.8z"}"></path><path fill="${"#388E3C"}" d="${"M37.4 41H10.6c-1 0-1.8-.7-2-1.6L5 21h38l-3.7 18.4c-.2.9-1 1.6-1.9 1.6z"}"></path><path fill="${"#4CAF50"}" d="${"M43 23H5c-1.1 0-2-.9-2-2v-2c0-1.1.9-2 2-2h38c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2z"}"></path><path fill="${"#DCEDC8"}" d="${"m30.8 24.8-7.9 7.9-3.7-3.8-2.2 2.2 5.9 5.9L33 26.9z"}"></path></svg>`;
});
export {
  Component as default
};
