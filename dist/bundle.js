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
  var interval = 6;
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
      });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIiwiZGF0YXNldCIsImludGVydmFsIiwiZm9yRWFjaCIsInRlcm1TbGljZSIsImF2ZXJhZ2VDaGVja2VyIiwiYXZlcmFnZXMiLCJ2YWx1ZXMiLCJtYXAiLCJ2IiwiaSIsIm1vdmluZ1RvdGFsIiwic2xpY2UiLCJwb2ludCIsIm1vdmluZ0F2ZXJhZ2UiLCJNYXRoIiwicm91bmQiLCJwdXNoIiwiZGF0ZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJxdWVyaWVzQXJyYXkiLCJ0ZXJtc0FycmF5IiwiYXJyYXlPZlByb21pc2VzIiwiY2FsaWJyYXRlIiwicmF3ZGF0YVNsaWNlIiwicmF3ZGF0YUluZGV4IiwiclZhbHVlSW5kZXgiLCJudW1lcmF0b3IiLCJkZW5vbWluYXRvciIsInZhbHVlIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwibGVuZ3RoIiwicXVlcmllc0FycmF5SW5kZXgiLCJ0ZXJtIiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJuZXdQcm9taXNlc0FycmF5IiwiZmlyc3RTdWJzZXQiLCJyZW1haW5pbmdQcm9taXNlcyIsIlByb21pc2UiLCJhbGwiLCJyZXMiLCIkMjAxOSIsIm9uZUhpdCIsIiQyMDE4IiwiJDIwMTciLCIkMjAxNiIsIiQyMDE1Iiwic2VhcmNoVGVybXNHZW5lcmF0b3IiLCJhcnJheSIsInNlYXJjaFRlcm1zIiwic3BsaXR0ZXIiLCJqb2luSW5kZXgiLCJqb2luVGVybSIsInNwbGljZSIsImdyb3VwIiwicXVlcnlTdWJzZXQiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hUZXJtcyIsIiQyMDE5X3NwbGl0UXVlcmllcyIsIm1vZHVsZSIsImV4cG9ydHMiLCJjaGFydFRlbXBsYXRlIiwid2lkdGgiLCJoZWlnaHQiLCJhZGoiLCJkcmF3Iiwic2VsZWN0aW9uIiwiZWFjaCIsImRhdGEiLCJzdGFydERhdGUiLCJtaW4iLCJkIiwiZW5kRGF0ZSIsIm1heCIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsInJhbmdlIiwibWF4WSIsInMiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJhZGRMYWJlbENvb3JkcyIsImFkZFNwbGluZWRWYWx1ZXMiLCJkYXRlcyIsInBvaW50cyIsInNwbGluZURhdGUiLCJpbnRlcnBvbGF0ZUJhc2lzIiwic3BsaW5lUG9pbnQiLCJvcmlnaW5hbE51bU9mUG9pbnRzIiwiZGVncmVlIiwic3BsaW5lZCIsInppcCIsInF1YW50aXplIiwiY29uc29sZSIsImxvZyIsInhBeGlzIiwiYXhpc0JvdHRvbSIsInRpY2tzIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInRpY2tTaXplT3V0ZXIiLCJ5QXhpcyIsImF4aXNMZWZ0Iiwic2NhbGUiLCJ0aWNrVmFsdWVzIiwieUF4aXNHcmlkIiwidGlja1NpemUiLCJzdmciLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwibWlkRGF0ZSIsIkRhdGUiLCJtaWRNYXgiLCJmaWx0ZXIiLCJ2YWwiLCJjbGlwIiwiY2FsbCIsImxpbmUiLCJ4IiwieSIsImxpbmVzIiwic2VsZWN0QWxsIiwiZW50ZXIiLCJ0ZXh0IiwibGFiZWxYIiwibGFiZWxZIiwiaG92ZXJMaW5lcyIsInVwZGF0ZUNoYXJ0IiwibmV3U3RhcnREYXRlIiwibmV3RW5kRGF0ZSIsIm5ld1N0YXJ0SW5kZXgiLCJuZXdFbmRJbmRleCIsInRyYW5zaXRpb24iLCJkZWxheSIsInN0eWxlIiwib24iLCJub2RlcyIsInNlbGVjdGVkX2kiLCJmbG9vciIsInNlbGVjdGVkIiwicmFpc2UiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iLCJzcGFjZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwibGFzdEluZGV4IiwidjEiLCJ2MiIsImoiLCJ5RGlmZiIsImFicyIsImFkZERpZmYiLCJncmVhdGVySW5kZXgiLCJ0ZXN0X2Z1bmN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7OztBQ2xGQSxVQUFVLG1CQUFPLENBQUMseUpBQThFO0FBQ2hHLDBCQUEwQixtQkFBTyxDQUFDLGdPQUE0Rzs7QUFFOUk7O0FBRUE7QUFDQSwwQkFBMEIsUUFBUztBQUNuQzs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOzs7O0FBSUEsc0M7Ozs7Ozs7Ozs7O0FDbEJBO0FBQ0Esa0NBQWtDLG1CQUFPLENBQUMsMkdBQXNEO0FBQ2hHO0FBQ0EsY0FBYyxRQUFTLG9HQUFvRyxJQUFJLGdEQUFnRDtBQUMvSyxjQUFjLFFBQVMsb0dBQW9HLElBQUksZ0RBQWdEO0FBQy9LO0FBQ0EsY0FBYyxRQUFTLG9tQkFBb21CLGNBQWMsZUFBZSxjQUFjLG9CQUFvQixrQkFBa0IsNkJBQTZCLEVBQUUsaUpBQWlKLG1CQUFtQixFQUFFLFVBQVUsbUJBQW1CLEVBQUUsWUFBWSxxQkFBcUIsRUFBRSxtQkFBbUIsaUJBQWlCLEVBQUUsNkRBQTZELGdCQUFnQixrQkFBa0IsRUFBRSxXQUFXLDhCQUE4QixzQkFBc0IsRUFBRSxZQUFZLDRCQUE0QixpQkFBaUIsRUFBRSxZQUFZLHNDQUFzQyxxQkFBcUIscUJBQXFCLGlCQUFpQixlQUFlLHVCQUF1Qix5QkFBeUIsa0JBQWtCLDJCQUEyQiw4QkFBOEIsMkJBQTJCLEVBQUUsZUFBZSw2Q0FBNkMsb0JBQW9CLG1CQUFtQixtQkFBbUIseUJBQXlCLEVBQUUsY0FBYyxnQkFBZ0IsRUFBRSxvQkFBb0IsOEJBQThCLGlCQUFpQixFQUFFLHVCQUF1QixRQUFRLGVBQWUsa0JBQWtCLEVBQUUscUNBQXFDLGtCQUFrQixFQUFFLG9DQUFvQyxvQkFBb0Isc0JBQXNCLGdDQUFnQyxFQUFFLHdCQUF3QiwyQkFBMkIsb0JBQW9CLHdCQUF3QixnQ0FBZ0MsRUFBRSwwQkFBMEIsc0JBQXNCLEVBQUUsbUJBQW1CLGtCQUFrQixvQkFBb0IsOEJBQThCLEdBQUcscUNBQXFDLG9CQUFvQixzQkFBc0IsZ0NBQWdDLEVBQUUsaUNBQWlDLGtCQUFrQix3Q0FBd0Msb0JBQW9CLEVBQUUscURBQXFELGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLHVCQUF1QixlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsdUJBQXVCLGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLHVCQUF1QixlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsdUJBQXVCLGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLHVCQUF1QixlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsV0FBVyxvQkFBb0IsRUFBRSxpQkFBaUIsZUFBZSxvQkFBb0IsZUFBZSxxQkFBcUIsRUFBRSxZQUFZLGlCQUFpQixvQkFBb0IsRUFBRSx5REFBeUQsa0JBQWtCLHVCQUF1QixvQkFBb0IsRUFBRSwwQkFBMEIsaUJBQWlCLGtCQUFrQixFQUFFLHlEQUF5RCwrQkFBK0IsR0FBRztBQUN4Z0s7QUFDQTs7Ozs7Ozs7Ozs7OztBQ1JhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLFNBQUgsQ0FBYSxXQUFiLENBQWpCLEMsQ0FFQTs7QUFDQSxTQUFTQyxzQkFBVCxDQUFpQ0MsT0FBakMsRUFBMEM7QUFDdEM7QUFDQSxNQUFNQyxRQUFRLEdBQUcsQ0FBakI7QUFFQUQsU0FBTyxDQUFDRSxPQUFSLENBQWdCLFVBQVVDLFNBQVYsRUFBcUI7QUFDakMsUUFBTUMsY0FBYyxHQUFHLEVBQXZCO0FBQ0YsUUFBTUMsUUFBUSxHQUFHRixTQUFTLENBQUNHLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVVDLENBQVYsRUFBYUMsQ0FBYixFQUFnQjtBQUNwRDtBQUNBO0FBQ0E7QUFFQSxVQUFJQSxDQUFDLEdBQUdSLFFBQVIsRUFBa0I7QUFDaEI7QUFDRDs7QUFFRCxVQUFJUyxXQUFXLEdBQUcsQ0FBbEI7QUFFQVAsZUFBUyxDQUFDRyxNQUFWLENBQWlCSyxLQUFqQixDQUF1QkYsQ0FBQyxHQUFHUixRQUEzQixFQUFxQ1EsQ0FBckMsRUFBd0NQLE9BQXhDLENBQWdELFVBQVVNLENBQVYsRUFBYTtBQUMzREUsbUJBQVcsSUFBSUYsQ0FBQyxDQUFDSSxLQUFqQjtBQUNELE9BRkQ7QUFJQSxVQUFNQyxhQUFhLEdBQUdDLElBQUksQ0FBQ0MsS0FBTCxDQUFXTCxXQUFXLEdBQUdULFFBQXpCLENBQXRCO0FBRUFHLG9CQUFjLENBQUNZLElBQWYsQ0FBb0IsQ0FBQ1IsQ0FBQyxDQUFDSSxLQUFILEVBQVVDLGFBQVYsQ0FBcEIsRUFqQm9ELENBbUJwRDtBQUNBOztBQUVBLGFBQU87QUFDTEksWUFBSSxFQUFFVCxDQUFDLENBQUNTLElBREg7QUFFTEwsYUFBSyxFQUFFQztBQUZGLE9BQVA7QUFJRCxLQTFCZ0IsQ0FBakIsQ0FGbUMsQ0E2QnJDOztBQUNFVixhQUFTLENBQUNHLE1BQVYsR0FBbUJELFFBQVEsQ0FBQ00sS0FBVCxDQUFlVixRQUFmLENBQW5CO0FBQ0QsR0EvQkQ7QUFnQ0gsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxTQUFTaUIsU0FBVCxDQUFvQkMsWUFBcEIsRUFBa0M7QUFDaEMsTUFBTUMsaUJBQWlCLEdBQUcsRUFBMUI7QUFFQUQsY0FBWSxDQUFDakIsT0FBYixDQUFxQixVQUFDbUIsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQzFDO0FBQ0FGLHFCQUFpQixDQUFDSixJQUFsQixDQUF1Qm5CLEVBQUUsQ0FBQzBCLElBQUgsbUNBQW1DRCxLQUFuQyxXQUF2QjtBQUNELEdBSEQ7QUFLQSxTQUFPRixpQkFBUDtBQUNELEMsQ0FHRDtBQUNBOzs7QUFDQSxTQUFTSSxhQUFULENBQXdCQyxZQUF4QixFQUFzQ0MsVUFBdEMsRUFBa0RDLGVBQWxELEVBQW1FO0FBRS9EO0FBQ0EsTUFBTTNCLE9BQU8sR0FBRyxFQUFoQixDQUgrRCxDQUsvRDtBQUNBO0FBRUE7QUFDQTs7QUFDQSxXQUFTNEIsU0FBVCxDQUFtQkMsWUFBbkIsRUFBaUNDLFlBQWpDLEVBQStDQyxXQUEvQyxFQUE0RDtBQUV4RCxRQUFJQyxTQUFTLEdBQUdoQyxPQUFPLENBQUMsQ0FBRCxDQUFQLENBQVdNLE1BQVgsQ0FBa0J3QixZQUFsQixFQUFnQ2xCLEtBQWhELENBRndELENBRUQ7O0FBQ3ZELFFBQUlxQixXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssS0FBYixDQUFtQixDQUFuQixDQUFsQixDQUh3RCxDQUdmOztBQUN6QyxRQUFJQyxLQUFKOztBQUVBLFFBQUlGLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUN2QkUsV0FBSyxHQUFHLENBQVI7QUFDQyxLQUZELE1BRU87QUFBQ0EsV0FBSyxHQUFHSCxTQUFTLEdBQUdDLFdBQXBCO0FBQ1A7O0FBRUQsV0FBT25CLElBQUksQ0FBQ0MsS0FBTCxDQUFXLENBQUNjLFlBQVksQ0FBQ0ssS0FBYixDQUFtQkgsV0FBbkIsQ0FBRCxHQUFtQ0ksS0FBOUMsQ0FBUDtBQUNILEdBdEI4RCxDQTBCakU7QUFDQTs7O0FBQ0EsV0FBU0MsT0FBVCxDQUFrQkMsT0FBbEIsRUFBMkJDLFlBQTNCLEVBQXlDO0FBRXZDLFdBQU9ELE9BQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQVNDLE9BQVQsRUFBa0I7QUFFcEMsVUFBSUMsU0FBUyxHQUFHSCxZQUFZLEtBQUssQ0FBakIsR0FBcUIsQ0FBckIsR0FBeUIsQ0FBekMsQ0FGb0MsQ0FFUzs7QUFDN0MsVUFBSUksZUFBZSxHQUFHLENBQXRCLENBSG9DLENBR1g7O0FBRXpCLGFBQU9ELFNBQVMsR0FBR0MsZUFBWixJQUErQjFDLE9BQU8sQ0FBQzJDLE1BQVIsR0FBaUJsQixZQUFZLENBQUNrQixNQUFwRSxFQUE0RTtBQUUxRSxZQUFJQyxpQkFBaUIsR0FBR04sWUFBWSxJQUFJSSxlQUFlLEdBQUcsQ0FBdEIsQ0FBWixHQUF1Q0QsU0FBL0Q7QUFHQSxZQUFNOUIsS0FBSyxHQUFHO0FBQ1prQyxjQUFJLEVBQUVuQixVQUFVLENBQUNrQixpQkFBRCxDQURKO0FBRVp0QyxnQkFBTSxFQUFFa0MsT0FBTyxDQUFDakMsR0FBUixDQUFZLFVBQVVzQixZQUFWLEVBQXdCQyxZQUF4QixFQUFzQztBQUV0RCxnQkFBSWxCLEtBQUssR0FDUDBCLFlBQVksS0FBSyxDQUFqQixHQUFxQixDQUFDVCxZQUFZLENBQUNLLEtBQWIsQ0FBbUJPLFNBQW5CLENBQXRCLEdBQ0liLFNBQVMsQ0FBQ0MsWUFBRCxFQUFlQyxZQUFmLEVBQTZCVyxTQUE3QixDQUZmO0FBSUYsbUJBQU87QUFDTHhCLGtCQUFJLEVBQUVyQixRQUFRLENBQUNpQyxZQUFZLENBQUNpQixpQkFBZCxDQURUO0FBR0xsQyxtQkFBSyxFQUFFQTtBQUhGLGFBQVA7QUFPRCxXQWJPO0FBRkksU0FBZDtBQWtCQVosZUFBTyxDQUFDZ0IsSUFBUixDQUFhTCxLQUFiO0FBRUE4QixpQkFBUyxJQUFJLENBQWI7QUFFRDs7QUFDRCxhQUFPekMsT0FBUDtBQUVELEtBbkNNLENBQVA7QUFxQ0QsR0FuRWdFLENBc0VqRTs7O0FBQ0EsTUFBTStDLGdCQUFnQixHQUFHcEIsZUFBZSxDQUFDcEIsR0FBaEIsQ0FBb0IsVUFBUzhCLE9BQVQsRUFBa0JmLEtBQWxCLEVBQXlCO0FBQ2xFLFdBQU9jLE9BQU8sQ0FBQ0MsT0FBRCxFQUFVZixLQUFWLENBQWQ7QUFDSCxHQUZ3QixDQUF6QjtBQUlBLFNBQU95QixnQkFBZ0IsQ0FBQyxDQUFELENBQWhCLENBQW9CUixJQUFwQixDQUF5QixVQUFBUyxXQUFXLEVBQUk7QUFDM0MsUUFBTUMsaUJBQWlCLEdBQUdGLGdCQUFnQixDQUFDcEMsS0FBakIsQ0FBdUIsQ0FBdkIsQ0FBMUI7QUFDQSxXQUFPdUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLGlCQUFaLENBQVA7QUFDSCxHQUhNLEVBSU5WLElBSk0sQ0FJRCxVQUFBYSxHQUFHLEVBQUk7QUFDWDtBQUVBckQsMEJBQXNCLENBQUNDLE9BQUQsQ0FBdEIsQ0FIVyxDQUlYOztBQUVBLFdBQU9BLE9BQVA7QUFDRCxHQVhNLENBQVA7QUFjRDs7Q0FHRCxnRDs7Ozs7Ozs7Ozs7QUMxSkE7QUFFQSxJQUFNcUQsS0FBSyxHQUFHLENBQ1YsV0FEVSxFQUVWLE1BRlUsRUFHVixLQUhVLEVBSVYsS0FKVSxFQUtWLEtBTFUsRUFNVixLQU5VLEVBT1YsTUFQVSxFQVFWLE9BUlUsRUFTVixJQVRVLENBVVY7QUFDQTtBQUNBO0FBWlUsQ0FBZDtBQWVBLElBQU1DLE1BQU0sR0FBRyxDQUFDLE9BQUQsRUFBVSxNQUFWLENBQWY7QUFHQSxJQUFNQyxLQUFLLEdBQUcsQ0FDWixPQURZLEVBRVosS0FGWSxFQUdaLFNBSFksRUFJWixLQUpZLEVBS1osWUFMWSxFQU1aLEtBTlksRUFPWixLQVBZLEVBUVosU0FSWSxFQVNaLFNBVFksRUFVWixPQVZZLEVBV1osS0FYWSxFQVlaLEtBWlksQ0FBZDtBQWVBLElBQU1DLEtBQUssR0FBRyxDQUNaLFlBRFksRUFFWixTQUZZLEVBR1osV0FIWSxFQUlaLE9BSlksRUFLWixNQUxZLEVBTVosTUFOWSxFQU9aLFFBUFksRUFRWixRQVJZLENBQWQ7QUFXQSxJQUFNQyxLQUFLLEdBQUcsQ0FDWixhQURZLEVBRVosS0FGWSxFQUdaLFFBSFksRUFJWixNQUpZLEVBS1osT0FMWSxFQU1aLE9BTlksRUFPWixVQVBZLEVBUVosV0FSWSxFQVNaLE9BVFksRUFVWixPQVZZLEVBV1osWUFYWSxFQVlaLFFBWlksRUFhWixPQWJZLEVBY1osTUFkWSxFQWVaLE1BZlksQ0FBZDtBQWtCQSxJQUFNQyxLQUFLLEdBQUcsQ0FDWixRQURZLEVBRVosbUJBRlksRUFHWixPQUhZLEVBSVosT0FKWSxFQUtaLE9BTFksRUFNWixNQU5ZLEVBT1osUUFQWSxFQVFaLE1BUlksRUFTWixLQVRZLEVBVVosU0FWWSxFQVdaLE9BWFksRUFZWixNQVpZLENBQWQsQyxDQWVBO0FBQ0E7O0FBQ0EsU0FBU0Msb0JBQVQsQ0FBOEJDLEtBQTlCLEVBQXFDO0FBQ2pDLE1BQU1DLFdBQVcsR0FBRyxFQUFwQjtBQUVBRCxPQUFLLENBQUMxRCxPQUFOLENBQWMsVUFBQzJDLElBQUQsRUFBVTtBQUNwQmdCLGVBQVcsQ0FBQzdDLElBQVoscUJBQThCNkIsSUFBOUI7QUFDSCxHQUZELEVBSGlDLENBT2pDOztBQUNBLFNBQU9nQixXQUFQO0FBQ0g7O0FBQUEsQyxDQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxRQUFULENBQWtCckMsWUFBbEIsRUFBZ0NpQixlQUFoQyxFQUFpRHFCLFNBQWpELEVBQTREckMsVUFBNUQsRUFBd0U7QUFFdEU7QUFDQTtBQUNBLE1BQU1zQyxRQUFRLEdBQUd2QyxZQUFZLENBQUN3QyxNQUFiLENBQW9CRixTQUFwQixFQUErQixDQUEvQixDQUFqQjtBQUVBLE1BQU05RCxRQUFRLEdBQUd5QyxlQUFlLEdBQUcsQ0FBbkM7QUFFQSxNQUFJdkIsWUFBWSxHQUFHLEVBQW5COztBQUVBLE9BQUssSUFBSVYsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2dCLFlBQVksQ0FBQ2tCLE1BQWpDLEdBQTJDO0FBQ3pDO0FBQ0EsUUFBTXVCLEtBQUssR0FBR3pDLFlBQVksQ0FBQ2QsS0FBYixDQUFtQkYsQ0FBbkIsRUFBc0JBLENBQUMsR0FBR1IsUUFBMUIsQ0FBZCxDQUZ5QyxDQUl6Qzs7QUFDQSxRQUFNa0UsV0FBVyxHQUFHSCxRQUFRLENBQUNJLE1BQVQsQ0FBZ0JGLEtBQWhCLENBQXBCO0FBRUEvQyxnQkFBWSxDQUFDSCxJQUFiLENBQWtCbUQsV0FBbEIsRUFQeUMsQ0FTekM7O0FBQ0ExRCxLQUFDLElBQUlSLFFBQUw7QUFDRDs7QUFFRHdCLGNBQVksR0FBR3VDLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQjNDLFlBQWhCLENBQWY7QUFDQUMsWUFBVSxHQUFHQSxVQUFVLENBQUN1QyxNQUFYLENBQWtCRixTQUFsQixFQUE2QixDQUE3QixFQUFnQ0ssTUFBaEMsQ0FBdUMxQyxVQUF2QyxDQUFiO0FBR0EsU0FBTyxDQUFDUCxZQUFELEVBQWVNLFlBQWYsRUFBNkJDLFVBQTdCLENBQVA7QUFDRDs7QUFHRCxJQUFNMkMsaUJBQWlCLEdBQUdWLG9CQUFvQixDQUFDTixLQUFELENBQTlDO0FBQ0EsSUFBTWlCLGtCQUFrQixHQUFHUixRQUFRLENBQUNPLGlCQUFELEVBQW9CLENBQXBCLEVBQXVCQSxpQkFBaUIsQ0FBQzFCLE1BQWxCLEdBQTJCLENBQWxELEVBQXFEVSxLQUFyRCxDQUFuQztBQUVBa0IsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVGLG9CQUFrQixFQUFsQkE7QUFBRixDQUFqQixDOzs7Ozs7Ozs7Ozs7QUNwSUE7QUFBQTtBQUFBO0FBQUE7Q0FFQTs7QUFDTyxTQUFTRyxhQUFULEdBQXlCO0FBQzlCO0FBQ0EsTUFBSUMsS0FBSyxHQUFHLEdBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsR0FBYjtBQUNBLE1BQUlDLEdBQUcsR0FBRyxFQUFWOztBQUdBLFdBQVNDLElBQVQsQ0FBY0MsU0FBZCxFQUF5QjtBQUN2QkEsYUFBUyxDQUFDQyxJQUFWLENBQWUsVUFBVUMsSUFBVixFQUFnQjtBQUU3QjtBQUNBO0FBQ0EsVUFBTUMsU0FBUyxHQUFHcEYsRUFBRSxDQUFDcUYsR0FBSCxDQUFPRixJQUFQLEVBQWEsVUFBVUcsQ0FBVixFQUFhO0FBQzFDLGVBQU90RixFQUFFLENBQUNxRixHQUFILENBQU9DLENBQUMsQ0FBQzdFLE1BQVQsRUFBaUIsVUFBVUUsQ0FBVixFQUFhO0FBQ25DLGlCQUFPQSxDQUFDLENBQUNTLElBQVQ7QUFDRCxTQUZNLENBQVA7QUFHRCxPQUppQixDQUFsQjtBQU9BLFVBQU1tRSxPQUFPLEdBQUd2RixFQUFFLENBQUN3RixHQUFILENBQU9MLElBQVAsRUFBYSxVQUFVRyxDQUFWLEVBQWE7QUFDdEMsZUFBT3RGLEVBQUUsQ0FBQ3dGLEdBQUgsQ0FBT0YsQ0FBQyxDQUFDN0UsTUFBVCxFQUFpQixVQUFVRSxDQUFWLEVBQWE7QUFDakMsaUJBQU9BLENBQUMsQ0FBQ1MsSUFBVDtBQUNELFNBRkksQ0FBUDtBQUdELE9BSmEsQ0FBaEIsQ0FYNkIsQ0FpQjNCO0FBQ0E7QUFFRjs7QUFDQSxVQUFNcUUsTUFBTSxHQUFHekYsRUFBRSxDQUNkMEYsU0FEWSxHQUVaQyxNQUZZLENBRUwsQ0FBQ1AsU0FBRCxFQUFZRyxPQUFaLENBRkssRUFHWkssS0FIWSxDQUdOLENBQUMsQ0FBRCxFQUFJZixLQUFKLENBSE0sQ0FBZixDQXJCNkIsQ0EyQjdCO0FBQ0E7O0FBQ0EsVUFBSWdCLElBQUksR0FBRzdGLEVBQUUsQ0FBQ3dGLEdBQUgsQ0FBT0wsSUFBUCxFQUFhLFVBQVVXLENBQVYsRUFBYTtBQUNuQyxlQUFPOUYsRUFBRSxDQUFDd0YsR0FBSCxDQUFPTSxDQUFDLENBQUNyRixNQUFULEVBQWlCLFVBQVVFLENBQVYsRUFBYTtBQUNuQyxpQkFBT0EsQ0FBQyxDQUFDSSxLQUFUO0FBQ0QsU0FGTSxDQUFQO0FBR0QsT0FKVSxDQUFYLENBN0I2QixDQW1DN0I7O0FBQ0EsVUFBTWdGLE1BQU0sR0FBRy9GLEVBQUUsQ0FBQ2dHLFdBQUgsR0FBaUJMLE1BQWpCLENBQXdCLENBQUMsQ0FBRCxFQUFJRSxJQUFKLENBQXhCLEVBQW1DSSxVQUFuQyxDQUE4QyxDQUFDbkIsTUFBRCxFQUFTLENBQVQsQ0FBOUMsQ0FBZixDQXBDNkIsQ0F1Qy9COztBQUNFb0IsNEVBQWMsQ0FBQ2YsSUFBRCxFQUFPLEVBQVAsRUFBV00sTUFBWCxFQUFtQk0sTUFBbkIsQ0FBZCxDQXhDNkIsQ0EyQy9COztBQUNBLGVBQVNJLGdCQUFULEdBQTZCO0FBQ3pCaEIsWUFBSSxDQUFDOUUsT0FBTCxDQUFhLFVBQVVDLFNBQVYsRUFBcUJNLENBQXJCLEVBQXdCO0FBQ25DLGNBQU13RixLQUFLLEdBQUc5RixTQUFTLENBQUNHLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVVDLENBQVYsRUFBYTtBQUM1QyxtQkFBTzhFLE1BQU0sQ0FBQzlFLENBQUMsQ0FBQ1MsSUFBSCxDQUFiLENBRDRDLENBQ3JCO0FBQzFCLFdBRmEsQ0FBZDtBQUlBLGNBQU1pRixNQUFNLEdBQUcvRixTQUFTLENBQUNHLE1BQVYsQ0FBaUJDLEdBQWpCLENBQXFCLFVBQVVDLENBQVYsRUFBYTtBQUM3QyxtQkFBT29GLE1BQU0sQ0FBQ3BGLENBQUMsQ0FBQ0ksS0FBSCxDQUFiO0FBQ0gsV0FGYyxDQUFmO0FBS0EsY0FBTXVGLFVBQVUsR0FBR3RHLEVBQUUsQ0FBQ3VHLGdCQUFILENBQW9CSCxLQUFwQixDQUFuQjtBQUVBLGNBQU1JLFdBQVcsR0FBR3hHLEVBQUUsQ0FBQ3VHLGdCQUFILENBQW9CRixNQUFwQixDQUFwQixDQVptQyxDQWNuQztBQUNBO0FBQ0E7O0FBRUEsY0FBTUksbUJBQW1CLEdBQUduRyxTQUFTLENBQUNHLE1BQVYsQ0FBaUJxQyxNQUE3QztBQUNBLGNBQU00RCxNQUFNLEdBQUcsS0FBS0QsbUJBQXBCO0FBRUFuRyxtQkFBUyxDQUFDcUcsT0FBVixHQUFvQjNHLEVBQUUsQ0FBQzRHLEdBQUgsQ0FDaEI1RyxFQUFFLENBQUM2RyxRQUFILENBQVlQLFVBQVosRUFBd0JJLE1BQXhCLENBRGdCLEVBRWhCMUcsRUFBRSxDQUFDNkcsUUFBSCxDQUFZTCxXQUFaLEVBQXlCRSxNQUF6QixDQUZnQixDQUFwQjtBQUtBSSxpQkFBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NOLG1CQUFoQztBQUVILFNBNUJDO0FBOEJIOztBQUVETixzQkFBZ0IsR0E3RWUsQ0FnRjdCOztBQUNBLFVBQU1hLEtBQUssR0FBR2hILEVBQUUsQ0FDYmlILFVBRFcsQ0FDQXhCLE1BREEsQ0FBZCxDQWpGNkIsQ0FtRjNCOztBQUNKdUIsV0FBSyxDQUFDRSxLQUFOLENBQVlsSCxFQUFFLENBQUNtSCxTQUFILENBQWFDLEtBQWIsQ0FBbUIsRUFBbkIsQ0FBWixFQUNLQyxVQURMLENBQ2dCckgsRUFBRSxDQUFDc0gsVUFBSCxDQUFjLE9BQWQsQ0FEaEIsRUFFS0MsYUFGTCxDQUVtQixDQUZuQjtBQUlFLFVBQU1DLEtBQUssR0FBR3hILEVBQUUsQ0FBQ3lILFFBQUgsR0FDR0MsS0FESCxDQUNTM0IsTUFEVCxFQUVHNEIsVUFGSCxDQUVjLEVBRmQsRUFHR0osYUFISCxDQUdpQixDQUhqQixDQUFkLENBeEY2QixDQTZGN0I7O0FBQ0EsVUFBTUssU0FBUyxHQUFHNUgsRUFBRSxDQUNqQnlILFFBRGUsR0FFZkMsS0FGZSxDQUVUM0IsTUFGUyxFQUdmOEIsUUFIZSxDQUdOLENBQUNoRCxLQUhLLEVBSWZ3QyxVQUplLENBSUosRUFKSSxFQUtmTSxVQUxlLENBS0osQ0FBQzlCLElBQUksR0FBRSxDQUFQLEVBQVUsSUFBSUEsSUFBSixHQUFXLENBQXJCLEVBQXdCQSxJQUF4QixDQUxJLEVBTWYwQixhQU5lLENBTUQsQ0FOQyxDQUFsQixDQTlGNkIsQ0FzRzdCOztBQUNBLFVBQU1PLEdBQUcsR0FBRzlILEVBQUUsQ0FDWCtILE1BRFMsQ0FDRixJQURFLEVBRVRDLE1BRlMsQ0FFRixLQUZFLEVBR1RDLElBSFMsQ0FHSixPQUhJLEVBR0ssT0FITCxFQUlUQSxJQUpTLENBSUosT0FKSSxFQUlLcEQsS0FKTCxFQUtUb0QsSUFMUyxDQUtKLFFBTEksRUFLTW5ELE1BTE4sRUFNVG1ELElBTlMsQ0FPUixTQVBRLGFBUUpsRCxHQUFHLEdBQUcsQ0FSRixlQVFRQSxHQUFHLEdBQUcsQ0FSZCxjQVFtQkYsS0FBSyxHQUFHRSxHQUFHLEdBQUcsRUFSakMsY0FRdUNELE1BQU0sR0FBR0MsR0FBRyxHQUFHLENBUnRELEdBVVRrRCxJQVZTLENBVUoscUJBVkksRUFVbUIsZUFWbkIsQ0FBWixDQXZHNkIsQ0FtSDNCOztBQUNBLFVBQU1DLE9BQU8sR0FBRyxJQUFJQyxJQUFKLENBQVMsSUFBVCxFQUFlLENBQWYsRUFBa0IsRUFBbEIsQ0FBaEI7QUFDQSxVQUFNQyxNQUFNLEdBQUdwSSxFQUFFLENBQUN3RixHQUFILENBQU9MLElBQVAsRUFBYSxVQUFVVyxDQUFWLEVBQWE7QUFDckMsZUFBTzlGLEVBQUUsQ0FBQ3dGLEdBQUgsQ0FBT00sQ0FBQyxDQUFDckYsTUFBRixDQUFTNEgsTUFBVCxDQUFnQixVQUFBQyxHQUFHO0FBQUEsaUJBQUlBLEdBQUcsQ0FBQ2xILElBQUosSUFBWThHLE9BQWhCO0FBQUEsU0FBbkIsQ0FBUCxFQUFvRCxVQUFVdkgsQ0FBVixFQUFhO0FBQ3BFLGlCQUFPQSxDQUFDLENBQUNJLEtBQVQ7QUFDSCxTQUZNLENBQVA7QUFJSCxPQUxjLENBQWY7QUFNQStGLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJtQixPQUF2QjtBQUNBcEIsYUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQnFCLE1BQXRCLEVBNUgyQixDQThIM0I7O0FBQ0EsVUFBTUcsSUFBSSxHQUFHVCxHQUFHLENBQUNFLE1BQUosQ0FBVyxNQUFYLEVBQ1ZBLE1BRFUsQ0FDSCxVQURHLEVBRVZDLElBRlUsQ0FFTCxJQUZLLEVBRUMsV0FGRCxFQUdWRCxNQUhVLENBR0gsTUFIRyxFQUlWQyxJQUpVLENBSUwsR0FKSyxFQUlBeEMsTUFBTSxDQUFDTCxTQUFELENBSk4sRUFLYjtBQUxhLE9BTVY2QyxJQU5VLENBTUwsR0FOSyxFQU1BbEMsTUFBTSxDQUFDRixJQUFELENBTk4sRUFPYjtBQVBhLE9BUVZvQyxJQVJVLENBUUwsT0FSSyxFQVFJcEQsS0FSSixFQVNWb0QsSUFUVSxDQVNMLFFBVEssRUFTS25ELE1BVEwsQ0FBYixDQS9IMkIsQ0EwSTdCOztBQUNBZ0QsU0FBRyxDQUNBRSxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixRQUZqQixFQUdHQSxJQUhILENBR1EsV0FIUix5QkFHcUNuRCxNQUhyQyxRQUlHMEQsSUFKSCxDQUlReEIsS0FKUixFQTNJNkIsQ0ErSWI7QUFFaEI7QUFDQTtBQUVBOztBQUNBYyxTQUFHLENBQUNFLE1BQUosQ0FBVyxHQUFYLEVBQWdCQyxJQUFoQixDQUFxQixPQUFyQixFQUE4QixhQUE5QixFQUE2Q08sSUFBN0MsQ0FBa0RaLFNBQWxELEVBcko2QixDQXNKN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBOztBQUNBLFVBQU1hLElBQUksR0FBR3pJLEVBQUUsQ0FBQ3lJLElBQUgsR0FDVkMsQ0FEVSxDQUNSLFVBQVUvSCxDQUFWLEVBQWE7QUFFZCxlQUFPOEUsTUFBTSxDQUFDOUUsQ0FBQyxDQUFDUyxJQUFILENBQWIsQ0FGYyxDQUdaO0FBQ0gsT0FMVSxFQU1WdUgsQ0FOVSxDQU1SLFVBQVVoSSxDQUFWLEVBQWE7QUFDWixlQUFPb0YsTUFBTSxDQUFDcEYsQ0FBQyxDQUFDSSxLQUFILENBQWIsQ0FEWSxDQUVaO0FBQ0gsT0FUVSxDQUFiO0FBV0EsVUFBTTZILEtBQUssR0FBR2QsR0FBRyxDQUFDZSxTQUFKLENBQWMsT0FBZCxFQUF1QjFELElBQXZCLENBQTRCQSxJQUE1QixFQUFrQzJELEtBQWxDLEdBQTBDZCxNQUExQyxDQUFpRCxHQUFqRCxDQUFkO0FBRUFZLFdBQUssQ0FDRlosTUFESCxDQUNVLE1BRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsVUFBVTNDLENBQVYsRUFBYTFFLENBQWIsRUFBZ0I7QUFDN0IsbUNBQW9CQSxDQUFwQjtBQUNELE9BSkgsRUFLR3FILElBTEgsQ0FLUSxHQUxSLEVBS2EsVUFBVTNDLENBQVYsRUFBYTtBQUNwQixlQUFPbUQsSUFBSSxDQUFDbkQsQ0FBQyxDQUFDN0UsTUFBSCxDQUFYLENBRG9CLENBRXhCO0FBQ0MsT0FSSCxFQVNHd0gsSUFUSCxDQVNRLFdBVFIsRUFTcUIsaUJBVHJCLEVBM0s2QixDQXNMN0I7O0FBQ0FXLFdBQUssQ0FDRlosTUFESCxDQUNVLE1BRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsVUFBVTNDLENBQVYsRUFBYTFFLENBQWIsRUFBZ0I7QUFDN0IscUNBQXNCQSxDQUF0QjtBQUNELE9BSkgsRUFLR21JLElBTEgsQ0FLUSxVQUFVekQsQ0FBVixFQUFhO0FBQ2pCLHNDQUFrQkEsQ0FBQyxDQUFDdEMsSUFBcEI7QUFDRCxPQVBILEVBUUdpRixJQVJILENBUVEsR0FSUixFQVFhLENBUmIsRUFTR0EsSUFUSCxDQVNRLFdBVFIsRUFTcUIsVUFBVTNDLENBQVYsRUFBYTFFLENBQWIsRUFBZ0I7QUFDL0IsbUNBQW9CMEUsQ0FBQyxDQUFDMEQsTUFBdEIsZUFBaUMxRCxDQUFDLENBQUMyRCxNQUFuQyxPQUQrQixDQUUvQjtBQUNBO0FBQ0E7QUFDSjtBQUNDLE9BZkg7QUFpQkUsVUFBTUMsVUFBVSxHQUFHTixLQUFLLENBQUNaLE1BQU4sQ0FBYSxNQUFiLEVBQ01DLElBRE4sQ0FDVyxPQURYLEVBQ29CLFlBRHBCLEVBRUs7QUFGTCxPQUdNQSxJQUhOLENBR1csR0FIWCxFQUdnQixVQUFTM0MsQ0FBVCxFQUFZO0FBQUUsZUFBT21ELElBQUksQ0FBQ25ELENBQUMsQ0FBQzdFLE1BQUgsQ0FBWDtBQUFzQixPQUhwRCxDQUFuQixDQXhNMkIsQ0E4TS9CO0FBQ0E7QUFDQTs7QUFJQSxlQUFTMEksV0FBVCxHQUF1QjtBQUNuQjtBQUNBLFlBQU1DLFlBQVksR0FBRyxJQUFJakIsSUFBSixDQUFTLElBQVQsRUFBZSxFQUFmLEVBQW1CLENBQW5CLENBQXJCO0FBQ0EsWUFBTWtCLFVBQVUsR0FBSSxJQUFJbEIsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQXBCLENBSG1CLENBSW5CO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0ExQyxjQUFNLENBQUNFLE1BQVAsQ0FBYyxDQUFDeUQsWUFBRCxFQUFlQyxVQUFmLENBQWQ7QUFFQSxZQUFJQyxhQUFKO0FBQ0EsWUFBSUMsV0FBSixDQWJtQixDQWVuQjs7QUFDQSxhQUFLLElBQUkzSSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHdUUsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRMUUsTUFBUixDQUFlcUMsTUFBbkMsRUFBMkNsQyxDQUFDLEVBQTVDLEVBQWdEO0FBQzVDLGNBQUl1RSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVExRSxNQUFSLENBQWVHLENBQWYsRUFBa0JRLElBQWxCLElBQTBCZ0ksWUFBOUIsRUFBNEM7QUFDcENFLHlCQUFhLEdBQUcxSSxDQUFoQjtBQUNBO0FBQ0g7QUFDUjs7QUFFRCxhQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUd1RSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVExRSxNQUFSLENBQWVxQyxNQUFuQyxFQUEyQ2xDLEVBQUMsRUFBNUMsRUFBZ0Q7QUFFNUMsY0FBSXVFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUTFFLE1BQVIsQ0FBZUcsRUFBZixFQUFrQlEsSUFBbEIsR0FBeUJpSSxVQUE3QixFQUF5QztBQUNyQ0UsdUJBQVcsR0FBRzNJLEVBQWQ7QUFDQTtBQUNIO0FBQ0osU0E3QmtCLENBZ0NuQjtBQUNJO0FBQ0E7QUFDSjtBQUVBO0FBRUE7OztBQUdBa0csZUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFxQnVDLGFBQXJCLEVBQW9DQyxXQUFwQyxFQTFDbUIsQ0E0Q25COztBQUNBMUQsWUFBSSxHQUFHN0YsRUFBRSxDQUFDd0YsR0FBSCxDQUFPTCxJQUFQLEVBQWEsVUFBVVcsQ0FBVixFQUFhO0FBQzdCO0FBQ0FBLFdBQUMsR0FBR0EsQ0FBQyxDQUFDckYsTUFBRixDQUFTSyxLQUFULENBQWV3SSxhQUFmLEVBQThCQyxXQUE5QixDQUFKLENBRjZCLENBRzdCO0FBQ0E7O0FBQ0EsaUJBQU92SixFQUFFLENBQUN3RixHQUFILENBQU9NLENBQVAsRUFBVSxVQUFVbkYsQ0FBVixFQUFhO0FBQzFCLG1CQUFPQSxDQUFDLENBQUNJLEtBQVQ7QUFDSCxXQUZNLENBQVA7QUFHSCxTQVJNLENBQVAsQ0E3Q21CLENBdURyQjtBQUNGO0FBQ0k7QUFDQTs7QUFDQStHLFdBQUcsQ0FBQ0MsTUFBSixDQUFXLFNBQVgsRUFBc0JTLElBQXRCLENBQTJCeEIsS0FBM0IsRUFBa0N3QyxVQUFsQyxHQUErQ0MsS0FBL0MsQ0FBcUQsSUFBckQsRUEzRG1CLENBNERuQjtBQUVBOztBQUNBM0MsZUFBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQmhCLE1BQU0sQ0FBQ0YsSUFBRCxDQUE1QjtBQUNBRSxjQUFNLENBQUNKLE1BQVAsQ0FBYyxDQUFDLENBQUQsRUFBSUUsSUFBSixDQUFkLEVBaEVtQixDQWlFbkI7QUFFQTs7QUFDQStDLGFBQUssQ0FBQ0MsU0FBTixDQUFnQixPQUFoQixFQUVHVyxVQUZILEdBRWdCQyxLQUZoQixDQUVzQixJQUZ0QixFQUdHeEIsSUFISCxDQUdRLEdBSFIsRUFHYSxVQUFVM0MsQ0FBVixFQUFhO0FBQ3RCO0FBQ0ksaUJBQU9tRCxJQUFJLENBQUNuRCxDQUFDLENBQUM3RSxNQUFILENBQVg7QUFDSCxTQU5MO0FBU0g7O0FBRUQwSSxpQkFBVztBQUVYckIsU0FBRyxDQUFDRyxJQUFKLENBQVMsV0FBVCxFQUFzQixpQkFBdEIsRUFBeUN5QixLQUF6QyxDQUErQyxNQUEvQyxFQUF1RCxXQUF2RDtBQUVBNUIsU0FBRyxDQUNBZSxTQURILENBQ2EsNEJBRGIsRUFFR2MsRUFGSCxDQUVNLFdBRk4sRUFFbUIsVUFBVXJFLENBQVYsRUFBYTFFLENBQWIsRUFBZ0JnSixLQUFoQixFQUF1QjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQSxZQUFNQyxVQUFVLEdBQUc1SSxJQUFJLENBQUM2SSxLQUFMLENBQVdsSixDQUFDLEdBQUMsQ0FBYixDQUFuQixDQVJzQyxDQVV0Qzs7QUFDQSxZQUFNbUosUUFBUSxHQUFHL0osRUFBRSxDQUNoQjZJLFNBRGMsaUJBQ0tnQixVQURMLHNCQUMyQkEsVUFEM0IsR0FFZEcsS0FGYyxHQUdkTixLQUhjLENBR1IsU0FIUSxFQUdHLENBSEgsQ0FBakI7QUFLQUssZ0JBQVEsQ0FBQ1AsVUFBVCxHQWhCc0MsQ0FrQnRDOztBQUNBeEosVUFBRSxDQUFDNkksU0FBSCxpQkFBc0JnQixVQUF0QixHQUFvQ0gsS0FBcEMsQ0FBMEMsY0FBMUMsRUFBMEQsQ0FBMUQsRUFuQnNDLENBcUJ0QztBQUVILE9BekJELEVBMEJDQyxFQTFCRCxDQTBCSSxVQTFCSixFQTBCZ0IsVUFBVXJFLENBQVYsRUFBYTFFLENBQWIsRUFBZ0JnSixLQUFoQixFQUF1QjtBQUVuQztBQUVBLFlBQU1DLFVBQVUsR0FBRzVJLElBQUksQ0FBQzZJLEtBQUwsQ0FBV2xKLENBQUMsR0FBRyxDQUFmLENBQW5CO0FBRUEsWUFBTW1KLFFBQVEsR0FBRy9KLEVBQUUsQ0FDaEI2SSxTQURjLGlCQUNLZ0IsVUFETCxzQkFDMkJBLFVBRDNCLEdBRWRILEtBRmMsQ0FFUixTQUZRLEVBRUcsR0FGSCxFQUdkQSxLQUhjLENBR1IsY0FIUSxFQUdRLENBSFIsQ0FBakI7QUFLQUssZ0JBQVEsQ0FBQ1AsVUFBVDtBQUNILE9BdENEO0FBZ0RDLEtBdlZEO0FBMFZDLEdBbFcyQixDQW9XOUI7OztBQUNBeEUsTUFBSSxDQUFDSCxLQUFMLEdBQWEsVUFBVXhDLEtBQVYsRUFBaUI7QUFDNUIsUUFBSSxDQUFDNEgsU0FBUyxDQUFDbkgsTUFBZixFQUF1QjtBQUNyQixhQUFPK0IsS0FBUDtBQUNEOztBQUVEQSxTQUFLLEdBQUd4QyxLQUFSO0FBQ0EsV0FBTzJDLElBQVA7QUFDRCxHQVBEOztBQVNBQSxNQUFJLENBQUNGLE1BQUwsR0FBYyxVQUFVekMsS0FBVixFQUFpQjtBQUM3QixRQUFJLENBQUM0SCxTQUFTLENBQUNuSCxNQUFmLEVBQXVCO0FBQ3JCLGFBQU9nQyxNQUFQO0FBQ0Q7O0FBRURBLFVBQU0sR0FBR3pDLEtBQVQ7QUFDQSxXQUFPMkMsSUFBUDtBQUNELEdBUEQsQ0E5VzhCLENBdVg5Qjs7O0FBQ0EsU0FBT0EsSUFBUDtBQUNELEM7Ozs7Ozs7Ozs7OztBQzVYRDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtDQUdBOztBQUNBO0NBR0E7O0FBQ0E7Q0FJQTtBQUNBO0FBQ0E7QUFFQTtBQUVBOztBQUVBa0YsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUV4RHJELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaLEVBRndELENBSXhEOztBQUVBLE1BQU1xRCxzQkFBc0IsR0FBRy9JLDBFQUFTLENBQUNvRCxpRUFBa0IsQ0FBQyxDQUFELENBQW5CLENBQXhDO0FBQ0FxQyxTQUFPLENBQUNDLEdBQVIsQ0FBWSx3QkFBWixFQUFzQ3FELHNCQUF0QyxFQVB3RCxDQVF4RDtBQUNBO0FBRUE7O0FBQ0F0RCxTQUFPLENBQUNDLEdBQVIsQ0FBWSxvQkFBWixFQUFrQ3RDLGlFQUFsQyxFQVp3RCxDQWV4RDtBQUNBO0FBQ0U7QUFDQTs7QUFJQTlDLGdGQUFhLENBQUM4QyxpRUFBa0IsQ0FBQyxDQUFELENBQW5CLEVBQXVCQSxpRUFBa0IsQ0FBQyxDQUFELENBQXpDLEVBQThDMkYsc0JBQTlDLENBQWIsQ0FDQzFILElBREQsQ0FDTSxVQUFDNEMsQ0FBRCxFQUFPO0FBQ1R3QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxRQUFaLEVBQXNCekIsQ0FBdEI7QUFDSnRGLE1BQUUsQ0FBQytILE1BQUgsQ0FBVSxhQUFWLEVBQXlCc0MsS0FBekIsQ0FBK0IvRSxDQUEvQixFQUFrQ2tELElBQWxDLENBQXVDNUQsbUVBQWEsRUFBcEQsRUFGYSxDQUliO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUQsR0F2QkMsRUF0QnNELENBK0MxRDtBQUNFO0FBRUE7QUFDRjtBQUVFO0FBQ0E7QUFFRCxDQXhERCxFLENBNkRBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCOzs7Ozs7Ozs7OztBQzNGQTtBQUNBLFNBQVNzQixjQUFULENBQXdCZixJQUF4QixFQUE4Qm1GLEtBQTlCLEVBQXFDN0UsTUFBckMsRUFBNkNNLE1BQTdDLEVBQXFEO0FBQ25ELE1BQUl3RSxZQUFZLEdBQUcsS0FBbkI7QUFFQSxNQUFJQyxZQUFZLEdBQUcsRUFBbkI7QUFDQSxNQUFJQyxvQkFBb0IsR0FBRyxFQUEzQixDQUptRCxDQU1uRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUF0RixNQUFJLENBQUM5RSxPQUFMLENBQWEsVUFBVXlGLENBQVYsRUFBYTtBQUN4QixRQUFJNEUsU0FBUyxHQUFHNUUsQ0FBQyxDQUFDckYsTUFBRixDQUFTcUMsTUFBVCxHQUFrQixDQUFsQztBQUVBZ0QsS0FBQyxDQUFDa0QsTUFBRixHQUFXdkQsTUFBTSxDQUFDSyxDQUFDLENBQUNyRixNQUFGLENBQVNpSyxTQUFULEVBQW9CdEosSUFBckIsQ0FBakI7QUFDQTBFLEtBQUMsQ0FBQ21ELE1BQUYsR0FBV2xELE1BQU0sQ0FBQ0QsQ0FBQyxDQUFDckYsTUFBRixDQUFTaUssU0FBVCxFQUFvQjNKLEtBQXJCLENBQWpCO0FBRUF5SixnQkFBWSxDQUFDckosSUFBYixDQUFrQjJFLENBQUMsQ0FBQ21ELE1BQXBCO0FBQ0F3Qix3QkFBb0IsQ0FBQ3RKLElBQXJCLENBQTBCMkUsQ0FBQyxDQUFDbUQsTUFBNUI7QUFDRCxHQVJEOztBQVVBLFNBQU8sQ0FBQ3NCLFlBQVIsRUFBc0I7QUFDcEJBLGdCQUFZLEdBQUcsSUFBZjtBQUVBQyxnQkFBWSxDQUFDbkssT0FBYixDQUFxQixVQUFDc0ssRUFBRCxFQUFLL0osQ0FBTCxFQUFXO0FBQzlCNEosa0JBQVksQ0FBQ25LLE9BQWIsQ0FBcUIsVUFBQ3VLLEVBQUQsRUFBS0MsQ0FBTCxFQUFXO0FBQzlCO0FBRUEsWUFBSUMsS0FBSyxHQUFHN0osSUFBSSxDQUFDOEosR0FBTCxDQUFTUCxZQUFZLENBQUNLLENBQUQsQ0FBWixHQUFrQkwsWUFBWSxDQUFDNUosQ0FBRCxDQUF2QyxDQUFaO0FBQ0EsWUFBSW9LLE9BQU8sR0FBR1YsS0FBSyxHQUFHUSxLQUF0QixDQUo4QixDQU05Qjs7QUFFQSxZQUFJbEssQ0FBQyxLQUFLaUssQ0FBTixJQUFXQyxLQUFLLEdBQUdSLEtBQXZCLEVBQThCO0FBQzVCO0FBQ0E7QUFDQSxjQUFJVyxZQUFZLEdBQ2RSLG9CQUFvQixDQUFDSSxDQUFELENBQXBCLEdBQTBCSixvQkFBb0IsQ0FBQzdKLENBQUQsQ0FBOUMsSUFBcUQsQ0FBckQsR0FBeURpSyxDQUF6RCxHQUE2RGpLLENBRC9EO0FBR0E0SixzQkFBWSxDQUFDUyxZQUFELENBQVosSUFBOEJELE9BQTlCLENBTjRCLENBTzVCOztBQUNBVCxzQkFBWSxHQUFHLEtBQWY7QUFDRDtBQUNGLE9BbEJEO0FBbUJELEtBcEJEO0FBcUJELEdBL0NrRCxDQWlEbkQ7QUFFQTs7O0FBRUFwRixNQUFJLENBQUM5RSxPQUFMLENBQWEsVUFBVXlGLENBQVYsRUFBYWxGLENBQWIsRUFBZ0I7QUFDM0JrRixLQUFDLENBQUNtRCxNQUFGLEdBQVd1QixZQUFZLENBQUM1SixDQUFELENBQXZCO0FBQ0QsR0FGRDtBQUdELEMsQ0FHRDtBQUNBO0FBQ0E7OztBQUVBOEQsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUV1QixnQkFBYyxFQUFkQTtBQUFGLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ2hFQTtBQUFBO0FBQWUsU0FBU2dGLGFBQVQsR0FBMEI7QUFFckM7QUFDSXBFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLCtCQUFaO0FBRUEsTUFBTWxDLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFDQSxNQUFNcUcsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxNQUFNckcsR0FBRyxHQUFHLEVBQVosQ0FUaUMsQ0FXakM7O0FBQ0EsTUFBTStDLEdBQUcsR0FBRzlILEVBQUUsQ0FBQytILE1BQUgsQ0FBVSxZQUFWLEVBQXdCQyxNQUF4QixDQUErQixLQUEvQixFQUNQQyxJQURPLENBQ0YscUJBREUsRUFDcUIsZUFEckIsRUFFUEEsSUFGTyxDQUVGLFNBRkUsRUFFVSxDQUFDLENBQUQsR0FBS2xELEdBQU4sR0FBYSxHQUFiLEdBQW9CLENBQUMsQ0FBRCxHQUFLQSxHQUF6QixHQUFnQyxHQUFoQyxJQUF1Q0YsS0FBSyxHQUFHLElBQUlFLEdBQW5ELElBQTBELEdBQTFELElBQWlFRCxNQUFNLEdBQUcsSUFBSUMsR0FBOUUsQ0FGVCxFQUdQMkUsS0FITyxDQUdELFNBSEMsRUFHVTBCLE9BSFYsRUFJUDFCLEtBSk8sQ0FJRCxRQUpDLEVBSVN5QixNQUpULEVBS1BFLE9BTE8sQ0FLQyxhQUxELEVBS2dCLElBTGhCLENBQVosQ0FaaUMsQ0FtQmpDOztBQUVBLE1BQU10TCxRQUFRLEdBQUdDLEVBQUUsQ0FBQ0MsU0FBSCxDQUFhLFVBQWIsQ0FBakI7QUFDQSxNQUFNRSxPQUFPLEdBQUdILEVBQUUsQ0FBQ3NMLEdBQUgsQ0FBTyx3QkFBUCxDQUFoQjtBQUVBbkwsU0FBTyxDQUFDdUMsSUFBUixDQUFhLFVBQVV5QyxJQUFWLEVBQWdCO0FBQ3pCMkIsV0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QjVCLElBQTVCO0FBQ0EsUUFBTW9HLE1BQU0sR0FBR3BHLElBQUksQ0FBQ3FHLE9BQUwsQ0FBYTFLLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JKLEdBQXRCLENBQTBCLFVBQVUrSyxFQUFWLEVBQWM7QUFDbkQsYUFBTztBQUNIQSxVQUFFLEVBQUVBLEVBREQ7QUFFSGhMLGNBQU0sRUFBRTBFLElBQUksQ0FBQ3pFLEdBQUwsQ0FBUyxVQUFVNEUsQ0FBVixFQUFhO0FBQzFCLGlCQUFPO0FBQ0hsRSxnQkFBSSxFQUFFckIsUUFBUSxDQUFDdUYsQ0FBQyxDQUFDbEUsSUFBSCxDQURYO0FBRUhzSyx1QkFBVyxFQUFFLENBQUNwRyxDQUFDLENBQUNtRyxFQUFEO0FBRlosV0FBUDtBQUlILFNBTE87QUFGTCxPQUFQO0FBU0gsS0FWYyxDQUFmLENBRnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQTNFLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCd0UsTUFBOUIsRUFsQnlCLENBbUJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFDQSxRQUFNOUYsTUFBTSxHQUFHekYsRUFBRSxDQUFDMEYsU0FBSCxHQUFlRSxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJZixLQUFKLENBQXJCLENBQWY7QUFDQSxRQUFNa0IsTUFBTSxHQUFHL0YsRUFBRSxDQUFDZ0csV0FBSCxHQUFpQkMsVUFBakIsQ0FBNEIsQ0FBQ25CLE1BQUQsRUFBUyxDQUFULENBQTVCLENBQWY7QUFFQVcsVUFBTSxDQUFDRSxNQUFQLENBQ0kzRixFQUFFLENBQUMyTCxNQUFILENBQVV4RyxJQUFWLEVBQWdCLFVBQVVHLENBQVYsRUFBYTtBQUN6QixhQUFPdkYsUUFBUSxDQUFDdUYsQ0FBQyxDQUFDbEUsSUFBSCxDQUFmO0FBQ0gsS0FGRCxDQURKO0FBTUEyRSxVQUFNLENBQUNKLE1BQVAsQ0FBYyxDQUFDLENBQUQsRUFDVjNGLEVBQUUsQ0FBQ3dGLEdBQUgsQ0FBTytGLE1BQVAsRUFBZSxVQUFVSyxDQUFWLEVBQWE7QUFDeEIsYUFBTzVMLEVBQUUsQ0FBQ3dGLEdBQUgsQ0FBT29HLENBQUMsQ0FBQ25MLE1BQVQsRUFBaUIsVUFBVTZFLENBQVYsRUFBYTtBQUNqQyxlQUFPQSxDQUFDLENBQUNvRyxXQUFGLEdBQWdCLENBQXZCO0FBQ0gsT0FGTSxDQUFQO0FBR0gsS0FKRCxDQURVLENBQWQsRUF6Q3lCLENBaUR6QjtBQUNBO0FBR0E7O0FBRUEsUUFBTUcsS0FBSyxHQUFHN0wsRUFBRSxDQUFDeUgsUUFBSCxHQUFjUCxLQUFkLENBQW9CcUUsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVOUssTUFBVixDQUFpQnFDLE1BQXJDLEVBQTZDNEUsS0FBN0MsQ0FBbUQzQixNQUFuRCxDQUFkO0FBRUEsUUFBTStGLEtBQUssR0FBRzlMLEVBQUUsQ0FDWGlILFVBRFMsR0FFVEMsS0FGUyxDQUVIbEgsRUFBRSxDQUFDK0wsT0FBSCxDQUFXM0UsS0FBWCxDQUFpQixDQUFqQixDQUZHLEVBR1RDLFVBSFMsQ0FHRXJILEVBQUUsQ0FBQ3NILFVBQUgsQ0FBYyxPQUFkLENBSEYsRUFJVEksS0FKUyxDQUlIakMsTUFKRyxDQUFkLENBekR5QixDQStEekI7O0FBRUEsUUFBTWdELElBQUksR0FBR3pJLEVBQUUsQ0FBQ3lJLElBQUgsR0FDUkMsQ0FEUSxDQUNOLFVBQVVwRCxDQUFWLEVBQWE7QUFBRSxhQUFPRyxNQUFNLENBQUNILENBQUMsQ0FBQ2xFLElBQUgsQ0FBYjtBQUF3QixLQURqQyxFQUVSdUgsQ0FGUSxDQUVOLFVBQVVyRCxDQUFWLEVBQWE7QUFBRSxhQUFPUyxNQUFNLENBQUNULENBQUMsQ0FBQ29HLFdBQUgsQ0FBYjtBQUErQixLQUZ4QyxDQUFiO0FBSUEsUUFBSUQsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsUUFBTU8sR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBWTtBQUNwQixhQUFPLFVBQVVQLEVBQUUsRUFBbkI7QUFDSCxLQUZELENBdEV5QixDQTJFekI7QUFFQTs7O0FBR0EzRCxPQUFHLENBQ0VFLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVSxPQUZWLEVBRW1CLE1BRm5CLEVBR0tBLElBSEwsQ0FHVSxXQUhWLEVBR3VCLGlCQUFpQm5ELE1BQWpCLEdBQTBCLEdBSGpELEVBSUswRCxJQUpMLENBSVVzRCxLQUpWO0FBTUFoRSxPQUFHLENBQ0VFLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVSxPQUZWLEVBRW1CLE1BRm5CLEVBR0tPLElBSEwsQ0FHVXFELEtBSFYsRUFJSzdELE1BSkwsQ0FJWSxNQUpaLEVBS0tDLElBTEwsQ0FLVSxXQUxWLEVBS3VCLGFBTHZCLEVBTUtBLElBTkwsQ0FNVSxJQU5WLEVBTWdCLFFBTmhCLEVBT0tBLElBUEwsQ0FPVSxHQVBWLEVBT2UsQ0FQZixFQVFLeUIsS0FSTCxDQVFXLGFBUlgsRUFRMEIsS0FSMUIsRUFTS1gsSUFUTCxDQVNVLFdBVFYsRUF0RnlCLENBaUd6Qjs7QUFFQSxRQUFNSCxLQUFLLEdBQUdkLEdBQUcsQ0FBQ2UsU0FBSixDQUFjLE9BQWQsRUFDVDFELElBRFMsQ0FDSm9HLE1BREksRUFFVHpDLEtBRlMsR0FHVGQsTUFIUyxDQUdGLEdBSEUsQ0FBZDtBQUtBWSxTQUFLLENBQUNaLE1BQU4sQ0FBYSxNQUFiLEVBQ0tDLElBREwsQ0FDVSxPQURWLEVBQ21CK0QsR0FEbkIsRUFFSy9ELElBRkwsQ0FFVSxHQUZWLEVBRWUsVUFBVTNDLENBQVYsRUFBYTtBQUFFLGFBQU9tRCxJQUFJLENBQUNuRCxDQUFDLENBQUM3RSxNQUFILENBQVg7QUFBd0IsS0FGdEQ7QUFJQW1JLFNBQUssQ0FBQ1osTUFBTixDQUFhLE1BQWIsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUIsYUFEbkIsRUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQSixLQVFLQSxJQVJMLENBUVUsV0FSVixFQVF1QixVQUFVM0MsQ0FBVixFQUFhO0FBQzVCLGFBQU8sZ0JBQWdCRyxNQUFNLENBQUNILENBQUMsQ0FBQzdFLE1BQUYsQ0FBUzZFLENBQUMsQ0FBQzdFLE1BQUYsQ0FBU3FDLE1BQVQsR0FBa0IsQ0FBM0IsRUFBOEIxQixJQUEvQixDQUFOLEdBQTZDLEVBQTdELElBQ0QsR0FEQyxJQUNNMkUsTUFBTSxDQUFDVCxDQUFDLENBQUM3RSxNQUFGLENBQVM2RSxDQUFDLENBQUM3RSxNQUFGLENBQVNxQyxNQUFULEdBQWtCLENBQTNCLEVBQThCNEksV0FBL0IsQ0FBTixHQUFvRCxDQUQxRCxJQUMrRCxHQUR0RTtBQUVILEtBWEwsRUFZS3pELElBWkwsQ0FZVSxHQVpWLEVBWWUsQ0FaZixFQWFLYyxJQWJMLENBYVUsVUFBVXpELENBQVYsRUFBYTtBQUFFLGFBQVEsUUFBRCxHQUFhQSxDQUFDLENBQUNtRyxFQUF0QjtBQUEwQixLQWJuRCxFQTVHeUIsQ0EwSHJCO0FBQ1AsR0EzSEQsRUF4QmlDLENBcUpyQztBQUNILEM7Ozs7Ozs7Ozs7OztBQ3JKRDtBQUFBO0FBQUEsSUFBTXRHLElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxFQUFKLEVBQVEsQ0FBUixFQUFXLEVBQVgsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLEVBQXNCLENBQXRCLEVBQXlCLEVBQXpCLEVBQTZCLEVBQTdCLEVBQWlDLENBQWpDLEVBQW9DLEVBQXBDLEVBQXdDLENBQXhDLEVBQTJDLENBQTNDLENBQWI7QUFDQSxJQUFNOEcsSUFBSSxHQUFHLENBQUMsQ0FBRCxFQUFJLENBQUosRUFBTyxDQUFQLEVBQVUsQ0FBVixFQUFhLEVBQWIsRUFBaUIsRUFBakIsRUFBcUIsQ0FBckIsRUFBd0IsQ0FBeEIsRUFBMkIsQ0FBM0IsRUFBOEIsQ0FBOUIsRUFBaUMsRUFBakMsRUFBcUMsQ0FBckMsRUFBd0MsQ0FBeEMsRUFBMkMsRUFBM0MsQ0FBYjtBQUNBLElBQU1DLE1BQU0sR0FBRyxDQUFDLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBRCxFQUFTLENBQUMsQ0FBRCxFQUFJLENBQUosQ0FBVCxFQUFpQixDQUFDLEVBQUQsRUFBSyxFQUFMLENBQWpCLENBQWY7QUFDQSxJQUFNQyxHQUFHLEdBQUcsQ0FBQztBQUFDOUosT0FBSyxFQUFFLENBQVI7QUFBVytKLE9BQUssRUFBQztBQUFqQixDQUFELEVBQXNCO0FBQUMvSixPQUFLLEVBQUUsQ0FBUjtBQUFXK0osT0FBSyxFQUFFO0FBQWxCLENBQXRCLENBQVo7O0FBRUEsU0FBU0MsTUFBVCxHQUFtQjtBQUVmdkYsU0FBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVo7QUFFQSxNQUFJbEMsS0FBSyxHQUFHLEVBQVo7QUFDQSxNQUFJQyxNQUFNLEdBQUcsR0FBYjtBQUVBLE1BQU00RCxDQUFDLEdBQUcxSSxFQUFFLENBQUNnRyxXQUFILEdBQWlCTCxNQUFqQixDQUF3QixDQUFDLENBQUQsRUFBSSxDQUFKLENBQXhCLEVBQWdDQyxLQUFoQyxDQUFzQyxDQUFDLENBQUQsRUFBSWYsS0FBSixDQUF0QyxDQUFWO0FBQ0EsTUFBTThELENBQUMsR0FBRzNJLEVBQUUsQ0FBQ2dHLFdBQUgsR0FBaUJMLE1BQWpCLENBQXdCLENBQUMsQ0FBRCxFQUFJLEdBQUosQ0FBeEIsRUFBa0NNLFVBQWxDLENBQTZDLENBQUNuQixNQUFELEVBQVMsQ0FBVCxDQUE3QyxDQUFWO0FBRUEsTUFBTTJELElBQUksR0FBR3pJLEVBQUUsQ0FDWnlJLElBRFUsR0FFVkMsQ0FGVSxDQUVSLFVBQVVwRCxDQUFWLEVBQWExRSxDQUFiLEVBQWdCO0FBQ2pCLFdBQU84SCxDQUFDLENBQUM5SCxDQUFELENBQVI7QUFDRCxHQUpVLEVBS1YrSCxDQUxVLENBS1IsVUFBVXJELENBQVYsRUFBYTtBQUNkLFdBQU9xRCxDQUFDLENBQUNyRCxDQUFELENBQVI7QUFDRCxHQVBVLENBQWI7O0FBVUEsV0FBU2dILEVBQVQsQ0FBWXJILFNBQVosRUFBdUI7QUFFbkI2QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBRUE5QixhQUFTLENBQUNDLElBQVYsQ0FBZSxVQUFVQyxJQUFWLEVBQWdCO0FBRTNCMkIsYUFBTyxDQUFDQyxHQUFSLENBQVksTUFBWixFQUFvQixJQUFwQjtBQUNBLFVBQU13RixTQUFTLEdBQUd2TSxFQUFFLENBQUNxRixHQUFILENBQU9GLElBQVAsRUFBYSxVQUFTRyxDQUFULEVBQVc7QUFDeEMsZUFBT0EsQ0FBQyxDQUFDakQsS0FBVDtBQUNELE9BRmlCLENBQWxCO0FBR0F5RSxhQUFPLENBQUNDLEdBQVIsQ0FBWSxXQUFaLEVBQXlCd0YsU0FBekIsRUFOMkIsQ0FRM0I7O0FBQ0EsVUFBTUMsS0FBSyxHQUFHeE0sRUFBRSxDQUFDK0gsTUFBSCxDQUFVLElBQVYsRUFDR0MsTUFESCxDQUNVLEtBRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsT0FGakIsRUFHR0EsSUFISCxDQUdRLE9BSFIsRUFHaUJwRCxLQUFLLEdBQUdNLElBQUksQ0FBQ3JDLE1BQWIsR0FBc0IsQ0FIdkMsRUFJR21GLElBSkgsQ0FJUSxRQUpSLEVBSWtCbkQsTUFKbEIsQ0FBZDtBQVFBMEgsV0FBSyxDQUFDeEUsTUFBTixDQUFhLE1BQWIsRUFBcUJDLElBQXJCLENBQTBCLEdBQTFCLEVBQStCLFVBQVV3RSxVQUFWLEVBQXNCO0FBQ25ELGVBQU9oRSxJQUFJLENBQUN0RCxJQUFELENBQVg7QUFDRCxPQUZEO0FBS0gsS0F0QkQ7QUF3Qkg7O0FBRURtSCxJQUFFLENBQUN6SCxLQUFILEdBQVcsVUFBU3hDLEtBQVQsRUFBZ0I7QUFDekIsUUFBSSxDQUFDNEgsU0FBUyxDQUFDbkgsTUFBZixFQUF1QjtBQUNyQixhQUFPK0IsS0FBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUd4QyxLQUFSO0FBQ0EsYUFBT2lLLEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0FBLElBQUUsQ0FBQ3hILE1BQUgsR0FBWSxVQUFTekMsS0FBVCxFQUFnQjtBQUMxQixRQUFJLENBQUM0SCxTQUFTLENBQUNuSCxNQUFmLEVBQXVCO0FBQ3JCLGFBQU9nQyxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFlBQU0sR0FBR3pDLEtBQVQ7QUFDQSxhQUFPaUssRUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUFPQSxFQUFQO0FBQ0g7O0FBR2MsU0FBU0ksY0FBVCxHQUEyQjtBQUV0QzVGLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLEVBRnNDLENBSXRDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVGO0FBR0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuI2ludHJvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiA4MHZoOyB9XFxuXFxuI3RpdGxlIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMS42O1xcbiAgaGVpZ2h0OiAxMDAlO1xcbiAgd2lkdGg6IDUwJTtcXG4gIHBhZGRpbmctbGVmdDogNjBweDtcXG4gIHBhZGRpbmctYm90dG9tOiA4MHB4O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtZW5kO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDsgfVxcblxcbiN0aXRsZSBoMSB7XFxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6ICMwNjJmODc7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIHBhZGRpbmctYm90dG9tOiAyMHB4OyB9XFxuXFxuI3RpdGxlIHAge1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG4jaW50cm8tZGl2aWRlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZThmYmZmO1xcbiAgaGVpZ2h0OiAyMHZoOyB9XFxuXFxuQHVzZSBcXFwic2FzczpsaXN0XFxcIjtcXG5wYXRoIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsYWNrOyB9XFxuXFxuLyogdmFyaWFibGVzICovXFxuI2NvbnRhaW5lciBzdmcge1xcbiAgcGFkZGluZzogMjBweDsgfVxcblxcbi8qIEFYRVMgKi9cXG4vKiB0aWNrcyAqL1xcbi5heGlzIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC41O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC50aWNrIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDUsIDU7XFxuICBzdHJva2U6ICNENEQ5RTI7XFxuICBzdHJva2Utb3BhY2l0eTogMC4zO1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC5kb21haW4ge1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDA7IH1cXG5cXG4vKiAuYXhpcyBsaW5lIHtcXG5zdHJva2U6ICM3MDZmNmY7XFxuc3Ryb2tlLXdpZHRoOiAwLjU7XFxuc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xcbn0gKi9cXG4vKiBheGlzIGNvbnRvdXIgKi9cXG4uYXhpcyBwYXRoIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC43O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLyogYXhpcyB0ZXh0ICovXFxuLmF4aXMgdGV4dCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMTAlOyB9XFxuXFxuLyogTElORSBDSEFSVCAqL1xcbi8qIGxpbmUgKi9cXG4ubGluZS0wLCAubGFiZWwtMCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRTE1RDIwO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTAge1xcbiAgZmlsbDogI0UxNUQyMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTEsIC5sYWJlbC0xIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNCNTAwMDE7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMSB7XFxuICBmaWxsOiAjQjUwMDAxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMiwgLmxhYmVsLTIge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTYwODtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0yIHtcXG4gIGZpbGw6ICMwMEE2MDg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0zLCAubGFiZWwtMyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMUIzQ0YwO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTMge1xcbiAgZmlsbDogIzFCM0NGMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTQsIC5sYWJlbC00IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMwMEE2Q0M7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNCB7XFxuICBmaWxsOiAjMDBBNkNDO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNSwgLmxhYmVsLTUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzgzMTc5NDtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC01IHtcXG4gIGZpbGw6ICM4MzE3OTQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS02LCAubGFiZWwtNiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjREJBRTdFO1xcbiAgb3BhY2l0eTogMC40O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTYge1xcbiAgZmlsbDogI0RCQUU3RTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTcsIC5sYWJlbC03IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNGNkIyRDU7XFxuICBvcGFjaXR5OiAwLjQ7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNyB7XFxuICBmaWxsOiAjRjZCMkQ1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtOCwgLmxhYmVsLTgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0ZGMDEwMDtcXG4gIG9wYWNpdHk6IDAuNDtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC04IHtcXG4gIGZpbGw6ICNGRjAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZSB7XFxuICBzdHJva2Utd2lkdGg6IDE7IH1cXG5cXG4uaG92ZXItbGluZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjZDJkMmQyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHN0cm9rZS13aWR0aDogMjA7IH1cXG5cXG4ubGFiZWwge1xcbiAgcGFkZGluZzogMTAwO1xcbiAgZm9udC1zaXplOiAxMnB4OyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImltcG9ydCB7ICQyMDE5X3NwbGl0UXVlcmllcyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lOyBzdG9yZSBkYXRhIGluIHZhcmlhYmxlIGRhdGFBXG5jb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiViICVkLCAlWVwiKTtcblxuLy8gXG5mdW5jdGlvbiBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIChkYXRhc2V0KSB7XG4gICAgLy8gaW50ZXJ2YWwgaXMgdGhlIG51bSB3ZWVrcyBvdmVyIHdoaWNoIHRoZSBtb3ZpbmdBdmVyYWdlIGlzIGNhbGN1bGF0ZWRcbiAgICBjb25zdCBpbnRlcnZhbCA9IDY7XG5cbiAgICBkYXRhc2V0LmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSkge1xuICAgICAgICBjb25zdCBhdmVyYWdlQ2hlY2tlciA9IFtdO1xuICAgICAgY29uc3QgYXZlcmFnZXMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdilcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZC52YWx1ZXNcIiwgZC52YWx1ZXMpXG5cbiAgICAgICAgaWYgKGkgPCBpbnRlcnZhbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb3ZpbmdUb3RhbCA9IDA7XG5cbiAgICAgICAgdGVybVNsaWNlLnZhbHVlcy5zbGljZShpIC0gaW50ZXJ2YWwsIGkpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBtb3ZpbmdUb3RhbCArPSB2LnBvaW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtb3ZpbmdBdmVyYWdlID0gTWF0aC5yb3VuZChtb3ZpbmdUb3RhbCAvIGludGVydmFsKTtcblxuICAgICAgICBhdmVyYWdlQ2hlY2tlci5wdXNoKFt2LnBvaW50LCBtb3ZpbmdBdmVyYWdlXSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ1RvdGFsXCIsIG1vdmluZ1RvdGFsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdBdmVyYWdlXCIsIG1vdmluZ0F2ZXJhZ2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogdi5kYXRlLFxuICAgICAgICAgIHBvaW50OiBtb3ZpbmdBdmVyYWdlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImF2ZXJhZ2VzXCIsYXZlcmFnZUNoZWNrZXIpXG4gICAgICB0ZXJtU2xpY2UudmFsdWVzID0gYXZlcmFnZXMuc2xpY2UoaW50ZXJ2YWwpO1xuICAgIH0pO1xufVxuXG4vLyBmdW5jdGlvbiByZXRyaWV2ZXIgc3RvcmVzIHByb21pc2VzIHRoYXQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBmaWxlIHRoYXQgXG4vLyBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggaW4gdGhlIGFycmF5IHF1ZXJ5U3Vic2V0cy5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXkgKGUuZy4gJDIwMTkpXG4vLyBJbnB1dCBhcnJheSBcInF1ZXJ5U3Vic2V0c1wiIGNvbnRhaW5zIHN1YnNldHMgb2YgcXVlcmllcywgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbiBzcGxpdHRlciBpbiB0ZXJtcy5qc1xuZnVuY3Rpb24gcmV0cmlldmVyIChxdWVyeVN1YnNldHMpIHtcbiAgY29uc3QgcmV0cmlldmVyUHJvbWlzZXMgPSBbXTtcblxuICBxdWVyeVN1YnNldHMuZm9yRWFjaCgoc3BsaXRRdWVyeSwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVyUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gcmV0cmlldmVyUHJvbWlzZXM7XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciB0aGUgZDMgY2hhcnQgZHJhd2luZyBmdW5jdGlvbiB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheSwgYXJyYXlPZlByb21pc2VzKSB7XG4gICAgXG4gICAgLy8gdGhpcyB3aWxsIHN0b3JlIHRoZSBkYXRhc2V0IGZvciBkMyB0byB1c2VcbiAgICBjb25zdCBkYXRhc2V0ID0gW107XG5cbiAgICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gICAgLy8gbGV0IG1haW5JbmRleCA9IDA7XG5cbiAgICAvLyByZXR1cm5zIHRoZSBhcHByb3ByaWF0ZSByZWxhdGl2ZSB2YWx1ZSBvZiBlYWNoIHRlcm0gaW4gYSBxdWVyeVN1YnNldCwgXG4gICAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgICBmdW5jdGlvbiBjYWxpYnJhdGUocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgsIHJWYWx1ZUluZGV4KSB7XG4gICAgICAgIFxuICAgICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgICBsZXQgZGVub21pbmF0b3IgPSByYXdkYXRhU2xpY2UudmFsdWVbMF07IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gY3VycmVudCBwcm9taXNlXG4gICAgICAgIGxldCByYXRpbztcbiAgICAgICAgXG4gICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICByYXRpbyA9IDA7XG4gICAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBNYXRoLnJvdW5kKCtyYXdkYXRhU2xpY2UudmFsdWVbclZhbHVlSW5kZXhdICogcmF0aW8pO1xuICAgIH1cblxuXG4gXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgYXJyYXlPZlByb21pc2VzICh0byB0ZWxsIGlmIGl0IHdpbGwgYWNjZXNzIHRoZSBmaXJzdCBvciBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzKVxuICAvLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdyaXRlcyB0aGUgZGF0YSBpbnRvIGNvbnN0IFwiZGF0YXNldFwiLCBpbiBhcHByb3ByaWF0ZSBmb3JtYXQgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihyYXdkYXRhKSB7XG4gICAgXG4gICAgICBsZXQgaW5jcmVtZW50ID0gcHJvbWlzZUluZGV4ID09PSAwID8gMCA6IDE7ICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggd2l0aGluIGVhY2ggc3ViZGF0YXNldFxuICAgICAgbGV0IG1heE51bU9mUXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgcXVlcmllcyBpbiBhIHNpbmdsZSBjYWxsIHVzaW5nIEdvb2dsZSBUcmVuZHMgQVBJXG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCBtYXhOdW1PZlF1ZXJpZXMgJiYgZGF0YXNldC5sZW5ndGggPCBxdWVyaWVzQXJyYXkubGVuZ3RoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXJpZXNBcnJheUluZGV4ID0gcHJvbWlzZUluZGV4ICogKG1heE51bU9mUXVlcmllcyAtIDEpICsgaW5jcmVtZW50O1xuXG4gICAgXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06IHRlcm1zQXJyYXlbcXVlcmllc0FycmF5SW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogcmF3ZGF0YS5tYXAoZnVuY3Rpb24gKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4KSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBvaW50ID1cbiAgICAgICAgICAgICAgICBwcm9taXNlSW5kZXggPT09IDAgPyArcmF3ZGF0YVNsaWNlLnZhbHVlW2luY3JlbWVudF1cbiAgICAgICAgICAgICAgICAgIDogY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCBpbmNyZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihyYXdkYXRhU2xpY2UuZm9ybWF0dGVkQXhpc1RpbWUpLFxuXG4gICAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuICB9IFxuXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gYXJyYXlPZlByb21pc2VzLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdldERhdGEocHJvbWlzZSwgaW5kZXgpO1xuICB9KVxuXG4gIHJldHVybiBuZXdQcm9taXNlc0FycmF5WzBdLnRoZW4oZmlyc3RTdWJzZXQgPT4ge1xuICAgICAgY29uc3QgcmVtYWluaW5nUHJvbWlzZXMgPSBuZXdQcm9taXNlc0FycmF5LnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlbWFpbmluZ1Byb21pc2VzKTtcbiAgfSlcbiAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRcIiwgZGF0YXNldClcbiAgICBcbiAgICBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlKGRhdGFzZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldEFmdGVyIE1vdmluZ0F2ZXJhZ2VcIiwgZGF0YXNldClcblxuICAgIHJldHVybiBkYXRhc2V0O1xuICB9KVxuICBcbiAgXG59XG5cbmV4cG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IiwiLy9cInRlcm1zLW9ubHlcIiBhcnJheXNcblxuY29uc3QgJDIwMTkgPSBbXG4gICAgXCJvayBib29tZXJcIixcbiAgICBcInZzY29cIixcbiAgICBcInNmc1wiLFxuICAgIFwiZnlwXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwiaXlreWtcIixcbiAgICBcInNiXCJcbiAgICAvLyBcImFuZCBpIG9vcFwiLFxuICAgIC8vIFwic2tza3NrXCIsXG4gICAgLy8gXCJ5a3R2XCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmNvbnN0ICQyMDE4ID0gW1xuICBcImluY2VsXCIsXG4gIFwidXd1XCIsXG4gIFwibXVrYmFuZ1wiLFxuICBcImliZlwiLFxuICBcImJsb2NrY2hhaW5cIixcbiAgXCJybmdcIixcbiAgXCJqaXRcIixcbiAgXCJqdXVsaW5nXCIsXG4gIFwiZ2VreXVtZVwiLFxuICBcInphZGR5XCIsXG4gIFwid3RtXCIsXG4gIFwid2lnXCIsXG5dO1xuXG5jb25zdCAkMjAxNyA9IFtcbiAgXCJub24gYmluYXJ5XCIsXG4gIFwiYml0Y29pblwiLFxuICBcInNub3dmbGFrZVwiLFxuICBcInBtb3lzXCIsXG4gIFwibWFnYVwiLFxuICBcIndhc3BcIixcbiAgXCJib3VqaWVcIixcbiAgXCJ0cm9sbHNcIixcbl07XG5cbmNvbnN0ICQyMDE2ID0gW1xuICBcImdhc2xpZ2h0aW5nXCIsXG4gIFwic2p3XCIsXG4gIFwiYm9vbGluXCIsXG4gIFwid29rZVwiLFxuICBcInNoaWxsXCIsXG4gIFwicXVhc2hcIixcbiAgXCJicmFuZGlzaFwiLFxuICBcInRyaWdnZXJlZFwiLFxuICBcInNob29rXCIsXG4gIFwiYmlnbHlcIixcbiAgXCJob2xvc2V4dWFsXCIsXG4gIFwidmV4aW5nXCIsXG4gIFwiYm91Z2hcIixcbiAgXCJqdWp1XCIsXG4gIFwid2F2eVwiLFxuXTtcblxuY29uc3QgJDIwMTUgPSBbXG4gIFwic2ltbWVyXCIsXG4gIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgXCJjaGFwb1wiLFxuICBcInN0b29wXCIsXG4gIFwiYmxhc2VcIixcbiAgXCJwbGViXCIsXG4gIFwibG93a2V5XCIsXG4gIFwidG9tZVwiLFxuICBcIndhcFwiLFxuICBcInNodWRkZXJcIixcbiAgXCJidXJudFwiLFxuICBcInZhcGVcIixcbl07XG5cbi8vIHRha2VzIGluIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXk7XG4vLyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBhY3R1YWwgc2VhcmNoIHF1ZXJpZXMgdG8gYmUgbWFkZSB1c2luZyB0aGUgR29vZ2xlIFRyZW5kcyBBUElcbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIHRoZSBhcnJheSBvZiBzZWFyY2ggcXVlcmllczsgXG4vLyBcIm1heE51bU9mUXVlcmllc1wiIGlzIHRoZSBtYXggbnVtIG9mIHF1ZXJpZXMgYWxsb3dlZCBvbiBHb29nbGUgVHJlbmRzIEFQSTtcbi8vIFwiam9pbkluZGV4XCIgaXMgdGhlIGluZGV4IG9mIHRoZSBjb21tb24gcXVlcnkgb24gd2hpY2ggd2UgY2FsaWJyYXRlIGVhY2ggc3ViZGF0YXNldC5cbi8vIEZ1bmN0aW9uIHNwbGl0dGVyIHJldHVybnMgYW4gYXJyYXkgb2YgcXVlcnlTdWJzZXRzLCBhbmQgYSBhIHRlcm1zLW9ubHkgYXJyYXkgcmVhcnJhbmdlZCB3aXRoIHRoZSBjb21tb24gdGVybSBhdCBpbmRleCAwLlxuLy8gRWFjaCBxdWVyeVN1YnNldCBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBjb21tb24gcXVlcnkgYWxvbmcgd2l0aCBvdGhlciBxdWVyaWVzOyBzdWJhcnJheS5sZW5ndGggPSBtYXhOdW1PZlF1ZXJpZXMuXG4vLyBMYXRlciwgZWFjaCBxdWVyeVN1YnNldCBpcyB1c2VkIHRvIG1ha2UgMSBBUEkgY2FsbCB0byBvYnRhaW4gYSBkYXRhU3Vic2V0LlxuZnVuY3Rpb24gc3BsaXR0ZXIocXVlcmllc0FycmF5LCBtYXhOdW1PZlF1ZXJpZXMsIGpvaW5JbmRleCwgdGVybXNBcnJheSkge1xuXG4gIC8vIHJlbW92ZSB0aGUgY29tbW9uIHF1ZXJ5IGZyb20gdGhlIHF1ZXJpZXNBcnJheSBvbiB3aGljaCB3ZSdsbCBpdGVyYXRlIG92ZXIgdG8gZ2V0IHRoZSBzdWJzZXRzIG9mIHF1ZXJpZXMsXG4gIC8vIGFuZCBzYXZlIHRoZSBjb21tb24gcXVlcnkgdG8gY29uc3Qgam9pblRlcm1cbiAgY29uc3Qgam9pblRlcm0gPSBxdWVyaWVzQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSBtYXhOdW1PZlF1ZXJpZXMgLSAxO1xuXG4gIGxldCBxdWVyeVN1YnNldHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJpZXNBcnJheS5sZW5ndGg7ICkge1xuICAgIC8vIGVhY2ggc2V0IG9mIHF1ZXJpZXMgZXhjbHVkaW5nIGNvbW1vbiBxdWVyeVxuICAgIGNvbnN0IGdyb3VwID0gcXVlcmllc0FycmF5LnNsaWNlKGksIGkgKyBpbnRlcnZhbCk7XG5cbiAgICAvLyBlYWNoIHN1YmFycmF5IGhhcyB0aGUgY29tbW9uIHF1ZXJ5IGFzIHRoZSBmaXJzdCBlbGVtZW50LCBmb2xsb3dlZCBieSBvdGhlciBxdWVyaWVzXG4gICAgY29uc3QgcXVlcnlTdWJzZXQgPSBqb2luVGVybS5jb25jYXQoZ3JvdXApO1xuXG4gICAgcXVlcnlTdWJzZXRzLnB1c2gocXVlcnlTdWJzZXQpO1xuXG4gICAgLy8ganVtcCB0byB0aGUgbmV4dCBlbGVtZW50IGluIGFycmF5IHdoaWNoIGhhc24ndCB5ZXQgYmVlbiBhZGRlZCB0byBhIHF1ZXJ5U3Vic2V0XG4gICAgaSArPSBpbnRlcnZhbDtcbiAgfVxuXG4gIHF1ZXJpZXNBcnJheSA9IGpvaW5UZXJtLmNvbmNhdChxdWVyaWVzQXJyYXkpO1xuICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheS5zcGxpY2Uoam9pbkluZGV4LCAxKS5jb25jYXQodGVybXNBcnJheSlcbiAgXG5cbiAgcmV0dXJuIFtxdWVyeVN1YnNldHMsIHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheV07XG59XG5cblxuY29uc3QgJDIwMTlfc2VhcmNoVGVybXMgPSBzZWFyY2hUZXJtc0dlbmVyYXRvcigkMjAxOSk7XG5jb25zdCAkMjAxOV9zcGxpdFF1ZXJpZXMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgJDIwMTlfc2VhcmNoVGVybXMubGVuZ3RoIC8gMiwgJDIwMTkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH07IiwiaW1wb3J0IHsgYWRkTGFiZWxDb29yZHMgfSBmcm9tIFwiLi9sYWJlbENvb3Jkcy5qc1wiXG5cbi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gODAwO1xuICBsZXQgaGVpZ2h0ID0gODAwO1xuICBsZXQgYWRqID0gMzA7XG5cblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgIC8vIFNDQUxFUzogeC1heGlzXG4gICAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgXG4gICAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnREYXRlXCIsIHN0YXJ0RGF0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmREYXRlXCIsIGVuZERhdGUpXG5cbiAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgICAgLnNjYWxlVGltZSgpXG4gICAgICAgIC5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuXG4gICAgICAvLyBTQ0FMRVM6IHktYXhpc1xuICAgICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBtYXhZXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgXG5cbiAgICAvLyBhZGQgbGFiZWwgY29vcmRpbmF0ZXMgdG8gZGF0YXNldCdzIHRlcm1TbGljZXNcbiAgICAgIGFkZExhYmVsQ29vcmRzKGRhdGEsIDEyLCB4U2NhbGUsIHlTY2FsZSk7XG4gICAgICBcblxuICAgIC8vIFZBTFVFUzogYWRkIHNwbGluZWQgdmFsdWVzXG4gICAgZnVuY3Rpb24gYWRkU3BsaW5lZFZhbHVlcyAoKSB7XG4gICAgICAgIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlLCBpKSB7XG4gICAgICAgICAgY29uc3QgZGF0ZXMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICByZXR1cm4geFNjYWxlKHYuZGF0ZSk7IC8vIGdldCBhcnJheSBvZiBkYXRlcyBtYXBwZWQgb250byB0aGUgYnJvd3NlclxuICAgICAgICAgIH0pO1xuICBcbiAgICAgICAgICBjb25zdCBwb2ludHMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICByZXR1cm4geVNjYWxlKHYucG9pbnQpO1xuICAgICAgICAgIH0pO1xuICBcbiAgICAgIFxuICAgICAgICAgIGNvbnN0IHNwbGluZURhdGUgPSBkMy5pbnRlcnBvbGF0ZUJhc2lzKGRhdGVzKTtcbiAgICAgICAgICBcbiAgICAgICAgICBjb25zdCBzcGxpbmVQb2ludCA9IGQzLmludGVycG9sYXRlQmFzaXMocG9pbnRzKTtcbiAgXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInF1YW50RGF0ZVwiLCBkMy5xdWFudGl6ZShzcGxpbmVEYXRlLCAxMTMqMikpXG4gICAgICAgICAgLy8gICBjb25zb2xlLmxvZyhcInF1YW50UG9pbnRcIiwgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIDExMykpO1xuICAgICAgICAgIC8vICAgY29uc29sZS5sb2coXCJxdWFudFBvaW50bWF4XCIsIGQzLm1pbihkMy5xdWFudGl6ZShzcGxpbmVQb2ludCwgMTEwKSkpO1xuICBcbiAgICAgICAgICBjb25zdCBvcmlnaW5hbE51bU9mUG9pbnRzID0gdGVybVNsaWNlLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgY29uc3QgZGVncmVlID0gMjEgKiBvcmlnaW5hbE51bU9mUG9pbnRzO1xuICBcbiAgICAgICAgICB0ZXJtU2xpY2Uuc3BsaW5lZCA9IGQzLnppcChcbiAgICAgICAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lRGF0ZSwgZGVncmVlKSxcbiAgICAgICAgICAgICAgZDMucXVhbnRpemUoc3BsaW5lUG9pbnQsIGRlZ3JlZSlcbiAgICAgICAgICApO1xuXG4gICAgICAgICAgY29uc29sZS5sb2coXCJhZGRzcGxpbmVkdmFsdWVzXCIsIG9yaWdpbmFsTnVtT2ZQb2ludHMpXG4gIFxuICAgICAgfSk7XG5cbiAgICB9XG5cbiAgICBhZGRTcGxpbmVkVmFsdWVzKClcblxuXG4gICAgICAvLyBBWEVTXG4gICAgICBjb25zdCB4QXhpcyA9IGQzXG4gICAgICAgIC5heGlzQm90dG9tKHhTY2FsZSlcbiAgICAgICAgLy8gLnNjYWxlKHhTY2FsZSlcbiAgICB4QXhpcy50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICBjb25zdCB5QXhpcyA9IGQzLmF4aXNMZWZ0KClcbiAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrVmFsdWVzKFtdKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrU2l6ZU91dGVyKDApXG5cbiAgICAgIC8vIEFYRVM6IGdyaWRsaW5lc1xuICAgICAgY29uc3QgeUF4aXNHcmlkID0gZDNcbiAgICAgICAgLmF4aXNMZWZ0KClcbiAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgLnRpY2tTaXplKC13aWR0aClcbiAgICAgICAgLnRpY2tGb3JtYXQoXCJcIilcbiAgICAgICAgLnRpY2tWYWx1ZXMoW21heFkvIDMsIDIgKiBtYXhZIC8gMywgbWF4WV0pXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXG4gICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgYC0ke2FkaiAqIDJ9IC0ke2FkaiAqIDN9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgKVxuICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgIFxuICAgICAgICAvLyBkYXRlIHVwIHRvIHdoaWNoIGNsaXAgcGF0aCBpcyBhcHBlbmRlZFxuICAgICAgICBjb25zdCBtaWREYXRlID0gbmV3IERhdGUoMjAxOSwgNSwgMzApO1xuICAgICAgICBjb25zdCBtaWRNYXggPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMuZmlsdGVyKHZhbCA9PiB2YWwuZGF0ZSA8PSBtaWREYXRlKSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zb2xlLmxvZyhcIm1pZERhdGVcIiwgbWlkRGF0ZSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWlkTWF4XCIsIG1pZE1heCk7XG4gICAgICAgIFxuICAgICAgICAvLyBhcHBlbmQgY2xpcCBwYXRoXG4gICAgICAgIGNvbnN0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKVxuICAgICAgICAgIC5hcHBlbmQoXCJjbGlwUGF0aFwiKVxuICAgICAgICAgIC5hdHRyKFwiaWRcIiwgXCJkYXRlLWNsaXBcIilcbiAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgIC5hdHRyKFwieFwiLCB4U2NhbGUoc3RhcnREYXRlKSlcbiAgICAgICAgLy8gICAuYXR0cihcInhcIiwgeFNjYWxlKHN0YXJ0RGF0ZSkpXG4gICAgICAgICAgLmF0dHIoXCJ5XCIsIHlTY2FsZShtYXhZKSlcbiAgICAgICAgLy8gICAuYXR0cihcInlcIiwgeVNjYWxlKG1heFkgLSBtaWRNYXgpKVxuICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcblxuICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgIHN2Z1xuICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwieC1heGlzXCIpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAgIC5jYWxsKHhBeGlzKTsgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICAgICAgLy8gZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKS50ZXh0LmFwcGVuZChcIkphblwiKTtcbiAgICAgIC8vIGNvbnNvbGUubG9nKFwidGVzdFwiLCBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpKVxuXG4gICAgICAvLyBkcmF3IHktYXhpc1xuICAgICAgc3ZnLmFwcGVuZChcImdcIikuYXR0cihcImNsYXNzXCIsIFwieS1heGlzLWdyaWRcIikuY2FsbCh5QXhpc0dyaWQpO1xuICAgICAgLy8gLmFwcGVuZChcInRleHRcIilcbiAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAvLyAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAvLyAuYXR0cihcInlcIiwgLTQwKVxuICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cblxuICAgICAgLy8gZHJhdyBsaW5lc1xuICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAueChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgXG4gICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGRbMF07XG4gICAgICAgIH0pXG4gICAgICAgIC55KGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICByZXR1cm4geVNjYWxlKHYucG9pbnQpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGRbMV07XG4gICAgICAgIH0pO1xuXG4gICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGluZSBsaW5lLSR7aX1gO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgLy8gICByZXR1cm4gbGluZShkLnNwbGluZWQpO1xuICAgICAgICB9KVxuICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjZGF0ZS1jbGlwKVwiKVxuXG4gICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGDih70gICAgICAgJHtkLnRlcm19YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcbiAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGhvdmVyTGluZXMgPSBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBsaW5lKGQuc3BsaW5lZCl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyl9KVxuXG5cbiAgICAvLyBjb25zdCB0ID0gZDMudHJhbnNpdGlvbigpXG4gICAgLy8gLmRlbGF5KDEpXG4gICAgLy8gLmR1cmF0aW9uKClcblxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZUNoYXJ0XCIsZDMuc2VsZWN0aW9uLmV2ZW50KVxuICAgICAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZSgyMDE3LCAxMSwgMSk7XG4gICAgICAgIGNvbnN0IG5ld0VuZERhdGUgID0gbmV3IERhdGUoMjAxOSwgNiwgMzEpO1xuICAgICAgICAvLyBjb25zdCBleHRlbnQgPSBbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHRlbnRcIiwgZXh0ZW50KVxuXG4gICAgICAgIC8vIGNvbnN0IHRlc3QxID0geFNjYWxlLmludmVydChleHRlbnRbMF0pXG4gICAgICAgIC8vIGNvbnN0IHRlc3QyID0geFNjYWxlLmludmVydChleHRlbnRbMV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ2hhcnRcIiwgdGVzdDEsIHRlc3QyKVxuICAgICAgICB4U2NhbGUuZG9tYWluKFtuZXdTdGFydERhdGUsIG5ld0VuZERhdGVdKVxuXG4gICAgICAgIGxldCBuZXdTdGFydEluZGV4O1xuICAgICAgICBsZXQgbmV3RW5kSW5kZXg7XG5cbiAgICAgICAgLy8gY29uc3QgbmV3RGF0YVBvaW50cyA9IFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbMF0udmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVswXS52YWx1ZXNbaV0uZGF0ZSA+PSBuZXdTdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPiBuZXdFbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgbmV3RW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcblxuICAgICAgICAvLyBmaWx0ZXIoKHZhbCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGkgPj0gMVxuICAgICAgICAgICAgLy8gcmV0dXJuIHZhbC5kYXRlID49IG5ld1N0YXJ0RGF0ZSAmJiB2YWwuZGF0ZSA8PSBuZXdFbmREYXRlOyBcbiAgICAgICAgLy8gfSlcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IG5ld1N0YXJ0SW5kZXggPSBuZXdEYXRhUG9pbnRzWzBdXG5cbiAgICAgICAgLy8gY29uc3QgbmV3RW5kSW5kZXggPSBuZXdEYXRhUG9pbnRzW25ld0RhdGFQb2ludHMgLSAxXVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdpXCIgLCBuZXdTdGFydEluZGV4LCBuZXdFbmRJbmRleClcblxuICAgICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICAgIG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKVxuICAgICAgICAgICAgcyA9IHMudmFsdWVzLnNsaWNlKG5ld1N0YXJ0SW5kZXgsIG5ld0VuZEluZGV4KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzXCIsIHMpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInMubGVuZ3RoXCIsIHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGQzLm1heChzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIG9mIHktYXhpc1xuICAgIC8vICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIG1heFldKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcbiAgICAgICAgLy8geVNjYWxlLmRvbWFpbihbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXSlcbiAgICAgICAgLy8gdXBkYXRlIHggYXhpc1xuICAgICAgICBzdmcuc2VsZWN0KFwiLngtYXhpc1wiKS5jYWxsKHhBeGlzKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCk7XG4gICAgICAgIC8vIHN2Zy5zZWxlY3QoXCIueS1heGlzXCIpLmNhbGwoeUF4aXMpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieFNjYWxlXCIsIHhTY2FsZShuZXdTdGFydERhdGUpKVxuICAgICAgICBjb25zb2xlLmxvZyhcInlTY2FsZVwiLCB5U2NhbGUobWF4WSkpXG4gICAgICAgIHlTY2FsZS5kb21haW4oWzAsIG1heFldKVxuICAgICAgICAvLyBhZGRTcGxpbmVkVmFsdWVzKClcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxpbmVzXCIsIGxpbmVzKVxuICAgICAgICBsaW5lcy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICBcbiAgICAgICAgICAudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibGluZSB0cmFuc2l0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBcbiAgICB1cGRhdGVDaGFydCgpIFxuXG4gICAgc3ZnLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2RhdGUtY2xpcClcIikuc3R5bGUoJ2ZpbGwnLCBcImxpZ2h0Z3JleVwiKTtcbiAgICBcbiAgICBzdmdcbiAgICAgIC5zZWxlY3RBbGwoXCIuaG92ZXItbGluZSwgLmxhYmVsLCAubGluZVwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2luXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKSAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZFwiLCBkKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2Rlc1wiLCBub2RlcylcbiAgICAgICAgXG4gICAgICAgIC8vIG5vZGVzID0gW2xpbmUoMCksIGxhYmVsKDApLCBob3Zlci1saW5lKDApLCBsaW5lKDEpLCBsYWJlbCgxKSwgaG92ZXItbGluZSgxKS4uLl1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaS8zKVxuICAgICAgICBcbiAgICAgICAgLy8gaW5jcmVhc2Ugb3BhY2l0eSBvZiBib3RoIGxpbmUgYW5kIGxhYmVsXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDNcbiAgICAgICAgICAuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9LCAubGFiZWwtJHtzZWxlY3RlZF9pfWApXG4gICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIFxuICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKClcblxuICAgICAgICAvLyBhcHBseSB0aGlja2VyIHN0cm9rZSBvbmx5IHRvIGxpbmVcbiAgICAgICAgZDMuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9YCkuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgNSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zaXRpb25cIix0KVxuICAgICAgICBcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c291dFwiLCBpKVxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3RlZF9pID0gTWF0aC5mbG9vcihpIC8gMyk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkM1xuICAgICAgICAgIC5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX0sIC5sYWJlbC0ke3NlbGVjdGVkX2l9YClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNClcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSk7XG5cbiAgICAgICAgc2VsZWN0ZWQudHJhbnNpdGlvbigpO1xuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgXG5cbiAgICB9KTtcblxuXG4gICAgfVxuXG4gIC8vIGFjY2Vzc29yIC8gc2V0dGVyIGZ1bmN0aW9ucyBmb3Igd2lkdGggYW5kIGhlaWdodFxuICBkcmF3LndpZHRoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgd2lkdGggPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICBkcmF3LmhlaWdodCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG5cbiAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICAvLyByZXR1cm4gZHJhdyBmdW5jdGlvblxuICByZXR1cm4gZHJhdztcbn1cbiIsImltcG9ydCB0ZXN0X2Z1bmN0aW9uIGZyb20gXCIuL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzXCI7XG5pbXBvcnQgc2ltcGxlX2V4YW1wbGUgZnJvbSBcIi4vcmVmZXJlbmNlcy96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qc1wiO1xuaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi9kYXRhL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydFRlbXBsYXRlIH0gZnJvbSBcIi4vZHJhd0NoYXJ0LmpzXCI7XG5cbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4vLyAvLyBjb25zdCBpbGx1c3RyYXRpb24gPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcblxuLy8gLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG5cbi8vIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBcbiAgLy8vLyBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICBjb25zdCB0ZXN0X3JldHJpZXZlclByb21pc2VzID0gcmV0cmlldmVyKCQyMDE5X3NwbGl0UXVlcmllc1swXSk7XG4gIGNvbnNvbGUubG9nKFwidGVzdF9yZXRyaWV2ZXJQcm9taXNlc1wiLCB0ZXN0X3JldHJpZXZlclByb21pc2VzKVxuICAvLyBsZXQgdGVzdCA9IGNyZWF0ZURhdGFzZXQodGVzdF9yZXRyaWV2ZXJQcm9taXNlcyk7XG4gIC8vIGNvbnNvbGUubG9nKCdpbmRleGpzIFRlc3QnLCB0ZXN0KVxuXG4gIC8vIENBTEwgRFJBVyBDSEFSVCBGVU5DVElPTlxuICBjb25zb2xlLmxvZyhcIiQyMDE5X3NwbGl0cXVlcmllc1wiLCAkMjAxOV9zcGxpdFF1ZXJpZXMpXG4gIFxuXG4gIC8vIGNyZWF0ZURhdGFzZXQoJDIwMTlfc3BsaXRRdWVyaWVzWzFdLCQyMDE5X3NwbGl0UXVlcmllc1syXSwgdGVzdF9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLy8gLnRoZW4oKGQpID0+IHtcbiAgICAvLyAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gICAgLy8gfSlcbiAgICBcbiAgICBcbiAgICBcbiAgICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwkMjAxOV9zcGxpdFF1ZXJpZXNbMl0sIHRlc3RfcmV0cmlldmVyUHJvbWlzZXMpXG4gICAgLnRoZW4oKGQpID0+IHtcbiAgICAgICAgY29uc29sZS5sb2coXCJ3b29ob29cIiwgZClcbiAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShkKS5jYWxsKGNoYXJ0VGVtcGxhdGUoKSlcblxuICAgIC8vIGNvbnN0IHpvb20gPSBkMy56b29tKClcbiAgICAvLyAgICAgICAgICAgICAgICAgLnNjYWxlRXh0ZW50KClcbiAgICAvLyAgICAgICAgICAgICAgICAgLmV4dGVudChbMCwwXSwgWzgwMCw4MDBdKVxuXG4gICAgLy8gZDMuc2VsZWN0KFwic3ZnXCIpLmNhbGwoem9vbSlcbiAgICAvLyBjb25zdCBpdGhpbmsgPSBkMy5zZWxlY3RBbGwoXCIuY2hhcnRcIikuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHtcbiAgICAvLyAgIHJldHVybiBpID09PSAwXG4gICAgLy8gfSlcbiAgICAvLyBjb25zb2xlLmxvZyhcIml0aGlua1wiLCBpdGhpbmspXG4gICAgLy8gaXRoaW5rXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuYXBwZW5kKFwiY2xpcFBhdGhcIilcbiAgICAvLyAgICAgICAuYXR0cihcImlkXCIsIFwiZGF0ZS1jbGlwXCIpXG4gICAgLy8gICAgICAgLmFwcGVuZChcInJlY3RcIilcbiAgICAvLyAgICAgICAuYXR0cihcInhcIiwgMClcbiAgICAvLyAgICAgICAuYXR0cihcInlcIiwgMjAwKVxuICAgIC8vICAgICAgIC5hdHRyKFwid2lkdGhcIiwgNDAwKVxuICAgIC8vICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIDYwMCk7XG4gICAgXG4gIH0pXG5cbi8vICBkMy5zZWxlY3QoXCIjc3ZnXCIpLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gIC8vICBjb25zb2xlLmxvZyhcInRlc3Qgd29ya2VkXCIsIHRoaXMpO1xuXG4gIC8vICBkMy5zZWxlY3RBbGwoXCIjZGF0ZS1jbGlwXCIpLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUoZW5kRGF0ZSkpLnRyYW5zaXRpb24oKTtcbi8vICB9KTtcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cbiAgXG4gIFxuLy8gICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbi8vICAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbi8vICAgLy8gICAuZW50ZXIoKVxuLy8gICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbi8vICAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbi8vICAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJyXCIsIDEpXG4vLyAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4vLyAgIC8vICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTsiLCIvLyBmdW5jdGlvbiB0byBzZXBhcmF0ZSBvdXQgbGFiZWxzIHRoYXQgb3ZlcmxhcFxuZnVuY3Rpb24gYWRkTGFiZWxDb29yZHMoZGF0YSwgc3BhY2UsIHhTY2FsZSwgeVNjYWxlKSB7XG4gIGxldCBub0NvbGxpc2lvbnMgPSBmYWxzZTtcblxuICBsZXQgeUxhYmVsVmFsdWVzID0gW107XG4gIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IFtdO1xuXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICBsZXQgbGFzdEluZGV4ID0gcy52YWx1ZXMubGVuZ3RoIC0gMTtcblxuICAgIHMubGFiZWxYID0geFNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgcy5sYWJlbFkgPSB5U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCk7XG5cbiAgICB5TGFiZWxWYWx1ZXMucHVzaChzLmxhYmVsWSk7XG4gICAgeUxhYmVsVmFsdWVzT3JpZ2luYWwucHVzaChzLmxhYmVsWSk7XG4gIH0pO1xuXG4gIHdoaWxlICghbm9Db2xsaXNpb25zKSB7XG4gICAgbm9Db2xsaXNpb25zID0gdHJ1ZTtcblxuICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MSwgaSkgPT4ge1xuICAgICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYyLCBqKSA9PiB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgbGV0IHlEaWZmID0gTWF0aC5hYnMoeUxhYmVsVmFsdWVzW2pdIC0geUxhYmVsVmFsdWVzW2ldKTtcbiAgICAgICAgbGV0IGFkZERpZmYgPSBzcGFjZSAtIHlEaWZmO1xuXG4gICAgICAgIC8vIGxldCBtb3ZpbmdZID0geUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gPj0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPyBqIDogaTtcblxuICAgICAgICBpZiAoaSAhPT0gaiAmJiB5RGlmZiA8IHNwYWNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJqIGhpdFwiLCBpLCBqKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlEaWZmXCIseURpZmYpXG4gICAgICAgICAgbGV0IGdyZWF0ZXJJbmRleCA9XG4gICAgICAgICAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSAtIHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID49IDAgPyBqIDogaTtcblxuICAgICAgICAgIHlMYWJlbFZhbHVlc1tncmVhdGVySW5kZXhdICs9IGFkZERpZmY7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVkXCIsIHlMYWJlbFZhbHVlcylcbiAgICAgICAgICBub0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyh5TGFiZWxWYWx1ZXMpO1xuXG4gIC8vIHJldHVybiB5TGFiZWxWYWx1ZXM7XG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgcy5sYWJlbFkgPSB5TGFiZWxWYWx1ZXNbaV07XG4gIH0pO1xufVxuXG5cbi8vIGFkZExhYmVsQ29vcmRzKFswLCAzLCA2LCA5LCAxMiwgMTVdKVxuLy8gYWRkTGFiZWxDb29yZHMoWzQsIDMsIDEsIDU1LCAyLCAxXSlcbi8vIFsxMywgMTAsMSwgNTUsIDcsIDRdXG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRMYWJlbENvb3JkcyB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RfZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gOTYwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xuICAgICAgICBjb25zdCBhZGogPSAzMDtcblxuICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIFNWRyBmaXJzdCAtIGVkaXRlZCBhZGpcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCAoLTEgKiBhZGopICsgXCIgXCIgKyAoLTEgKiBhZGopICsgXCIgXCIgKyAod2lkdGggKyAzICogYWRqKSArIFwiIFwiICsgKGhlaWdodCArIDMgKiBhZGopKVxuICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWQtJWItJVlcIik7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuXG4gICAgICAgIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX2RhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX3NsaWNlc1wiLCBzbGljZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkEgYXJyYXlcIixzbGljZXNbMF0udmFsdWVzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5J3MgbGVuZ3RoXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgIHhTY2FsZS5kb21haW4oXG4gICAgICAgICAgICAgICAgZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLFxuICAgICAgICAgICAgICAgIGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJucyB1bmRlZmluZWQ6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4YW1wbGVfeFNjYWxlXCIsIHhTY2FsZSgpKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAgICAgICAgICAgY29uc3QgeGF4aXMgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAudGlja3MoZDMudGltZURheS5ldmVyeSgxKSlcbiAgICAgICAgICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJWRcIikpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0yLiBEUkFXSU5HLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHhheGlzKTtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHlheGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoc2xpY2VzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGlkcylcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZXJpZV9sYWJlbFwiKVxuICAgICAgICAgICAgICAgIC8vIC5kYXR1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRlOiBkLmlkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5kYXRlKSArIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIixcIiArICh5U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0ubWVhc3VyZW1lbnQpICsgNSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoXCJTZXJpZSBcIikgKyBkLmlkIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0gKVxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiXG5jb25zdCBkYXRhID0gWzMsIDY2LCAyLCA3NiwgNSwgMjAsIDEsIDMwLCA1MCwgOSwgODAsIDUsIDddO1xuY29uc3QgdGVyciA9IFs1LCA1LCA1LCA1LCA4MCwgODAsIDIsIDMsIDEsIDIsIDYwLCAxLCAyLCAzM11cbmNvbnN0IGZsb3dlciA9IFtbNSwgNV0sIFsxLCAyXSwgWzgwLCA4MF1dXG5jb25zdCBiZWUgPSBbe3ZhbHVlOiA3LCBsYWJlbDoyfSwge3ZhbHVlOiAxLCBsYWJlbDogM31dXG5cbmZ1bmN0aW9uIGNoYXJ0QSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2hhcnRBXCIpXG5cbiAgICBsZXQgd2lkdGggPSAyMDtcbiAgICBsZXQgaGVpZ2h0ID0gMjAwO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxXSkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxMDBdKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoaSk7XG4gICAgICB9KVxuICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZCk7XG4gICAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gbXkoc2VsZWN0aW9uKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgbXlcIilcblxuICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHNjYWxldGVzdCA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGV0ZXN0XCIsIHNjYWxldGVzdClcblxuICAgICAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIHNlbGVjdGVkIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgZGl2IHdpdGggaWQ9XCIjY29udGFpbmVyXCIpXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICogZGF0YS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjaGFydC5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChzdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaW5lKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgbXkud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBteS5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBteTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVfZXhhbXBsZSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInNpbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIHdpZHRoXCIsIGNoYXJ0QSgpLndpZHRoKCkpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyBteVwiLCBjaGFydEEoKSlcbiAgICBcbiAgICAvLyBjb25zdCBjaGFydEIgPSBjaGFydEEoKS5oZWlnaHQoMzAwKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgbXlcIiwgY2hhcnRCKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgaGVpZ2h0XCIsIGNoYXJ0Qi5oZWlnaHQoKSlcblxuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZGF0YSkuY2FsbChjaGFydEEoKSlcblxuICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShiZWUpLmNhbGwoY2hhcnRBKCkpXG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=