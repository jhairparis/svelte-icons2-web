import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 17 17" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"m15.242 5.42-1.188 8.064c-.118.612-.389.88-.586 1.076-.191.19-.318.316-.318.933V16.5a.5.5 0 0 1-1 0v-1.007c0-.955.278-1.309.614-1.642.155-.154.248-.247.304-.534l1.185-8.039c.018-.123.051-.54-.273-.585-.112-.016-.203.002-.275.057-.096.071-.164.209-.188.378l-.497 3.316a.5.5 0 0 1-.78.336c-.05.008-.134-.023-.218-.078a.498.498 0 0 1-.229-.448l.285-5.286a.481.481 0 0 0-.432-.532.467.467 0 0 0-.346.109.468.468 0 0 0-.167.321l-.463 4.782a.49.49 0 0 1-.531.451 4.948 4.948 0 0 0-.246-.011.501.501 0 0 1-.49-.491l-.115-6.119A.47.47 0 0 0 8.82 1a.469.469 0 0 0-.468.468l-.118 6.586a.5.5 0 0 1-.286.443c-.062.03-.122.06-.179.092a.503.503 0 0 1-.744-.387L6.51 2.873a.472.472 0 1 0-.939.075l.503 7.097a.499.499 0 0 1-.89.346L3.633 8.438c-.203-.34-.562-.435-.84-.274a.582.582 0 0 0-.213.799l3.529 6.087c.08.139.211.236.367.274a.5.5 0 0 1 .382.486v.69a.5.5 0 0 1-1 0v-.35a1.568 1.568 0 0 1-.614-.598l-3.53-6.087a1.565 1.565 0 0 1-.16-1.202 1.585 1.585 0 0 1 2.903-.386l.506.634-.389-5.483a1.469 1.469 0 0 1 2.414-1.246c.146.123.263.269.35.431l.014-.753a1.468 1.468 0 0 1 2.936.009l.014.746c.088-.163.206-.31.353-.434a1.476 1.476 0 0 1 2.419 1.258l-.053.978a1.348 1.348 0 0 1 1.099-.314c.785.109 1.248.816 1.122 1.717z"}"></path></svg>`;
});
export {
  Component as default
};