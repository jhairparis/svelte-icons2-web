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
  )}><path d="${"M5.999 17a3.014 3.014 0 0 1-1.873-.658 2.978 2.978 0 0 1-1.107-2.011 2.979 2.979 0 0 1 .639-2.206l4-5c.978-1.225 2.883-1.471 4.143-.523l1.674 1.254 2.184-2.729a3 3 0 1 1 4.682 3.747l-4 5c-.977 1.226-2.882 1.471-4.143.526l-1.674-1.256-2.184 2.729A2.977 2.977 0 0 1 5.999 17zM10 8a.997.997 0 0 0-.781.374l-4 5.001a.99.99 0 0 0-.213.734c.03.266.161.504.369.67a.996.996 0 0 0 1.406-.155l3.395-4.244L13.4 12.8c.42.316 1.056.231 1.381-.176l4-5.001a.992.992 0 0 0 .213-.734.994.994 0 0 0-.369-.67.996.996 0 0 0-1.406.156l-3.395 4.242L10.6 8.2A.986.986 0 0 0 10 8zm9 13H5a1 1 0 1 1 0-2h14a1 1 0 1 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
