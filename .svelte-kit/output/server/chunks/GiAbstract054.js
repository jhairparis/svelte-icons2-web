import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M250.762 21c-95.095 0-171.658 97.14-171.658 217.668V431.81H51.449V90.743c8.5-3.376 14.526-11.915 14.526-22.031 0-13.054-10.075-23.647-22.488-23.647S21 55.658 21 68.712c0 10.28 6.367 18.921 15.084 22.178V491h439.971V90.89C484.772 87.633 491 78.991 491 68.712c0-13.054-10.074-23.647-22.488-23.647s-22.487 10.593-22.487 23.647c0 10.116 6.165 18.655 14.666 22.03V431.81h-27.656V238.67C433.035 118.142 356.472 21 261.377 21zm.838 39.069h8.94c79.263 0 143.024 80.925 143.024 181.39v190.35h-294.99V241.46c0-100.465 63.762-181.39 143.026-181.39zm.839 32.9c-65.988 0-119.142 67.353-119.142 150.987v158.92h245.545v-158.92c0-83.635-53.154-150.987-119.14-150.987zm3.63 65.212c47.771 0 86.598 43.826 86.598 97.82s-38.827 97.817-86.597 97.817-86.598-43.826-86.598-97.818 38.827-97.819 86.598-97.819zm0 33.34c-31.496 0-56.986 28.88-56.986 64.479s25.49 64.478 56.987 64.478 56.986-28.88 56.986-64.478-25.49-64.478-56.986-64.478zm0 37.6c13.124 0 23.745 12.046 23.745 26.879s-10.62 26.878-23.744 26.878-23.745-12.046-23.745-26.878 10.62-26.878 23.745-26.878zM51.45 469.41h409.24v9.694H51.449z"}"></path></svg>`;
});
export {
  Component as default
};