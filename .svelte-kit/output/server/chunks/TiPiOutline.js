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
  )}><path d="${"M20.121 7.121c-.566-.567-1.32-.879-2.121-.879s-1.555.312-2.121.879c-.233.233-.546.362-.879.362s-.646-.129-.879-.362C12.755 5.755 10.936 5.003 9 5.003s-3.755.752-5.121 2.118C3.312 7.688 3 8.441 3 9.242s.312 1.555.879 2.121c.566.567 1.32.879 2.121.879V17c0 1.654 1.346 3 3 3s3-1.346 3-3c0 1.654 1.346 3 3 3s3-1.346 3-3v-4.166a7.21 7.21 0 0 0 2.12-1.47c.568-.567.88-1.321.88-2.122s-.312-1.554-.879-2.121zm-1.414 2.828A5.222 5.222 0 0 1 16 11.386V17a1 1 0 1 1-2 0v-5.614a5.215 5.215 0 0 1-2.707-1.437A3.19 3.19 0 0 0 10 9.174V17a1 1 0 1 1-2 0V9.173a3.186 3.186 0 0 0-1.293.776.997.997 0 0 1-1.414 0 .999.999 0 0 1 0-1.414C6.314 7.514 7.657 7.003 9 7.003s2.685.511 3.707 1.532A3.235 3.235 0 0 0 15 9.483c.831 0 1.661-.316 2.293-.948a.997.997 0 0 1 1.414 0 .999.999 0 0 1 0 1.414z"}"></path></svg>`;
});
export {
  Component as default
};