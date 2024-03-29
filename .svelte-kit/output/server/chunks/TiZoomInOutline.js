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
  )}><path d="${"M13 11h-2V9c0-.275-.225-.5-.5-.5s-.5.225-.5.5v2H8c-.275 0-.5.225-.5.5s.225.5.5.5h2v2c0 .275.225.5.5.5s.5-.225.5-.5v-2h2c.275 0 .5-.225.5-.5s-.225-.5-.5-.5zm6.381 4.956-2.244-2.283A6.896 6.896 0 0 0 17.5 11.5c0-3.859-3.141-7-7-7s-7 3.141-7 7 3.141 7 7 7c.762 0 1.488-.137 2.173-.364l2.397 2.386a3.279 3.279 0 0 0 2.104.783 3.134 3.134 0 0 0 3.131-3.131c0-.84-.328-1.628-.924-2.218zm-3.901-1.11 2.492 2.531c.205.203.332.486.332.797 0 .625-.507 1.131-1.131 1.131-.312 0-.594-.127-.816-.313l-2.512-2.511a6.056 6.056 0 0 0 1.635-1.635zM5.5 11.5c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5z"}"></path></svg>`;
});
export {
  Component as default
};
