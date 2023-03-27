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
  )}><path d="${"M5.215 8.787h2.154c.601 0 1.088.487 1.088 1.088v4.954c0 .6-.487 1.088-1.088 1.088H6.05V9.475a.159.159 0 0 0-.066-.129zM12 23.099a11.078 11.078 0 0 1-8.659-4.155.046.046 0 0 1 .036-.074h5.936a.26.26 0 0 0 .153-.05l2.27-1.648a.159.159 0 0 0 .064-.128V7.616a.159.159 0 0 0-.065-.129L9.466 5.84a.261.261 0 0 0-.153-.05H2.886a.046.046 0 0 1-.037-.071A11.087 11.087 0 0 1 12 .9c3.798 0 7.15 1.907 9.151 4.817a.046.046 0 0 1-.038.071h-1.597c-.052 0-.1.03-.123.079l-.353.757-1.082-.786a.26.26 0 0 0-.153-.05h-2.553a.261.261 0 0 0-.154.05L12.83 7.487a.159.159 0 0 0-.065.129v9.428c0 .05.024.098.065.128l2.27 1.648a.26.26 0 0 0 .153.05h5.371c.038 0 .06.045.036.074A11.078 11.078 0 0 1 12 23.1zM1.602 8.3l1.038.755c.043.03.068.08.068.132v8.73c0 .046-.06.063-.084.025A11.046 11.046 0 0 1 .901 12c0-1.289.22-2.526.624-3.677a.05.05 0 0 1 .077-.024zm13.67.488h3.225v1.776c0 .046.038.084.084.084h2.701a.098.098 0 0 0 .096-.083l.535-3.374a.046.046 0 0 1 .086-.013 11.053 11.053 0 0 1 1.1 4.823 11.05 11.05 0 0 1-1.39 5.382c-.022.04-.084.024-.084-.023v-3.084a.084.084 0 0 0-.084-.084h-2.96a.084.084 0 0 0-.084.084v1.642h-1.301a1.089 1.089 0 0 1-1.089-1.088V9.475a.159.159 0 0 0-.065-.129zM12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0Z"}"></path></svg>`;
});
export {
  Component as default
};