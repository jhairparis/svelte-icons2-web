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
  )}><path d="${"m20.14 5.518-2.695 9.538h-.034l-2.89-9.538H8.125l-2.19 3.893-2.318-3.893H.368l3.78 6.116L0 18.486h2.993l2.66-4.534 2.755 4.534h4.906v-8.99h.034q.102.564.195.966.093.402.175.744c.057.228.118.445.184.65.065.206.132.43.2.677l1.926 5.949h2.523l1.942-5.95q.213-.718.398-1.385a14.544 14.544 0 0 0 .32-1.506h.035v8.845H24V5.514zM7.373 11.651l3.383-5.616v11.118z"}"></path></svg>`;
});
export {
  Component as default
};