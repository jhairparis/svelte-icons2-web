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
  )}><circle cx="${"24"}" cy="${"24"}" r="${"21"}" fill="${"#9C27B0"}"></circle><path fill="${"#E1BEE7"}" d="${"M20.7 27.2v8.4h-3.9V12.9h8.7c1.3 0 2.5.2 3.5.5 1 .4 1.9.9 2.6 1.5.7.6 1.2 1.4 1.6 2.3.4.9.6 1.8.6 2.9 0 1.1-.2 2.1-.6 3-.4.9-.9 1.6-1.6 2.2-.7.6-1.6 1.1-2.6 1.4-1 .3-2.2.5-3.5.5h-4.8zm0-3.2h4.7c.8 0 1.4-.1 2-.3.5-.2 1-.5 1.4-.8.4-.3.6-.8.8-1.2.2-.5.2-1 .2-1.6 0-.5-.1-1-.2-1.5-.2-.5-.4-.9-.8-1.3s-.8-.7-1.4-.9c-.5-.2-1.2-.3-2-.3h-4.7V24z"}"></path></svg>`;
});
export {
  Component as default
};
