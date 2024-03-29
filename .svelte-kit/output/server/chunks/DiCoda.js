import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"m23.895 10.232-.419-.362-16.81 15.685L22.365 8.909l-.42-.364c-2.026-1.087-4.61-.843-6.72-.149-.609.201-1.217.442-1.796.718a13.358 13.358 0 0 0-3.416 2.312c-2.303 2.165-3.767 5.051-4.484 8.11a28.91 28.91 0 0 0-.488 2.611 48.977 48.977 0 0 0-.319 3.311c-.065.93-.204 2.187 1.094 2.109.231-.014.462-.011.693-.016 3.249-.069 6.516-.033 9.64-1.078 2.032-.68 3.98-1.779 5.503-3.292 2.282-2.265 3.934-5.567 3.675-8.845-.114-1.453-.434-2.987-1.433-4.105zm2.479-5.231.942.942L9.707 22.532z"}"></path></svg>`;
});
export {
  Component as default
};
