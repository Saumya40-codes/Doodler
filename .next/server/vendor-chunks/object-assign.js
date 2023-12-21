"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/object-assign";
exports.ids = ["vendor-chunks/object-assign"];
exports.modules = {

/***/ "(ssr)/../node_modules/object-assign/index.js":
/*!**********************************************!*\
  !*** ../node_modules/object-assign/index.js ***!
  \**********************************************/
/***/ ((module) => {

eval("/*\nobject-assign\n(c) Sindre Sorhus\n@license MIT\n*/ \n/* eslint-disable no-unused-vars */ var getOwnPropertySymbols = Object.getOwnPropertySymbols;\nvar hasOwnProperty = Object.prototype.hasOwnProperty;\nvar propIsEnumerable = Object.prototype.propertyIsEnumerable;\nfunction toObject(val) {\n    if (val === null || val === undefined) {\n        throw new TypeError(\"Object.assign cannot be called with null or undefined\");\n    }\n    return Object(val);\n}\nfunction shouldUseNative() {\n    try {\n        if (!Object.assign) {\n            return false;\n        }\n        // Detect buggy property enumeration order in older V8 versions.\n        // https://bugs.chromium.org/p/v8/issues/detail?id=4118\n        var test1 = new String(\"abc\"); // eslint-disable-line no-new-wrappers\n        test1[5] = \"de\";\n        if (Object.getOwnPropertyNames(test1)[0] === \"5\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test2 = {};\n        for(var i = 0; i < 10; i++){\n            test2[\"_\" + String.fromCharCode(i)] = i;\n        }\n        var order2 = Object.getOwnPropertyNames(test2).map(function(n) {\n            return test2[n];\n        });\n        if (order2.join(\"\") !== \"0123456789\") {\n            return false;\n        }\n        // https://bugs.chromium.org/p/v8/issues/detail?id=3056\n        var test3 = {};\n        \"abcdefghijklmnopqrst\".split(\"\").forEach(function(letter) {\n            test3[letter] = letter;\n        });\n        if (Object.keys(Object.assign({}, test3)).join(\"\") !== \"abcdefghijklmnopqrst\") {\n            return false;\n        }\n        return true;\n    } catch (err) {\n        // We don't expect any of the above to throw, but better to be safe.\n        return false;\n    }\n}\nmodule.exports = shouldUseNative() ? Object.assign : function(target, source) {\n    var from;\n    var to = toObject(target);\n    var symbols;\n    for(var s = 1; s < arguments.length; s++){\n        from = Object(arguments[s]);\n        for(var key in from){\n            if (hasOwnProperty.call(from, key)) {\n                to[key] = from[key];\n            }\n        }\n        if (getOwnPropertySymbols) {\n            symbols = getOwnPropertySymbols(from);\n            for(var i = 0; i < symbols.length; i++){\n                if (propIsEnumerable.call(from, symbols[i])) {\n                    to[symbols[i]] = from[symbols[i]];\n                }\n            }\n        }\n    }\n    return to;\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHNzcikvLi4vbm9kZV9tb2R1bGVzL29iamVjdC1hc3NpZ24vaW5kZXguanMiLCJtYXBwaW5ncyI6IkFBQUE7Ozs7QUFJQSxHQUVBO0FBQ0EsaUNBQWlDLEdBQ2pDLElBQUlBLHdCQUF3QkMsT0FBT0QscUJBQXFCO0FBQ3hELElBQUlFLGlCQUFpQkQsT0FBT0UsU0FBUyxDQUFDRCxjQUFjO0FBQ3BELElBQUlFLG1CQUFtQkgsT0FBT0UsU0FBUyxDQUFDRSxvQkFBb0I7QUFFNUQsU0FBU0MsU0FBU0MsR0FBRztJQUNwQixJQUFJQSxRQUFRLFFBQVFBLFFBQVFDLFdBQVc7UUFDdEMsTUFBTSxJQUFJQyxVQUFVO0lBQ3JCO0lBRUEsT0FBT1IsT0FBT007QUFDZjtBQUVBLFNBQVNHO0lBQ1IsSUFBSTtRQUNILElBQUksQ0FBQ1QsT0FBT1UsTUFBTSxFQUFFO1lBQ25CLE9BQU87UUFDUjtRQUVBLGdFQUFnRTtRQUVoRSx1REFBdUQ7UUFDdkQsSUFBSUMsUUFBUSxJQUFJQyxPQUFPLFFBQVMsc0NBQXNDO1FBQ3RFRCxLQUFLLENBQUMsRUFBRSxHQUFHO1FBQ1gsSUFBSVgsT0FBT2EsbUJBQW1CLENBQUNGLE1BQU0sQ0FBQyxFQUFFLEtBQUssS0FBSztZQUNqRCxPQUFPO1FBQ1I7UUFFQSx1REFBdUQ7UUFDdkQsSUFBSUcsUUFBUSxDQUFDO1FBQ2IsSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUksSUFBSUEsSUFBSztZQUM1QkQsS0FBSyxDQUFDLE1BQU1GLE9BQU9JLFlBQVksQ0FBQ0QsR0FBRyxHQUFHQTtRQUN2QztRQUNBLElBQUlFLFNBQVNqQixPQUFPYSxtQkFBbUIsQ0FBQ0MsT0FBT0ksR0FBRyxDQUFDLFNBQVVDLENBQUM7WUFDN0QsT0FBT0wsS0FBSyxDQUFDSyxFQUFFO1FBQ2hCO1FBQ0EsSUFBSUYsT0FBT0csSUFBSSxDQUFDLFFBQVEsY0FBYztZQUNyQyxPQUFPO1FBQ1I7UUFFQSx1REFBdUQ7UUFDdkQsSUFBSUMsUUFBUSxDQUFDO1FBQ2IsdUJBQXVCQyxLQUFLLENBQUMsSUFBSUMsT0FBTyxDQUFDLFNBQVVDLE1BQU07WUFDeERILEtBQUssQ0FBQ0csT0FBTyxHQUFHQTtRQUNqQjtRQUNBLElBQUl4QixPQUFPeUIsSUFBSSxDQUFDekIsT0FBT1UsTUFBTSxDQUFDLENBQUMsR0FBR1csUUFBUUQsSUFBSSxDQUFDLFFBQzdDLHdCQUF3QjtZQUN6QixPQUFPO1FBQ1I7UUFFQSxPQUFPO0lBQ1IsRUFBRSxPQUFPTSxLQUFLO1FBQ2Isb0VBQW9FO1FBQ3BFLE9BQU87SUFDUjtBQUNEO0FBRUFDLE9BQU9DLE9BQU8sR0FBR25CLG9CQUFvQlQsT0FBT1UsTUFBTSxHQUFHLFNBQVVtQixNQUFNLEVBQUVDLE1BQU07SUFDNUUsSUFBSUM7SUFDSixJQUFJQyxLQUFLM0IsU0FBU3dCO0lBQ2xCLElBQUlJO0lBRUosSUFBSyxJQUFJQyxJQUFJLEdBQUdBLElBQUlDLFVBQVVDLE1BQU0sRUFBRUYsSUFBSztRQUMxQ0gsT0FBTy9CLE9BQU9tQyxTQUFTLENBQUNELEVBQUU7UUFFMUIsSUFBSyxJQUFJRyxPQUFPTixLQUFNO1lBQ3JCLElBQUk5QixlQUFlcUMsSUFBSSxDQUFDUCxNQUFNTSxNQUFNO2dCQUNuQ0wsRUFBRSxDQUFDSyxJQUFJLEdBQUdOLElBQUksQ0FBQ00sSUFBSTtZQUNwQjtRQUNEO1FBRUEsSUFBSXRDLHVCQUF1QjtZQUMxQmtDLFVBQVVsQyxzQkFBc0JnQztZQUNoQyxJQUFLLElBQUloQixJQUFJLEdBQUdBLElBQUlrQixRQUFRRyxNQUFNLEVBQUVyQixJQUFLO2dCQUN4QyxJQUFJWixpQkFBaUJtQyxJQUFJLENBQUNQLE1BQU1FLE9BQU8sQ0FBQ2xCLEVBQUUsR0FBRztvQkFDNUNpQixFQUFFLENBQUNDLE9BQU8sQ0FBQ2xCLEVBQUUsQ0FBQyxHQUFHZ0IsSUFBSSxDQUFDRSxPQUFPLENBQUNsQixFQUFFLENBQUM7Z0JBQ2xDO1lBQ0Q7UUFDRDtJQUNEO0lBRUEsT0FBT2lCO0FBQ1IiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9kb29kbGVyLy4uL25vZGVfbW9kdWxlcy9vYmplY3QtYXNzaWduL2luZGV4LmpzP2Q3MWUiXSwic291cmNlc0NvbnRlbnQiOlsiLypcbm9iamVjdC1hc3NpZ25cbihjKSBTaW5kcmUgU29yaHVzXG5AbGljZW5zZSBNSVRcbiovXG5cbid1c2Ugc3RyaWN0Jztcbi8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG52YXIgZ2V0T3duUHJvcGVydHlTeW1ib2xzID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scztcbnZhciBoYXNPd25Qcm9wZXJ0eSA9IE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHk7XG52YXIgcHJvcElzRW51bWVyYWJsZSA9IE9iamVjdC5wcm90b3R5cGUucHJvcGVydHlJc0VudW1lcmFibGU7XG5cbmZ1bmN0aW9uIHRvT2JqZWN0KHZhbCkge1xuXHRpZiAodmFsID09PSBudWxsIHx8IHZhbCA9PT0gdW5kZWZpbmVkKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignT2JqZWN0LmFzc2lnbiBjYW5ub3QgYmUgY2FsbGVkIHdpdGggbnVsbCBvciB1bmRlZmluZWQnKTtcblx0fVxuXG5cdHJldHVybiBPYmplY3QodmFsKTtcbn1cblxuZnVuY3Rpb24gc2hvdWxkVXNlTmF0aXZlKCkge1xuXHR0cnkge1xuXHRcdGlmICghT2JqZWN0LmFzc2lnbikge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIERldGVjdCBidWdneSBwcm9wZXJ0eSBlbnVtZXJhdGlvbiBvcmRlciBpbiBvbGRlciBWOCB2ZXJzaW9ucy5cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTQxMThcblx0XHR2YXIgdGVzdDEgPSBuZXcgU3RyaW5nKCdhYmMnKTsgIC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3LXdyYXBwZXJzXG5cdFx0dGVzdDFbNV0gPSAnZGUnO1xuXHRcdGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyh0ZXN0MSlbMF0gPT09ICc1Jykge1xuXHRcdFx0cmV0dXJuIGZhbHNlO1xuXHRcdH1cblxuXHRcdC8vIGh0dHBzOi8vYnVncy5jaHJvbWl1bS5vcmcvcC92OC9pc3N1ZXMvZGV0YWlsP2lkPTMwNTZcblx0XHR2YXIgdGVzdDIgPSB7fTtcblx0XHRmb3IgKHZhciBpID0gMDsgaSA8IDEwOyBpKyspIHtcblx0XHRcdHRlc3QyWydfJyArIFN0cmluZy5mcm9tQ2hhckNvZGUoaSldID0gaTtcblx0XHR9XG5cdFx0dmFyIG9yZGVyMiA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRlc3QyKS5tYXAoZnVuY3Rpb24gKG4pIHtcblx0XHRcdHJldHVybiB0ZXN0MltuXTtcblx0XHR9KTtcblx0XHRpZiAob3JkZXIyLmpvaW4oJycpICE9PSAnMDEyMzQ1Njc4OScpIHtcblx0XHRcdHJldHVybiBmYWxzZTtcblx0XHR9XG5cblx0XHQvLyBodHRwczovL2J1Z3MuY2hyb21pdW0ub3JnL3AvdjgvaXNzdWVzL2RldGFpbD9pZD0zMDU2XG5cdFx0dmFyIHRlc3QzID0ge307XG5cdFx0J2FiY2RlZmdoaWprbG1ub3BxcnN0Jy5zcGxpdCgnJykuZm9yRWFjaChmdW5jdGlvbiAobGV0dGVyKSB7XG5cdFx0XHR0ZXN0M1tsZXR0ZXJdID0gbGV0dGVyO1xuXHRcdH0pO1xuXHRcdGlmIChPYmplY3Qua2V5cyhPYmplY3QuYXNzaWduKHt9LCB0ZXN0MykpLmpvaW4oJycpICE9PVxuXHRcdFx0XHQnYWJjZGVmZ2hpamtsbW5vcHFyc3QnKSB7XG5cdFx0XHRyZXR1cm4gZmFsc2U7XG5cdFx0fVxuXG5cdFx0cmV0dXJuIHRydWU7XG5cdH0gY2F0Y2ggKGVycikge1xuXHRcdC8vIFdlIGRvbid0IGV4cGVjdCBhbnkgb2YgdGhlIGFib3ZlIHRvIHRocm93LCBidXQgYmV0dGVyIHRvIGJlIHNhZmUuXG5cdFx0cmV0dXJuIGZhbHNlO1xuXHR9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2hvdWxkVXNlTmF0aXZlKCkgPyBPYmplY3QuYXNzaWduIDogZnVuY3Rpb24gKHRhcmdldCwgc291cmNlKSB7XG5cdHZhciBmcm9tO1xuXHR2YXIgdG8gPSB0b09iamVjdCh0YXJnZXQpO1xuXHR2YXIgc3ltYm9scztcblxuXHRmb3IgKHZhciBzID0gMTsgcyA8IGFyZ3VtZW50cy5sZW5ndGg7IHMrKykge1xuXHRcdGZyb20gPSBPYmplY3QoYXJndW1lbnRzW3NdKTtcblxuXHRcdGZvciAodmFyIGtleSBpbiBmcm9tKSB7XG5cdFx0XHRpZiAoaGFzT3duUHJvcGVydHkuY2FsbChmcm9tLCBrZXkpKSB7XG5cdFx0XHRcdHRvW2tleV0gPSBmcm9tW2tleV07XG5cdFx0XHR9XG5cdFx0fVxuXG5cdFx0aWYgKGdldE93blByb3BlcnR5U3ltYm9scykge1xuXHRcdFx0c3ltYm9scyA9IGdldE93blByb3BlcnR5U3ltYm9scyhmcm9tKTtcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgc3ltYm9scy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRpZiAocHJvcElzRW51bWVyYWJsZS5jYWxsKGZyb20sIHN5bWJvbHNbaV0pKSB7XG5cdFx0XHRcdFx0dG9bc3ltYm9sc1tpXV0gPSBmcm9tW3N5bWJvbHNbaV1dO1xuXHRcdFx0XHR9XG5cdFx0XHR9XG5cdFx0fVxuXHR9XG5cblx0cmV0dXJuIHRvO1xufTtcbiJdLCJuYW1lcyI6WyJnZXRPd25Qcm9wZXJ0eVN5bWJvbHMiLCJPYmplY3QiLCJoYXNPd25Qcm9wZXJ0eSIsInByb3RvdHlwZSIsInByb3BJc0VudW1lcmFibGUiLCJwcm9wZXJ0eUlzRW51bWVyYWJsZSIsInRvT2JqZWN0IiwidmFsIiwidW5kZWZpbmVkIiwiVHlwZUVycm9yIiwic2hvdWxkVXNlTmF0aXZlIiwiYXNzaWduIiwidGVzdDEiLCJTdHJpbmciLCJnZXRPd25Qcm9wZXJ0eU5hbWVzIiwidGVzdDIiLCJpIiwiZnJvbUNoYXJDb2RlIiwib3JkZXIyIiwibWFwIiwibiIsImpvaW4iLCJ0ZXN0MyIsInNwbGl0IiwiZm9yRWFjaCIsImxldHRlciIsImtleXMiLCJlcnIiLCJtb2R1bGUiLCJleHBvcnRzIiwidGFyZ2V0Iiwic291cmNlIiwiZnJvbSIsInRvIiwic3ltYm9scyIsInMiLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJrZXkiLCJjYWxsIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(ssr)/../node_modules/object-assign/index.js\n");

/***/ })

};
;