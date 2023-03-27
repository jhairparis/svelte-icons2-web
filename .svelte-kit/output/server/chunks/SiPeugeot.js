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
  )}><path d="${"M12 0c3.5 0 7.13.299 10.817.935.055 1.478.118 3.762.013 5.7-.235 4.322-1.186 7.676-2.994 10.557C18.032 20.064 15.241 22.533 12 24c-3.242-1.467-6.033-3.936-7.836-6.808-1.808-2.88-2.759-6.235-2.994-10.557-.105-1.938-.042-4.222.013-5.7A63.714 63.714 0 0 1 12 0zm0 .416c-3.45 0-6.95.294-10.414.874-.076 2.192-.076 3.936 0 5.324.23 4.248 1.162 7.54 2.93 10.357 1.77 2.818 4.422 5.146 7.484 6.572 3.062-1.426 5.715-3.754 7.484-6.572 1.769-2.818 2.7-6.11 2.93-10.357.076-1.388.076-3.132 0-5.324A63.332 63.332 0 0 0 12 .416zm-.03 12.62.089.522a.268.268 0 0 1-.003.15c-.048.169-.363 1.59-.538 2.625-.083.477-.154.95-.195 1.355a.95.95 0 0 0 .045.489c.172.577.808 2.083.93 2.358a.329.329 0 0 1 .026.095l.046.355c-.204-.308-1.312-2.345-1.747-3.474-.051-.133-.06-.198-.004-.443.302-1.296 1.121-3.499 1.351-4.032zm-1.615-3.132c.03.092.29.98.31 1.192a.409.409 0 0 1-.028.262c-.228.606-.916 2.113-1.181 2.616-.06.11-.115.183-.226.296-.253.258-.739.746-1.039 1.019a.471.471 0 0 0-.16.312 8.009 8.009 0 0 0-.082.74c-.008.16.017.235.107.394.529.945 2.296 3.12 2.8 3.576a.992.992 0 0 0 .14.106c.074.05.315.206.315.206a.085.085 0 0 1 .024.026l.088.154a37.57 37.57 0 0 1-.775-.393.753.753 0 0 1-.125-.085c-.59-.49-2.396-2.606-2.927-3.49-.133-.22-.146-.291-.129-.5.034-.389.085-.878.13-1.092a.604.604 0 0 1 .155-.32c.754-.864 2.206-2.773 2.63-3.59a.371.371 0 0 0 .052-.212c.002-.253-.078-.745-.1-.87a.238.238 0 0 1-.002-.059l.023-.288zm4.93-.474c.082.037.214.08.274.15.937.978 1.686 1.993 1.836 2.26a.43.43 0 0 1 .055.162c.169 1.427.024 2.938-.32 4.253a.409.409 0 0 1-.18.265c-.76.572-2.569 2.072-3.176 2.63a.996.996 0 0 0-.171.209c-.153.25-.342.601-.462.825-.124-.27-.393-.928-.485-1.193a.34.34 0 0 1-.004-.249c.15-.55.862-2.153 1-2.443-.001.037.007.134-.007.17-.063.189-.445 1.452-.523 2a.764.764 0 0 0 0 .274c.034.255.187.724.187.724.017-.041.189-.383.309-.477.709-.698 2.197-1.973 3.05-2.664.096-.077.131-.13.153-.277.105-.725.136-2.027.072-2.975a1.012 1.012 0 0 0-.17-.5c-.232-.342-.508-.665-.927-1.08a.415.415 0 0 1-.115-.22 64.858 64.858 0 0 0-.395-1.844zm-7.92 1.509a.33.33 0 0 1 .18-.007c.267.064.832.203 1.26.312.06.016.134.072.166.125l.093.155a.182.182 0 0 1 .006.177 21.795 21.795 0 0 1-.306.565l-.088.158c-.163.29-.326.57-.418.717-.06.097-.094.14-.202.178-.42.148-.943.325-1.253.425-.063.021-.085.06-.072.13.022.128.093.564.12.69.01.047.048.085.118.071.183-.034.671-.154.671-.154l-.23.212a.146.146 0 0 1-.054.032 8.825 8.825 0 0 1-.56.158c-.078.017-.128-.014-.149-.103 0 0-.138-.59-.188-.791a1.552 1.552 0 0 0-.026-.087 7.384 7.384 0 0 0-.178-.464.108.108 0 0 1-.009-.044c.002-.137.027-.442.027-.442s.299.28.444.382c.032.023.052.028.092.017.198-.05.655-.202.906-.296a.347.347 0 0 0 .146-.105c.26-.313.585-.8.773-1.169a.22.22 0 0 0 .014-.163l-.04-.133a.173.173 0 0 0-.091-.098 34.025 34.025 0 0 0-1.2-.433l.049-.015zm8.742-3.798a.407.407 0 0 1 .3.007c.74.311 1.986 1.044 2.679 1.56.067.05.093.084.11.164.163.74.225 1.885.123 2.848a.482.482 0 0 1-.057.185c-.44.898-.933 1.743-1.453 2.395.008-.08.045-.461.047-.683a.076.076 0 0 1 .03-.06 9.058 9.058 0 0 0 .305-.247.35.35 0 0 0 .075-.086c.212-.343.59-1.06.743-1.491a.787.787 0 0 0 .043-.328c-.049-.602-.143-1.434-.284-1.978a.334.334 0 0 0-.17-.215 11.79 11.79 0 0 0-.9-.388.763.763 0 0 1-.207-.123 33.14 33.14 0 0 0-1.255-1.004.43.43 0 0 0-.352-.075 21.5 21.5 0 0 0-.752.186.312.312 0 0 1-.149.01c-.1-.011-.3-.027-.382-.033a20.448 20.448 0 0 1 1.506-.644zm-7.833 4.86a7.71 7.71 0 0 1-.569.823.199.199 0 0 1-.083.06 14.149 14.149 0 0 1-.707.237l1.359-1.12zm-2.427-.398-.108.748-.369-.432c.068-.146.264-.283.477-.316zm-.686-1.699-.133.084c-.034.021-.043.03-.057.06a2.697 2.697 0 0 1-.085.161.234.234 0 0 1-.047.05 16.611 16.611 0 0 1-.477.354c-.009.006-.02.004-.028-.004a1.706 1.706 0 0 1-.098-.114.082.082 0 0 1-.015-.049 2.033 2.033 0 0 1 .006-.133c.004-.051.018-.075.08-.14.07-.072.145-.147.225-.225.194-.164.686-.563 1.564-1.19a.193.193 0 0 0 .044-.043c.092-.124.354-.464.418-.545a.193.193 0 0 1 .031-.03 2.485 2.485 0 0 1 .26-.184c.244-.154.718-.436.983-.59l-.1.124-.018.016a42.288 42.288 0 0 0-.562.432.113.113 0 0 0-.047.078 6.86 6.86 0 0 0-.071.5c-.003.04-.02.058-.06.075-.173.07-.378.144-.544.21a.217.217 0 0 0-.066.036c-.017.013-.237.21-.237.21s.479-.118.655-.158a.123.123 0 0 1 .098.011c.037.017.097.041.129.053a.19.19 0 0 0 .129.005c.198-.044.53-.123.708-.17a.593.593 0 0 0 .22-.103c.085-.059.3-.22.3-.22l-.007.044a.06.06 0 0 1-.016.032 3.986 3.986 0 0 1-.158.178.617.617 0 0 1-.249.168c-.503.21-1.363.536-2.009.76a.198.198 0 0 0-.092.058l-.08.085s.527.039.688.057a.22.22 0 0 1 .129.057c.132.114.569.565.7.72 0 0-1.243.208-1.819.35a.16.16 0 0 0-.122.12c-.048.168-.16.707-.16.707s-.04-.013-.096-.045a.388.388 0 0 1-.1-.085 5.752 5.752 0 0 1-.468-.58c-.031-.047-.044-.107-.005-.155.117-.144.351-.406.48-.541a.34.34 0 0 0 .05-.077c.05-.103.104-.317.129-.413zm8.021-2.816a.18.18 0 0 1 .109.015l.256.122a.093.093 0 0 1 .05.063c.035.147.078.341.106.507a.3.3 0 0 1-.036.2 13.59 13.59 0 0 1-.446.694.182.182 0 0 0-.022.136c.056.306.286 1.374.286 1.374l-.145-.132a.21.21 0 0 1-.06-.092 36.992 36.992 0 0 1-.385-1.24.159.159 0 0 1 .03-.145c.151-.184.372-.478.5-.664.036-.053.048-.11.027-.154a4.614 4.614 0 0 0-.127-.237.106.106 0 0 0-.06-.049l-.174-.055a.145.145 0 0 0-.093.001c-.379.138-.889.336-1.2.466a.18.18 0 0 1-.12.012c-.09-.013-.354-.06-.483-.085a.034.034 0 0 1-.023-.05l.153-.266a.147.147 0 0 1 .096-.07 38.651 38.651 0 0 1 1.761-.351zM7.737 8.306a.054.054 0 0 1 .055.033.279.279 0 0 1-.008.221.121.121 0 0 1-.076.062l-.246.054a.023.023 0 0 1-.027-.023l.023-.29a.04.04 0 0 1 .036-.036l.243-.02zm2.794-1.854a.037.037 0 0 1 .032.055L9.964 7.54a.264.264 0 0 1-.155.126l-1.122.352a1.65 1.65 0 0 1-.377.07c-.249.02-.988.043-.988.043l.016-.035a.074.074 0 0 1 .038-.037l.35-.149a.169.169 0 0 0 .067-.05l.54-.666a.361.361 0 0 1 .107-.09c.357-.189.992-.471 1.437-.62a.508.508 0 0 1 .142-.024l.512-.007zm-.6-1.198a29.29 29.29 0 0 1 4.517-.017.837.837 0 0 1 .263.064c.525.22 1.456.704 2.491 1.296a.776.776 0 0 1 .128.092c.274.242.969.954.969.954l-.217-.043a.228.228 0 0 1-.084-.035 16.556 16.556 0 0 0-1.615-.95.592.592 0 0 0-.203-.06 14.69 14.69 0 0 0-.844-.061.652.652 0 0 1-.303-.08 14.314 14.314 0 0 0-.985-.44.612.612 0 0 0-.273-.05 54.67 54.67 0 0 0-1.959.07.244.244 0 0 1-.052-.003l-.244-.038c.693-.12 2.407-.273 3.117-.31l-.289-.096a.596.596 0 0 0-.173-.03c-.97-.022-2.303-.018-3.432.067a.61.61 0 0 0-.202.05c-.323.142-1.11.57-1.9 1.008l-.772.433.117-.152a.136.136 0 0 1 .045-.04c.102-.068.41-.268.534-.359.238-.179.613-.495.837-.691a.668.668 0 0 0 .128-.153c.073-.117.152-.244.2-.315a.266.266 0 0 1 .2-.111zm-5.276-2.85c.306-.032.477.087.477.398v.171c0 .317-.171.446-.477.477a71.255 71.255 0 0 0-1.269.144v.47c-.089.01-.177.02-.266.032V2.581a70.662 70.662 0 0 1 1.535-.177zm14.203-.05a71.245 71.245 0 0 1 2.022.227v.245a68.767 68.767 0 0 0-.874-.105v1.27a94.038 94.038 0 0 0-.266-.03v-1.27a68.332 68.332 0 0 0-.882-.092v-.244zM7.65 2.157V2.4a71.853 71.853 0 0 0-1.664.122v.373a68.573 68.573 0 0 1 1.48-.11v.244a70.54 70.54 0 0 0-1.48.11v.41a69.7 69.7 0 0 1 1.664-.122v.244a70.938 70.938 0 0 0-1.924.145V2.3a70.535 70.535 0 0 1 1.924-.145zm8.633.415c0-.34.168-.41.548-.384.333.023.665.048.998.075.33.028.547.12.547.467v.676c0 .34-.188.402-.547.372a72.552 72.552 0 0 0-.998-.075c-.363-.025-.548-.095-.548-.455v-.676zm-2.581-.529c.642.016 1.285.04 1.927.073v.244a70.737 70.737 0 0 0-1.666-.066v.373c.494.014.988.033 1.482.057v.244a70.44 70.44 0 0 0-1.482-.056v.409a69.156 69.156 0 0 1 1.666.066v.244a71.29 71.29 0 0 0-1.927-.073V2.042zm-3.344-.001v1.096c0 .347-.182.423-.549.434a68.029 68.029 0 0 0-.957.036c-.34.015-.548-.05-.548-.393V2.12l.26-.014v1.142c0 .07.06.126.14.123a70.12 70.12 0 0 1 1.254-.048.132.132 0 0 0 .132-.132V2.048l.268-.007zm6.324.38a.125.125 0 0 0-.138.13V3.3c0 .07.06.142.138.148.432.028.864.06 1.296.097a.134.134 0 0 0 .138-.126v-.75a.158.158 0 0 0-.138-.15 70.186 70.186 0 0 0-1.296-.098zm-5.172-.397c.48-.004.958-.002 1.437.004v.244a72.147 72.147 0 0 0-1.536-.004c-.07.001-.139.061-.139.13v.76c0 .069.07.138.139.137.46-.004.918-.003 1.378.002v-.41a66.592 66.592 0 0 0-.8-.004V2.64c.354 0 .707.003 1.06.008v.898a71.123 71.123 0 0 0-1.49-.007c-.363.003-.548-.06-.548-.413v-.66c0-.33.166-.439.5-.441zm-6.754.616h-.021a70.229 70.229 0 0 0-1.348.152v.558a71.034 71.034 0 0 1 1.348-.152c.069-.007.138-.07.138-.136v-.307c0-.07-.07-.122-.138-.115h.02z"}"></path></svg>`;
});
export {
  Component as default
};