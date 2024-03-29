import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M6.5 15H9a1.502 1.502 0 0 0 1.307-2.236 1.5 1.5 0 0 0 .31-2.264 1.494 1.494 0 0 0 .297-1.5H14.5c.827 0 1.5-.673 1.5-1.5S15.327 6 14.5 6H8.333l1.466-2.75a1.502 1.502 0 0 0-2.381-1.789l-.011.012L4 5.21V4.5a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-.691l2.276 1.138A.496.496 0 0 0 6.5 15zm-4-1a.5.5 0 1 1 0-1 .5.5 0 0 1 0 1zm4.118 0L4 12.691V6.694L8.143 2.15a.5.5 0 0 1 .782.614l-1.866 3.5a.502.502 0 0 0 .442.735h7a.5.5 0 0 1 0 1h-5a.5.5 0 0 0 0 1 .5.5 0 0 1 0 1 .5.5 0 0 0 0 1 .5.5 0 0 1 0 1h-.5a.5.5 0 0 0 0 1 .5.5 0 0 1 0 1H6.619z"}"></path></svg>`;
});
export {
  Component as default
};
