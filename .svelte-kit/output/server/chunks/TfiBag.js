import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M13 4V1.606C13 .721 12.263 0 11.357 0H5.658c-.905 0-1.642.721-1.642 1.606V4H1v13h15V4h-3zM5.016 1.606c0-.334.288-.606.642-.606h5.699c.355 0 .643.272.643.606V4H5.016V1.606zM15 16H2V8h13v8zm0-9H2V5h2.016v.643h1V5H12v.643h1V5h2v2z"}"></path></svg>`;
});
export {
  Component as default
};
