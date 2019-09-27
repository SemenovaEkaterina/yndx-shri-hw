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
/******/ 	return __webpack_require__(__webpack_require__.s = "./front/views/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../yndx-shri-hw-redux/index.js":
/*!************************!*\
  !*** .-redux/index.js ***!
  \************************/
/*! exports provided: Middleware, Store, View */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _src_Middleware__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/Middleware */ \"../yndx-shri-hw-redux/src/Middleware.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Middleware\", function() { return _src_Middleware__WEBPACK_IMPORTED_MODULE_0__[\"default\"]; });\n\n/* harmony import */ var _src_Store__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./src/Store */ \"../yndx-shri-hw-redux/src/Store.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"Store\", function() { return _src_Store__WEBPACK_IMPORTED_MODULE_1__[\"default\"]; });\n\n/* harmony import */ var _src_View__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./src/View */ \"../yndx-shri-hw-redux/src/View.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"View\", function() { return _src_View__WEBPACK_IMPORTED_MODULE_2__[\"default\"]; });\n\n\n\n\n\n\n\n//# sourceURL=webpack:///.-redux/index.js?");

/***/ }),

/***/ "../yndx-shri-hw-redux/src/Middleware.js":
/*!*********************************!*\
  !*** .-redux/src/Middleware.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Middleware; });\nclass Middleware {\n    constructor(fn, action) {\n        this._fn = fn;\n        this._action = action;\n    }\n    process(state, dispatch, action) {\n        if (action.type === this._action) {\n            this._fn(state, dispatch, action);\n        }\n    }\n}\n\n//# sourceURL=webpack:///.-redux/src/Middleware.js?");

/***/ }),

/***/ "../yndx-shri-hw-redux/src/Store.js":
/*!****************************!*\
  !*** .-redux/src/Store.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Store; });\nclass Store {\n    constructor(reducer, middleware) {\n        this._state = reducer();\n        this._reducer = reducer;\n        this._middleware = middleware;\n        this._listeners = [];\n    }\n\n    _notifyListeners() {\n        this._listeners.map(item => {\n            item(this.getState());\n        })\n    }\n\n    subscribe(callback) {\n        this._listeners.push(callback);\n\n        return () => {\n            this._listeners = this._listeners.filter(item => item !== callback);\n        }\n    }\n\n    dispatch(action) {\n        this._state = this._reducer(this._state, action);\n        this._notifyListeners();\n        this._middleware.map(item => item.process(this.getState(), this.dispatch.bind(this), action));\n    }\n\n    getState() {\n        return this._state;\n    }\n}\n\n//# sourceURL=webpack:///.-redux/src/Store.js?");

/***/ }),

/***/ "../yndx-shri-hw-redux/src/View.js":
/*!***************************!*\
  !*** .-redux/src/View.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return View; });\nclass View {\n    constructor(el, store, mapDispatch) {\n        const actions = Object.entries(mapDispatch).reduce((acc, [key, value]) => {\n            acc[key] = (...args) => store.dispatch(value(...args));\n            return acc;\n        }, {});\n        \n        this.el = el;\n        this.actions = actions;\n        this._unsubsribe = store.subscribe((state) => this._updateState(state));\n        this._updateState(store.getState());\n        return this;\n    }\n    _updateState(state) {\n        this.el.innerHTML = this.render(state);\n    }\n    render() {\n        throw Error('This method should be overridden')\n    }\n    destroy() {\n        this._unsubsribe();\n    }\n}\n\n//# sourceURL=webpack:///.-redux/src/View.js?");

/***/ }),

/***/ "./front/store/actions.js":
/*!********************************!*\
  !*** ./front/store/actions.js ***!
  \********************************/
/*! exports provided: GET_LIST, SET_LIST, getList, setList */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"GET_LIST\", function() { return GET_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SET_LIST\", function() { return SET_LIST; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"getList\", function() { return getList; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"setList\", function() { return setList; });\nconst GET_LIST = 'GET_LIST';\nconst SET_LIST = 'SET_LIST';\n\nconst getList = (search) => ({\n    search,\n    type: GET_LIST,\n});\n\nconst setList = (list) => ({\n    list,\n    type: SET_LIST,\n});\n\n\n\n//# sourceURL=webpack:///./front/store/actions.js?");

/***/ }),

/***/ "./front/store/index.js":
/*!******************************!*\
  !*** ./front/store/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yndx-shri-hw-redux */ \"../yndx-shri-hw-redux/index.js\");\n/* harmony import */ var _reducers__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./reducers */ \"./front/store/reducers.js\");\n/* harmony import */ var _middlewares__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./middlewares */ \"./front/store/middlewares.js\");\n\n\n\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (new yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__[\"Store\"](_reducers__WEBPACK_IMPORTED_MODULE_1__[\"default\"], _middlewares__WEBPACK_IMPORTED_MODULE_2__[\"default\"]));\n\n\n\n//# sourceURL=webpack:///./front/store/index.js?");

/***/ }),

/***/ "./front/store/middlewares.js":
/*!************************************!*\
  !*** ./front/store/middlewares.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yndx-shri-hw-redux */ \"../yndx-shri-hw-redux/index.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./front/store/actions.js\");\n\n\n\nconst getList = async (state, dispatch, action) => {\n    if (state.list) {\n        return;\n    }\n\n    const response = await fetch('http://localhost:3003/api/repos/promise-polyfill');\n    const data = await response.json();\n\n    dispatch(Object(_actions__WEBPACK_IMPORTED_MODULE_1__[\"setList\"])(data.list));\n};\n\n/* harmony default export */ __webpack_exports__[\"default\"] = ([new yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__[\"Middleware\"](getList, _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_LIST\"])]);\n\n//# sourceURL=webpack:///./front/store/middlewares.js?");

/***/ }),

/***/ "./front/store/reducers.js":
/*!*********************************!*\
  !*** ./front/store/reducers.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./types */ \"./front/store/types.js\");\n/* harmony import */ var _actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./actions */ \"./front/store/actions.js\");\n\n\n\nconst defaultState = {\n    status: _types__WEBPACK_IMPORTED_MODULE_0__[\"ListStatus\"].INITIAL,\n};\n\nfunction reducer(state = defaultState, action = {}) {\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_1__[\"GET_LIST\"]) {\n        return Object.assign({}, {\n                status: _types__WEBPACK_IMPORTED_MODULE_0__[\"ListStatus\"].LOADING,\n                list: state.list,\n                search: action.search,\n            }\n        )\n    }\n    if (action.type === _actions__WEBPACK_IMPORTED_MODULE_1__[\"SET_LIST\"]) {\n        return Object.assign({}, {\n                status: _types__WEBPACK_IMPORTED_MODULE_0__[\"ListStatus\"].SUCCESS,\n                list: action.list,\n                search: state.search\n            }\n        )\n    }\n    return state;\n}\n\n/* harmony default export */ __webpack_exports__[\"default\"] = (reducer);\n\n//# sourceURL=webpack:///./front/store/reducers.js?");

/***/ }),

/***/ "./front/store/types.js":
/*!******************************!*\
  !*** ./front/store/types.js ***!
  \******************************/
/*! exports provided: ListStatus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ListStatus\", function() { return ListStatus; });\nconst ListStatus = Object.freeze({\n    INITIAL: 'initial',\n    LOADING: 'loading',\n    ERROR: 'error',\n    SUCCESS: 'success',\n});\n\n//# sourceURL=webpack:///./front/store/types.js?");

/***/ }),

/***/ "./front/views/files.js":
/*!******************************!*\
  !*** ./front/views/files.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return FilesView; });\n/* harmony import */ var yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yndx-shri-hw-redux */ \"../yndx-shri-hw-redux/index.js\");\n\n\nclass FilesView extends yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\n    constructor(...args) {\n        super(...args);\n        this.actions.getList('');\n    }\n\n    render(state) {\n        const list = state.list || [];\n        const search = state.search || '';\n\n        return `\n            <div class=\"Section Section_size_m Section_mobile_s\">\n                <div class=\"Table\">\n                    <div class=\"Table-row Table-row_type_header\">\n                        <div class=\"Table-col\">Name</div>\n                        <div class=\"Table-col\">Last commit</div>\n                        <div class=\"Table-col\">Commit message</div>\n                        <div class=\"Table-col\">Commiter</div>\n                        <div class=\"Table-col\">Updated</div>\n                    </div>\n                    ${list.filter(item => item.toLowerCase().includes(search.toLowerCase())).map(item => `\n                        <div class=\"Table-row Table-row_type_content\">\n                            <div class=\"Table-col Typo Typo_size_default\">\n                                <a href=\"/files\">\n                                    <div class=\"IconText\">\n                                        <div class=\"IconText-icon IconText-icon_size_s\" style=\"background-image: url('/static/imgs/directory.svg')\"></div>\n                                        <div class=\"IconText-text Typo Typo_size_default Typo_color_default Link\">${item}</div>\n                                    </div>\n                                </a>\n                            </div>\n                            <div class=\"Table-col Adaptive Adaptive_show_desktop\"><a class=\"Link Typo Typo_color_accent\" href=\"/commit\">d53dsv</a></div>\n                            <div class=\"Table-col Adaptive Adaptive_show_desktop\">[vcs] move http to arc</div>\n                            <div class=\"Table-col Adaptive Adaptive_show_mobile\"><a class=\"Link Typo Typo_color_accent\" href=\"\">ARCADIA-771:</a> [vcs] move http to arc</div>\n                            <div class=\"Table-col Adaptive Adaptive_show_mobile\">\n                                <a class=\"Link Typo Typo_color_accent\" href=\"/commit\">d53dsv</a>\n                                by <span class=\"Name\">somov</span>, 4s ago\n                            </div>\n                            <div class=\"Table-col Table-link Adaptive Adaptive_show_mobile\"></div>\n                            <div class=\"Table-col Adaptive Adaptive_show_desktop\"><div class=\"Name\">somov</div></div>\n                            <div class=\"Table-col Adaptive Adaptive_show_desktop\">4s ago</div>\n                        </div>\n                    `).join('')}\n                </div>\n            </div>\n        `;\n    }\n}\n\n//# sourceURL=webpack:///./front/views/files.js?");

/***/ }),

/***/ "./front/views/index.js":
/*!******************************!*\
  !*** ./front/views/index.js ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../store */ \"./front/store/index.js\");\n/* harmony import */ var _store_actions__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../store/actions */ \"./front/store/actions.js\");\n/* harmony import */ var _files__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./files */ \"./front/views/files.js\");\n/* harmony import */ var _search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./search */ \"./front/views/search.js\");\n\n\n\n\n\nconst files = document.getElementById('files');\nconst search = document.getElementById('search');\n\nnew _files__WEBPACK_IMPORTED_MODULE_2__[\"default\"](files, _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {getList: _store_actions__WEBPACK_IMPORTED_MODULE_1__[\"getList\"]});\nnew _search__WEBPACK_IMPORTED_MODULE_3__[\"default\"](search, _store__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {getList: _store_actions__WEBPACK_IMPORTED_MODULE_1__[\"getList\"]});\n\n//# sourceURL=webpack:///./front/views/index.js?");

/***/ }),

/***/ "./front/views/search.js":
/*!*******************************!*\
  !*** ./front/views/search.js ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return SearchView; });\n/* harmony import */ var yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! yndx-shri-hw-redux */ \"../yndx-shri-hw-redux/index.js\");\n\n\nclass SearchView extends yndx_shri_hw_redux__WEBPACK_IMPORTED_MODULE_0__[\"View\"] {\n    constructor(...args) {\n        super(...args);\n\n        const actions = this.actions;\n        this.el.addEventListener('input', function (e) {\n            actions.getList(e.target.value);\n        });\n    }\n    render(state) {\n        return '';\n    }\n}\n\n//# sourceURL=webpack:///./front/views/search.js?");

/***/ })

/******/ });