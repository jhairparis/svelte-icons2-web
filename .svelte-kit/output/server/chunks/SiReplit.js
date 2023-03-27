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
  )}><path d="${"M12.265.002a11.911 11.911 0 0 0-2.437.204c13.876 1.704 10.27 17.94 1.717 17.819 0 0 12.453 1.625 11.673-10.215A11.911 11.911 0 0 0 12.265.002zM8.213.827c-.2.002-.402.008-.61.016A11.856 11.856 0 0 0 .146 13.608C2.93-.421 18.805 4.122 17.9 12.688c0 0 2.85-12.014-9.688-11.861zm1.454 5.035C6.002 5.886.691 7.45.816 16.344a12.013 12.013 0 0 0 2.897 4.33c.052.051.108.1.162.149a12.02 12.02 0 0 0 1.137.926c.061.044.12.092.181.135a11.93 11.93 0 0 0 1.312.779c.132.068.266.13.4.193a11.854 11.854 0 0 0 1.199.486c.1.034.195.077.297.109a11.874 11.874 0 0 0 1.49.353c.153.027.307.05.461.07a12.016 12.016 0 0 0 1.578.123l.06.003c.4 0 .792-.021 1.18-.06-13.949-3.327-8.645-18.924-.114-17.68 0 0-1.469-.41-3.389-.398zm2.436 2.762a3.355 3.355 0 1 0 3.354 3.356 3.355 3.355 0 0 0-3.354-3.356zm-5.95 2.192S2.82 23.09 16.172 23.196a11.978 11.978 0 0 0 7.743-9.992c.033-.319.043-.644.05-.97.001-.085.013-.168.013-.255 0-.371-.023-.737-.056-1.1-3.527 13.887-19.132 8.448-17.77-.063z"}"></path></svg>`;
});
export {
  Component as default
};