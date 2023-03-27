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
  )}><path fill="${"#78909C"}" d="${"M40 41H8c-2.2 0-4-1.8-4-4V16.1c0-1.3.6-2.5 1.7-3.3L24 0l18.3 12.8c1.1.7 1.7 2 1.7 3.3V37c0 2.2-1.8 4-4 4z"}"></path><path fill="${"#AED581"}" d="${"M14 1h20v31H14z"}"></path><g fill="${"#558B2F"}"><path d="${"M13 0v33h22V0H13zm20 31H15V2h18v29z"}"></path><path d="${"M34 3c0 1.7-.3 3-2 3s-3-1.3-3-3 1.3-2 3-2 2 .3 2 2zM16 1c1.7 0 3 .3 3 2s-1.3 3-3 3-2-1.3-2-3 .3-2 2-2z"}"></path><circle cx="${"24"}" cy="${"8"}" r="${"2"}"></circle><circle cx="${"24"}" cy="${"20"}" r="${"6"}"></circle></g><path fill="${"#CFD8DC"}" d="${"M40 41H8c-2.2 0-4-1.8-4-4V17l20 13 20-13v20c0 2.2-1.8 4-4 4z"}"></path></svg>`;
});
export {
  Component as default
};