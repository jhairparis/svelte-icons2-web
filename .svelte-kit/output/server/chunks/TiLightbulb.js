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
  )}><path d="${"M12.5 5.5a.5.5 0 0 0 0 1c1.083 0 1.964.881 1.964 1.964a.5.5 0 0 0 1 0A2.968 2.968 0 0 0 12.5 5.5zm0-4.5C8.364 1 5 4.364 5 8.5c0 1.486.44 2.922 1.274 4.165l.08.135C8.179 15.406 8.5 16.23 8.5 17v3a1 1 0 0 0 1 1h2c0 .26.11.52.29.71.19.18.45.29.71.29.26 0 .52-.11.71-.29.18-.19.29-.45.29-.71h2a1 1 0 0 0 1-1v-3c0-.782.319-1.61 2.132-4.199A7.453 7.453 0 0 0 20 8.5C20 4.364 16.636 1 12.5 1zm2 18h-4v-1h4v1zm2.495-7.347c-1.466 2.093-2.143 3.289-2.385 4.347H13.5v-2a1 1 0 0 0-2 0v2h-1.113c-.24-1.03-.898-2.2-2.306-4.22l-.077-.129A5.454 5.454 0 0 1 7 8.5C7 5.467 9.467 3 12.5 3S18 5.467 18 8.5a5.463 5.463 0 0 1-1.005 3.153z"}"></path></svg>`;
});
export {
  Component as default
};
