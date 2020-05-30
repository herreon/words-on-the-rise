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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n#intro {\n  background-color: white;\n  height: 80vh; }\n\n#title {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6;\n  height: 100%;\n  width: 50%;\n  padding-left: 60px;\n  padding-bottom: 80px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-end;\n  box-sizing: border-box; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  padding-bottom: 20px; }\n\n#title p {\n  width: 100%; }\n\n#intro-divider {\n  background-color: #e8fbff;\n  height: 20vh; }\n\n/* variables */\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 120%; }\n\n/* LINE CHART */\npath.line-0 {\n  fill: none;\n  stroke: #ed3700; }\n\npath.line-1 {\n  fill: none;\n  stroke: #2b2929;\n  /* stroke-dasharray: 2; */ }\n\npath.line-2 {\n  fill: none;\n  stroke: #9c9c9c;\n  /* stroke-dasharray: 6; */ }\n\npath.line-3 {\n  fill: none;\n  stroke: orange; }\n\npath.line-4 {\n  fill: none;\n  stroke: cyan; }\n\npath.line-5 {\n  fill: none;\n  stroke: pink; }\n\npath.line-6 {\n  fill: none;\n  stroke: blue; }\n\npath.line-7 {\n  fill: none;\n  stroke: black; }\n\npath.line-8 {\n  fill: none;\n  stroke: purple; }\n\npath.line-9 {\n  fill: none;\n  stroke: green; }\n\npath.line-10 {\n  fill: none;\n  stroke: red; }\n\n/* term labels */\n.term_label {\n  /* fill: #2b2929; */\n  fill: red;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 80%; }\n\n.a {\n  fill: blue; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n", ""]);
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
function test_function () {

    // document.addEventListener("DOMContentLoaded", function () {
        console.log("example.js content has loaded");

        const width = 960;
        const height = 500;
        const margin = 5;
        const padding = 5;
        const adj = 30;

        // we are appending SVG first - edited adj
        const svg = d3.select("#container").append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", (-1 * adj) + " " + (-1 * adj) + " " + (width + 3 * adj) + " " + (height + 3 * adj))
            .style("padding", padding)
            .style("margin", margin)
            .classed("svg-content", true);

        //-----------------------------DATA------------------------------//

        const timeConv = d3.timeParse("%d-%b-%Y");
        const dataset = d3.csv("./dist/assets/test.csv");

        dataset.then(function (data) {
            console.log("example_data", data)
            const slices = data.columns.slice(1).map(function (id) {
                return {
                    id: id,
                    values: data.map(function (d) {
                        return {
                            date: timeConv(d.date),
                            measurement: +d[id]
                        };
                    })
                };
            });


            //    console.log("Column headers", data.columns);
            //  console.log("Column headers without date", data.columns.slice(1));
            //    // returns the sliced dataset
            console.log("example_slices", slices);
            //    // returns the first slice
            //    console.log("First slice",slices[0]);
            //    // returns the array in the first slice
            //    console.log("A array",slices[0].values);
            //    // returns the date of the first row in the first slice
            //    console.log("Date element",slices[0].values[0].date);
            //    // returns the array's length
            //    console.log("Array length",(slices[0].values).length);


            //----------------------------SCALES-----------------------------//

            // stretch data values from 0 to the svg's width
            const xScale = d3.scaleTime().range([0, width]);
            const yScale = d3.scaleLinear().rangeRound([height, 0]);

            xScale.domain(
                d3.extent(data, function (d) {
                    return timeConv(d.date);
                })
            );

            yScale.domain([0,
                d3.max(slices, function (c) {
                    return d3.max(c.values, function (d) {
                        return d.measurement + 4;
                    });
                })
            ]);

            // returns undefined:
            // console.log("example_xScale", xScale());


            //-----------------------------AXES------------------------------//

            const yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale);

            const xaxis = d3
                .axisBottom()
                .ticks(d3.timeDay.every(1))
                .tickFormat(d3.timeFormat("%b %d"))
                .scale(xScale);

            //----------------------------LINES------------------------------//

            const line = d3.line()
                .x(function (d) { return xScale(d.date); })
                .y(function (d) { return yScale(d.measurement); });

            let id = 0;
            const ids = function () {
                return "line-" + id++;
            }


            //-------------------------2. DRAWING----------------------------//

            //-----------------------------AXES------------------------------//


            svg
                .append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xaxis);

            svg
                .append("g")
                .attr("class", "axis")
                .call(yaxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("dy", "0.75em")
                .attr("y", 6)
                .style("text-anchor", "end")
                .text("Frequency");

            //----------------------------LINES------------------------------//

            const lines = svg.selectAll("lines")
                .data(slices)
                .enter()
                .append("g");

            lines.append("path")
                .attr("class", ids)
                .attr("d", function (d) { return line(d.values); });

            lines.append("text")
                .attr("class", "serie_label")
                // .datum(function (d) {
                //     return {
                //         ide: d.id,
                //         valuee: d.values[d.values.length - 1]
                //     };
                // })
                .attr("transform", function (d) {
                    return "translate(" + (xScale(d.values[d.values.length - 1].date) + 10)
                        + "," + (yScale(d.values[d.values.length - 1].measurement) + 5) + ")";
                })
                .attr("x", 5)
                .text(function (d) { return ("Serie ") + d.id })
                // .attr("class", function(d) { return d.value } )
        });

    // })
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
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../dist/assets/styles/styles.scss */ "./dist/assets/styles/styles.scss");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_1__);



// searchTerms is the array of the most rising words of 2019
const searchTerms = __webpack_require__(/*! ./searchTerms.js */ "./src/searchTerms.js");

// set the dimensions and margins of the svg
const width = 700;
const height = 600;
const adj = 100;

// parse the date and time
const timeConv = d3.timeParse("%b %d, %Y");
const dataset = d3.json("./dist/assets/data.json");

const slices = [];
dataset.then(function (data) {
  let i;

  for (i = 0; i < searchTerms.length; i++) {
    const slice = {
      term: searchTerms[i],
      values: data.map(function (d) {
        return {
          date: timeConv(d.formattedAxisTime),
          point: +d.value[i]
        }
      })
    }
    slices.push(slice)
  }
})

const chartTemplate = function() {
  function make() {

  }

  return make();
}

document.addEventListener("DOMContentLoaded", function () {
  
  console.log("index.js content has loaded");
  console.log("search terms", searchTerms)

  console.log("slices", slices)
});

  // // append SVG
  // const svg = d3.select("#container").append("svg")
  //   .attr("preserveAspectRatio", "xMinYMin meet")
  //   .attr("width", width)
  //   .attr("height", height)
  //   .attr("viewBox", `-${adj} -${adj} ${width + adj*3} ${height + adj*3}`)
  //   .classed("svg-content", true);

  // //-----------------------------[prep]DATA------------------------------//
  

  // dataset.then(function (data) {

  //   const countPoints = slices[0].values.length;


  //   //----------------------------[prep]SCALES-----------------------------//
  //   // stretch data values from 0 to the svg's width
  //   const xScale = d3.scaleTime().range([0, width]);
  //   const yScale = d3.scaleLinear().rangeRound([height, 0]);
    

  //   // define min and max values for domain on x-axis (time)
  //   const startDate = d3.min(slices, function (s) {
  //     return d3.min(s.values, function (v) {
  //       return v.date
  //     })
  //   });

  //   const endDate = d3.max(slices, function (s) {
  //     return d3.max(s.values, function (v) {
  //       return v.date
  //     })
  //   });

    
  //   // define max value for domain on y-axis (points)
  //   const maxY = d3.max(slices, function (s) {
  //     return d3.max(s.values, function(v) {
  //       return v.point
  //     })
  //   })

  //   // set domain of x-axis
  //   xScale.domain([startDate, endDate])
    
  //   // set domain of y-axis
  //   yScale.domain([0, maxY])

  //   // FOR TESTING DOMAIN VALUES
  //   // console.log("minX", startDate);
  //   // console.log("maxX", endDate);
  //   // console.log("maxY", maxY);


  // //-----------------------------[prep]AXES------------------------------//
  
  // const xAxis = d3
  //   .axisBottom()
  //   .ticks(d3.timeMonth.every(12))
  //   .tickFormat(d3.timeFormat("%b %Y"))
  //   // .ticks(d3.timeYear.every(1))
  //   // .tickFormat(d3.timeFormat("%Y"))
  //   .scale(xScale);

  // const yAxis = d3
  //   .axisLeft()
  //   .ticks(countPoints / 10)
  //   .scale(yScale);

  // //----------------------------[prep]LINES------------------------------//

  // // const array1 = [1, 2, 3, 4];
  // const reducer = (accumulator, currentValue) => accumulator + currentValue;
  // const calcAverage = function(array) {
  //   return array.reduce(reducer) / array.length;
  // }
  // // console.log("test", calcAverage(array1));

  // // accessor function. Takes in the data array and extracts the x,y coordinates
  // const tracker = []
  // const line = d3
  //   .line()
  //   .x(function (d) { return xScale(d.date); })
  //   .y(function (d, i) {
  //     console.log(d.point);
  //     console.log("i", i);

  //     if (i === 0) {
  //       tracker.splice(0, tracker.length);
  //     }
      
  //     tracker.push(d.point);
  //     console.log("tracker", tracker)
      
  //     if (tracker.length < 12) {
  //       return null
  //     } else if (tracker.length === 12) {
  //             console.log("tracker", tracker);

  //              let averageValue = calcAverage(tracker);
  //              tracker.shift();

  //              console.log("averageValue", averageValue)
  //             //  return yScale(averageValue)
  //            }
  //     return yScale(d.point); 
  //   })
  
  
  // // to illustrate line.y()
  // // const line = d3
  // //   .line()
  // //   .x(function (d) { return xScale(d.date); })
  // //   .y(function (d) { return d.point; });
  
  // // to differentiate lines
  // let lineId = 0;
  // const lineIds = function () {
  //     return "line-" + lineId++;
  // }

  // //----------------------------[prep]TOOLTIP------------------------------//
  
  // const tooltip = d3.select("body").append("div") // currently experimenting with select
  //   .attr("class", "tooltip")
  //   .style("opacity", 0)
  //   .style("position", "absolute");
  
  // // experimenting with selectors
  // // console.log("g", d3.select("g")); // selecting g returns an empty array
  // // console.log("g2", d3.selectAll("g")); // similar to above; no elements returned
  // // console.log("g3", d3.select("body"));
  // // console.log("svg", d3.select("svg")); 

  // //-----------------------------[drawing]AXES------------------------------//

  // svg
  //   .append("g")
  //   .attr("class", "axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxis) // .call calls the function xAxis on the elements of the selection g

  // svg
  //   .append("g")
  //   .attr("class", "axis")
  //   .call(yAxis)
  //   .append("text")
  //   .text("Frequency")
  //   .attr("dy", "0.75em")
  //   .attr("y", -40)
  //   .style("text-anchor", "end");

  // //----------------------------[drawing]LINES------------------------------//

  // const lines = svg.selectAll("lines")
  //   .data(slices)
  //   .enter()
  //   .append("g")

  // lines.append("path")
  //   .attr("class", lineIds) // differentiate lines
  //   .attr("d", function (d) { return line(d.values); })
  

  // // add labels to each line
  // lines.append("text")
  //   .attr("class", "term_label" + " a")
  //   .text(function (d) { return d.term })
  //   .attr("x", 5)
  //   .attr("transform", function (d) {
  //     const numPoints = d.values.length - 1; // the index of the last data point
  //     const labelX = xScale(d.values[numPoints].date) + 10;
  //     const labelY = yScale(d.values[numPoints].point) + 5;
  //     return "translate(" + labelX + "," + labelY + ")";
  //   })
    

  // // to illustrate svg path mini-language
  //   // svg.append("path")
  //   // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
  
  
  // //----------------------------[interactive]POINTS------------------------------//

  // lines.selectAll("points")
  //   .data(function (d) { return d.values })
  //   .enter()
  //   .append("circle")
  //   .attr("cx", function (d) { return xScale(d.date); })
  //   .attr("cy", function (d) { return yScale(d.point); })
  //   .attr("r", 1)
  //   .attr("class", "point")
  //   .style("opacity", 1);

  // //----------------------------[interactive]EVENTS------------------------------//

  // // add invisible circles to increase responsive area
  // lines.selectAll("points")
  //   .data(function (d) { return (d.values); })
  //   .enter()
  //   .append("circle")
  //   .attr("cx", function (d) { return xScale(d.date); })
  //   .attr("cy", function (d) { return yScale(d.point); })
  //   .attr('r', 10)
  //   .style("opacity", 0)

  //   // configure events
  //   .on('mouseover', function (d) {
      
  //     tooltip.transition()
  //       .delay(30)
  //       .duration(200)
  //       .style("opacity", 1);
  //       // .style("fill", "red") // removed because unnecessary
      
  //     tooltip.html(d.point)
  //     .attr("cx", ( xScale(d.date) ))
  //     .attr("cy", ( yScale(d.point) ));
  //     // .style("left", (d3.event.pageX + 25) + "px")
  //     // .style("top", (d3.event.pageY) + "px");

  //     const selection = d3.select(this) // [this] is the invisible circle
  //       .raise(); // .raise() re-inserts each selected element, in order, as the last child of its parent
      
  //     // console.log(this);
  //     // console.log(d);
      
  //     selection
  //       .transition()
  //       .delay("20")
  //       .duration("200")
  //       .attr("r", 6)
  //       .style("opacity", 1)
  //       .style("fill", "#ed3700");
  //     })
      

  // .on("mouseout", function (d) {
  //     tooltip.transition()
  //       .duration(200)
  //       .style("opacity", 0);
      
  //   const selection = d3.select(this);

  //   selection
  //     .transition()
  //     .delay("20")
  //     .duration("200")
  //     .attr("r", 10)
  //     .style("opacity", 0);
  //   });
  
  // // test transitions 1
  // // d3.select("body")
  // // .transition()
  // // .delay(2000)
  // // .on("start", function() {d3.select(this).style("background-color", "green")}) // works the same if you replace [this] with ["body"]
  // // .style("background-color", "red")
  
  // // test transitions 2
  // // d3.select("body")
  // // .transition().delay(1000).duration(2000)
  // // .styleTween("background-color", function() { return d3.interpolate("green", "red")})
  

  // // run data visualization from example.js
  // // test_function();
  
  // });



/***/ }),

/***/ "./src/searchTerms.js":
/*!****************************!*\
  !*** ./src/searchTerms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

const searchTerms = ["vsco girl",
"boomer"
];

const waiting = [
    "and I oop",
    "asmr",
    "e girl",
    "sfs",
    "ngl",
    "simp",
    "uwu",
    "gaslighting",
    "lol"
]

module.exports = searchTerms;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvc2VhcmNoVGVybXMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FD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QTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7OztBQUdWO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVE7O0FBRVI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsbURBQW1EO0FBQ3BGOztBQUVBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCx1Q0FBdUM7OztBQUczRjtBQUNBOztBQUVBLE1BQU07Ozs7Ozs7Ozs7Ozs7QUM5VE47QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsNkIiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogODB2aDsgfVxcblxcbiN0aXRsZSB7XFxuICBmb250LWZhbWlseTogJ1JvYm90bycsIHNhbnMtc2VyaWY7XFxuICBmb250LXdlaWdodDogMzAwO1xcbiAgbGluZS1oZWlnaHQ6IDEuNjtcXG4gIGhlaWdodDogMTAwJTtcXG4gIHdpZHRoOiA1MCU7XFxuICBwYWRkaW5nLWxlZnQ6IDYwcHg7XFxuICBwYWRkaW5nLWJvdHRvbTogODBweDtcXG4gIGRpc3BsYXk6IGZsZXg7XFxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LWVuZDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBwYWRkaW5nLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwIHtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuI2ludHJvLWRpdmlkZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2U4ZmJmZjtcXG4gIGhlaWdodDogMjB2aDsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbi8qIEFYRVMgKi9cXG4vKiB0aWNrcyAqL1xcbi5heGlzIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC41O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLyogLmF4aXMgbGluZSB7XFxuc3Ryb2tlOiAjNzA2ZjZmO1xcbnN0cm9rZS13aWR0aDogMC41O1xcbnNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlcztcXG59ICovXFxuLyogYXhpcyBjb250b3VyICovXFxuLmF4aXMgcGF0aCB7XFxuICBzdHJva2U6ICM3MDZmNmY7XFxuICBzdHJva2Utd2lkdGg6IDAuNztcXG4gIHNoYXBlLXJlbmRlcmluZzogY3Jpc3BFZGdlczsgfVxcblxcbi8qIGF4aXMgdGV4dCAqL1xcbi5heGlzIHRleHQge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogMTIwJTsgfVxcblxcbi8qIExJTkUgQ0hBUlQgKi9cXG5wYXRoLmxpbmUtMCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjZWQzNzAwOyB9XFxuXFxucGF0aC5saW5lLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzJiMjkyOTtcXG4gIC8qIHN0cm9rZS1kYXNoYXJyYXk6IDI7ICovIH1cXG5cXG5wYXRoLmxpbmUtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjOWM5YzljO1xcbiAgLyogc3Ryb2tlLWRhc2hhcnJheTogNjsgKi8gfVxcblxcbnBhdGgubGluZS0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IG9yYW5nZTsgfVxcblxcbnBhdGgubGluZS00IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGN5YW47IH1cXG5cXG5wYXRoLmxpbmUtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBwaW5rOyB9XFxuXFxucGF0aC5saW5lLTYge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmx1ZTsgfVxcblxcbnBhdGgubGluZS03IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsYWNrOyB9XFxuXFxucGF0aC5saW5lLTgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcHVycGxlOyB9XFxuXFxucGF0aC5saW5lLTkge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogZ3JlZW47IH1cXG5cXG5wYXRoLmxpbmUtMTAge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogcmVkOyB9XFxuXFxuLyogdGVybSBsYWJlbHMgKi9cXG4udGVybV9sYWJlbCB7XFxuICAvKiBmaWxsOiAjMmIyOTI5OyAqL1xcbiAgZmlsbDogcmVkO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA4MCU7IH1cXG5cXG4uYSB7XFxuICBmaWxsOiBibHVlOyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuXCIsIFwiXCJdKTtcbi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0gZXhwb3J0cztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLy8gY3NzIGJhc2UgY29kZSwgaW5qZWN0ZWQgYnkgdGhlIGNzcy1sb2FkZXJcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGxpc3QgPSBbXTsgLy8gcmV0dXJuIHRoZSBsaXN0IG9mIG1vZHVsZXMgYXMgY3NzIHN0cmluZ1xuXG4gIGxpc3QudG9TdHJpbmcgPSBmdW5jdGlvbiB0b1N0cmluZygpIHtcbiAgICByZXR1cm4gdGhpcy5tYXAoZnVuY3Rpb24gKGl0ZW0pIHtcbiAgICAgIHZhciBjb250ZW50ID0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApO1xuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICByZXR1cm4gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGNvbnRlbnQsIFwifVwiKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIGNvbnRlbnQ7XG4gICAgfSkuam9pbignJyk7XG4gIH07IC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBmdW5jLW5hbWVzXG5cblxuICBsaXN0LmkgPSBmdW5jdGlvbiAobW9kdWxlcywgbWVkaWFRdWVyeSwgZGVkdXBlKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSAnc3RyaW5nJykge1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXBhcmFtLXJlYXNzaWduXG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCAnJ11dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRoaXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIHZhciBpZCA9IHRoaXNbaV1bMF07XG5cbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbW9kdWxlcy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBpdGVtID0gW10uY29uY2F0KG1vZHVsZXNbX2ldKTtcblxuICAgICAgaWYgKGRlZHVwZSAmJiBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2l0ZW1bMF1dKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb250aW51ZVxuICAgICAgICBjb250aW51ZTtcbiAgICAgIH1cblxuICAgICAgaWYgKG1lZGlhUXVlcnkpIHtcbiAgICAgICAgaWYgKCFpdGVtWzJdKSB7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhUXVlcnk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsyXSA9IFwiXCIuY29uY2F0KG1lZGlhUXVlcnksIFwiIGFuZCBcIikuY29uY2F0KGl0ZW1bMl0pO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59O1xuXG5mdW5jdGlvbiBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCkge1xuICB2YXIgY29udGVudCA9IGl0ZW1bMV0gfHwgJyc7IC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuXG4gIHZhciBjc3NNYXBwaW5nID0gaXRlbVszXTtcblxuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuXG4gIGlmICh1c2VTb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgPT09ICdmdW5jdGlvbicpIHtcbiAgICB2YXIgc291cmNlTWFwcGluZyA9IHRvQ29tbWVudChjc3NNYXBwaW5nKTtcbiAgICB2YXIgc291cmNlVVJMcyA9IGNzc01hcHBpbmcuc291cmNlcy5tYXAoZnVuY3Rpb24gKHNvdXJjZSkge1xuICAgICAgcmV0dXJuIFwiLyojIHNvdXJjZVVSTD1cIi5jb25jYXQoY3NzTWFwcGluZy5zb3VyY2VSb290IHx8ICcnKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKCdcXG4nKTtcbiAgfVxuXG4gIHJldHVybiBbY29udGVudF0uam9pbignXFxuJyk7XG59IC8vIEFkYXB0ZWQgZnJvbSBjb252ZXJ0LXNvdXJjZS1tYXAgKE1JVClcblxuXG5mdW5jdGlvbiB0b0NvbW1lbnQoc291cmNlTWFwKSB7XG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby11bmRlZlxuICB2YXIgYmFzZTY0ID0gYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKTtcbiAgdmFyIGRhdGEgPSBcInNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2NoYXJzZXQ9dXRmLTg7YmFzZTY0LFwiLmNvbmNhdChiYXNlNjQpO1xuICByZXR1cm4gXCIvKiMgXCIuY29uY2F0KGRhdGEsIFwiICovXCIpO1xufSIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgaXNPbGRJRSA9IGZ1bmN0aW9uIGlzT2xkSUUoKSB7XG4gIHZhciBtZW1vO1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUoKSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vID09PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gVGVzdCBmb3IgSUUgPD0gOSBhcyBwcm9wb3NlZCBieSBCcm93c2VyaGFja3NcbiAgICAgIC8vIEBzZWUgaHR0cDovL2Jyb3dzZXJoYWNrcy5jb20vI2hhY2stZTcxZDg2OTJmNjUzMzQxNzNmZWU3MTVjMjIyY2I4MDVcbiAgICAgIC8vIFRlc3RzIGZvciBleGlzdGVuY2Ugb2Ygc3RhbmRhcmQgZ2xvYmFscyBpcyB0byBhbGxvdyBzdHlsZS1sb2FkZXJcbiAgICAgIC8vIHRvIG9wZXJhdGUgY29ycmVjdGx5IGludG8gbm9uLXN0YW5kYXJkIGVudmlyb25tZW50c1xuICAgICAgLy8gQHNlZSBodHRwczovL2dpdGh1Yi5jb20vd2VicGFjay1jb250cmliL3N0eWxlLWxvYWRlci9pc3N1ZXMvMTc3XG4gICAgICBtZW1vID0gQm9vbGVhbih3aW5kb3cgJiYgZG9jdW1lbnQgJiYgZG9jdW1lbnQuYWxsICYmICF3aW5kb3cuYXRvYik7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW87XG4gIH07XG59KCk7XG5cbnZhciBnZXRUYXJnZXQgPSBmdW5jdGlvbiBnZXRUYXJnZXQoKSB7XG4gIHZhciBtZW1vID0ge307XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSh0YXJnZXQpIHtcbiAgICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgICB0cnkge1xuICAgICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IHN0eWxlVGFyZ2V0LmNvbnRlbnREb2N1bWVudC5oZWFkO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgICBzdHlsZVRhcmdldCA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbWVtb1t0YXJnZXRdID0gc3R5bGVUYXJnZXQ7XG4gICAgfVxuXG4gICAgcmV0dXJuIG1lbW9bdGFyZ2V0XTtcbiAgfTtcbn0oKTtcblxudmFyIHN0eWxlc0luRG9tID0gW107XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpIHtcbiAgdmFyIHJlc3VsdCA9IC0xO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgc3R5bGVzSW5Eb20ubGVuZ3RoOyBpKyspIHtcbiAgICBpZiAoc3R5bGVzSW5Eb21baV0uaWRlbnRpZmllciA9PT0gaWRlbnRpZmllcikge1xuICAgICAgcmVzdWx0ID0gaTtcbiAgICAgIGJyZWFrO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKSB7XG4gIHZhciBpZENvdW50TWFwID0ge307XG4gIHZhciBpZGVudGlmaWVycyA9IFtdO1xuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuICAgIHZhciBpdGVtID0gbGlzdFtpXTtcbiAgICB2YXIgaWQgPSBvcHRpb25zLmJhc2UgPyBpdGVtWzBdICsgb3B0aW9ucy5iYXNlIDogaXRlbVswXTtcbiAgICB2YXIgY291bnQgPSBpZENvdW50TWFwW2lkXSB8fCAwO1xuICAgIHZhciBpZGVudGlmaWVyID0gXCJcIi5jb25jYXQoaWQsIFwiIFwiKS5jb25jYXQoY291bnQpO1xuICAgIGlkQ291bnRNYXBbaWRdID0gY291bnQgKyAxO1xuICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgIHZhciBvYmogPSB7XG4gICAgICBjc3M6IGl0ZW1bMV0sXG4gICAgICBtZWRpYTogaXRlbVsyXSxcbiAgICAgIHNvdXJjZU1hcDogaXRlbVszXVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXggIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGVzSW5Eb20ucHVzaCh7XG4gICAgICAgIGlkZW50aWZpZXI6IGlkZW50aWZpZXIsXG4gICAgICAgIHVwZGF0ZXI6IGFkZFN0eWxlKG9iaiwgb3B0aW9ucyksXG4gICAgICAgIHJlZmVyZW5jZXM6IDFcbiAgICAgIH0pO1xuICAgIH1cblxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cblxuICByZXR1cm4gaWRlbnRpZmllcnM7XG59XG5cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBzdHlsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3N0eWxlJyk7XG4gIHZhciBhdHRyaWJ1dGVzID0gb3B0aW9ucy5hdHRyaWJ1dGVzIHx8IHt9O1xuXG4gIGlmICh0eXBlb2YgYXR0cmlidXRlcy5ub25jZSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICB2YXIgbm9uY2UgPSB0eXBlb2YgX193ZWJwYWNrX25vbmNlX18gIT09ICd1bmRlZmluZWQnID8gX193ZWJwYWNrX25vbmNlX18gOiBudWxsO1xuXG4gICAgaWYgKG5vbmNlKSB7XG4gICAgICBhdHRyaWJ1dGVzLm5vbmNlID0gbm9uY2U7XG4gICAgfVxuICB9XG5cbiAgT2JqZWN0LmtleXMoYXR0cmlidXRlcykuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKGtleSwgYXR0cmlidXRlc1trZXldKTtcbiAgfSk7XG5cbiAgaWYgKHR5cGVvZiBvcHRpb25zLmluc2VydCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIG9wdGlvbnMuaW5zZXJ0KHN0eWxlKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KG9wdGlvbnMuaW5zZXJ0IHx8ICdoZWFkJyk7XG5cbiAgICBpZiAoIXRhcmdldCkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgICB9XG5cbiAgICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xuICB9XG5cbiAgcmV0dXJuIHN0eWxlO1xufVxuXG5mdW5jdGlvbiByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpIHtcbiAgLy8gaXN0YW5idWwgaWdub3JlIGlmXG4gIGlmIChzdHlsZS5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGUucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzdHlsZSk7XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG52YXIgcmVwbGFjZVRleHQgPSBmdW5jdGlvbiByZXBsYWNlVGV4dCgpIHtcbiAgdmFyIHRleHRTdG9yZSA9IFtdO1xuICByZXR1cm4gZnVuY3Rpb24gcmVwbGFjZShpbmRleCwgcmVwbGFjZW1lbnQpIHtcbiAgICB0ZXh0U3RvcmVbaW5kZXhdID0gcmVwbGFjZW1lbnQ7XG4gICAgcmV0dXJuIHRleHRTdG9yZS5maWx0ZXIoQm9vbGVhbikuam9pbignXFxuJyk7XG4gIH07XG59KCk7XG5cbmZ1bmN0aW9uIGFwcGx5VG9TaW5nbGV0b25UYWcoc3R5bGUsIGluZGV4LCByZW1vdmUsIG9iaikge1xuICB2YXIgY3NzID0gcmVtb3ZlID8gJycgOiBvYmoubWVkaWEgPyBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpLmNvbmNhdChvYmouY3NzLCBcIn1cIikgOiBvYmouY3NzOyAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gcmVwbGFjZVRleHQoaW5kZXgsIGNzcyk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGNzc05vZGUgPSBkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpO1xuICAgIHZhciBjaGlsZE5vZGVzID0gc3R5bGUuY2hpbGROb2RlcztcblxuICAgIGlmIChjaGlsZE5vZGVzW2luZGV4XSkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH1cblxuICAgIGlmIChjaGlsZE5vZGVzLmxlbmd0aCkge1xuICAgICAgc3R5bGUuaW5zZXJ0QmVmb3JlKGNzc05vZGUsIGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgc3R5bGUuYXBwZW5kQ2hpbGQoY3NzTm9kZSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGFwcGx5VG9UYWcoc3R5bGUsIG9wdGlvbnMsIG9iaikge1xuICB2YXIgY3NzID0gb2JqLmNzcztcbiAgdmFyIG1lZGlhID0gb2JqLm1lZGlhO1xuICB2YXIgc291cmNlTWFwID0gb2JqLnNvdXJjZU1hcDtcblxuICBpZiAobWVkaWEpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoJ21lZGlhJywgbWVkaWEpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlLnJlbW92ZUF0dHJpYnV0ZSgnbWVkaWEnKTtcbiAgfVxuXG4gIGlmIChzb3VyY2VNYXAgJiYgYnRvYSkge1xuICAgIGNzcyArPSBcIlxcbi8qIyBzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtiYXNlNjQsXCIuY29uY2F0KGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSksIFwiICovXCIpO1xuICB9IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IGNzcztcbiAgfSBlbHNlIHtcbiAgICB3aGlsZSAoc3R5bGUuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGUucmVtb3ZlQ2hpbGQoc3R5bGUuZmlyc3RDaGlsZCk7XG4gICAgfVxuXG4gICAgc3R5bGUuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxudmFyIHNpbmdsZXRvbiA9IG51bGw7XG52YXIgc2luZ2xldG9uQ291bnRlciA9IDA7XG5cbmZ1bmN0aW9uIGFkZFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgc3R5bGU7XG4gIHZhciB1cGRhdGU7XG4gIHZhciByZW1vdmU7XG5cbiAgaWYgKG9wdGlvbnMuc2luZ2xldG9uKSB7XG4gICAgdmFyIHN0eWxlSW5kZXggPSBzaW5nbGV0b25Db3VudGVyKys7XG4gICAgc3R5bGUgPSBzaW5nbGV0b24gfHwgKHNpbmdsZXRvbiA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCBmYWxzZSk7XG4gICAgcmVtb3ZlID0gYXBwbHlUb1NpbmdsZXRvblRhZy5iaW5kKG51bGwsIHN0eWxlLCBzdHlsZUluZGV4LCB0cnVlKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZSA9IGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvVGFnLmJpbmQobnVsbCwgc3R5bGUsIG9wdGlvbnMpO1xuXG4gICAgcmVtb3ZlID0gZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKTtcbiAgICB9O1xuICB9XG5cbiAgdXBkYXRlKG9iaik7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGVTdHlsZShuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgdXBkYXRlKG9iaiA9IG5ld09iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJlbW92ZSgpO1xuICAgIH1cbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGlzdCwgb3B0aW9ucykge1xuICBvcHRpb25zID0gb3B0aW9ucyB8fCB7fTsgLy8gRm9yY2Ugc2luZ2xlLXRhZyBzb2x1dGlvbiBvbiBJRTYtOSwgd2hpY2ggaGFzIGEgaGFyZCBsaW1pdCBvbiB0aGUgIyBvZiA8c3R5bGU+XG4gIC8vIHRhZ3MgaXQgd2lsbCBhbGxvdyBvbiBhIHBhZ2VcblxuICBpZiAoIW9wdGlvbnMuc2luZ2xldG9uICYmIHR5cGVvZiBvcHRpb25zLnNpbmdsZXRvbiAhPT0gJ2Jvb2xlYW4nKSB7XG4gICAgb3B0aW9ucy5zaW5nbGV0b24gPSBpc09sZElFKCk7XG4gIH1cblxuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBpZiAoT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG5ld0xpc3QpICE9PSAnW29iamVjdCBBcnJheV0nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBpZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW2ldO1xuICAgICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0ucmVmZXJlbmNlcy0tO1xuICAgIH1cblxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG5cbiAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIF9pZGVudGlmaWVyID0gbGFzdElkZW50aWZpZXJzW19pXTtcblxuICAgICAgdmFyIF9pbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKF9pZGVudGlmaWVyKTtcblxuICAgICAgaWYgKHN0eWxlc0luRG9tW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRvbVtfaW5kZXhdLnVwZGF0ZXIoKTtcblxuICAgICAgICBzdHlsZXNJbkRvbS5zcGxpY2UoX2luZGV4LCAxKTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBsYXN0SWRlbnRpZmllcnMgPSBuZXdMYXN0SWRlbnRpZmllcnM7XG4gIH07XG59OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RfZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gOTYwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xuICAgICAgICBjb25zdCBhZGogPSAzMDtcblxuICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIFNWRyBmaXJzdCAtIGVkaXRlZCBhZGpcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCAoLTEgKiBhZGopICsgXCIgXCIgKyAoLTEgKiBhZGopICsgXCIgXCIgKyAod2lkdGggKyAzICogYWRqKSArIFwiIFwiICsgKGhlaWdodCArIDMgKiBhZGopKVxuICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWQtJWItJVlcIik7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuXG4gICAgICAgIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX2RhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX3NsaWNlc1wiLCBzbGljZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkEgYXJyYXlcIixzbGljZXNbMF0udmFsdWVzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5J3MgbGVuZ3RoXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgIHhTY2FsZS5kb21haW4oXG4gICAgICAgICAgICAgICAgZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLFxuICAgICAgICAgICAgICAgIGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJucyB1bmRlZmluZWQ6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4YW1wbGVfeFNjYWxlXCIsIHhTY2FsZSgpKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAgICAgICAgICAgY29uc3QgeGF4aXMgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAudGlja3MoZDMudGltZURheS5ldmVyeSgxKSlcbiAgICAgICAgICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJWRcIikpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0yLiBEUkFXSU5HLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHhheGlzKTtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHlheGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoc2xpY2VzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGlkcylcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZXJpZV9sYWJlbFwiKVxuICAgICAgICAgICAgICAgIC8vIC5kYXR1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRlOiBkLmlkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5kYXRlKSArIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIixcIiArICh5U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0ubWVhc3VyZW1lbnQpICsgNSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoXCJTZXJpZSBcIikgKyBkLmlkIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0gKVxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vZXhhbXBsZS5qc1wiO1xuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG4vLyBzZWFyY2hUZXJtcyBpcyB0aGUgYXJyYXkgb2YgdGhlIG1vc3QgcmlzaW5nIHdvcmRzIG9mIDIwMTlcbmNvbnN0IHNlYXJjaFRlcm1zID0gcmVxdWlyZShcIi4vc2VhcmNoVGVybXMuanNcIik7XG5cbi8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgc3ZnXG5jb25zdCB3aWR0aCA9IDcwMDtcbmNvbnN0IGhlaWdodCA9IDYwMDtcbmNvbnN0IGFkaiA9IDEwMDtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWVcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuY29uc3QgZGF0YXNldCA9IGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL2RhdGEuanNvblwiKTtcblxuY29uc3Qgc2xpY2VzID0gW107XG5kYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgbGV0IGk7XG5cbiAgZm9yIChpID0gMDsgaSA8IHNlYXJjaFRlcm1zLmxlbmd0aDsgaSsrKSB7XG4gICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICB0ZXJtOiBzZWFyY2hUZXJtc1tpXSxcbiAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmZvcm1hdHRlZEF4aXNUaW1lKSxcbiAgICAgICAgICBwb2ludDogK2QudmFsdWVbaV1cbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9XG4gICAgc2xpY2VzLnB1c2goc2xpY2UpXG4gIH1cbn0pXG5cbmNvbnN0IGNoYXJ0VGVtcGxhdGUgPSBmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gbWFrZSgpIHtcblxuICB9XG5cbiAgcmV0dXJuIG1ha2UoKTtcbn1cblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGNvbnNvbGUubG9nKFwic2xpY2VzXCIsIHNsaWNlcylcbn0pO1xuXG4gIC8vIC8vIGFwcGVuZCBTVkdcbiAgLy8gY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgLy8gICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gIC8vICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgLy8gICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gIC8vICAgLmF0dHIoXCJ2aWV3Qm94XCIsIGAtJHthZGp9IC0ke2Fkan0gJHt3aWR0aCArIGFkaiozfSAke2hlaWdodCArIGFkaiozfWApXG4gIC8vICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuXG4gIC8vIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuXG4gIC8vICAgY29uc3QgY291bnRQb2ludHMgPSBzbGljZXNbMF0udmFsdWVzLmxlbmd0aDtcblxuXG4gIC8vICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAvLyAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAvLyAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAvLyAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgXG5cbiAgLy8gICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAvLyAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGQzLm1pbihzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gIC8vICAgICByZXR1cm4gZDMubWluKHMudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAvLyAgICAgICByZXR1cm4gdi5kYXRlXG4gIC8vICAgICB9KVxuICAvLyAgIH0pO1xuXG4gIC8vICAgY29uc3QgZW5kRGF0ZSA9IGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gIC8vICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAvLyAgICAgICByZXR1cm4gdi5kYXRlXG4gIC8vICAgICB9KVxuICAvLyAgIH0pO1xuXG4gICAgXG4gIC8vICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAvLyAgIGNvbnN0IG1heFkgPSBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAvLyAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAvLyAgICAgICByZXR1cm4gdi5wb2ludFxuICAvLyAgICAgfSlcbiAgLy8gICB9KVxuXG4gIC8vICAgLy8gc2V0IGRvbWFpbiBvZiB4LWF4aXNcbiAgLy8gICB4U2NhbGUuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgIFxuICAvLyAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gIC8vICAgeVNjYWxlLmRvbWFpbihbMCwgbWF4WV0pXG5cbiAgLy8gICAvLyBGT1IgVEVTVElORyBET01BSU4gVkFMVUVTXG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJtaW5YXCIsIHN0YXJ0RGF0ZSk7XG4gIC8vICAgLy8gY29uc29sZS5sb2coXCJtYXhYXCIsIGVuZERhdGUpO1xuICAvLyAgIC8vIGNvbnNvbGUubG9nKFwibWF4WVwiLCBtYXhZKTtcblxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIC8vIGNvbnN0IHhBeGlzID0gZDNcbiAgLy8gICAuYXhpc0JvdHRvbSgpXG4gIC8vICAgLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gIC8vICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVZXCIpKVxuICAvLyAgIC8vIC50aWNrcyhkMy50aW1lWWVhci5ldmVyeSgxKSlcbiAgLy8gICAvLyAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJVlcIikpXG4gIC8vICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgLy8gY29uc3QgeUF4aXMgPSBkM1xuICAvLyAgIC5heGlzTGVmdCgpXG4gIC8vICAgLnRpY2tzKGNvdW50UG9pbnRzIC8gMTApXG4gIC8vICAgLnNjYWxlKHlTY2FsZSk7XG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIC8vIC8vIGNvbnN0IGFycmF5MSA9IFsxLCAyLCAzLCA0XTtcbiAgLy8gY29uc3QgcmVkdWNlciA9IChhY2N1bXVsYXRvciwgY3VycmVudFZhbHVlKSA9PiBhY2N1bXVsYXRvciArIGN1cnJlbnRWYWx1ZTtcbiAgLy8gY29uc3QgY2FsY0F2ZXJhZ2UgPSBmdW5jdGlvbihhcnJheSkge1xuICAvLyAgIHJldHVybiBhcnJheS5yZWR1Y2UocmVkdWNlcikgLyBhcnJheS5sZW5ndGg7XG4gIC8vIH1cbiAgLy8gLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGNhbGNBdmVyYWdlKGFycmF5MSkpO1xuXG4gIC8vIC8vIGFjY2Vzc29yIGZ1bmN0aW9uLiBUYWtlcyBpbiB0aGUgZGF0YSBhcnJheSBhbmQgZXh0cmFjdHMgdGhlIHgseSBjb29yZGluYXRlc1xuICAvLyBjb25zdCB0cmFja2VyID0gW11cbiAgLy8gY29uc3QgbGluZSA9IGQzXG4gIC8vICAgLmxpbmUoKVxuICAvLyAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgLy8gICAueShmdW5jdGlvbiAoZCwgaSkge1xuICAvLyAgICAgY29uc29sZS5sb2coZC5wb2ludCk7XG4gIC8vICAgICBjb25zb2xlLmxvZyhcImlcIiwgaSk7XG5cbiAgLy8gICAgIGlmIChpID09PSAwKSB7XG4gIC8vICAgICAgIHRyYWNrZXIuc3BsaWNlKDAsIHRyYWNrZXIubGVuZ3RoKTtcbiAgLy8gICAgIH1cbiAgICAgIFxuICAvLyAgICAgdHJhY2tlci5wdXNoKGQucG9pbnQpO1xuICAvLyAgICAgY29uc29sZS5sb2coXCJ0cmFja2VyXCIsIHRyYWNrZXIpXG4gICAgICBcbiAgLy8gICAgIGlmICh0cmFja2VyLmxlbmd0aCA8IDEyKSB7XG4gIC8vICAgICAgIHJldHVybiBudWxsXG4gIC8vICAgICB9IGVsc2UgaWYgKHRyYWNrZXIubGVuZ3RoID09PSAxMikge1xuICAvLyAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInRyYWNrZXJcIiwgdHJhY2tlcik7XG5cbiAgLy8gICAgICAgICAgICAgIGxldCBhdmVyYWdlVmFsdWUgPSBjYWxjQXZlcmFnZSh0cmFja2VyKTtcbiAgLy8gICAgICAgICAgICAgIHRyYWNrZXIuc2hpZnQoKTtcblxuICAvLyAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJhdmVyYWdlVmFsdWVcIiwgYXZlcmFnZVZhbHVlKVxuICAvLyAgICAgICAgICAgICAvLyAgcmV0dXJuIHlTY2FsZShhdmVyYWdlVmFsdWUpXG4gIC8vICAgICAgICAgICAgfVxuICAvLyAgICAgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgXG4gIC8vICAgfSlcbiAgXG4gIFxuICAvLyAvLyB0byBpbGx1c3RyYXRlIGxpbmUueSgpXG4gIC8vIC8vIGNvbnN0IGxpbmUgPSBkM1xuICAvLyAvLyAgIC5saW5lKClcbiAgLy8gLy8gICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gIC8vIC8vICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQucG9pbnQ7IH0pO1xuICBcbiAgLy8gLy8gdG8gZGlmZmVyZW50aWF0ZSBsaW5lc1xuICAvLyBsZXQgbGluZUlkID0gMDtcbiAgLy8gY29uc3QgbGluZUlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gICAgIHJldHVybiBcImxpbmUtXCIgKyBsaW5lSWQrKztcbiAgLy8gfVxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXVRPT0xUSVAtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICBcbiAgLy8gY29uc3QgdG9vbHRpcCA9IGQzLnNlbGVjdChcImJvZHlcIikuYXBwZW5kKFwiZGl2XCIpIC8vIGN1cnJlbnRseSBleHBlcmltZW50aW5nIHdpdGggc2VsZWN0XG4gIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInRvb2x0aXBcIilcbiAgLy8gICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG4gIC8vICAgLnN0eWxlKFwicG9zaXRpb25cIiwgXCJhYnNvbHV0ZVwiKTtcbiAgXG4gIC8vIC8vIGV4cGVyaW1lbnRpbmcgd2l0aCBzZWxlY3RvcnNcbiAgLy8gLy8gY29uc29sZS5sb2coXCJnXCIsIGQzLnNlbGVjdChcImdcIikpOyAvLyBzZWxlY3RpbmcgZyByZXR1cm5zIGFuIGVtcHR5IGFycmF5XG4gIC8vIC8vIGNvbnNvbGUubG9nKFwiZzJcIiwgZDMuc2VsZWN0QWxsKFwiZ1wiKSk7IC8vIHNpbWlsYXIgdG8gYWJvdmU7IG5vIGVsZW1lbnRzIHJldHVybmVkXG4gIC8vIC8vIGNvbnNvbGUubG9nKFwiZzNcIiwgZDMuc2VsZWN0KFwiYm9keVwiKSk7XG4gIC8vIC8vIGNvbnNvbGUubG9nKFwic3ZnXCIsIGQzLnNlbGVjdChcInN2Z1wiKSk7IFxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bZHJhd2luZ11BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyBzdmdcbiAgLy8gICAuYXBwZW5kKFwiZ1wiKVxuICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gIC8vICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAvLyAgIC5jYWxsKHhBeGlzKSAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gIC8vIHN2Z1xuICAvLyAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgLy8gICAuY2FsbCh5QXhpcylcbiAgLy8gICAuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gIC8vICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAvLyAgIC5hdHRyKFwieVwiLCAtNDApXG4gIC8vICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2RyYXdpbmddTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIC8vIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gIC8vICAgLmRhdGEoc2xpY2VzKVxuICAvLyAgIC5lbnRlcigpXG4gIC8vICAgLmFwcGVuZChcImdcIilcblxuICAvLyBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBsaW5lSWRzKSAvLyBkaWZmZXJlbnRpYXRlIGxpbmVzXG4gIC8vICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSlcbiAgXG5cbiAgLy8gLy8gYWRkIGxhYmVscyB0byBlYWNoIGxpbmVcbiAgLy8gbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0ZXJtX2xhYmVsXCIgKyBcIiBhXCIpXG4gIC8vICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudGVybSB9KVxuICAvLyAgIC5hdHRyKFwieFwiLCA1KVxuICAvLyAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gIC8vICAgICBjb25zdCBudW1Qb2ludHMgPSBkLnZhbHVlcy5sZW5ndGggLSAxOyAvLyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZGF0YSBwb2ludFxuICAvLyAgICAgY29uc3QgbGFiZWxYID0geFNjYWxlKGQudmFsdWVzW251bVBvaW50c10uZGF0ZSkgKyAxMDtcbiAgLy8gICAgIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tudW1Qb2ludHNdLnBvaW50KSArIDU7XG4gIC8vICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyBsYWJlbFggKyBcIixcIiArIGxhYmVsWSArIFwiKVwiO1xuICAvLyAgIH0pXG4gICAgXG5cbiAgLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4gIC8vICAgLy8gc3ZnLmFwcGVuZChcInBhdGhcIilcbiAgLy8gICAvLyAuYXR0cihcImRcIiwgXCJNMSwgNUwyMCwgMjBMNDAsIDEwTDYwLCA0MEw4MCwgNUwxMDAsIDYwXCIpXG4gIFxuICBcbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4gIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4gIC8vICAgLmVudGVyKClcbiAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXUVWRU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgLy8gLy8gYWRkIGludmlzaWJsZSBjaXJjbGVzIHRvIGluY3JlYXNlIHJlc3BvbnNpdmUgYXJlYVxuICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbiAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gKGQudmFsdWVzKTsgfSlcbiAgLy8gICAuZW50ZXIoKVxuICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4gIC8vICAgLmF0dHIoJ3InLCAxMClcbiAgLy8gICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApXG5cbiAgLy8gICAvLyBjb25maWd1cmUgZXZlbnRzXG4gIC8vICAgLm9uKCdtb3VzZW92ZXInLCBmdW5jdGlvbiAoZCkge1xuICAgICAgXG4gIC8vICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAvLyAgICAgICAuZGVsYXkoMzApXG4gIC8vICAgICAgIC5kdXJhdGlvbigyMDApXG4gIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG4gIC8vICAgICAgIC8vIC5zdHlsZShcImZpbGxcIiwgXCJyZWRcIikgLy8gcmVtb3ZlZCBiZWNhdXNlIHVubmVjZXNzYXJ5XG4gICAgICBcbiAgLy8gICAgIHRvb2x0aXAuaHRtbChkLnBvaW50KVxuICAvLyAgICAgLmF0dHIoXCJjeFwiLCAoIHhTY2FsZShkLmRhdGUpICkpXG4gIC8vICAgICAuYXR0cihcImN5XCIsICggeVNjYWxlKGQucG9pbnQpICkpO1xuICAvLyAgICAgLy8gLnN0eWxlKFwibGVmdFwiLCAoZDMuZXZlbnQucGFnZVggKyAyNSkgKyBcInB4XCIpXG4gIC8vICAgICAvLyAuc3R5bGUoXCJ0b3BcIiwgKGQzLmV2ZW50LnBhZ2VZKSArIFwicHhcIik7XG5cbiAgLy8gICAgIGNvbnN0IHNlbGVjdGlvbiA9IGQzLnNlbGVjdCh0aGlzKSAvLyBbdGhpc10gaXMgdGhlIGludmlzaWJsZSBjaXJjbGVcbiAgLy8gICAgICAgLnJhaXNlKCk7IC8vIC5yYWlzZSgpIHJlLWluc2VydHMgZWFjaCBzZWxlY3RlZCBlbGVtZW50LCBpbiBvcmRlciwgYXMgdGhlIGxhc3QgY2hpbGQgb2YgaXRzIHBhcmVudFxuICAgICAgXG4gIC8vICAgICAvLyBjb25zb2xlLmxvZyh0aGlzKTtcbiAgLy8gICAgIC8vIGNvbnNvbGUubG9nKGQpO1xuICAgICAgXG4gIC8vICAgICBzZWxlY3Rpb25cbiAgLy8gICAgICAgLnRyYW5zaXRpb24oKVxuICAvLyAgICAgICAuZGVsYXkoXCIyMFwiKVxuICAvLyAgICAgICAuZHVyYXRpb24oXCIyMDBcIilcbiAgLy8gICAgICAgLmF0dHIoXCJyXCIsIDYpXG4gIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgLy8gICAgICAgLnN0eWxlKFwiZmlsbFwiLCBcIiNlZDM3MDBcIik7XG4gIC8vICAgICB9KVxuICAgICAgXG5cbiAgLy8gLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgLy8gICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gIC8vICAgICAgIC5kdXJhdGlvbigyMDApXG4gIC8vICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gICAgICBcbiAgLy8gICBjb25zdCBzZWxlY3Rpb24gPSBkMy5zZWxlY3QodGhpcyk7XG5cbiAgLy8gICBzZWxlY3Rpb25cbiAgLy8gICAgIC50cmFuc2l0aW9uKClcbiAgLy8gICAgIC5kZWxheShcIjIwXCIpXG4gIC8vICAgICAuZHVyYXRpb24oXCIyMDBcIilcbiAgLy8gICAgIC5hdHRyKFwiclwiLCAxMClcbiAgLy8gICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMCk7XG4gIC8vICAgfSk7XG4gIFxuICAvLyAvLyB0ZXN0IHRyYW5zaXRpb25zIDFcbiAgLy8gLy8gZDMuc2VsZWN0KFwiYm9keVwiKVxuICAvLyAvLyAudHJhbnNpdGlvbigpXG4gIC8vIC8vIC5kZWxheSgyMDAwKVxuICAvLyAvLyAub24oXCJzdGFydFwiLCBmdW5jdGlvbigpIHtkMy5zZWxlY3QodGhpcykuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwiZ3JlZW5cIil9KSAvLyB3b3JrcyB0aGUgc2FtZSBpZiB5b3UgcmVwbGFjZSBbdGhpc10gd2l0aCBbXCJib2R5XCJdXG4gIC8vIC8vIC5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJyZWRcIilcbiAgXG4gIC8vIC8vIHRlc3QgdHJhbnNpdGlvbnMgMlxuICAvLyAvLyBkMy5zZWxlY3QoXCJib2R5XCIpXG4gIC8vIC8vIC50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuZHVyYXRpb24oMjAwMClcbiAgLy8gLy8gLnN0eWxlVHdlZW4oXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIGZ1bmN0aW9uKCkgeyByZXR1cm4gZDMuaW50ZXJwb2xhdGUoXCJncmVlblwiLCBcInJlZFwiKX0pXG4gIFxuXG4gIC8vIC8vIHJ1biBkYXRhIHZpc3VhbGl6YXRpb24gZnJvbSBleGFtcGxlLmpzXG4gIC8vIC8vIHRlc3RfZnVuY3Rpb24oKTtcbiAgXG4gIC8vIH0pO1xuXG4iLCJjb25zdCBzZWFyY2hUZXJtcyA9IFtcInZzY28gZ2lybFwiLFxuXCJib29tZXJcIlxuXTtcblxuY29uc3Qgd2FpdGluZyA9IFtcbiAgICBcImFuZCBJIG9vcFwiLFxuICAgIFwiYXNtclwiLFxuICAgIFwiZSBnaXJsXCIsXG4gICAgXCJzZnNcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwidXd1XCIsXG4gICAgXCJnYXNsaWdodGluZ1wiLFxuICAgIFwibG9sXCJcbl1cblxubW9kdWxlLmV4cG9ydHMgPSBzZWFyY2hUZXJtczsiXSwic291cmNlUm9vdCI6IiJ9