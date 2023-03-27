import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { style: "enable-background:new 0 0 30 30" },
      { viewBox: "0 0 30 30" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M4.11 16.89c0 1.33.46 2.48 1.39 3.43.93.96 2.06 1.47 3.4 1.54.12 0 .18-.06.18-.18v-1.33c0-.12-.06-.18-.18-.18-.86-.04-1.58-.38-2.18-1.02-.6-.64-.9-1.39-.9-2.26 0-.83.28-1.55.84-2.17.56-.61 1.26-.97 2.1-1.07l.52-.04c.13 0 .2-.06.2-.18l.07-.54c.11-1.08.56-1.99 1.37-2.71.81-.73 1.76-1.09 2.85-1.09s2.04.37 2.86 1.1a4.11 4.11 0 0 1 1.4 2.71l.07.57c0 .12.06.19.18.19h1.62c.89 0 1.65.32 2.3.96s.97 1.4.97 2.27c0 .87-.3 1.62-.9 2.26-.6.64-1.33.98-2.18 1.02-.12 0-.19.06-.19.18v1.33c0 .12.06.18.19.18.88-.03 1.68-.27 2.41-.72s1.31-1.05 1.73-1.8.63-1.57.63-2.44c0-.87-.23-1.68-.68-2.45.78-.74 1.29-1.6 1.54-2.58l.14-.73c.01-.01.02-.03.02-.07 0-.07-.05-.13-.16-.16l-.57-.17c-.57-.16-1.06-.44-1.46-.82-.41-.38-.7-.79-.87-1.21-.17-.43-.26-.85-.26-1.28 0-.29.04-.57.11-.85l.13-.61c.02-.1-.02-.18-.13-.23l-.8-.24c-.45-.1-.87-.15-1.27-.15-.36 0-.73.04-1.12.13-.38.09-.78.22-1.19.4s-.81.44-1.2.79-.72.74-1 1.2c-.81-.31-1.59-.46-2.33-.46-1.41 0-2.67.44-3.76 1.32s-1.8 2-2.11 3.36a4.77 4.77 0 0 0-2.73 1.74c-.69.88-1.05 1.91-1.05 3.06zm5.94.88c0 .38.14.71.42.98.28.27.62.4 1.02.4s.73-.13 1-.4.4-.59.4-.98c0-.26-.12-.6-.35-1.02-.23-.42-.45-.75-.65-.98-.11-.12-.24-.26-.41-.43l-.35.41c-.27.29-.52.64-.75 1.04s-.33.72-.33.98zm2.99 3.99c0 .66.23 1.21.68 1.66.46.45 1.01.67 1.65.67.66 0 1.21-.23 1.66-.68.45-.46.68-1.01.68-1.65 0-.55-.27-1.22-.8-2-.44-.58-.87-1.08-1.28-1.49-.08-.06-.17-.13-.26-.23l-.23.23c-.39.36-.82.86-1.28 1.48-.24.33-.43.68-.59 1.04-.16.37-.23.69-.23.97zm1.47-6.67c0 .26.1.47.29.66s.42.27.7.27c.26 0 .47-.09.66-.27.18-.18.27-.4.27-.66 0-.43-.31-.97-.93-1.62l-.25.27c-.18.2-.35.43-.5.7-.17.27-.24.49-.24.65zm3.05-6.32c.35-.57.8-1 1.34-1.29.54-.29 1.12-.44 1.72-.44.12 0 .21.01.27.02v.3c0 .96.26 1.87.79 2.74s1.25 1.52 2.18 1.97c-.16.38-.41.72-.75 1.03a4.909 4.909 0 0 0-3.21-1.14h-.33c-.3-1.31-.97-2.37-2.01-3.19z"}"></path></svg>`;
});
export {
  Component as default
};