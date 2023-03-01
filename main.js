/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/styles.css":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/styles.css ***!
  \**************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/getUrl.js */ \"./node_modules/css-loader/dist/runtime/getUrl.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);\n// Imports\n\n\n\nvar ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ./img/backgroundImg.jpg */ \"./src/img/backgroundImg.jpg\"), __webpack_require__.b);\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\nvar ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \":root {\\n    --font-color: #ddd;\\n    --font-color-dark: #aaa;\\n    --border-color: #222;\\n    --background-light: rgba(0, 0, 0, 0.6);\\n    --background-light-hover: rgba(99, 99, 99, 0.4);\\n    --background-dark: rgba(0, 0, 0, 0.9);\\n    font-family: 'Roboto', sans-serif;\\n}\\n\\nbody {\\n    font-family: inherit;\\n    display: flex;\\n    height: 100vh;\\n    width: 100vw;\\n    color: var(--font-color);\\n    background-image: url(\" + ___CSS_LOADER_URL_REPLACEMENT_0___ + \");\\n    background-attachment: fixed;\\n    background-size: cover;\\n    margin: 0;\\n}   \\n\\n#content {\\n    display: flex;\\n    flex-direction: column;\\n    align-items: center;\\n    width: 100%;\\n    position: relative;\\n}\\n\\nheader {\\n    display: flex;\\n    flex-wrap: wrap;\\n    background-color: var(--background-dark);\\n    position: relative;\\n    width: 100%;\\n}\\n\\n.title {\\n    display: flex;\\n    justify-content: center;\\n    margin: 25px;\\n}\\n\\n.title div {\\n    position: relative;\\n}\\n\\n.title h1 {\\n    position: relative;\\n    z-index: 1;\\n    font-size: 70px;\\n    margin: 0;\\n}\\n\\n.title h5 {\\n    font-size: 25px;\\n    margin: 0;\\n    position: absolute;\\n    bottom: -10px;\\n    right: 0;\\n}\\n\\nheader > * {\\n    display: flex;\\n    flex: 1;\\n}\\n\\n.title img {\\n    position: absolute;\\n    top: 0;\\n    opacity: 0.9;\\n}\\n\\nnav button {\\n    flex: 1;\\n    font-size: 20px;\\n    color: inherit;\\n    border: none;\\n    background-color: transparent ;\\n    cursor: pointer;\\n    transition: 0.3s;\\n}\\n\\nnav button:hover {\\n    background-color: var(--background-light-hover);\\n\\n}\\n\\n.activeTab {\\n    border-bottom: 5px solid var(--font-color-dark);\\n}\\n\\nmain {\\n    box-sizing: border-box;\\n    padding: 50px;\\n    background-color: var(--background-light);\\n    border: 1px solid var(--border-color);\\n    display: flex;\\n    flex: 1;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    align-items: center;\\n    width: 330px;\\n    margin: 70px;\\n}\\n\\n.homeHeader {\\n    font-weight: bold;\\n    font-style: italic;\\n    margin: 40px 0;\\n    font-size: 80px;\\n}\\n\\n.orderNow {\\n    font-weight: bold;\\n    font-size: 18px;\\n    color: var(--background-dark);\\n    display: block;\\n    height: 40px;\\n    width: 150px;\\n    border-radius: 40px;\\n    border: none;\\n    background-color: var(--font-color);\\n    transition: 0.2s ease-in-out;\\n}\\n\\n.orderNow:hover {\\n    background-color: var(--font-color-dark);\\n}\\n\\n.homeInfo {\\n    display: flex;\\n    font-size: 20px;\\n    align-items: center;\\n    gap: 18px;\\n}\\n\\n.icon {\\n    height: 30px;\\n}\\n\\n.menu {\\n    display: grid;\\n    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));\\n    grid-auto-rows: 1fr;\\n    gap: 25px;\\n}\\n\\n.card {\\n    display: flex;\\n    flex-direction: column;\\n    justify-content: space-between;\\n    box-sizing: border-box;\\n    padding: 15px;\\n    text-align: center;\\n    background-color: var(--background-light);\\n    transition: 0.4s ease-in-out;\\n    height: 100%;\\n}\\n\\n.card:hover {\\n    background-color: var(--background-light-hover);\\n}\\n\\n.card p:first-child {\\n    font-style: italic;\\n    font-size: 20px;\\n    font-weight: bold;\\n}\\n\\n.card p:last-child {\\n    font-size: 18px;\\n}\\n\\n.contact {\\n    align-items: start;\\n}\\n\\n.contact form {\\n    box-sizing: border-box;\\n    border: 1px solid var(--border-color);\\n    padding: 20px;\\n    background-color: var(--background-light);\\n    display: flex;\\n    flex-direction: column;\\n    gap: 15px;\\n}\\n\\n.contact p, label, .contact input, .contact textarea   {\\n    font-size: 20px;\\n}\\n\\n.contact div {\\n    width: 100%;\\n}\\n\\n.contact textarea {\\n    height: 70px;\\n    resize: none;\\n}\\n\\n.contact input,.contact textarea {\\n    color: var(--font-color);\\n    background-color: var(--background-light-hover);\\n    border: none;\\n    border-radius: 5px;\\n    border-bottom: 2px solid var(--border-color);\\n}\\n\\n.contact button {\\n    background-color: var(--font-color-dark);\\n    font-size: inherit;\\n    border: none;\\n    height: 25px;\\n    transition: 0.3s ease-in-out;\\n    width: 100px;\\n    border-radius: 5px;\\n    font-weight: bold;\\n}\\n\\n.contact button:hover {\\n    background-color: var(--font-color);\\n}\\n\\nfooter {\\n    background-color: var(--background-light);\\n    font-size: inherit;\\n    width: 100%;\\n    display: flex;\\n    justify-content: center;\\n    align-items: center;\\n    gap: 20px;\\n    border-top: 1px solid var(--border-color);\\n}\\n\\nfooter a {\\n    font-size: 1.5rem;\\n    color: var(--font-color);\\n}\\n\\n::-webkit-scrollbar {\\n    width: 10px;\\n}\\n\\n::-webkit-scrollbar-track {\\n    background-color: var(--background-light);\\n}\\n\\n::-webkit-scrollbar-thumb {\\n    background-color: var(--background-dark);\\n}\\n\\n::-webkit-scrollbar-thumb:hover {\\n    background-color: var(--background-light-hover);\\n}\\n\\n@media (min-width: 800px) {\\n    main {\\n        width: 600px;\\n    }\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += \"}\";\n      }\n      if (item[2]) {\n        content += \"}\";\n      }\n      if (item[4]) {\n        content += \"}\";\n      }\n      return content;\n    }).join(\"\");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (url, options) {\n  if (!options) {\n    options = {};\n  }\n  if (!url) {\n    return url;\n  }\n  url = String(url.__esModule ? url.default : url);\n\n  // If url is already wrapped in quotes, remove them\n  if (/^['\"].*['\"]$/.test(url)) {\n    url = url.slice(1, -1);\n  }\n  if (options.hash) {\n    url += options.hash;\n  }\n\n  // Should url be wrapped?\n  // See https://drafts.csswg.org/css-values-3/#urls\n  if (/[\"'() \\t\\n]|(%20)/.test(url) || options.needQuotes) {\n    return \"\\\"\".concat(url.replace(/\"/g, '\\\\\"').replace(/\\n/g, \"\\\\n\"), \"\\\"\");\n  }\n  return url;\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/getUrl.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/styles.css":
/*!************************!*\
  !*** ./src/styles.css ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./styles.css */ \"./node_modules/css-loader/dist/cjs.js!./src/styles.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_styles_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurant-page/./src/styles.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurant-page/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

/***/ "./src/data.js":
/*!*********************!*\
  !*** ./src/data.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contact\": () => (/* binding */ contact),\n/* harmony export */   \"foods\": () => (/* binding */ foods),\n/* harmony export */   \"home\": () => (/* binding */ home)\n/* harmony export */ });\nconst home = {\n    'time': [\n        'Mon - Fri: 8am - 8pm',\n        'Sat - Sun: 8am - 10pm'\n    ],\n\n    'location': '644, San Miguel, Manila, Metro Manila'\n};\n\nconst contact = {\n    phone: '+123 456 789',\n    email: 'Kabayanfoods@fakemail.com'\n}\n\nconst foods = [\n    {\n        name: 'Sinigang na Salmon sa Miso',\n        desc: 'Salmon belly cooked in tamarind broth with fermented soybean paste, served with mustard greens',\n        price: '₱528'\n    },\n    {\n        name: 'Sinigang na Sugpo',\n        desc: 'Fresh prawns cooked in tamarind broth',\n        price: '₱728'\n    },\n    {\n        name: 'Beef Bulalo',\n        desc: 'Beef bone marrow, boiled until tender and served with corn',\n        price: '₱648'\n    },\n    {\n        name: 'Chicken-Pork Adobo',\n        desc: 'Twice-cooked chicken and pork, with adobo sauce on the side',\n        price: '₱418'\n    },\n    {\n        name: 'Chicken Inasal Sisig',\n        desc: 'Chicken sisig topped with deep-fried chicken skin',\n        price: '₱438'\n    },\n    {\n        name: 'Lechon Kawali',\n        desc: 'Crispy deep-fried roasted pork served with liver sauce',\n        price: '₱558'\n    },\n    {\n        name: 'Bicol Express',\n        desc: 'Pork, squid, and shrimp cooked in coconut milk',\n        price: '₱448'\n    },\n    {\n        name: 'Bistek Tagalog',\n        desc: 'Sliced beef cooked with soy sauce and kalamansi, and served with caramelized onions',\n        price: '₱548'\n    }\n]\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/data.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _initialWebsite_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./initialWebsite.js */ \"./src/initialWebsite.js\");\n\n\n(0,_initialWebsite_js__WEBPACK_IMPORTED_MODULE_0__.websiteBody)();\n\n//# sourceURL=webpack://restaurant-page/./src/index.js?");

/***/ }),

/***/ "./src/initialWebsite.js":
/*!*******************************!*\
  !*** ./src/initialWebsite.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"websiteBody\": () => (/* binding */ websiteBody)\n/* harmony export */ });\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n/* harmony import */ var _loadTabs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./loadTabs */ \"./src/loadTabs.js\");\n\n\n\nfunction createHeader() {\n    const title = document.createElement('div');\n    const container = document.createElement('div');\n    const title1 = document.createElement('h1');\n    const title2 = document.createElement('h5');\n    const img = document.createElement('img');\n    \n    title.setAttribute('class', 'title')\n    \n    img.src = '../src/img/3starandthesun.png'\n    title1.textContent = 'Kabayan';\n    title2.textContent = 'FOODS';\n\n    container.append(img, title1, title2)\n    title.append(container)\n\n    const nav = document.createElement('nav');\n    const home = document.createElement('button');\n    const menu = document.createElement('button');\n    const contact = document.createElement('button');\n\n\n    home.addEventListener('click', function() {\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.activeTab)(this);\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n    });\n    menu.addEventListener('click', function() {\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.activeTab)(this);\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadMenu)();\n    });\n    contact.addEventListener('click', function() {\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.activeTab)(this);\n        (0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadContact)();\n    });\n\n    nav.setAttribute('class', 'tabs')\n\n    home.textContent = 'Home';\n    menu.textContent = 'Menu';\n    contact.textContent = 'Contact';\n\n    nav.append(home, menu, contact)\n\n    const header = document.createElement('header');\n    header.append(title, nav)\n\n    return header\n}   \n\nfunction createFooter() {\n    const footer = document.createElement('footer');\n    const copyright = document.createElement('p');\n\n    copyright.textContent = `Copyright © ${new Date().getFullYear()} basteOble`;\n\n    const githubLink = document.createElement(\"a\");\n    githubLink.href = \"https://github.com/basteOble\";\n  \n    const githubIcon = document.createElement(\"i\");\n    githubIcon.classList.add('fab');\n    githubIcon.classList.add('fa-github');\n\n    githubLink.append(githubIcon);\n    footer.append(copyright);\n    footer.append(githubLink);\n\n    return footer\n}\n\nfunction createMain() {\n    const main = document.createElement('main');\n    return main\n}\n\nfunction websiteBody() {\n    const content = document.querySelector('#content');\n\n    content.append(createHeader(), createMain(), createFooter())\n    \n    ;(0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.activeTab)(document.querySelector('button'))\n    ;(0,_loadTabs__WEBPACK_IMPORTED_MODULE_1__.loadHome)();\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/initialWebsite.js?");

/***/ }),

/***/ "./src/loadTabs.js":
/*!*************************!*\
  !*** ./src/loadTabs.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"activeTab\": () => (/* binding */ activeTab),\n/* harmony export */   \"loadContact\": () => (/* binding */ loadContact),\n/* harmony export */   \"loadHome\": () => (/* binding */ loadHome),\n/* harmony export */   \"loadMenu\": () => (/* binding */ loadMenu)\n/* harmony export */ });\n/* harmony import */ var _data__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data */ \"./src/data.js\");\n/* harmony import */ var _styles_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./styles.css */ \"./src/styles.css\");\n\n\n\nfunction activeTab(tab) {\n    const tabs = document.querySelectorAll('button');\n\n    tabs.forEach(tab => {\n        if (tab !== this) {\n            tab.classList.remove('activeTab');\n        }\n    })\n    tab.classList.add('activeTab')\n}\n\nfunction clearMain() {\n    const main = document.querySelector('main');\n    main.className = '';\n    main.innerHTML = '';\n    return main\n}\n\nfunction loadHome() {\n    const head = document.createElement('p');\n    head.textContent = \"Kain Tayo!\";\n    head.classList.add('homeHeader')\n\n    const orderNow = document.createElement('button');\n    orderNow.textContent = 'Order now'\n    orderNow.classList.add('orderNow')\n\n    orderNow.addEventListener('click', () => {\n        activeTab(document.querySelectorAll('button')[1]);\n        loadMenu();\n    })\n\n    const open = document.createElement('div');\n    const timeImg = document.createElement('img');\n    timeImg.src = '../src/img/clock.png'\n    const hours = document.createElement('div');\n    open.append(timeImg, hours)\n    for (let times of _data__WEBPACK_IMPORTED_MODULE_0__.home.time){\n        const time = document.createElement('p');\n        time.textContent = times;\n        hours.append(time)\n    }\n    open.classList.add('homeInfo')\n\n    const location = document.createElement('div')\n    const pin = document.createElement('img');\n    pin.src = '../src/img/pin.png';\n    const address = document.createElement('p');\n    address.textContent = _data__WEBPACK_IMPORTED_MODULE_0__.home.location;\n    location.append(pin, address)\n    location.classList.add('homeInfo')\n\n    timeImg.classList.add('icon');\n    pin.classList.add('icon')\n\n    clearMain().append(head, orderNow, open, location)\n}\n\nfunction loadMenu() {\n    const main = clearMain();\n\n    for (let food of _data__WEBPACK_IMPORTED_MODULE_0__.foods) {\n        const card = document.createElement('div');\n\n        const foodName = document.createElement('p');\n        foodName.textContent = food.name;\n\n        const foodDesc = document.createElement('p');\n        foodDesc.textContent = food.desc;\n\n        const foodPrice = document.createElement('p');\n        foodPrice.textContent = food.price;\n\n        card.append(foodName, foodDesc, foodPrice)\n        card.classList.add('card')\n\n        main.append(card)\n    }\n   main.classList.add('menu');\n}\n\nfunction loadContact() {\n    const phone = document.createElement('p');\n    phone.textContent = `Phone: ${_data__WEBPACK_IMPORTED_MODULE_0__.contact.phone}`;\n\n    const email = document.createElement('p');\n    email.textContent = `Email: ${_data__WEBPACK_IMPORTED_MODULE_0__.contact.email}`;\n\n    const messageUs = document.createElement('p');\n    messageUs.textContent = 'Message us:';\n\n    const div = document.createElement('div')\n\n    const form = document.createElement('form')\n\n    const nameLabel = document.createElement('label')\n    nameLabel.textContent = 'Name:'\n\n    const name = document.createElement('input');\n    name.type = 'text';\n\n    const emailLabel = document.createElement('label')\n    emailLabel.textContent = 'Email:'\n\n    const messageLabel = document.createElement('label')\n    messageLabel.textContent = 'Message:'\n\n    const formEmail = document.createElement('input');\n    formEmail.type = 'email';\n\n    const message = document.createElement('textarea');\n\n    const submit = document.createElement('button');\n    submit.textContent = 'Submit'\n    submit.type = 'submit';\n\n    form.append(nameLabel, name, emailLabel, formEmail, messageLabel, message, submit);\n\n    div.append(form);\n\n    const main = clearMain()\n    main.append(phone, email, messageUs, div)\n    main.classList.add('contact')\n}\n\n\n\n//# sourceURL=webpack://restaurant-page/./src/loadTabs.js?");

/***/ }),

/***/ "./src/img/backgroundImg.jpg":
/*!***********************************!*\
  !*** ./src/img/backgroundImg.jpg ***!
  \***********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"cedcff36be07323d6acc.jpg\";\n\n//# sourceURL=webpack://restaurant-page/./src/img/backgroundImg.jpg?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/nonce */
/******/ 	(() => {
/******/ 		__webpack_require__.nc = undefined;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;