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
  )}><g data-name="${"Credit Card Off"}"><path d="${"M21.94 7.64v9.3a.5.5 0 0 1-.5.5.5.5 0 0 1-.5-.5v-7.3h-7.45a.75.75 0 0 1 0-1.5h7.45v-.5a1.5 1.5 0 0 0-1.5-1.5H9.89a.5.5 0 0 1 0-1h9.55a2.5 2.5 0 0 1 2.5 2.5ZM8.064 14.246h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1Z"}"></path><path d="${"M18.935 14.248h-.944a.5.5 0 0 1 0-1h.944a.5.5 0 0 1 0 1Zm-.175 3.802L4.01 3.3c-.46-.46-1.17.25-.71.7l1.14 1.14a2.5 2.5 0 0 0-2.38 2.5v8.72a2.5 2.5 0 0 0 2.5 2.5h13.6L20 20.7c.45.46 1.16-.25.7-.71ZM3.06 7.64a1.5 1.5 0 0 1 1.5-1.5h.88c.66.67 1.33 1.34 2 2H3.06Zm9.49 5.61h-.12a.5.5 0 0 0-.5.5.508.508 0 0 0 .5.5h1.12l3.61 3.61H4.56a1.5 1.5 0 0 1-1.5-1.5V9.64h5.88Z"}"></path></g></svg>`;
});
export {
  Component as default
};