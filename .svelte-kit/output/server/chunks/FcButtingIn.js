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
  )}><path fill="${"#CFD8DC"}" d="${"M24 3C12.4 3 3 12.4 3 24s9.4 21 21 21c.3 0 .7 0 1-.1V3.1c-.3-.1-.7-.1-1-.1z"}"></path><path fill="${"#37474F"}" d="${"M25 3.1V45c4.1-.2 7.9-1.5 11-3.7V6.8c-3.1-2.2-6.9-3.6-11-3.7z"}"></path><path fill="${"#FFB74D"}" d="${"M20.5 13c-6.4.3-11.6 5.7-11.5 12.1 0 2.8 1 5.4 2.7 7.5 1.4 1.7 2.3 3.9 2.3 6.1v3.8c3 1.6 6.4 2.5 10 2.5.3 0 .7 0 1-.1.7 0 1.3-.1 2-.2v-9.4c3.6-2.1 6-5.9 6-10.4 0-6.7-5.6-12.2-12.5-11.9z"}"></path><path fill="${"#FFB74D"}" d="${"m29 38.6-4-.6v-9h8l-.7 7c-.2 1.6-1.6 2.8-3.3 2.6z"}"></path><path fill="${"#FFB74D"}" d="${"m39 29-7 2-1-5 1-4z"}"></path><circle cx="${"29.5"}" cy="${"25.5"}" r="${"1.5"}" fill="${"#784719"}"></circle><path fill="${"#FF5722"}" d="${"M21 12c-7.2 0-13 5.8-13 13 0 7.6 5.1 9 6 13l4-3v-8l5-2 1-4c3.2 0 6-3.9 6-6.1-2.1-1.9-5.6-2.9-9-2.9z"}"></path><circle cx="${"19"}" cy="${"27"}" r="${"3"}" fill="${"#FFB74D"}"></circle><path fill="${"#CFD8DC"}" d="${"M45 24c0-7.1-3.6-13.4-9-17.2v34.4c5.4-3.8 9-10.1 9-17.2z"}"></path><path fill="${"#FF9800"}" d="${"M20 44.6c1.3.2 2.6.4 4 .4.3 0 .7 0 1-.1.7 0 1.3-.1 2-.2v-6.5l-7-1v7.4z"}"></path></svg>`;
});
export {
  Component as default
};