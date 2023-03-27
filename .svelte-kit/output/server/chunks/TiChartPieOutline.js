import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { baseProfile: "tiny" },
      { version: "1.2" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m18.227 7.609.557-.559a2.002 2.002 0 0 0-.135-2.947 13.513 13.513 0 0 0-7.469-3.097L11 1a2.01 2.01 0 0 0-1.35.523C9.236 1.902 9 2.438 9 3v2.229c-3.657.865-6.333 4.188-6.333 8.006 0 4.547 3.688 8.244 8.224 8.244 1.594 0 3.11-.479 4.441-1.345.277.142.583.226.9.226l.109-.004a1.996 1.996 0 0 0 1.453-.75 10.138 10.138 0 0 0 2.204-6.297 10.099 10.099 0 0 0-1.771-5.7zm-7.336 11.87c-3.438 0-6.224-2.793-6.224-6.244A6.229 6.229 0 0 1 10 7.071v6.408l4.609 4.754a6.169 6.169 0 0 1-3.718 1.246zM11 12.025V3a11.535 11.535 0 0 1 6.366 2.641L11 12.025zm.214 1.269 5.019-5.028a8.075 8.075 0 0 1 1.769 5.043 8.066 8.066 0 0 1-1.769 5.051l-5.019-5.066z"}"></path></svg>`;
});
export {
  Component as default
};