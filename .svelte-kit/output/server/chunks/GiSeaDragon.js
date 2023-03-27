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
  )}><path d="${"M297.688 21.063c-15.634.137-31.488 4.074-46.657 12.343 34.997-2.542 65.762 8.182 74.345 33.938-128.86-16.852-260.25 113.34-31.72 245.187 62.006 35.773 19.38 127.795-104.31 75.095C24.494 317.39 36.47 186.86 95.844 118.562c7.322 12.328 13.418 26.194 18.936 40.75 19.067-48.595 56.388-68.62 93.595-88.812-52.197-24.58-102.01-14.783-150.906 8.406 10.362 5.744 19.104 13.503 26.655 22.72-113.558 67.915-77.773 280.4 71.406 366.53 189.853 109.61 414.786-132.238 208.157-211.062-151.438-57.77-111.705-139.905-38.03-126.156l2.624 42.625 141.345 39.375 20.906-60.657c-28.94-12.513-52.207-26.577-71.092-43.843 1.268-28.244-10.66-56.505-33.907-84.75.757 13.793.603 27.582-1.592 41.376-22.21-28.084-53.733-44.287-86.25-44zm43.437 65.374c23 7.268 44.722 20.866 62 44.094-33.73 15.82-69.124-5.32-62-44.093z"}"></path></svg>`;
});
export {
  Component as default
};