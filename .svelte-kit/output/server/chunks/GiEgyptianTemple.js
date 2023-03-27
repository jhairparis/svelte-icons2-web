import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 512 512" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m483.5 57-10 30h-147l-10-30zm-288 0-10 30h-147l-10-30zm260.4 48 30.2 302H445l-.2-210-32.8-73.1-32.8 73.1-.2 210h-18V199h-26.3l9.4-94zm-288 0 9.4 94H151v208h-18l-.2-210-32.8-73.1L67.2 197 67 407H25.9l30.2-302zM412 164.1l9.4 18.9h-18.8zm-312 0 9.4 18.9H90.6zM427 201v206h-30V201zm-312 0v206H85V201zm228 16v30H169v-30zm0 48v142h-30V295H199v112h-30V265zm144 160v62H342.1l-24.8-62zm-189.1 0 8.4 21H205.7l8.4-21zm-103.2 0-24.8 62H25v-62zm118.8 39 9.2 23H189.3l9.2-23z"}"></path></svg>`;
});
export {
  Component as default
};