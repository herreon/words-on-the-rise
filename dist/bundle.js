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

/***/ "./src/example.js":
/*!************************!*\
  !*** ./src/example.js ***!
  \************************/
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _example_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./example.js */ "./src/example.js");
/* harmony import */ var _simple_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./simple.js */ "./src/simple.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./terms.js */ "./src/terms.js");
/* harmony import */ var _terms_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_terms_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/assets/styles/styles.scss */ "./dist/assets/styles/styles.scss");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




 // parse the date and time; store data in variable dataA

var timeConv = d3.timeParse("%b %d, %Y");

function retriever(mainSet, groupedSet) {
  var retrievedPromises = [];
  groupedSet.forEach(function (set, index) {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json("./dist/assets/data/2019_".concat(index, ".json")));
  });
  return [mainSet.length, retrievedPromises];
}

var dataset = [];

function createDataset(_ref) {
  var _ref2 = _slicedToArray(_ref, 2),
      numWords = _ref2[0],
      arrayOfPromises = _ref2[1];

  var mainIndex = 0;
  var increment = 0;
  var initialSet = arrayOfPromises[0];
  var subseqSets = arrayOfPromises.slice(1); // first set

  return initialSet = initialSet.then(function (data) {
    while (increment < 5) {
      var slice = {
        term: _terms_js__WEBPACK_IMPORTED_MODULE_2__["$2019"][mainIndex],
        values: data.map(function (d) {
          return {
            date: timeConv(d.formattedAxisTime),
            point: +d.value[mainIndex]
          };
        })
      };
      dataset.push(slice);
      mainIndex += 1;
      increment += 1;
    }

    console.log("dataset with initial subset", dataset);
    return dataset;
  }) // subseqSets = 
  .then(function (dataset) {
    // console.log("achieved", dataset)
    // add subsequent sets
    var promises = [];
    subseqSets.forEach(function (promise) {
      var newPromise = promise.then(function (data) {
        console.log("part 2 main index", mainIndex);
        increment = 0;

        while (increment < 5 && mainIndex < numWords) {
          var slice = {
            term: _terms_js__WEBPACK_IMPORTED_MODULE_2__["$2019"][mainIndex],
            values: data.map(function (d, index) {
              var numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)

              var denominator = d.value[0]; // comparison value in current promise

              var ratio;

              if (denominator === 0) {
                ratio = 0;
              } else {
                ratio = numerator / denominator;
              }

              var calibratedValue = Math.round(+d.value[1] * ratio); // console.log(numerator, denominator, ratio, calibratedValue)

              return {
                date: timeConv(d.formattedAxisTime),
                point: calibratedValue
              };
            })
          };
          dataset.push(slice);
          mainIndex += 1;
          increment += 1;
        }

        ; // console.log("dataset after all 1", dataset)

        return dataset;
      });
      promises.push(newPromise);
    });
    return Promise.all(promises).then(function (result) {
      // console.log("promises yo", result[result.length - 1]);
      // return result[result.length - 1];
      console.log("dataset", dataset);
      return dataset;
    });
  }); // .then(res => {console.log("res",res)})
  // console.log("slice", arrayOfPromises.slice(1,3))
} // creating reusable chart


function chartTemplate() {
  // set the dimensions and margins of the svg
  var width = 600;
  var height = 400;
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

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat('').tickValues([100 / 3, 200 / 3, 100]).tickSizeOuter(0); // append svg

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
} // // to illustrate svg path mini-language
// // const illustration = svg.append("path")
//     // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
// // stretch data values from 0 to the svg's width
// // const yScale = d3.scaleLinear().rangeRound([height, 0]);


document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js content has loaded"); //// console.log("search terms", searchTerms)

  var testArray = retriever(_terms_js__WEBPACK_IMPORTED_MODULE_2__["$2019"], _terms_js__WEBPACK_IMPORTED_MODULE_2__["$2019_sets"]); // console.log("testArray", testArray)
  // CALL DRAW CHART FUNCTION

  var test = createDataset(testArray); // console.log('indexjs Test', test)

  createDataset(testArray).then(function (d) {
    console.log("woohoo", d); // d3.select("#container").datum(d).call(chartTemplate())
  }); // simple_example();
  // test_function();
}); //   // // append SVG
//   // const svg = d3.select("#container").append("svg")
//   //   .attr("preserveAspectRatio", "xMinYMin meet")
//   //   .attr("width", width)
//   //   .attr("height", height)
//   //   .attr("viewBox", `-${adj} -${adj} ${width + adj*3} ${height + adj*3}`)
//   //   .classed("svg-content", true);
//   // //----------------------------[interactive]POINTS------------------------------//
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

/***/ "./src/simple.js":
/*!***********************!*\
  !*** ./src/simple.js ***!
  \***********************/
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

/***/ }),

/***/ "./src/terms.js":
/*!**********************!*\
  !*** ./src/terms.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

var $2019 = ["boomer", "vsco", "sfs", "fyp", "simp", "ngl", "s/u", "iykyk", "sb", "sksksk", "yktv", "and i oop"];
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2ltcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy90ZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJ4YXhpcyIsImF4aXNCb3R0b20iLCJ0aW1lRGF5IiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsImxpbmUiLCJ4IiwieSIsImlkcyIsImNhbGwiLCJ0ZXh0IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInJldHJpZXZlciIsIm1haW5TZXQiLCJncm91cGVkU2V0IiwicmV0cmlldmVkUHJvbWlzZXMiLCJmb3JFYWNoIiwic2V0IiwiaW5kZXgiLCJwdXNoIiwianNvbiIsImNyZWF0ZURhdGFzZXQiLCJudW1Xb3JkcyIsImFycmF5T2ZQcm9taXNlcyIsIm1haW5JbmRleCIsImluY3JlbWVudCIsImluaXRpYWxTZXQiLCJzdWJzZXFTZXRzIiwidGVybSIsIiQyMDE5IiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJwb2ludCIsInZhbHVlIiwicHJvbWlzZXMiLCJwcm9taXNlIiwibmV3UHJvbWlzZSIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmF0aW8iLCJjYWxpYnJhdGVkVmFsdWUiLCJNYXRoIiwicm91bmQiLCJQcm9taXNlIiwiYWxsIiwicmVzdWx0IiwiY2hhcnRUZW1wbGF0ZSIsImRyYXciLCJzZWxlY3Rpb24iLCJlYWNoIiwic3RhcnREYXRlIiwibWluIiwidiIsImVuZERhdGUiLCJtYXhZIiwicyIsInhBeGlzIiwidGltZU1vbnRoIiwidGlja1NpemVPdXRlciIsInlBeGlzR3JpZCIsInRpY2tTaXplIiwidGlja1ZhbHVlcyIsImkiLCJsYXN0SW5kZXgiLCJsYWJlbFgiLCJsYWJlbFkiLCJhcmd1bWVudHMiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJ0ZXN0QXJyYXkiLCIkMjAxOV9zZXRzIiwidGVzdCIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiLCJvbmVIaXQiLCJzZWFyY2hUZXJtc0dlbmVyYXRvciIsImFycmF5Iiwic2VhcmNoVGVybXMiLCJzcGxpdHRlciIsIm1heE51bSIsImpvaW5JbmRleCIsImpvaW5WYWx1ZSIsImludGVydmFsIiwiZ3JvdXAiLCJjb25jYXQiLCIkMjAxOV9zZWFyY2hU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RUFHVixXQUhVLEVBSVYsT0FKVSxFQUtWLE1BTFUsRUFNVixNQU5VLEVBT1YsUUFQVSxFQVFWLFFBUlUsQ0FBZDtBQVdBLElBQU1DLEtBQUssR0FBRyxDQUNWLGFBRFUsRUFFVixLQUZVLEVBR1YsUUFIVSxFQUlWLE1BSlUsRUFLVixPQUxVLEVBTVYsT0FOVSxFQU9WLFVBUFUsRUFRVixXQVJVLEVBU1YsT0FUVSxFQVVWLE9BVlUsRUFXVixZQVhVLEVBWVYsUUFaVSxFQWFWLE9BYlUsRUFjVixNQWRVLEVBZVYsTUFmVSxDQUFkO0FBa0JBLElBQU1DLEtBQUssR0FBRyxDQUNWLFFBRFUsRUFFVixtQkFGVSxFQUdWLE9BSFUsRUFJVixPQUpVLEVBS1YsT0FMVSxFQU1WLE1BTlUsRUFPVixRQVBVLEVBUVYsTUFSVSxFQVNWLEtBVFUsRUFVVixTQVZVLEVBV1YsT0FYVSxFQVlWLE1BWlUsQ0FBZDtBQWlCQUMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCO0FBQUVyRSxPQUFLLEVBQUxBLEtBQUY7QUFBUytELG1CQUFpQixFQUFqQkEsaUJBQVQ7QUFBNEJ2QixZQUFVLEVBQVZBO0FBQTVCLENBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbiN0aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2ludHJvLWRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJmZjtcXG4gIGhlaWdodDogMjB2aDsgfVxcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxucGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibGFjazsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbiNjb250YWluZXIgc3ZnIHtcXG4gIHBhZGRpbmc6IDIwcHg7IH1cXG5cXG4vKiBBWEVTICovXFxuLyogdGlja3MgKi9cXG4uYXhpcyB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNTtcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAudGljayB7XFxuICBzdHJva2UtZGFzaGFycmF5OiA1LCA1O1xcbiAgc3Ryb2tlOiAjRDREOUUyO1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDAuMztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi55LWF4aXMtZ3JpZCAuZG9tYWluIHtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwOyB9XFxuXFxuLyogLmF4aXMgbGluZSB7XFxuc3Ryb2tlOiAjNzA2ZjZmO1xcbnN0cm9rZS13aWR0aDogMC41O1xcbnNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59ICovXFxuLyogYXhpcyBjb250b3VyICovXFxuLmF4aXMgcGF0aCB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi8qIGF4aXMgdGV4dCAqL1xcbi5heGlzIHRleHQge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTEwJTsgfVxcblxcbi8qIExJTkUgQ0hBUlQgKi9cXG4vKiBsaW5lICovXFxuLmxpbmUtMCwgLmxhYmVsLTAge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcmVkOyB9XFxuXFxuLmxhYmVsLTAge1xcbiAgZmlsbDogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogZ3JlZW47IH1cXG5cXG4ubGFiZWwtMSB7XFxuICBmaWxsOiBncmVlbjtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTIsIC5sYWJlbC0yIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsdWU7IH1cXG5cXG4ubGFiZWwtMiB7XFxuICBmaWxsOiBibHVlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMywgLmxhYmVsLTMge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogb3JhbmdlOyB9XFxuXFxuLmxhYmVsLTMge1xcbiAgZmlsbDogb3JhbmdlO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RfZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gOTYwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xuICAgICAgICBjb25zdCBhZGogPSAzMDtcblxuICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIFNWRyBmaXJzdCAtIGVkaXRlZCBhZGpcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCAoLTEgKiBhZGopICsgXCIgXCIgKyAoLTEgKiBhZGopICsgXCIgXCIgKyAod2lkdGggKyAzICogYWRqKSArIFwiIFwiICsgKGhlaWdodCArIDMgKiBhZGopKVxuICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWQtJWItJVlcIik7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuXG4gICAgICAgIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX2RhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX3NsaWNlc1wiLCBzbGljZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkEgYXJyYXlcIixzbGljZXNbMF0udmFsdWVzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5J3MgbGVuZ3RoXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgIHhTY2FsZS5kb21haW4oXG4gICAgICAgICAgICAgICAgZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLFxuICAgICAgICAgICAgICAgIGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJucyB1bmRlZmluZWQ6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4YW1wbGVfeFNjYWxlXCIsIHhTY2FsZSgpKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAgICAgICAgICAgY29uc3QgeGF4aXMgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAudGlja3MoZDMudGltZURheS5ldmVyeSgxKSlcbiAgICAgICAgICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJWRcIikpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0yLiBEUkFXSU5HLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHhheGlzKTtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHlheGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoc2xpY2VzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGlkcylcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZXJpZV9sYWJlbFwiKVxuICAgICAgICAgICAgICAgIC8vIC5kYXR1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRlOiBkLmlkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5kYXRlKSArIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIixcIiArICh5U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0ubWVhc3VyZW1lbnQpICsgNSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoXCJTZXJpZSBcIikgKyBkLmlkIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0gKVxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vZXhhbXBsZS5qc1wiO1xuaW1wb3J0IHNpbXBsZV9leGFtcGxlIGZyb20gXCIuL3NpbXBsZS5qc1wiO1xuaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zZXRzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG5cbi8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lOyBzdG9yZSBkYXRhIGluIHZhcmlhYmxlIGRhdGFBXG5jb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiViICVkLCAlWVwiKTtcblxuXG5mdW5jdGlvbiByZXRyaWV2ZXIgKG1haW5TZXQsIGdyb3VwZWRTZXQpIHtcbiAgY29uc3QgcmV0cmlldmVkUHJvbWlzZXMgPSBbXTtcblxuICBncm91cGVkU2V0LmZvckVhY2goKHNldCwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVkUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gW21haW5TZXQubGVuZ3RoLCByZXRyaWV2ZWRQcm9taXNlc107XG5cbn1cblxuY29uc3QgZGF0YXNldCA9IFtdO1xuXG5mdW5jdGlvbiBjcmVhdGVEYXRhc2V0IChbbnVtV29yZHMsIGFycmF5T2ZQcm9taXNlc10pIHtcblxuXG4gIGxldCBtYWluSW5kZXggPSAwO1xuICBsZXQgaW5jcmVtZW50ID0gMDtcbiAgXG5cbiAgbGV0IGluaXRpYWxTZXQgPSBhcnJheU9mUHJvbWlzZXNbMF07XG4gIGxldCBzdWJzZXFTZXRzID0gYXJyYXlPZlByb21pc2VzLnNsaWNlKDEpO1xuXG4gIC8vIGZpcnN0IHNldFxuICByZXR1cm4gaW5pdGlhbFNldCA9IGluaXRpYWxTZXQudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgd2hpbGUoaW5jcmVtZW50IDwgNSkge1xuXG4gICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgdGVybTogJDIwMTlbbWFpbkluZGV4XSxcbiAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgcG9pbnQ6ICtkLnZhbHVlW21haW5JbmRleF0sXG4gICAgICAgICAgfTtcbiAgICAgICAgfSksXG4gICAgICB9XG5cbiAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICBtYWluSW5kZXggKz0gMTtcbiAgICAgIGluY3JlbWVudCArPSAxO1xuICAgIH1cblxuICAgIGNvbnNvbGUubG9nKFwiZGF0YXNldCB3aXRoIGluaXRpYWwgc3Vic2V0XCIsIGRhdGFzZXQpXG4gICAgcmV0dXJuIGRhdGFzZXRcbiAgfSlcblxuICAvLyBzdWJzZXFTZXRzID0gXG4gIC50aGVuKGZ1bmN0aW9uKGRhdGFzZXQpIHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImFjaGlldmVkXCIsIGRhdGFzZXQpXG4gICAgLy8gYWRkIHN1YnNlcXVlbnQgc2V0c1xuXG4gICAgbGV0IHByb21pc2VzID0gW107XG4gICAgc3Vic2VxU2V0cy5mb3JFYWNoKHByb21pc2UgPT4ge1xuXG4gICAgICBsZXQgbmV3UHJvbWlzZSA9IHByb21pc2UudGhlbihmdW5jdGlvbihkYXRhKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJwYXJ0IDIgbWFpbiBpbmRleFwiLCBtYWluSW5kZXgpXG5cbiAgICAgICAgaW5jcmVtZW50ID0gMDtcbiAgICAgICAgXG4gICAgICAgIHdoaWxlKGluY3JlbWVudCA8IDUgJiYgbWFpbkluZGV4IDwgbnVtV29yZHMpIHtcbiAgICAgICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgICAgIHRlcm06ICQyMDE5W21haW5JbmRleF0sXG4gICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uKGQsIGluZGV4KSB7XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbaW5kZXhdLnBvaW50OyAvLyBjb21wYXJpc29uIHZhbHVlIGluIHByZXZpb3VzIHByb21pc2UgKGFscmVhZHkgaW4gdmFyIGRhdGFzZXQpXG4gICAgICAgICAgICAgIGxldCBkZW5vbWluYXRvciA9IGQudmFsdWVbMF07IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gY3VycmVudCBwcm9taXNlXG4gICAgICAgICAgICAgIGxldCByYXRpbztcbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgICAgICAgICAgIHJhdGlvID0gMDtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByYXRpbyA9IG51bWVyYXRvci9kZW5vbWluYXRvcjtcbiAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICBsZXQgY2FsaWJyYXRlZFZhbHVlID0gTWF0aC5yb3VuZCgrZC52YWx1ZVsxXSAqIHJhdGlvKTtcbiAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2cobnVtZXJhdG9yLCBkZW5vbWluYXRvciwgcmF0aW8sIGNhbGlicmF0ZWRWYWx1ZSlcblxuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgICAgIHBvaW50OiBjYWxpYnJhdGVkVmFsdWUsXG4gICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcblxuICAgICAgICAgIG1haW5JbmRleCArPSAxO1xuICAgICAgICAgIGluY3JlbWVudCArPSAxO1xuXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXQgYWZ0ZXIgYWxsIDFcIiwgZGF0YXNldClcblxuICAgICAgICByZXR1cm4gZGF0YXNldDtcbiAgICAgIH0pXG5cbiAgICAgIHByb21pc2VzLnB1c2gobmV3UHJvbWlzZSk7XG4gICAgfSlcblxuICAgIHJldHVybiBQcm9taXNlLmFsbChwcm9taXNlcykudGhlbigocmVzdWx0KSA9PiB7XG5cbiAgICAgIC8vIGNvbnNvbGUubG9nKFwicHJvbWlzZXMgeW9cIiwgcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXSk7XG4gICAgICAvLyByZXR1cm4gcmVzdWx0W3Jlc3VsdC5sZW5ndGggLSAxXTtcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YXNldFwiLCBkYXRhc2V0KTtcbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuXG5cbiAgfSlcblxuICAvLyAudGhlbihyZXMgPT4ge2NvbnNvbGUubG9nKFwicmVzXCIscmVzKX0pXG5cbiAgLy8gY29uc29sZS5sb2coXCJzbGljZVwiLCBhcnJheU9mUHJvbWlzZXMuc2xpY2UoMSwzKSlcbiAgXG4gIFxuICBcbn1cblxuXG5cblxuLy8gY3JlYXRpbmcgcmV1c2FibGUgY2hhcnRcbmZ1bmN0aW9uIGNoYXJ0VGVtcGxhdGUoKSB7XG5cbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gNjAwO1xuICBsZXQgaGVpZ2h0ID0gNDAwO1xuICBsZXQgYWRqID0gMzA7XG5cbiAgZnVuY3Rpb24gZHJhdyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbihkYXRhKSB7XG4gICAgICBcbiAgICAgIGNvbnNvbGUubG9nKFwiZGF0YVwiLCBkYXRhKTtcbiAgICAgIFxuICAgICAgLy8gU0NBTEVTOiB4LWF4aXNcbiAgICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZDMubWluKGQudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24oZCkge1xuICAgICAgICByZXR1cm4gZDMubWF4KGQudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgICB9KVxuICAgICAgfSk7XG5cbiAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pXG4gICAgICBcbiAgICAgIC8vIFNDQUxFUzogeS1heGlzXG4gICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICBjb25zdCBtYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uKHMpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICAgICAgcmV0dXJuIHYucG9pbnRcbiAgICAgICAgfSlcbiAgICAgIH0pXG4gICAgICBcbiAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgbWF4WV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSlcbiAgICAgIFxuICAgICAgXG4gICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB4U2NhbGUoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4geVNjYWxlKGQucG9pbnQpO1xuICAgICAgICAgICAgICAgICAgICAgIH0pOyAgICAgICAgICAgICAgXG5cblxuICAgICAgLy8gQVhFU1xuICAgICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSkgXG4gICAgICAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIC8vIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgLy8gICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW10pXG4gICAgICAvLyAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcblxuICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICBjb25zdCB5QXhpc0dyaWQgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aWNrU2l6ZSgtd2lkdGgpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KCcnKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGlja1ZhbHVlcyhbMTAwLzMsIDIwMC8zLCAxMDBdKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAvLyBhcHBlbmQgc3ZnXG4gICAgICBjb25zdCBzdmcgPSBkM1xuICAgICAgICAuc2VsZWN0KHRoaXMpXG4gICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIGAtJHthZGp9IC0ke2Fkan0gJHt3aWR0aCArIGFkaiAqIDEwfSAke2hlaWdodCArIGFkaiAqIDJ9YClcbiAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgIC8vIGRyYXcgeC1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBgdHJhbnNsYXRlKDAsICR7aGVpZ2h0fSlgKVxuICAgICAgICAgIC5jYWxsKHhBeGlzKSAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuICAgICAgICAgIFxuICAgICAgICBcbiAgICAgIC8vIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikudGV4dC5hcHBlbmQoXCJKYW5cIik7XG4gICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIiwgZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKSlcblxuICAgICAgLy8gZHJhdyB5LWF4aXNcbiAgICAgIHN2Zy5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKVxuICAgICAgICAuY2FsbCh5QXhpc0dyaWQpXG4gICAgICAgIC8vIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgLy8gLmF0dHIoXCJ5XCIsIC00MClcbiAgICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgICAgICAgXG4gICAgICAvLyBkcmF3IGxpbmVzXG4gICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKS5kYXRhKGRhdGEpLmVudGVyKCkuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkLCBpKSB7IHJldHVybiBgbGluZS0ke2l9YCB9KVxuICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcykgfSk7XG5cbiAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGBsYWJlbC0ke2l9YCB9KVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24oZCkgeyByZXR1cm4gYOKHvSAgICAgICAke2QudGVybX1gOyB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICBjb25zdCBsYXN0SW5kZXggPSBkLnZhbHVlcy5sZW5ndGggLSAxOyAvLyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZGF0YSBwb2ludFxuICAgICAgICAgICAgICBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKSArIDE7XG4gICAgICAgICAgICAgIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KSArIDE7XG4gICAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7bGFiZWxYfSwgJHtsYWJlbFl9KWBcbiAgICAgICAgICAgIH0pXG5cbiAgICB9KSAgICBcbiAgfVxuXG4gIC8vIGFjY2Vzc29yIC8gc2V0dGVyIGZ1bmN0aW9ucyBmb3Igd2lkdGggYW5kIGhlaWdodFxuICBkcmF3LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG4gICAgXG4gICAgd2lkdGggPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICBkcmF3LmhlaWdodCA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIC8vIHJldHVybiBkcmF3IGZ1bmN0aW9uXG4gIHJldHVybiBkcmF3O1xuXG59XG5cbi8vIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuLy8gLy8gY29uc3QgaWxsdXN0cmF0aW9uID0gc3ZnLmFwcGVuZChcInBhdGhcIilcbi8vICAgICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG5cbi8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuXG4vLyAvLyBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gIFxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgXG4gIC8vLy8gY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgY29uc3QgdGVzdEFycmF5ID0gcmV0cmlldmVyKCQyMDE5LCAkMjAxOV9zZXRzKTtcblxuICAvLyBjb25zb2xlLmxvZyhcInRlc3RBcnJheVwiLCB0ZXN0QXJyYXkpXG5cbiAgLy8gQ0FMTCBEUkFXIENIQVJUIEZVTkNUSU9OXG4gIGxldCB0ZXN0ID0gY3JlYXRlRGF0YXNldCh0ZXN0QXJyYXkpO1xuICAvLyBjb25zb2xlLmxvZygnaW5kZXhqcyBUZXN0JywgdGVzdClcblxuICBjcmVhdGVEYXRhc2V0KHRlc3RBcnJheSkudGhlbigoZCkgPT4ge1xuICAgIGNvbnNvbGUubG9nKFwid29vaG9vXCIsIGQpXG4gICAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5kYXR1bShkKS5jYWxsKGNoYXJ0VGVtcGxhdGUoKSlcbiAgfSlcbiBcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cblxuLy8gICAvLyAvLyBhcHBlbmQgU1ZHXG4vLyAgIC8vIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuLy8gICAvLyAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4vLyAgIC8vICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuLy8gICAvLyAgIC5hdHRyKFwidmlld0JveFwiLCBgLSR7YWRqfSAtJHthZGp9ICR7d2lkdGggKyBhZGoqM30gJHtoZWlnaHQgKyBhZGoqM31gKVxuLy8gICAvLyAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7IiwiXG5jb25zdCBkYXRhID0gWzMsIDY2LCAyLCA3NiwgNSwgMjAsIDEsIDMwLCA1MCwgOSwgODAsIDUsIDddO1xuY29uc3QgdGVyciA9IFs1LCA1LCA1LCA1LCA4MCwgODAsIDIsIDMsIDEsIDIsIDYwLCAxLCAyLCAzM11cbmNvbnN0IGZsb3dlciA9IFtbNSwgNV0sIFsxLCAyXSwgWzgwLCA4MF1dXG5jb25zdCBiZWUgPSBbe3ZhbHVlOiA3LCBsYWJlbDoyfSwge3ZhbHVlOiAxLCBsYWJlbDogM31dXG5cbmZ1bmN0aW9uIGNoYXJ0QSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2hhcnRBXCIpXG5cbiAgICBsZXQgd2lkdGggPSAyMDtcbiAgICBsZXQgaGVpZ2h0ID0gMjAwO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxXSkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxMDBdKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoaSk7XG4gICAgICB9KVxuICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZCk7XG4gICAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gbXkoc2VsZWN0aW9uKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgbXlcIilcblxuICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHNjYWxldGVzdCA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGV0ZXN0XCIsIHNjYWxldGVzdClcblxuICAgICAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIHNlbGVjdGVkIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgZGl2IHdpdGggaWQ9XCIjY29udGFpbmVyXCIpXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICogZGF0YS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjaGFydC5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChzdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaW5lKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgbXkud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBteS5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBteTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVfZXhhbXBsZSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInNpbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIHdpZHRoXCIsIGNoYXJ0QSgpLndpZHRoKCkpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyBteVwiLCBjaGFydEEoKSlcbiAgICBcbiAgICAvLyBjb25zdCBjaGFydEIgPSBjaGFydEEoKS5oZWlnaHQoMzAwKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgbXlcIiwgY2hhcnRCKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgaGVpZ2h0XCIsIGNoYXJ0Qi5oZWlnaHQoKSlcblxuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZGF0YSkuY2FsbChjaGFydEEoKSlcblxuICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShiZWUpLmNhbGwoY2hhcnRBKCkpXG5cblxufSIsImNvbnN0ICQyMDE5ID0gW1xuICAgIFwiYm9vbWVyXCIsXG4gICAgXCJ2c2NvXCIsXG4gICAgXCJzZnNcIixcbiAgICBcImZ5cFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwibmdsXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIml5a3lrXCIsXG4gICAgXCJzYlwiLFxuICAgIFwic2tza3NrXCIsXG4gICAgXCJ5a3R2XCIsXG4gICAgXCJhbmQgaSBvb3BcIlxuXVxuXG5jb25zdCBvbmVIaXQgPSBbXCJzbGF0dFwiLCBcImFudHNcIl07XG5cblxuZnVuY3Rpb24gc2VhcmNoVGVybXNHZW5lcmF0b3IoYXJyYXkpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtcyA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgICBzZWFyY2hUZXJtcy5wdXNoKGB3aGF0IGRvZXMgJHt0ZXJtfSBtZWFuYCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXJtcyk7XG4gICAgcmV0dXJuIHNlYXJjaFRlcm1zO1xufTtcblxuXG5mdW5jdGlvbiBzcGxpdHRlcihhcnJheSwgbWF4TnVtLCBqb2luSW5kZXgpIHtcbiAgICBjb25zdCBqb2luVmFsdWUgPSBhcnJheVtqb2luSW5kZXhdO1xuICAgIGNvbnN0IGludGVydmFsID0gLSAxKyBtYXhOdW07XG4gICAgbGV0IHJlc3VsdCA9IFtdO1xuXG4gICAgZm9yKGxldCBpID0gMTsgaSA8IGFycmF5Lmxlbmd0aDspIHtcbiAgICAgICAgY29uc3QgZ3JvdXAgPSBhcnJheS5zbGljZShpLCBpICsgaW50ZXJ2YWwpOyBcbiAgICAgICAgY29uc3Qgc2V0ID0gW2pvaW5WYWx1ZV0uY29uY2F0KGdyb3VwKTtcbiAgICAgICAgcmVzdWx0LnB1c2goc2V0KTtcbiAgICAgICAgaSs9IGludGVydmFsO1xuICAgIH1cblxuICAgIC8vIGNvbnNvbGUubG9nKHJlc3VsdClcbiAgICByZXR1cm4gcmVzdWx0O1xufVxuXG5cbmNvbnN0ICQyMDE5X3NlYXJjaFRlcm1zID0gc2VhcmNoVGVybXNHZW5lcmF0b3IoJDIwMTkpO1xuY29uc3QgJDIwMTlfc2V0cyA9IHNwbGl0dGVyKCQyMDE5X3NlYXJjaFRlcm1zLCA1LCAwKTtcblxuXG5jb25zdCAkMjAxOCA9IFtcbiAgICBcImluY2VsXCIsXG4gICAgXCJ1d3VcIixcbiAgICBcIm11a2JhbmdcIixcbiAgICBcImliZlwiLFxuICAgIFwiYmxvY2tjaGFpblwiLFxuICAgIFwicm5nXCIsXG4gICAgXCJqaXRcIixcbiAgICBcImp1dWxpbmdcIixcbiAgICBcImdla3l1bWVcIixcbiAgICBcInphZGR5XCIsXG4gICAgXCJ3dG1cIixcbiAgICBcIndpZ1wiXG5dXG5cblxuY29uc3QgJDIwMTcgPSBbXG4gICAgXCJub24gYmluYXJ5XCIsXG4gICAgXCJiaXRjb2luXCIsXG4gICAgXCJzbm93Zmxha2VcIixcbiAgICBcInBtb3lzXCIsXG4gICAgXCJtYWdhXCIsXG4gICAgXCJ3YXNwXCIsXG4gICAgXCJib3VqaWVcIixcbiAgICBcInRyb2xsc1wiXG5dXG5cbmNvbnN0ICQyMDE2ID0gW1xuICAgIFwiZ2FzbGlnaHRpbmdcIixcbiAgICBcInNqd1wiLFxuICAgIFwiYm9vbGluXCIsXG4gICAgXCJ3b2tlXCIsXG4gICAgXCJzaGlsbFwiLFxuICAgIFwicXVhc2hcIixcbiAgICBcImJyYW5kaXNoXCIsXG4gICAgXCJ0cmlnZ2VyZWRcIixcbiAgICBcInNob29rXCIsXG4gICAgXCJiaWdseVwiLFxuICAgIFwiaG9sb3NleHVhbFwiLFxuICAgIFwidmV4aW5nXCIsXG4gICAgXCJib3VnaFwiLFxuICAgIFwianVqdVwiLFxuICAgIFwid2F2eVwiXG5dXG5cbmNvbnN0ICQyMDE1ID0gW1xuICAgIFwic2ltbWVyXCIsXG4gICAgXCJuZXRmbGl4IGFuZCBjaGlsbFwiLFxuICAgIFwiY2hhcG9cIixcbiAgICBcInN0b29wXCIsXG4gICAgXCJibGFzZVwiLFxuICAgIFwicGxlYlwiLFxuICAgIFwibG93a2V5XCIsXG4gICAgXCJ0b21lXCIsXG4gICAgXCJ3YXBcIixcbiAgICBcInNodWRkZXJcIixcbiAgICBcImJ1cm50XCIsXG4gICAgXCJ2YXBlXCJcbl1cblxuXG5cbm1vZHVsZS5leHBvcnRzID0geyAkMjAxOSwgJDIwMTlfc2VhcmNoVGVybXMsICQyMDE5X3NldHMgfTsiXSwic291cmNlUm9vdCI6IiJ9