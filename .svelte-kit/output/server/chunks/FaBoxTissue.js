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
  )}><path d="${"m383.88 287.82 64-192H338.47a70.2 70.2 0 0 1-66.59-48 70.21 70.21 0 0 0-66.6-48H63.88l64 288Zm-384 192a32 32 0 0 0 32 32h448a32 32 0 0 0 32-32v-64h-512Zm480-256h-40.94l-21.33 64h14.27a16 16 0 0 1 0 32h-352a16 16 0 1 1 0-32h15.21l-14.22-64h-49a32 32 0 0 0-32 32v128h512v-128a32 32 0 0 0-31.99-32Z"}"></path></svg>`;
});
export {
  Component as default
};
