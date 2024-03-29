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
  )}><path d="${"m12 21.312-7.121-7.121a3.002 3.002 0 0 1 0-4.242C5.973 8.855 7.857 8.811 9 9.834V5c0-1.654 1.346-3 3-3s3 1.346 3 3v4.834c1.143-1.023 3.027-.979 4.121.115a3.002 3.002 0 0 1 0 4.242L12 21.312zM7 11.07a.999.999 0 0 0-.707 1.707L12 18.484l5.707-5.707a.999.999 0 0 0 0-1.414 1.021 1.021 0 0 0-1.414 0L13 14.656V5a1.001 1.001 0 0 0-2 0v9.656l-3.293-3.293A.991.991 0 0 0 7 11.07z"}"></path></svg>`;
});
export {
  Component as default
};
