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
  )}><path d="${"M263.072 20.533c-2.074.012-4.16.074-6.26.188h-.003c-67.146 3.63-118.2 58.187-114.83 120.41 1.86 34.32 19.7 63.35 46.885 82.837l3.643 2.61 1.924 35.507c12.117 1.775 24.226 3.197 36.37 4.03l-1.23-37.126 18.678-.617 1.277 38.55c13.15.215 26.368-.35 39.71-1.936l-1.34-40.384 18.68-.62 1.263 38.122a257.887 257.887 0 0 0 35.986-9.65l-1.84-33.948 3.342-2.99c24.92-22.298 39.52-53.084 37.66-87.41-3.164-58.41-52.277-104.87-113.73-107.46-2.05-.086-4.11-.123-6.186-.11zm62.053 72.48c25.69-.373 46.49 20.283 29.225 75.56-11.796-2.273-23.18-4.924-33.793-8.274 3.6-3.322 5.87-8.062 5.87-13.345 0-10.036-8.14-18.174-18.175-18.174-10.024 0-18.15 8.12-18.17 18.14-7.77-4.8-14.545-10.504-20.014-17.4 9.128-21.45 33.77-36.197 55.057-36.506zm-130.14 1.008c21.53-.316 46.466 15.367 54.644 38.054-6.82 7.668-15.19 14.077-24.745 19.37.366-1.438.582-2.936.582-4.49 0-10.035-8.138-18.173-18.174-18.173s-18.172 8.14-18.172 18.175c0 6.68 3.616 12.503 8.987 15.66-10.595 3.258-21.962 5.637-33.816 7.237-13.72-54.558 6.3-75.47 30.696-75.83zm65.374 54.494 25.986 54.847-48.246 3.818 22.26-58.664zM82.99 264.402a84.393 84.393 0 0 0-22.18 8.918c-38.546 22.253-51.643 69.205-31.083 104.815 11.315 19.6 30.36 31.315 52.22 34.685l4.428.684 28.744 49.787c7.431-1.01 14.477-2.418 21.15-4.235l-22.48-36.96 15.966-9.714 24.54 40.35c6.697-2.948 12.922-6.444 18.683-10.517l-24.722-40.358 15.937-9.76 23.14 37.778c4.215-4.384 8.098-9.207 11.645-14.494l-28.962-50.167 1.623-4.176c8.012-20.617 7.388-42.967-3.927-62.566-7.252-12.56-17.92-22.16-30.383-28.345l15.893 42.38h-16.97l19.683 49.395-64.745-56.57 20.117-1.885-28.317-39.043zm261.885 7.41a276.265 276.265 0 0 1-36.41 9.163l1.11 33.47c12.3-2.818 24.617-6.73 36.972-11.78l-1.672-30.854zm-149.412 9.317 1.603 29.602c11.85 3.368 23.663 5.82 35.455 7.354l-1.098-33.223c-12.1-.766-24.083-2.073-35.96-3.734zm94.392 2.563c-13.39 1.512-26.62 2.07-39.71 1.897l1.13 34.142c13.244.6 26.474 0 39.713-1.855l-1.133-34.184zm119.875 17.15c-13.128.023-26.228 3.31-38.095 10.16-20.947 12.095-33.472 32.46-37.07 55.8l-.682 4.427-53.29 30.768c.46 7.155 1.55 14.03 3.235 20.652l41.936-22.78 8.922 16.42-44.582 24.218c3.254 7.152 7.31 13.992 12.16 20.55l44.38-24.287 8.97 16.396L314.7 475.56c5.404 5.502 11.423 10.807 18.066 15.93l52.91-30.55 4.178 1.624c22.01 8.553 45.91 7.89 66.86-4.205 32.478-18.752 46.663-58.246 35.352-94.995L462.32 404.84l-6.8-23.34-33.137 11.068 25.38-42.23 16.247 15.918 6.93-38.81c-16.556-17.277-38.92-26.645-61.21-26.604zm-20.447 34.452c7.387-.176 14.794 2.825 20.01 8.848 9.272 10.706 8.107 26.9-2.598 36.17-10.704 9.272-26.897 8.11-36.17-2.596-9.272-10.707-8.108-26.9 2.596-36.17a25.542 25.542 0 0 1 16.163-6.252zm-292.64 3.387c-1.68 16.062-10.07 31.15-33.51 40.588L50.86 344.816l45.783-6.134zm12.87 7.978 34.72 25.37-29.096 15.84-5.625-41.21zm290.723 52.15-29.455 32.85-16.134-31.223 45.59-1.626zm30.618 5.823c7.387-.176 14.792 2.827 20.007 8.85 9.274 10.706 8.11 26.9-2.594 36.17-10.705 9.27-26.898 8.108-36.17-2.598-9.273-10.707-8.11-26.9 2.595-36.17a25.545 25.545 0 0 1 16.164-6.252z"}"></path></svg>`;
});
export {
  Component as default
};