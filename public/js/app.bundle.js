/******/ (function(modules) { // webpackBootstrap
/******/ 	// install a JSONP callback for chunk loading
/******/ 	function webpackJsonpCallback(data) {
/******/ 		var chunkIds = data[0];
/******/ 		var moreModules = data[1];
/******/ 		var executeModules = data[2];
/******/
/******/ 		// add "moreModules" to the modules object,
/******/ 		// then flag all "chunkIds" as loaded and fire callback
/******/ 		var moduleId, chunkId, i = 0, resolves = [];
/******/ 		for(;i < chunkIds.length; i++) {
/******/ 			chunkId = chunkIds[i];
/******/ 			if(Object.prototype.hasOwnProperty.call(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 				resolves.push(installedChunks[chunkId][0]);
/******/ 			}
/******/ 			installedChunks[chunkId] = 0;
/******/ 		}
/******/ 		for(moduleId in moreModules) {
/******/ 			if(Object.prototype.hasOwnProperty.call(moreModules, moduleId)) {
/******/ 				modules[moduleId] = moreModules[moduleId];
/******/ 			}
/******/ 		}
/******/ 		if(parentJsonpFunction) parentJsonpFunction(data);
/******/
/******/ 		while(resolves.length) {
/******/ 			resolves.shift()();
/******/ 		}
/******/
/******/ 		// add entry modules from loaded chunk to deferred list
/******/ 		deferredModules.push.apply(deferredModules, executeModules || []);
/******/
/******/ 		// run deferred modules when all chunks ready
/******/ 		return checkDeferredModules();
/******/ 	};
/******/ 	function checkDeferredModules() {
/******/ 		var result;
/******/ 		for(var i = 0; i < deferredModules.length; i++) {
/******/ 			var deferredModule = deferredModules[i];
/******/ 			var fulfilled = true;
/******/ 			for(var j = 1; j < deferredModule.length; j++) {
/******/ 				var depId = deferredModule[j];
/******/ 				if(installedChunks[depId] !== 0) fulfilled = false;
/******/ 			}
/******/ 			if(fulfilled) {
/******/ 				deferredModules.splice(i--, 1);
/******/ 				result = __webpack_require__(__webpack_require__.s = deferredModule[0]);
/******/ 			}
/******/ 		}
/******/
/******/ 		return result;
/******/ 	}
/******/
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// object to store loaded and loading chunks
/******/ 	// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 	// Promise = chunk loading, 0 = chunk loaded
/******/ 	var installedChunks = {
/******/ 		"app": 0
/******/ 	};
/******/
/******/ 	var deferredModules = [];
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
/******/ 	var jsonpArray = window["webpackJsonp"] = window["webpackJsonp"] || [];
/******/ 	var oldJsonpFunction = jsonpArray.push.bind(jsonpArray);
/******/ 	jsonpArray.push = webpackJsonpCallback;
/******/ 	jsonpArray = jsonpArray.slice();
/******/ 	for(var i = 0; i < jsonpArray.length; i++) webpackJsonpCallback(jsonpArray[i]);
/******/ 	var parentJsonpFunction = oldJsonpFunction;
/******/
/******/
/******/ 	// add entry module to deferred list
/******/ 	deferredModules.push([1,"vendors~app~result~vendor","vendors~app~result"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Client/Bonus/Bonus.js":
/*!***********************************!*\
  !*** ./src/Client/Bonus/Bonus.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Trigger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Trigger */ \"./src/Client/Bonus/Trigger.js\");\n\n\n/**\n * 彩蛋书签组件，由keyword触发，展示一个图片书签\n * @typedef BonusProps\n * @property {string} keyword 关键字\n * @property {boolean} controler 彩蛋显示属性控制\n * @property {Function} setControler \n * \n */\n\nvar Bonus = function Bonus(_ref) {\n  var keyword = _ref.keyword,\n      controler = _ref.controler,\n      setControler = _ref.setControler;\n\n  var close = function close(e) {\n    //关闭书签图片\n    setControler(false);\n    window.open(\"/result/keyword=\".concat(keyword, \"&offset=0\"), '_self');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"class\": \"bonus\",\n    style: {\n      transform: controler ? \"rotate(360deg)  scale(1)\" : \"scale(0)\",\n      opacity: Number(controler)\n    }\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    \"class\": \"mid_container\"\n  }, controler ? /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"img\", {\n    src: _Trigger__WEBPACK_IMPORTED_MODULE_1__[\"default\"].findTrigger(keyword).src\n  }) : '', /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"close\",\n    onClick: close\n  }, \"X\"))));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Bonus);\n\n//# sourceURL=webpack:///./src/Client/Bonus/Bonus.js?");

/***/ }),

/***/ "./src/Client/Bonus/Trigger.js":
/*!*************************************!*\
  !*** ./src/Client/Bonus/Trigger.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\nvar triggers = [{\n  keyword: '白鹭',\n  src: '/img/白鹭.jpg'\n}, {\n  keyword: '春分',\n  src: '/img/春分.jpg'\n}, {\n  keyword: '大暑',\n  src: '/img/大暑.jpg'\n}, {\n  keyword: '冬至',\n  src: '/img/冬至.jpg'\n}, {\n  keyword: '寒露',\n  src: '/img/寒露.jpg'\n}, {\n  keyword: '立春',\n  src: '/img/立春.jpg'\n}, {\n  keyword: '立秋',\n  src: '/img/立秋.jpg'\n}, {\n  keyword: '芒种',\n  src: '/img/芒种.jpg'\n}, {\n  keyword: '秋分',\n  src: '/img/秋分.jpg'\n}, {\n  keyword: '夏至',\n  src: '/img/夏至.jpg'\n}, {\n  keyword: '小满',\n  src: '/img/小满.jpg'\n}, {\n  keyword: '小雪',\n  src: '/img/小雪.jpg'\n}, {\n  keyword: '处暑',\n  src: '/img/处暑.jpg'\n}, {\n  keyword: '大寒',\n  src: '/img/大寒.jpg'\n}, {\n  keyword: '大雪',\n  src: '/img/大雪.jpg'\n}, {\n  keyword: '谷雨',\n  src: '/img/谷雨.jpg'\n}, {\n  keyword: '惊蛰',\n  src: '/img/惊蛰.jpg'\n}, {\n  keyword: '立冬',\n  src: '/img/立冬.jpg'\n}, {\n  keyword: '立夏',\n  src: '/img/立夏.jpg'\n}, {\n  keyword: '清明',\n  src: '/img/清明.jpg'\n}, {\n  keyword: '霜降',\n  src: '/img/霜降.jpg'\n}, {\n  keyword: '小寒',\n  src: '/img/小寒.jpg'\n}, {\n  keyword: '小暑',\n  src: '/img/小暑.jpg'\n}, {\n  keyword: '雨水',\n  src: '/img/雨水.jpg'\n}];\n\nvar isTrigger = function isTrigger(word) {\n  return triggers.some(function (t) {\n    return t.keyword === word;\n  });\n};\n\nvar findTrigger = function findTrigger(word) {\n  return triggers.find(function (t) {\n    return t.keyword === word;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  triggers: triggers,\n  isTrigger: isTrigger,\n  findTrigger: findTrigger\n});\n\n//# sourceURL=webpack:///./src/Client/Bonus/Trigger.js?");

/***/ }),

/***/ "./src/Client/Components/Search.js":
/*!*****************************************!*\
  !*** ./src/Client/Components/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ \"./node_modules/antd/lib/button/style/css.js\");\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/auto-complete/style/css */ \"./node_modules/antd/lib/auto-complete/style/css.js\");\n/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/auto-complete */ \"./node_modules/antd/lib/auto-complete/index.js\");\n/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style/css */ \"./node_modules/antd/lib/input/style/css.js\");\n/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/Services */ \"./src/Services/Services.js\");\n\n\n\n\n\n\n\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }\n\nfunction _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err); } _next(undefined); }); }; }\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/**\n * 搜索框组件，包含logo,搜索框\n * \n * @typedef SearchsProp\n * @property {string} input 搜索框的初始值\n * @property {Function} clicked 外部传入搜索框的onClick回调函数\n * @property {string} keyword 外部传入的state,用于传递、使用keyword数据\n * @property {Function} setKeyword setState\n */\n\nvar Searchs = function Searchs(_ref) {\n  var input = _ref.input,\n      clicked = _ref.clicked,\n      keyword = _ref.keyword,\n      setKeyword = _ref.setKeyword;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      options = _useState2[0],\n      setOptions = _useState2[1]; //维护候选推荐词列表\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    !input ? null : setKeyword(input);\n  }, []); //第一次渲染初始化keyword\n\n  /**\n   * 函数防抖\n   * @param {Function} fun 传入函数\n   * @param {number} delay 延迟时间(ms)\n   */\n\n  var debounce = function debounce(fun, delay) {\n    return function (args) {\n      var that = this;\n      var _args = args;\n      clearTimeout(fun.id);\n      fun.id = setTimeout(function () {\n        fun.call(that, _args);\n      }, delay);\n    };\n  };\n\n  var handleSearch = /*#__PURE__*/function () {\n    var _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(keyword_) {\n      return regeneratorRuntime.wrap(function _callee$(_context) {\n        while (1) {\n          switch (_context.prev = _context.next) {\n            case 0:\n              if (!keyword) {\n                _context.next = 3;\n                break;\n              }\n\n              _context.next = 3;\n              return _Services_Services__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getSuggestedWords(keyword_).then(function (sugs) {\n                return setOptions(sugs);\n              })[\"catch\"](function (error) {\n                console.log('handleSearch:error');\n              });\n\n            case 3:\n            case \"end\":\n              return _context.stop();\n          }\n        }\n      }, _callee);\n    }));\n\n    return function handleSearch(_x) {\n      return _ref2.apply(this, arguments);\n    };\n  }();\n  /* 一些回调函数 */\n\n\n  var onSelect = function onSelect(value) {\n    setKeyword(value);\n  };\n\n  var onChange = function onChange(e) {\n    setKeyword(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"search_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"img\", {\n    src: \"https://lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/logo.545e6c99.png\",\n    alt: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"search_component\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    options: options,\n    style: {\n      width: '60%'\n    },\n    backfill: false,\n    onSelect: onSelect,\n    onSearch: debounce(handleSearch, 500),\n    value: keyword\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    placeholder: \"\\u8F93\\u5165\\u5173\\u952E\\u5B57\",\n    className: \"custom\",\n    style: {\n      height: 40\n    },\n    onChange: onChange\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"search_button\",\n    type: \"primary\",\n    onClick: clicked,\n    size: \"large\"\n  }, \"\\u641C\\u7D22\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchs);\n\n//# sourceURL=webpack:///./src/Client/Components/Search.js?");

/***/ }),

/***/ "./src/Client/Index/HotSpots.js":
/*!**************************************!*\
  !*** ./src/Client/Index/HotSpots.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Services */ \"./src/Services/Services.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/**\n * 头条热点组件，展示今日热搜词，热度，更新时间\n * \n */\n\nvar HotSpots = function HotSpots() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      hotSpots = _useState2[0],\n      setHotSpots = _useState2[1]; // 维护从后端取得的hotSpots数据 \n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      updateTime = _useState4[0],\n      setUpdateTime = _useState4[1]; // 维护从后端取得的update时间 \n\n  /*初始化hotSpots,和updateTime，仅在界面初始化时进行一次 */\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _Services_Services__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getHotSpot().then(function (hotSpotsInfo) {\n      setHotSpots(hotSpotsInfo.data);\n      setUpdateTime(hotSpotsInfo.update_time);\n    });\n  }, []);\n  /**\n   * 点击时热点词条时调用，跳转页面\n   * @param {string} hotSpot 热点词\n   */\n\n  var handleClick = function handleClick(hotSpot) {\n    return window.open(\"/result/keyword=\".concat(hotSpot, \"&offset=0\"), '_self');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"update_time\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", null, \"\\u66F4\\u65B0\\u65F6\\u95F4:\", updateTime)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"hotspots_container\",\n    className: \"grid_display\"\n  }, hotSpots.map(function (hotSpot) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      key: hotSpot.word,\n      onClick: function onClick() {\n        return handleClick(hotSpot.word);\n      }\n    }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: hotSpots.indexOf(hotSpot) < 3 ? 'hot_top3' : 'hot_rank'\n    }, hotSpots.indexOf(hotSpot) + 1), '      ' + hotSpot.word, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n      className: \"hot_value\"\n    }, hotSpot.hotValue));\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (HotSpots);\n\n//# sourceURL=webpack:///./src/Client/Index/HotSpots.js?");

/***/ }),

/***/ "./src/Client/Index/IndexPage.js":
/*!***************************************!*\
  !*** ./src/Client/Index/IndexPage.js ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/tabs/style/css */ \"./node_modules/antd/lib/tabs/style/css.js\");\n/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/tabs */ \"./node_modules/antd/lib/tabs/index.js\");\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _Components_Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../Components/Search */ \"./src/Client/Components/Search.js\");\n/* harmony import */ var _HotSpots__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./HotSpots */ \"./src/Client/Index/HotSpots.js\");\n/* harmony import */ var _Bonus_Bonus__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Bonus/Bonus */ \"./src/Client/Bonus/Bonus.js\");\n/* harmony import */ var _SearchSuggestion__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./SearchSuggestion */ \"./src/Client/Index/SearchSuggestion.js\");\n/* harmony import */ var _Bonus_Trigger__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../Bonus/Trigger */ \"./src/Client/Bonus/Trigger.js\");\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n\n\n/**\n * 首页组件，展示首页信息，展示搜索框、今日热点、猜你想搜、以及节气彩蛋书签\n */\n\nvar IndexPage = function IndexPage() {\n  var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a.TabPane;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(''),\n      _useState2 = _slicedToArray(_useState, 2),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1]; //保存，维护搜索框中传递的搜索关键词 {string}\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_2__[\"useState\"])(false),\n      _useState4 = _slicedToArray(_useState3, 2),\n      bonusControler = _useState4[0],\n      setBonusControler = _useState4[1]; // 控制彩蛋的状态 {boolean}\n\n  /**\n   * 点击搜索按钮的回调函数\n   */\n\n\n  var clicked = function clicked() {\n    //Trigger是彩蛋触发模块，关键字触发\n    if (!_Bonus_Trigger__WEBPACK_IMPORTED_MODULE_7__[\"default\"].isTrigger(keyword)) {\n      window.open(\"/result/keyword=\".concat(keyword, \"&offset=0\"), '_self');\n    } else {\n      setBonusControler(true);\n    }\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Components_Search__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {\n    clicked: clicked,\n    setKeyword: setKeyword,\n    keyword: keyword,\n    input: null\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(\"div\", {\n    className: \"tabs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    defaultActiveKey: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {\n    tab: \"\\u5934\\u6761\\u70ED\\u699C\",\n    key: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_HotSpots__WEBPACK_IMPORTED_MODULE_4__[\"default\"], null)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TabPane, {\n    tab: \"\\u731C\\u4F60\\u60F3\\u641C\",\n    key: \"2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_SearchSuggestion__WEBPACK_IMPORTED_MODULE_6__[\"default\"], null)))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_Bonus_Bonus__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    keyword: keyword,\n    controler: bonusControler,\n    setControler: setBonusControler\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (IndexPage);\n\n//# sourceURL=webpack:///./src/Client/Index/IndexPage.js?");

/***/ }),

/***/ "./src/Client/Index/SearchSuggestion.js":
/*!**********************************************!*\
  !*** ./src/Client/Index/SearchSuggestion.js ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../Services/Services */ \"./src/Services/Services.js\");\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/**\n * 猜你想搜页面 展示相关词条\n */\n\nvar SearchSuggestion = function SearchSuggestion() {\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      searchSuggestion = _useState2[0],\n      setSearchSuggestion = _useState2[1]; //维护相关词条\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_0__[\"useEffect\"])(function () {\n    _Services_Services__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getSearchSuggest().then(function (sugWords) {\n      return setSearchSuggestion(sugWords);\n    });\n  }, []);\n\n  var _onClick = function onClick(sugWord) {\n    window.open(\"/result/keyword=\".concat(sugWord, \"&offset=0\"), '_self');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"SearchSuggestion_container\",\n    className: \"grid_display\"\n  }, searchSuggestion.map(function (sugWord) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"h3\", {\n      key: sugWord,\n      onClick: function onClick() {\n        return _onClick(sugWord);\n      }\n    }, \" \", sugWord);\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchSuggestion);\n\n//# sourceURL=webpack:///./src/Client/Index/SearchSuggestion.js?");

/***/ }),

/***/ "./src/Client/index.js":
/*!*****************************!*\
  !*** ./src/Client/index.js ***!
  \*****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Index_IndexPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Index/IndexPage */ \"./src/Client/Index/IndexPage.js\");\n\n\n\n/**\n * 主界面\n */\n\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Index_IndexPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], null), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, \"Copyright \\xA9 2020 NoneBack\")), document.getElementById(\"container\"));\n\n//# sourceURL=webpack:///./src/Client/index.js?");

/***/ }),

/***/ "./src/Services/Services.js":
/*!**********************************!*\
  !*** ./src/Services/Services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * 封装后端api，便于前端使用\n */\n\n/**\n * @param {string} keyword \n * @param {number} offset \n * @returns {Array<T>} Entry数组\n */\n\nvar getEntries = function getEntries(keyword) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/entries/\".concat(keyword, \"&\").concat(offset)).then(function (res) {\n    return res.data;\n  });\n};\n/**\n * @returns  {Object} HotSpotsInfo对象\n */\n\n\nvar getHotSpot = function getHotSpot() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/hot_spots_info\").then(function (res) {\n    return res.data;\n  });\n};\n/**\n * \n * @param {string} keyword \n * @returns {Array<T>} 候选推荐词数组\n */\n\n\nvar getSuggestedWords = function getSuggestedWords(keyword) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/suggest_words/\".concat(keyword)).then(function (res) {\n    return !keyword ? [] : res.data;\n  });\n};\n/**\n * @returns {Array<T>} 猜你想搜词条数组\n */\n\n\nvar getSearchSuggest = function getSearchSuggest() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/search_suggestion\").then(function (res) {\n    return res.data;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getEntries: getEntries,\n  getSuggestedWords: getSuggestedWords,\n  getHotSpot: getHotSpot,\n  getSearchSuggest: getSearchSuggest\n});\n\n//# sourceURL=webpack:///./src/Services/Services.js?");

/***/ }),

/***/ 1:
/*!***********************************!*\
  !*** multi ./src/Client/index.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/Client/index.js */\"./src/Client/index.js\");\n\n\n//# sourceURL=webpack:///multi_./src/Client/index.js?");

/***/ })

/******/ });