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
  )}><path d="${"M12 20.937a1.074 1.074 0 0 1-.94-.542L9.61 17.9a.084.084 0 0 0-.1-.041l-2.782.741A1.087 1.087 0 0 1 5.4 17.272l.748-2.8a.088.088 0 0 0-.041-.1l-2.5-1.439a1.086 1.086 0 0 1 0-1.881L6.1 9.61a.087.087 0 0 0 .041-.1L5.4 6.728A1.087 1.087 0 0 1 6.728 5.4l2.8.748a.091.091 0 0 0 .1-.041l1.439-2.5A1.076 1.076 0 0 1 12 3.063a1.074 1.074 0 0 1 .94.542L14.39 6.1a.084.084 0 0 0 .1.041l2.782-.741A1.087 1.087 0 0 1 18.6 6.728l-.748 2.8a.087.087 0 0 0 .041.1l2.5 1.439a1.086 1.086 0 0 1 0 1.881L17.9 14.39a.089.089 0 0 0-.041.1l.748 2.784a1.087 1.087 0 0 1-1.335 1.326l-2.8-.748a.089.089 0 0 0-.1.041l-1.439 2.5a1.076 1.076 0 0 1-.94.544Zm-2.466-4.084a1.091 1.091 0 0 1 .942.541l1.448 2.5a.082.082 0 0 0 .075.043.081.081 0 0 0 .074-.043l1.44-2.5a1.083 1.083 0 0 1 1.221-.507l2.8.747a.087.087 0 0 0 .106-.106l-.747-2.785a1.089 1.089 0 0 1 .5-1.222l2.5-1.448a.086.086 0 0 0 0-.15l-2.5-1.439a1.086 1.086 0 0 1-.507-1.221l.747-2.8a.08.08 0 0 0-.022-.083.086.086 0 0 0-.085-.023l-2.784.747a1.088 1.088 0 0 1-1.222-.5l-1.448-2.5A.082.082 0 0 0 12 4.063a.081.081 0 0 0-.074.043l-1.44 2.5a1.087 1.087 0 0 1-1.222.507l-2.8-.747a.087.087 0 0 0-.106.106l.752 2.782a1.089 1.089 0 0 1-.5 1.222l-2.5 1.448a.082.082 0 0 0-.047.076.081.081 0 0 0 .043.074l2.5 1.44a1.087 1.087 0 0 1 .507 1.221l-.747 2.8a.08.08 0 0 0 .022.083.087.087 0 0 0 .085.023l2.784-.747a1.077 1.077 0 0 1 .277-.041Z"}"></path><path d="${"M12 15.875A3.875 3.875 0 1 1 15.875 12 3.88 3.88 0 0 1 12 15.875Zm0-6.75A2.875 2.875 0 1 0 14.875 12 2.879 2.879 0 0 0 12 9.125Z"}"></path></svg>`;
});
export {
  Component as default
};