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
  )}><path d="${"M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zM7.425 3.214c-.621 0-1.125.503-1.125 1.124v6a1.124 1.124 0 0 0 2.25 0v-6c0-.62-.504-1.124-1.125-1.124zm0 9.314c-.621 0-1.125.503-1.125 1.125v6a1.124 1.124 0 0 0 2.25 0v-6c0-.622-.504-1.125-1.125-1.125zm4.152-6.856c-.621 0-1.125.504-1.125 1.125v10.388a1.124 1.124 0 0 0 2.25 0V6.797c0-.621-.504-1.125-1.125-1.125zm4.151 6.856c-.62 0-1.124.503-1.124 1.125v1.056a1.124 1.124 0 1 0 2.249 0v-1.056c0-.622-.504-1.125-1.125-1.125zm0-4.37c-.62 0-1.124.503-1.124 1.124v1.056a1.124 1.124 0 0 0 2.249 0V9.282c0-.62-.504-1.124-1.125-1.124zm4.152 2.422c-.62 0-1.124.503-1.124 1.124v.574a1.124 1.124 0 1 0 2.249 0v-.574c0-.62-.504-1.124-1.125-1.124Z"}"></path></svg>`;
});
export {
  Component as default
};