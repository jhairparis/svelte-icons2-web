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
  )}><path fill="${"#FF9800"}" d="${"m24 37-5-6v-6h10v6z"}"></path><g fill="${"#FFA726"}"><circle cx="${"33"}" cy="${"19"}" r="${"2"}"></circle><circle cx="${"15"}" cy="${"19"}" r="${"2"}"></circle></g><path fill="${"#FFB74D"}" d="${"M33 13c0-7.6-18-5-18 0v7c0 5 4 9 9 9s9-4 9-9v-7z"}"></path><path fill="${"#FF5722"}" d="${"M24 4c-6.1 0-10 4.9-10 11v2.3l2 1.7v-5l12-4 4 4v5l2-1.7V15c0-4-1-8-6-9l-1-2h-3z"}"></path><g fill="${"#784719"}"><circle cx="${"28"}" cy="${"19"}" r="${"1"}"></circle><circle cx="${"20"}" cy="${"19"}" r="${"1"}"></circle></g><path fill="${"#CFD8DC"}" d="${"m29 31-5 1-5-1S8 33 8 44h32c0-11-11-13-11-13z"}"></path><path fill="${"#3F51B5"}" d="${"m23 35-1 9h4l-1-9 1-1-2-2-2 2z"}"></path></svg>`;
});
export {
  Component as default
};
