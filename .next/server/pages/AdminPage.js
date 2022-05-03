(() => {
var exports = {};
exports.id = 991;
exports.ids = [991];
exports.modules = {

/***/ 9047:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1469);
/* harmony import */ var _style_module_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_style_module_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5282);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__);



const Button = ({
  text,
  type,
  onClick
}) => {
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx("button", {
    type: type,
    onClick: onClick,
    className: `nav-link  fw-bold px-5 ${(_style_module_css__WEBPACK_IMPORTED_MODULE_1___default().borderConnexion)}`,
    children: text
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Button);

/***/ }),

/***/ 3313:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ AdminPage)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__(9047);
// EXTERNAL MODULE: ./components/form/SendArticle/style.module.css
var style_module = __webpack_require__(954);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
// EXTERNAL MODULE: external "react-redux"
var external_react_redux_ = __webpack_require__(79);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: external "@hookform/resolvers/yup"
var yup_ = __webpack_require__(2166);
// EXTERNAL MODULE: external "yup"
var external_yup_ = __webpack_require__(9440);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/form/SendArticle/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }














const SendArticle = () => {
  ;
  const {
    register,
    formState: {
      errors
    },
    handleSubmit
  } = (0,external_react_hook_form_.useForm)({
    mode: "onSubmit"
  });

  const onSubmit = async data => {
    console.log("les informat", _objectSpread(_objectSpread({}, data), {}, {
      picture: "fufutfut"
    }));

    try {
      console.log(localStorage.getItem("token"), "hfuehv -fehvhrg ");
      console.log(data.picture);
      const response = await external_axios_default().post("https://mon-dentiste-ok.herokuapp.com/api/article", _objectSpread(_objectSpread({}, data), {}, {
        picture: "fufutfut"
      }), {
        headers: {
          "x-access-token": `${localStorage.getItem("token")}`
        }
      }).then(res => {
        console.log("res", res);
        return res;
      }).catch(err => {
        console.log("error in request ", err);
      });
    } catch (error) {
      console.log("try catch error : ", error);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
    className: `col-lg-8 row pb-5 g-4 ${(style_module_default()).respensivepadding}`,
    onSubmit: handleSubmit(onSubmit),
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("h1", {
      className: "h4 d-flex justify-content-center",
      children: [" ", "Formulaire Article", " "]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        type: "text",
        className: `col-12 py-2 ${(style_module_default()).bordergreen}`,
        id: "inputtitle",
        placeholder: "Titre",
        name: "title"
      }, register("title", {
        required: true
      })))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        type: "text",
        className: `col-12 py-2 ${(style_module_default()).bordergreen}`,
        id: "inputdescription",
        placeholder: "Description",
        name: "description" // ref={register({ required: "This is required." })}

      }, register("description", {
        required: true
      })))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        type: "file",
        className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
        id: "picture",
        placeholder: "Photo",
        name: "picture"
      }, register("picture", {
        required: false
      })))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-md-12",
      children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
        type: "text",
        className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
        id: "name",
        placeholder: "Nom",
        name: "Name"
      }, register("Name", {
        required: true
      })))
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      class: "col-12 d-flex justify-content-center",
      children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
        text: "Envoyer"
      })
    })]
  });
};

/* harmony default export */ const form_SendArticle = (SendArticle);
// EXTERNAL MODULE: ./layout/layoutSideBar.js + 1 modules
var layoutSideBar = __webpack_require__(1159);
// EXTERNAL MODULE: ./components/Table/tableArticles.js
var tableArticles = __webpack_require__(9087);
;// CONCATENATED MODULE: ./pages/AdminPage/index.js






const index = () => {
  return /*#__PURE__*/jsx_runtime_.jsx(layoutSideBar/* default */.Z, {
    titre: "Articles",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "d-flex row justify-content-center",
      children: [/*#__PURE__*/jsx_runtime_.jsx(form_SendArticle, {}), /*#__PURE__*/jsx_runtime_.jsx(tableArticles/* default */.Z, {})]
    })
  });
};

/* harmony default export */ const AdminPage = (index);

/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"borderConnexion": "style_borderConnexion__1w7Al"
};


/***/ }),

/***/ 954:
/***/ ((module) => {

// Exports
module.exports = {
	"bordergreen": "style_bordergreen__3_9zm",
	"boxshadow": "style_boxshadow__3uKmz",
	"colorgrid": "style_colorgrid__3-lUA",
	"respensiveReverse": "style_respensiveReverse__2jtTr",
	"respensive": "style_respensive__2VqXu",
	"respensiveCard1": "style_respensiveCard1__1bX3X",
	"respensiveCard2": "style_respensiveCard2__2mtVA",
	"respensivemargin": "style_respensivemargin__We85p",
	"respensivepadding": "style_respensivepadding__25lcR"
};


/***/ }),

/***/ 2166:
/***/ ((module) => {

"use strict";
module.exports = require("@hookform/resolvers/yup");

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

/***/ 6731:
/***/ ((module) => {

"use strict";
module.exports = require("next/router");

/***/ }),

/***/ 9297:
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ 2662:
/***/ ((module) => {

"use strict";
module.exports = require("react-hook-form");

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

/***/ }),

/***/ 9440:
/***/ ((module) => {

"use strict";
module.exports = require("yup");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,836,739,87], () => (__webpack_exec__(3313)));
module.exports = __webpack_exports__;

})();