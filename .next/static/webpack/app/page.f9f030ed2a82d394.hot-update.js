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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../hooks/useDraw */ \"(app-pages-browser)/./hooks/useDraw.ts\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\nconst page = ()=>{\n    _s();\n    const { canvasRef, onMouseDown } = (0,_hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw)(drawLine);\n    function drawLine(param) {\n        let { prevPoint, currentPoint, ctx } = param;\n        const { x: currX, y: currY } = currentPoint;\n        const lineColor = \"#000\";\n        const lineWidth = 5;\n        let startPoint = prevPoint !== null && prevPoint !== void 0 ? prevPoint : currentPoint;\n        ctx.beginPath();\n        ctx.lineWidth = lineWidth;\n        ctx.strokeStyle = lineColor;\n        ctx.moveTo(startPoint.x, startPoint.y);\n        ctx.lineTo(currX, currY);\n        ctx.stroke();\n        ctx.fillStyle = lineColor;\n        ctx.beginPath();\n        ctx.arc(startPoint.x, startPoint.y, 2, 0, Math.PI * 2, true);\n        ctx.fill();\n        ctx.closePath();\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"w-screen h-screen bg-white flex justify-center items-center\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            onMouseDown: onMouseDown,\n            ref: canvasRef,\n            width: 750,\n            height: 750,\n            className: \"border border-black rounded-md\"\n        }, void 0, false, {\n            fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n            lineNumber: 34,\n            columnNumber: 7\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\Users\\\\Chintan\\\\Desktop\\\\draw\\\\doodler\\\\app\\\\page.tsx\",\n        lineNumber: 33,\n        columnNumber: 5\n    }, undefined);\n};\n_s(page, \"pqBc+jcSEgFwfJP9VUZpcRclagg=\", false, function() {\n    return [\n        _hooks_useDraw__WEBPACK_IMPORTED_MODULE_1__.useDraw\n    ];\n});\n/* harmony default export */ __webpack_exports__[\"default\"] = (page);\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9wYWdlLnRzeCIsIm1hcHBpbmdzIjoiOzs7OztBQUV5QztBQUd6QyxNQUFNQyxPQUFPOztJQUNYLE1BQU0sRUFBRUMsU0FBUyxFQUFFQyxXQUFXLEVBQUUsR0FBR0gsdURBQU9BLENBQUNJO0lBRTNDLFNBQVNBLFNBQVMsS0FBcUM7WUFBckMsRUFBQ0MsU0FBUyxFQUFFQyxZQUFZLEVBQUVDLEdBQUcsRUFBUSxHQUFyQztRQUNoQixNQUFNLEVBQUNDLEdBQUdDLEtBQUssRUFBRUMsR0FBR0MsS0FBSyxFQUFDLEdBQUdMO1FBRTdCLE1BQU1NLFlBQVk7UUFDbEIsTUFBTUMsWUFBWTtRQUVsQixJQUFJQyxhQUFhVCxzQkFBQUEsdUJBQUFBLFlBQWFDO1FBQzlCQyxJQUFJUSxTQUFTO1FBRWJSLElBQUlNLFNBQVMsR0FBR0E7UUFDaEJOLElBQUlTLFdBQVcsR0FBR0o7UUFFbEJMLElBQUlVLE1BQU0sQ0FBQ0gsV0FBV04sQ0FBQyxFQUFFTSxXQUFXSixDQUFDO1FBQ3JDSCxJQUFJVyxNQUFNLENBQUNULE9BQU9FO1FBQ2xCSixJQUFJWSxNQUFNO1FBRVZaLElBQUlhLFNBQVMsR0FBR1I7UUFDaEJMLElBQUlRLFNBQVM7UUFFYlIsSUFBSWMsR0FBRyxDQUFDUCxXQUFXTixDQUFDLEVBQUVNLFdBQVdKLENBQUMsRUFBRSxHQUFHLEdBQUdZLEtBQUtDLEVBQUUsR0FBRyxHQUFHO1FBQ3ZEaEIsSUFBSWlCLElBQUk7UUFDUmpCLElBQUlrQixTQUFTO0lBQ2Y7SUFDQSxxQkFDRSw4REFBQ0M7UUFBSUMsV0FBVTtrQkFDYiw0RUFBQ0M7WUFDQ3pCLGFBQWFBO1lBQ2IwQixLQUFLM0I7WUFDTDRCLE9BQU87WUFDUEMsUUFBUTtZQUNSSixXQUFVOzs7Ozs7Ozs7OztBQUlsQjtHQXJDTTFCOztRQUMrQkQsbURBQU9BOzs7QUFzQzVDLCtEQUFlQyxJQUFJQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9wYWdlLnRzeD83NjAzIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQge3VzZURyYXd9IGZyb20gXCIuLi9ob29rcy91c2VEcmF3XCI7XG5pbXBvcnQgeyBDaHJvbWVQaWNrZXIgfSBmcm9tICdyZWFjdC1jb2xvcic7XG5cbmNvbnN0IHBhZ2UgPSAoKSA9PiB7XG4gIGNvbnN0IHsgY2FudmFzUmVmLCBvbk1vdXNlRG93biB9ID0gdXNlRHJhdyhkcmF3TGluZSk7XG5cbiAgZnVuY3Rpb24gZHJhd0xpbmUoe3ByZXZQb2ludCwgY3VycmVudFBvaW50LCBjdHh9IDogRHJhdykge1xuICAgIGNvbnN0IHt4OiBjdXJyWCwgeTogY3Vycll9ID0gY3VycmVudFBvaW50O1xuXG4gICAgY29uc3QgbGluZUNvbG9yID0gJyMwMDAnXG4gICAgY29uc3QgbGluZVdpZHRoID0gNVxuXG4gICAgbGV0IHN0YXJ0UG9pbnQgPSBwcmV2UG9pbnQgPz8gY3VycmVudFBvaW50O1xuICAgIGN0eC5iZWdpblBhdGgoKTtcblxuICAgIGN0eC5saW5lV2lkdGggPSBsaW5lV2lkdGg7XG4gICAgY3R4LnN0cm9rZVN0eWxlID0gbGluZUNvbG9yO1xuXG4gICAgY3R4Lm1vdmVUbyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSk7XG4gICAgY3R4LmxpbmVUbyhjdXJyWCwgY3VyclkpO1xuICAgIGN0eC5zdHJva2UoKTtcblxuICAgIGN0eC5maWxsU3R5bGUgPSBsaW5lQ29sb3I7XG4gICAgY3R4LmJlZ2luUGF0aCgpO1xuXG4gICAgY3R4LmFyYyhzdGFydFBvaW50LngsIHN0YXJ0UG9pbnQueSwgMiwgMCwgTWF0aC5QSSAqIDIsIHRydWUpO1xuICAgIGN0eC5maWxsKCk7XG4gICAgY3R4LmNsb3NlUGF0aCgpO1xuICB9XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJ3LXNjcmVlbiBoLXNjcmVlbiBiZy13aGl0ZSBmbGV4IGp1c3RpZnktY2VudGVyIGl0ZW1zLWNlbnRlclwiPlxuICAgICAgPGNhbnZhc1xuICAgICAgICBvbk1vdXNlRG93bj17b25Nb3VzZURvd259XG4gICAgICAgIHJlZj17Y2FudmFzUmVmfVxuICAgICAgICB3aWR0aD17NzUwfVxuICAgICAgICBoZWlnaHQ9ezc1MH1cbiAgICAgICAgY2xhc3NOYW1lPVwiYm9yZGVyIGJvcmRlci1ibGFjayByb3VuZGVkLW1kXCJcbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBwYWdlO1xuIl0sIm5hbWVzIjpbInVzZURyYXciLCJwYWdlIiwiY2FudmFzUmVmIiwib25Nb3VzZURvd24iLCJkcmF3TGluZSIsInByZXZQb2ludCIsImN1cnJlbnRQb2ludCIsImN0eCIsIngiLCJjdXJyWCIsInkiLCJjdXJyWSIsImxpbmVDb2xvciIsImxpbmVXaWR0aCIsInN0YXJ0UG9pbnQiLCJiZWdpblBhdGgiLCJzdHJva2VTdHlsZSIsIm1vdmVUbyIsImxpbmVUbyIsInN0cm9rZSIsImZpbGxTdHlsZSIsImFyYyIsIk1hdGgiLCJQSSIsImZpbGwiLCJjbG9zZVBhdGgiLCJkaXYiLCJjbGFzc05hbWUiLCJjYW52YXMiLCJyZWYiLCJ3aWR0aCIsImhlaWdodCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/page.tsx\n"));

/***/ })

});