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
  )}><path d="${"M204.153 21c12.227 7.035 24.415 14.15 36.572 21.15 3.008 2.025 5.92 4.182 8.813 6.316-4.129 2.585-8.202 5.258-12.044 8.225-8.39 6.4-16.345 13.812-21.15 24.528-5.335 12.456-6.2 27.26-5.875 41.418.155 9.172.888 18.396 1.91 27.76a304.272 304.272 0 0 0-18.36-20.856c-9.783-10.241-20.76-20.081-33.34-25.116-10.975-4.18-22.002-3.756-32.46-2.35-4.895.63-9.715 1.529-14.54 2.644.54-3.6 1.205-7.262 1.908-10.869 3.647-13.545 7.344-27.066 11.016-40.684-5.369 13.265-10.761 26.465-16.157 39.803-1.468 4.48-2.73 9.094-3.965 13.66-4.473 1.215-8.974 2.524-13.365 3.965-13.338 5.393-26.684 10.64-39.95 16.01 13.618-3.672 27.284-7.37 40.83-11.017 3.56-.695 7.022-1.226 10.576-1.762-1.091 4.747-2.024 9.432-2.644 14.247-1.406 10.457-1.682 21.484 2.497 32.46 5.036 12.58 14.874 23.558 25.116 33.34 6.575 6.357 13.536 12.623 20.856 18.506-9.322-1.013-18.48-1.755-27.613-1.91-14.159-.324-28.816.395-41.272 5.729-10.716 4.805-18.422 12.761-24.821 21.15-2.992 3.875-5.768 8.026-8.372 12.19-2.132-2.893-4.144-5.804-6.169-8.812-7-12.156-14.115-24.346-21.15-36.572 5.584 13.178 11.272 26.41 16.89 39.656 2.105 4.16 4.267 8.15 6.61 12.19-2.304 4.025-4.375 8.214-6.463 12.338-5.617 13.247-11.307 26.333-16.89 39.51 7.033-12.226 14.004-24.415 21.003-36.572 2.003-2.973 4.062-5.954 6.169-8.813 2.62 4.143 5.383 8.173 8.372 12.044 6.4 8.39 14.105 16.493 24.821 21.297 12.456 5.335 26.967 6.2 41.125 5.875 9.091-.154 18.333-.904 27.613-1.91-7.27 5.85-14.175 11.896-20.71 18.213-10.241 9.782-20.079 20.76-25.115 33.34-4.179 10.976-3.902 22.003-2.497 32.46.625 4.856 1.54 9.754 2.644 14.54-3.554-.538-7.017-1.214-10.576-1.909-13.546-3.645-27.212-7.198-40.83-10.869 13.266 5.37 26.61 10.763 39.95 16.157a243.61 243.61 0 0 0 13.365 3.965 267.993 267.993 0 0 0 3.965 13.22c5.396 13.337 10.787 26.684 16.157 39.95-3.67-13.62-7.369-27.287-11.016-40.832-.686-3.518-1.23-6.917-1.762-10.428 4.782 1.076 9.543 1.872 14.394 2.497 10.458 1.406 21.485 1.683 32.46-2.497 12.58-5.036 23.557-14.728 33.34-24.97 6.316-6.534 12.363-13.439 18.212-20.709-1.005 9.28-1.756 18.522-1.91 27.613-.324 14.158.688 28.67 6.023 41.125 4.804 10.716 12.761 18.275 21.15 24.675 3.84 2.965 7.789 5.77 11.897 8.372-2.861 2.104-5.693 4.167-8.666 6.169-12.155 7-24.348 14.115-36.572 21.15 13.175-5.585 26.411-11.273 39.656-16.89a244.537 244.537 0 0 0 12.19-6.61c4.042 2.343 8.178 4.504 12.338 6.61 13.246 5.616 26.335 11.307 39.51 16.89-12.224-7.034-24.416-14.004-36.572-21.003-3.043-2.05-5.888-4.306-8.813-6.463 4.151-2.626 8.165-5.23 12.044-8.225 8.39-6.4 16.492-13.958 21.297-24.675 5.336-12.455 6.199-27.114 5.875-41.272-.155-9.049-.912-18.229-1.91-27.465 5.85 7.27 12.043 14.174 18.36 20.709 9.782 10.241 20.761 19.933 33.34 24.969 10.976 4.18 22.004 3.903 32.46 2.497a154.88 154.88 0 0 0 14.247-2.497c-.535 3.51-1.075 6.91-1.763 10.428-3.644 13.545-7.198 27.213-10.868 40.831 5.368-13.265 10.616-26.612 16.01-39.95 1.44-4.392 2.773-8.745 3.965-13.219 4.515-1.2 9.081-2.512 13.512-3.965 13.338-5.394 26.54-10.788 39.803-16.157-13.617 3.671-27.14 7.224-40.684 10.87-3.6.702-7.276 1.366-10.869 1.909 1.079-4.792 2.019-9.68 2.644-14.54 1.406-10.458 1.831-21.485-2.35-32.46-5.034-12.58-14.728-23.559-24.969-33.34-6.535-6.318-13.586-12.365-20.856-18.213 9.278 1.005 18.67 1.755 27.76 1.909 14.158.324 28.67-.686 41.124-6.022 10.717-4.804 18.275-12.908 24.675-21.297 2.966-3.84 5.623-7.79 8.225-11.897 2.133 2.891 4.437 5.951 6.463 8.96 7 12.155 13.823 24.2 20.856 36.425-5.582-13.176-11.126-26.265-16.744-39.51-2.087-4.125-4.305-8.167-6.61-12.19 2.374-4.084 4.629-8.13 6.757-12.338 5.618-13.245 11.16-26.48 16.744-39.656-7.035 12.224-14.002 24.417-21.003 36.572-2.048 3.044-4.306 5.887-6.463 8.812-2.587-4.128-5.257-8.2-8.225-12.043-6.399-8.389-13.959-16.493-24.675-21.297-12.455-5.335-27.114-6.053-41.272-5.728-9.09.153-18.334.904-27.612 1.91 7.32-5.884 14.28-12.15 20.856-18.507 10.24-9.782 19.935-20.761 24.969-33.34 4.181-10.976 3.756-22.003 2.35-32.46a155.005 155.005 0 0 0-2.497-14.247c3.552.536 7.162 1.067 10.722 1.762 13.545 3.646 27.068 7.345 40.684 11.016-13.264-5.369-26.465-10.616-39.803-16.01-4.393-1.44-8.89-2.75-13.365-3.965-1.21-4.565-2.643-9.18-4.113-13.66-5.393-13.338-10.641-26.537-16.01-39.803 3.67 13.619 7.225 27.14 10.87 40.685.704 3.6 1.219 7.275 1.762 10.869-4.748-1.09-9.432-2.025-14.247-2.644-10.456-1.406-21.484-1.83-32.46 2.35-12.579 5.035-23.56 14.875-33.34 25.115a303.946 303.946 0 0 0-18.36 20.857c1.013-9.322 1.755-18.628 1.91-27.76.325-14.158-.539-28.815-5.875-41.272-4.805-10.715-12.907-18.127-21.297-24.528-3.906-3.016-7.99-5.895-12.19-8.519 2.928-2.162 5.911-4.115 8.959-6.168 12.157-7 24.346-14.117 36.572-21.15-13.176 5.583-26.263 11.274-39.51 16.89a270.88 270.88 0 0 0-12.484 6.756c-4.023-2.303-8.066-4.669-12.19-6.756-13.246-5.617-26.333-11.306-39.51-16.89zM256 53.166c4.138 3.329 8.031 7.002 11.75 10.722 7.16 7.257 13.702 14.93 16.45 24.38 3.473 11.07 2.725 24.59 1.322 38.335-.945 8.642-2.478 17.344-4.26 26.144-6.736-20.823-25.262-39.95-25.262-39.95s-18.609 18.926-25.41 39.656c-1.768-8.752-3.173-17.401-4.112-25.997-1.403-13.744-2.153-27.117 1.322-38.187 2.747-9.45 9.288-17.27 16.45-24.528A148.557 148.557 0 0 1 256 53.166zm-127.487 58.603c10.194.07 20.162.988 28.787 5.728 10.284 5.37 19.326 15.433 28.053 26.144 5.454 6.792 10.597 13.944 15.569 21.443-19.503-10.049-46.266-10.28-46.266-10.28s.353 26.49 10.281 45.971c-7.447-4.943-14.695-10.003-21.443-15.422-10.71-8.727-20.626-17.768-25.997-28.053-4.74-8.625-5.66-18.738-5.728-28.934 0-5.218.32-10.478.88-15.716a147.726 147.726 0 0 1 15.863-.881zm255.121 0c5.217 0 10.476.317 15.716.88.566 5.24.889 10.499.881 15.717-.072 10.195-.843 20.31-5.58 28.934-5.373 10.285-15.433 19.326-26.145 28.053-6.836 5.49-14.038 10.713-21.59 15.716 10.056-19.504 10.28-46.266 10.28-46.266s-26.49.358-45.971 10.281c4.942-7.447 10.003-14.695 15.422-21.444 8.726-10.71 17.768-20.772 28.053-26.143 8.625-4.74 18.738-5.66 28.934-5.728zM256 186.675c7.872 0 15.706 3.074 21.738 9.106l38.48 38.481a30.637 30.637 0 0 1 0 43.475l-38.48 38.628a30.637 30.637 0 0 1-43.475 0l-38.629-38.628a30.638 30.638 0 0 1 0-43.475l38.629-38.48c6.031-6.033 13.866-9.107 21.737-9.107zm-149.519 38.628c6.466-.077 13.25.327 20.122 1.028 8.654.946 17.331 2.621 26.144 4.406-20.87 6.705-39.95 25.263-39.95 25.263s19.127 18.672 39.95 25.41c-8.802 1.781-17.647 3.314-26.29 4.259-13.745 1.402-27.265 2.152-38.335-1.322-9.45-2.748-16.976-9.29-24.234-16.45-3.726-3.714-7.247-7.757-10.575-11.897 3.328-4.139 6.856-8.178 10.575-11.897 7.258-7.16 14.931-13.556 24.38-16.303 5.537-1.737 11.748-2.42 18.213-2.497zm299.185 0c6.466.077 12.53.906 18.065 2.644 9.45 2.747 17.27 9.142 24.528 16.303 3.69 3.689 7.123 7.646 10.429 11.75-3.305 4.104-6.735 8.066-10.429 11.75-7.258 7.16-15.078 13.702-24.528 16.45-11.07 3.474-24.442 2.725-38.187 1.322-8.641-.944-17.344-2.331-26.144-4.113 20.776-6.769 39.803-25.41 39.803-25.41s-19.127-18.525-39.95-25.262c8.8-1.781 17.649-3.315 26.29-4.26 6.873-.701 13.657-1.251 20.123-1.174zm-58.75 85.628c7.552 5.003 14.754 10.226 21.59 15.716 10.712 8.727 20.772 17.768 26.144 28.053 4.738 8.625 5.51 18.591 5.581 28.787a146.7 146.7 0 0 1-.881 15.863c-5.24.566-10.499.89-15.716.881-10.196-.07-20.309-.842-28.934-5.581-10.285-5.372-19.326-15.287-28.053-25.997-5.454-6.793-10.596-14.092-15.569-21.59 19.49 9.972 46.119 10.28 46.119 10.28s-.226-26.908-10.281-46.412zm-181.978.294c-9.929 19.482-10.282 46.118-10.282 46.118s26.902-.329 46.413-10.428c-5.002 7.552-10.226 14.901-15.716 21.738-8.727 10.71-17.768 20.625-28.053 25.997-8.625 4.74-18.593 5.512-28.788 5.581-5.26.009-10.58-.306-15.862-.881a147.667 147.667 0 0 1-.881-15.863c.072-10.196.987-20.162 5.728-28.787 5.371-10.285 15.287-19.327 25.997-28.053 6.749-5.42 13.996-10.48 21.444-15.422zm116.471 47.881c1.804 8.882 3.307 17.57 4.26 26.29 1.404 13.746 2.005 27.264-1.469 38.335-2.748 9.45-9.29 17.269-16.45 24.528-3.718 3.72-7.61 7.1-11.75 10.428-4.105-3.304-8.067-6.733-11.75-10.428-7.16-7.258-13.849-14.931-16.597-24.381-3.474-11.07-2.578-24.59-1.175-38.334.945-8.642 2.33-17.344 4.113-26.144 6.768 20.776 25.41 39.803 25.41 39.803s18.747-19.168 25.408-40.097z"}"></path></svg>`;
});
export {
  Component as default
};