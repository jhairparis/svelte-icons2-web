import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M15.802 2.102C14.072.791 11.409.008 8.678.008c-3.377 0-6.129 1.179-7.549 3.235C.462 4.208.093 5.352.032 6.641c-.054 1.148.139 2.418.573 3.784C2.087 5.981 6.227 2.502 11 2.502c0 0-4.466 1.175-7.274 4.816A10.535 10.535 0 0 0 2.2 10.037 15.387 15.387 0 0 0 1 16.002h2s-.304-1.91.224-4.106a17.71 17.71 0 0 0 2.357.177c1.839 0 3.146-.398 4.115-1.252.868-.765 1.347-1.794 1.854-2.882.774-1.663 1.651-3.547 4.198-5.002a.5.5 0 0 0 .054-.833z"}"></path></svg>`;
});
export {
  Component as default
};
