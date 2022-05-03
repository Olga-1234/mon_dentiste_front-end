(() => {
var exports = {};
exports.id = 734;
exports.ids = [734];
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

/***/ 5985:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ utilisateur)
});

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(9297);
// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__(9047);
// EXTERNAL MODULE: ./components/form/SendUsers/style.module.css
var style_module = __webpack_require__(4570);
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
// EXTERNAL MODULE: ./layout/layoutSideBar.js + 1 modules
var layoutSideBar = __webpack_require__(1159);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/form/SendUsers/index.js
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) { symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); } keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }















const SendUsers = () => {
  // const schema = yup
  //   .object()
  //   .shape({
  //     name: yup.string().required("name is required"),
  //     title: yup.string().required("Title is required"),
  //     picture: yup.string(),
  //     description: yup.string().required("description is required"),
  //   })
  //   .required();
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
    console.log("les informat", data);

    try {
      console.log(localStorage.getItem("token"), "hfuehv -fehvhrg ");
      const response = await external_axios_default().post("https://mon-dentiste-ok.herokuapp.com/api/article", data, {
        headers: {
          "x-access-token": `${localStorage.getItem("token")}`
        }
      }).data.then(res => {
        console.log("res", res.data);
      }).catch(err => {
        console.log("error in request", err);
      });
    } catch (error) {
      console.log("llele", error);
    }
  };

  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "col-12",
    children: [/*#__PURE__*/jsx_runtime_.jsx("h1", {
      className: "h4 d-flex border justify-content-center",
      children: " Formulaire D'enregistrements des utilisateurs"
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "col-12 d-flex justify-content-center py-5",
      children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("form", {
        className: `col-lg-8 row g-4  ${(style_module_default()).respensivepadding}`,
        onSubmit: handleSubmit(onSubmit),
        children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).bordergreen}`,
            id: "inputuserName",
            placeholder: "Nom",
            name: "userName"
          }, register("userName", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).bordergreen}`,
            id: "inputuserfirstName",
            placeholder: "Prenom",
            name: "userfirstName" // ref={register({ required: "This is required." })}

          }, register("userfirstName", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "email",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "email",
            placeholder: "email",
            name: "email"
          }, register("email", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "inputaddress",
            placeholder: "Adresse",
            name: "address"
          }, register("address", {
            required: false
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "sexe",
            placeholder: "sexe",
            name: "sexe"
          }, register("sexe", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "date",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "birthdate",
            placeholder: "Date de Naissance",
            name: "birthdate"
          }, register("birthdate", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "number",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "tel",
            placeholder: "T\xE9l\xE9phone",
            name: "tel"
          }, register("tel", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "cabinets",
            placeholder: "cabinets",
            name: "cabinets"
          }, register("cabinets", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "text",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "role",
            placeholder: "role",
            name: "roles"
          }, register("roles", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          className: "col-md-12",
          children: /*#__PURE__*/jsx_runtime_.jsx("input", _objectSpread({
            type: "password",
            className: `col-12 py-2 ${(style_module_default()).colorgrid}  ${(style_module_default()).bordergreen}`,
            id: "password",
            placeholder: "mot de passe",
            name: "password"
          }, register("password", {
            required: true
          })))
        }), /*#__PURE__*/jsx_runtime_.jsx("div", {
          class: "col-12 d-flex justify-content-center",
          children: /*#__PURE__*/jsx_runtime_.jsx(components_button/* default */.Z, {
            text: "Envoyer"
          })
        })]
      })
    })]
  });
};

/* harmony default export */ const form_SendUsers = (SendUsers);
// EXTERNAL MODULE: ./redux/index.js
var redux = __webpack_require__(2656);
;// CONCATENATED MODULE: ./components/Table/tableUsers.js






const TableUsers = () => {
  const Users = (0,external_react_redux_.useSelector)(state => state.User.users);
  const dispatch = (0,external_react_redux_.useDispatch)();
  (0,external_react_.useEffect)(() => dispatch((0,redux/* fetchUser */.BT)()), []);
  console.log('les users', Users);
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: "col-10",
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("table", {
      className: "table table-success  table-striped",
      children: [/*#__PURE__*/jsx_runtime_.jsx("thead", {
        children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "Nom"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "PreNom"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "Email"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "Adresse"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "T\xE9l\xE9phone"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "roles"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "sexe"
          }), /*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "col",
            children: "cabinet"
          })]
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("tbody", {
        children: Users.map((User, index) => /*#__PURE__*/(0,jsx_runtime_.jsxs)("tr", {
          children: [/*#__PURE__*/jsx_runtime_.jsx("th", {
            scope: "row",
            children: index + 1
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.userName
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.userfirstName
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.email
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.address
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.tel
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.roles
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.sexe
          }), /*#__PURE__*/jsx_runtime_.jsx("td", {
            children: User.cabinet
          })]
        }, User.id))
      })]
    })
  });
};

/* harmony default export */ const tableUsers = (TableUsers);
;// CONCATENATED MODULE: ./pages/AdminPage/utilisateur.js






const Users = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)(layoutSideBar/* default */.Z, {
    children: [/*#__PURE__*/jsx_runtime_.jsx(form_SendUsers, {}), /*#__PURE__*/jsx_runtime_.jsx(tableUsers, {})]
  });
};

/* harmony default export */ const utilisateur = (Users);

/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"borderConnexion": "style_borderConnexion__1w7Al"
};


/***/ }),

/***/ 4570:
/***/ ((module) => {

// Exports
module.exports = {
	"bordergreen": "style_bordergreen__2d-cw",
	"boxshadow": "style_boxshadow__m8LSm",
	"colorgrid": "style_colorgrid__1WHUU",
	"respensiveReverse": "style_respensiveReverse__skxZJ",
	"respensive": "style_respensive__nqFnk",
	"respensiveCard1": "style_respensiveCard1__1Ub1Q",
	"respensiveCard2": "style_respensiveCard2__3F8jK",
	"respensivemargin": "style_respensivemargin__1CLvb",
	"respensivepadding": "style_respensivepadding__1A9qJ"
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
var __webpack_require__ = require("../../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [675,664,836,739], () => (__webpack_exec__(5985)));
module.exports = __webpack_exports__;

})();