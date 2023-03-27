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
  )}><g data-name="${"Square Check"}"><path d="${"M18.437 20.939H5.563a2.5 2.5 0 0 1-2.5-2.5V5.566a2.5 2.5 0 0 1 2.5-2.5h12.874a2.5 2.5 0 0 1 2.5 2.5v12.873a2.5 2.5 0 0 1-2.5 2.5ZM5.563 4.066a1.5 1.5 0 0 0-1.5 1.5v12.873a1.5 1.5 0 0 0 1.5 1.5h12.874a1.5 1.5 0 0 0 1.5-1.5V5.566a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M15.81 10.4c.45-.46-.26-1.17-.71-.71l-3.56 3.56c-.58-.58-1.16-1.15-1.73-1.73a.5.5 0 0 0-.71.71l2.08 2.08a.513.513 0 0 0 .71 0Z"}"></path></g></svg>`;
});
export {
  Component as default
};