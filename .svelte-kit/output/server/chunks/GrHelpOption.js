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
  )}><path fill="${"#000"}" fill-rule="${"evenodd"}" d="${"M2 7a5 5 0 0 1 5-5h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7Zm5-3a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5c-1.448 0-2 1.052-2 1.5a1 1 0 1 1-2 0c0-1.552 1.448-3.5 4-3.5 1.156 0 2.17.289 2.909.935C15.664 7.096 16 8.017 16 9c0 1.188-.306 2.028-.882 2.668a4.313 4.313 0 0 1-.828.693 14.92 14.92 0 0 1-.368.235l-.018.011c-.124.078-.236.15-.347.223-.35.236-.493.412-.55.526-.046.088-.077.205-.028.438a1 1 0 0 1-1.958.412c-.126-.6-.083-1.197.204-1.759.273-.535.718-.942 1.218-1.277.14-.094.277-.18.399-.257l.009-.006c.122-.076.228-.142.328-.21.205-.136.346-.25.453-.368.174-.193.368-.516.368-1.329 0-.517-.164-.846-.409-1.06-.261-.229-.747-.44-1.591-.44Zm0 8.281a1 1 0 1 0 0 2 1 1 0 0 0 0-2Z"}" clip-rule="${"evenodd"}"></path></svg>`;
});
export {
  Component as default
};