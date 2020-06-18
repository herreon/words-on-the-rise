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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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
// Input arg "termsArray" is a "terms-only" array (e.g. $2019)
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


function createDataset(termsArray, arrayOfPromises) {
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

      while (increment < maxNumOfQueries && dataset.length < termsArray.length) {
        var termsArrayIndex = promiseIndex * (maxNumOfQueries - 1) + increment;
        var slice = {
          term: termsArray[termsArrayIndex],
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
    console.log("dataset", dataset);
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

; // Input arg "array" is the array of search queries; 
// "maxNumOfQueries" is the max num of queries allowed on Google Trends API;
// "joinIndex" is the index of the common query on which we calibrate each subdataset.
// Function splitter returns an array of querySubsets, and a a terms-only array rearranged with the common term at index 0.
// Each querySubset is an array that contains the common query along with other queries; subarray.length = maxNumOfQueries.
// Later, each querySubset is used to make 1 API call to obtain a dataSubset.

function splitter(termsArray, maxNumOfQueries, joinIndex) {
  // remove the common query from the termsArray on which we'll iterate over to get the subsets of queries,
  // and save the common query to const joinTerm
  var joinTerm = termsArray.splice(joinIndex, 1);
  var interval = maxNumOfQueries - 1;
  var querySubsets = [];

  for (var i = 0; i < termsArray.length;) {
    // each set of queries excluding common query
    var group = termsArray.slice(i, i + interval); // each subarray has the common query as the first element, followed by other queries

    var querySubset = joinTerm.concat(group);
    querySubsets.push(querySubset); // jump to the next element in array which hasn't yet been added to a querySubset

    i += interval;
  }

  termsArray = joinTerm.concat(termsArray);
  return [querySubsets, termsArray];
}

var $2019_searchTerms = searchTermsGenerator($2019);
var $2019_splitQueries = splitter($2019_searchTerms, 5, $2019_searchTerms.length / 2);
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

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, 10, xScale, yScale); // VALUES: add splined values

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
        return "line-".concat(i);
      }).attr("d", function (d) {
        // return line(d.values);
        return line(d.splined);
      }); // add labels to each line

      lines.append("text").attr("class", function (d, i) {
        return "label label-".concat(i);
      }).text(function (d) {
        return "\u21FD       ".concat(d.term);
      }).attr("x", 5).attr("transform", function (d, i) {
        // const lastIndex = d.values.length - 1;
        // const labelX = xScale(d.values[lastIndex].date);
        // const labelY = yScale(d.values[lastIndex].point);
        //   return `translate(${labelX}, ${labelY})`;
        return "translate(".concat(d.labelX, ", ").concat(d.labelY, ")");
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
  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], test_retrieverPromises).then(function (d) {
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
          console.log("j hit", i, j); // console.log("yDiff",yDiff)

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwidGVybXNBcnJheUluZGV4IiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwibmV3UHJvbWlzZXNBcnJheSIsImZpcnN0U3Vic2V0IiwicmVtYWluaW5nUHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiY29uc29sZSIsImxvZyIsIiQyMDE5Iiwib25lSGl0IiwiJDIwMTgiLCIkMjAxNyIsIiQyMDE2IiwiJDIwMTUiLCJzZWFyY2hUZXJtc0dlbmVyYXRvciIsImFycmF5Iiwic2VhcmNoVGVybXMiLCJzcGxpdHRlciIsImpvaW5JbmRleCIsImpvaW5UZXJtIiwic3BsaWNlIiwiZ3JvdXAiLCJxdWVyeVN1YnNldCIsImNvbmNhdCIsIiQyMDE5X3NlYXJjaFRlcm1zIiwiJDIwMTlfc3BsaXRRdWVyaWVzIiwibW9kdWxlIiwiZXhwb3J0cyIsImNoYXJ0VGVtcGxhdGUiLCJ3aWR0aCIsImhlaWdodCIsImFkaiIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwiZGF0YSIsInN0YXJ0RGF0ZSIsIm1pbiIsImQiLCJlbmREYXRlIiwibWF4IiwieFNjYWxlIiwic2NhbGVUaW1lIiwiZG9tYWluIiwicmFuZ2UiLCJtYXhZIiwicyIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2VSb3VuZCIsImFkZExhYmVsQ29vcmRzIiwiZGF0ZXMiLCJwb2ludHMiLCJzcGxpbmVEYXRlIiwiaW50ZXJwb2xhdGVCYXNpcyIsInNwbGluZVBvaW50Iiwib3JpZ2luYWxOdW1PZlBvaW50cyIsImRlZ3JlZSIsInNwbGluZWQiLCJ6aXAiLCJxdWFudGl6ZSIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInNjYWxlIiwidGlja3MiLCJ0aW1lTW9udGgiLCJldmVyeSIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0IiwidGlja1NpemVPdXRlciIsInlBeGlzIiwiYXhpc0xlZnQiLCJ0aWNrVmFsdWVzIiwieUF4aXNHcmlkIiwidGlja1NpemUiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwiY2FsbCIsImxpbmUiLCJ4IiwieSIsImxpbmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJ0ZXh0IiwibGFiZWxYIiwibGFiZWxZIiwiYXJndW1lbnRzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwidGVzdF9yZXRyaWV2ZXJQcm9taXNlcyIsImRhdHVtIiwic3BhY2UiLCJub0NvbGxpc2lvbnMiLCJ5TGFiZWxWYWx1ZXMiLCJ5TGFiZWxWYWx1ZXNPcmlnaW5hbCIsImxhc3RJbmRleCIsInYxIiwidjIiLCJqIiwieURpZmYiLCJhYnMiLCJhZGREaWZmIiwiZ3JlYXRlckluZGV4IiwidGVzdF9mdW5jdGlvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJzdHlsZSIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3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UDtBQUNEO0FBQ0YsR0FQRDs7QUFTQUEsSUFBRSxDQUFDakcsTUFBSCxHQUFZLFVBQVMzQyxLQUFULEVBQWdCO0FBQzFCLFFBQUksQ0FBQ3NHLFNBQVMsQ0FBQzdGLE1BQWYsRUFBdUI7QUFDckIsYUFBT2tDLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsWUFBTSxHQUFHM0MsS0FBVDtBQUNBLGFBQU80SSxFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQU9BLEVBQVA7QUFDSDs7QUFHYyxTQUFTSSxjQUFULEdBQTJCO0FBRXRDN0gsU0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFGc0MsQ0FJdEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUY7QUFHRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuI3RpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogIzA2MmY4NztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4jdGl0bGUgcCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNpbnRyby1kaXZpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZiZmY7XFxuICBoZWlnaHQ6IDIwdmg7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQzsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwOyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi8qIGludGVyYWN0aXZlIGVsZW1lbnRzICovXFxuLyogVE9PTFRJUCAqL1xcbi50b29sdGlwIHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogYXJpYWw7XFxuICBmb250LXNpemU6IDIwcHg7IH1cXG5cXG4vKiBQT0lOVFMgKi9cXG4ucG9pbnQge1xcbiAgc3Ryb2tlOiBub25lO1xcbiAgZmlsbDogIzljOWM5YzsgfVxcblxcbi8qIGZvciBleHBlcmltZW50aW5nIC0gY29sb3JpbmcgZWxlbWVudHMgKi9cXG4vKiBzdmcge1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XFxufSAqL1xcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi90ZXJtcy5qc1wiO1xuXG4vLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZTsgc3RvcmUgZGF0YSBpbiB2YXJpYWJsZSBkYXRhQVxuY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG5cbi8vIFxuZnVuY3Rpb24gY2hhbmdlWVRvTW92aW5nQXZlcmFnZSAoZGF0YXNldCkge1xuICAgIC8vIGludGVydmFsIGlzIHRoZSBudW0gd2Vla3Mgb3ZlciB3aGljaCB0aGUgbW92aW5nQXZlcmFnZSBpcyBjYWxjdWxhdGVkXG4gICAgY29uc3QgaW50ZXJ2YWwgPSA5O1xuXG4gICAgZGF0YXNldC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtU2xpY2UpIHtcbiAgICAgICAgY29uc3QgYXZlcmFnZUNoZWNrZXIgPSBbXTtcbiAgICAgIGNvbnN0IGF2ZXJhZ2VzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2XCIsIHYpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImQudmFsdWVzXCIsIGQudmFsdWVzKVxuXG4gICAgICAgIGlmIChpIDwgaW50ZXJ2YWwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW92aW5nVG90YWwgPSAwO1xuXG4gICAgICAgIHRlcm1TbGljZS52YWx1ZXMuc2xpY2UoaSAtIGludGVydmFsLCBpKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgbW92aW5nVG90YWwgKz0gdi5wb2ludDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW92aW5nQXZlcmFnZSA9IE1hdGgucm91bmQobW92aW5nVG90YWwgLyBpbnRlcnZhbCk7XG5cbiAgICAgICAgYXZlcmFnZUNoZWNrZXIucHVzaChbdi5wb2ludCwgbW92aW5nQXZlcmFnZV0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdUb3RhbFwiLCBtb3ZpbmdUb3RhbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nQXZlcmFnZVwiLCBtb3ZpbmdBdmVyYWdlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IHYuZGF0ZSxcbiAgICAgICAgICBwb2ludDogbW92aW5nQXZlcmFnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJhdmVyYWdlc1wiLGF2ZXJhZ2VDaGVja2VyKVxuICAgICAgdGVybVNsaWNlLnZhbHVlcyA9IGF2ZXJhZ2VzLnNsaWNlKGludGVydmFsKTtcbiAgICB9KTtcbn1cblxuLy8gZnVuY3Rpb24gcmV0cmlldmVyIHN0b3JlcyBwcm9taXNlcyB0aGF0IGZldGNoIGRhdGEgZnJvbSB0aGUgZmlsZSB0aGF0IFxuLy8gY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IGluIHRoZSBhcnJheSBxdWVyeVN1YnNldHMuXG4vLyBJbnB1dCBhcmcgXCJ0ZXJtc0FycmF5XCIgaXMgYSBcInRlcm1zLW9ubHlcIiBhcnJheSAoZS5nLiAkMjAxOSlcbi8vIElucHV0IGFycmF5IFwicXVlcnlTdWJzZXRzXCIgY29udGFpbnMgc3Vic2V0cyBvZiBxdWVyaWVzLCByZXR1cm5lZCBmcm9tIGZ1bmN0aW9uIHNwbGl0dGVyIGluIHRlcm1zLmpzXG5mdW5jdGlvbiByZXRyaWV2ZXIgKHF1ZXJ5U3Vic2V0cykge1xuICBjb25zdCByZXRyaWV2ZXJQcm9taXNlcyA9IFtdO1xuXG4gIHF1ZXJ5U3Vic2V0cy5mb3JFYWNoKChzcGxpdFF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgIC8vIGxldCBkYXRhc2V0TmFtZSA9IGBkYXRhc2V0XyR7aW5kZXh9YDtcbiAgICByZXRyaWV2ZXJQcm9taXNlcy5wdXNoKGQzLmpzb24oYC4vZGlzdC9hc3NldHMvZGF0YS8yMDE5XyR7aW5kZXh9Lmpzb25gKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXRyaWV2ZXJQcm9taXNlcztcbn1cblxuXG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGNyZWF0ZXMgdGhlIGRhdGFzZXQgZm9yIHRoZSBkMyBjaGFydCBkcmF3aW5nIGZ1bmN0aW9uIHRvIHVzZVxuLy8gdGFrZXMgaW4gaW5wdXQgYXJncyB0aGF0IHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24gXCJyZXRyaWV2ZXJcIlxuZnVuY3Rpb24gY3JlYXRlRGF0YXNldCAodGVybXNBcnJheSwgYXJyYXlPZlByb21pc2VzKSB7XG4gICAgXG4gICAgLy8gdGhpcyB3aWxsIHN0b3JlIHRoZSBkYXRhc2V0IGZvciBkMyB0byB1c2VcbiAgICBjb25zdCBkYXRhc2V0ID0gW107XG5cbiAgICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gICAgLy8gbGV0IG1haW5JbmRleCA9IDA7XG5cbiAgICAvLyByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSByZWxhdGl2ZSB2YWx1ZSBvZiBlYWNoIHRlcm0gaW4gYSBxdWVyeVN1YnNldCwgXG4gICAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgICBmdW5jdGlvbiBjYWxpYnJhdGUocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgsIHJWYWx1ZUluZGV4KSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgICBsZXQgZGVub21pbmF0b3IgPSByYXdkYXRhU2xpY2UudmFsdWVbMF07IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gY3VycmVudCBwcm9taXNlXG4gICAgICAgIGxldCByYXRpbztcbiAgICAgICAgXG4gICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCtyYXdkYXRhU2xpY2UudmFsdWVbclZhbHVlSW5kZXhdICogcmF0aW8pO1xuICAgIH1cblxuXG4gXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgYXJyYXlPZlByb21pc2VzICh0byB0ZWxsIGlmIGl0IHdpbGwgYWNjZXNzIHRoZSBmaXJzdCBvciBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzKVxuICAvLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdyaXRlcyB0aGUgZGF0YSBpbnRvIGNvbnN0IFwiZGF0YXNldFwiLCBpbiBhcHByb3ByaWF0ZSBmb3JtYXQgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihyYXdkYXRhKSB7XG4gICAgXG4gICAgICBsZXQgaW5jcmVtZW50ID0gcHJvbWlzZUluZGV4ID09PSAwID8gMCA6IDE7ICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggd2l0aGluIGVhY2ggc3ViZGF0YXNldFxuICAgICAgbGV0IG1heE51bU9mUXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgcXVlcmllcyBpbiBhIHNpbmdsZSBjYWxsIHVzaW5nIEdvb2dsZSBUcmVuZHMgQVBJXG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCBtYXhOdW1PZlF1ZXJpZXMgJiYgZGF0YXNldC5sZW5ndGggPCB0ZXJtc0FycmF5Lmxlbmd0aCkge1xuXG4gICAgICAgIGxldCB0ZXJtc0FycmF5SW5kZXggPSBwcm9taXNlSW5kZXggKiAobWF4TnVtT2ZRdWVyaWVzIC0gMSkgKyBpbmNyZW1lbnQ7XG5cbiAgICBcbiAgICAgICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICAgICAgdGVybTogdGVybXNBcnJheVt0ZXJtc0FycmF5SW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogcmF3ZGF0YS5tYXAoZnVuY3Rpb24gKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4KSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBvaW50ID1cbiAgICAgICAgICAgICAgICBwcm9taXNlSW5kZXggPT09IDAgPyArcmF3ZGF0YVNsaWNlLnZhbHVlW2luY3JlbWVudF1cbiAgICAgICAgICAgICAgICAgIDogY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCBpbmNyZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihyYXdkYXRhU2xpY2UuZm9ybWF0dGVkQXhpc1RpbWUpLFxuXG4gICAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuICB9IFxuXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gYXJyYXlPZlByb21pc2VzLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdldERhdGEocHJvbWlzZSwgaW5kZXgpO1xuICB9KVxuXG4gIHJldHVybiBuZXdQcm9taXNlc0FycmF5WzBdLnRoZW4oZmlyc3RTdWJzZXQgPT4ge1xuICAgICAgY29uc3QgcmVtYWluaW5nUHJvbWlzZXMgPSBuZXdQcm9taXNlc0FycmF5LnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlbWFpbmluZ1Byb21pc2VzKTtcbiAgfSlcbiAgLnRoZW4ocmVzID0+IHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFzZXRcIiwgZGF0YXNldClcbiAgICBcbiAgICBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlKGRhdGFzZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldEFmdGVyIE1vdmluZ0F2ZXJhZ2VcIiwgZGF0YXNldClcblxuICAgIHJldHVybiBkYXRhc2V0O1xuICB9KVxuICBcbiAgXG59XG5cbmV4cG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IiwiLy9cInRlcm1zLW9ubHlcIiBhcnJheXNcblxuY29uc3QgJDIwMTkgPSBbXG4gICAgXCJvayBib29tZXJcIixcbiAgICBcInZzY29cIixcbiAgICBcInNmc1wiLFxuICAgIFwiZnlwXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwiaXlreWtcIixcbiAgICBcInNiXCJcbiAgICAvLyBcImFuZCBpIG9vcFwiLFxuICAgIC8vIFwic2tza3NrXCIsXG4gICAgLy8gXCJ5a3R2XCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmNvbnN0ICQyMDE4ID0gW1xuICBcImluY2VsXCIsXG4gIFwidXd1XCIsXG4gIFwibXVrYmFuZ1wiLFxuICBcImliZlwiLFxuICBcImJsb2NrY2hhaW5cIixcbiAgXCJybmdcIixcbiAgXCJqaXRcIixcbiAgXCJqdXVsaW5nXCIsXG4gIFwiZ2VreXVtZVwiLFxuICBcInphZGR5XCIsXG4gIFwid3RtXCIsXG4gIFwid2lnXCIsXG5dO1xuXG5jb25zdCAkMjAxNyA9IFtcbiAgXCJub24gYmluYXJ5XCIsXG4gIFwiYml0Y29pblwiLFxuICBcInNub3dmbGFrZVwiLFxuICBcInBtb3lzXCIsXG4gIFwibWFnYVwiLFxuICBcIndhc3BcIixcbiAgXCJib3VqaWVcIixcbiAgXCJ0cm9sbHNcIixcbl07XG5cbmNvbnN0ICQyMDE2ID0gW1xuICBcImdhc2xpZ2h0aW5nXCIsXG4gIFwic2p3XCIsXG4gIFwiYm9vbGluXCIsXG4gIFwid29rZVwiLFxuICBcInNoaWxsXCIsXG4gIFwicXVhc2hcIixcbiAgXCJicmFuZGlzaFwiLFxuICBcInRyaWdnZXJlZFwiLFxuICBcInNob29rXCIsXG4gIFwiYmlnbHlcIixcbiAgXCJob2xvc2V4dWFsXCIsXG4gIFwidmV4aW5nXCIsXG4gIFwiYm91Z2hcIixcbiAgXCJqdWp1XCIsXG4gIFwid2F2eVwiLFxuXTtcblxuY29uc3QgJDIwMTUgPSBbXG4gIFwic2ltbWVyXCIsXG4gIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgXCJjaGFwb1wiLFxuICBcInN0b29wXCIsXG4gIFwiYmxhc2VcIixcbiAgXCJwbGViXCIsXG4gIFwibG93a2V5XCIsXG4gIFwidG9tZVwiLFxuICBcIndhcFwiLFxuICBcInNodWRkZXJcIixcbiAgXCJidXJudFwiLFxuICBcInZhcGVcIixcbl07XG5cbi8vIHRha2VzIGluIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXk7XG4vLyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBhY3R1YWwgc2VhcmNoIHF1ZXJpZXMgdG8gYmUgbWFkZSB1c2luZyB0aGUgR29vZ2xlIFRyZW5kcyBBUElcbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cbi8vIElucHV0IGFyZyBcImFycmF5XCIgaXMgdGhlIGFycmF5IG9mIHNlYXJjaCBxdWVyaWVzOyBcbi8vIFwibWF4TnVtT2ZRdWVyaWVzXCIgaXMgdGhlIG1heCBudW0gb2YgcXVlcmllcyBhbGxvd2VkIG9uIEdvb2dsZSBUcmVuZHMgQVBJO1xuLy8gXCJqb2luSW5kZXhcIiBpcyB0aGUgaW5kZXggb2YgdGhlIGNvbW1vbiBxdWVyeSBvbiB3aGljaCB3ZSBjYWxpYnJhdGUgZWFjaCBzdWJkYXRhc2V0LlxuLy8gRnVuY3Rpb24gc3BsaXR0ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBxdWVyeVN1YnNldHMsIGFuZCBhIGEgdGVybXMtb25seSBhcnJheSByZWFycmFuZ2VkIHdpdGggdGhlIGNvbW1vbiB0ZXJtIGF0IGluZGV4IDAuXG4vLyBFYWNoIHF1ZXJ5U3Vic2V0IGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGNvbW1vbiBxdWVyeSBhbG9uZyB3aXRoIG90aGVyIHF1ZXJpZXM7IHN1YmFycmF5Lmxlbmd0aCA9IG1heE51bU9mUXVlcmllcy5cbi8vIExhdGVyLCBlYWNoIHF1ZXJ5U3Vic2V0IGlzIHVzZWQgdG8gbWFrZSAxIEFQSSBjYWxsIHRvIG9idGFpbiBhIGRhdGFTdWJzZXQuXG5mdW5jdGlvbiBzcGxpdHRlcih0ZXJtc0FycmF5LCBtYXhOdW1PZlF1ZXJpZXMsIGpvaW5JbmRleCkge1xuICAgIFxuICAgIC8vIHJlbW92ZSB0aGUgY29tbW9uIHF1ZXJ5IGZyb20gdGhlIHRlcm1zQXJyYXkgb24gd2hpY2ggd2UnbGwgaXRlcmF0ZSBvdmVyIHRvIGdldCB0aGUgc3Vic2V0cyBvZiBxdWVyaWVzLFxuICAgIC8vIGFuZCBzYXZlIHRoZSBjb21tb24gcXVlcnkgdG8gY29uc3Qgam9pblRlcm1cbiAgICBjb25zdCBqb2luVGVybSA9IHRlcm1zQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSk7XG5cbiAgICBjb25zdCBpbnRlcnZhbCA9IG1heE51bU9mUXVlcmllcyAtIDE7XG5cbiAgICBsZXQgcXVlcnlTdWJzZXRzID0gW107XG5cbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRlcm1zQXJyYXkubGVuZ3RoOykge1xuICAgICAgICAvLyBlYWNoIHNldCBvZiBxdWVyaWVzIGV4Y2x1ZGluZyBjb21tb24gcXVlcnlcbiAgICAgICAgY29uc3QgZ3JvdXAgPSB0ZXJtc0FycmF5LnNsaWNlKGksIGkgKyBpbnRlcnZhbCk7XG5cbiAgICAgICAgLy8gZWFjaCBzdWJhcnJheSBoYXMgdGhlIGNvbW1vbiBxdWVyeSBhcyB0aGUgZmlyc3QgZWxlbWVudCwgZm9sbG93ZWQgYnkgb3RoZXIgcXVlcmllc1xuICAgICAgICBjb25zdCBxdWVyeVN1YnNldCA9IGpvaW5UZXJtLmNvbmNhdChncm91cCk7XG5cbiAgICAgICAgcXVlcnlTdWJzZXRzLnB1c2gocXVlcnlTdWJzZXQpO1xuXG4gICAgICAgIC8vIGp1bXAgdG8gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheSB3aGljaCBoYXNuJ3QgeWV0IGJlZW4gYWRkZWQgdG8gYSBxdWVyeVN1YnNldFxuICAgICAgICBpICs9IGludGVydmFsO1xuICAgIH1cblxuICAgIHRlcm1zQXJyYXkgPSBqb2luVGVybS5jb25jYXQodGVybXNBcnJheSk7XG5cbiAgICByZXR1cm4gW3F1ZXJ5U3Vic2V0cywgdGVybXNBcnJheV07XG59XG5cblxuY29uc3QgJDIwMTlfc2VhcmNoVGVybXMgPSBzZWFyY2hUZXJtc0dlbmVyYXRvcigkMjAxOSk7XG5jb25zdCAkMjAxOV9zcGxpdFF1ZXJpZXMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgJDIwMTlfc2VhcmNoVGVybXMubGVuZ3RoIC8gMik7XG5cbm1vZHVsZS5leHBvcnRzID0geyAkMjAxOV9zcGxpdFF1ZXJpZXMgfTsiLCJpbXBvcnQgeyBhZGRMYWJlbENvb3JkcyB9IGZyb20gXCIuL2xhYmVsQ29vcmRzLmpzXCJcblxuLy8gY3JlYXRpbmcgcmV1c2FibGUgY2hhcnRcbmV4cG9ydCBmdW5jdGlvbiBjaGFydFRlbXBsYXRlKCkge1xuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIHN2Z1xuICBsZXQgd2lkdGggPSA4MDA7XG4gIGxldCBoZWlnaHQgPSA4MDA7XG4gIGxldCBhZGogPSAzMDtcblxuXG4gIGZ1bmN0aW9uIGRyYXcoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICBcbiAgICAgIFxuICAgICAgLy8gU0NBTEVTOiB4LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1pbihkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBjb25zb2xlLmxvZyhcInN0YXJ0RGF0ZVwiLCBzdGFydERhdGUpXG5cbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIGFuZCByYW5nZSBvZiB4LWF4aXNcbiAgICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAgIC5zY2FsZVRpbWUoKVxuICAgICAgICAuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cblxuICAgICAgLy8gU0NBTEVTOiB5LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtYXggdmFsdWUgZm9yIGRvbWFpbiBvbiB5LWF4aXMgKHBvaW50cylcbiAgICAgIGNvbnN0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBtYXhZXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgXG5cbiAgICAvLyBhZGQgbGFiZWwgY29vcmRpbmF0ZXMgdG8gZGF0YXNldCdzIHRlcm1TbGljZXNcbiAgICAgIGFkZExhYmVsQ29vcmRzKGRhdGEsIDEwLCB4U2NhbGUsIHlTY2FsZSk7XG4gICAgICBcblxuICAgIC8vIFZBTFVFUzogYWRkIHNwbGluZWQgdmFsdWVzXG4gICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSwgaSkge1xuICAgICAgICBjb25zdCBkYXRlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4geFNjYWxlKHYuZGF0ZSk7IC8vIGdldCBhcnJheSBvZiBkYXRlcyBtYXBwZWQgb250byB0aGUgYnJvd3NlclxuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBwb2ludHMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIHlTY2FsZSh2LnBvaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICBcbiAgICAgICAgY29uc3Qgc3BsaW5lRGF0ZSA9IGQzLmludGVycG9sYXRlQmFzaXMoZGF0ZXMpO1xuICAgICAgICBcbiAgICAgICAgY29uc3Qgc3BsaW5lUG9pbnQgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKHBvaW50cyk7XG5cbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInF1YW50RGF0ZVwiLCBkMy5xdWFudGl6ZShzcGxpbmVEYXRlLCAxMTMqMikpXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudFBvaW50XCIsIGQzLnF1YW50aXplKHNwbGluZVBvaW50LCAxMTMpKTtcbiAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInF1YW50UG9pbnRtYXhcIiwgZDMubWluKGQzLnF1YW50aXplKHNwbGluZVBvaW50LCAxMTApKSk7XG5cbiAgICAgICAgY29uc3Qgb3JpZ2luYWxOdW1PZlBvaW50cyA9IHRlcm1TbGljZS52YWx1ZXMubGVuZ3RoO1xuICAgICAgICBjb25zdCBkZWdyZWUgPSAyMSAqIG9yaWdpbmFsTnVtT2ZQb2ludHM7XG5cbiAgICAgICAgdGVybVNsaWNlLnNwbGluZWQgPSBkMy56aXAoXG4gICAgICAgICAgICBkMy5xdWFudGl6ZShzcGxpbmVEYXRlLCBkZWdyZWUpLFxuICAgICAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIGRlZ3JlZSlcbiAgICAgICAgKTtcblxuICAgIH0pO1xuXG4gICAgICAvLyBBWEVTXG4gICAgICBjb25zdCB4QXhpcyA9IGQzXG4gICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgLnNjYWxlKHhTY2FsZSlcbiAgICAgICAgLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW10pXG4gICAgICAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcblxuICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICBjb25zdCB5QXhpc0dyaWQgPSBkM1xuICAgICAgICAuYXhpc0xlZnQoKVxuICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAudGlja1NpemUoLXdpZHRoKVxuICAgICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgICAudGlja1ZhbHVlcyhbbWF4WS8gMywgMiAqIG1heFkgLyAzLCBtYXhZXSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcylcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICBcInZpZXdCb3hcIixcbiAgICAgICAgICBgLSR7YWRqICogMn0gLSR7YWRqICogM30gJHt3aWR0aCArIGFkaiAqIDEwfSAke2hlaWdodCArIGFkaiAqIDJ9YFxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIik7XG5cbiAgICAgIC8vIGRyYXcgeC1heGlzXG4gICAgICBzdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxuICAgICAgICAuY2FsbCh4QXhpcyk7IC8vIC5jYWxsIGNhbGxzIHRoZSBmdW5jdGlvbiB4QXhpcyBvbiB0aGUgZWxlbWVudHMgb2YgdGhlIHNlbGVjdGlvbiBnXG5cbiAgICAgIC8vIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikudGV4dC5hcHBlbmQoXCJKYW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIiwgZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKSlcblxuICAgICAgLy8gZHJhdyB5LWF4aXNcbiAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInktYXhpcy1ncmlkXCIpLmNhbGwoeUF4aXNHcmlkKTtcbiAgICAgIC8vIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAvLyAudGV4dChcIkZyZXF1ZW5jeVwiKVxuICAgICAgLy8gLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgLy8gLmF0dHIoXCJ5XCIsIC00MClcbiAgICAgIC8vIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXG4gICAgICAvLyBkcmF3IGxpbmVzXG4gICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgcmV0dXJuIHhTY2FsZShkLmRhdGUpO1xuICAgICAgICAgICAgcmV0dXJuIGRbMF07XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4geVNjYWxlKGQucG9pbnQpO1xuICAgICAgICAgICAgcmV0dXJuIGRbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGluZS0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgICAgcmV0dXJuIGxpbmUoZC5zcGxpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsYWJlbCBsYWJlbC0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gYOKHvSAgICAgICAke2QudGVybX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcblxuXG4gICAgICAgIC8vICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtsYWJlbFh9LCAke2xhYmVsWX0pYDtcbiAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgfSlcblxuXG4gICAgY29uc29sZS5sb2coZDMuc2VsZWN0QWxsKFwiLmxhYmVsXCIpKVxuICAgIH0pO1xuICB9XG5cbiAgLy8gYWNjZXNzb3IgLyBzZXR0ZXIgZnVuY3Rpb25zIGZvciB3aWR0aCBhbmQgaGVpZ2h0XG4gIGRyYXcud2lkdGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIGRyYXcuaGVpZ2h0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIC8vIHJldHVybiBkcmF3IGZ1bmN0aW9uXG4gIHJldHVybiBkcmF3O1xufVxuIiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vcmVmZXJlbmNlcy96X2V4YW1wbGUuanNcIjtcbmltcG9ydCBzaW1wbGVfZXhhbXBsZSBmcm9tIFwiLi9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzXCI7XG5cbi8vIGRhdGFcbmltcG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IGZyb20gXCIuL2RhdGEvZGF0YVRyYW5zZm9ybWVyLmpzXCI7XG5pbXBvcnQgeyAkMjAxOSwgJDIwMTlfc2VhcmNoVGVybXMsICQyMDE5X3NwbGl0UXVlcmllcyB9IGZyb20gXCIuL2RhdGEvdGVybXMuanNcIjtcblxuLy8gZDMgY2hhcnRcbmltcG9ydCB7IGNoYXJ0VGVtcGxhdGUgfSBmcm9tIFwiLi9kcmF3Q2hhcnQuanNcIjtcblxuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG4vLyAvLyB0byBpbGx1c3RyYXRlIHN2ZyBwYXRoIG1pbmktbGFuZ3VhZ2Vcbi8vIC8vIGNvbnN0IGlsbHVzdHJhdGlvbiA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4vLyAgICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuXG4vLyAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcblxuLy8gLy8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIFxuICAvLy8vIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGNvbnN0IHRlc3RfcmV0cmlldmVyUHJvbWlzZXMgPSByZXRyaWV2ZXIoJDIwMTlfc3BsaXRRdWVyaWVzWzBdKTtcbiAgY29uc29sZS5sb2coXCJ0ZXN0X3JldHJpZXZlclByb21pc2VzXCIsIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gIC8vIGxldCB0ZXN0ID0gY3JlYXRlRGF0YXNldCh0ZXN0X3JldHJpZXZlclByb21pc2VzKTtcbiAgLy8gY29uc29sZS5sb2coJ2luZGV4anMgVGVzdCcsIHRlc3QpXG5cbiAgLy8gQ0FMTCBEUkFXIENIQVJUIEZVTkNUSU9OXG4gIGNvbnNvbGUubG9nKFwiJDIwMTlfc3BsaXRxdWVyaWVzXCIsICQyMDE5X3NwbGl0UXVlcmllcylcblxuICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLnRoZW4oKGQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndvb2hvb1wiLCBkKVxuICAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gIH0pXG4gXG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7IiwiLy8gZnVuY3Rpb24gdG8gc2VwYXJhdGUgb3V0IGxhYmVscyB0aGF0IG92ZXJsYXBcbmZ1bmN0aW9uIGFkZExhYmVsQ29vcmRzKGRhdGEsIHNwYWNlLCB4U2NhbGUsIHlTY2FsZSkge1xuICBsZXQgbm9Db2xsaXNpb25zID0gZmFsc2U7XG5cbiAgbGV0IHlMYWJlbFZhbHVlcyA9IFtdO1xuICBsZXQgeUxhYmVsVmFsdWVzT3JpZ2luYWwgPSBbXTtcblxuICAvLyBsZXQgeUxhYmVsVmFsdWVzID0gZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAvLyAgIHJldHVybiBkO1xuICAvLyB9KVxuICAvLyBsZXQgeUxhYmVsVmFsdWVzT3JpZ2luYWwgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzKSB7XG4gICAgbGV0IGxhc3RJbmRleCA9IHMudmFsdWVzLmxlbmd0aCAtIDE7XG5cbiAgICBzLmxhYmVsWCA9IHhTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpO1xuICAgIHMubGFiZWxZID0geVNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuXG4gICAgeUxhYmVsVmFsdWVzLnB1c2gocy5sYWJlbFkpO1xuICAgIHlMYWJlbFZhbHVlc09yaWdpbmFsLnB1c2gocy5sYWJlbFkpO1xuICB9KTtcblxuICB3aGlsZSAoIW5vQ29sbGlzaW9ucykge1xuICAgIG5vQ29sbGlzaW9ucyA9IHRydWU7XG5cbiAgICB5TGFiZWxWYWx1ZXMuZm9yRWFjaCgodjEsIGkpID0+IHtcbiAgICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MiwgaikgPT4ge1xuICAgICAgICAvLyBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGxldCB5RGlmZiA9IE1hdGguYWJzKHlMYWJlbFZhbHVlc1tqXSAtIHlMYWJlbFZhbHVlc1tpXSk7XG4gICAgICAgIGxldCBhZGREaWZmID0gc3BhY2UgLSB5RGlmZjtcblxuICAgICAgICAvLyBsZXQgbW92aW5nWSA9IHlMYWJlbFZhbHVlc09yaWdpbmFsW2pdID49IHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID8gaiA6IGk7XG5cbiAgICAgICAgaWYgKGkgIT09IGogJiYgeURpZmYgPCBzcGFjZSkge1xuICAgICAgICAgIGNvbnNvbGUubG9nKFwiaiBoaXRcIiwgaSwgaik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5RGlmZlwiLHlEaWZmKVxuICAgICAgICAgIGxldCBncmVhdGVySW5kZXggPVxuICAgICAgICAgICAgeUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gLSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSA+PSAwID8gaiA6IGk7XG5cbiAgICAgICAgICB5TGFiZWxWYWx1ZXNbZ3JlYXRlckluZGV4XSArPSBhZGREaWZmO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlZFwiLCB5TGFiZWxWYWx1ZXMpXG4gICAgICAgICAgbm9Db2xsaXNpb25zID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICB9XG5cbiAgLy8gY29uc29sZS5sb2coeUxhYmVsVmFsdWVzKTtcblxuICAvLyByZXR1cm4geUxhYmVsVmFsdWVzO1xuXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocywgaSkge1xuICAgIHMubGFiZWxZID0geUxhYmVsVmFsdWVzW2ldO1xuICB9KTtcbn1cblxuXG4vLyBhZGRMYWJlbENvb3JkcyhbMCwgMywgNiwgOSwgMTIsIDE1XSlcbi8vIGFkZExhYmVsQ29vcmRzKFs0LCAzLCAxLCA1NSwgMiwgMV0pXG4vLyBbMTMsIDEwLDEsIDU1LCA3LCA0XVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWRkTGFiZWxDb29yZHMgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0X2Z1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IDk2MDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA1O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gNTtcbiAgICAgICAgY29uc3QgYWRqID0gMzA7XG5cbiAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBTVkcgZmlyc3QgLSBlZGl0ZWQgYWRqXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgKC0xICogYWRqKSArIFwiIFwiICsgKC0xICogYWRqKSArIFwiIFwiICsgKHdpZHRoICsgMyAqIGFkaikgKyBcIiBcIiArIChoZWlnaHQgKyAzICogYWRqKSlcbiAgICAgICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVkLSViLSVZXCIpO1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gZDMuY3N2KFwiLi9kaXN0L2Fzc2V0cy90ZXN0LmNzdlwiKTtcblxuICAgICAgICBkYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9kYXRhXCIsIGRhdGEpXG4gICAgICAgICAgICBjb25zdCBzbGljZXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiArZFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnNcIiwgZGF0YS5jb2x1bW5zKTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzIHdpdGhvdXQgZGF0ZVwiLCBkYXRhLmNvbHVtbnMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgc2xpY2VkIGRhdGFzZXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9zbGljZXNcIiwgc2xpY2VzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGUgZWxlbWVudFwiLHNsaWNlc1swXS52YWx1ZXNbMF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFxuICAgICAgICAgICAgICAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCxcbiAgICAgICAgICAgICAgICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybnMgdW5kZWZpbmVkOlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleGFtcGxlX3hTY2FsZVwiLCB4U2NhbGUoKSk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCB5YXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhheGlzID0gZDNcbiAgICAgICAgICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gICAgICAgICAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAgICAgICAgICAgICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLm1lYXN1cmVtZW50KTsgfSk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh4YXhpcyk7XG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh5YXhpcylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHNsaWNlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBpZHMpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VyaWVfbGFiZWxcIilcbiAgICAgICAgICAgICAgICAvLyAuZGF0dW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkZTogZC5pZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlZTogZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArICh4U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0uZGF0ZSkgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICsgXCIsXCIgKyAoeVNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLm1lYXN1cmVtZW50KSArIDUpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKFwiU2VyaWUgXCIpICsgZC5pZCB9KVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9IClcbiAgICAgICAgfSk7XG5cbiAgICAvLyB9KVxufSIsIlxuY29uc3QgZGF0YSA9IFszLCA2NiwgMiwgNzYsIDUsIDIwLCAxLCAzMCwgNTAsIDksIDgwLCA1LCA3XTtcbmNvbnN0IHRlcnIgPSBbNSwgNSwgNSwgNSwgODAsIDgwLCAyLCAzLCAxLCAyLCA2MCwgMSwgMiwgMzNdXG5jb25zdCBmbG93ZXIgPSBbWzUsIDVdLCBbMSwgMl0sIFs4MCwgODBdXVxuY29uc3QgYmVlID0gW3t2YWx1ZTogNywgbGFiZWw6Mn0sIHt2YWx1ZTogMSwgbGFiZWw6IDN9XVxuXG5mdW5jdGlvbiBjaGFydEEgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGNoYXJ0QVwiKVxuXG4gICAgbGV0IHdpZHRoID0gMjA7XG4gICAgbGV0IGhlaWdodCA9IDIwMDtcblxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMTAwXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgIC5saW5lKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGkpO1xuICAgICAgfSlcbiAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGQpO1xuICAgICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIG15KHNlbGVjdGlvbikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIG15XCIpXG5cbiAgICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzXCIsIHRoaXMpXG4gICAgICAgICAgICBjb25zdCBzY2FsZXRlc3QgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxldGVzdFwiLCBzY2FsZXRlc3QpXG5cbiAgICAgICAgICAgIC8vIFwidGhpc1wiIGlzIHRoZSBzZWxlY3RlZCBlbGVtZW50IChpbiB0aGlzIGNhc2UsIGRpdiB3aXRoIGlkPVwiI2NvbnRhaW5lclwiKVxuICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAqIGRhdGEubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2hhcnQuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoc3RyYXdiZXJyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gbGluZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIG15LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbXkuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlX2V4YW1wbGUgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJzaW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyB3aWR0aFwiLCBjaGFydEEoKS53aWR0aCgpKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3MgbXlcIiwgY2hhcnRBKCkpXG4gICAgXG4gICAgLy8gY29uc3QgY2hhcnRCID0gY2hhcnRBKCkuaGVpZ2h0KDMwMClcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIG15XCIsIGNoYXJ0QilcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIGhlaWdodFwiLCBjaGFydEIuaGVpZ2h0KCkpXG5cbiAgICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGRhdGEpLmNhbGwoY2hhcnRBKCkpXG5cbiAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuZGF0dW0oYmVlKS5jYWxsKGNoYXJ0QSgpKVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9