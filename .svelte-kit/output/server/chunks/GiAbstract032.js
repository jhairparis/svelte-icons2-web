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
  )}><path d="${"M167.875 21c-24.813 0-45.597 18.987-50.943 44.356h-2.25c-25.464 0-45.915 22.7-45.915 50.966v3.672h-8.733c-3.44 10.692-6.483 21.752-9.13 33.047-.922-.36-1.963-.588-2.911-.588C33.101 152.453 21 198.788 21 256s12.1 103.547 26.993 103.547c.948 0 1.989-.228 2.911-.587 2.648 11.293 5.693 22.35 9.13 33.047h8.733v3.671c0 28.266 20.45 50.966 45.915 50.966h2.25c5.346 25.37 26.13 44.356 50.943 44.356 24.816 0 45.629-18.983 50.943-44.356h74.364C298.497 472.017 319.309 491 344.125 491c24.814 0 45.494-18.987 50.81-44.356h2.383c25.464 0 45.915-22.7 45.915-50.966v-3.671h8.732c3.438-10.695 6.483-21.753 9.13-33.047a7.66 7.66 0 0 0 2.912.587C478.899 359.547 491 313.212 491 256s-12.1-103.547-26.993-103.547c-.987 0-1.952.197-2.911.588-2.647-11.295-5.69-22.355-9.13-33.047h-8.733v-3.672c0-28.266-20.45-50.966-45.915-50.966h-2.382C389.619 39.986 368.939 21 344.125 21c-24.816 0-45.628 18.982-50.943 44.356h-74.364C213.503 39.982 192.691 21 167.875 21zm6.88 29.081c14.22 0 25.935 12.857 25.935 28.64s-11.714 28.642-25.934 28.642-25.538-12.858-25.538-28.641 11.32-28.64 25.538-28.64zm162.357 0c14.219 0 25.802 12.857 25.802 28.64s-11.583 28.642-25.802 28.642-25.802-12.858-25.802-28.641 11.582-28.64 25.802-28.64zm-117.103 30.99h71.982c1.398 30.17 24.192 54.198 52.134 54.198 27.494 0 49.953-23.243 52.002-52.728 16.007 4.506 28.216 19.127 30.962 37.453h-16.142c-13.291 25.3-38.22 42.3-66.822 42.3s-53.532-17-66.822-42.3h-42.739c-13.29 25.291-38.093 42.3-66.69 42.3s-53.531-17-66.82-42.3H84.91c2.739-18.28 14.882-32.907 30.83-37.453 2.06 29.485 24.641 52.728 52.134 52.728 27.943 0 50.736-24.027 52.134-54.197zm21.569 100.757v148.344a4156.76 4156.76 0 0 1-22.76-.147v-148.05c7.568-.072 15.108-.12 22.76-.147zm28.844 0c7.61.029 15.1.077 22.628.146v148.05c-7.528.072-15.018.12-22.627.147V181.828zm-80.45.44v147.463c-7.678-.128-15.18-.271-22.759-.44V182.709c7.579-.17 15.08-.313 22.76-.44zm132.056 0c7.637.127 15.087.273 22.626.44V329.29c-7.54.168-14.989.314-22.626.44V182.268zM138.5 183.443v145.113c-7.71-.23-15.172-.61-22.759-.881v-143.35c7.587-.272 15.05-.652 22.76-.881zm235 0c7.742.231 15.274.609 22.891.882v143.35c-7.617.273-15.15.65-22.89.88V183.444zm-286.472 1.91v141.294c-11.178-.487-22.163-1.056-33.08-1.616-4.288-18.352-7.013-42.456-7.013-69.031s2.725-50.68 7.013-69.032c10.917-.56 21.902-1.129 33.08-1.615zm338.077 0c11.183.486 22.166 1.053 33.08 1.615 4.287 18.352 6.88 42.456 6.88 69.032s-2.593 50.68-6.88 69.03c-10.914.563-21.897 1.13-33.08 1.617V185.352zm-257.23 164.353c28.597 0 53.4 17.01 66.69 42.3h42.738c13.29-25.3 38.222-42.3 66.822-42.3s53.53 17 66.822 42.3h16.143c-2.747 18.326-14.956 32.947-30.963 37.453-2.05-29.485-24.508-52.727-52.002-52.727-27.942 0-50.736 24.026-52.133 54.196h-71.983c-1.397-30.17-24.19-54.196-52.134-54.196-27.492 0-50.074 23.242-52.133 52.727-15.948-4.546-28.092-19.174-30.831-37.453h16.143c13.29-25.3 38.222-42.3 66.821-42.3zm6.881 54.931c14.22 0 25.935 12.71 25.935 28.494s-11.715 28.64-25.935 28.64-25.538-12.856-25.538-28.64 11.32-28.494 25.538-28.494zm162.356 0c14.219 0 25.802 12.71 25.802 28.494s-11.583 28.64-25.802 28.64-25.802-12.856-25.802-28.64 11.583-28.494 25.802-28.494z"}"></path></svg>`;
});
export {
  Component as default
};