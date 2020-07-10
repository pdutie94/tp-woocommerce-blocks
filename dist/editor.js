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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/editor.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/firstblock/index.js":
/*!****************************************!*\
  !*** ./src/blocks/firstblock/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nvar el = wp.element.createElement;\nregisterBlockType('tpwb/firstblock', {\n  title: __('First Block', 'tpwb'),\n  description: __('This is my first block', 'tpwb'),\n  category: 'layout',\n  icon: 'admin-network',\n  edit: function edit() {\n    return el('p', null, 'Editor');\n  },\n  save: function save() {\n    return el('p', null, 'Saved content');\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL2ZpcnN0YmxvY2svaW5kZXguanMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvYmxvY2tzL2ZpcnN0YmxvY2svaW5kZXguanM/MTBjMyJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgcmVnaXN0ZXJCbG9ja1R5cGUgPSB3cC5ibG9ja3MucmVnaXN0ZXJCbG9ja1R5cGU7XHJcbnZhciBfXyA9IHdwLmkxOG4uX187XHJcbnZhciBlbCA9IHdwLmVsZW1lbnQuY3JlYXRlRWxlbWVudDtcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCd0cHdiL2ZpcnN0YmxvY2snLCB7XHJcbiAgICB0aXRsZTogX18oJ0ZpcnN0IEJsb2NrJywgJ3Rwd2InKSxcclxuICAgIGRlc2NyaXB0aW9uOiBfXygnVGhpcyBpcyBteSBmaXJzdCBibG9jaycsICd0cHdiJyksXHJcbiAgICBjYXRlZ29yeTogJ2xheW91dCcsXHJcbiAgICBpY29uOiAnYWRtaW4tbmV0d29yaycsXHJcbiAgICBlZGl0OiBmdW5jdGlvbigpIHtcclxuICAgICAgICByZXR1cm4gZWwoJ3AnLCBudWxsLCAnRWRpdG9yJyk7XHJcbiAgICB9LFxyXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIGVsKCdwJywgbnVsbCwgJ1NhdmVkIGNvbnRlbnQnKTtcclxuICAgIH1cclxufSk7Il0sIm1hcHBpbmdzIjoiQUFBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBVkEiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/blocks/firstblock/index.js\n");

/***/ }),

/***/ "./src/blocks/second-block/index.js":
/*!******************************************!*\
  !*** ./src/blocks/second-block/index.js ***!
  \******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.editor.scss */ \"./src/blocks/second-block/style.editor.scss\");\n/* harmony import */ var _style_editor_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_style_editor_scss__WEBPACK_IMPORTED_MODULE_0__);\nvar _jsxFileName = \"D:\\\\xampp\\\\htdocs\\\\gutenberg\\\\wp-content\\\\plugins\\\\tp-woocommerce-blocks\\\\src\\\\blocks\\\\second-block\\\\index.js\";\n\nvar registerBlockType = wp.blocks.registerBlockType;\nvar __ = wp.i18n.__;\nregisterBlockType('tpwb/second-block', {\n  title: __('Second Block', 'tpwb'),\n  description: __('This is my second block', 'tpwb'),\n  category: 'layout',\n  icon: 'admin-network',\n  edit: function edit(_ref) {\n    var className = _ref.className;\n    return wp.element.createElement(\"p\", {\n      className: className,\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 12,\n        columnNumber: 16\n      }\n    }, \"Second Block\");\n  },\n  save: function save() {\n    return wp.element.createElement(\"p\", {\n      __self: this,\n      __source: {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 16\n      }\n    }, \"saved content\");\n  }\n});//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY29uZC1ibG9jay9pbmRleC5qcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2Vjb25kLWJsb2NrL2luZGV4LmpzP2I2MDUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0ICcuL3N0eWxlLmVkaXRvci5zY3NzJztcclxuXHJcbmNvbnN0IHsgcmVnaXN0ZXJCbG9ja1R5cGUgfSA9IHdwLmJsb2NrcztcclxuY29uc3QgeyBfXyB9ID0gd3AuaTE4bjtcclxuXHJcbnJlZ2lzdGVyQmxvY2tUeXBlKCd0cHdiL3NlY29uZC1ibG9jaycsIHtcclxuICAgIHRpdGxlOiBfXygnU2Vjb25kIEJsb2NrJywgJ3Rwd2InKSxcclxuICAgIGRlc2NyaXB0aW9uOiBfXygnVGhpcyBpcyBteSBzZWNvbmQgYmxvY2snLCAndHB3YicpLFxyXG4gICAgY2F0ZWdvcnk6ICdsYXlvdXQnLFxyXG4gICAgaWNvbjogJ2FkbWluLW5ldHdvcmsnLFxyXG4gICAgZWRpdDogZnVuY3Rpb24oe2NsYXNzTmFtZX0pIHtcclxuICAgICAgICByZXR1cm4gPHAgY2xhc3NOYW1lPXtjbGFzc05hbWV9PlNlY29uZCBCbG9jazwvcD47XHJcbiAgICB9LFxyXG4gICAgc2F2ZTogZnVuY3Rpb24oKSB7XHJcbiAgICAgICAgcmV0dXJuIDxwPnNhdmVkIGNvbnRlbnQ8L3A+O1xyXG4gICAgfVxyXG59KTsiXSwibWFwcGluZ3MiOiI7Ozs7QUFBQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFWQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/second-block/index.js\n");

/***/ }),

/***/ "./src/blocks/second-block/style.editor.scss":
/*!***************************************************!*\
  !*** ./src/blocks/second-block/style.editor.scss ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("// extracted by mini-css-extract-plugin//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvYmxvY2tzL3NlY29uZC1ibG9jay9zdHlsZS5lZGl0b3Iuc2Nzcy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9ibG9ja3Mvc2Vjb25kLWJsb2NrL3N0eWxlLmVkaXRvci5zY3NzPzE2NTEiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIl0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/blocks/second-block/style.editor.scss\n");

/***/ }),

/***/ "./src/editor.js":
/*!***********************!*\
  !*** ./src/editor.js ***!
  \***********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/firstblock */ \"./src/blocks/firstblock/index.js\");\n/* harmony import */ var _blocks_firstblock__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_blocks_firstblock__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _blocks_second_block__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/second-block */ \"./src/blocks/second-block/index.js\");\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvZWRpdG9yLmpzLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vc3JjL2VkaXRvci5qcz84ZWYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9ibG9ja3MvZmlyc3RibG9jaydcclxuaW1wb3J0ICcuL2Jsb2Nrcy9zZWNvbmQtYmxvY2snIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/editor.js\n");

/***/ })

/******/ });