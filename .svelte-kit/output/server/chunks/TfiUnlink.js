import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m2.134 5.139 1.402-2.587C4.622.904 6.798.457 8.407 1.523l-.551.833a2.505 2.505 0 0 0-3.464.709L2.99 5.652c-.781 1.188-.464 2.742.687 3.501 1.143.752 2.41.547 3.313-.538l.768.641c-.742.892-1.694 1.352-2.678 1.352-.655 0-1.323-.204-1.954-.62a3.504 3.504 0 0 1-.992-4.849zm1.907 2.895-.13.129.705.709.131-.13c.975-.975 2.561-.975 3.535 0s.975 2.561 0 3.535l-3.023 3.024c-.975.975-2.561.975-3.535 0s-.975-2.561 0-3.535l1.058-1.059L2.075 10l-1.058 1.06a3.504 3.504 0 0 0 0 4.949c.683.683 1.578 1.023 2.475 1.023s1.792-.341 2.475-1.023l3.023-3.024a3.504 3.504 0 0 0 0-4.949 3.503 3.503 0 0 0-4.949-.002zM10.963 7h4.074V6h-4.074v1zm-.468 1.347 1.951 1.127.5-.865-1.951-1.127-.5.865zm.255-7.191L9.17 3.893l.865.5 1.58-2.736-.865-.501zm5.117 1.569-.5-.865-4.992 2.882.5.865 4.992-2.882z"}"></path></svg>`;
});
export {
  Component as default
};