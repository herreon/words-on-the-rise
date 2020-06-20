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

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, 12, xScale, yScale); // VALUES: add splined values

      function addSplinedValues() {
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
          console.log("addsplinedvalues", originalNumOfPoints);
        });
      }

      addSplinedValues(); // AXES

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
      // svg
      //   .append("clipPath")
      //   .attr("id", "date-clip")
      //   .append("rect")
      //   .attr("x", xScale(startDate))
      //   .attr("y", yScale(maxY - midMax))
      //   .attr("width", xScale(midDate))
      //   .attr("height", yScale(midMax));
      // draw x-axis

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

        xScale.domain(newStartDate, newEndDate); // update x axis

        svg.call(xAxis).transition();
        addSplinedValues();
        lines.transition().attr("d", function (d) {
          //     // return line(d.values);
          //     // return [1,1]
          return line(d.splined);
        });
      }

      updateChart();
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
  //   console.log("woohoo", d)
  //   d3.select("#container").datum(d).call(chartTemplate())
  // })

  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][2], test_retrieverPromises).then(function (d) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJxdWVyaWVzQXJyYXkiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwicXVlcmllc0FycmF5SW5kZXgiLCJ0ZXJtIiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJuZXdQcm9taXNlc0FycmF5IiwiZmlyc3RTdWJzZXQiLCJyZW1haW5pbmdQcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCIkMjAxOSIsIm9uZUhpdCIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1Iiwic2VhcmNoVGVybXNHZW5lcmF0b3IiLCJhcnJheSIsInNlYXJjaFRlcm1zIiwic3BsaXR0ZXIiLCJqb2luSW5kZXgiLCJqb2luVGVybSIsInNwbGljZSIsImdyb3VwIiwicXVlcnlTdWJzZXQiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIiQyMDE5X3NwbGl0UXVlcmllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjaGFydFRlbXBsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJhZGoiLCJkcmF3Iiwic2VsZWN0aW9uIiwiZWFjaCIsImRhdGEiLCJzdGFydERhdGUiLCJtaW4iLCJkIiwiZW5kRGF0ZSIsIm1heCIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsInJhbmdlIiwibWF4WSIsInMiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJhZGRMYWJlbENvb3JkcyIsImFkZFNwbGluZWRWYWx1ZXMiLCJkYXRlcyIsInBvaW50cyIsInNwbGluZURhdGUiLCJpbnRlcnBvbGF0ZUJhc2lzIiwic3BsaW5lUG9pbnQiLCJvcmlnaW5hbE51bU9mUG9pbnRzIiwiZGVncmVlIiwic3BsaW5lZCIsInppcCIsInF1YW50aXplIiwiY29uc29sZSIsImxvZyIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInRpY2tzIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tTaXplT3V0ZXIiLCJ5QXhpcyIsImF4aXNMZWZ0Iiwic2NhbGUiLCJ0aWNrVmFsdWVzIiwieUF4aXNHcmlkIiwidGlja1NpemUiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibWlkRGF0ZSIsIkRhdGUiLCJtaWRNYXgiLCJmaWx0ZXIiLCJ2YWwiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJob3ZlckxpbmVzIiwidXBkYXRlQ2hhcnQiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwidHJhbnNpdGlvbiIsInN0eWxlIiwib24iLCJub2RlcyIsInNlbGVjdGVkX2kiLCJmbG9vciIsInNlbGVjdGVkIiwicmFpc2UiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iLCJzcGFjZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwibGFzdEluZGV4IiwidjEiLCJ2MiIsImoiLCJ5RGlmZiIsImFicyIsImFkZERpZmYiLCJncmVhdGVySW5kZXgiLCJ0ZXN0X2Z1bmN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFB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S0FGRCxNQUVPO0FBQ0xBLFdBQUssR0FBR3hDLEtBQVI7QUFDQSxhQUFPNkosRUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQUEsSUFBRSxDQUFDcEgsTUFBSCxHQUFZLFVBQVN6QyxLQUFULEVBQWdCO0FBQzFCLFFBQUksQ0FBQ3dILFNBQVMsQ0FBQy9HLE1BQWYsRUFBdUI7QUFDckIsYUFBT2dDLE1BQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsWUFBTSxHQUFHekMsS0FBVDtBQUNBLGFBQU82SixFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBLFNBQU9BLEVBQVA7QUFDSDs7QUFHYyxTQUFTSSxjQUFULEdBQTJCO0FBRXRDeEYsU0FBTyxDQUFDQyxHQUFSLENBQVksOEJBQVosRUFGc0MsQ0FJdEM7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBRUY7QUFHRCxDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwidmFyIGFwaSA9IHJlcXVpcmUoXCIhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCIpO1xuICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSByZXF1aXJlKFwiISEuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc2Fzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZXMuc2Nzc1wiKTtcblxuICAgICAgICAgICAgY29udGVudCA9IGNvbnRlbnQuX19lc01vZHVsZSA/IGNvbnRlbnQuZGVmYXVsdCA6IGNvbnRlbnQ7XG5cbiAgICAgICAgICAgIGlmICh0eXBlb2YgY29udGVudCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgY29udGVudCA9IFtbbW9kdWxlLmlkLCBjb250ZW50LCAnJ11dO1xuICAgICAgICAgICAgfVxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLmluc2VydCA9IFwiaGVhZFwiO1xub3B0aW9ucy5zaW5nbGV0b24gPSBmYWxzZTtcblxudmFyIHVwZGF0ZSA9IGFwaShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbm1vZHVsZS5leHBvcnRzID0gY29udGVudC5sb2NhbHMgfHwge307IiwiLy8gSW1wb3J0c1xudmFyIF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyA9IHJlcXVpcmUoXCIuLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCIpO1xuZXhwb3J0cyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhmYWxzZSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDgwdmg7IH1cXG5cXG4jdGl0bGUge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7XFxuICBoZWlnaHQ6IDEwMCU7XFxuICB3aWR0aDogNTAlO1xcbiAgcGFkZGluZy1sZWZ0OiA2MHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDgwcHg7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogZmxleC1lbmQ7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94OyB9XFxuXFxuI3RpdGxlIGgxIHtcXG4gIGZvbnQtZmFtaWx5OiAnVGl0aWxsaXVtIFdlYicsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDYwcHg7XFxuICBjb2xvcjogIzA2MmY4NztcXG4gIGxpbmUtaGVpZ2h0OiAxO1xcbiAgcGFkZGluZy1ib3R0b206IDIwcHg7IH1cXG5cXG4jdGl0bGUgcCB7XFxuICB3aWR0aDogMTAwJTsgfVxcblxcbiNpbnRyby1kaXZpZGVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNlOGZiZmY7XFxuICBoZWlnaHQ6IDIwdmg7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4O1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQztcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0O1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lIHtcXG4gIHN0cm9rZS13aWR0aDogMTsgfVxcblxcbi5ob3Zlci1saW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNkMmQyZDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMDsgfVxcblxcbi5sYWJlbCB7XFxuICBwYWRkaW5nOiAxMDA7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWU7IHN0b3JlIGRhdGEgaW4gdmFyaWFibGUgZGF0YUFcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuXG4vLyBcbmZ1bmN0aW9uIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UgKGRhdGFzZXQpIHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgbnVtIHdlZWtzIG92ZXIgd2hpY2ggdGhlIG1vdmluZ0F2ZXJhZ2UgaXMgY2FsY3VsYXRlZFxuICAgIGNvbnN0IGludGVydmFsID0gOTtcblxuICAgIGRhdGFzZXQuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlKSB7XG4gICAgICAgIGNvbnN0IGF2ZXJhZ2VDaGVja2VyID0gW107XG4gICAgICBjb25zdCBhdmVyYWdlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkLnZhbHVlc1wiLCBkLnZhbHVlcylcblxuICAgICAgICBpZiAoaSA8IGludGVydmFsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmluZ1RvdGFsID0gMDtcblxuICAgICAgICB0ZXJtU2xpY2UudmFsdWVzLnNsaWNlKGkgLSBpbnRlcnZhbCwgaSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIG1vdmluZ1RvdGFsICs9IHYucG9pbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdmluZ0F2ZXJhZ2UgPSBNYXRoLnJvdW5kKG1vdmluZ1RvdGFsIC8gaW50ZXJ2YWwpO1xuXG4gICAgICAgIGF2ZXJhZ2VDaGVja2VyLnB1c2goW3YucG9pbnQsIG1vdmluZ0F2ZXJhZ2VdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nVG90YWxcIiwgbW92aW5nVG90YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ0F2ZXJhZ2VcIiwgbW92aW5nQXZlcmFnZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB2LmRhdGUsXG4gICAgICAgICAgcG9pbnQ6IG1vdmluZ0F2ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYXZlcmFnZXNcIixhdmVyYWdlQ2hlY2tlcilcbiAgICAgIHRlcm1TbGljZS52YWx1ZXMgPSBhdmVyYWdlcy5zbGljZShpbnRlcnZhbCk7XG4gICAgfSk7XG59XG5cbi8vIGZ1bmN0aW9uIHJldHJpZXZlciBzdG9yZXMgcHJvbWlzZXMgdGhhdCBmZXRjaCBkYXRhIGZyb20gdGhlIGZpbGUgdGhhdCBcbi8vIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgcXVlcnlTdWJzZXRzLlxuLy8gSW5wdXQgYXJnIFwicXVlcmllc0FycmF5XCIgaXMgYSBcInRlcm1zLW9ubHlcIiBhcnJheSAoZS5nLiAkMjAxOSlcbi8vIElucHV0IGFycmF5IFwicXVlcnlTdWJzZXRzXCIgY29udGFpbnMgc3Vic2V0cyBvZiBxdWVyaWVzLCByZXR1cm5lZCBmcm9tIGZ1bmN0aW9uIHNwbGl0dGVyIGluIHRlcm1zLmpzXG5mdW5jdGlvbiByZXRyaWV2ZXIgKHF1ZXJ5U3Vic2V0cykge1xuICBjb25zdCByZXRyaWV2ZXJQcm9taXNlcyA9IFtdO1xuXG4gIHF1ZXJ5U3Vic2V0cy5mb3JFYWNoKChzcGxpdFF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgIC8vIGxldCBkYXRhc2V0TmFtZSA9IGBkYXRhc2V0XyR7aW5kZXh9YDtcbiAgICByZXRyaWV2ZXJQcm9taXNlcy5wdXNoKGQzLmpzb24oYC4vZGlzdC9hc3NldHMvZGF0YS8yMDE5XyR7aW5kZXh9Lmpzb25gKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXRyaWV2ZXJQcm9taXNlcztcbn1cblxuXG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGNyZWF0ZXMgdGhlIGRhdGFzZXQgZm9yIHRoZSBkMyBjaGFydCBkcmF3aW5nIGZ1bmN0aW9uIHRvIHVzZVxuLy8gdGFrZXMgaW4gaW5wdXQgYXJncyB0aGF0IHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24gXCJyZXRyaWV2ZXJcIlxuZnVuY3Rpb24gY3JlYXRlRGF0YXNldCAocXVlcmllc0FycmF5LCB0ZXJtc0FycmF5LCBhcnJheU9mUHJvbWlzZXMpIHtcbiAgICBcbiAgICAvLyB0aGlzIHdpbGwgc3RvcmUgdGhlIGRhdGFzZXQgZm9yIGQzIHRvIHVzZVxuICAgIGNvbnN0IGRhdGFzZXQgPSBbXTtcblxuICAgIC8vIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCBvZiBlYWNoIHRlcm1cbiAgICAvLyBsZXQgbWFpbkluZGV4ID0gMDtcblxuICAgIC8vIHJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHJlbGF0aXZlIHZhbHVlIG9mIGVhY2ggdGVybSBpbiBhIHF1ZXJ5U3Vic2V0LCBcbiAgICAvLyB1c2luZyB0aGUgcG9pbnQgdmFsdWUgb2YgdGhlIGNvbW1vbiBxdWVyeSBhcyBhIHJlZmVyZW5jZVxuICAgIGZ1bmN0aW9uIGNhbGlicmF0ZShyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCwgclZhbHVlSW5kZXgpIHtcbiAgICAgICAgXG4gICAgICAgIGxldCBudW1lcmF0b3IgPSBkYXRhc2V0WzBdLnZhbHVlc1tyYXdkYXRhSW5kZXhdLnBvaW50OyAvLyBjb21wYXJpc29uIHZhbHVlIGluIHByZXZpb3VzIHByb21pc2UgKGFscmVhZHkgaW4gdmFyIGRhdGFzZXQpXG4gICAgICAgIGxldCBkZW5vbWluYXRvciA9IHJhd2RhdGFTbGljZS52YWx1ZVswXTsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBjdXJyZW50IHByb21pc2VcbiAgICAgICAgbGV0IHJhdGlvO1xuICAgICAgICBcbiAgICAgICAgaWYgKGRlbm9taW5hdG9yID09PSAwKSB7XG4gICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgfSBlbHNlIHtyYXRpbyA9IG51bWVyYXRvciAvIGRlbm9taW5hdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIE1hdGgucm91bmQoK3Jhd2RhdGFTbGljZS52YWx1ZVtyVmFsdWVJbmRleF0gKiByYXRpbyk7XG4gICAgfVxuXG5cbiBcbiAgLy8gdGFrZXMgaW4gYSBwcm9taXNlLCBhbmQgaXRzIGluZGV4IGluIHRoZSBhcnJheU9mUHJvbWlzZXMgKHRvIHRlbGwgaWYgaXQgd2lsbCBhY2Nlc3MgdGhlIGZpcnN0IG9yIHN1YnNlcXVlbnQgc3ViZGF0YXNldHMpXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd3JpdGVzIHRoZSBkYXRhIGludG8gY29uc3QgXCJkYXRhc2V0XCIsIGluIGFwcHJvcHJpYXRlIGZvcm1hdCBcbiAgZnVuY3Rpb24gZ2V0RGF0YSAocHJvbWlzZSwgcHJvbWlzZUluZGV4KSB7XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJhd2RhdGEpIHtcbiAgICBcbiAgICAgIGxldCBpbmNyZW1lbnQgPSBwcm9taXNlSW5kZXggPT09IDAgPyAwIDogMTsgIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCB3aXRoaW4gZWFjaCBzdWJkYXRhc2V0XG4gICAgICBsZXQgbWF4TnVtT2ZRdWVyaWVzID0gNTsgLy8gbWF4IG51bSBvZiBxdWVyaWVzIGluIGEgc2luZ2xlIGNhbGwgdXNpbmcgR29vZ2xlIFRyZW5kcyBBUElcblxuICAgICAgd2hpbGUgKGluY3JlbWVudCA8IG1heE51bU9mUXVlcmllcyAmJiBkYXRhc2V0Lmxlbmd0aCA8IHF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcblxuICAgICAgICBsZXQgcXVlcmllc0FycmF5SW5kZXggPSBwcm9taXNlSW5kZXggKiAobWF4TnVtT2ZRdWVyaWVzIC0gMSkgKyBpbmNyZW1lbnQ7XG5cbiAgICBcbiAgICAgICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICAgICAgdGVybTogdGVybXNBcnJheVtxdWVyaWVzQXJyYXlJbmRleF0sXG4gICAgICAgICAgdmFsdWVzOiByYXdkYXRhLm1hcChmdW5jdGlvbiAocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgpIHtcblxuICAgICAgICAgICAgICBsZXQgcG9pbnQgPVxuICAgICAgICAgICAgICAgIHByb21pc2VJbmRleCA9PT0gMCA/ICtyYXdkYXRhU2xpY2UudmFsdWVbaW5jcmVtZW50XVxuICAgICAgICAgICAgICAgICAgOiBjYWxpYnJhdGUocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgsIGluY3JlbWVudCk7XG5cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KHJhd2RhdGFTbGljZS5mb3JtYXR0ZWRBeGlzVGltZSksXG5cbiAgICAgICAgICAgICAgcG9pbnQ6IHBvaW50LFxuICAgICAgICBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBcbiAgICAgICAgICB9KSxcbiAgICAgICAgfTtcblxuICAgICAgICBkYXRhc2V0LnB1c2goc2xpY2UpO1xuICAgICAgICBcbiAgICAgICAgaW5jcmVtZW50ICs9IDE7XG4gIFxuICAgICAgfVxuICAgICAgcmV0dXJuIGRhdGFzZXQ7XG5cbiAgICB9KVxuXG4gIH0gXG5cblxuICAvLyBlYWNoIHByb21pc2Ugd2lsbCBiZSB0cmFuc2Zvcm1lZCB0byB0aGUgZGF0YS13cml0aW5nIHByb21pc2UgYW5kIHN0b3JlZCBpbiBuZXdQcm9taXNlc0FycmF5XG4gIGNvbnN0IG5ld1Byb21pc2VzQXJyYXkgPSBhcnJheU9mUHJvbWlzZXMubWFwKGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZ2V0RGF0YShwcm9taXNlLCBpbmRleCk7XG4gIH0pXG5cbiAgcmV0dXJuIG5ld1Byb21pc2VzQXJyYXlbMF0udGhlbihmaXJzdFN1YnNldCA9PiB7XG4gICAgICBjb25zdCByZW1haW5pbmdQcm9taXNlcyA9IG5ld1Byb21pc2VzQXJyYXkuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVtYWluaW5nUHJvbWlzZXMpO1xuICB9KVxuICAudGhlbihyZXMgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldFwiLCBkYXRhc2V0KVxuICAgIFxuICAgIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UoZGF0YXNldCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0QWZ0ZXIgTW92aW5nQXZlcmFnZVwiLCBkYXRhc2V0KVxuXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH0pXG4gIFxuICBcbn1cblxuZXhwb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH07XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0iLCIvL1widGVybXMtb25seVwiIGFycmF5c1xuXG5jb25zdCAkMjAxOSA9IFtcbiAgICBcIm9rIGJvb21lclwiLFxuICAgIFwidnNjb1wiLFxuICAgIFwic2ZzXCIsXG4gICAgXCJmeXBcIixcbiAgICBcInMvdVwiLFxuICAgIFwibmdsXCIsXG4gICAgXCJzaW1wXCIsXG4gICAgXCJpeWt5a1wiLFxuICAgIFwic2JcIlxuICAgIC8vIFwiYW5kIGkgb29wXCIsXG4gICAgLy8gXCJza3Nrc2tcIixcbiAgICAvLyBcInlrdHZcIlxuXVxuXG5jb25zdCBvbmVIaXQgPSBbXCJzbGF0dFwiLCBcImFudHNcIl07XG5cblxuY29uc3QgJDIwMTggPSBbXG4gIFwiaW5jZWxcIixcbiAgXCJ1d3VcIixcbiAgXCJtdWtiYW5nXCIsXG4gIFwiaWJmXCIsXG4gIFwiYmxvY2tjaGFpblwiLFxuICBcInJuZ1wiLFxuICBcImppdFwiLFxuICBcImp1dWxpbmdcIixcbiAgXCJnZWt5dW1lXCIsXG4gIFwiemFkZHlcIixcbiAgXCJ3dG1cIixcbiAgXCJ3aWdcIixcbl07XG5cbmNvbnN0ICQyMDE3ID0gW1xuICBcIm5vbiBiaW5hcnlcIixcbiAgXCJiaXRjb2luXCIsXG4gIFwic25vd2ZsYWtlXCIsXG4gIFwicG1veXNcIixcbiAgXCJtYWdhXCIsXG4gIFwid2FzcFwiLFxuICBcImJvdWppZVwiLFxuICBcInRyb2xsc1wiLFxuXTtcblxuY29uc3QgJDIwMTYgPSBbXG4gIFwiZ2FzbGlnaHRpbmdcIixcbiAgXCJzandcIixcbiAgXCJib29saW5cIixcbiAgXCJ3b2tlXCIsXG4gIFwic2hpbGxcIixcbiAgXCJxdWFzaFwiLFxuICBcImJyYW5kaXNoXCIsXG4gIFwidHJpZ2dlcmVkXCIsXG4gIFwic2hvb2tcIixcbiAgXCJiaWdseVwiLFxuICBcImhvbG9zZXh1YWxcIixcbiAgXCJ2ZXhpbmdcIixcbiAgXCJib3VnaFwiLFxuICBcImp1anVcIixcbiAgXCJ3YXZ5XCIsXG5dO1xuXG5jb25zdCAkMjAxNSA9IFtcbiAgXCJzaW1tZXJcIixcbiAgXCJuZXRmbGl4IGFuZCBjaGlsbFwiLFxuICBcImNoYXBvXCIsXG4gIFwic3Rvb3BcIixcbiAgXCJibGFzZVwiLFxuICBcInBsZWJcIixcbiAgXCJsb3drZXlcIixcbiAgXCJ0b21lXCIsXG4gIFwid2FwXCIsXG4gIFwic2h1ZGRlclwiLFxuICBcImJ1cm50XCIsXG4gIFwidmFwZVwiLFxuXTtcblxuLy8gdGFrZXMgaW4gYSBcInRlcm1zLW9ubHlcIiBhcnJheTtcbi8vIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGFjdHVhbCBzZWFyY2ggcXVlcmllcyB0byBiZSBtYWRlIHVzaW5nIHRoZSBHb29nbGUgVHJlbmRzIEFQSVxuZnVuY3Rpb24gc2VhcmNoVGVybXNHZW5lcmF0b3IoYXJyYXkpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtcyA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgICBzZWFyY2hUZXJtcy5wdXNoKGB3aGF0IGRvZXMgJHt0ZXJtfSBtZWFuYCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXJtcyk7XG4gICAgcmV0dXJuIHNlYXJjaFRlcm1zO1xufTtcblxuLy8gSW5wdXQgYXJnIFwicXVlcmllc0FycmF5XCIgaXMgdGhlIGFycmF5IG9mIHNlYXJjaCBxdWVyaWVzOyBcbi8vIFwibWF4TnVtT2ZRdWVyaWVzXCIgaXMgdGhlIG1heCBudW0gb2YgcXVlcmllcyBhbGxvd2VkIG9uIEdvb2dsZSBUcmVuZHMgQVBJO1xuLy8gXCJqb2luSW5kZXhcIiBpcyB0aGUgaW5kZXggb2YgdGhlIGNvbW1vbiBxdWVyeSBvbiB3aGljaCB3ZSBjYWxpYnJhdGUgZWFjaCBzdWJkYXRhc2V0LlxuLy8gRnVuY3Rpb24gc3BsaXR0ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBxdWVyeVN1YnNldHMsIGFuZCBhIGEgdGVybXMtb25seSBhcnJheSByZWFycmFuZ2VkIHdpdGggdGhlIGNvbW1vbiB0ZXJtIGF0IGluZGV4IDAuXG4vLyBFYWNoIHF1ZXJ5U3Vic2V0IGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGNvbW1vbiBxdWVyeSBhbG9uZyB3aXRoIG90aGVyIHF1ZXJpZXM7IHN1YmFycmF5Lmxlbmd0aCA9IG1heE51bU9mUXVlcmllcy5cbi8vIExhdGVyLCBlYWNoIHF1ZXJ5U3Vic2V0IGlzIHVzZWQgdG8gbWFrZSAxIEFQSSBjYWxsIHRvIG9idGFpbiBhIGRhdGFTdWJzZXQuXG5mdW5jdGlvbiBzcGxpdHRlcihxdWVyaWVzQXJyYXksIG1heE51bU9mUXVlcmllcywgam9pbkluZGV4LCB0ZXJtc0FycmF5KSB7XG5cbiAgLy8gcmVtb3ZlIHRoZSBjb21tb24gcXVlcnkgZnJvbSB0aGUgcXVlcmllc0FycmF5IG9uIHdoaWNoIHdlJ2xsIGl0ZXJhdGUgb3ZlciB0byBnZXQgdGhlIHN1YnNldHMgb2YgcXVlcmllcyxcbiAgLy8gYW5kIHNhdmUgdGhlIGNvbW1vbiBxdWVyeSB0byBjb25zdCBqb2luVGVybVxuICBjb25zdCBqb2luVGVybSA9IHF1ZXJpZXNBcnJheS5zcGxpY2Uoam9pbkluZGV4LCAxKTtcblxuICBjb25zdCBpbnRlcnZhbCA9IG1heE51bU9mUXVlcmllcyAtIDE7XG5cbiAgbGV0IHF1ZXJ5U3Vic2V0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcmllc0FycmF5Lmxlbmd0aDsgKSB7XG4gICAgLy8gZWFjaCBzZXQgb2YgcXVlcmllcyBleGNsdWRpbmcgY29tbW9uIHF1ZXJ5XG4gICAgY29uc3QgZ3JvdXAgPSBxdWVyaWVzQXJyYXkuc2xpY2UoaSwgaSArIGludGVydmFsKTtcblxuICAgIC8vIGVhY2ggc3ViYXJyYXkgaGFzIHRoZSBjb21tb24gcXVlcnkgYXMgdGhlIGZpcnN0IGVsZW1lbnQsIGZvbGxvd2VkIGJ5IG90aGVyIHF1ZXJpZXNcbiAgICBjb25zdCBxdWVyeVN1YnNldCA9IGpvaW5UZXJtLmNvbmNhdChncm91cCk7XG5cbiAgICBxdWVyeVN1YnNldHMucHVzaChxdWVyeVN1YnNldCk7XG5cbiAgICAvLyBqdW1wIHRvIHRoZSBuZXh0IGVsZW1lbnQgaW4gYXJyYXkgd2hpY2ggaGFzbid0IHlldCBiZWVuIGFkZGVkIHRvIGEgcXVlcnlTdWJzZXRcbiAgICBpICs9IGludGVydmFsO1xuICB9XG5cbiAgcXVlcmllc0FycmF5ID0gam9pblRlcm0uY29uY2F0KHF1ZXJpZXNBcnJheSk7XG4gIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpLmNvbmNhdCh0ZXJtc0FycmF5KVxuICBcblxuICByZXR1cm4gW3F1ZXJ5U3Vic2V0cywgcXVlcmllc0FycmF5LCB0ZXJtc0FycmF5XTtcbn1cblxuXG5jb25zdCAkMjAxOV9zZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zR2VuZXJhdG9yKCQyMDE5KTtcbmNvbnN0ICQyMDE5X3NwbGl0UXVlcmllcyA9IHNwbGl0dGVyKCQyMDE5X3NlYXJjaFRlcm1zLCA1LCAkMjAxOV9zZWFyY2hUZXJtcy5sZW5ndGggLyAyLCAkMjAxOSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyAkMjAxOV9zcGxpdFF1ZXJpZXMgfTsiLCJpbXBvcnQgeyBhZGRMYWJlbENvb3JkcyB9IGZyb20gXCIuL2xhYmVsQ29vcmRzLmpzXCJcblxuLy8gY3JlYXRpbmcgcmV1c2FibGUgY2hhcnRcbmV4cG9ydCBmdW5jdGlvbiBjaGFydFRlbXBsYXRlKCkge1xuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIHN2Z1xuICBsZXQgd2lkdGggPSA4MDA7XG4gIGxldCBoZWlnaHQgPSA4MDA7XG4gIGxldCBhZGogPSAzMDtcblxuXG4gIGZ1bmN0aW9uIGRyYXcoc2VsZWN0aW9uKSB7XG4gICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgLy8gU0NBTEVTOiB4LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1pbihkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICB9KTtcbiAgICAgIH0pO1xuXG4gICAgICBcbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4gZDMubWF4KGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJzdGFydERhdGVcIiwgc3RhcnREYXRlKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImVuZERhdGVcIiwgZW5kRGF0ZSlcblxuICAgICAgLy8gc2V0IGRvbWFpbiBhbmQgcmFuZ2Ugb2YgeC1heGlzXG4gICAgICBjb25zdCB4U2NhbGUgPSBkM1xuICAgICAgICAuc2NhbGVUaW1lKClcbiAgICAgICAgLmRvbWFpbihbc3RhcnREYXRlLCBlbmREYXRlXSlcbiAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuXG5cbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIH0pO1xuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuXG4gICAgLy8gYWRkIGxhYmVsIGNvb3JkaW5hdGVzIHRvIGRhdGFzZXQncyB0ZXJtU2xpY2VzXG4gICAgICBhZGRMYWJlbENvb3JkcyhkYXRhLCAxMiwgeFNjYWxlLCB5U2NhbGUpO1xuICAgICAgXG5cbiAgICAvLyBWQUxVRVM6IGFkZCBzcGxpbmVkIHZhbHVlc1xuICAgIGZ1bmN0aW9uIGFkZFNwbGluZWRWYWx1ZXMgKCkge1xuICAgICAgICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSwgaSkge1xuICAgICAgICAgIGNvbnN0IGRhdGVzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpOyAvLyBnZXQgYXJyYXkgb2YgZGF0ZXMgbWFwcGVkIG9udG8gdGhlIGJyb3dzZXJcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICAgICAgY29uc3QgcG9pbnRzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHlTY2FsZSh2LnBvaW50KTtcbiAgICAgICAgICB9KTtcbiAgXG4gICAgICBcbiAgICAgICAgICBjb25zdCBzcGxpbmVEYXRlID0gZDMuaW50ZXJwb2xhdGVCYXNpcyhkYXRlcyk7XG4gICAgICAgICAgXG4gICAgICAgICAgY29uc3Qgc3BsaW5lUG9pbnQgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKHBvaW50cyk7XG4gIFxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudERhdGVcIiwgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgMTEzKjIpKVxuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudFBvaW50XCIsIGQzLnF1YW50aXplKHNwbGluZVBvaW50LCAxMTMpKTtcbiAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwicXVhbnRQb2ludG1heFwiLCBkMy5taW4oZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMCkpKTtcbiAgXG4gICAgICAgICAgY29uc3Qgb3JpZ2luYWxOdW1PZlBvaW50cyA9IHRlcm1TbGljZS52YWx1ZXMubGVuZ3RoO1xuICAgICAgICAgIGNvbnN0IGRlZ3JlZSA9IDIxICogb3JpZ2luYWxOdW1PZlBvaW50cztcbiAgXG4gICAgICAgICAgdGVybVNsaWNlLnNwbGluZWQgPSBkMy56aXAoXG4gICAgICAgICAgICAgIGQzLnF1YW50aXplKHNwbGluZURhdGUsIGRlZ3JlZSksXG4gICAgICAgICAgICAgIGQzLnF1YW50aXplKHNwbGluZVBvaW50LCBkZWdyZWUpXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIGNvbnNvbGUubG9nKFwiYWRkc3BsaW5lZHZhbHVlc1wiLCBvcmlnaW5hbE51bU9mUG9pbnRzKVxuICBcbiAgICAgIH0pO1xuXG4gICAgfVxuXG4gICAgYWRkU3BsaW5lZFZhbHVlcygpXG5cblxuICAgICAgLy8gQVhFU1xuICAgICAgY29uc3QgeEF4aXMgPSBkM1xuICAgICAgICAuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgIC8vIC5zY2FsZSh4U2NhbGUpXG4gICAgeEF4aXMudGlja3MoZDMudGltZU1vbnRoLmV2ZXJ5KDEyKSlcbiAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVZXCIpKVxuICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1ZhbHVlcyhbXSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuXG4gICAgICAvLyBBWEVTOiBncmlkbGluZXNcbiAgICAgIGNvbnN0IHlBeGlzR3JpZCA9IGQzXG4gICAgICAgIC5heGlzTGVmdCgpXG4gICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgIC50aWNrU2l6ZSgtd2lkdGgpXG4gICAgICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gICAgICAgIC50aWNrVmFsdWVzKFttYXhZLyAzLCAyICogbWF4WSAvIDMsIG1heFldKVxuICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgLy8gYXBwZW5kIHN2Z1xuICAgICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgICAgLnNlbGVjdCh0aGlzKVxuICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgICAgIC5hdHRyKFxuICAgICAgICAgIFwidmlld0JveFwiLFxuICAgICAgICAgIGAtJHthZGogKiAyfSAtJHthZGogKiAzfSAke3dpZHRoICsgYWRqICogMTB9ICR7aGVpZ2h0ICsgYWRqICogMn1gXG4gICAgICAgIClcbiAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICBcbiAgICAgICAgLy8gZGF0ZSB1cCB0byB3aGljaCBjbGlwIHBhdGggaXMgYXBwZW5kZWRcbiAgICAgICAgY29uc3QgbWlkRGF0ZSA9IG5ldyBEYXRlKDIwMTksIDUsIDMwKTtcbiAgICAgICAgY29uc3QgbWlkTWF4ID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChzKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLmZpbHRlcih2YWwgPT4gdmFsLmRhdGUgPD0gbWlkRGF0ZSksIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaWREYXRlXCIsIG1pZERhdGUpO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1pZE1heFwiLCBtaWRNYXgpO1xuICAgICAgICBcbiAgICAgICAgLy8gYXBwZW5kIGNsaXAgcGF0aFxuICAgICAgICAvLyBzdmdcbiAgICAgICAgLy8gICAuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAgICAgLy8gICAuYXR0cihcImlkXCIsIFwiZGF0ZS1jbGlwXCIpXG4gICAgICAgIC8vICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAgICAgLy8gICAuYXR0cihcInhcIiwgeFNjYWxlKHN0YXJ0RGF0ZSkpXG4gICAgICAgIC8vICAgLmF0dHIoXCJ5XCIsIHlTY2FsZShtYXhZIC0gbWlkTWF4KSlcbiAgICAgICAgLy8gICAuYXR0cihcIndpZHRoXCIsIHhTY2FsZShtaWREYXRlKSlcbiAgICAgICAgLy8gICAuYXR0cihcImhlaWdodFwiLCB5U2NhbGUobWlkTWF4KSk7XG5cbiAgICAgIC8vIGRyYXcgeC1heGlzXG4gICAgICBzdmdcbiAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxuICAgICAgICAuY2FsbCh4QXhpcyk7IC8vIC5jYWxsIGNhbGxzIHRoZSBmdW5jdGlvbiB4QXhpcyBvbiB0aGUgZWxlbWVudHMgb2YgdGhlIHNlbGVjdGlvbiBnXG5cbiAgICAgIC8vIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikudGV4dC5hcHBlbmQoXCJKYW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIiwgZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKSlcblxuICAgICAgLy8gZHJhdyB5LWF4aXNcbiAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpLmF0dHIoXCJjbGFzc1wiLCBcInktYXhpcy1ncmlkXCIpLmNhbGwoeUF4aXNHcmlkKTtcbiAgICAgIC8vIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAvLyAudGV4dChcIkZyZXF1ZW5jeVwiKVxuICAgICAgLy8gLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgLy8gLmF0dHIoXCJ5XCIsIC00MClcbiAgICAgIC8vIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXG5cbiAgICAgIC8vIGRyYXcgbGluZXNcbiAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgLngoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgLy8gICByZXR1cm4geFNjYWxlKGQuZGF0ZSk7XG4gICAgICAgICAgICByZXR1cm4gZFswXTtcbiAgICAgICAgfSlcbiAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vIHJldHVybiB5U2NhbGUoZC5wb2ludCk7XG4gICAgICAgICAgICByZXR1cm4gZFsxXTtcbiAgICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICBsaW5lc1xuICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsaW5lIGxpbmUtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgIHJldHVybiBsaW5lKGQuc3BsaW5lZCk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGDih70gICAgICAgJHtkLnRlcm19YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcbiAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGhvdmVyTGluZXMgPSBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBsaW5lKGQuc3BsaW5lZCl9KVxuXG5cbiAgICAvLyBjb25zdCB0ID0gZDMudHJhbnNpdGlvbigpXG4gICAgLy8gLmRlbGF5KDEpXG4gICAgLy8gLmR1cmF0aW9uKClcblxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZUNoYXJ0XCIsZDMuc2VsZWN0aW9uLmV2ZW50KVxuICAgICAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZSgyMDE3LCAxMSwgMSk7XG4gICAgICAgIGNvbnN0IG5ld0VuZERhdGUgID0gbmV3IERhdGUoMjAxOSwgNiwgMzEpO1xuICAgICAgICAvLyBjb25zdCBleHRlbnQgPSBbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHRlbnRcIiwgZXh0ZW50KVxuXG4gICAgICAgIC8vIGNvbnN0IHRlc3QxID0geFNjYWxlLmludmVydChleHRlbnRbMF0pXG4gICAgICAgIC8vIGNvbnN0IHRlc3QyID0geFNjYWxlLmludmVydChleHRlbnRbMV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ2hhcnRcIiwgdGVzdDEsIHRlc3QyKVxuICAgICAgICB4U2NhbGUuZG9tYWluKG5ld1N0YXJ0RGF0ZSwgbmV3RW5kRGF0ZSlcbiAgICAgICAgLy8gdXBkYXRlIHggYXhpc1xuICAgICAgICBzdmcuY2FsbCh4QXhpcykudHJhbnNpdGlvbigpXG5cbiAgICAgICAgYWRkU3BsaW5lZFZhbHVlcygpXG5cbiAgICAgICAgbGluZXNcbiAgICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIC8vICAgICAvLyByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgIC8vICAgICAvLyByZXR1cm4gWzEsMV1cbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkLnNwbGluZWQpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBcbiAgICB1cGRhdGVDaGFydCgpIFxuXG4gICAgc3ZnLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2RhdGUtY2xpcClcIikuc3R5bGUoJ2ZpbGwnLCBcImxpZ2h0Z3JleVwiKTtcbiAgICBcbiAgICBzdmdcbiAgICAgIC5zZWxlY3RBbGwoXCIuaG92ZXItbGluZSwgLmxhYmVsLCAubGluZVwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2luXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKSAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZFwiLCBkKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2Rlc1wiLCBub2RlcylcbiAgICAgICAgXG4gICAgICAgIC8vIG5vZGVzID0gW2xpbmUoMCksIGxhYmVsKDApLCBob3Zlci1saW5lKDApLCBsaW5lKDEpLCBsYWJlbCgxKSwgaG92ZXItbGluZSgxKS4uLl1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaS8zKVxuICAgICAgICBcbiAgICAgICAgLy8gaW5jcmVhc2Ugb3BhY2l0eSBvZiBib3RoIGxpbmUgYW5kIGxhYmVsXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDNcbiAgICAgICAgICAuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9LCAubGFiZWwtJHtzZWxlY3RlZF9pfWApXG4gICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIFxuICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKClcblxuICAgICAgICAvLyBhcHBseSB0aGlja2VyIHN0cm9rZSBvbmx5IHRvIGxpbmVcbiAgICAgICAgZDMuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9YCkuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgNSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zaXRpb25cIix0KVxuICAgICAgICBcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c291dFwiLCBpKVxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3RlZF9pID0gTWF0aC5mbG9vcihpIC8gMyk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkM1xuICAgICAgICAgIC5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX0sIC5sYWJlbC0ke3NlbGVjdGVkX2l9YClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNClcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSk7XG5cbiAgICAgICAgc2VsZWN0ZWQudHJhbnNpdGlvbigpO1xuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgXG5cbiAgICB9KTtcblxuXG4gICAgfVxuXG4gIC8vIGFjY2Vzc29yIC8gc2V0dGVyIGZ1bmN0aW9ucyBmb3Igd2lkdGggYW5kIGhlaWdodFxuICBkcmF3LndpZHRoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgd2lkdGggPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICBkcmF3LmhlaWdodCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG5cbiAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICAvLyByZXR1cm4gZHJhdyBmdW5jdGlvblxuICByZXR1cm4gZHJhdztcbn1cbiIsImltcG9ydCB0ZXN0X2Z1bmN0aW9uIGZyb20gXCIuL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzXCI7XG5pbXBvcnQgc2ltcGxlX2V4YW1wbGUgZnJvbSBcIi4vcmVmZXJlbmNlcy96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qc1wiO1xuaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi9kYXRhL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydFRlbXBsYXRlIH0gZnJvbSBcIi4vZHJhd0NoYXJ0LmpzXCI7XG5cbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4vLyAvLyBjb25zdCBpbGx1c3RyYXRpb24gPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcblxuLy8gLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG5cbi8vIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBcbiAgLy8vLyBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICBjb25zdCB0ZXN0X3JldHJpZXZlclByb21pc2VzID0gcmV0cmlldmVyKCQyMDE5X3NwbGl0UXVlcmllc1swXSk7XG4gIGNvbnNvbGUubG9nKFwidGVzdF9yZXRyaWV2ZXJQcm9taXNlc1wiLCB0ZXN0X3JldHJpZXZlclByb21pc2VzKVxuICAvLyBsZXQgdGVzdCA9IGNyZWF0ZURhdGFzZXQodGVzdF9yZXRyaWV2ZXJQcm9taXNlcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdpbmRleGpzIFRlc3QnLCB0ZXN0KVxuXG4gIC8vIENBTEwgRFJBVyBDSEFSVCBGVU5DVElPTlxuICBjb25zb2xlLmxvZyhcIiQyMDE5X3NwbGl0cXVlcmllc1wiLCAkMjAxOV9zcGxpdFF1ZXJpZXMpXG4gIFxuXG4gIC8vIGNyZWF0ZURhdGFzZXQoJDIwMTlfc3BsaXRRdWVyaWVzWzFdLCQyMDE5X3NwbGl0UXVlcmllc1syXSwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLy8gLnRoZW4oKGQpID0+IHtcbiAgLy8gICBjb25zb2xlLmxvZyhcIndvb2hvb1wiLCBkKVxuICAvLyAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gIC8vIH0pXG5cblxuXG4gIGNyZWF0ZURhdGFzZXQoJDIwMTlfc3BsaXRRdWVyaWVzWzFdLCQyMDE5X3NwbGl0UXVlcmllc1syXSwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLnRoZW4oKGQpID0+IHtcbiAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShkKS5jYWxsKGNoYXJ0VGVtcGxhdGUoKSlcblxuICAgIC8vIGNvbnN0IHpvb20gPSBkMy56b29tKClcbiAgICAvLyAgICAgICAgICAgICAgICAgLnNjYWxlRXh0ZW50KClcbiAgICAvLyAgICAgICAgICAgICAgICAgLmV4dGVudChbMCwwXSwgWzgwMCw4MDBdKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwic3ZnXCIpLmNhbGwoem9vbSlcbiAgICAvLyBjb25zdCBpdGhpbmsgPSBkMy5zZWxlY3RBbGwoXCIuY2hhcnRcIikuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAvLyAgIHJldHVybiBpID09PSAwXG4gICAgLy8gfSlcbiAgICAvLyBjb25zb2xlLmxvZyhcIml0aGlua1wiLCBpdGhpbmspXG4gICAgLy8gaXRoaW5rXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAvLyAgICAgICAuYXR0cihcImlkXCIsIFwiZGF0ZS1jbGlwXCIpXG4gICAgLy8gICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAvLyAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAvLyAgICAgICAuYXR0cihcInlcIiwgMjAwKVxuICAgIC8vICAgICAgIC5hdHRyKFwid2lkdGhcIiwgNDAwKVxuICAgIC8vICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDYwMCk7XG4gICAgXG4gIH0pXG5cbi8vICBkMy5zZWxlY3QoXCIjc3ZnXCIpLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gIC8vICBjb25zb2xlLmxvZyhcInRlc3Qgd29ya2VkXCIsIHRoaXMpO1xuXG4gIC8vICBkMy5zZWxlY3RBbGwoXCIjZGF0ZS1jbGlwXCIpLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUoZW5kRGF0ZSkpLnRyYW5zaXRpb24oKTtcbi8vICB9KTtcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cbiAgXG4gIFxuLy8gICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbi8vICAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbi8vICAgLy8gICAuZW50ZXIoKVxuLy8gICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbi8vICAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbi8vICAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJyXCIsIDEpXG4vLyAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4vLyAgIC8vICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTsiLCIvLyBmdW5jdGlvbiB0byBzZXBhcmF0ZSBvdXQgbGFiZWxzIHRoYXQgb3ZlcmxhcFxuZnVuY3Rpb24gYWRkTGFiZWxDb29yZHMoZGF0YSwgc3BhY2UsIHhTY2FsZSwgeVNjYWxlKSB7XG4gIGxldCBub0NvbGxpc2lvbnMgPSBmYWxzZTtcblxuICBsZXQgeUxhYmVsVmFsdWVzID0gW107XG4gIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IFtdO1xuXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICBsZXQgbGFzdEluZGV4ID0gcy52YWx1ZXMubGVuZ3RoIC0gMTtcblxuICAgIHMubGFiZWxYID0geFNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgcy5sYWJlbFkgPSB5U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCk7XG5cbiAgICB5TGFiZWxWYWx1ZXMucHVzaChzLmxhYmVsWSk7XG4gICAgeUxhYmVsVmFsdWVzT3JpZ2luYWwucHVzaChzLmxhYmVsWSk7XG4gIH0pO1xuXG4gIHdoaWxlICghbm9Db2xsaXNpb25zKSB7XG4gICAgbm9Db2xsaXNpb25zID0gdHJ1ZTtcblxuICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MSwgaSkgPT4ge1xuICAgICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYyLCBqKSA9PiB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgbGV0IHlEaWZmID0gTWF0aC5hYnMoeUxhYmVsVmFsdWVzW2pdIC0geUxhYmVsVmFsdWVzW2ldKTtcbiAgICAgICAgbGV0IGFkZERpZmYgPSBzcGFjZSAtIHlEaWZmO1xuXG4gICAgICAgIC8vIGxldCBtb3ZpbmdZID0geUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gPj0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPyBqIDogaTtcblxuICAgICAgICBpZiAoaSAhPT0gaiAmJiB5RGlmZiA8IHNwYWNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJqIGhpdFwiLCBpLCBqKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlEaWZmXCIseURpZmYpXG4gICAgICAgICAgbGV0IGdyZWF0ZXJJbmRleCA9XG4gICAgICAgICAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSAtIHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID49IDAgPyBqIDogaTtcblxuICAgICAgICAgIHlMYWJlbFZhbHVlc1tncmVhdGVySW5kZXhdICs9IGFkZERpZmY7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVkXCIsIHlMYWJlbFZhbHVlcylcbiAgICAgICAgICBub0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyh5TGFiZWxWYWx1ZXMpO1xuXG4gIC8vIHJldHVybiB5TGFiZWxWYWx1ZXM7XG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgcy5sYWJlbFkgPSB5TGFiZWxWYWx1ZXNbaV07XG4gIH0pO1xufVxuXG5cbi8vIGFkZExhYmVsQ29vcmRzKFswLCAzLCA2LCA5LCAxMiwgMTVdKVxuLy8gYWRkTGFiZWxDb29yZHMoWzQsIDMsIDEsIDU1LCAyLCAxXSlcbi8vIFsxMywgMTAsMSwgNTUsIDcsIDRdXG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRMYWJlbENvb3JkcyB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RfZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gOTYwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xuICAgICAgICBjb25zdCBhZGogPSAzMDtcblxuICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIFNWRyBmaXJzdCAtIGVkaXRlZCBhZGpcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCAoLTEgKiBhZGopICsgXCIgXCIgKyAoLTEgKiBhZGopICsgXCIgXCIgKyAod2lkdGggKyAzICogYWRqKSArIFwiIFwiICsgKGhlaWdodCArIDMgKiBhZGopKVxuICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWQtJWItJVlcIik7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuXG4gICAgICAgIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX2RhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX3NsaWNlc1wiLCBzbGljZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkEgYXJyYXlcIixzbGljZXNbMF0udmFsdWVzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5J3MgbGVuZ3RoXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgIHhTY2FsZS5kb21haW4oXG4gICAgICAgICAgICAgICAgZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLFxuICAgICAgICAgICAgICAgIGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJucyB1bmRlZmluZWQ6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4YW1wbGVfeFNjYWxlXCIsIHhTY2FsZSgpKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAgICAgICAgICAgY29uc3QgeGF4aXMgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAudGlja3MoZDMudGltZURheS5ldmVyeSgxKSlcbiAgICAgICAgICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJWRcIikpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0yLiBEUkFXSU5HLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHhheGlzKTtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHlheGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoc2xpY2VzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGlkcylcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZXJpZV9sYWJlbFwiKVxuICAgICAgICAgICAgICAgIC8vIC5kYXR1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRlOiBkLmlkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5kYXRlKSArIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIixcIiArICh5U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0ubWVhc3VyZW1lbnQpICsgNSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoXCJTZXJpZSBcIikgKyBkLmlkIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0gKVxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiXG5jb25zdCBkYXRhID0gWzMsIDY2LCAyLCA3NiwgNSwgMjAsIDEsIDMwLCA1MCwgOSwgODAsIDUsIDddO1xuY29uc3QgdGVyciA9IFs1LCA1LCA1LCA1LCA4MCwgODAsIDIsIDMsIDEsIDIsIDYwLCAxLCAyLCAzM11cbmNvbnN0IGZsb3dlciA9IFtbNSwgNV0sIFsxLCAyXSwgWzgwLCA4MF1dXG5jb25zdCBiZWUgPSBbe3ZhbHVlOiA3LCBsYWJlbDoyfSwge3ZhbHVlOiAxLCBsYWJlbDogM31dXG5cbmZ1bmN0aW9uIGNoYXJ0QSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2hhcnRBXCIpXG5cbiAgICBsZXQgd2lkdGggPSAyMDtcbiAgICBsZXQgaGVpZ2h0ID0gMjAwO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxXSkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxMDBdKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoaSk7XG4gICAgICB9KVxuICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZCk7XG4gICAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gbXkoc2VsZWN0aW9uKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgbXlcIilcblxuICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHNjYWxldGVzdCA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGV0ZXN0XCIsIHNjYWxldGVzdClcblxuICAgICAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIHNlbGVjdGVkIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgZGl2IHdpdGggaWQ9XCIjY29udGFpbmVyXCIpXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICogZGF0YS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjaGFydC5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChzdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaW5lKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgbXkud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBteS5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBteTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVfZXhhbXBsZSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInNpbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIHdpZHRoXCIsIGNoYXJ0QSgpLndpZHRoKCkpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyBteVwiLCBjaGFydEEoKSlcbiAgICBcbiAgICAvLyBjb25zdCBjaGFydEIgPSBjaGFydEEoKS5oZWlnaHQoMzAwKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgbXlcIiwgY2hhcnRCKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgaGVpZ2h0XCIsIGNoYXJ0Qi5oZWlnaHQoKSlcblxuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZGF0YSkuY2FsbChjaGFydEEoKSlcblxuICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShiZWUpLmNhbGwoY2hhcnRBKCkpXG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=