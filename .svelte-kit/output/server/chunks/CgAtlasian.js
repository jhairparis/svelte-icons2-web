import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 24 24" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.507 11.556c-.317-.452-.725-.397-.911.122L5 18.908h5.178c.52-2.058.07-4.865-1.097-6.533l-.574-.819Z"}" opacity="${".8"}"></path><path d="${"M12.874 7.126c-1.267 1.81-1.675 4.958-.911 7.03l1.75 4.751h5.251l-4.597-12.48c-.19-.519-.602-.572-.919-.12l-.574.82Z"}"></path></svg>`;
});
export {
  Component as default
};
