"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/forms/page",{

/***/ "(app-pages-browser)/./app/components/Accordion.jsx":
/*!**************************************!*\
  !*** ./app/components/Accordion.jsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ItemsAccordion; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @mui/material/Accordion */ \"(app-pages-browser)/./node_modules/@mui/material/Accordion/Accordion.js\");\n/* harmony import */ var _mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @mui/material/AccordionSummary */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionSummary/AccordionSummary.js\");\n/* harmony import */ var _mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @mui/material/AccordionDetails */ \"(app-pages-browser)/./node_modules/@mui/material/AccordionDetails/AccordionDetails.js\");\n/* harmony import */ var _mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material/Typography */ \"(app-pages-browser)/./node_modules/@mui/material/Typography/Typography.js\");\n/* harmony import */ var _mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/icons-material/ExpandMore */ \"(app-pages-browser)/./node_modules/@mui/icons-material/ExpandMore.js\");\n\n\n\n\n\n\n\nfunction ItemsAccordion(param) {\n    let { items } = param;\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        style: {\n            maxWidth: \"70vw\",\n            minWidth: \"50vw\"\n        },\n        children: items.map((item)=>{\n            return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                \"data-test\": \"accordion-item-\".concat(item.id),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionSummary__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n                        expandIcon: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_icons_material_ExpandMore__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {}, void 0, false, void 0, void 0),\n                        id: \"panel1a-header\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: item.summary\n                        }, void 0, false, {\n                            fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n                            lineNumber: 19,\n                            columnNumber: 23\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n                        lineNumber: 15,\n                        columnNumber: 21\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_AccordionDetails__WEBPACK_IMPORTED_MODULE_6__[\"default\"], {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material_Typography__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                            children: item.details\n                        }, void 0, false, {\n                            fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n                            lineNumber: 22,\n                            columnNumber: 23\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n                        lineNumber: 21,\n                        columnNumber: 21\n                    }, this)\n                ]\n            }, item.id, true, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n                lineNumber: 14,\n                columnNumber: 17\n            }, this);\n        })\n    }, void 0, false, {\n        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/components/Accordion.jsx\",\n        lineNumber: 10,\n        columnNumber: 5\n    }, this);\n}\n_c = ItemsAccordion;\nvar _c;\n$RefreshReg$(_c, \"ItemsAccordion\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0FjY29yZGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUErQjtBQUNpQjtBQUNjO0FBQ0E7QUFDWjtBQUNVO0FBRTdDLFNBQVNNLGVBQWUsS0FBTztRQUFQLEVBQUNDLEtBQUssRUFBQyxHQUFQO0lBQ3JDLHFCQUNFLDhEQUFDQztRQUFJQyxPQUFPO1lBQUNDLFVBQVU7WUFBUUMsVUFBVTtRQUFNO2tCQUV2Q0osTUFBTUssR0FBRyxDQUFDLENBQUNDO1lBQ1AscUJBQ0EsOERBQUNaLCtEQUFTQTtnQkFBQ2EsYUFBVyxrQkFBMEIsT0FBUkQsS0FBS0UsRUFBRTs7a0NBQzNDLDhEQUFDYixzRUFBZ0JBO3dCQUNmYywwQkFBWSw4REFBQ1gsc0VBQWNBO3dCQUMzQlUsSUFBRztrQ0FFSCw0RUFBQ1gsZ0VBQVVBO3NDQUFFUyxLQUFLSSxPQUFPOzs7Ozs7Ozs7OztrQ0FFM0IsOERBQUNkLHNFQUFnQkE7a0NBQ2YsNEVBQUNDLGdFQUFVQTtzQ0FDUlMsS0FBS0ssT0FBTzs7Ozs7Ozs7Ozs7O2VBVG1DTCxLQUFLRSxFQUFFOzs7OztRQWNuRTs7Ozs7O0FBSVo7S0F4QndCVCIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9BY2NvcmRpb24uanN4P2EzYjgiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICogYXMgUmVhY3QgZnJvbSAncmVhY3QnO1xuaW1wb3J0IEFjY29yZGlvbiBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvbic7XG5pbXBvcnQgQWNjb3JkaW9uU3VtbWFyeSBmcm9tICdAbXVpL21hdGVyaWFsL0FjY29yZGlvblN1bW1hcnknO1xuaW1wb3J0IEFjY29yZGlvbkRldGFpbHMgZnJvbSAnQG11aS9tYXRlcmlhbC9BY2NvcmRpb25EZXRhaWxzJztcbmltcG9ydCBUeXBvZ3JhcGh5IGZyb20gJ0BtdWkvbWF0ZXJpYWwvVHlwb2dyYXBoeSc7XG5pbXBvcnQgRXhwYW5kTW9yZUljb24gZnJvbSAnQG11aS9pY29ucy1tYXRlcmlhbC9FeHBhbmRNb3JlJztcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gSXRlbXNBY2NvcmRpb24oe2l0ZW1zfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYgc3R5bGU9e3ttYXhXaWR0aDogJzcwdncnLCBtaW5XaWR0aDogJzUwdncnfX0+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGl0ZW1zLm1hcCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPEFjY29yZGlvbiBkYXRhLXRlc3Q9e2BhY2NvcmRpb24taXRlbS0ke2l0ZW0uaWR9YH0ga2V5PXtpdGVtLmlkfT5cbiAgICAgICAgICAgICAgICAgICAgPEFjY29yZGlvblN1bW1hcnlcbiAgICAgICAgICAgICAgICAgICAgICBleHBhbmRJY29uPXs8RXhwYW5kTW9yZUljb24gLz59XG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJwYW5lbDFhLWhlYWRlclwiXG4gICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT57aXRlbS5zdW1tYXJ5fTwvVHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgPC9BY2NvcmRpb25TdW1tYXJ5PlxuICAgICAgICAgICAgICAgICAgICA8QWNjb3JkaW9uRGV0YWlscz5cbiAgICAgICAgICAgICAgICAgICAgICA8VHlwb2dyYXBoeT5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpdGVtLmRldGFpbHN9XG4gICAgICAgICAgICAgICAgICAgICAgPC9UeXBvZ3JhcGh5PlxuICAgICAgICAgICAgICAgICAgICA8L0FjY29yZGlvbkRldGFpbHM+XG4gICAgICAgICAgICAgICAgPC9BY2NvcmRpb24+XG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIDwvZGl2PlxuICApO1xufSJdLCJuYW1lcyI6WyJSZWFjdCIsIkFjY29yZGlvbiIsIkFjY29yZGlvblN1bW1hcnkiLCJBY2NvcmRpb25EZXRhaWxzIiwiVHlwb2dyYXBoeSIsIkV4cGFuZE1vcmVJY29uIiwiSXRlbXNBY2NvcmRpb24iLCJpdGVtcyIsImRpdiIsInN0eWxlIiwibWF4V2lkdGgiLCJtaW5XaWR0aCIsIm1hcCIsIml0ZW0iLCJkYXRhLXRlc3QiLCJpZCIsImV4cGFuZEljb24iLCJzdW1tYXJ5IiwiZGV0YWlscyJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Accordion.jsx\n"));

/***/ })

});