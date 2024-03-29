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
  )}><path d="${"M20.285 7.119a.505.505 0 0 0-.354-.344.493.493 0 0 0-.477.126l-2.616 2.557-1.914-.383-.381-1.907 2.645-2.585a.5.5 0 0 0-.199-.835A4.956 4.956 0 0 0 15.5 3.5c-2.757 0-5 2.243-5 5 0 .323.038.65.118 1.01-.562.463-1.096.862-1.701 1.314-.865.646-1.845 1.377-3.182 2.506A3.557 3.557 0 0 0 4.5 16c0 1.93 1.57 3.5 3.5 3.5a3.483 3.483 0 0 0 2.662-1.25 58.432 58.432 0 0 0 2.544-3.209c.442-.591.832-1.111 1.283-1.66.36.081.688.119 1.011.119 2.757 0 5-2.243 5-5a4.85 4.85 0 0 0-.215-1.381zM8 17a1 1 0 1 1 0-2 1 1 0 1 1 0 2z"}"></path></svg>`;
});
export {
  Component as default
};
