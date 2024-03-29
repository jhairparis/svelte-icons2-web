import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><circle cx="${"12"}" cy="${"6"}" r="${"1"}"></circle><path d="${"M19.793 12.096A3.004 3.004 0 0 0 17 8h-.422A4.949 4.949 0 0 0 17 6c0-2.757-2.243-5-5-5S7 3.243 7 6c0 .703.149 1.381.422 2H7a3.004 3.004 0 0 0-2.793 4.096A3 3 0 0 0 3 14.5c0 4.963 4.037 9 9 9s9-4.037 9-9a3 3 0 0 0-1.207-2.404zM12 21.5c-3.859 0-7-3.141-7-7a1 1 0 1 1 2 0 5.007 5.007 0 0 0 4 4.898V12H7a1 1 0 1 1 0-2h4V8.816A2.99 2.99 0 0 1 9 6a3 3 0 1 1 6 0 2.99 2.99 0 0 1-2 2.816V10h4a1 1 0 1 1 0 2h-4v7.398a5.008 5.008 0 0 0 4-4.898 1 1 0 1 1 2 0c0 3.859-3.141 7-7 7zM7.321 13H10v4.962A4.015 4.015 0 0 1 8 14.5c0-.597-.263-1.133-.679-1.5zm9.358 0A1.996 1.996 0 0 0 16 14.5a4.015 4.015 0 0 1-2 3.462V13h2.679z"}"></path><circle cx="${"12"}" cy="${"6"}" r="${"1"}"></circle></svg>`;
});
export {
  Component as default
};
