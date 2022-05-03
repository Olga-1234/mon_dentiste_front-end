(() => {
var exports = {};
exports.id = 978;
exports.ids = [978];
exports.modules = {

/***/ 6488:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2857);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Title = ({
  text,
  className
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("div", {
    className: className,
    children: /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("h1", {
      className: ` ${(_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().montserat)}`,
      children: text
    })
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Title);

/***/ }),

/***/ 4692:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_prendre_rendez_vous)
});

// EXTERNAL MODULE: ./components/navBar/navBar.js + 1 modules
var navBar = __webpack_require__(298);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/rafiki.png
/* harmony default export */ const rafiki = ({"src":"/_next/static/image/assets/rafiki.e1e7da20a4f9990a99c0e1807de353e8.png","height":432,"width":580,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAGCAYAAAD+Bd/7AAAAvUlEQVR42mMAgRcvXkx48uTJucfPnso9fPTI4vHjx1eBuIwBBu4+uH/xwO7d/7+9fi3/9dNnry+fP///8P7DGgYYmLdm+fKuaZP+7dy7w+rs3dvhz1+/uv/+wweECU2rl7UvvXL+15F7t18eunPj1bbrl2/Pv3janQEE/v//L7j/3JkXK65e+H/+5bP/p589+X/m+ZP/e27fWAlTwHj04vnW9edO/T/55OGvk48f/jj88O7/bbeuzWVgYGAAABqTeNELogSbAAAAAElFTkSuQmCC"});
// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__(9047);
// EXTERNAL MODULE: ./components/Appointment/CardAppointment/style.module.css
var style_module = __webpack_require__(2811);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Appointment/CardAppointment/index.js







const CardAppointment = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "py-2 d-flex col-12 container pb-5",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-flex justify-content-center col-5  ",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `  pt-5`,
        children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: rafiki,
          height: "",
          width: ""
        })
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-2 d-flex col-7 justify-content-center",
      children: /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: ` py-4 ${(style_module_default()).boxshadow} d-flex justify-content-center`,
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
          className: `col-lg-10 row g-4 ${(style_module_default()).respensivepadding}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
            className: "h4 d-flex justify-content-center",
            children: " Formulaire"
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "text",
              className: `col-12 py-2 bg-light ${(style_module_default()).bordergreen}`,
              id: "inputname",
              placeholder: "Nom"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "email",
              className: `col-12 py-2 bg-light ${(style_module_default()).bordergreen}`,
              id: "inputEmail4",
              placeholder: "Email"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              id: "inputState",
              className: `col-12 py-2 bg-light ${(style_module_default()).colorgrid} ${(style_module_default()).bordergreen}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                selected: true,
                children: "Nom du cabinet"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                children: "..."
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-12",
            children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("select", {
              id: "inputStat",
              className: `col-12 py-2 bg-light ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
              children: [/*#__PURE__*/jsx_runtime_.jsx("option", {
                selected: true,
                children: "Service"
              }), /*#__PURE__*/jsx_runtime_.jsx("option", {
                children: "..."
              })]
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: "col-md-12",
            children: /*#__PURE__*/jsx_runtime_.jsx("input", {
              type: "date",
              className: `col-12 py-2 bg-light ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
              id: "date",
              placeholder: "date"
            })
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            class: "col-12 d-flex justify-content-center",
            children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
              text: "Envoyer"
            })
          })]
        })
      })
    })]
  });
};

/* harmony default export */ const Appointment_CardAppointment = (CardAppointment);
// EXTERNAL MODULE: ./components/title/index.js
var title = __webpack_require__(6488);
// EXTERNAL MODULE: ./components/footer/index.js
var footer = __webpack_require__(2244);
;// CONCATENATED MODULE: ./pages/prendre_rendez_vous.js








const prendre_rendez_vous = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navBar/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(title/* default */.Z, {
        className: "d-flex justify-content-center pt-5",
        text: "Rendez-vous"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(Appointment_CardAppointment, {}), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const pages_prendre_rendez_vous = (prendre_rendez_vous);

/***/ }),

/***/ 2811:
/***/ ((module) => {

// Exports
module.exports = {
	"bordergreen": "style_bordergreen__3RUFF",
	"boxshadow": "style_boxshadow__1xABw",
	"colorgrid": "style_colorgrid__1XKYr",
	"respensiveReverse": "style_respensiveReverse__3fMwb",
	"respensive": "style_respensive__ROQsk",
	"respensiveCard1": "style_respensiveCard1__2DuV5",
	"respensiveCard2": "style_respensiveCard2__3PK9O",
	"respensivemargin": "style_respensivemargin__3DFTh",
	"respensivepadding": "style_respensivepadding__Gd1jc"
};


/***/ }),

/***/ 2857:
/***/ ((module) => {

// Exports
module.exports = {
	"montserat": "style_montserat__1G9zS"
};


/***/ }),

/***/ 9325:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/denormalize-page-path.js");

/***/ }),

/***/ 822:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/server/image-config.js");

/***/ }),

/***/ 6695:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/head.js");

/***/ }),

/***/ 5378:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/i18n/normalize-locale-path.js");

/***/ }),

/***/ 7162:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/mitt.js");

/***/ }),

/***/ 8773:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router-context.js");

/***/ }),

/***/ 2248:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/get-asset-path-from-route.js");

/***/ }),

/***/ 9372:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/is-dynamic.js");

/***/ }),

/***/ 665:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/parse-relative-url.js");

/***/ }),

/***/ 2747:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/querystring.js");

/***/ }),

/***/ 333:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-matcher.js");

/***/ }),

/***/ 3456:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/router/utils/route-regex.js");

/***/ }),

/***/ 556:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/to-base-64.js");

/***/ }),

/***/ 7620:
/***/ ((module) => {

"use strict";
module.exports = require("next/dist/shared/lib/utils.js");

/***/ }),

/***/ 701:
/***/ ((module) => {

"use strict";
module.exports = require("next/head");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 5282:
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,919,244], () => (__webpack_exec__(4692)));
module.exports = __webpack_exports__;

})();