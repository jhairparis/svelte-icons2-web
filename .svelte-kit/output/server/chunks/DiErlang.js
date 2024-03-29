import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 34 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M6.673 25.45c-2.318-2.456-3.674-5.849-3.671-9.898-.003-3.58 1.122-6.658 3.056-9l-.003.001H1.99V25.45h4.683zm21.408.002c.999-1.069 1.893-2.329 2.704-3.769l-4.499-2.25c-1.58 2.569-3.891 4.933-7.086 4.949-4.651-.016-6.478-3.992-6.468-9.111H30.11c.023-.578.023-.847 0-1.125.113-3.045-.694-5.605-2.162-7.598l-.008.006h3.913v18.897l-3.773.001z"}"></path><path fill="${"#444"}" d="${"M13.013 10.884c.192-2.317 2.02-3.876 4.162-3.881 2.157.005 3.715 1.563 3.768 3.881h-7.93z"}"></path></svg>`;
});
export {
  Component as default
};
