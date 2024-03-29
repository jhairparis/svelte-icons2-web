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
  )}><path d="${"M12 4c-4.411 0-8 3.589-8 8s3.589 8 8 8a7.953 7.953 0 0 0 4.499-1.384 1.001 1.001 0 0 0-1.127-1.653A5.951 5.951 0 0 1 12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6v.5a1 1 0 0 1-2 0v-3a1 1 0 0 0-1-1 .99.99 0 0 0-.938.688A3.466 3.466 0 0 0 12 8.5c-1.93 0-3.5 1.57-3.5 3.5s1.57 3.5 3.5 3.5c1.045 0 1.975-.47 2.616-1.199A2.988 2.988 0 0 0 17 15.5c1.654 0 3-1.346 3-3V12c0-4.411-3.589-8-8-8zm0 9.5c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5z"}"></path></svg>`;
});
export {
  Component as default
};
