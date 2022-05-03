(() => {
var exports = {};
exports.id = 91;
exports.ids = [91];
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

/***/ 2043:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_articles)
});

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/enfantQuiBrosseDent.jpeg
/* harmony default export */ const enfantQuiBrosseDent = ({"src":"/_next/static/image/assets/enfantQuiBrosseDent.b0d18dfbaa9ed7c079beee12fc93259e.jpeg","height":1049,"width":700,"blurDataURL":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoKCgoKCgsMDAsPEA4QDxYUExMUFiIYGhgaGCIzICUgICUgMy03LCksNy1RQDg4QFFeT0pPXnFlZXGPiI+7u/sBCgoKCgoKCwwMCw8QDhAPFhQTExQWIhgaGBoYIjMgJSAgJSAzLTcsKSw3LVFAODhAUV5PSk9ecWVlcY+Ij7u7+//CABEIAAgABQMBIgACEQEDEQH/xAAUAAEAAAAAAAAAAAAAAAAAAAAG/9oACAEBAAAAAHv/xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAECEAAAAD//xAAUAQEAAAAAAAAAAAAAAAAAAAAC/9oACAEDEAAAAF//xAAaEAEAAgMBAAAAAAAAAAAAAAACAQMAESEE/9oACAEBAAE/AKX6rulmDAPZOtzn/8QAFxEAAwEAAAAAAAAAAAAAAAAAAQIhAP/aAAgBAgEBPwBVgp3/xAAXEQADAQAAAAAAAAAAAAAAAAAAARJh/9oACAEDAQE/AKxH/9k="});
// EXTERNAL MODULE: ./components/Card/CardArticle/CardArticle.module.css
var CardArticle_module = __webpack_require__(7837);
var CardArticle_module_default = /*#__PURE__*/__webpack_require__.n(CardArticle_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: ./redux/index.js
var redux = __webpack_require__(2656);
// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/Card/CardArticle/CardArticle.js









const CardArticle = () => {
  const Articles = (0,external_react_redux_.useSelector)(state => state.Article.articles);
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => dispatch((0,redux/* fetchArticle */.V8)()), []);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "row row-cols-1 row-cols-sm-2 row-cols-md-2 g-3",
    children: Articles.map(Article => /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: ` d-flex  pt-5 justify-content-center`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
        className: `col-lg-9 border d-flex justify-content-center ${(CardArticle_module_default()).respensive}`,
        children: [/*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
          src: enfantQuiBrosseDent,
          width: "",
          height: "",
          className: `col-lg-4  img-fluid py-xs-4`
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "col-lg-8 py-2 px-3",
          children: [/*#__PURE__*/jsx_runtime_.jsx("h2", {
            children: Article.title
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "pt-1",
            children: Article.description
          }), /*#__PURE__*/jsx_runtime_.jsx("p", {
            className: "pt-3 fw-bold"
          })]
        })]
      })
    }, Article.id))
  });
};

/* harmony default export */ const CardArticle_CardArticle = (CardArticle);
// EXTERNAL MODULE: ./components/footer/index.js
var footer = __webpack_require__(2244);
// EXTERNAL MODULE: ./components/navBar/navBar.js + 1 modules
var navBar = __webpack_require__(298);
// EXTERNAL MODULE: ./components/title/index.js
var title = __webpack_require__(6488);
;// CONCATENATED MODULE: ./pages/articles.js








const articles = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx(navBar/* default */.Z, {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "pt-5",
      children: /*#__PURE__*/jsx_runtime_.jsx(title/* default */.Z, {
        className: "d-flex justify-content-center pt-5",
        text: "Les Articles"
      })
    }), /*#__PURE__*/jsx_runtime_.jsx(CardArticle_CardArticle, {}), /*#__PURE__*/jsx_runtime_.jsx(footer/* default */.Z, {})]
  });
};

/* harmony default export */ const pages_articles = (articles);

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

/***/ 7837:
/***/ ((module) => {

// Exports
module.exports = {
	"respensiveReverse": "CardArticle_respensiveReverse__1u7KQ",
	"respensive": "CardArticle_respensive__5EdKm",
	"respensiveCard1": "CardArticle_respensiveCard1__idCAZ",
	"respensiveCard2": "CardArticle_respensiveCard2__2KHOH",
	"respensivemargin": "CardArticle_respensivemargin__2LZ36",
	"respensivepadding": "CardArticle_respensivepadding__2Bj2f"
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
var __webpack_exports__ = __webpack_require__.X(0, [675,664,836,919,244], () => (__webpack_exec__(2043)));
module.exports = __webpack_exports__;

})();