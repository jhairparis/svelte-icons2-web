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
  )}><g fill="${"#9C27B0"}"><path d="${"m31 8 11.9 1.6-9.8 9.8zM17 40 5.1 38.4l9.8-9.8zM8 17 9.6 5.1l9.8 9.8z"}"></path><path d="${"m9.3 21.2-4.2.8c-.1.7-.1 1.3-.1 2 0 4.6 1.6 9 4.6 12.4l3-2.6C10.3 31.1 9 27.6 9 24c0-.9.1-1.9.3-2.8zM24 5c-5.4 0-10.2 2.3-13.7 5.9l2.8 2.8C15.9 10.8 19.7 9 24 9c.9 0 1.9.1 2.8.3l.7-3.9C26.4 5.1 25.2 5 24 5zm14.7 21.8 4.2-.8c.1-.7.1-1.3.1-2 0-4.4-1.5-8.7-4.3-12.1l-3.1 2.5c2.2 2.7 3.4 6.1 3.4 9.5 0 1-.1 2-.3 2.9zm-3.8 7.5C32.1 37.2 28.3 39 24 39c-.9 0-1.9-.1-2.8-.3l-.7 3.9c1.2.2 2.4.3 3.5.3 5.4 0 10.2-2.3 13.7-5.9l-2.8-2.7z"}"></path><path d="${"m40 31-1.6 11.9-9.8-9.8z"}"></path></g></svg>`;
});
export {
  Component as default
};