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

/***/ "(app-pages-browser)/./hooks/useDraw.ts":
/*!**************************!*\
  !*** ./hooks/useDraw.ts ***!
  \**************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   useDraw: function() { return /* binding */ useDraw; }\n/* harmony export */ });\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* __next_internal_client_entry_do_not_use__ useDraw auto */ \nconst useDraw = (onDraw)=>{\n    const [mouseDown, setMouseDown] = (0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(false);\n    const canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const prevPoint = (0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);\n    const onMouseDown = ()=>setMouseDown(true);\n    (0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)(()=>{\n        var _canvasRef_current;\n        const handler = (e)=>{\n            var _canvasRef_current;\n            if (!mouseDown) return;\n            const currentPoint = computePointInCanvas(e);\n            const ctx = (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.getContext(\"2d\");\n            if (!ctx || !currentPoint) return;\n            onDraw({\n                currentPoint,\n                prevPoint: prevPoint.current,\n                ctx\n            });\n            prevPoint.current = currentPoint;\n        };\n        const computePointInCanvas = (e)=>{\n            const canvas = canvasRef.current;\n            if (!canvas) return;\n            const rect = canvas.getBoundingClientRect();\n            // relative mouse position\n            const x = e.clientX - rect.left;\n            const y = e.clientY - rect.top;\n            return {\n                x,\n                y\n            };\n        };\n        const mouseUpHandler = ()=>{\n            setMouseDown(false);\n            prevPoint.current = null;\n        };\n        (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.addEventListener(\"mousemove\", handler);\n        window.addEventListener(\"mouseup\", mouseUpHandler);\n        return ()=>{\n            var _canvasRef_current;\n            (_canvasRef_current = canvasRef.current) === null || _canvasRef_current === void 0 ? void 0 : _canvasRef_current.removeEventListener(\"mousemove\", handler);\n            window.removeEventListener(\"mouseup\", ()=>setMouseDown(false));\n        };\n    }, [\n        onDraw,\n        mouseDown\n    ]);\n    return {\n        canvasRef,\n        onMouseDown\n    };\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2hvb2tzL3VzZURyYXcudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OzZEQUVvRDtBQUU3QyxNQUFNRyxVQUFVLENBQUNDO0lBQ3RCLE1BQUssQ0FBQ0MsV0FBVUMsYUFBYSxHQUFHSiwrQ0FBUUEsQ0FBVTtJQUVsRCxNQUFNSyxZQUFZTiw2Q0FBTUEsQ0FBb0I7SUFDNUMsTUFBTU8sWUFBWVAsNkNBQU1BLENBQWU7SUFFdkMsTUFBTVEsY0FBYyxJQUFNSCxhQUFhO0lBRXZDTixnREFBU0EsQ0FBQztZQWlDUk87UUFoQ0EsTUFBTUcsVUFBVSxDQUFDQztnQkFJSEo7WUFIWixJQUFHLENBQUNGLFdBQVc7WUFDZixNQUFNTyxlQUFlQyxxQkFBcUJGO1lBRTFDLE1BQU1HLE9BQU1QLHFCQUFBQSxVQUFVUSxPQUFPLGNBQWpCUix5Q0FBQUEsbUJBQW1CUyxVQUFVLENBQUM7WUFFMUMsSUFBRyxDQUFDRixPQUFPLENBQUNGLGNBQWM7WUFFMUJSLE9BQU87Z0JBQUVRO2dCQUFjSixXQUFXQSxVQUFVTyxPQUFPO2dCQUFFRDtZQUFJO1lBQ3pETixVQUFVTyxPQUFPLEdBQUdIO1FBQ3RCO1FBRUEsTUFBTUMsdUJBQXVCLENBQUNGO1lBQzFCLE1BQU1NLFNBQVNWLFVBQVVRLE9BQU87WUFFaEMsSUFBRyxDQUFDRSxRQUFRO1lBRVosTUFBTUMsT0FBT0QsT0FBT0UscUJBQXFCO1lBR3pDLDBCQUEwQjtZQUMxQixNQUFNQyxJQUFJVCxFQUFFVSxPQUFPLEdBQUdILEtBQUtJLElBQUk7WUFDL0IsTUFBTUMsSUFBSVosRUFBRWEsT0FBTyxHQUFHTixLQUFLTyxHQUFHO1lBRTlCLE9BQU87Z0JBQUVMO2dCQUFHRztZQUFFO1FBQ2xCO1FBRUEsTUFBTUcsaUJBQWlCO1lBQ25CcEIsYUFBYTtZQUNiRSxVQUFVTyxPQUFPLEdBQUc7UUFDeEI7U0FFQVIscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLHlDQUFBQSxtQkFBbUJvQixnQkFBZ0IsQ0FBQyxhQUFhakI7UUFDakRrQixPQUFPRCxnQkFBZ0IsQ0FBQyxXQUFXRDtRQUVuQyxPQUFPO2dCQUNIbkI7YUFBQUEscUJBQUFBLFVBQVVRLE9BQU8sY0FBakJSLHlDQUFBQSxtQkFBbUJzQixtQkFBbUIsQ0FBQyxhQUFhbkI7WUFDcERrQixPQUFPQyxtQkFBbUIsQ0FBQyxXQUFXLElBQU12QixhQUFhO1FBQzdEO0lBQ0YsR0FBRztRQUFDRjtRQUFRQztLQUFVO0lBRXRCLE9BQU87UUFBRUU7UUFBV0U7SUFBWTtBQUNsQyxFQUFFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2hvb2tzL3VzZURyYXcudHM/NDE2NCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIlxyXG5cclxuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VSZWYsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcblxyXG5leHBvcnQgY29uc3QgdXNlRHJhdyA9IChvbkRyYXc6KHtjdXJyZW50UG9pbnQsIHByZXZQb2ludCwgY3R4fTogRHJhdykgPT4gdm9pZCkgPT4ge1xyXG4gIGNvbnN0W21vdXNlRG93bixzZXRNb3VzZURvd25dID0gdXNlU3RhdGU8Ym9vbGVhbj4oZmFsc2UpO1xyXG5cclxuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWY8SFRNTENhbnZhc0VsZW1lbnQ+KG51bGwpO1xyXG4gIGNvbnN0IHByZXZQb2ludCA9IHVzZVJlZjxQb2ludCB8IG51bGw+KG51bGwpO1xyXG5cclxuICBjb25zdCBvbk1vdXNlRG93biA9ICgpID0+IHNldE1vdXNlRG93bih0cnVlKTtcclxuXHJcbiAgdXNlRWZmZWN0KCgpID0+IHtcclxuICAgIGNvbnN0IGhhbmRsZXIgPSAoZTogTW91c2VFdmVudCkgPT4ge1xyXG4gICAgICBpZighbW91c2VEb3duKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IGN1cnJlbnRQb2ludCA9IGNvbXB1dGVQb2ludEluQ2FudmFzKGUpO1xyXG5cclxuICAgICAgY29uc3QgY3R4ID0gY2FudmFzUmVmLmN1cnJlbnQ/LmdldENvbnRleHQoXCIyZFwiKTtcclxuXHJcbiAgICAgIGlmKCFjdHggfHwgIWN1cnJlbnRQb2ludCkgcmV0dXJuO1xyXG5cclxuICAgICAgb25EcmF3KHsgY3VycmVudFBvaW50LCBwcmV2UG9pbnQ6IHByZXZQb2ludC5jdXJyZW50LCBjdHggfSk7XHJcbiAgICAgIHByZXZQb2ludC5jdXJyZW50ID0gY3VycmVudFBvaW50O1xyXG4gICAgfTtcclxuXHJcbiAgICBjb25zdCBjb21wdXRlUG9pbnRJbkNhbnZhcyA9IChlOiBNb3VzZUV2ZW50KSA9PntcclxuICAgICAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcclxuXHJcbiAgICAgICAgaWYoIWNhbnZhcykgcmV0dXJuO1xyXG5cclxuICAgICAgICBjb25zdCByZWN0ID0gY2FudmFzLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xyXG5cclxuXHJcbiAgICAgICAgLy8gcmVsYXRpdmUgbW91c2UgcG9zaXRpb25cclxuICAgICAgICBjb25zdCB4ID0gZS5jbGllbnRYIC0gcmVjdC5sZWZ0O1xyXG4gICAgICAgIGNvbnN0IHkgPSBlLmNsaWVudFkgLSByZWN0LnRvcDtcclxuXHJcbiAgICAgICAgcmV0dXJuIHsgeCwgeSB9O1xyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IG1vdXNlVXBIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vdXNlRG93bihmYWxzZSk7XHJcbiAgICAgICAgcHJldlBvaW50LmN1cnJlbnQgPSBudWxsO1xyXG4gICAgfVxyXG5cclxuICAgIGNhbnZhc1JlZi5jdXJyZW50Py5hZGRFdmVudExpc3RlbmVyKCdtb3VzZW1vdmUnLCBoYW5kbGVyKTtcclxuICAgIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgbW91c2VVcEhhbmRsZXIpO1xyXG5cclxuICAgIHJldHVybiAoKSA9PiB7XHJcbiAgICAgICAgY2FudmFzUmVmLmN1cnJlbnQ/LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbW92ZScsIGhhbmRsZXIpO1xyXG4gICAgICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZXVwJywgKCkgPT4gc2V0TW91c2VEb3duKGZhbHNlKSk7XHJcbiAgICB9XHJcbiAgfSwgW29uRHJhdywgbW91c2VEb3duXSk7XHJcblxyXG4gIHJldHVybiB7IGNhbnZhc1JlZiwgb25Nb3VzZURvd24gfTtcclxufTsiXSwibmFtZXMiOlsidXNlRWZmZWN0IiwidXNlUmVmIiwidXNlU3RhdGUiLCJ1c2VEcmF3Iiwib25EcmF3IiwibW91c2VEb3duIiwic2V0TW91c2VEb3duIiwiY2FudmFzUmVmIiwicHJldlBvaW50Iiwib25Nb3VzZURvd24iLCJoYW5kbGVyIiwiZSIsImN1cnJlbnRQb2ludCIsImNvbXB1dGVQb2ludEluQ2FudmFzIiwiY3R4IiwiY3VycmVudCIsImdldENvbnRleHQiLCJjYW52YXMiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwieCIsImNsaWVudFgiLCJsZWZ0IiwieSIsImNsaWVudFkiLCJ0b3AiLCJtb3VzZVVwSGFuZGxlciIsImFkZEV2ZW50TGlzdGVuZXIiLCJ3aW5kb3ciLCJyZW1vdmVFdmVudExpc3RlbmVyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./hooks/useDraw.ts\n"));

/***/ })

});