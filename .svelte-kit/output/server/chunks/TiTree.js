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
  )}><path d="${"M20.781 17.375 18.081 14H19a.999.999 0 0 0 .819-1.573l-7-10a1.001 1.001 0 0 0-1.393-.246.968.968 0 0 0-.221.231c-.025.015-7.025 10.015-7.025 10.015A1 1 0 0 0 5 14h.919l-2.7 3.375c-.24.301-.287.712-.121 1.059.167.345.518.566.902.566h7v3a1 1 0 1 0 2 0v-3h7a1.001 1.001 0 0 0 .781-1.625zM13 17v-5a1 1 0 1 0-2 0v5H6.081l2.7-3.375c.24-.301.287-.712.121-1.059A1.004 1.004 0 0 0 8 12H6.92L12 4.744 17.08 12H16a1.001 1.001 0 0 0-.78 1.625L17.92 17H13z"}"></path></svg>`;
});
export {
  Component as default
};
