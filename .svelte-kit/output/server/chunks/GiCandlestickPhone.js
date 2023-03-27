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
  )}><path d="${"M320.9 19.054c-39.32 0-71 31.68-71 71s31.68 71 71 71 71-31.68 71-71-31.68-71-71-71zm0 30c22.537 0 41 18.463 41 41s-18.463 41-41 41-41-18.463-41-41 18.463-41 41-41zM146.5 64.42a37.825 37.825 0 0 0-8.3.83c-29.027 6.162-49.944 25.765-62.878 51.578-12.934 25.812-18.633 57.932-19.178 91.888-1.09 67.913 18.283 143.263 49.238 190.287 10.45 15.873 24.974 24.52 41.96 28.866 6.516 1.665 13.427 2.814 20.827 3.713a57.1 57.1 0 0 1-.27-5.53c0-4.142.572-8.306 1.642-12.485-6.597-.813-12.504-1.8-17.738-3.14-14.19-3.63-23.288-9.02-31.387-21.323-27.905-42.392-47.307-115.925-46.277-180.1.515-32.087 6.1-61.815 17.275-84.115 11.175-22.3 27.19-37.078 50.522-42.03 6.646-1.412 10.758-.17 15.23 3.33 4.473 3.503 8.925 9.938 12.633 18.57 6.386 14.87 10.5 35.725 13.035 56.294h18.133c-2.558-22.05-6.74-45.028-14.63-63.396-4.43-10.315-10.045-19.352-18.073-25.64-6.02-4.714-13.61-7.504-21.764-7.6zm174.4 2.634c-12.81 0-23 10.19-23 23s10.19 23 23 23 23-10.19 23-23-10.19-23-23-23zm-23 108.977v137.75c.14 3.726 1.945 6.4 6.222 9.108 4.293 2.717 10.887 4.59 17.405 4.78 6.517.19 12.843-1.326 16.732-3.762 3.888-2.436 5.64-4.806 5.64-9.852V176.03a88.702 88.702 0 0 1-23 3.024c-7.95 0-15.66-1.055-23-3.023zm-127.315 3.024c1.274 18.84 3.492 61.976-.802 88.442-2.047 12.612-7.35 26.95-11.577 37.558h69.385c-4.224-10.61-9.528-24.946-11.575-37.558-4.295-26.466-2.076-69.603-.803-88.442h-44.627zm63.315 16v30h46v-30h-46zm-89 126v18h96v-18h-96zm138.736 5.96c-27.298 14.694-51.16 32.19-68.373 49.403-19.15 19.152-29.363 38.137-29.363 49.637 0 13.182 5.877 23.69 16.293 33.068 10.415 9.378 25.387 17.005 41.552 22.393 45.724 15.24 108.584 15.24 154.307 0 16.166-5.388 31.137-13.015 41.553-22.393 10.416-9.377 16.295-19.886 16.295-33.068 0-21-10.155-38.33-29.022-55.31-16.857-15.172-40.628-29.394-68.123-43.57a30.515 30.515 0 0 1-10.94 11.988c-.07.042-.14.08-.208.123 17.422 2.965 33.142 8.79 45.972 16.875 19.12 12.05 32.32 29.83 32.32 50.394 0 20.566-13.2 38.345-32.32 50.395-19.12 12.048-44.638 19.104-72.68 19.104-28.043 0-53.562-7.056-72.682-19.105-19.12-12.05-32.318-29.83-32.318-50.396 0-20.565 13.2-38.345 32.318-50.394 13.266-8.36 29.617-14.31 47.75-17.174a42.995 42.995 0 0 1-1.47-.89c-4.3-2.72-8.18-6.5-10.862-11.08zm37.264 28.04c-24.977 0-47.46 6.487-63.084 16.334-15.626 9.848-23.916 22.32-23.916 35.166 0 12.848 8.29 25.32 23.916 35.166 15.625 9.848 38.107 16.334 63.084 16.334 15.375 0 29.797-2.465 42.263-6.652-4.685-3.872-9.765-8.13-14.255-12.965-3.65-3.93-6.973-8.283-9.022-13.594-2.05-5.31-2.506-11.822-.262-17.904l16.887 6.23c-.707 1.917-.64 3.096.17 5.195.81 2.098 2.68 4.874 5.42 7.824 5.012 5.398 12.588 11.12 19.345 17.054a82.62 82.62 0 0 0 2.537-1.524c15.625-9.847 23.918-22.318 23.918-35.166 0-12.847-8.293-25.318-23.918-35.166-15.626-9.847-38.105-16.334-63.082-16.334zm-8.584 11.076h16v18h-16v-18zm38.006 5.383h16v18h-16v-18zm-72.506 3.137h16v18h-16v-18zm-27.98 26.404h16v18h-16v-18zm125.876 0h16v18h-16v-18zm-97.943 19.512h16v18h-16v-18zm34.782 8.762h16v18h-16v-18z"}"></path></svg>`;
});
export {
  Component as default
};