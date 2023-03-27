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
  )}><path d="${"M7.28 5.434a3.99 3.99 0 0 0-2.944 1.252h-.002c-.054-.003-.107-.002-.162-.002A4.194 4.194 0 0 0 .473 8.94c-.308.6-.423 1.244-.459 1.9-.032.589 0 1.186 0 1.77v5.652h3.17s.002-2.784 0-5.178c-.001-1.611-.012-3.047 0-3.342.056-1.394.437-2.305 1.148-3.05 2.359.001 3.886 1.608 3.97 4.167.02.588.026 3.73.026 3.73v3.673h3.168v-4.965c0-1.5.013-2.8-.092-3.695-.292-2.5-1.82-4.168-4.125-4.168zm8.39.3-3.166.004v4.965c0 1.501-.013 2.8.092 3.695.292 2.5 1.82 4.168 4.124 4.168a3.99 3.99 0 0 0 2.944-1.252h.002c.054.003.109.002.164.002 1.543 0 2.99-.883 3.697-2.255.309-.6.423-1.245.459-1.9.032-.59 0-1.187 0-1.77V5.738h-3.17s-.002 2.784 0 5.178c.002 1.611.012 3.047 0 3.342-.056 1.393-.437 2.305-1.148 3.05-2.359-.001-3.886-1.609-3.97-4.167a156.36 156.36 0 0 1-.028-3.733Z"}"></path></svg>`;
});
export {
  Component as default
};