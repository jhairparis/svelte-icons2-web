import { c as create_ssr_component, d as spread, e as escape_object } from "./index2.js";
const Component = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  return `<svg${spread(
    [
      { xmlns: "http://www.w3.org/2000/svg" },
      { "xml:space": "preserve" },
      { width: "24" },
      { height: "24" },
      { fill: "currentColor" },
      { viewBox: "0 0 48 48" },
      escape_object($$props)
    ],
    {}
  )}><path fill="${"#E91E63"}" d="${"M26.763 24.548c-.614.01.117.317.918.44a9.64 9.64 0 0 0 .6-.515c-.5.119-1.007.121-1.518.075m3.291-.821c.364-.5.631-1.055.723-1.624-.082.405-.303.755-.51 1.128-1.146.721-.108-.43 0-.865-1.232 1.547-.169.927-.213 1.361m1.215-3.159c.073-1.105-.219-.756-.317-.336.116.062.204.781.317.336m-6.83-15.09c.327.058.706.104.653.183.357-.079.439-.151-.653-.183m.654.182-.232.047.215-.017.017-.03m10.201 15.326c.038.991-.29 1.472-.585 2.322l-.529.266c-.435.841.041.535-.268 1.202-.679.603-2.055 1.883-2.496 2.004-.321-.009.218-.382.289-.526-.906.62-.728.934-2.113 1.313l-.041-.09c-3.419 1.607-8.166-1.576-8.103-5.928-.037.275-.104.209-.18.32-.175-2.237 1.033-4.486 3.073-5.403 1.995-.987 4.335-.58 5.763.75-.785-1.028-2.348-2.119-4.199-2.017-1.814.029-3.51 1.182-4.077 2.434-.929.585-1.038 2.256-1.441 2.563-.545 4.003 1.024 5.733 3.68 7.768.417.282.118.326.175.541a7.173 7.173 0 0 1-2.354-1.801c.353.517.733 1.017 1.223 1.41-.831-.279-1.942-2.013-2.267-2.084 1.435 2.567 5.818 4.502 8.113 3.541-1.062.04-2.412.021-3.604-.42-.501-.257-1.183-.791-1.062-.893 3.133 1.171 6.369.887 9.078-1.286.689-.537 1.443-1.449 1.662-1.464-.327.493.057.239-.197.674.688-1.109-.299-.449.711-1.913l.373.512c-.139-.917 1.143-2.033 1.012-3.489.291-.445.326.478.015 1.502.434-1.136.113-1.317.224-2.254.121.315.279.648.359.981-.281-1.097.289-1.848.433-2.485-.142-.063-.435.485-.503-.812.01-.562.156-.295.214-.435-.111-.064-.4-.496-.577-1.323.127-.193.342.506.516.533-.112-.655-.304-1.159-.313-1.665-.51-1.061-.181.143-.592-.458-.543-1.687.449-.39.514-1.156.82 1.188 1.289 3.029 1.504 3.792a15.505 15.505 0 0 0-.752-2.704c.249.108-.401-1.911.324-.575-.772-2.848-3.314-5.511-5.65-6.76.286.262.646.591.517.642-1.163-.69-.959-.745-1.124-1.041-.946-.383-1.01.034-1.636 0-1.786-.943-2.129-.845-3.772-1.437l.078.349c-1.184-.394-1.379.146-2.657.002-.078-.062.41-.219.811-.278-1.143.15-1.09-.228-2.208.042.277-.197.566-.322.861-.486-.932.059-2.226.542-1.825.103-1.521.676-4.22 1.63-5.735 3.051l-.047-.322c-.694.835-3.028 2.492-3.215 3.57l-.185.043c-.361.613-.595 1.305-.881 1.935-.474.806-.692.311-.626.436-.929 1.883-1.39 3.467-1.79 4.768.284.424.007 2.558.113 4.264-.467 8.429 5.916 16.609 12.891 18.5 1.023.365 2.542.354 3.836.39-1.525-.438-1.722-.232-3.209-.749-1.074-.506-1.308-1.082-2.066-1.74l.3.53c-1.49-.526-.867-.652-2.078-1.034l.321-.424c-.482-.032-1.279-.811-1.497-1.241l-.528.021c-.634-.783-.972-1.348-.948-1.785l-.17.305c-.194-.332-2.335-2.937-1.224-2.33-.207-.188-.481-.307-.779-.85l.227-.258c-.535-.686-.983-1.568-.949-1.86.284.384.482.454.679.522-1.351-3.349-1.426-.187-2.448-3.409l.216-.019c-.166-.246-.265-.521-.399-.785l.094-.938c-.972-1.125-.272-4.781-.132-6.783.097-.816.811-1.684 1.354-3.045l-.332-.055c.632-1.104 3.612-4.433 4.99-4.26.669-.841-.132-.002-.263-.215 1.469-1.52 1.93-1.073 2.92-1.349 1.068-.633-.917.251-.41-.239 1.848-.473 1.31-1.073 3.718-1.311.254.145-.59.223-.8.41 1.538-.753 4.87-.584 7.034.417 2.511 1.173 5.33 4.642 5.443 7.904l.126.035c-.063 1.298.198 2.798-.257 4.175l.309-.658m-15.222 4.403-.086.431c.403.547.724 1.142 1.237 1.567-.37-.723-.646-1.023-1.151-1.998m.951-.036c-.213-.237-.34-.518-.48-.802.135.495.411.922.669 1.357l-.189-.555m16.854-3.665-.088.226a11.004 11.004 0 0 1-1.068 3.412 10.73 10.73 0 0 0 1.156-3.638M24.56 5.185c.414-.154 1.019-.084 1.459-.185-.573.048-1.144.079-1.706.151l.247.034m-14.553 7.738c.095.882-.667 1.229.167.644.449-1.005-.174-.281-.167-.644m-.979 4.093c.191-.592.226-.943.3-1.285-.531.679-.244.822-.3 1.285"}"></path></svg>`;
});
export {
  Component as default
};