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
  )}><path d="${"M19.445 16.809 16.805 7H18a1 1 0 0 0 0-2H6a1 1 0 0 0 0 2h1.135a3.605 3.605 0 0 1-.121.671l-2.459 9.138c-.218.809-.074 1.623.393 2.231.466.61 1.214.96 2.052.96h10c.838 0 1.586-.35 2.055-.959.466-.609.609-1.423.39-2.232zM14.732 7l1.352 5.018L16 12H8l-.084.018 1.029-3.826c.084-.312.173-.744.192-1.192h5.595zm2.734 10.824c-.087.114-.252.176-.466.176H7c-.214 0-.379-.062-.466-.176-.086-.113-.104-.289-.048-.496l1.197-4.45A.494.494 0 0 0 8 13h8a.493.493 0 0 0 .316-.121l1.197 4.45c.057.206.04.382-.047.495z"}"></path></svg>`;
});
export {
  Component as default
};
