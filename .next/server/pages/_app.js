/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./components/CartContext.js":
/*!***********************************!*\
  !*** ./components/CartContext.js ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"CartContext\": () => (/* binding */ CartContext),\n/* harmony export */   \"CartContextProvider\": () => (/* binding */ CartContextProvider)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"react\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n\n\nconst CartContext = /*#__PURE__*/ (0,react__WEBPACK_IMPORTED_MODULE_1__.createContext)({});\nfunction CartContextProvider({ children  }) {\n    const ls =  false ? 0 : null;\n    const [cartProducts, setCartProducts] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)([]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (cartProducts?.length > 0) {\n            ls?.setItem(\"cart\", JSON.stringify(cartProducts));\n        }\n    }, [\n        cartProducts\n    ]);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (ls && ls.getItem(\"cart\")) {\n            setCartProducts(JSON.parse(ls.getItem(\"cart\")));\n        }\n    }, []);\n    function addProduct(productId) {\n        setCartProducts((prev)=>[\n                ...prev,\n                productId\n            ]);\n    }\n    function removeProduct(productId) {\n        setCartProducts((prev)=>{\n            const pos = prev.indexOf(productId);\n            if (pos !== -1) {\n                return prev.filter((value, index)=>index !== pos);\n            }\n            return prev;\n        });\n    }\n    function clearCart() {\n        setCartProducts([]);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(CartContext.Provider, {\n        value: {\n            cartProducts,\n            setCartProducts,\n            addProduct,\n            removeProduct,\n            clearCart\n        },\n        children: children\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\steph\\\\Desktop\\\\final_capstone_project\\\\capstone_frontend\\\\components\\\\CartContext.js\",\n        lineNumber: 34,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL0NhcnRDb250ZXh0LmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBeUQ7QUFFbEQsTUFBTUcsNEJBQWNILG9EQUFhQSxDQUFDLENBQUMsR0FBRztBQUV0QyxTQUFTSSxvQkFBb0IsRUFBQ0MsU0FBUSxFQUFDLEVBQUU7SUFDOUMsTUFBTUMsS0FBSyxNQUE2QixHQUFHQyxDQUFtQixHQUFHLElBQUk7SUFDckUsTUFBTSxDQUFDRSxjQUFhQyxnQkFBZ0IsR0FBR1IsK0NBQVFBLENBQUMsRUFBRTtJQUNsREQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlRLGNBQWNFLFNBQVMsR0FBRztZQUM1QkwsSUFBSU0sUUFBUSxRQUFRQyxLQUFLQyxTQUFTLENBQUNMO1FBQ3JDLENBQUM7SUFDSCxHQUFHO1FBQUNBO0tBQWE7SUFDakJSLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJSyxNQUFNQSxHQUFHUyxPQUFPLENBQUMsU0FBUztZQUM1QkwsZ0JBQWdCRyxLQUFLRyxLQUFLLENBQUNWLEdBQUdTLE9BQU8sQ0FBQztRQUN4QyxDQUFDO0lBQ0gsR0FBRyxFQUFFO0lBQ0wsU0FBU0UsV0FBV0MsU0FBUyxFQUFFO1FBQzdCUixnQkFBZ0JTLENBQUFBLE9BQVE7bUJBQUlBO2dCQUFLRDthQUFVO0lBQzdDO0lBQ0EsU0FBU0UsY0FBY0YsU0FBUyxFQUFFO1FBQ2hDUixnQkFBZ0JTLENBQUFBLE9BQVE7WUFDdEIsTUFBTUUsTUFBTUYsS0FBS0csT0FBTyxDQUFDSjtZQUN6QixJQUFJRyxRQUFRLENBQUMsR0FBRztnQkFDZCxPQUFPRixLQUFLSSxNQUFNLENBQUMsQ0FBQ0MsT0FBTUMsUUFBVUEsVUFBVUo7WUFDaEQsQ0FBQztZQUNELE9BQU9GO1FBQ1Q7SUFDRjtJQUNBLFNBQVNPLFlBQVk7UUFDbkJoQixnQkFBZ0IsRUFBRTtJQUNwQjtJQUNBLHFCQUNFLDhEQUFDUCxZQUFZd0IsUUFBUTtRQUFDSCxPQUFPO1lBQUNmO1lBQWFDO1lBQWdCTztZQUFXRztZQUFjTTtRQUFTO2tCQUMxRnJCOzs7Ozs7QUFHUCxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250Ly4vY29tcG9uZW50cy9DYXJ0Q29udGV4dC5qcz84MjNmIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlQ29udGV4dCwgdXNlRWZmZWN0LCB1c2VTdGF0ZX0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgQ2FydENvbnRleHQgPSBjcmVhdGVDb250ZXh0KHt9KTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBDYXJ0Q29udGV4dFByb3ZpZGVyKHtjaGlsZHJlbn0pIHtcclxuICBjb25zdCBscyA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyB3aW5kb3cubG9jYWxTdG9yYWdlIDogbnVsbDtcclxuICBjb25zdCBbY2FydFByb2R1Y3RzLHNldENhcnRQcm9kdWN0c10gPSB1c2VTdGF0ZShbXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChjYXJ0UHJvZHVjdHM/Lmxlbmd0aCA+IDApIHtcclxuICAgICAgbHM/LnNldEl0ZW0oJ2NhcnQnLCBKU09OLnN0cmluZ2lmeShjYXJ0UHJvZHVjdHMpKTtcclxuICAgIH1cclxuICB9LCBbY2FydFByb2R1Y3RzXSk7XHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGlmIChscyAmJiBscy5nZXRJdGVtKCdjYXJ0JykpIHtcclxuICAgICAgc2V0Q2FydFByb2R1Y3RzKEpTT04ucGFyc2UobHMuZ2V0SXRlbSgnY2FydCcpKSk7XHJcbiAgICB9XHJcbiAgfSwgW10pO1xyXG4gIGZ1bmN0aW9uIGFkZFByb2R1Y3QocHJvZHVjdElkKSB7XHJcbiAgICBzZXRDYXJ0UHJvZHVjdHMocHJldiA9PiBbLi4ucHJldixwcm9kdWN0SWRdKTtcclxuICB9XHJcbiAgZnVuY3Rpb24gcmVtb3ZlUHJvZHVjdChwcm9kdWN0SWQpIHtcclxuICAgIHNldENhcnRQcm9kdWN0cyhwcmV2ID0+IHtcclxuICAgICAgY29uc3QgcG9zID0gcHJldi5pbmRleE9mKHByb2R1Y3RJZCk7XHJcbiAgICAgIGlmIChwb3MgIT09IC0xKSB7XHJcbiAgICAgICAgcmV0dXJuIHByZXYuZmlsdGVyKCh2YWx1ZSxpbmRleCkgPT4gaW5kZXggIT09IHBvcyk7XHJcbiAgICAgIH1cclxuICAgICAgcmV0dXJuIHByZXY7XHJcbiAgICB9KTtcclxuICB9XHJcbiAgZnVuY3Rpb24gY2xlYXJDYXJ0KCkge1xyXG4gICAgc2V0Q2FydFByb2R1Y3RzKFtdKTtcclxuICB9XHJcbiAgcmV0dXJuIChcclxuICAgIDxDYXJ0Q29udGV4dC5Qcm92aWRlciB2YWx1ZT17e2NhcnRQcm9kdWN0cyxzZXRDYXJ0UHJvZHVjdHMsYWRkUHJvZHVjdCxyZW1vdmVQcm9kdWN0LGNsZWFyQ2FydH19PlxyXG4gICAgICB7Y2hpbGRyZW59XHJcbiAgICA8L0NhcnRDb250ZXh0LlByb3ZpZGVyPlxyXG4gICk7XHJcbn0iXSwibmFtZXMiOlsiY3JlYXRlQ29udGV4dCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiQ2FydENvbnRleHQiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiY2hpbGRyZW4iLCJscyIsIndpbmRvdyIsImxvY2FsU3RvcmFnZSIsImNhcnRQcm9kdWN0cyIsInNldENhcnRQcm9kdWN0cyIsImxlbmd0aCIsInNldEl0ZW0iLCJKU09OIiwic3RyaW5naWZ5IiwiZ2V0SXRlbSIsInBhcnNlIiwiYWRkUHJvZHVjdCIsInByb2R1Y3RJZCIsInByZXYiLCJyZW1vdmVQcm9kdWN0IiwicG9zIiwiaW5kZXhPZiIsImZpbHRlciIsInZhbHVlIiwiaW5kZXgiLCJjbGVhckNhcnQiLCJQcm92aWRlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/CartContext.js\n");

/***/ }),

/***/ "./pages/_app.js":
/*!***********************!*\
  !*** ./pages/_app.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ App)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ \"styled-components\");\n/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _components_CartContext__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/components/CartContext */ \"./components/CartContext.js\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/global.css */ \"./styles/global.css\");\n/* harmony import */ var _styles_global_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_global_css__WEBPACK_IMPORTED_MODULE_3__);\n\n\n\n\nconst GlobalStyles = styled_components__WEBPACK_IMPORTED_MODULE_1__.createGlobalStyle`\r\n  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700&display=swap');\r\n  body{\r\n    background-color: #eee;\r\n    padding:0;\r\n    margin:0;\r\n    font-family: 'Poppins', sans-serif;\r\n  }\r\n`;\nfunction App({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(GlobalStyles, {}, void 0, false, {\n                fileName: \"C:\\\\Users\\\\steph\\\\Desktop\\\\final_capstone_project\\\\capstone_frontend\\\\pages\\\\_app.js\",\n                lineNumber: 18,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_CartContext__WEBPACK_IMPORTED_MODULE_2__.CartContextProvider, {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n                    ...pageProps\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\steph\\\\Desktop\\\\final_capstone_project\\\\capstone_frontend\\\\pages\\\\_app.js\",\n                    lineNumber: 20,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\steph\\\\Desktop\\\\final_capstone_project\\\\capstone_frontend\\\\pages\\\\_app.js\",\n                lineNumber: 19,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFvRDtBQUNTO0FBQ2hDO0FBRTdCLE1BQU1FLGVBQWVGLGdFQUFpQixDQUFDOzs7Ozs7OztBQVF2QyxDQUFDO0FBRWMsU0FBU0csSUFBSSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBRSxFQUFFO0lBQ3BELHFCQUNFOzswQkFDRSw4REFBQ0g7Ozs7OzBCQUNELDhEQUFDRCx3RUFBbUJBOzBCQUNsQiw0RUFBQ0c7b0JBQVcsR0FBR0MsU0FBUzs7Ozs7Ozs7Ozs7OztBQUloQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZWNvbW1lcmNlLWZyb250Ly4vcGFnZXMvX2FwcC5qcz9lMGFkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7Y3JlYXRlR2xvYmFsU3R5bGV9IGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xyXG5pbXBvcnQge0NhcnRDb250ZXh0UHJvdmlkZXJ9IGZyb20gXCJAL2NvbXBvbmVudHMvQ2FydENvbnRleHRcIjtcclxuaW1wb3J0ICdAL3N0eWxlcy9nbG9iYWwuY3NzJztcclxuXHJcbmNvbnN0IEdsb2JhbFN0eWxlcyA9IGNyZWF0ZUdsb2JhbFN0eWxlYFxyXG4gIEBpbXBvcnQgdXJsKCdodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVBvcHBpbnM6d2dodEA0MDA7NTAwOzYwMDs3MDAmZGlzcGxheT1zd2FwJyk7XHJcbiAgYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICNlZWU7XHJcbiAgICBwYWRkaW5nOjA7XHJcbiAgICBtYXJnaW46MDtcclxuICAgIGZvbnQtZmFtaWx5OiAnUG9wcGlucycsIHNhbnMtc2VyaWY7XHJcbiAgfVxyXG5gO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfSkge1xyXG4gIHJldHVybiAoXHJcbiAgICA8PlxyXG4gICAgICA8R2xvYmFsU3R5bGVzIC8+XHJcbiAgICAgIDxDYXJ0Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgICAgIDxDb21wb25lbnQgey4uLnBhZ2VQcm9wc30gLz5cclxuICAgICAgPC9DYXJ0Q29udGV4dFByb3ZpZGVyPlxyXG4gICAgPC8+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiY3JlYXRlR2xvYmFsU3R5bGUiLCJDYXJ0Q29udGV4dFByb3ZpZGVyIiwiR2xvYmFsU3R5bGVzIiwiQXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.js\n");

/***/ }),

/***/ "./styles/global.css":
/*!***************************!*\
  !*** ./styles/global.css ***!
  \***************************/
/***/ (() => {



/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

"use strict";
module.exports = require("react");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

"use strict";
module.exports = require("react/jsx-dev-runtime");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/***/ ((module) => {

"use strict";
module.exports = require("styled-components");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.js"));
module.exports = __webpack_exports__;

})();