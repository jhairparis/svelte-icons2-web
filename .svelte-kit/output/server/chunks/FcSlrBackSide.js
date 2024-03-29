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
  )}><path fill="${"#5E35B1"}" d="${"M40 10h-7.6l-2-3c-.4-.6-1-.9-1.7-.9h-9.6c-.7 0-1.3.3-1.7.9l-2 3H8c-2.2 0-4 1.8-4 4v24c0 2.2 1.8 4 4 4h32c2.2 0 4-1.8 4-4V14c0-2.2-1.8-4-4-4z"}"></path><path fill="${"#F57C00"}" d="${"M11 16h20c.6 0 1 .4 1 1v16c0 .6-.4 1-1 1H11c-.6 0-1-.4-1-1V17c0-.6.4-1 1-1z"}"></path><path fill="${"#942A09"}" d="${"M18.9 22 12 32h13.8z"}"></path><circle cx="${"27"}" cy="${"21"}" r="${"2"}" fill="${"#FFF9C4"}"></circle><path fill="${"#BF360C"}" d="${"m25.2 26-4.8 6H30z"}"></path><g fill="${"#8667C4"}"><path d="${"M34 10h6v-.8c0-.7-.5-1.2-1.2-1.2h-3.6c-.7 0-1.2.5-1.2 1.2v.8z"}"></path><circle cx="${"38"}" cy="${"18"}" r="${"2"}"></circle><circle cx="${"38"}" cy="${"24"}" r="${"2"}"></circle><circle cx="${"38"}" cy="${"30"}" r="${"2"}"></circle></g></svg>`;
});
export {
  Component as default
};
