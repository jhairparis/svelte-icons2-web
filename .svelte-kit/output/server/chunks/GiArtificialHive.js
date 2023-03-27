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
  )}><path d="${"M251.313 23.844 49.438 140.25l-.376 233.5 202.625 116.406L453.563 373.75l.375-233.5L251.313 23.844zm-1.407 57.062 52.406 30.25v60.5l-52.406 30.25-52.406-30.25v-60.5l52.406-30.25zm-105.344 60.47 52.407 30.25v60.5l-52.407 30.25 52.406 30.25v60.53l-52.407 30.25-52.407-30.25v-60.53l52.406-30.25-52.406-30.25v-60.5l52.406-30.25zm210.313 0 52.406 30.25v60.5l-52.405 30.25 52.406 30.25v60.53l-52.405 30.25-52.406-30.25v-60.53l52.405-30.25-52.406-30.25v-60.5l52.405-30.25zM249.905 202l52.407 30.25v60.5l-52.28 30.188 52.28 30.156v60.53l-52.406 30.25-52.406-30.25v-60.53l52.28-30.156-52.28-30.188v-60.5L249.906 202z"}"></path></svg>`;
});
export {
  Component as default
};