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

/***/ "(app-pages-browser)/./app/forms/page.jsx":
/*!****************************!*\
  !*** ./app/forms/page.jsx ***!
  \****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ FormsPage; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/TextField/TextField.js\");\n/* harmony import */ var _mui_material__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @mui/material */ \"(app-pages-browser)/./node_modules/@mui/material/Button/Button.js\");\n/* harmony import */ var _components_Accordion__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Accordion */ \"(app-pages-browser)/./app/components/Accordion.jsx\");\n/* harmony import */ var _forms_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./forms.module.css */ \"(app-pages-browser)/./app/forms/forms.module.css\");\n/* harmony import */ var _forms_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_forms_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nconst items = [\n    {\n        summary: \"Step 1) Get Form\",\n        details: \"First, we need to get the form\",\n        id: \"1\"\n    },\n    {\n        summary: \"Step 2) Type In Form\",\n        details: \"cy.type('words')\",\n        id: \"2\"\n    },\n    {\n        summary: \"Step 3) Subscribe\",\n        details: \"cy.click()\",\n        id: \"3\"\n    },\n    {\n        summary: \"Step 4) Test success/fail\",\n        details: \"NOTE: Waiting/Retriability *docs\",\n        id: \"4\"\n    },\n    {\n        summary: \"Step 5) Test validation\",\n        details: \"\",\n        id: \"5\"\n    }\n];\nfunction FormsPage() {\n    _s();\n    const [inputValue, setInputValue] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    const [subMessage, setSubMessage] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"\");\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"main\", {\n        className: (_forms_module_css__WEBPACK_IMPORTED_MODULE_3___default().main),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                \"data-test\": \"title\",\n                className: (_forms_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: \"Testing Forms\"\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n                lineNumber: 40,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Accordion__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                items: items\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n                lineNumber: 41,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                className: (_forms_module_css__WEBPACK_IMPORTED_MODULE_3___default().input),\n                \"data-test\": \"input-email\",\n                label: \"Email\",\n                variant: \"filled\",\n                value: inputValue,\n                onChange: (e)=>setInputValue(e.target.value)\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n                lineNumber: 42,\n                columnNumber: 13\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_mui_material__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n                onClick: ()=>{\n                    if (inputValue && !inputValue.includes(\".com\")) {\n                        setSubMessage(\"Invalid email: \".concat(inputValue, \"!\"));\n                    } else if (inputValue.length) {\n                        setSubMessage(\"Successfully subbed: \".concat(inputValue, \"!\"));\n                    } else {\n                        setSubMessage(\"fail!\");\n                    }\n                    setTimeout(()=>{\n                        setSubMessage(\"\");\n                        setInputValue(\"\");\n                    }, 3000);\n                },\n                children: \"Subscribe\"\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n                lineNumber: 50,\n                columnNumber: 13\n            }, this),\n            subMessage && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"p\", {\n                children: subMessage\n            }, void 0, false, {\n                fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n                lineNumber: 66,\n                columnNumber: 31\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/din/VSC-Projects/Testing/Cypress/Testing-JavaScript-with-Cypress/app/forms/page.jsx\",\n        lineNumber: 39,\n        columnNumber: 9\n    }, this);\n}\n_s(FormsPage, \"O16UezbHpNuj1EuP/ljtL/jHVHg=\");\n_c = FormsPage;\nvar _c;\n$RefreshReg$(_c, \"FormsPage\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9mb3Jtcy9wYWdlLmpzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUNnQztBQUNpQjtBQUNHO0FBQ2I7QUFFdkMsTUFBTUssUUFBUTtJQUNWO1FBQ0VDLFNBQVM7UUFDVEMsU0FBVTtRQUNWQyxJQUFJO0lBQ047SUFDQTtRQUNJRixTQUFTO1FBQ1RDLFNBQVU7UUFDVkMsSUFBSTtJQUNOO0lBQ0E7UUFDRUYsU0FBUztRQUNUQyxTQUFVO1FBQ1ZDLElBQUk7SUFDTjtJQUNBO1FBQ0VGLFNBQVM7UUFDVEMsU0FBVTtRQUNWQyxJQUFJO0lBQ047SUFDQTtRQUNFRixTQUFTO1FBQ1RDLFNBQVU7UUFDVkMsSUFBSTtJQUNOO0NBQ0g7QUFFWSxTQUFTQzs7SUFDcEIsTUFBTSxDQUFDQyxZQUFZQyxjQUFjLEdBQUdYLCtDQUFRQSxDQUFDO0lBQzdDLE1BQU0sQ0FBQ1ksWUFBWUMsY0FBYyxHQUFHYiwrQ0FBUUEsQ0FBQztJQUM3QyxxQkFDSSw4REFBQ2M7UUFBS0MsV0FBV1gsK0RBQVc7OzBCQUN4Qiw4REFBQ1k7Z0JBQUdDLGFBQVU7Z0JBQVFGLFdBQVdYLGlFQUFhOzBCQUFFOzs7Ozs7MEJBQ2hELDhEQUFDRCw2REFBY0E7Z0JBQUNFLE9BQU9BOzs7Ozs7MEJBQ3ZCLDhEQUFDSCxxREFBU0E7Z0JBQ1ZhLFdBQVdYLGdFQUFZO2dCQUN2QmEsYUFBVTtnQkFDVkcsT0FBTTtnQkFDTkMsU0FBUTtnQkFDUkMsT0FBT1o7Z0JBQ1BhLFVBQVVDLENBQUFBLElBQUtiLGNBQWNhLEVBQUVDLE1BQU0sQ0FBQ0gsS0FBSzs7Ozs7OzBCQUUzQyw4REFBQ3JCLHFEQUFNQTtnQkFBRXlCLFNBQVM7b0JBQ2QsSUFBSWhCLGNBQWMsQ0FBQ0EsV0FBV2lCLFFBQVEsQ0FBQyxTQUFTO3dCQUM1Q2QsY0FBYyxrQkFBNkIsT0FBWEgsWUFBVztvQkFDL0MsT0FBTyxJQUFJQSxXQUFXa0IsTUFBTSxFQUFDO3dCQUN6QmYsY0FBYyx3QkFBbUMsT0FBWEgsWUFBVztvQkFDckQsT0FBTzt3QkFDSEcsY0FBYztvQkFDbEI7b0JBQ0FnQixXQUFXO3dCQUNQaEIsY0FBYzt3QkFDZEYsY0FBYztvQkFDbEIsR0FBRztnQkFDUDswQkFBRzs7Ozs7O1lBSUNDLDRCQUFjLDhEQUFDa0I7MEJBQUdsQjs7Ozs7Ozs7Ozs7O0FBSWxDO0dBbkN3Qkg7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2Zvcm1zL3BhZ2UuanN4PzU3MjMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgQnV0dG9uLCBUZXh0RmllbGQgfSBmcm9tICdAbXVpL21hdGVyaWFsJ1xuaW1wb3J0IEl0ZW1zQWNjb3JkaW9uIGZyb20gJy4uL2NvbXBvbmVudHMvQWNjb3JkaW9uJ1xuaW1wb3J0IHN0eWxlcyBmcm9tICcuL2Zvcm1zLm1vZHVsZS5jc3MnXG5cbmNvbnN0IGl0ZW1zID0gW1xuICAgIHtcbiAgICAgIHN1bW1hcnk6ICdTdGVwIDEpIEdldCBGb3JtJyxcbiAgICAgIGRldGFpbHM6IGBGaXJzdCwgd2UgbmVlZCB0byBnZXQgdGhlIGZvcm1gLFxuICAgICAgaWQ6ICcxJyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgc3VtbWFyeTogJ1N0ZXAgMikgVHlwZSBJbiBGb3JtJyxcbiAgICAgICAgZGV0YWlsczogYGN5LnR5cGUoJ3dvcmRzJylgLFxuICAgICAgICBpZDogJzInLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3VtbWFyeTogJ1N0ZXAgMykgU3Vic2NyaWJlJyxcbiAgICAgICAgZGV0YWlsczogYGN5LmNsaWNrKClgLFxuICAgICAgICBpZDogJzMnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3VtbWFyeTogJ1N0ZXAgNCkgVGVzdCBzdWNjZXNzL2ZhaWwnLFxuICAgICAgICBkZXRhaWxzOiBgTk9URTogV2FpdGluZy9SZXRyaWFiaWxpdHkgKmRvY3NgLFxuICAgICAgICBpZDogJzQnLFxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgc3VtbWFyeTogJ1N0ZXAgNSkgVGVzdCB2YWxpZGF0aW9uJyxcbiAgICAgICAgZGV0YWlsczogYGAsXG4gICAgICAgIGlkOiAnNScsXG4gICAgICB9LFxuICBdXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZvcm1zUGFnZSgpe1xuICAgIGNvbnN0IFtpbnB1dFZhbHVlLCBzZXRJbnB1dFZhbHVlXSA9IHVzZVN0YXRlKCcnKVxuICAgIGNvbnN0IFtzdWJNZXNzYWdlLCBzZXRTdWJNZXNzYWdlXSA9IHVzZVN0YXRlKCcnKVxuICAgIHJldHVybiAoXG4gICAgICAgIDxtYWluIGNsYXNzTmFtZT17c3R5bGVzLm1haW59PlxuICAgICAgICAgICAgPGgxIGRhdGEtdGVzdD1cInRpdGxlXCIgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5UZXN0aW5nIEZvcm1zPC9oMT5cbiAgICAgICAgICAgIDxJdGVtc0FjY29yZGlvbiBpdGVtcz17aXRlbXN9IC8+XG4gICAgICAgICAgICA8VGV4dEZpZWxkIFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW5wdXR9IFxuICAgICAgICAgICAgZGF0YS10ZXN0PVwiaW5wdXQtZW1haWxcIlxuICAgICAgICAgICAgbGFiZWw9XCJFbWFpbFwiIFxuICAgICAgICAgICAgdmFyaWFudD1cImZpbGxlZFwiIFxuICAgICAgICAgICAgdmFsdWU9e2lucHV0VmFsdWV9XG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRJbnB1dFZhbHVlKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8QnV0dG9uICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGlucHV0VmFsdWUgJiYgIWlucHV0VmFsdWUuaW5jbHVkZXMoJy5jb20nKSApe1xuICAgICAgICAgICAgICAgICAgICBzZXRTdWJNZXNzYWdlKGBJbnZhbGlkIGVtYWlsOiAke2lucHV0VmFsdWV9IWApXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbnB1dFZhbHVlLmxlbmd0aCl7XG4gICAgICAgICAgICAgICAgICAgIHNldFN1Yk1lc3NhZ2UoYFN1Y2Nlc3NmdWxseSBzdWJiZWQ6ICR7aW5wdXRWYWx1ZX0hYClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdWJNZXNzYWdlKCdmYWlsIScpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBzZXRTdWJNZXNzYWdlKCcnKVxuICAgICAgICAgICAgICAgICAgICBzZXRJbnB1dFZhbHVlKCcnKTtcbiAgICAgICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICAgICAgfX0+XG4gICAgICAgICAgICAgICAgU3Vic2NyaWJlXG4gICAgICAgICAgICA8L0J1dHRvbj5cbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzdWJNZXNzYWdlICYmIDxwPntzdWJNZXNzYWdlfTwvcD5cbiAgICAgICAgICAgIH1cbiAgICAgICAgPC9tYWluPlxuICAgIClcbn0iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJCdXR0b24iLCJUZXh0RmllbGQiLCJJdGVtc0FjY29yZGlvbiIsInN0eWxlcyIsIml0ZW1zIiwic3VtbWFyeSIsImRldGFpbHMiLCJpZCIsIkZvcm1zUGFnZSIsImlucHV0VmFsdWUiLCJzZXRJbnB1dFZhbHVlIiwic3ViTWVzc2FnZSIsInNldFN1Yk1lc3NhZ2UiLCJtYWluIiwiY2xhc3NOYW1lIiwiaDEiLCJkYXRhLXRlc3QiLCJoZWFkZXIiLCJpbnB1dCIsImxhYmVsIiwidmFyaWFudCIsInZhbHVlIiwib25DaGFuZ2UiLCJlIiwidGFyZ2V0Iiwib25DbGljayIsImluY2x1ZGVzIiwibGVuZ3RoIiwic2V0VGltZW91dCIsInAiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/forms/page.jsx\n"));

/***/ })

});