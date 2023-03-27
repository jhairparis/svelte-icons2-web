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
  )}><path d="${"M13.05 9.864c.972.074 1.726.367 2.354.685v-1.31s-1.257-.317-2.44-.368C8.838 8.686 7.669 10.305 7.669 12s1.17 3.314 5.295 3.13c1.183-.054 2.44-.37 2.44-.37v-1.309c-.619.308-1.382.611-2.354.683-1.68.128-2.69-.69-2.69-2.134 0-1.445 1.01-2.261 2.69-2.135m7.685 4.122a1.48 1.48 0 0 1-.215.02h-1.8v-1.631h1.8c.057 0 .164.01.215.02a.806.806 0 0 1 .632.795.804.804 0 0 1-.632.796zM18.72 9.95h1.632c.059 0 .145.007.177.013a.736.736 0 0 1 .626.74.735.735 0 0 1-.626.739 1.571 1.571 0 0 1-.178.013h-1.63V9.951zm3.499 1.985V11.9c.913-.133 1.415-.726 1.415-1.42 0-.883-.734-1.392-1.73-1.442-.077-.003-.202-.01-.304-.01h-5.332v5.946h5.755c1.13 0 1.977-.604 1.977-1.547 0-.87-.772-1.422-1.781-1.491zm-17.864.68c0 .878-.591 1.53-1.666 1.53-.917 0-1.817-.272-2.689-.694v1.309s1.402.383 3.191.383c2.971 0 3.837-1.125 3.837-2.529V9.027H4.354v3.587Z"}"></path></svg>`;
});
export {
  Component as default
};