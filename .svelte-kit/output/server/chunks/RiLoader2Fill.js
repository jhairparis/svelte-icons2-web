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
  )}><path fill="${"none"}" d="${"M0 0h24v24H0z"}"></path><path d="${"M12 2a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0V3a1 1 0 0 1 1-1zm0 15a1 1 0 0 1 1 1v3a1 1 0 0 1-2 0v-3a1 1 0 0 1 1-1zm10-5a1 1 0 0 1-1 1h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zM7 12a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h3a1 1 0 0 1 1 1zm12.071 7.071a1 1 0 0 1-1.414 0l-2.121-2.121a1 1 0 0 1 1.414-1.414l2.121 2.12a1 1 0 0 1 0 1.415zM8.464 8.464a1 1 0 0 1-1.414 0l-2.12-2.12a1 1 0 0 1 1.414-1.415l2.12 2.121a1 1 0 0 1 0 1.414zM4.93 19.071a1 1 0 0 1 0-1.414l2.121-2.121a1 1 0 1 1 1.414 1.414l-2.12 2.121a1 1 0 0 1-1.415 0zM15.536 8.464a1 1 0 0 1 0-1.414l2.12-2.121a1 1 0 0 1 1.415 1.414L16.95 8.464a1 1 0 0 1-1.414 0z"}"></path></svg>`;
});
export {
  Component as default
};
