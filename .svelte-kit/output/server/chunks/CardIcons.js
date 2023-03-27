import { c as create_ssr_component, b as compute_rest_props, v as validate_component, g as add_attribute, p as createEventDispatcher, h as escape, t as tick, q as is_promise, n as noop, m as missing_component, d as spread, e as escape_object, f as escape_attribute_value } from "./index2.js";
import classNames from "classnames";
import { F as Frame, B as Button } from "./Button.js";
/* empty css                                         */import { P } from "./P.js";
const Card = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["href", "horizontal", "reverse", "img", "padding", "size"]);
  let { href = void 0 } = $$props;
  let { horizontal = false } = $$props;
  let { reverse = false } = $$props;
  let { img = void 0 } = $$props;
  let { padding = "lg" } = $$props;
  let { size = "sm" } = $$props;
  const paddings = {
    none: "p-0",
    sm: "p-4 sm:p-6 md:p-8",
    md: "p-4 sm:p-5",
    lg: "p-4 sm:p-6",
    xl: "p-4 sm:p-8"
  };
  const sizes = {
    xs: "max-w-xs",
    sm: "max-w-sm",
    md: "max-w-lg",
    lg: "max-w-2xl",
    xl: "max-w-screen-xl"
  };
  let innerPdding;
  let cardClass;
  let imgClass;
  if ($$props.href === void 0 && $$bindings.href && href !== void 0)
    $$bindings.href(href);
  if ($$props.horizontal === void 0 && $$bindings.horizontal && horizontal !== void 0)
    $$bindings.horizontal(horizontal);
  if ($$props.reverse === void 0 && $$bindings.reverse && reverse !== void 0)
    $$bindings.reverse(reverse);
  if ($$props.img === void 0 && $$bindings.img && img !== void 0)
    $$bindings.img(img);
  if ($$props.padding === void 0 && $$bindings.padding && padding !== void 0)
    $$bindings.padding(padding);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  innerPdding = paddings[padding];
  cardClass = classNames(
    "flex",
    sizes[size],
    reverse ? "flex-col-reverse" : "flex-col",
    horizontal && (reverse ? "md:flex-row-reverse md:max-w-xl" : "md:flex-row md:max-w-xl"),
    href && "hover:bg-gray-100 dark:hover:bg-gray-700",
    !img && innerPdding,
    $$props.class
  );
  imgClass = classNames(reverse ? "rounded-b-lg" : "rounded-t-lg", horizontal && "object-cover w-full h-96 md:h-auto md:w-48 md:rounded-none", horizontal && (reverse ? "md:rounded-r-lg" : "md:rounded-l-lg"));
  return `${validate_component(Frame, "Frame").$$render($$result, Object.assign({}, { tag: href ? "a" : "div" }, { rounded: true }, { shadow: true }, { border: true }, { href }, $$restProps, { class: cardClass }), {}, {
    default: () => {
      return `${img ? `<img${add_attribute("class", imgClass, 0)}${add_attribute("src", img, 0)} alt="${""}">
    <div${add_attribute("class", innerPdding, 0)}>${slots.default ? slots.default({}) : ``}</div>` : `${slots.default ? slots.default({}) : ``}`}`;
    }
  })}`;
});
const Spinner = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { color = "blue" } = $$props;
  let { bg = "text-gray-300" } = $$props;
  let { size = "8" } = $$props;
  let { currentFill = "currentFill" } = $$props;
  let { currentColor = "currentColor" } = $$props;
  let iconsize = `w-${size} h-${size}`;
  if (currentFill !== "currentFill") {
    color = void 0;
  }
  const fillColorClasses = {
    blue: "fill-blue-600",
    gray: "fill-gray-600 dark:fill-gray-300",
    green: "fill-green-500",
    red: "fill-red-600",
    yellow: "fill-yellow-400",
    pink: "fill-pink-600",
    purple: "fill-purple-600",
    white: "fill-white"
  };
  let fillColorClass = color === void 0 ? "" : fillColorClasses[color] ?? fillColorClasses.blue;
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.bg === void 0 && $$bindings.bg && bg !== void 0)
    $$bindings.bg(bg);
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.currentFill === void 0 && $$bindings.currentFill && currentFill !== void 0)
    $$bindings.currentFill(currentFill);
  if ($$props.currentColor === void 0 && $$bindings.currentColor && currentColor !== void 0)
    $$bindings.currentColor(currentColor);
  return `<svg role="${"status"}"${add_attribute("class", classNames("inline -mt-px animate-spin dark:text-gray-600", iconsize, bg, fillColorClass, $$props.class), 0)} viewBox="${"0 0 100 101"}" fill="${"none"}" xmlns="${"http://www.w3.org/2000/svg"}"><path d="${"M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"}"${add_attribute("fill", currentColor, 0)}></path><path d="${"M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"}"${add_attribute("fill", currentFill, 0)}></path></svg>`;
});
const Clipboard_svelte_svelte_type_style_lang = "";
const css = {
  code: "textarea.svelte-1rsvwj9{left:0;bottom:0;margin:0;padding:0;opacity:0;width:1px;height:1px;border:none;display:block;position:absolute}",
  map: null
};
const Clipboard = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  const dispatch = createEventDispatcher();
  let { text } = $$props;
  let textarea;
  async function copy() {
    textarea.select();
    document.execCommand("Copy");
    await tick();
    textarea.blur();
    dispatch("copy");
  }
  if ($$props.text === void 0 && $$bindings.text && text !== void 0)
    $$bindings.text(text);
  $$result.css.add(css);
  return `${slots.default ? slots.default({ copy }) : ``}
<textarea class="${"svelte-1rsvwj9"}"${add_attribute("this", textarea, 0)}>${escape(text, true)}</textarea>`;
});
const __variableDynamicImportRuntimeHelper = (glob, path) => {
  const v = glob[path];
  if (v) {
    return typeof v === "function" ? v() : Promise.resolve(v);
  }
  return new Promise((_, reject) => {
    (typeof queueMicrotask === "function" ? queueMicrotask : setTimeout)(reject.bind(null, new Error("Unknown variable dynamic import: " + path)));
  });
};
const AsyncIcon = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "XX", idIcon = "XX" } = $$props;
  const getAsyncIcon = async () => {
  };
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.idIcon === void 0 && $$bindings.idIcon && idIcon !== void 0)
    $$bindings.idIcon(idIcon);
  return `${function(__value) {
    if (is_promise(__value)) {
      __value.then(null, noop);
      return `
	${validate_component(Spinner, "Spinner").$$render($$result, {}, {}, {})}
`;
    }
    return function(value) {
      return `
	${validate_component(Clipboard, "Clipboard").$$render($$result, { text: `<${icon}/>` }, {}, {
        default: ({ copy }) => {
          return `${validate_component(Button, "Button").$$render($$result, { outline: true, pill: true, class: "!p-4" }, {}, {
            default: () => {
              return `${validate_component(value.default || missing_component, "svelte:component").$$render($$result, { width: "32", height: "32" }, {}, {})}`;
            }
          })}`;
        }
      })}
`;
    }(__value);
  }(getAsyncIcon())}`;
});
const BsCodeSlash = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let $$restProps = compute_rest_props($$props, ["size", "color", "class"]);
  let { size = 24 } = $$props;
  let { color = "currentColor" } = $$props;
  let { class: className } = $$props;
  if ($$props.size === void 0 && $$bindings.size && size !== void 0)
    $$bindings.size(size);
  if ($$props.color === void 0 && $$bindings.color && color !== void 0)
    $$bindings.color(color);
  if ($$props.class === void 0 && $$bindings.class && className !== void 0)
    $$bindings.class(className);
  return `<svg${spread(
    [
      escape_object($$restProps),
      { xmlns: "http://www.w3.org/2000/svg" },
      { viewBox: "0 0 16 16" },
      { width: escape_attribute_value(size) },
      { height: escape_attribute_value(size) },
      { fill: escape_attribute_value(color) },
      { class: escape_attribute_value(className) }
    ],
    {}
  )}><path d="${"M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294l4-13zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0zm6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0z"}"></path></svg>`;
});
const CardIcons = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { icon = "XX", test = false, idIcon = "XX" } = $$props;
  if ($$props.icon === void 0 && $$bindings.icon && icon !== void 0)
    $$bindings.icon(icon);
  if ($$props.test === void 0 && $$bindings.test && test !== void 0)
    $$bindings.test(test);
  if ($$props.idIcon === void 0 && $$bindings.idIcon && idIcon !== void 0)
    $$bindings.idIcon(idIcon);
  return `${validate_component(Card, "Card").$$render(
    $$result,
    {
      padding: "none",
      class: "min-w-[200px] max-w-md "
    },
    {},
    {
      default: () => {
        return `<div class="${"flex justify-center items-center flex-col p-5 pb-6 relative"}">${test ? `${slots.default ? slots.default({}) : ``}` : ``}

		${validate_component(AsyncIcon, "AsyncIcon").$$render($$result, { icon, idIcon }, {}, {})}

		${validate_component(P, "P").$$render($$result, { size: "lg", class: "my-4" }, {}, {
          default: () => {
            return `${escape(icon.slice(2))}`;
          }
        })}

		<div class="${"absolute flex justify-start items-center m-1 bottom-1 left-0"}">${validate_component(Clipboard, "Clipboard").$$render(
          $$result,
          {
            text: `import ${icon} from 'svelte-symbols/${idIcon}/${icon}.svelte';`
          },
          {},
          {
            default: ({ copy }) => {
              return `${validate_component(Button, "Button").$$render(
                $$result,
                {
                  outline: true,
                  pill: true,
                  class: "!p-2 border-none",
                  size: "xs",
                  shadow: "cyan"
                },
                {},
                {
                  default: () => {
                    return `${validate_component(BsCodeSlash, "BsCodeSlash").$$render($$result, { size: 16 }, {}, {})}`;
                  }
                }
              )}`;
            }
          }
        )}</div></div>`;
      }
    }
  )}`;
});
export {
  CardIcons as C
};