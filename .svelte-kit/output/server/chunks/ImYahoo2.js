import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 16 16" },
      escape_object($$props)
    ],
    {}
  )}><path d="${"M8.019 1.087C5.191 1.087 2.519.715 0 0v16c2.522-.716 5.194-1.088 8.019-1.088 2.794 0 5.459.363 7.981 1.088V0c-2.522.725-5.184 1.087-7.981 1.087zm4.431 1.366-.097.153c-.091.144-.172.266-.284.438-.15.225-.431.672-.769 1.247-.094.159-.209.35-.328.556l-.688 1.162-.256.447-.678 1.181c-.228.403-.453.8-.678 1.194v.397c0 .55.012 1.15.031 1.684.009.244.019.678.031 1.137.012.547.025 1.113.041 1.4l.003.088v.009l-.094-.025-.109-.028a3.093 3.093 0 0 0-.353-.056 2.691 2.691 0 0 0-.444 0 3.058 3.058 0 0 0-.462.084l-.094.025v-.009l.003-.088c.013-.284.028-.853.041-1.4.009-.459.022-.894.031-1.137a42.53 42.53 0 0 0 .031-1.684v-.397L6.65 7.637c-.222-.391-.453-.791-.675-1.181-.088-.15-.172-.3-.256-.447-.2-.347-.459-.781-.688-1.162a31.856 31.856 0 0 1-.328-.556 31.033 31.033 0 0 0-.769-1.247c-.112-.172-.194-.294-.284-.438l-.097-.153.175.05c.222.063.45.094.694.094s.478-.031.697-.094l.053-.016.028.047c.431.778 1.591 2.684 2.284 3.825.237.394.428.703.522.862v-.003.003l.522-.862c.694-1.138 1.853-3.044 2.284-3.825l.028-.047.053.016c.219.063.453.094.697.094s.472-.031.694-.094l.166-.05z"}"></path></svg>`;
});
export {
  Component as default
};