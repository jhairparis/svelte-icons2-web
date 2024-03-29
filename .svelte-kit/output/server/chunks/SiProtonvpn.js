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
  )}><path d="${"M22.971 2.68a2.68 2.68 0 1 0-5.361 0v.082L5.927 6.534a2.68 2.68 0 1 0-2.218 4.187c.279-.004.555-.052.819-.142l7.673 9.69a2.68 2.68 0 1 0 4.211-.984l4.08-13.937a2.669 2.669 0 0 0 2.479-2.668zm-8.29 15.905c-.414.005-.82.107-1.187.296L5.998 9.393a2.66 2.66 0 0 0 .38-1.115L18.31 4.47c.124.14.263.267.415.379l-4.033 13.735h-.012z"}"></path></svg>`;
});
export {
  Component as default
};
