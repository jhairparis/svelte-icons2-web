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
  )}><path d="${"M6.396 0 1.05.002v5.346h5.347V0zm5.94 2.697c-1.033 0-1.959.1-2.791.291v3.783c.645-.374 1.471-.568 2.5-.568 1.001 0 1.838.17 2.514.508 1.01.512 1.555 1.375 1.629 2.59h4.056c-.073-2.147-.874-3.783-2.394-4.912-1.522-1.127-3.36-1.692-5.514-1.692zM4.496 8.51c-.01.16-.023.322-.023.488 0 1.982.679 3.438 2.04 4.371.806.558 2.281 1.072 4.43 1.547l2.186.482c1.28.274 2.215.589 2.805.946.59.365.884.882.884 1.549 0 1.142-.603 1.922-1.806 2.341-.635.22-1.458.33-2.475.33-1.697 0-2.896-.417-3.596-1.248-.382-.457-.638-1.147-.767-2.07h-4.03c0 2.102.762 3.754 2.286 4.955C7.953 23.402 10.042 24 12.7 24c2.603 0 4.619-.609 6.045-1.828 1.427-1.22 2.14-2.751 2.14-4.596 0-1.8-.601-3.173-1.804-4.125-.776-.611-1.94-1.102-3.494-1.467l-3.543-.836c-1.367-.319-2.264-.596-2.686-.835-.655-.356-.982-.894-.982-1.616 0-.065.017-.124.021-.187H4.496zM21.92 21.844a1.077 1.077 0 0 0 0 2.152 1.077 1.077 0 0 0 0-2.152zm-.014.177a.898.898 0 0 1 .014 0 .898.898 0 0 1 0 1.793.898.898 0 0 1-.014-1.793zm-.42.258v1.272h.221v-.49h.248l.256.49h.234v-.01l-.285-.531a.392.392 0 0 0 .174-.133.356.356 0 0 0 .06-.213.42.42 0 0 0-.033-.166.31.31 0 0 0-.088-.121.4.4 0 0 0-.144-.074.695.695 0 0 0-.195-.024h-.448zm.221.178h.227a.338.338 0 0 1 .107.016.174.174 0 0 1 .117.109.266.266 0 0 1 0 .176.175.175 0 0 1-.047.066.21.21 0 0 1-.072.045.314.314 0 0 1-.105.016h-.227v-.428z"}"></path></svg>`;
});
export {
  Component as default
};