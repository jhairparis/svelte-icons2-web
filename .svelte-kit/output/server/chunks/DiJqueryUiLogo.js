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
  )}><path fill="${"#444"}" d="${"M24.81 6.334H7.189c-1.391 0-2.517 1.114-2.517 2.488v7.464c0 5.495 4.508 9.951 10.069 9.951h2.518c5.561 0 10.069-4.456 10.069-9.951V8.822c0-1.374-1.127-2.488-2.517-2.488zM16 22.506c-4.171 0-7.552-3.342-7.552-7.464V11.31h3.776v3.732c0 2.061 1.69 3.732 3.776 3.732s3.775-1.671 3.775-3.732h3.776c0 4.122-3.381 7.464-7.552 7.464zm7.489-8.708-3.65-.933.881-3.608 3.713.933-.944 3.607z"}"></path></svg>`;
});
export {
  Component as default
};
