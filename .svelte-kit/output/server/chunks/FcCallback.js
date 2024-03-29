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
  )}><path fill="${"#2196F3"}" d="${"M26.4 33.9s4-2.6 4.8-3c.8-.4 1.7-.6 2.2-.2.8.5 7.5 4.9 8.1 5.3.6.4.8 1.5.1 2.6-.8 1.1-4.3 5.5-5.8 5.4-1.5 0-8.4.4-20.3-11.4C3.6 20.7 4 13.8 4 12.3s4.3-5.1 5.4-5.8c1.1-.8 2.2-.5 2.6.1.4.6 4.8 7.3 5.3 8.1.3.5.2 1.4-.2 2.2-.4.8-3 4.8-3 4.8s.7 2.8 5 7.2c4.4 4.3 7.3 5 7.3 5z"}"></path><g fill="${"#3F51B5"}"><path d="${"M35 9H25v4h10c1.1 0 2 .9 2 2v10h4V15c0-3.3-2.7-6-6-6z"}"></path><path d="${"m28 16-6.7-5L28 6z"}"></path></g></svg>`;
});
export {
  Component as default
};
