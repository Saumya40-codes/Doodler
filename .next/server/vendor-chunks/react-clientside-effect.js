"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/react-clientside-effect";
exports.ids = ["vendor-chunks/react-clientside-effect"];
exports.modules = {

/***/ "(ssr)/../node_modules/react-clientside-effect/lib/index.es.js":
/*!***************************************************************!*\
  !*** ../node_modules/react-clientside-effect/lib/index.es.js ***!
  \***************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ \"(ssr)/../node_modules/@babel/runtime/helpers/esm/inheritsLoose.js\");\n/* harmony import */ var _babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/defineProperty */ \"(ssr)/../node_modules/@babel/runtime/helpers/esm/defineProperty.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"(ssr)/./node_modules/next/dist/server/future/route-modules/app-page/vendored/ssr/react.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n\n\n\nfunction withSideEffect(reducePropsToState, handleStateChangeOnClient) {\n    if (true) {\n        if (typeof reducePropsToState !== \"function\") {\n            throw new Error(\"Expected reducePropsToState to be a function.\");\n        }\n        if (typeof handleStateChangeOnClient !== \"function\") {\n            throw new Error(\"Expected handleStateChangeOnClient to be a function.\");\n        }\n    }\n    function getDisplayName(WrappedComponent) {\n        return WrappedComponent.displayName || WrappedComponent.name || \"Component\";\n    }\n    return function wrap(WrappedComponent) {\n        if (true) {\n            if (typeof WrappedComponent !== \"function\") {\n                throw new Error(\"Expected WrappedComponent to be a React component.\");\n            }\n        }\n        var mountedInstances = [];\n        var state;\n        function emitChange() {\n            state = reducePropsToState(mountedInstances.map(function(instance) {\n                return instance.props;\n            }));\n            handleStateChangeOnClient(state);\n        }\n        var SideEffect = /*#__PURE__*/ function(_PureComponent) {\n            (0,_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(SideEffect, _PureComponent);\n            function SideEffect() {\n                return _PureComponent.apply(this, arguments) || this;\n            }\n            // Try to use displayName of wrapped component\n            SideEffect.peek = function peek() {\n                return state;\n            };\n            var _proto = SideEffect.prototype;\n            _proto.componentDidMount = function componentDidMount() {\n                mountedInstances.push(this);\n                emitChange();\n            };\n            _proto.componentDidUpdate = function componentDidUpdate() {\n                emitChange();\n            };\n            _proto.componentWillUnmount = function componentWillUnmount() {\n                var index = mountedInstances.indexOf(this);\n                mountedInstances.splice(index, 1);\n                emitChange();\n            };\n            _proto.render = function render() {\n                return /*#__PURE__*/ react__WEBPACK_IMPORTED_MODULE_2___default().createElement(WrappedComponent, this.props);\n            };\n            return SideEffect;\n        }(react__WEBPACK_IMPORTED_MODULE_2__.PureComponent);\n        (0,_babel_runtime_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(SideEffect, \"displayName\", \"SideEffect(\" + getDisplayName(WrappedComponent) + \")\");\n        return SideEffect;\n    };\n}\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (withSideEffect);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL3JlYWN0LWNsaWVudHNpZGUtZWZmZWN0L2xpYi9pbmRleC5lcy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7OztBQUFzRTtBQUNFO0FBQzNCO0FBRTdDLFNBQVNJLGVBQWVDLGtCQUFrQixFQUFFQyx5QkFBeUI7SUFDbkUsSUFBSUMsSUFBcUMsRUFBRTtRQUN6QyxJQUFJLE9BQU9GLHVCQUF1QixZQUFZO1lBQzVDLE1BQU0sSUFBSUcsTUFBTTtRQUNsQjtRQUVBLElBQUksT0FBT0YsOEJBQThCLFlBQVk7WUFDbkQsTUFBTSxJQUFJRSxNQUFNO1FBQ2xCO0lBQ0Y7SUFFQSxTQUFTQyxlQUFlQyxnQkFBZ0I7UUFDdEMsT0FBT0EsaUJBQWlCQyxXQUFXLElBQUlELGlCQUFpQkUsSUFBSSxJQUFJO0lBQ2xFO0lBRUEsT0FBTyxTQUFTQyxLQUFLSCxnQkFBZ0I7UUFDbkMsSUFBSUgsSUFBcUMsRUFBRTtZQUN6QyxJQUFJLE9BQU9HLHFCQUFxQixZQUFZO2dCQUMxQyxNQUFNLElBQUlGLE1BQU07WUFDbEI7UUFDRjtRQUVBLElBQUlNLG1CQUFtQixFQUFFO1FBQ3pCLElBQUlDO1FBRUosU0FBU0M7WUFDUEQsUUFBUVYsbUJBQW1CUyxpQkFBaUJHLEdBQUcsQ0FBQyxTQUFVQyxRQUFRO2dCQUNoRSxPQUFPQSxTQUFTQyxLQUFLO1lBQ3ZCO1lBQ0FiLDBCQUEwQlM7UUFDNUI7UUFFQSxJQUFJSyxhQUFhLFdBQVcsR0FBRSxTQUFVQyxjQUFjO1lBQ3BEckIsb0ZBQWNBLENBQUNvQixZQUFZQztZQUUzQixTQUFTRDtnQkFDUCxPQUFPQyxlQUFlQyxLQUFLLENBQUMsSUFBSSxFQUFFQyxjQUFjLElBQUk7WUFDdEQ7WUFFQSw4Q0FBOEM7WUFDOUNILFdBQVdJLElBQUksR0FBRyxTQUFTQTtnQkFDekIsT0FBT1Q7WUFDVDtZQUVBLElBQUlVLFNBQVNMLFdBQVdNLFNBQVM7WUFFakNELE9BQU9FLGlCQUFpQixHQUFHLFNBQVNBO2dCQUNsQ2IsaUJBQWlCYyxJQUFJLENBQUMsSUFBSTtnQkFDMUJaO1lBQ0Y7WUFFQVMsT0FBT0ksa0JBQWtCLEdBQUcsU0FBU0E7Z0JBQ25DYjtZQUNGO1lBRUFTLE9BQU9LLG9CQUFvQixHQUFHLFNBQVNBO2dCQUNyQyxJQUFJQyxRQUFRakIsaUJBQWlCa0IsT0FBTyxDQUFDLElBQUk7Z0JBQ3pDbEIsaUJBQWlCbUIsTUFBTSxDQUFDRixPQUFPO2dCQUMvQmY7WUFDRjtZQUVBUyxPQUFPUyxNQUFNLEdBQUcsU0FBU0E7Z0JBQ3ZCLE9BQU8sV0FBVyxHQUFFaEMsMERBQW1CLENBQUNRLGtCQUFrQixJQUFJLENBQUNTLEtBQUs7WUFDdEU7WUFFQSxPQUFPQztRQUNULEVBQUVqQixnREFBYUE7UUFFZkYscUZBQWVBLENBQUNtQixZQUFZLGVBQWUsZ0JBQWdCWCxlQUFlQyxvQkFBb0I7UUFFOUYsT0FBT1U7SUFDVDtBQUNGO0FBRUEsaUVBQWVoQixjQUFjQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vZG9vZGxlci8uLi9ub2RlX21vZHVsZXMvcmVhY3QtY2xpZW50c2lkZS1lZmZlY3QvbGliL2luZGV4LmVzLmpzPzVjOWUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IF9pbmhlcml0c0xvb3NlIGZyb20gJ0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL2luaGVyaXRzTG9vc2UnO1xuaW1wb3J0IF9kZWZpbmVQcm9wZXJ0eSBmcm9tICdAYmFiZWwvcnVudGltZS9oZWxwZXJzL2VzbS9kZWZpbmVQcm9wZXJ0eSc7XG5pbXBvcnQgUmVhY3QsIHsgUHVyZUNvbXBvbmVudCB9IGZyb20gJ3JlYWN0JztcblxuZnVuY3Rpb24gd2l0aFNpZGVFZmZlY3QocmVkdWNlUHJvcHNUb1N0YXRlLCBoYW5kbGVTdGF0ZUNoYW5nZU9uQ2xpZW50KSB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gXCJwcm9kdWN0aW9uXCIpIHtcbiAgICBpZiAodHlwZW9mIHJlZHVjZVByb3BzVG9TdGF0ZSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdFeHBlY3RlZCByZWR1Y2VQcm9wc1RvU3RhdGUgdG8gYmUgYSBmdW5jdGlvbi4nKTtcbiAgICB9XG5cbiAgICBpZiAodHlwZW9mIGhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQgIT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudCB0byBiZSBhIGZ1bmN0aW9uLicpO1xuICAgIH1cbiAgfVxuXG4gIGZ1bmN0aW9uIGdldERpc3BsYXlOYW1lKFdyYXBwZWRDb21wb25lbnQpIHtcbiAgICByZXR1cm4gV3JhcHBlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBXcmFwcGVkQ29tcG9uZW50Lm5hbWUgfHwgJ0NvbXBvbmVudCc7XG4gIH1cblxuICByZXR1cm4gZnVuY3Rpb24gd3JhcChXcmFwcGVkQ29tcG9uZW50KSB7XG4gICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSBcInByb2R1Y3Rpb25cIikge1xuICAgICAgaWYgKHR5cGVvZiBXcmFwcGVkQ29tcG9uZW50ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRXhwZWN0ZWQgV3JhcHBlZENvbXBvbmVudCB0byBiZSBhIFJlYWN0IGNvbXBvbmVudC4nKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICB2YXIgbW91bnRlZEluc3RhbmNlcyA9IFtdO1xuICAgIHZhciBzdGF0ZTtcblxuICAgIGZ1bmN0aW9uIGVtaXRDaGFuZ2UoKSB7XG4gICAgICBzdGF0ZSA9IHJlZHVjZVByb3BzVG9TdGF0ZShtb3VudGVkSW5zdGFuY2VzLm1hcChmdW5jdGlvbiAoaW5zdGFuY2UpIHtcbiAgICAgICAgcmV0dXJuIGluc3RhbmNlLnByb3BzO1xuICAgICAgfSkpO1xuICAgICAgaGFuZGxlU3RhdGVDaGFuZ2VPbkNsaWVudChzdGF0ZSk7XG4gICAgfVxuXG4gICAgdmFyIFNpZGVFZmZlY3QgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9QdXJlQ29tcG9uZW50KSB7XG4gICAgICBfaW5oZXJpdHNMb29zZShTaWRlRWZmZWN0LCBfUHVyZUNvbXBvbmVudCk7XG5cbiAgICAgIGZ1bmN0aW9uIFNpZGVFZmZlY3QoKSB7XG4gICAgICAgIHJldHVybiBfUHVyZUNvbXBvbmVudC5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IHRoaXM7XG4gICAgICB9XG5cbiAgICAgIC8vIFRyeSB0byB1c2UgZGlzcGxheU5hbWUgb2Ygd3JhcHBlZCBjb21wb25lbnRcbiAgICAgIFNpZGVFZmZlY3QucGVlayA9IGZ1bmN0aW9uIHBlZWsoKSB7XG4gICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH07XG5cbiAgICAgIHZhciBfcHJvdG8gPSBTaWRlRWZmZWN0LnByb3RvdHlwZTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZE1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50RGlkTW91bnQoKSB7XG4gICAgICAgIG1vdW50ZWRJbnN0YW5jZXMucHVzaCh0aGlzKTtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudERpZFVwZGF0ZSA9IGZ1bmN0aW9uIGNvbXBvbmVudERpZFVwZGF0ZSgpIHtcbiAgICAgICAgZW1pdENoYW5nZSgpO1xuICAgICAgfTtcblxuICAgICAgX3Byb3RvLmNvbXBvbmVudFdpbGxVbm1vdW50ID0gZnVuY3Rpb24gY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgICAgIHZhciBpbmRleCA9IG1vdW50ZWRJbnN0YW5jZXMuaW5kZXhPZih0aGlzKTtcbiAgICAgICAgbW91bnRlZEluc3RhbmNlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICBlbWl0Q2hhbmdlKCk7XG4gICAgICB9O1xuXG4gICAgICBfcHJvdG8ucmVuZGVyID0gZnVuY3Rpb24gcmVuZGVyKCkge1xuICAgICAgICByZXR1cm4gLyojX19QVVJFX18qL1JlYWN0LmNyZWF0ZUVsZW1lbnQoV3JhcHBlZENvbXBvbmVudCwgdGhpcy5wcm9wcyk7XG4gICAgICB9O1xuXG4gICAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgICB9KFB1cmVDb21wb25lbnQpO1xuXG4gICAgX2RlZmluZVByb3BlcnR5KFNpZGVFZmZlY3QsIFwiZGlzcGxheU5hbWVcIiwgXCJTaWRlRWZmZWN0KFwiICsgZ2V0RGlzcGxheU5hbWUoV3JhcHBlZENvbXBvbmVudCkgKyBcIilcIik7XG5cbiAgICByZXR1cm4gU2lkZUVmZmVjdDtcbiAgfTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgd2l0aFNpZGVFZmZlY3Q7XG4iXSwibmFtZXMiOlsiX2luaGVyaXRzTG9vc2UiLCJfZGVmaW5lUHJvcGVydHkiLCJSZWFjdCIsIlB1cmVDb21wb25lbnQiLCJ3aXRoU2lkZUVmZmVjdCIsInJlZHVjZVByb3BzVG9TdGF0ZSIsImhhbmRsZVN0YXRlQ2hhbmdlT25DbGllbnQiLCJwcm9jZXNzIiwiRXJyb3IiLCJnZXREaXNwbGF5TmFtZSIsIldyYXBwZWRDb21wb25lbnQiLCJkaXNwbGF5TmFtZSIsIm5hbWUiLCJ3cmFwIiwibW91bnRlZEluc3RhbmNlcyIsInN0YXRlIiwiZW1pdENoYW5nZSIsIm1hcCIsImluc3RhbmNlIiwicHJvcHMiLCJTaWRlRWZmZWN0IiwiX1B1cmVDb21wb25lbnQiLCJhcHBseSIsImFyZ3VtZW50cyIsInBlZWsiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJjb21wb25lbnREaWRNb3VudCIsInB1c2giLCJjb21wb25lbnREaWRVcGRhdGUiLCJjb21wb25lbnRXaWxsVW5tb3VudCIsImluZGV4IiwiaW5kZXhPZiIsInNwbGljZSIsInJlbmRlciIsImNyZWF0ZUVsZW1lbnQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/react-clientside-effect/lib/index.es.js\n");

/***/ })

};
;