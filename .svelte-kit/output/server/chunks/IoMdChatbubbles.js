import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M132.8 368c-20.2 0-44.8-24.6-44.8-44.8V160h-9.6C61.7 160 48 173.7 48 190.4V464l58.5-58h215.1c16.7 0 30.4-14.1 30.4-30.9V368H132.8z"}"></path><path d="${"M429.1 48H149.9C130.7 48 115 63.7 115 82.9V309c0 19.2 15.7 35 34.9 35h238.2l75.9 53V82.9c0-19.2-15.7-34.9-34.9-34.9z"}"></path></svg>`;
});
export {
  Component as default
};