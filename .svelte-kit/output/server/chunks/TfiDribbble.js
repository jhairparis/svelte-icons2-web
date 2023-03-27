import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.5 0a8.5 8.5 0 1 0 .001 17.001A8.5 8.5 0 0 0 8.5 0zm7.494 8.621c-2.075-.456-3.896-.423-5.469-.092a33.17 33.17 0 0 0-.849-1.93c1.681-.648 3.292-1.586 4.548-2.934A7.465 7.465 0 0 1 16 8.5c0 .041-.006.08-.006.121zm-2.471-5.674c-1.16 1.257-2.688 2.135-4.297 2.74a27.504 27.504 0 0 0-2.814-4.385A7.464 7.464 0 0 1 8.5 1a7.46 7.46 0 0 1 5.023 1.947zM5.43 1.665a25.94 25.94 0 0 1 2.828 4.353c-2.974.92-5.966 1.028-7.114 1.03A7.516 7.516 0 0 1 5.43 1.665zM1 8.5c0-.151.014-.3.022-.449l.212.001c1.306 0 4.402-.125 7.482-1.114.3.625.578 1.245.82 1.844-3.605 1.101-5.736 3.705-6.513 4.826A7.462 7.462 0 0 1 1 8.5zm2.758 5.804c.596-.901 2.601-3.518 6.145-4.57.961 2.598 1.405 4.744 1.566 5.651A7.46 7.46 0 0 1 8.5 16a7.46 7.46 0 0 1-4.742-1.696zm8.642.59a34.174 34.174 0 0 0-1.503-5.405c1.444-.28 3.109-.288 5.008.145a7.507 7.507 0 0 1-3.505 5.26z"}"></path></svg>`;
});
export {
  Component as default
};