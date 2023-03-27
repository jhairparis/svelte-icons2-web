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
  )}><path d="${"M8.516 0c-4.687 0-8.5 3.813-8.5 8.5s3.813 8.5 8.5 8.5 8.5-3.813 8.5-8.5S13.202 0 8.516 0zM1.041 9h2.937c.044 1.024.211 2.031.513 3H1.888a7.426 7.426 0 0 1-.847-3zm2.937-1H1.041a7.426 7.426 0 0 1 .847-3h2.6a11.76 11.76 0 0 0-.51 3zm1.569-3h5.896c.33.965.522 1.972.569 3H4.978c.046-1.028.239-2.035.569-3zm-.569 4h7.035a10.82 10.82 0 0 1-.572 3H5.55a10.783 10.783 0 0 1-.572-3zm8.035 0h2.978a7.426 7.426 0 0 1-.847 3H12.5c.302-.969.469-1.976.513-3zm0-1a11.76 11.76 0 0 0-.51-3h2.641c.48.906.775 1.923.847 3h-2.978zm1.489-4h-2.354a12.19 12.19 0 0 0-1.55-2.7A7.52 7.52 0 0 1 14.502 4zM9.074 1.028c.824.897 1.484 1.9 1.972 2.972H5.944a11.3 11.3 0 0 1 1.97-2.97c.199-.015.398-.03.602-.03.188 0 .373.015.558.028zm-2.691.285A12.163 12.163 0 0 0 4.843 4H2.529a7.518 7.518 0 0 1 3.854-2.687zM2.529 13h2.317c.391.951.915 1.851 1.547 2.689A7.51 7.51 0 0 1 2.529 13zm5.397 2.97A11.355 11.355 0 0 1 5.948 13h5.094a11.328 11.328 0 0 1-1.979 2.972c-.181.013-.363.028-.547.028-.2 0-.395-.015-.59-.03zm2.661-.267A12.176 12.176 0 0 0 12.144 13h2.358a7.518 7.518 0 0 1-3.915 2.703z"}"></path></svg>`;
});
export {
  Component as default
};