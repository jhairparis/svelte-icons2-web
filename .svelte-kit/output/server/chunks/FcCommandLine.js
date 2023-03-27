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
  )}><path fill="${"#CFD8DC"}" d="${"M41 6H7c-.6 0-1 .4-1 1v35h36V7c0-.6-.4-1-1-1z"}"></path><path fill="${"#263238"}" d="${"M8 13h32v27H8z"}"></path><path fill="${"#76FF03"}" d="${"M22 27.6c-.1 1.1-.4 1.9-1 2.5-.6.6-1.4.9-2.5.9s-2-.4-2.6-1.1c-.6-.7-.9-1.8-.9-3.1v-1.6c0-1.3.3-2.4.9-3.1.6-.7 1.5-1.1 2.6-1.1s1.9.3 2.5.9c.6.6.9 1.4 1 2.6h-2c0-.7-.1-1.2-.3-1.4-.2-.3-.6-.4-1.1-.4-.5 0-.9.2-1.2.6-.2.4-.3 1-.4 1.8v1.8c0 1 .1 1.6.3 2 .2.4.6.5 1.1.5.5 0 .9-.1 1.1-.4.2-.3.3-.7.3-1.4H22zm2-3.6c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7s-.4.3-.7.3c-.3 0-.5-.1-.7-.3s-.3-.4-.3-.7zm0 6c0-.3.1-.5.3-.7.2-.2.4-.3.7-.3.3 0 .5.1.7.3.2.2.3.4.3.7 0 .3-.1.5-.3.7s-.4.3-.7.3c-.3 0-.5-.1-.7-.3s-.3-.4-.3-.7zm4-9h2l3 10h-2l-3-10z"}"></path><g fill="${"#90A4AE"}"><circle cx="${"13.5"}" cy="${"9.5"}" r="${"1.5"}"></circle><circle cx="${"9.5"}" cy="${"9.5"}" r="${"1.5"}"></circle></g></svg>`;
});
export {
  Component as default
};