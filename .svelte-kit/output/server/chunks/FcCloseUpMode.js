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
  )}><path fill="${"#2E7D32"}" d="${"M5 24c0 18.9 14.8 19 17 19h4S24.1 26.5 5 24z"}"></path><path fill="${"#388E3C"}" d="${"M22 26h4v17h-4z"}"></path><path fill="${"#C62828"}" d="${"M34 16c0 5.1-5.2 8.2-8 8.2s-2-3.1-2-8.2 5-9.2 5-9.2 5 4.1 5 9.2z"}"></path><path fill="${"#C62828"}" d="${"M14 16c0 5.1 5.2 8.2 8 8.2s2-3.1 2-8.2-5-9.2-5-9.2-5 4.1-5 9.2z"}"></path><path fill="${"#E53935"}" d="${"M24 27c-2.2-1.6-1.9-4.5 2.4-8.8C30.8 13.8 32 7 32 7s5 3.4 5 9c0 5.9-5.7 11-13 11z"}"></path><path fill="${"#E53935"}" d="${"M24 27c2.2-1.6 1.9-4.5-2.4-8.8C17.2 13.8 16 7 16 7s-5 3.4-5 9c0 5.9 5.7 11 13 11z"}"></path><path fill="${"#F44336"}" d="${"M30 16c0 6.1-2.7 11-6 11s-6-4.9-6-11 6-11 6-11 6 4.9 6 11z"}"></path><path fill="${"#4CAF50"}" d="${"M22 43h4c2.2 0 17-.1 17-19-19.1 2.5-21 19-21 19z"}"></path></svg>`;
});
export {
  Component as default
};
