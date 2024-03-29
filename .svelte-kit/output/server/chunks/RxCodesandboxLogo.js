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
  )}><path fill-rule="${"evenodd"}" d="${"M7.711.797a.5.5 0 0 0-.422 0l-6 2.8A.5.5 0 0 0 1 4.05v6.9a.5.5 0 0 0 .289.453l6 2.8a.5.5 0 0 0 .422 0l6-2.8A.5.5 0 0 0 14 10.95v-6.9a.5.5 0 0 0-.289-.453l-6-2.8ZM7.5 3.157 5.98 2.51 7.5 1.8l1.52.71-1.52.646Zm.196 1.003 2.542-1.08 2.034.949L7.5 6.057 2.728 4.029l2.034-.95L7.304 4.16a.5.5 0 0 0 .392 0ZM8 6.93l5-2.124V7.93l-1.918.882a1 1 0 0 0-.582.908v2.078L8 12.965V6.93Zm3.5 4.402 1.5-.7V9.03l-1.5.69v1.612ZM7 6.93v6.034l-2.498-1.166V9.72a1 1 0 0 0-.582-.908L2 7.929V4.806L7 6.93Zm-5 3.7 1.502.702V9.72L2 9.03v1.602Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
