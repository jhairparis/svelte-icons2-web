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
  )}><path d="${"M215.169 21c-14.272 2.46-28.136 6.434-41.42 11.31.76 1.066 1.536 2.074 2.204 3.231 11.333 19.63 4.648 44.48-14.981 55.812s-44.773 4.795-56.107-14.834a40.2 40.2 0 0 1-1.762-3.378 240.21 240.21 0 0 0-30.256 30.256c1.177.54 2.38.954 3.525 1.616 19.63 11.333 26.314 36.33 14.981 55.96s-36.33 26.46-55.96 15.127c-1.166-.674-2.302-1.289-3.377-2.056A237.521 237.521 0 0 0 21 215.316c1.287-.122 2.646-.294 3.966-.294 22.666 0 40.978 18.312 40.978 40.978s-18.312 40.978-40.978 40.978c-1.32 0-2.68-.029-3.966-.147 2.457 14.253 6.149 28.151 11.016 41.419a42.229 42.229 0 0 1 3.378-2.203c6.134-3.542 12.78-5.408 19.387-5.582 14.535-.382 28.78 7.068 36.572 20.563 11.333 19.63 4.648 44.773-14.981 56.106a42.81 42.81 0 0 1-3.378 1.763 240.241 240.241 0 0 0 30.11 30.109 42.776 42.776 0 0 1 1.762-3.378c7.083-12.268 19.483-19.492 32.606-20.416a41.321 41.321 0 0 1 23.5 5.435c19.63 11.333 26.314 36.33 14.981 55.959a42.275 42.275 0 0 1-2.203 3.378c13.268 4.867 27.166 8.559 41.419 11.016-.122-1.287-.147-2.647-.147-3.966 0-22.666 18.313-40.978 40.979-40.978s40.978 18.312 40.978 40.978c0 1.32-.172 2.678-.294 3.966a237.515 237.515 0 0 0 41.272-11.016c-.768-1.075-1.383-2.211-2.057-3.378-11.333-19.63-4.501-44.773 15.128-56.106 6.134-3.542 12.624-5.278 19.24-5.435 14.558-.345 28.928 7.068 36.72 20.563.653 1.131 1.081 2.361 1.615 3.525a240.216 240.216 0 0 0 30.257-30.256 40.2 40.2 0 0 1-3.379-1.763c-19.629-11.333-26.46-36.624-15.128-56.253 7.792-13.495 22.146-20.82 36.719-20.416 6.624.185 13.253 2.04 19.387 5.582 1.191.687 2.137 1.565 3.232 2.35 4.9-13.324 8.841-27.247 11.31-41.566-1.285.121-2.65.147-3.967.147-22.666 0-41.125-18.312-41.125-40.978s18.46-40.978 41.125-40.978c1.316 0 2.682.174 3.966.294-2.457-14.253-6.296-28.151-11.162-41.419a38.291 38.291 0 0 1-3.379 2.203c-19.629 11.334-44.773 4.502-56.106-15.128s-4.5-44.626 15.128-55.96c1.176-.678 2.308-1.063 3.525-1.615a240.197 240.197 0 0 0-30.403-30.403c-.547 1.203-.941 2.357-1.615 3.525-11.334 19.63-36.33 26.315-55.96 14.981s-26.46-36.33-15.128-55.959a39.34 39.34 0 0 1 2.203-3.378c-13.267-4.867-27.166-8.706-41.418-11.162.12 1.283.294 2.65.294 3.965 0 22.666-18.313 41.125-40.979 41.125s-40.978-18.459-40.978-41.125c0-1.315.03-2.682.147-3.965zm40.684 85.335c88.956 0 177.988 153.995 133.51 231.034s-222.394 77.038-266.872 0 44.406-231.034 133.362-231.034zm0 59.778c-47.61 0-95.186 106.36-71.381 159.506 23.805 53.146 119.104 53.146 142.91 0 23.804-53.147-23.919-159.506-71.529-159.506zM256 281.116c18.01 0 32.606 14.595 32.606 32.606S274.011 346.475 256 346.475s-32.606-14.742-32.606-32.753 14.595-32.606 32.606-32.606z"}"></path></svg>`;
});
export {
  Component as default
};