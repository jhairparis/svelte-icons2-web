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
  )}><path d="${"M14.075 12.028a2.506 2.506 0 0 0-2.506-2.506 2.506 2.506 0 0 0-2.505 2.506 2.506 2.506 0 0 0 2.506 2.506 2.506 2.506 0 0 0 2.505-2.506zm3.532 0a1.156 1.156 0 0 0-1.156-1.155 1.156 1.156 0 0 0-1.156 1.156 1.156 1.156 0 0 0 1.156 1.155 1.156 1.156 0 0 0 1.156-1.155zM22.4 17.54a1.158 1.156 0 0 0-1.158-1.156 1.158 1.156 0 0 0-1.158 1.156 1.158 1.156 0 0 0 1.158 1.156A1.158 1.156 0 0 0 22.4 17.54zm-1.651-3.651a1.153 1.157 0 0 0-1.153-1.157 1.153 1.157 0 0 0-1.154 1.157 1.153 1.157 0 0 0 1.154 1.157 1.153 1.157 0 0 0 1.153-1.157zm3.251.062a1.154 1.154 0 0 0-1.154-1.154 1.154 1.154 0 0 0-1.154 1.154 1.154 1.154 0 0 0 1.154 1.154A1.154 1.154 0 0 0 24 13.951zm-3.279-3.883a1.156 1.153 0 0 0-1.156-1.154 1.156 1.153 0 0 0-1.156 1.154 1.156 1.153 0 0 0 1.156 1.153 1.156 1.153 0 0 0 1.156-1.153zm3.28.045a1.161 1.157 0 0 0-1.161-1.157 1.161 1.157 0 0 0-1.162 1.157 1.161 1.157 0 0 0 1.162 1.157A1.161 1.157 0 0 0 24 10.112zM22.374 6.48a1.157 1.16 0 0 0-1.157-1.16 1.157 1.16 0 0 0-1.158 1.16 1.157 1.16 0 0 0 1.157 1.16 1.157 1.16 0 0 0 1.158-1.16zM11.617.383c-3.11 0-6.029 1.207-8.22 3.398A11.578 11.578 0 0 0 0 12c0 3.109 1.207 6.028 3.397 8.22a11.58 11.58 0 0 0 8.22 3.397c2.578 0 5.018-.825 7.055-2.386l-1.42-1.852a9.187 9.187 0 0 1-5.635 1.904 9.26 9.26 0 0 1-6.572-2.715A9.23 9.23 0 0 1 2.334 12c0-2.478.964-4.812 2.715-6.57a9.224 9.224 0 0 1 6.568-2.713c2.058 0 4.007.659 5.637 1.905l1.417-1.854A11.518 11.518 0 0 0 11.617.383Z"}"></path></svg>`;
});
export {
  Component as default
};