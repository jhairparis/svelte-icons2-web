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
  )}><circle cx="${"28"}" cy="${"9"}" r="${"5"}" fill="${"#FF9800"}"></circle><path fill="${"#00796B"}" d="${"m29 27.3-9.2-4.1c-1-.5-1.5 1-2 2s-4.1 7.2-3.8 8.3c.3.9 1.1 1.4 1.9 1.4.2 0 .4 0 .6-.1L28.8 31c.8-.2 1.4-1 1.4-1.8s-.5-1.6-1.2-1.9z"}"></path><path fill="${"#009688"}" d="${"m26.8 15.2-2.2-1c-1.3-.6-2.9 0-3.5 1.3L9.2 41.1c-.5 1 0 2.2 1 2.7.3.1.6.2.9.2.8 0 1.5-.4 1.8-1.1 0 0 9.6-13.3 10.4-14.9s4.9-9.3 4.9-9.3c.5-1.3 0-2.9-1.4-3.5z"}"></path><path fill="${"#FF9800"}" d="${"M40.5 15.7c-.7-.8-2-1-2.8-.3l-5 4.2-6.4-3.5c-1.1-.6-2.6-.4-3.3.9-.8 1.3-.4 2.9.8 3.4l8.3 3.4c.3.1.6.2.9.2.5 0 .9-.2 1.3-.5l6-5c.8-.7.9-1.9.2-2.8zm-28.8 7.4 3.4-5.1 4.6.6 1.5-3.1c.4-.9 1.2-1.4 2.1-1.5h-9.2c-.7 0-1.3.3-1.7.9l-4 6c-.6.9-.4 2.2.6 2.8.2.2.6.3 1 .3.6 0 1.3-.3 1.7-.9z"}"></path></svg>`;
});
export {
  Component as default
};