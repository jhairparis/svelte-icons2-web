import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><g data-name="${"Stop Sign 1"}"><path d="${"M12.531 15.688H10.14a.5.5 0 0 1 0-1h2.391a1.094 1.094 0 0 0 0-2.188h-1.063a2.094 2.094 0 0 1 0-4.188h2.391a.5.5 0 0 1 0 1h-2.391a1.094 1.094 0 0 0 0 2.188h1.063a2.094 2.094 0 0 1 0 4.188Z"}"></path><path d="${"M15.079 21.933H8.92a2.482 2.482 0 0 1-1.767-.733L2.8 16.847a2.484 2.484 0 0 1-.732-1.768V8.921A2.486 2.486 0 0 1 2.8 7.153L7.153 2.8a2.482 2.482 0 0 1 1.767-.733h6.159a2.482 2.482 0 0 1 1.767.732L21.2 7.154a2.482 2.482 0 0 1 .732 1.767v6.158a2.491 2.491 0 0 1-.731 1.768L16.846 21.2a2.482 2.482 0 0 1-1.767.733ZM8.92 3.067a1.511 1.511 0 0 0-1.06.439L3.506 7.861a1.489 1.489 0 0 0-.439 1.06v6.158a1.491 1.491 0 0 0 .439 1.061l4.354 4.354a1.511 1.511 0 0 0 1.06.439h6.159a1.511 1.511 0 0 0 1.06-.439l4.355-4.354a1.494 1.494 0 0 0 .439-1.061V8.921a1.511 1.511 0 0 0-.439-1.06l-4.355-4.355a1.511 1.511 0 0 0-1.06-.439Z"}"></path></g></svg>`;
});
export {
  Component as default
};