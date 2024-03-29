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
  )}><path fill="${"#2196F3"}" d="${"M33.5 27c-2.2-3-5.2-5-9.5-5s-7.3 2-9.5 5h19z"}"></path><path fill="${"#546E7A"}" d="${"M34.1 43H13.9c-1.1 0-1.9-.8-2-1.9l-.8-13c0-1.1.9-2.1 2-2.1h21.8c1.2 0 2.1 1 2 2.1l-.8 13c-.1 1.1-.9 1.9-2 1.9z"}"></path><circle cx="${"34"}" cy="${"29"}" r="${"1"}" fill="${"#B0BEC5"}"></circle><g fill="${"#FFB74D"}"><circle cx="${"24"}" cy="${"12"}" r="${"8"}"></circle><path d="${"M16.1 42.4 15 43.5c-.6.6-1.6.6-2.2 0l-3.3-3.3c-.6-.6-.6-1.6 0-2.2l1.1-1.1c1.3-1.3 3.1-1.3 4.4 0l1.1 1.1c1.2 1.3 1.2 3.2 0 4.4zM31.9 38l1.1-1.1c1.3-1.3 3.1-1.3 4.4 0l1.1 1.1c.6.6.6 1.6 0 2.2l-3.3 3.3c-.6.6-1.6.6-2.2 0l-1.1-1.1c-1.2-1.2-1.2-3.1 0-4.4z"}"></path></g></svg>`;
});
export {
  Component as default
};
