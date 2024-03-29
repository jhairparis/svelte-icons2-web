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
  )}><path d="${"M1.875 0A1.87 1.87 0 0 0 0 1.875v20.25A1.87 1.87 0 0 0 1.875 24h20.25A1.87 1.87 0 0 0 24 22.125V1.875A1.87 1.87 0 0 0 22.125 0Zm.375 6H3v12h-.75Zm7.085 0h.79L5.29 18h-.791Zm6.79 0a6 6 0 1 1 0 12 6 6 0 0 1 0-12zm0 .75a5.25 5.25 0 1 0 .001 10.501 5.25 5.25 0 0 0-.001-10.501z"}"></path></svg>`;
});
export {
  Component as default
};
