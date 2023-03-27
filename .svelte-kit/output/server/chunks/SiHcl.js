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
  )}><path d="${"m21.397 10.401-1.097 2.44H24l-.344.763h-6.362l1.433-3.203zm-6.399 1.09h2.464c-.016-.538-.536-.911-1.568-1.06-2.034-.299-4.235-.171-5.802.694-1.234.686-1.329 1.718-.099 2.223 1.036.422 3.211.466 4.767.201 1.008-.17 1.778-.502 2.21-.997h-2.516c-.326.25-.753.376-1.25.38-1.412.01-1.599-.418-1.353-.91.294-.58.908-.897 1.845-.922.738-.02 1.103.144 1.302.39M0 13.608h2.604l.558-1.28h2.553l-.573 1.278h2.635l1.445-3.203H6.57l-.477 1.08h-2.55l.483-1.08H1.447Z"}"></path></svg>`;
});
export {
  Component as default
};