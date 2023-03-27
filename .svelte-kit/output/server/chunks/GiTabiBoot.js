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
  )}><path d="${"M167.097 19.202c-23.86-.12-47.931 5.62-72.762 21.235 65.817-15.283 120.294-3.244 177.727 4.298-35.673-12.666-70.093-25.358-104.965-25.533zm-80.994 25.63a5.187 5.187 0 0 0-5.188 5.188s23.388 191.765 6.657 289.317c-3.346 14.517-6.428 28.433-9.676 42.796-.185.818-2.981 6.233-5.063 13.367 110.536 4.38 300.487 68.665 300.93 71.388.443 2.723-193.965-48.957-302.926-53.13.296 2.38.863 4.722 1.807 6.952.029-.004.055-.004.082-.006 11.513 13.803 30.986 17.375 44.736 16.807 66.666-3.42 261.228 55.289 261.228 55.289 63.719-18.675 11.06-69.342-1.27-77.093-12.763-8.022-31.117-12.317-46.683-18.47 0 0 91.009-6.531 90.619 67.734-.013 2.873 45.768-50.04-1.83-75.888-40.976-16.608-81.709-30.476-119.487-37.927-97.554-48.787-20.561-305.612-20.561-305.612 0-2.866-9.53 28.375-51.26 29.505-20.306.55-38.106-.284-53.619-1.974l-.636 11.774-27.21 19.376-19.222-13.691v-26.59c-29.168-8.648-41.428-19.112-41.428-19.112zm87.164 52.875-1.322 24.458-16.513-11.76zm-45.736 5.192 10.543 7.506-10.543 7.509zm19.223 13.688L168 131.716l-21.246 14.164-19.223-12.816v-2.788zm24.123 25.312-1.05 19.364-13.997-9.334zm-43.346 3.267 10.148 6.763-10.148 6.765zm19.223 12.816 22.443 14.962-.249 4.58-22.194 21.853-19.223-18.927v-9.654zm21.387 34.467-1.438 26.57-12.774-12.577zm-40.61 2.132 12.047 11.861-12.047 11.86zm19.223 18.926 19.223 18.927-.332 6.143-18.89 15.17-19.224-15.435v-5.878zm-19.223 37.719 11.182 8.978-11.182 8.98zm37.382.853-.84 15.576-9.28-7.451zm-18.159 14.583 16.648 13.367-.756 13.973-15.892 14.574-19.223-17.628V282.1zm-19.223 37.947 11.774 10.798-11.774 10.8zm34.338 3.768-.726 13.397-6.942-6.367zm-15.115 13.86 13.685 12.552-.87 16.073a5.19 5.19 0 0 1-5.19 5.19H132.72a5.19 5.19 0 0 1-5.19-5.19v-10.995z"}"></path></svg>`;
});
export {
  Component as default
};