import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M.15 184.42C-2.17 244.21 23 298.06 64 334.88V512h160V316.51L3.67 156.25a182.28 182.28 0 0 0-3.52 28.17ZM509.22 275c-21-47.12-48.5-151.75-73.12-186.75A208.11 208.11 0 0 0 266.11 0H200C117 0 42.48 50.57 13.25 123.65L239.21 288h272.55a31.35 31.35 0 0 0-2.54-13ZM320 224a32 32 0 1 1 32-32 32.07 32.07 0 0 1-32 32Zm16 144h160l16-48H256v192h145.88a64 64 0 0 0 60.71-43.76L464 464H336a16 16 0 0 1 0-32h138.67l10.67-32H336a16 16 0 0 1 0-32Z"}"></path></svg>`;
});
export {
  Component as default
};
