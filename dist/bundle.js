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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.2;\n  cursor: default;\n  padding: 1000px; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.hover-line {\n  fill: none;\n  stroke: #d2d2d2;\n  opacity: 0;\n  stroke-width: 10; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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

var timeConv = d3.timeParse("%b %d, %Y"); // 

function changeYToMovingAverage(dataset) {
  // interval is the num weeks over which the movingAverage is calculated
  var interval = 9;
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
    }); //   console.log("averages",averageChecker)

    termSlice.values = averages.slice(interval);
  });
} // function retriever stores promises that fetch data from the file that 
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
        var queriesArrayIndex = promiseIndex * (maxNumOfQueries - 1) + increment;
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

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]); // add label coordinates to dataset's termSlices

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, 12, xScale, yScale); // VALUES: add splined values

      data.forEach(function (termSlice, i) {
        var dates = termSlice.values.map(function (v) {
          return xScale(v.date); // get array of dates mapped onto the browser
        });
        var points = termSlice.values.map(function (v) {
          return yScale(v.point);
        });
        var splineDate = d3.interpolateBasis(dates);
        var splinePoint = d3.interpolateBasis(points); //   console.log("quantDate", d3.quantize(splineDate, 113*2))
        //   console.log("quantPoint", d3.quantize(splinePoint, 113));
        //   console.log("quantPointmax", d3.min(d3.quantize(splinePoint, 110)));

        var originalNumOfPoints = termSlice.values.length;
        var degree = 21 * originalNumOfPoints;
        termSlice.splined = d3.zip(d3.quantize(splineDate, degree), d3.quantize(splinePoint, degree));
      }); // AXES

      var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0);
      var yAxis = d3.axisLeft().scale(yScale).tickValues([]).tickSizeOuter(0); // AXES: gridlines

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat("").tickValues([maxY / 3, 2 * maxY / 3, maxY]).tickSizeOuter(0); // append svg

      var svg = d3.select(this).append("svg").attr("class", "chart").attr("width", width).attr("height", height).attr("viewBox", "-".concat(adj * 2, " -").concat(adj * 3, " ").concat(width + adj * 10, " ").concat(height + adj * 2)).attr("preserveAspectRatio", "xMinYMin meet"); // draw x-axis

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

      var line = d3.line().x(function (d) {
        //   return xScale(d.date);
        return d[0];
      }).y(function (d) {
        // return yScale(d.point);
        return d[1];
      });
      var lines = svg.selectAll("lines").data(data).enter().append("g");
      lines.append("path").attr("class", function (d, i) {
        return "line line-".concat(i);
      }).attr("d", function (d) {
        // return line(d.values);
        return line(d.splined);
      }); // add labels to each line

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
      var hoverLines = lines.append("path").attr("class", "hover-line").attr("d", function (d) {
        return line(d.splined);
      }); // console.log("selectAll", d3.selectAll(".label"))
      // const t = d3.transition()
      // .delay("100")
      // .duration()
      // console.log("come on", svg.selectAll(".hover-line").merge(svg.selectAll(".line")))

      svg.selectAll(".hover-line").merge(svg.selectAll(".label")).on("mouseover", function (d, i) {
        console.log(d);
        var selected = d3.selectAll(".line-".concat(i, ", .label-").concat(i)).raise();
        selected.transition().delay("0").duration("10").style("opacity", 1);
      }).on("mouseout", function (d, i) {
        var selected = d3.selectAll(".line-".concat(i, ", .label-").concat(i));
        selected.transition().style("opacity", 0.2);
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

  console.log("$2019_splitqueries", _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"]);
  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][2], test_retrieverPromises).then(function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJxdWVyaWVzQXJyYXkiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwicXVlcmllc0FycmF5SW5kZXgiLCJ0ZXJtIiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJuZXdQcm9taXNlc0FycmF5IiwiZmlyc3RTdWJzZXQiLCJyZW1haW5pbmdQcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCIkMjAxOSIsIm9uZUhpdCIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1Iiwic2VhcmNoVGVybXNHZW5lcmF0b3IiLCJhcnJheSIsInNlYXJjaFRlcm1zIiwic3BsaXR0ZXIiLCJqb2luSW5kZXgiLCJqb2luVGVybSIsInNwbGljZSIsImdyb3VwIiwicXVlcnlTdWJzZXQiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIiQyMDE5X3NwbGl0UXVlcmllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjaGFydFRlbXBsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJhZGoiLCJkcmF3Iiwic2VsZWN0aW9uIiwiZWFjaCIsImRhdGEiLCJzdGFydERhdGUiLCJtaW4iLCJkIiwiY29uc29sZSIsImxvZyIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwiYWRkTGFiZWxDb29yZHMiLCJkYXRlcyIsInBvaW50cyIsInNwbGluZURhdGUiLCJpbnRlcnBvbGF0ZUJhc2lzIiwic3BsaW5lUG9pbnQiLCJvcmlnaW5hbE51bU9mUG9pbnRzIiwiZGVncmVlIiwic3BsaW5lZCIsInppcCIsInF1YW50aXplIiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tWYWx1ZXMiLCJ5QXhpc0dyaWQiLCJ0aWNrU2l6ZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJob3ZlckxpbmVzIiwibWVyZ2UiLCJvbiIsInNlbGVjdGVkIiwicmFpc2UiLCJ0cmFuc2l0aW9uIiwiZGVsYXkiLCJkdXJhdGlvbiIsInN0eWxlIiwiYXJndW1lbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdF9yZXRyaWV2ZXJQcm9taXNlcyIsImRhdHVtIiwic3BhY2UiLCJub0NvbGxpc2lvbnMiLCJ5TGFiZWxWYWx1ZXMiLCJ5TGFiZWxWYWx1ZXNPcmlnaW5hbCIsImxhc3RJbmRleCIsInYxIiwidjIiLCJqIiwieURpZmYiLCJhYnMiLCJhZGREaWZmIiwiZ3JlYXRlckluZGV4IiwidGVzdF9mdW5jdGlvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJjbGFzc2VkIiwiY3N2Iiwic2xpY2VzIiwiY29sdW1ucyIsImlkIiwibWVhc3VyZW1lbnQiLCJleHRlbnQiLCJjIiwieWF4aXMiLCJ4YXhpcyIsInRpbWVEYXkiLCJpZHMiLCJ0ZXJyIiwiZmxvd2VyIiwiYmVlIiwibGFiZWwiLCJjaGFydEEiLCJteSIsInNjYWxldGVzdCIsImNoYXJ0Iiwic3RyYXdiZXJyeSIsInNpbXBsZV9leGFtcGxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FB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MUIsRUFBK0IsVUFBVTRELFVBQVYsRUFBc0I7QUFDbkQsZUFBTzFELElBQUksQ0FBQy9DLElBQUQsQ0FBWDtBQUNELE9BRkQ7QUFLSCxLQXRCRDtBQXdCSDs7QUFFRHNHLElBQUUsQ0FBQzVHLEtBQUgsR0FBVyxVQUFTeEMsS0FBVCxFQUFnQjtBQUN6QixRQUFJLENBQUMrRyxTQUFTLENBQUN0RyxNQUFmLEVBQXVCO0FBQ3JCLGFBQU8rQixLQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFdBQUssR0FBR3hDLEtBQVI7QUFDQSxhQUFPb0osRUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQUEsSUFBRSxDQUFDM0csTUFBSCxHQUFZLFVBQVN6QyxLQUFULEVBQWdCO0FBQzFCLFFBQUksQ0FBQytHLFNBQVMsQ0FBQ3RHLE1BQWYsRUFBdUI7QUFDckIsYUFBT2dDLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsWUFBTSxHQUFHekMsS0FBVDtBQUNBLGFBQU9vSixFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQU9BLEVBQVA7QUFDSDs7QUFHYyxTQUFTSSxjQUFULEdBQTJCO0FBRXRDdEcsU0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFGc0MsQ0FJdEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUY7QUFHRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuI3RpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogIzA2MmY4NztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4jdGl0bGUgcCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNpbnRyby1kaXZpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZiZmY7XFxuICBoZWlnaHQ6IDIwdmg7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4O1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQztcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0O1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7XFxuICBvcGFjaXR5OiAwLjI7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTtcXG4gIG9wYWNpdHk6IDAuMjtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwO1xcbiAgb3BhY2l0eTogMC4yO1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5ob3Zlci1saW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNkMmQyZDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAxMDsgfVxcblxcbi8qIGludGVyYWN0aXZlIGVsZW1lbnRzICovXFxuLyogVE9PTFRJUCAqL1xcbi50b29sdGlwIHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogYXJpYWw7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4vKiBQT0lOVFMgKi9cXG4ucG9pbnQge1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogIzljOWM5YzsgfVxcblxcbi8qIGZvciBleHBlcmltZW50aW5nIC0gY29sb3JpbmcgZWxlbWVudHMgKi9cXG4vKiBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufSAqL1xcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi90ZXJtcy5qc1wiO1xuXG4vLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZTsgc3RvcmUgZGF0YSBpbiB2YXJpYWJsZSBkYXRhQVxuY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG5cbi8vIFxuZnVuY3Rpb24gY2hhbmdlWVRvTW92aW5nQXZlcmFnZSAoZGF0YXNldCkge1xuICAgIC8vIGludGVydmFsIGlzIHRoZSBudW0gd2Vla3Mgb3ZlciB3aGljaCB0aGUgbW92aW5nQXZlcmFnZSBpcyBjYWxjdWxhdGVkXG4gICAgY29uc3QgaW50ZXJ2YWwgPSA5O1xuXG4gICAgZGF0YXNldC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtU2xpY2UpIHtcbiAgICAgICAgY29uc3QgYXZlcmFnZUNoZWNrZXIgPSBbXTtcbiAgICAgIGNvbnN0IGF2ZXJhZ2VzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2XCIsIHYpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImQudmFsdWVzXCIsIGQudmFsdWVzKVxuXG4gICAgICAgIGlmIChpIDwgaW50ZXJ2YWwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW92aW5nVG90YWwgPSAwO1xuXG4gICAgICAgIHRlcm1TbGljZS52YWx1ZXMuc2xpY2UoaSAtIGludGVydmFsLCBpKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgbW92aW5nVG90YWwgKz0gdi5wb2ludDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW92aW5nQXZlcmFnZSA9IE1hdGgucm91bmQobW92aW5nVG90YWwgLyBpbnRlcnZhbCk7XG5cbiAgICAgICAgYXZlcmFnZUNoZWNrZXIucHVzaChbdi5wb2ludCwgbW92aW5nQXZlcmFnZV0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdUb3RhbFwiLCBtb3ZpbmdUb3RhbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nQXZlcmFnZVwiLCBtb3ZpbmdBdmVyYWdlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IHYuZGF0ZSxcbiAgICAgICAgICBwb2ludDogbW92aW5nQXZlcmFnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJhdmVyYWdlc1wiLGF2ZXJhZ2VDaGVja2VyKVxuICAgICAgdGVybVNsaWNlLnZhbHVlcyA9IGF2ZXJhZ2VzLnNsaWNlKGludGVydmFsKTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gcmV0cmlldmVyIHN0b3JlcyBwcm9taXNlcyB0aGF0IGZldGNoIGRhdGEgZnJvbSB0aGUgZmlsZSB0aGF0IFxuLy8gY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IGluIHRoZSBhcnJheSBxdWVyeVN1YnNldHMuXG4vLyBJbnB1dCBhcmcgXCJxdWVyaWVzQXJyYXlcIiBpcyBhIFwidGVybXMtb25seVwiIGFycmF5IChlLmcuICQyMDE5KVxuLy8gSW5wdXQgYXJyYXkgXCJxdWVyeVN1YnNldHNcIiBjb250YWlucyBzdWJzZXRzIG9mIHF1ZXJpZXMsIHJldHVybmVkIGZyb20gZnVuY3Rpb24gc3BsaXR0ZXIgaW4gdGVybXMuanNcbmZ1bmN0aW9uIHJldHJpZXZlciAocXVlcnlTdWJzZXRzKSB7XG4gIGNvbnN0IHJldHJpZXZlclByb21pc2VzID0gW107XG5cbiAgcXVlcnlTdWJzZXRzLmZvckVhY2goKHNwbGl0UXVlcnksIGluZGV4KSA9PiB7XG4gICAgLy8gbGV0IGRhdGFzZXROYW1lID0gYGRhdGFzZXRfJHtpbmRleH1gO1xuICAgIHJldHJpZXZlclByb21pc2VzLnB1c2goZDMuanNvbihgLi9kaXN0L2Fzc2V0cy9kYXRhLzIwMTlfJHtpbmRleH0uanNvbmApKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHJpZXZlclByb21pc2VzO1xufVxuXG5cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgY3JlYXRlcyB0aGUgZGF0YXNldCBmb3IgdGhlIGQzIGNoYXJ0IGRyYXdpbmcgZnVuY3Rpb24gdG8gdXNlXG4vLyB0YWtlcyBpbiBpbnB1dCBhcmdzIHRoYXQgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiBcInJldHJpZXZlclwiXG5mdW5jdGlvbiBjcmVhdGVEYXRhc2V0IChxdWVyaWVzQXJyYXksIHRlcm1zQXJyYXksIGFycmF5T2ZQcm9taXNlcykge1xuICAgIFxuICAgIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gICAgY29uc3QgZGF0YXNldCA9IFtdO1xuXG4gICAgLy8gLy8ga2VlcHMgdHJhY2sgb2YgdGhlIGluZGV4IG9mIGVhY2ggdGVybVxuICAgIC8vIGxldCBtYWluSW5kZXggPSAwO1xuXG4gICAgLy8gcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVsYXRpdmUgdmFsdWUgb2YgZWFjaCB0ZXJtIGluIGEgcXVlcnlTdWJzZXQsIFxuICAgIC8vIHVzaW5nIHRoZSBwb2ludCB2YWx1ZSBvZiB0aGUgY29tbW9uIHF1ZXJ5IGFzIGEgcmVmZXJlbmNlXG4gICAgZnVuY3Rpb24gY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCByVmFsdWVJbmRleCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IG51bWVyYXRvciA9IGRhdGFzZXRbMF0udmFsdWVzW3Jhd2RhdGFJbmRleF0ucG9pbnQ7IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gcHJldmlvdXMgcHJvbWlzZSAoYWxyZWFkeSBpbiB2YXIgZGF0YXNldClcbiAgICAgICAgbGV0IGRlbm9taW5hdG9yID0gcmF3ZGF0YVNsaWNlLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgIFxuICAgICAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICB9IGVsc2Uge3JhdGlvID0gbnVtZXJhdG9yIC8gZGVub21pbmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgrcmF3ZGF0YVNsaWNlLnZhbHVlW3JWYWx1ZUluZGV4XSAqIHJhdGlvKTtcbiAgICB9XG5cblxuIFxuICAvLyB0YWtlcyBpbiBhIHByb21pc2UsIGFuZCBpdHMgaW5kZXggaW4gdGhlIGFycmF5T2ZQcm9taXNlcyAodG8gdGVsbCBpZiBpdCB3aWxsIGFjY2VzcyB0aGUgZmlyc3Qgb3Igc3Vic2VxdWVudCBzdWJkYXRhc2V0cylcbiAgLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3cml0ZXMgdGhlIGRhdGEgaW50byBjb25zdCBcImRhdGFzZXRcIiwgaW4gYXBwcm9wcmlhdGUgZm9ybWF0IFxuICBmdW5jdGlvbiBnZXREYXRhIChwcm9taXNlLCBwcm9taXNlSW5kZXgpIHtcblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmF3ZGF0YSkge1xuICAgIFxuICAgICAgbGV0IGluY3JlbWVudCA9IHByb21pc2VJbmRleCA9PT0gMCA/IDAgOiAxOyAgLy8ga2VlcHMgdHJhY2sgb2YgdGhlIGluZGV4IHdpdGhpbiBlYWNoIHN1YmRhdGFzZXRcbiAgICAgIGxldCBtYXhOdW1PZlF1ZXJpZXMgPSA1OyAvLyBtYXggbnVtIG9mIHF1ZXJpZXMgaW4gYSBzaW5nbGUgY2FsbCB1c2luZyBHb29nbGUgVHJlbmRzIEFQSVxuXG4gICAgICB3aGlsZSAoaW5jcmVtZW50IDwgbWF4TnVtT2ZRdWVyaWVzICYmIGRhdGFzZXQubGVuZ3RoIDwgcXVlcmllc0FycmF5Lmxlbmd0aCkge1xuXG4gICAgICAgIGxldCBxdWVyaWVzQXJyYXlJbmRleCA9IHByb21pc2VJbmRleCAqIChtYXhOdW1PZlF1ZXJpZXMgLSAxKSArIGluY3JlbWVudDtcblxuICAgIFxuICAgICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgICB0ZXJtOiB0ZXJtc0FycmF5W3F1ZXJpZXNBcnJheUluZGV4XSxcbiAgICAgICAgICB2YWx1ZXM6IHJhd2RhdGEubWFwKGZ1bmN0aW9uIChyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCkge1xuXG4gICAgICAgICAgICAgIGxldCBwb2ludCA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUluZGV4ID09PSAwID8gK3Jhd2RhdGFTbGljZS52YWx1ZVtpbmNyZW1lbnRdXG4gICAgICAgICAgICAgICAgICA6IGNhbGlicmF0ZShyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCwgaW5jcmVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYocmF3ZGF0YVNsaWNlLmZvcm1hdHRlZEF4aXNUaW1lKSxcblxuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICAgIFxuICAgICAgICBpbmNyZW1lbnQgKz0gMTtcbiAgXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YXNldDtcblxuICAgIH0pXG5cbiAgfSBcblxuXG4gIC8vIGVhY2ggcHJvbWlzZSB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIHRoZSBkYXRhLXdyaXRpbmcgcHJvbWlzZSBhbmQgc3RvcmVkIGluIG5ld1Byb21pc2VzQXJyYXlcbiAgY29uc3QgbmV3UHJvbWlzZXNBcnJheSA9IGFycmF5T2ZQcm9taXNlcy5tYXAoZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBnZXREYXRhKHByb21pc2UsIGluZGV4KTtcbiAgfSlcblxuICByZXR1cm4gbmV3UHJvbWlzZXNBcnJheVswXS50aGVuKGZpcnN0U3Vic2V0ID0+IHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb21pc2VzID0gbmV3UHJvbWlzZXNBcnJheS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZW1haW5pbmdQcm9taXNlcyk7XG4gIH0pXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGRhdGFzZXQpXG4gICAgXG4gICAgY2hhbmdlWVRvTW92aW5nQXZlcmFnZShkYXRhc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRBZnRlciBNb3ZpbmdBdmVyYWdlXCIsIGRhdGFzZXQpXG5cbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfSlcbiAgXG4gIFxufVxuXG5leHBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vXCJ0ZXJtcy1vbmx5XCIgYXJyYXlzXG5cbmNvbnN0ICQyMDE5ID0gW1xuICAgIFwib2sgYm9vbWVyXCIsXG4gICAgXCJ2c2NvXCIsXG4gICAgXCJzZnNcIixcbiAgICBcImZ5cFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJuZ2xcIixcbiAgICBcInNpbXBcIixcbiAgICBcIml5a3lrXCIsXG4gICAgXCJzYlwiXG4gICAgLy8gXCJhbmQgaSBvb3BcIixcbiAgICAvLyBcInNrc2tza1wiLFxuICAgIC8vIFwieWt0dlwiXG5dXG5cbmNvbnN0IG9uZUhpdCA9IFtcInNsYXR0XCIsIFwiYW50c1wiXTtcblxuXG5jb25zdCAkMjAxOCA9IFtcbiAgXCJpbmNlbFwiLFxuICBcInV3dVwiLFxuICBcIm11a2JhbmdcIixcbiAgXCJpYmZcIixcbiAgXCJibG9ja2NoYWluXCIsXG4gIFwicm5nXCIsXG4gIFwiaml0XCIsXG4gIFwianV1bGluZ1wiLFxuICBcImdla3l1bWVcIixcbiAgXCJ6YWRkeVwiLFxuICBcInd0bVwiLFxuICBcIndpZ1wiLFxuXTtcblxuY29uc3QgJDIwMTcgPSBbXG4gIFwibm9uIGJpbmFyeVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJzbm93Zmxha2VcIixcbiAgXCJwbW95c1wiLFxuICBcIm1hZ2FcIixcbiAgXCJ3YXNwXCIsXG4gIFwiYm91amllXCIsXG4gIFwidHJvbGxzXCIsXG5dO1xuXG5jb25zdCAkMjAxNiA9IFtcbiAgXCJnYXNsaWdodGluZ1wiLFxuICBcInNqd1wiLFxuICBcImJvb2xpblwiLFxuICBcIndva2VcIixcbiAgXCJzaGlsbFwiLFxuICBcInF1YXNoXCIsXG4gIFwiYnJhbmRpc2hcIixcbiAgXCJ0cmlnZ2VyZWRcIixcbiAgXCJzaG9va1wiLFxuICBcImJpZ2x5XCIsXG4gIFwiaG9sb3NleHVhbFwiLFxuICBcInZleGluZ1wiLFxuICBcImJvdWdoXCIsXG4gIFwianVqdVwiLFxuICBcIndhdnlcIixcbl07XG5cbmNvbnN0ICQyMDE1ID0gW1xuICBcInNpbW1lclwiLFxuICBcIm5ldGZsaXggYW5kIGNoaWxsXCIsXG4gIFwiY2hhcG9cIixcbiAgXCJzdG9vcFwiLFxuICBcImJsYXNlXCIsXG4gIFwicGxlYlwiLFxuICBcImxvd2tleVwiLFxuICBcInRvbWVcIixcbiAgXCJ3YXBcIixcbiAgXCJzaHVkZGVyXCIsXG4gIFwiYnVybnRcIixcbiAgXCJ2YXBlXCIsXG5dO1xuXG4vLyB0YWtlcyBpbiBhIFwidGVybXMtb25seVwiIGFycmF5O1xuLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgYWN0dWFsIHNlYXJjaCBxdWVyaWVzIHRvIGJlIG1hZGUgdXNpbmcgdGhlIEdvb2dsZSBUcmVuZHMgQVBJXG5mdW5jdGlvbiBzZWFyY2hUZXJtc0dlbmVyYXRvcihhcnJheSkge1xuICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIHNlYXJjaFRlcm1zLnB1c2goYHdoYXQgZG9lcyAke3Rlcm19IG1lYW5gKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRlcm1zKTtcbiAgICByZXR1cm4gc2VhcmNoVGVybXM7XG59O1xuXG4vLyBJbnB1dCBhcmcgXCJxdWVyaWVzQXJyYXlcIiBpcyB0aGUgYXJyYXkgb2Ygc2VhcmNoIHF1ZXJpZXM7IFxuLy8gXCJtYXhOdW1PZlF1ZXJpZXNcIiBpcyB0aGUgbWF4IG51bSBvZiBxdWVyaWVzIGFsbG93ZWQgb24gR29vZ2xlIFRyZW5kcyBBUEk7XG4vLyBcImpvaW5JbmRleFwiIGlzIHRoZSBpbmRleCBvZiB0aGUgY29tbW9uIHF1ZXJ5IG9uIHdoaWNoIHdlIGNhbGlicmF0ZSBlYWNoIHN1YmRhdGFzZXQuXG4vLyBGdW5jdGlvbiBzcGxpdHRlciByZXR1cm5zIGFuIGFycmF5IG9mIHF1ZXJ5U3Vic2V0cywgYW5kIGEgYSB0ZXJtcy1vbmx5IGFycmF5IHJlYXJyYW5nZWQgd2l0aCB0aGUgY29tbW9uIHRlcm0gYXQgaW5kZXggMC5cbi8vIEVhY2ggcXVlcnlTdWJzZXQgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29tbW9uIHF1ZXJ5IGFsb25nIHdpdGggb3RoZXIgcXVlcmllczsgc3ViYXJyYXkubGVuZ3RoID0gbWF4TnVtT2ZRdWVyaWVzLlxuLy8gTGF0ZXIsIGVhY2ggcXVlcnlTdWJzZXQgaXMgdXNlZCB0byBtYWtlIDEgQVBJIGNhbGwgdG8gb2J0YWluIGEgZGF0YVN1YnNldC5cbmZ1bmN0aW9uIHNwbGl0dGVyKHF1ZXJpZXNBcnJheSwgbWF4TnVtT2ZRdWVyaWVzLCBqb2luSW5kZXgsIHRlcm1zQXJyYXkpIHtcblxuICAvLyByZW1vdmUgdGhlIGNvbW1vbiBxdWVyeSBmcm9tIHRoZSBxdWVyaWVzQXJyYXkgb24gd2hpY2ggd2UnbGwgaXRlcmF0ZSBvdmVyIHRvIGdldCB0aGUgc3Vic2V0cyBvZiBxdWVyaWVzLFxuICAvLyBhbmQgc2F2ZSB0aGUgY29tbW9uIHF1ZXJ5IHRvIGNvbnN0IGpvaW5UZXJtXG4gIGNvbnN0IGpvaW5UZXJtID0gcXVlcmllc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGludGVydmFsID0gbWF4TnVtT2ZRdWVyaWVzIC0gMTtcblxuICBsZXQgcXVlcnlTdWJzZXRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyaWVzQXJyYXkubGVuZ3RoOyApIHtcbiAgICAvLyBlYWNoIHNldCBvZiBxdWVyaWVzIGV4Y2x1ZGluZyBjb21tb24gcXVlcnlcbiAgICBjb25zdCBncm91cCA9IHF1ZXJpZXNBcnJheS5zbGljZShpLCBpICsgaW50ZXJ2YWwpO1xuXG4gICAgLy8gZWFjaCBzdWJhcnJheSBoYXMgdGhlIGNvbW1vbiBxdWVyeSBhcyB0aGUgZmlyc3QgZWxlbWVudCwgZm9sbG93ZWQgYnkgb3RoZXIgcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJ5U3Vic2V0ID0gam9pblRlcm0uY29uY2F0KGdyb3VwKTtcblxuICAgIHF1ZXJ5U3Vic2V0cy5wdXNoKHF1ZXJ5U3Vic2V0KTtcblxuICAgIC8vIGp1bXAgdG8gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheSB3aGljaCBoYXNuJ3QgeWV0IGJlZW4gYWRkZWQgdG8gYSBxdWVyeVN1YnNldFxuICAgIGkgKz0gaW50ZXJ2YWw7XG4gIH1cblxuICBxdWVyaWVzQXJyYXkgPSBqb2luVGVybS5jb25jYXQocXVlcmllc0FycmF5KTtcbiAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSkuY29uY2F0KHRlcm1zQXJyYXkpXG4gIFxuXG4gIHJldHVybiBbcXVlcnlTdWJzZXRzLCBxdWVyaWVzQXJyYXksIHRlcm1zQXJyYXldO1xufVxuXG5cbmNvbnN0ICQyMDE5X3NlYXJjaFRlcm1zID0gc2VhcmNoVGVybXNHZW5lcmF0b3IoJDIwMTkpO1xuY29uc3QgJDIwMTlfc3BsaXRRdWVyaWVzID0gc3BsaXR0ZXIoJDIwMTlfc2VhcmNoVGVybXMsIDUsICQyMDE5X3NlYXJjaFRlcm1zLmxlbmd0aCAvIDIsICQyMDE5KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7ICQyMDE5X3NwbGl0UXVlcmllcyB9OyIsImltcG9ydCB7IGFkZExhYmVsQ29vcmRzIH0gZnJvbSBcIi4vbGFiZWxDb29yZHMuanNcIlxuXG4vLyBjcmVhdGluZyByZXVzYWJsZSBjaGFydFxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJ0VGVtcGxhdGUoKSB7XG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgc3ZnXG4gIGxldCB3aWR0aCA9IDgwMDtcbiAgbGV0IGhlaWdodCA9IDgwMDtcbiAgbGV0IGFkaiA9IDMwO1xuXG5cbiAgZnVuY3Rpb24gZHJhdyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAvLyBTQ0FMRVM6IHgtYXhpc1xuICAgICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDMubWluKGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIGNvbnNvbGUubG9nKFwic3RhcnREYXRlXCIsIHN0YXJ0RGF0ZSlcblxuICAgICAgY29uc3QgZW5kRGF0ZSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4gZDMubWF4KGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgICAgLnNjYWxlVGltZSgpXG4gICAgICAgIC5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuXG4gICAgICAvLyBTQ0FMRVM6IHktYXhpc1xuICAgICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAgICAgY29uc3QgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAocykge1xuICAgICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2LnBvaW50O1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIG9mIHktYXhpc1xuICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIG1heFldKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcbiAgICBcblxuICAgIC8vIGFkZCBsYWJlbCBjb29yZGluYXRlcyB0byBkYXRhc2V0J3MgdGVybVNsaWNlc1xuICAgICAgYWRkTGFiZWxDb29yZHMoZGF0YSwgMTIsIHhTY2FsZSwgeVNjYWxlKTtcbiAgICAgIFxuXG4gICAgLy8gVkFMVUVTOiBhZGQgc3BsaW5lZCB2YWx1ZXNcbiAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlLCBpKSB7XG4gICAgICAgIGNvbnN0IGRhdGVzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB4U2NhbGUodi5kYXRlKTsgLy8gZ2V0IGFycmF5IG9mIGRhdGVzIG1hcHBlZCBvbnRvIHRoZSBicm93c2VyXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IHBvaW50cyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4geVNjYWxlKHYucG9pbnQpO1xuICAgICAgICB9KTtcblxuICAgIFxuICAgICAgICBjb25zdCBzcGxpbmVEYXRlID0gZDMuaW50ZXJwb2xhdGVCYXNpcyhkYXRlcyk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBzcGxpbmVQb2ludCA9IGQzLmludGVycG9sYXRlQmFzaXMocG9pbnRzKTtcblxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwicXVhbnREYXRlXCIsIGQzLnF1YW50aXplKHNwbGluZURhdGUsIDExMyoyKSlcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInF1YW50UG9pbnRcIiwgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMykpO1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwicXVhbnRQb2ludG1heFwiLCBkMy5taW4oZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMCkpKTtcblxuICAgICAgICBjb25zdCBvcmlnaW5hbE51bU9mUG9pbnRzID0gdGVybVNsaWNlLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgIGNvbnN0IGRlZ3JlZSA9IDIxICogb3JpZ2luYWxOdW1PZlBvaW50cztcblxuICAgICAgICB0ZXJtU2xpY2Uuc3BsaW5lZCA9IGQzLnppcChcbiAgICAgICAgICAgIGQzLnF1YW50aXplKHNwbGluZURhdGUsIGRlZ3JlZSksXG4gICAgICAgICAgICBkMy5xdWFudGl6ZShzcGxpbmVQb2ludCwgZGVncmVlKVxuICAgICAgICApO1xuXG4gICAgfSk7XG5cbiAgICAgIC8vIEFYRVNcbiAgICAgIGNvbnN0IHhBeGlzID0gZDNcbiAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAuc2NhbGUoeFNjYWxlKVxuICAgICAgICAudGlja3MoZDMudGltZU1vbnRoLmV2ZXJ5KDEyKSlcbiAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVZXCIpKVxuICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1ZhbHVlcyhbXSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuXG4gICAgICAvLyBBWEVTOiBncmlkbGluZXNcbiAgICAgIGNvbnN0IHlBeGlzR3JpZCA9IGQzXG4gICAgICAgIC5heGlzTGVmdCgpXG4gICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgIC50aWNrU2l6ZSgtd2lkdGgpXG4gICAgICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gICAgICAgIC50aWNrVmFsdWVzKFttYXhZLyAzLCAyICogbWF4WSAvIDMsIG1heFldKVxuICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgLy8gYXBwZW5kIHN2Z1xuICAgICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgICAgLnNlbGVjdCh0aGlzKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgIFwidmlld0JveFwiLFxuICAgICAgICAgIGAtJHthZGogKiAyfSAtJHthZGogKiAzfSAke3dpZHRoICsgYWRqICogMTB9ICR7aGVpZ2h0ICsgYWRqICogMn1gXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcblxuICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgIHN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAgIC5jYWxsKHhBeGlzKTsgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKS50ZXh0LmFwcGVuZChcIkphblwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiLCBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpKVxuXG4gICAgICAvLyBkcmF3IHktYXhpc1xuICAgICAgc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwieS1heGlzLWdyaWRcIikuY2FsbCh5QXhpc0dyaWQpO1xuICAgICAgLy8gLmFwcGVuZChcInRleHRcIilcbiAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAvLyAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAvLyAuYXR0cihcInlcIiwgLTQwKVxuICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgICAgIC8vIGRyYXcgbGluZXNcbiAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gICByZXR1cm4geFNjYWxlKGQuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZFswXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB5U2NhbGUoZC5wb2ludCk7XG4gICAgICAgICAgICByZXR1cm4gZFsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsaW5lIGxpbmUtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgIHJldHVybiBsaW5lKGQuc3BsaW5lZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGDih70gICAgICAgJHtkLnRlcm19YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcbiAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGhvdmVyTGluZXMgPSBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBsaW5lKGQuc3BsaW5lZCl9KVxuXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzZWxlY3RBbGxcIiwgZDMuc2VsZWN0QWxsKFwiLmxhYmVsXCIpKVxuICAgIC8vIGNvbnN0IHQgPSBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgICAgICAgICAvLyAuZGVsYXkoXCIxMDBcIilcbiAgICAgICAgICAgICAgICAvLyAuZHVyYXRpb24oKVxuLy8gY29uc29sZS5sb2coXCJjb21lIG9uXCIsIHN2Zy5zZWxlY3RBbGwoXCIuaG92ZXItbGluZVwiKS5tZXJnZShzdmcuc2VsZWN0QWxsKFwiLmxpbmVcIikpKVxuICAgIHN2Z1xuICAgICAgLnNlbGVjdEFsbChcIi5ob3Zlci1saW5lXCIpXG4gICAgICAubWVyZ2Uoc3ZnLnNlbGVjdEFsbChcIi5sYWJlbFwiKSlcbiAgICAgIC5vbihcIm1vdXNlb3ZlclwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDMuc2VsZWN0QWxsKGAubGluZS0ke2l9LCAubGFiZWwtJHtpfWApLnJhaXNlKCk7XG4gICAgICAgIHNlbGVjdGVkLnRyYW5zaXRpb24oKS5kZWxheShcIjBcIikuZHVyYXRpb24oXCIxMFwiKS5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gICAgICB9KVxuICAgICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkMy5zZWxlY3RBbGwoYC5saW5lLSR7aX0sIC5sYWJlbC0ke2l9YCk7XG4gICAgICAgIHNlbGVjdGVkLnRyYW5zaXRpb24oKS5zdHlsZShcIm9wYWNpdHlcIiwgMC4yKTtcbiAgICAgIH0pO1xuICAgIH0pO1xuXG4gIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9yZWZlcmVuY2VzL3pfZXhhbXBsZS5qc1wiO1xuaW1wb3J0IHNpbXBsZV9leGFtcGxlIGZyb20gXCIuL3JlZmVyZW5jZXMvel9zaW1wbGUuanNcIjtcblxuLy8gZGF0YVxuaW1wb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0gZnJvbSBcIi4vZGF0YS9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vZGF0YS90ZXJtcy5qc1wiO1xuXG4vLyBkMyBjaGFydFxuaW1wb3J0IHsgY2hhcnRUZW1wbGF0ZSB9IGZyb20gXCIuL2RyYXdDaGFydC5qc1wiO1xuXG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbi8vIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuLy8gLy8gY29uc3QgaWxsdXN0cmF0aW9uID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbi8vICAgICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG5cbi8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuXG4vLyAvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgXG4gIC8vLy8gY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgY29uc3QgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcyA9IHJldHJpZXZlcigkMjAxOV9zcGxpdFF1ZXJpZXNbMF0pO1xuICBjb25zb2xlLmxvZyhcInRlc3RfcmV0cmlldmVyUHJvbWlzZXNcIiwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLy8gbGV0IHRlc3QgPSBjcmVhdGVEYXRhc2V0KHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cbiAgY29uc29sZS5sb2coXCIkMjAxOV9zcGxpdHF1ZXJpZXNcIiwgJDIwMTlfc3BsaXRRdWVyaWVzKVxuICBcblxuICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwkMjAxOV9zcGxpdFF1ZXJpZXNbMl0sIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gIC50aGVuKChkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3b29ob29cIiwgZClcbiAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRUZW1wbGF0ZSgpKVxuICB9KVxuIFxuXG4gIC8vIHNpbXBsZV9leGFtcGxlKCk7XG4gIC8vIHRlc3RfZnVuY3Rpb24oKTtcblxufSk7XG5cblxuICBcbiAgXG4vLyAgIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtpbnRlcmFjdGl2ZV1QT0lOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyAgIC8vIGxpbmVzLnNlbGVjdEFsbChcInBvaW50c1wiKVxuLy8gICAvLyAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlcyB9KVxuLy8gICAvLyAgIC5lbnRlcigpXG4vLyAgIC8vICAgLmFwcGVuZChcImNpcmNsZVwiKVxuLy8gICAvLyAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgfSlcbi8vICAgLy8gICAuYXR0cihcInJcIiwgMSlcbi8vICAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwicG9pbnRcIilcbi8vICAgLy8gICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpOyIsIi8vIGZ1bmN0aW9uIHRvIHNlcGFyYXRlIG91dCBsYWJlbHMgdGhhdCBvdmVybGFwXG5mdW5jdGlvbiBhZGRMYWJlbENvb3JkcyhkYXRhLCBzcGFjZSwgeFNjYWxlLCB5U2NhbGUpIHtcbiAgbGV0IG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuXG4gIGxldCB5TGFiZWxWYWx1ZXMgPSBbXTtcbiAgbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gW107XG5cbiAgLy8gbGV0IHlMYWJlbFZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcbiAgLy8gbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAvLyAgIHJldHVybiBkO1xuICAvLyB9KVxuXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgIGxldCBsYXN0SW5kZXggPSBzLnZhbHVlcy5sZW5ndGggLSAxO1xuXG4gICAgcy5sYWJlbFggPSB4U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICBzLmxhYmVsWSA9IHlTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcblxuICAgIHlMYWJlbFZhbHVlcy5wdXNoKHMubGFiZWxZKTtcbiAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbC5wdXNoKHMubGFiZWxZKTtcbiAgfSk7XG5cbiAgd2hpbGUgKCFub0NvbGxpc2lvbnMpIHtcbiAgICBub0NvbGxpc2lvbnMgPSB0cnVlO1xuXG4gICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYxLCBpKSA9PiB7XG4gICAgICB5TGFiZWxWYWx1ZXMuZm9yRWFjaCgodjIsIGopID0+IHtcbiAgICAgICAgLy8gbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBsZXQgeURpZmYgPSBNYXRoLmFicyh5TGFiZWxWYWx1ZXNbal0gLSB5TGFiZWxWYWx1ZXNbaV0pO1xuICAgICAgICBsZXQgYWRkRGlmZiA9IHNwYWNlIC0geURpZmY7XG5cbiAgICAgICAgLy8gbGV0IG1vdmluZ1kgPSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSA+PSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSA/IGogOiBpO1xuXG4gICAgICAgIGlmIChpICE9PSBqICYmIHlEaWZmIDwgc3BhY2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImogaGl0XCIsIGksIGopO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieURpZmZcIix5RGlmZilcbiAgICAgICAgICBsZXQgZ3JlYXRlckluZGV4ID1cbiAgICAgICAgICAgIHlMYWJlbFZhbHVlc09yaWdpbmFsW2pdIC0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPj0gMCA/IGogOiBpO1xuXG4gICAgICAgICAgeUxhYmVsVmFsdWVzW2dyZWF0ZXJJbmRleF0gKz0gYWRkRGlmZjtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZWRcIiwgeUxhYmVsVmFsdWVzKVxuICAgICAgICAgIG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHlMYWJlbFZhbHVlcyk7XG5cbiAgLy8gcmV0dXJuIHlMYWJlbFZhbHVlcztcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcbiAgICBzLmxhYmVsWSA9IHlMYWJlbFZhbHVlc1tpXTtcbiAgfSk7XG59XG5cblxuLy8gYWRkTGFiZWxDb29yZHMoWzAsIDMsIDYsIDksIDEyLCAxNV0pXG4vLyBhZGRMYWJlbENvb3JkcyhbNCwgMywgMSwgNTUsIDIsIDFdKVxuLy8gWzEzLCAxMCwxLCA1NSwgNywgNF1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGFkZExhYmVsQ29vcmRzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==