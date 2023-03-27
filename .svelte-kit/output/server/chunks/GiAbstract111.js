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
  )}><path d="${"M255.963 21.015c-11.542 0-23.073 4.274-31.87 13.073-8.247 8.25-12.556 19.015-13.07 29.82-34.695 8.072-67.694 25.4-94.73 52.442-27.015 27.02-44.516 60.09-52.577 94.748-10.732.56-21.325 4.876-29.52 13.073-17.595 17.598-17.595 46.155 0 63.753 8.195 8.197 18.787 12.513 29.52 13.074 8.093 34.657 25.71 67.433 52.725 94.453 27.028 27.034 59.912 44.646 94.581 52.736.497 10.786 4.823 21.424 13.071 29.673 17.594 17.599 46.145 17.451 63.74-.147 8.195-8.197 12.51-18.645 13.071-29.38 34.678-8.055 67.546-25.694 94.582-52.735 27.066-27.072 44.667-60.001 52.724-94.747 10.732-.562 21.325-4.877 29.52-13.074 17.595-17.598 17.742-46.008.146-63.606-8.248-8.25-19.03-12.576-29.814-13.074-8.079-34.67-25.564-67.728-52.577-94.747-26.988-26.993-59.954-44.351-94.582-52.442-.515-10.805-4.824-21.571-13.071-29.82-8.798-8.8-20.328-13.073-31.87-13.073zm-2.497 21.006c.806-.082 1.67 0 2.497 0 13.245 0 23.94 10.697 23.94 23.944s-10.696 23.944-23.94 23.944-23.94-10.698-23.94-23.944c0-12.42 9.356-22.72 21.443-23.944zm45.822 35.695c31.623 7.644 61.673 23.933 86.358 48.623 24.685 24.69 40.824 54.598 48.465 86.227-7.334 2-14.355 5.838-20.12 11.605-17.594 17.598-17.594 46.155 0 63.753 5.717 5.72 12.694 9.456 19.973 11.458-7.684 31.586-23.81 61.568-48.465 86.227-24.635 24.64-54.528 40.798-86.064 48.476-1.987-7.347-5.837-14.211-11.602-19.978-17.595-17.598-46.145-17.599-63.74 0-5.758 5.76-9.455 12.653-11.455 19.978-31.61-7.659-61.671-23.785-86.358-48.476-24.654-24.659-40.649-54.656-48.319-86.227 7.315-1.994 14.231-5.714 19.974-11.458 17.595-17.598 17.594-46.155 0-63.753-5.765-5.767-12.775-9.617-20.12-11.605 7.676-31.543 23.83-61.588 48.465-86.227 24.655-24.66 54.631-40.643 86.21-48.329a45.237 45.237 0 0 0 11.603 19.978c17.594 17.598 46.146 17.598 63.74 0 5.77-5.771 9.47-12.919 11.455-20.272zm17.918 25.56c-2.9 4.74-6.324 9.264-10.427 13.368-1.807 1.806-3.636 3.568-5.582 5.141 2.533 20.43 12.508 41.595 29.814 58.905s38.596 27.417 59.04 29.967c1.576-1.942 3.334-3.775 5.14-5.582 4.07-4.07 8.522-7.398 13.219-10.283-16.778-11.225-33.737-25.224-49.934-41.424-16.263-16.266-30.024-33.243-41.27-50.092zm-122.34.294c-9.829 14.71-21.858 29.43-35.54 43.775-1.932 2.024-3.875 3.875-5.875 5.876-16.172 16.174-33.183 30.209-49.935 41.424 4.694 2.893 9.29 6.354 13.365 10.43a72.014 72.014 0 0 1 5.287 5.876c20.352-2.614 41.379-12.742 58.6-29.967 17.284-17.288 27.541-38.627 30.107-59.052a72.655 72.655 0 0 1-5.727-5.141c-4.048-4.048-7.4-8.56-10.282-13.22zm26.143 25.12c-1.86 21.365-12.046 43.924-30.255 62.136-18.141 18.146-40.538 28.493-61.83 30.408 11.947 21.643 11.765 48.03-.291 69.628 21.356 1.86 43.943 11.928 62.124 30.114s28.52 40.9 30.401 62.283c21.594-12.085 47.983-12.255 69.615-.294 1.935-21.27 12.283-43.574 30.4-61.696 18.21-18.212 40.617-28.547 61.979-30.407-12.044-21.642-12.065-48.132 0-69.776-21.4-1.865-43.923-12.202-62.125-30.407s-28.412-40.608-30.254-61.99c-21.647 12.048-48.115 12.049-69.761 0zm34.954 55.673c7.462.029 14.872 2.976 20.56 8.667l42.445 42.452c11.38 11.381 11.38 29.75 0 41.131l-42.444 42.453c-11.379 11.381-29.744 11.528-41.122.147l-42.591-42.6c-11.379-11.38-11.38-29.896 0-41.277l42.59-42.453c5.69-5.691 13.1-8.546 20.562-8.52zm-192.394 47.74c.806-.081 1.669 0 2.496 0 13.245 0 23.94 10.699 23.94 23.945s-10.695 23.944-23.94 23.944-24.086-10.697-24.086-23.944c0-12.419 9.486-22.72 21.59-23.944zm379.942 0c.806-.081 1.669 0 2.497 0 13.243 0 23.939 10.699 23.939 23.945s-10.696 23.944-23.94 23.944c-13.244 0-23.939-10.697-23.939-23.944 0-12.419 9.355-22.72 21.443-23.944zm-321.637 69.042c-1.534 1.881-3.24 3.681-4.993 5.435-4.129 4.129-8.592 7.666-13.365 10.576 16.861 11.234 33.672 25.012 49.935 41.278 16.227 16.23 30.343 33.265 41.563 50.091 2.897-4.74 6.18-9.265 10.28-13.367 1.754-1.754 3.55-3.462 5.434-4.995-2.55-20.449-12.653-41.888-29.96-59.198s-38.466-27.287-58.894-29.82zm268.178 0c-20.422 2.566-41.755 12.679-59.04 29.967-17.197 17.2-27.332 38.282-29.961 58.61 2.004 1.615 4.012 3.575 5.874 5.436 4.102 4.103 7.381 8.482 10.281 13.22 11.215-16.791 25.067-33.74 41.27-49.944s33.29-30.058 50.08-41.277c-4.738-2.9-9.262-6.18-13.364-10.283a74.67 74.67 0 0 1-5.14-5.73zM253.466 422.04c.806-.081 1.67 0 2.497 0 13.245 0 23.94 10.697 23.94 23.944s-10.696 24.09-23.94 24.09-23.94-10.843-23.94-24.09c0-12.419 9.356-22.72 21.443-23.944z"}"></path></svg>`;
});
export {
  Component as default
};