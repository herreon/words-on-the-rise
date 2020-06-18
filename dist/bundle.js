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

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]); // add splined values

      data.forEach(function (termSlice, i) {
        var dates = termSlice.values.map(function (v) {
          return xScale(v.date); // get array of dates mapped onto the browser
        });
        var points = termSlice.values.map(function (v) {
          return yScale(v.point);
        }); //   console.log("points?", points)
        //   console.log("maxY?", yScale(maxY))

        console.log("maxpoints?", d3.min(points));
        var splineDate = d3.interpolateBasis(dates);
        var splinePoint = d3.interpolateBasis(points); //   console.log("quantDate", d3.quantize(splineDate, 113*2))
        //   console.log("quantPoint", d3.quantize(splinePoint, 113));
        //   console.log("quantPointmax", d3.min(d3.quantize(splinePoint, 110)));

        var originalNumOfPoints = termSlice.values.length;
        var degree = 10 * originalNumOfPoints;
        termSlice.splined = d3.zip(d3.quantize(splineDate, degree), d3.quantize(splinePoint, degree)); // d.values[i].point = d3.quantize(spline, 113)[i]
      }); // AXES

      var xAxis = d3.axisBottom().scale(xScale).ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0); // const yAxis = d3.axisLeft()
      //                 .scale(yScale)
      //                 .tickValues([])
      //                 .tickSizeOuter(0)
      // AXES: gridlines

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat("").tickValues([maxY / 3, 2 * maxY / 3, maxY]) // .tickValues([50, 100])
      .tickSizeOuter(0); // append svg

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

  var test_retrieverPromises = Object(_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["retriever"])(_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][0]);
  console.log("test_retrieverPromises", test_retrieverPromises); // let test = createDataset(test_retrieverPromises);
  // console.log('indexjs Test', test)
  // CALL DRAW CHART FUNCTION

  console.log("$2019_splitqueries", _terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"]);
  Object(_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], test_retrieverPromises).then(function (d) {
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

//"terms-only" arrays
var $2019 = ["ok boomer", "vsco", "sfs", "fyp", "s/u", "ngl", "simp", "and i oop", "iykyk", "sb", "sksksk", "yktv"];
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RyYXdDaGFydC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3Rlcm1zLmpzIiwid2VicGFjazovLy8uL3NyYy96X2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwidGVybXNBcnJheUluZGV4IiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwibmV3UHJvbWlzZXNBcnJheSIsImZpcnN0U3Vic2V0IiwicmVtYWluaW5nUHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiY29uc29sZSIsImxvZyIsImNoYXJ0VGVtcGxhdGUiLCJ3aWR0aCIsImhlaWdodCIsImFkaiIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwiZGF0YSIsInN0YXJ0RGF0ZSIsIm1pbiIsImQiLCJlbmREYXRlIiwibWF4IiwieFNjYWxlIiwic2NhbGVUaW1lIiwiZG9tYWluIiwicmFuZ2UiLCJtYXhZIiwicyIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2VSb3VuZCIsImRhdGVzIiwicG9pbnRzIiwic3BsaW5lRGF0ZSIsImludGVycG9sYXRlQmFzaXMiLCJzcGxpbmVQb2ludCIsIm9yaWdpbmFsTnVtT2ZQb2ludHMiLCJkZWdyZWUiLCJzcGxpbmVkIiwiemlwIiwicXVhbnRpemUiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJzY2FsZSIsInRpY2tzIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tTaXplT3V0ZXIiLCJ5QXhpc0dyaWQiLCJheGlzTGVmdCIsInRpY2tTaXplIiwidGlja1ZhbHVlcyIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYXN0SW5kZXgiLCJsYWJlbFgiLCJsYWJlbFkiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0X3JldHJpZXZlclByb21pc2VzIiwiJDIwMTlfc3BsaXRRdWVyaWVzIiwiZGF0dW0iLCIkMjAxOSIsIm9uZUhpdCIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1Iiwic2VhcmNoVGVybXNHZW5lcmF0b3IiLCJhcnJheSIsInNlYXJjaFRlcm1zIiwic3BsaXR0ZXIiLCJqb2luSW5kZXgiLCJqb2luVGVybSIsInNwbGljZSIsImdyb3VwIiwicXVlcnlTdWJzZXQiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJ0ZXN0X2Z1bmN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsInN0eWxlIiwiY2xhc3NlZCIsImNzdiIsInNsaWNlcyIsImNvbHVtbnMiLCJpZCIsIm1lYXN1cmVtZW50IiwiZXh0ZW50IiwiYyIsInlheGlzIiwieGF4aXMiLCJ0aW1lRGF5IiwiaWRzIiwidGVyciIsImZsb3dlciIsImJlZSIsImxhYmVsIiwiY2hhcnRBIiwibXkiLCJzY2FsZXRlc3QiLCJjaGFydCIsInN0cmF3YmVycnkiLCJzaW1wbGVfZXhhbXBsZSJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlD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NkQsVUFBVixFQUFzQjtBQUNuRCxlQUFPM0QsSUFBSSxDQUFDM0MsSUFBRCxDQUFYO0FBQ0QsT0FGRDtBQUtILEtBdEJEO0FBd0JIOztBQUVEbUcsSUFBRSxDQUFDekcsS0FBSCxHQUFXLFVBQVN0QixLQUFULEVBQWdCO0FBQ3pCLFFBQUksQ0FBQ2lGLFNBQVMsQ0FBQ3hFLE1BQWYsRUFBdUI7QUFDckIsYUFBT2EsS0FBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUd0QixLQUFSO0FBQ0EsYUFBTytILEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0FBLElBQUUsQ0FBQ3hHLE1BQUgsR0FBWSxVQUFTdkIsS0FBVCxFQUFnQjtBQUMxQixRQUFJLENBQUNpRixTQUFTLENBQUN4RSxNQUFmLEVBQXVCO0FBQ3JCLGFBQU9jLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsWUFBTSxHQUFHdkIsS0FBVDtBQUNBLGFBQU8rSCxFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQU9BLEVBQVA7QUFDSDs7QUFHYyxTQUFTSSxjQUFULEdBQTJCO0FBRXRDaEgsU0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFGc0MsQ0FJdEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUY7QUFHRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuI3RpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogIzA2MmY4NztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4jdGl0bGUgcCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNpbnRyby1kaXZpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZiZmY7XFxuICBoZWlnaHQ6IDIwdmg7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IG9yYW5nZTsgfVxcblxcbi5sYWJlbC0wIHtcXG4gIGZpbGw6IG9yYW5nZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTEsIC5sYWJlbC0xIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IHJlZDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6IHJlZDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTIsIC5sYWJlbC0yIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGdyZWVuOyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogZ3JlZW47XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0zLCAubGFiZWwtMyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibHVlOyB9XFxuXFxuLmxhYmVsLTMge1xcbiAgZmlsbDogYmx1ZTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTQsIC5sYWJlbC00IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGN5YW47IH1cXG5cXG4ubGFiZWwtNCB7XFxuICBmaWxsOiBjeWFuO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNSwgLmxhYmVsLTUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcHVycGxlOyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogcHVycGxlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNiwgLmxhYmVsLTYge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYnJvd247IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiBicm93bjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTcsIC5sYWJlbC03IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IHllbGxvdzsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6IHllbGxvdztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTgsIC5sYWJlbC04IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IHBpbms7IH1cXG5cXG4ubGFiZWwtOCB7XFxuICBmaWxsOiBwaW5rO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtOSwgLmxhYmVsLTkge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzllZTI3NjsgfVxcblxcbi5sYWJlbC05IHtcXG4gIGZpbGw6ICM5ZWUyNzY7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWU7IHN0b3JlIGRhdGEgaW4gdmFyaWFibGUgZGF0YUFcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuXG4vLyBcbmZ1bmN0aW9uIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UgKGRhdGFzZXQpIHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgbnVtIHdlZWtzIG92ZXIgd2hpY2ggdGhlIG1vdmluZ0F2ZXJhZ2UgaXMgY2FsY3VsYXRlZFxuICAgIGNvbnN0IGludGVydmFsID0gOTtcblxuICAgIGRhdGFzZXQuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlKSB7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VDaGVja2VyID0gW107XG4gICAgICBjb25zdCBhdmVyYWdlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkLnZhbHVlc1wiLCBkLnZhbHVlcylcblxuICAgICAgICBpZiAoaSA8IGludGVydmFsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmluZ1RvdGFsID0gMDtcblxuICAgICAgICB0ZXJtU2xpY2UudmFsdWVzLnNsaWNlKGkgLSBpbnRlcnZhbCwgaSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIG1vdmluZ1RvdGFsICs9IHYucG9pbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdmluZ0F2ZXJhZ2UgPSBNYXRoLnJvdW5kKG1vdmluZ1RvdGFsIC8gaW50ZXJ2YWwpO1xuXG4gICAgICAgIGF2ZXJhZ2VDaGVja2VyLnB1c2goW3YucG9pbnQsIG1vdmluZ0F2ZXJhZ2VdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nVG90YWxcIiwgbW92aW5nVG90YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ0F2ZXJhZ2VcIiwgbW92aW5nQXZlcmFnZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB2LmRhdGUsXG4gICAgICAgICAgcG9pbnQ6IG1vdmluZ0F2ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYXZlcmFnZXNcIixhdmVyYWdlQ2hlY2tlcilcbiAgICAgIHRlcm1TbGljZS52YWx1ZXMgPSBhdmVyYWdlcy5zbGljZShpbnRlcnZhbCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9uIHJldHJpZXZlciBzdG9yZXMgcHJvbWlzZXMgdGhhdCBmZXRjaCBkYXRhIGZyb20gdGhlIGZpbGUgdGhhdCBcbi8vIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgcXVlcnlTdWJzZXRzLlxuLy8gSW5wdXQgYXJnIFwidGVybXNBcnJheVwiIGlzIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXkgKGUuZy4gJDIwMTkpXG4vLyBJbnB1dCBhcnJheSBcInF1ZXJ5U3Vic2V0c1wiIGNvbnRhaW5zIHN1YnNldHMgb2YgcXVlcmllcywgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbiBzcGxpdHRlciBpbiB0ZXJtcy5qc1xuZnVuY3Rpb24gcmV0cmlldmVyIChxdWVyeVN1YnNldHMpIHtcbiAgY29uc3QgcmV0cmlldmVyUHJvbWlzZXMgPSBbXTtcblxuICBxdWVyeVN1YnNldHMuZm9yRWFjaCgoc3BsaXRRdWVyeSwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVyUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gcmV0cmlldmVyUHJvbWlzZXM7XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciB0aGUgZDMgY2hhcnQgZHJhd2luZyBmdW5jdGlvbiB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKHRlcm1zQXJyYXksIGFycmF5T2ZQcm9taXNlcykge1xuICAgIFxuICAgIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gICAgY29uc3QgZGF0YXNldCA9IFtdO1xuXG4gICAgLy8gLy8ga2VlcHMgdHJhY2sgb2YgdGhlIGluZGV4IG9mIGVhY2ggdGVybVxuICAgIC8vIGxldCBtYWluSW5kZXggPSAwO1xuXG4gICAgLy8gcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVsYXRpdmUgdmFsdWUgb2YgZWFjaCB0ZXJtIGluIGEgcXVlcnlTdWJzZXQsIFxuICAgIC8vIHVzaW5nIHRoZSBwb2ludCB2YWx1ZSBvZiB0aGUgY29tbW9uIHF1ZXJ5IGFzIGEgcmVmZXJlbmNlXG4gICAgZnVuY3Rpb24gY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCByVmFsdWVJbmRleCkge1xuICAgICAgICBcbiAgICAgICAgbGV0IG51bWVyYXRvciA9IGRhdGFzZXRbMF0udmFsdWVzW3Jhd2RhdGFJbmRleF0ucG9pbnQ7IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gcHJldmlvdXMgcHJvbWlzZSAoYWxyZWFkeSBpbiB2YXIgZGF0YXNldClcbiAgICAgICAgbGV0IGRlbm9taW5hdG9yID0gcmF3ZGF0YVNsaWNlLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgICBsZXQgcmF0aW87XG4gICAgICAgIFxuICAgICAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICAgICAgcmF0aW8gPSAwO1xuICAgICAgICB9IGVsc2Uge3JhdGlvID0gbnVtZXJhdG9yIC8gZGVub21pbmF0b3I7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gTWF0aC5yb3VuZCgrcmF3ZGF0YVNsaWNlLnZhbHVlW3JWYWx1ZUluZGV4XSAqIHJhdGlvKTtcbiAgICB9XG5cblxuIFxuICAvLyB0YWtlcyBpbiBhIHByb21pc2UsIGFuZCBpdHMgaW5kZXggaW4gdGhlIGFycmF5T2ZQcm9taXNlcyAodG8gdGVsbCBpZiBpdCB3aWxsIGFjY2VzcyB0aGUgZmlyc3Qgb3Igc3Vic2VxdWVudCBzdWJkYXRhc2V0cylcbiAgLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCB3cml0ZXMgdGhlIGRhdGEgaW50byBjb25zdCBcImRhdGFzZXRcIiwgaW4gYXBwcm9wcmlhdGUgZm9ybWF0IFxuICBmdW5jdGlvbiBnZXREYXRhIChwcm9taXNlLCBwcm9taXNlSW5kZXgpIHtcblxuICAgIHJldHVybiBwcm9taXNlLnRoZW4oZnVuY3Rpb24ocmF3ZGF0YSkge1xuICAgIFxuICAgICAgbGV0IGluY3JlbWVudCA9IHByb21pc2VJbmRleCA9PT0gMCA/IDAgOiAxOyAgLy8ga2VlcHMgdHJhY2sgb2YgdGhlIGluZGV4IHdpdGhpbiBlYWNoIHN1YmRhdGFzZXRcbiAgICAgIGxldCBtYXhOdW1PZlF1ZXJpZXMgPSA1OyAvLyBtYXggbnVtIG9mIHF1ZXJpZXMgaW4gYSBzaW5nbGUgY2FsbCB1c2luZyBHb29nbGUgVHJlbmRzIEFQSVxuXG4gICAgICB3aGlsZSAoaW5jcmVtZW50IDwgbWF4TnVtT2ZRdWVyaWVzICYmIGRhdGFzZXQubGVuZ3RoIDwgdGVybXNBcnJheS5sZW5ndGgpIHtcblxuICAgICAgICBsZXQgdGVybXNBcnJheUluZGV4ID0gcHJvbWlzZUluZGV4ICogKG1heE51bU9mUXVlcmllcyAtIDEpICsgaW5jcmVtZW50O1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06IHRlcm1zQXJyYXlbdGVybXNBcnJheUluZGV4XSxcbiAgICAgICAgICB2YWx1ZXM6IHJhd2RhdGEubWFwKGZ1bmN0aW9uIChyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCkge1xuXG4gICAgICAgICAgICAgIGxldCBwb2ludCA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUluZGV4ID09PSAwID8gK3Jhd2RhdGFTbGljZS52YWx1ZVtpbmNyZW1lbnRdXG4gICAgICAgICAgICAgICAgICA6IGNhbGlicmF0ZShyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCwgaW5jcmVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYocmF3ZGF0YVNsaWNlLmZvcm1hdHRlZEF4aXNUaW1lKSxcblxuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICAgIFxuICAgICAgICBpbmNyZW1lbnQgKz0gMTtcbiAgXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YXNldDtcblxuICAgIH0pXG5cbiAgfSBcblxuXG4gIC8vIGVhY2ggcHJvbWlzZSB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIHRoZSBkYXRhLXdyaXRpbmcgcHJvbWlzZSBhbmQgc3RvcmVkIGluIG5ld1Byb21pc2VzQXJyYXlcbiAgY29uc3QgbmV3UHJvbWlzZXNBcnJheSA9IGFycmF5T2ZQcm9taXNlcy5tYXAoZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBnZXREYXRhKHByb21pc2UsIGluZGV4KTtcbiAgfSlcblxuICByZXR1cm4gbmV3UHJvbWlzZXNBcnJheVswXS50aGVuKGZpcnN0U3Vic2V0ID0+IHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb21pc2VzID0gbmV3UHJvbWlzZXNBcnJheS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZW1haW5pbmdQcm9taXNlcyk7XG4gIH0pXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGRhdGFzZXQpXG4gICAgXG4gICAgY2hhbmdlWVRvTW92aW5nQXZlcmFnZShkYXRhc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRBZnRlciBNb3ZpbmdBdmVyYWdlXCIsIGRhdGFzZXQpXG5cbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfSlcbiAgXG4gIFxufVxuXG5leHBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gODAwO1xuICBsZXQgaGVpZ2h0ID0gODAwO1xuICBsZXQgYWRqID0gMzA7XG5cblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICBcbiAgICAgIC8vIFNDQUxFUzogeC1heGlzXG4gICAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJzdGFydERhdGVcIiwgc3RhcnREYXRlKVxuXG4gICAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgoZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBhbmQgcmFuZ2Ugb2YgeC1heGlzXG4gICAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgICAuc2NhbGVUaW1lKClcbiAgICAgICAgLmRvbWFpbihbc3RhcnREYXRlLCBlbmREYXRlXSlcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG5cbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuICAgIC8vIGFkZCBzcGxpbmVkIHZhbHVlc1xuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtU2xpY2UsIGkpIHtcbiAgICAgIGNvbnN0IGRhdGVzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpOyAvLyBnZXQgYXJyYXkgb2YgZGF0ZXMgbWFwcGVkIG9udG8gdGhlIGJyb3dzZXJcbiAgICAgIH0pO1xuXG4gICAgICBjb25zdCBwb2ludHMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4geVNjYWxlKHYucG9pbnQpO1xuICAgICAgfSk7XG5cbiAgICAvLyAgIGNvbnNvbGUubG9nKFwicG9pbnRzP1wiLCBwb2ludHMpXG4gICAgLy8gICBjb25zb2xlLmxvZyhcIm1heFk/XCIsIHlTY2FsZShtYXhZKSlcbiAgICAgIGNvbnNvbGUubG9nKFwibWF4cG9pbnRzP1wiLCBkMy5taW4ocG9pbnRzKSlcbiAgICAgIGNvbnN0IHNwbGluZURhdGUgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKGRhdGVzKTtcbiAgICAgIFxuICAgICAgY29uc3Qgc3BsaW5lUG9pbnQgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKHBvaW50cyk7XG5cbiAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudERhdGVcIiwgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgMTEzKjIpKVxuICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudFBvaW50XCIsIGQzLnF1YW50aXplKHNwbGluZVBvaW50LCAxMTMpKTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwicXVhbnRQb2ludG1heFwiLCBkMy5taW4oZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMCkpKTtcblxuICAgICAgY29uc3Qgb3JpZ2luYWxOdW1PZlBvaW50cyA9IHRlcm1TbGljZS52YWx1ZXMubGVuZ3RoO1xuICAgICAgY29uc3QgZGVncmVlID0gMTAgKiBvcmlnaW5hbE51bU9mUG9pbnRzO1xuXG4gICAgICB0ZXJtU2xpY2Uuc3BsaW5lZCA9IGQzLnppcChcbiAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgZGVncmVlKSxcbiAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIGRlZ3JlZSlcbiAgICAgICk7XG5cbiAgICAgIC8vIGQudmFsdWVzW2ldLnBvaW50ID0gZDMucXVhbnRpemUoc3BsaW5lLCAxMTMpW2ldXG4gICAgfSk7XG5cbiAgICAgIC8vIEFYRVNcbiAgICAgIGNvbnN0IHhBeGlzID0gZDNcbiAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAuc2NhbGUoeFNjYWxlKVxuICAgICAgICAudGlja3MoZDMudGltZU1vbnRoLmV2ZXJ5KDEyKSlcbiAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVZXCIpKVxuICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgLy8gY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgIC8vICAgICAgICAgICAgICAgICAudGlja1ZhbHVlcyhbXSlcbiAgICAgIC8vICAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuXG4gICAgICAvLyBBWEVTOiBncmlkbGluZXNcbiAgICAgIGNvbnN0IHlBeGlzR3JpZCA9IGQzXG4gICAgICAgIC5heGlzTGVmdCgpXG4gICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgIC50aWNrU2l6ZSgtd2lkdGgpXG4gICAgICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gICAgICAgIC50aWNrVmFsdWVzKFttYXhZLyAzLCAyICogbWF4WSAvIDMsIG1heFldKVxuICAgICAgICAvLyAudGlja1ZhbHVlcyhbNTAsIDEwMF0pXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgYC0ke2FkaiAqIDJ9IC0ke2FkaiAqIDN9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpO1xuXG4gICAgICAvLyBkcmF3IHgtYXhpc1xuICAgICAgc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAgICAgLy8gZHJhdyBsaW5lc1xuXG4gICAgICBcblxuXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyAgIHJldHVybiB4U2NhbGUoZC5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBkWzBdO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gcmV0dXJuIHlTY2FsZShkLnBvaW50KTtcbiAgICAgICAgICAgIHJldHVybiBkWzFdO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsaW5lLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICByZXR1cm4gbGluZShkLnNwbGluZWQpO1xuICAgICAgICB9KTtcblxuICAgICAgLy8gYWRkIGxhYmVscyB0byBlYWNoIGxpbmVcbiAgICAgIGxpbmVzXG4gICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYGxhYmVsIGxhYmVsLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBg4oe9ICAgICAgICR7ZC50ZXJtfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgY29uc3QgbGFzdEluZGV4ID0gZC52YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIGNvbnN0IGxhYmVsWCA9IHhTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpO1xuICAgICAgICAgICAgY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuXG5cbiAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICAvLyAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC5sYWJlbFh9LCAke2QubGFiZWxZfSlgO1xuICAgICAgICB9KVxuXG5cbiAgICBjb25zb2xlLmxvZyhkMy5zZWxlY3RBbGwoXCIubGFiZWxcIikpXG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi96X2V4YW1wbGUuanNcIjtcbmltcG9ydCBzaW1wbGVfZXhhbXBsZSBmcm9tIFwiLi96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gZDMgY2hhcnRcbmltcG9ydCB7IGNoYXJ0VGVtcGxhdGUgfSBmcm9tIFwiLi9kcmF3Q2hhcnQuanNcIjtcblxuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG4vLyAvLyB0byBpbGx1c3RyYXRlIHN2ZyBwYXRoIG1pbmktbGFuZ3VhZ2Vcbi8vIC8vIGNvbnN0IGlsbHVzdHJhdGlvbiA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4vLyAgICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuXG4vLyAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcblxuLy8gLy8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIFxuICAvLy8vIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGNvbnN0IHRlc3RfcmV0cmlldmVyUHJvbWlzZXMgPSByZXRyaWV2ZXIoJDIwMTlfc3BsaXRRdWVyaWVzWzBdKTtcbiAgY29uc29sZS5sb2coXCJ0ZXN0X3JldHJpZXZlclByb21pc2VzXCIsIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gIC8vIGxldCB0ZXN0ID0gY3JlYXRlRGF0YXNldCh0ZXN0X3JldHJpZXZlclByb21pc2VzKTtcbiAgLy8gY29uc29sZS5sb2coJ2luZGV4anMgVGVzdCcsIHRlc3QpXG5cbiAgLy8gQ0FMTCBEUkFXIENIQVJUIEZVTkNUSU9OXG4gIGNvbnNvbGUubG9nKFwiJDIwMTlfc3BsaXRxdWVyaWVzXCIsICQyMDE5X3NwbGl0UXVlcmllcylcblxuICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLnRoZW4oKGQpID0+IHtcbiAgICBjb25zb2xlLmxvZyhcIndvb2hvb1wiLCBkKVxuICAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gIH0pXG4gXG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7IiwiLy9cInRlcm1zLW9ubHlcIiBhcnJheXNcblxuY29uc3QgJDIwMTkgPSBbXG4gICAgXCJvayBib29tZXJcIixcbiAgICBcInZzY29cIixcbiAgICBcInNmc1wiLFxuICAgIFwiZnlwXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwiYW5kIGkgb29wXCIsXG4gICAgXCJpeWt5a1wiLFxuICAgIFwic2JcIixcbiAgICBcInNrc2tza1wiLFxuICAgIFwieWt0dlwiXG5dXG5cbmNvbnN0IG9uZUhpdCA9IFtcInNsYXR0XCIsIFwiYW50c1wiXTtcblxuXG5jb25zdCAkMjAxOCA9IFtcbiAgXCJpbmNlbFwiLFxuICBcInV3dVwiLFxuICBcIm11a2JhbmdcIixcbiAgXCJpYmZcIixcbiAgXCJibG9ja2NoYWluXCIsXG4gIFwicm5nXCIsXG4gIFwiaml0XCIsXG4gIFwianV1bGluZ1wiLFxuICBcImdla3l1bWVcIixcbiAgXCJ6YWRkeVwiLFxuICBcInd0bVwiLFxuICBcIndpZ1wiLFxuXTtcblxuY29uc3QgJDIwMTcgPSBbXG4gIFwibm9uIGJpbmFyeVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJzbm93Zmxha2VcIixcbiAgXCJwbW95c1wiLFxuICBcIm1hZ2FcIixcbiAgXCJ3YXNwXCIsXG4gIFwiYm91amllXCIsXG4gIFwidHJvbGxzXCIsXG5dO1xuXG5jb25zdCAkMjAxNiA9IFtcbiAgXCJnYXNsaWdodGluZ1wiLFxuICBcInNqd1wiLFxuICBcImJvb2xpblwiLFxuICBcIndva2VcIixcbiAgXCJzaGlsbFwiLFxuICBcInF1YXNoXCIsXG4gIFwiYnJhbmRpc2hcIixcbiAgXCJ0cmlnZ2VyZWRcIixcbiAgXCJzaG9va1wiLFxuICBcImJpZ2x5XCIsXG4gIFwiaG9sb3NleHVhbFwiLFxuICBcInZleGluZ1wiLFxuICBcImJvdWdoXCIsXG4gIFwianVqdVwiLFxuICBcIndhdnlcIixcbl07XG5cbmNvbnN0ICQyMDE1ID0gW1xuICBcInNpbW1lclwiLFxuICBcIm5ldGZsaXggYW5kIGNoaWxsXCIsXG4gIFwiY2hhcG9cIixcbiAgXCJzdG9vcFwiLFxuICBcImJsYXNlXCIsXG4gIFwicGxlYlwiLFxuICBcImxvd2tleVwiLFxuICBcInRvbWVcIixcbiAgXCJ3YXBcIixcbiAgXCJzaHVkZGVyXCIsXG4gIFwiYnVybnRcIixcbiAgXCJ2YXBlXCIsXG5dO1xuXG4vLyB0YWtlcyBpbiBhIFwidGVybXMtb25seVwiIGFycmF5O1xuLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgYWN0dWFsIHNlYXJjaCBxdWVyaWVzIHRvIGJlIG1hZGUgdXNpbmcgdGhlIEdvb2dsZSBUcmVuZHMgQVBJXG5mdW5jdGlvbiBzZWFyY2hUZXJtc0dlbmVyYXRvcihhcnJheSkge1xuICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIHNlYXJjaFRlcm1zLnB1c2goYHdoYXQgZG9lcyAke3Rlcm19IG1lYW5gKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRlcm1zKTtcbiAgICByZXR1cm4gc2VhcmNoVGVybXM7XG59O1xuXG4vLyBJbnB1dCBhcmcgXCJhcnJheVwiIGlzIHRoZSBhcnJheSBvZiBzZWFyY2ggcXVlcmllczsgXG4vLyBcIm1heE51bU9mUXVlcmllc1wiIGlzIHRoZSBtYXggbnVtIG9mIHF1ZXJpZXMgYWxsb3dlZCBvbiBHb29nbGUgVHJlbmRzIEFQSTtcbi8vIFwiam9pbkluZGV4XCIgaXMgdGhlIGluZGV4IG9mIHRoZSBjb21tb24gcXVlcnkgb24gd2hpY2ggd2UgY2FsaWJyYXRlIGVhY2ggc3ViZGF0YXNldC5cbi8vIEZ1bmN0aW9uIHNwbGl0dGVyIHJldHVybnMgYW4gYXJyYXkgb2YgcXVlcnlTdWJzZXRzLCBhbmQgYSBhIHRlcm1zLW9ubHkgYXJyYXkgcmVhcnJhbmdlZCB3aXRoIHRoZSBjb21tb24gdGVybSBhdCBpbmRleCAwLlxuLy8gRWFjaCBxdWVyeVN1YnNldCBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBjb21tb24gcXVlcnkgYWxvbmcgd2l0aCBvdGhlciBxdWVyaWVzOyBzdWJhcnJheS5sZW5ndGggPSBtYXhOdW1PZlF1ZXJpZXMuXG4vLyBMYXRlciwgZWFjaCBxdWVyeVN1YnNldCBpcyB1c2VkIHRvIG1ha2UgMSBBUEkgY2FsbCB0byBvYnRhaW4gYSBkYXRhU3Vic2V0LlxuZnVuY3Rpb24gc3BsaXR0ZXIodGVybXNBcnJheSwgbWF4TnVtT2ZRdWVyaWVzLCBqb2luSW5kZXgpIHtcbiAgICBcbiAgICAvLyByZW1vdmUgdGhlIGNvbW1vbiBxdWVyeSBmcm9tIHRoZSB0ZXJtc0FycmF5IG9uIHdoaWNoIHdlJ2xsIGl0ZXJhdGUgb3ZlciB0byBnZXQgdGhlIHN1YnNldHMgb2YgcXVlcmllcyxcbiAgICAvLyBhbmQgc2F2ZSB0aGUgY29tbW9uIHF1ZXJ5IHRvIGNvbnN0IGpvaW5UZXJtXG4gICAgY29uc3Qgam9pblRlcm0gPSB0ZXJtc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpO1xuXG4gICAgY29uc3QgaW50ZXJ2YWwgPSBtYXhOdW1PZlF1ZXJpZXMgLSAxO1xuXG4gICAgbGV0IHF1ZXJ5U3Vic2V0cyA9IFtdO1xuXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0ZXJtc0FycmF5Lmxlbmd0aDspIHtcbiAgICAgICAgLy8gZWFjaCBzZXQgb2YgcXVlcmllcyBleGNsdWRpbmcgY29tbW9uIHF1ZXJ5XG4gICAgICAgIGNvbnN0IGdyb3VwID0gdGVybXNBcnJheS5zbGljZShpLCBpICsgaW50ZXJ2YWwpO1xuXG4gICAgICAgIC8vIGVhY2ggc3ViYXJyYXkgaGFzIHRoZSBjb21tb24gcXVlcnkgYXMgdGhlIGZpcnN0IGVsZW1lbnQsIGZvbGxvd2VkIGJ5IG90aGVyIHF1ZXJpZXNcbiAgICAgICAgY29uc3QgcXVlcnlTdWJzZXQgPSBqb2luVGVybS5jb25jYXQoZ3JvdXApO1xuXG4gICAgICAgIHF1ZXJ5U3Vic2V0cy5wdXNoKHF1ZXJ5U3Vic2V0KTtcblxuICAgICAgICAvLyBqdW1wIHRvIHRoZSBuZXh0IGVsZW1lbnQgaW4gYXJyYXkgd2hpY2ggaGFzbid0IHlldCBiZWVuIGFkZGVkIHRvIGEgcXVlcnlTdWJzZXRcbiAgICAgICAgaSArPSBpbnRlcnZhbDtcbiAgICB9XG5cbiAgICB0ZXJtc0FycmF5ID0gam9pblRlcm0uY29uY2F0KHRlcm1zQXJyYXkpO1xuXG4gICAgcmV0dXJuIFtxdWVyeVN1YnNldHMsIHRlcm1zQXJyYXldO1xufVxuXG5cbmNvbnN0ICQyMDE5X3NlYXJjaFRlcm1zID0gc2VhcmNoVGVybXNHZW5lcmF0b3IoJDIwMTkpO1xuY29uc3QgJDIwMTlfc3BsaXRRdWVyaWVzID0gc3BsaXR0ZXIoJDIwMTlfc2VhcmNoVGVybXMsIDUsICQyMDE5X3NlYXJjaFRlcm1zLmxlbmd0aCAvIDIpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==