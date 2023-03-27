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
  )}><path d="${"M5.091 7.147v1.747h2.888c-.116.75-.872 2.197-2.888 2.197-1.737 0-3.156-1.441-3.156-3.216s1.419-3.216 3.156-3.216c.991 0 1.65.422 2.028.784L8.5 4.112c-.888-.828-2.037-1.331-3.409-1.331C2.275 2.784 0 5.059 0 7.875s2.275 5.091 5.091 5.091c2.937 0 4.888-2.066 4.888-4.975 0-.334-.037-.591-.081-.844H5.092zM16 7h-1.5V5.5H13V7h-1.5v1.5H13V10h1.5V8.5H16z"}"></path></svg>`;
});
export {
  Component as default
};