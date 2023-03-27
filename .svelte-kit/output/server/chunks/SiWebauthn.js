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
  )}><path d="${"M15.287 3.641a8.407 8.407 0 0 0-8.05 7.593h.55a7.805 7.805 0 0 1 2.24-4.713 5.825 5.825 0 0 0 .923.695c-.608 1.177-.98 2.556-1.082 4.018h.135c.105-1.467.485-2.819 1.065-3.947.745.434 1.623.754 2.577.94a27.83 27.83 0 0 0-.25 3.763h-.847v.135h.847c.003 1.334.09 2.617.25 3.764-.954.185-1.832.506-2.577.94a9.997 9.997 0 0 1-.978-3.137h-.137c.164 1.16.502 2.25.997 3.208a5.825 5.825 0 0 0-.924.695 7.805 7.805 0 0 1-2.255-4.875h-.55a8.407 8.407 0 0 0 16.78-.675 8.398 8.398 0 0 0-.69-3.333 8.407 8.407 0 0 0-8.025-5.072zm.315.546c.155 0 .31.005.464.014.365.34.708 1.07.983 2.114a16.518 16.518 0 0 1 .357 1.79 10.173 10.173 0 0 1-1.804.16 10.173 10.173 0 0 1-1.805-.16 16.519 16.519 0 0 1 .357-1.79c.275-1.045.618-1.775.983-2.114a7.97 7.97 0 0 1 .465-.014zm-.665.028c-.345.392-.658 1.093-.913 2.065a16.639 16.639 0 0 0-.36 1.8c-.939-.183-1.802-.498-2.533-.926.686-1.283 1.635-2.264 2.73-2.775a7.874 7.874 0 0 1 1.076-.164zm1.33 0a7.856 7.856 0 0 1 1.084.168c1.092.513 2.037 1.492 2.721 2.771-.73.428-1.594.743-2.533.927a16.64 16.64 0 0 0-.36-1.8c-.255-.972-.568-1.673-.912-2.066zm-2.972.314c-.655.407-1.257.989-1.776 1.73a8.166 8.166 0 0 0-.506.825 5.69 5.69 0 0 1-.89-.67 7.814 7.814 0 0 1 3.172-1.885zm4.624.006a7.862 7.862 0 0 1 3.164 1.877 5.692 5.692 0 0 1-.893.672 8.166 8.166 0 0 0-.506-.825c-.516-.738-1.115-1.318-1.765-1.724zm3.26 1.985a7.858 7.858 0 0 1 1.638 2.419 7.802 7.802 0 0 1 .642 3.051h-2.095c-.01-1.74-.398-3.396-1.11-4.774a5.823 5.823 0 0 0 .925-.696zm-1.044.767c.68 1.32 1.084 2.945 1.094 4.703h-3.42a27.863 27.863 0 0 0-.25-3.763c.953-.186 1.832-.506 2.576-.94zm-6.357.965a10.299 10.299 0 0 0 1.824.16 10.299 10.299 0 0 0 1.823-.16c.16 1.138.246 2.413.25 3.738h-1.179a1.03 1.03 0 0 1-.093.135h1.27a27.71 27.71 0 0 1-.248 3.739 10.397 10.397 0 0 0-3.647 0 27.733 27.733 0 0 1-.248-3.739h1.294a.99.99 0 0 1-.09-.135H13.53c.003-1.325.088-2.6.248-3.738zM2.558 9.381a2.585 2.585 0 0 0-2.547 2.35c-.142 1.541 1.064 2.842 2.566 2.842 1.26 0 2.312-.917 2.533-2.124h4.44v.972h.946v-.972h.837v1.431h.945v-2.376H5.11a2.586 2.586 0 0 0-2.552-2.123zm-.058.965a1.639 1.639 0 0 1 1.707 1.637 1.64 1.64 0 0 1-1.639 1.638 1.639 1.639 0 0 1-.068-3.275zm13.09.388a.75.75 0 0 0-.345 1.404l-.383 1.958h1.5l-.383-1.958a.75.75 0 0 0 .384-.654.75.75 0 0 0-.773-.75zm2.218 1.391h3.421c-.01 1.758-.415 3.384-1.094 4.704-.744-.434-1.623-.755-2.577-.94a27.81 27.81 0 0 0 .25-3.764zm3.556 0h2.095a7.805 7.805 0 0 1-2.28 5.47 5.825 5.825 0 0 0-.925-.696c.712-1.378 1.1-3.033 1.11-4.774zm-5.52 3.703a10.284 10.284 0 0 1 1.562.156 16.518 16.518 0 0 1-.357 1.791c-.275 1.045-.618 1.774-.982 2.114a7.972 7.972 0 0 1-.93 0c-.365-.34-.708-1.07-.983-2.114a16.519 16.519 0 0 1-.357-1.79 10.284 10.284 0 0 1 2.048-.157zm1.695.181c.94.184 1.803.5 2.533.926-.686 1.284-1.635 2.265-2.73 2.776a7.874 7.874 0 0 1-1.075.164c.344-.393.657-1.094.913-2.065a16.64 16.64 0 0 0 .36-1.8zm-3.874 0a16.648 16.648 0 0 0 .36 1.8c.254.973.567 1.674.912 2.066a7.873 7.873 0 0 1-1.075-.164c-1.096-.511-2.045-1.492-2.73-2.775.73-.428 1.593-.743 2.533-.927zm-2.652.997a8.16 8.16 0 0 0 .506.825c.52.741 1.121 1.323 1.776 1.73a7.814 7.814 0 0 1-3.174-1.884 5.694 5.694 0 0 1 .892-.67zm9.178 0a5.694 5.694 0 0 1 .891.67 7.814 7.814 0 0 1-3.173 1.885c.654-.407 1.256-.989 1.775-1.73a8.16 8.16 0 0 0 .507-.825z"}"></path></svg>`;
});
export {
  Component as default
};