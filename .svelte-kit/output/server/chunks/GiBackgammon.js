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
  )}><path d="${"M64 32 16 496h96L64 32zm48 464h48c-20.053 0-37.38-12.205-44.943-29.55L112 496zm48 0h48l-3.057-29.547C197.38 483.798 180.053 496 160 496zm48 0h48c-20.052 0-37.38-12.202-44.943-29.547L208 496zm48 0h48l-3.057-29.55C293.38 483.794 276.053 496 256 496zm48 0h96L352 32l-48 464zm96 0h48c-20.053 0-37.38-12.205-44.943-29.55L400 496zm48 0h48l-3.057-29.55C485.38 483.794 468.053 496 448 496zM160 32l-28.914 279.512c8.12-5.97 18.12-9.512 28.914-9.512s20.795 3.542 28.914 9.512L160 32zm96 0-40.016 386.82C224.877 406.25 239.516 398 256 398c16.486 0 31.123 8.254 40.016 20.826L256 32zm192 0-18.373 177.605A48.554 48.554 0 0 1 448 206c6.49 0 12.69 1.288 18.373 3.605L448 32zm0 192c-17.227 0-31 13.773-31 31s13.773 31 31 31 31-13.773 31-31-13.773-31-31-31zm-27.273 71.648-1.64 15.858a48.81 48.81 0 0 1 19.07-8.506 48.75 48.75 0 0 1-17.43-7.352zm54.546 0a48.75 48.75 0 0 1-17.43 7.352 48.796 48.796 0 0 1 19.07 8.506l-1.64-15.858zM448 320c-17.227 0-31 13.773-31 31s13.773 31 31 31 31-13.773 31-31-13.773-31-31-31zm-324.387 63.732-3.63 35.08c7.077-9.997 17.788-17.26 30.173-19.812-10.42-2.146-19.66-7.627-26.543-15.268zm72.774 0c-6.884 7.64-16.122 13.122-26.543 15.268 12.384 2.55 23.096 9.813 30.172 19.81l-3.63-35.078zm215.226 0-3.63 35.08c7.077-9.997 17.788-17.26 30.173-19.812-10.42-2.146-19.66-7.627-26.543-15.268zm72.774 0c-6.884 7.64-16.122 13.122-26.543 15.268 12.385 2.55 23.096 9.815 30.172 19.813l-3.63-35.08zM448 416c-17.227 0-31 13.773-31 31s13.773 31 31 31 31-13.773 31-31-13.773-31-31-31z"}"></path></svg>`;
});
export {
  Component as default
};