import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#D1C4E9"}" d="${"M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2zm0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2zm0 12H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2z"}"></path><g fill="${"#2196F3"}"><path d="${"m31 30 7 5.6V24.4z"}"></path><path d="${"M38 28c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1 3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6c0-.3 0-.6.1-.9l-3.4-2.7c-.4 1.1-.7 2.3-.7 3.6 0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10z"}"></path></g></svg>`;
});
export {
  Component as default
};