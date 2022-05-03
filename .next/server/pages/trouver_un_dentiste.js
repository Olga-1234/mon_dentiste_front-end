(() => {
var exports = {};
exports.id = 862;
exports.ids = [862];
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

/***/ 1343:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_trouver_un_dentiste)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/cabinet.png
/* harmony default export */ const cabinet = ({"src":"/_next/static/image/assets/cabinet.f08ec6ed51ba88c61cd3276c7178616d.png","height":535,"width":580,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAA8klEQVR4nAHnABj/AQBSIgCjLWQeCEU8iAADA0oRDg4O/gUE3LWqrVmR4czNAarDwVnp6+qRICcmFRwTFQAB+fn+5vb2AtvIytsYExNfAbba1sy0x8UzIxka+mY9QgXY5uQBCgkK/OLj4gQM/P9MAb3a2P+Z0Mn9OhkcA2I1Ov/9+vsA8Pr5/tTg3gMR+/+wAcXk4dGd0csuKxQX/lopLgEHAgIAxOPgAOrx8AEqFxr6Acrs6Sep0sy3IxATIFMoLQEDAQEAr9vWAMzn5QBjMjfvAQBUNgBxSWKkDxAQ61oxNhb1//5N3/PxAfXx8QQhICFmrHBqhfHZEloAAAAASUVORK5CYII="});
// EXTERNAL MODULE: ./components/Office/CardOffice/style.module.css
var style_module = __webpack_require__(7127);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/index.js
var redux = __webpack_require__(2656);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Office/CardOffice/index.js










const CardCabinet = ({
  className
}) => {
  const Cabinets = (0,external_react_redux_.useSelector)(state => state.Cabinet.cabinets);
  console.log("les donnéées", Cabinets.name);
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => dispatch((0,redux/* fetchCabinet */.on)()), []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: className,
    children: Cabinets.map(Cabinet => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "d-flex justify-content-center   my-5 ",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `d-flex col-lg-12 justify-content-between ${(style_module_default()).boxshadow} ${(style_module_default()).respensiveReverse}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: `col-lg-4 bg-light p-5  ${(style_module_default()).respensivemarginLefRight}`,
          children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
            src: cabinet,
            height: "",
            width: "",
            className: ""
          })
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-8 px-3 border-lg ",
          children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
            className: `d-flex col-lg-12  py-3 px-3 justify-content-between ${(style_module_default()).respensive}`,
            children: /*#__PURE__*/jsx_runtime_.jsx("div", {
              className: "col-lg-6",
              children: /*#__PURE__*/jsx_runtime_.jsx("h2", {
                children: Cabinet.name
              })
            })
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex px-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "bi bi-geo-alt"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "px-3",
              children: Cabinet.address
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex px-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "bi bi-award"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: " px-3",
              children: "service: d\xE9tartrage, plombage, extractions, proth\xE8ses"
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex px-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "bi bi-alarm"
            }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("p", {
              className: " px-3",
              children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [" ", Cabinet.openTime]
              }), " -", " ", /*#__PURE__*/(0,jsx_runtime_.jsxs)("span", {
                children: [" ", Cabinet.closureTime]
              })]
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex px-3",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "bi bi-telephone"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "px-3",
              children: Cabinet.phone
            })]
          }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
            className: "d-flex px-3 ",
            children: [/*#__PURE__*/jsx_runtime_.jsx("i", {
              class: "bi bi-envelope"
            }), /*#__PURE__*/jsx_runtime_.jsx("p", {
              className: "px-3",
              children: Cabinet.email
            })]
          }), /*#__PURE__*/jsx_runtime_.jsx("div", {
            className: " py-2 d-flex",
            children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
              href: "/prendre_rendez_vous",
              children: /*#__PURE__*/jsx_runtime_.jsx("a", {
                className: `text-decoration-none py-2 px-2 fw-bold ${(style_module_default()).fontSize} ${(style_module_default()).bdlink}`,
                children: "prendre rendez-vous"
              })
            })
          })]
        })]
      })
    }, Cabinet.id))
  });
};

/* harmony default export */ const CardOffice = (CardCabinet);
// EXTERNAL MODULE: ./components/footer/index.js
var footer = __webpack_require__(2244);
// EXTERNAL MODULE: ./components/navBar/navBar.js + 1 modules
var navBar = __webpack_require__(298);
// EXTERNAL MODULE: ./components/title/index.js
var title = __webpack_require__(6488);
;// CONCATENATED MODULE: ./pages/trouver_un_dentiste.js
/* eslint-disable no-unused-vars */









const trouver_un_dentiste = ({}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "",
    children: [/*#__PURE__*/jsx_runtime_.jsx(navBar/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(title/* default */.Z, {
        className: "d-flex pt-5 justify-content-center",
        text: "Les Cabinets"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CardOffice, {
      className: "container "
    }), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const pages_trouver_un_dentiste = (trouver_un_dentiste);

/***/ }),

/***/ 2656:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V8": () => (/* reexport safe */ _articleSplice__WEBPACK_IMPORTED_MODULE_0__.V),
/* harmony export */   "on": () => (/* reexport safe */ _cabinetSplice__WEBPACK_IMPORTED_MODULE_2__.o),
/* harmony export */   "BT": () => (/* reexport safe */ _userSlice__WEBPACK_IMPORTED_MODULE_3__.B)
/* harmony export */ });
/* harmony import */ var _articleSplice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7460);
/* harmony import */ var _loginSplice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3269);
/* harmony import */ var _cabinetSplice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(144);
/* harmony import */ var _userSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5589);





/***/ }),

/***/ 7127:
/***/ ((module) => {

// Exports
module.exports = {
	"boxshadow": "style_boxshadow__jCWkI",
	"nonetext": "style_nonetext__5lEn2",
	"respensiveReverse": "style_respensiveReverse__272FN",
	"respensive": "style_respensive__QcsIJ",
	"respensiveCard1": "style_respensiveCard1__1Abx0",
	"respensiveCard2": "style_respensiveCard2__2-_hv",
	"respensivemarginTop": "style_respensivemarginTop__1I1s5",
	"respensivepadding": "style_respensivepadding__3SfJ5",
	"respensivemarginLefRight": "style_respensivemarginLefRight__tRZmc",
	"bdlink": "style_bdlink__10Mp5"
};


/***/ }),

/***/ 2857:
/***/ ((module) => {

// Exports
module.exports = {
	"montserat": "style_montserat__1G9zS"
};


/***/ }),

/***/ 6139:
/***/ ((module) => {

"use strict";
module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ 2376:
/***/ ((module) => {

"use strict";
module.exports = require("axios");

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

/***/ 79:
/***/ ((module) => {

"use strict";
module.exports = require("react-redux");

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
var __webpack_exports__ = __webpack_require__.X(0, [675,664,836,919,244], () => (__webpack_exec__(1343)));
module.exports = __webpack_exports__;

})();