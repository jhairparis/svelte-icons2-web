import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M14 7h.25c.412 0 .75-.338.75-.75v-2.5a.752.752 0 0 0-.75-.75H14V0h-2v3h-.25a.752.752 0 0 0-.75.75v2.5c0 .412.338.75.75.75H12v9h2V7zm-2-3h2v2h-2V4zm-2.75 9c.412 0 .75-.338.75-.75v-2.5A.753.753 0 0 0 9.25 9H9V0H7v9h-.25a.753.753 0 0 0-.75.75v2.5c0 .412.338.75.75.75H7v3h2v-3h.25zM7 10h2v2H7v-2zM4.25 7c.412 0 .75-.338.75-.75v-2.5A.752.752 0 0 0 4.25 3H4V0H2v3h-.25a.752.752 0 0 0-.75.75v2.5c0 .412.337.75.75.75H2v9h2V7h.25zM2 4h2v2H2V4z"}"></path></svg>`;
});
export {
  Component as default
};