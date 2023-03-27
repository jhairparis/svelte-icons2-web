import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M22.711 9.796c-.041-.041-4.055-4.096-5.982-6.146A2.277 2.277 0 0 0 15.143 3C13.961 3 13 3.896 13 5H5a1 1 0 0 0-1 1v14a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1v-6.045a835.426 835.426 0 0 1 2.711-2.751.999.999 0 0 0 0-1.408zm-7.432 6.145-.136.059-.144-.04V12h-1c-1.771.034-3.336.68-4.753 1.958.43-2.215 1.6-4.958 4.753-4.958h1V5.042L15.143 5l.154.05c1.436 1.525 4.051 4.187 5.297 5.45-.253.257-4.342 4.422-5.315 5.441zM6 19V7h8v1c-4.66 0-6 4.871-6 8.5v.5c1.691-2.578 3.6-3.953 6-4v3c0 .551.512 1 1.143 1 .364 0 .676-.158.883-.391.539-.565 1.242-1.291 1.976-2.043V19H6z"}"></path></svg>`;
});
export {
  Component as default
};