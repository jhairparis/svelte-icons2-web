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
  )}><path d="${"M11.981 0a8.957 8.957 0 0 0-8.956 8.957v.363C3.283 15.828 10.082 24 10.082 24V13.205c-1.638-.747-2.756-2.369-2.756-4.253a4.66 4.66 0 1 1 6.152 4.416l-.033.01v4.427c4.296-.713 7.531-4.401 7.531-8.845A8.959 8.959 0 0 0 12.017.001h-.038.002z"}"></path></svg>`;
});
export {
  Component as default
};
