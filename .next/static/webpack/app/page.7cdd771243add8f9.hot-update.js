"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/page.tsx":
/*!**********************!*\
  !*** ./app/page.tsx ***!
  \**********************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./hooks/useDraw.ts\");\n/* harmony import */ var react_color__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-color */ \"(app-pages-browser)/../node_modules/react-color/es/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nconst page = ()=>{\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown, clear } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(drawLine);\n    function drawLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        const { x: currX, y: currY } = currentPoint;\n        const lineColor = color;\n        const lineWidth = 5;\n        let startPoint = prevPoint !== null && prevPoint !== void 0 ? prevPoint : currentPoint;\n        ctx.beginPath();\n        ctx.lineWidth = lineWidth;\n        ctx.strokeStyle = lineColor;\n        ctx.moveTo(startPoint.x, startPoint.y);\n        ctx.lineTo(currX, currY);\n        ctx.stroke();\n        ctx.fillStyle = lineColor;\n        ctx.beginPath();\n        ctx.arc(startPoint.x, startPoint.y, 2, 0, Math.PI * 2, true);\n        ctx.fill();\n        ctx.closePath();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_color__WEBPACK_IMPORTED_MODULE_3__.ChromePicker, {\n                color: color,\n                onChange: (color)=>setColor(color.hex)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 36,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"flex flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border border-black rounded-md px-2 py-1\",\n                    onClick: clear,\n                    children: \"Clear\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                    lineNumber: 38,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                onMouseDown: onMouseDown,\n                ref: canvasRef,\n                width: 750,\n                height: 750,\n                className: \"border border-black rounded-md\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 40,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n        lineNumber: 35,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"dAKK8YToZtzqy13E067rj2vWuq8=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUVpQztBQUNRO0FBQ0U7QUFFM0MsTUFBTUcsT0FBTzs7SUFDWCxNQUFLLENBQUNDLE9BQU1DLFNBQVMsR0FBR0wsK0NBQVFBLENBQUM7SUFDakMsTUFBTSxFQUFFTSxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFDLEdBQUdQLHVEQUFPQSxDQUFDUTtJQUVqRCxTQUFTQSxTQUFTLEtBQXFDO1lBQXJDLEVBQUNDLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQVEsR0FBckM7UUFDaEIsTUFBTSxFQUFDQyxHQUFHQyxLQUFLLEVBQUVDLEdBQUdDLEtBQUssRUFBQyxHQUFHTDtRQUU3QixNQUFNTSxZQUFZYjtRQUNsQixNQUFNYyxZQUFZO1FBRWxCLElBQUlDLGFBQWFULHNCQUFBQSx1QkFBQUEsWUFBYUM7UUFDOUJDLElBQUlRLFNBQVM7UUFFYlIsSUFBSU0sU0FBUyxHQUFHQTtRQUNoQk4sSUFBSVMsV0FBVyxHQUFHSjtRQUVsQkwsSUFBSVUsTUFBTSxDQUFDSCxXQUFXTixDQUFDLEVBQUVNLFdBQVdKLENBQUM7UUFDckNILElBQUlXLE1BQU0sQ0FBQ1QsT0FBT0U7UUFDbEJKLElBQUlZLE1BQU07UUFFVlosSUFBSWEsU0FBUyxHQUFHUjtRQUNoQkwsSUFBSVEsU0FBUztRQUViUixJQUFJYyxHQUFHLENBQUNQLFdBQVdOLENBQUMsRUFBRU0sV0FBV0osQ0FBQyxFQUFFLEdBQUcsR0FBR1ksS0FBS0MsRUFBRSxHQUFHLEdBQUc7UUFDdkRoQixJQUFJaUIsSUFBSTtRQUNSakIsSUFBSWtCLFNBQVM7SUFDZjtJQUNBLHFCQUNFLDhEQUFDQztRQUFJQyxXQUFVOzswQkFDYiw4REFBQzlCLHFEQUFZQTtnQkFBQ0UsT0FBT0E7Z0JBQU82QixVQUFVLENBQUM3QixRQUFRQyxTQUFTRCxNQUFNOEIsR0FBRzs7Ozs7OzBCQUNqRSw4REFBQ0g7Z0JBQUlDLFdBQVU7MEJBQ2IsNEVBQUNHO29CQUFPSCxXQUFVO29CQUEyQ0ksU0FBUzVCOzhCQUFPOzs7Ozs7Ozs7OzswQkFFL0UsOERBQUM2QjtnQkFDQzlCLGFBQWFBO2dCQUNiK0IsS0FBS2hDO2dCQUNMaUMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUlIsV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBMUNNN0I7O1FBRXFDRixtREFBT0E7OztBQTBDbEQsK0RBQWVFLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQge3VzZURyYXd9IGZyb20gXCIuLi9ob29rcy91c2VEcmF3XCI7XG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0W2NvbG9yLHNldENvbG9yXSA9IHVzZVN0YXRlKCcjMDAwJylcbiAgY29uc3QgeyBjYW52YXNSZWYsIG9uTW91c2VEb3duLCBjbGVhcn0gPSB1c2VEcmF3KGRyYXdMaW5lKTtcblxuICBmdW5jdGlvbiBkcmF3TGluZSh7cHJldlBvaW50LCBjdXJyZW50UG9pbnQsIGN0eH0gOiBEcmF3KSB7XG4gICAgY29uc3Qge3g6IGN1cnJYLCB5OiBjdXJyWX0gPSBjdXJyZW50UG9pbnQ7XG5cbiAgICBjb25zdCBsaW5lQ29sb3IgPSBjb2xvcjtcbiAgICBjb25zdCBsaW5lV2lkdGggPSA1XG5cbiAgICBsZXQgc3RhcnRQb2ludCA9IHByZXZQb2ludCA/PyBjdXJyZW50UG9pbnQ7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmxpbmVXaWR0aCA9IGxpbmVXaWR0aDtcbiAgICBjdHguc3Ryb2tlU3R5bGUgPSBsaW5lQ29sb3I7XG5cbiAgICBjdHgubW92ZVRvKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55KTtcbiAgICBjdHgubGluZVRvKGN1cnJYLCBjdXJyWSk7XG4gICAgY3R4LnN0cm9rZSgpO1xuXG4gICAgY3R4LmZpbGxTdHlsZSA9IGxpbmVDb2xvcjtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBjdHguYXJjKHN0YXJ0UG9pbnQueCwgc3RhcnRQb2ludC55LCAyLCAwLCBNYXRoLlBJICogMiwgdHJ1ZSk7XG4gICAgY3R4LmZpbGwoKTtcbiAgICBjdHguY2xvc2VQYXRoKCk7XG4gIH1cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInctc2NyZWVuIGgtc2NyZWVuIGJnLXdoaXRlIGZsZXgganVzdGlmeS1jZW50ZXIgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8Q2hyb21lUGlja2VyIGNvbG9yPXtjb2xvcn0gb25DaGFuZ2U9eyhjb2xvcik9PnNldENvbG9yKGNvbG9yLmhleCl9IC8+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICAgIDxidXR0b24gY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLW1kIHB4LTIgcHktMVwiIG9uQ2xpY2s9e2NsZWFyfT5DbGVhcjwvYnV0dG9uPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPXs3NTB9XG4gICAgICAgIGhlaWdodD17NzUwfVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsidXNlU3RhdGUiLCJ1c2VEcmF3IiwiQ2hyb21lUGlja2VyIiwicGFnZSIsImNvbG9yIiwic2V0Q29sb3IiLCJjYW52YXNSZWYiLCJvbk1vdXNlRG93biIsImNsZWFyIiwiZHJhd0xpbmUiLCJwcmV2UG9pbnQiLCJjdXJyZW50UG9pbnQiLCJjdHgiLCJ4IiwiY3VyclgiLCJ5IiwiY3VyclkiLCJsaW5lQ29sb3IiLCJsaW5lV2lkdGgiLCJzdGFydFBvaW50IiwiYmVnaW5QYXRoIiwic3Ryb2tlU3R5bGUiLCJtb3ZlVG8iLCJsaW5lVG8iLCJzdHJva2UiLCJmaWxsU3R5bGUiLCJhcmMiLCJNYXRoIiwiUEkiLCJmaWxsIiwiY2xvc2VQYXRoIiwiZGl2IiwiY2xhc3NOYW1lIiwib25DaGFuZ2UiLCJoZXgiLCJidXR0b24iLCJvbkNsaWNrIiwiY2FudmFzIiwicmVmIiwid2lkdGgiLCJoZWlnaHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});