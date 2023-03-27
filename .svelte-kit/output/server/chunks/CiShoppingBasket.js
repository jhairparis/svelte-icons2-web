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
  )}><g data-name="${"Shopping Basket"}"><path d="${"M19.44 7.937H17.3l-1.21-4.51a.508.508 0 0 0-.61-.35.489.489 0 0 0-.35.61l1.14 4.25H7.74l1.14-4.25a.5.5 0 0 0-.36-.61.513.513 0 0 0-.61.35l-1.2 4.51H4.56a1.5 1.5 0 0 0-.32 2.96l.74 7.77a2.492 2.492 0 0 0 2.49 2.27h9.06a2.492 2.492 0 0 0 2.49-2.27l.74-7.77a1.5 1.5 0 0 0-.32-2.96Zm-1.41 10.64a1.5 1.5 0 0 1-1.5 1.36H7.47a1.5 1.5 0 0 1-1.5-1.36l-.72-7.64h13.5Zm1.41-8.64H4.56a.508.508 0 0 1-.5-.5.5.5 0 0 1 .5-.5h14.88a.5.5 0 0 1 .5.5.508.508 0 0 1-.5.5Z"}"></path><path d="${"M9.5 17.432a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Zm5 0a.5.5 0 0 1-.5-.5v-3a.5.5 0 0 1 1 0v3a.5.5 0 0 1-.5.5Z"}"></path></g></svg>`;
});
export {
  Component as default
};