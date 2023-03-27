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
  )}><path d="${"M20.942 6.162v10.03a.5.5 0 0 1-1 0v-.56c-.18-.17-.35-.34-.52-.52-1.36-1.35-2.71-2.71-4.07-4.06a.5.5 0 0 1 .71-.71l3.88 3.88v-8.17c0-.78-.12-1.57-.97-1.89a4.094 4.094 0 0 0-1.44-.1h-9.72a.5.5 0 0 1 0-1h5.06c1.78 0 3.55-.01 5.32 0a2.684 2.684 0 0 1 2.35 1.15 3.409 3.409 0 0 1 .4 1.95Zm-.15 13.92-5.7-5.7L6 5.292l-2.08-2.08a.5.5 0 0 0-.71.71l.28.28a3.862 3.862 0 0 0-.43 2.19v11.04a4.416 4.416 0 0 0 .32 2.22 2.769 2.769 0 0 0 2.66 1.29h11.25a4.417 4.417 0 0 0 2.51-.44l.28.28c.452.46 1.162-.25.712-.7ZM6.712 7.422 8.7 9.412a1.372 1.372 0 0 1-.64.15 1.5 1.5 0 0 1-1.5-1.5 1.4 1.4 0 0 1 .152-.64Zm-2.48-2.48 1.75 1.75a2.459 2.459 0 0 0-.42 1.37 2.507 2.507 0 0 0 2.5 2.5 2.482 2.482 0 0 0 1.38-.41c.78.78 1.57 1.57 2.35 2.34l-2.42 2.42a.5.5 0 0 1-.7 0l-.56-.56a1.548 1.548 0 0 0-2.12 0l-1.93 1.93v-9.3a5.179 5.179 0 0 1 .17-2.04Zm13.13 15H6.822a5.768 5.768 0 0 1-1.71-.08c-1.02-.32-1.05-1.26-1.05-2.13V17.7l2.64-2.64a.5.5 0 0 1 .7 0l.56.55a1.528 1.528 0 0 0 2.12 0L12.5 13.2c1.83 1.84 3.67 3.67 5.5 5.5.35.36.71.72 1.07 1.07a4.217 4.217 0 0 1-1.708.172Z"}" data-name="${"Image Off"}"></path></svg>`;
});
export {
  Component as default
};