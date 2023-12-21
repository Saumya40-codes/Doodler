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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./hooks/useDraw.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst page = ()=>{\n    _s();\n    const [color, setColor] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(\"#000\");\n    const { canvasRef, onMouseDown, clear } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw)(drawLine);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        const colorPicker = document.getElementById(\"color-picker\");\n        colorPicker.addEventListener(\"change\", (e)=>{\n            setColor(colorPicker.value);\n        });\n    }, []);\n    function drawLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        const { x: currX, y: currY } = currentPoint;\n        const lineColor = color;\n        const lineWidth = 5;\n        let startPoint = prevPoint !== null && prevPoint !== void 0 ? prevPoint : currentPoint;\n        ctx.beginPath();\n        ctx.lineWidth = lineWidth;\n        ctx.strokeStyle = lineColor;\n        ctx.moveTo(startPoint.x, startPoint.y);\n        ctx.lineTo(currX, currY);\n        ctx.stroke();\n        ctx.fillStyle = lineColor;\n        ctx.beginPath();\n        ctx.arc(startPoint.x, startPoint.y, 2, 0, Math.PI * 2, true);\n        ctx.fill();\n        ctx.closePath();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block  flex-col items-center\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                    className: \"border border-black rounded-md px-2 py-1\",\n                    onClick: clear,\n                    children: \"Clear\"\n                }, void 0, false, {\n                    fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                    lineNumber: 43,\n                    columnNumber: 9\n                }, undefined)\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"block  flex-col items-center\",\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"label\", {\n                        htmlFor: \"color-picker\",\n                        children: \"Select a color:\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                        lineNumber: 46,\n                        columnNumber: 7\n                    }, undefined),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        id: \"color-picker\",\n                        type: \"color\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                        lineNumber: 47,\n                        columnNumber: 7\n                    }, undefined)\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 45,\n                columnNumber: 7\n            }, undefined),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n                onMouseDown: onMouseDown,\n                ref: canvasRef,\n                width: 750,\n                height: 750,\n                className: \"border border-black rounded-md\"\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n                lineNumber: 49,\n                columnNumber: 7\n            }, undefined)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n        lineNumber: 41,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"K/T294aTcKF5Zt4AvlQFbw8feAU=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_2__.useDraw\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7Ozs7O0FBRTRDO0FBQ0g7QUFFekMsTUFBTUcsT0FBTzs7SUFDWCxNQUFLLENBQUNDLE9BQU1DLFNBQVMsR0FBR0osK0NBQVFBLENBQUM7SUFDakMsTUFBTSxFQUFFSyxTQUFTLEVBQUVDLFdBQVcsRUFBRUMsS0FBSyxFQUFDLEdBQUdOLHVEQUFPQSxDQUFDTztJQUVqRFQsZ0RBQVNBLENBQUM7UUFDUixNQUFNVSxjQUFjQyxTQUFTQyxjQUFjLENBQUM7UUFDNUNGLFlBQVlHLGdCQUFnQixDQUFDLFVBQVUsQ0FBQ0M7WUFDcENULFNBQVNLLFlBQVlLLEtBQUs7UUFDOUI7SUFDRixHQUFHLEVBQUU7SUFFTCxTQUFTTixTQUFTLEtBQXFDO1lBQXJDLEVBQUNPLFNBQVMsRUFBRUMsWUFBWSxFQUFFQyxHQUFHLEVBQVEsR0FBckM7UUFDaEIsTUFBTSxFQUFDQyxHQUFHQyxLQUFLLEVBQUVDLEdBQUdDLEtBQUssRUFBQyxHQUFHTDtRQUU3QixNQUFNTSxZQUFZbkI7UUFDbEIsTUFBTW9CLFlBQVk7UUFFbEIsSUFBSUMsYUFBYVQsc0JBQUFBLHVCQUFBQSxZQUFhQztRQUM5QkMsSUFBSVEsU0FBUztRQUViUixJQUFJTSxTQUFTLEdBQUdBO1FBQ2hCTixJQUFJUyxXQUFXLEdBQUdKO1FBRWxCTCxJQUFJVSxNQUFNLENBQUNILFdBQVdOLENBQUMsRUFBRU0sV0FBV0osQ0FBQztRQUNyQ0gsSUFBSVcsTUFBTSxDQUFDVCxPQUFPRTtRQUNsQkosSUFBSVksTUFBTTtRQUVWWixJQUFJYSxTQUFTLEdBQUdSO1FBQ2hCTCxJQUFJUSxTQUFTO1FBRWJSLElBQUljLEdBQUcsQ0FBQ1AsV0FBV04sQ0FBQyxFQUFFTSxXQUFXSixDQUFDLEVBQUUsR0FBRyxHQUFHWSxLQUFLQyxFQUFFLEdBQUcsR0FBRztRQUN2RGhCLElBQUlpQixJQUFJO1FBQ1JqQixJQUFJa0IsU0FBUztJQUNmO0lBQ0EscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7OzBCQUNiLDhEQUFDRDtnQkFBSUMsV0FBVTswQkFDYiw0RUFBQ0M7b0JBQU9ELFdBQVU7b0JBQTJDRSxTQUFTaEM7OEJBQU87Ozs7Ozs7Ozs7OzBCQUUvRSw4REFBQzZCO2dCQUFJQyxXQUFVOztrQ0FDZiw4REFBQ0c7d0JBQU1DLFNBQVE7a0NBQWU7Ozs7OztrQ0FDOUIsOERBQUNDO3dCQUFNQyxJQUFHO3dCQUFlQyxNQUFLOzs7Ozs7Ozs7Ozs7MEJBRTlCLDhEQUFDQztnQkFDQ3ZDLGFBQWFBO2dCQUNid0MsS0FBS3pDO2dCQUNMMEMsT0FBTztnQkFDUEMsUUFBUTtnQkFDUlgsV0FBVTs7Ozs7Ozs7Ozs7O0FBSWxCO0dBcERNbkM7O1FBRXFDRCxtREFBT0E7OztBQW9EbEQsK0RBQWVDLElBQUlBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL3BhZ2UudHN4Pzc2MDMiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnXG5cbmltcG9ydCB7IHVzZUVmZmVjdCwgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7dXNlRHJhd30gZnJvbSBcIi4uL2hvb2tzL3VzZURyYXdcIjtcblxuY29uc3QgcGFnZSA9ICgpID0+IHtcbiAgY29uc3RbY29sb3Isc2V0Q29sb3JdID0gdXNlU3RhdGUoJyMwMDAnKVxuICBjb25zdCB7IGNhbnZhc1JlZiwgb25Nb3VzZURvd24sIGNsZWFyfSA9IHVzZURyYXcoZHJhd0xpbmUpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgY29uc3QgY29sb3JQaWNrZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY29sb3ItcGlja2VyJykgYXMgSFRNTElucHV0RWxlbWVudDtcbiAgICBjb2xvclBpY2tlci5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoZSkgPT4ge1xuICAgICAgICBzZXRDb2xvcihjb2xvclBpY2tlci52YWx1ZSk7XG4gICAgfSlcbiAgfSwgW10pO1xuXG4gIGZ1bmN0aW9uIGRyYXdMaW5lKHtwcmV2UG9pbnQsIGN1cnJlbnRQb2ludCwgY3R4fSA6IERyYXcpIHtcbiAgICBjb25zdCB7eDogY3VyclgsIHk6IGN1cnJZfSA9IGN1cnJlbnRQb2ludDtcblxuICAgIGNvbnN0IGxpbmVDb2xvciA9IGNvbG9yO1xuICAgIGNvbnN0IGxpbmVXaWR0aCA9IDVcblxuICAgIGxldCBzdGFydFBvaW50ID0gcHJldlBvaW50ID8/IGN1cnJlbnRQb2ludDtcbiAgICBjdHguYmVnaW5QYXRoKCk7XG5cbiAgICBjdHgubGluZVdpZHRoID0gbGluZVdpZHRoO1xuICAgIGN0eC5zdHJva2VTdHlsZSA9IGxpbmVDb2xvcjtcblxuICAgIGN0eC5tb3ZlVG8oc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnkpO1xuICAgIGN0eC5saW5lVG8oY3VyclgsIGN1cnJZKTtcbiAgICBjdHguc3Ryb2tlKCk7XG5cbiAgICBjdHguZmlsbFN0eWxlID0gbGluZUNvbG9yO1xuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5hcmMoc3RhcnRQb2ludC54LCBzdGFydFBvaW50LnksIDIsIDAsIE1hdGguUEkgKiAyLCB0cnVlKTtcbiAgICBjdHguZmlsbCgpO1xuICAgIGN0eC5jbG9zZVBhdGgoKTtcbiAgfVxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPVwidy1zY3JlZW4gaC1zY3JlZW4gYmctd2hpdGUgZmxleCBqdXN0aWZ5LWNlbnRlciBpdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvY2sgIGZsZXgtY29sIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgICA8YnV0dG9uIGNsYXNzTmFtZT1cImJvcmRlciBib3JkZXItYmxhY2sgcm91bmRlZC1tZCBweC0yIHB5LTFcIiBvbkNsaWNrPXtjbGVhcn0+Q2xlYXI8L2J1dHRvbj5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9jayAgZmxleC1jb2wgaXRlbXMtY2VudGVyXCI+XG4gICAgICA8bGFiZWwgaHRtbEZvcj1cImNvbG9yLXBpY2tlclwiPlNlbGVjdCBhIGNvbG9yOjwvbGFiZWw+XG4gICAgICA8aW5wdXQgaWQ9XCJjb2xvci1waWNrZXJcIiB0eXBlPVwiY29sb3JcIiAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8Y2FudmFzXG4gICAgICAgIG9uTW91c2VEb3duPXtvbk1vdXNlRG93bn1cbiAgICAgICAgcmVmPXtjYW52YXNSZWZ9XG4gICAgICAgIHdpZHRoPXs3NTB9XG4gICAgICAgIGhlaWdodD17NzUwfVxuICAgICAgICBjbGFzc05hbWU9XCJib3JkZXIgYm9yZGVyLWJsYWNrIHJvdW5kZWQtbWRcIlxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHBhZ2U7XG4iXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VEcmF3IiwicGFnZSIsImNvbG9yIiwic2V0Q29sb3IiLCJjYW52YXNSZWYiLCJvbk1vdXNlRG93biIsImNsZWFyIiwiZHJhd0xpbmUiLCJjb2xvclBpY2tlciIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJhZGRFdmVudExpc3RlbmVyIiwiZSIsInZhbHVlIiwicHJldlBvaW50IiwiY3VycmVudFBvaW50IiwiY3R4IiwieCIsImN1cnJYIiwieSIsImN1cnJZIiwibGluZUNvbG9yIiwibGluZVdpZHRoIiwic3RhcnRQb2ludCIsImJlZ2luUGF0aCIsInN0cm9rZVN0eWxlIiwibW92ZVRvIiwibGluZVRvIiwic3Ryb2tlIiwiZmlsbFN0eWxlIiwiYXJjIiwiTWF0aCIsIlBJIiwiZmlsbCIsImNsb3NlUGF0aCIsImRpdiIsImNsYXNzTmFtZSIsImJ1dHRvbiIsIm9uQ2xpY2siLCJsYWJlbCIsImh0bWxGb3IiLCJpbnB1dCIsImlkIiwidHlwZSIsImNhbnZhcyIsInJlZiIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});