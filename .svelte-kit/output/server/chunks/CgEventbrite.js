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
  )}><path fill-rule="${"evenodd"}" d="${"M14.673 17.438a6.002 6.002 0 0 1-6.819-1.234l14.01-6.533a10.047 10.047 0 0 0-.663-1.897C18.867 2.768 12.917.603 7.91 2.937 2.907 5.27.742 11.22 3.076 16.227c2.334 5.005 8.284 7.17 13.289 4.836a9.974 9.974 0 0 0 5.317-6.077h-4.339a5.972 5.972 0 0 1-2.669 2.452ZM9.602 6.562a6.002 6.002 0 0 0-3.438 6.017l10.257-4.783a6.002 6.002 0 0 0-6.819-1.234Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
