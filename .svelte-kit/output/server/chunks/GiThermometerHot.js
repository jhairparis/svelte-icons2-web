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
  )}><path d="${"M160 36.5c-11.688 0-23 6.674-23 25.5v25h14V64h18v337.313A32 32 0 0 1 192 432a32 32 0 0 1-32 32 32 32 0 0 1-32-32 32 32 0 0 1 23-30.688V361h-14v21h.01c-18.926 8.673-32.01 27.74-32.01 50 0 30.482 24.518 55 55 55s55-24.518 55-55c0-22.26-13.084-41.327-32.01-50h.01V62c0-18.826-11.313-25.5-23-25.5zm96 16.273c-12.063 20.105-25.092 39.243-39.064 57.438A586.863 586.863 0 0 1 201 103.329v19.082c16.962-7.01 35.53-10.894 55-10.894 79.69 0 144.484 64.794 144.484 144.484 0 79.69-64.794 144.484-144.484 144.484-11.006 0-21.727-1.24-32.033-3.582a72.406 72.406 0 0 1 8.44 25.975A610.589 610.589 0 0 1 256 459.228c12.063-20.105 25.092-39.243 39.064-57.438 21.198 8.77 42.05 18.83 62.55 30.21.394-23.442 2.11-46.53 5.113-69.273A606.595 606.595 0 0 1 432 357.613c-11.38-20.5-21.44-41.35-30.21-62.55 18.194-13.97 37.332-27 57.437-39.063-20.105-12.063-39.243-25.092-57.438-39.064 8.77-21.198 18.83-42.05 30.21-62.55-23.442-.394-46.53-2.11-69.273-5.113A606.595 606.595 0 0 1 357.612 80c-20.5 11.38-41.35 21.44-62.55 30.21-13.97-18.194-27-37.332-39.063-57.437zM137 105v14h7v18h-7v14h14v-46h-14zm119 24.516c-19.728 0-38.376 4.514-55 12.54v227.89c16.624 8.024 35.272 12.538 55 12.538 69.962 0 126.484-56.522 126.484-126.484 0-69.962-56.522-126.484-126.484-126.484zM119 152.47a610.331 610.331 0 0 1-39 1.917c11.38 20.5 21.44 41.35 30.21 62.55-18.194 13.97-37.332 27-57.437 39.063 20.105 12.063 39.243 25.092 57.438 39.064-8.77 21.198-18.83 42.05-30.21 62.55 13.112.22 26.11.87 39 1.913v-57.644A143.838 143.838 0 0 1 111.517 256a143.83 143.83 0 0 1 7.484-45.88v-57.65zM137 169v14h7v18h-7v14h14v-46h-14zm0 64v14h7v18h-7v14h14v-46h-14zm0 64v14h7v18h-7v14h14v-46h-14zm25.11 111.648c-25.186 0-25.186 26.678-25.186 26.678s7.05-10.4 11.31-14.904c4.195-4.435 13.877-11.774 13.877-11.774z"}"></path></svg>`;
});
export {
  Component as default
};