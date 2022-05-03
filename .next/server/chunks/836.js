"use strict";
exports.id = 836;
exports.ids = [836];
exports.modules = {

/***/ 7460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "V": () => (/* binding */ fetchArticle),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */


const fetchArticle = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("Article/fetch", async () => {
  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://mon-dentiste-ok.herokuapp.com/api/article");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const articleSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "articles",
  initialState: {
    articles: [],
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchArticle.fulfilled, (state, {
      payload
    }) => {
      try {
        state.articles = [];
        state.articles.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });
    builder.addCase(fetchArticle.rejected, (state, {
      payload
    }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchArticle.pending, (state, {
      payload
    }) => {
      state.isLoading = true;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (articleSlice.reducer);

/***/ }),

/***/ 144:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "o": () => (/* binding */ fetchCabinet),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */


const fetchCabinet = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("Cabinet/fetch", async () => {
  try {
    // https://git.heroku.com/mon-dentiste.git
    // http://localhost:7000/api/article
    // https://git.heroku.com/mon-dentiste.git/api/article
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://mon-dentiste-ok.herokuapp.com/api/cabinet");
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const cabinetSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "cabinets",
  initialState: {
    cabinets: [],
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchCabinet.fulfilled, (state, {
      payload
    }) => {
      try {
        state.cabinets = [];
        state.cabinets.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });
    builder.addCase(fetchCabinet.rejected, (state, {
      payload
    }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchCabinet.pending, (state, {
      payload
    }) => {
      state.isLoading = true;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (cabinetSlice.reducer);

/***/ }),

/***/ 3269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* unused harmony export loginAsync */
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */


const loginAsync = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("loginAsync/fetch", async data => {
  const token = localStorage.getItem("token"); // localStorage.setItem("token", token.acces_token);

  console.log("le token", data);

  try {
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().post("http://localhost:7000/api/auth/signIn", data, {
      headers: {
        "Authorization": `Bearer ${token}`
      }
    });
    return response;
  } catch (error) {
    console.log(" erreur avec le mot de passe : ", error);
  }
});
const loginSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "loginSlice",
  initialState: {
    Login: [],
    login: {},
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(loginAsync.fulfilled, (state, {
      payload
    }) => {
      try {
        state.Login = [];
        state.Login.push(payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });
    builder.addCase(loginAsync.rejected, (state, {
      payload
    }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(loginAsync.pending, (state, {
      payload
    }) => {
      state.isLoading = true;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (loginSlice.reducer); // const onSubmit = async (data) => {
//     try {
//       const token = await await (
//         await axios.post("http://localhost:3001/utilisateur/login", data)
//       ).data;
//       console.log("les users", token.acces_token);
//       localStorage.setItem("token", token.acces_token);
//       console.log("les information du login", data);
//       if (token) {
//         history.push("/dashboard");
//       }
//       console.log("la suite des data", data);
//     } catch (error) {
//       console.log(" erreur mauvais mot de passe : ", error);
//     }
//   };

/***/ }),

/***/ 5589:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "B": () => (/* binding */ fetchUser),
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6139);
/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2376);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* eslint-disable no-unused-vars */


const fetchUser = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createAsyncThunk)("User/fetch", async () => {
  try {
    // https://git.heroku.com/mon-dentiste.git
    // http://localhost:7000/api/article
    // https://git.heroku.com/mon-dentiste.git/api/article
    const response = await axios__WEBPACK_IMPORTED_MODULE_1___default().get("https://mon-dentiste-ok.herokuapp.com/api/users/allUser", {
      headers: {
        "x-access-token": `${localStorage.getItem("token")}`
      }
    });
    const data = await response.data;
    return data;
  } catch (error) {
    console.log(" erreur lors du fetching des data des : ", error);
  }
});
const userSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({
  name: "users",
  initialState: {
    users: [],
    error: null,
    isLoading: false
  },
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchUser.fulfilled, (state, {
      payload
    }) => {
      try {
        state.users = [];
        state.users.push(...payload);
        state.isLoading = false;
      } catch (error) {
        console.log("erreurs lors du chargement", error);
      }
    });
    builder.addCase(fetchUser.rejected, (state, {
      payload
    }) => {
      if (payload) state.error = payload.message;
      state.isLoading = false;
    });
    builder.addCase(fetchUser.pending, (state, {
      payload
    }) => {
      state.isLoading = true;
    });
  }
});
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (userSlice.reducer);

/***/ })

};
;