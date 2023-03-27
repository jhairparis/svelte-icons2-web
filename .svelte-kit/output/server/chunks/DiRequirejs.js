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
  )}><path fill="${"#444"}" d="${"M16 4.567c-5.377 0-9.736 4.359-9.736 9.736s4.358 9.736 9.736 9.736c5.377 0 9.736-4.359 9.736-9.736S21.377 4.567 16 4.567zm0 17.128c-4.074 0-7.392-3.314-7.392-7.392S11.925 6.911 16 6.911c4.077 0 7.392 3.314 7.392 7.392S20.077 21.695 16 21.695zm0-10.638a3.245 3.245 0 1 0 0 6.49 3.245 3.245 0 0 0 0-6.49zm0-3.245a6.49 6.49 0 1 0 0 12.98 6.49 6.49 0 0 0 0-12.98zm0 10.637c-2.285 0-4.147-1.86-4.147-4.147s1.862-4.147 4.147-4.147c2.286 0 4.147 1.86 4.147 4.147S18.286 18.449 16 18.449zm5.95 8.113-2.524-1.082v.721h-4.973l-1.029-1.029c-.07-.07-.185-.07-.255 0s-.07.184 0 .255l.774.774h-.392l-1.029-1.029c-.07-.07-.185-.07-.255 0s-.07.184 0 .255l.774.774h-.392l-1.029-1.029c-.07-.07-.185-.07-.255 0s-.07.184 0 .255l.774.774h-.392l-1.029-1.029c-.07-.07-.185-.07-.255 0s-.07.184 0 .255l.774.774h-.827c-.203 0-.361.211-.361.361s.163.361.361.361h.827l-.774.774a.18.18 0 1 0 .255.255l1.029-1.029h.392l-.774.774a.18.18 0 1 0 .255.255l1.029-1.029h.392l-.774.774a.18.18 0 1 0 .255.255l1.029-1.029h.392l-.774.774a.18.18 0 1 0 .255.255l1.029-1.029h4.973v.721l2.524-1.082z"}"></path></svg>`;
});
export {
  Component as default
};