"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/examples/page",{

/***/ "(app-pages-browser)/./app/components/GrudgeList.jsx":
/*!***************************************!*\
  !*** ./app/components/GrudgeList.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ GrudgeList; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction grudgeReducer(state, action) {\n    console.log({\n        state,\n        action\n    });\n    if (action.type === \"ADD\") {\n        return [\n            ...state,\n            action.payload\n        ];\n    }\n    if (action.type === \"REMOVE\") {\n        return state.filter((grudge)=>grudge.id !== action.payload.id);\n    }\n    if (action.type === \"CLEAR\") {\n        return [];\n    }\n    return [];\n}\nfunction GrudgeList() {\n    _s();\n    const [grudges, dispatch] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useReducer)(grudgeReducer, []);\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    console.log({\n        grudges\n    });\n    const title = grudges.length > 0 ? \"Grudges\" : \"Add Some Grudges\";\n    function deleteGrudge(grudge) {\n        dispatch({\n            type: \"REMOVE\",\n            payload: grudge\n        });\n    }\n    function clearGrudges() {\n        dispatch({\n            type: \"CLEAR\"\n        });\n    }\n    function addGrudge() {\n        if (!inputValue) return;\n        dispatch({\n            type: \"ADD\",\n            payload: {\n                text: inputValue,\n                id: Math.random()\n            }\n        });\n        setInputValue(\"\");\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        \"data-test\": \"grudges-div\",\n        style: {\n            margin: \"20px\"\n        },\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                style: {\n                    margin: \"20px 0px\"\n                },\n                children: title\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                lineNumber: 43,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    label: \"Add Grudge\",\n                    variant: \"filled\",\n                    value: inputValue,\n                    onChange: (e)=>setInputValue(e.target.value),\n                    style: {\n                        backgroundColor: \"white\"\n                    }\n                }, void 0, false, {\n                    fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                    lineNumber: 45,\n                    columnNumber: 13\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                lineNumber: 44,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                onClick: addGrudge,\n                children: \"Add Grudge\"\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                lineNumber: 53,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                style: {\n                    color: \"white\",\n                    listStyleType: \"none\"\n                },\n                children: grudges.length > 0 && grudges.map((g)=>{\n                    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        children: [\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"span\", {\n                                children: g.text\n                            }, void 0, false, {\n                                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                                lineNumber: 62,\n                                columnNumber: 33\n                            }, this),\n                            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                                onClick: ()=>deleteGrudge(g),\n                                children: \"X\"\n                            }, void 0, false, {\n                                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                                lineNumber: 65,\n                                columnNumber: 33\n                            }, this)\n                        ]\n                    }, g.id, true, {\n                        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                        lineNumber: 61,\n                        columnNumber: 28\n                    }, this);\n                })\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                lineNumber: 56,\n                columnNumber: 13\n            }, this),\n            grudges.length > 0 && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                \"data-test\": \"clear-grudges\",\n                onClick: clearGrudges,\n                children: \"Clear\"\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n                lineNumber: 74,\n                columnNumber: 39\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/GrudgeList.jsx\",\n        lineNumber: 42,\n        columnNumber: 9\n    }, this);\n}\n_s(GrudgeList, \"YsaIOkXw/7cUgFks5kr/8b2VnCw=\");\n_c = GrudgeList;\nvar _c;\n$RefreshReg$(_c, \"GrudgeList\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0dydWRnZUxpc3QuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQ2lEO0FBQ0w7QUFFNUMsU0FBU0ksY0FBY0MsS0FBSyxFQUFFQyxNQUFNO0lBQ2hDQyxRQUFRQyxHQUFHLENBQUM7UUFBQ0g7UUFBTUM7SUFBTTtJQUN6QixJQUFJQSxPQUFPRyxJQUFJLEtBQUssT0FBTTtRQUN0QixPQUFPO2VBQUlKO1lBQU9DLE9BQU9JLE9BQU87U0FBQztJQUNyQztJQUNBLElBQUlKLE9BQU9HLElBQUksS0FBSyxVQUFTO1FBQ3pCLE9BQU9KLE1BQU1NLE1BQU0sQ0FBQyxDQUFDQyxTQUFXQSxPQUFPQyxFQUFFLEtBQUtQLE9BQU9JLE9BQU8sQ0FBQ0csRUFBRTtJQUNuRTtJQUNBLElBQUlQLE9BQU9HLElBQUksS0FBSyxTQUFRO1FBQ3hCLE9BQU8sRUFBRTtJQUNiO0lBQ0EsT0FBTyxFQUFFO0FBQ2I7QUFFZSxTQUFTSzs7SUFDcEIsTUFBTSxDQUFDQyxTQUFTQyxTQUFTLEdBQUdkLGlEQUFVQSxDQUFDRSxlQUFlLEVBQUU7SUFDeEQsTUFBTSxDQUFDYSxZQUFZQyxjQUFjLEdBQUdmLCtDQUFRQSxDQUFDO0lBRTdDSSxRQUFRQyxHQUFHLENBQUM7UUFBQ087SUFBTztJQUVwQixNQUFNSSxRQUFRSixRQUFRSyxNQUFNLEdBQUcsSUFBSSxZQUFZO0lBRS9DLFNBQVNDLGFBQWFULE1BQU07UUFDeEJJLFNBQVM7WUFBQ1AsTUFBTTtZQUFVQyxTQUFTRTtRQUFNO0lBQzdDO0lBRUEsU0FBU1U7UUFDTE4sU0FBUztZQUFDUCxNQUFNO1FBQU87SUFDM0I7SUFFQSxTQUFTYztRQUNMLElBQUksQ0FBQ04sWUFBWTtRQUNqQkQsU0FBUztZQUFDUCxNQUFNO1lBQU9DLFNBQVM7Z0JBQUNjLE1BQU1QO2dCQUFZSixJQUFJWSxLQUFLQyxNQUFNO1lBQUU7UUFBQztRQUNyRVIsY0FBYztJQUNsQjtJQUVBLHFCQUNJLDhEQUFDUztRQUFJQyxhQUFVO1FBQWNDLE9BQU87WUFBQ0MsUUFBUTtRQUFNOzswQkFDL0MsOERBQUNDO2dCQUFHRixPQUFPO29CQUFDQyxRQUFRO2dCQUFVOzBCQUFJWDs7Ozs7OzBCQUNsQyw4REFBQ1E7MEJBQ0QsNEVBQUMxQixxREFBU0E7b0JBQ1YrQixPQUFNO29CQUNOQyxTQUFRO29CQUNSQyxPQUFPakI7b0JBQ1BrQixVQUFVQyxDQUFBQSxJQUFLbEIsY0FBY2tCLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSztvQkFDM0NMLE9BQU87d0JBQUNTLGlCQUFpQjtvQkFBTzs7Ozs7Ozs7Ozs7MEJBR2hDLDhEQUFDdEMscURBQU1BO2dCQUFDdUMsU0FBU2hCOzBCQUFXOzs7Ozs7MEJBRzVCLDhEQUFDaUI7Z0JBQUdYLE9BQU87b0JBQUNZLE9BQU87b0JBQVNDLGVBQWU7Z0JBQU07MEJBRXpDM0IsUUFBUUssTUFBTSxHQUFHLEtBQ2JMLFFBQVE0QixHQUFHLENBQUMsQ0FBQ0M7b0JBQ1YscUJBQ0EsOERBQUNDOzswQ0FDSSw4REFBQ0M7MENBQ0FGLEVBQUVwQixJQUFJOzs7Ozs7MENBRVAsOERBQUN4QixxREFBTUE7Z0NBQUN1QyxTQUFTLElBQU1sQixhQUFhdUI7MENBQUk7Ozs7Ozs7dUJBSnBDQSxFQUFFL0IsRUFBRTs7Ozs7Z0JBUWY7Ozs7OztZQUtURSxRQUFRSyxNQUFNLEdBQUcsbUJBQUssOERBQUNwQixxREFBTUE7Z0JBQUM0QixhQUFVO2dCQUFnQlcsU0FBU2pCOzBCQUFjOzs7Ozs7Ozs7Ozs7QUFJL0Y7R0EzRHdCUjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9HcnVkZ2VMaXN0LmpzeD9mNTBhIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tIFwiQG11aS9tYXRlcmlhbFwiXG5pbXBvcnQgeyB1c2VSZWR1Y2VyLCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiXG5cbmZ1bmN0aW9uIGdydWRnZVJlZHVjZXIoc3RhdGUsIGFjdGlvbil7XG4gICAgY29uc29sZS5sb2coe3N0YXRlLGFjdGlvbn0pXG4gICAgaWYgKGFjdGlvbi50eXBlID09PSAnQUREJyl7XG4gICAgICAgIHJldHVybiBbLi4uc3RhdGUsIGFjdGlvbi5wYXlsb2FkXVxuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdSRU1PVkUnKXtcbiAgICAgICAgcmV0dXJuIHN0YXRlLmZpbHRlcigoZ3J1ZGdlKSA9PiBncnVkZ2UuaWQgIT09IGFjdGlvbi5wYXlsb2FkLmlkKVxuICAgIH1cbiAgICBpZiAoYWN0aW9uLnR5cGUgPT09ICdDTEVBUicpe1xuICAgICAgICByZXR1cm4gW11cbiAgICB9XG4gICAgcmV0dXJuIFtdXG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEdydWRnZUxpc3QoKXtcbiAgICBjb25zdCBbZ3J1ZGdlcywgZGlzcGF0Y2hdID0gdXNlUmVkdWNlcihncnVkZ2VSZWR1Y2VyLCBbXSlcbiAgICBjb25zdCBbaW5wdXRWYWx1ZSwgc2V0SW5wdXRWYWx1ZV0gPSB1c2VTdGF0ZSgnJylcblxuICAgIGNvbnNvbGUubG9nKHtncnVkZ2VzfSlcblxuICAgIGNvbnN0IHRpdGxlID0gZ3J1ZGdlcy5sZW5ndGggPiAwID8gJ0dydWRnZXMnIDogJ0FkZCBTb21lIEdydWRnZXMnXG5cbiAgICBmdW5jdGlvbiBkZWxldGVHcnVkZ2UoZ3J1ZGdlKXtcbiAgICAgICAgZGlzcGF0Y2goe3R5cGU6ICdSRU1PVkUnLCBwYXlsb2FkOiBncnVkZ2V9KVxuICAgIH1cblxuICAgIGZ1bmN0aW9uIGNsZWFyR3J1ZGdlcygpe1xuICAgICAgICBkaXNwYXRjaCh7dHlwZTogJ0NMRUFSJ30pXG4gICAgfVxuXG4gICAgZnVuY3Rpb24gYWRkR3J1ZGdlKCl7XG4gICAgICAgIGlmICghaW5wdXRWYWx1ZSkgcmV0dXJuXG4gICAgICAgIGRpc3BhdGNoKHt0eXBlOiAnQUREJywgcGF5bG9hZDoge3RleHQ6IGlucHV0VmFsdWUsIGlkOiBNYXRoLnJhbmRvbSgpfX0pXG4gICAgICAgIHNldElucHV0VmFsdWUoJycpXG4gICAgfVxuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPGRpdiBkYXRhLXRlc3Q9XCJncnVkZ2VzLWRpdlwiIHN0eWxlPXt7bWFyZ2luOiAnMjBweCd9fT5cbiAgICAgICAgICAgIDxoMyBzdHlsZT17e21hcmdpbjogJzIwcHggMHB4J319Pnt0aXRsZX08L2gzPlxuICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxUZXh0RmllbGQgXG4gICAgICAgICAgICBsYWJlbD1cIkFkZCBHcnVkZ2VcIiBcbiAgICAgICAgICAgIHZhcmlhbnQ9XCJmaWxsZWRcIiBcbiAgICAgICAgICAgIHZhbHVlPXtpbnB1dFZhbHVlfVxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0SW5wdXRWYWx1ZShlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBzdHlsZT17e2JhY2tncm91bmRDb2xvcjogJ3doaXRlJ319XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8QnV0dG9uIG9uQ2xpY2s9e2FkZEdydWRnZX0+XG4gICAgICAgICAgICAgICAgQWRkIEdydWRnZVxuICAgICAgICAgICAgPC9CdXR0b24+XG4gICAgICAgICAgICA8dWwgc3R5bGU9e3tjb2xvcjogJ3doaXRlJywgbGlzdFN0eWxlVHlwZTogJ25vbmUnfX0+XG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBncnVkZ2VzLmxlbmd0aCA+IDAgJiYgKFxuICAgICAgICAgICAgICAgICAgICAgICAgZ3J1ZGdlcy5tYXAoKGcpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpIGtleT17Zy5pZH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7Zy50ZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxCdXR0b24gb25DbGljaz17KCkgPT4gZGVsZXRlR3J1ZGdlKGcpfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFhcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9CdXR0b24+IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XG4gICAgICAgICAgICAgICAgICAgICAgICApfSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3J1ZGdlcy5sZW5ndGggPiAwICYmIDxCdXR0b24gZGF0YS10ZXN0PVwiY2xlYXItZ3J1ZGdlc1wiIG9uQ2xpY2s9e2NsZWFyR3J1ZGdlc30+Q2xlYXI8L0J1dHRvbj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9kaXY+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJCdXR0b24iLCJUZXh0RmllbGQiLCJ1c2VSZWR1Y2VyIiwidXNlU3RhdGUiLCJncnVkZ2VSZWR1Y2VyIiwic3RhdGUiLCJhY3Rpb24iLCJjb25zb2xlIiwibG9nIiwidHlwZSIsInBheWxvYWQiLCJmaWx0ZXIiLCJncnVkZ2UiLCJpZCIsIkdydWRnZUxpc3QiLCJncnVkZ2VzIiwiZGlzcGF0Y2giLCJpbnB1dFZhbHVlIiwic2V0SW5wdXRWYWx1ZSIsInRpdGxlIiwibGVuZ3RoIiwiZGVsZXRlR3J1ZGdlIiwiY2xlYXJHcnVkZ2VzIiwiYWRkR3J1ZGdlIiwidGV4dCIsIk1hdGgiLCJyYW5kb20iLCJkaXYiLCJkYXRhLXRlc3QiLCJzdHlsZSIsIm1hcmdpbiIsImgzIiwibGFiZWwiLCJ2YXJpYW50IiwidmFsdWUiLCJvbkNoYW5nZSIsImUiLCJ0YXJnZXQiLCJiYWNrZ3JvdW5kQ29sb3IiLCJvbkNsaWNrIiwidWwiLCJjb2xvciIsImxpc3RTdHlsZVR5cGUiLCJtYXAiLCJnIiwibGkiLCJzcGFuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/GrudgeList.jsx\n"));

/***/ })

});