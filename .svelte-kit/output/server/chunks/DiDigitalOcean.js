import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 34 32" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#444"}" d="${"M5.151 22.755c3.697-1.217 9.204-.874 12.964.624-2.714-1.482-8.159-3.713-12.964-.624zm1.17-2.278c.281-.187.561-.359.827-.499a2.028 2.028 0 0 1-.359-.281 2.468 2.468 0 0 1-.468-.64v-.015c-.499-.983-.328-2.091-.328-2.091s-.858 1.966.328 3.136v.016l.031.016c.047.047.109.094.156.14l-.187-.094c-.796-.468-1.326-1.311-1.326-2.278 0-.983.53-1.825 1.326-2.278.359-.203.78-.328 1.232-.343a5.533 5.533 0 0 1-.094-1.03c0-.218.016-.421.031-.624a4.235 4.235 0 0 0-1.17.218 4.06 4.06 0 0 0-2.777 3.853c0 1.435.749 2.699 1.888 3.432.265-.187.577-.421.889-.639zm3.042-4.711c0-.031-.016-.047-.016-.078.016.047.031.078.031.078s-.265-2.262 1.357-3.401c1.607-1.139 3.994-.437 3.994-.437s-2.512-1.482-4.399-.14c-.031.031-.078.062-.125.094a4.352 4.352 0 0 1 3.354-1.56c1.373 0 2.605.624 3.401 1.607h1.794a5.678 5.678 0 0 0-5.179-3.307c-3.12 0-5.663 2.512-5.678 5.616 0 .343.031.687.094 1.014.515.047.983.234 1.373.515z"}"></path><path fill="${"#444"}" d="${"M26.056 22.209c-3.9.967-7.098-1.186-12.153-2.761-3.323-1.03-6.084.405-7.582 1.513-.78.577-1.217 1.061-1.217 1.061 0 .016.452-.25 1.217-.577 1.591-.671 4.54-1.544 7.566-.437 4.508 1.685 8.05 2.418 11.888 1.763 3.056-.522 4.114-2.537 4.418-3.337-.269.638-1.182 2.042-4.137 2.775zm4.137-2.775c.086-.204.106-.329.106-.329s-.028.125-.106.329z"}"></path><path fill="${"#444"}" d="${"M23.638 21.85c2.184-.094 3.011-1.623 3.011-1.623s-.686.796-2.948.999c-2.278.203-4.68-1.03-4.68-1.03 0 .047 2.434 1.732 4.618 1.654zm-6.474-9.454h2.028v2.028h-2.028v-2.028zm8.049 5.616h1.56v1.56h-1.56v-1.56zm-5.6-7.472h2.699v2.699h-2.699V10.54zm7.831 4.68h2.699v2.699h-2.699V15.22zm-4.867-1.763h1.498v1.498h-1.498v-1.498zm.999 2.964h1.498v1.498h-1.498v-1.498zm-3.168.141h1.513v1.498h-1.513v-1.498zm5.273-3.058h1.498v1.498h-1.498v-1.498z"}"></path></svg>`;
});
export {
  Component as default
};