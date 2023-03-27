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
  )}><path fill="${"#039BE5"}" d="${"M17 29h14v2H17zm-4 4h22v2H13zm-4 4h30v2H9zm-4 4h38v2H5z"}"></path><path fill="${"#81D4FA"}" d="${"M35 13c-.4 0-.8 0-1.2.1C32.9 8.5 28.9 5 24 5c-4.1 0-7.6 2.5-9.2 6H14c-4.4 0-8 3.6-8 8s3.6 8 8 8h21c3.9 0 7-3.1 7-7s-3.1-7-7-7z"}"></path><path fill="${"#039BE5"}" d="${"M28 21c0-2.2-1.8-4-4-4s-4 1.8-4 4v6h8v-6z"}"></path></svg>`;
});
export {
  Component as default
};