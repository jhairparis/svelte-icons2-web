import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 1024 1024" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#D9D9D9"}" d="${"M695.4 164.1H470.8L281.2 491.5h157.4l-60.3 241 319.8-305.1h-211z"}"></path><path d="${"M848.1 359.3H627.8L825.9 109c4.1-5.3.4-13-6.3-13H436.1c-2.8 0-5.5 1.5-6.9 4L170.1 547.5c-3.1 5.3.7 12 6.9 12h174.4L262 917.1c-1.9 7.8 7.5 13.3 13.3 7.7L853.6 373c5.2-4.9 1.7-13.7-5.5-13.7zM378.3 732.5l60.3-241H281.2l189.6-327.4h224.6L487.1 427.4h211L378.3 732.5z"}"></path></svg>`;
});
export {
  Component as default
};
