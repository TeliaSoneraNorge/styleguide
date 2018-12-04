'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var allIconsHtml = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" style="display:none">\n        <symbol viewBox="0 0 15 15" id="ico_add_white"><path d="M13.175 5.675H9.322V1.822a1.822 1.822 0 1 0-3.644 0v3.853H1.822a1.822 1.822 0 0 0 0 3.647h3.853v3.853a1.822 1.822 0 1 0 3.644 0V9.322h3.853A1.822 1.822 0 0 0 14.994 7.5a1.818 1.818 0 0 0-1.819-1.825z"/></symbol>\n        <symbol viewBox="0 0 1417 152" id="full-screen-image-mask"><path d="M1416.281-.014v151.336H-.288C935.129 111.722 1401.807 3.39 1416.282-.014z"/></symbol>\n        <symbol viewBox="0 0 9 13" id="ico_backarrow_purple"><path d="M2.3 9.5l2.9 2.9c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8L5.1 6.7 8 3.8c.8-.8.8-2 0-2.8-.8-.7-2-.7-2.7 0l-3 3L1 5.3c-.8.8-.8 2.1 0 2.8l1.3 1.4z"/></symbol>\n        <symbol viewBox="0 0 15 15" id="ico_add_purple"><path d="M13.175 5.675H9.322V1.822a1.822 1.822 0 1 0-3.644 0v3.853H1.822a1.822 1.822 0 0 0 0 3.647h3.853v3.853a1.822 1.822 0 1 0 3.644 0V9.322h3.853A1.822 1.822 0 0 0 14.994 7.5a1.818 1.818 0 0 0-1.819-1.825z"/></symbol>\n        <symbol viewBox="0 0 37.84 37.84" id="facebook_icon"><path d="M26.55 18.92h-5.23v18.92h-7.93V18.92H9.46v-6.74h3.77V7.82a10.86 10.86 0 0 1 .33-2.54 6.94 6.94 0 0 1 1.24-2.53A6.44 6.44 0 0 1 17.28.81a8.61 8.61 0 0 1 4-.81h6.31v6.31c-.81.05-1.51.05-2.16.05h-2.6a1.9 1.9 0 0 0-1.13.38c-.38.21-.54.75-.54 1.45v4h6z"/></symbol>\n        <symbol viewBox="0 0 9 13" id="ico_backarrow_white"><path d="M2.3 9.5l2.9 2.9c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8L5.1 6.7 8 3.8c.8-.8.8-2 0-2.8-.8-.7-2-.7-2.7 0l-3 3L1 5.3c-.8.8-.8 2.1 0 2.8l1.3 1.4z"/></symbol>\n        <symbol viewBox="0 0 9 13" id="ico_backarrow"><path d="M2.3 9.5l2.9 2.9c.8.8 2 .8 2.8 0 .8-.8.8-2 0-2.8L5.1 6.7 8 3.8c.8-.8.8-2 0-2.8-.8-.7-2-.7-2.7 0l-3 3L1 5.3c-.8.8-.8 2.1 0 2.8l1.3 1.4z"/></symbol>\n        <symbol viewBox="0 0 15 15" id="ico_add"><path d="M13.175 5.675H9.322V1.822a1.822 1.822 0 1 0-3.644 0v3.853H1.822a1.822 1.822 0 0 0 0 3.647h3.853v3.853a1.822 1.822 0 1 0 3.644 0V9.322h3.853A1.822 1.822 0 0 0 14.994 7.5a1.818 1.818 0 0 0-1.819-1.825z"/></symbol>\n        <symbol viewBox="0 0 17 18" id="ico_buy"><path d="M16.114 13.781H4.82l.549-1.753 9.966-2.045a.887.887 0 0 0 .693-.707l.95-5.143a.883.883 0 0 0-.87-1.045H4.665l-.17-1.54A.884.884 0 0 0 3.616.76H.884a.884.884 0 0 0 0 1.768h1.94l.952 8.65-1.005 3.224a.884.884 0 0 0 .845 1.148h1.22a1.234 1.234 0 0 0 .77 2.203 1.234 1.234 0 1 0 .77-2.203h7.37a1.234 1.234 0 0 0 .77 2.203 1.234 1.234 0 1 0 .77-2.203h.828a.884.884 0 0 0 0-1.768zM9.423 9.388l-1.115.228-.524-4.76h1.141l.498 4.532zm1.28-4.532h1.141l.435 3.947-1.115.228-.461-4.175zm3.694 3.512l-.377.078-.396-3.59h1.421l-.648 3.512zM6 4.856l.563 5.117-1.114.229-.59-5.348H6v.002z"/></symbol>\n        <symbol viewBox="0 0 21 16" id="ico_checkmark_green"><path d="M17.705.592L7.644 11.124l-4.35-4.551a1.87 1.87 0 0 0-2.729 0 2.087 2.087 0 0 0 0 2.856l5.714 5.98A1.89 1.89 0 0 0 7.644 16c.511 0 1.002-.213 1.364-.592l11.427-11.96c.487-.51.678-1.254.5-1.951A1.977 1.977 0 0 0 19.57.069a1.872 1.872 0 0 0-1.864.523z"/></symbol>\n        <symbol viewBox="0 0 14 11" id="ico_check"><path d="M5.6 5.3L4 3.47c-.7-.8-1.93-.9-2.75-.2C.43 3.97.33 5.2 1.03 6L4 9.46l.05.06c0 .03.02.04.03.05l.07.07c.36.36.83.54 1.3.55.46 0 .94-.15 1.32-.47l.04-.04c.04 0 .05 0 .06-.03l.08-.1 5.94-6.12c.75-.76.73-2-.04-2.75-.78-.74-2-.73-2.76.05L5.6 5.3z"/></symbol>\n        <symbol viewBox="0 0 512 512" id="ico_code-2"><path d="M222.012 293.484v25.212L132.4 279.849v-21.556l89.612-38.838v25.388l-62.439 24.058 62.439 24.583zm55.413-74.565l-24.95 102.713c-.83 3.38-1.554 6.056-2.178 8.018-.624 1.961-1.569 3.495-2.847 4.581-1.277 1.102-3.133 1.649-5.572 1.649-6.05 0-9.083-2.62-9.083-7.835 0-1.368.593-4.783 1.78-10.245l24.854-102.713c1.308-5.461 2.555-9.204 3.742-11.22 1.187-2.019 3.5-3.03 6.95-3.03 2.968 0 5.241.714 6.81 2.14 1.574 1.426 2.364 3.387 2.364 5.879.001 1.841-.628 5.195-1.87 10.063zm102.174 60.93l-89.611 39.022v-25.212l62.625-24.583-62.625-24.234v-25.031l89.611 38.658v21.38z"/><path d="M437.281 74.719H74.719C61.069 74.719 50 85.791 50 99.441v313.121c0 13.645 11.069 24.72 24.719 24.72h362.563c13.654 0 24.719-11.075 24.719-24.72V99.441c-.001-13.655-11.066-24.722-24.72-24.722zm-61.8 16.481c9.082 0 16.48 7.39 16.48 16.481 0 9.088-7.398 16.479-16.48 16.479-9.089 0-16.481-7.391-16.481-16.479 0-9.09 7.392-16.481 16.481-16.481zm-45.319 0c9.083 0 16.476 7.39 16.476 16.481 0 9.088-7.393 16.479-16.476 16.479-9.088 0-16.481-7.391-16.481-16.479-.001-9.09 7.393-16.481 16.481-16.481zm107.119 321.362H74.719V140.641h362.563v271.921zM420.8 124.16c-9.083 0-16.48-7.391-16.48-16.479 0-9.091 7.397-16.481 16.48-16.481s16.481 7.39 16.481 16.481c0 9.088-7.398 16.479-16.481 16.479z"/></symbol>\n        <symbol viewBox="0 0 567.01 536.01" id="ico_contacts"><path d="M440.67 157.71a157.46 157.46 0 0 1-67.95 129.56c180 39.29 190.52 138.93 193.09 198.23.54 12.67-8.79 27.8-21 31-31 8.13-93.57 19.5-261.83 19.5s-230.8-11.36-261.85-19.5c-12.28-3.22-21.6-18.34-21.06-31 2.56-59.3 13.12-158.94 193.1-198.23a157.69 157.69 0 1 1 247.5-129.56z"/></symbol>\n        <symbol viewBox="0 0 543.232 543.232" id="ico_code"><path d="M85.972 416.447c5.838 9.139 15.716 14.133 25.814 14.133a30.432 30.432 0 0 0 16.444-4.816c14.241-9.102 18.409-28.023 9.309-42.26L66.915 272.953l70.631-110.54c9.1-14.241 4.933-33.158-9.309-42.258-14.248-9.095-33.158-4.933-42.259 9.309L4.815 256.478a30.593 30.593 0 0 0 0 32.95l81.157 127.019zm329.03 9.309a30.426 30.426 0 0 0 16.444 4.816c10.092 0 19.976-4.986 25.813-14.131l81.158-127.014a30.593 30.593 0 0 0 0-32.95l-81.151-127.014c-9.095-14.248-28.03-18.416-42.259-9.309-14.241 9.1-18.409 28.023-9.309 42.258l70.631 110.54-70.637 110.545c-9.099 14.235-4.931 33.159 9.31 42.259zM165.667 492.6a30.558 30.558 0 0 0 13.213 3.018c11.401 0 22.35-6.402 27.613-17.375L391.979 91.452c7.307-15.239.881-33.519-14.357-40.82-15.245-7.307-33.52-.881-40.821 14.357l-185.492 386.79c-7.307 15.239-.881 33.52 14.358 40.821z"/></symbol>\n        <symbol viewBox="0 0 17 17" id="ico_content"><g><path d="M12.27 2.977c.2.202.465.311.75.311h2.21L11.958 0v2.227c0 .284.112.551.311.75z"/><path d="M17 8.206v1.698c0 .415-.16.828-.447 1.158a1.773 1.773 0 0 1-1.066.612l-.257.046v3.51c0 .585-.479 1.063-1.064 1.063h-1.071a3.874 3.874 0 0 1-1.567.646 4.03 4.03 0 0 1-.701.061c-.843 0-1.596-.265-2.155-.71H4.25a1.067 1.067 0 0 1-1.064-1.063V12.69A5.51 5.51 0 0 1 0 7.703a5.507 5.507 0 0 1 3.186-4.985V1.064C3.186.478 3.665 0 4.25 0h6.645v2.227a2.124 2.124 0 0 0 2.122 2.125h2.21v2.276c.06-.008.12-.015.177-.015A1.598 1.598 0 0 1 17 8.206zm-1.593-.532l-.095.008-2.615.463a.532.532 0 0 0-.44.525v3.885a2.595 2.595 0 0 0-1.018-.198c-.167 0-.34.014-.514.046-1.254.22-2.13 1.18-1.96 2.144.145.828 1.02 1.39 2.06 1.39.17 0 .342-.015.516-.047 1.081-.192 1.883-.935 1.97-1.753l.007-.221v-2.939l1.992-.352a.728.728 0 0 0 .434-.255c.122-.14.19-.31.19-.469V8.204a.521.521 0 0 0-.19-.406.517.517 0 0 0-.337-.124zM5.503 3.262a4.442 4.442 0 1 0 0 8.884 4.442 4.442 0 0 0 0-8.884z"/><path d="M8.522 7.359L4.129 4.72c-.285-.163-.515.003-.515.364v5.236c0 .362.23.525.515.365L8.524 8.05c.27-.192.27-.503-.002-.692z"/></g></symbol>\n        <symbol viewBox="0 0 303.25 332.98" id="ico_customer_service"><path d="M199.48 200.32a84.14 84.14 0 0 0 36.32-68.64v-.78a83.67 83.67 0 0 0-24.69-59.52 85.19 85.19 0 0 0-19.43-14.52 83.68 83.68 0 0 0-31.47-9.73 83.08 83.08 0 0 0-23.91 1h-1.68c-2.66.56-5.33 1.26-7.92 2a84.14 84.14 0 0 0-59.32 80.77 85.62 85.62 0 0 0 1.73 16.9 73.75 73.75 0 0 0 2 7.86 84.12 84.12 0 0 0 61.14 56.65 42.76 42.76 0 0 1 62.05 38.28v4.42a42.77 42.77 0 0 1-72 26.92 154.27 154.27 0 0 1-79.79-42.07c-3-3-5.89-6.24-8.7-9.53-29.8 24.54-32.6 55-33.79 75.93a17.31 17.31 0 0 0 11.57 16.27c16.54 4.35 50 10.45 140.23 10.45s123.29-6.1 140.21-10.45a17.32 17.32 0 0 0 11.22-16.55c-1.33-31.76-7-85-103.21-105.94"/><path d="M151.52 0A130.92 130.92 0 0 0 34.21 73 31.05 31.05 0 0 0 5.05 97a147.14 147.14 0 0 0 0 67.94 31.06 31.06 0 0 0 29.16 24 130.91 130.91 0 0 0 100.48 71.8 19.44 19.44 0 1 0 2.95-23.14 107.65 107.65 0 0 1-81.53-56.84 111.64 111.64 0 0 1-4.79-10.63l-.84-2.31c-1.05-3-2-6-2.87-9a13.67 13.67 0 0 0-.84-3.22c-.71-2.95-1.27-6-1.69-9a27.1 27.1 0 0 0-.49-3.3 99.11 99.11 0 0 1 0-24.82 7.7 7.7 0 0 1 .49-3.29c.42-3 1-6 1.69-9a14.61 14.61 0 0 1 .84-3.22c.84-3.09 1.75-6.1 2.87-9.05l.84-2.24a107.56 107.56 0 0 1 208.11 39.19 11.71 11.71 0 0 0 23.42 0 131 131 0 0 0-131-131h-.35"/></symbol>\n        <symbol viewBox="0 0 459.8 463.27" id="ico_databoost"><path d="M96.23 383.28l-91.9 79.68c-1.76 1.39-5.43-2.32-4-4.07l80.77-90.93c2.25-2.54 7.27-1.45 11.06 2.38l1.83 1.85c3.78 3.83 4.8 8.87 2.24 11.09zm-73.6-4.09l82.63-70.56c2.31-2 1.07-6.79-2.71-10.62l-1.84-1.86c-3.78-3.83-8.6-5.12-10.59-2.84l-71.5 81.82c-1.25 1.57 2.42 5.29 4.01 4.06zm166.93-37.15c-3.79-3.83-9.15-4.57-11.81-1.64L82.29 445.84c-1.68 2 2 5.73 4 4.07l106.61-94.18c3-2.62 2.29-8-1.5-11.83zm143.35-71l-.69-.18a141.48 141.48 0 0 1-41.51 96.63l-55.67-55.68a62.18 62.18 0 0 1-81.58 1.92l-37.87 32.9c-1.77 1.39-5.44-2.32-4-4.07l33.25-37.43a62.19 62.19 0 0 1 2.35-81.06L90.03 166.9a141.44 141.44 0 0 1 100-41.55c12.43-15.63 115.75-139 268.54-124 15.99 163-125.67 269.73-125.67 269.73zm33.62-134a43.76 43.76 0 1 0-43.76 43.75 43.76 43.76 0 0 0 43.76-43.76z"/></symbol>\n        <symbol viewBox="0 0 670.83 670.83" id="ico_default_doc"><path d="M495.84 627.09a43.87 43.87 0 0 1-43.75 43.75H43.75A43.87 43.87 0 0 1 0 627.09V43.75A43.88 43.88 0 0 1 43.75 0h273.64v91.69a87.5 87.5 0 0 0 87.47 87.49h91v447.91z"/><path d="M373.92 122.62a43.46 43.46 0 0 0 30.9 12.8h91L361.14 0v91.69a43.61 43.61 0 0 0 12.78 30.93z"/></symbol>\n        <symbol viewBox="0 0 21 21" id="ico_delete"><path d="M13.773 10.502l6.546 6.546c.907.907.912 2.366.005 3.273a2.318 2.318 0 0 1-3.278 0L10.5 13.775l-6.546 6.546a2.318 2.318 0 0 1-3.278 0 2.313 2.313 0 0 1 .005-3.273l6.546-6.546L.68 3.956A2.309 2.309 0 0 1 .676.682a2.314 2.314 0 0 1 3.278 0L10.5 7.23 17.046.682A2.309 2.309 0 0 1 20.32.678a2.318 2.318 0 0 1 0 3.278l-6.546 6.546z"/></symbol>\n        <symbol viewBox="0 0 17 18" id="ico_download"><g><path d="M8.098 10.269c.22.307.574.307.79 0l3.01-5.013c.185-.324-.003-.587-.416-.587h-1.98V1.011a1.012 1.012 0 0 0-2.025 0v3.66H5.499c-.413 0-.601.264-.416.588l3.015 5.01z"/><path d="M14.762 8.488H12.98a1.012 1.012 0 1 0 0 2.022h.771c.666 0 1.212.545 1.212 1.21v2.224c0 .664-.546 1.21-1.212 1.21H3.234a1.216 1.216 0 0 1-1.212-1.21V11.72c0-.668.546-1.21 1.212-1.21h.77a1.012 1.012 0 1 0 0-2.022h-1.78A2.226 2.226 0 0 0 0 10.71v4.243c0 1.224.998 2.218 2.224 2.218h12.538a2.226 2.226 0 0 0 2.225-2.221v-4.24a2.226 2.226 0 0 0-2.225-2.22z"/></g></symbol>\n        <symbol viewBox="0 0 15 10" id="ico_dropArrow_purple"><path d="M.975.67a1.408 1.408 0 0 1 2.073 0l4.496 4.761 4.51-4.777a1.408 1.408 0 0 1 2.073 0 1.62 1.62 0 0 1 0 2.196L8.581 8.725c-.573.607-1.5.607-2.074 0L.975 2.866a1.597 1.597 0 0 1-.429-1.098C.546 1.37.69.973.976.67z"/></symbol>\n        <symbol viewBox="0 0 16 18" id="ico_edit_document"><g><path d="M9.976 3.278c.221.22.514.34.823.34h2.425L9.634.017v2.44c0 .308.123.601.342.822z"/><path d="M12.838 15.6l-.24.237a2.697 2.697 0 0 1-.733.513.586.586 0 0 1-.392.154h-.002c-.094.03-.187.059-.285.078l-1.642.41-.042.01-.043.008a1.754 1.754 0 0 1-.31.027c-.468 0-.902-.195-1.2-.533H1.76a.583.583 0 1 1 0-1.165h5.8c.004-.07.004-.141.014-.213l.008-.042.01-.043.403-1.602H1.761a.583.583 0 1 1 0-1.165h6.752c.032-.04.059-.085.093-.123l.014-.023.133-.134 1.62-1.617H1.761a.583.583 0 1 1 0-1.166h9.715c.019 0 .037.003.059.006l.858-.857c.245-.245.527-.434.834-.567V4.784h-2.425c-.645 0-1.226-.26-1.647-.681a2.32 2.32 0 0 1-.682-1.647V.016H1.178A1.17 1.17 0 0 0 .01 1.179v15.52a1.17 1.17 0 0 0 1.167 1.165h10.879c.642 0 1.164-.524 1.164-1.165v-1.485l-.383.386zM1.76 6.152h9.715a.583.583 0 1 1 0 1.165H1.761a.583.583 0 1 1 0-1.165z"/><path d="M15.172 11.622l.24-.242a1.55 1.55 0 0 0 0-2.195 1.555 1.555 0 0 0-2.2 0l-.241.24 2.2 2.197zm-.824.825l-2.198-2.198-2.574 2.57v.003a1.528 1.528 0 0 0-.429.83l-.42 1.676c-.057.32.133.548.428.548a.524.524 0 0 0 .11-.01l1.678-.42a1.54 1.54 0 0 0 .831-.429l.24-.24 2.334-2.33z"/></g></symbol>\n        <symbol viewBox="0 0 15 10" id="ico_dropArrow"><path d="M.975.67a1.408 1.408 0 0 1 2.073 0l4.496 4.761 4.51-4.777a1.408 1.408 0 0 1 2.073 0 1.62 1.62 0 0 1 0 2.196L8.581 8.725c-.573.607-1.5.607-2.074 0L.975 2.866a1.597 1.597 0 0 1-.429-1.098C.546 1.37.69.973.976.67z"/></symbol>\n        <symbol viewBox="8 0 25 35" id="ico_edit"><path d="M30.833 20l.745-.667c1.225-1.083 1.704-2.666 1.258-4.15-.446-1.483-1.75-2.642-3.42-3.038-1.67-.396-3.452.031-4.67 1.12l-.746.662L30.833 20zM28 23.243L21.755 17l-7.312 7.31v.005a4.36 4.36 0 0 0-1.22 2.36l-1.196 4.769c-.157.908.379 1.556 1.218 1.556.104-.001.209-.01.312-.028l4.77-1.194a4.393 4.393 0 0 0 2.367-1.22l.682-.682L28 23.243z"/></symbol>\n        <symbol viewBox="0 0 616 557.15" id="ico_end_user"><path d="M308 72.92a126.11 126.11 0 0 1 71.85 229.81c144 31.44 161.18 93.64 163.23 141.09.43 10.14-7 22.25-16.83 24.8-24.84 6.49-83.63 15.62-218.25 15.62s-193.38-9.12-218.22-15.66c-9.81-2.56-17.28-14.67-16.85-24.8 2.05-47.45 19.24-109.66 163.22-141.09A126.1 126.1 0 0 1 308 72.92M308 0C198.21 0 108.88 89.31 108.88 199.09a198.65 198.65 0 0 0 11.24 65.83C43 302.63 3.55 360.71.09 440.68c-1.89 45.07 28.74 87.4 71.26 98.51 45.62 11.92 125.24 18 236.64 18s191.06-6 236.69-18c42.51-11.12 73.14-53.44 71.24-98.43-3.45-80.03-42.92-138.18-120.06-175.84a198.45 198.45 0 0 0 11.24-65.83C507.1 89.31 417.78 0 308 0z"/></symbol>\n        <symbol viewBox="0 0 14 14" id="ico_favourites"><path d="M10.752 13.084l-3.773-2.4L3.217 13.1c-.473.305-.744.11-.602-.436l1.123-4.317L.27 5.527c-.436-.354-.333-.67.23-.703l4.465-.27 1.62-4.16c.202-.524.536-.526.744-.002l1.635 4.152 4.469.25c.562.03.665.347.23.703l-3.455 2.836 1.143 4.313c.145.545-.123.74-.6.438z"/></symbol>\n        <symbol viewBox="0 0 51 45" id="ico_heart"><path d="M35.408.78c-5.137 0-8.379 4.564-10.26 6.824C23.266 5.344 20.024.78 14.885.78 6.14.78.264 8.882.264 16.45c0 11.015 21.16 25.779 23.573 27.426a2.32 2.32 0 0 0 2.621 0c2.413-1.647 23.572-16.41 23.572-27.427C50.03 8.882 44.155.78 35.408.78"/></symbol>\n        <symbol viewBox="0 0 591.91 591.7" id="ico_home"><path d="M549.42 246.77l-234-234a43.85 43.85 0 0 0-61.87 0l-223 223-11 11c-34 34-22.5 61.87 25.62 61.87h8.22V591.7h145.84v-181a21.88 21.88 0 0 1 21.88-21.85h126.75a21.88 21.88 0 0 1 21.88 21.88v181h145.82v-283.1h8.22c48.12 0 59.7-27.84 25.64-61.86z"/></symbol>\n        <symbol viewBox="0 0 670.83 495.83" id="ico_image_placeholder_white"><path d="M636.55 0H53.21A43.88 43.88 0 0 0 9.46 43.75v408.34a43.88 43.88 0 0 0 43.75 43.75h583.34a43.87 43.87 0 0 0 43.75-43.75V43.75A43.88 43.88 0 0 0 636.55 0zm0 280.93l-60-60-24.97-25.01a22 22 0 0 0-30.93 0l-78.31 78.31-132.1 132.14a21.87 21.87 0 0 1-30.93 0l-82.89-82.89a22 22 0 0 0-30.93 0L53.21 435.75v-61.83l81.33-81.33a65.74 65.74 0 0 1 92.8 0l67.43 67.42 106.85-106.88a117.61 117.61 0 1 1 191.18-91.71 121 121 0 0 1-.77 13.12l44.52 44.53z"/></symbol>\n        <symbol viewBox="0 0 670.83 495.83" id="ico_image_placeholder"><path d="M627.09 0H43.75A43.88 43.88 0 0 0 0 43.75v408.34a43.88 43.88 0 0 0 43.75 43.75h583.34a43.87 43.87 0 0 0 43.75-43.75V43.75A43.88 43.88 0 0 0 627.09 0zm0 280.93l-60-60-24.97-25.01a22 22 0 0 0-30.93 0l-78.31 78.31-132.1 132.14a21.87 21.87 0 0 1-30.93 0l-82.89-82.89a22 22 0 0 0-30.93 0L43.75 435.75v-61.83l81.33-81.33a65.74 65.74 0 0 1 92.8 0l67.43 67.42 106.85-106.88a117.61 117.61 0 1 1 191.18-91.71 121 121 0 0 1-.77 13.12l44.52 44.53z"/></symbol>\n        <symbol viewBox="0 0 17 17" id="ico_info"><path d="M14.49 14.488a8.488 8.488 0 0 1-12.005 0c-3.313-3.316-3.313-8.69 0-12.003a8.493 8.493 0 0 1 12.006 0c3.313 3.316 3.313 8.69 0 12.003zm-4.72-1.145v-5.81a1.282 1.282 0 1 0-2.567 0v5.81a1.282 1.282 0 1 0 2.567 0zM8.486 4.95a1.282 1.282 0 1 0 .002-2.565 1.282 1.282 0 0 0-.002 2.565z"/></symbol>\n        <symbol viewBox="0 0 64 64" id="ico_klikk-og-hent"><path d="M41.25 15.45H23.363v-4.512c0-5.213 4.012-9.438 8.95-9.438s8.938 4.237 8.938 9.438v4.512zM26.1 12.7h12.4v-1.762c0-3.688-2.775-6.688-6.2-6.688s-6.2 3-6.2 6.688V12.7zm11.1 24.7l-.6-5.475h-1.575l.638 5.788zm-3.95.812l-.688-6.288h-1.587l.725 6.6zm6.888-1.424l.9-4.863h-1.962l.538 4.975zm-10.85 2.225l-.775-7.087h-1.587l.825 7.413z"/><path d="M50.725 10.75h-36.85a3.26 3.26 0 0 0-3.25 3.25v45.513a3.26 3.26 0 0 0 3.25 3.25h36.85a3.259 3.259 0 0 0 3.25-3.25V14a3.26 3.26 0 0 0-3.25-3.25zm-8.2 36h-1.15a1.707 1.707 0 0 1-1.062 3.049 1.715 1.715 0 0 1-1.712-1.712c0-.538.263-1.025.65-1.337H29.039a1.706 1.706 0 0 1-1.062 3.049c-.95 0-1.712-.775-1.712-1.712 0-.538.262-1.025.65-1.337h-1.688a1.23 1.23 0 0 1-1.176-1.587l1.4-4.462-1.325-11.988h-2.688c-.675 0-1.225-.55-1.225-1.225s.55-1.225 1.225-1.225h3.788c.625 0 1.15.462 1.212 1.087l.238 2.137h15.85c.362 0 .712.163.938.438.237.275.325.65.263 1.012l-1.313 7.125a1.228 1.228 0 0 1-.962.975l-13.813 2.837-.762 2.425h15.65c.675 0 1.225.55 1.225 1.225s-.55 1.225-1.225 1.225z"/></symbol>\n        <symbol viewBox="0 0 9 13" id="ico_linkarrow_purple"><path d="M7.005 3.95L4.091 1.037a1.949 1.949 0 1 0-2.758 2.758l2.915 2.914-2.915 2.915a1.949 1.949 0 1 0 2.758 2.757l2.914-2.914L8.351 8.12c.78-.78.772-2.05 0-2.822L7.005 3.951z"/></symbol>\n        <symbol viewBox="0 0 9 13" id="ico_linkarrow_white"><path d="M7.005 3.95L4.091 1.037a1.949 1.949 0 1 0-2.758 2.758l2.915 2.914-2.915 2.915a1.949 1.949 0 1 0 2.758 2.757l2.914-2.914L8.351 8.12c.78-.78.772-2.05 0-2.822L7.005 3.951z"/></symbol>\n        <symbol viewBox="0 0 13 13" id="ico_linkarrow"><path d="M7.005 3.95L4.091 1.037a1.949 1.949 0 1 0-2.758 2.758l2.915 2.914-2.915 2.915a1.949 1.949 0 1 0 2.758 2.757l2.914-2.914L8.351 8.12c.78-.78.772-2.05 0-2.822L7.005 3.951z"/></symbol>\n        <symbol viewBox="0 0 32 32" id="ico_map"><path d="M6 12.427c0-5.523 4.477-10 10-10s10 4.477 10 10c0 7.383-10 17.147-10 17.147S6 19.811 6 12.427zm10-5c-2.762 0-5 2.238-5 5s2.238 5 5 5 5-2.238 5-5-2.238-5-5-5z"/></symbol>\n        <symbol viewBox="0 0 17 16" id="ico_menu_logged_in"><path d="M3.85 9.326H1.167c-1.554 0-1.554 2.331 0 2.331H3.85c1.6.047 1.6-2.378 0-2.331zm2.99-4.664H1.167c-1.556 0-1.556 2.334 0 2.334H6.84c1.556 0 1.556-2.334 0-2.334zM1.167 2.33h10.932c1.62.067 1.62-2.397 0-2.33H1.167c-1.553 0-1.553 2.33 0 2.33z"/><path d="M14.491 7.681a2.677 2.677 0 0 1-1.155 2.203c3.06.668 3.24 2.361 3.283 3.37.009.215-.15.472-.357.526-.527.139-1.59.332-4.451.332s-3.924-.193-4.452-.332c-.209-.054-.367-.311-.358-.527.044-1.008.223-2.701 3.283-3.37a2.68 2.68 0 1 1 4.207-2.202z"/></symbol>\n        <symbol viewBox="0 0 14 12" id="ico_menu"><path d="M12.821 9.326H1.167a1.165 1.165 0 1 0 0 2.331h11.654a1.166 1.166 0 1 0 0-2.331zm0-4.664H1.167a1.167 1.167 0 0 0 0 2.334h11.654a1.167 1.167 0 0 0 0-2.334zM1.167 2.33h11.654a1.166 1.166 0 1 0 0-2.33H1.167a1.165 1.165 0 1 0 0 2.33z"/></symbol>\n        <symbol viewBox="0 0 16 4" id="ico_minus_purple"><path d="M2.265 0a1.822 1.822 0 0 0 0 3.647h11.35a1.822 1.822 0 0 0 1.822-1.822A1.818 1.818 0 0 0 13.617 0H2.266z"/></symbol>\n        <symbol viewBox="0 0 16 4" id="ico_minus"><path d="M2.265 0a1.822 1.822 0 0 0 0 3.647h11.35a1.822 1.822 0 0 0 1.822-1.822A1.818 1.818 0 0 0 13.617 0H2.266z"/></symbol>\n        <symbol viewBox="0 0 555.73 635.32" id="ico_money"><path d="M181.35 140.16c100.16 0 181.35-18.24 181.35-40.73v-58.7C362.7 18.23 281.51 0 181.35 0S0 18.24 0 40.73v58.7c0 22.5 81.19 40.73 181.35 40.73zm0 158.23C81.19 298.39 0 280.15 0 257.66v58.7c0 19.92 63.7 36.5 147.83 40a234.19 234.19 0 0 1 34.36-58zM362.7 152.38c0 22.5-81.19 40.73-181.35 40.73S0 174.88 0 152.38v58.7c0 22.5 81.19 40.73 181.35 40.73 18.63 0 36.59-.63 53.51-1.8a233.67 233.67 0 0 1 127.84-39.7zM133.39 407.31C56.52 402.59 0 386.79 0 368v58.7c0 18.6 55.37 34.3 131 39.16-.6-7.22-.9-14.51-.84-21.84a238.57 238.57 0 0 1 3.23-36.71zM0 474.57v58.7c0 21.48 74 39.06 167.9 40.61a231.91 231.91 0 0 1-27.7-59.64C59.85 510.05 0 493.89 0 474.57zm366.85-218.4h-1c-104 0-188.78 84-189.68 188.24-.91 105 83.56 190.32 189.06 190.91h1.08c104.08 0 188.94-84.18 189.42-188.19.45-105.47-83.52-190.4-188.88-190.96zm7.44 257.38q-4.13 6.3-9.11 6.29a6.46 6.46 0 0 1-3.37-1 26.41 26.41 0 0 1-4.44-3.81l-41.26-41.37v23.44a28.9 28.9 0 0 1-2.26 11.25 23.32 23.32 0 0 1-5.64 8.46q-3.37 3-6.61 3-5 0-10.86-8.24c-2.31-3.76-3.48-6.59-3.48-8.47V378.78q0-4.77 6.62-9.11a25.46 25.46 0 0 1 14.21-4.35q8 0 8 7.38v76l34.76-33.24a25.37 25.37 0 0 1 8-4.77 25.73 25.73 0 0 1 9.33-2q8 0 8 7.38a29.47 29.47 0 0 1-2.28 11.07 23.07 23.07 0 0 1-6 8.89l-26.69 24.74 35.24 33.64a7.06 7.06 0 0 1 2 5.21 24.79 24.79 0 0 1-4.13 13.89zm83.76-82.89q-4.34 6.73-9.55 6.73a21.73 21.73 0 0 1-3-.22 25 25 0 0 0-3.5-.17q-10.63 0-17.36 5.64v54.48a28.9 28.9 0 0 1-2.28 11.29 23.32 23.32 0 0 1-5.64 8.46c-2.24 2-4.44 3-6.62 3q-5 0-10.85-8.24-3.48-5.64-3.48-8.47v-80.97q0-4.77 6.62-9.12a25.45 25.45 0 0 1 14.21-4.33q8 0 8 7.38v5.2a33.08 33.08 0 0 1 11.51-9.88 29.58 29.58 0 0 1 14.1-4q12.15 0 12.16 8.69a26.29 26.29 0 0 1-4.32 14.53z"/></symbol>\n        <symbol viewBox="0 0 13 18" id="ico_mobile"><path d="M12.448 1.09v15.817a1.092 1.092 0 0 1-1.09 1.09H1.09A1.09 1.09 0 0 1 0 16.91V1.09A1.094 1.094 0 0 1 1.09 0h10.27a1.09 1.09 0 0 1 1.088 1.09zm-1.851 12.636V2.024a.15.15 0 0 0-.15-.15H1.999a.149.149 0 0 0-.147.15v11.702c0 .083.067.147.15.147h8.45a.143.143 0 0 0 .146-.147zM6.21 15a.939.939 0 1 0 0 1.878.939.939 0 0 0 0-1.878z"/></symbol>\n        <symbol viewBox="0 0 16 17" id="ico_music"><path d="M14.365 11.04a3.395 3.395 0 0 0-1.89-.19c-1.546.273-2.629 1.458-2.419 2.648.21 1.187 1.631 1.93 3.178 1.658 1.334-.237 2.324-1.151 2.435-2.165l.009-.272V3.508l-.003-.549V.657a.657.657 0 0 0-.77-.645L4.874 1.781a.656.656 0 0 0-.543.645V12.81a3.395 3.395 0 0 0-1.888-.188c-1.545.27-2.627 1.454-2.417 2.644.21 1.187 1.631 1.93 3.178 1.658 1.334-.237 2.324-1.151 2.432-2.165 0 0 .012-.246.009-.273v-9.21l8.716-1.538.003 7.3z"/></symbol>\n        <symbol viewBox="0 0 18 15" id="ico_premisesdatacenter"><path d="M0 14.984V1.8A1.8 1.8 0 0 1 1.8 0h14.384a1.8 1.8 0 0 1 1.8 1.8v13.184h-3.448v-2.696a.902.902 0 0 0-.9-.9h-1.8a.902.902 0 0 0-.9.9v2.696H0zm7.229-8.13a.902.902 0 0 0-.637-.262H3.896a.902.902 0 0 0-.9.9v1.2a.902.902 0 0 0 .9.9h2.696a.902.902 0 0 0 .9-.9v-1.2a.91.91 0 0 0-.263-.637zm7.492 0a.902.902 0 0 0-.637-.262h-2.696a.902.902 0 0 0-.9.9v1.2a.902.902 0 0 0 .9.9h2.696a.902.902 0 0 0 .9-.9v-1.2a.927.927 0 0 0-.263-.637zm-7.492-4.79a.902.902 0 0 0-.637-.263H3.896a.902.902 0 0 0-.9.9v1.2a.902.902 0 0 0 .9.9h2.696a.902.902 0 0 0 .9-.9V2.696a.893.893 0 0 0-.263-.633zm7.492 0a.902.902 0 0 0-.637-.263h-2.696a.902.902 0 0 0-.9.9v1.2a.902.902 0 0 0 .9.9h2.696a.902.902 0 0 0 .9-.9V2.696a.91.91 0 0 0-.263-.633z"/></symbol>\n        <symbol viewBox="0 0 16 14" id="ico_quote"><path d="M15.641 5.766c0 4.035-2.63 6.75-6.339 7.484l-.698-1.502c1.713-.647 2.816-2.74 2.816-4.304H9.784c-.566 0-1.026-.46-1.026-1.027V1.565c0-.568.46-1.027 1.026-1.027h4.833c.565 0 1.024.459 1.024 1.027v4.2zm-8.603 0c0 4.035-2.631 6.75-6.34 7.484L0 11.748c1.714-.647 2.817-2.74 2.817-4.304H1.18c-.566 0-1.025-.46-1.025-1.027V1.565C.155.997.615.538 1.18.538h4.834c.564 0 1.024.459 1.024 1.027v4.2z"/></symbol>\n        <symbol viewBox="0 0 21 30" id="ico_refill"><path d="M20.727 1.813v26.334a1.82 1.82 0 0 1-1.814 1.813h-17.1A1.82 1.82 0 0 1 0 28.147V1.813A1.82 1.82 0 0 1 1.813 0h17.1c1 .004 1.81.813 1.814 1.813m-3.087 21.04V3.367a.247.247 0 0 0-.247-.247H3.333a.247.247 0 0 0-.24.247v19.486c0 .137.11.247.247.247H17.4c.136 0 .247-.11.247-.247m-7.334 2.12a1.56 1.56 0 1 0 0 3.12 1.56 1.56 0 0 0 0-3.12"/><path d="M14.573 11.72h-2.86V8.867a1.353 1.353 0 1 0-2.706 0v2.86H6.153a1.353 1.353 0 1 0 0 2.706h2.86v2.86a1.353 1.353 0 1 0 2.707 0v-2.866h2.86a1.353 1.353 0 0 0 0-2.707"/></symbol>\n        <symbol viewBox="0 0 28 25" id="ico_router_refill"><g><path d="M11.699 5.2H8.647V2.153a1.444 1.444 0 0 0-2.889 0v3.053H2.713a1.444 1.444 0 0 0 0 2.888h3.052v3.052a1.444 1.444 0 1 0 2.889 0V8.088h3.052a1.444 1.444 0 0 0 0-2.889m3.18-.695a.977.977 0 0 1-.08-1.38l.001-.001a9.11 9.11 0 0 1 12.861-.766.977.977 0 1 1-1.297 1.462 7.156 7.156 0 0 0-10.101.6l-.004.005a.977.977 0 0 1-1.38.08"/><path d="M17.81 7.097a.977.977 0 0 1-.08-1.379 5.204 5.204 0 0 1 7.345-.438.977.977 0 0 1-1.297 1.462 3.25 3.25 0 0 0-4.586.272l-.003.003a.977.977 0 0 1-1.379.08m3.461 14.193a1.253 1.253 0 1 1 0-2.506 1.253 1.253 0 0 1 0 2.505zm-5.01 0a1.253 1.253 0 1 1 0-2.506 1.253 1.253 0 0 1 0 2.505zm-5.01-.152H4.987a1.25 1.25 0 1 1 0-2.499h6.262a1.25 1.25 0 1 1 0 2.499zm11.336-6.293h-.097V9.061a1.25 1.25 0 1 0-2.499 0v5.784H4.901C2.134 14.845 0 17.056 0 19.823v.039c0 2.767 2.134 5.07 4.901 5.07h17.686c2.767 0 4.901-2.303 4.901-5.07v-.039c0-2.767-2.134-4.978-4.901-4.978z"/></g></symbol>\n        <symbol viewBox="0 0 17 17" id="ico_search"><path d="M16.536 16.51a1.541 1.541 0 0 1-2.18 0l-2.369-2.368a7.692 7.692 0 0 1-4.253 1.276 7.698 7.698 0 0 1-5.453-2.257 7.713 7.713 0 0 1 10.91-10.904 7.715 7.715 0 0 1 .977 9.704l2.368 2.368a1.541 1.541 0 0 1 0 2.181zm-8.8-14.583a5.749 5.749 0 0 0-4.088 1.694 5.791 5.791 0 0 0 0 8.176 5.749 5.749 0 0 0 4.089 1.694 5.749 5.749 0 0 0 4.09-1.694 5.786 5.786 0 0 0 0-8.176 5.753 5.753 0 0 0-4.09-1.694z"/></symbol>\n        <symbol viewBox="0 0 12 15" id="ico_share"><path d="M8.144 10.42L4.436 8.28a2.25 2.25 0 0 0-.02-.963L8.412 5.01a2.239 2.239 0 1 0-.922-1.476L3.37 5.913a2.239 2.239 0 1 0 .09 3.811l4.004 2.312a2.239 2.239 0 1 0 .681-1.616z"/></symbol>\n        <symbol viewBox="0 0 700 700" id="ico_subscription"><path d="M463.21 14.61H145.85a43.87 43.87 0 0 0-43.74 43.75v583.28a43.87 43.87 0 0 0 43.74 43.75h408.3a43.87 43.87 0 0 0 43.74-43.75V150zm-244.45 576a21.87 21.87 0 1 1-43.74 0V558.5a21.87 21.87 0 0 1 43.74 0zm0-108.65A21.87 21.87 0 0 1 175 482v-32.1a21.87 21.87 0 0 1 43.74 0zm0-108.65a21.87 21.87 0 0 1-43.74 0V341.2a21.87 21.87 0 0 1 43.74 0zm93 239.18h-38.32a21.88 21.88 0 0 1 0-43.75h38.28a21.88 21.88 0 1 1 0 43.75zm0-249.41h-38.32a21.87 21.87 0 0 1 0-43.74h38.28a21.87 21.87 0 1 1 0 43.74zm114.8 249.4h-38.28a21.88 21.88 0 1 1 0-43.75h38.28a21.88 21.88 0 0 1 0 43.75zm0-249.41h-38.28a21.87 21.87 0 1 1 0-43.74h38.28a21.87 21.87 0 0 1 0 43.74zM525 590.6a21.87 21.87 0 1 1-43.74 0v-32.1a21.87 21.87 0 0 1 43.74 0zm0-108.6a21.87 21.87 0 0 1-43.74 0v-32.1a21.87 21.87 0 0 1 43.74 0zm0-108.65a21.87 21.87 0 0 1-43.74 0V341.2a21.87 21.87 0 0 1 43.74 0z"/></symbol>\n        <symbol viewBox="0 0 670.83 670.83" id="ico_statistics"><path d="M597.92 36.42A36.45 36.45 0 0 0 561.42 0h-72.88a36.46 36.46 0 0 0-36.46 36.42v546.92h145.84zM408.33 255.21a36.45 36.45 0 0 0-36.46-36.46h-72.91a36.45 36.45 0 0 0-36.46 36.46v328.13h145.83zM218.75 473.96a36.46 36.46 0 0 0-36.46-36.46h-72.87a36.46 36.46 0 0 0-36.5 36.46v109.38h145.83zm428.21 153.13H21.88a21.875 21.875 0 1 0 0 43.75h625.08a21.88 21.88 0 1 0 0-43.75z"/></symbol>\n        <symbol viewBox="10 0 20 35" id="ico_trash"><path d="M16.252 15H29.75c.69 0 1.25-.448 1.25-1s-.56-1-1.25-1H25.5c0-.552-.56-1-1.25-1h-2.5c-.69 0-1.25.448-1.25 1h-4.25c-.69 0-1.25.448-1.25 1s.56 1 1.25 1h.002z"/><path d="M29.878 15.023a1.202 1.202 0 0 0-.916.289c-.257.22-.42.54-.455.888l-.105 1.08H17.6l-.105-1.08a1.317 1.317 0 0 0-.73-1.083 1.196 1.196 0 0 0-1.252.137 1.35 1.35 0 0 0-.505 1.216l1.5 15.347c.066.672.603 1.183 1.244 1.183H28.25c.641 0 1.178-.51 1.243-1.183l1.5-15.347a1.37 1.37 0 0 0-.273-.967 1.232 1.232 0 0 0-.842-.48z"/></symbol>\n        <symbol viewBox="0 0 256 256" id="ico_truck"><style>.st0{fill-rule:evenodd;clip-rule:evenodd}</style><path d="M59.008 187.137h-9.856c-5.44 0-9.856-4.416-9.856-9.856v-19.712h118.273V68.863h45.998c11.009 0 15.77 5.677 19.081 10.911 5.855 9.265 15.139 23.97 20.787 33.294a19.771 19.771 0 0 1 2.838 10.201v44.155c0 11.049-7.175 19.712-19.712 19.712h-9.856c0 16.322-13.246 29.568-29.568 29.568s-29.568-13.246-29.568-29.568h-39.424c0 16.322-13.247 29.568-29.568 29.568-16.323.001-29.569-13.246-29.569-29.567zm29.568-11.828c6.525 0 11.827 5.303 11.827 11.827 0 6.525-5.303 11.827-11.827 11.827-6.525 0-11.827-5.303-11.827-11.827-.001-6.524 5.302-11.827 11.827-11.827zm98.56 0c6.525 0 11.827 5.303 11.827 11.827 0 6.525-5.303 11.827-11.827 11.827-6.525 0-11.827-5.303-11.827-11.827s5.302-11.827 11.827-11.827zm-98.56-86.733H19.583c-5.443 0-9.856-4.413-9.856-9.856s4.413-9.856 9.856-9.856h68.992v-9.856h-49.28v-9.856c0-5.443 4.413-9.856 9.856-9.856h88.705c5.443 0 9.856 4.413 9.856 9.856v98.561H39.295v-29.568h-9.856c-5.443 0-9.856-4.413-9.856-9.856s4.413-9.856 9.856-9.856h59.137v-9.857zm88.704 0v29.568h46.471s-9.255-16.184-14.064-24.601a9.842 9.842 0 0 0-8.555-4.967H177.28z" class="st0"/></symbol>\n        <symbol viewBox="0 0 16 13" id="ico_wireless"><g><path d="M7.987 9.585c-.833 0-1.507.694-1.507 1.553 0 .858.674 1.552 1.507 1.552.834 0 1.508-.694 1.508-1.552 0-.855-.674-1.553-1.508-1.553zm0-4.805A6.069 6.069 0 0 0 3.62 6.642a1.224 1.224 0 0 0 0 1.69 1.14 1.14 0 0 0 1.641 0 3.787 3.787 0 0 1 2.73-1.162c.989 0 1.968.386 2.726 1.163a1.137 1.137 0 0 0 1.64 0 1.22 1.22 0 0 0 0-1.69 6.068 6.068 0 0 0-4.37-1.865z"/><path d="M15.634 3.263C13.525 1.09 10.751 0 7.99 0 5.223 0 2.45 1.09.34 3.263a1.224 1.224 0 0 0 0 1.69 1.14 1.14 0 0 0 1.642 0A8.353 8.353 0 0 1 7.99 2.388c2.176 0 4.342.852 6.006 2.565a1.137 1.137 0 0 0 1.641 0 1.227 1.227 0 0 0-.003-1.69z"/></g></symbol>\n        <symbol viewBox="0 0 652.25 534.69" id="silent_icon"><path d="M336.69 9.51L192 152.36a74.73 74.73 0 0 0-6.38 6.51 97.76 97.76 0 0 0-11.72-.51h-77A96.69 96.69 0 0 0 0 255.21v24.29a96.69 96.69 0 0 0 96.91 96.86h77a98.22 98.22 0 0 0 12.43-.63 36.64 36.64 0 0 0 4.73 5.82l144.62 142.67C358.5 546.7 397 530.58 397 498.55V36.17c0-31.37-37.14-47.81-60.31-26.66zm250.09 257.85l57.61-57.61a26.87 26.87 0 1 0-38-38l-57.6 57.61-57.61-57.61a26.87 26.87 0 1 0-38 38l57.63 57.61-57.61 57.61a26.87 26.87 0 0 0 38 38l57.59-57.61 57.61 57.61a26.87 26.87 0 1 0 38-38z"/></symbol>\n        <symbol viewBox="0 0 48.04 39.04" id="twitter_icon"><path d="M48 4.62a19.69 19.69 0 0 1-5.66 1.55A9.89 9.89 0 0 0 46.71.72a19.72 19.72 0 0 1-6.26 2.39 9.86 9.86 0 0 0-17 6.74 9.94 9.94 0 0 0 .25 2.25A28 28 0 0 1 3.34 1.8 9.87 9.87 0 0 0 6.39 15a9.82 9.82 0 0 1-4.46-1.23v.12a9.86 9.86 0 0 0 7.91 9.66 9.87 9.87 0 0 1-4.45.17 9.87 9.87 0 0 0 9.21 6.85 19.78 19.78 0 0 1-12.25 4.18A20.05 20.05 0 0 1 0 34.61 27.9 27.9 0 0 0 15.11 39c18.13 0 28-15 28-28V9.73A20 20 0 0 0 48 4.62"/></symbol>\n        <symbol viewBox="0 0 38.08 38.08" id="linkedin_icon"><path d="M35.26 0H2.81A2.78 2.78 0 0 0 0 2.74v32.59a2.78 2.78 0 0 0 2.81 2.75h32.45a2.79 2.79 0 0 0 2.82-2.75V2.74A2.79 2.79 0 0 0 35.26 0m-24 32.44H5.64V14.27h5.65zM8.47 11.79a3.27 3.27 0 1 1 3.27-3.28 3.27 3.27 0 0 1-3.27 3.28m24 20.65H26.8v-8.83c0-2.11 0-4.82-2.93-4.82s-3.39 2.3-3.39 4.67v9h-5.64V14.27h5.41v2.48h.08a5.93 5.93 0 0 1 5.34-2.93c5.71 0 6.77 3.76 6.77 8.66z"/></symbol>\n        <symbol viewBox="0 0 66 72" id="step-by-step-pebble"><path d="M65.259 17.572c-.033-.575-.058-1.15-.105-1.726a23.573 23.573 0 0 0-.265-2.062l-.016-.008a18.79 18.79 0 0 0-.464-2.118l-.021-.008a16.77 16.77 0 0 0-.896-2.43l-.001-.018c-.29-.63-.625-1.237-1.001-1.819l-.023-.031-.15-.236h-.007a13.303 13.303 0 0 0-1.199-1.54l-.008.001c-.368-.41-.762-.796-1.18-1.155h-.01a13.278 13.278 0 0 0-1.679-1.254l-.012.001c-.467-.29-.948-.553-1.443-.79l-.02-.023a17.511 17.511 0 0 0-3.084-1.12l-.064-.033a22.443 22.443 0 0 0-3.46-.619l-.015.012a29.229 29.229 0 0 0-4.64-.09c-.263.013-.53.026-.792.047a52.03 52.03 0 0 0-5.67.793c-1.289.251-2.577.55-3.864.894l-.04.004c-.179.048-.36.1-.538.149a62.577 62.577 0 0 0-6.214 2.081l-.03.013c-6.142 2.42-11.927 5.803-16.633 9.825-.09.076-.176.154-.265.23l-.16.137c-.135.119-.27.238-.404.359l-.037.033a41.13 41.13 0 0 0-3.642 3.7l-.027.037c-.95 1.1-1.829 2.26-2.63 3.474-.11.16-.208.32-.31.48l-.05.077v.009c-.506.81-.971 1.645-1.392 2.504a23.602 23.602 0 0 0-1.157 2.79h-.008c-.329.954-.59 1.931-.778 2.923l.004.05c-.18.976-.287 1.966-.316 2.96v.015a17.436 17.436 0 0 0 .043 2.023c.089.995.257 1.98.503 2.949.126.516.277 1.042.445 1.574.365 1.18.798 2.337 1.297 3.466a44.224 44.224 0 0 0 1.828 3.602l.013.013c.245.429.499.86.76 1.292l.046.074.174.285c.384.615.785 1.23 1.203 1.843.051.078.105.154.159.235l.075.111c.153.222.309.445.465.666l.001.007a60.483 60.483 0 0 0 1.546 2.067l.029.038c.09.116.18.233.273.349l.008.006a63.49 63.49 0 0 0 2.696 3.192l.018.012c.437.484.878.963 1.328 1.432l.018.01c.424.442.854.876 1.291 1.304l.362.342.052.052c.374.36.75.716 1.132 1.062l.037.023c.819.746 1.651 1.46 2.497 2.142l.015.008c.184.148.37.295.555.441l.176.135a45.645 45.645 0 0 0 2.172 1.586v.006c.485.332.971.648 1.457.95.98.63 1.99 1.21 3.028 1.737v.01a27.1 27.1 0 0 0 3.179 1.343h.012a20.3 20.3 0 0 0 2.476.69.03.03 0 0 1 0 .01c1.368.304 2.772.408 4.168.31 5.44-.443 11.687-4.668 17.015-11.58l.05-.056a53.28 53.28 0 0 0 4.396-6.768v-.007c.44-.799.866-1.618 1.279-2.458a61.654 61.654 0 0 0 2.51-5.91l-.011.01.301-.824s.005-.013.009-.018a65.13 65.13 0 0 0 1.26-3.98l-.002-.008c.2-.705.387-1.418.563-2.138v-.006c.228-.97.44-1.951.634-2.942l.024-.067c.154-.788.298-1.582.42-2.388l-.011-.007c.15-.95.282-1.91.393-2.882-.002-.013.008-.026.012-.04.083-.728.156-1.461.218-2.2l-.008-.005a64.67 64.67 0 0 0 .18-2.812l-.008-.007a74.95 74.95 0 0 0 .052-2.009 65.7 65.7 0 0 0-.037-3.545l-.011-.006a70.25 70.25 0 0 0-.062-1.25.036.036 0 0 1 .013-.012z"/></symbol>\n        <symbol viewBox="0 0 652.25 527.37" id="volume_icon"><path d="M332.29 9.38L189.47 150.3a57.55 57.55 0 0 0-7.64 7.78 108.53 108.53 0 0 0-22.3-2.41h-52C48 155.67 0 204.04 0 263.58v.15c0 59.53 48 107.94 107.55 107.94h52a108.19 108.19 0 0 0 23.16-2.6 35.3 35.3 0 0 0 5.74 7.34L331.3 517.06c22.5 22.17 60.7 6.21 60.7-25.39v-456c0-30.94-36.87-47.15-59.71-26.29zm109.39 334.07A26.49 26.49 0 0 1 423 298.23a48.83 48.83 0 0 0 0-69.11 26.49 26.49 0 0 1 37.41-37.45 101.81 101.81 0 0 1 0 144 26.41 26.41 0 0 1-18.73 7.78z"/><path d="M493.64 414.8a26.49 26.49 0 0 1-18.73-45.22c58.39-58.39 58.39-153.41 0-211.8a26.49 26.49 0 1 1 37.46-37.46 202.64 202.64 0 0 1 0 286.72 26.41 26.41 0 0 1-18.73 7.76z"/><path d="M552.05 467.97a26.49 26.49 0 0 1-18.73-45.22 224.82 224.82 0 0 0 0-318.14 26.49 26.49 0 1 1 37.46-37.46 277.8 277.8 0 0 1 0 393.07 26.41 26.41 0 0 1-18.73 7.75z"/></symbol>\n    </svg>';

var AllIcons = function AllIcons() {
    return _react2.default.createElement('div', { style: { display: 'none' }, dangerouslySetInnerHTML: { __html: allIconsHtml } });
};

var _default = AllIcons;
exports.default = _default;
;

var _temp = function () {
    if (typeof __REACT_HOT_LOADER__ === 'undefined') {
        return;
    }

    __REACT_HOT_LOADER__.register(allIconsHtml, 'allIconsHtml', './assets/allicons/AllIcons.jsx.generated');

    __REACT_HOT_LOADER__.register(AllIcons, 'AllIcons', './assets/allicons/AllIcons.jsx.generated');

    __REACT_HOT_LOADER__.register(_default, 'default', './assets/allicons/AllIcons.jsx.generated');
}();

;
