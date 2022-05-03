exports.id = 739;
exports.ids = [739];
exports.modules = {

/***/ 1159:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ layoutSideBar)
});

// EXTERNAL MODULE: ./node_modules/next/image.js
var next_image = __webpack_require__(5675);
// EXTERNAL MODULE: ./node_modules/next/link.js
var next_link = __webpack_require__(1664);
// EXTERNAL MODULE: external "react/jsx-runtime"
var jsx_runtime_ = __webpack_require__(5282);
;// CONCATENATED MODULE: ./components/SideBar/index.js





const Dasbord = () => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    className: "position-relative",
    children: [/*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: "d-flex flex-column position-fixed flex-shrink-0 p-3 text-white bg-dark",
      style: {
        width: "280px",
        height: "100vh"
      },
      children: [localStorage.roles.indexOf("admin") > -1 || /*#__PURE__*/jsx_runtime_.jsx("a", {
        href: "/",
        className: "d-flex align-items-center mb-3 mb-md-0 me-md-auto text-white text-decoration-none",
        children: /*#__PURE__*/jsx_runtime_.jsx("span", {
          className: "fs-4",
          children: "Admin"
        })
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/(0,jsx_runtime_.jsxs)("ul", {
        className: "nav nav-pills flex-column mb-auto",
        children: [/*#__PURE__*/jsx_runtime_.jsx("li", {
          className: "nav-item",
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/AdminPage",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              href: "",
              className: "nav-link active",
              "aria-current": "page",
              children: "Article"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            href: "#",
            className: "nav-link text-white",
            children: "Dashboard"
          })
        }), localStorage.roles.indexOf("admin") > -1 && /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/AdminPage/cabinet",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link text-white",
              children: "Cabinet"
            })
          })
        }), /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/AdminPage/rdv",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link text-white",
              children: "les Rendez-vous"
            })
          })
        }), localStorage.roles.indexOf("admin") > -1 && /*#__PURE__*/jsx_runtime_.jsx("li", {
          children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
            href: "/AdminPage/utilisateur",
            passHref: true,
            children: /*#__PURE__*/jsx_runtime_.jsx("a", {
              className: "nav-link text-white",
              children: "Users"
            })
          })
        })]
      }), /*#__PURE__*/jsx_runtime_.jsx("hr", {}), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: "dropdown",
        children: /*#__PURE__*/jsx_runtime_.jsx(next_link.default, {
          href: "/login",
          passHref: true,
          children: /*#__PURE__*/jsx_runtime_.jsx("a", {
            children: "LogOUT"
          })
        })
      })]
    }), /*#__PURE__*/jsx_runtime_.jsx("div", {
      className: "b-example-divider"
    })]
  });
};

/* harmony default export */ const SideBar = (Dasbord);
// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(701);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);
// EXTERNAL MODULE: ./layout/style.module.css
var style_module = __webpack_require__(864);
var style_module_default = /*#__PURE__*/__webpack_require__.n(style_module);
;// CONCATENATED MODULE: ./layout/layoutSideBar.js






const LayoutSideBar = ({
  children,
  titre
}) => {
  return /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
    children: [/*#__PURE__*/jsx_runtime_.jsx((head_default()), {
      children: /*#__PURE__*/jsx_runtime_.jsx("title", {
        children: titre
      })
    }), /*#__PURE__*/(0,jsx_runtime_.jsxs)("div", {
      className: " d-flex col-12 bg-light",
      children: [/*#__PURE__*/jsx_runtime_.jsx("div", {
        children: /*#__PURE__*/jsx_runtime_.jsx(SideBar, {})
      }), /*#__PURE__*/jsx_runtime_.jsx("div", {
        className: `${(style_module_default()).ml280px}`,
        children: children
      })]
    })]
  });
};

/* harmony default export */ const layoutSideBar = (LayoutSideBar);

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

/***/ 864:
/***/ ((module) => {

// Exports
module.exports = {
	"ml280px": "style_ml280px__2s5V_",
	"parent": "style_parent__1rWXv"
};


/***/ }),

/***/ 2431:
/***/ (() => {

/* (ignored) */

/***/ })

};
;