import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8 11.5h1V17H8v-5.5zm6-2.7V11H3V8.8l1.094-.487L5.2 2l-.429-.779L4.1 0h8.8l-.672 1.221L11.8 2l1.106 6.312L14 8.8zm-1 .649-.986-.44-.092-.524-1.168-6.659.17-.309.285-.517H5.791l.455.827-.06.346-1.2 6.836-.986.44V10h9v-.551z"}"></path></svg>`;
});
export {
  Component as default
};