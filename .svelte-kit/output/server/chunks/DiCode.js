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
  )}><path fill="${"#444"}" d="${"M11.067 10.423 6.25 16.286l4.817 5.862 1.139-1.874-3.246-3.989 3.246-3.989zm2.108 11.585h2.114l3.361-11.477h-2.115zm7.758-11.585-1.139 1.874 3.246 3.989-3.246 3.989 1.139 1.874 4.817-5.862z"}"></path></svg>`;
});
export {
  Component as default
};
