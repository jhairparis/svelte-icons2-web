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
  )}><path fill="${"#512DA8"}" d="${"M33.9 12.1H14.2L17.6 7c.4-.6 1-.9 1.7-.9h9.6c.7 0 1.3.3 1.7.9l3.3 5.1z"}"></path><path fill="${"#8667C4"}" d="${"M14 11H8V9.2C8 8.5 8.5 8 9.2 8h3.6c.7 0 1.2.5 1.2 1.2V11z"}"></path><path fill="${"#5E35B1"}" d="${"M40 42H8c-2.2 0-4-1.8-4-4V14c0-2.2 1.8-4 4-4h32c2.2 0 4 1.8 4 4v24c0 2.2-1.8 4-4 4z"}"></path><circle cx="${"24"}" cy="${"26"}" r="${"12"}" fill="${"#512DA8"}"></circle><circle cx="${"24"}" cy="${"26"}" r="${"9"}" fill="${"#B388FF"}"></circle><path fill="${"#C7A7FF"}" d="${"M29 23c-1.2-1.4-3-2.2-4.8-2.2-1.8 0-3.6.8-4.8 2.2-.5.5-.4 1.3.1 1.8s1.3.4 1.8-.1c1.5-1.7 4.3-1.7 5.8 0 .3.3.6.4 1 .4.3 0 .6-.1.9-.3.4-.4.5-1.3 0-1.8z"}"></path><ellipse cx="${"11"}" cy="${"13.5"}" fill="${"#8667C4"}" rx="${"2"}" ry="${"1.5"}"></ellipse></svg>`;
});
export {
  Component as default
};
