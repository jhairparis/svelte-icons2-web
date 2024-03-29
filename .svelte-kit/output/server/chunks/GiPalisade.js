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
  )}><path d="${"m112 144.836-9 48V279h18v-86.164l-9-48zm36 0-9 48V279h18v-86.164l-9-48zm216 0-9 48V279h18v-86.164l-9-48zm36 0-9 48V279h18v-86.164l-9-48zm-360 64-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zm108 0-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zm108 0-9 48V279h18v-22.164l-9-48zm36 0-9 48V279h18v-22.164l-9-48zM18 297v16h138.96v-16H18zm156.96 0v16h162.005v-16H174.96zm180.005 0v16H494v-16H354.965zM31 331v156h18V331H31zm36 0v156h18V331H67zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18zm36 0v156h18V331h-18z"}"></path></svg>`;
});
export {
  Component as default
};
