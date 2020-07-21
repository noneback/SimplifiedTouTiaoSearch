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
/******/ 		"result": 0
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
/******/ 	deferredModules.push([3,"vendors~app~result~vendor","vendors~app~result","vendors~result"]);
/******/ 	// run deferred modules when ready
/******/ 	return checkDeferredModules();
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/Client/Components/Search.js":
/*!*****************************************!*\
  !*** ./src/Client/Components/Search.js ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/button/style/css */ \"./node_modules/antd/lib/button/style/css.js\");\n/* harmony import */ var antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/button */ \"./node_modules/antd/lib/button/index.js\");\n/* harmony import */ var antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_button__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/auto-complete/style/css */ \"./node_modules/antd/lib/auto-complete/style/css.js\");\n/* harmony import */ var antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/auto-complete */ \"./node_modules/antd/lib/auto-complete/index.js\");\n/* harmony import */ var antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! antd/lib/input/style/css */ \"./node_modules/antd/lib/input/style/css.js\");\n/* harmony import */ var antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input_style_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! antd/lib/input */ \"./node_modules/antd/lib/input/index.js\");\n/* harmony import */ var antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(antd_lib_input__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../Services/Services */ \"./src/Services/Services.js\");\n\n\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n/**\n * 搜索框组件，包含logo,搜索框\n * \n * @typedef SearchsProp\n * @property {string} input 搜索框的初始值\n * @property {Function} clicked 外部传入搜索框的onClick回调函数\n * @property {string} keyword 外部传入的state,用于传递、使用keyword数据\n * @property {Function} setKeyword setState\n */\n\nvar Searchs = function Searchs(_ref) {\n  var input = _ref.input,\n      clicked = _ref.clicked,\n      keyword = _ref.keyword,\n      setKeyword = _ref.setKeyword;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useState\"])([]),\n      _useState2 = _slicedToArray(_useState, 2),\n      options = _useState2[0],\n      setOptions = _useState2[1]; //维护候选推荐词列表\n\n\n  Object(react__WEBPACK_IMPORTED_MODULE_6__[\"useEffect\"])(function () {\n    !input ? null : setKeyword(input);\n  }, []); //第一次渲染初始化keyword\n\n  /**\n   * 函数防抖\n   * @param {Function} fun 传入函数\n   * @param {number} delay 延迟时间(ms)\n   */\n\n  var debounce = function debounce(fun, delay) {\n    return function (args) {\n      var that = this;\n      var _args = args;\n      clearTimeout(fun.id);\n      fun.id = setTimeout(function () {\n        fun.call(that, _args);\n      }, delay);\n    };\n  };\n\n  var handleSearch = function handleSearch(keyword_) {\n    if (keyword) {\n      _Services_Services__WEBPACK_IMPORTED_MODULE_7__[\"default\"].getSuggestedWords(keyword_).then(function (sugs) {\n        return setOptions(sugs);\n      })[\"catch\"](function (error) {\n        return console.log('handleSearch:error');\n      });\n    }\n  };\n  /* 一些回调函数 */\n\n\n  var Selected = function Selected(value) {\n    setKeyword(value);\n  };\n\n  var valueChanged = function valueChanged(e) {\n    setKeyword(e.target.value);\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"search_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"logo\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"img\", {\n    src: \"https://lf3-ttcdn-tos.pstatp.com/obj/card-system/HeadBar/dist_browser/images/logo.545e6c99.png\",\n    alt: \"logo\"\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(\"div\", {\n    id: \"search_component\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_auto_complete__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    options: options,\n    style: {\n      width: '60%'\n    },\n    backfill: false,\n    onSelect: Selected,\n    onSearch: debounce(handleSearch, 200),\n    value: keyword\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_input__WEBPACK_IMPORTED_MODULE_5___default.a, {\n    placeholder: \"\\u8F93\\u5165\\u5173\\u952E\\u5B57\",\n    className: \"custom\",\n    onPressEnter: clicked,\n    style: {\n      height: 40\n    },\n    onChange: valueChanged\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_6___default.a.createElement(antd_lib_button__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    className: \"search_button\",\n    type: \"primary\",\n    onClick: clicked,\n    size: \"large\"\n  }, \"\\u641C\\u7D22\")));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Searchs);\n\n//# sourceURL=webpack:///./src/Client/Components/Search.js?");

/***/ }),

/***/ "./src/Client/Result/Entry.js":
/*!************************************!*\
  !*** ./src/Client/Result/Entry.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * 展示单个词条的信息，包含title，description，link\n * \n * @typedef EntryProps\n * @property {Object} data 词条数据对象，包含\n */\n\nvar Entry = function Entry(_ref) {\n  var data = _ref.data;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    className: \"entry\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"a\", {\n    href: data.link_url\n  }, data.title), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    style: {\n      fontSize: '14px'\n    }\n  }, '  ' + data.description), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"span\", {\n    className: \"entry_url\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", null, data.link_url)), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"br\", null));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (Entry);\n\n//# sourceURL=webpack:///./src/Client/Result/Entry.js?");

/***/ }),

/***/ "./src/Client/Result/ResultsPage.js":
/*!******************************************!*\
  !*** ./src/Client/Result/ResultsPage.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! antd/lib/pagination/style/css */ \"./node_modules/antd/lib/pagination/style/css.js\");\n/* harmony import */ var antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination_style_css__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! antd/lib/pagination */ \"./node_modules/antd/lib/pagination/index.js\");\n/* harmony import */ var antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! antd/lib/tabs/style/css */ \"./node_modules/antd/lib/tabs/style/css.js\");\n/* harmony import */ var antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs_style_css__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! antd/lib/tabs */ \"./node_modules/antd/lib/tabs/index.js\");\n/* harmony import */ var antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _Components_Search__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../Components/Search */ \"./src/Client/Components/Search.js\");\n/* harmony import */ var _Services_Services__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../Services/Services */ \"./src/Services/Services.js\");\n/* harmony import */ var _SearchResultsDisplay__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./SearchResultsDisplay */ \"./src/Client/Result/SearchResultsDisplay.js\");\n\n\n\n\n\nfunction _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\n\nfunction _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === \"string\") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === \"Object\" && o.constructor) n = o.constructor.name; if (n === \"Map\" || n === \"Set\") return Array.from(o); if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }\n\nfunction _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }\n\nfunction _iterableToArrayLimit(arr, i) { if (typeof Symbol === \"undefined\" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\n\n\n\n\n/**\n * 搜索结果页组件，展示搜索结果，分页，总条数\n * \n * @typedef ResultsPageProps\n * @property {string} keyword_ 搜索框中的关键字(解析url得到)\n * @property {number} offset_ offset参数\n * \n */\n\nvar ResultsPage = function ResultsPage(_ref) {\n  var keyword_ = _ref.keyword_,\n      offset_ = _ref.offset_;\n  var TabPane = antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a.TabPane;\n\n  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(keyword_),\n      _useState2 = _slicedToArray(_useState, 2),\n      keyword = _useState2[0],\n      setKeyword = _useState2[1]; //维护搜索框输入的keyword\n\n\n  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])([]),\n      _useState4 = _slicedToArray(_useState3, 2),\n      results = _useState4[0],\n      setResults = _useState4[1]; //搜索结果,10个Entry\n\n\n  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(0),\n      _useState6 = _slicedToArray(_useState5, 2),\n      total = _useState6[0],\n      setTotal = _useState6[1]; //维护搜索结果总条数 \n\n\n  var _useState7 = Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useState\"])(1),\n      _useState8 = _slicedToArray(_useState7, 2),\n      page = _useState8[0],\n      setPage = _useState8[1]; //维护当前页数\n\n  /**\n   * 组件初始化时数据获取\n   */\n\n\n  var initialize = function initialize() {\n    _Services_Services__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getEntries(keyword_, offset_).then(function (result) {\n      if (result.data) {\n        setResults(result.data);\n        setTotal(result.total);\n      } else console.log('No results');\n    })[\"catch\"](function (error) {\n      return console.log('clicked:error');\n    });\n  };\n\n  Object(react__WEBPACK_IMPORTED_MODULE_4__[\"useEffect\"])(function () {\n    return initialize();\n  }, []); //页面加载时初始化\n\n  var clicked = function clicked() {\n    return window.open(\"/result/keyword=\".concat(keyword, \"&offset=0\"), '_self');\n  }; //搜索按钮点击跳转\n\n\n  var valueChange = function valueChange(pageNumber) {\n    // 搜索框onChange回调\n    setPage(pageNumber);\n    window.open(\"/result/keyword=\".concat(keyword, \"&offset=\").concat((pageNumber - 1) * 10), '_self');\n  };\n\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_4___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    id: \"search_component\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"div\", {\n    className: \"tabs\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_Components_Search__WEBPACK_IMPORTED_MODULE_5__[\"default\"], {\n    keyword_: keyword_,\n    keyword: keyword,\n    clicked: clicked,\n    setKeyword: setKeyword\n  }), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_tabs__WEBPACK_IMPORTED_MODULE_3___default.a, {\n    defaultActiveKey: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {\n    tab: \"\\u7EFC\\u5408\",\n    key: \"1\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(_SearchResultsDisplay__WEBPACK_IMPORTED_MODULE_7__[\"default\"], {\n    results: results,\n    total: total\n  })), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {\n    tab: \"\\u89C6\\u9891\",\n    key: \"2\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h1\", null, \"\\u89C6\\u9891\\u641C\\u7D22\\u5185\\u5BB9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h2\", null, \"\\u7531\\u4E8E\\u5E76\\u672A\\u63D0\\u4F9Bapi\\uFF0C\\u6545\\u76F8\\u5173\\u641C\\u7D22\\u7ED3\\u679C\\u672A\\u5C55\\u793A\\uFF0C\\u4EC5\\u5360\\u4F4D\")), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(TabPane, {\n    tab: \"\\u56FE\\u7247\",\n    key: \"3\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h1\", null, \"\\u56FE\\u7247\\u641C\\u7D22\\u5185\\u5BB9\"), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(\"h2\", null, \"\\u7531\\u4E8E\\u5E76\\u672A\\u63D0\\u4F9Bapi\\uFF0C\\u6545\\u76F8\\u5173\\u641C\\u7D22\\u7ED3\\u679C\\u672A\\u5C55\\u793A\\uFF0C\\u4EC5\\u5360\\u4F4D\")))), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement(antd_lib_pagination__WEBPACK_IMPORTED_MODULE_1___default.a, {\n    showQuickJumper: true,\n    current: Math.floor(offset_ / 10 + 1),\n    total: total,\n    onChange: valueChange,\n    pageSize: 10,\n    showSizeChanger: false,\n    responsive: true\n  })));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (ResultsPage);\n\n//# sourceURL=webpack:///./src/Client/Result/ResultsPage.js?");

/***/ }),

/***/ "./src/Client/Result/SearchResultsDisplay.js":
/*!***************************************************!*\
  !*** ./src/Client/Result/SearchResultsDisplay.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _Entry__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Entry */ \"./src/Client/Result/Entry.js\");\n\n\n/**\n * 搜索结果展示组件,每页展示10个结果，总条数\n * @typedef SearchResultsDisplayProps\n * @property {number} total 结果总条数\n * @property {Array<T>} results 结果数组\n */\n\nvar SearchResultsDisplay = function SearchResultsDisplay(_ref) {\n  var total = _ref.total,\n      results = _ref.results;\n  return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"div\", {\n    id: \"results_container\"\n  }, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"p\", {\n    id: \"results_counter\"\n  }, \"\\u603B\\u5171\", total, \"\\u6761\\u7ED3\\u679C\"), results.map(function (x) {\n    return /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Entry__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      key: x.link_url,\n      data: x\n    });\n  }));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (SearchResultsDisplay);\n\n//# sourceURL=webpack:///./src/Client/Result/SearchResultsDisplay.js?");

/***/ }),

/***/ "./src/Client/result.js":
/*!******************************!*\
  !*** ./src/Client/result.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ \"./node_modules/react-dom/index.js\");\n/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Result_ResultsPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Result/ResultsPage */ \"./src/Client/Result/ResultsPage.js\");\n\n\n\n/**\n * 结果页\n */\n//解析url地址\n\nvar paras = document.location.toString().split('=');\nvar len = paras.length;\nvar offset = paras[len - 1];\nvar keyword = paras[len - 2].split('&')[0];\nObject(react_dom__WEBPACK_IMPORTED_MODULE_1__[\"hydrate\"])( /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react__WEBPACK_IMPORTED_MODULE_0___default.a.Fragment, null, /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Result_ResultsPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n  keyword_: decodeURI(keyword),\n  offset_: offset\n}), /*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(\"footer\", null, \"Copyright \\xA9 2020 NoneBack\")), document.getElementById(\"container\"));\n\n//# sourceURL=webpack:///./src/Client/result.js?");

/***/ }),

/***/ "./src/Services/Services.js":
/*!**********************************!*\
  !*** ./src/Services/Services.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ \"./node_modules/axios/index.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);\n\n/**\n * 封装后端api，便于前端使用\n */\n\n/**\n * @param {string} keyword \n * @param {number} offset \n * @returns {Array<T>} Entry数组\n */\n\nvar getEntries = function getEntries(keyword) {\n  var offset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/entries/\".concat(keyword, \"&\").concat(offset)).then(function (res) {\n    return res.data;\n  });\n};\n/**\n * @returns  {Object} HotSpotsInfo对象\n */\n\n\nvar getHotSpot = function getHotSpot() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/hot_spots_info\").then(function (res) {\n    return res.data;\n  });\n};\n/**\n * \n * @param {string} keyword \n * @returns {Array<T>} 候选推荐词数组\n */\n\n\nvar getSuggestedWords = function getSuggestedWords(keyword) {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/suggest_words/\".concat(keyword)).then(function (res) {\n    return !keyword ? [] : res.data;\n  })[\"catch\"](function (e) {\n    return [];\n  });\n};\n/**\n * @returns {Array<T>} 猜你想搜词条数组\n */\n\n\nvar getSearchSuggest = function getSearchSuggest() {\n  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(\"/api/search_suggestion\").then(function (res) {\n    return res.data;\n  });\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ({\n  getEntries: getEntries,\n  getSuggestedWords: getSuggestedWords,\n  getHotSpot: getHotSpot,\n  getSearchSuggest: getSearchSuggest\n});\n\n//# sourceURL=webpack:///./src/Services/Services.js?");

/***/ }),

/***/ 3:
/*!************************************!*\
  !*** multi ./src/Client/result.js ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("module.exports = __webpack_require__(/*! ./src/Client/result.js */\"./src/Client/result.js\");\n\n\n//# sourceURL=webpack:///multi_./src/Client/result.js?");

/***/ })

/******/ });