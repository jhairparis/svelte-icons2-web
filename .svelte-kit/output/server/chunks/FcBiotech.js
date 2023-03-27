import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { version: "1" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#AD1457"}" d="${"M36 4c0 9.3-6 13.2-12.8 17.8C16.1 26.5 8 31.8 8 44h4c0-10.1 6.5-14.4 13.4-18.9C32.2 20.6 40 15.4 40 4h-4z"}"></path><path fill="${"#AD1457"}" d="${"M38 41H11c-.6 0-1-.4-1-1s.4-1 1-1h27c.6 0 1 .4 1 1s-.4 1-1 1zm-2-4H12c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zm-2-4H14c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm-5-4H19c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1z"}"></path><path fill="${"#E91E63"}" d="${"M37 9H10c-.6 0-1-.4-1-1s.4-1 1-1h27c.6 0 1 .4 1 1s-.4 1-1 1zm-1 4H12c-.6 0-1-.4-1-1s.4-1 1-1h24c.6 0 1 .4 1 1s-.4 1-1 1zm-2 4H14c-.6 0-1-.4-1-1s.4-1 1-1h20c.6 0 1 .4 1 1s-.4 1-1 1zm-5 4H19c-.6 0-1-.4-1-1s.4-1 1-1h10c.6 0 1 .4 1 1s-.4 1-1 1z"}"></path><path fill="${"#E91E63"}" d="${"M40 44h-4c0-10.1-6.5-14.4-13.4-18.9C15.8 20.6 8 15.4 8 4h4c0 9.3 6 13.2 12.8 17.8C31.9 26.5 40 31.8 40 44z"}"></path></svg>`;
});
export {
  Component as default
};