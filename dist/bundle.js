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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./dist/assets/styles/styles.scss":
/*!****************************************!*\
  !*** ./dist/assets/styles/styles.scss ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var api = __webpack_require__(/*! ../../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
            var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js!../../../node_modules/sass-loader/dist/cjs.js!./styles.scss */ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/styles.scss");

            content = content.__esModule ? content.default : content;

            if (typeof content === 'string') {
              content = [[module.i, content, '']];
            }

var options = {};

options.insert = "head";
options.singleton = false;

var update = api(content, options);



module.exports = content.locals || {};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/styles.scss":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./node_modules/sass-loader/dist/cjs.js!./dist/assets/styles/styles.scss ***!
  \*********************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
exports = ___CSS_LOADER_API_IMPORT___(false);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@100;300;400&family=Titillium+Web:wght@300&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@100;300;400&family=Titillium+Web:wght@300&display=swap);"]);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: orange; }\n\n.label-0 {\n  fill: orange;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: red; }\n\n.label-1 {\n  fill: red;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: green; }\n\n.label-2 {\n  fill: green;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: blue; }\n\n.label-3 {\n  fill: blue;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: cyan; }\n\n.label-4 {\n  fill: cyan;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: purple; }\n\n.label-5 {\n  fill: purple;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: brown; }\n\n.label-6 {\n  fill: brown;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: yellow; }\n\n.label-7 {\n  fill: yellow;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: pink; }\n\n.label-8 {\n  fill: pink;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-9, .label-9 {\n  fill: none;\n  stroke: #9ee276; }\n\n.label-9 {\n  fill: #9ee276;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
// Exports
module.exports = exports;


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
// css base code, injected by the css-loader
// eslint-disable-next-line func-names
module.exports = function (useSourceMap) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = cssWithMappingToString(item, useSourceMap);

      if (item[2]) {
        return "@media ".concat(item[2], " {").concat(content, "}");
      }

      return content;
    }).join('');
  }; // import a list of modules into the list
  // eslint-disable-next-line func-names


  list.i = function (modules, mediaQuery, dedupe) {
    if (typeof modules === 'string') {
      // eslint-disable-next-line no-param-reassign
      modules = [[null, modules, '']];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var i = 0; i < this.length; i++) {
        // eslint-disable-next-line prefer-destructuring
        var id = this[i][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _i = 0; _i < modules.length; _i++) {
      var item = [].concat(modules[_i]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        // eslint-disable-next-line no-continue
        continue;
      }

      if (mediaQuery) {
        if (!item[2]) {
          item[2] = mediaQuery;
        } else {
          item[2] = "".concat(mediaQuery, " and ").concat(item[2]);
        }
      }

      list.push(item);
    }
  };

  return list;
};

function cssWithMappingToString(item, useSourceMap) {
  var content = item[1] || ''; // eslint-disable-next-line prefer-destructuring

  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (useSourceMap && typeof btoa === 'function') {
    var sourceMapping = toComment(cssMapping);
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || '').concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join('\n');
  }

  return [content].join('\n');
} // Adapted from convert-source-map (MIT)


function toComment(sourceMap) {
  // eslint-disable-next-line no-undef
  var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap))));
  var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
  return "/*# ".concat(data, " */");
}

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isOldIE = function isOldIE() {
  var memo;
  return function memorize() {
    if (typeof memo === 'undefined') {
      // Test for IE <= 9 as proposed by Browserhacks
      // @see http://browserhacks.com/#hack-e71d8692f65334173fee715c222cb805
      // Tests for existence of standard globals is to allow style-loader
      // to operate correctly into non-standard environments
      // @see https://github.com/webpack-contrib/style-loader/issues/177
      memo = Boolean(window && document && document.all && !window.atob);
    }

    return memo;
  };
}();

var getTarget = function getTarget() {
  var memo = {};
  return function memorize(target) {
    if (typeof memo[target] === 'undefined') {
      var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

      if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
        try {
          // This will throw an exception if access to iframe is blocked
          // due to cross-origin restrictions
          styleTarget = styleTarget.contentDocument.head;
        } catch (e) {
          // istanbul ignore next
          styleTarget = null;
        }
      }

      memo[target] = styleTarget;
    }

    return memo[target];
  };
}();

var stylesInDom = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDom.length; i++) {
    if (stylesInDom[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var index = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3]
    };

    if (index !== -1) {
      stylesInDom[index].references++;
      stylesInDom[index].updater(obj);
    } else {
      stylesInDom.push({
        identifier: identifier,
        updater: addStyle(obj, options),
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function insertStyleElement(options) {
  var style = document.createElement('style');
  var attributes = options.attributes || {};

  if (typeof attributes.nonce === 'undefined') {
    var nonce =  true ? __webpack_require__.nc : undefined;

    if (nonce) {
      attributes.nonce = nonce;
    }
  }

  Object.keys(attributes).forEach(function (key) {
    style.setAttribute(key, attributes[key]);
  });

  if (typeof options.insert === 'function') {
    options.insert(style);
  } else {
    var target = getTarget(options.insert || 'head');

    if (!target) {
      throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
    }

    target.appendChild(style);
  }

  return style;
}

function removeStyleElement(style) {
  // istanbul ignore if
  if (style.parentNode === null) {
    return false;
  }

  style.parentNode.removeChild(style);
}
/* istanbul ignore next  */


var replaceText = function replaceText() {
  var textStore = [];
  return function replace(index, replacement) {
    textStore[index] = replacement;
    return textStore.filter(Boolean).join('\n');
  };
}();

function applyToSingletonTag(style, index, remove, obj) {
  var css = remove ? '' : obj.media ? "@media ".concat(obj.media, " {").concat(obj.css, "}") : obj.css; // For old IE

  /* istanbul ignore if  */

  if (style.styleSheet) {
    style.styleSheet.cssText = replaceText(index, css);
  } else {
    var cssNode = document.createTextNode(css);
    var childNodes = style.childNodes;

    if (childNodes[index]) {
      style.removeChild(childNodes[index]);
    }

    if (childNodes.length) {
      style.insertBefore(cssNode, childNodes[index]);
    } else {
      style.appendChild(cssNode);
    }
  }
}

function applyToTag(style, options, obj) {
  var css = obj.css;
  var media = obj.media;
  var sourceMap = obj.sourceMap;

  if (media) {
    style.setAttribute('media', media);
  } else {
    style.removeAttribute('media');
  }

  if (sourceMap && btoa) {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    while (style.firstChild) {
      style.removeChild(style.firstChild);
    }

    style.appendChild(document.createTextNode(css));
  }
}

var singleton = null;
var singletonCounter = 0;

function addStyle(obj, options) {
  var style;
  var update;
  var remove;

  if (options.singleton) {
    var styleIndex = singletonCounter++;
    style = singleton || (singleton = insertStyleElement(options));
    update = applyToSingletonTag.bind(null, style, styleIndex, false);
    remove = applyToSingletonTag.bind(null, style, styleIndex, true);
  } else {
    style = insertStyleElement(options);
    update = applyToTag.bind(null, style, options);

    remove = function remove() {
      removeStyleElement(style);
    };
  }

  update(obj);
  return function updateStyle(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap) {
        return;
      }

      update(obj = newObj);
    } else {
      remove();
    }
  };
}

module.exports = function (list, options) {
  options = options || {}; // Force single-tag solution on IE6-9, which has a hard limit on the # of <style>
  // tags it will allow on a page

  if (!options.singleton && typeof options.singleton !== 'boolean') {
    options.singleton = isOldIE();
  }

  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    if (Object.prototype.toString.call(newList) !== '[object Array]') {
      return;
    }

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDom[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDom[_index].references === 0) {
        stylesInDom[_index].updater();

        stylesInDom.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./src/dataTransformer.js":
/*!********************************!*\
  !*** ./src/dataTransformer.js ***!
  \********************************/
/*! exports provided: retriever, createDataset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retriever", function() { return retriever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataset", function() { return createDataset; });
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.js */ "./src/terms.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_terms_js__WEBPACK_IMPORTED_MODULE_0__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

 // parse the date and time; store data in variable dataA

var timeConv = d3.timeParse("%b %d, %Y");

function changeYToMovingAverage(dataset) {
  // interval is the num weeks over which the movingAverage is calculated
  var interval = 3;
  dataset.forEach(function (termSlice) {
    var averageChecker = [];
    var averages = termSlice.values.map(function (v, i) {
      // console.log("v", v)
      // console.log("i", i)
      // console.log("d.values", d.values)
      if (i < interval) {
        return;
      }

      var movingTotal = 0;
      termSlice.values.slice(i - interval, i).forEach(function (v) {
        movingTotal += v.point;
      });
      var movingAverage = Math.round(movingTotal / interval);
      averageChecker.push([v.point, movingAverage]); // console.log("movingTotal", movingTotal);
      // console.log("movingAverage", movingAverage);

      return {
        date: v.date,
        point: movingAverage
      };
    });
    console.log("averages", averageChecker);
    termSlice.values = averages.slice(interval);
  });
} // mainSet is an array of (terms for the year) only
// for the groupedSet (subdatasets), store corresponding file-fetching promises in the array "retrievedPromises"


function retriever(mainSet, groupedSet) {
  var retrievedPromises = [];
  groupedSet.forEach(function (set, index) {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json("./dist/assets/data/2019_".concat(index, ".json")));
  });
  return [mainSet.length, retrievedPromises];
} // returns a promise that creates the dataset for d3 to use
// takes in input args that were returned from the function "retriever"


function createDataset(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      numWords = _ref2[0],
      arrayOfPromises = _ref2[1];

  // this will store the dataset for d3 to use
  var dataset = []; // keeps track of the index of each term

  var mainIndex = 0; // returns the appropriate relative value, using the value of the comparison term as a reference

  function calibrate(d, index, dValueIndex) {
    var numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)

    var denominator = d.value[0]; // comparison value in current promise

    var ratio; // console.log("d, index", d, index)

    if (denominator === 0) {
      ratio = 0;
    } else {
      ratio = numerator / denominator;
    }

    return Math.round(+d.value[dValueIndex] * ratio);
  }

  console.log("start createDataset"); // takes in a promise, and its index in the arrayOfPromises (to tell if it is the first or subsequent subdatasets)
  // returns a promise that writes the data in appropriate format for d3 to use

  function getData(promise, promiseIndex) {
    return promise.then(function (data) {
      // console.log("promisedata", data)
      var increment = 0; // keeps track of the index within each subdataset

      var maxQueries = 5; // max num of Google Trends API queries

      while (increment < maxQueries && mainIndex < numWords) {
        var slice = {
          term: _terms_js__WEBPACK_IMPORTED_MODULE_0__["$2019"][mainIndex],
          values: data.map(function (d, index) {
            console.log("ddddddd", d);
            var point = promiseIndex === 0 ? +d.value[mainIndex] : calibrate(d, index, increment + 1);
            return {
              date: timeConv(d.formattedAxisTime),
              // point: +d.value[mainIndex]
              point: point //   movingAveragePoint: getMovingAverage(12, index)

            };
          })
        };
        console.log("slice", slice);
        dataset.push(slice);
        increment += 1;
        mainIndex += 1;
      }

      return dataset;
    });
  } // each promise will be transformed to the data-writing promise and stored in newPromisesArray


  var newPromisesArray = [];
  return getData(arrayOfPromises[0], 0) // create dataset from the first subdataset,
  // then (below) add data from subsequent subdatasets
  .then(function (res) {
    arrayOfPromises.slice(1).map(function (promise, index) {
      var newPromise = getData(promise, index + 1); // console.log("newpromise",newPromise)

      newPromisesArray.push(newPromise);
    }); // console.log("dataset before promise.all", dataset)

    return Promise.all(newPromisesArray); // execute all the new promises
  }).then(function (res) {
    console.log("dataset", dataset);
    changeYToMovingAverage(dataset); // console.log("datasetAfter MovingAverage", dataset)

    return dataset;
  });
}

 // module.exports = { retriever, createDataset }

/***/ }),

/***/ "./src/drawChart.js":
/*!**************************!*\
  !*** ./src/drawChart.js ***!
  \**************************/
/*! exports provided: chartTemplate */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartTemplate", function() { return chartTemplate; });
// creating reusable chart
function chartTemplate() {
  // set the dimensions and margins of the svg
  var width = 800;
  var height = 800;
  var adj = 30;

  function draw(selection) {
    selection.each(function (data) {
      console.log("data_draw", data); // SCALES: x-axis
      // define min and max values for domain on x-axis (time)

      var startDate = d3.min(data, function (d) {
        return d3.min(d.values, function (v) {
          return v.date;
        });
      });
      console.log("startDate", startDate);
      var endDate = d3.max(data, function (d) {
        return d3.max(d.values, function (v) {
          return v.date;
        });
      }); // set domain and range of x-axis

      var xScale = d3.scaleTime().domain([startDate, endDate]).range([0, width]); // SCALES: y-axis
      // define max value for domain on y-axis (points)

      var maxY = d3.max(data, function (s) {
        return d3.max(s.values, function (v) {
          return v.point;
        });
      }); // set domain of y-axis

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]); // AXES

      var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0); // const yAxis = d3.axisLeft()
      //                 .scale(yScale)
      //                 .tickValues([])
      //                 .tickSizeOuter(0)
      // AXES: gridlines

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat("").tickValues([100 / 3, 200 / 3, 100]).tickSizeOuter(0); // append svg

      var svg = d3.select(this).append("svg").attr("class", "chart").attr("width", width).attr("height", height).attr("viewBox", "-".concat(adj, " -").concat(adj, " ").concat(width + adj * 10, " ").concat(height + adj * 2)).attr("preserveAspectRatio", "xMinYMin meet"); // draw x-axis

      svg.append("g").attr("class", "x-axis").attr("transform", "translate(0, ".concat(height, ")")).call(xAxis); // .call calls the function xAxis on the elements of the selection g
      // d3.selectAll("g.tick:last-of-type").text.append("Jan");
      // console.log("test", d3.selectAll("g.tick:last-of-type"))
      // draw y-axis

      svg.append("g").attr("class", "y-axis-grid").call(yAxisGrid); // .append("text")
      // .text("Frequency")
      // .attr("dy", "0.75em")
      // .attr("y", -40)
      // .style("text-anchor", "end");
      // draw lines
      // function to separate out labels that overlap

      function addLabelCoords(dataset) {
        var yLabelValues = [];
        var yLabelValuesOriginal = [];
        var space = 15;
        data.forEach(function (s) {
          var lastIndex = s.values.length - 1;
          s.labelX = xScale(s.values[lastIndex].date);
          s.labelY = yScale(s.values[lastIndex].point);
          yLabelValues.push(s.labelY);
          yLabelValuesOriginal.push(s.labelY);
        }); // console.log("ylabelvalues", yLabelValues)

        yLabelValues.forEach(function (v1, i) {
          yLabelValues.forEach(function (v2, j) {
            var count = 0;
            var yDiff = Math.abs(v2 - v1);
            var movingY = yLabelValuesOriginal[j] >= yLabelValuesOriginal[i] ? j : i;

            if (i !== j && yDiff < 3) {
              // console.log(i, j, yLabelValues[i], yLabelValues[j]);
              count += 1;
              yLabelValues[movingY] = v2 + space; // console.log("after edit", i, j, yLabelValues[i], yLabelValues[j]);
            }
          });
        });
        data.forEach(function (s, i) {
          s.labelY = yLabelValues[i];
        }); // console.log("ylabelvalues", yLabelValues)
      } // call function


      addLabelCoords(data);
      data.forEach(function (d, i) {
        // console.log("d", d)
        // console.log("d.values", d.values)
        var dates = d.values.map(function (v) {
          return xScale(v.date);
        });
        var points = d.values.map(function (v) {
          return v.point;
        }); //   console.log("dates", d.term, dates)
        //   console.log("points", d.term, points   )

        var splineDate = d3.interpolateBasis(dates);
        var splinePoint = d3.interpolateBasis(points); // console.log("quantDate", d3.quantize(splineDate, 113))
        // console.log("quantPoint", d3.quantize(splinePoint, 113));

        var originalNumOfPoints = d.values.length;
        var degree = 10 * originalNumOfPoints;
        d.splined = d3.zip(d3.quantize(splineDate, degree), d3.quantize(splinePoint, degree)); // d.values[i].point = d3.quantize(spline, 113)[i]
      });
      console.log("newdata", data); // const spline = d3.interpolateBasis([0, 0.2, 1])
      // console.log("quant", d3.quantize(spline, 6))
      // console.log('spline', spline)

      var line = d3.line().x(function (d) {
        //   return xScale(d.date);
        return d[0];
      }).y(function (d) {
        return yScale(d[1]);
      });
      var lines = svg.selectAll("lines").data(data).enter().append("g");
      lines.append("path").attr("class", function (d, i) {
        return "line-".concat(i);
      }).attr("d", function (d) {
        return line(d.splined);
      }); // add labels to each line

      lines.append("text").attr("class", function (d, i) {
        return "label label-".concat(i);
      }).text(function (d) {
        return "\u21FD       ".concat(d.term);
      }).attr("x", 5).attr("transform", function (d, i) {
        var lastIndex = d.values.length - 1;
        var labelX = xScale(d.values[lastIndex].date);
        var labelY = yScale(d.values[lastIndex].point);
        return "translate(".concat(labelX, ", ").concat(labelY, ")"); //   return `translate(${d.labelX}, ${d.labelY})`;
      });
      console.log(d3.selectAll(".label"));
    });
  } // accessor / setter functions for width and height


  draw.width = function (value) {
    if (!arguments.length) {
      return width;
    }

    width = value;
    return draw;
  };

  draw.height = function (value) {
    if (!arguments.length) {
      return height;
    }

    height = value;
    return draw;
  }; // return draw function


  return draw;
}

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _z_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./z_example.js */ "./src/z_example.js");
/* harmony import */ var _z_simple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./z_simple.js */ "./src/z_simple.js");
/* harmony import */ var _dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./dataTransformer.js */ "./src/dataTransformer.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./terms.js */ "./src/terms.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_terms_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _drawChart_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./drawChart.js */ "./src/drawChart.js");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../dist/assets/styles/styles.scss */ "./dist/assets/styles/styles.scss");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_5__);

 // data


 // d3 chart


 // // to illustrate svg path mini-language
// // const illustration = svg.append("path")
//     // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
// // stretch data values from 0 to the svg's width
// // const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js content has loaded"); //// console.log("search terms", searchTerms)

  var testArray = Object(_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["retriever"])(_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019"], _terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_sets"]);
  console.log("testArray", testArray); // let test = createDataset(testArray);
  // console.log('indexjs Test', test)
  // CALL DRAW CHART FUNCTION

  Object(_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(testArray).then(function (d) {
    console.log("woohoo", d);
    d3.select("#container").datum(d).call(Object(_drawChart_js__WEBPACK_IMPORTED_MODULE_4__["chartTemplate"])());
  }); // simple_example();
  // test_function();
}); //   // //----------------------------[interactive]POINTS------------------------------//
//   // lines.selectAll("points")
//   //   .data(function (d) { return d.values })
//   //   .enter()
//   //   .append("circle")
//   //   .attr("cx", function (d) { return xScale(d.date); })
//   //   .attr("cy", function (d) { return yScale(d.point); })
//   //   .attr("r", 1)
//   //   .attr("class", "point")
//   //   .style("opacity", 1);

/***/ }),

/***/ "./src/terms.js":
/*!**********************!*\
  !*** ./src/terms.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var $2019 = ["sb", // "ok boomer",
// "vsco",
"sfs", "fyp", "s/u", "ngl", "simp", "and i oop" // "yktv",
// "iykyk",
// "sksksk"
];
var oneHit = ["slatt", "ants"]; // takes in the (terms only) array;
// returns an array of the actual search queries to be made using the Google Trends API

function searchTermsGenerator(array) {
  var searchTerms = [];
  array.forEach(function (term) {
    searchTerms.push("what does ".concat(term, " mean"));
  }); // console.log(searchTerms);

  return searchTerms;
}

; // Output: returns an array of arrays; each subarray will contain the 
// search queries to be made, up to the maxNumOfQueries allowed on Google Trends API.
// Thus, each subarray will later return a subdataset, each with a common term.
// Input arg "array" is the array of terms as search queries.
// Input arg joinIndex is the index of the common term on which we calibrate each subdataset.

function splitter(array, maxNumOfQueries, joinIndex) {
  var joinValue = array[joinIndex];
  var interval = -1 + maxNumOfQueries;
  var result = [];

  for (var i = 1; i < array.length;) {
    var group = array.slice(i, i + interval);
    var set = [joinValue].concat(group);
    result.push(set);
    i += interval; // jump to the next element in array which hasn't yet been added to a subarray
  } // console.log("splitter",result)


  return result;
}

var $2019_searchTerms = searchTermsGenerator($2019);
var $2019_sets = splitter($2019_searchTerms, 5, 0);
var $2018 = ["incel", "uwu", "mukbang", "ibf", "blockchain", "rng", "jit", "juuling", "gekyume", "zaddy", "wtm", "wig"];
var $2017 = ["non binary", "bitcoin", "snowflake", "pmoys", "maga", "wasp", "boujie", "trolls"];
var $2016 = ["gaslighting", "sjw", "boolin", "woke", "shill", "quash", "brandish", "triggered", "shook", "bigly", "holosexual", "vexing", "bough", "juju", "wavy"];
var $2015 = ["simmer", "netflix and chill", "chapo", "stoop", "blase", "pleb", "lowkey", "tome", "wap", "shudder", "burnt", "vape"];
module.exports = {
  $2019: $2019,
  $2019_searchTerms: $2019_searchTerms,
  $2019_sets: $2019_sets
};

/***/ }),

/***/ "./src/z_example.js":
/*!**************************!*\
  !*** ./src/z_example.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return test_function; });
function test_function() {
  // document.addEventListener("DOMContentLoaded", function () {
  console.log("example.js content has loaded");
  var width = 960;
  var height = 500;
  var margin = 5;
  var padding = 5;
  var adj = 30; // we are appending SVG first - edited adj

  var svg = d3.select("#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", -1 * adj + " " + -1 * adj + " " + (width + 3 * adj) + " " + (height + 3 * adj)).style("padding", padding).style("margin", margin).classed("svg-content", true); //-----------------------------DATA------------------------------//

  var timeConv = d3.timeParse("%d-%b-%Y");
  var dataset = d3.csv("./dist/assets/test.csv");
  dataset.then(function (data) {
    console.log("example_data", data);
    var slices = data.columns.slice(1).map(function (id) {
      return {
        id: id,
        values: data.map(function (d) {
          return {
            date: timeConv(d.date),
            measurement: +d[id]
          };
        })
      };
    }); //    console.log("Column headers", data.columns);
    //  console.log("Column headers without date", data.columns.slice(1));
    //    // returns the sliced dataset

    console.log("example_slices", slices); //    // returns the first slice
    //    console.log("First slice",slices[0]);
    //    // returns the array in the first slice
    //    console.log("A array",slices[0].values);
    //    // returns the date of the first row in the first slice
    //    console.log("Date element",slices[0].values[0].date);
    //    // returns the array's length
    //    console.log("Array length",(slices[0].values).length);
    //----------------------------SCALES-----------------------------//
    // stretch data values from 0 to the svg's width

    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().rangeRound([height, 0]);
    xScale.domain(d3.extent(data, function (d) {
      return timeConv(d.date);
    }));
    yScale.domain([0, d3.max(slices, function (c) {
      return d3.max(c.values, function (d) {
        return d.measurement + 4;
      });
    })]); // returns undefined:
    // console.log("example_xScale", xScale());
    //-----------------------------AXES------------------------------//

    var yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale);
    var xaxis = d3.axisBottom().ticks(d3.timeDay.every(1)).tickFormat(d3.timeFormat("%b %d")).scale(xScale); //----------------------------LINES------------------------------//

    var line = d3.line().x(function (d) {
      return xScale(d.date);
    }).y(function (d) {
      return yScale(d.measurement);
    });
    var id = 0;

    var ids = function ids() {
      return "line-" + id++;
    }; //-------------------------2. DRAWING----------------------------//
    //-----------------------------AXES------------------------------//


    svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")").call(xaxis);
    svg.append("g").attr("class", "axis").call(yaxis).append("text").attr("transform", "rotate(-90)").attr("dy", "0.75em").attr("y", 6).style("text-anchor", "end").text("Frequency"); //----------------------------LINES------------------------------//

    var lines = svg.selectAll("lines").data(slices).enter().append("g");
    lines.append("path").attr("class", ids).attr("d", function (d) {
      return line(d.values);
    });
    lines.append("text").attr("class", "serie_label") // .datum(function (d) {
    //     return {
    //         ide: d.id,
    //         valuee: d.values[d.values.length - 1]
    //     };
    // })
    .attr("transform", function (d) {
      return "translate(" + (xScale(d.values[d.values.length - 1].date) + 10) + "," + (yScale(d.values[d.values.length - 1].measurement) + 5) + ")";
    }).attr("x", 5).text(function (d) {
      return "Serie " + d.id;
    }); // .attr("class", function(d) { return d.value } )
  }); // })
}

/***/ }),

/***/ "./src/z_simple.js":
/*!*************************!*\
  !*** ./src/z_simple.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return simple_example; });
var data = [3, 66, 2, 76, 5, 20, 1, 30, 50, 9, 80, 5, 7];
var terr = [5, 5, 5, 5, 80, 80, 2, 3, 1, 2, 60, 1, 2, 33];
var flower = [[5, 5], [1, 2], [80, 80]];
var bee = [{
  value: 7,
  label: 2
}, {
  value: 1,
  label: 3
}];

function chartA() {
  console.log("this is chartA");
  var width = 20;
  var height = 200;
  var x = d3.scaleLinear().domain([0, 1]).range([0, width]);
  var y = d3.scaleLinear().domain([0, 100]).rangeRound([height, 0]);
  var line = d3.line().x(function (d, i) {
    return x(i);
  }).y(function (d) {
    return y(d);
  });

  function my(selection) {
    console.log("returning my");
    selection.each(function (data) {
      console.log("this", this);
      var scaletest = d3.min(data, function (d) {
        return d.value;
      });
      console.log("scaletest", scaletest); // "this" is the selected element (in this case, div with id="#container")

      var chart = d3.select(this).append("svg").attr("class", "chart").attr("width", width * data.length - 1).attr("height", height);
      chart.append("path").attr("d", function (strawberry) {
        return line(data);
      });
    });
  }

  my.width = function (value) {
    if (!arguments.length) {
      return width;
    } else {
      width = value;
      return my;
    }
  };

  my.height = function (value) {
    if (!arguments.length) {
      return height;
    } else {
      height = value;
      return my;
    }
  };

  return my;
}

function simple_example() {
  console.log("simple.js content has loaded"); // console.log("chartA's width", chartA().width())
  // console.log("chartA's my", chartA())
  // const chartB = chartA().height(300)
  // console.log("chartB's my", chartB)
  // console.log("chartB's height", chartB.height())
  // d3.select("#container").datum(data).call(chartA())
  // d3.select("#container2").datum(bee).call(chartA())
}

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy96X2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsImNvbnNvbGUiLCJsb2ciLCJyZXRyaWV2ZXIiLCJtYWluU2V0IiwiZ3JvdXBlZFNldCIsInJldHJpZXZlZFByb21pc2VzIiwic2V0IiwiaW5kZXgiLCJqc29uIiwibGVuZ3RoIiwiY3JlYXRlRGF0YXNldCIsIm51bVdvcmRzIiwiYXJyYXlPZlByb21pc2VzIiwibWFpbkluZGV4IiwiY2FsaWJyYXRlIiwiZCIsImRWYWx1ZUluZGV4IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJ2YWx1ZSIsInJhdGlvIiwiZ2V0RGF0YSIsInByb21pc2UiLCJwcm9taXNlSW5kZXgiLCJ0aGVuIiwiZGF0YSIsImluY3JlbWVudCIsIm1heFF1ZXJpZXMiLCJ0ZXJtIiwiJDIwMTkiLCJmb3JtYXR0ZWRBeGlzVGltZSIsIm5ld1Byb21pc2VzQXJyYXkiLCJyZXMiLCJuZXdQcm9taXNlIiwiUHJvbWlzZSIsImFsbCIsImNoYXJ0VGVtcGxhdGUiLCJ3aWR0aCIsImhlaWdodCIsImFkaiIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwic3RhcnREYXRlIiwibWluIiwiZW5kRGF0ZSIsIm1heCIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsInJhbmdlIiwibWF4WSIsInMiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInRpY2tzIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tTaXplT3V0ZXIiLCJ5QXhpc0dyaWQiLCJheGlzTGVmdCIsInRpY2tTaXplIiwidGlja1ZhbHVlcyIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwiYWRkTGFiZWxDb29yZHMiLCJ5TGFiZWxWYWx1ZXMiLCJ5TGFiZWxWYWx1ZXNPcmlnaW5hbCIsInNwYWNlIiwibGFzdEluZGV4IiwibGFiZWxYIiwibGFiZWxZIiwidjEiLCJ2MiIsImoiLCJjb3VudCIsInlEaWZmIiwiYWJzIiwibW92aW5nWSIsImRhdGVzIiwicG9pbnRzIiwic3BsaW5lRGF0ZSIsImludGVycG9sYXRlQmFzaXMiLCJzcGxpbmVQb2ludCIsIm9yaWdpbmFsTnVtT2ZQb2ludHMiLCJkZWdyZWUiLCJzcGxpbmVkIiwiemlwIiwicXVhbnRpemUiLCJsaW5lIiwieCIsInkiLCJsaW5lcyIsInNlbGVjdEFsbCIsImVudGVyIiwidGV4dCIsImFyZ3VtZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RBcnJheSIsIiQyMDE5X3NldHMiLCJkYXR1bSIsIm9uZUhpdCIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwibWF4TnVtT2ZRdWVyaWVzIiwiam9pbkluZGV4Iiwiam9pblZhbHVlIiwicmVzdWx0IiwiZ3JvdXAiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1IiwibW9kdWxlIiwiZXhwb3J0cyIsInRlc3RfZnVuY3Rpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwic3R5bGUiLCJjbGFzc2VkIiwiY3N2Iiwic2xpY2VzIiwiY29sdW1ucyIsImlkIiwibWVhc3VyZW1lbnQiLCJleHRlbnQiLCJjIiwieWF4aXMiLCJ4YXhpcyIsInRpbWVEYXkiLCJpZHMiLCJ0ZXJyIiwiZmxvd2VyIiwiYmVlIiwibGFiZWwiLCJjaGFydEEiLCJteSIsInNjYWxldGVzdCIsImNoYXJ0Iiwic3RyYXdiZXJyeSIsInNpbXBsZV9leGFtcGxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFB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QUl0QztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFRjtBQUdELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbiN0aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2ludHJvLWRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJmZjtcXG4gIGhlaWdodDogMjB2aDsgfVxcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxucGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibGFjazsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbiNjb250YWluZXIgc3ZnIHtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4vKiBBWEVTICovXFxuLyogdGlja3MgKi9cXG4uYXhpcyB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNTtcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAudGljayB7XFxuICBzdHJva2UtZGFzaGFycmF5OiA1LCA1O1xcbiAgc3Ryb2tlOiAjRDREOUUyO1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDAuMztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAuZG9tYWluIHtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwOyB9XFxuXFxuLyogLmF4aXMgbGluZSB7XFxuc3Ryb2tlOiAjNzA2ZjZmO1xcbnN0cm9rZS13aWR0aDogMC41O1xcbnNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59ICovXFxuLyogYXhpcyBjb250b3VyICovXFxuLmF4aXMgcGF0aCB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi8qIGF4aXMgdGV4dCAqL1xcbi5heGlzIHRleHQge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTEwJTsgfVxcblxcbi8qIExJTkUgQ0hBUlQgKi9cXG4vKiBsaW5lICovXFxuLmxpbmUtMCwgLmxhYmVsLTAge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogb3JhbmdlOyB9XFxuXFxuLmxhYmVsLTAge1xcbiAgZmlsbDogb3JhbmdlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcmVkOyB9XFxuXFxuLmxhYmVsLTEge1xcbiAgZmlsbDogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMiwgLmxhYmVsLTIge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogZ3JlZW47IH1cXG5cXG4ubGFiZWwtMiB7XFxuICBmaWxsOiBncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsdWU7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiBibHVlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogY3lhbjsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6IGN5YW47XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBwdXJwbGU7IH1cXG5cXG4ubGFiZWwtNSB7XFxuICBmaWxsOiBwdXJwbGU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS02LCAubGFiZWwtNiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBicm93bjsgfVxcblxcbi5sYWJlbC02IHtcXG4gIGZpbGw6IGJyb3duO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogeWVsbG93OyB9XFxuXFxuLmxhYmVsLTcge1xcbiAgZmlsbDogeWVsbG93O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtOCwgLmxhYmVsLTgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcGluazsgfVxcblxcbi5sYWJlbC04IHtcXG4gIGZpbGw6IHBpbms7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS05LCAubGFiZWwtOSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjOWVlMjc2OyB9XFxuXFxuLmxhYmVsLTkge1xcbiAgZmlsbDogIzllZTI3NjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi8qIGludGVyYWN0aXZlIGVsZW1lbnRzICovXFxuLyogVE9PTFRJUCAqL1xcbi50b29sdGlwIHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogYXJpYWw7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4vKiBQT0lOVFMgKi9cXG4ucG9pbnQge1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogIzljOWM5YzsgfVxcblxcbi8qIGZvciBleHBlcmltZW50aW5nIC0gY29sb3JpbmcgZWxlbWVudHMgKi9cXG4vKiBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufSAqL1xcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyAkMjAxOSwgJDIwMTlfc2VhcmNoVGVybXMsICQyMDE5X3NldHMgfSBmcm9tIFwiLi90ZXJtcy5qc1wiO1xuXG4vLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZTsgc3RvcmUgZGF0YSBpbiB2YXJpYWJsZSBkYXRhQVxuY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG5cbmZ1bmN0aW9uIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UgKGRhdGFzZXQpIHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgbnVtIHdlZWtzIG92ZXIgd2hpY2ggdGhlIG1vdmluZ0F2ZXJhZ2UgaXMgY2FsY3VsYXRlZFxuICAgIGNvbnN0IGludGVydmFsID0gMztcblxuICAgIGRhdGFzZXQuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlKSB7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VDaGVja2VyID0gW107XG4gICAgICBjb25zdCBhdmVyYWdlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkLnZhbHVlc1wiLCBkLnZhbHVlcylcblxuICAgICAgICBpZiAoaSA8IGludGVydmFsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmluZ1RvdGFsID0gMDtcblxuICAgICAgICB0ZXJtU2xpY2UudmFsdWVzLnNsaWNlKGkgLSBpbnRlcnZhbCwgaSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIG1vdmluZ1RvdGFsICs9IHYucG9pbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdmluZ0F2ZXJhZ2UgPSBNYXRoLnJvdW5kKG1vdmluZ1RvdGFsIC8gaW50ZXJ2YWwpO1xuXG4gICAgICAgIGF2ZXJhZ2VDaGVja2VyLnB1c2goW3YucG9pbnQsIG1vdmluZ0F2ZXJhZ2VdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nVG90YWxcIiwgbW92aW5nVG90YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ0F2ZXJhZ2VcIiwgbW92aW5nQXZlcmFnZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB2LmRhdGUsXG4gICAgICAgICAgcG9pbnQ6IG1vdmluZ0F2ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAgIGNvbnNvbGUubG9nKFwiYXZlcmFnZXNcIixhdmVyYWdlQ2hlY2tlcilcbiAgICAgIHRlcm1TbGljZS52YWx1ZXMgPSBhdmVyYWdlcy5zbGljZShpbnRlcnZhbCk7XG4gICAgfSk7XG59XG5cbi8vIG1haW5TZXQgaXMgYW4gYXJyYXkgb2YgKHRlcm1zIGZvciB0aGUgeWVhcikgb25seVxuLy8gZm9yIHRoZSBncm91cGVkU2V0IChzdWJkYXRhc2V0cyksIHN0b3JlIGNvcnJlc3BvbmRpbmcgZmlsZS1mZXRjaGluZyBwcm9taXNlcyBpbiB0aGUgYXJyYXkgXCJyZXRyaWV2ZWRQcm9taXNlc1wiXG5mdW5jdGlvbiByZXRyaWV2ZXIgKG1haW5TZXQsIGdyb3VwZWRTZXQpIHtcbiAgY29uc3QgcmV0cmlldmVkUHJvbWlzZXMgPSBbXTtcblxuICBncm91cGVkU2V0LmZvckVhY2goKHNldCwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVkUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gW21haW5TZXQubGVuZ3RoLCByZXRyaWV2ZWRQcm9taXNlc107XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciBkMyB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKFtudW1Xb3JkcywgYXJyYXlPZlByb21pc2VzXSkge1xuICAgIFxuICAgIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gICAgY29uc3QgZGF0YXNldCA9IFtdO1xuXG4gICAgLy8ga2VlcHMgdHJhY2sgb2YgdGhlIGluZGV4IG9mIGVhY2ggdGVybVxuICAgIGxldCBtYWluSW5kZXggPSAwO1xuXG4gICAgLy8gcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVsYXRpdmUgdmFsdWUsIHVzaW5nIHRoZSB2YWx1ZSBvZiB0aGUgY29tcGFyaXNvbiB0ZXJtIGFzIGEgcmVmZXJlbmNlXG4gICAgZnVuY3Rpb24gY2FsaWJyYXRlKGQsIGluZGV4LCBkVmFsdWVJbmRleCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IG51bWVyYXRvciA9IGRhdGFzZXRbMF0udmFsdWVzW2luZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgICBsZXQgZGVub21pbmF0b3IgPSBkLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZCwgaW5kZXhcIiwgZCwgaW5kZXgpXG4gICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJhdGlvID0gbnVtZXJhdG9yIC8gZGVub21pbmF0b3I7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoK2QudmFsdWVbZFZhbHVlSW5kZXhdICogcmF0aW8pO1xuICAgIH1cblxuXG4gICAgY29uc29sZS5sb2coXCJzdGFydCBjcmVhdGVEYXRhc2V0XCIpXG5cbiBcbiAgLy8gdGFrZXMgaW4gYSBwcm9taXNlLCBhbmQgaXRzIGluZGV4IGluIHRoZSBhcnJheU9mUHJvbWlzZXMgKHRvIHRlbGwgaWYgaXQgaXMgdGhlIGZpcnN0IG9yIHN1YnNlcXVlbnQgc3ViZGF0YXNldHMpXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd3JpdGVzIHRoZSBkYXRhIGluIGFwcHJvcHJpYXRlIGZvcm1hdCBmb3IgZDMgdG8gdXNlXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJwcm9taXNlZGF0YVwiLCBkYXRhKVxuXG4gICAgICBsZXQgaW5jcmVtZW50ID0gMDsgIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCB3aXRoaW4gZWFjaCBzdWJkYXRhc2V0XG4gICAgICBsZXQgbWF4UXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgR29vZ2xlIFRyZW5kcyBBUEkgcXVlcmllc1xuXG4gICAgICB3aGlsZSAoaW5jcmVtZW50IDwgbWF4UXVlcmllcyAmJiBtYWluSW5kZXggPCBudW1Xb3Jkcykge1xuICAgIFxuICAgICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgICB0ZXJtOiAkMjAxOVttYWluSW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZGRkZGRkZFwiICwgZClcbiAgICAgICAgICAgICAgbGV0IHBvaW50ID0gKHByb21pc2VJbmRleCA9PT0gMCApID8gK2QudmFsdWVbbWFpbkluZGV4XSA6IGNhbGlicmF0ZShkLCBpbmRleCwgaW5jcmVtZW50ICsgMSlcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgICAvLyBwb2ludDogK2QudmFsdWVbbWFpbkluZGV4XVxuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgICAgICAvLyAgIG1vdmluZ0F2ZXJhZ2VQb2ludDogZ2V0TW92aW5nQXZlcmFnZSgxMiwgaW5kZXgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJzbGljZVwiLCBzbGljZSlcbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICAgICAgICBtYWluSW5kZXggKz0gMTsgIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFzZXQ7XG5cbiAgICB9KVxuXG4gIH0gXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gW107IFxuICBcbiAgcmV0dXJuIGdldERhdGEoYXJyYXlPZlByb21pc2VzWzBdLCAwKSAvLyBjcmVhdGUgZGF0YXNldCBmcm9tIHRoZSBmaXJzdCBzdWJkYXRhc2V0LFxuICAvLyB0aGVuIChiZWxvdykgYWRkIGRhdGEgZnJvbSBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzXG4gIFxuICAudGhlbihyZXMgPT4ge1xuXG4gICAgYXJyYXlPZlByb21pc2VzLnNsaWNlKDEpLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgbGV0IG5ld1Byb21pc2UgPSBnZXREYXRhKHByb21pc2UsIGluZGV4ICsgMSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm5ld3Byb21pc2VcIixuZXdQcm9taXNlKVxuICAgICAgbmV3UHJvbWlzZXNBcnJheS5wdXNoKG5ld1Byb21pc2UpO1xuICAgIH0pXG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXQgYmVmb3JlIHByb21pc2UuYWxsXCIsIGRhdGFzZXQpXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld1Byb21pc2VzQXJyYXkpOyAgICAvLyBleGVjdXRlIGFsbCB0aGUgbmV3IHByb21pc2VzXG4gIH0pXG5cbiAgLnRoZW4ocmVzPT4ge1xuICAgIGNvbnNvbGUubG9nKFwiZGF0YXNldFwiLCBkYXRhc2V0KVxuICAgIFxuICAgIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UoZGF0YXNldCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0QWZ0ZXIgTW92aW5nQXZlcmFnZVwiLCBkYXRhc2V0KVxuXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH0pXG4gIFxuICBcbn1cblxuZXhwb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0fTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gODAwO1xuICBsZXQgaGVpZ2h0ID0gODAwO1xuICBsZXQgYWRqID0gMzA7XG5cblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFfZHJhd1wiLCBkYXRhKTtcbiAgICAgIFxuICAgIFxuICAgICAgLy8gU0NBTEVTOiB4LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1pbihkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJ0RGF0ZVwiLCBzdGFydERhdGUpXG5cbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIGFuZCByYW5nZSBvZiB4LWF4aXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAgIC5zY2FsZVRpbWUoKVxuICAgICAgICAuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAvLyBBWEVTXG4gICAgICBjb25zdCB4QXhpcyA9IGQzXG4gICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgLnNjYWxlKHhTY2FsZSlcbiAgICAgICAgLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW10pXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcblxuICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICBjb25zdCB5QXhpc0dyaWQgPSBkM1xuICAgICAgICAuYXhpc0xlZnQoKVxuICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAudGlja1NpemUoLXdpZHRoKVxuICAgICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgICAudGlja1ZhbHVlcyhbMTAwIC8gMywgMjAwIC8gMywgMTAwXSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcylcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICBcInZpZXdCb3hcIixcbiAgICAgICAgICBgLSR7YWRqfSAtJHthZGp9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpO1xuXG4gICAgICAvLyBkcmF3IHgtYXhpc1xuICAgICAgc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAgICAgLy8gZHJhdyBsaW5lc1xuXG4gICAgICAvLyBmdW5jdGlvbiB0byBzZXBhcmF0ZSBvdXQgbGFiZWxzIHRoYXQgb3ZlcmxhcFxuICAgICAgZnVuY3Rpb24gYWRkTGFiZWxDb29yZHMgKGRhdGFzZXQpIHtcbiAgICAgICAgICBsZXQgeUxhYmVsVmFsdWVzID0gW107XG4gICAgICAgICAgbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gW107XG4gICAgICAgICAgbGV0IHNwYWNlID0gMTU7XG5cbiAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgICAgbGV0IGxhc3RJbmRleCA9IHMudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgIHMubGFiZWxYID0geFNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBzLmxhYmVsWSA9IHlTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcbiAgICAgICAgICAgICAgeUxhYmVsVmFsdWVzLnB1c2gocy5sYWJlbFkpO1xuICAgICAgICAgICAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbC5wdXNoKHMubGFiZWxZKTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlsYWJlbHZhbHVlc1wiLCB5TGFiZWxWYWx1ZXMpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MSxpKSA9PiB7XG4gICAgICAgICAgICAgICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYyLCBqKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBjb3VudCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGxldCB5RGlmZiA9IE1hdGguYWJzKHYyIC0gdjEpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgbW92aW5nWSA9ICh5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSA+PSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSkgPyAoaikgOiAoaSlcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgIT09IGogJiYgeURpZmYgPCAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhpLCBqLCB5TGFiZWxWYWx1ZXNbaV0sIHlMYWJlbFZhbHVlc1tqXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudCArPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgeUxhYmVsVmFsdWVzW21vdmluZ1ldID0gdjIgKyBzcGFjZVxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJhZnRlciBlZGl0XCIsIGksIGosIHlMYWJlbFZhbHVlc1tpXSwgeUxhYmVsVmFsdWVzW2pdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24ocywgaSkge1xuICAgICAgICAgICAgICAgIHMubGFiZWxZID0geUxhYmVsVmFsdWVzW2ldO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieWxhYmVsdmFsdWVzXCIsIHlMYWJlbFZhbHVlcylcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNhbGwgZnVuY3Rpb25cbiAgICAgICAgYWRkTGFiZWxDb29yZHMoZGF0YSlcblxuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCwgaSkge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkXCIsIGQpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImQudmFsdWVzXCIsIGQudmFsdWVzKVxuICAgICAgICAgICAgY29uc3QgZGF0ZXMgPSBkLnZhbHVlcy5tYXAoZnVuY3Rpb24odikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpXG4gICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IGQudmFsdWVzLm1hcChmdW5jdGlvbih2KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdi5wb2ludFxuICAgICAgICAgICAgICB9KVxuXG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwiZGF0ZXNcIiwgZC50ZXJtLCBkYXRlcylcbiAgICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJwb2ludHNcIiwgZC50ZXJtLCBwb2ludHMgICApXG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBjb25zdCBzcGxpbmVEYXRlID0gZDMuaW50ZXJwb2xhdGVCYXNpcyhkYXRlcylcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29uc3Qgc3BsaW5lUG9pbnQgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKHBvaW50cylcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwicXVhbnREYXRlXCIsIGQzLnF1YW50aXplKHNwbGluZURhdGUsIDExMykpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW50UG9pbnRcIiwgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMykpO1xuICAgICAgICAgICAgICBjb25zdCBvcmlnaW5hbE51bU9mUG9pbnRzID0gZC52YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgICAgY29uc3QgZGVncmVlID0gMTAgKiBvcmlnaW5hbE51bU9mUG9pbnRzO1xuXG4gICAgICAgICAgICBkLnNwbGluZWQgPSBkMy56aXAoZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgZGVncmVlKSwgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIGRlZ3JlZSkpO1xuXG4gICAgICAgICAgICAvLyBkLnZhbHVlc1tpXS5wb2ludCA9IGQzLnF1YW50aXplKHNwbGluZSwgMTEzKVtpXVxuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3ZGF0YVwiLCBkYXRhKVxuICAgICAgICBcbiAgICAgICAgLy8gY29uc3Qgc3BsaW5lID0gZDMuaW50ZXJwb2xhdGVCYXNpcyhbMCwgMC4yLCAxXSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInF1YW50XCIsIGQzLnF1YW50aXplKHNwbGluZSwgNikpXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZygnc3BsaW5lJywgc3BsaW5lKVxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgICAubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHhTY2FsZShkLmRhdGUpO1xuICAgICAgICAgIHJldHVybiBkWzBdO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5U2NhbGUoZFsxXSk7XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGluZS0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGxpbmUoZC5zcGxpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsYWJlbCBsYWJlbC0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gYOKHvSAgICAgICAke2QudGVybX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcblxuXG4gICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtsYWJlbFh9LCAke2xhYmVsWX0pYDtcbiAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgfSlcblxuXG4gICAgY29uc29sZS5sb2coZDMuc2VsZWN0QWxsKFwiLmxhYmVsXCIpKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWNjZXNzb3IgLyBzZXR0ZXIgZnVuY3Rpb25zIGZvciB3aWR0aCBhbmQgaGVpZ2h0XG4gIGRyYXcud2lkdGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIGRyYXcuaGVpZ2h0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIC8vIHJldHVybiBkcmF3IGZ1bmN0aW9uXG4gIHJldHVybiBkcmF3O1xufVxuIiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vel9leGFtcGxlLmpzXCI7XG5pbXBvcnQgc2ltcGxlX2V4YW1wbGUgZnJvbSBcIi4vel9zaW1wbGUuanNcIjtcblxuLy8gZGF0YVxuaW1wb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0gZnJvbSBcIi4vZGF0YVRyYW5zZm9ybWVyLmpzXCI7XG5pbXBvcnQgeyAkMjAxOSwgJDIwMTlfc2VhcmNoVGVybXMsICQyMDE5X3NldHMgfSBmcm9tIFwiLi90ZXJtcy5qc1wiO1xuXG4vLyBkMyBjaGFydFxuaW1wb3J0IHsgY2hhcnRUZW1wbGF0ZSB9IGZyb20gXCIuL2RyYXdDaGFydC5qc1wiO1xuXG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbi8vIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuLy8gLy8gY29uc3QgaWxsdXN0cmF0aW9uID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbi8vICAgICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG5cbi8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuXG4vLyAvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgXG4gIC8vLy8gY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgY29uc3QgdGVzdEFycmF5ID0gcmV0cmlldmVyKCQyMDE5LCAkMjAxOV9zZXRzKTtcbiAgY29uc29sZS5sb2coXCJ0ZXN0QXJyYXlcIiwgdGVzdEFycmF5KVxuICAvLyBsZXQgdGVzdCA9IGNyZWF0ZURhdGFzZXQodGVzdEFycmF5KTtcbiAgLy8gY29uc29sZS5sb2coJ2luZGV4anMgVGVzdCcsIHRlc3QpXG5cbiAgLy8gQ0FMTCBEUkFXIENIQVJUIEZVTkNUSU9OXG5cbiAgY3JlYXRlRGF0YXNldCh0ZXN0QXJyYXkpLnRoZW4oKGQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndvb2hvb1wiLCBkKVxuICAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gIH0pXG4gXG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7IiwiY29uc3QgJDIwMTkgPSBbXG4gICAgXCJzYlwiLFxuICAgIC8vIFwib2sgYm9vbWVyXCIsXG4gICAgLy8gXCJ2c2NvXCIsXG4gICAgXCJzZnNcIixcbiAgICBcImZ5cFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJuZ2xcIixcbiAgICBcInNpbXBcIixcbiAgICBcImFuZCBpIG9vcFwiXG4gICAgLy8gXCJ5a3R2XCIsXG4gICAgLy8gXCJpeWt5a1wiLFxuICAgIC8vIFwic2tza3NrXCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG4vLyB0YWtlcyBpbiB0aGUgKHRlcm1zIG9ubHkpIGFycmF5O1xuLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgYWN0dWFsIHNlYXJjaCBxdWVyaWVzIHRvIGJlIG1hZGUgdXNpbmcgdGhlIEdvb2dsZSBUcmVuZHMgQVBJXG5mdW5jdGlvbiBzZWFyY2hUZXJtc0dlbmVyYXRvcihhcnJheSkge1xuICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIHNlYXJjaFRlcm1zLnB1c2goYHdoYXQgZG9lcyAke3Rlcm19IG1lYW5gKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRlcm1zKTtcbiAgICByZXR1cm4gc2VhcmNoVGVybXM7XG59O1xuXG4vLyBPdXRwdXQ6IHJldHVybnMgYW4gYXJyYXkgb2YgYXJyYXlzOyBlYWNoIHN1YmFycmF5IHdpbGwgY29udGFpbiB0aGUgXG4vLyBzZWFyY2ggcXVlcmllcyB0byBiZSBtYWRlLCB1cCB0byB0aGUgbWF4TnVtT2ZRdWVyaWVzIGFsbG93ZWQgb24gR29vZ2xlIFRyZW5kcyBBUEkuXG4vLyBUaHVzLCBlYWNoIHN1YmFycmF5IHdpbGwgbGF0ZXIgcmV0dXJuIGEgc3ViZGF0YXNldCwgZWFjaCB3aXRoIGEgY29tbW9uIHRlcm0uXG4vLyBJbnB1dCBhcmcgXCJhcnJheVwiIGlzIHRoZSBhcnJheSBvZiB0ZXJtcyBhcyBzZWFyY2ggcXVlcmllcy5cbi8vIElucHV0IGFyZyBqb2luSW5kZXggaXMgdGhlIGluZGV4IG9mIHRoZSBjb21tb24gdGVybSBvbiB3aGljaCB3ZSBjYWxpYnJhdGUgZWFjaCBzdWJkYXRhc2V0LlxuZnVuY3Rpb24gc3BsaXR0ZXIoYXJyYXksIG1heE51bU9mUXVlcmllcywgam9pbkluZGV4KSB7XG4gICAgY29uc3Qgam9pblZhbHVlID0gYXJyYXlbam9pbkluZGV4XTsgXG4gICAgY29uc3QgaW50ZXJ2YWwgPSAtIDErIG1heE51bU9mUXVlcmllcztcbiAgICBsZXQgcmVzdWx0ID0gW107XG5cbiAgICBmb3IobGV0IGkgPSAxOyBpIDwgYXJyYXkubGVuZ3RoOykge1xuICAgICAgICBjb25zdCBncm91cCA9IGFycmF5LnNsaWNlKGksIGkgKyBpbnRlcnZhbCk7IFxuICAgICAgICBjb25zdCBzZXQgPSBbam9pblZhbHVlXS5jb25jYXQoZ3JvdXApO1xuICAgICAgICByZXN1bHQucHVzaChzZXQpO1xuICAgICAgICBpKz0gaW50ZXJ2YWw7IC8vIGp1bXAgdG8gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheSB3aGljaCBoYXNuJ3QgeWV0IGJlZW4gYWRkZWQgdG8gYSBzdWJhcnJheVxuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKFwic3BsaXR0ZXJcIixyZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5jb25zdCAkMjAxOV9zZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zR2VuZXJhdG9yKCQyMDE5KTtcbmNvbnN0ICQyMDE5X3NldHMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgMCk7XG5cblxuY29uc3QgJDIwMTggPSBbXG4gICAgXCJpbmNlbFwiLFxuICAgIFwidXd1XCIsXG4gICAgXCJtdWtiYW5nXCIsXG4gICAgXCJpYmZcIixcbiAgICBcImJsb2NrY2hhaW5cIixcbiAgICBcInJuZ1wiLFxuICAgIFwiaml0XCIsXG4gICAgXCJqdXVsaW5nXCIsXG4gICAgXCJnZWt5dW1lXCIsXG4gICAgXCJ6YWRkeVwiLFxuICAgIFwid3RtXCIsXG4gICAgXCJ3aWdcIlxuXVxuXG5cbmNvbnN0ICQyMDE3ID0gW1xuICAgIFwibm9uIGJpbmFyeVwiLFxuICAgIFwiYml0Y29pblwiLFxuICAgIFwic25vd2ZsYWtlXCIsXG4gICAgXCJwbW95c1wiLFxuICAgIFwibWFnYVwiLFxuICAgIFwid2FzcFwiLFxuICAgIFwiYm91amllXCIsXG4gICAgXCJ0cm9sbHNcIlxuXVxuXG5jb25zdCAkMjAxNiA9IFtcbiAgICBcImdhc2xpZ2h0aW5nXCIsXG4gICAgXCJzandcIixcbiAgICBcImJvb2xpblwiLFxuICAgIFwid29rZVwiLFxuICAgIFwic2hpbGxcIixcbiAgICBcInF1YXNoXCIsXG4gICAgXCJicmFuZGlzaFwiLFxuICAgIFwidHJpZ2dlcmVkXCIsXG4gICAgXCJzaG9va1wiLFxuICAgIFwiYmlnbHlcIixcbiAgICBcImhvbG9zZXh1YWxcIixcbiAgICBcInZleGluZ1wiLFxuICAgIFwiYm91Z2hcIixcbiAgICBcImp1anVcIixcbiAgICBcIndhdnlcIlxuXVxuXG5jb25zdCAkMjAxNSA9IFtcbiAgICBcInNpbW1lclwiLFxuICAgIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgICBcImNoYXBvXCIsXG4gICAgXCJzdG9vcFwiLFxuICAgIFwiYmxhc2VcIixcbiAgICBcInBsZWJcIixcbiAgICBcImxvd2tleVwiLFxuICAgIFwidG9tZVwiLFxuICAgIFwid2FwXCIsXG4gICAgXCJzaHVkZGVyXCIsXG4gICAgXCJidXJudFwiLFxuICAgIFwidmFwZVwiXG5dXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zZXRzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==