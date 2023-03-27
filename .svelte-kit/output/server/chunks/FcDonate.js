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
  )}><path fill="${"#E69329"}" d="${"m11.7 21.6 5.1 9.9 9.5-3.9 4.4-12.7-14.8.8z"}"></path><circle cx="${"15"}" cy="${"36"}" r="${"7.8"}" fill="${"#546E7A"}"></circle><g fill="${"#90A4AE"}"><path d="${"M15 27c-5 0-9 4-9 9s4 9 9 9 9-4 9-9-4-9-9-9zm0 16c-3.9 0-7-3.1-7-7s3.1-7 7-7 7 3.1 7 7-3.1 7-7 7z"}"></path><path d="${"M14 33h2v8h-2z"}"></path></g><g fill="${"#FFB74D"}"><path d="${"M12.9 36c1 1.9 3.2 2.7 5.1 1.7l16.5-8.5c1-.5 1.7-1.2 2.2-1.9 1.7-3.2 5.6-10.7 8.2-17.2l-18.2 8.7-4.8 7.2-6.8 3.6c-2.6 1.3-3.4 4.2-2.2 6.4z"}"></path><path d="${"M30.2 3 13.7 9.3c-.7.2-1.5 1-2.2 1.7l-5.6 7.5c-1 1.5-1.2 3.4-.5 5.1.4 1 1.7 3.4 3.1 6.1C10.1 28 12.4 27 15 27c.4 0 .9 0 1.3.1l-2.1-4.2 4.6-4.1h8s15.5-2.2 18.2-8.7L30.2 3z"}"></path></g><path fill="${"#FFCDD2"}" d="${"M18.2 36c-1.3.6-2.8 0-3.3-1.3-.6-1.3 0-2.8 1.3-3.3 1.2-.6 3.2 4 2 4.6z"}"></path></svg>`;
});
export {
  Component as default
};