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
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@use \"sass:list\";\nhtml {\n  scroll-behavior: smooth; }\n\n#intro {\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 60px 0px 30px;\n  box-sizing: border-box;\n  display: flex; }\n\n#left {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  padding: 100px 0 100px 0;\n  box-sizing: border-box;\n  text-align: left;\n  justify-content: center;\n  text-align: center; }\n\n#graph-1 {\n  display: flex;\n  height: 100vh;\n  overflow: scroll; }\n\n#graph-1 > .svg-container {\n  background-color: #f5f5eb;\n  position: sticky;\n  top: 0; }\n\n#graph-1 svg {\n  padding: 40px; }\n\n#text-1 {\n  width: 100vw; }\n\n.panel {\n  padding: 35vh 10vh 40vh 10vh; }\n\n#banner-1, #banner-2 {\n  background-color: red;\n  height: 80px;\n  width: 100%; }\n\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line {\n  stroke-width: 1; }\n\n.hover-line {\n  fill: none;\n  stroke: #d2d2d2;\n  opacity: 0;\n  stroke-width: 20; }\n\n.label {\n  padding: 100;\n  font-size: 12px; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n#left, #right, .panel {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6; }\n\n#left h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n#left p:last-of-type {\n  padding: 0 10% 0 10%; }\n\n#subtitle {\n  font-style: italic;\n  font-size: 14px;\n  padding-bottom: 60px; }\n\n#right {\n  width: 40%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n#right > a {\n  text-decoration: none;\n  box-sizing: border-box;\n  text-align: center;\n  width: 300px;\n  padding: 10px;\n  margin-right: 30px;\n  background-color: #cfecf8;\n  font-weight: bold;\n  border-radius: 25px; }\n\n#right > a:hover {\n  background-color: #8bd3ee;\n  color: white;\n  font-weight: normal; }\n", ""]);
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

/***/ "./src/chart/addlabelCoords.js":
/*!*************************************!*\
  !*** ./src/chart/addlabelCoords.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// function to separate out labels that overlap
function addLabelCoords(data, chartIndexEnd, space, xScale, yScale) {
  var noCollisions = false;
  var yLabelValues = [];
  var yLabelValuesOriginal = []; // let yLabelValues = data.map(function(d) {
  //   return d;
  // })
  // let yLabelValuesOriginal = data.map(function(d) {
  //   return d;
  // })

  data.forEach(function (s) {
    console.log("add label values", s);
    var lastIndex = chartIndexEnd - 1;
    s.labelX = xScale(s.values[lastIndex].date);
    s.labelY = yScale(s.values[lastIndex].point); // if using max value of term's point as labelY
    // s.labelY = yScale(d3.max(s.values, function(v) {
    //   return v.point;
    // }) - 2);

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
          var greaterIndex = yLabelValuesOriginal[j] - yLabelValuesOriginal[i] > 0 ? j : i;
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

/***/ "./src/chart/chartA.js":
/*!*****************************!*\
  !*** ./src/chart/chartA.js ***!
  \*****************************/
/*! exports provided: chartA */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "chartA", function() { return chartA; });
/* harmony import */ var _addlabelCoords_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./addlabelCoords.js */ "./src/chart/addlabelCoords.js");
/* harmony import */ var _addlabelCoords_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_addlabelCoords_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _getDates_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getDates.js */ "./src/chart/getDates.js");
/* harmony import */ var _getDates_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_getDates_js__WEBPACK_IMPORTED_MODULE_1__);

 // import { termSliceValues } from "./getDates.js";
// creating reusable chart

function chartA() {
  // set the dimensions and margins of the svg
  var width = 1200 * 0.6;
  var height = 800 * 0.6;
  var adj = 30; // the following variables are used to render the actual date ranges on the chart

  var chartStartDate;
  var chartEndDate;
  var chartIndexStart;
  var chartIndexEnd;
  var maxY; // based on the chart start and end dates, determines which values to 
  // look at (chartIndexStart & chartIndexEnd), then determines the maxY value

  function updateMaxY(data, chartStartDate, chartEndDate) {
    for (var i = 0; i < data[0].values.length; i++) {
      if (data[0].values[i].date >= chartStartDate) {
        chartIndexStart = i;
        break;
      }
    }

    for (var _i = 0; _i < data[0].values.length; _i++) {
      if (data[0].values[_i].date > chartEndDate) {
        chartIndexEnd = _i;
        break;
      }

      chartIndexEnd = data[0].values.length;
    }

    maxY = d3.max(data, function (termSlice) {
      var valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);
      return d3.max(valueArray, function (v) {
        return v.point;
      });
    });
  }

  function draw(selection) {
    selection.each(function (data) {
      // define date min and max values for each chart frame
      // define min date for entire dataset
      var minDate = d3.min(data, function (d) {
        return d3.min(d.values, function (v) {
          return v.date;
        });
      }); // define max date for entire dataset

      var maxDate = d3.max(data, function (d) {
        return d3.max(d.values, function (v) {
          return v.date;
        });
      }); // define mid date for entire dataset

      var midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2); // max date for the first frame

      var juneDate = new Date(2019, 5, 30); // date of peak interest for vsco

      var vscoPeakDate = _getDates_js__WEBPACK_IMPORTED_MODULE_1__["getTermPeakDate"](data, "vsco"); // console.log("vscopeakdate", vscoPeakDate)
      // date of 1st week of 2020

      var janDate = new Date(2020, 0, 8); // console.log("vscopeakdate", vscoPeakDate)

      chartStartDate = minDate;
      chartEndDate = juneDate;
      updateMaxY(data, chartStartDate, chartEndDate); // console.log("maxY updated", maxY)
      // set domain and range of x-axis

      var xScale = d3.scaleTime().domain([chartStartDate, chartEndDate]).range([0, width]); // set domain of y-axis

      var yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]); // add label coordinates to dataset's termSlices

      Object(_addlabelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, chartIndexEnd, 12, xScale, yScale); // AXES

      var xAxis = d3.axisBottom(xScale); // .scale(xScale)

      xAxis.ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0);
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
      // append clip path

      var clip = svg.append("defs").append("clipPath").attr("id", "date-clip").append("rect").attr("x", xScale(chartStartDate)) //   .attr("x", xScale(minDate))
      .attr("y", yScale(maxY)) //   .attr("y", yScale(maxY - midMax))
      .attr("width", width).attr("height", height);
      svg.attr("clip-path", "url(#date-clip)").style("fill", "lightgrey"); // draw lines

      var line = d3.line().x(function (v) {
        return xScale(v.date);
      }).y(function (v) {
        return yScale(v.point);
      }).curve(d3.curveBasis);
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
      });
      var t = d3.transition().ease(d3.easeCubic).delay(1000).duration(5000); // FUNCTION TO UPDATE CHART

      function updateChart(newStartDate, newEndDate) {
        svg.selectAll("*").interrupt();
        console.log("CHART IS UPDATING");
        chartStartDate = newStartDate;
        chartEndDate = newEndDate;
        xScale.domain([chartStartDate, chartEndDate]); // console.log("x axis", svg.select(".x-axis"))
        // console.log("x axis", xAxis)

        svg.select(".x-axis").transition(t).call(xAxis); // svg.select(".x-axis").transition().delay(1000).call(xAxis);

        updateMaxY(data, chartStartDate, chartEndDate);
        yScale.domain([0, maxY]);
        lines.selectAll(".line").transition(t).attr("d", function (d) {
          return line(d.values);
        });
        lines.selectAll(".hover-line") //   .transition().delay(1000)
        .transition(t).attr("d", function (d) {
          return line(d.values);
        });
        Object(_addlabelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, chartIndexEnd, 12, xScale, yScale);
        lines.selectAll(".label") // .transition().delay(1000)
        .transition(t).attr("x", 5).attr("transform", function (d, i) {
          return "translate(".concat(d.labelX, ", ").concat(d.labelY, ")");
        });
      } // Add mousover interactive elements


      svg.selectAll(".hover-line, .label, .line").on("mouseover", function (d, i, nodes) {
        // console.log("this", this)
        // console.log("d", d)
        // console.log("i", i)
        // console.log("nodes", nodes)
        // nodes = [line(0), label(0), hover-line(0), line(1), label(1), hover-line(1)...]
        var selected_i = Math.floor(i / 3); // increase opacity of both line and label

        var selected = d3.selectAll(".line-".concat(selected_i, ", .label-").concat(selected_i)).raise().style("opacity", 1);
        selected.transition(); // apply thicker stroke only to line

        d3.selectAll(".line-".concat(selected_i)).style("stroke-width", 5);
      }).on("mouseout", function (d, i, nodes) {
        var selected_i = Math.floor(i / 3);
        var selected = d3.selectAll(".line-".concat(selected_i, ", .label-").concat(selected_i)).style("opacity", 0.4).style("stroke-width", 1);
        selected.transition();
      }); // Add scrolling interactive elements

      var scrollTop = 0;
      var newScrollTop = 0;
      var thing = d3.select("#graph-1"); // let thing = d3.select("#text-1");
      // let thing = document.getElementById("graph-1");
      // console.log("thing", thing)
      // console.log("inner", window.innerHeight, window.innerWidth)

      var HEIGHT = window.innerHeight;
      var WIDTH = window.innerWidth; // let crucialText = d3.selectAll("#panel").filter(function(d, i) { return i === 0})
      // let crucialText = document.getElementsByClassName("panel").getElementsByTagName("p")[0]
      // console.log("crucial text", crucialText)
      // console.log("crucial top", crucialTop)
      // thing.addEventListener('scroll', function(e){
      //     let crucialTop = crucialText.getBoundingClientRect();
      //     console.log('y', crucialTop)
      //     if(crucialTop.y - WIDTH < 0) {
      //         updateChart(minDate, maxDate)
      //     }
      // })
      // let forward = updateChart;
      // let backward;

      thing.on("scroll.scroller", function () {
        console.log("scroooooling");
        newScrollTop = thing.node().scrollTop; // let action = updateChart;

        console.log("newScrollTop", newScrollTop);

        if (scrollTop <= 60 && newScrollTop > 60) {
          updateChart(minDate, maxDate); // backward = updateChart;
          // forward(minDate, endDate);
          // forward = function() {};
        }

        if (scrollTop >= 59 && newScrollTop < 59) {
          updateChart(minDate, midDate); // forward = updateChart;
          // backward(minDate, midDate);
          // backward = function () {};
        }

        scrollTop = newScrollTop;
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

/***/ "./src/chart/getDates.js":
/*!*******************************!*\
  !*** ./src/chart/getDates.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

function getTermPeakDate(data, term) {
  var slice = data.filter(function (d) {
    return d.term === term;
  })[0];
  var peakPoint = d3.max(slice.values, function (v) {
    return v.point;
  });
  var peakIndex = slice.values.findIndex(function (v) {
    return v.point === peakPoint;
  }); // !!!!!!!! might have to +1 after peakIndex

  return slice.values[peakIndex].date;
}

module.exports = {
  getTermPeakDate: getTermPeakDate
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


function createDataset(queriesArray, termsArray, retrieverPromises) {
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
  } // takes in a promise, and its index in the retrieverPromises (to tell if it will access the first or subsequent subdatasets)
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


  var newPromisesArray = retrieverPromises.map(function (promise, index) {
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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./data/dataTransformer.js */ "./src/data/dataTransformer.js");
/* harmony import */ var _data_terms_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./data/terms.js */ "./src/data/terms.js");
/* harmony import */ var _data_terms_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_data_terms_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _chart_chartA_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./chart/chartA.js */ "./src/chart/chartA.js");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../dist/assets/styles/styles.scss */ "./dist/assets/styles/styles.scss");
/* harmony import */ var _dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_dist_assets_styles_styles_scss__WEBPACK_IMPORTED_MODULE_3__);
function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

// data

 // d3 chart


 // // to illustrate svg path mini-language
// // const illustration = svg.append("path")
//     // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
// // stretch data values from 0 to the svg's width
// // const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js content has loaded"); //// console.log("search terms", searchTerms)

  var _$2019_splitQueries = _slicedToArray(_data_terms_js__WEBPACK_IMPORTED_MODULE_1__["$2019_splitQueries"], 3),
      $2019_querySubsets = _$2019_splitQueries[0],
      $2019_queriesArray = _$2019_splitQueries[1],
      $2019_termsArray = _$2019_splitQueries[2];

  var $2019_retrieverPromises = Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_0__["retriever"])($2019_querySubsets); // CALL DRAW CHART FUNCTION

  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_0__["createDataset"])($2019_queriesArray, $2019_termsArray, $2019_retrieverPromises).then(function (d) {
    console.log("index.js dataset", d);
    d3.select("#container").datum(d).call(Object(_chart_chartA_js__WEBPACK_IMPORTED_MODULE_2__["chartA"])());
  }); // createDataset($2019_queriesArray, $2019_termsArray, $2019_retrieverPromises)
  // .then((d) => {
  //     console.log("dataset", d)
  //     d3.select("#container").datum(d).call(chartTemplate())
  // })
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

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFydC9hZGRsYWJlbENvb3Jkcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvY2hhcnQvY2hhcnRBLmpzIiwid2VicGFjazovLy8uL3NyYy9jaGFydC9nZXREYXRlcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS9kYXRhVHJhbnNmb3JtZXIuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2RhdGEvdGVybXMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImFkZExhYmVsQ29vcmRzIiwiZGF0YSIsImNoYXJ0SW5kZXhFbmQiLCJzcGFjZSIsInhTY2FsZSIsInlTY2FsZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwiZm9yRWFjaCIsInMiLCJjb25zb2xlIiwibG9nIiwibGFzdEluZGV4IiwibGFiZWxYIiwidmFsdWVzIiwiZGF0ZSIsImxhYmVsWSIsInBvaW50IiwicHVzaCIsInYxIiwiaSIsInYyIiwiaiIsInlEaWZmIiwiTWF0aCIsImFicyIsImFkZERpZmYiLCJncmVhdGVySW5kZXgiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcnRBIiwid2lkdGgiLCJoZWlnaHQiLCJhZGoiLCJjaGFydFN0YXJ0RGF0ZSIsImNoYXJ0RW5kRGF0ZSIsImNoYXJ0SW5kZXhTdGFydCIsIm1heFkiLCJ1cGRhdGVNYXhZIiwibGVuZ3RoIiwiZDMiLCJtYXgiLCJ0ZXJtU2xpY2UiLCJ2YWx1ZUFycmF5Iiwic2xpY2UiLCJ2IiwiZHJhdyIsInNlbGVjdGlvbiIsImVhY2giLCJtaW5EYXRlIiwibWluIiwiZCIsIm1heERhdGUiLCJtaWREYXRlIiwiRGF0ZSIsImdldFRpbWUiLCJqdW5lRGF0ZSIsInZzY29QZWFrRGF0ZSIsImdldERhdGVzIiwiamFuRGF0ZSIsInNjYWxlVGltZSIsImRvbWFpbiIsInJhbmdlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwieEF4aXMiLCJheGlzQm90dG9tIiwidGlja3MiLCJ0aW1lTW9udGgiLCJldmVyeSIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0IiwidGlja1NpemVPdXRlciIsInlBeGlzIiwiYXhpc0xlZnQiLCJzY2FsZSIsInRpY2tWYWx1ZXMiLCJ5QXhpc0dyaWQiLCJ0aWNrU2l6ZSIsInN2ZyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJjYWxsIiwiY2xpcCIsInN0eWxlIiwibGluZSIsIngiLCJ5IiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJ0ZXJtIiwiaG92ZXJMaW5lcyIsInQiLCJ0cmFuc2l0aW9uIiwiZWFzZSIsImVhc2VDdWJpYyIsImRlbGF5IiwiZHVyYXRpb24iLCJ1cGRhdGVDaGFydCIsIm5ld1N0YXJ0RGF0ZSIsIm5ld0VuZERhdGUiLCJpbnRlcnJ1cHQiLCJvbiIsIm5vZGVzIiwic2VsZWN0ZWRfaSIsImZsb29yIiwic2VsZWN0ZWQiLCJyYWlzZSIsInNjcm9sbFRvcCIsIm5ld1Njcm9sbFRvcCIsInRoaW5nIiwiSEVJR0hUIiwid2luZG93IiwiaW5uZXJIZWlnaHQiLCJXSURUSCIsImlubmVyV2lkdGgiLCJub2RlIiwidmFsdWUiLCJhcmd1bWVudHMiLCJnZXRUZXJtUGVha0RhdGUiLCJmaWx0ZXIiLCJwZWFrUG9pbnQiLCJwZWFrSW5kZXgiLCJmaW5kSW5kZXgiLCJ0aW1lQ29udiIsInRpbWVQYXJzZSIsInJldHJpZXZlciIsInF1ZXJ5U3Vic2V0cyIsInJldHJpZXZlclByb21pc2VzIiwic3BsaXRRdWVyeSIsImluZGV4IiwianNvbiIsImNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UiLCJkYXRhc2V0IiwiaW50ZXJ2YWwiLCJhdmVyYWdlcyIsIm1hcCIsIm1vdmluZ1RvdGFsIiwibW92aW5nQXZlcmFnZSIsInJvdW5kIiwiY3JlYXRlRGF0YXNldCIsInF1ZXJpZXNBcnJheSIsInRlcm1zQXJyYXkiLCJjYWxpYnJhdGUiLCJyYXdkYXRhU2xpY2UiLCJyYXdkYXRhSW5kZXgiLCJyVmFsdWVJbmRleCIsIm51bWVyYXRvciIsImRlbm9taW5hdG9yIiwicmF0aW8iLCJnZXREYXRhIiwicHJvbWlzZSIsInByb21pc2VJbmRleCIsInRoZW4iLCJyYXdkYXRhIiwiaW5jcmVtZW50IiwibWF4TnVtT2ZRdWVyaWVzIiwicXVlcmllc0FycmF5SW5kZXgiLCJmb3JtYXR0ZWRBeGlzVGltZSIsIm5ld1Byb21pc2VzQXJyYXkiLCJmaXJzdFN1YnNldCIsInJlbWFpbmluZ1Byb21pc2VzIiwiUHJvbWlzZSIsImFsbCIsInJlcyIsIiQyMDE5Iiwib25lSGl0IiwiJDIwMTgiLCIkMjAxNyIsIiQyMDE2IiwiJDIwMTUiLCJzZWFyY2hUZXJtc0dlbmVyYXRvciIsImFycmF5Iiwic2VhcmNoVGVybXMiLCJzcGxpdHRlciIsImpvaW5JbmRleCIsImpvaW5UZXJtIiwic3BsaWNlIiwiZ3JvdXAiLCJxdWVyeVN1YnNldCIsImNvbmNhdCIsIiQyMDE5X3NlYXJjaFRlcm1zIiwiJDIwMTlfc3BsaXRRdWVyaWVzIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwiJDIwMTlfcXVlcnlTdWJzZXRzIiwiJDIwMTlfcXVlcmllc0FycmF5IiwiJDIwMTlfdGVybXNBcnJheSIsIiQyMDE5X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FB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bkMsSUFERCxDQUNNLFVBQUMzRyxDQUFELEVBQU87QUFDVHpDLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDd0MsQ0FBaEM7QUFDQVgsTUFBRSxDQUFDd0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JrSCxLQUF4QixDQUE4Qi9JLENBQTlCLEVBQWlDZ0MsSUFBakMsQ0FBc0NyRCwrREFBTSxFQUE1QztBQUNILEdBSkQsRUFad0QsQ0FrQnhEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFNQTtBQUNBO0FBRUQsQ0EvQkQsRSxDQW9DQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQiIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVRpdGlsbGl1bStXZWI6d2dodEAzMDAmZGlzcGxheT1zd2FwKTtcIl0pO1xuLy8gTW9kdWxlXG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCIvKiBodHRwOi8vbWV5ZXJ3ZWIuY29tL2VyaWMvdG9vbHMvY3NzL3Jlc2V0LyBcXG4gICB2Mi4wIHwgMjAxMTAxMjZcXG4gICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuaHRtbCwgYm9keSwgZGl2LCBzcGFuLCBhcHBsZXQsIG9iamVjdCwgaWZyYW1lLFxcbmgxLCBoMiwgaDMsIGg0LCBoNSwgaDYsIHAsIGJsb2NrcXVvdGUsIHByZSxcXG5hLCBhYmJyLCBhY3JvbnltLCBhZGRyZXNzLCBiaWcsIGNpdGUsIGNvZGUsXFxuZGVsLCBkZm4sIGVtLCBpbWcsIGlucywga2JkLCBxLCBzLCBzYW1wLFxcbnNtYWxsLCBzdHJpa2UsIHN0cm9uZywgc3ViLCBzdXAsIHR0LCB2YXIsXFxuYiwgdSwgaSwgY2VudGVyLFxcbmRsLCBkdCwgZGQsIG9sLCB1bCwgbGksXFxuZmllbGRzZXQsIGZvcm0sIGxhYmVsLCBsZWdlbmQsXFxudGFibGUsIGNhcHRpb24sIHRib2R5LCB0Zm9vdCwgdGhlYWQsIHRyLCB0aCwgdGQsXFxuYXJ0aWNsZSwgYXNpZGUsIGNhbnZhcywgZGV0YWlscywgZW1iZWQsXFxuZmlndXJlLCBmaWdjYXB0aW9uLCBmb290ZXIsIGhlYWRlciwgaGdyb3VwLFxcbm1lbnUsIG5hdiwgb3V0cHV0LCBydWJ5LCBzZWN0aW9uLCBzdW1tYXJ5LFxcbnRpbWUsIG1hcmssIGF1ZGlvLCB2aWRlbyB7XFxuICBtYXJnaW46IDA7XFxuICBwYWRkaW5nOiAwO1xcbiAgYm9yZGVyOiAwO1xcbiAgZm9udC1zaXplOiAxMDAlO1xcbiAgZm9udDogaW5oZXJpdDtcXG4gIHZlcnRpY2FsLWFsaWduOiBiYXNlbGluZTsgfVxcblxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLCBhc2lkZSwgZGV0YWlscywgZmlnY2FwdGlvbiwgZmlndXJlLFxcbmZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsIG1lbnUsIG5hdiwgc2VjdGlvbiB7XFxuICBkaXNwbGF5OiBibG9jazsgfVxcblxcbmJvZHkge1xcbiAgbGluZS1oZWlnaHQ6IDE7IH1cXG5cXG5vbCwgdWwge1xcbiAgbGlzdC1zdHlsZTogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGUsIHEge1xcbiAgcXVvdGVzOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZTpiZWZvcmUsIGJsb2NrcXVvdGU6YWZ0ZXIsXFxucTpiZWZvcmUsIHE6YWZ0ZXIge1xcbiAgY29udGVudDogJyc7XFxuICBjb250ZW50OiBub25lOyB9XFxuXFxudGFibGUge1xcbiAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcXG4gIGJvcmRlci1zcGFjaW5nOiAwOyB9XFxuXFxuQHVzZSBcXFwic2FzczpsaXN0XFxcIjtcXG5odG1sIHtcXG4gIHNjcm9sbC1iZWhhdmlvcjogc21vb3RoOyB9XFxuXFxuI2ludHJvIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIHdpZHRoOiAxMDAlO1xcbiAgcGFkZGluZzogMHB4IDYwcHggMHB4IDMwcHg7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbiNsZWZ0IHtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jZ3JhcGgtMSB7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgaGVpZ2h0OiAxMDB2aDtcXG4gIG92ZXJmbG93OiBzY3JvbGw7IH1cXG5cXG4jZ3JhcGgtMSA+IC5zdmctY29udGFpbmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1ZWI7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwOyB9XFxuXFxuI2dyYXBoLTEgc3ZnIHtcXG4gIHBhZGRpbmc6IDQwcHg7IH1cXG5cXG4jdGV4dC0xIHtcXG4gIHdpZHRoOiAxMDB2dzsgfVxcblxcbi5wYW5lbCB7XFxuICBwYWRkaW5nOiAzNXZoIDEwdmggNDB2aCAxMHZoOyB9XFxuXFxuI2Jhbm5lci0xLCAjYmFubmVyLTIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogcmVkO1xcbiAgaGVpZ2h0OiA4MHB4O1xcbiAgd2lkdGg6IDEwMCU7IH1cXG5cXG5wYXRoIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6IGJsYWNrOyB9XFxuXFxuLyogdmFyaWFibGVzICovXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQztcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lIHtcXG4gIHN0cm9rZS13aWR0aDogMTsgfVxcblxcbi5ob3Zlci1saW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNkMmQyZDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMDsgfVxcblxcbi5sYWJlbCB7XFxuICBwYWRkaW5nOiAxMDA7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG4jbGVmdCwgI3JpZ2h0LCAucGFuZWwge1xcbiAgZm9udC1mYW1pbHk6ICdSb2JvdG8nLCBzYW5zLXNlcmlmO1xcbiAgZm9udC13ZWlnaHQ6IDMwMDtcXG4gIGxpbmUtaGVpZ2h0OiAxLjY7IH1cXG5cXG4jbGVmdCBoMSB7XFxuICBmb250LWZhbWlseTogJ1RpdGlsbGl1bSBXZWInLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA2MHB4O1xcbiAgY29sb3I6ICMwNjJmODc7XFxuICBsaW5lLWhlaWdodDogMTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBtYXJnaW4tYm90dG9tOiAyMHB4OyB9XFxuXFxuI2xlZnQgcDpsYXN0LW9mLXR5cGUge1xcbiAgcGFkZGluZzogMCAxMCUgMCAxMCU7IH1cXG5cXG4jc3VidGl0bGUge1xcbiAgZm9udC1zdHlsZTogaXRhbGljO1xcbiAgZm9udC1zaXplOiAxNHB4O1xcbiAgcGFkZGluZy1ib3R0b206IDYwcHg7IH1cXG5cXG4jcmlnaHQge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbiNyaWdodCA+IGEge1xcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gIHdpZHRoOiAzMDBweDtcXG4gIHBhZGRpbmc6IDEwcHg7XFxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjY2ZlY2Y4O1xcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxuICBib3JkZXItcmFkaXVzOiAyNXB4OyB9XFxuXFxuI3JpZ2h0ID4gYTpob3ZlciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjOGJkM2VlO1xcbiAgY29sb3I6IHdoaXRlO1xcbiAgZm9udC13ZWlnaHQ6IG5vcm1hbDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCIvLyBmdW5jdGlvbiB0byBzZXBhcmF0ZSBvdXQgbGFiZWxzIHRoYXQgb3ZlcmxhcFxuXG5mdW5jdGlvbiBhZGRMYWJlbENvb3JkcyhkYXRhLCBjaGFydEluZGV4RW5kLCBzcGFjZSwgeFNjYWxlLCB5U2NhbGUpIHtcbiAgXG4gIGxldCBub0NvbGxpc2lvbnMgPSBmYWxzZTtcblxuICBsZXQgeUxhYmVsVmFsdWVzID0gW107XG4gIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IFtdO1xuXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICBjb25zb2xlLmxvZyhcImFkZCBsYWJlbCB2YWx1ZXNcIiwgcylcbiAgICBsZXQgbGFzdEluZGV4ID0gY2hhcnRJbmRleEVuZCAtIDE7XG5cbiAgICBzLmxhYmVsWCA9IHhTY2FsZShzLnZhbHVlc1tsYXN0SW5kZXhdLmRhdGUpO1xuICAgIHMubGFiZWxZID0geVNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuICAgIC8vIGlmIHVzaW5nIG1heCB2YWx1ZSBvZiB0ZXJtJ3MgcG9pbnQgYXMgbGFiZWxZXG4gICAgLy8gcy5sYWJlbFkgPSB5U2NhbGUoZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgLy8gICByZXR1cm4gdi5wb2ludDtcbiAgICAvLyB9KSAtIDIpO1xuXG4gICAgeUxhYmVsVmFsdWVzLnB1c2gocy5sYWJlbFkpO1xuICAgIHlMYWJlbFZhbHVlc09yaWdpbmFsLnB1c2gocy5sYWJlbFkpO1xuICB9KTtcblxuICB3aGlsZSAoIW5vQ29sbGlzaW9ucykge1xuICAgIG5vQ29sbGlzaW9ucyA9IHRydWU7XG5cbiAgICB5TGFiZWxWYWx1ZXMuZm9yRWFjaCgodjEsIGkpID0+IHtcbiAgICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MiwgaikgPT4ge1xuICAgICAgICAvLyBsZXQgY291bnQgPSAwO1xuXG4gICAgICAgIGxldCB5RGlmZiA9IE1hdGguYWJzKHlMYWJlbFZhbHVlc1tqXSAtIHlMYWJlbFZhbHVlc1tpXSk7XG4gICAgICAgIGxldCBhZGREaWZmID0gc3BhY2UgLSB5RGlmZjtcblxuICAgICAgICAvLyBsZXQgbW92aW5nWSA9IHlMYWJlbFZhbHVlc09yaWdpbmFsW2pdID49IHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID8gaiA6IGk7XG5cbiAgICAgICAgaWYgKGkgIT09IGogJiYgeURpZmYgPCBzcGFjZSkge1xuICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaiBoaXRcIiwgaSwgaik7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ5RGlmZlwiLHlEaWZmKVxuICAgICAgICAgIGxldCBncmVhdGVySW5kZXggPVxuICAgICAgICAgICAgeUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gLSB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtpXSA+IDAgPyBqIDogaTtcblxuICAgICAgICAgIHlMYWJlbFZhbHVlc1tncmVhdGVySW5kZXhdICs9IGFkZERpZmY7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVkXCIsIHlMYWJlbFZhbHVlcylcbiAgICAgICAgICBub0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyh5TGFiZWxWYWx1ZXMpO1xuXG4gIC8vIHJldHVybiB5TGFiZWxWYWx1ZXM7XG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgcy5sYWJlbFkgPSB5TGFiZWxWYWx1ZXNbaV07XG4gIH0pO1xuXG5cbiAgXG59XG5cblxuLy8gYWRkTGFiZWxDb29yZHMoWzAsIDMsIDYsIDksIDEyLCAxNV0pXG4vLyBhZGRMYWJlbENvb3JkcyhbNCwgMywgMSwgNTUsIDIsIDFdKVxuLy8gWzEzLCAxMCwxLCA1NSwgNywgNF1cblxubW9kdWxlLmV4cG9ydHMgPSB7IGFkZExhYmVsQ29vcmRzIH07IiwiaW1wb3J0IHsgYWRkTGFiZWxDb29yZHMgfSBmcm9tIFwiLi9hZGRsYWJlbENvb3Jkcy5qc1wiO1xuaW1wb3J0ICogYXMgZ2V0RGF0ZXMgZnJvbSBcIi4vZ2V0RGF0ZXMuanNcIjtcblxuLy8gaW1wb3J0IHsgdGVybVNsaWNlVmFsdWVzIH0gZnJvbSBcIi4vZ2V0RGF0ZXMuanNcIjtcblxuLy8gY3JlYXRpbmcgcmV1c2FibGUgY2hhcnRcbmV4cG9ydCBmdW5jdGlvbiBjaGFydEEoKSB7XG4gICAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgICBsZXQgd2lkdGggPSAxMjAwICogMC42O1xuICAgIGxldCBoZWlnaHQgPSA4MDAgKiAwLjY7XG4gICAgbGV0IGFkaiA9IDMwO1xuICBcbiAgICAvLyB0aGUgZm9sbG93aW5nIHZhcmlhYmxlcyBhcmUgdXNlZCB0byByZW5kZXIgdGhlIGFjdHVhbCBkYXRlIHJhbmdlcyBvbiB0aGUgY2hhcnRcbiAgICBsZXQgY2hhcnRTdGFydERhdGU7XG4gICAgbGV0IGNoYXJ0RW5kRGF0ZTtcbiAgICBsZXQgY2hhcnRJbmRleFN0YXJ0O1xuICAgIGxldCBjaGFydEluZGV4RW5kO1xuICAgIGxldCBtYXhZO1xuICAgIFxuICAgIC8vIGJhc2VkIG9uIHRoZSBjaGFydCBzdGFydCBhbmQgZW5kIGRhdGVzLCBkZXRlcm1pbmVzIHdoaWNoIHZhbHVlcyB0byBcbiAgICAvLyBsb29rIGF0IChjaGFydEluZGV4U3RhcnQgJiBjaGFydEluZGV4RW5kKSwgdGhlbiBkZXRlcm1pbmVzIHRoZSBtYXhZIHZhbHVlXG4gICAgZnVuY3Rpb24gdXBkYXRlTWF4WSAoZGF0YSwgY2hhcnRTdGFydERhdGUsIGNoYXJ0RW5kRGF0ZSkge1xuICAgICAgXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmIChkYXRhWzBdLnZhbHVlc1tpXS5kYXRlID49IGNoYXJ0U3RhcnREYXRlKSB7XG4gICAgICAgICAgICAgICAgY2hhcnRJbmRleFN0YXJ0ID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPiBjaGFydEVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICBjaGFydEluZGV4RW5kID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY2hhcnRJbmRleEVuZCA9IGRhdGFbMF0udmFsdWVzLmxlbmd0aDtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgbWF4WSA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAodGVybVNsaWNlKSB7XG4gICAgICAgICAgICBsZXQgdmFsdWVBcnJheSA9IHRlcm1TbGljZS52YWx1ZXMuc2xpY2UoY2hhcnRJbmRleFN0YXJ0LCBjaGFydEluZGV4RW5kKTtcblxuICAgICAgICAgICAgcmV0dXJuIGQzLm1heCh2YWx1ZUFycmF5LCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBcbiAgICBcbiAgICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAvLyBkZWZpbmUgZGF0ZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGVhY2ggY2hhcnQgZnJhbWVcblxuICAgICAgICAgICAgLy8gZGVmaW5lIG1pbiBkYXRlIGZvciBlbnRpcmUgZGF0YXNldFxuICAgICAgICAgICAgY29uc3QgbWluRGF0ZSA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAvLyBkZWZpbmUgbWF4IGRhdGUgZm9yIGVudGlyZSBkYXRhc2V0XG4gICAgICAgICAgICBjb25zdCBtYXhEYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5kYXRlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIC8vIGRlZmluZSBtaWQgZGF0ZSBmb3IgZW50aXJlIGRhdGFzZXRcbiAgICAgICAgICAgIGNvbnN0IG1pZERhdGUgPSBuZXcgRGF0ZSgobWluRGF0ZS5nZXRUaW1lKCkgKyBtYXhEYXRlLmdldFRpbWUoKSkgLyAyKTtcblxuICAgICAgICAgICAgLy8gbWF4IGRhdGUgZm9yIHRoZSBmaXJzdCBmcmFtZVxuICAgICAgICAgICAgY29uc3QganVuZURhdGUgPSBuZXcgRGF0ZSgyMDE5LCA1LCAzMCk7XG5cbiAgICAgICAgICAgIC8vIGRhdGUgb2YgcGVhayBpbnRlcmVzdCBmb3IgdnNjb1xuICAgICAgICAgICAgY29uc3QgdnNjb1BlYWtEYXRlID0gZ2V0RGF0ZXMuZ2V0VGVybVBlYWtEYXRlKGRhdGEsIFwidnNjb1wiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidnNjb3BlYWtkYXRlXCIsIHZzY29QZWFrRGF0ZSlcblxuICAgICAgICAgICAgLy8gZGF0ZSBvZiAxc3Qgd2VlayBvZiAyMDIwXG4gICAgICAgICAgICBjb25zdCBqYW5EYXRlID0gbmV3IERhdGUoMjAyMCwgMCwgOCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZzY29wZWFrZGF0ZVwiLCB2c2NvUGVha0RhdGUpXG5cbiAgICAgICAgICAgIGNoYXJ0U3RhcnREYXRlID0gbWluRGF0ZTtcbiAgICAgICAgICAgIGNoYXJ0RW5kRGF0ZSA9IGp1bmVEYXRlO1xuICAgICAgICAgICAgdXBkYXRlTWF4WShkYXRhLCBjaGFydFN0YXJ0RGF0ZSwgY2hhcnRFbmREYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwibWF4WSB1cGRhdGVkXCIsIG1heFkpXG5cbiAgICAgICAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgICAgICAgICAgICAuc2NhbGVUaW1lKClcbiAgICAgICAgICAgICAgICAuZG9tYWluKFtjaGFydFN0YXJ0RGF0ZSwgY2hhcnRFbmREYXRlXSlcbiAgICAgICAgICAgICAgICAucmFuZ2UoWzAsIHdpZHRoXSk7XG5cbiAgICAgICAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkM1xuICAgICAgICAgICAgICAgIC5zY2FsZUxpbmVhcigpXG4gICAgICAgICAgICAgICAgLmRvbWFpbihbMCwgbWF4WV0pXG4gICAgICAgICAgICAgICAgLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5cbiAgICAgICAgICAgIC8vIGFkZCBsYWJlbCBjb29yZGluYXRlcyB0byBkYXRhc2V0J3MgdGVybVNsaWNlc1xuICAgICAgICAgICAgYWRkTGFiZWxDb29yZHMoZGF0YSwgY2hhcnRJbmRleEVuZCwgMTIsIHhTY2FsZSwgeVNjYWxlKTtcblxuICAgICAgICAgICAgLy8gQVhFU1xuICAgICAgICAgICAgY29uc3QgeEF4aXMgPSBkMy5heGlzQm90dG9tKHhTY2FsZSk7XG4gICAgICAgICAgICAvLyAuc2NhbGUoeFNjYWxlKVxuXG4gICAgICAgICAgICB4QXhpc1xuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpLnNjYWxlKHlTY2FsZSkudGlja1ZhbHVlcyhbXSkudGlja1NpemVPdXRlcigwKTtcblxuICAgICAgICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICAgICAgICBjb25zdCB5QXhpc0dyaWQgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgICAgICAgICAudGlja1NpemUoLXdpZHRoKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KFwiXCIpXG4gICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW21heFkgLyAzLCAoMiAqIG1heFkpIC8gMywgbWF4WV0pXG4gICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgICAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgICAgICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAgICAgICAgICAgLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgYC0ke2FkaiAqIDJ9IC0ke2FkaiAqIDN9ICR7d2lkdGggKyBhZGogKiAxMH0gJHtoZWlnaHQgKyBhZGogKiAyfWBcbiAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKTtcblxuICAgICAgICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGB0cmFuc2xhdGUoMCwgJHtoZWlnaHR9KWApXG4gICAgICAgICAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgICAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAgICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAgICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAgICAgICAgICAgLy8gYXBwZW5kIGNsaXAgcGF0aFxuICAgICAgICAgICAgY29uc3QgY2xpcCA9IHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJkZWZzXCIpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImRhdGUtY2xpcFwiKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIHhTY2FsZShjaGFydFN0YXJ0RGF0ZSkpXG4gICAgICAgICAgICAgICAgLy8gICAuYXR0cihcInhcIiwgeFNjYWxlKG1pbkRhdGUpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5U2NhbGUobWF4WSkpXG4gICAgICAgICAgICAgICAgLy8gICAuYXR0cihcInlcIiwgeVNjYWxlKG1heFkgLSBtaWRNYXgpKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgc3ZnLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2RhdGUtY2xpcClcIikuc3R5bGUoXCJmaWxsXCIsIFwibGlnaHRncmV5XCIpO1xuXG4gICAgICAgICAgICAvLyBkcmF3IGxpbmVzXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgICAgICAgICAgICAubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHlTY2FsZSh2LnBvaW50KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIikuZGF0YShkYXRhKS5lbnRlcigpLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBsaW5lIGxpbmUtJHtpfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgLy8gICByZXR1cm4gbGluZShkLnNwbGluZWQpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2RhdGUtY2xpcClcIik7XG5cbiAgICAgICAgICAgIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gICAgICAgICAgICBsaW5lc1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBg4oe9ICAgICAgICR7ZC50ZXJtfWA7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC5sYWJlbFh9LCAke2QubGFiZWxZfSlgO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxYID0geFNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtsYWJlbFh9LCAke2xhYmVsWX0pYDtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgaG92ZXJMaW5lcyA9IGxpbmVzXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiaG92ZXItbGluZVwiKVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBsaW5lKGQuc3BsaW5lZCl9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgdCA9IGQzLnRyYW5zaXRpb24oKS5lYXNlKGQzLmVhc2VDdWJpYykuZGVsYXkoMTAwMCkuZHVyYXRpb24oNTAwMCk7XG5cbiAgICAgICAgICAgIC8vIEZVTkNUSU9OIFRPIFVQREFURSBDSEFSVFxuICAgICAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2hhcnQobmV3U3RhcnREYXRlLCBuZXdFbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdEFsbChcIipcIikuaW50ZXJydXB0KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkNIQVJUIElTIFVQREFUSU5HXCIpO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgY2hhcnRTdGFydERhdGUgPSBuZXdTdGFydERhdGU7XG4gICAgICAgICAgICAgICAgY2hhcnRFbmREYXRlID0gbmV3RW5kRGF0ZTtcblxuICAgICAgICAgICAgICAgIHhTY2FsZS5kb21haW4oW2NoYXJ0U3RhcnREYXRlLCBjaGFydEVuZERhdGVdKTtcblxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieCBheGlzXCIsIHN2Zy5zZWxlY3QoXCIueC1heGlzXCIpKVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwieCBheGlzXCIsIHhBeGlzKVxuXG4gICAgICAgICAgICAgICAgc3ZnLnNlbGVjdChcIi54LWF4aXNcIikudHJhbnNpdGlvbih0KS5jYWxsKHhBeGlzKTtcbiAgICAgICAgICAgICAgICAvLyBzdmcuc2VsZWN0KFwiLngtYXhpc1wiKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCkuY2FsbCh4QXhpcyk7XG5cbiAgICAgICAgICAgICAgICB1cGRhdGVNYXhZKGRhdGEsIGNoYXJ0U3RhcnREYXRlLCBjaGFydEVuZERhdGUpO1xuXG4gICAgICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCwgbWF4WV0pO1xuXG4gICAgICAgICAgICAgICAgbGluZXMuc2VsZWN0QWxsKFwiLmxpbmVcIilcbiAgICAgICAgICAgICAgICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbGluZShkLnZhbHVlcyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcIi5ob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgIC8vICAgLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKVxuICAgICAgICAgICAgICAgICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICBhZGRMYWJlbENvb3JkcyhkYXRhLCBjaGFydEluZGV4RW5kLCAxMiwgeFNjYWxlLCB5U2NhbGUpO1xuXG4gICAgICAgICAgICAgICAgbGluZXNcbiAgICAgICAgICAgICAgICAgICAgLnNlbGVjdEFsbChcIi5sYWJlbFwiKVxuICAgICAgICAgICAgICAgICAgICAvLyAudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApXG4gICAgICAgICAgICAgICAgICAgIC50cmFuc2l0aW9uKHQpXG4gICAgICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGB0cmFuc2xhdGUoJHtkLmxhYmVsWH0sICR7ZC5sYWJlbFl9KWA7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8gQWRkIG1vdXNvdmVyIGludGVyYWN0aXZlIGVsZW1lbnRzXG4gICAgICAgICAgICBzdmcuc2VsZWN0QWxsKFwiLmhvdmVyLWxpbmUsIC5sYWJlbCwgLmxpbmVcIilcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQsIGksIG5vZGVzKSB7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcylcbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJkXCIsIGQpXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpKVxuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGVzXCIsIG5vZGVzKVxuXG4gICAgICAgICAgICAgICAgICAgIC8vIG5vZGVzID0gW2xpbmUoMCksIGxhYmVsKDApLCBob3Zlci1saW5lKDApLCBsaW5lKDEpLCBsYWJlbCgxKSwgaG92ZXItbGluZSgxKS4uLl1cbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaSAvIDMpO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGluY3JlYXNlIG9wYWNpdHkgb2YgYm90aCBsaW5lIGFuZCBsYWJlbFxuICAgICAgICAgICAgICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGQzXG4gICAgICAgICAgICAgICAgICAgICAgICAuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9LCAubGFiZWwtJHtzZWxlY3RlZF9pfWApXG4gICAgICAgICAgICAgICAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgdGhpY2tlciBzdHJva2Ugb25seSB0byBsaW5lXG4gICAgICAgICAgICAgICAgICAgIGQzLnNlbGVjdEFsbChgLmxpbmUtJHtzZWxlY3RlZF9pfWApLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDUpO1xuXG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCwgaSwgbm9kZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaSAvIDMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDNcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX0sIC5sYWJlbC0ke3NlbGVjdGVkX2l9YClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC40KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnN0eWxlKFwic3Ryb2tlLXdpZHRoXCIsIDEpO1xuXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkLnRyYW5zaXRpb24oKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBBZGQgc2Nyb2xsaW5nIGludGVyYWN0aXZlIGVsZW1lbnRzXG4gICAgICAgICAgICBsZXQgc2Nyb2xsVG9wID0gMDtcbiAgICAgICAgICAgIGxldCBuZXdTY3JvbGxUb3AgPSAwO1xuXG4gICAgICAgICAgICBsZXQgdGhpbmcgPSBkMy5zZWxlY3QoXCIjZ3JhcGgtMVwiKTtcbiAgICAgICAgICAgIC8vIGxldCB0aGluZyA9IGQzLnNlbGVjdChcIiN0ZXh0LTFcIik7XG4gICAgICAgICAgICAvLyBsZXQgdGhpbmcgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImdyYXBoLTFcIik7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpbmdcIiwgdGhpbmcpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlubmVyXCIsIHdpbmRvdy5pbm5lckhlaWdodCwgd2luZG93LmlubmVyV2lkdGgpXG5cbiAgICAgICAgICAgIGxldCBIRUlHSFQgPSB3aW5kb3cuaW5uZXJIZWlnaHQ7XG4gICAgICAgICAgICBsZXQgV0lEVEggPSB3aW5kb3cuaW5uZXJXaWR0aDtcblxuICAgICAgICAgICAgLy8gbGV0IGNydWNpYWxUZXh0ID0gZDMuc2VsZWN0QWxsKFwiI3BhbmVsXCIpLmZpbHRlcihmdW5jdGlvbihkLCBpKSB7IHJldHVybiBpID09PSAwfSlcbiAgICAgICAgICAgIC8vIGxldCBjcnVjaWFsVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJwYW5lbFwiKS5nZXRFbGVtZW50c0J5VGFnTmFtZShcInBcIilbMF1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3J1Y2lhbCB0ZXh0XCIsIGNydWNpYWxUZXh0KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjcnVjaWFsIHRvcFwiLCBjcnVjaWFsVG9wKVxuXG4gICAgICAgICAgICAvLyB0aGluZy5hZGRFdmVudExpc3RlbmVyKCdzY3JvbGwnLCBmdW5jdGlvbihlKXtcbiAgICAgICAgICAgIC8vICAgICBsZXQgY3J1Y2lhbFRvcCA9IGNydWNpYWxUZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKCd5JywgY3J1Y2lhbFRvcClcbiAgICAgICAgICAgIC8vICAgICBpZihjcnVjaWFsVG9wLnkgLSBXSURUSCA8IDApIHtcblxuICAgICAgICAgICAgLy8gICAgICAgICB1cGRhdGVDaGFydChtaW5EYXRlLCBtYXhEYXRlKVxuICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgIC8vIH0pXG5cbiAgICAgICAgICAgIC8vIGxldCBmb3J3YXJkID0gdXBkYXRlQ2hhcnQ7XG4gICAgICAgICAgICAvLyBsZXQgYmFja3dhcmQ7XG5cbiAgICAgICAgICAgIHRoaW5nLm9uKFwic2Nyb2xsLnNjcm9sbGVyXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjcm9vb29vbGluZ1wiKTtcbiAgICAgICAgICAgICAgICBuZXdTY3JvbGxUb3AgPSB0aGluZy5ub2RlKCkuc2Nyb2xsVG9wO1xuXG4gICAgICAgICAgICAgICAgLy8gbGV0IGFjdGlvbiA9IHVwZGF0ZUNoYXJ0O1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibmV3U2Nyb2xsVG9wXCIsIG5ld1Njcm9sbFRvcCk7XG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbFRvcCA8PSA2MCAmJiBuZXdTY3JvbGxUb3AgPiA2MCkge1xuICAgICAgICAgICAgICAgIHVwZGF0ZUNoYXJ0KG1pbkRhdGUsIG1heERhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGJhY2t3YXJkID0gdXBkYXRlQ2hhcnQ7XG4gICAgICAgICAgICAgICAgLy8gZm9yd2FyZChtaW5EYXRlLCBlbmREYXRlKTtcbiAgICAgICAgICAgICAgICAvLyBmb3J3YXJkID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoc2Nyb2xsVG9wID49IDU5ICYmIG5ld1Njcm9sbFRvcCA8IDU5KSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlQ2hhcnQobWluRGF0ZSwgbWlkRGF0ZSk7XG4gICAgICAgICAgICAgICAgLy8gZm9yd2FyZCA9IHVwZGF0ZUNoYXJ0O1xuICAgICAgICAgICAgICAgIC8vIGJhY2t3YXJkKG1pbkRhdGUsIG1pZERhdGUpO1xuICAgICAgICAgICAgICAgIC8vIGJhY2t3YXJkID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcCA9IG5ld1Njcm9sbFRvcDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG5cbiAgLy8gYWNjZXNzb3IgLyBzZXR0ZXIgZnVuY3Rpb25zIGZvciB3aWR0aCBhbmQgaGVpZ2h0XG4gIGRyYXcud2lkdGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIGRyYXcuaGVpZ2h0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIC8vIHJldHVybiBkcmF3IGZ1bmN0aW9uXG4gIHJldHVybiBkcmF3O1xufVxuIiwiZnVuY3Rpb24gZ2V0VGVybVBlYWtEYXRlKGRhdGEsIHRlcm0pIHtcblxuXG4gIGxldCBzbGljZSA9IGRhdGEuZmlsdGVyKChkKSA9PiB7XG4gICAgcmV0dXJuIGQudGVybSA9PT0gdGVybTtcbiAgfSlbMF1cblxuICBsZXQgcGVha1BvaW50ID0gZDMubWF4KHNsaWNlLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgcmV0dXJuIHYucG9pbnQ7XG4gIH0pO1xuXG4gIGxldCBwZWFrSW5kZXggPSBzbGljZS52YWx1ZXMuZmluZEluZGV4KHYgPT4ge1xuICAgICAgcmV0dXJuIHYucG9pbnQgPT09IHBlYWtQb2ludDtcbiAgfSk7XG5cbiAgLy8gISEhISEhISEgbWlnaHQgaGF2ZSB0byArMSBhZnRlciBwZWFrSW5kZXhcbiAgcmV0dXJuIHNsaWNlLnZhbHVlc1twZWFrSW5kZXhdLmRhdGU7XG5cblxufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgZ2V0VGVybVBlYWtEYXRlIH1cbiIsImltcG9ydCB7ICQyMDE5X3NwbGl0UXVlcmllcyB9IGZyb20gXCIuL3Rlcm1zLmpzXCI7XG5cbi8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lOyBzdG9yZSBkYXRhIGluIHZhcmlhYmxlIGRhdGFBXG5jb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiViICVkLCAlWVwiKTtcblxuXG4vLyBmdW5jdGlvbiByZXRyaWV2ZXIgc3RvcmVzIHByb21pc2VzIHRoYXQgZmV0Y2ggZGF0YSBmcm9tIHRoZSBmaWxlIHRoYXQgXG4vLyBjb3JyZXNwb25kcyB0byB0aGUgaW5kZXggaW4gdGhlIGFycmF5IHF1ZXJ5U3Vic2V0cy5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXkgKGUuZy4gJDIwMTkpXG4vLyBJbnB1dCBhcnJheSBcInF1ZXJ5U3Vic2V0c1wiIGNvbnRhaW5zIHN1YnNldHMgb2YgcXVlcmllcywgcmV0dXJuZWQgZnJvbSBmdW5jdGlvbiBzcGxpdHRlciBpbiB0ZXJtcy5qc1xuZnVuY3Rpb24gcmV0cmlldmVyIChxdWVyeVN1YnNldHMpIHtcbiAgY29uc3QgcmV0cmlldmVyUHJvbWlzZXMgPSBbXTtcblxuICBxdWVyeVN1YnNldHMuZm9yRWFjaCgoc3BsaXRRdWVyeSwgaW5kZXgpID0+IHtcbiAgICAvLyBsZXQgZGF0YXNldE5hbWUgPSBgZGF0YXNldF8ke2luZGV4fWA7XG4gICAgcmV0cmlldmVyUHJvbWlzZXMucHVzaChkMy5qc29uKGAuL2Rpc3QvYXNzZXRzL2RhdGEvMjAxOV8ke2luZGV4fS5qc29uYCkpO1xuICB9KTtcblxuICByZXR1cm4gcmV0cmlldmVyUHJvbWlzZXM7XG59XG5cblxuLy8gZnVuY3Rpb24gdG8gY2hhbmdlIGFsbCBwb2ludCB2YWx1ZXMgdG8gYSBtb3ZpbmcgYXZlcmFnZSAob2YgaW50ZXJ2YWwgPSB4IHdlZWtzKVxuZnVuY3Rpb24gY2hhbmdlWVRvTW92aW5nQXZlcmFnZSAoZGF0YXNldCkge1xuICAgIC8vIGludGVydmFsIGlzIHRoZSBudW0gd2Vla3Mgb3ZlciB3aGljaCB0aGUgbW92aW5nQXZlcmFnZSBpcyBjYWxjdWxhdGVkXG4gICAgY29uc3QgaW50ZXJ2YWwgPSA2O1xuXG4gICAgZGF0YXNldC5mb3JFYWNoKGZ1bmN0aW9uICh0ZXJtU2xpY2UpIHtcblxuICAgICAgLy8gY29uc3QgYXZlcmFnZUNoZWNrZXIgPSBbXTtcbiAgICAgIFxuICAgICAgY29uc3QgYXZlcmFnZXMgPSB0ZXJtU2xpY2UudmFsdWVzLm1hcChmdW5jdGlvbiAodiwgaSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInZcIiwgdilcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJpXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZC52YWx1ZXNcIiwgZC52YWx1ZXMpXG5cbiAgICAgICAgaWYgKGkgPCBpbnRlcnZhbCkge1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBtb3ZpbmdUb3RhbCA9IDA7XG5cbiAgICAgICAgdGVybVNsaWNlLnZhbHVlcy5zbGljZShpIC0gaW50ZXJ2YWwsIGkpLmZvckVhY2goZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICBtb3ZpbmdUb3RhbCArPSB2LnBvaW50O1xuICAgICAgICB9KTtcblxuICAgICAgICBjb25zdCBtb3ZpbmdBdmVyYWdlID0gTWF0aC5yb3VuZChtb3ZpbmdUb3RhbCAvIGludGVydmFsKTtcblxuICAgICAgICAvLyBhdmVyYWdlQ2hlY2tlci5wdXNoKFt2LnBvaW50LCBtb3ZpbmdBdmVyYWdlXSlcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ1RvdGFsXCIsIG1vdmluZ1RvdGFsKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdBdmVyYWdlXCIsIG1vdmluZ0F2ZXJhZ2UpO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgZGF0ZTogdi5kYXRlLFxuICAgICAgICAgIHBvaW50OiBtb3ZpbmdBdmVyYWdlLFxuICAgICAgICB9O1xuICAgICAgfSk7XG4gICAgLy8gICBjb25zb2xlLmxvZyhcImF2ZXJhZ2VzXCIsYXZlcmFnZUNoZWNrZXIpXG4gICAgICB0ZXJtU2xpY2UudmFsdWVzID0gYXZlcmFnZXMuc2xpY2UoaW50ZXJ2YWwpO1xuICAgIH0pO1xufVxuXG5cbi8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgY3JlYXRlcyB0aGUgZGF0YXNldCBmb3IgdGhlIGQzIGNoYXJ0IGRyYXdpbmcgZnVuY3Rpb24gdG8gdXNlXG4vLyB0YWtlcyBpbiBpbnB1dCBhcmdzIHRoYXQgd2VyZSByZXR1cm5lZCBmcm9tIHRoZSBmdW5jdGlvbiBcInJldHJpZXZlclwiXG5mdW5jdGlvbiBjcmVhdGVEYXRhc2V0IChxdWVyaWVzQXJyYXksIHRlcm1zQXJyYXksIHJldHJpZXZlclByb21pc2VzKSB7XG4gICAgXG4gIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gIGNvbnN0IGRhdGFzZXQgPSBbXTtcblxuICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gIC8vIGxldCBtYWluSW5kZXggPSAwO1xuXG4gIC8vIHJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHJlbGF0aXZlIHZhbHVlIG9mIGVhY2ggdGVybSBpbiBhIHF1ZXJ5U3Vic2V0LCBcbiAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgZnVuY3Rpb24gY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCByVmFsdWVJbmRleCkge1xuICAgICAgXG4gICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgbGV0IGRlbm9taW5hdG9yID0gcmF3ZGF0YVNsaWNlLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgbGV0IHJhdGlvO1xuICAgICAgXG4gICAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICAgIHJhdGlvID0gMDtcbiAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoK3Jhd2RhdGFTbGljZS52YWx1ZVtyVmFsdWVJbmRleF0gKiByYXRpbyk7XG4gIH1cblxuXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgcmV0cmlldmVyUHJvbWlzZXMgKHRvIHRlbGwgaWYgaXQgd2lsbCBhY2Nlc3MgdGhlIGZpcnN0IG9yIHN1YnNlcXVlbnQgc3ViZGF0YXNldHMpXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd3JpdGVzIHRoZSBkYXRhIGludG8gY29uc3QgXCJkYXRhc2V0XCIsIGluIGFwcHJvcHJpYXRlIGZvcm1hdCBcbiAgZnVuY3Rpb24gZ2V0RGF0YSAocHJvbWlzZSwgcHJvbWlzZUluZGV4KSB7XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJhd2RhdGEpIHtcbiAgICBcbiAgICAgIGxldCBpbmNyZW1lbnQgPSBwcm9taXNlSW5kZXggPT09IDAgPyAwIDogMTsgIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCB3aXRoaW4gZWFjaCBzdWJkYXRhc2V0XG4gICAgICBsZXQgbWF4TnVtT2ZRdWVyaWVzID0gNTsgLy8gbWF4IG51bSBvZiBxdWVyaWVzIGluIGEgc2luZ2xlIGNhbGwgdXNpbmcgR29vZ2xlIFRyZW5kcyBBUElcblxuICAgICAgd2hpbGUgKGluY3JlbWVudCA8IG1heE51bU9mUXVlcmllcyAmJiBkYXRhc2V0Lmxlbmd0aCA8IHF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcblxuICAgICAgICBsZXQgcXVlcmllc0FycmF5SW5kZXggPSBwcm9taXNlSW5kZXggKiAobWF4TnVtT2ZRdWVyaWVzIC0gMSkgKyBpbmNyZW1lbnQ7XG5cbiAgICAgICAgLy8gZWFjaCBzbGljZSBjb250YWlucyBhbGwgaW5mbyBmb3IgYSB0ZXJtXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06IHRlcm1zQXJyYXlbcXVlcmllc0FycmF5SW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogcmF3ZGF0YS5tYXAoZnVuY3Rpb24gKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4KSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBvaW50ID1cbiAgICAgICAgICAgICAgICBwcm9taXNlSW5kZXggPT09IDAgPyArcmF3ZGF0YVNsaWNlLnZhbHVlW2luY3JlbWVudF1cbiAgICAgICAgICAgICAgICAgIDogY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCBpbmNyZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihyYXdkYXRhU2xpY2UuZm9ybWF0dGVkQXhpc1RpbWUpLFxuXG4gICAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuICB9IFxuXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gcmV0cmlldmVyUHJvbWlzZXMubWFwKGZ1bmN0aW9uKHByb21pc2UsIGluZGV4KSB7XG4gICAgICByZXR1cm4gZ2V0RGF0YShwcm9taXNlLCBpbmRleCk7XG4gIH0pXG5cbiAgcmV0dXJuIG5ld1Byb21pc2VzQXJyYXlbMF0udGhlbihmaXJzdFN1YnNldCA9PiB7XG4gICAgICBjb25zdCByZW1haW5pbmdQcm9taXNlcyA9IG5ld1Byb21pc2VzQXJyYXkuc2xpY2UoMSk7XG4gICAgICByZXR1cm4gUHJvbWlzZS5hbGwocmVtYWluaW5nUHJvbWlzZXMpO1xuICB9KVxuICAudGhlbihyZXMgPT4ge1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldFwiLCBkYXRhc2V0KVxuICAgIFxuICAgIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UoZGF0YXNldCk7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0QWZ0ZXIgTW92aW5nQXZlcmFnZVwiLCBkYXRhc2V0KVxuXG4gICAgcmV0dXJuIGRhdGFzZXQ7XG4gIH0pXG4gIFxuICBcbn1cblxuZXhwb3J0IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH07XG4vLyBtb2R1bGUuZXhwb3J0cyA9IHsgcmV0cmlldmVyLCBjcmVhdGVEYXRhc2V0IH0iLCIvL1widGVybXMtb25seVwiIGFycmF5c1xuXG5jb25zdCAkMjAxOSA9IFtcbiAgICBcIm9rIGJvb21lclwiLFxuICAgIFwidnNjb1wiLFxuICAgIFwic2ZzXCIsXG4gICAgXCJmeXBcIixcbiAgICBcInMvdVwiLFxuICAgIFwibmdsXCIsXG4gICAgXCJzaW1wXCIsXG4gICAgXCJpeWt5a1wiLFxuICAgIFwic2JcIlxuICAgIC8vIFwiYW5kIGkgb29wXCIsXG4gICAgLy8gXCJza3Nrc2tcIixcbiAgICAvLyBcInlrdHZcIlxuXVxuXG5jb25zdCBvbmVIaXQgPSBbXCJzbGF0dFwiLCBcImFudHNcIl07XG5cblxuY29uc3QgJDIwMTggPSBbXG4gIFwiaW5jZWxcIixcbiAgXCJ1d3VcIixcbiAgXCJtdWtiYW5nXCIsXG4gIFwiaWJmXCIsXG4gIFwiYmxvY2tjaGFpblwiLFxuICBcInJuZ1wiLFxuICBcImppdFwiLFxuICBcImp1dWxpbmdcIixcbiAgXCJnZWt5dW1lXCIsXG4gIFwiemFkZHlcIixcbiAgXCJ3dG1cIixcbiAgXCJ3aWdcIixcbl07XG5cbmNvbnN0ICQyMDE3ID0gW1xuICBcIm5vbiBiaW5hcnlcIixcbiAgXCJiaXRjb2luXCIsXG4gIFwic25vd2ZsYWtlXCIsXG4gIFwicG1veXNcIixcbiAgXCJtYWdhXCIsXG4gIFwid2FzcFwiLFxuICBcImJvdWppZVwiLFxuICBcInRyb2xsc1wiLFxuXTtcblxuY29uc3QgJDIwMTYgPSBbXG4gIFwiZ2FzbGlnaHRpbmdcIixcbiAgXCJzandcIixcbiAgXCJib29saW5cIixcbiAgXCJ3b2tlXCIsXG4gIFwic2hpbGxcIixcbiAgXCJxdWFzaFwiLFxuICBcImJyYW5kaXNoXCIsXG4gIFwidHJpZ2dlcmVkXCIsXG4gIFwic2hvb2tcIixcbiAgXCJiaWdseVwiLFxuICBcImhvbG9zZXh1YWxcIixcbiAgXCJ2ZXhpbmdcIixcbiAgXCJib3VnaFwiLFxuICBcImp1anVcIixcbiAgXCJ3YXZ5XCIsXG5dO1xuXG5jb25zdCAkMjAxNSA9IFtcbiAgXCJzaW1tZXJcIixcbiAgXCJuZXRmbGl4IGFuZCBjaGlsbFwiLFxuICBcImNoYXBvXCIsXG4gIFwic3Rvb3BcIixcbiAgXCJibGFzZVwiLFxuICBcInBsZWJcIixcbiAgXCJsb3drZXlcIixcbiAgXCJ0b21lXCIsXG4gIFwid2FwXCIsXG4gIFwic2h1ZGRlclwiLFxuICBcImJ1cm50XCIsXG4gIFwidmFwZVwiLFxuXTtcblxuLy8gdGFrZXMgaW4gYSBcInRlcm1zLW9ubHlcIiBhcnJheTtcbi8vIHJldHVybnMgYW4gYXJyYXkgb2YgdGhlIGFjdHVhbCBzZWFyY2ggcXVlcmllcyB0byBiZSBtYWRlIHVzaW5nIHRoZSBHb29nbGUgVHJlbmRzIEFQSVxuZnVuY3Rpb24gc2VhcmNoVGVybXNHZW5lcmF0b3IoYXJyYXkpIHtcbiAgICBjb25zdCBzZWFyY2hUZXJtcyA9IFtdO1xuXG4gICAgYXJyYXkuZm9yRWFjaCgodGVybSkgPT4ge1xuICAgICAgICBzZWFyY2hUZXJtcy5wdXNoKGB3aGF0IGRvZXMgJHt0ZXJtfSBtZWFuYCk7XG4gICAgfSk7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhzZWFyY2hUZXJtcyk7XG4gICAgcmV0dXJuIHNlYXJjaFRlcm1zO1xufTtcblxuLy8gSW5wdXQgYXJnIFwicXVlcmllc0FycmF5XCIgaXMgdGhlIGFycmF5IG9mIHNlYXJjaCBxdWVyaWVzOyBcbi8vIFwibWF4TnVtT2ZRdWVyaWVzXCIgaXMgdGhlIG1heCBudW0gb2YgcXVlcmllcyBhbGxvd2VkIG9uIEdvb2dsZSBUcmVuZHMgQVBJO1xuLy8gXCJqb2luSW5kZXhcIiBpcyB0aGUgaW5kZXggb2YgdGhlIGNvbW1vbiBxdWVyeSBvbiB3aGljaCB3ZSBjYWxpYnJhdGUgZWFjaCBzdWJkYXRhc2V0LlxuLy8gRnVuY3Rpb24gc3BsaXR0ZXIgcmV0dXJucyBhbiBhcnJheSBvZiBxdWVyeVN1YnNldHMsIGFuZCBhIGEgdGVybXMtb25seSBhcnJheSByZWFycmFuZ2VkIHdpdGggdGhlIGNvbW1vbiB0ZXJtIGF0IGluZGV4IDAuXG4vLyBFYWNoIHF1ZXJ5U3Vic2V0IGlzIGFuIGFycmF5IHRoYXQgY29udGFpbnMgdGhlIGNvbW1vbiBxdWVyeSBhbG9uZyB3aXRoIG90aGVyIHF1ZXJpZXM7IHN1YmFycmF5Lmxlbmd0aCA9IG1heE51bU9mUXVlcmllcy5cbi8vIExhdGVyLCBlYWNoIHF1ZXJ5U3Vic2V0IGlzIHVzZWQgdG8gbWFrZSAxIEFQSSBjYWxsIHRvIG9idGFpbiBhIGRhdGFTdWJzZXQuXG5mdW5jdGlvbiBzcGxpdHRlcihxdWVyaWVzQXJyYXksIG1heE51bU9mUXVlcmllcywgam9pbkluZGV4LCB0ZXJtc0FycmF5KSB7XG5cbiAgLy8gcmVtb3ZlIHRoZSBjb21tb24gcXVlcnkgZnJvbSB0aGUgcXVlcmllc0FycmF5IG9uIHdoaWNoIHdlJ2xsIGl0ZXJhdGUgb3ZlciB0byBnZXQgdGhlIHN1YnNldHMgb2YgcXVlcmllcyxcbiAgLy8gYW5kIHNhdmUgdGhlIGNvbW1vbiBxdWVyeSB0byBjb25zdCBqb2luVGVybVxuICBjb25zdCBqb2luVGVybSA9IHF1ZXJpZXNBcnJheS5zcGxpY2Uoam9pbkluZGV4LCAxKTtcblxuICBjb25zdCBpbnRlcnZhbCA9IG1heE51bU9mUXVlcmllcyAtIDE7XG5cbiAgbGV0IHF1ZXJ5U3Vic2V0cyA9IFtdO1xuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwgcXVlcmllc0FycmF5Lmxlbmd0aDsgKSB7XG4gICAgLy8gZWFjaCBzZXQgb2YgcXVlcmllcyBleGNsdWRpbmcgY29tbW9uIHF1ZXJ5XG4gICAgY29uc3QgZ3JvdXAgPSBxdWVyaWVzQXJyYXkuc2xpY2UoaSwgaSArIGludGVydmFsKTtcblxuICAgIC8vIGVhY2ggc3ViYXJyYXkgaGFzIHRoZSBjb21tb24gcXVlcnkgYXMgdGhlIGZpcnN0IGVsZW1lbnQsIGZvbGxvd2VkIGJ5IG90aGVyIHF1ZXJpZXNcbiAgICBjb25zdCBxdWVyeVN1YnNldCA9IGpvaW5UZXJtLmNvbmNhdChncm91cCk7XG5cbiAgICBxdWVyeVN1YnNldHMucHVzaChxdWVyeVN1YnNldCk7XG5cbiAgICAvLyBqdW1wIHRvIHRoZSBuZXh0IGVsZW1lbnQgaW4gYXJyYXkgd2hpY2ggaGFzbid0IHlldCBiZWVuIGFkZGVkIHRvIGEgcXVlcnlTdWJzZXRcbiAgICBpICs9IGludGVydmFsO1xuICB9XG5cbiAgcXVlcmllc0FycmF5ID0gam9pblRlcm0uY29uY2F0KHF1ZXJpZXNBcnJheSk7XG4gIHRlcm1zQXJyYXkgPSB0ZXJtc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpLmNvbmNhdCh0ZXJtc0FycmF5KVxuICBcblxuICByZXR1cm4gW3F1ZXJ5U3Vic2V0cywgcXVlcmllc0FycmF5LCB0ZXJtc0FycmF5XTtcbn1cblxuXG5jb25zdCAkMjAxOV9zZWFyY2hUZXJtcyA9IHNlYXJjaFRlcm1zR2VuZXJhdG9yKCQyMDE5KTtcbmNvbnN0ICQyMDE5X3NwbGl0UXVlcmllcyA9IHNwbGl0dGVyKCQyMDE5X3NlYXJjaFRlcm1zLCA1LCAkMjAxOV9zZWFyY2hUZXJtcy5sZW5ndGggLyAyLCAkMjAxOSk7XG5cbm1vZHVsZS5leHBvcnRzID0geyAkMjAxOV9zcGxpdFF1ZXJpZXMgfTsiLCIvLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qc1wiO1xuaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi9kYXRhL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydEEgfSBmcm9tIFwiLi9jaGFydC9jaGFydEEuanNcIjtcblxuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG4vLyAvLyB0byBpbGx1c3RyYXRlIHN2ZyBwYXRoIG1pbmktbGFuZ3VhZ2Vcbi8vIC8vIGNvbnN0IGlsbHVzdHJhdGlvbiA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4vLyAgICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuXG4vLyAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcblxuLy8gLy8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIFxuICAvLy8vIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGNvbnN0IFskMjAxOV9xdWVyeVN1YnNldHMsICQyMDE5X3F1ZXJpZXNBcnJheSwgJDIwMTlfdGVybXNBcnJheV0gPSAkMjAxOV9zcGxpdFF1ZXJpZXM7XG5cbiAgY29uc3QgJDIwMTlfcmV0cmlldmVyUHJvbWlzZXMgPSByZXRyaWV2ZXIoJDIwMTlfcXVlcnlTdWJzZXRzKTtcbiAgXG4gIC8vIENBTEwgRFJBVyBDSEFSVCBGVU5DVElPTlxuICBcbiAgY3JlYXRlRGF0YXNldCgkMjAxOV9xdWVyaWVzQXJyYXksICQyMDE5X3Rlcm1zQXJyYXksICQyMDE5X3JldHJpZXZlclByb21pc2VzKVxuICAudGhlbigoZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJpbmRleC5qcyBkYXRhc2V0XCIsIGQpXG4gICAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRBKCkpXG4gIH0pXG5cbiAgLy8gY3JlYXRlRGF0YXNldCgkMjAxOV9xdWVyaWVzQXJyYXksICQyMDE5X3Rlcm1zQXJyYXksICQyMDE5X3JldHJpZXZlclByb21pc2VzKVxuICAvLyAudGhlbigoZCkgPT4ge1xuICAvLyAgICAgY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGQpXG4gIC8vICAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRUZW1wbGF0ZSgpKVxuICAvLyB9KVxuXG5cbiAgXG4gICAgXG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cblxuIl0sInNvdXJjZVJvb3QiOiIifQ==