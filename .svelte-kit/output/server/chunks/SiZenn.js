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
  )}><path d="${"M.264 23.771h4.984a.807.807 0 0 0 .645-.352L19.614.874c.176-.293-.029-.645-.381-.645h-4.72a.627.627 0 0 0-.557.323L.03 23.361c-.088.176.029.41.234.41zm17.181-.352 6.479-10.408a.477.477 0 0 0-.41-.733h-4.691a.517.517 0 0 0-.44.235l-6.655 10.643c-.176.264.029.616.352.616h4.779a.648.648 0 0 0 .586-.353z"}"></path></svg>`;
});
export {
  Component as default
};