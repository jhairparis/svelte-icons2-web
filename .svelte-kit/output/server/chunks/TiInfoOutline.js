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
  )}><path d="${"M12 5.51c.56 0 1.12.35 1.54 1.06l5.91 9.85c.86 1.42.2 2.58-1.45 2.58H6c-1.65 0-2.31-1.16-1.46-2.57l5.91-9.85c.43-.72.99-1.07 1.55-1.07m0-2c-1.3 0-2.48.74-3.26 2.03L2.83 15.4c-.44.74-.66 1.5-.66 2.23 0 .56.14 1.11.42 1.6C3.23 20.35 4.47 21 6 21h12c1.53 0 2.77-.65 3.41-1.77.29-.51.43-1.07.42-1.65-.01-.71-.23-1.46-.66-2.18l-5.91-9.85c-.78-1.3-1.96-2.04-3.26-2.04zm1.5 13.24s-.71.36-1.07.18c-.36-.18-.43-.54-.23-1.15l.41-1.22c.4-1.22-.12-2.08-1.08-2.13-1.26-.07-2.02.83-2.02.83s.71-.36 1.07-.18c.36.18.43.54.23 1.15l-.41 1.22c-.4 1.22.12 2.07 1.08 2.13 1.26.06 2.02-.83 2.02-.83z"}"></path><circle cx="${"12"}" cy="${"10"}" r="${"1.3"}"></circle></svg>`;
});
export {
  Component as default
};