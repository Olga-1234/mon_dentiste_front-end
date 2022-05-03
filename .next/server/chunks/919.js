exports.id = 919;
exports.ids = [919];
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

/***/ 298:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ navBar)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
;// CONCATENATED MODULE: ./assets/monDentiste.png
/* harmony default export */ const monDentiste = ({"src":"/_next/static/image/assets/monDentiste.06b0ee08d9a02d0baea75794fdb7d790.png","height":56,"width":65,"blurDataURL":"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAHCAYAAAA1WQxeAAAAl0lEQVR4nD2O2wqDMBBEZxOvRRQLfez//1seCqXVaLduHCM4JIGEs2ciZpZEBK814qM/tL4AIHg0LY53SYzahhBnfAl0ZUUAGOsGt6LMgMW/0rBAzbClhNK5bGhouyomVUwEK+9QiMsmDp8GbvDAW1fWKJ5dz1/gAlKMESEE1FWNeYnohwGO1vs4nsARVh1DOYmLF/HeYweH12DhJVdHgQAAAABJRU5ErkJggg=="});
// EXTERNAL MODULE: ./components/button/index.js
var components_button = __webpack_require__(9047);
// EXTERNAL MODULE: ./components/navBar/navBar.module.css
var navBar_module = __webpack_require__(5610);
var navBar_module_default = /*#__PURE__*/__webpack_require__.n(navBar_module);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/navBar/navBar.js








const NavBar = () => {
  return /*#__PURE__*/jsx_runtime_.jsx("div", {
    className: `w-100  ${(navBar_module_default()).positionFixed}`,
    children: /*#__PURE__*/(0,jsx_runtime_.jsxs)("header", {
      className: `${(navBar_module_default()).header}`,
      children: [/*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "",
        className: `${(navBar_module_default()).logo} ${(navBar_module_default()).linkLogo} `,
        children: "Mon Dentiste"
      }), /*#__PURE__*/jsx_runtime_.jsx("input", {
        className: `${(navBar_module_default()).menubtn} `,
        type: "checkbox",
        id: "menu-btn"
      }), /*#__PURE__*/jsx_runtime_.jsx("label", {
        className: `${(navBar_module_default()).menuicon}`,
        for: "menu-btn",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: `${(navBar_module_default()).navicon}`
        })
      }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: `${(navBar_module_default()).menu} `,
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              title: "Accueil",
              className: "text-dark",
              children: "Accueil"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/trouver_un_dentiste",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              title: "Dentistes",
              className: "text-dark ",
              children: "Dentistes"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/articles",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              title: "Articles",
              className: "text-dark",
              children: "Articles"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/a_propos_de_nous",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              title: "A propos",
              className: "text-dark",
              children: "A propos"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/login",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              title: "login",
              children: /*#__PURE__*/jsx_runtime_.jsx("i", {
                className: "bi bi-person-circle text-dark"
              })
            })
          })
        })]
      })]
    })
  });
};

/* harmony default export */ const navBar = (NavBar);

/***/ }),

/***/ 1469:
/***/ ((module) => {

// Exports
module.exports = {
	"borderConnexion": "style_borderConnexion__1w7Al"
};


/***/ }),

/***/ 5610:
/***/ ((module) => {

// Exports
module.exports = {
	"linkLogo": "navBar_linkLogo__2ppEW",
	"textrice": "navBar_textrice__22qll",
	"header": "navBar_header__2ehcn",
	"menubtn": "navBar_menubtn__31zxc",
	"logo": "navBar_logo__1kANO",
	"menu": "navBar_menu__3uFJ7",
	"menuicon": "navBar_menuicon__3_Xyf",
	"navicon": "navBar_navicon__2EZO_",
	"steps": "navBar_steps__1wtYG"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;