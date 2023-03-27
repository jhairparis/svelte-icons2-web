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
  )}><path d="${"M9.836 17.793a.55.55 0 0 0 .087-.281c.004-.11-.024-.183-.083-.221-.054-.04-.122-.044-.202-.012a.51.51 0 0 0-.216.18.542.542 0 0 0-.094.293c-.008.224.064.37.215.44.156.067.338.06.546-.025.383-.154.697-.476.943-.966.24-.466.374-.953.4-1.458.162.948-.068 1.997-.646 2.765a2.99 2.99 0 0 1-.672.39l-1 .3a7.28 7.28 0 0 1-.493.082v-5.656c.828.222 1.664.468 2.272 1.015l-.045 1.278c-.042 1.188-.293 1.875-.75 2.06-.185.074-.337.076-.456.005a.554.554 0 0 0 .194-.19zm.366-11.578c-.128-.045-.388-.114-.55-.157-.234-.062-.537-.142-.696-.157a1.46 1.46 0 0 0-.48.03c-.073.02-.26.083-.041.16.124.047.31.096.517.15.158.043.456.122.633.154.25.045.484.017.595-.012.092-.024.246-.086.022-.168zm4.53-1.354c.255.04.521.08.783.135l.995.348-2.996.9-5.066 1.52-2.7-.81c.065-.183.153-.358.26-.52l2.832.835.575-.168-.405-.12-.363.106L6.08 6.33a2.33 2.33 0 0 1 .64-.602c1.519-.953 3.292-1.206 4.98-1.172l2.794.826-.363.106.406.12.575-.168-2.93-.866c.765.04 1.507.13 2.193.232zm-4.65 1.103c-.28-.074-.967-.255-1.708-.06-.74.194-.062.376.22.45.283.075.948.25 1.69.056.737-.193.084-.37-.203-.446zm3.748-.5-.135-.035-.43.113-1.651-.438a.264.264 0 0 0-.172-.003c-.034.01-.04.01-.048.023-.073.105-.39.188-.455.205l-.06.016.134.036.06-.016c.05-.013.216-.058.343-.12l1.482.393-.426.11.135.037c.127-.038.453-.123.603-.163.15-.04.476-.124.62-.158zM8.62 9.542c.13.034.26.07.386.11.674.153 1.37.336 2.044.58.037-.47.166-.925.387-1.36.25-.49.567-.814.95-.968.208-.084.388-.09.54-.022.155.067.23.213.221.437a.536.536 0 0 1-.102.304.467.467 0 0 1-.207.168c-.08.032-.15.032-.21 0-.054-.04-.08-.118-.076-.233a.55.55 0 0 1 .087-.28.548.548 0 0 1 .195-.19c-.12-.07-.27-.069-.455.005-.46.185-.71.87-.751 2.06l-.01.303c.721.308 1.403.7 1.99 1.217v-.796c0-.282-.03-.312-.305-.227v-.178l.563-.24v1.682c.293.293.557.622.783.995.156.252.273.516.362.79.11-.193.166-.517.21-.796l.09-.55c.035-.225.082-.52.082-.659 0-.23-.074-.34-.188-.304-.156.05-.36.337-.465.864-.02.098-.02.104-.07.12-.02.006-.06.018-.06-.04 0-.13.212-.95.603-1.072.098-.03.29-.044.375.274.04-.12.168-.443.383-.51.113-.036.34-.038.34.255 0 .224-.12.343-.192.365-.102.032-.137-.067-.137-.14 0 0 0-.219.156-.326-.063-.06-.16-.03-.172-.027-.184.057-.29.407-.344.723l-.133.83c-.03.204-.074.465-.074.603 0 .3.106.335.184.31.164-.05.36-.336.465-.863.02-.098.023-.105.07-.12.027-.01.06-.018.06.04 0 .114-.2.947-.603 1.072-.102.032-.293.028-.37-.275-.039.11-.097.24-.174.344.2.673.242 1.392.284 2.095.01.148.017.294.027.439v.007c.01.342-.003.667-.036.977l1.57-.471V5.588L8.62 8.07zM2.73 8.306l-.146-.044.15.356a4.06 4.06 0 0 1-.005-.312zM8.274 19.32v-5.79a19.334 19.334 0 0 1-.462-.13c-1.38-.314-2.726-1.096-3.894-2.26a2.85 2.85 0 0 1-.182-.164l.656 1.547c.026.058.062.132.062.194 0 0 0 .075-.08.176l-2.213 2.888 2.434.741c1.385.42 1.984.265 2.143-1.781l.22.067-.247 2.884-4.895-1.49c-.132-.04-.22-.067-.22-.205 0-.038 0-.063.088-.174l2.1-2.76-2.197-5.207c0-.288.018-.283.23-.22l.93.285c.045-.488.157-.97.322-1.414L0 5.588v11.277l8.204 2.46zm0-9.862V8.07L5.66 7.286c-.06.33-.06.785.214 1.215.566.548 1.373.728 2.154.9zM3.398 5.661 2.19 5.304l.575-.168.406.12-.363.106.644.19c.1-.19.21-.37.332-.538l-.09-.024.06-.016.073-.02a3.84 3.84 0 0 1 1.798-1.342c1.04-.456 2.195-.733 3.538-.84l-.716-.25-8.062 2.82 2.798.84a4.59 4.59 0 0 1 .214-.52zm17.455.147a.145.145 0 0 0-.145.146.145.145 0 0 0 .145.145.145.145 0 0 0 .144-.146.14.14 0 0 0-.043-.103.139.139 0 0 0-.1-.042zm-.89 1.76a.106.106 0 0 1-.038.077.16.16 0 0 1-.108.04c-.078 0-.145-.053-.145-.116 0-.037.023-.063.037-.076a.16.16 0 0 1 .108-.04c.08 0 .145.053.145.115zm3.313 1.245c-.3 0-.397-.13-.53-.31a52.78 52.78 0 0 0-.319-.409c.21-.316.174-.683-.104-1-.226-.262-.407-.606-.58-.938-.195-.368-.395-.75-.648-1.003-.212-.212-.65-.45-1.177-.642-.864.145-1.588.158-2.5-.21-1.663-.703-3.578-1.106-5.693-1.2-2.47-.138-4.366.126-5.965.83l-.015.005C4.667 4.31 3.81 5.26 3.45 6.48a.075.075 0 0 1-.005.016c-.577 1.43-.584 3.342.7 4.385a.154.154 0 0 1 .012.012c1.125 1.124 2.418 1.876 3.74 2.176a21.66 21.66 0 0 0 .668.186c1.085.29 2.207.59 2.918 1.52.008.01.014.02.02.033.573 1.243.39 2.822-.455 3.93a.206.206 0 0 1-.03.03c-.634.508-1.57.807-2.855.912-.02.002-.04 0-.06-.006a150.044 150.044 0 0 1-2.6-.748c-.867-.254-1.762-.517-2.584-.743a6.03 6.03 0 0 1-.554-.17l.144.182c.225.286.566.718.714.845l.007.006c1.33 1.274 2.46 1.73 3.967 2.09 1.894.439 3.556.56 5.506-.273 1.633-1.02 2.37-2.447 2.316-4.49-.01-.145-.02-.292-.027-.439-.058-.99-.12-2.01-.632-2.843-1.16-1.907-3.398-2.64-5.434-3.103a.057.057 0 0 1-.014-.004c-.306-.098-.623-.168-.96-.243-.833-.186-1.696-.378-2.333-1.006a.123.123 0 0 1-.023-.028C5.303 8.26 5.212 7.7 5.34 7.13a2.753 2.753 0 0 1 1.2-1.696c2.454-1.542 5.506-1.329 7.89-.97l.354.056c.82.126 1.84.283 2.462.877a.172.172 0 0 1 .053.13c-.015.48.163.723.37 1.005.133.184.285.393.387.678.33.805 1.12.905 1.955 1.01.337.044.686.088 1 .183a.275.275 0 0 1 .035.015c.433.248.91.127 1.206-.128.093.118.262.335.284.365.13.176.278.374.624.41.005.087-.001.185-.006.28a3.58 3.58 0 0 0-.008.206h.259c0-.058.004-.122.008-.19.006-.096.011-.194.007-.288h.309L24 9.07v-.258zM5.666 19.418c0 .15-.322.27-.72.27-.4 0-.722-.12-.722-.27 0-.15.323-.27.72-.27.4 0 .723.12.723.27zm2.555.997c0 .235-.315.426-.703.426-.39 0-.704-.19-.704-.425 0-.236.315-.427.703-.427.388 0 .704.19.704.426zm3.534.108c0 .283-.343.513-.767.513s-.768-.23-.768-.512c0-.284.343-.514.767-.514s.768.228.768.513zm1.21-1.177c-.353 0-.64-.3-.64-.67 0-.37.287-.67.64-.67.353 0 .64.3.64.67a.655.655 0 0 1-.64.67zm.641-4.023c.37 0 .67.368.67.823 0 .455-.3.823-.67.823-.37 0-.67-.368-.67-.823 0-.455.3-.823.67-.823zm-1.402-2.926c.404 0 .73.34.73.762 0 .42-.326.762-.73.762-.404 0-.731-.34-.731-.762 0-.42.327-.762.731-.762zm-4.206-.853c0-.438.396-.792.884-.792s.884.355.884.792c0 .438-.395.793-.883.793s-.884-.354-.885-.792zM3.853 7.23c0-.286.246-.518.55-.518.302 0 .548.232.548.518 0 .286-.247.518-.55.518-.303 0-.548-.232-.548-.518zm1.574 1.943a.72.72 0 0 1 .73.708.72.72 0 0 1-.73.708.72.72 0 0 1-.73-.708.72.72 0 0 1 .73-.708zm.68-3.937c0 .252-.231.457-.517.457-.286 0-.518-.204-.518-.457 0-.252.232-.457.518-.457.286 0 .518.204.518.457zm1.7-1.088c0 .185-.191.336-.426.337-.236 0-.427-.15-.427-.336 0-.186.19-.336.426-.337.236.001.427.151.427.336zm1.95-.475c0 .168-.162.305-.364.305-.202 0-.366-.136-.366-.304 0-.169.163-.306.365-.306.202 0 .366.136.366.305zm2.178-.078c0 .135-.15.244-.335.244-.185 0-.335-.109-.336-.243 0-.136.15-.244.335-.244.185 0 .335.107.336.243zm1.592.382c-.144 0-.26-.1-.26-.226 0-.125.116-.226.26-.226.144 0 .26.101.26.226s-.117.226-.26.226zm2.11.118c0 .118-.12.213-.273.214-.15 0-.274-.095-.275-.213 0-.119.122-.214.274-.215.152 0 .275.095.275.214zm1.565.745c-.1 0-.183-.096-.183-.213 0-.118.082-.214.183-.214.1 0 .183.097.183.214 0 .117-.082.213-.183.213zm3.02 2.73a.358.358 0 0 1-.124.268.42.42 0 0 1-.28.104c-.223 0-.404-.167-.405-.372a.36.36 0 0 1 .123-.27.42.42 0 0 1 .28-.104c.224 0 .404.167.405.373h-.13zm1.035-1.616a.404.404 0 0 1-.403.405.405.405 0 0 1-.287-.69.405.405 0 0 1 .285-.118.4.4 0 0 1 .286.118.394.394 0 0 1 .12.285z"}"></path></svg>`;
});
export {
  Component as default
};