(() => {
var exports = {};
exports.id = 459;
exports.ids = [459];
exports.modules = {

/***/ 7110:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages_login)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: external "react-hook-form"
var external_react_hook_form_ = __webpack_require__(2662);
// EXTERNAL MODULE: ./styles/login.module.css
var login_module = __webpack_require__(9538);
var login_module_default = /*#__PURE__*/__webpack_require__.n(login_module);
// EXTERNAL MODULE: ./assets/eye.svg
var eye = __webpack_require__(6726);
// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__(9047);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(2376);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);
// EXTERNAL MODULE: external "next/router"
var router_ = __webpack_require__(6731);
;// CONCATENATED MODULE: ./assets/dasbord2.svg
/* harmony default export */ const dasbord2 = ({"src":"/_next/static/image/assets/dasbord2.9975cf7502543e0d8fb0756bf05658db.svg","height":500,"width":750});
// EXTERNAL MODULE: ./components/navBar/navBar.js + 1 modules
var navBar = __webpack_require__(298);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./pages/login.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const Eye = /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
  src: eye/* default */.Z,
  width: "",
  height: ""
});

const login = ({
  email,
  passsword
}) => {
  const router = (0,router_.useRouter)();
  const {
    0: passwordShown,
    1: setPasswordShown
  } = (0,external_react_.useState)(false);

  const togglePasswordVisiblity = () => {
    setPasswordShown(passwordShown ? false : true);
  };

  const verifyExistenceOfItemInArray = (item, data) => {
    return data.includes(item);
  };

  const {
    register,
    handleSubmit,
    formState: {
      errors
    }
  } = (0,external_react_hook_form_.useForm)({
    mode: "onSubmit"
  });

  const onSubmit = async data => {
    console.log("les information sur la connexion", data);

    try {
      const token = await (await external_axios_default().post("https://mon-dentiste-ok.herokuapp.com/api/auth/signIn", data)).data;
      console.log("les token", token.accessToken);
      console.log("les id", token.roles);
      localStorage.setItem("token", token.accessToken);
      localStorage.setItem("roles", token.roles);

      if (verifyExistenceOfItemInArray("dentiste", token.roles) && verifyExistenceOfItemInArray("admin", token.roles)) {
        router.push("/AdminPage");
      } else if (verifyExistenceOfItemInArray("admin", token.roles)) {
        router.push("/AdminPage");
      } else if (verifyExistenceOfItemInArray("dentiste", token.roles)) {
        router.push("/articles");
      } else if (verifyExistenceOfItemInArray("customer", token.roles)) {
        router.push("/AdminPage/rdv");
      }
    } catch (error) {
      console.log("erreur mauvais mot de passe :", error);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "d-flex col",
    children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
      className: `d-flex col-6 justify-content-center align-items-center ${(login_module_default()).login}`,
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: `col-lg-7 row g-5   ${(login_module_default()).respensivepadding}`,
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
          className: "h3 d-flex justify-content-center",
          children: "Connexion"
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: `col-md-12 ${(login_module_default()).bordergreen}`,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "email",
            name: "email",
            placeholder: "Email",
            className: ` py-2 col-12  ${(login_module_default()).bordernone} `
          }, register("email", {
            required: true
          }))), " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: ` d-flex justify-content-between ${(login_module_default()).bordergreen} `,
          children: [/*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: passwordShown ? "text" : "password",
            name: "password",
            placeholder: "mot de passe",
            className: ` py-2 ${(login_module_default()).bordernone}  col-10 `
          }, register("password", {
            required: true
          }))), /*#__PURE__*/jsx_runtime_.jsx("i", {
            className: "",
            onClick: togglePasswordVisiblity,
            children: Eye
          }), " "]
        }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
          className: "mb-4 d-flex justify-content-around",
          children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#!",
            children: "Mot de passe oubli\xE9?"
          }), /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/inscription",
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              children: "S'inscrire"
            })
          })]
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-12 mt-5 d-flex justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
            text: "Envoyer"
          })
        })]
      })
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: " col-6 d-flex justify-content-center ",
      children: /*#__PURE__*/jsx_runtime_.jsx(next_image.default, {
        src: dasbord2,
        width: " 700 ",
        height: "",
        className: "img-fluid",
        alt: ""
      })
    })]
  });
};

/* harmony default export */ const pages_login = (login);

/***/ }),

/***/ 6726:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({"src":"/_next/static/image/assets/eye.c1ca9f1d71dd0735bdebe176ca132887.svg","height":16,"width":16});

/***/ }),

/***/ 9538:
/***/ ((module) => {

// Exports
module.exports = {
	"login": "login_login__2IpHY",
	"bglight": "login_bglight__1aDmU",
	"input": "login_input__1z3Im",
	"passwrapper": "login_passwrapper__2SgMj",
	"i": "login_i__3uLdi",
	"button": "login_button__3XC2R",
	"bordergreen": "login_bordergreen__jkw5Y",
	"bordernone": "login_bordernone__142yQ",
	"boxshadow": "login_boxshadow__1xSKs",
	"colorgrid": "login_colorgrid__gwLlH",
	"respensiveReverse": "login_respensiveReverse__387hE",
	"respensive": "login_respensive__2e4xt",
	"respensiveCard1": "login_respensiveCard1__3GfM_",
	"respensiveCard2": "login_respensiveCard2__2MN5M",
	"respensivemargin": "login_respensivemargin__2nrtn",
	"respensivepadding": "login_respensivepadding__3yE2y"
};


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
var __webpack_exports__ = __webpack_require__.X(0, [675,664,919], () => (__webpack_exec__(7110)));
module.exports = __webpack_exports__;

})();