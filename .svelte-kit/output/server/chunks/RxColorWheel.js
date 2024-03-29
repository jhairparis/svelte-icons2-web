import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0Zm2.904-4.284A5.649 5.649 0 0 1 7.1 1.84v4.693L3.781 3.216Zm-.565.565A5.649 5.649 0 0 0 1.84 7.1h4.693L3.216 3.781ZM6.534 7.9H1.841a5.649 5.649 0 0 0 1.375 3.319L6.534 7.9Zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466l-3.319 3.318ZM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375L7.9 8.466Zm3.884 2.752A5.648 5.648 0 0 0 13.16 7.9H8.466l3.318 3.318ZM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319L8.466 7.1Zm2.753-3.884A5.649 5.649 0 0 0 7.9 1.84v4.693l3.319-3.318Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
