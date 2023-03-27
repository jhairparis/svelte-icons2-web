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
  )}><path d="${"M14.124 16.853a.162.162 0 1 1 .158.161.158.158 0 0 1-.158-.161zm-5.607-.158a.161.161 0 1 0 0 .323.161.161 0 0 0 0-.323zm10.134-.664v1.986a1.053 1.053 0 0 1-1.103.996h-.384a5.06 5.06 0 0 1-1.13 1.718.32.32 0 0 0 0 .465l.238.219a.304.304 0 0 1 .039.43c-1.126 1.384-2.967 2.152-5.05 2.152a6.575 6.575 0 0 1-4.82-1.898l-.008-.01a.63.63 0 0 1 .055-.89.323.323 0 0 0 0-.472 4.944 4.944 0 0 1-1.126-1.714h-.35a1.057 1.057 0 0 1-1.107-.996v-1.986a1.057 1.057 0 0 1 1.107-.992h.273a5.765 5.765 0 0 1 2.08-3.094C6.94 10.846 6.21 8.69 6.137 6.938 6.023 4.47 6.218.078 7.825 0c1.607-.077 1.372 4.027 1.1 6.695a32.732 32.732 0 0 0-.124 4.45 6.994 6.994 0 0 1 2.483-.43 7.241 7.241 0 0 1 1.737.207c.261-1.268.876-3.574 2.03-5.196 1.671-2.352 3.435-4.78 4.61-4.1 1.177.68-.307 3.14-1.329 4.427-1.022 1.287-2.786 3.209-3.374 4.227-.211.384-.43.803-.596 1.153a5.737 5.737 0 0 1 2.917 3.613h.073V12.74a.307.307 0 0 0-.18-.285.915.915 0 0 1-.558-.814 1.018 1.018 0 0 1 .905-.905c.56-.06 1.06.345 1.12.905a.919.919 0 0 1-.553.814.307.307 0 0 0-.169.285v2.152a.311.311 0 0 0 .17.28.972.972 0 0 1 .564.858zm-1.022-3.974a.434.434 0 0 0 .461-.415.415.415 0 1 0-.461.415zm-.423 3.478c.098.48.148.967.15 1.456v.365h.411a.323.323 0 0 0 .323-.319V16.03a.52.52 0 0 0-.569-.495h-.315zm-3.728-4.481.611.238a36.605 36.605 0 0 1 2.383-3.866c1.288-1.726 2.337-3.582 1.872-3.87-.465-.288-1.618 1.23-2.771 3.109a34.898 34.898 0 0 0-2.095 4.389zm-4.054.672.015 1.334a.32.32 0 0 0 .385.315 6.432 6.432 0 0 1 1.456-.165 5.995 5.995 0 0 1 1.453.173.324.324 0 0 0 .384-.315v-1.342a.319.319 0 0 0-.242-.311 6.664 6.664 0 0 0-1.603-.184 6.71 6.71 0 0 0-1.602.184.319.319 0 0 0-.246.311zm1.706 6.864v.384a.688.688 0 0 1-.5.27c-.307 0-.537-.42-.537-.42a.073.073 0 0 0-.1-.03l-.003.001a.07.07 0 0 0-.024.095c.011.023.28.495.665.495a.714.714 0 0 0 .384-.126.327.327 0 0 1 .361 0 .833.833 0 0 0 .473.134.957.957 0 0 0 .657-.48.07.07 0 0 0-.027-.096.07.07 0 0 0-.1.027c0 .023-.219.384-.542.407a.804.804 0 0 1-.576-.269v-.384a.315.315 0 0 1 .127-.254c.196-.15.415-.396.415-.492a.538.538 0 0 0-.577-.419c-.376 0-.653.25-.653.458 0 .134.254.338.423.46a.323.323 0 0 1 .134.239zm-3.347-6.944.577-.308c-.02-1.126-.035-3.143 0-4.542.053-2.037.153-4.574-.523-4.547s-1.15 1.98-.888 4.758a33.056 33.056 0 0 0 .834 4.638zm-3.305 5.391a.319.319 0 0 0 .319.32h.4a3.046 3.046 0 0 1 0-.366 7.546 7.546 0 0 1 .146-1.456c-.05 0-.34 0-.387-.002a.488.488 0 0 0-.478.498v1.006zm.918 1.472a5.325 5.325 0 0 1-.123-.557.323.323 0 0 0-.319-.273H4.46c0 .016-.002.34 0 .355a.519.519 0 0 0 .553.483l.384-.008zm10.127 2.917-.088-.08a.323.323 0 0 0-.385-.027 6.982 6.982 0 0 1-3.804 1.006 6.995 6.995 0 0 1-3.794-1.006.323.323 0 0 0-.384.027l-.088.08a.315.315 0 0 0 0 .458 6.03 6.03 0 0 0 4.292 1.598 6.045 6.045 0 0 0 4.29-1.598.315.315 0 0 0-.04-.458zm1.449-4.416c0-2.455-1.153-4.327-3.025-5.226a.328.328 0 0 0-.465.292v1.33a.327.327 0 0 0 .204.296c1.733.71 2.928 2.186 2.928 3.877 0 2.271-2.156 3.809-5.342 3.809-3.185 0-5.341-1.541-5.341-3.809 0-1.69 1.195-3.167 2.928-3.877a.319.319 0 0 0 .204-.296v-1.322a.325.325 0 0 0-.462-.292c-1.887.883-3.04 2.767-3.04 5.207 0 2.99 2.287 4.996 5.711 4.996 3.429 0 5.7-2.01 5.7-4.985zm-8.609-.538H8.36a.584.584 0 1 0 .004 0zm5.162.592a.574.574 0 0 0 .584.573.584.584 0 1 0-.584-.573zm4.569.623h-.5a.323.323 0 0 0-.315.273 8.183 8.183 0 0 1-.127.557h.402a.519.519 0 0 0 .536-.5l.004-.33z"}"></path></svg>`;
});
export {
  Component as default
};