import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 15 15" },
      escape_object($$props)
    ],
    {}
  )}><path fill-rule="${"evenodd"}" d="${"M12.14 3.886a6 6 0 1 1-8.244 8.269l.425-.263a5.5 5.5 0 1 0 7.557-7.58l.262-.426Z"}" clip-rule="${"evenodd"}" opacity="${".05"}"></path><path fill-rule="${"evenodd"}" d="${"M12.851 5.073a5.5 5.5 0 1 1-7.778 7.778l.357-.35a5 5 0 1 0 7.07-7.07l.351-.358Z"}" clip-rule="${"evenodd"}" opacity="${".2"}"></path><path fill-rule="${"evenodd"}" d="${"M13.302 6.45a5 5 0 0 1-6.901 6.822l.26-.427a4.5 4.5 0 0 0 6.21-6.14l.431-.254Z"}" clip-rule="${"evenodd"}" opacity="${".35"}"></path><path fill-rule="${"evenodd"}" d="${"M13.374 7.94a4.5 4.5 0 0 1-5.502 5.417l.126-.484a4 4 0 0 0 4.89-4.816l.486-.117Z"}" clip-rule="${"evenodd"}" opacity="${".5"}"></path><path fill-rule="${"evenodd"}" d="${"M12.915 9.821a4.005 4.005 0 0 1-3.123 3.1l-.098-.49a3.504 3.504 0 0 0 2.732-2.712l.49.102Z"}" clip-rule="${"evenodd"}" opacity="${".65"}"></path><path fill-rule="${"evenodd"}" d="${"M1.277 7.503a6.225 6.225 0 1 1 12.45 0 6.225 6.225 0 0 1-12.45 0Zm6.225-5.275a5.275 5.275 0 1 0 0 10.55 5.275 5.275 0 0 0 0-10.55Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};
