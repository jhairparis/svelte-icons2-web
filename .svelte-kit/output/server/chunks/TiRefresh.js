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
  )}><path d="${"M12.872 13.191H18V8.064c-.008-1.135-.671-1.408-1.473-.605l-1.154 1.158a5.756 5.756 0 0 0-3.566-1.23c-1.55 0-3.009.604-4.104 1.701A5.748 5.748 0 0 0 6 13.191c0 1.553.604 3.012 1.701 4.107A5.77 5.77 0 0 0 11.807 19c1.55 0 3.009-.605 4.106-1.703.296-.297.558-.621.78-.965a1.16 1.16 0 1 0-1.954-1.255c-.133.207-.292.4-.468.58a3.465 3.465 0 0 1-2.464 1.02 3.46 3.46 0 0 1-2.464-1.02 3.466 3.466 0 0 1-1.02-2.465c0-.93.362-1.805 1.02-2.461a3.466 3.466 0 0 1 2.464-1.021c.688 0 1.346.201 1.909.572l-1.448 1.451c-.803.802-.53 1.458.604 1.458z"}"></path></svg>`;
});
export {
  Component as default
};