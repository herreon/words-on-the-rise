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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.2; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.2; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.2; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.2; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.2; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.2; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.2; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.2; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.2; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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
      }); // console.log("selectAll", d3.selectAll(".label"))

      var t = d3.transition() // .delay("100")
      .duration("1");
      svg.selectAll(".label").on('mouseover', function () {
        var selected = d3.select(this).raise();
        selected.transition(t).style("opacity", 1);
      }).on('mouseout', function () {
        var selected = d3.select(this);
        selected.transition(t).style("opacity", 0.2);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJxdWVyaWVzQXJyYXkiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwicXVlcmllc0FycmF5SW5kZXgiLCJ0ZXJtIiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJuZXdQcm9taXNlc0FycmF5IiwiZmlyc3RTdWJzZXQiLCJyZW1haW5pbmdQcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCIkMjAxOSIsIm9uZUhpdCIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1Iiwic2VhcmNoVGVybXNHZW5lcmF0b3IiLCJhcnJheSIsInNlYXJjaFRlcm1zIiwic3BsaXR0ZXIiLCJqb2luSW5kZXgiLCJqb2luVGVybSIsInNwbGljZSIsImdyb3VwIiwicXVlcnlTdWJzZXQiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIiQyMDE5X3NwbGl0UXVlcmllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjaGFydFRlbXBsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJhZGoiLCJkcmF3Iiwic2VsZWN0aW9uIiwiZWFjaCIsImRhdGEiLCJzdGFydERhdGUiLCJtaW4iLCJkIiwiY29uc29sZSIsImxvZyIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwiYWRkTGFiZWxDb29yZHMiLCJkYXRlcyIsInBvaW50cyIsInNwbGluZURhdGUiLCJpbnRlcnBvbGF0ZUJhc2lzIiwic3BsaW5lUG9pbnQiLCJvcmlnaW5hbE51bU9mUG9pbnRzIiwiZGVncmVlIiwic3BsaW5lZCIsInppcCIsInF1YW50aXplIiwieEF4aXMiLCJheGlzQm90dG9tIiwic2NhbGUiLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXMiLCJheGlzTGVmdCIsInRpY2tWYWx1ZXMiLCJ5QXhpc0dyaWQiLCJ0aWNrU2l6ZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJ0IiwidHJhbnNpdGlvbiIsImR1cmF0aW9uIiwib24iLCJzZWxlY3RlZCIsInJhaXNlIiwic3R5bGUiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iLCJzcGFjZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwibGFzdEluZGV4IiwidjEiLCJ2MiIsImoiLCJ5RGlmZiIsImFicyIsImFkZERpZmYiLCJncmVhdGVySW5kZXgiLCJ0ZXN0X2Z1bmN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNB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WixFQUZzQyxDQUl0QztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFRjtBQUdELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbiN0aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2ludHJvLWRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJmZjtcXG4gIGhlaWdodDogMjB2aDsgfVxcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxucGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibGFjazsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbiNjb250YWluZXIgc3ZnIHtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4vKiBBWEVTICovXFxuLyogdGlja3MgKi9cXG4uYXhpcyB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNTtcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAudGljayB7XFxuICBzdHJva2UtZGFzaGFycmF5OiA1LCA1O1xcbiAgc3Ryb2tlOiAjRDREOUUyO1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDAuMztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAuZG9tYWluIHtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwOyB9XFxuXFxuLyogLmF4aXMgbGluZSB7XFxuc3Ryb2tlOiAjNzA2ZjZmO1xcbnN0cm9rZS13aWR0aDogMC41O1xcbnNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59ICovXFxuLyogYXhpcyBjb250b3VyICovXFxuLmF4aXMgcGF0aCB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi8qIGF4aXMgdGV4dCAqL1xcbi5heGlzIHRleHQge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTEwJTsgfVxcblxcbi8qIExJTkUgQ0hBUlQgKi9cXG4vKiBsaW5lICovXFxuLmxpbmUtMCwgLmxhYmVsLTAge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0UxNUQyMDtcXG4gIG9wYWNpdHk6IDAuMjsgfVxcblxcbi5sYWJlbC0wIHtcXG4gIGZpbGw6ICNFMTVEMjA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0xLCAubGFiZWwtMSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjQjUwMDAxO1xcbiAgb3BhY2l0eTogMC4yOyB9XFxuXFxuLmxhYmVsLTEge1xcbiAgZmlsbDogI0I1MDAwMTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTIsIC5sYWJlbC0yIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMwMEE2MDg7XFxuICBvcGFjaXR5OiAwLjI7IH1cXG5cXG4ubGFiZWwtMiB7XFxuICBmaWxsOiAjMDBBNjA4O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMywgLmxhYmVsLTMge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzFCM0NGMDtcXG4gIG9wYWNpdHk6IDAuMjsgfVxcblxcbi5sYWJlbC0zIHtcXG4gIGZpbGw6ICMxQjNDRjA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS00LCAubGFiZWwtNCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNkNDO1xcbiAgb3BhY2l0eTogMC4yOyB9XFxuXFxuLmxhYmVsLTQge1xcbiAgZmlsbDogIzAwQTZDQztcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTUsIC5sYWJlbC01IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICM4MzE3OTQ7XFxuICBvcGFjaXR5OiAwLjI7IH1cXG5cXG4ubGFiZWwtNSB7XFxuICBmaWxsOiAjODMxNzk0O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNiwgLmxhYmVsLTYge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0RCQUU3RTtcXG4gIG9wYWNpdHk6IDAuMjsgfVxcblxcbi5sYWJlbC02IHtcXG4gIGZpbGw6ICNEQkFFN0U7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS03LCAubGFiZWwtNyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRjZCMkQ1O1xcbiAgb3BhY2l0eTogMC4yOyB9XFxuXFxuLmxhYmVsLTcge1xcbiAgZmlsbDogI0Y2QjJENTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTgsIC5sYWJlbC04IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNGRjAxMDA7XFxuICBvcGFjaXR5OiAwLjI7IH1cXG5cXG4ubGFiZWwtOCB7XFxuICBmaWxsOiAjRkYwMTAwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7ICQyMDE5X3NwbGl0UXVlcmllcyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lOyBzdG9yZSBkYXRhIGluIHZhcmlhYmxlIGRhdGFBXG5jb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiViICVkLCAlWVwiKTtcblxuLy8gXG5mdW5jdGlvbiBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIChkYXRhc2V0KSB7XG4gICAgLy8gaW50ZXJ2YWwgaXMgdGhlIG51bSB3ZWVrcyBvdmVyIHdoaWNoIHRoZSBtb3ZpbmdBdmVyYWdlIGlzIGNhbGN1bGF0ZWRcbiAgICBjb25zdCBpbnRlcnZhbCA9IDk7XG5cbiAgICBkYXRhc2V0LmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSkge1xuICAgICAgICBjb25zdCBhdmVyYWdlQ2hlY2tlciA9IFtdO1xuICAgICAgY29uc3QgYXZlcmFnZXMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdilcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZC52YWx1ZXNcIiwgZC52YWx1ZXMpXG5cbiAgICAgICAgaWYgKGkgPCBpbnRlcnZhbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb3ZpbmdUb3RhbCA9IDA7XG5cbiAgICAgICAgdGVybVNsaWNlLnZhbHVlcy5zbGljZShpIC0gaW50ZXJ2YWwsIGkpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBtb3ZpbmdUb3RhbCArPSB2LnBvaW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtb3ZpbmdBdmVyYWdlID0gTWF0aC5yb3VuZChtb3ZpbmdUb3RhbCAvIGludGVydmFsKTtcblxuICAgICAgICBhdmVyYWdlQ2hlY2tlci5wdXNoKFt2LnBvaW50LCBtb3ZpbmdBdmVyYWdlXSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ1RvdGFsXCIsIG1vdmluZ1RvdGFsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdBdmVyYWdlXCIsIG1vdmluZ0F2ZXJhZ2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogdi5kYXRlLFxuICAgICAgICAgIHBvaW50OiBtb3ZpbmdBdmVyYWdlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImF2ZXJhZ2VzXCIsYXZlcmFnZUNoZWNrZXIpXG4gICAgICB0ZXJtU2xpY2UudmFsdWVzID0gYXZlcmFnZXMuc2xpY2UoaW50ZXJ2YWwpO1xuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbiByZXRyaWV2ZXIgc3RvcmVzIHByb21pc2VzIHRoYXQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBmaWxlIHRoYXQgXG4vLyBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggaW4gdGhlIGFycmF5IHF1ZXJ5U3Vic2V0cy5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXkgKGUuZy4gJDIwMTkpXG4vLyBJbnB1dCBhcnJheSBcInF1ZXJ5U3Vic2V0c1wiIGNvbnRhaW5zIHN1YnNldHMgb2YgcXVlcmllcywgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbiBzcGxpdHRlciBpbiB0ZXJtcy5qc1xuZnVuY3Rpb24gcmV0cmlldmVyIChxdWVyeVN1YnNldHMpIHtcbiAgY29uc3QgcmV0cmlldmVyUHJvbWlzZXMgPSBbXTtcblxuICBxdWVyeVN1YnNldHMuZm9yRWFjaCgoc3BsaXRRdWVyeSwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVyUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gcmV0cmlldmVyUHJvbWlzZXM7XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciB0aGUgZDMgY2hhcnQgZHJhd2luZyBmdW5jdGlvbiB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheSwgYXJyYXlPZlByb21pc2VzKSB7XG4gICAgXG4gICAgLy8gdGhpcyB3aWxsIHN0b3JlIHRoZSBkYXRhc2V0IGZvciBkMyB0byB1c2VcbiAgICBjb25zdCBkYXRhc2V0ID0gW107XG5cbiAgICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gICAgLy8gbGV0IG1haW5JbmRleCA9IDA7XG5cbiAgICAvLyByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSByZWxhdGl2ZSB2YWx1ZSBvZiBlYWNoIHRlcm0gaW4gYSBxdWVyeVN1YnNldCwgXG4gICAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgICBmdW5jdGlvbiBjYWxpYnJhdGUocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgsIHJWYWx1ZUluZGV4KSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgICBsZXQgZGVub21pbmF0b3IgPSByYXdkYXRhU2xpY2UudmFsdWVbMF07IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gY3VycmVudCBwcm9taXNlXG4gICAgICAgIGxldCByYXRpbztcbiAgICAgICAgXG4gICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCtyYXdkYXRhU2xpY2UudmFsdWVbclZhbHVlSW5kZXhdICogcmF0aW8pO1xuICAgIH1cblxuXG4gXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgYXJyYXlPZlByb21pc2VzICh0byB0ZWxsIGlmIGl0IHdpbGwgYWNjZXNzIHRoZSBmaXJzdCBvciBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzKVxuICAvLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdyaXRlcyB0aGUgZGF0YSBpbnRvIGNvbnN0IFwiZGF0YXNldFwiLCBpbiBhcHByb3ByaWF0ZSBmb3JtYXQgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihyYXdkYXRhKSB7XG4gICAgXG4gICAgICBsZXQgaW5jcmVtZW50ID0gcHJvbWlzZUluZGV4ID09PSAwID8gMCA6IDE7ICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggd2l0aGluIGVhY2ggc3ViZGF0YXNldFxuICAgICAgbGV0IG1heE51bU9mUXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgcXVlcmllcyBpbiBhIHNpbmdsZSBjYWxsIHVzaW5nIEdvb2dsZSBUcmVuZHMgQVBJXG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCBtYXhOdW1PZlF1ZXJpZXMgJiYgZGF0YXNldC5sZW5ndGggPCBxdWVyaWVzQXJyYXkubGVuZ3RoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXJpZXNBcnJheUluZGV4ID0gcHJvbWlzZUluZGV4ICogKG1heE51bU9mUXVlcmllcyAtIDEpICsgaW5jcmVtZW50O1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06IHRlcm1zQXJyYXlbcXVlcmllc0FycmF5SW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogcmF3ZGF0YS5tYXAoZnVuY3Rpb24gKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4KSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBvaW50ID1cbiAgICAgICAgICAgICAgICBwcm9taXNlSW5kZXggPT09IDAgPyArcmF3ZGF0YVNsaWNlLnZhbHVlW2luY3JlbWVudF1cbiAgICAgICAgICAgICAgICAgIDogY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCBpbmNyZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihyYXdkYXRhU2xpY2UuZm9ybWF0dGVkQXhpc1RpbWUpLFxuXG4gICAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuICB9IFxuXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gYXJyYXlPZlByb21pc2VzLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdldERhdGEocHJvbWlzZSwgaW5kZXgpO1xuICB9KVxuXG4gIHJldHVybiBuZXdQcm9taXNlc0FycmF5WzBdLnRoZW4oZmlyc3RTdWJzZXQgPT4ge1xuICAgICAgY29uc3QgcmVtYWluaW5nUHJvbWlzZXMgPSBuZXdQcm9taXNlc0FycmF5LnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlbWFpbmluZ1Byb21pc2VzKTtcbiAgfSlcbiAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRcIiwgZGF0YXNldClcbiAgICBcbiAgICBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlKGRhdGFzZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldEFmdGVyIE1vdmluZ0F2ZXJhZ2VcIiwgZGF0YXNldClcblxuICAgIHJldHVybiBkYXRhc2V0O1xuICB9KVxuICBcbiAgXG59XG5cbmV4cG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IiwiLy9cInRlcm1zLW9ubHlcIiBhcnJheXNcblxuY29uc3QgJDIwMTkgPSBbXG4gICAgXCJvayBib29tZXJcIixcbiAgICBcInZzY29cIixcbiAgICBcInNmc1wiLFxuICAgIFwiZnlwXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwiaXlreWtcIixcbiAgICBcInNiXCJcbiAgICAvLyBcImFuZCBpIG9vcFwiLFxuICAgIC8vIFwic2tza3NrXCIsXG4gICAgLy8gXCJ5a3R2XCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmNvbnN0ICQyMDE4ID0gW1xuICBcImluY2VsXCIsXG4gIFwidXd1XCIsXG4gIFwibXVrYmFuZ1wiLFxuICBcImliZlwiLFxuICBcImJsb2NrY2hhaW5cIixcbiAgXCJybmdcIixcbiAgXCJqaXRcIixcbiAgXCJqdXVsaW5nXCIsXG4gIFwiZ2VreXVtZVwiLFxuICBcInphZGR5XCIsXG4gIFwid3RtXCIsXG4gIFwid2lnXCIsXG5dO1xuXG5jb25zdCAkMjAxNyA9IFtcbiAgXCJub24gYmluYXJ5XCIsXG4gIFwiYml0Y29pblwiLFxuICBcInNub3dmbGFrZVwiLFxuICBcInBtb3lzXCIsXG4gIFwibWFnYVwiLFxuICBcIndhc3BcIixcbiAgXCJib3VqaWVcIixcbiAgXCJ0cm9sbHNcIixcbl07XG5cbmNvbnN0ICQyMDE2ID0gW1xuICBcImdhc2xpZ2h0aW5nXCIsXG4gIFwic2p3XCIsXG4gIFwiYm9vbGluXCIsXG4gIFwid29rZVwiLFxuICBcInNoaWxsXCIsXG4gIFwicXVhc2hcIixcbiAgXCJicmFuZGlzaFwiLFxuICBcInRyaWdnZXJlZFwiLFxuICBcInNob29rXCIsXG4gIFwiYmlnbHlcIixcbiAgXCJob2xvc2V4dWFsXCIsXG4gIFwidmV4aW5nXCIsXG4gIFwiYm91Z2hcIixcbiAgXCJqdWp1XCIsXG4gIFwid2F2eVwiLFxuXTtcblxuY29uc3QgJDIwMTUgPSBbXG4gIFwic2ltbWVyXCIsXG4gIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgXCJjaGFwb1wiLFxuICBcInN0b29wXCIsXG4gIFwiYmxhc2VcIixcbiAgXCJwbGViXCIsXG4gIFwibG93a2V5XCIsXG4gIFwidG9tZVwiLFxuICBcIndhcFwiLFxuICBcInNodWRkZXJcIixcbiAgXCJidXJudFwiLFxuICBcInZhcGVcIixcbl07XG5cbi8vIHRha2VzIGluIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXk7XG4vLyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBhY3R1YWwgc2VhcmNoIHF1ZXJpZXMgdG8gYmUgbWFkZSB1c2luZyB0aGUgR29vZ2xlIFRyZW5kcyBBUElcbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIHRoZSBhcnJheSBvZiBzZWFyY2ggcXVlcmllczsgXG4vLyBcIm1heE51bU9mUXVlcmllc1wiIGlzIHRoZSBtYXggbnVtIG9mIHF1ZXJpZXMgYWxsb3dlZCBvbiBHb29nbGUgVHJlbmRzIEFQSTtcbi8vIFwiam9pbkluZGV4XCIgaXMgdGhlIGluZGV4IG9mIHRoZSBjb21tb24gcXVlcnkgb24gd2hpY2ggd2UgY2FsaWJyYXRlIGVhY2ggc3ViZGF0YXNldC5cbi8vIEZ1bmN0aW9uIHNwbGl0dGVyIHJldHVybnMgYW4gYXJyYXkgb2YgcXVlcnlTdWJzZXRzLCBhbmQgYSBhIHRlcm1zLW9ubHkgYXJyYXkgcmVhcnJhbmdlZCB3aXRoIHRoZSBjb21tb24gdGVybSBhdCBpbmRleCAwLlxuLy8gRWFjaCBxdWVyeVN1YnNldCBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBjb21tb24gcXVlcnkgYWxvbmcgd2l0aCBvdGhlciBxdWVyaWVzOyBzdWJhcnJheS5sZW5ndGggPSBtYXhOdW1PZlF1ZXJpZXMuXG4vLyBMYXRlciwgZWFjaCBxdWVyeVN1YnNldCBpcyB1c2VkIHRvIG1ha2UgMSBBUEkgY2FsbCB0byBvYnRhaW4gYSBkYXRhU3Vic2V0LlxuZnVuY3Rpb24gc3BsaXR0ZXIocXVlcmllc0FycmF5LCBtYXhOdW1PZlF1ZXJpZXMsIGpvaW5JbmRleCwgdGVybXNBcnJheSkge1xuXG4gIC8vIHJlbW92ZSB0aGUgY29tbW9uIHF1ZXJ5IGZyb20gdGhlIHF1ZXJpZXNBcnJheSBvbiB3aGljaCB3ZSdsbCBpdGVyYXRlIG92ZXIgdG8gZ2V0IHRoZSBzdWJzZXRzIG9mIHF1ZXJpZXMsXG4gIC8vIGFuZCBzYXZlIHRoZSBjb21tb24gcXVlcnkgdG8gY29uc3Qgam9pblRlcm1cbiAgY29uc3Qgam9pblRlcm0gPSBxdWVyaWVzQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSBtYXhOdW1PZlF1ZXJpZXMgLSAxO1xuXG4gIGxldCBxdWVyeVN1YnNldHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJpZXNBcnJheS5sZW5ndGg7ICkge1xuICAgIC8vIGVhY2ggc2V0IG9mIHF1ZXJpZXMgZXhjbHVkaW5nIGNvbW1vbiBxdWVyeVxuICAgIGNvbnN0IGdyb3VwID0gcXVlcmllc0FycmF5LnNsaWNlKGksIGkgKyBpbnRlcnZhbCk7XG5cbiAgICAvLyBlYWNoIHN1YmFycmF5IGhhcyB0aGUgY29tbW9uIHF1ZXJ5IGFzIHRoZSBmaXJzdCBlbGVtZW50LCBmb2xsb3dlZCBieSBvdGhlciBxdWVyaWVzXG4gICAgY29uc3QgcXVlcnlTdWJzZXQgPSBqb2luVGVybS5jb25jYXQoZ3JvdXApO1xuXG4gICAgcXVlcnlTdWJzZXRzLnB1c2gocXVlcnlTdWJzZXQpO1xuXG4gICAgLy8ganVtcCB0byB0aGUgbmV4dCBlbGVtZW50IGluIGFycmF5IHdoaWNoIGhhc24ndCB5ZXQgYmVlbiBhZGRlZCB0byBhIHF1ZXJ5U3Vic2V0XG4gICAgaSArPSBpbnRlcnZhbDtcbiAgfVxuXG4gIHF1ZXJpZXNBcnJheSA9IGpvaW5UZXJtLmNvbmNhdChxdWVyaWVzQXJyYXkpO1xuICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheS5zcGxpY2Uoam9pbkluZGV4LCAxKS5jb25jYXQodGVybXNBcnJheSlcbiAgXG5cbiAgcmV0dXJuIFtxdWVyeVN1YnNldHMsIHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheV07XG59XG5cblxuY29uc3QgJDIwMTlfc2VhcmNoVGVybXMgPSBzZWFyY2hUZXJtc0dlbmVyYXRvcigkMjAxOSk7XG5jb25zdCAkMjAxOV9zcGxpdFF1ZXJpZXMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgJDIwMTlfc2VhcmNoVGVybXMubGVuZ3RoIC8gMiwgJDIwMTkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH07IiwiaW1wb3J0IHsgYWRkTGFiZWxDb29yZHMgfSBmcm9tIFwiLi9sYWJlbENvb3Jkcy5qc1wiXG5cbi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gODAwO1xuICBsZXQgaGVpZ2h0ID0gODAwO1xuICBsZXQgYWRqID0gMzA7XG5cblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgIC8vIFNDQUxFUzogeC1heGlzXG4gICAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgY29uc29sZS5sb2coXCJzdGFydERhdGVcIiwgc3RhcnREYXRlKVxuXG4gICAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgoZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBhbmQgcmFuZ2Ugb2YgeC1heGlzXG4gICAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgICAuc2NhbGVUaW1lKClcbiAgICAgICAgLmRvbWFpbihbc3RhcnREYXRlLCBlbmREYXRlXSlcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG5cbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuXG4gICAgLy8gYWRkIGxhYmVsIGNvb3JkaW5hdGVzIHRvIGRhdGFzZXQncyB0ZXJtU2xpY2VzXG4gICAgICBhZGRMYWJlbENvb3JkcyhkYXRhLCAxMiwgeFNjYWxlLCB5U2NhbGUpO1xuICAgICAgXG5cbiAgICAvLyBWQUxVRVM6IGFkZCBzcGxpbmVkIHZhbHVlc1xuICAgICAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtU2xpY2UsIGkpIHtcbiAgICAgICAgY29uc3QgZGF0ZXMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpOyAvLyBnZXQgYXJyYXkgb2YgZGF0ZXMgbWFwcGVkIG9udG8gdGhlIGJyb3dzZXJcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgcG9pbnRzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB5U2NhbGUodi5wb2ludCk7XG4gICAgICAgIH0pO1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHNwbGluZURhdGUgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKGRhdGVzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHNwbGluZVBvaW50ID0gZDMuaW50ZXJwb2xhdGVCYXNpcyhwb2ludHMpO1xuXG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudERhdGVcIiwgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgMTEzKjIpKVxuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwicXVhbnRQb2ludFwiLCBkMy5xdWFudGl6ZShzcGxpbmVQb2ludCwgMTEzKSk7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudFBvaW50bWF4XCIsIGQzLm1pbihkMy5xdWFudGl6ZShzcGxpbmVQb2ludCwgMTEwKSkpO1xuXG4gICAgICAgIGNvbnN0IG9yaWdpbmFsTnVtT2ZQb2ludHMgPSB0ZXJtU2xpY2UudmFsdWVzLmxlbmd0aDtcbiAgICAgICAgY29uc3QgZGVncmVlID0gMjEgKiBvcmlnaW5hbE51bU9mUG9pbnRzO1xuXG4gICAgICAgIHRlcm1TbGljZS5zcGxpbmVkID0gZDMuemlwKFxuICAgICAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgZGVncmVlKSxcbiAgICAgICAgICAgIGQzLnF1YW50aXplKHNwbGluZVBvaW50LCBkZWdyZWUpXG4gICAgICAgICk7XG5cbiAgICB9KTtcblxuICAgICAgLy8gQVhFU1xuICAgICAgY29uc3QgeEF4aXMgPSBkM1xuICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgIC5zY2FsZSh4U2NhbGUpXG4gICAgICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrVmFsdWVzKFtdKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG5cbiAgICAgIC8vIEFYRVM6IGdyaWRsaW5lc1xuICAgICAgY29uc3QgeUF4aXNHcmlkID0gZDNcbiAgICAgICAgLmF4aXNMZWZ0KClcbiAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgLnRpY2tTaXplKC13aWR0aClcbiAgICAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgICAgICAgLnRpY2tWYWx1ZXMoW21heFkvIDMsIDIgKiBtYXhZIC8gMywgbWF4WV0pXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgYC0ke2FkaiAqIDJ9IC0ke2FkaiAqIDN9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpO1xuXG4gICAgICAvLyBkcmF3IHgtYXhpc1xuICAgICAgc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAgICAgLy8gZHJhdyBsaW5lc1xuICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbiAoZCkge1xuICAgICAgICAvLyAgIHJldHVybiB4U2NhbGUoZC5kYXRlKTtcbiAgICAgICAgICAgIHJldHVybiBkWzBdO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIHlTY2FsZShkLnBvaW50KTtcbiAgICAgICAgICAgIHJldHVybiBkWzFdO1xuICAgICAgICB9KTtcblxuICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImdcIik7XG5cbiAgICAgIGxpbmVzXG4gICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICByZXR1cm4gYGxpbmUgbGluZS0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgICAgcmV0dXJuIGxpbmUoZC5zcGxpbmVkKTtcbiAgICAgICAgfSk7XG5cbiAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsYWJlbCBsYWJlbC0ke2l9YDtcbiAgICAgICAgfSlcbiAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gYOKHvSAgICAgICAke2QudGVybX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC5sYWJlbFh9LCAke2QubGFiZWxZfSlgO1xuICAgICAgICAgICAgLy8gY29uc3QgbGFzdEluZGV4ID0gZC52YWx1ZXMubGVuZ3RoIC0gMTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWCA9IHhTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpO1xuICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuICAgICAgICAvLyAgIHJldHVybiBgdHJhbnNsYXRlKCR7bGFiZWxYfSwgJHtsYWJlbFl9KWA7XG4gICAgICAgIH0pXG5cblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInNlbGVjdEFsbFwiLCBkMy5zZWxlY3RBbGwoXCIubGFiZWxcIikpXG4gICAgY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKVxuICAgICAgICAgICAgICAgIC8vIC5kZWxheShcIjEwMFwiKVxuICAgICAgICAgICAgICAgIC5kdXJhdGlvbihcIjFcIilcblxuICAgIHN2Zy5zZWxlY3RBbGwoXCIubGFiZWxcIilcbiAgICAgICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDMuc2VsZWN0KHRoaXMpLnJhaXNlKCk7XG4gICAgICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgfSlcbiAgICAgICAgLm9uKCdtb3VzZW91dCcsIGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkMy5zZWxlY3QodGhpcyk7XG4gICAgICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKHQpLnN0eWxlKFwib3BhY2l0eVwiLCAwLjIpXG4gICAgICAgIH0pXG4gICAgXG4gICAgfSk7XG4gIH1cblxuICAvLyBhY2Nlc3NvciAvIHNldHRlciBmdW5jdGlvbnMgZm9yIHdpZHRoIGFuZCBoZWlnaHRcbiAgZHJhdy53aWR0aCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIHdpZHRoO1xuICAgIH1cblxuICAgIHdpZHRoID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgZHJhdy5oZWlnaHQgPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgfVxuXG4gICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgcmV0dXJuIGRyYXc7XG4gIH07XG5cbiAgLy8gcmV0dXJuIGRyYXcgZnVuY3Rpb25cbiAgcmV0dXJuIGRyYXc7XG59XG4iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9yZWZlcmVuY2VzL3pfZXhhbXBsZS5qc1wiO1xuaW1wb3J0IHNpbXBsZV9leGFtcGxlIGZyb20gXCIuL3JlZmVyZW5jZXMvel9zaW1wbGUuanNcIjtcblxuLy8gZGF0YVxuaW1wb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0gZnJvbSBcIi4vZGF0YS9kYXRhVHJhbnNmb3JtZXIuanNcIjtcbmltcG9ydCB7ICQyMDE5LCAkMjAxOV9zZWFyY2hUZXJtcywgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vZGF0YS90ZXJtcy5qc1wiO1xuXG4vLyBkMyBjaGFydFxuaW1wb3J0IHsgY2hhcnRUZW1wbGF0ZSB9IGZyb20gXCIuL2RyYXdDaGFydC5qc1wiO1xuXG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy9zdHlsZXMuc2Nzcyc7XG5cbi8vIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuLy8gLy8gY29uc3QgaWxsdXN0cmF0aW9uID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbi8vICAgICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG5cbi8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuXG4vLyAvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgXG4gIC8vLy8gY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgY29uc3QgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcyA9IHJldHJpZXZlcigkMjAxOV9zcGxpdFF1ZXJpZXNbMF0pO1xuICBjb25zb2xlLmxvZyhcInRlc3RfcmV0cmlldmVyUHJvbWlzZXNcIiwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLy8gbGV0IHRlc3QgPSBjcmVhdGVEYXRhc2V0KHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cbiAgY29uc29sZS5sb2coXCIkMjAxOV9zcGxpdHF1ZXJpZXNcIiwgJDIwMTlfc3BsaXRRdWVyaWVzKVxuICBcblxuICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwkMjAxOV9zcGxpdFF1ZXJpZXNbMl0sIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gIC50aGVuKChkKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJ3b29ob29cIiwgZClcbiAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRUZW1wbGF0ZSgpKVxuICB9KVxuIFxuXG4gIC8vIHNpbXBsZV9leGFtcGxlKCk7XG4gIC8vIHRlc3RfZnVuY3Rpb24oKTtcblxufSk7XG5cblxuICBcbiAgXG4vLyAgIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtpbnRlcmFjdGl2ZV1QT0lOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4vLyAgIC8vIGxpbmVzLnNlbGVjdEFsbChcInBvaW50c1wiKVxuLy8gICAvLyAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlcyB9KVxuLy8gICAvLyAgIC5lbnRlcigpXG4vLyAgIC8vICAgLmFwcGVuZChcImNpcmNsZVwiKVxuLy8gICAvLyAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgfSlcbi8vICAgLy8gICAuYXR0cihcInJcIiwgMSlcbi8vICAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwicG9pbnRcIilcbi8vICAgLy8gICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpOyIsIi8vIGZ1bmN0aW9uIHRvIHNlcGFyYXRlIG91dCBsYWJlbHMgdGhhdCBvdmVybGFwXG5mdW5jdGlvbiBhZGRMYWJlbENvb3JkcyhkYXRhLCBzcGFjZSwgeFNjYWxlLCB5U2NhbGUpIHtcbiAgbGV0IG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuXG4gIGxldCB5TGFiZWxWYWx1ZXMgPSBbXTtcbiAgbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gW107XG5cbiAgLy8gbGV0IHlMYWJlbFZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcbiAgLy8gbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAvLyAgIHJldHVybiBkO1xuICAvLyB9KVxuXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgIGxldCBsYXN0SW5kZXggPSBzLnZhbHVlcy5sZW5ndGggLSAxO1xuXG4gICAgcy5sYWJlbFggPSB4U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICBzLmxhYmVsWSA9IHlTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcblxuICAgIHlMYWJlbFZhbHVlcy5wdXNoKHMubGFiZWxZKTtcbiAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbC5wdXNoKHMubGFiZWxZKTtcbiAgfSk7XG5cbiAgd2hpbGUgKCFub0NvbGxpc2lvbnMpIHtcbiAgICBub0NvbGxpc2lvbnMgPSB0cnVlO1xuXG4gICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYxLCBpKSA9PiB7XG4gICAgICB5TGFiZWxWYWx1ZXMuZm9yRWFjaCgodjIsIGopID0+IHtcbiAgICAgICAgLy8gbGV0IGNvdW50ID0gMDtcblxuICAgICAgICBsZXQgeURpZmYgPSBNYXRoLmFicyh5TGFiZWxWYWx1ZXNbal0gLSB5TGFiZWxWYWx1ZXNbaV0pO1xuICAgICAgICBsZXQgYWRkRGlmZiA9IHNwYWNlIC0geURpZmY7XG5cbiAgICAgICAgLy8gbGV0IG1vdmluZ1kgPSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSA+PSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSA/IGogOiBpO1xuXG4gICAgICAgIGlmIChpICE9PSBqICYmIHlEaWZmIDwgc3BhY2UpIHtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImogaGl0XCIsIGksIGopO1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieURpZmZcIix5RGlmZilcbiAgICAgICAgICBsZXQgZ3JlYXRlckluZGV4ID1cbiAgICAgICAgICAgIHlMYWJlbFZhbHVlc09yaWdpbmFsW2pdIC0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPj0gMCA/IGogOiBpO1xuXG4gICAgICAgICAgeUxhYmVsVmFsdWVzW2dyZWF0ZXJJbmRleF0gKz0gYWRkRGlmZjtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZWRcIiwgeUxhYmVsVmFsdWVzKVxuICAgICAgICAgIG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHlMYWJlbFZhbHVlcyk7XG5cbiAgLy8gcmV0dXJuIHlMYWJlbFZhbHVlcztcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcbiAgICBzLmxhYmVsWSA9IHlMYWJlbFZhbHVlc1tpXTtcbiAgfSk7XG59XG5cblxuLy8gYWRkTGFiZWxDb29yZHMoWzAsIDMsIDYsIDksIDEyLCAxNV0pXG4vLyBhZGRMYWJlbENvb3JkcyhbNCwgMywgMSwgNTUsIDIsIDFdKVxuLy8gWzEzLCAxMCwxLCA1NSwgNywgNF1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGFkZExhYmVsQ29vcmRzIH07IiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJcbmNvbnN0IGRhdGEgPSBbMywgNjYsIDIsIDc2LCA1LCAyMCwgMSwgMzAsIDUwLCA5LCA4MCwgNSwgN107XG5jb25zdCB0ZXJyID0gWzUsIDUsIDUsIDUsIDgwLCA4MCwgMiwgMywgMSwgMiwgNjAsIDEsIDIsIDMzXVxuY29uc3QgZmxvd2VyID0gW1s1LCA1XSwgWzEsIDJdLCBbODAsIDgwXV1cbmNvbnN0IGJlZSA9IFt7dmFsdWU6IDcsIGxhYmVsOjJ9LCB7dmFsdWU6IDEsIGxhYmVsOiAzfV1cblxuZnVuY3Rpb24gY2hhcnRBICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwidGhpcyBpcyBjaGFydEFcIilcblxuICAgIGxldCB3aWR0aCA9IDIwO1xuICAgIGxldCBoZWlnaHQgPSAyMDA7XG5cbiAgICBjb25zdCB4ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDFdKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5ID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIDEwMF0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgY29uc3QgbGluZSA9IGQzXG4gICAgICAubGluZSgpXG4gICAgICAueChmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICByZXR1cm4geChpKTtcbiAgICAgIH0pXG4gICAgICAueShmdW5jdGlvbiAoZCkge1xuICAgICAgICByZXR1cm4geShkKTtcbiAgICAgIH0pO1xuXG5cbiAgICBmdW5jdGlvbiBteShzZWxlY3Rpb24pIHtcblxuICAgICAgICBjb25zb2xlLmxvZyhcInJldHVybmluZyBteVwiKVxuXG4gICAgICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKVxuICAgICAgICAgICAgY29uc3Qgc2NhbGV0ZXN0ID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uKGQpe1xuICAgICAgICAgICAgICByZXR1cm4gZC52YWx1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJzY2FsZXRlc3RcIiwgc2NhbGV0ZXN0KVxuXG4gICAgICAgICAgICAvLyBcInRoaXNcIiBpcyB0aGUgc2VsZWN0ZWQgZWxlbWVudCAoaW4gdGhpcyBjYXNlLCBkaXYgd2l0aCBpZD1cIiNjb250YWluZXJcIilcbiAgICAgICAgICAgIGNvbnN0IGNoYXJ0ID0gZDMuc2VsZWN0KHRoaXMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGggKiBkYXRhLmxlbmd0aCAtIDEpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgIFxuICAgICAgICAgICAgXG5cbiAgICAgICAgICAgIGNoYXJ0LmFwcGVuZChcInBhdGhcIikuYXR0cihcImRcIiwgZnVuY3Rpb24gKHN0cmF3YmVycnkpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZGF0YSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIH0pXG5cbiAgICB9XG5cbiAgICBteS53aWR0aCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIHdpZHRoO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgd2lkdGggPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIG15LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGhlaWdodCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgcmV0dXJuIG15O1xufVxuXG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNpbXBsZV9leGFtcGxlICgpIHtcblxuICAgIGNvbnNvbGUubG9nKFwic2ltcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3Mgd2lkdGhcIiwgY2hhcnRBKCkud2lkdGgoKSlcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIG15XCIsIGNoYXJ0QSgpKVxuICAgIFxuICAgIC8vIGNvbnN0IGNoYXJ0QiA9IGNoYXJ0QSgpLmhlaWdodCgzMDApXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBteVwiLCBjaGFydEIpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEIncyBoZWlnaHRcIiwgY2hhcnRCLmhlaWdodCgpKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkYXRhKS5jYWxsKGNoYXJ0QSgpKVxuXG4gIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmRhdHVtKGJlZSkuY2FsbChjaGFydEEoKSlcblxuXG59Il0sInNvdXJjZVJvb3QiOiIifQ==