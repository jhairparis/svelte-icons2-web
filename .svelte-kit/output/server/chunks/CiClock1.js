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
  )}><g data-name="${"Clock 1"}"><path d="${"M12 21.933A9.933 9.933 0 1 1 21.933 12 9.944 9.944 0 0 1 12 21.933Zm0-18.866A8.933 8.933 0 1 0 20.933 12 8.943 8.943 0 0 0 12 3.067Z"}"></path><path d="${"M11.5 6a.5.5 0 0 1 1 0v4.8c1.13-1.13 2.26-2.27 3.39-3.4a.5.5 0 0 1 .71.71l-4.26 4.25a.463.463 0 0 1-.58.07c-.01-.02-.02-.02-.03-.02a.425.425 0 0 1-.22-.33Z"}"></path></g></svg>`;
});
export {
  Component as default
};