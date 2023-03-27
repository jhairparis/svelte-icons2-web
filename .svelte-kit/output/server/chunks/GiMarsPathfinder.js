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
  )}><path d="${"M304 25c-9.496 0-17.002 7.504-17.002 17S294.504 59.002 304 59.002c9.496 0 17.002-7.506 17.002-17.002 0-9.496-7.506-17-17.002-17zm-9 50.809V201h-95.377l-13.314 79.885L256 294.822l69.691-13.937L313 204.738V75.808A34.63 34.63 0 0 1 304 77a34.63 34.63 0 0 1-9-1.191zM228.2 137l-38.557 46H277v-46zM55 179.402v139.405l-14.621 13.209 22.738 23.492 164.969-5.906-3.014-29.946-15.199-15.705-35.639-7.127-8.543-1.709 4.266-25.597-42.064-16.569L73 302.543v-123.14zm128.07 11.438-23.379 27.892 17.844 5.323zM329.123 192l5.342 32.055 17.844-5.323c-5.456-6.278-8.806-10.732-23.186-26.732zm54.984 60.95-42.064 16.568 4.266 25.597-44.182 8.836-15.2 15.705-3.013 29.946 164.969 5.906 22.738-23.492zm-265.744 28.687 48 48-12.726 12.726-48-48zm275.274 0 12.726 12.726-48 48-12.726-12.726zm-240.453 88.119-20.323.396-24.914 49.83L96 416l-32 32 48 16 32-32-18.805-6.268zm205.906.547 27.715 55.43L368 432l32 32 48-16-32-32-11.947 3.982-24.473-48.945z"}"></path></svg>`;
});
export {
  Component as default
};