import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13.364 14.335c-.183 0-1.307-.206-1.375-.458-.161-.619-.183-1.284-.183-2.04V3.384c0-1.261.252-1.994.252-1.994-.023-.115-.138-.367-.275-.367h-.069c-.069 0-.871.504-1.605.504-.596 0-.967-.527-1.655-.527-2.892 0-4.249 2.349-4.249 5.672v.173c0 .069-.046.138-.115.138h-.94c-.115 0-.344.642-.344.94 0 .092.023.137.069.137H4.09c.069 0 .115.092.115.16 0 2.04-.023 4.052-.023 4.052 0 .321-.023 1.031-.16 1.605-.069.252-1.123.458-1.398.458-.115 0-.115.55 0 .665.94-.046 1.559-.115 2.499-.115.871 0 1.536.069 2.453.115.046-.138.046-.665-.069-.665-.183 0-1.307-.206-1.375-.458-.16-.619-.16-1.284-.183-2.04V8.198c0-.069.069-.138.138-.138h2.361c.16-.321.275-.711.275-.917 0-.138 0-.16-.115-.16H6.064c-.046 0-.115-.069-.115-.115v-.825c0-2.04.836-3.837 2.234-3.837.99 0 1.854.642 1.854 3.093.003.063.005.114.005.148v6.825c0 .321-.023 1.031-.16 1.605-.069.252-1.123.458-1.398.458-.115 0-.115.55 0 .665.94-.046 1.559-.115 2.499-.115.871 0 1.536.069 2.453.115.046-.137.046-.665-.069-.665z"}"></path></svg>`;
});
export {
  Component as default
};