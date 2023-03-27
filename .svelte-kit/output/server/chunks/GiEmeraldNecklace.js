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
  )}><path d="${"M95.92 25.17c-14.73-.32-29.25 5.4-39.24 19.19-19.29 26.68-23.67 60.44-18.07 95.14 5.61 34.7 21.08 70.6 42.55 103.4C118.2 299.5 172.9 347.4 229 359.6v-18.7c-47.8-12.5-98.6-55.7-132.78-107.8-20.32-31.1-34.76-65-39.84-96.5-5.08-31.4-.93-59.81 14.88-81.68 5.96-8.22 12.01-11.48 19.93-11.88 2.65-.13 5.5 0 8.62.48 12.49 1.7 28.49 8.83 45.69 18.02 31.7 16.92 66.8 40.96 101.5 44.66V87.91c-27.2-4.13-61.1-25.2-93-42.25-17.7-9.49-34.9-17.7-51.8-19.99-2.1-.28-4.17-.45-6.28-.5zm320.08 0c-2.1 0-4.2.21-6.3.5-16.8 2.29-34 10.5-51.7 19.99-31.9 17.05-65.8 38.12-93 42.25v18.19c34.7-3.7 69.8-27.65 101.5-44.57 17.2-9.19 33.2-16.32 45.7-18.02 12.5-1.7 20.6.44 28.5 11.41 15.8 21.87 20 50.28 14.9 81.68-5.1 31.5-19.5 65.4-39.8 96.5-34.2 52.1-85 95.3-132.8 107.8v18.7c56.1-12.2 110.8-60.1 147.8-116.7 21.5-32.8 37-68.7 42.6-103.4 5.6-34.7 1.2-68.46-18.1-95.13-10-13.8-24.5-19.51-39.3-19.2zM247 344.2v32.4h18v-32.4c-3 .2-6 .4-9 .4s-6-.2-9-.4zm-12.3 50.4-10.5 7 31.8 21.2 31.8-21.2-10.5-7zM217 418.4v30.4l22.8-15.2zm78 0-22.8 15.2 22.8 15.2zm-39 26-31.8 21.2 31.8 21.2 31.8-21.2z"}"></path></svg>`;
});
export {
  Component as default
};