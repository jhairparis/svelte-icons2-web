import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#2196F3"}" d="${"M37 42c-.3 0-.7-.1-1-.3-1-.5-1.3-1.8-.8-2.7 0-.1 3.7-6.8 3.7-15S35.3 9 35.3 9c-.5-1-.2-2.2.8-2.7s2.2-.2 2.7.8c.2.3 4.3 7.6 4.3 17s-4.1 16.7-4.3 17c-.4.5-1.1.9-1.8.9zm-4.2-6.2c.1-.2 2.2-5 2.2-11.8 0-6.8-2.1-11.6-2.2-11.8-.4-1-1.6-1.5-2.6-1-1 .4-1.5 1.6-1 2.6 0 0 1.8 4.3 1.8 10.2 0 5.9-1.8 10.2-1.8 10.2-.4 1 0 2.2 1 2.6.3.1.5.2.8.2.8 0 1.5-.4 1.8-1.2zM23.3 33c.6-.1 1.1-.5 1.4-1 .1-.2 2.3-3.9 2.3-8s-2.2-7.9-2.3-8c-.6-1-1.8-1.3-2.7-.7-1 .6-1.3 1.8-.7 2.7 0 0 1.7 3 1.7 6 0 1.3-.3 2.7-.7 3.7l-13-11.2c-.5-.4-1.2-.6-1.8-.4-.6.2-1.2.6-1.4 1.3 0 .1-1.1 3.1-1.1 6.6 0 3.5 1.1 6.5 1.1 6.7.4 1 1.5 1.6 2.6 1.2 1-.4 1.6-1.5 1.2-2.6 0 0-.9-2.6-.9-5.3 0-.8.1-1.6.2-2.3l12.5 10.8c.4.3.8.5 1.3.5h.3z"}"></path></svg>`;
});
export {
  Component as default
};
