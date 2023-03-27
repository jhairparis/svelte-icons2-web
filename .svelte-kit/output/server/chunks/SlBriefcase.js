import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M960.016 191.472H704.415v-62c0-52.944-43.056-96-96-96H415.983c-52.944 0-96 43.056-96 96v62H64.015c-35.184 0-64 28.816-64 64v224.256h-.032v64h.032v382.816c0 35.184 28.816 64 64 64h896c35.184 0 64-28.816 64-64V255.472c0-35.184-28.816-64-64-64h.001zm-576.033-62c0-17.664 14.336-32 32-32h192.432c17.664 0 32 14.336 32 32v62H383.983zm-319.967 126h896v224.256H607.648v-32.752c0-35.28-28.72-64-64-64h-63.745c-35.28 0-64 28.72-64 64v32.752H64.017V255.472zm479.679 352.656h-63.809V446.976h63.745zm-479.68 318.4V543.712h351.872v64.4c0 35.281 28.72 64 64 64h63.744c35.28 0 64-28.719 64-64v-64.4h352.368v382.816H64.015z"}"></path></svg>`;
});
export {
  Component as default
};