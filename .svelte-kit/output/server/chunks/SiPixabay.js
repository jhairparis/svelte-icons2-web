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
  )}><path d="${"M5.627 10.234a.888.888 0 0 1-.887-.888H1.7c0 .49-.398.888-.888.888H0v9.447h15.56v-9.447H5.64zm-.886 2.796h-3.04v-1.323h3.04v1.323zm5.344 5.234a3.271 3.271 0 0 1-3.267-3.269c0-1.802 1.466-3.193 3.267-3.193s3.267 1.39 3.267 3.193a3.271 3.271 0 0 1-3.267 3.269zm1.756-3.269c0 .969-.788 1.757-1.756 1.757a1.759 1.759 0 0 1-1.756-1.757c0-.969.788-1.757 1.756-1.757s1.756.788 1.756 1.757zM24 9.501l-3.93 10.156-3.164-1.226V16.7l2.242.869 2.765-7.146L11.55 6.407l-.96 2.482H8.86l1.769-4.57L24 9.501Z"}"></path></svg>`;
});
export {
  Component as default
};