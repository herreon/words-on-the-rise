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
  var width = 600;
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
      }).attr("x", 5).attr("transform", function (d) {
        var lastIndex = d.values.length - 1; // the index of the last data point

        var labelX = xScale(d.values[lastIndex].date) + 1;
        var labelY = yScale(d.values[lastIndex].point) + 1;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy96X2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJyZXRyaWV2ZXIiLCJtYWluU2V0IiwiZ3JvdXBlZFNldCIsInJldHJpZXZlZFByb21pc2VzIiwiZm9yRWFjaCIsInNldCIsImluZGV4IiwicHVzaCIsImpzb24iLCJsZW5ndGgiLCJjcmVhdGVEYXRhc2V0IiwibnVtV29yZHMiLCJhcnJheU9mUHJvbWlzZXMiLCJkYXRhc2V0IiwiY29uc29sZSIsImxvZyIsIm1haW5JbmRleCIsImdldERhdGEiLCJwcm9taXNlIiwicHJvbWlzZUluZGV4IiwidGhlbiIsImRhdGEiLCJpbmNyZW1lbnQiLCJjYWxpYnJhdGUiLCJkIiwibnVtZXJhdG9yIiwidmFsdWVzIiwicG9pbnQiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJNYXRoIiwicm91bmQiLCJzbGljZSIsInRlcm0iLCIkMjAxOSIsIm1hcCIsImRhdGUiLCJmb3JtYXR0ZWRBeGlzVGltZSIsIm5ld1Byb21pc2VzQXJyYXkiLCJyZXMiLCJuZXdQcm9taXNlIiwiUHJvbWlzZSIsImFsbCIsImNoYXJ0VGVtcGxhdGUiLCJ3aWR0aCIsImhlaWdodCIsImFkaiIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwic3RhcnREYXRlIiwibWluIiwidiIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwibGluZSIsIngiLCJ5IiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXNHcmlkIiwiYXhpc0xlZnQiLCJ0aWNrU2l6ZSIsInRpY2tWYWx1ZXMiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiY2FsbCIsImxpbmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJpIiwidGV4dCIsImxhc3RJbmRleCIsImxhYmVsWCIsImxhYmVsWSIsImFyZ3VtZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RBcnJheSIsIiQyMDE5X3NldHMiLCJkYXR1bSIsIm9uZUhpdCIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwibWF4TnVtIiwiam9pbkluZGV4Iiwiam9pblZhbHVlIiwiaW50ZXJ2YWwiLCJyZXN1bHQiLCJncm91cCIsImNvbmNhdCIsIiQyMDE5X3NlYXJjaFRlcm1zIiwiJDIwMTgiLCIkMjAxNyIsIiQyMDE2IiwiJDIwMTUiLCJtb2R1bGUiLCJleHBvcnRzIiwidGVzdF9mdW5jdGlvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJzdHlsZSIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGdPQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0EsY0FBYyxRQUFTLG9HQUFvRyxJQUFJLGdEQUFnRDtBQUMvSyxjQUFjLFFBQVMsb0dBQW9HLElBQUksZ0RBQWdEO0FBQy9LO0FB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ckYsTUFBZixFQUF1QjtBQUNyQixhQUFPb0MsS0FBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUdoQixLQUFSO0FBQ0EsYUFBTytHLEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0FBLElBQUUsQ0FBQzlGLE1BQUgsR0FBWSxVQUFTakIsS0FBVCxFQUFnQjtBQUMxQixRQUFJLENBQUNpRSxTQUFTLENBQUNyRixNQUFmLEVBQXVCO0FBQ3JCLGFBQU9xQyxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFlBQU0sR0FBR2pCLEtBQVQ7QUFDQSxhQUFPK0csRUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUFPQSxFQUFQO0FBQ0g7O0FBR2MsU0FBU0ksY0FBVCxHQUEyQjtBQUV0Q2xJLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLEVBRnNDLENBSXRDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVGO0FBR0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuI2ludHJvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA4MHZoOyB9XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiN0aXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6ICMwNjJmODc7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuI3RpdGxlIHAge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jaW50cm8tZGl2aWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmYmZmO1xcbiAgaGVpZ2h0OiAyMHZoOyB9XFxuXFxuQHVzZSBcXFwic2FzczpsaXN0XFxcIjtcXG5wYXRoIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsYWNrOyB9XFxuXFxuLyogdmFyaWFibGVzICovXFxuI2NvbnRhaW5lciBzdmcge1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi8qIEFYRVMgKi9cXG4vKiB0aWNrcyAqL1xcbi5heGlzIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC41O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC50aWNrIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDUsIDU7XFxuICBzdHJva2U6ICNENEQ5RTI7XFxuICBzdHJva2Utb3BhY2l0eTogMC4zO1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC5kb21haW4ge1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDA7IH1cXG5cXG4vKiAuYXhpcyBsaW5lIHtcXG5zdHJva2U6ICM3MDZmNmY7XFxuc3Ryb2tlLXdpZHRoOiAwLjU7XFxuc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xcbn0gKi9cXG4vKiBheGlzIGNvbnRvdXIgKi9cXG4uYXhpcyBwYXRoIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC43O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLyogYXhpcyB0ZXh0ICovXFxuLmF4aXMgdGV4dCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMTAlOyB9XFxuXFxuLyogTElORSBDSEFSVCAqL1xcbi8qIGxpbmUgKi9cXG4ubGluZS0wLCAubGFiZWwtMCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiByZWQ7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiByZWQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0xLCAubGFiZWwtMSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBncmVlbjsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6IGdyZWVuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMiwgLmxhYmVsLTIge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmx1ZTsgfVxcblxcbi5sYWJlbC0yIHtcXG4gIGZpbGw6IGJsdWU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0zLCAubGFiZWwtMyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBvcmFuZ2U7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiBvcmFuZ2U7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zZXRzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gY29uc3QgZGF0YXNldCA9IFtdO1xuXG4vLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZTsgc3RvcmUgZGF0YSBpbiB2YXJpYWJsZSBkYXRhQVxuY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG5cbi8vIGZvciB0aGUgZ3JvdXBlZFNldCwgc3RvcmUgY29ycmVzcG9uZGluZyBmaWxlLWZldGNoaW5nIHByb21pc2VzIGluIGFuIGFycmF5XG5mdW5jdGlvbiByZXRyaWV2ZXIgKG1haW5TZXQsIGdyb3VwZWRTZXQpIHtcbiAgY29uc3QgcmV0cmlldmVkUHJvbWlzZXMgPSBbXTtcblxuICBncm91cGVkU2V0LmZvckVhY2goKHNldCwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVkUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gW21haW5TZXQubGVuZ3RoLCByZXRyaWV2ZWRQcm9taXNlc107XG5cbn1cblxuXG4vLyBmdW5jdGlvbiB0byBjcmVhdGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG5mdW5jdGlvbiBjcmVhdGVEYXRhc2V0IChbbnVtV29yZHMsIGFycmF5T2ZQcm9taXNlc10pIHtcbiAgICBcbiAgICBsZXQgZGF0YXNldCA9IFtdO1xuXG4gIGNvbnNvbGUubG9nKFwic3RhcnQgY3JlYXRlRGF0YXNldFwiKVxuXG4gIGxldCBtYWluSW5kZXggPSAwO1xuICBcbiAgZnVuY3Rpb24gZ2V0RGF0YSAocHJvbWlzZSwgcHJvbWlzZUluZGV4KSB7XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcblxuICAgICAgLy8gY29uc29sZS5sb2coXCJsbG9vcFwiLCBkYXRhKVxuXG4gICAgICBsZXQgaW5jcmVtZW50ID0gMDtcblxuICAgICAgd2hpbGUgKGluY3JlbWVudCA8IDUgJiYgbWFpbkluZGV4IDwgbnVtV29yZHMpIHtcblxuICAgICAgICBmdW5jdGlvbiBjYWxpYnJhdGUoZCwgaW5kZXgpIHtcblxuICAgICAgICAgIGxldCBudW1lcmF0b3IgPSBkYXRhc2V0WzBdLnZhbHVlc1tpbmRleF0ucG9pbnQ7IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gcHJldmlvdXMgcHJvbWlzZSAoYWxyZWFkeSBpbiB2YXIgZGF0YXNldClcbiAgICAgICAgICBsZXQgZGVub21pbmF0b3IgPSBkLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgICAgIGxldCByYXRpbztcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgaWYgKGRlbm9taW5hdG9yID09PSAwKSB7XG4gICAgICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJhdGlvID0gbnVtZXJhdG9yL2Rlbm9taW5hdG9yO1xuICAgICAgICAgIH1cbiAgICBcbiAgICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgrZC52YWx1ZVsxXSAqIHJhdGlvKTtcblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICAgICAgdGVybTogJDIwMTlbbWFpbkluZGV4XSxcbiAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkLCBpbmRleCkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSksXG4gICAgICAgICAgICAgIC8vIHBvaW50OiArZC52YWx1ZVttYWluSW5kZXhdXG4gICAgICAgICAgICAgIHBvaW50OiAocHJvbWlzZUluZGV4ID09PSAwICkgPyArZC52YWx1ZVttYWluSW5kZXhdIDogY2FsaWJyYXRlKGQsIGluZGV4KVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNsaWNlXCIsIHNsaWNlKVxuXG4gICAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICAgIFxuICAgICAgICBpbmNyZW1lbnQgKz0gMTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpbmNyZW1lbnRcIiwgaW5jcmVtZW50KTtcblxuICAgICAgICBtYWluSW5kZXggKz0gMTsgIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFzZXQ7XG5cbiAgICB9KVxuXG5cbiAgfSBcblxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gW107XG4gIFxuICByZXR1cm4gZ2V0RGF0YShhcnJheU9mUHJvbWlzZXNbMF0sIDApXG4gIFxuICAudGhlbihyZXMgPT4ge1xuXG4gICAgYXJyYXlPZlByb21pc2VzLnNsaWNlKDEpLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgbGV0IG5ld1Byb21pc2UgPSBnZXREYXRhKHByb21pc2UsIGluZGV4ICsgMSk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcIm5ld3Byb21pc2VcIixuZXdQcm9taXNlKVxuICAgICAgbmV3UHJvbWlzZXNBcnJheS5wdXNoKG5ld1Byb21pc2UpO1xuICAgIH0pXG5cbiAgICByZXR1cm4gUHJvbWlzZS5hbGwobmV3UHJvbWlzZXNBcnJheSk7ICAgIFxuICB9KVxuXG4gIC50aGVuKHJlcz0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFzZXRcIiwgZGF0YXNldClcbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfSlcbiAgXG4gIFxufVxuXG5leHBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXR9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IiwiLy8gY3JlYXRpbmcgcmV1c2FibGUgY2hhcnRcbmV4cG9ydCBmdW5jdGlvbiBjaGFydFRlbXBsYXRlKCkge1xuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIHN2Z1xuICBsZXQgd2lkdGggPSA2MDA7XG4gIGxldCBoZWlnaHQgPSA4MDA7XG4gIGxldCBhZGogPSAzMDtcblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG5cbiAgICAgIC8vIFNDQUxFUzogeC1heGlzXG4gICAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc3QgZW5kRGF0ZSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDMubWF4KGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgICAgLnNjYWxlVGltZSgpXG4gICAgICAgIC5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuICAgICAgLy8gU0NBTEVTOiB5LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtYXggdmFsdWUgZm9yIGRvbWFpbiBvbiB5LWF4aXMgKHBvaW50cylcbiAgICAgIGNvbnN0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBtYXhZXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgICAubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHhTY2FsZShkLmRhdGUpO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB5U2NhbGUoZC5wb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBBWEVTXG4gICAgICBjb25zdCB4QXhpcyA9IGQzXG4gICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgLnNjYWxlKHhTY2FsZSlcbiAgICAgICAgLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW10pXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcblxuICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICBjb25zdCB5QXhpc0dyaWQgPSBkM1xuICAgICAgICAuYXhpc0xlZnQoKVxuICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAudGlja1NpemUoLXdpZHRoKVxuICAgICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgICAudGlja1ZhbHVlcyhbMTAwIC8gMywgMjAwIC8gMywgMTAwXSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcylcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICBcInZpZXdCb3hcIixcbiAgICAgICAgICBgLSR7YWRqfSAtJHthZGp9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpO1xuXG4gICAgICAvLyBkcmF3IHgtYXhpc1xuICAgICAgc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAgICAgLy8gZHJhdyBsaW5lc1xuICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImdcIik7XG5cbiAgICAgIGxpbmVzXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYGxpbmUtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsYWJlbC0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gYOKHvSAgICAgICAke2QudGVybX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBkLnZhbHVlcy5sZW5ndGggLSAxOyAvLyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZGF0YSBwb2ludFxuICAgICAgICAgIGNvbnN0IGxhYmVsWCA9IHhTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpICsgMTtcbiAgICAgICAgICBjb25zdCBsYWJlbFkgPSB5U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCkgKyAxO1xuICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7bGFiZWxYfSwgJHtsYWJlbFl9KWA7XG4gICAgICAgIH0pXG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi96X2V4YW1wbGUuanNcIjtcbmltcG9ydCBzaW1wbGVfZXhhbXBsZSBmcm9tIFwiLi96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc2V0cyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydFRlbXBsYXRlIH0gZnJvbSBcIi4vZHJhd0NoYXJ0LmpzXCI7XG5cbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4vLyAvLyBjb25zdCBpbGx1c3RyYXRpb24gPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcblxuLy8gLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG5cbi8vIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBcbiAgLy8vLyBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICBjb25zdCB0ZXN0QXJyYXkgPSByZXRyaWV2ZXIoJDIwMTksICQyMDE5X3NldHMpO1xuICBjb25zb2xlLmxvZyhcInRlc3RBcnJheVwiLCB0ZXN0QXJyYXkpXG4gIC8vIGxldCB0ZXN0ID0gY3JlYXRlRGF0YXNldCh0ZXN0QXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cblxuICBjcmVhdGVEYXRhc2V0KHRlc3RBcnJheSkudGhlbigoZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwid29vaG9vXCIsIGQpXG4gICAgZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkKS5jYWxsKGNoYXJ0VGVtcGxhdGUoKSlcbiAgfSlcbiBcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cbiAgXG4gIFxuLy8gICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbi8vICAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbi8vICAgLy8gICAuZW50ZXIoKVxuLy8gICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbi8vICAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbi8vICAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJyXCIsIDEpXG4vLyAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4vLyAgIC8vICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTsiLCJjb25zdCAkMjAxOSA9IFtcbiAgICAvLyBcImJvb21lclwiLFxuICAgIFwidnNjb1wiLFxuICAgIFwic2ZzXCIsXG4gICAgXCJmeXBcIixcbiAgICBcInNpbXBcIixcbiAgICBcIm5nbFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJpeWt5a1wiLFxuICAgIFwic2JcIixcbiAgICBcInNrc2tza1wiLFxuICAgIFwieWt0dlwiLFxuICAgIFwiYW5kIGkgb29wXCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cblxuZnVuY3Rpb24gc3BsaXR0ZXIoYXJyYXksIG1heE51bSwgam9pbkluZGV4KSB7XG4gICAgY29uc3Qgam9pblZhbHVlID0gYXJyYXlbam9pbkluZGV4XTtcbiAgICBjb25zdCBpbnRlcnZhbCA9IC0gMSsgbWF4TnVtO1xuICAgIGxldCByZXN1bHQgPSBbXTtcblxuICAgIGZvcihsZXQgaSA9IDE7IGkgPCBhcnJheS5sZW5ndGg7KSB7XG4gICAgICAgIGNvbnN0IGdyb3VwID0gYXJyYXkuc2xpY2UoaSwgaSArIGludGVydmFsKTsgXG4gICAgICAgIGNvbnN0IHNldCA9IFtqb2luVmFsdWVdLmNvbmNhdChncm91cCk7XG4gICAgICAgIHJlc3VsdC5wdXNoKHNldCk7XG4gICAgICAgIGkrPSBpbnRlcnZhbDtcbiAgICB9XG5cbiAgICAvLyBjb25zb2xlLmxvZyhyZXN1bHQpXG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cblxuXG5jb25zdCAkMjAxOV9zZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zR2VuZXJhdG9yKCQyMDE5KTtcbmNvbnN0ICQyMDE5X3NldHMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgMCk7XG5cblxuY29uc3QgJDIwMTggPSBbXG4gICAgXCJpbmNlbFwiLFxuICAgIFwidXd1XCIsXG4gICAgXCJtdWtiYW5nXCIsXG4gICAgXCJpYmZcIixcbiAgICBcImJsb2NrY2hhaW5cIixcbiAgICBcInJuZ1wiLFxuICAgIFwiaml0XCIsXG4gICAgXCJqdXVsaW5nXCIsXG4gICAgXCJnZWt5dW1lXCIsXG4gICAgXCJ6YWRkeVwiLFxuICAgIFwid3RtXCIsXG4gICAgXCJ3aWdcIlxuXVxuXG5cbmNvbnN0ICQyMDE3ID0gW1xuICAgIFwibm9uIGJpbmFyeVwiLFxuICAgIFwiYml0Y29pblwiLFxuICAgIFwic25vd2ZsYWtlXCIsXG4gICAgXCJwbW95c1wiLFxuICAgIFwibWFnYVwiLFxuICAgIFwid2FzcFwiLFxuICAgIFwiYm91amllXCIsXG4gICAgXCJ0cm9sbHNcIlxuXVxuXG5jb25zdCAkMjAxNiA9IFtcbiAgICBcImdhc2xpZ2h0aW5nXCIsXG4gICAgXCJzandcIixcbiAgICBcImJvb2xpblwiLFxuICAgIFwid29rZVwiLFxuICAgIFwic2hpbGxcIixcbiAgICBcInF1YXNoXCIsXG4gICAgXCJicmFuZGlzaFwiLFxuICAgIFwidHJpZ2dlcmVkXCIsXG4gICAgXCJzaG9va1wiLFxuICAgIFwiYmlnbHlcIixcbiAgICBcImhvbG9zZXh1YWxcIixcbiAgICBcInZleGluZ1wiLFxuICAgIFwiYm91Z2hcIixcbiAgICBcImp1anVcIixcbiAgICBcIndhdnlcIlxuXVxuXG5jb25zdCAkMjAxNSA9IFtcbiAgICBcInNpbW1lclwiLFxuICAgIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgICBcImNoYXBvXCIsXG4gICAgXCJzdG9vcFwiLFxuICAgIFwiYmxhc2VcIixcbiAgICBcInBsZWJcIixcbiAgICBcImxvd2tleVwiLFxuICAgIFwidG9tZVwiLFxuICAgIFwid2FwXCIsXG4gICAgXCJzaHVkZGVyXCIsXG4gICAgXCJidXJudFwiLFxuICAgIFwidmFwZVwiXG5dXG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zZXRzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==