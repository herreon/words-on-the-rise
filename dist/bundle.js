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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.4;\n  cursor: default;\n  padding: 1000px; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line {\n  stroke-width: 1; }\n\n.hover-line {\n  fill: none;\n  stroke: #d2d2d2;\n  opacity: 0;\n  stroke-width: 20; }\n\n.label {\n  padding: 100;\n  font-size: 12px; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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

/***/ "./src/data/dataTransformer.js":
/*!*************************************!*\
  !*** ./src/data/dataTransformer.js ***!
  \*************************************/
/*! exports provided: retriever, createDataset */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "retriever", function() { return retriever; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createDataset", function() { return createDataset; });
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./terms.js */ "./src/data/terms.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_terms_js__WEBPACK_IMPORTED_MODULE_0__);
 // parse the date and time; store data in variable dataA

var timeConv = d3.timeParse("%b %d, %Y"); // function retriever stores promises that fetch data from the file that 
// corresponds to the index in the array querySubsets.
// Input arg "queriesArray" is a "terms-only" array (e.g. $2019)
// Input array "querySubsets" contains subsets of queries, returned from function splitter in terms.js

function retriever(querySubsets) {
  var retrieverPromises = [];
  querySubsets.forEach(function (splitQuery, index) {
    // let datasetName = `dataset_${index}`;
    retrieverPromises.push(d3.json("./dist/assets/data/2019_".concat(index, ".json")));
  });
  return retrieverPromises;
} // function to change all point values to a moving average (of interval = x weeks)


function changeYToMovingAverage(dataset) {
  // interval is the num weeks over which the movingAverage is calculated
  var interval = 6;
  dataset.forEach(function (termSlice) {
    // const averageChecker = [];
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
      var movingAverage = Math.round(movingTotal / interval); // averageChecker.push([v.point, movingAverage])
      // console.log("movingTotal", movingTotal);
      // console.log("movingAverage", movingAverage);

      return {
        date: v.date,
        point: movingAverage
      };
    }); //   console.log("averages",averageChecker)

    termSlice.values = averages.slice(interval);
  });
} // returns a promise that creates the dataset for the d3 chart drawing function to use
// takes in input args that were returned from the function "retriever"


function createDataset(queriesArray, termsArray, arrayOfPromises) {
  // this will store the dataset for d3 to use
  var dataset = []; // // keeps track of the index of each term
  // let mainIndex = 0;
  // returns the appropriate relative value of each term in a querySubset, 
  // using the point value of the common query as a reference

  function calibrate(rawdataSlice, rawdataIndex, rValueIndex) {
    var numerator = dataset[0].values[rawdataIndex].point; // comparison value in previous promise (already in var dataset)

    var denominator = rawdataSlice.value[0]; // comparison value in current promise

    var ratio;

    if (denominator === 0) {
      ratio = 0;
    } else {
      ratio = numerator / denominator;
    }

    return Math.round(+rawdataSlice.value[rValueIndex] * ratio);
  } // takes in a promise, and its index in the arrayOfPromises (to tell if it will access the first or subsequent subdatasets)
  // returns a promise that writes the data into const "dataset", in appropriate format 


  function getData(promise, promiseIndex) {
    return promise.then(function (rawdata) {
      var increment = promiseIndex === 0 ? 0 : 1; // keeps track of the index within each subdataset

      var maxNumOfQueries = 5; // max num of queries in a single call using Google Trends API

      while (increment < maxNumOfQueries && dataset.length < queriesArray.length) {
        var queriesArrayIndex = promiseIndex * (maxNumOfQueries - 1) + increment; // each slice contains all info for a term

        var slice = {
          term: termsArray[queriesArrayIndex],
          values: rawdata.map(function (rawdataSlice, rawdataIndex) {
            var point = promiseIndex === 0 ? +rawdataSlice.value[increment] : calibrate(rawdataSlice, rawdataIndex, increment);
            return {
              date: timeConv(rawdataSlice.formattedAxisTime),
              point: point
            };
          })
        };
        dataset.push(slice);
        increment += 1;
      }

      return dataset;
    });
  } // each promise will be transformed to the data-writing promise and stored in newPromisesArray


  var newPromisesArray = arrayOfPromises.map(function (promise, index) {
    return getData(promise, index);
  });
  return newPromisesArray[0].then(function (firstSubset) {
    var remainingPromises = newPromisesArray.slice(1);
    return Promise.all(remainingPromises);
  }).then(function (res) {
    // console.log("dataset", dataset)
    changeYToMovingAverage(dataset); // console.log("datasetAfter MovingAverage", dataset)

    return dataset;
  });
}

 // module.exports = { retriever, createDataset }

/***/ }),

/***/ "./src/data/terms.js":
/*!***************************!*\
  !*** ./src/data/terms.js ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

//"terms-only" arrays
var $2019 = ["ok boomer", "vsco", "sfs", "fyp", "s/u", "ngl", "simp", "iykyk", "sb" // "and i oop",
// "sksksk",
// "yktv"
];
var oneHit = ["slatt", "ants"];
var $2018 = ["incel", "uwu", "mukbang", "ibf", "blockchain", "rng", "jit", "juuling", "gekyume", "zaddy", "wtm", "wig"];
var $2017 = ["non binary", "bitcoin", "snowflake", "pmoys", "maga", "wasp", "boujie", "trolls"];
var $2016 = ["gaslighting", "sjw", "boolin", "woke", "shill", "quash", "brandish", "triggered", "shook", "bigly", "holosexual", "vexing", "bough", "juju", "wavy"];
var $2015 = ["simmer", "netflix and chill", "chapo", "stoop", "blase", "pleb", "lowkey", "tome", "wap", "shudder", "burnt", "vape"]; // takes in a "terms-only" array;
// returns an array of the actual search queries to be made using the Google Trends API

function searchTermsGenerator(array) {
  var searchTerms = [];
  array.forEach(function (term) {
    searchTerms.push("what does ".concat(term, " mean"));
  }); // console.log(searchTerms);

  return searchTerms;
}

; // Input arg "queriesArray" is the array of search queries; 
// "maxNumOfQueries" is the max num of queries allowed on Google Trends API;
// "joinIndex" is the index of the common query on which we calibrate each subdataset.
// Function splitter returns an array of querySubsets, and a a terms-only array rearranged with the common term at index 0.
// Each querySubset is an array that contains the common query along with other queries; subarray.length = maxNumOfQueries.
// Later, each querySubset is used to make 1 API call to obtain a dataSubset.

function splitter(queriesArray, maxNumOfQueries, joinIndex, termsArray) {
  // remove the common query from the queriesArray on which we'll iterate over to get the subsets of queries,
  // and save the common query to const joinTerm
  var joinTerm = queriesArray.splice(joinIndex, 1);
  var interval = maxNumOfQueries - 1;
  var querySubsets = [];

  for (var i = 0; i < queriesArray.length;) {
    // each set of queries excluding common query
    var group = queriesArray.slice(i, i + interval); // each subarray has the common query as the first element, followed by other queries

    var querySubset = joinTerm.concat(group);
    querySubsets.push(querySubset); // jump to the next element in array which hasn't yet been added to a querySubset

    i += interval;
  }

  queriesArray = joinTerm.concat(queriesArray);
  termsArray = termsArray.splice(joinIndex, 1).concat(termsArray);
  return [querySubsets, queriesArray, termsArray];
}

var $2019_searchTerms = searchTermsGenerator($2019);
var $2019_splitQueries = splitter($2019_searchTerms, 5, $2019_searchTerms.length / 2, $2019);
module.exports = {
  $2019_splitQueries: $2019_splitQueries
};

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
/* harmony import */ var _labelCoords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./labelCoords.js */ "./src/labelCoords.js");
/* harmony import */ var _labelCoords_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__);
 // creating reusable chart

function chartTemplate() {
  // set the dimensions and margins of the svg
  var width = 800;
  var height = 800;
  var adj = 30;

  function draw(selection) {
    selection.each(function (data) {
      // SCALES: x-axis
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
      }); // console.log("startDate", startDate)
      // console.log("endDate", endDate)
      // set domain and range of x-axis

      var xScale = d3.scaleTime().domain([startDate, endDate]).range([0, width]); // SCALES: y-axis
      // define max value for domain on y-axis (points)

      var maxY = d3.max(data, function (s) {
        return d3.max(s.values, function (v) {
          return v.point;
        });
      }); // set domain of y-axis

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]); // add label coordinates to dataset's termSlices

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, 12, xScale, yScale); // AXES

      var xAxis = d3.axisBottom(xScale); // .scale(xScale)

      xAxis.ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0);
      var yAxis = d3.axisLeft().scale(yScale).tickValues([]).tickSizeOuter(0); // AXES: gridlines

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat("").tickValues([maxY / 3, 2 * maxY / 3, maxY]).tickSizeOuter(0); // append svg

      var svg = d3.select(this).append("svg").attr("class", "chart").attr("width", width).attr("height", height).attr("viewBox", "-".concat(adj * 2, " -").concat(adj * 3, " ").concat(width + adj * 10, " ").concat(height + adj * 2)).attr("preserveAspectRatio", "xMinYMin meet"); // date up to which clip path is appended

      var midDate = new Date(2019, 5, 30);
      var midMax = d3.max(data, function (s) {
        return d3.max(s.values.filter(function (val) {
          return val.date <= midDate;
        }), function (v) {
          return v.point;
        });
      });
      console.log("midDate", midDate);
      console.log("midMax", midMax); // append clip path

      var clip = svg.append("defs").append("clipPath").attr("id", "date-clip").append("rect").attr("x", xScale(startDate)) //   .attr("x", xScale(startDate))
      .attr("y", yScale(maxY)) //   .attr("y", yScale(maxY - midMax))
      .attr("width", width).attr("height", height); // draw x-axis

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

      var line = d3.line().x(function (v) {
        return xScale(v.date); // return d[0];
      }).y(function (v) {
        return yScale(v.point); // return d[1];
      }) // .curve(d3 .curveCatmullRom.alpha(0.5));
      .curve(d3.curveBasis);
      var lines = svg.selectAll("lines").data(data).enter().append("g");
      lines.append("path").attr("class", function (d, i) {
        return "line line-".concat(i);
      }).attr("d", function (d) {
        return line(d.values); //   return line(d.splined);
      }).attr("clip-path", "url(#date-clip)"); // add labels to each line

      lines.append("text").attr("class", function (d, i) {
        return "label label-".concat(i);
      }).text(function (d) {
        return "\u21FD       ".concat(d.term);
      }).attr("x", 5).attr("transform", function (d, i) {
        return "translate(".concat(d.labelX, ", ").concat(d.labelY, ")"); // const lastIndex = d.values.length - 1;
        // const labelX = xScale(d.values[lastIndex].date);
        // const labelY = yScale(d.values[lastIndex].point);
        //   return `translate(${labelX}, ${labelY})`;
      });
      var hoverLines = lines.append("path").attr("class", "hover-line") // .attr("d", function(d) { return line(d.splined)})
      .attr("d", function (d) {
        return line(d.values);
      }); // const t = d3.transition()
      // .delay(1)
      // .duration()

      function updateChart() {
        // console.log("updateChart",d3.selection.event)
        var newStartDate = new Date(2017, 11, 1);
        var newEndDate = new Date(2019, 6, 31); // const extent = [newStartDate, newEndDate];
        // console.log("extent", extent)
        // const test1 = xScale.invert(extent[0])
        // const test2 = xScale.invert(extent[1])
        // console.log("updateChart", test1, test2)

        xScale.domain([newStartDate, newEndDate]);
        var newStartIndex;
        var newEndIndex; // const newDataPoints = 

        for (var i = 0; i < data[0].values.length; i++) {
          if (data[0].values[i].date >= newStartDate) {
            newStartIndex = i;
            break;
          }
        }

        for (var _i = 0; _i < data[0].values.length; _i++) {
          if (data[0].values[_i].date > newEndDate) {
            newEndIndex = _i;
            break;
          }
        } // filter((val, i) => {
        // return i >= 1
        // return val.date >= newStartDate && val.date <= newEndDate; 
        // })
        // const newStartIndex = newDataPoints[0]
        // const newEndIndex = newDataPoints[newDataPoints - 1]


        console.log("newi", newStartIndex, newEndIndex); // define max value for domain on y-axis (points)

        maxY = d3.max(data, function (s) {
          // console.log("s", s)
          s = s.values.slice(newStartIndex, newEndIndex); // console.log("s", s)
          // console.log("s.length", s.length)

          return d3.max(s, function (v) {
            return v.point;
          });
        }); // set domain of y-axis
        //   const yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]);
        // yScale.domain([newStartDate, newEndDate])
        // update x axis

        svg.select(".x-axis").call(xAxis).transition().delay(1000); // svg.select(".y-axis").call(yAxis).transition().delay(1000);
        // console.log("xScale", xScale(newStartDate))

        console.log("yScale", yScale(maxY));
        yScale.domain([0, maxY]); // addSplinedValues()
        // console.log("lines", lines)

        lines.selectAll(".line").transition().delay(1000).attr("d", function (d) {
          //   console.log("line transition")
          return line(d.values);
        });
      } // updateChart() 


      svg.attr("clip-path", "url(#date-clip)").style('fill', "lightgrey");
      svg.selectAll(".hover-line, .label, .line").on("mouseover", function (d, i, nodes) {
        //   console.log("mousin", i)
        // console.log("this", this)  
        // console.log("d", d)
        // console.log("i", i)
        // console.log("nodes", nodes)
        // nodes = [line(0), label(0), hover-line(0), line(1), label(1), hover-line(1)...]
        var selected_i = Math.floor(i / 3); // increase opacity of both line and label

        var selected = d3.selectAll(".line-".concat(selected_i, ", .label-").concat(selected_i)).raise().style("opacity", 1);
        selected.transition(); // apply thicker stroke only to line

        d3.selectAll(".line-".concat(selected_i)).style("stroke-width", 5); // console.log("transition",t)
      }).on("mouseout", function (d, i, nodes) {
        // console.log("mousout", i)
        var selected_i = Math.floor(i / 3);
        var selected = d3.selectAll(".line-".concat(selected_i, ", .label-").concat(selected_i)).style("opacity", 0.4).style("stroke-width", 1);
        selected.transition();
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
/* harmony import */ var _references_z_example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./references/z_example.js */ "./src/references/z_example.js");
/* harmony import */ var _references_z_simple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./references/z_simple.js */ "./src/references/z_simple.js");
/* harmony import */ var _data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./data/dataTransformer.js */ "./src/data/dataTransformer.js");
/* harmony import */ var _data_terms_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./data/terms.js */ "./src/data/terms.js");
/* harmony import */ var _data_terms_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__);
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

  var test_retrieverPromises = Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["retriever"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][0]);
  console.log("test_retrieverPromises", test_retrieverPromises); // let test = createDataset(test_retrieverPromises);
  // console.log('indexjs Test', test)
  // CALL DRAW CHART FUNCTION

  console.log("$2019_splitqueries", _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"]); // createDataset($2019_splitQueries[1],$2019_splitQueries[2], test_retrieverPromises)
  // .then((d) => {
  //   d3.select("#container").datum(d).call(chartTemplate())
  // })

  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][2], test_retrieverPromises).then(function (d) {
    console.log("woohoo", d);
    d3.select("#container2").datum(d).call(Object(_drawChart_js__WEBPACK_IMPORTED_MODULE_4__["chartTemplate"])()); // const zoom = d3.zoom()
    //                 .scaleExtent()
    //                 .extent([0,0], [800,800])
    // d3.select("svg").call(zoom)
    // const ithink = d3.selectAll(".chart").filter(function(d, i) {
    //   return i === 0
    // })
    // console.log("ithink", ithink)
    // ithink
    // d3.select("#container2").append("clipPath")
    //       .attr("id", "date-clip")
    //       .append("rect")
    //       .attr("x", 0)
    //       .attr("y", 200)
    //       .attr("width", 400)
    //       .attr("height", 600);
  }); //  d3.select("#svg").on("mouseover", function (d, i) {
  //  console.log("test worked", this);
  //  d3.selectAll("#date-clip").attr("width", xScale(endDate)).transition();
  //  });
  // simple_example();
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

/***/ "./src/labelCoords.js":
/*!****************************!*\
  !*** ./src/labelCoords.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function to separate out labels that overlap
function addLabelCoords(data, space, xScale, yScale) {
  var noCollisions = false;
  var yLabelValues = [];
  var yLabelValuesOriginal = []; // let yLabelValues = data.map(function(d) {
  //   return d;
  // })
  // let yLabelValuesOriginal = data.map(function(d) {
  //   return d;
  // })

  data.forEach(function (s) {
    var lastIndex = s.values.length - 1;
    s.labelX = xScale(s.values[lastIndex].date);
    s.labelY = yScale(s.values[lastIndex].point);
    yLabelValues.push(s.labelY);
    yLabelValuesOriginal.push(s.labelY);
  });

  while (!noCollisions) {
    noCollisions = true;
    yLabelValues.forEach(function (v1, i) {
      yLabelValues.forEach(function (v2, j) {
        // let count = 0;
        var yDiff = Math.abs(yLabelValues[j] - yLabelValues[i]);
        var addDiff = space - yDiff; // let movingY = yLabelValuesOriginal[j] >= yLabelValuesOriginal[i] ? j : i;

        if (i !== j && yDiff < space) {
          // console.log("j hit", i, j);
          // console.log("yDiff",yDiff)
          var greaterIndex = yLabelValuesOriginal[j] - yLabelValuesOriginal[i] >= 0 ? j : i;
          yLabelValues[greaterIndex] += addDiff; // console.log("updated", yLabelValues)

          noCollisions = false;
        }
      });
    });
  } // console.log(yLabelValues);
  // return yLabelValues;


  data.forEach(function (s, i) {
    s.labelY = yLabelValues[i];
  });
} // addLabelCoords([0, 3, 6, 9, 12, 15])
// addLabelCoords([4, 3, 1, 55, 2, 1])
// [13, 10,1, 55, 7, 4]


module.exports = {
  addLabelCoords: addLabelCoords
};

/***/ }),

/***/ "./src/references/z_example.js":
/*!*************************************!*\
  !*** ./src/references/z_example.js ***!
  \*************************************/
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

/***/ "./src/references/z_simple.js":
/*!************************************!*\
  !*** ./src/references/z_simple.js ***!
  \************************************/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJyZXRyaWV2ZXIiLCJxdWVyeVN1YnNldHMiLCJyZXRyaWV2ZXJQcm9taXNlcyIsImZvckVhY2giLCJzcGxpdFF1ZXJ5IiwiaW5kZXgiLCJwdXNoIiwianNvbiIsImNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UiLCJkYXRhc2V0IiwiaW50ZXJ2YWwiLCJ0ZXJtU2xpY2UiLCJhdmVyYWdlcyIsInZhbHVlcyIsIm1hcCIsInYiLCJpIiwibW92aW5nVG90YWwiLCJzbGljZSIsInBvaW50IiwibW92aW5nQXZlcmFnZSIsIk1hdGgiLCJyb3VuZCIsImRhdGUiLCJjcmVhdGVEYXRhc2V0IiwicXVlcmllc0FycmF5IiwidGVybXNBcnJheSIsImFycmF5T2ZQcm9taXNlcyIsImNhbGlicmF0ZSIsInJhd2RhdGFTbGljZSIsInJhd2RhdGFJbmRleCIsInJWYWx1ZUluZGV4IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJ2YWx1ZSIsInJhdGlvIiwiZ2V0RGF0YSIsInByb21pc2UiLCJwcm9taXNlSW5kZXgiLCJ0aGVuIiwicmF3ZGF0YSIsImluY3JlbWVudCIsIm1heE51bU9mUXVlcmllcyIsImxlbmd0aCIsInF1ZXJpZXNBcnJheUluZGV4IiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwibmV3UHJvbWlzZXNBcnJheSIsImZpcnN0U3Vic2V0IiwicmVtYWluaW5nUHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiJDIwMTkiLCJvbmVIaXQiLCIkMjAxOCIsIiQyMDE3IiwiJDIwMTYiLCIkMjAxNSIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwiam9pbkluZGV4Iiwiam9pblRlcm0iLCJzcGxpY2UiLCJncm91cCIsInF1ZXJ5U3Vic2V0IiwiY29uY2F0IiwiJDIwMTlfc2VhcmNoVGVybXMiLCIkMjAxOV9zcGxpdFF1ZXJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcnRUZW1wbGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRqIiwiZHJhdyIsInNlbGVjdGlvbiIsImVhY2giLCJkYXRhIiwic3RhcnREYXRlIiwibWluIiwiZCIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwiYWRkTGFiZWxDb29yZHMiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXMiLCJheGlzTGVmdCIsInNjYWxlIiwidGlja1ZhbHVlcyIsInlBeGlzR3JpZCIsInRpY2tTaXplIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIm1pZERhdGUiLCJEYXRlIiwibWlkTWF4IiwiZmlsdGVyIiwidmFsIiwiY29uc29sZSIsImxvZyIsImNsaXAiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJob3ZlckxpbmVzIiwidXBkYXRlQ2hhcnQiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwibmV3U3RhcnRJbmRleCIsIm5ld0VuZEluZGV4IiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3R5bGUiLCJvbiIsIm5vZGVzIiwic2VsZWN0ZWRfaSIsImZsb29yIiwic2VsZWN0ZWQiLCJyYWlzZSIsImFyZ3VtZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsInRlc3RfcmV0cmlldmVyUHJvbWlzZXMiLCJkYXR1bSIsInNwYWNlIiwibm9Db2xsaXNpb25zIiwieUxhYmVsVmFsdWVzIiwieUxhYmVsVmFsdWVzT3JpZ2luYWwiLCJsYXN0SW5kZXgiLCJ2MSIsInYyIiwiaiIsInlEaWZmIiwiYWJzIiwiYWRkRGlmZiIsImdyZWF0ZXJJbmRleCIsInRlc3RfZnVuY3Rpb24iLCJtYXJnaW4iLCJwYWRkaW5nIiwiY2xhc3NlZCIsImNzdiIsInNsaWNlcyIsImNvbHVtbnMiLCJpZCIsIm1lYXN1cmVtZW50IiwiZXh0ZW50IiwiYyIsInlheGlzIiwieGF4aXMiLCJ0aW1lRGF5IiwiaWRzIiwidGVyciIsImZsb3dlciIsImJlZSIsImxhYmVsIiwiY2hhcnRBIiwibXkiLCJzY2FsZXRlc3QiLCJjaGFydCIsInN0cmF3YmVycnkiLCJzaW1wbGVfZXhhbXBsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7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QUFDSDs7QUFHYyxTQUFTSSxjQUFULEdBQTJCO0FBRXRDdkUsU0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFGc0MsQ0FJdEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUY7QUFHRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuI3RpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogIzA2MmY4NztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4jdGl0bGUgcCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNpbnRyby1kaXZpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZiZmY7XFxuICBoZWlnaHQ6IDIwdmg7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4O1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQztcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0O1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lIHtcXG4gIHN0cm9rZS13aWR0aDogMTsgfVxcblxcbi5ob3Zlci1saW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNkMmQyZDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMDsgfVxcblxcbi5sYWJlbCB7XFxuICBwYWRkaW5nOiAxMDA7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWU7IHN0b3JlIGRhdGEgaW4gdmFyaWFibGUgZGF0YUFcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuXG5cbi8vIGZ1bmN0aW9uIHJldHJpZXZlciBzdG9yZXMgcHJvbWlzZXMgdGhhdCBmZXRjaCBkYXRhIGZyb20gdGhlIGZpbGUgdGhhdCBcbi8vIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgcXVlcnlTdWJzZXRzLlxuLy8gSW5wdXQgYXJnIFwicXVlcmllc0FycmF5XCIgaXMgYSBcInRlcm1zLW9ubHlcIiBhcnJheSAoZS5nLiAkMjAxOSlcbi8vIElucHV0IGFycmF5IFwicXVlcnlTdWJzZXRzXCIgY29udGFpbnMgc3Vic2V0cyBvZiBxdWVyaWVzLCByZXR1cm5lZCBmcm9tIGZ1bmN0aW9uIHNwbGl0dGVyIGluIHRlcm1zLmpzXG5mdW5jdGlvbiByZXRyaWV2ZXIgKHF1ZXJ5U3Vic2V0cykge1xuICBjb25zdCByZXRyaWV2ZXJQcm9taXNlcyA9IFtdO1xuXG4gIHF1ZXJ5U3Vic2V0cy5mb3JFYWNoKChzcGxpdFF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgIC8vIGxldCBkYXRhc2V0TmFtZSA9IGBkYXRhc2V0XyR7aW5kZXh9YDtcbiAgICByZXRyaWV2ZXJQcm9taXNlcy5wdXNoKGQzLmpzb24oYC4vZGlzdC9hc3NldHMvZGF0YS8yMDE5XyR7aW5kZXh9Lmpzb25gKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXRyaWV2ZXJQcm9taXNlcztcbn1cblxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWxsIHBvaW50IHZhbHVlcyB0byBhIG1vdmluZyBhdmVyYWdlIChvZiBpbnRlcnZhbCA9IHggd2Vla3MpXG5mdW5jdGlvbiBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIChkYXRhc2V0KSB7XG4gICAgLy8gaW50ZXJ2YWwgaXMgdGhlIG51bSB3ZWVrcyBvdmVyIHdoaWNoIHRoZSBtb3ZpbmdBdmVyYWdlIGlzIGNhbGN1bGF0ZWRcbiAgICBjb25zdCBpbnRlcnZhbCA9IDY7XG5cbiAgICBkYXRhc2V0LmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSkge1xuXG4gICAgICAvLyBjb25zdCBhdmVyYWdlQ2hlY2tlciA9IFtdO1xuICAgICAgXG4gICAgICBjb25zdCBhdmVyYWdlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkLnZhbHVlc1wiLCBkLnZhbHVlcylcblxuICAgICAgICBpZiAoaSA8IGludGVydmFsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmluZ1RvdGFsID0gMDtcblxuICAgICAgICB0ZXJtU2xpY2UudmFsdWVzLnNsaWNlKGkgLSBpbnRlcnZhbCwgaSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIG1vdmluZ1RvdGFsICs9IHYucG9pbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdmluZ0F2ZXJhZ2UgPSBNYXRoLnJvdW5kKG1vdmluZ1RvdGFsIC8gaW50ZXJ2YWwpO1xuXG4gICAgICAgIC8vIGF2ZXJhZ2VDaGVja2VyLnB1c2goW3YucG9pbnQsIG1vdmluZ0F2ZXJhZ2VdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nVG90YWxcIiwgbW92aW5nVG90YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ0F2ZXJhZ2VcIiwgbW92aW5nQXZlcmFnZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB2LmRhdGUsXG4gICAgICAgICAgcG9pbnQ6IG1vdmluZ0F2ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYXZlcmFnZXNcIixhdmVyYWdlQ2hlY2tlcilcbiAgICAgIHRlcm1TbGljZS52YWx1ZXMgPSBhdmVyYWdlcy5zbGljZShpbnRlcnZhbCk7XG4gICAgfSk7XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciB0aGUgZDMgY2hhcnQgZHJhd2luZyBmdW5jdGlvbiB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheSwgYXJyYXlPZlByb21pc2VzKSB7XG4gICAgXG4gIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gIGNvbnN0IGRhdGFzZXQgPSBbXTtcblxuICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gIC8vIGxldCBtYWluSW5kZXggPSAwO1xuXG4gIC8vIHJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHJlbGF0aXZlIHZhbHVlIG9mIGVhY2ggdGVybSBpbiBhIHF1ZXJ5U3Vic2V0LCBcbiAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgZnVuY3Rpb24gY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCByVmFsdWVJbmRleCkge1xuICAgICAgXG4gICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgbGV0IGRlbm9taW5hdG9yID0gcmF3ZGF0YVNsaWNlLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgbGV0IHJhdGlvO1xuICAgICAgXG4gICAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICAgIHJhdGlvID0gMDtcbiAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoK3Jhd2RhdGFTbGljZS52YWx1ZVtyVmFsdWVJbmRleF0gKiByYXRpbyk7XG4gIH1cblxuXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgYXJyYXlPZlByb21pc2VzICh0byB0ZWxsIGlmIGl0IHdpbGwgYWNjZXNzIHRoZSBmaXJzdCBvciBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzKVxuICAvLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdyaXRlcyB0aGUgZGF0YSBpbnRvIGNvbnN0IFwiZGF0YXNldFwiLCBpbiBhcHByb3ByaWF0ZSBmb3JtYXQgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihyYXdkYXRhKSB7XG4gICAgXG4gICAgICBsZXQgaW5jcmVtZW50ID0gcHJvbWlzZUluZGV4ID09PSAwID8gMCA6IDE7ICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggd2l0aGluIGVhY2ggc3ViZGF0YXNldFxuICAgICAgbGV0IG1heE51bU9mUXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgcXVlcmllcyBpbiBhIHNpbmdsZSBjYWxsIHVzaW5nIEdvb2dsZSBUcmVuZHMgQVBJXG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCBtYXhOdW1PZlF1ZXJpZXMgJiYgZGF0YXNldC5sZW5ndGggPCBxdWVyaWVzQXJyYXkubGVuZ3RoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXJpZXNBcnJheUluZGV4ID0gcHJvbWlzZUluZGV4ICogKG1heE51bU9mUXVlcmllcyAtIDEpICsgaW5jcmVtZW50O1xuXG4gICAgICAgIC8vIGVhY2ggc2xpY2UgY29udGFpbnMgYWxsIGluZm8gZm9yIGEgdGVybVxuICAgICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgICB0ZXJtOiB0ZXJtc0FycmF5W3F1ZXJpZXNBcnJheUluZGV4XSxcbiAgICAgICAgICB2YWx1ZXM6IHJhd2RhdGEubWFwKGZ1bmN0aW9uIChyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCkge1xuXG4gICAgICAgICAgICAgIGxldCBwb2ludCA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUluZGV4ID09PSAwID8gK3Jhd2RhdGFTbGljZS52YWx1ZVtpbmNyZW1lbnRdXG4gICAgICAgICAgICAgICAgICA6IGNhbGlicmF0ZShyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCwgaW5jcmVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYocmF3ZGF0YVNsaWNlLmZvcm1hdHRlZEF4aXNUaW1lKSxcblxuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICAgIFxuICAgICAgICBpbmNyZW1lbnQgKz0gMTtcbiAgXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YXNldDtcblxuICAgIH0pXG5cbiAgfSBcblxuXG4gIC8vIGVhY2ggcHJvbWlzZSB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIHRoZSBkYXRhLXdyaXRpbmcgcHJvbWlzZSBhbmQgc3RvcmVkIGluIG5ld1Byb21pc2VzQXJyYXlcbiAgY29uc3QgbmV3UHJvbWlzZXNBcnJheSA9IGFycmF5T2ZQcm9taXNlcy5tYXAoZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBnZXREYXRhKHByb21pc2UsIGluZGV4KTtcbiAgfSlcblxuICByZXR1cm4gbmV3UHJvbWlzZXNBcnJheVswXS50aGVuKGZpcnN0U3Vic2V0ID0+IHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb21pc2VzID0gbmV3UHJvbWlzZXNBcnJheS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZW1haW5pbmdQcm9taXNlcyk7XG4gIH0pXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGRhdGFzZXQpXG4gICAgXG4gICAgY2hhbmdlWVRvTW92aW5nQXZlcmFnZShkYXRhc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRBZnRlciBNb3ZpbmdBdmVyYWdlXCIsIGRhdGFzZXQpXG5cbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfSlcbiAgXG4gIFxufVxuXG5leHBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vXCJ0ZXJtcy1vbmx5XCIgYXJyYXlzXG5cbmNvbnN0ICQyMDE5ID0gW1xuICAgIFwib2sgYm9vbWVyXCIsXG4gICAgXCJ2c2NvXCIsXG4gICAgXCJzZnNcIixcbiAgICBcImZ5cFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJuZ2xcIixcbiAgICBcInNpbXBcIixcbiAgICBcIml5a3lrXCIsXG4gICAgXCJzYlwiXG4gICAgLy8gXCJhbmQgaSBvb3BcIixcbiAgICAvLyBcInNrc2tza1wiLFxuICAgIC8vIFwieWt0dlwiXG5dXG5cbmNvbnN0IG9uZUhpdCA9IFtcInNsYXR0XCIsIFwiYW50c1wiXTtcblxuXG5jb25zdCAkMjAxOCA9IFtcbiAgXCJpbmNlbFwiLFxuICBcInV3dVwiLFxuICBcIm11a2JhbmdcIixcbiAgXCJpYmZcIixcbiAgXCJibG9ja2NoYWluXCIsXG4gIFwicm5nXCIsXG4gIFwiaml0XCIsXG4gIFwianV1bGluZ1wiLFxuICBcImdla3l1bWVcIixcbiAgXCJ6YWRkeVwiLFxuICBcInd0bVwiLFxuICBcIndpZ1wiLFxuXTtcblxuY29uc3QgJDIwMTcgPSBbXG4gIFwibm9uIGJpbmFyeVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJzbm93Zmxha2VcIixcbiAgXCJwbW95c1wiLFxuICBcIm1hZ2FcIixcbiAgXCJ3YXNwXCIsXG4gIFwiYm91amllXCIsXG4gIFwidHJvbGxzXCIsXG5dO1xuXG5jb25zdCAkMjAxNiA9IFtcbiAgXCJnYXNsaWdodGluZ1wiLFxuICBcInNqd1wiLFxuICBcImJvb2xpblwiLFxuICBcIndva2VcIixcbiAgXCJzaGlsbFwiLFxuICBcInF1YXNoXCIsXG4gIFwiYnJhbmRpc2hcIixcbiAgXCJ0cmlnZ2VyZWRcIixcbiAgXCJzaG9va1wiLFxuICBcImJpZ2x5XCIsXG4gIFwiaG9sb3NleHVhbFwiLFxuICBcInZleGluZ1wiLFxuICBcImJvdWdoXCIsXG4gIFwianVqdVwiLFxuICBcIndhdnlcIixcbl07XG5cbmNvbnN0ICQyMDE1ID0gW1xuICBcInNpbW1lclwiLFxuICBcIm5ldGZsaXggYW5kIGNoaWxsXCIsXG4gIFwiY2hhcG9cIixcbiAgXCJzdG9vcFwiLFxuICBcImJsYXNlXCIsXG4gIFwicGxlYlwiLFxuICBcImxvd2tleVwiLFxuICBcInRvbWVcIixcbiAgXCJ3YXBcIixcbiAgXCJzaHVkZGVyXCIsXG4gIFwiYnVybnRcIixcbiAgXCJ2YXBlXCIsXG5dO1xuXG4vLyB0YWtlcyBpbiBhIFwidGVybXMtb25seVwiIGFycmF5O1xuLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgYWN0dWFsIHNlYXJjaCBxdWVyaWVzIHRvIGJlIG1hZGUgdXNpbmcgdGhlIEdvb2dsZSBUcmVuZHMgQVBJXG5mdW5jdGlvbiBzZWFyY2hUZXJtc0dlbmVyYXRvcihhcnJheSkge1xuICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIHNlYXJjaFRlcm1zLnB1c2goYHdoYXQgZG9lcyAke3Rlcm19IG1lYW5gKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRlcm1zKTtcbiAgICByZXR1cm4gc2VhcmNoVGVybXM7XG59O1xuXG4vLyBJbnB1dCBhcmcgXCJxdWVyaWVzQXJyYXlcIiBpcyB0aGUgYXJyYXkgb2Ygc2VhcmNoIHF1ZXJpZXM7IFxuLy8gXCJtYXhOdW1PZlF1ZXJpZXNcIiBpcyB0aGUgbWF4IG51bSBvZiBxdWVyaWVzIGFsbG93ZWQgb24gR29vZ2xlIFRyZW5kcyBBUEk7XG4vLyBcImpvaW5JbmRleFwiIGlzIHRoZSBpbmRleCBvZiB0aGUgY29tbW9uIHF1ZXJ5IG9uIHdoaWNoIHdlIGNhbGlicmF0ZSBlYWNoIHN1YmRhdGFzZXQuXG4vLyBGdW5jdGlvbiBzcGxpdHRlciByZXR1cm5zIGFuIGFycmF5IG9mIHF1ZXJ5U3Vic2V0cywgYW5kIGEgYSB0ZXJtcy1vbmx5IGFycmF5IHJlYXJyYW5nZWQgd2l0aCB0aGUgY29tbW9uIHRlcm0gYXQgaW5kZXggMC5cbi8vIEVhY2ggcXVlcnlTdWJzZXQgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29tbW9uIHF1ZXJ5IGFsb25nIHdpdGggb3RoZXIgcXVlcmllczsgc3ViYXJyYXkubGVuZ3RoID0gbWF4TnVtT2ZRdWVyaWVzLlxuLy8gTGF0ZXIsIGVhY2ggcXVlcnlTdWJzZXQgaXMgdXNlZCB0byBtYWtlIDEgQVBJIGNhbGwgdG8gb2J0YWluIGEgZGF0YVN1YnNldC5cbmZ1bmN0aW9uIHNwbGl0dGVyKHF1ZXJpZXNBcnJheSwgbWF4TnVtT2ZRdWVyaWVzLCBqb2luSW5kZXgsIHRlcm1zQXJyYXkpIHtcblxuICAvLyByZW1vdmUgdGhlIGNvbW1vbiBxdWVyeSBmcm9tIHRoZSBxdWVyaWVzQXJyYXkgb24gd2hpY2ggd2UnbGwgaXRlcmF0ZSBvdmVyIHRvIGdldCB0aGUgc3Vic2V0cyBvZiBxdWVyaWVzLFxuICAvLyBhbmQgc2F2ZSB0aGUgY29tbW9uIHF1ZXJ5IHRvIGNvbnN0IGpvaW5UZXJtXG4gIGNvbnN0IGpvaW5UZXJtID0gcXVlcmllc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGludGVydmFsID0gbWF4TnVtT2ZRdWVyaWVzIC0gMTtcblxuICBsZXQgcXVlcnlTdWJzZXRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyaWVzQXJyYXkubGVuZ3RoOyApIHtcbiAgICAvLyBlYWNoIHNldCBvZiBxdWVyaWVzIGV4Y2x1ZGluZyBjb21tb24gcXVlcnlcbiAgICBjb25zdCBncm91cCA9IHF1ZXJpZXNBcnJheS5zbGljZShpLCBpICsgaW50ZXJ2YWwpO1xuXG4gICAgLy8gZWFjaCBzdWJhcnJheSBoYXMgdGhlIGNvbW1vbiBxdWVyeSBhcyB0aGUgZmlyc3QgZWxlbWVudCwgZm9sbG93ZWQgYnkgb3RoZXIgcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJ5U3Vic2V0ID0gam9pblRlcm0uY29uY2F0KGdyb3VwKTtcblxuICAgIHF1ZXJ5U3Vic2V0cy5wdXNoKHF1ZXJ5U3Vic2V0KTtcblxuICAgIC8vIGp1bXAgdG8gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheSB3aGljaCBoYXNuJ3QgeWV0IGJlZW4gYWRkZWQgdG8gYSBxdWVyeVN1YnNldFxuICAgIGkgKz0gaW50ZXJ2YWw7XG4gIH1cblxuICBxdWVyaWVzQXJyYXkgPSBqb2luVGVybS5jb25jYXQocXVlcmllc0FycmF5KTtcbiAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSkuY29uY2F0KHRlcm1zQXJyYXkpXG4gIFxuXG4gIHJldHVybiBbcXVlcnlTdWJzZXRzLCBxdWVyaWVzQXJyYXksIHRlcm1zQXJyYXldO1xufVxuXG5cbmNvbnN0ICQyMDE5X3NlYXJjaFRlcm1zID0gc2VhcmNoVGVybXNHZW5lcmF0b3IoJDIwMTkpO1xuY29uc3QgJDIwMTlfc3BsaXRRdWVyaWVzID0gc3BsaXR0ZXIoJDIwMTlfc2VhcmNoVGVybXMsIDUsICQyMDE5X3NlYXJjaFRlcm1zLmxlbmd0aCAvIDIsICQyMDE5KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7ICQyMDE5X3NwbGl0UXVlcmllcyB9OyIsImltcG9ydCB7IGFkZExhYmVsQ29vcmRzIH0gZnJvbSBcIi4vbGFiZWxDb29yZHMuanNcIlxuXG4vLyBjcmVhdGluZyByZXVzYWJsZSBjaGFydFxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJ0VGVtcGxhdGUoKSB7XG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgc3ZnXG4gIGxldCB3aWR0aCA9IDgwMDtcbiAgbGV0IGhlaWdodCA9IDgwMDtcbiAgbGV0IGFkaiA9IDMwO1xuXG5cbiAgZnVuY3Rpb24gZHJhdyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAvLyBTQ0FMRVM6IHgtYXhpc1xuICAgICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDMubWluKGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIFxuICAgICAgY29uc3QgZW5kRGF0ZSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBkMy5tYXgoZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInN0YXJ0RGF0ZVwiLCBzdGFydERhdGUpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZW5kRGF0ZVwiLCBlbmREYXRlKVxuXG4gICAgICAvLyBzZXQgZG9tYWluIGFuZCByYW5nZSBvZiB4LWF4aXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAgIC5zY2FsZVRpbWUoKVxuICAgICAgICAuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cblxuICAgICAgLy8gU0NBTEVTOiB5LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtYXggdmFsdWUgZm9yIGRvbWFpbiBvbiB5LWF4aXMgKHBvaW50cylcbiAgICAgIGxldCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuXG4gICAgLy8gYWRkIGxhYmVsIGNvb3JkaW5hdGVzIHRvIGRhdGFzZXQncyB0ZXJtU2xpY2VzXG4gICAgICBhZGRMYWJlbENvb3JkcyhkYXRhLCAxMiwgeFNjYWxlLCB5U2NhbGUpO1xuICAgICAgXG5cbiAgICBcblxuXG4gICAgICAvLyBBWEVTXG4gICAgICBjb25zdCB4QXhpcyA9IGQzXG4gICAgICAgIC5heGlzQm90dG9tKHhTY2FsZSlcbiAgICAgICAgLy8gLnNjYWxlKHhTY2FsZSlcbiAgICB4QXhpcy50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrVmFsdWVzKFtdKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG5cbiAgICAgIC8vIEFYRVM6IGdyaWRsaW5lc1xuICAgICAgY29uc3QgeUF4aXNHcmlkID0gZDNcbiAgICAgICAgLmF4aXNMZWZ0KClcbiAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgLnRpY2tTaXplKC13aWR0aClcbiAgICAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgICAgICAgLnRpY2tWYWx1ZXMoW21heFkvIDMsIDIgKiBtYXhZIC8gMywgbWF4WV0pXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgYC0ke2FkaiAqIDJ9IC0ke2FkaiAqIDN9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgIFxuICAgICAgICAvLyBkYXRlIHVwIHRvIHdoaWNoIGNsaXAgcGF0aCBpcyBhcHBlbmRlZFxuICAgICAgICBjb25zdCBtaWREYXRlID0gbmV3IERhdGUoMjAxOSwgNSwgMzApO1xuICAgICAgICBjb25zdCBtaWRNYXggPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMuZmlsdGVyKHZhbCA9PiB2YWwuZGF0ZSA8PSBtaWREYXRlKSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1pZERhdGVcIiwgbWlkRGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWlkTWF4XCIsIG1pZE1heCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgY2xpcCBwYXRoXG4gICAgICAgIGNvbnN0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKVxuICAgICAgICAgIC5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJkYXRlLWNsaXBcIilcbiAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB4U2NhbGUoc3RhcnREYXRlKSlcbiAgICAgICAgLy8gICAuYXR0cihcInhcIiwgeFNjYWxlKHN0YXJ0RGF0ZSkpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHlTY2FsZShtYXhZKSlcbiAgICAgICAgLy8gICAuYXR0cihcInlcIiwgeVNjYWxlKG1heFkgLSBtaWRNYXgpKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgIHN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAgIC5jYWxsKHhBeGlzKTsgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKS50ZXh0LmFwcGVuZChcIkphblwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiLCBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpKVxuXG4gICAgICAvLyBkcmF3IHktYXhpc1xuICAgICAgc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwieS1heGlzLWdyaWRcIikuY2FsbCh5QXhpc0dyaWQpO1xuICAgICAgLy8gLmFwcGVuZChcInRleHRcIilcbiAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAvLyAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAvLyAuYXR0cihcInlcIiwgLTQwKVxuICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cblxuICAgICAgLy8gZHJhdyBsaW5lc1xuICAgICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAgIC5saW5lKClcblxuICAgICAgICAueChmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB4U2NhbGUodi5kYXRlKTtcbiAgICAgICAgICAvLyByZXR1cm4gZFswXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4geVNjYWxlKHYucG9pbnQpO1xuICAgICAgICAgIC8vIHJldHVybiBkWzFdO1xuICAgICAgICB9KVxuICAgICAgICAvLyAuY3VydmUoZDMgLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpKTtcbiAgICAgICAgLmN1cnZlKGQzLmN1cnZlQmFzaXMpO1xuXG4gICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgbGluZXNcbiAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICBcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGluZSBsaW5lLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgICAgLy8gICByZXR1cm4gbGluZShkLnNwbGluZWQpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjZGF0ZS1jbGlwKVwiKTtcblxuICAgICAgLy8gYWRkIGxhYmVscyB0byBlYWNoIGxpbmVcbiAgICAgIGxpbmVzXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYGxhYmVsIGxhYmVsLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBg4oe9ICAgICAgICR7ZC50ZXJtfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtkLmxhYmVsWH0sICR7ZC5sYWJlbFl9KWA7XG4gICAgICAgICAgICAvLyBjb25zdCBsYXN0SW5kZXggPSBkLnZhbHVlcy5sZW5ndGggLSAxO1xuICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxYID0geFNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFkgPSB5U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCk7XG4gICAgICAgIC8vICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtsYWJlbFh9LCAke2xhYmVsWX0pYDtcbiAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBob3ZlckxpbmVzID0gbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaG92ZXItbGluZVwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gbGluZShkLnNwbGluZWQpfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpfSlcblxuXG4gICAgLy8gY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKVxuICAgIC8vIC5kZWxheSgxKVxuICAgIC8vIC5kdXJhdGlvbigpXG5cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiB1cGRhdGVDaGFydCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVDaGFydFwiLGQzLnNlbGVjdGlvbi5ldmVudClcbiAgICAgICAgY29uc3QgbmV3U3RhcnREYXRlID0gbmV3IERhdGUoMjAxNywgMTEsIDEpO1xuICAgICAgICBjb25zdCBuZXdFbmREYXRlICA9IG5ldyBEYXRlKDIwMTksIDYsIDMxKTtcbiAgICAgICAgLy8gY29uc3QgZXh0ZW50ID0gW25ld1N0YXJ0RGF0ZSwgbmV3RW5kRGF0ZV07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXh0ZW50XCIsIGV4dGVudClcblxuICAgICAgICAvLyBjb25zdCB0ZXN0MSA9IHhTY2FsZS5pbnZlcnQoZXh0ZW50WzBdKVxuICAgICAgICAvLyBjb25zdCB0ZXN0MiA9IHhTY2FsZS5pbnZlcnQoZXh0ZW50WzFdKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZUNoYXJ0XCIsIHRlc3QxLCB0ZXN0MilcbiAgICAgICAgeFNjYWxlLmRvbWFpbihbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXSlcblxuICAgICAgICBsZXQgbmV3U3RhcnRJbmRleDtcbiAgICAgICAgbGV0IG5ld0VuZEluZGV4O1xuXG4gICAgICAgIC8vIGNvbnN0IG5ld0RhdGFQb2ludHMgPSBcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhWzBdLnZhbHVlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPj0gbmV3U3RhcnREYXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ld1N0YXJ0SW5kZXggPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbMF0udmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChkYXRhWzBdLnZhbHVlc1tpXS5kYXRlID4gbmV3RW5kRGF0ZSkge1xuICAgICAgICAgICAgICAgIG5ld0VuZEluZGV4ID0gaTtcbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgXG5cbiAgICAgICAgLy8gZmlsdGVyKCh2YWwsIGkpID0+IHtcbiAgICAgICAgICAgIC8vIHJldHVybiBpID49IDFcbiAgICAgICAgICAgIC8vIHJldHVybiB2YWwuZGF0ZSA+PSBuZXdTdGFydERhdGUgJiYgdmFsLmRhdGUgPD0gbmV3RW5kRGF0ZTsgXG4gICAgICAgIC8vIH0pXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zdCBuZXdTdGFydEluZGV4ID0gbmV3RGF0YVBvaW50c1swXVxuXG4gICAgICAgIC8vIGNvbnN0IG5ld0VuZEluZGV4ID0gbmV3RGF0YVBvaW50c1tuZXdEYXRhUG9pbnRzIC0gMV1cblxuXG4gICAgICAgIGNvbnNvbGUubG9nKFwibmV3aVwiICwgbmV3U3RhcnRJbmRleCwgbmV3RW5kSW5kZXgpXG5cbiAgICAgICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAgICAgICBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNcIiwgcylcbiAgICAgICAgICAgIHMgPSBzLnZhbHVlcy5zbGljZShuZXdTdGFydEluZGV4LCBuZXdFbmRJbmRleClcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzLmxlbmd0aFwiLCBzLmxlbmd0aClcbiAgICAgICAgICAgIHJldHVybiBkMy5tYXgocywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICAvLyAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBtYXhZXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgICAgIC8vIHlTY2FsZS5kb21haW4oW25ld1N0YXJ0RGF0ZSwgbmV3RW5kRGF0ZV0pXG4gICAgICAgIC8vIHVwZGF0ZSB4IGF4aXNcbiAgICAgICAgc3ZnLnNlbGVjdChcIi54LWF4aXNcIikuY2FsbCh4QXhpcykudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApO1xuICAgICAgICAvLyBzdmcuc2VsZWN0KFwiLnktYXhpc1wiKS5jYWxsKHlBeGlzKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInhTY2FsZVwiLCB4U2NhbGUobmV3U3RhcnREYXRlKSlcbiAgICAgICAgY29uc29sZS5sb2coXCJ5U2NhbGVcIiwgeVNjYWxlKG1heFkpKVxuICAgICAgICB5U2NhbGUuZG9tYWluKFswLCBtYXhZXSlcbiAgICAgICAgLy8gYWRkU3BsaW5lZFZhbHVlcygpXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJsaW5lc1wiLCBsaW5lcylcbiAgICAgICAgbGluZXMuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgXG4gICAgICAgICAgLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKVxuICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcImxpbmUgdHJhbnNpdGlvblwiKVxuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICB9XG4gICAgXG4gICAgLy8gdXBkYXRlQ2hhcnQoKSBcblxuICAgIHN2Zy5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNkYXRlLWNsaXApXCIpLnN0eWxlKCdmaWxsJywgXCJsaWdodGdyZXlcIik7XG4gICAgXG4gICAgc3ZnXG4gICAgICAuc2VsZWN0QWxsKFwiLmhvdmVyLWxpbmUsIC5sYWJlbCwgLmxpbmVcIilcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCwgaSwgbm9kZXMpIHtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcIm1vdXNpblwiLCBpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcykgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRcIiwgZClcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibm9kZXNcIiwgbm9kZXMpXG4gICAgICAgIFxuICAgICAgICAvLyBub2RlcyA9IFtsaW5lKDApLCBsYWJlbCgwKSwgaG92ZXItbGluZSgwKSwgbGluZSgxKSwgbGFiZWwoMSksIGhvdmVyLWxpbmUoMSkuLi5dXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX2kgPSBNYXRoLmZsb29yKGkvMylcbiAgICAgICAgXG4gICAgICAgIC8vIGluY3JlYXNlIG9wYWNpdHkgb2YgYm90aCBsaW5lIGFuZCBsYWJlbFxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGQzXG4gICAgICAgICAgLnNlbGVjdEFsbChgLmxpbmUtJHtzZWxlY3RlZF9pfSwgLmxhYmVsLSR7c2VsZWN0ZWRfaX1gKVxuICAgICAgICAgIC5yYWlzZSgpXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICBcbiAgICAgICAgc2VsZWN0ZWQudHJhbnNpdGlvbigpXG5cbiAgICAgICAgLy8gYXBwbHkgdGhpY2tlciBzdHJva2Ugb25seSB0byBsaW5lXG4gICAgICAgIGQzLnNlbGVjdEFsbChgLmxpbmUtJHtzZWxlY3RlZF9pfWApLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDUpO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0cmFuc2l0aW9uXCIsdClcbiAgICAgICAgXG4gICAgfSlcbiAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCwgaSwgbm9kZXMpIHtcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdXNvdXRcIiwgaSlcbiAgICBcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaSAvIDMpO1xuXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDNcbiAgICAgICAgICAuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9LCAubGFiZWwtJHtzZWxlY3RlZF9pfWApXG4gICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwLjQpXG4gICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpO1xuXG4gICAgICAgIHNlbGVjdGVkLnRyYW5zaXRpb24oKTtcbiAgICB9KTtcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcbiAgICBcblxuICAgIFxuXG4gICAgfSk7XG5cblxuICAgIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9yZWZlcmVuY2VzL3pfZXhhbXBsZS5qc1wiO1xuaW1wb3J0IHNpbXBsZV9leGFtcGxlIGZyb20gXCIuL3JlZmVyZW5jZXMvel9zaW1wbGUuanNcIjtcblxuLy8gZGF0YVxuaW1wb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0gZnJvbSBcIi4vZGF0YS9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vZGF0YS90ZXJtcy5qc1wiO1xuXG4vLyBkMyBjaGFydFxuaW1wb3J0IHsgY2hhcnRUZW1wbGF0ZSB9IGZyb20gXCIuL2RyYXdDaGFydC5qc1wiO1xuXG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbi8vIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuLy8gLy8gY29uc3QgaWxsdXN0cmF0aW9uID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbi8vICAgICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG5cbi8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuXG4vLyAvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgXG4gIC8vLy8gY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgY29uc3QgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcyA9IHJldHJpZXZlcigkMjAxOV9zcGxpdFF1ZXJpZXNbMF0pO1xuICBjb25zb2xlLmxvZyhcInRlc3RfcmV0cmlldmVyUHJvbWlzZXNcIiwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLy8gbGV0IHRlc3QgPSBjcmVhdGVEYXRhc2V0KHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cbiAgY29uc29sZS5sb2coXCIkMjAxOV9zcGxpdHF1ZXJpZXNcIiwgJDIwMTlfc3BsaXRRdWVyaWVzKVxuICBcblxuICAvLyBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwkMjAxOV9zcGxpdFF1ZXJpZXNbMl0sIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gIC8vIC50aGVuKChkKSA9PiB7XG4gICAgLy8gICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRUZW1wbGF0ZSgpKVxuICAgIC8vIH0pXG4gICAgXG4gICAgXG4gICAgXG4gICAgY3JlYXRlRGF0YXNldCgkMjAxOV9zcGxpdFF1ZXJpZXNbMV0sJDIwMTlfc3BsaXRRdWVyaWVzWzJdLCB0ZXN0X3JldHJpZXZlclByb21pc2VzKVxuICAgIC50aGVuKChkKSA9PiB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwid29vaG9vXCIsIGQpXG4gICAgZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG5cbiAgICAvLyBjb25zdCB6b29tID0gZDMuem9vbSgpXG4gICAgLy8gICAgICAgICAgICAgICAgIC5zY2FsZUV4dGVudCgpXG4gICAgLy8gICAgICAgICAgICAgICAgIC5leHRlbnQoWzAsMF0sIFs4MDAsODAwXSlcblxuICAgIC8vIGQzLnNlbGVjdChcInN2Z1wiKS5jYWxsKHpvb20pXG4gICAgLy8gY29uc3QgaXRoaW5rID0gZDMuc2VsZWN0QWxsKFwiLmNoYXJ0XCIpLmZpbHRlcihmdW5jdGlvbihkLCBpKSB7XG4gICAgLy8gICByZXR1cm4gaSA9PT0gMFxuICAgIC8vIH0pXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGhpbmtcIiwgaXRoaW5rKVxuICAgIC8vIGl0aGlua1xuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgLy8gICAgICAgLmF0dHIoXCJpZFwiLCBcImRhdGUtY2xpcFwiKVxuICAgIC8vICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ5XCIsIDIwMClcbiAgICAvLyAgICAgICAuYXR0cihcIndpZHRoXCIsIDQwMClcbiAgICAvLyAgICAgICAuYXR0cihcImhlaWdodFwiLCA2MDApO1xuICAgIFxuICB9KVxuXG4vLyAgZDMuc2VsZWN0KFwiI3N2Z1wiKS5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAvLyAgY29uc29sZS5sb2coXCJ0ZXN0IHdvcmtlZFwiLCB0aGlzKTtcblxuICAvLyAgZDMuc2VsZWN0QWxsKFwiI2RhdGUtY2xpcFwiKS5hdHRyKFwid2lkdGhcIiwgeFNjYWxlKGVuZERhdGUpKS50cmFuc2l0aW9uKCk7XG4vLyAgfSk7XG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7IiwiLy8gZnVuY3Rpb24gdG8gc2VwYXJhdGUgb3V0IGxhYmVscyB0aGF0IG92ZXJsYXBcbmZ1bmN0aW9uIGFkZExhYmVsQ29vcmRzKGRhdGEsIHNwYWNlLCB4U2NhbGUsIHlTY2FsZSkge1xuICBsZXQgbm9Db2xsaXNpb25zID0gZmFsc2U7XG5cbiAgbGV0IHlMYWJlbFZhbHVlcyA9IFtdO1xuICBsZXQgeUxhYmVsVmFsdWVzT3JpZ2luYWwgPSBbXTtcblxuICAvLyBsZXQgeUxhYmVsVmFsdWVzID0gZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAvLyAgIHJldHVybiBkO1xuICAvLyB9KVxuICAvLyBsZXQgeUxhYmVsVmFsdWVzT3JpZ2luYWwgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgbGV0IGxhc3RJbmRleCA9IHMudmFsdWVzLmxlbmd0aCAtIDE7XG5cbiAgICBzLmxhYmVsWCA9IHhTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpO1xuICAgIHMubGFiZWxZID0geVNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuXG4gICAgeUxhYmVsVmFsdWVzLnB1c2gocy5sYWJlbFkpO1xuICAgIHlMYWJlbFZhbHVlc09yaWdpbmFsLnB1c2gocy5sYWJlbFkpO1xuICB9KTtcblxuICB3aGlsZSAoIW5vQ29sbGlzaW9ucykge1xuICAgIG5vQ29sbGlzaW9ucyA9IHRydWU7XG5cbiAgICB5TGFiZWxWYWx1ZXMuZm9yRWFjaCgodjEsIGkpID0+IHtcbiAgICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MiwgaikgPT4ge1xuICAgICAgICAvLyBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGxldCB5RGlmZiA9IE1hdGguYWJzKHlMYWJlbFZhbHVlc1tqXSAtIHlMYWJlbFZhbHVlc1tpXSk7XG4gICAgICAgIGxldCBhZGREaWZmID0gc3BhY2UgLSB5RGlmZjtcblxuICAgICAgICAvLyBsZXQgbW92aW5nWSA9IHlMYWJlbFZhbHVlc09yaWdpbmFsW2pdID49IHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID8gaiA6IGk7XG5cbiAgICAgICAgaWYgKGkgIT09IGogJiYgeURpZmYgPCBzcGFjZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaiBoaXRcIiwgaSwgaik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5RGlmZlwiLHlEaWZmKVxuICAgICAgICAgIGxldCBncmVhdGVySW5kZXggPVxuICAgICAgICAgICAgeUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gLSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSA+PSAwID8gaiA6IGk7XG5cbiAgICAgICAgICB5TGFiZWxWYWx1ZXNbZ3JlYXRlckluZGV4XSArPSBhZGREaWZmO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlZFwiLCB5TGFiZWxWYWx1ZXMpXG4gICAgICAgICAgbm9Db2xsaXNpb25zID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coeUxhYmVsVmFsdWVzKTtcblxuICAvLyByZXR1cm4geUxhYmVsVmFsdWVzO1xuXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xuICAgIHMubGFiZWxZID0geUxhYmVsVmFsdWVzW2ldO1xuICB9KTtcbn1cblxuXG4vLyBhZGRMYWJlbENvb3JkcyhbMCwgMywgNiwgOSwgMTIsIDE1XSlcbi8vIGFkZExhYmVsQ29vcmRzKFs0LCAzLCAxLCA1NSwgMiwgMV0pXG4vLyBbMTMsIDEwLDEsIDU1LCA3LCA0XVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWRkTGFiZWxDb29yZHMgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0X2Z1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IDk2MDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA1O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gNTtcbiAgICAgICAgY29uc3QgYWRqID0gMzA7XG5cbiAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBTVkcgZmlyc3QgLSBlZGl0ZWQgYWRqXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgKC0xICogYWRqKSArIFwiIFwiICsgKC0xICogYWRqKSArIFwiIFwiICsgKHdpZHRoICsgMyAqIGFkaikgKyBcIiBcIiArIChoZWlnaHQgKyAzICogYWRqKSlcbiAgICAgICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVkLSViLSVZXCIpO1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gZDMuY3N2KFwiLi9kaXN0L2Fzc2V0cy90ZXN0LmNzdlwiKTtcblxuICAgICAgICBkYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9kYXRhXCIsIGRhdGEpXG4gICAgICAgICAgICBjb25zdCBzbGljZXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiArZFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnNcIiwgZGF0YS5jb2x1bW5zKTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzIHdpdGhvdXQgZGF0ZVwiLCBkYXRhLmNvbHVtbnMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgc2xpY2VkIGRhdGFzZXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9zbGljZXNcIiwgc2xpY2VzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGUgZWxlbWVudFwiLHNsaWNlc1swXS52YWx1ZXNbMF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFxuICAgICAgICAgICAgICAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCxcbiAgICAgICAgICAgICAgICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybnMgdW5kZWZpbmVkOlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleGFtcGxlX3hTY2FsZVwiLCB4U2NhbGUoKSk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCB5YXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhheGlzID0gZDNcbiAgICAgICAgICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gICAgICAgICAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAgICAgICAgICAgICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLm1lYXN1cmVtZW50KTsgfSk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh4YXhpcyk7XG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh5YXhpcylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHNsaWNlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBpZHMpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VyaWVfbGFiZWxcIilcbiAgICAgICAgICAgICAgICAvLyAuZGF0dW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkZTogZC5pZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlZTogZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArICh4U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0uZGF0ZSkgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICsgXCIsXCIgKyAoeVNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLm1lYXN1cmVtZW50KSArIDUpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKFwiU2VyaWUgXCIpICsgZC5pZCB9KVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9IClcbiAgICAgICAgfSk7XG5cbiAgICAvLyB9KVxufSIsIlxuY29uc3QgZGF0YSA9IFszLCA2NiwgMiwgNzYsIDUsIDIwLCAxLCAzMCwgNTAsIDksIDgwLCA1LCA3XTtcbmNvbnN0IHRlcnIgPSBbNSwgNSwgNSwgNSwgODAsIDgwLCAyLCAzLCAxLCAyLCA2MCwgMSwgMiwgMzNdXG5jb25zdCBmbG93ZXIgPSBbWzUsIDVdLCBbMSwgMl0sIFs4MCwgODBdXVxuY29uc3QgYmVlID0gW3t2YWx1ZTogNywgbGFiZWw6Mn0sIHt2YWx1ZTogMSwgbGFiZWw6IDN9XVxuXG5mdW5jdGlvbiBjaGFydEEgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGNoYXJ0QVwiKVxuXG4gICAgbGV0IHdpZHRoID0gMjA7XG4gICAgbGV0IGhlaWdodCA9IDIwMDtcblxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMTAwXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgIC5saW5lKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGkpO1xuICAgICAgfSlcbiAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGQpO1xuICAgICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIG15KHNlbGVjdGlvbikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIG15XCIpXG5cbiAgICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzXCIsIHRoaXMpXG4gICAgICAgICAgICBjb25zdCBzY2FsZXRlc3QgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxldGVzdFwiLCBzY2FsZXRlc3QpXG5cbiAgICAgICAgICAgIC8vIFwidGhpc1wiIGlzIHRoZSBzZWxlY3RlZCBlbGVtZW50IChpbiB0aGlzIGNhc2UsIGRpdiB3aXRoIGlkPVwiI2NvbnRhaW5lclwiKVxuICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAqIGRhdGEubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2hhcnQuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoc3RyYXdiZXJyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gbGluZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIG15LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbXkuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlX2V4YW1wbGUgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJzaW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyB3aWR0aFwiLCBjaGFydEEoKS53aWR0aCgpKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3MgbXlcIiwgY2hhcnRBKCkpXG4gICAgXG4gICAgLy8gY29uc3QgY2hhcnRCID0gY2hhcnRBKCkuaGVpZ2h0KDMwMClcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIG15XCIsIGNoYXJ0QilcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIGhlaWdodFwiLCBjaGFydEIuaGVpZ2h0KCkpXG5cbiAgICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGRhdGEpLmNhbGwoY2hhcnRBKCkpXG5cbiAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuZGF0dW0oYmVlKS5jYWxsKGNoYXJ0QSgpKVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9