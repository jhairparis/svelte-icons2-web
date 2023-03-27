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
  )}><path d="${"m0 5.264 2.022 4.59 2.022-4.59zm2.022 7.601c.698 0 1.266-.565 1.266-1.26 0-.699-.568-1.262-1.266-1.262a1.262 1.262 0 1 0 0 2.523zM.928 16.227c0 .957.862 2.509 3.315 2.509s3.315-1.188 3.315-2.51V5.266H5.369l.001 11.342c0 .62-.503 1.14-1.126 1.14a1.127 1.127 0 0 1-1.128-1.124l-.001-2.311H.928zm8.289 2.311V5.264h4.374c.845 0 2.187.693 2.187 2.163v2.261c0 .662-.58 1.833-1.44 1.833.86 0 1.44.742 1.44 1.305v3.979c0 .676-.546 1.733-2.187 1.733zm3.38-7.559c.796 0 .995-.134.995-2.214s-.2-2.246-.995-2.246h-1.195v4.457zm.995 3.811c0-2.081 0-2.69-.864-2.69h-1.326v5.348l1.326.003c.863 0 .863-.581.863-2.66zm3.779 3.748H24v-4.226h-2.189l.002 2.31a1.126 1.126 0 0 1-2.255 0V5.265H17.37Z"}"></path></svg>`;
});
export {
  Component as default
};