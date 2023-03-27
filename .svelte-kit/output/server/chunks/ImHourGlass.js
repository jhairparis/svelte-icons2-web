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
  )}><path d="${"M11.39 8C13.542 6.635 15 4.012 15 1c0-.339-.019-.672-.054-1H1.055a9.155 9.155 0 0 0-.054 1c0 3.012 1.457 5.635 3.609 7-2.152 1.365-3.609 3.988-3.609 7 0 .339.019.672.054 1h13.891c.036-.328.054-.661.054-1 0-3.012-1.457-5.635-3.609-7zM2.5 15c0-2.921 1.253-5.397 3.5-6.214V7.214C3.753 6.397 2.5 3.92 2.5 1h11c0 2.921-1.253 5.397-3.5 6.214v1.572c2.247.817 3.5 3.294 3.5 6.214h-11zm7.182-4.538C8.562 9.827 8.501 9.003 8.5 8.503V7.499c0-.5.059-1.327 1.184-1.963.602-.349 1.122-.88 1.516-1.537H4.8c.395.657.916 1.188 1.518 1.538 1.12.635 1.181 1.459 1.182 1.959V8.5c0 .5-.059 1.327-1.184 1.963-1.135.659-1.98 1.964-2.236 3.537h7.839c-.256-1.574-1.102-2.879-2.238-3.538z"}"></path></svg>`;
});
export {
  Component as default
};