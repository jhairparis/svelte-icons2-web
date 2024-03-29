import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m14 8.676 4.133 4.025L14 16.727V8.676M13.8 6.4c-.994 0-1.8.807-1.8 1.801v9a1.8 1.8 0 0 0 3.053 1.287C17.434 16.174 21 12.701 21 12.701s-3.566-3.475-5.944-5.789A1.81 1.81 0 0 0 13.8 6.4zM5 8.676l4.133 4.025L5 16.727V8.676M4.8 6.4c-.994 0-1.8.807-1.8 1.801v9a1.8 1.8 0 0 0 3.053 1.287C8.434 16.174 12 12.701 12 12.701L6.056 6.912A1.81 1.81 0 0 0 4.8 6.4z"}"></path></svg>`;
});
export {
  Component as default
};
