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
  )}><path d="${"M20.472 10.081H3.528a1.59 1.59 0 0 0-1.589 1.589v10.59a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V11.67a1.59 1.59 0 0 0-1.589-1.589zM12 22.525c-3.066 0-5.56-2.494-5.56-5.56s2.494-5.56 5.56-5.56c3.066 0 5.56 2.494 5.56 5.56s-2.494 5.56-5.56 5.56zm0-10.114c-2.511 0-4.554 2.043-4.554 4.554S9.489 21.519 12 21.519s4.554-2.043 4.554-4.554-2.043-4.554-4.554-4.554zm0 7.863a3.322 3.322 0 0 1-3.221-2.568h1.67c.275.581.859.979 1.551.979.96 0 1.721-.761 1.721-1.721 0-.96-.761-1.721-1.721-1.721a1.7 1.7 0 0 0-1.493.874H8.805A3.322 3.322 0 0 1 12 13.655a3.321 3.321 0 0 1 3.309 3.309A3.321 3.321 0 0 1 12 20.274zM23.849.396l-.002.003-.006-.005.004-.004a.668.668 0 0 0-.519-.238.654.654 0 0 0-.512.259l-1.818 2.353a1.564 1.564 0 0 0-.523-.095H3.528c-.184 0-.358.038-.523.095L1.187.41A.657.657 0 0 0 .156.389L.16.393.153.399.151.396a.662.662 0 0 0-.012.824l1.909 2.471a1.587 1.587 0 0 0-.108.566v3.707a1.59 1.59 0 0 0 1.589 1.589h16.944a1.59 1.59 0 0 0 1.589-1.589V4.257c0-.2-.041-.39-.109-.566l1.909-2.471a.663.663 0 0 0-.013-.824zM6.904 8.228a1.787 1.787 0 1 1 0-3.574 1.787 1.787 0 0 1 0 3.574zm10.325 0a1.787 1.787 0 1 1 0-3.574 1.787 1.787 0 0 1 0 3.574z"}"></path></svg>`;
});
export {
  Component as default
};