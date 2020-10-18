/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/script.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/headerUnderline.js":
/*!***********************************!*\
  !*** ./src/js/headerUnderline.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return underline; });\nfunction underline(_ref) {\n  var wrapSelector = _ref.wrapSelector,\n      itemsBetween = _ref.itemsBetween,\n      reduceUnderline = _ref.reduceUnderline;\n  var wrap = document.querySelector(wrapSelector),\n      items = wrap.querySelectorAll('*'); // ? Создание underline\n\n  var underline = document.createElement('div');\n  underline.classList.add('underline');\n  wrap.appendChild(underline);\n  var activeItem = 0; // ? Текущий выделенный элемент\n  // * Функция для быстрого доступа к стилям underlin'a\n\n  function underlineStyle(_ref2) {\n    var l = _ref2.l,\n        r = _ref2.r;\n\n    if (l || l === 0 || l === '') {\n      l = '' ? undefined : underline.style.left = \"\".concat(l, \"px\");\n    }\n\n    if (r || r === 0 || r === '') {\n      r = '' ? undefined : underline.style.right = \"\".concat(r, \"px\");\n    }\n  } // * Универсальная функция для подсчёта длин.\n\n\n  function drawUnderline(start, end) {\n    activeItem = start;\n    var prevBetween = 0;\n    var nextBetween = 0;\n\n    if (end === undefined) {\n      // Расположение underline для одного элемента\n      for (var i = 0; i < start; i++) {\n        prevBetween += items[i].clientWidth;\n      }\n\n      reduceUnderline ? prevBetween += reduceUnderline : null;\n\n      for (var _i = start + 1; _i < items.length; _i++) {\n        nextBetween += items[_i].clientWidth;\n      }\n\n      reduceUnderline ? nextBetween += reduceUnderline : null;\n    } else if (start === end) {\n      return;\n    } else {\n      // Расположение underline для нескольких элементов\n      if (start < end) {\n        // Вправо\n        for (var _i2 = 0; _i2 < start; _i2++) {\n          prevBetween += items[_i2].clientWidth;\n        }\n\n        reduceUnderline ? prevBetween += reduceUnderline : null;\n\n        for (var _i3 = end + 1; _i3 < items.length; _i3++) {\n          nextBetween += items[_i3].clientWidth;\n        }\n\n        reduceUnderline ? nextBetween += reduceUnderline : null;\n      } else {\n        // Влево\n        for (var _i4 = 0; _i4 < end; _i4++) {\n          prevBetween += items[_i4].clientWidth;\n        }\n\n        reduceUnderline ? prevBetween += reduceUnderline : null;\n\n        for (var _i5 = start + 1; _i5 < items.length; _i5++) {\n          nextBetween += items[_i5].clientWidth;\n        }\n\n        reduceUnderline ? nextBetween += reduceUnderline : null;\n      }\n    }\n\n    setUnderlineOnPosition(prevBetween, nextBetween);\n  } // * Функция подчёркивания.\n\n\n  function setUnderlineOnPosition(prevBetween, nextBetween) {\n    if (itemsBetween) {\n      // ? Если указаны отступы между элементами\n      underlineStyle({\n        l: prevBetween + itemsBetween * (start + 1),\n        r: nextBetween + itemsBetween * (items.length - start)\n      });\n    } else {\n      // ? Без поддержки отступов между элементами\n      underlineStyle({\n        l: prevBetween,\n        r: nextBetween\n      });\n    }\n  } // * Прослушка событий\n\n\n  items.forEach(function (item, index) {\n    item.addEventListener('click', function () {\n      drawUnderline(index);\n    });\n    item.addEventListener('mouseover', function () {\n      drawUnderline(activeItem, index);\n    });\n    item.addEventListener('mouseleave', function () {\n      drawUnderline(activeItem);\n    });\n  });\n  drawUnderline(activeItem);\n}\n\n//# sourceURL=webpack:///./src/js/headerUnderline.js?");

/***/ }),

/***/ "./src/js/script.js":
/*!**************************!*\
  !*** ./src/js/script.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _headerUnderline__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./headerUnderline */ \"./src/js/headerUnderline.js\");\n// * headerUnderline\n\ndocument.addEventListener('DOMContentLoaded', function () {\n  setTimeout(function () {\n    Object(_headerUnderline__WEBPACK_IMPORTED_MODULE_0__[\"default\"])({\n      wrapSelector: '.nav',\n      reduceUnderline: 20\n    });\n  }, 100);\n});\n\n//# sourceURL=webpack:///./src/js/script.js?");

/***/ })

/******/ });