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
  )}><path d="${"M20.437 11.5H6.536a2.628 2.628 0 0 1-1.723-.629L2.564 8.915a1.329 1.329 0 0 1 .006-2.084L4.813 4.88a2.619 2.619 0 0 1 1.723-.629h13.9a1.451 1.451 0 0 1 1.5 1.393v4.463a1.451 1.451 0 0 1-1.499 1.393Zm-13.9-6.25a1.64 1.64 0 0 0-1.067.384L3.215 7.6a.364.364 0 0 0-.152.281.349.349 0 0 0 .141.27l.011.01 2.254 1.961a1.644 1.644 0 0 0 1.067.384h13.9a.463.463 0 0 0 .5-.394V5.644a.463.463 0 0 0-.5-.393Zm10.927 14.499H3.563a1.451 1.451 0 0 1-1.5-1.394v-4.463a1.451 1.451 0 0 1 1.5-1.393h13.9a2.621 2.621 0 0 1 1.724.63l2.249 1.956a1.329 1.329 0 0 1-.007 2.083l-2.242 1.951a2.625 2.625 0 0 1-1.723.63ZM3.563 13.5a.463.463 0 0 0-.5.393v4.463a.463.463 0 0 0 .5.394h13.9a1.644 1.644 0 0 0 1.068-.385l2.253-1.96a.362.362 0 0 0 .152-.28.351.351 0 0 0-.141-.271l-.011-.01-2.254-1.96a1.64 1.64 0 0 0-1.067-.384Z"}" data-name="${"Signpost Duo 1"}"></path></svg>`;
});
export {
  Component as default
};