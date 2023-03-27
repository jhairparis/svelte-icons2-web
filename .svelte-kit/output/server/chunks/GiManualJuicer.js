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
  )}><path d="${"M256 25c-61 0-106.483 30.34-137.273 64.979-15.396 17.32-26.987 35.685-34.63 51.447-4.366 9.006-7.222 17.143-8.992 23.595 111.413-18.394 248.612-18.916 361.784-.021-1.77-6.45-4.625-14.578-8.987-23.574-7.642-15.762-19.233-34.128-34.629-51.447C362.483 55.339 317 25 256 25zm41.842 59.068 31.254 1.405-.809 17.982-31.254-1.404.809-17.983zM188.484 89.01l1.588 17.93-39.681 3.511-1.588-17.93 39.681-3.511zm56.842 26.304 59.697 1.407-.423 17.994-59.698-1.404.424-17.997zm111.865 5.385 25.635 4.215-2.92 17.762-25.635-4.215 2.92-17.762zm-197.902 1.676 1.686 17.922-41.086 3.863-1.686-17.922 41.086-3.863zM247 210.963c-17.508 16.406-35.214 41.12-49.047 67.248-15.24 28.787-25.845 59.462-28.369 80.789H247V210.963zm18 0V359h77.416c-2.524-21.327-13.129-52.002-28.37-80.79-13.832-26.127-31.538-50.841-49.046-67.247zm-43.445.115c-21.035 10.717-44.265 29.134-65.012 51.102-29.165 30.88-53.805 68.425-64.287 96.82h59.178c2.341-25.784 14.136-58.088 30.613-89.21 11.295-21.336 24.743-41.923 39.508-58.712zm68.89 0c14.765 16.789 28.213 37.376 39.508 58.711 16.477 31.123 28.272 63.427 30.613 89.211h59.178c-10.482-28.395-35.122-65.94-64.287-96.82-20.747-21.968-43.977-40.385-65.012-51.102zM13.486 377.062l9.96 29.875h358.173a104.33 104.33 0 0 0-6.05-22.203c-13.173 4.197-26.5 7.203-35.29 6.004-22.146-3.021-37.867-8.74-48.033-13.675H13.486zm402.946 0c-3.86 9.583-6.83 19.808-8.215 29.875h80.338l9.959-29.875h-82.082zM41.199 425c.145 12.594.633 24.65 3.455 34.527 3.35 11.721 9.076 20.655 21.674 27.473h379.344c12.598-6.818 18.325-15.752 21.674-27.473 2.822-9.877 3.31-21.933 3.455-34.527h-63.219c.529 6.554 1.98 12.792 4.572 18.45 7.75 16.911-.351 29.644-13.117 29.642-11.861-.003-24.832-6.477-18.726-30.26 1.454-5.664 2.263-11.666 2.457-17.832H41.199z"}"></path></svg>`;
});
export {
  Component as default
};