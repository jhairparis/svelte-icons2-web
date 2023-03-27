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
  )}><path d="${"M18.364 6.635a4.007 4.007 0 0 0-5.658 0L8.172 11.17a2.484 2.484 0 0 0-.733 1.77 2.498 2.498 0 0 0 2.501 2.498c.64 0 1.279-.242 1.767-.73l2.122-2.121a2.002 2.002 0 0 0 0-2.828l-3.536 3.535a.5.5 0 0 1-.708-.708l4.535-4.537a2.006 2.006 0 0 1 2.83 0 2.003 2.003 0 0 1 0 2.828l-4.537 4.537-2.535 2.535a2.003 2.003 0 0 1-2.828 0 2.001 2.001 0 0 1 0-2.828l.095-.096a3.566 3.566 0 0 1-.702-2.125l-.807.807a4.003 4.003 0 0 0 0 5.656c.779.779 1.804 1.17 2.828 1.17s2.049-.391 2.828-1.17l7.072-7.072a4.003 4.003 0 0 0 0-5.656z"}"></path></svg>`;
});
export {
  Component as default
};