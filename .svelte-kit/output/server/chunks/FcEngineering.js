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
  )}><path fill="${"#EF6C00"}" d="${"m37.4 24.6-11.6-2.2-3.9-11.2-3.8 1.3L22 23.6l-7.8 9 3 2.6 7.8-9 11.6 2.2.8-3.8z"}"></path><g fill="${"#FF9800"}"><path d="${"M24 19c-2.8 0-5 2.2-5 5s2.2 5 5 5 5-2.2 5-5-2.2-5-5-5zm0 7c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2z"}"></path><path d="${"M40.7 27c.2-1 .3-2 .3-3s-.1-2-.3-3l3.3-2.4c.4-.3.6-.9.3-1.4L40 9.8c-.3-.5-.8-.7-1.3-.4L35 11c-1.5-1.3-3.3-2.3-5.2-3l-.4-4.1c-.1-.5-.5-.9-1-.9h-8.6c-.5 0-1 .4-1 .9L18.2 8c-1.9.7-3.7 1.7-5.2 3L9.3 9.3c-.5-.2-1.1 0-1.3.5l-4.3 7.4c-.3.5-.1 1.1.3 1.4L7.3 21c-.2 1-.3 2-.3 3s.1 2 .3 3L4 29.4c-.4.3-.6.9-.3 1.4L8 38.2c.3.5.8.7 1.3.4L13 37c1.5 1.3 3.3 2.3 5.2 3l.4 4.1c.1.5.5.9 1 .9h8.6c.5 0 1-.4 1-.9l.4-4.1c1.9-.7 3.7-1.7 5.2-3l3.7 1.7c.5.2 1.1 0 1.3-.4l4.3-7.4c.3-.5.1-1.1-.3-1.4L40.7 27zM24 35c-6.1 0-11-4.9-11-11s4.9-11 11-11 11 4.9 11 11-4.9 11-11 11z"}"></path></g></svg>`;
});
export {
  Component as default
};