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
  )}><path d="${"M19.5 10.705a.948.948 0 0 0-.92-.67h-5.07v-1.68l4.75.17h.02a.734.734 0 0 0 .73-.73.718.718 0 0 0-.75-.72l-4.75.17v-1.84l4.78-.67a.723.723 0 0 0 .62-.72.487.487 0 0 0-.01-.12.716.716 0 0 0-.87-.58l-4.6.98a1.5 1.5 0 0 0-2.92.47v.15l-1.14.24a1.494 1.494 0 0 0-2.86.61v.01l-1.2.25a.267.267 0 0 0-.2.26v.04a.257.257 0 0 0 .29.21l1.11-.15V7.5l-1.25.04a.263.263 0 0 0-.25.26.256.256 0 0 0 .25.26l1.25.04v1.94H5.425a.963.963 0 0 0-.92.68 10.119 10.119 0 0 0 1.19 8.53l.61.92a1.233 1.233 0 0 0 1.05.57h9.3a1.228 1.228 0 0 0 1.04-.57l.61-.92a10.136 10.136 0 0 0 1.195-8.545Zm-7.99-5.94a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v5.24h-1Zm-2 1.2 1-.14v1.53l-1 .03Zm0 2.25 1 .03v1.79h-1Zm-2-2.45a.5.5 0 0 1 .5-.5.5.5 0 0 1 .5.5v4.24h-1Zm9.96 12.93-.6.93a.261.261 0 0 1-.21.11h-9.3a.236.236 0 0 1-.21-.11l-.61-.93a9.229 9.229 0 0 1-1.11-7.66l13.12-.03a9.122 9.122 0 0 1-1.085 7.695Z"}" data-name="${"Bowl & Noodles"}"></path></svg>`;
});
export {
  Component as default
};