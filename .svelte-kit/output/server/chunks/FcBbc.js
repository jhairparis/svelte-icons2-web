import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#37474F"}" d="${"M0 17v14h14V17H0zm34 0v14h14V17H34zm-17 0v14h14V17H17z"}"></path><path fill="${"#FFF"}" d="${"M8.2 23.7s1.3-.5 1.3-2c0 0 .2-2.4-3-2.7H3v10h4s3.4 0 3.4-2.8c0 0 .1-1.9-2.2-2.5zm-3.4-3.1h1.4c1.5.1 1.4 1.2 1.4 1.2 0 1.4-1.6 1.4-1.6 1.4H4.8v-2.6zm1.9 6.9H4.8v-2.7h1.9c1.9 0 1.9 1.3 1.9 1.3-.1 1.4-1.9 1.4-1.9 1.4zm18.5-3.8s1.3-.5 1.3-2c0 0 .2-2.4-3-2.7H20v10h4s3.4 0 3.4-2.8c0 0 .1-1.9-2.2-2.5zm-3.4-3.1h1.4c1.5.1 1.4 1.2 1.4 1.2 0 1.4-1.6 1.4-1.6 1.4h-1.2v-2.6zm1.9 6.9h-1.9v-2.7h1.9c1.9 0 1.9 1.3 1.9 1.3-.1 1.4-1.9 1.4-1.9 1.4zm21.6.6s-2.9 1.8-6.3.4c0 0-2.9-1.1-3-4.5 0 0-.1-3.5 3.7-4.7 0 0 1-.4 2.8-.2 0 0 1.1.1 2.7.8v1.8s-1.7-1.1-3.7-1.1c0 0-3.6-.1-3.8 3.5 0 0-.1 3.3 3.7 3.4 0 0 1.6.2 3.8-1.2l.1 1.8z"}"></path></svg>`;
});
export {
  Component as default
};
