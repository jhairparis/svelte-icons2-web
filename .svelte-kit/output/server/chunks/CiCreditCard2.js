import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g data-name="${"Credit Card 2"}"><path d="${"M19.437 18.859H4.563a2.5 2.5 0 0 1-2.5-2.5V7.641a2.5 2.5 0 0 1 2.5-2.5h14.874a2.5 2.5 0 0 1 2.5 2.5v8.718a2.5 2.5 0 0 1-2.5 2.5ZM4.563 6.141a1.5 1.5 0 0 0-1.5 1.5v8.718a1.5 1.5 0 0 0 1.5 1.5h14.874a1.5 1.5 0 0 0 1.5-1.5V7.641a1.5 1.5 0 0 0-1.5-1.5Z"}"></path><path d="${"M8.063 14.247h-3a.5.5 0 1 1 0-1h3a.5.5 0 1 1 0 1Zm10.871.002h-6.5a.5.5 0 0 1 0-1h6.5a.5.5 0 0 1 0 1Z"}"></path><rect x="${"16.434"}" y="${"7.14"}" rx="${".5"}" transform="${"rotate(-90 17.434 9.14)"}"></rect></g></svg>`;
});
export {
  Component as default
};
