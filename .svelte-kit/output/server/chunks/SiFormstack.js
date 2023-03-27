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
  )}><path d="${"M19 4.035h1.4a.6.6 0 0 1 .6.6v14.73a.6.6 0 0 1-.6.6H19V4.035zm3 1.991h1.4a.6.6 0 0 1 .6.6v10.747a.6.6 0 0 1-.6.6H22V6.026zM.6 2.044h16.8a.6.6 0 0 1 .6.6v18.712a.6.6 0 0 1-.6.6H.6a.6.6 0 0 1-.6-.6V2.644a.6.6 0 0 1 .6-.6zM4.2 5.23a.2.2 0 0 0-.2.2v7.35a.2.2 0 0 0 .325.157l9.228-7.35a.2.2 0 0 0-.125-.356L4.2 5.23zM4 17.185a.2.2 0 0 0 .313.165l7.576-5.184a.2.2 0 0 0-.113-.365H6.89a.201.201 0 0 0-.123.042l-2.69 2.102a.199.199 0 0 0-.077.158v3.082zm.086 1.157a.2.2 0 0 0-.086.164v.087c0 .106.086.192.192.192H7a.2.2 0 0 0 .2-.2v-2.022a.2.2 0 0 0-.314-.164l-2.8 1.943z"}"></path></svg>`;
});
export {
  Component as default
};