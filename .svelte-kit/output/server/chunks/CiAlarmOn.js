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
  )}><g data-name="${"Alarm On"}"><path d="${"M20.352 8.213a2.017 2.017 0 0 0 0-2.851L18.9 3.9a2.038 2.038 0 0 0-2.86 0l-.67.659A8.238 8.238 0 0 0 12 3.852a8.332 8.332 0 0 0-3.39.71L7.962 3.9a2.038 2.038 0 0 0-2.86 0l-1.45 1.462a2.02 2.02 0 0 0-.01 2.851l.65.67a8.419 8.419 0 1 0 16.13 3.39 8.4 8.4 0 0 0-.72-3.411ZM4.362 6.062l1.45-1.45a1.016 1.016 0 0 1 1.44 0l.44.43a8.427 8.427 0 0 0-2.91 2.9l-.42-.43a1.027 1.027 0 0 1 0-1.45ZM12 19.682a7.415 7.415 0 1 1 7.42-7.409A7.421 7.421 0 0 1 12 19.682Zm7.22-11.75a8.578 8.578 0 0 0-2.91-2.89l.44-.43a1.016 1.016 0 0 1 1.44 0l1.45 1.45a1.027 1.027 0 0 1 0 1.451Z"}"></path><path d="${"M17.042 12.763H12a.455.455 0 0 1-.27-.081c-.03-.02-.05-.039-.07-.049a.442.442 0 0 1-.16-.36V7.232a.5.5 0 0 1 1 0v4.531h4.54a.5.5 0 0 1 .002 1Z"}"></path></g></svg>`;
});
export {
  Component as default
};
