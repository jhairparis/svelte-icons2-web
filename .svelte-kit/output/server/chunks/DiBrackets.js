import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 32 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M24.995 5.975H7.104c-1.212 0-2.218 1.223-2.409 2.826v1.107l.014.111c-.006.026-.01.053-.014.08v13.989c.279 1.444 1.229 2.507 2.36 2.507h17.891c1.131 0 2.082-1.063 2.36-2.507V8.257c-.329-1.328-1.239-2.284-2.31-2.284zm.122 16.604c-.224 1.165-.991 2.022-1.903 2.022H8.786c-.912 0-1.678-.857-1.903-2.022V11.297c.004-.022.006-.044.011-.065l-.011-.089v-.893c.154-1.293.965-2.28 1.943-2.28h14.428c.864 0 1.597.77 1.863 1.841v12.767zM8.889 16.286v6.117h6.365v-2.785h-3.581v-6.664h3.581v-2.785H8.888v6.117zm7.857-4.725v1.392h3.581v6.664h-3.581v2.785h6.366V10.168h-6.366v1.392z"}"></path></svg>`;
});
export {
  Component as default
};