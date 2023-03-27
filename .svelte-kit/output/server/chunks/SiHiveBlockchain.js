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
  )}><path d="${"M6.076 1.637a.103.103 0 0 0-.09.05L.014 11.95a.102.102 0 0 0 0 .104l6.039 10.26c.04.068.14.068.18 0l5.972-10.262a.102.102 0 0 0-.002-.104L6.166 1.687a.103.103 0 0 0-.09-.05zm2.863 0a.103.103 0 0 0-.09.154l5.186 8.967a.105.105 0 0 0 .09.053h3.117c.08 0 .13-.088.09-.157l-5.186-8.966a.104.104 0 0 0-.09-.051H8.94zm5.891 0a.102.102 0 0 0-.088.154L20.656 12l-5.914 10.209a.102.102 0 0 0 .088.154h3.123a.1.1 0 0 0 .088-.05l5.945-10.262a.1.1 0 0 0 0-.102L18.041 1.688a.1.1 0 0 0-.088-.051H14.83zm-.79 11.7a.1.1 0 0 0-.089.052l-5.101 8.82c-.04.069.01.154.09.154h3.117a.104.104 0 0 0 .09-.05l5.1-8.82a.103.103 0 0 0-.09-.155h-3.118z"}"></path></svg>`;
});
export {
  Component as default
};