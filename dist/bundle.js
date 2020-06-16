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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: red; }\n\n.label-0 {\n  fill: red;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: green; }\n\n.label-1 {\n  fill: green;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: blue; }\n\n.label-2 {\n  fill: blue;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: orange; }\n\n.label-3 {\n  fill: orange;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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

 // const dataset = [];
// parse the date and time; store data in variable dataA

var timeConv = d3.timeParse("%b %d, %Y"); // for the groupedSet, store corresponding file-fetching promises in an array

function retriever(mainSet, groupedSet) {
  var retrievedPromises = [];
  groupedSet.forEach(function (set, index) {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json("./dist/assets/data/2019_".concat(index, ".json")));
  });
  return [mainSet.length, retrievedPromises];
} // function to create dataset for d3 to use


function createDataset(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      numWords = _ref2[0],
      arrayOfPromises = _ref2[1];

  var dataset = [];
  console.log("start createDataset");
  var mainIndex = 0;

  function getData(promise, promiseIndex) {
    return promise.then(function (data) {
      // console.log("lloop", data)
      var increment = 0;

      var _loop = function _loop() {
        function calibrate(d, index) {
          var numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)

          var denominator = d.value[0]; // comparison value in current promise

          var ratio;

          if (denominator === 0) {
            ratio = 0;
          } else {
            ratio = numerator / denominator;
          }

          return Math.round(+d.value[1] * ratio);
        }

        var slice = {
          term: _terms_js__WEBPACK_IMPORTED_MODULE_0__["$2019"][mainIndex],
          values: data.map(function (d, index) {
            return {
              date: timeConv(d.formattedAxisTime),
              // point: +d.value[mainIndex]
              point: promiseIndex === 0 ? +d.value[mainIndex] : calibrate(d, index)
            };
          })
        }; // console.log("slice", slice)

        dataset.push(slice);
        increment += 1; // console.log("increment", increment);

        mainIndex += 1;
      };

      while (increment < 5 && mainIndex < numWords) {
        _loop();
      }

      return dataset;
    });
  }

  var newPromisesArray = [];
  return getData(arrayOfPromises[0], 0).then(function (res) {
    arrayOfPromises.slice(1).map(function (promise, index) {
      var newPromise = getData(promise, index + 1); // console.log("newpromise",newPromise)

      newPromisesArray.push(newPromise);
    });
    return Promise.all(newPromisesArray);
  }).then(function (res) {
    console.log("dataset", dataset);
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
      console.log("data", data); // SCALES: x-axis
      // define min and max values for domain on x-axis (time)

      var startDate = d3.min(data, function (d) {
        return d3.min(d.values, function (v) {
          return v.date;
        });
      });
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

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]);
      var line = d3.line().x(function (d) {
        return xScale(d.date);
      }).y(function (d) {
        return yScale(d.point);
      }); // AXES

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

      var lines = svg.selectAll("lines").data(data).enter().append("g");
      lines.append("path").attr("class", function (d, i) {
        return "line-".concat(i);
      }).attr("d", function (d) {
        return line(d.values);
      }); // add labels to each line

      lines.append("text").attr("class", function (d, i) {
        return "label-".concat(i);
      }).text(function (d) {
        return "\u21FD       ".concat(d.term);
      }).attr("x", 5).attr("transform", function (d, i) {
        var lastIndex = d.values.length - 1; // the index of the last data point

        var labelX = xScale(d.values[lastIndex].date) + 1;
        var labelY = yScale(d.values[lastIndex].point + 5 * i) - 60;
        return "translate(".concat(labelX, ", ").concat(labelY, ")");
      });
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

var $2019 = [// "boomer",
"vsco", "sfs", "fyp", "simp", "ngl", "s/u", "iykyk", "sb", "sksksk", "yktv", "and i oop"];
var oneHit = ["slatt", "ants"];

function searchTermsGenerator(array) {
  var searchTerms = [];
  array.forEach(function (term) {
    searchTerms.push("what does ".concat(term, " mean"));
  }); // console.log(searchTerms);

  return searchTerms;
}

;

function splitter(array, maxNum, joinIndex) {
  var joinValue = array[joinIndex];
  var interval = -1 + maxNum;
  var result = [];

  for (var i = 1; i < array.length;) {
    var group = array.slice(i, i + interval);
    var set = [joinValue].concat(group);
    result.push(set);
    i += interval;
  } // console.log(result)


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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy96X2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJyZXRyaWV2ZXIiLCJtYWluU2V0IiwiZ3JvdXBlZFNldCIsInJldHJpZXZlZFByb21pc2VzIiwiZm9yRWFjaCIsInNldCIsImluZGV4IiwicHVzaCIsImpzb24iLCJsZW5ndGgiLCJjcmVhdGVEYXRhc2V0IiwibnVtV29yZHMiLCJhcnJheU9mUHJvbWlzZXMiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm1haW5JbmRleCIsImdldERhdGEiLCJwcm9taXNlIiwicHJvbWlzZUluZGV4IiwidGhlbiIsImRhdGEiLCJpbmNyZW1lbnQiLCJjYWxpYnJhdGUiLCJkIiwibnVtZXJhdG9yIiwidmFsdWVzIiwicG9pbnQiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJNYXRoIiwicm91bmQiLCJzbGljZSIsInRlcm0iLCIkMjAxOSIsIm1hcCIsImRhdGUiLCJmb3JtYXR0ZWRBeGlzVGltZSIsIm5ld1Byb21pc2VzQXJyYXkiLCJyZXMiLCJuZXdQcm9taXNlIiwiUHJvbWlzZSIsImFsbCIsImNoYXJ0VGVtcGxhdGUiLCJ3aWR0aCIsImhlaWdodCIsImFkaiIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwic3RhcnREYXRlIiwibWluIiwidiIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwibGluZSIsIngiLCJ5IiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXNHcmlkIiwiYXhpc0xlZnQiLCJ0aWNrU2l6ZSIsInRpY2tWYWx1ZXMiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiY2FsbCIsImxpbmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJpIiwidGV4dCIsImxhc3RJbmRleCIsImxhYmVsWCIsImxhYmVsWSIsImFyZ3VtZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RBcnJheSIsIiQyMDE5X3NldHMiLCJkYXR1bSIsIm9uZUhpdCIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwibWF4TnVtIiwiam9pbkluZGV4Iiwiam9pblZhbHVlIiwiaW50ZXJ2YWwiLCJyZXN1bHQiLCJncm91cCIsImNvbmNhdCIsIiQyMDE5X3NlYXJjaFRlcm1zIiwiJDIwMTgiLCIkMjAxNyIsIiQyMDE2IiwiJDIwMTUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVzdF9mdW5jdGlvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJzdHlsZSIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGdPQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0EsY0FBYyxRQUFTLG9HQUFvRyxJQUFJLGdEQUFnRDtBQUMvSyxjQUFjLFFBQVMsb0dBQW9HLElBQUksZ0RBQWdEO0FBQy9LO0FB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QWdCO0FBQ3pCLFFBQUksQ0FBQ2lFLFNBQVMsQ0FBQ3JGLE1BQWYsRUFBdUI7QUFDckIsYUFBT29DLEtBQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsV0FBSyxHQUFHaEIsS0FBUjtBQUNBLGFBQU8rRyxFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBQSxJQUFFLENBQUM5RixNQUFILEdBQVksVUFBU2pCLEtBQVQsRUFBZ0I7QUFDMUIsUUFBSSxDQUFDaUUsU0FBUyxDQUFDckYsTUFBZixFQUF1QjtBQUNyQixhQUFPcUMsTUFBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxZQUFNLEdBQUdqQixLQUFUO0FBQ0EsYUFBTytHLEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FBT0EsRUFBUDtBQUNIOztBQUdjLFNBQVNJLGNBQVQsR0FBMkI7QUFFdENsSSxTQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUZzQyxDQUl0QztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFRjtBQUdELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbiN0aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2ludHJvLWRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJmZjtcXG4gIGhlaWdodDogMjB2aDsgfVxcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxucGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibGFjazsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbiNjb250YWluZXIgc3ZnIHtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4vKiBBWEVTICovXFxuLyogdGlja3MgKi9cXG4uYXhpcyB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNTtcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAudGljayB7XFxuICBzdHJva2UtZGFzaGFycmF5OiA1LCA1O1xcbiAgc3Ryb2tlOiAjRDREOUUyO1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDAuMztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAuZG9tYWluIHtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwOyB9XFxuXFxuLyogLmF4aXMgbGluZSB7XFxuc3Ryb2tlOiAjNzA2ZjZmO1xcbnN0cm9rZS13aWR0aDogMC41O1xcbnNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59ICovXFxuLyogYXhpcyBjb250b3VyICovXFxuLmF4aXMgcGF0aCB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi8qIGF4aXMgdGV4dCAqL1xcbi5heGlzIHRleHQge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTEwJTsgfVxcblxcbi8qIExJTkUgQ0hBUlQgKi9cXG4vKiBsaW5lICovXFxuLmxpbmUtMCwgLmxhYmVsLTAge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcmVkOyB9XFxuXFxuLmxhYmVsLTAge1xcbiAgZmlsbDogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogZ3JlZW47IH1cXG5cXG4ubGFiZWwtMSB7XFxuICBmaWxsOiBncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTIsIC5sYWJlbC0yIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsdWU7IH1cXG5cXG4ubGFiZWwtMiB7XFxuICBmaWxsOiBibHVlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMywgLmxhYmVsLTMge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogb3JhbmdlOyB9XFxuXFxuLmxhYmVsLTMge1xcbiAgZmlsbDogb3JhbmdlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc2V0cyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIGNvbnN0IGRhdGFzZXQgPSBbXTtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWU7IHN0b3JlIGRhdGEgaW4gdmFyaWFibGUgZGF0YUFcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuXG4vLyBmb3IgdGhlIGdyb3VwZWRTZXQsIHN0b3JlIGNvcnJlc3BvbmRpbmcgZmlsZS1mZXRjaGluZyBwcm9taXNlcyBpbiBhbiBhcnJheVxuZnVuY3Rpb24gcmV0cmlldmVyIChtYWluU2V0LCBncm91cGVkU2V0KSB7XG4gIGNvbnN0IHJldHJpZXZlZFByb21pc2VzID0gW107XG5cbiAgZ3JvdXBlZFNldC5mb3JFYWNoKChzZXQsIGluZGV4KSA9PiB7XG4gICAgLy8gbGV0IGRhdGFzZXROYW1lID0gYGRhdGFzZXRfJHtpbmRleH1gO1xuICAgIHJldHJpZXZlZFByb21pc2VzLnB1c2goZDMuanNvbihgLi9kaXN0L2Fzc2V0cy9kYXRhLzIwMTlfJHtpbmRleH0uanNvbmApKTtcbiAgfSk7XG5cbiAgcmV0dXJuIFttYWluU2V0Lmxlbmd0aCwgcmV0cmlldmVkUHJvbWlzZXNdO1xuXG59XG5cblxuLy8gZnVuY3Rpb24gdG8gY3JlYXRlIGRhdGFzZXQgZm9yIGQzIHRvIHVzZVxuZnVuY3Rpb24gY3JlYXRlRGF0YXNldCAoW251bVdvcmRzLCBhcnJheU9mUHJvbWlzZXNdKSB7XG4gICAgXG4gICAgbGV0IGRhdGFzZXQgPSBbXTtcblxuICBjb25zb2xlLmxvZyhcInN0YXJ0IGNyZWF0ZURhdGFzZXRcIilcblxuICBsZXQgbWFpbkluZGV4ID0gMDtcbiAgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwibGxvb3BcIiwgZGF0YSlcblxuICAgICAgbGV0IGluY3JlbWVudCA9IDA7XG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCA1ICYmIG1haW5JbmRleCA8IG51bVdvcmRzKSB7XG5cbiAgICAgICAgZnVuY3Rpb24gY2FsaWJyYXRlKGQsIGluZGV4KSB7XG5cbiAgICAgICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbaW5kZXhdLnBvaW50OyAvLyBjb21wYXJpc29uIHZhbHVlIGluIHByZXZpb3VzIHByb21pc2UgKGFscmVhZHkgaW4gdmFyIGRhdGFzZXQpXG4gICAgICAgICAgbGV0IGRlbm9taW5hdG9yID0gZC52YWx1ZVswXTsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBjdXJyZW50IHByb21pc2VcbiAgICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgICAgICAgIFxuICAgICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYXRpbyA9IG51bWVyYXRvci9kZW5vbWluYXRvcjtcbiAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoK2QudmFsdWVbMV0gKiByYXRpbyk7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06ICQyMDE5W21haW5JbmRleF0sXG4gICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbiAoZCwgaW5kZXgpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgICAvLyBwb2ludDogK2QudmFsdWVbbWFpbkluZGV4XVxuICAgICAgICAgICAgICBwb2ludDogKHByb21pc2VJbmRleCA9PT0gMCApID8gK2QudmFsdWVbbWFpbkluZGV4XSA6IGNhbGlicmF0ZShkLCBpbmRleClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzbGljZVwiLCBzbGljZSlcblxuICAgICAgICBkYXRhc2V0LnB1c2goc2xpY2UpO1xuICAgICAgICBcbiAgICAgICAgaW5jcmVtZW50ICs9IDE7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaW5jcmVtZW50XCIsIGluY3JlbWVudCk7XG5cbiAgICAgICAgbWFpbkluZGV4ICs9IDE7ICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuXG4gIH0gXG5cbiAgY29uc3QgbmV3UHJvbWlzZXNBcnJheSA9IFtdO1xuICBcbiAgcmV0dXJuIGdldERhdGEoYXJyYXlPZlByb21pc2VzWzBdLCAwKVxuICBcbiAgLnRoZW4ocmVzID0+IHtcblxuICAgIGFycmF5T2ZQcm9taXNlcy5zbGljZSgxKS5tYXAoZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgIGxldCBuZXdQcm9taXNlID0gZ2V0RGF0YShwcm9taXNlLCBpbmRleCArIDEpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJuZXdwcm9taXNlXCIsbmV3UHJvbWlzZSlcbiAgICAgIG5ld1Byb21pc2VzQXJyYXkucHVzaChuZXdQcm9taXNlKTtcbiAgICB9KVxuXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKG5ld1Byb21pc2VzQXJyYXkpOyAgICBcbiAgfSlcblxuICAudGhlbihyZXM9PiB7XG4gICAgY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGRhdGFzZXQpXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH0pXG4gIFxuICBcbn1cblxuZXhwb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0fTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gODAwO1xuICBsZXQgaGVpZ2h0ID0gODAwO1xuICBsZXQgYWRqID0gMzA7XG5cbiAgZnVuY3Rpb24gZHJhdyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgICAvLyBTQ0FMRVM6IHgtYXhpc1xuICAgICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDMubWluKGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIGFuZCByYW5nZSBvZiB4LWF4aXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAgIC5zY2FsZVRpbWUoKVxuICAgICAgICAuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgICAgLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5kYXRlKTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4geVNjYWxlKGQucG9pbnQpO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gQVhFU1xuICAgICAgY29uc3QgeEF4aXMgPSBkM1xuICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgIC5zY2FsZSh4U2NhbGUpXG4gICAgICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgIC8vICAgICAgICAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC50aWNrVmFsdWVzKFtdKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG5cbiAgICAgIC8vIEFYRVM6IGdyaWRsaW5lc1xuICAgICAgY29uc3QgeUF4aXNHcmlkID0gZDNcbiAgICAgICAgLmF4aXNMZWZ0KClcbiAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgLnRpY2tTaXplKC13aWR0aClcbiAgICAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgICAgICAgLnRpY2tWYWx1ZXMoWzEwMCAvIDMsIDIwMCAvIDMsIDEwMF0pXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgYC0ke2Fkan0gLSR7YWRqfSAke3dpZHRoICsgYWRqICogMTB9ICR7aGVpZ2h0ICsgYWRqICogMn1gXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcblxuICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgIHN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAgIC5jYWxsKHhBeGlzKTsgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKS50ZXh0LmFwcGVuZChcIkphblwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiLCBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpKVxuXG4gICAgICAvLyBkcmF3IHktYXhpc1xuICAgICAgc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwieS1heGlzLWdyaWRcIikuY2FsbCh5QXhpc0dyaWQpO1xuICAgICAgLy8gLmFwcGVuZChcInRleHRcIilcbiAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAvLyAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAvLyAuYXR0cihcInlcIiwgLTQwKVxuICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgICAgIC8vIGRyYXcgbGluZXNcbiAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsaW5lLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGFiZWwtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGDih70gICAgICAgJHtkLnRlcm19YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZC52YWx1ZXMubGVuZ3RoIC0gMTsgLy8gdGhlIGluZGV4IG9mIHRoZSBsYXN0IGRhdGEgcG9pbnRcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKSArIDE7XG4gICAgICAgICAgY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQgKyA1KmkpIC0gNjAgO1xuICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7bGFiZWxYfSwgJHtsYWJlbFl9KWA7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi96X2V4YW1wbGUuanNcIjtcbmltcG9ydCBzaW1wbGVfZXhhbXBsZSBmcm9tIFwiLi96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc2V0cyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydFRlbXBsYXRlIH0gZnJvbSBcIi4vZHJhd0NoYXJ0LmpzXCI7XG5cbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4vLyAvLyBjb25zdCBpbGx1c3RyYXRpb24gPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcblxuLy8gLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG5cbi8vIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBcbiAgLy8vLyBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICBjb25zdCB0ZXN0QXJyYXkgPSByZXRyaWV2ZXIoJDIwMTksICQyMDE5X3NldHMpO1xuICBjb25zb2xlLmxvZyhcInRlc3RBcnJheVwiLCB0ZXN0QXJyYXkpXG4gIC8vIGxldCB0ZXN0ID0gY3JlYXRlRGF0YXNldCh0ZXN0QXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cblxuICBjcmVhdGVEYXRhc2V0KHRlc3RBcnJheSkudGhlbigoZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwid29vaG9vXCIsIGQpXG4gICAgZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkKS5jYWxsKGNoYXJ0VGVtcGxhdGUoKSlcbiAgfSlcbiBcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cbiAgXG4gIFxuLy8gICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbi8vICAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbi8vICAgLy8gICAuZW50ZXIoKVxuLy8gICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbi8vICAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbi8vICAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJyXCIsIDEpXG4vLyAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4vLyAgIC8vICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTsiLCJjb25zdCAkMjAxOSA9IFtcbiAgICAvLyBcImJvb21lclwiLFxuICAgIFwidnNjb1wiLFxuICAgIFwic2ZzXCIsXG4gICAgXCJmeXBcIixcbiAgICBcInNpbXBcIixcbiAgICBcIm5nbFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJpeWt5a1wiLFxuICAgIFwic2JcIixcbiAgICBcInNrc2tza1wiLFxuICAgIFwieWt0dlwiLFxuICAgIFwiYW5kIGkgb29wXCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cblxuZnVuY3Rpb24gc3BsaXR0ZXIoYXJyYXksIG1heE51bSwgam9pbkluZGV4KSB7XG4gICAgY29uc3Qgam9pblZhbHVlID0gYXJyYXlbam9pbkluZGV4XTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IC0gMSsgbWF4TnVtO1xuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gYXJyYXkuc2xpY2UoaSwgaSArIGludGVydmFsKTsgXG4gICAgICAgIGNvbnN0IHNldCA9IFtqb2luVmFsdWVdLmNvbmNhdChncm91cCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNldCk7XG4gICAgICAgIGkrPSBpbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5jb25zdCAkMjAxOV9zZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zR2VuZXJhdG9yKCQyMDE5KTtcbmNvbnN0ICQyMDE5X3NldHMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgMCk7XG5cblxuY29uc3QgJDIwMTggPSBbXG4gICAgXCJpbmNlbFwiLFxuICAgIFwidXd1XCIsXG4gICAgXCJtdWtiYW5nXCIsXG4gICAgXCJpYmZcIixcbiAgICBcImJsb2NrY2hhaW5cIixcbiAgICBcInJuZ1wiLFxuICAgIFwiaml0XCIsXG4gICAgXCJqdXVsaW5nXCIsXG4gICAgXCJnZWt5dW1lXCIsXG4gICAgXCJ6YWRkeVwiLFxuICAgIFwid3RtXCIsXG4gICAgXCJ3aWdcIlxuXVxuXG5cbmNvbnN0ICQyMDE3ID0gW1xuICAgIFwibm9uIGJpbmFyeVwiLFxuICAgIFwiYml0Y29pblwiLFxuICAgIFwic25vd2ZsYWtlXCIsXG4gICAgXCJwbW95c1wiLFxuICAgIFwibWFnYVwiLFxuICAgIFwid2FzcFwiLFxuICAgIFwiYm91amllXCIsXG4gICAgXCJ0cm9sbHNcIlxuXVxuXG5jb25zdCAkMjAxNiA9IFtcbiAgICBcImdhc2xpZ2h0aW5nXCIsXG4gICAgXCJzandcIixcbiAgICBcImJvb2xpblwiLFxuICAgIFwid29rZVwiLFxuICAgIFwic2hpbGxcIixcbiAgICBcInF1YXNoXCIsXG4gICAgXCJicmFuZGlzaFwiLFxuICAgIFwidHJpZ2dlcmVkXCIsXG4gICAgXCJzaG9va1wiLFxuICAgIFwiYmlnbHlcIixcbiAgICBcImhvbG9zZXh1YWxcIixcbiAgICBcInZleGluZ1wiLFxuICAgIFwiYm91Z2hcIixcbiAgICBcImp1anVcIixcbiAgICBcIndhdnlcIlxuXVxuXG5jb25zdCAkMjAxNSA9IFtcbiAgICBcInNpbW1lclwiLFxuICAgIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgICBcImNoYXBvXCIsXG4gICAgXCJzdG9vcFwiLFxuICAgIFwiYmxhc2VcIixcbiAgICBcInBsZWJcIixcbiAgICBcImxvd2tleVwiLFxuICAgIFwidG9tZVwiLFxuICAgIFwid2FwXCIsXG4gICAgXCJzaHVkZGVyXCIsXG4gICAgXCJidXJudFwiLFxuICAgIFwidmFwZVwiXG5dXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zZXRzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==