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
  )}><path fill="${"#CD201F"}" fill-rule="${"evenodd"}" d="${"M9.522 15.553V8.81l6.484 3.383-6.484 3.36ZM23.76 7.641s-.235-1.654-.954-2.382c-.913-.956-1.936-.96-2.405-1.016C17.043 4 12.005 4 12.005 4h-.01s-5.038 0-8.396.243c-.47.055-1.492.06-2.406 1.016C.474 5.987.24 7.641.24 7.641S0 9.584 0 11.525v1.822c0 1.942.24 3.884.24 3.884s.234 1.653.953 2.382c.914.956 2.113.926 2.647 1.026 1.92.184 8.16.241 8.16.241s5.043-.007 8.401-.25c.47-.056 1.492-.061 2.405-1.017.72-.729.954-2.382.954-2.382s.24-1.942.24-3.885v-1.82c0-1.942-.24-3.885-.24-3.885Z"}"></path></svg>`;
});
export {
  Component as default
};
