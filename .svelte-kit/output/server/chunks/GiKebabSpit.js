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
  )}><path d="${"M247 22v32.46c2.4-.04 4.8-.08 7.2-.09 3.6-.02 7.2 0 10.8.04V22h-18zm7.3 50.37c-39.7.25-79.5 4.95-107.9 13.31-14.1 4.18-25.4 9.38-32.1 14.62-6.7 5.2-8.4 9-7.8 13.5 2.6 18.1 5.2 35.4 8 52.2 20.6 8.5 44.9 10.7 68.4 14.1-9.1 7.7-38.2 16.1-63.6 12.2 6 31.3 12.9 61 21.8 90.7 32.5 14.4 67.4 20.9 103.9 22.7-31.2 6.8-62.5 12.2-93.7 9 6.4 18.7 13.7 37.7 22 57.4 17.4 4.8 37.8 8.9 61.6 12.1-17.5 3.2-33.7 11.5-53.5 6.3 5.4 12.2 11.3 24.7 17.6 37.6 1.8 3.7 8.4 8.2 19.2 10.9 10.8 2.6 24.9 3.4 38.8 2.7 14-.7 27.8-3.1 38.3-6.3 10.4-3.2 16.5-8.6 16.5-8.6 21.8-48.3 39.5-89.3 53.5-129.4-19.7 3.2-41.3-2.1-55.1-7.6 20.7-.5 41.5-1 60-6.8 4.1-12.4 7.9-24.7 11.3-37.2-14.9-2.9-27.2-10.5-35.8-16.9 14-.2 28.9.8 40.7-2.4 5.9-24.8 10.6-50.5 14.1-78.6-49.6 5-105.6 1.2-149-11 56.4-.7 109.1-3.3 151.6-13 .3-2.3.5-4.6.7-7 .6-6.2-1.8-11-8.7-16.7-6.9-5.7-18.3-11.12-32.6-15.38-28.5-8.52-68.4-12.71-108.2-12.45zM452.4 232.8s-48.1 42.2-44.5 69.5c1.8 13.8 31.3 14.2 30.8 28.1-.7 19.8-43.9 17-46.7 36.6-2.3 16.2 30.1 23.5 28.6 39.8-2.6 29.1-63.1 60.9-63.1 60.9s84.7-25 90.2-60.9c1.9-12.1-22.8-16.5-22.8-28.7 0-24.5 46.2-33.3 45.6-57.8-.4-14.8-25.4-19.1-29.2-33.4-4.7-17.8 11.1-54.1 11.1-54.1zm-391.57 37s-41.34 68.8-21.59 94.3c4.71 6 17.54-4.8 23.02.6 14.57 14.2-11.61 46.6 2.73 61.1 5.87 6 17.32-1.7 25.04 1.5 17.97 7.5 43.37 39.5 43.37 39.5s-5.2-52.2-24.7-64.3c-5.8-3.6-15.11 6.4-20.25 2-17.23-14.9 13.95-53.2-3.19-68.2-4.79-4.3-14.22 5.7-19.08 1.5-17.32-14.7-5.35-68-5.35-68zM265 459.2c-2.3.2-4.7.4-7 .5-3.7.2-7.3.3-11 .3v32h18v-32.8z"}"></path></svg>`;
});
export {
  Component as default
};