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
  )}><path d="${"M12.025 0a3.868 3.868 0 0 0-1.964.525L1.354 5.55v.95h15.853a3.9 3.9 0 0 0 3.463-2.115L13.922.508A3.868 3.868 0 0 0 12.025 0zm9.81 5.072L13.91 18.801a3.9 3.9 0 0 0 .1 4.056l6.734-3.908a3.865 3.865 0 0 0 1.914-3.35V5.55l-.822-.477zM1.46 7.848a3.9 3.9 0 0 0-.117.004l.017 7.787a3.868 3.868 0 0 0 1.946 3.334L12.008 24l.824-.475-7.926-13.73A3.9 3.9 0 0 0 1.46 7.848zM11.992 9.1a2.6 2.6 0 0 0-2.584 2.6 2.6 2.6 0 0 0 2.6 2.599 2.6 2.6 0 0 0 2.6-2.6 2.6 2.6 0 0 0-2.6-2.6 2.6 2.6 0 0 0-.016 0Z"}"></path></svg>`;
});
export {
  Component as default
};