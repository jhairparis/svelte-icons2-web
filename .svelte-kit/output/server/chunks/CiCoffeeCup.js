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
  )}><path d="${"M18.79 5.67a1.5 1.5 0 0 0-1.16-1.46l-.38-1.38a1.081 1.081 0 0 0-1.05-.76H7.79a1.06 1.06 0 0 0-1.04.76l-.38 1.38a1.537 1.537 0 0 0-1.16 1.55 1.476 1.476 0 0 0 1.06 1.42l.1 2.77a.75.75 0 0 0-.42.22.768.768 0 0 0-.21.56l.24 5.76a.759.759 0 0 0 .65.72l.08 2.22a2.579 2.579 0 0 0 2.59 2.5h5.39a2.581 2.581 0 0 0 2.6-2.5l.08-2.22a.76.76 0 0 0 .64-.72l.24-5.76a.768.768 0 0 0-.21-.56.72.72 0 0 0-.41-.22l.1-2.77a1.534 1.534 0 0 0 1.06-1.51Zm-11-2.6 8.49.03.3 1.07H7.44Zm8.5 16.33a1.578 1.578 0 0 1-1.6 1.53H9.3a1.575 1.575 0 0 1-1.59-1.53l-.08-2.18h8.74ZM9.9 13.58a2.1 2.1 0 1 1 2.1 2.1 2.1 2.1 0 0 1-2.1-2.1Zm6.73-3.65H7.37l-.1-2.67h9.45Zm.66-3.67H6.71a.522.522 0 0 1-.5-.59.5.5 0 0 1 .5-.5h10.58a.528.528 0 0 1 .5.59.5.5 0 0 1-.5.5Z"}" data-name="${"Coffee Cup"}"></path></svg>`;
});
export {
  Component as default
};