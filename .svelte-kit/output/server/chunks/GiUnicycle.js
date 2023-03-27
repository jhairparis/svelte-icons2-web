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
  )}><path d="${"M198 38.33c-2 8.81.3 25.34 6.2 32.52.1.12 115.8 0 115.8 0 4 0 4-27.85-17.8-27.99-21.9-.15-64.3-5.08-83.9-9.94-19.7-4.85-18.8-1.12-20.3 5.41zM247 89v23h18V89zm0 41v14h18v-14zm0 32v159.3c2.9-.9 6-1.3 9-1.3 3.1 0 6.1.5 9 1.3V162zm35.6 55.6V236c53 12 92.4 59.3 92.4 116 0 65.8-53.2 119-119 119s-119-53.2-119-119c0-56.5 39.2-103.7 92-115.9v-18.4c-62.7 12.5-110 68-110 134.3 0 75.6 61.4 137 137 137s137-61.4 137-137c0-66.5-47.5-122-110.4-134.4zM288 295v12.3L271.3 324c5.4 2.9 9.8 7.3 12.7 12.7l23.7-23.7H336v-18zm-32 43c-7.8 0-14 6.2-14 14s6.2 14 14 14 14-6.2 14-14-6.2-14-14-14zm-28 29.3L204.3 391H176v18h48v-12.3l16.7-16.7c-5.4-2.9-9.8-7.3-12.7-12.7z"}"></path></svg>`;
});
export {
  Component as default
};