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
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@use \"sass:list\";\nhtml {\n  scroll-behavior: smooth; }\n\n#intro {\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 60px 0px 30px;\n  box-sizing: border-box;\n  display: flex; }\n\n#left {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  padding: 100px 0 100px 0;\n  box-sizing: border-box;\n  text-align: left;\n  justify-content: center;\n  text-align: center; }\n\n#graph-1 {\n  display: flex;\n  height: 100vh;\n  overflow: scroll; }\n\n#graph-1 > .svg-container {\n  background-color: #f5f5eb;\n  position: sticky;\n  top: 0; }\n\n#graph-1 svg {\n  padding: 40px; }\n\n#text-1 {\n  width: 100vw; }\n\n#panel {\n  padding: 35vh 10vh 40vh 10vh; }\n\n#banner-1, #banner-2 {\n  background-color: red;\n  height: 80px;\n  width: 100%; }\n\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line {\n  stroke-width: 1; }\n\n.hover-line {\n  fill: none;\n  stroke: #d2d2d2;\n  opacity: 0;\n  stroke-width: 20; }\n\n.label {\n  padding: 100;\n  font-size: 12px; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n#left, #right, #panel {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6; }\n\n#left h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n#left p:last-of-type {\n  padding: 0 10% 0 10%; }\n\n#subtitle {\n  font-style: italic;\n  font-size: 14px;\n  padding-bottom: 60px; }\n\n#right {\n  width: 40%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n#right > a {\n  text-decoration: none;\n  box-sizing: border-box;\n  text-align: center;\n  width: 300px;\n  padding: 10px;\n  margin-right: 30px;\n  background-color: #cfecf8;\n  font-weight: bold;\n  border-radius: 25px; }\n\n#right > a:hover {\n  background-color: #8bd3ee;\n  color: white;\n  font-weight: normal; }\n", ""]);
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
  var width = 1200 * 0.6;
  var height = 800 * 0.6;
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
      }); // renders chart 

      function render(chartStartDate, chartEndDate) {} // const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);


      var midDate = new Date(2019, 5, 30);
      var chartStartDate = startDate;
      var chartEndDate = midDate;
      var chartIndexStart;
      var chartIndexEnd;
      var currentMaxY;
      console.log("chartStartDate", chartStartDate);
      console.log("chartMidDate", chartEndDate); // console.log("chartIndexEnd date", data[0].values[chartIndexEnd].date);
      // console.log("chartIndexStart, chartIndexEnd", chartIndexStart, chartIndexEnd);

      function updateCurrentMaxY() {
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
        } // console.log(data[0].values[chartIndexEnd])


        console.log("chartindexend", chartIndexEnd);
        currentMaxY = d3.max(data, function (termSlice) {
          var valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);
          return d3.max(valueArray, function (v) {
            return v.point;
          });
        });
        console.log("currentMaxY", currentMaxY);
      }

      updateCurrentMaxY(); // define max value for domain on y-axis (points)
      // currentMaxY = d3.max(data, function (termSlice) {
      //   let valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);
      //   return d3.max(valueArray, function (v) {
      //     return v.point;
      //   });
      // });
      // set domain and range of x-axis

      var xScale = d3.scaleTime().domain([chartStartDate, chartEndDate]).range([0, width]); // set domain of y-axis

      var yScale = d3.scaleLinear().domain([0, currentMaxY]).rangeRound([height, 0]); // add label coordinates to dataset's termSlices

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, chartIndexEnd, 12, xScale, yScale); // AXES

      var xAxis = d3.axisBottom(xScale); // .scale(xScale)

      xAxis.ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")).tickSizeOuter(0);
      var yAxis = d3.axisLeft().scale(yScale).tickValues([]).tickSizeOuter(0); // AXES: gridlines

      var yAxisGrid = d3.axisLeft().scale(yScale).tickSize(-width).tickFormat("").tickValues([currentMaxY / 3, 2 * currentMaxY / 3, currentMaxY]).tickSizeOuter(0); // append svg

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

      var clip = svg.append("defs").append("clipPath").attr("id", "date-clip").append("rect").attr("x", xScale(chartStartDate)) //   .attr("x", xScale(startDate))
      .attr("y", yScale(currentMaxY)) //   .attr("y", yScale(maxY - midMax))
      .attr("width", width).attr("height", height); // draw lines

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
      });
      var t = d3.transition().ease(d3.easeCubic).delay(1000).duration(5000);

      function updateChart(newStartDate, newEndDate) {
        svg.selectAll("*").interrupt();
        console.log("CHART IS UPDATING"); // console.log("updateChart",d3.selection.event)
        // const extent = [newStartDate, newEndDate];
        // console.log("extent", extent)
        // const test1 = xScale.invert(extent[0])
        // const test2 = xScale.invert(extent[1])
        // console.log("updateChart", test1, test2)

        chartStartDate = newStartDate;
        chartEndDate = newEndDate;
        xScale.domain([chartStartDate, chartEndDate]); // console.log("x axis", svg.select(".x-axis"))
        // console.log("x axis", xAxis)

        svg.select(".x-axis").transition(t).call(xAxis); // svg.select(".x-axis").transition().delay(1000).call(xAxis);

        updateCurrentMaxY();
        yScale.domain([0, currentMaxY]);
        lines.selectAll(".line") // .transition().delay(1000)
        .transition(t).attr("d", function (d) {
          return line(d.values);
        });
        lines.selectAll(".hover-line") //   .transition().delay(1000)
        .transition(t).attr("d", function (d) {
          return line(d.values);
        });
        Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, chartIndexEnd, 12, xScale, yScale);
        lines.selectAll(".label") // .transition().delay(1000)
        .transition(t).attr("x", 5).attr("transform", function (d, i) {
          return "translate(".concat(d.labelX, ", ").concat(d.labelY, ")");
        }); // console.log("chartindexend", chartIndexEnd)
        // .transition().delay(1000)
      } // updateChart(startDate, endDate) 


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
      var scrollTop = 0;
      var newScrollTop = 0;
      var thing = d3.select("#graph-1"); // let thing = d3.select("#text-1");
      // let thing = document.getElementById("graph-1");
      // console.log("thing", thing)
      // console.log("inner", window.innerHeight, window.innerWidth)

      var HEIGHT = window.innerHeight;
      var WIDTH = window.innerWidth; // let crucialText = d3.selectAll("#panel").filter(function(d, i) { return i === 0})

      var crucialText = document.getElementById("panel").getElementsByTagName("p")[0]; // console.log("crucial text", crucialText)
      // console.log("crucial top", crucialTop)
      // thing.addEventListener('scroll', function(e){
      //     let crucialTop = crucialText.getBoundingClientRect();
      //     console.log('y', crucialTop)
      //     if(crucialTop.y - WIDTH < 0) {
      //         updateChart(startDate, endDate)
      //     }
      // })
      // let forward = updateChart; 
      // let backward;

      thing.on("scroll.scroller", function () {
        console.log("scroooooling");
        newScrollTop = thing.node().scrollTop; // let action = updateChart;

        console.log("newScrollTop", newScrollTop);

        if (scrollTop <= 60 && newScrollTop > 60) {
          updateChart(startDate, endDate); // backward = updateChart;
          // forward(startDate, endDate);
          // forward = function() {};
        }

        if (scrollTop >= 59 && newScrollTop < 59) {
          updateChart(startDate, midDate); // forward = updateChart;
          // backward(startDate, midDate);
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

  var $2019_retrieverPromises = Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["retriever"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][0]);
  console.log("$2019_retrieverPromises", $2019_retrieverPromises); // CALL DRAW CHART FUNCTION

  console.log("$2019_splitqueries", _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"]);
  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][2], $2019_retrieverPromises).then(function (d) {
    console.log("dataset", d);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJyZXRyaWV2ZXIiLCJxdWVyeVN1YnNldHMiLCJyZXRyaWV2ZXJQcm9taXNlcyIsImZvckVhY2giLCJzcGxpdFF1ZXJ5IiwiaW5kZXgiLCJwdXNoIiwianNvbiIsImNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UiLCJkYXRhc2V0IiwiaW50ZXJ2YWwiLCJ0ZXJtU2xpY2UiLCJhdmVyYWdlcyIsInZhbHVlcyIsIm1hcCIsInYiLCJpIiwibW92aW5nVG90YWwiLCJzbGljZSIsInBvaW50IiwibW92aW5nQXZlcmFnZSIsIk1hdGgiLCJyb3VuZCIsImRhdGUiLCJjcmVhdGVEYXRhc2V0IiwicXVlcmllc0FycmF5IiwidGVybXNBcnJheSIsImFycmF5T2ZQcm9taXNlcyIsImNhbGlicmF0ZSIsInJhd2RhdGFTbGljZSIsInJhd2RhdGFJbmRleCIsInJWYWx1ZUluZGV4IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJ2YWx1ZSIsInJhdGlvIiwiZ2V0RGF0YSIsInByb21pc2UiLCJwcm9taXNlSW5kZXgiLCJ0aGVuIiwicmF3ZGF0YSIsImluY3JlbWVudCIsIm1heE51bU9mUXVlcmllcyIsImxlbmd0aCIsInF1ZXJpZXNBcnJheUluZGV4IiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwibmV3UHJvbWlzZXNBcnJheSIsImZpcnN0U3Vic2V0IiwicmVtYWluaW5nUHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiJDIwMTkiLCJvbmVIaXQiLCIkMjAxOCIsIiQyMDE3IiwiJDIwMTYiLCIkMjAxNSIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwiam9pbkluZGV4Iiwiam9pblRlcm0iLCJzcGxpY2UiLCJncm91cCIsInF1ZXJ5U3Vic2V0IiwiY29uY2F0IiwiJDIwMTlfc2VhcmNoVGVybXMiLCIkMjAxOV9zcGxpdFF1ZXJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcnRUZW1wbGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRqIiwiZHJhdyIsInNlbGVjdGlvbiIsImVhY2giLCJkYXRhIiwic3RhcnREYXRlIiwibWluIiwiZCIsImVuZERhdGUiLCJtYXgiLCJyZW5kZXIiLCJjaGFydFN0YXJ0RGF0ZSIsImNoYXJ0RW5kRGF0ZSIsIm1pZERhdGUiLCJEYXRlIiwiY2hhcnRJbmRleFN0YXJ0IiwiY2hhcnRJbmRleEVuZCIsImN1cnJlbnRNYXhZIiwiY29uc29sZSIsImxvZyIsInVwZGF0ZUN1cnJlbnRNYXhZIiwidmFsdWVBcnJheSIsInhTY2FsZSIsInNjYWxlVGltZSIsImRvbWFpbiIsInJhbmdlIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwiYWRkTGFiZWxDb29yZHMiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXMiLCJheGlzTGVmdCIsInNjYWxlIiwidGlja1ZhbHVlcyIsInlBeGlzR3JpZCIsInRpY2tTaXplIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsImNhbGwiLCJjbGlwIiwibGluZSIsIngiLCJ5IiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJob3ZlckxpbmVzIiwidCIsInRyYW5zaXRpb24iLCJlYXNlIiwiZWFzZUN1YmljIiwiZGVsYXkiLCJkdXJhdGlvbiIsInVwZGF0ZUNoYXJ0IiwibmV3U3RhcnREYXRlIiwibmV3RW5kRGF0ZSIsImludGVycnVwdCIsInN0eWxlIiwib24iLCJub2RlcyIsInNlbGVjdGVkX2kiLCJmbG9vciIsInNlbGVjdGVkIiwicmFpc2UiLCJzY3JvbGxUb3AiLCJuZXdTY3JvbGxUb3AiLCJ0aGluZyIsIkhFSUdIVCIsIndpbmRvdyIsImlubmVySGVpZ2h0IiwiV0lEVEgiLCJpbm5lcldpZHRoIiwiY3J1Y2lhbFRleHQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJub2RlIiwiYXJndW1lbnRzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQyMDE5X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iLCJzcGFjZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwicyIsImxhc3RJbmRleCIsInYxIiwidjIiLCJqIiwieURpZmYiLCJhYnMiLCJhZGREaWZmIiwiZ3JlYXRlckluZGV4IiwidGVzdF9mdW5jdGlvbiIsIm1hcmdpbiIsInBhZGRpbmciLCJjbGFzc2VkIiwiY3N2Iiwic2xpY2VzIiwiY29sdW1ucyIsImlkIiwibWVhc3VyZW1lbnQiLCJleHRlbnQiLCJjIiwieWF4aXMiLCJ4YXhpcyIsInRpbWVEYXkiLCJpZHMiLCJ0ZXJyIiwiZmxvd2VyIiwiYmVlIiwibGFiZWwiLCJjaGFydEEiLCJteSIsInNjYWxldGVzdCIsImNoYXJ0Iiwic3RyYXdiZXJyeSIsInNpbXBsZV9leGFtcGxlIl0sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7QUNsRkEsVUFBVSxtQkFBTyxDQUFDLHlKQUE4RTtBQUNoRywwQkFBMEIsbUJBQU8sQ0FBQyxnT0FBNEc7O0FBRTlJOztBQUVBO0FBQ0EsMEJBQTBCLFFBQVM7QUFDbkM7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTs7OztBQUlBLHNDOzs7Ozs7Ozs7OztBQ2xCQTtBQUNBLGtDQUFrQyxtQkFBTyxDQUFDLDJHQUFzRDtBQUNoRztBQUNBLGNBQWMsUUFBUyxvR0FBb0csSUFBSSxnREFBZ0Q7QUFDL0s7QUFDQSxjQUFjLFFBQVMsb21CQUFvbUIsY0FBYyxlQUFlLGNBQWMsb0JBQW9CLGtCQUFrQiw2QkFBNkIsRUFBRSxpSkFBaUosbUJBQW1CLEVBQUUsVUFBVSxtQkFBbUIsRUFBRSxZQUFZLHFCQUFxQixFQUFFLG1CQUFtQixpQkFBaUIsRUFBRSw2REFBNkQsZ0JBQWdCLGtCQUFrQixFQUFFLFdBQVcsOEJBQThCLHNCQUFzQixFQUFFLHVCQUF1QixRQUFRLDRCQUE0QixFQUFFLFlBQVksNEJBQTRCLGtCQUFrQixnQkFBZ0IsK0JBQStCLDJCQUEyQixrQkFBa0IsRUFBRSxXQUFXLGVBQWUsa0JBQWtCLDJCQUEyQiw2QkFBNkIsMkJBQTJCLHFCQUFxQiw0QkFBNEIsdUJBQXVCLEVBQUUsY0FBYyxrQkFBa0Isa0JBQWtCLHFCQUFxQixFQUFFLCtCQUErQiw4QkFBOEIscUJBQXFCLFdBQVcsRUFBRSxrQkFBa0Isa0JBQWtCLEVBQUUsYUFBYSxpQkFBaUIsRUFBRSxZQUFZLGlDQUFpQyxFQUFFLDBCQUEwQiwwQkFBMEIsaUJBQWlCLGdCQUFnQixFQUFFLFVBQVUsZUFBZSxrQkFBa0IsRUFBRSxxREFBcUQsb0JBQW9CLHNCQUFzQixnQ0FBZ0MsRUFBRSx3QkFBd0IsMkJBQTJCLG9CQUFvQix3QkFBd0IsZ0NBQWdDLEVBQUUsMEJBQTBCLHNCQUFzQixFQUFFLG1CQUFtQixrQkFBa0Isb0JBQW9CLDhCQUE4QixHQUFHLHFDQUFxQyxvQkFBb0Isc0JBQXNCLGdDQUFnQyxFQUFFLGlDQUFpQyxrQkFBa0Isd0NBQXdDLG9CQUFvQixFQUFFLHFEQUFxRCxlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsdUJBQXVCLGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLHVCQUF1QixlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsdUJBQXVCLGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLHVCQUF1QixlQUFlLG9CQUFvQixpQkFBaUIsb0JBQW9CLG9CQUFvQixFQUFFLGNBQWMsa0JBQWtCLHdDQUF3QyxtQkFBbUIsOEJBQThCLEVBQUUsdUJBQXVCLGVBQWUsb0JBQW9CLGlCQUFpQixvQkFBb0Isb0JBQW9CLEVBQUUsY0FBYyxrQkFBa0Isd0NBQXdDLG1CQUFtQiw4QkFBOEIsRUFBRSx1QkFBdUIsZUFBZSxvQkFBb0IsaUJBQWlCLG9CQUFvQixvQkFBb0IsRUFBRSxjQUFjLGtCQUFrQix3Q0FBd0MsbUJBQW1CLDhCQUE4QixFQUFFLFdBQVcsb0JBQW9CLEVBQUUsaUJBQWlCLGVBQWUsb0JBQW9CLGVBQWUscUJBQXFCLEVBQUUsWUFBWSxpQkFBaUIsb0JBQW9CLEVBQUUseURBQXlELGtCQUFrQix1QkFBdUIsb0JBQW9CLEVBQUUsMEJBQTBCLGlCQUFpQixrQkFBa0IsRUFBRSx5REFBeUQsK0JBQStCLEdBQUcsNEJBQTRCLHNDQUFzQyxxQkFBcUIscUJBQXFCLEVBQUUsY0FBYyw2Q0FBNkMsb0JBQW9CLG1CQUFtQixtQkFBbUIsMkJBQTJCLHdCQUF3QixFQUFFLDBCQUEwQix5QkFBeUIsRUFBRSxlQUFlLHVCQUF1QixvQkFBb0IseUJBQXlCLEVBQUUsWUFBWSxlQUFlLDJCQUEyQixrQkFBa0IsMkJBQTJCLDRCQUE0Qix3QkFBd0IsRUFBRSxnQkFBZ0IsMEJBQTBCLDJCQUEyQix1QkFBdUIsaUJBQWlCLGtCQUFrQix1QkFBdUIsOEJBQThCLHNCQUFzQix3QkFBd0IsRUFBRSxzQkFBc0IsOEJBQThCLGlCQUFpQix3QkFBd0IsRUFBRTtBQUN0aE07QUFDQTs7Ozs7Ozs7Ozs7OztBQ1BhOztBQUViO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCOztBQUVoQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0Q0FBNEMscUJBQXFCO0FBQ2pFOztBQUVBO0FBQ0EsS0FBSztBQUNMLElBQUk7QUFDSjs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFCQUFxQixpQkFBaUI7QUFDdEM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLG9CQUFvQixxQkFBcUI7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBLDhCQUE4Qjs7QUFFOUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7O0FBRUE7QUFDQSxDQUFDOzs7QUFHRDtBQUNBO0FBQ0E7QUFDQSxxREFBcUQsY0FBYztBQUNuRTtBQUNBLEM7Ozs7Ozs7Ozs7OztBQzdGYTs7QUFFYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVEOztBQUV2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7O0FBRUE7QUFDQTs7QUFFQSxpQkFBaUIsd0JBQXdCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsaUJBQWlCLGlCQUFpQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0JBQWdCLEtBQXdDLEdBQUcsc0JBQWlCLEdBQUcsU0FBSTs7QUFFbkY7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7O0FBRUg7QUFDQTtBQUNBLEdBQUc7QUFDSDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOztBQUVEO0FBQ0EscUVBQXFFLHFCQUFxQixhQUFhOztBQUV2Rzs7QUFFQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBOztBQUVBO0FBQ0EseURBQXlEO0FBQ3pELEdBQUc7O0FBRUg7OztBQUdBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsNEJBQTRCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLG9CQUFvQiw2QkFBNkI7QUFDakQ7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEU7Ozs7Ozs7Ozs7OztBQzVRQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBRUE7O0FBQ0EsSUFBTUEsUUFBUSxHQUFHQyxFQUFFLENBQUNDLFNBQUgsQ0FBYSxXQUFiLENBQWpCLEMsQ0FHQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxTQUFTQyxTQUFULENBQW9CQyxZQUFwQixFQUFrQztBQUNoQyxNQUFNQyxpQkFBaUIsR0FBRyxFQUExQjtBQUVBRCxjQUFZLENBQUNFLE9BQWIsQ0FBcUIsVUFBQ0MsVUFBRCxFQUFhQyxLQUFiLEVBQXVCO0FBQzFDO0FBQ0FILHFCQUFpQixDQUFDSSxJQUFsQixDQUF1QlIsRUFBRSxDQUFDUyxJQUFILG1DQUFtQ0YsS0FBbkMsV0FBdkI7QUFDRCxHQUhEO0FBS0EsU0FBT0gsaUJBQVA7QUFDRCxDLENBR0Q7OztBQUNBLFNBQVNNLHNCQUFULENBQWlDQyxPQUFqQyxFQUEwQztBQUN0QztBQUNBLE1BQU1DLFFBQVEsR0FBRyxDQUFqQjtBQUVBRCxTQUFPLENBQUNOLE9BQVIsQ0FBZ0IsVUFBVVEsU0FBVixFQUFxQjtBQUVuQztBQUVBLFFBQU1DLFFBQVEsR0FBR0QsU0FBUyxDQUFDRSxNQUFWLENBQWlCQyxHQUFqQixDQUFxQixVQUFVQyxDQUFWLEVBQWFDLENBQWIsRUFBZ0I7QUFDcEQ7QUFDQTtBQUNBO0FBRUEsVUFBSUEsQ0FBQyxHQUFHTixRQUFSLEVBQWtCO0FBQ2hCO0FBQ0Q7O0FBRUQsVUFBSU8sV0FBVyxHQUFHLENBQWxCO0FBRUFOLGVBQVMsQ0FBQ0UsTUFBVixDQUFpQkssS0FBakIsQ0FBdUJGLENBQUMsR0FBR04sUUFBM0IsRUFBcUNNLENBQXJDLEVBQXdDYixPQUF4QyxDQUFnRCxVQUFVWSxDQUFWLEVBQWE7QUFDM0RFLG1CQUFXLElBQUlGLENBQUMsQ0FBQ0ksS0FBakI7QUFDRCxPQUZEO0FBSUEsVUFBTUMsYUFBYSxHQUFHQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0wsV0FBVyxHQUFHUCxRQUF6QixDQUF0QixDQWZvRCxDQWlCcEQ7QUFFQTtBQUNBOztBQUVBLGFBQU87QUFDTGEsWUFBSSxFQUFFUixDQUFDLENBQUNRLElBREg7QUFFTEosYUFBSyxFQUFFQztBQUZGLE9BQVA7QUFJRCxLQTFCZ0IsQ0FBakIsQ0FKbUMsQ0ErQnJDOztBQUNFVCxhQUFTLENBQUNFLE1BQVYsR0FBbUJELFFBQVEsQ0FBQ00sS0FBVCxDQUFlUixRQUFmLENBQW5CO0FBQ0QsR0FqQ0Q7QUFrQ0gsQyxDQUdEO0FBQ0E7OztBQUNBLFNBQVNjLGFBQVQsQ0FBd0JDLFlBQXhCLEVBQXNDQyxVQUF0QyxFQUFrREMsZUFBbEQsRUFBbUU7QUFFakU7QUFDQSxNQUFNbEIsT0FBTyxHQUFHLEVBQWhCLENBSGlFLENBS2pFO0FBQ0E7QUFFQTtBQUNBOztBQUNBLFdBQVNtQixTQUFULENBQW1CQyxZQUFuQixFQUFpQ0MsWUFBakMsRUFBK0NDLFdBQS9DLEVBQTREO0FBRXhELFFBQUlDLFNBQVMsR0FBR3ZCLE9BQU8sQ0FBQyxDQUFELENBQVAsQ0FBV0ksTUFBWCxDQUFrQmlCLFlBQWxCLEVBQWdDWCxLQUFoRCxDQUZ3RCxDQUVEOztBQUN2RCxRQUFJYyxXQUFXLEdBQUdKLFlBQVksQ0FBQ0ssS0FBYixDQUFtQixDQUFuQixDQUFsQixDQUh3RCxDQUdmOztBQUN6QyxRQUFJQyxLQUFKOztBQUVBLFFBQUlGLFdBQVcsS0FBSyxDQUFwQixFQUF1QjtBQUN2QkUsV0FBSyxHQUFHLENBQVI7QUFDQyxLQUZELE1BRU87QUFBQ0EsV0FBSyxHQUFHSCxTQUFTLEdBQUdDLFdBQXBCO0FBQ1A7O0FBRUQsV0FBT1osSUFBSSxDQUFDQyxLQUFMLENBQVcsQ0FBQ08sWUFBWSxDQUFDSyxLQUFiLENBQW1CSCxXQUFuQixDQUFELEdBQW1DSSxLQUE5QyxDQUFQO0FBQ0gsR0F0QmdFLENBeUJqRTtBQUNBOzs7QUFDQSxXQUFTQyxPQUFULENBQWtCQyxPQUFsQixFQUEyQkMsWUFBM0IsRUFBeUM7QUFFdkMsV0FBT0QsT0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBU0MsT0FBVCxFQUFrQjtBQUVwQyxVQUFJQyxTQUFTLEdBQUdILFlBQVksS0FBSyxDQUFqQixHQUFxQixDQUFyQixHQUF5QixDQUF6QyxDQUZvQyxDQUVTOztBQUM3QyxVQUFJSSxlQUFlLEdBQUcsQ0FBdEIsQ0FIb0MsQ0FHWDs7QUFFekIsYUFBT0QsU0FBUyxHQUFHQyxlQUFaLElBQStCakMsT0FBTyxDQUFDa0MsTUFBUixHQUFpQmxCLFlBQVksQ0FBQ2tCLE1BQXBFLEVBQTRFO0FBRTFFLFlBQUlDLGlCQUFpQixHQUFHTixZQUFZLElBQUlJLGVBQWUsR0FBRyxDQUF0QixDQUFaLEdBQXVDRCxTQUEvRCxDQUYwRSxDQUkxRTs7QUFDQSxZQUFNdkIsS0FBSyxHQUFHO0FBQ1oyQixjQUFJLEVBQUVuQixVQUFVLENBQUNrQixpQkFBRCxDQURKO0FBRVovQixnQkFBTSxFQUFFMkIsT0FBTyxDQUFDMUIsR0FBUixDQUFZLFVBQVVlLFlBQVYsRUFBd0JDLFlBQXhCLEVBQXNDO0FBRXRELGdCQUFJWCxLQUFLLEdBQ1BtQixZQUFZLEtBQUssQ0FBakIsR0FBcUIsQ0FBQ1QsWUFBWSxDQUFDSyxLQUFiLENBQW1CTyxTQUFuQixDQUF0QixHQUNJYixTQUFTLENBQUNDLFlBQUQsRUFBZUMsWUFBZixFQUE2QlcsU0FBN0IsQ0FGZjtBQUlGLG1CQUFPO0FBQ0xsQixrQkFBSSxFQUFFMUIsUUFBUSxDQUFDZ0MsWUFBWSxDQUFDaUIsaUJBQWQsQ0FEVDtBQUdMM0IsbUJBQUssRUFBRUE7QUFIRixhQUFQO0FBT0QsV0FiTztBQUZJLFNBQWQ7QUFrQkFWLGVBQU8sQ0FBQ0gsSUFBUixDQUFhWSxLQUFiO0FBRUF1QixpQkFBUyxJQUFJLENBQWI7QUFFRDs7QUFDRCxhQUFPaEMsT0FBUDtBQUVELEtBbkNNLENBQVA7QUFxQ0QsR0FsRWdFLENBcUVqRTs7O0FBQ0EsTUFBTXNDLGdCQUFnQixHQUFHcEIsZUFBZSxDQUFDYixHQUFoQixDQUFvQixVQUFTdUIsT0FBVCxFQUFrQmhDLEtBQWxCLEVBQXlCO0FBQ2xFLFdBQU8rQixPQUFPLENBQUNDLE9BQUQsRUFBVWhDLEtBQVYsQ0FBZDtBQUNILEdBRndCLENBQXpCO0FBSUEsU0FBTzBDLGdCQUFnQixDQUFDLENBQUQsQ0FBaEIsQ0FBb0JSLElBQXBCLENBQXlCLFVBQUFTLFdBQVcsRUFBSTtBQUMzQyxRQUFNQyxpQkFBaUIsR0FBR0YsZ0JBQWdCLENBQUM3QixLQUFqQixDQUF1QixDQUF2QixDQUExQjtBQUNBLFdBQU9nQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsaUJBQVosQ0FBUDtBQUNILEdBSE0sRUFJTlYsSUFKTSxDQUlELFVBQUFhLEdBQUcsRUFBSTtBQUNYO0FBRUE1QywwQkFBc0IsQ0FBQ0MsT0FBRCxDQUF0QixDQUhXLENBSVg7O0FBRUEsV0FBT0EsT0FBUDtBQUNELEdBWE0sQ0FBUDtBQWNEOztDQUdELGdEOzs7Ozs7Ozs7OztBQzdKQTtBQUVBLElBQU00QyxLQUFLLEdBQUcsQ0FDVixXQURVLEVBRVYsTUFGVSxFQUdWLEtBSFUsRUFJVixLQUpVLEVBS1YsS0FMVSxFQU1WLEtBTlUsRUFPVixNQVBVLEVBUVYsT0FSVSxFQVNWLElBVFUsQ0FVVjtBQUNBO0FBQ0E7QUFaVSxDQUFkO0FBZUEsSUFBTUMsTUFBTSxHQUFHLENBQUMsT0FBRCxFQUFVLE1BQVYsQ0FBZjtBQUdBLElBQU1DLEtBQUssR0FBRyxDQUNaLE9BRFksRUFFWixLQUZZLEVBR1osU0FIWSxFQUlaLEtBSlksRUFLWixZQUxZLEVBTVosS0FOWSxFQU9aLEtBUFksRUFRWixTQVJZLEVBU1osU0FUWSxFQVVaLE9BVlksRUFXWixLQVhZLEVBWVosS0FaWSxDQUFkO0FBZUEsSUFBTUMsS0FBSyxHQUFHLENBQ1osWUFEWSxFQUVaLFNBRlksRUFHWixXQUhZLEVBSVosT0FKWSxFQUtaLE1BTFksRUFNWixNQU5ZLEVBT1osUUFQWSxFQVFaLFFBUlksQ0FBZDtBQVdBLElBQU1DLEtBQUssR0FBRyxDQUNaLGFBRFksRUFFWixLQUZZLEVBR1osUUFIWSxFQUlaLE1BSlksRUFLWixPQUxZLEVBTVosT0FOWSxFQU9aLFVBUFksRUFRWixXQVJZLEVBU1osT0FUWSxFQVVaLE9BVlksRUFXWixZQVhZLEVBWVosUUFaWSxFQWFaLE9BYlksRUFjWixNQWRZLEVBZVosTUFmWSxDQUFkO0FBa0JBLElBQU1DLEtBQUssR0FBRyxDQUNaLFFBRFksRUFFWixtQkFGWSxFQUdaLE9BSFksRUFJWixPQUpZLEVBS1osT0FMWSxFQU1aLE1BTlksRUFPWixRQVBZLEVBUVosTUFSWSxFQVNaLEtBVFksRUFVWixTQVZZLEVBV1osT0FYWSxFQVlaLE1BWlksQ0FBZCxDLENBZUE7QUFDQTs7QUFDQSxTQUFTQyxvQkFBVCxDQUE4QkMsS0FBOUIsRUFBcUM7QUFDakMsTUFBTUMsV0FBVyxHQUFHLEVBQXBCO0FBRUFELE9BQUssQ0FBQ3pELE9BQU4sQ0FBYyxVQUFDMEMsSUFBRCxFQUFVO0FBQ3BCZ0IsZUFBVyxDQUFDdkQsSUFBWixxQkFBOEJ1QyxJQUE5QjtBQUNILEdBRkQsRUFIaUMsQ0FPakM7O0FBQ0EsU0FBT2dCLFdBQVA7QUFDSDs7QUFBQSxDLENBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFNBQVNDLFFBQVQsQ0FBa0JyQyxZQUFsQixFQUFnQ2lCLGVBQWhDLEVBQWlEcUIsU0FBakQsRUFBNERyQyxVQUE1RCxFQUF3RTtBQUV0RTtBQUNBO0FBQ0EsTUFBTXNDLFFBQVEsR0FBR3ZDLFlBQVksQ0FBQ3dDLE1BQWIsQ0FBb0JGLFNBQXBCLEVBQStCLENBQS9CLENBQWpCO0FBRUEsTUFBTXJELFFBQVEsR0FBR2dDLGVBQWUsR0FBRyxDQUFuQztBQUVBLE1BQUl6QyxZQUFZLEdBQUcsRUFBbkI7O0FBRUEsT0FBSyxJQUFJZSxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHUyxZQUFZLENBQUNrQixNQUFqQyxHQUEyQztBQUN6QztBQUNBLFFBQU11QixLQUFLLEdBQUd6QyxZQUFZLENBQUNQLEtBQWIsQ0FBbUJGLENBQW5CLEVBQXNCQSxDQUFDLEdBQUdOLFFBQTFCLENBQWQsQ0FGeUMsQ0FJekM7O0FBQ0EsUUFBTXlELFdBQVcsR0FBR0gsUUFBUSxDQUFDSSxNQUFULENBQWdCRixLQUFoQixDQUFwQjtBQUVBakUsZ0JBQVksQ0FBQ0ssSUFBYixDQUFrQjZELFdBQWxCLEVBUHlDLENBU3pDOztBQUNBbkQsS0FBQyxJQUFJTixRQUFMO0FBQ0Q7O0FBRURlLGNBQVksR0FBR3VDLFFBQVEsQ0FBQ0ksTUFBVCxDQUFnQjNDLFlBQWhCLENBQWY7QUFDQUMsWUFBVSxHQUFHQSxVQUFVLENBQUN1QyxNQUFYLENBQWtCRixTQUFsQixFQUE2QixDQUE3QixFQUFnQ0ssTUFBaEMsQ0FBdUMxQyxVQUF2QyxDQUFiO0FBR0EsU0FBTyxDQUFDekIsWUFBRCxFQUFld0IsWUFBZixFQUE2QkMsVUFBN0IsQ0FBUDtBQUNEOztBQUdELElBQU0yQyxpQkFBaUIsR0FBR1Ysb0JBQW9CLENBQUNOLEtBQUQsQ0FBOUM7QUFDQSxJQUFNaUIsa0JBQWtCLEdBQUdSLFFBQVEsQ0FBQ08saUJBQUQsRUFBb0IsQ0FBcEIsRUFBdUJBLGlCQUFpQixDQUFDMUIsTUFBbEIsR0FBMkIsQ0FBbEQsRUFBcURVLEtBQXJELENBQW5DO0FBRUFrQixNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRUYsb0JBQWtCLEVBQWxCQTtBQUFGLENBQWpCLEM7Ozs7Ozs7Ozs7OztBQ3BJQTtBQUFBO0FBQUE7QUFBQTtDQUVBOztBQUNPLFNBQVNHLGFBQVQsR0FBeUI7QUFDOUI7QUFDQSxNQUFJQyxLQUFLLEdBQUcsT0FBSyxHQUFqQjtBQUNBLE1BQUlDLE1BQU0sR0FBRyxNQUFJLEdBQWpCO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLEVBQVY7O0FBR0EsV0FBU0MsSUFBVCxDQUFjQyxTQUFkLEVBQXlCO0FBQ3ZCQSxhQUFTLENBQUNDLElBQVYsQ0FBZSxVQUFVQyxJQUFWLEVBQWdCO0FBRzNCO0FBQ0E7QUFDQSxVQUFNQyxTQUFTLEdBQUduRixFQUFFLENBQUNvRixHQUFILENBQU9GLElBQVAsRUFBYSxVQUFVRyxDQUFWLEVBQWE7QUFDeEMsZUFBT3JGLEVBQUUsQ0FBQ29GLEdBQUgsQ0FBT0MsQ0FBQyxDQUFDdEUsTUFBVCxFQUFpQixVQUFVRSxDQUFWLEVBQWE7QUFDakMsaUJBQU9BLENBQUMsQ0FBQ1EsSUFBVDtBQUNILFNBRk0sQ0FBUDtBQUdILE9BSmlCLENBQWxCO0FBTUEsVUFBTTZELE9BQU8sR0FBR3RGLEVBQUUsQ0FBQ3VGLEdBQUgsQ0FBT0wsSUFBUCxFQUFhLFVBQVVHLENBQVYsRUFBYTtBQUN0QyxlQUFPckYsRUFBRSxDQUFDdUYsR0FBSCxDQUFPRixDQUFDLENBQUN0RSxNQUFULEVBQWlCLFVBQVVFLENBQVYsRUFBYTtBQUNqQyxpQkFBT0EsQ0FBQyxDQUFDUSxJQUFUO0FBQ0gsU0FGTSxDQUFQO0FBR0gsT0FKZSxDQUFoQixDQVgyQixDQWlCM0I7O0FBQ0EsZUFBUytELE1BQVQsQ0FBZ0JDLGNBQWhCLEVBQWdDQyxZQUFoQyxFQUE4QyxDQUU3QyxDQXBCMEIsQ0F1QjNCOzs7QUFDQSxVQUFNQyxPQUFPLEdBQUcsSUFBSUMsSUFBSixDQUFTLElBQVQsRUFBZSxDQUFmLEVBQWtCLEVBQWxCLENBQWhCO0FBRUEsVUFBSUgsY0FBYyxHQUFHTixTQUFyQjtBQUNBLFVBQUlPLFlBQVksR0FBR0MsT0FBbkI7QUFDQSxVQUFJRSxlQUFKO0FBQ0EsVUFBSUMsYUFBSjtBQUNBLFVBQUlDLFdBQUo7QUFHQUMsYUFBTyxDQUFDQyxHQUFSLENBQVksZ0JBQVosRUFBOEJSLGNBQTlCO0FBQ0FPLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJQLFlBQTVCLEVBbEMyQixDQXNDM0I7QUFDQTs7QUFFQSxlQUFTUSxpQkFBVCxHQUE4QjtBQUUxQixhQUFLLElBQUloRixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHZ0UsSUFBSSxDQUFDLENBQUQsQ0FBSixDQUFRbkUsTUFBUixDQUFlOEIsTUFBbkMsRUFBMkMzQixDQUFDLEVBQTVDLEVBQWdEO0FBQzlDLGNBQUlnRSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFuRSxNQUFSLENBQWVHLENBQWYsRUFBa0JPLElBQWxCLElBQTBCZ0UsY0FBOUIsRUFBOEM7QUFDNUNJLDJCQUFlLEdBQUczRSxDQUFsQjtBQUNBO0FBQ0Q7QUFDRjs7QUFFRCxhQUFLLElBQUlBLEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdnRSxJQUFJLENBQUMsQ0FBRCxDQUFKLENBQVFuRSxNQUFSLENBQWU4QixNQUFuQyxFQUEyQzNCLEVBQUMsRUFBNUMsRUFBZ0Q7QUFFOUMsY0FBSWdFLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW5FLE1BQVIsQ0FBZUcsRUFBZixFQUFrQk8sSUFBbEIsR0FBeUJpRSxZQUE3QixFQUEyQztBQUN6Q0kseUJBQWEsR0FBRzVFLEVBQWhCO0FBQ0E7QUFDRDs7QUFFRDRFLHVCQUFhLEdBQUdaLElBQUksQ0FBQyxDQUFELENBQUosQ0FBUW5FLE1BQVIsQ0FBZThCLE1BQS9CO0FBQ0QsU0FqQnlCLENBbUIxQjs7O0FBQ0FtRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCSCxhQUE3QjtBQUVBQyxtQkFBVyxHQUFJL0YsRUFBRSxDQUFDdUYsR0FBSCxDQUFPTCxJQUFQLEVBQWEsVUFBVXJFLFNBQVYsRUFBcUI7QUFDL0MsY0FBSXNGLFVBQVUsR0FBR3RGLFNBQVMsQ0FBQ0UsTUFBVixDQUFpQkssS0FBakIsQ0FDZnlFLGVBRGUsRUFFZkMsYUFGZSxDQUFqQjtBQUtBLGlCQUFPOUYsRUFBRSxDQUFDdUYsR0FBSCxDQUFPWSxVQUFQLEVBQW1CLFVBQVVsRixDQUFWLEVBQWE7QUFDckMsbUJBQU9BLENBQUMsQ0FBQ0ksS0FBVDtBQUNELFdBRk0sQ0FBUDtBQUdELFNBVGMsQ0FBZjtBQVdBMkUsZUFBTyxDQUFDQyxHQUFSLENBQVksYUFBWixFQUEyQkYsV0FBM0I7QUFFSDs7QUFFREcsdUJBQWlCLEdBOUVVLENBZ0YzQjtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFVBQU1FLE1BQU0sR0FBR3BHLEVBQUUsQ0FDWnFHLFNBRFUsR0FFVkMsTUFGVSxDQUVILENBQUNiLGNBQUQsRUFBaUJDLFlBQWpCLENBRkcsRUFHVmEsS0FIVSxDQUdKLENBQUMsQ0FBRCxFQUFJM0IsS0FBSixDQUhJLENBQWYsQ0EzRjJCLENBZ0czQjs7QUFDQSxVQUFNNEIsTUFBTSxHQUFHeEcsRUFBRSxDQUFDeUcsV0FBSCxHQUFpQkgsTUFBakIsQ0FBd0IsQ0FBQyxDQUFELEVBQUlQLFdBQUosQ0FBeEIsRUFBMENXLFVBQTFDLENBQXFELENBQUM3QixNQUFELEVBQVMsQ0FBVCxDQUFyRCxDQUFmLENBakcyQixDQW1HM0I7O0FBQ0E4Qiw0RUFBYyxDQUFDekIsSUFBRCxFQUFPWSxhQUFQLEVBQXNCLEVBQXRCLEVBQTBCTSxNQUExQixFQUFrQ0ksTUFBbEMsQ0FBZCxDQXBHMkIsQ0FzRzNCOztBQUNBLFVBQU1JLEtBQUssR0FBRzVHLEVBQUUsQ0FBQzZHLFVBQUgsQ0FBY1QsTUFBZCxDQUFkLENBdkcyQixDQXdHM0I7O0FBRUFRLFdBQUssQ0FBQ0UsS0FBTixDQUFZOUcsRUFBRSxDQUFDK0csU0FBSCxDQUFhQyxLQUFiLENBQW1CLEVBQW5CLENBQVosRUFDQ0MsVUFERCxDQUNZakgsRUFBRSxDQUFDa0gsVUFBSCxDQUFjLE9BQWQsQ0FEWixFQUVDQyxhQUZELENBRWUsQ0FGZjtBQUlBLFVBQU1DLEtBQUssR0FBR3BILEVBQUUsQ0FBQ3FILFFBQUgsR0FDQ0MsS0FERCxDQUNPZCxNQURQLEVBRUNlLFVBRkQsQ0FFWSxFQUZaLEVBR0NKLGFBSEQsQ0FHZSxDQUhmLENBQWQsQ0E5RzJCLENBbUgzQjs7QUFDQSxVQUFNSyxTQUFTLEdBQUd4SCxFQUFFLENBQ2ZxSCxRQURhLEdBRWJDLEtBRmEsQ0FFUGQsTUFGTyxFQUdiaUIsUUFIYSxDQUdKLENBQUM3QyxLQUhHLEVBSWJxQyxVQUphLENBSUYsRUFKRSxFQUtiTSxVQUxhLENBS0YsQ0FBQ3hCLFdBQVcsR0FBRSxDQUFkLEVBQWlCLElBQUlBLFdBQUosR0FBa0IsQ0FBbkMsRUFBc0NBLFdBQXRDLENBTEUsRUFNYm9CLGFBTmEsQ0FNQyxDQU5ELENBQWxCLENBcEgyQixDQTRIM0I7O0FBQ0EsVUFBTU8sR0FBRyxHQUFHMUgsRUFBRSxDQUNUMkgsTUFETyxDQUNBLElBREEsRUFFUEMsTUFGTyxDQUVBLEtBRkEsRUFHUEMsSUFITyxDQUdGLE9BSEUsRUFHTyxPQUhQLEVBSVBBLElBSk8sQ0FJRixPQUpFLEVBSU9qRCxLQUpQLEVBS1BpRCxJQUxPLENBS0YsUUFMRSxFQUtRaEQsTUFMUixFQU1QZ0QsSUFOTyxDQU9SLFNBUFEsYUFRSi9DLEdBQUcsR0FBRyxDQVJGLGVBUVFBLEdBQUcsR0FBRyxDQVJkLGNBUW1CRixLQUFLLEdBQUdFLEdBQUcsR0FBRyxFQVJqQyxjQVF1Q0QsTUFBTSxHQUFHQyxHQUFHLEdBQUcsQ0FSdEQsR0FVUCtDLElBVk8sQ0FVRixxQkFWRSxFQVVxQixlQVZyQixDQUFaLENBN0gyQixDQXlJM0I7O0FBQ0FILFNBQUcsQ0FDRUUsTUFETCxDQUNZLEdBRFosRUFFS0MsSUFGTCxDQUVVLE9BRlYsRUFFbUIsUUFGbkIsRUFHS0EsSUFITCxDQUdVLFdBSFYseUJBR3VDaEQsTUFIdkMsUUFJS2lELElBSkwsQ0FJVWxCLEtBSlYsRUExSTJCLENBOElUO0FBRWxCO0FBQ0E7QUFFQTs7QUFDQWMsU0FBRyxDQUFDRSxNQUFKLENBQVcsR0FBWCxFQUFnQkMsSUFBaEIsQ0FBcUIsT0FBckIsRUFBOEIsYUFBOUIsRUFBNkNDLElBQTdDLENBQWtETixTQUFsRCxFQXBKMkIsQ0FxSjNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTs7QUFDQSxVQUFNTyxJQUFJLEdBQUdMLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLE1BQVgsRUFDUkEsTUFEUSxDQUNELFVBREMsRUFFUkMsSUFGUSxDQUVILElBRkcsRUFFRyxXQUZILEVBR1JELE1BSFEsQ0FHRCxNQUhDLEVBSVJDLElBSlEsQ0FJSCxHQUpHLEVBSUV6QixNQUFNLENBQUNYLGNBQUQsQ0FKUixFQUtUO0FBTFMsT0FNUm9DLElBTlEsQ0FNSCxHQU5HLEVBTUVyQixNQUFNLENBQUNULFdBQUQsQ0FOUixFQU9UO0FBUFMsT0FRUjhCLElBUlEsQ0FRSCxPQVJHLEVBUU1qRCxLQVJOLEVBU1JpRCxJQVRRLENBU0gsUUFURyxFQVNPaEQsTUFUUCxDQUFiLENBN0oyQixDQXdLM0I7O0FBQ0EsVUFBTW1ELElBQUksR0FBR2hJLEVBQUUsQ0FDVmdJLElBRFEsR0FHUkMsQ0FIUSxDQUdOLFVBQVVoSCxDQUFWLEVBQWE7QUFDaEIsZUFBT21GLE1BQU0sQ0FBQ25GLENBQUMsQ0FBQ1EsSUFBSCxDQUFiLENBRGdCLENBRWhCO0FBQ0MsT0FOUSxFQU9SeUcsQ0FQUSxDQU9OLFVBQVVqSCxDQUFWLEVBQWE7QUFDaEIsZUFBT3VGLE1BQU0sQ0FBQ3ZGLENBQUMsQ0FBQ0ksS0FBSCxDQUFiLENBRGdCLENBRWhCO0FBQ0MsT0FWUSxFQVdUO0FBWFMsT0FZUjhHLEtBWlEsQ0FZRm5JLEVBQUUsQ0FBQ29JLFVBWkQsQ0FBYjtBQWNBLFVBQU1DLEtBQUssR0FBR1gsR0FBRyxDQUFDWSxTQUFKLENBQWMsT0FBZCxFQUF1QnBELElBQXZCLENBQTRCQSxJQUE1QixFQUFrQ3FELEtBQWxDLEdBQTBDWCxNQUExQyxDQUFpRCxHQUFqRCxDQUFkO0FBRUFTLFdBQUssQ0FDQVQsTUFETCxDQUNZLE1BRFosRUFFS0MsSUFGTCxDQUVVLE9BRlYsRUFFbUIsVUFBVXhDLENBQVYsRUFBYW5FLENBQWIsRUFBZ0I7QUFDM0IsbUNBQW9CQSxDQUFwQjtBQUNILE9BSkwsRUFLSzJHLElBTEwsQ0FLVSxHQUxWLEVBS2UsVUFBVXhDLENBQVYsRUFBYTtBQUNwQixlQUFPMkMsSUFBSSxDQUFDM0MsQ0FBQyxDQUFDdEUsTUFBSCxDQUFYLENBRG9CLENBRXBCO0FBQ0gsT0FSTCxFQVNLOEcsSUFUTCxDQVNVLFdBVFYsRUFTdUIsaUJBVHZCLEVBekwyQixDQW9NM0I7O0FBQ0FRLFdBQUssQ0FDQVQsTUFETCxDQUNZLE1BRFosRUFFS0MsSUFGTCxDQUVVLE9BRlYsRUFFbUIsVUFBVXhDLENBQVYsRUFBYW5FLENBQWIsRUFBZ0I7QUFDL0IscUNBQXNCQSxDQUF0QjtBQUNDLE9BSkwsRUFLS3NILElBTEwsQ0FLVSxVQUFVbkQsQ0FBVixFQUFhO0FBQ25CLHNDQUFrQkEsQ0FBQyxDQUFDdEMsSUFBcEI7QUFDQyxPQVBMLEVBUUs4RSxJQVJMLENBUVUsR0FSVixFQVFlLENBUmYsRUFTS0EsSUFUTCxDQVNVLFdBVFYsRUFTdUIsVUFBVXhDLENBQVYsRUFBYW5FLENBQWIsRUFBZ0I7QUFDL0IsbUNBQW9CbUUsQ0FBQyxDQUFDb0QsTUFBdEIsZUFBaUNwRCxDQUFDLENBQUNxRCxNQUFuQyxPQUQrQixDQUUvQjtBQUNBO0FBQ0E7QUFDSjtBQUNDLE9BZkw7QUFpQkEsVUFBTUMsVUFBVSxHQUFHTixLQUFLLENBQ0hULE1BREYsQ0FDUyxNQURULEVBRUVDLElBRkYsQ0FFTyxPQUZQLEVBRWdCLFlBRmhCLEVBR0M7QUFIRCxPQUlFQSxJQUpGLENBSU8sR0FKUCxFQUlZLFVBQVN4QyxDQUFULEVBQVk7QUFBRSxlQUFPMkMsSUFBSSxDQUFDM0MsQ0FBQyxDQUFDdEUsTUFBSCxDQUFYO0FBQXNCLE9BSmhELENBQW5CO0FBT0EsVUFBTTZILENBQUMsR0FBRzVJLEVBQUUsQ0FBQzZJLFVBQUgsR0FDVEMsSUFEUyxDQUNKOUksRUFBRSxDQUFDK0ksU0FEQyxFQUVUQyxLQUZTLENBRUgsSUFGRyxFQUdUQyxRQUhTLENBR0EsSUFIQSxDQUFWOztBQU1BLGVBQVNDLFdBQVQsQ0FBcUJDLFlBQXJCLEVBQW1DQyxVQUFuQyxFQUErQztBQUUzQzFCLFdBQUcsQ0FBQ1ksU0FBSixDQUFjLEdBQWQsRUFBbUJlLFNBQW5CO0FBR0FyRCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxtQkFBWixFQUwyQyxDQU0zQztBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0FSLHNCQUFjLEdBQUcwRCxZQUFqQjtBQUNBekQsb0JBQVksR0FBRzBELFVBQWY7QUFFQWhELGNBQU0sQ0FBQ0UsTUFBUCxDQUFjLENBQUNiLGNBQUQsRUFBaUJDLFlBQWpCLENBQWQsRUFqQjJDLENBbUIzQztBQUNBOztBQUVBZ0MsV0FBRyxDQUFDQyxNQUFKLENBQVcsU0FBWCxFQUFzQmtCLFVBQXRCLENBQWlDRCxDQUFqQyxFQUFvQ2QsSUFBcEMsQ0FBeUNsQixLQUF6QyxFQXRCMkMsQ0F1QjNDOztBQUVBVix5QkFBaUI7QUFHakJNLGNBQU0sQ0FBQ0YsTUFBUCxDQUFjLENBQUMsQ0FBRCxFQUFJUCxXQUFKLENBQWQ7QUFFQXNDLGFBQUssQ0FBQ0MsU0FBTixDQUFnQixPQUFoQixFQUNBO0FBREEsU0FFQ08sVUFGRCxDQUVZRCxDQUZaLEVBR0NmLElBSEQsQ0FHTSxHQUhOLEVBR1csVUFBVXhDLENBQVYsRUFBYTtBQUNwQixpQkFBTzJDLElBQUksQ0FBQzNDLENBQUMsQ0FBQ3RFLE1BQUgsQ0FBWDtBQUNILFNBTEQ7QUFPQXNILGFBQUssQ0FDRkMsU0FESCxDQUNhLGFBRGIsRUFFQTtBQUZBLFNBR0tPLFVBSEwsQ0FHZ0JELENBSGhCLEVBSUdmLElBSkgsQ0FJUSxHQUpSLEVBSWEsVUFBVXhDLENBQVYsRUFBYTtBQUN0QixpQkFBTzJDLElBQUksQ0FBQzNDLENBQUMsQ0FBQ3RFLE1BQUgsQ0FBWDtBQUNELFNBTkg7QUFTQTRGLDhFQUFjLENBQUN6QixJQUFELEVBQU9ZLGFBQVAsRUFBc0IsRUFBdEIsRUFBMEJNLE1BQTFCLEVBQWtDSSxNQUFsQyxDQUFkO0FBRUE2QixhQUFLLENBQUNDLFNBQU4sQ0FBZ0IsUUFBaEIsRUFDQTtBQURBLFNBRUtPLFVBRkwsQ0FFZ0JELENBRmhCLEVBR0dmLElBSEgsQ0FHUSxHQUhSLEVBR2EsQ0FIYixFQUlHQSxJQUpILENBSVEsV0FKUixFQUlxQixVQUFVeEMsQ0FBVixFQUFhbkUsQ0FBYixFQUFnQjtBQUNqQyxxQ0FBb0JtRSxDQUFDLENBQUNvRCxNQUF0QixlQUFpQ3BELENBQUMsQ0FBQ3FELE1BQW5DO0FBQ0QsU0FOSCxFQWhEMkMsQ0F5RDNDO0FBRUE7QUFHSCxPQWpTMEIsQ0FtUy9COzs7QUFFQWhCLFNBQUcsQ0FBQ0csSUFBSixDQUFTLFdBQVQsRUFBc0IsaUJBQXRCLEVBQXlDeUIsS0FBekMsQ0FBK0MsTUFBL0MsRUFBdUQsV0FBdkQ7QUFFQTVCLFNBQUcsQ0FDQVksU0FESCxDQUNhLDRCQURiLEVBRUdpQixFQUZILENBRU0sV0FGTixFQUVtQixVQUFVbEUsQ0FBVixFQUFhbkUsQ0FBYixFQUFnQnNJLEtBQWhCLEVBQXVCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBLFlBQU1DLFVBQVUsR0FBR2xJLElBQUksQ0FBQ21JLEtBQUwsQ0FBV3hJLENBQUMsR0FBQyxDQUFiLENBQW5CLENBUnNDLENBVXRDOztBQUNBLFlBQU15SSxRQUFRLEdBQUczSixFQUFFLENBQ2hCc0ksU0FEYyxpQkFDS21CLFVBREwsc0JBQzJCQSxVQUQzQixHQUVkRyxLQUZjLEdBR2ROLEtBSGMsQ0FHUixTQUhRLEVBR0csQ0FISCxDQUFqQjtBQUtBSyxnQkFBUSxDQUFDZCxVQUFULEdBaEJzQyxDQWtCdEM7O0FBQ0E3SSxVQUFFLENBQUNzSSxTQUFILGlCQUFzQm1CLFVBQXRCLEdBQW9DSCxLQUFwQyxDQUEwQyxjQUExQyxFQUEwRCxDQUExRCxFQW5Cc0MsQ0FxQnRDO0FBRUgsT0F6QkQsRUEwQkNDLEVBMUJELENBMEJJLFVBMUJKLEVBMEJnQixVQUFVbEUsQ0FBVixFQUFhbkUsQ0FBYixFQUFnQnNJLEtBQWhCLEVBQXVCO0FBRW5DO0FBRUEsWUFBTUMsVUFBVSxHQUFHbEksSUFBSSxDQUFDbUksS0FBTCxDQUFXeEksQ0FBQyxHQUFHLENBQWYsQ0FBbkI7QUFFQSxZQUFNeUksUUFBUSxHQUFHM0osRUFBRSxDQUNoQnNJLFNBRGMsaUJBQ0ttQixVQURMLHNCQUMyQkEsVUFEM0IsR0FFZEgsS0FGYyxDQUVSLFNBRlEsRUFFRyxHQUZILEVBR2RBLEtBSGMsQ0FHUixjQUhRLEVBR1EsQ0FIUixDQUFqQjtBQUtBSyxnQkFBUSxDQUFDZCxVQUFUO0FBQ0gsT0F0Q0Q7QUF5Q0EsVUFBSWdCLFNBQVMsR0FBRyxDQUFoQjtBQUNBLFVBQUlDLFlBQVksR0FBRyxDQUFuQjtBQUVBLFVBQUlDLEtBQUssR0FBRy9KLEVBQUUsQ0FBQzJILE1BQUgsQ0FBVSxVQUFWLENBQVosQ0FuVitCLENBb1YvQjtBQUNBO0FBRUE7QUFDQTs7QUFFQSxVQUFJcUMsTUFBTSxHQUFHQyxNQUFNLENBQUNDLFdBQXBCO0FBQ0EsVUFBSUMsS0FBSyxHQUFHRixNQUFNLENBQUNHLFVBQW5CLENBM1YrQixDQTZWL0I7O0FBQ0EsVUFBSUMsV0FBVyxHQUFHQyxRQUFRLENBQUNDLGNBQVQsQ0FBd0IsT0FBeEIsRUFBaUNDLG9CQUFqQyxDQUFzRCxHQUF0RCxFQUEyRCxDQUEzRCxDQUFsQixDQTlWK0IsQ0ErVi9CO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7O0FBRUFULFdBQUssQ0FBQ1IsRUFBTixDQUFTLGlCQUFULEVBQTRCLFlBQVc7QUFDbkN2RCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaO0FBQ0E2RCxvQkFBWSxHQUFHQyxLQUFLLENBQUNVLElBQU4sR0FBYVosU0FBNUIsQ0FGbUMsQ0FJbkM7O0FBQ0E3RCxlQUFPLENBQUNDLEdBQVIsQ0FBWSxjQUFaLEVBQTRCNkQsWUFBNUI7O0FBQ0EsWUFBSUQsU0FBUyxJQUFJLEVBQWIsSUFBa0JDLFlBQVksR0FBRyxFQUFyQyxFQUF5QztBQUNyQ1oscUJBQVcsQ0FBQy9ELFNBQUQsRUFBWUcsT0FBWixDQUFYLENBRHFDLENBRXJDO0FBQ0E7QUFDQTtBQUNIOztBQUdELFlBQUt1RSxTQUFTLElBQUksRUFBYixJQUFtQkMsWUFBWSxHQUFHLEVBQXZDLEVBQTJDO0FBQ3ZDWixxQkFBVyxDQUFDL0QsU0FBRCxFQUFZUSxPQUFaLENBQVgsQ0FEdUMsQ0FFdkM7QUFDQTtBQUNBO0FBQ0g7O0FBQ0RrRSxpQkFBUyxHQUFHQyxZQUFaO0FBQ0gsT0FyQkQ7QUEyQkMsS0ExWUQ7QUE2WUMsR0FyWjJCLENBdVo5Qjs7O0FBQ0EvRSxNQUFJLENBQUNILEtBQUwsR0FBYSxVQUFVeEMsS0FBVixFQUFpQjtBQUM1QixRQUFJLENBQUNzSSxTQUFTLENBQUM3SCxNQUFmLEVBQXVCO0FBQ3JCLGFBQU8rQixLQUFQO0FBQ0Q7O0FBRURBLFNBQUssR0FBR3hDLEtBQVI7QUFDQSxXQUFPMkMsSUFBUDtBQUNELEdBUEQ7O0FBU0FBLE1BQUksQ0FBQ0YsTUFBTCxHQUFjLFVBQVV6QyxLQUFWLEVBQWlCO0FBQzdCLFFBQUksQ0FBQ3NJLFNBQVMsQ0FBQzdILE1BQWYsRUFBdUI7QUFDckIsYUFBT2dDLE1BQVA7QUFDRDs7QUFFREEsVUFBTSxHQUFHekMsS0FBVDtBQUNBLFdBQU8yQyxJQUFQO0FBQ0QsR0FQRCxDQWphOEIsQ0EwYTlCOzs7QUFDQSxTQUFPQSxJQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7O0FDL2FEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0NBR0E7O0FBQ0E7Q0FHQTs7QUFDQTtDQUlBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7O0FBRUF1RixRQUFRLENBQUNLLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBRXhEM0UsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVosRUFGd0QsQ0FJeEQ7O0FBRUEsTUFBTTJFLHVCQUF1QixHQUFHMUssMEVBQVMsQ0FBQ3NFLGlFQUFrQixDQUFDLENBQUQsQ0FBbkIsQ0FBekM7QUFDQXdCLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLHlCQUFaLEVBQXVDMkUsdUJBQXZDLEVBUHdELENBU3hEOztBQUNBNUUsU0FBTyxDQUFDQyxHQUFSLENBQVksb0JBQVosRUFBa0N6QixpRUFBbEM7QUFHQTlDLGdGQUFhLENBQUM4QyxpRUFBa0IsQ0FBQyxDQUFELENBQW5CLEVBQXVCQSxpRUFBa0IsQ0FBQyxDQUFELENBQXpDLEVBQThDb0csdUJBQTlDLENBQWIsQ0FDQ25JLElBREQsQ0FDTSxVQUFDNEMsQ0FBRCxFQUFPO0FBQ1RXLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFNBQVosRUFBdUJaLENBQXZCO0FBQ0FyRixNQUFFLENBQUMySCxNQUFILENBQVUsWUFBVixFQUF3QmtELEtBQXhCLENBQThCeEYsQ0FBOUIsRUFBaUN5QyxJQUFqQyxDQUFzQ25ELG1FQUFhLEVBQW5EO0FBQ0QsR0FKSCxFQWJ3RCxDQW9CeEQ7QUFDQTtBQUVELENBdkJELEUsQ0E0QkE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0I7Ozs7Ozs7Ozs7O0FDMURBO0FBQ0EsU0FBU2dDLGNBQVQsQ0FBd0J6QixJQUF4QixFQUE4QlksYUFBOUIsRUFBNkNnRixLQUE3QyxFQUFvRDFFLE1BQXBELEVBQTRESSxNQUE1RCxFQUFvRTtBQUVsRSxNQUFJdUUsWUFBWSxHQUFHLEtBQW5CO0FBRUEsTUFBSUMsWUFBWSxHQUFHLEVBQW5CO0FBQ0EsTUFBSUMsb0JBQW9CLEdBQUcsRUFBM0IsQ0FMa0UsQ0FPbEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBL0YsTUFBSSxDQUFDN0UsT0FBTCxDQUFhLFVBQVU2SyxDQUFWLEVBQWE7QUFDeEIsUUFBSUMsU0FBUyxHQUFHckYsYUFBYSxHQUFHLENBQWhDO0FBRUFvRixLQUFDLENBQUN6QyxNQUFGLEdBQVdyQyxNQUFNLENBQUM4RSxDQUFDLENBQUNuSyxNQUFGLENBQVNvSyxTQUFULEVBQW9CMUosSUFBckIsQ0FBakI7QUFDQXlKLEtBQUMsQ0FBQ3hDLE1BQUYsR0FBV2xDLE1BQU0sQ0FBQzBFLENBQUMsQ0FBQ25LLE1BQUYsQ0FBU29LLFNBQVQsRUFBb0I5SixLQUFyQixDQUFqQixDQUp3QixDQUt4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTJKLGdCQUFZLENBQUN4SyxJQUFiLENBQWtCMEssQ0FBQyxDQUFDeEMsTUFBcEI7QUFDQXVDLHdCQUFvQixDQUFDekssSUFBckIsQ0FBMEIwSyxDQUFDLENBQUN4QyxNQUE1QjtBQUNELEdBWkQ7O0FBY0EsU0FBTyxDQUFDcUMsWUFBUixFQUFzQjtBQUNwQkEsZ0JBQVksR0FBRyxJQUFmO0FBRUFDLGdCQUFZLENBQUMzSyxPQUFiLENBQXFCLFVBQUMrSyxFQUFELEVBQUtsSyxDQUFMLEVBQVc7QUFDOUI4SixrQkFBWSxDQUFDM0ssT0FBYixDQUFxQixVQUFDZ0wsRUFBRCxFQUFLQyxDQUFMLEVBQVc7QUFDOUI7QUFFQSxZQUFJQyxLQUFLLEdBQUdoSyxJQUFJLENBQUNpSyxHQUFMLENBQVNSLFlBQVksQ0FBQ00sQ0FBRCxDQUFaLEdBQWtCTixZQUFZLENBQUM5SixDQUFELENBQXZDLENBQVo7QUFDQSxZQUFJdUssT0FBTyxHQUFHWCxLQUFLLEdBQUdTLEtBQXRCLENBSjhCLENBTTlCOztBQUVBLFlBQUlySyxDQUFDLEtBQUtvSyxDQUFOLElBQVdDLEtBQUssR0FBR1QsS0FBdkIsRUFBOEI7QUFDNUI7QUFDQTtBQUNBLGNBQUlZLFlBQVksR0FDZFQsb0JBQW9CLENBQUNLLENBQUQsQ0FBcEIsR0FBMEJMLG9CQUFvQixDQUFDL0osQ0FBRCxDQUE5QyxHQUFvRCxDQUFwRCxHQUF3RG9LLENBQXhELEdBQTREcEssQ0FEOUQ7QUFHQThKLHNCQUFZLENBQUNVLFlBQUQsQ0FBWixJQUE4QkQsT0FBOUIsQ0FONEIsQ0FPNUI7O0FBQ0FWLHNCQUFZLEdBQUcsS0FBZjtBQUNEO0FBQ0YsT0FsQkQ7QUFtQkQsS0FwQkQ7QUFxQkQsR0FwRGlFLENBc0RsRTtBQUVBOzs7QUFFQTdGLE1BQUksQ0FBQzdFLE9BQUwsQ0FBYSxVQUFVNkssQ0FBVixFQUFhaEssQ0FBYixFQUFnQjtBQUMzQmdLLEtBQUMsQ0FBQ3hDLE1BQUYsR0FBV3NDLFlBQVksQ0FBQzlKLENBQUQsQ0FBdkI7QUFDRCxHQUZEO0FBTUQsQyxDQUdEO0FBQ0E7QUFDQTs7O0FBRUF1RCxNQUFNLENBQUNDLE9BQVAsR0FBaUI7QUFBRWlDLGdCQUFjLEVBQWRBO0FBQUYsQ0FBakIsQzs7Ozs7Ozs7Ozs7O0FDeEVBO0FBQUE7QUFBZSxTQUFTZ0YsYUFBVCxHQUEwQjtBQUVyQztBQUNJM0YsU0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFFQSxNQUFNckIsS0FBSyxHQUFHLEdBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUNBLE1BQU0rRyxNQUFNLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLE1BQU0vRyxHQUFHLEdBQUcsRUFBWixDQVRpQyxDQVdqQzs7QUFDQSxNQUFNNEMsR0FBRyxHQUFHMUgsRUFBRSxDQUFDMkgsTUFBSCxDQUFVLFlBQVYsRUFBd0JDLE1BQXhCLENBQStCLEtBQS9CLEVBQ1BDLElBRE8sQ0FDRixxQkFERSxFQUNxQixlQURyQixFQUVQQSxJQUZPLENBRUYsU0FGRSxFQUVVLENBQUMsQ0FBRCxHQUFLL0MsR0FBTixHQUFhLEdBQWIsR0FBb0IsQ0FBQyxDQUFELEdBQUtBLEdBQXpCLEdBQWdDLEdBQWhDLElBQXVDRixLQUFLLEdBQUcsSUFBSUUsR0FBbkQsSUFBMEQsR0FBMUQsSUFBaUVELE1BQU0sR0FBRyxJQUFJQyxHQUE5RSxDQUZULEVBR1B3RSxLQUhPLENBR0QsU0FIQyxFQUdVdUMsT0FIVixFQUlQdkMsS0FKTyxDQUlELFFBSkMsRUFJU3NDLE1BSlQsRUFLUEUsT0FMTyxDQUtDLGFBTEQsRUFLZ0IsSUFMaEIsQ0FBWixDQVppQyxDQW1CakM7O0FBRUEsTUFBTS9MLFFBQVEsR0FBR0MsRUFBRSxDQUFDQyxTQUFILENBQWEsVUFBYixDQUFqQjtBQUNBLE1BQU1VLE9BQU8sR0FBR1gsRUFBRSxDQUFDK0wsR0FBSCxDQUFPLHdCQUFQLENBQWhCO0FBRUFwTCxTQUFPLENBQUM4QixJQUFSLENBQWEsVUFBVXlDLElBQVYsRUFBZ0I7QUFDekJjLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJmLElBQTVCO0FBQ0EsUUFBTThHLE1BQU0sR0FBRzlHLElBQUksQ0FBQytHLE9BQUwsQ0FBYTdLLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JKLEdBQXRCLENBQTBCLFVBQVVrTCxFQUFWLEVBQWM7QUFDbkQsYUFBTztBQUNIQSxVQUFFLEVBQUVBLEVBREQ7QUFFSG5MLGNBQU0sRUFBRW1FLElBQUksQ0FBQ2xFLEdBQUwsQ0FBUyxVQUFVcUUsQ0FBVixFQUFhO0FBQzFCLGlCQUFPO0FBQ0g1RCxnQkFBSSxFQUFFMUIsUUFBUSxDQUFDc0YsQ0FBQyxDQUFDNUQsSUFBSCxDQURYO0FBRUgwSyx1QkFBVyxFQUFFLENBQUM5RyxDQUFDLENBQUM2RyxFQUFEO0FBRlosV0FBUDtBQUlILFNBTE87QUFGTCxPQUFQO0FBU0gsS0FWYyxDQUFmLENBRnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQWxHLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCK0YsTUFBOUIsRUFsQnlCLENBbUJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFDQSxRQUFNNUYsTUFBTSxHQUFHcEcsRUFBRSxDQUFDcUcsU0FBSCxHQUFlRSxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJM0IsS0FBSixDQUFyQixDQUFmO0FBQ0EsUUFBTTRCLE1BQU0sR0FBR3hHLEVBQUUsQ0FBQ3lHLFdBQUgsR0FBaUJDLFVBQWpCLENBQTRCLENBQUM3QixNQUFELEVBQVMsQ0FBVCxDQUE1QixDQUFmO0FBRUF1QixVQUFNLENBQUNFLE1BQVAsQ0FDSXRHLEVBQUUsQ0FBQ29NLE1BQUgsQ0FBVWxILElBQVYsRUFBZ0IsVUFBVUcsQ0FBVixFQUFhO0FBQ3pCLGFBQU90RixRQUFRLENBQUNzRixDQUFDLENBQUM1RCxJQUFILENBQWY7QUFDSCxLQUZELENBREo7QUFNQStFLFVBQU0sQ0FBQ0YsTUFBUCxDQUFjLENBQUMsQ0FBRCxFQUNWdEcsRUFBRSxDQUFDdUYsR0FBSCxDQUFPeUcsTUFBUCxFQUFlLFVBQVVLLENBQVYsRUFBYTtBQUN4QixhQUFPck0sRUFBRSxDQUFDdUYsR0FBSCxDQUFPOEcsQ0FBQyxDQUFDdEwsTUFBVCxFQUFpQixVQUFVc0UsQ0FBVixFQUFhO0FBQ2pDLGVBQU9BLENBQUMsQ0FBQzhHLFdBQUYsR0FBZ0IsQ0FBdkI7QUFDSCxPQUZNLENBQVA7QUFHSCxLQUpELENBRFUsQ0FBZCxFQXpDeUIsQ0FpRHpCO0FBQ0E7QUFHQTs7QUFFQSxRQUFNRyxLQUFLLEdBQUd0TSxFQUFFLENBQUNxSCxRQUFILEdBQWNQLEtBQWQsQ0FBb0JrRixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVqTCxNQUFWLENBQWlCOEIsTUFBckMsRUFBNkN5RSxLQUE3QyxDQUFtRGQsTUFBbkQsQ0FBZDtBQUVBLFFBQU0rRixLQUFLLEdBQUd2TSxFQUFFLENBQ1g2RyxVQURTLEdBRVRDLEtBRlMsQ0FFSDlHLEVBQUUsQ0FBQ3dNLE9BQUgsQ0FBV3hGLEtBQVgsQ0FBaUIsQ0FBakIsQ0FGRyxFQUdUQyxVQUhTLENBR0VqSCxFQUFFLENBQUNrSCxVQUFILENBQWMsT0FBZCxDQUhGLEVBSVRJLEtBSlMsQ0FJSGxCLE1BSkcsQ0FBZCxDQXpEeUIsQ0ErRHpCOztBQUVBLFFBQU00QixJQUFJLEdBQUdoSSxFQUFFLENBQUNnSSxJQUFILEdBQ1JDLENBRFEsQ0FDTixVQUFVNUMsQ0FBVixFQUFhO0FBQUUsYUFBT2UsTUFBTSxDQUFDZixDQUFDLENBQUM1RCxJQUFILENBQWI7QUFBd0IsS0FEakMsRUFFUnlHLENBRlEsQ0FFTixVQUFVN0MsQ0FBVixFQUFhO0FBQUUsYUFBT21CLE1BQU0sQ0FBQ25CLENBQUMsQ0FBQzhHLFdBQUgsQ0FBYjtBQUErQixLQUZ4QyxDQUFiO0FBSUEsUUFBSUQsRUFBRSxHQUFHLENBQVQ7O0FBQ0EsUUFBTU8sR0FBRyxHQUFHLFNBQU5BLEdBQU0sR0FBWTtBQUNwQixhQUFPLFVBQVVQLEVBQUUsRUFBbkI7QUFDSCxLQUZELENBdEV5QixDQTJFekI7QUFFQTs7O0FBR0F4RSxPQUFHLENBQ0VFLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVSxPQUZWLEVBRW1CLE1BRm5CLEVBR0tBLElBSEwsQ0FHVSxXQUhWLEVBR3VCLGlCQUFpQmhELE1BQWpCLEdBQTBCLEdBSGpELEVBSUtpRCxJQUpMLENBSVV5RSxLQUpWO0FBTUE3RSxPQUFHLENBQ0VFLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVSxPQUZWLEVBRW1CLE1BRm5CLEVBR0tDLElBSEwsQ0FHVXdFLEtBSFYsRUFJSzFFLE1BSkwsQ0FJWSxNQUpaLEVBS0tDLElBTEwsQ0FLVSxXQUxWLEVBS3VCLGFBTHZCLEVBTUtBLElBTkwsQ0FNVSxJQU5WLEVBTWdCLFFBTmhCLEVBT0tBLElBUEwsQ0FPVSxHQVBWLEVBT2UsQ0FQZixFQVFLeUIsS0FSTCxDQVFXLGFBUlgsRUFRMEIsS0FSMUIsRUFTS2QsSUFUTCxDQVNVLFdBVFYsRUF0RnlCLENBaUd6Qjs7QUFFQSxRQUFNSCxLQUFLLEdBQUdYLEdBQUcsQ0FBQ1ksU0FBSixDQUFjLE9BQWQsRUFDVHBELElBRFMsQ0FDSjhHLE1BREksRUFFVHpELEtBRlMsR0FHVFgsTUFIUyxDQUdGLEdBSEUsQ0FBZDtBQUtBUyxTQUFLLENBQUNULE1BQU4sQ0FBYSxNQUFiLEVBQ0tDLElBREwsQ0FDVSxPQURWLEVBQ21CNEUsR0FEbkIsRUFFSzVFLElBRkwsQ0FFVSxHQUZWLEVBRWUsVUFBVXhDLENBQVYsRUFBYTtBQUFFLGFBQU8yQyxJQUFJLENBQUMzQyxDQUFDLENBQUN0RSxNQUFILENBQVg7QUFBd0IsS0FGdEQ7QUFJQXNILFNBQUssQ0FBQ1QsTUFBTixDQUFhLE1BQWIsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUIsYUFEbkIsRUFFSTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFQSixLQVFLQSxJQVJMLENBUVUsV0FSVixFQVF1QixVQUFVeEMsQ0FBVixFQUFhO0FBQzVCLGFBQU8sZ0JBQWdCZSxNQUFNLENBQUNmLENBQUMsQ0FBQ3RFLE1BQUYsQ0FBU3NFLENBQUMsQ0FBQ3RFLE1BQUYsQ0FBUzhCLE1BQVQsR0FBa0IsQ0FBM0IsRUFBOEJwQixJQUEvQixDQUFOLEdBQTZDLEVBQTdELElBQ0QsR0FEQyxJQUNNK0UsTUFBTSxDQUFDbkIsQ0FBQyxDQUFDdEUsTUFBRixDQUFTc0UsQ0FBQyxDQUFDdEUsTUFBRixDQUFTOEIsTUFBVCxHQUFrQixDQUEzQixFQUE4QnNKLFdBQS9CLENBQU4sR0FBb0QsQ0FEMUQsSUFDK0QsR0FEdEU7QUFFSCxLQVhMLEVBWUt0RSxJQVpMLENBWVUsR0FaVixFQVllLENBWmYsRUFhS1csSUFiTCxDQWFVLFVBQVVuRCxDQUFWLEVBQWE7QUFBRSxhQUFRLFFBQUQsR0FBYUEsQ0FBQyxDQUFDNkcsRUFBdEI7QUFBMEIsS0FibkQsRUE1R3lCLENBMEhyQjtBQUNQLEdBM0hELEVBeEJpQyxDQXFKckM7QUFDSCxDOzs7Ozs7Ozs7Ozs7QUNySkQ7QUFBQTtBQUFBLElBQU1oSCxJQUFJLEdBQUcsQ0FBQyxDQUFELEVBQUksRUFBSixFQUFRLENBQVIsRUFBVyxFQUFYLEVBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQixDQUF0QixFQUF5QixFQUF6QixFQUE2QixFQUE3QixFQUFpQyxDQUFqQyxFQUFvQyxFQUFwQyxFQUF3QyxDQUF4QyxFQUEyQyxDQUEzQyxDQUFiO0FBQ0EsSUFBTXdILElBQUksR0FBRyxDQUFDLENBQUQsRUFBSSxDQUFKLEVBQU8sQ0FBUCxFQUFVLENBQVYsRUFBYSxFQUFiLEVBQWlCLEVBQWpCLEVBQXFCLENBQXJCLEVBQXdCLENBQXhCLEVBQTJCLENBQTNCLEVBQThCLENBQTlCLEVBQWlDLEVBQWpDLEVBQXFDLENBQXJDLEVBQXdDLENBQXhDLEVBQTJDLEVBQTNDLENBQWI7QUFDQSxJQUFNQyxNQUFNLEdBQUcsQ0FBQyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQUQsRUFBUyxDQUFDLENBQUQsRUFBSSxDQUFKLENBQVQsRUFBaUIsQ0FBQyxFQUFELEVBQUssRUFBTCxDQUFqQixDQUFmO0FBQ0EsSUFBTUMsR0FBRyxHQUFHLENBQUM7QUFBQ3hLLE9BQUssRUFBRSxDQUFSO0FBQVd5SyxPQUFLLEVBQUM7QUFBakIsQ0FBRCxFQUFzQjtBQUFDekssT0FBSyxFQUFFLENBQVI7QUFBV3lLLE9BQUssRUFBRTtBQUFsQixDQUF0QixDQUFaOztBQUVBLFNBQVNDLE1BQVQsR0FBbUI7QUFFZjlHLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaO0FBRUEsTUFBSXJCLEtBQUssR0FBRyxFQUFaO0FBQ0EsTUFBSUMsTUFBTSxHQUFHLEdBQWI7QUFFQSxNQUFNb0QsQ0FBQyxHQUFHakksRUFBRSxDQUFDeUcsV0FBSCxHQUFpQkgsTUFBakIsQ0FBd0IsQ0FBQyxDQUFELEVBQUksQ0FBSixDQUF4QixFQUFnQ0MsS0FBaEMsQ0FBc0MsQ0FBQyxDQUFELEVBQUkzQixLQUFKLENBQXRDLENBQVY7QUFDQSxNQUFNc0QsQ0FBQyxHQUFHbEksRUFBRSxDQUFDeUcsV0FBSCxHQUFpQkgsTUFBakIsQ0FBd0IsQ0FBQyxDQUFELEVBQUksR0FBSixDQUF4QixFQUFrQ0ksVUFBbEMsQ0FBNkMsQ0FBQzdCLE1BQUQsRUFBUyxDQUFULENBQTdDLENBQVY7QUFFQSxNQUFNbUQsSUFBSSxHQUFHaEksRUFBRSxDQUNaZ0ksSUFEVSxHQUVWQyxDQUZVLENBRVIsVUFBVTVDLENBQVYsRUFBYW5FLENBQWIsRUFBZ0I7QUFDakIsV0FBTytHLENBQUMsQ0FBQy9HLENBQUQsQ0FBUjtBQUNELEdBSlUsRUFLVmdILENBTFUsQ0FLUixVQUFVN0MsQ0FBVixFQUFhO0FBQ2QsV0FBTzZDLENBQUMsQ0FBQzdDLENBQUQsQ0FBUjtBQUNELEdBUFUsQ0FBYjs7QUFVQSxXQUFTMEgsRUFBVCxDQUFZL0gsU0FBWixFQUF1QjtBQUVuQmdCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVo7QUFFQWpCLGFBQVMsQ0FBQ0MsSUFBVixDQUFlLFVBQVVDLElBQVYsRUFBZ0I7QUFFM0JjLGFBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0IsSUFBcEI7QUFDQSxVQUFNK0csU0FBUyxHQUFHaE4sRUFBRSxDQUFDb0YsR0FBSCxDQUFPRixJQUFQLEVBQWEsVUFBU0csQ0FBVCxFQUFXO0FBQ3hDLGVBQU9BLENBQUMsQ0FBQ2pELEtBQVQ7QUFDRCxPQUZpQixDQUFsQjtBQUdBNEQsYUFBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QitHLFNBQXpCLEVBTjJCLENBUTNCOztBQUNBLFVBQU1DLEtBQUssR0FBR2pOLEVBQUUsQ0FBQzJILE1BQUgsQ0FBVSxJQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE9BRmpCLEVBR0dBLElBSEgsQ0FHUSxPQUhSLEVBR2lCakQsS0FBSyxHQUFHTSxJQUFJLENBQUNyQyxNQUFiLEdBQXNCLENBSHZDLEVBSUdnRixJQUpILENBSVEsUUFKUixFQUlrQmhELE1BSmxCLENBQWQ7QUFRQW9JLFdBQUssQ0FBQ3JGLE1BQU4sQ0FBYSxNQUFiLEVBQXFCQyxJQUFyQixDQUEwQixHQUExQixFQUErQixVQUFVcUYsVUFBVixFQUFzQjtBQUNuRCxlQUFPbEYsSUFBSSxDQUFDOUMsSUFBRCxDQUFYO0FBQ0QsT0FGRDtBQUtILEtBdEJEO0FBd0JIOztBQUVENkgsSUFBRSxDQUFDbkksS0FBSCxHQUFXLFVBQVN4QyxLQUFULEVBQWdCO0FBQ3pCLFFBQUksQ0FBQ3NJLFNBQVMsQ0FBQzdILE1BQWYsRUFBdUI7QUFDckIsYUFBTytCLEtBQVA7QUFDRCxLQUZELE1BRU87QUFDTEEsV0FBSyxHQUFHeEMsS0FBUjtBQUNBLGFBQU8ySyxFQUFQO0FBQ0Q7QUFDRixHQVBEOztBQVNBQSxJQUFFLENBQUNsSSxNQUFILEdBQVksVUFBU3pDLEtBQVQsRUFBZ0I7QUFDMUIsUUFBSSxDQUFDc0ksU0FBUyxDQUFDN0gsTUFBZixFQUF1QjtBQUNyQixhQUFPZ0MsTUFBUDtBQUNELEtBRkQsTUFFTztBQUNMQSxZQUFNLEdBQUd6QyxLQUFUO0FBQ0EsYUFBTzJLLEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0EsU0FBT0EsRUFBUDtBQUNIOztBQUdjLFNBQVNJLGNBQVQsR0FBMkI7QUFFdENuSCxTQUFPLENBQUNDLEdBQVIsQ0FBWSw4QkFBWixFQUZzQyxDQUl0QztBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFRjtBQUdELEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJ2YXIgYXBpID0gcmVxdWlyZShcIiEuLi8uLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIik7XG4gICAgICAgICAgICB2YXIgY29udGVudCA9IHJlcXVpcmUoXCIhIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zYXNzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3N0eWxlcy5zY3NzXCIpO1xuXG4gICAgICAgICAgICBjb250ZW50ID0gY29udGVudC5fX2VzTW9kdWxlID8gY29udGVudC5kZWZhdWx0IDogY29udGVudDtcblxuICAgICAgICAgICAgaWYgKHR5cGVvZiBjb250ZW50ID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICBjb250ZW50ID0gW1ttb2R1bGUuaWQsIGNvbnRlbnQsICcnXV07XG4gICAgICAgICAgICB9XG5cbnZhciBvcHRpb25zID0ge307XG5cbm9wdGlvbnMuaW5zZXJ0ID0gXCJoZWFkXCI7XG5vcHRpb25zLnNpbmdsZXRvbiA9IGZhbHNlO1xuXG52YXIgdXBkYXRlID0gYXBpKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxubW9kdWxlLmV4cG9ydHMgPSBjb250ZW50LmxvY2FscyB8fCB7fTsiLCIvLyBJbXBvcnRzXG52YXIgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIik7XG5leHBvcnRzID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKGZhbHNlKTtcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIkBpbXBvcnQgdXJsKGh0dHBzOi8vZm9udHMuZ29vZ2xlYXBpcy5jb20vY3NzMj9mYW1pbHk9Um9ib3RvK01vbm86d2dodEAzMDAmZmFtaWx5PVJvYm90bzp3Z2h0QDEwMDszMDA7NDAwJmZhbWlseT1UaXRpbGxpdW0rV2ViOndnaHRAMzAwJmRpc3BsYXk9c3dhcCk7XCJdKTtcbi8vIE1vZHVsZVxuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgdjIuMCB8IDIwMTEwMTI2XFxuICAgTGljZW5zZTogbm9uZSAocHVibGljIGRvbWFpbilcXG4qL1xcbmh0bWwsIGJvZHksIGRpdiwgc3BhbiwgYXBwbGV0LCBvYmplY3QsIGlmcmFtZSxcXG5oMSwgaDIsIGgzLCBoNCwgaDUsIGg2LCBwLCBibG9ja3F1b3RlLCBwcmUsXFxuYSwgYWJiciwgYWNyb255bSwgYWRkcmVzcywgYmlnLCBjaXRlLCBjb2RlLFxcbmRlbCwgZGZuLCBlbSwgaW1nLCBpbnMsIGtiZCwgcSwgcywgc2FtcCxcXG5zbWFsbCwgc3RyaWtlLCBzdHJvbmcsIHN1Yiwgc3VwLCB0dCwgdmFyLFxcbmIsIHUsIGksIGNlbnRlcixcXG5kbCwgZHQsIGRkLCBvbCwgdWwsIGxpLFxcbmZpZWxkc2V0LCBmb3JtLCBsYWJlbCwgbGVnZW5kLFxcbnRhYmxlLCBjYXB0aW9uLCB0Ym9keSwgdGZvb3QsIHRoZWFkLCB0ciwgdGgsIHRkLFxcbmFydGljbGUsIGFzaWRlLCBjYW52YXMsIGRldGFpbHMsIGVtYmVkLFxcbmZpZ3VyZSwgZmlnY2FwdGlvbiwgZm9vdGVyLCBoZWFkZXIsIGhncm91cCxcXG5tZW51LCBuYXYsIG91dHB1dCwgcnVieSwgc2VjdGlvbiwgc3VtbWFyeSxcXG50aW1lLCBtYXJrLCBhdWRpbywgdmlkZW8ge1xcbiAgbWFyZ2luOiAwO1xcbiAgcGFkZGluZzogMDtcXG4gIGJvcmRlcjogMDtcXG4gIGZvbnQtc2l6ZTogMTAwJTtcXG4gIGZvbnQ6IGluaGVyaXQ7XFxuICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7IH1cXG5cXG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXFxuYXJ0aWNsZSwgYXNpZGUsIGRldGFpbHMsIGZpZ2NhcHRpb24sIGZpZ3VyZSxcXG5mb290ZXIsIGhlYWRlciwgaGdyb3VwLCBtZW51LCBuYXYsIHNlY3Rpb24ge1xcbiAgZGlzcGxheTogYmxvY2s7IH1cXG5cXG5ib2R5IHtcXG4gIGxpbmUtaGVpZ2h0OiAxOyB9XFxuXFxub2wsIHVsIHtcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlLCBxIHtcXG4gIHF1b3Rlczogbm9uZTsgfVxcblxcbmJsb2NrcXVvdGU6YmVmb3JlLCBibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLCBxOmFmdGVyIHtcXG4gIGNvbnRlbnQ6ICcnO1xcbiAgY29udGVudDogbm9uZTsgfVxcblxcbnRhYmxlIHtcXG4gIGJvcmRlci1jb2xsYXBzZTogY29sbGFwc2U7XFxuICBib3JkZXItc3BhY2luZzogMDsgfVxcblxcbkB1c2UgXFxcInNhc3M6bGlzdFxcXCI7XFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfVxcblxcbiNpbnRybyB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcXG4gIGhlaWdodDogMTAwdmg7XFxuICB3aWR0aDogMTAwJTtcXG4gIHBhZGRpbmc6IDBweCA2MHB4IDBweCAzMHB4O1xcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXG4gIGRpc3BsYXk6IGZsZXg7IH1cXG5cXG4jbGVmdCB7XFxuICB3aWR0aDogNjAlO1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBwYWRkaW5nOiAxMDBweCAwIDEwMHB4IDA7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgdGV4dC1hbGlnbjogbGVmdDtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgdGV4dC1hbGlnbjogY2VudGVyOyB9XFxuXFxuI2dyYXBoLTEge1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGhlaWdodDogMTAwdmg7XFxuICBvdmVyZmxvdzogc2Nyb2xsOyB9XFxuXFxuI2dyYXBoLTEgPiAuc3ZnLWNvbnRhaW5lciB7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWViO1xcbiAgcG9zaXRpb246IHN0aWNreTtcXG4gIHRvcDogMDsgfVxcblxcbiNncmFwaC0xIHN2ZyB7XFxuICBwYWRkaW5nOiA0MHB4OyB9XFxuXFxuI3RleHQtMSB7XFxuICB3aWR0aDogMTAwdnc7IH1cXG5cXG4jcGFuZWwge1xcbiAgcGFkZGluZzogMzV2aCAxMHZoIDQwdmggMTB2aDsgfVxcblxcbiNiYW5uZXItMSwgI2Jhbm5lci0yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxucGF0aCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiBibGFjazsgfVxcblxcbi8qIHZhcmlhYmxlcyAqL1xcbi8qIEFYRVMgKi9cXG4vKiB0aWNrcyAqL1xcbi5heGlzIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC41O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC50aWNrIHtcXG4gIHN0cm9rZS1kYXNoYXJyYXk6IDUsIDU7XFxuICBzdHJva2U6ICNENEQ5RTI7XFxuICBzdHJva2Utb3BhY2l0eTogMC4zO1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLnktYXhpcy1ncmlkIC5kb21haW4ge1xcbiAgc3Ryb2tlLW9wYWNpdHk6IDA7IH1cXG5cXG4vKiAuYXhpcyBsaW5lIHtcXG5zdHJva2U6ICM3MDZmNmY7XFxuc3Ryb2tlLXdpZHRoOiAwLjU7XFxuc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzO1xcbn0gKi9cXG4vKiBheGlzIGNvbnRvdXIgKi9cXG4uYXhpcyBwYXRoIHtcXG4gIHN0cm9rZTogIzcwNmY2ZjtcXG4gIHN0cm9rZS13aWR0aDogMC43O1xcbiAgc2hhcGUtcmVuZGVyaW5nOiBjcmlzcEVkZ2VzOyB9XFxuXFxuLyogYXhpcyB0ZXh0ICovXFxuLmF4aXMgdGV4dCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiAxMTAlOyB9XFxuXFxuLyogTElORSBDSEFSVCAqL1xcbi8qIGxpbmUgKi9cXG4ubGluZS0wLCAubGFiZWwtMCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRTE1RDIwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTAge1xcbiAgZmlsbDogI0UxNUQyMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTEsIC5sYWJlbC0xIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNCNTAwMDE7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMSB7XFxuICBmaWxsOiAjQjUwMDAxO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMiwgLmxhYmVsLTIge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTYwODtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0yIHtcXG4gIGZpbGw6ICMwMEE2MDg7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0zLCAubGFiZWwtMyB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMUIzQ0YwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTMge1xcbiAgZmlsbDogIzFCM0NGMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTQsIC5sYWJlbC00IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMwMEE2Q0M7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNCB7XFxuICBmaWxsOiAjMDBBNkNDO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNSwgLmxhYmVsLTUge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzgzMTc5NDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC01IHtcXG4gIGZpbGw6ICM4MzE3OTQ7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS02LCAubGFiZWwtNiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjREJBRTdFO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTYge1xcbiAgZmlsbDogI0RCQUU3RTtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTcsIC5sYWJlbC03IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNGNkIyRDU7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNyB7XFxuICBmaWxsOiAjRjZCMkQ1O1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtOCwgLmxhYmVsLTgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0ZGMDEwMDtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC04IHtcXG4gIGZpbGw6ICNGRjAxMDA7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZSB7XFxuICBzdHJva2Utd2lkdGg6IDE7IH1cXG5cXG4uaG92ZXItbGluZSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjZDJkMmQyO1xcbiAgb3BhY2l0eTogMDtcXG4gIHN0cm9rZS13aWR0aDogMjA7IH1cXG5cXG4ubGFiZWwge1xcbiAgcGFkZGluZzogMTAwO1xcbiAgZm9udC1zaXplOiAxMnB4OyB9XFxuXFxuLyogaW50ZXJhY3RpdmUgZWxlbWVudHMgKi9cXG4vKiBUT09MVElQICovXFxuLnRvb2x0aXAge1xcbiAgZmlsbDogIzJiMjkyOTtcXG4gIGZvbnQtZmFtaWx5OiBhcmlhbDtcXG4gIGZvbnQtc2l6ZTogMjBweDsgfVxcblxcbi8qIFBPSU5UUyAqL1xcbi5wb2ludCB7XFxuICBzdHJva2U6IG5vbmU7XFxuICBmaWxsOiAjOWM5YzljOyB9XFxuXFxuLyogZm9yIGV4cGVyaW1lbnRpbmcgLSBjb2xvcmluZyBlbGVtZW50cyAqL1xcbi8qIHN2ZyB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcXG59ICovXFxuI2xlZnQsICNyaWdodCwgI3BhbmVsIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMS42OyB9XFxuXFxuI2xlZnQgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbiNsZWZ0IHA6bGFzdC1vZi10eXBlIHtcXG4gIHBhZGRpbmc6IDAgMTAlIDAgMTAlOyB9XFxuXFxuI3N1YnRpdGxlIHtcXG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcXG4gIGZvbnQtc2l6ZTogMTRweDtcXG4gIHBhZGRpbmctYm90dG9tOiA2MHB4OyB9XFxuXFxuI3JpZ2h0IHtcXG4gIHdpZHRoOiA0MCU7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgZGlzcGxheTogZmxleDtcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7IH1cXG5cXG4jcmlnaHQgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZWNmODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDsgfVxcblxcbiNyaWdodCA+IGE6aG92ZXIge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogIzhiZDNlZTtcXG4gIGNvbG9yOiB3aGl0ZTtcXG4gIGZvbnQtd2VpZ2h0OiBub3JtYWw7IH1cXG5cIiwgXCJcIl0pO1xuLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSBleHBvcnRzO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vLyBjc3MgYmFzZSBjb2RlLCBpbmplY3RlZCBieSB0aGUgY3NzLWxvYWRlclxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVzZVNvdXJjZU1hcCkge1xuICB2YXIgbGlzdCA9IFtdOyAvLyByZXR1cm4gdGhlIGxpc3Qgb2YgbW9kdWxlcyBhcyBjc3Mgc3RyaW5nXG5cbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0sIHVzZVNvdXJjZU1hcCk7XG5cbiAgICAgIGlmIChpdGVtWzJdKSB7XG4gICAgICAgIHJldHVybiBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKS5jb25jYXQoY29udGVudCwgXCJ9XCIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKCcnKTtcbiAgfTsgLy8gaW1wb3J0IGEgbGlzdCBvZiBtb2R1bGVzIGludG8gdGhlIGxpc3RcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGZ1bmMtbmFtZXNcblxuXG4gIGxpc3QuaSA9IGZ1bmN0aW9uIChtb2R1bGVzLCBtZWRpYVF1ZXJ5LCBkZWR1cGUpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09ICdzdHJpbmcnKSB7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcGFyYW0tcmVhc3NpZ25cbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsICcnXV07XG4gICAgfVxuXG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcblxuICAgIGlmIChkZWR1cGUpIHtcbiAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdGhpcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcbiAgICAgICAgdmFyIGlkID0gdGhpc1tpXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBtb2R1bGVzLmxlbmd0aDsgX2krKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfaV0pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbnRpbnVlXG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuXG4gICAgICBpZiAobWVkaWFRdWVyeSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWFRdWVyeTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzJdID0gXCJcIi5jb25jYXQobWVkaWFRdWVyeSwgXCIgYW5kIFwiKS5jb25jYXQoaXRlbVsyXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgbGlzdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gbGlzdDtcbn07XG5cbmZ1bmN0aW9uIGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXSB8fCAnJzsgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG5cbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuXG4gIGlmICghY3NzTWFwcGluZykge1xuICAgIHJldHVybiBjb250ZW50O1xuICB9XG5cbiAgaWYgKHVzZVNvdXJjZU1hcCAmJiB0eXBlb2YgYnRvYSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIHZhciBzb3VyY2VNYXBwaW5nID0gdG9Db21tZW50KGNzc01hcHBpbmcpO1xuICAgIHZhciBzb3VyY2VVUkxzID0gY3NzTWFwcGluZy5zb3VyY2VzLm1hcChmdW5jdGlvbiAoc291cmNlKSB7XG4gICAgICByZXR1cm4gXCIvKiMgc291cmNlVVJMPVwiLmNvbmNhdChjc3NNYXBwaW5nLnNvdXJjZVJvb3QgfHwgJycpLmNvbmNhdChzb3VyY2UsIFwiICovXCIpO1xuICAgIH0pO1xuICAgIHJldHVybiBbY29udGVudF0uY29uY2F0KHNvdXJjZVVSTHMpLmNvbmNhdChbc291cmNlTWFwcGluZ10pLmpvaW4oJ1xcbicpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKCdcXG4nKTtcbn0gLy8gQWRhcHRlZCBmcm9tIGNvbnZlcnQtc291cmNlLW1hcCAoTUlUKVxuXG5cbmZ1bmN0aW9uIHRvQ29tbWVudChzb3VyY2VNYXApIHtcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVuZGVmXG4gIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpO1xuICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gIHJldHVybiBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG59IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBpc09sZElFID0gZnVuY3Rpb24gaXNPbGRJRSgpIHtcbiAgdmFyIG1lbW87XG4gIHJldHVybiBmdW5jdGlvbiBtZW1vcml6ZSgpIHtcbiAgICBpZiAodHlwZW9mIG1lbW8gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAvLyBUZXN0IGZvciBJRSA8PSA5IGFzIHByb3Bvc2VkIGJ5IEJyb3dzZXJoYWNrc1xuICAgICAgLy8gQHNlZSBodHRwOi8vYnJvd3NlcmhhY2tzLmNvbS8jaGFjay1lNzFkODY5MmY2NTMzNDE3M2ZlZTcxNWMyMjJjYjgwNVxuICAgICAgLy8gVGVzdHMgZm9yIGV4aXN0ZW5jZSBvZiBzdGFuZGFyZCBnbG9iYWxzIGlzIHRvIGFsbG93IHN0eWxlLWxvYWRlclxuICAgICAgLy8gdG8gb3BlcmF0ZSBjb3JyZWN0bHkgaW50byBub24tc3RhbmRhcmQgZW52aXJvbm1lbnRzXG4gICAgICAvLyBAc2VlIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrLWNvbnRyaWIvc3R5bGUtbG9hZGVyL2lzc3Vlcy8xNzdcbiAgICAgIG1lbW8gPSBCb29sZWFuKHdpbmRvdyAmJiBkb2N1bWVudCAmJiBkb2N1bWVudC5hbGwgJiYgIXdpbmRvdy5hdG9iKTtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtbztcbiAgfTtcbn0oKTtcblxudmFyIGdldFRhcmdldCA9IGZ1bmN0aW9uIGdldFRhcmdldCgpIHtcbiAgdmFyIG1lbW8gPSB7fTtcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKHRhcmdldCkge1xuICAgIGlmICh0eXBlb2YgbWVtb1t0YXJnZXRdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgdmFyIHN0eWxlVGFyZ2V0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3Rvcih0YXJnZXQpOyAvLyBTcGVjaWFsIGNhc2UgdG8gcmV0dXJuIGhlYWQgb2YgaWZyYW1lIGluc3RlYWQgb2YgaWZyYW1lIGl0c2VsZlxuXG4gICAgICBpZiAod2luZG93LkhUTUxJRnJhbWVFbGVtZW50ICYmIHN0eWxlVGFyZ2V0IGluc3RhbmNlb2Ygd2luZG93LkhUTUxJRnJhbWVFbGVtZW50KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgICAvLyBkdWUgdG8gY3Jvc3Mtb3JpZ2luIHJlc3RyaWN0aW9uc1xuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAvLyBpc3RhbmJ1bCBpZ25vcmUgbmV4dFxuICAgICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgICB9XG5cbiAgICByZXR1cm4gbWVtb1t0YXJnZXRdO1xuICB9O1xufSgpO1xuXG52YXIgc3R5bGVzSW5Eb20gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRvbS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRvbVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdXG4gICAgfTtcblxuICAgIGlmIChpbmRleCAhPT0gLTEpIHtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzKys7XG4gICAgICBzdHlsZXNJbkRvbVtpbmRleF0udXBkYXRlcihvYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZXNJbkRvbS5wdXNoKHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogYWRkU3R5bGUob2JqLCBvcHRpb25zKSxcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuXG4gICAgaWRlbnRpZmllcnMucHVzaChpZGVudGlmaWVyKTtcbiAgfVxuXG4gIHJldHVybiBpZGVudGlmaWVycztcbn1cblxuZnVuY3Rpb24gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3R5bGUnKTtcbiAgdmFyIGF0dHJpYnV0ZXMgPSBvcHRpb25zLmF0dHJpYnV0ZXMgfHwge307XG5cbiAgaWYgKHR5cGVvZiBhdHRyaWJ1dGVzLm5vbmNlID09PSAndW5kZWZpbmVkJykge1xuICAgIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gJ3VuZGVmaW5lZCcgPyBfX3dlYnBhY2tfbm9uY2VfXyA6IG51bGw7XG5cbiAgICBpZiAobm9uY2UpIHtcbiAgICAgIGF0dHJpYnV0ZXMubm9uY2UgPSBub25jZTtcbiAgICB9XG4gIH1cblxuICBPYmplY3Qua2V5cyhhdHRyaWJ1dGVzKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICBzdHlsZS5zZXRBdHRyaWJ1dGUoa2V5LCBhdHRyaWJ1dGVzW2tleV0pO1xuICB9KTtcblxuICBpZiAodHlwZW9mIG9wdGlvbnMuaW5zZXJ0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgb3B0aW9ucy5pbnNlcnQoc3R5bGUpO1xuICB9IGVsc2Uge1xuICAgIHZhciB0YXJnZXQgPSBnZXRUYXJnZXQob3B0aW9ucy5pbnNlcnQgfHwgJ2hlYWQnKTtcblxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoXCJDb3VsZG4ndCBmaW5kIGEgc3R5bGUgdGFyZ2V0LiBUaGlzIHByb2JhYmx5IG1lYW5zIHRoYXQgdGhlIHZhbHVlIGZvciB0aGUgJ2luc2VydCcgcGFyYW1ldGVyIGlzIGludmFsaWQuXCIpO1xuICAgIH1cblxuICAgIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG4gIH1cblxuICByZXR1cm4gc3R5bGU7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlLnBhcmVudE5vZGUgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBzdHlsZS5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlKTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbnZhciByZXBsYWNlVGV4dCA9IGZ1bmN0aW9uIHJlcGxhY2VUZXh0KCkge1xuICB2YXIgdGV4dFN0b3JlID0gW107XG4gIHJldHVybiBmdW5jdGlvbiByZXBsYWNlKGluZGV4LCByZXBsYWNlbWVudCkge1xuICAgIHRleHRTdG9yZVtpbmRleF0gPSByZXBsYWNlbWVudDtcbiAgICByZXR1cm4gdGV4dFN0b3JlLmZpbHRlcihCb29sZWFuKS5qb2luKCdcXG4nKTtcbiAgfTtcbn0oKTtcblxuZnVuY3Rpb24gYXBwbHlUb1NpbmdsZXRvblRhZyhzdHlsZSwgaW5kZXgsIHJlbW92ZSwgb2JqKSB7XG4gIHZhciBjc3MgPSByZW1vdmUgPyAnJyA6IG9iai5tZWRpYSA/IFwiQG1lZGlhIFwiLmNvbmNhdChvYmoubWVkaWEsIFwiIHtcIikuY29uY2F0KG9iai5jc3MsIFwifVwiKSA6IG9iai5jc3M7IC8vIEZvciBvbGQgSUVcblxuICAvKiBpc3RhbmJ1bCBpZ25vcmUgaWYgICovXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSByZXBsYWNlVGV4dChpbmRleCwgY3NzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgY3NzTm9kZSA9IGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcyk7XG4gICAgdmFyIGNoaWxkTm9kZXMgPSBzdHlsZS5jaGlsZE5vZGVzO1xuXG4gICAgaWYgKGNoaWxkTm9kZXNbaW5kZXhdKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfVxuXG4gICAgaWYgKGNoaWxkTm9kZXMubGVuZ3RoKSB7XG4gICAgICBzdHlsZS5pbnNlcnRCZWZvcmUoY3NzTm9kZSwgY2hpbGROb2Rlc1tpbmRleF0pO1xuICAgIH0gZWxzZSB7XG4gICAgICBzdHlsZS5hcHBlbmRDaGlsZChjc3NOb2RlKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlUb1RhZyhzdHlsZSwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBvYmouY3NzO1xuICB2YXIgbWVkaWEgPSBvYmoubWVkaWE7XG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChtZWRpYSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZSgnbWVkaWEnLCBtZWRpYSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUucmVtb3ZlQXR0cmlidXRlKCdtZWRpYScpO1xuICB9XG5cbiAgaWYgKHNvdXJjZU1hcCAmJiBidG9hKSB7XG4gICAgY3NzICs9IFwiXFxuLyojIHNvdXJjZU1hcHBpbmdVUkw9ZGF0YTphcHBsaWNhdGlvbi9qc29uO2Jhc2U2NCxcIi5jb25jYXQoYnRvYSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoc291cmNlTWFwKSkpKSwgXCIgKi9cIik7XG4gIH0gLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuXG4gIGlmIChzdHlsZS5zdHlsZVNoZWV0KSB7XG4gICAgc3R5bGUuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZS5maXJzdENoaWxkKSB7XG4gICAgICBzdHlsZS5yZW1vdmVDaGlsZChzdHlsZS5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZS5hcHBlbmRDaGlsZChkb2N1bWVudC5jcmVhdGVUZXh0Tm9kZShjc3MpKTtcbiAgfVxufVxuXG52YXIgc2luZ2xldG9uID0gbnVsbDtcbnZhciBzaW5nbGV0b25Db3VudGVyID0gMDtcblxuZnVuY3Rpb24gYWRkU3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBzdHlsZTtcbiAgdmFyIHVwZGF0ZTtcbiAgdmFyIHJlbW92ZTtcblxuICBpZiAob3B0aW9ucy5zaW5nbGV0b24pIHtcbiAgICB2YXIgc3R5bGVJbmRleCA9IHNpbmdsZXRvbkNvdW50ZXIrKztcbiAgICBzdHlsZSA9IHNpbmdsZXRvbiB8fCAoc2luZ2xldG9uID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpKTtcbiAgICB1cGRhdGUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIGZhbHNlKTtcbiAgICByZW1vdmUgPSBhcHBseVRvU2luZ2xldG9uVGFnLmJpbmQobnVsbCwgc3R5bGUsIHN0eWxlSW5kZXgsIHRydWUpO1xuICB9IGVsc2Uge1xuICAgIHN0eWxlID0gaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9UYWcuYmluZChudWxsLCBzdHlsZSwgb3B0aW9ucyk7XG5cbiAgICByZW1vdmUgPSBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGUpO1xuICAgIH07XG4gIH1cblxuICB1cGRhdGUob2JqKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZVN0eWxlKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICB1cGRhdGUob2JqID0gbmV3T2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmVtb3ZlKCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9OyAvLyBGb3JjZSBzaW5nbGUtdGFnIHNvbHV0aW9uIG9uIElFNi05LCB3aGljaCBoYXMgYSBoYXJkIGxpbWl0IG9uIHRoZSAjIG9mIDxzdHlsZT5cbiAgLy8gdGFncyBpdCB3aWxsIGFsbG93IG9uIGEgcGFnZVxuXG4gIGlmICghb3B0aW9ucy5zaW5nbGV0b24gJiYgdHlwZW9mIG9wdGlvbnMuc2luZ2xldG9uICE9PSAnYm9vbGVhbicpIHtcbiAgICBvcHRpb25zLnNpbmdsZXRvbiA9IGlzT2xkSUUoKTtcbiAgfVxuXG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcblxuICAgIGlmIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwobmV3TGlzdCkgIT09ICdbb2JqZWN0IEFycmF5XScpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5Eb21bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRG9tW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRG9tLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiaW1wb3J0IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH0gZnJvbSBcIi4vdGVybXMuanNcIjtcblxuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWU7IHN0b3JlIGRhdGEgaW4gdmFyaWFibGUgZGF0YUFcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuXG5cbi8vIGZ1bmN0aW9uIHJldHJpZXZlciBzdG9yZXMgcHJvbWlzZXMgdGhhdCBmZXRjaCBkYXRhIGZyb20gdGhlIGZpbGUgdGhhdCBcbi8vIGNvcnJlc3BvbmRzIHRvIHRoZSBpbmRleCBpbiB0aGUgYXJyYXkgcXVlcnlTdWJzZXRzLlxuLy8gSW5wdXQgYXJnIFwicXVlcmllc0FycmF5XCIgaXMgYSBcInRlcm1zLW9ubHlcIiBhcnJheSAoZS5nLiAkMjAxOSlcbi8vIElucHV0IGFycmF5IFwicXVlcnlTdWJzZXRzXCIgY29udGFpbnMgc3Vic2V0cyBvZiBxdWVyaWVzLCByZXR1cm5lZCBmcm9tIGZ1bmN0aW9uIHNwbGl0dGVyIGluIHRlcm1zLmpzXG5mdW5jdGlvbiByZXRyaWV2ZXIgKHF1ZXJ5U3Vic2V0cykge1xuICBjb25zdCByZXRyaWV2ZXJQcm9taXNlcyA9IFtdO1xuXG4gIHF1ZXJ5U3Vic2V0cy5mb3JFYWNoKChzcGxpdFF1ZXJ5LCBpbmRleCkgPT4ge1xuICAgIC8vIGxldCBkYXRhc2V0TmFtZSA9IGBkYXRhc2V0XyR7aW5kZXh9YDtcbiAgICByZXRyaWV2ZXJQcm9taXNlcy5wdXNoKGQzLmpzb24oYC4vZGlzdC9hc3NldHMvZGF0YS8yMDE5XyR7aW5kZXh9Lmpzb25gKSk7XG4gIH0pO1xuXG4gIHJldHVybiByZXRyaWV2ZXJQcm9taXNlcztcbn1cblxuXG4vLyBmdW5jdGlvbiB0byBjaGFuZ2UgYWxsIHBvaW50IHZhbHVlcyB0byBhIG1vdmluZyBhdmVyYWdlIChvZiBpbnRlcnZhbCA9IHggd2Vla3MpXG5mdW5jdGlvbiBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlIChkYXRhc2V0KSB7XG4gICAgLy8gaW50ZXJ2YWwgaXMgdGhlIG51bSB3ZWVrcyBvdmVyIHdoaWNoIHRoZSBtb3ZpbmdBdmVyYWdlIGlzIGNhbGN1bGF0ZWRcbiAgICBjb25zdCBpbnRlcnZhbCA9IDY7XG5cbiAgICBkYXRhc2V0LmZvckVhY2goZnVuY3Rpb24gKHRlcm1TbGljZSkge1xuXG4gICAgICAvLyBjb25zdCBhdmVyYWdlQ2hlY2tlciA9IFtdO1xuICAgICAgXG4gICAgICBjb25zdCBhdmVyYWdlcyA9IHRlcm1TbGljZS52YWx1ZXMubWFwKGZ1bmN0aW9uICh2LCBpKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidlwiLCB2KVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkLnZhbHVlc1wiLCBkLnZhbHVlcylcblxuICAgICAgICBpZiAoaSA8IGludGVydmFsKSB7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1vdmluZ1RvdGFsID0gMDtcblxuICAgICAgICB0ZXJtU2xpY2UudmFsdWVzLnNsaWNlKGkgLSBpbnRlcnZhbCwgaSkuZm9yRWFjaChmdW5jdGlvbiAodikge1xuICAgICAgICAgIG1vdmluZ1RvdGFsICs9IHYucG9pbnQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGNvbnN0IG1vdmluZ0F2ZXJhZ2UgPSBNYXRoLnJvdW5kKG1vdmluZ1RvdGFsIC8gaW50ZXJ2YWwpO1xuXG4gICAgICAgIC8vIGF2ZXJhZ2VDaGVja2VyLnB1c2goW3YucG9pbnQsIG1vdmluZ0F2ZXJhZ2VdKVxuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nVG90YWxcIiwgbW92aW5nVG90YWwpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm1vdmluZ0F2ZXJhZ2VcIiwgbW92aW5nQXZlcmFnZSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBkYXRlOiB2LmRhdGUsXG4gICAgICAgICAgcG9pbnQ6IG1vdmluZ0F2ZXJhZ2UsXG4gICAgICAgIH07XG4gICAgICB9KTtcbiAgICAvLyAgIGNvbnNvbGUubG9nKFwiYXZlcmFnZXNcIixhdmVyYWdlQ2hlY2tlcilcbiAgICAgIHRlcm1TbGljZS52YWx1ZXMgPSBhdmVyYWdlcy5zbGljZShpbnRlcnZhbCk7XG4gICAgfSk7XG59XG5cblxuLy8gcmV0dXJucyBhIHByb21pc2UgdGhhdCBjcmVhdGVzIHRoZSBkYXRhc2V0IGZvciB0aGUgZDMgY2hhcnQgZHJhd2luZyBmdW5jdGlvbiB0byB1c2Vcbi8vIHRha2VzIGluIGlucHV0IGFyZ3MgdGhhdCB3ZXJlIHJldHVybmVkIGZyb20gdGhlIGZ1bmN0aW9uIFwicmV0cmlldmVyXCJcbmZ1bmN0aW9uIGNyZWF0ZURhdGFzZXQgKHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheSwgYXJyYXlPZlByb21pc2VzKSB7XG4gICAgXG4gIC8vIHRoaXMgd2lsbCBzdG9yZSB0aGUgZGF0YXNldCBmb3IgZDMgdG8gdXNlXG4gIGNvbnN0IGRhdGFzZXQgPSBbXTtcblxuICAvLyAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggb2YgZWFjaCB0ZXJtXG4gIC8vIGxldCBtYWluSW5kZXggPSAwO1xuXG4gIC8vIHJldHVybnMgdGhlIGFwcHJvcHJpYXRlIHJlbGF0aXZlIHZhbHVlIG9mIGVhY2ggdGVybSBpbiBhIHF1ZXJ5U3Vic2V0LCBcbiAgLy8gdXNpbmcgdGhlIHBvaW50IHZhbHVlIG9mIHRoZSBjb21tb24gcXVlcnkgYXMgYSByZWZlcmVuY2VcbiAgZnVuY3Rpb24gY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCByVmFsdWVJbmRleCkge1xuICAgICAgXG4gICAgICBsZXQgbnVtZXJhdG9yID0gZGF0YXNldFswXS52YWx1ZXNbcmF3ZGF0YUluZGV4XS5wb2ludDsgLy8gY29tcGFyaXNvbiB2YWx1ZSBpbiBwcmV2aW91cyBwcm9taXNlIChhbHJlYWR5IGluIHZhciBkYXRhc2V0KVxuICAgICAgbGV0IGRlbm9taW5hdG9yID0gcmF3ZGF0YVNsaWNlLnZhbHVlWzBdOyAvLyBjb21wYXJpc29uIHZhbHVlIGluIGN1cnJlbnQgcHJvbWlzZVxuICAgICAgbGV0IHJhdGlvO1xuICAgICAgXG4gICAgICBpZiAoZGVub21pbmF0b3IgPT09IDApIHtcbiAgICAgIHJhdGlvID0gMDtcbiAgICAgIH0gZWxzZSB7cmF0aW8gPSBudW1lcmF0b3IgLyBkZW5vbWluYXRvcjtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIE1hdGgucm91bmQoK3Jhd2RhdGFTbGljZS52YWx1ZVtyVmFsdWVJbmRleF0gKiByYXRpbyk7XG4gIH1cblxuXG4gIC8vIHRha2VzIGluIGEgcHJvbWlzZSwgYW5kIGl0cyBpbmRleCBpbiB0aGUgYXJyYXlPZlByb21pc2VzICh0byB0ZWxsIGlmIGl0IHdpbGwgYWNjZXNzIHRoZSBmaXJzdCBvciBzdWJzZXF1ZW50IHN1YmRhdGFzZXRzKVxuICAvLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IHdyaXRlcyB0aGUgZGF0YSBpbnRvIGNvbnN0IFwiZGF0YXNldFwiLCBpbiBhcHByb3ByaWF0ZSBmb3JtYXQgXG4gIGZ1bmN0aW9uIGdldERhdGEgKHByb21pc2UsIHByb21pc2VJbmRleCkge1xuXG4gICAgcmV0dXJuIHByb21pc2UudGhlbihmdW5jdGlvbihyYXdkYXRhKSB7XG4gICAgXG4gICAgICBsZXQgaW5jcmVtZW50ID0gcHJvbWlzZUluZGV4ID09PSAwID8gMCA6IDE7ICAvLyBrZWVwcyB0cmFjayBvZiB0aGUgaW5kZXggd2l0aGluIGVhY2ggc3ViZGF0YXNldFxuICAgICAgbGV0IG1heE51bU9mUXVlcmllcyA9IDU7IC8vIG1heCBudW0gb2YgcXVlcmllcyBpbiBhIHNpbmdsZSBjYWxsIHVzaW5nIEdvb2dsZSBUcmVuZHMgQVBJXG5cbiAgICAgIHdoaWxlIChpbmNyZW1lbnQgPCBtYXhOdW1PZlF1ZXJpZXMgJiYgZGF0YXNldC5sZW5ndGggPCBxdWVyaWVzQXJyYXkubGVuZ3RoKSB7XG5cbiAgICAgICAgbGV0IHF1ZXJpZXNBcnJheUluZGV4ID0gcHJvbWlzZUluZGV4ICogKG1heE51bU9mUXVlcmllcyAtIDEpICsgaW5jcmVtZW50O1xuXG4gICAgICAgIC8vIGVhY2ggc2xpY2UgY29udGFpbnMgYWxsIGluZm8gZm9yIGEgdGVybVxuICAgICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgICB0ZXJtOiB0ZXJtc0FycmF5W3F1ZXJpZXNBcnJheUluZGV4XSxcbiAgICAgICAgICB2YWx1ZXM6IHJhd2RhdGEubWFwKGZ1bmN0aW9uIChyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCkge1xuXG4gICAgICAgICAgICAgIGxldCBwb2ludCA9XG4gICAgICAgICAgICAgICAgcHJvbWlzZUluZGV4ID09PSAwID8gK3Jhd2RhdGFTbGljZS52YWx1ZVtpbmNyZW1lbnRdXG4gICAgICAgICAgICAgICAgICA6IGNhbGlicmF0ZShyYXdkYXRhU2xpY2UsIHJhd2RhdGFJbmRleCwgaW5jcmVtZW50KTtcblxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYocmF3ZGF0YVNsaWNlLmZvcm1hdHRlZEF4aXNUaW1lKSxcblxuICAgICAgICAgICAgICBwb2ludDogcG9pbnQsXG4gICAgICAgIFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgIH0pLFxuICAgICAgICB9O1xuXG4gICAgICAgIGRhdGFzZXQucHVzaChzbGljZSk7XG4gICAgICAgIFxuICAgICAgICBpbmNyZW1lbnQgKz0gMTtcbiAgXG4gICAgICB9XG4gICAgICByZXR1cm4gZGF0YXNldDtcblxuICAgIH0pXG5cbiAgfSBcblxuXG4gIC8vIGVhY2ggcHJvbWlzZSB3aWxsIGJlIHRyYW5zZm9ybWVkIHRvIHRoZSBkYXRhLXdyaXRpbmcgcHJvbWlzZSBhbmQgc3RvcmVkIGluIG5ld1Byb21pc2VzQXJyYXlcbiAgY29uc3QgbmV3UHJvbWlzZXNBcnJheSA9IGFycmF5T2ZQcm9taXNlcy5tYXAoZnVuY3Rpb24ocHJvbWlzZSwgaW5kZXgpIHtcbiAgICAgIHJldHVybiBnZXREYXRhKHByb21pc2UsIGluZGV4KTtcbiAgfSlcblxuICByZXR1cm4gbmV3UHJvbWlzZXNBcnJheVswXS50aGVuKGZpcnN0U3Vic2V0ID0+IHtcbiAgICAgIGNvbnN0IHJlbWFpbmluZ1Byb21pc2VzID0gbmV3UHJvbWlzZXNBcnJheS5zbGljZSgxKTtcbiAgICAgIHJldHVybiBQcm9taXNlLmFsbChyZW1haW5pbmdQcm9taXNlcyk7XG4gIH0pXG4gIC50aGVuKHJlcyA9PiB7XG4gICAgLy8gY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGRhdGFzZXQpXG4gICAgXG4gICAgY2hhbmdlWVRvTW92aW5nQXZlcmFnZShkYXRhc2V0KTtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRBZnRlciBNb3ZpbmdBdmVyYWdlXCIsIGRhdGFzZXQpXG5cbiAgICByZXR1cm4gZGF0YXNldDtcbiAgfSlcbiAgXG4gIFxufVxuXG5leHBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfTtcbi8vIG1vZHVsZS5leHBvcnRzID0geyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSIsIi8vXCJ0ZXJtcy1vbmx5XCIgYXJyYXlzXG5cbmNvbnN0ICQyMDE5ID0gW1xuICAgIFwib2sgYm9vbWVyXCIsXG4gICAgXCJ2c2NvXCIsXG4gICAgXCJzZnNcIixcbiAgICBcImZ5cFwiLFxuICAgIFwicy91XCIsXG4gICAgXCJuZ2xcIixcbiAgICBcInNpbXBcIixcbiAgICBcIml5a3lrXCIsXG4gICAgXCJzYlwiXG4gICAgLy8gXCJhbmQgaSBvb3BcIixcbiAgICAvLyBcInNrc2tza1wiLFxuICAgIC8vIFwieWt0dlwiXG5dXG5cbmNvbnN0IG9uZUhpdCA9IFtcInNsYXR0XCIsIFwiYW50c1wiXTtcblxuXG5jb25zdCAkMjAxOCA9IFtcbiAgXCJpbmNlbFwiLFxuICBcInV3dVwiLFxuICBcIm11a2JhbmdcIixcbiAgXCJpYmZcIixcbiAgXCJibG9ja2NoYWluXCIsXG4gIFwicm5nXCIsXG4gIFwiaml0XCIsXG4gIFwianV1bGluZ1wiLFxuICBcImdla3l1bWVcIixcbiAgXCJ6YWRkeVwiLFxuICBcInd0bVwiLFxuICBcIndpZ1wiLFxuXTtcblxuY29uc3QgJDIwMTcgPSBbXG4gIFwibm9uIGJpbmFyeVwiLFxuICBcImJpdGNvaW5cIixcbiAgXCJzbm93Zmxha2VcIixcbiAgXCJwbW95c1wiLFxuICBcIm1hZ2FcIixcbiAgXCJ3YXNwXCIsXG4gIFwiYm91amllXCIsXG4gIFwidHJvbGxzXCIsXG5dO1xuXG5jb25zdCAkMjAxNiA9IFtcbiAgXCJnYXNsaWdodGluZ1wiLFxuICBcInNqd1wiLFxuICBcImJvb2xpblwiLFxuICBcIndva2VcIixcbiAgXCJzaGlsbFwiLFxuICBcInF1YXNoXCIsXG4gIFwiYnJhbmRpc2hcIixcbiAgXCJ0cmlnZ2VyZWRcIixcbiAgXCJzaG9va1wiLFxuICBcImJpZ2x5XCIsXG4gIFwiaG9sb3NleHVhbFwiLFxuICBcInZleGluZ1wiLFxuICBcImJvdWdoXCIsXG4gIFwianVqdVwiLFxuICBcIndhdnlcIixcbl07XG5cbmNvbnN0ICQyMDE1ID0gW1xuICBcInNpbW1lclwiLFxuICBcIm5ldGZsaXggYW5kIGNoaWxsXCIsXG4gIFwiY2hhcG9cIixcbiAgXCJzdG9vcFwiLFxuICBcImJsYXNlXCIsXG4gIFwicGxlYlwiLFxuICBcImxvd2tleVwiLFxuICBcInRvbWVcIixcbiAgXCJ3YXBcIixcbiAgXCJzaHVkZGVyXCIsXG4gIFwiYnVybnRcIixcbiAgXCJ2YXBlXCIsXG5dO1xuXG4vLyB0YWtlcyBpbiBhIFwidGVybXMtb25seVwiIGFycmF5O1xuLy8gcmV0dXJucyBhbiBhcnJheSBvZiB0aGUgYWN0dWFsIHNlYXJjaCBxdWVyaWVzIHRvIGJlIG1hZGUgdXNpbmcgdGhlIEdvb2dsZSBUcmVuZHMgQVBJXG5mdW5jdGlvbiBzZWFyY2hUZXJtc0dlbmVyYXRvcihhcnJheSkge1xuICAgIGNvbnN0IHNlYXJjaFRlcm1zID0gW107XG5cbiAgICBhcnJheS5mb3JFYWNoKCh0ZXJtKSA9PiB7XG4gICAgICAgIHNlYXJjaFRlcm1zLnB1c2goYHdoYXQgZG9lcyAke3Rlcm19IG1lYW5gKTtcbiAgICB9KTtcblxuICAgIC8vIGNvbnNvbGUubG9nKHNlYXJjaFRlcm1zKTtcbiAgICByZXR1cm4gc2VhcmNoVGVybXM7XG59O1xuXG4vLyBJbnB1dCBhcmcgXCJxdWVyaWVzQXJyYXlcIiBpcyB0aGUgYXJyYXkgb2Ygc2VhcmNoIHF1ZXJpZXM7IFxuLy8gXCJtYXhOdW1PZlF1ZXJpZXNcIiBpcyB0aGUgbWF4IG51bSBvZiBxdWVyaWVzIGFsbG93ZWQgb24gR29vZ2xlIFRyZW5kcyBBUEk7XG4vLyBcImpvaW5JbmRleFwiIGlzIHRoZSBpbmRleCBvZiB0aGUgY29tbW9uIHF1ZXJ5IG9uIHdoaWNoIHdlIGNhbGlicmF0ZSBlYWNoIHN1YmRhdGFzZXQuXG4vLyBGdW5jdGlvbiBzcGxpdHRlciByZXR1cm5zIGFuIGFycmF5IG9mIHF1ZXJ5U3Vic2V0cywgYW5kIGEgYSB0ZXJtcy1vbmx5IGFycmF5IHJlYXJyYW5nZWQgd2l0aCB0aGUgY29tbW9uIHRlcm0gYXQgaW5kZXggMC5cbi8vIEVhY2ggcXVlcnlTdWJzZXQgaXMgYW4gYXJyYXkgdGhhdCBjb250YWlucyB0aGUgY29tbW9uIHF1ZXJ5IGFsb25nIHdpdGggb3RoZXIgcXVlcmllczsgc3ViYXJyYXkubGVuZ3RoID0gbWF4TnVtT2ZRdWVyaWVzLlxuLy8gTGF0ZXIsIGVhY2ggcXVlcnlTdWJzZXQgaXMgdXNlZCB0byBtYWtlIDEgQVBJIGNhbGwgdG8gb2J0YWluIGEgZGF0YVN1YnNldC5cbmZ1bmN0aW9uIHNwbGl0dGVyKHF1ZXJpZXNBcnJheSwgbWF4TnVtT2ZRdWVyaWVzLCBqb2luSW5kZXgsIHRlcm1zQXJyYXkpIHtcblxuICAvLyByZW1vdmUgdGhlIGNvbW1vbiBxdWVyeSBmcm9tIHRoZSBxdWVyaWVzQXJyYXkgb24gd2hpY2ggd2UnbGwgaXRlcmF0ZSBvdmVyIHRvIGdldCB0aGUgc3Vic2V0cyBvZiBxdWVyaWVzLFxuICAvLyBhbmQgc2F2ZSB0aGUgY29tbW9uIHF1ZXJ5IHRvIGNvbnN0IGpvaW5UZXJtXG4gIGNvbnN0IGpvaW5UZXJtID0gcXVlcmllc0FycmF5LnNwbGljZShqb2luSW5kZXgsIDEpO1xuXG4gIGNvbnN0IGludGVydmFsID0gbWF4TnVtT2ZRdWVyaWVzIC0gMTtcblxuICBsZXQgcXVlcnlTdWJzZXRzID0gW107XG5cbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBxdWVyaWVzQXJyYXkubGVuZ3RoOyApIHtcbiAgICAvLyBlYWNoIHNldCBvZiBxdWVyaWVzIGV4Y2x1ZGluZyBjb21tb24gcXVlcnlcbiAgICBjb25zdCBncm91cCA9IHF1ZXJpZXNBcnJheS5zbGljZShpLCBpICsgaW50ZXJ2YWwpO1xuXG4gICAgLy8gZWFjaCBzdWJhcnJheSBoYXMgdGhlIGNvbW1vbiBxdWVyeSBhcyB0aGUgZmlyc3QgZWxlbWVudCwgZm9sbG93ZWQgYnkgb3RoZXIgcXVlcmllc1xuICAgIGNvbnN0IHF1ZXJ5U3Vic2V0ID0gam9pblRlcm0uY29uY2F0KGdyb3VwKTtcblxuICAgIHF1ZXJ5U3Vic2V0cy5wdXNoKHF1ZXJ5U3Vic2V0KTtcblxuICAgIC8vIGp1bXAgdG8gdGhlIG5leHQgZWxlbWVudCBpbiBhcnJheSB3aGljaCBoYXNuJ3QgeWV0IGJlZW4gYWRkZWQgdG8gYSBxdWVyeVN1YnNldFxuICAgIGkgKz0gaW50ZXJ2YWw7XG4gIH1cblxuICBxdWVyaWVzQXJyYXkgPSBqb2luVGVybS5jb25jYXQocXVlcmllc0FycmF5KTtcbiAgdGVybXNBcnJheSA9IHRlcm1zQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSkuY29uY2F0KHRlcm1zQXJyYXkpXG4gIFxuXG4gIHJldHVybiBbcXVlcnlTdWJzZXRzLCBxdWVyaWVzQXJyYXksIHRlcm1zQXJyYXldO1xufVxuXG5cbmNvbnN0ICQyMDE5X3NlYXJjaFRlcm1zID0gc2VhcmNoVGVybXNHZW5lcmF0b3IoJDIwMTkpO1xuY29uc3QgJDIwMTlfc3BsaXRRdWVyaWVzID0gc3BsaXR0ZXIoJDIwMTlfc2VhcmNoVGVybXMsIDUsICQyMDE5X3NlYXJjaFRlcm1zLmxlbmd0aCAvIDIsICQyMDE5KTtcblxubW9kdWxlLmV4cG9ydHMgPSB7ICQyMDE5X3NwbGl0UXVlcmllcyB9OyIsImltcG9ydCB7IGFkZExhYmVsQ29vcmRzIH0gZnJvbSBcIi4vbGFiZWxDb29yZHMuanNcIlxuXG4vLyBjcmVhdGluZyByZXVzYWJsZSBjaGFydFxuZXhwb3J0IGZ1bmN0aW9uIGNoYXJ0VGVtcGxhdGUoKSB7XG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgc3ZnXG4gIGxldCB3aWR0aCA9IDEyMDAqMC42O1xuICBsZXQgaGVpZ2h0ID0gODAwKjAuNjtcbiAgbGV0IGFkaiA9IDMwO1xuXG5cbiAgZnVuY3Rpb24gZHJhdyhzZWxlY3Rpb24pIHtcbiAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG5cbiAgICAgICAgLy8gU0NBTEVTOiB4LWF4aXNcbiAgICAgICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMubWluKGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICByZXR1cm4gZDMubWF4KGQudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LmRhdGU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVuZGVycyBjaGFydCBcbiAgICAgICAgZnVuY3Rpb24gcmVuZGVyKGNoYXJ0U3RhcnREYXRlLCBjaGFydEVuZERhdGUpIHtcblxuICAgICAgICB9XG5cbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IG1pZERhdGUgPSBuZXcgRGF0ZSgoc3RhcnREYXRlLmdldFRpbWUoKSArIGVuZERhdGUuZ2V0VGltZSgpKSAvIDIpO1xuICAgICAgICBjb25zdCBtaWREYXRlID0gbmV3IERhdGUoMjAxOSwgNSwgMzApXG5cbiAgICAgICAgbGV0IGNoYXJ0U3RhcnREYXRlID0gc3RhcnREYXRlO1xuICAgICAgICBsZXQgY2hhcnRFbmREYXRlID0gbWlkRGF0ZTtcbiAgICAgICAgbGV0IGNoYXJ0SW5kZXhTdGFydDtcbiAgICAgICAgbGV0IGNoYXJ0SW5kZXhFbmQ7XG4gICAgICAgIGxldCBjdXJyZW50TWF4WTtcblxuICAgICAgICBcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFydFN0YXJ0RGF0ZVwiLCBjaGFydFN0YXJ0RGF0ZSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjaGFydE1pZERhdGVcIiwgY2hhcnRFbmREYXRlKVxuICAgIFxuXG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0SW5kZXhFbmQgZGF0ZVwiLCBkYXRhWzBdLnZhbHVlc1tjaGFydEluZGV4RW5kXS5kYXRlKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjaGFydEluZGV4U3RhcnQsIGNoYXJ0SW5kZXhFbmRcIiwgY2hhcnRJbmRleFN0YXJ0LCBjaGFydEluZGV4RW5kKTtcblxuICAgICAgICBmdW5jdGlvbiB1cGRhdGVDdXJyZW50TWF4WSAoKSB7XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPj0gY2hhcnRTdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICBjaGFydEluZGV4U3RhcnQgPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPiBjaGFydEVuZERhdGUpIHtcbiAgICAgICAgICAgICAgICBjaGFydEluZGV4RW5kID0gaTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIGNoYXJ0SW5kZXhFbmQgPSBkYXRhWzBdLnZhbHVlcy5sZW5ndGg7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGRhdGFbMF0udmFsdWVzW2NoYXJ0SW5kZXhFbmRdKVxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjaGFydGluZGV4ZW5kXCIsIGNoYXJ0SW5kZXhFbmQpXG5cbiAgICAgICAgICAgIGN1cnJlbnRNYXhZID0gIGQzLm1heChkYXRhLCBmdW5jdGlvbiAodGVybVNsaWNlKSB7XG4gICAgICAgICAgICAgIGxldCB2YWx1ZUFycmF5ID0gdGVybVNsaWNlLnZhbHVlcy5zbGljZShcbiAgICAgICAgICAgICAgICBjaGFydEluZGV4U3RhcnQsXG4gICAgICAgICAgICAgICAgY2hhcnRJbmRleEVuZFxuICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgIHJldHVybiBkMy5tYXgodmFsdWVBcnJheSwgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjdXJyZW50TWF4WVwiLCBjdXJyZW50TWF4WSlcblxuICAgICAgICB9XG5cbiAgICAgICAgdXBkYXRlQ3VycmVudE1heFkoKTtcblxuICAgICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICAgIC8vIGN1cnJlbnRNYXhZID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uICh0ZXJtU2xpY2UpIHtcblxuICAgICAgICAvLyAgIGxldCB2YWx1ZUFycmF5ID0gdGVybVNsaWNlLnZhbHVlcy5zbGljZShjaGFydEluZGV4U3RhcnQsIGNoYXJ0SW5kZXhFbmQpO1xuICAgXG4gICAgICAgIC8vICAgcmV0dXJuIGQzLm1heCh2YWx1ZUFycmF5LCBmdW5jdGlvbiAodikge1xuICAgICAgICAvLyAgICAgcmV0dXJuIHYucG9pbnQ7XG4gICAgICAgIC8vICAgfSk7XG4gICAgICAgIC8vIH0pO1xuICAgICAgICBcbiAgICAgICAgLy8gc2V0IGRvbWFpbiBhbmQgcmFuZ2Ugb2YgeC1heGlzXG4gICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzXG4gICAgICAgICAgICAuc2NhbGVUaW1lKClcbiAgICAgICAgICAgIC5kb21haW4oW2NoYXJ0U3RhcnREYXRlLCBjaGFydEVuZERhdGVdKVxuICAgICAgICAgICAgLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgXG4gICAgICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBjdXJyZW50TWF4WV0pLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgICAgICBcbiAgICAgICAgLy8gYWRkIGxhYmVsIGNvb3JkaW5hdGVzIHRvIGRhdGFzZXQncyB0ZXJtU2xpY2VzXG4gICAgICAgIGFkZExhYmVsQ29vcmRzKGRhdGEsIGNoYXJ0SW5kZXhFbmQsIDEyLCB4U2NhbGUsIHlTY2FsZSk7XG4gICAgICAgIFxuICAgICAgICAvLyBBWEVTXG4gICAgICAgIGNvbnN0IHhBeGlzID0gZDMuYXhpc0JvdHRvbSh4U2NhbGUpXG4gICAgICAgIC8vIC5zY2FsZSh4U2NhbGUpXG4gICAgICAgIFxuICAgICAgICB4QXhpcy50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgICAgIC50aWNrU2l6ZU91dGVyKDApO1xuICAgICAgICBcbiAgICAgICAgY29uc3QgeUF4aXMgPSBkMy5heGlzTGVmdCgpXG4gICAgICAgICAgICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1ZhbHVlcyhbXSlcbiAgICAgICAgICAgICAgICAgICAgICAudGlja1NpemVPdXRlcigwKVxuICAgICAgICBcbiAgICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICAgIGNvbnN0IHlBeGlzR3JpZCA9IGQzXG4gICAgICAgICAgICAuYXhpc0xlZnQoKVxuICAgICAgICAgICAgLnNjYWxlKHlTY2FsZSlcbiAgICAgICAgICAgIC50aWNrU2l6ZSgtd2lkdGgpXG4gICAgICAgICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW2N1cnJlbnRNYXhZLyAzLCAyICogY3VycmVudE1heFkgLyAzLCBjdXJyZW50TWF4WV0pXG4gICAgICAgICAgICAudGlja1NpemVPdXRlcigwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgICAgY29uc3Qgc3ZnID0gZDNcbiAgICAgICAgICAgIC5zZWxlY3QodGhpcylcbiAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJjaGFydFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICAgICAgICAgIC5hdHRyKFxuICAgICAgICAgICAgXCJ2aWV3Qm94XCIsXG4gICAgICAgICAgICBgLSR7YWRqICogMn0gLSR7YWRqICogM30gJHt3aWR0aCArIGFkaiAqIDEwfSAke2hlaWdodCArIGFkaiAqIDJ9YFxuICAgICAgICAgICAgKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICBcbiAgICAgICAgLy8gZHJhdyB4LWF4aXNcbiAgICAgICAgc3ZnXG4gICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcIngtYXhpc1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgICAgIC5jYWxsKHhBeGlzKTsgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICAgICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRlc3RcIiwgZDMuc2VsZWN0QWxsKFwiZy50aWNrOmxhc3Qtb2YtdHlwZVwiKSlcblxuICAgICAgICAvLyBkcmF3IHktYXhpc1xuICAgICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAgIC8vIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgIC8vIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgLy8gLmF0dHIoXCJ5XCIsIC00MClcbiAgICAgICAgLy8gLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cblxuICAgICAgICAvLyBhcHBlbmQgY2xpcCBwYXRoXG4gICAgICAgIGNvbnN0IGNsaXAgPSBzdmcuYXBwZW5kKFwiZGVmc1wiKVxuICAgICAgICAgICAgLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImlkXCIsIFwiZGF0ZS1jbGlwXCIpXG4gICAgICAgICAgICAuYXBwZW5kKFwicmVjdFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIHhTY2FsZShjaGFydFN0YXJ0RGF0ZSkpXG4gICAgICAgICAgICAvLyAgIC5hdHRyKFwieFwiLCB4U2NhbGUoc3RhcnREYXRlKSlcbiAgICAgICAgICAgIC5hdHRyKFwieVwiLCB5U2NhbGUoY3VycmVudE1heFkpKVxuICAgICAgICAgICAgLy8gICAuYXR0cihcInlcIiwgeVNjYWxlKG1heFkgLSBtaWRNYXgpKVxuICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCk7XG4gICAgICAgIFxuICAgICAgICAvLyBkcmF3IGxpbmVzXG4gICAgICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgICAgICAgLmxpbmUoKVxuXG4gICAgICAgICAgICAueChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpO1xuICAgICAgICAgICAgLy8gcmV0dXJuIGRbMF07XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnkoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgIHJldHVybiB5U2NhbGUodi5wb2ludCk7XG4gICAgICAgICAgICAvLyByZXR1cm4gZFsxXTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyAuY3VydmUoZDMgLmN1cnZlQ2F0bXVsbFJvbS5hbHBoYSgwLjUpKTtcbiAgICAgICAgICAgIC5jdXJ2ZShkMy5jdXJ2ZUJhc2lzKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuICAgICAgICBcbiAgICAgICAgbGluZXNcbiAgICAgICAgICAgIC5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGBsaW5lIGxpbmUtJHtpfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgICAgICAgIC8vICAgcmV0dXJuIGxpbmUoZC5zcGxpbmVkKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjZGF0ZS1jbGlwKVwiKTtcblxuICAgICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgICBsaW5lc1xuICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIHJldHVybiBg4oe9ICAgICAgICR7ZC50ZXJtfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgdHJhbnNsYXRlKCR7ZC5sYWJlbFh9LCAke2QubGFiZWxZfSlgO1xuICAgICAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxYID0geFNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgICAgICAgICAgICAgLy8gY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW2xhc3RJbmRleF0ucG9pbnQpO1xuICAgICAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICAgICAgfSlcblxuICAgICAgICBjb25zdCBob3ZlckxpbmVzID0gbGluZXNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGxpbmUoZC5zcGxpbmVkKX0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpfSlcblxuXG4gICAgICAgIGNvbnN0IHQgPSBkMy50cmFuc2l0aW9uKClcbiAgICAgICAgLmVhc2UoZDMuZWFzZUN1YmljKVxuICAgICAgICAuZGVsYXkoMTAwMClcbiAgICAgICAgLmR1cmF0aW9uKDUwMDApXG5cbiAgICBcbiAgICAgICAgZnVuY3Rpb24gdXBkYXRlQ2hhcnQobmV3U3RhcnREYXRlLCBuZXdFbmREYXRlKSB7XG5cbiAgICAgICAgICAgIHN2Zy5zZWxlY3RBbGwoXCIqXCIpLmludGVycnVwdCgpO1xuXG5cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiQ0hBUlQgSVMgVVBEQVRJTkdcIilcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ2hhcnRcIixkMy5zZWxlY3Rpb24uZXZlbnQpXG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGNvbnN0IGV4dGVudCA9IFtuZXdTdGFydERhdGUsIG5ld0VuZERhdGVdO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHRlbnRcIiwgZXh0ZW50KVxuXG4gICAgICAgICAgICAvLyBjb25zdCB0ZXN0MSA9IHhTY2FsZS5pbnZlcnQoZXh0ZW50WzBdKVxuICAgICAgICAgICAgLy8gY29uc3QgdGVzdDIgPSB4U2NhbGUuaW52ZXJ0KGV4dGVudFsxXSlcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ2hhcnRcIiwgdGVzdDEsIHRlc3QyKVxuICAgICAgICAgICAgY2hhcnRTdGFydERhdGUgPSBuZXdTdGFydERhdGU7XG4gICAgICAgICAgICBjaGFydEVuZERhdGUgPSBuZXdFbmREYXRlO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFtjaGFydFN0YXJ0RGF0ZSwgY2hhcnRFbmREYXRlXSlcblxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ4IGF4aXNcIiwgc3ZnLnNlbGVjdChcIi54LWF4aXNcIikpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInggYXhpc1wiLCB4QXhpcylcblxuICAgICAgICAgICAgc3ZnLnNlbGVjdChcIi54LWF4aXNcIikudHJhbnNpdGlvbih0KS5jYWxsKHhBeGlzKTtcbiAgICAgICAgICAgIC8vIHN2Zy5zZWxlY3QoXCIueC1heGlzXCIpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5jYWxsKHhBeGlzKTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdXBkYXRlQ3VycmVudE1heFkoKTtcbiAgICAgICAgICAgIFxuICAgICAgXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLCBjdXJyZW50TWF4WV0pO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBsaW5lcy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICAgICAgLy8gLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKVxuICAgICAgICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIGxpbmVzXG4gICAgICAgICAgICAgIC5zZWxlY3RBbGwoXCIuaG92ZXItbGluZVwiKVxuICAgICAgICAgICAgLy8gICAudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApXG4gICAgICAgICAgICAgICAgLnRyYW5zaXRpb24odClcbiAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICBhZGRMYWJlbENvb3JkcyhkYXRhLCBjaGFydEluZGV4RW5kLCAxMiwgeFNjYWxlLCB5U2NhbGUpO1xuXG4gICAgICAgICAgICBsaW5lcy5zZWxlY3RBbGwoXCIubGFiZWxcIilcbiAgICAgICAgICAgIC8vIC50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMClcbiAgICAgICAgICAgICAgICAudHJhbnNpdGlvbih0KVxuICAgICAgICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0aW5kZXhlbmRcIiwgY2hhcnRJbmRleEVuZClcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgLy8gLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKVxuXG5cbiAgICAgICAgfVxuICAgIFxuICAgIC8vIHVwZGF0ZUNoYXJ0KHN0YXJ0RGF0ZSwgZW5kRGF0ZSkgXG5cbiAgICBzdmcuYXR0cihcImNsaXAtcGF0aFwiLCBcInVybCgjZGF0ZS1jbGlwKVwiKS5zdHlsZSgnZmlsbCcsIFwibGlnaHRncmV5XCIpO1xuICAgIFxuICAgIHN2Z1xuICAgICAgLnNlbGVjdEFsbChcIi5ob3Zlci1saW5lLCAubGFiZWwsIC5saW5lXCIpXG4gICAgICAub24oXCJtb3VzZW92ZXJcIiwgZnVuY3Rpb24gKGQsIGksIG5vZGVzKSB7XG4gICAgICAgIC8vICAgY29uc29sZS5sb2coXCJtb3VzaW5cIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ0aGlzXCIsIHRoaXMpICBcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJkXCIsIGQpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIm5vZGVzXCIsIG5vZGVzKVxuICAgICAgICBcbiAgICAgICAgLy8gbm9kZXMgPSBbbGluZSgwKSwgbGFiZWwoMCksIGhvdmVyLWxpbmUoMCksIGxpbmUoMSksIGxhYmVsKDEpLCBob3Zlci1saW5lKDEpLi4uXVxuICAgICAgICBjb25zdCBzZWxlY3RlZF9pID0gTWF0aC5mbG9vcihpLzMpXG4gICAgICAgIFxuICAgICAgICAvLyBpbmNyZWFzZSBvcGFjaXR5IG9mIGJvdGggbGluZSBhbmQgbGFiZWxcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkM1xuICAgICAgICAgIC5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX0sIC5sYWJlbC0ke3NlbGVjdGVkX2l9YClcbiAgICAgICAgICAucmFpc2UoKVxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSlcbiAgICAgICAgXG4gICAgICAgIHNlbGVjdGVkLnRyYW5zaXRpb24oKVxuXG4gICAgICAgIC8vIGFwcGx5IHRoaWNrZXIgc3Ryb2tlIG9ubHkgdG8gbGluZVxuICAgICAgICBkMy5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX1gKS5zdHlsZShcInN0cm9rZS13aWR0aFwiLCA1KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidHJhbnNpdGlvblwiLHQpXG4gICAgICAgIFxuICAgIH0pXG4gICAgLm9uKFwibW91c2VvdXRcIiwgZnVuY3Rpb24gKGQsIGksIG5vZGVzKSB7XG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3Vzb3V0XCIsIGkpXG4gICAgXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkX2kgPSBNYXRoLmZsb29yKGkgLyAzKTtcblxuICAgICAgICBjb25zdCBzZWxlY3RlZCA9IGQzXG4gICAgICAgICAgLnNlbGVjdEFsbChgLmxpbmUtJHtzZWxlY3RlZF9pfSwgLmxhYmVsLSR7c2VsZWN0ZWRfaX1gKVxuICAgICAgICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMC40KVxuICAgICAgICAgIC5zdHlsZShcInN0cm9rZS13aWR0aFwiLCAxKTtcblxuICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKCk7XG4gICAgfSk7XG4gICAgXG4gICAgXG4gICAgbGV0IHNjcm9sbFRvcCA9IDA7XG4gICAgbGV0IG5ld1Njcm9sbFRvcCA9IDA7XG5cbiAgICBsZXQgdGhpbmcgPSBkMy5zZWxlY3QoXCIjZ3JhcGgtMVwiKTtcbiAgICAvLyBsZXQgdGhpbmcgPSBkMy5zZWxlY3QoXCIjdGV4dC0xXCIpO1xuICAgIC8vIGxldCB0aGluZyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3JhcGgtMVwiKTtcblxuICAgIC8vIGNvbnNvbGUubG9nKFwidGhpbmdcIiwgdGhpbmcpXG4gICAgLy8gY29uc29sZS5sb2coXCJpbm5lclwiLCB3aW5kb3cuaW5uZXJIZWlnaHQsIHdpbmRvdy5pbm5lcldpZHRoKVxuXG4gICAgbGV0IEhFSUdIVCA9IHdpbmRvdy5pbm5lckhlaWdodFxuICAgIGxldCBXSURUSCA9IHdpbmRvdy5pbm5lcldpZHRoXG5cbiAgICAvLyBsZXQgY3J1Y2lhbFRleHQgPSBkMy5zZWxlY3RBbGwoXCIjcGFuZWxcIikuZmlsdGVyKGZ1bmN0aW9uKGQsIGkpIHsgcmV0dXJuIGkgPT09IDB9KVxuICAgIGxldCBjcnVjaWFsVGV4dCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwicGFuZWxcIikuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJwXCIpWzBdXG4gICAgLy8gY29uc29sZS5sb2coXCJjcnVjaWFsIHRleHRcIiwgY3J1Y2lhbFRleHQpXG4gICAgLy8gY29uc29sZS5sb2coXCJjcnVjaWFsIHRvcFwiLCBjcnVjaWFsVG9wKVxuICAgIFxuICAgIC8vIHRoaW5nLmFkZEV2ZW50TGlzdGVuZXIoJ3Njcm9sbCcsIGZ1bmN0aW9uKGUpe1xuICAgIC8vICAgICBsZXQgY3J1Y2lhbFRvcCA9IGNydWNpYWxUZXh0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgIC8vICAgICBjb25zb2xlLmxvZygneScsIGNydWNpYWxUb3ApXG4gICAgLy8gICAgIGlmKGNydWNpYWxUb3AueSAtIFdJRFRIIDwgMCkge1xuXG4gICAgLy8gICAgICAgICB1cGRhdGVDaGFydChzdGFydERhdGUsIGVuZERhdGUpXG4gICAgLy8gICAgIH1cbiAgICAvLyB9KVxuXG5cbiAgICAvLyBsZXQgZm9yd2FyZCA9IHVwZGF0ZUNoYXJ0OyBcbiAgICAvLyBsZXQgYmFja3dhcmQ7XG5cbiAgICB0aGluZy5vbihcInNjcm9sbC5zY3JvbGxlclwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJzY3Jvb29vb2xpbmdcIilcbiAgICAgICAgbmV3U2Nyb2xsVG9wID0gdGhpbmcubm9kZSgpLnNjcm9sbFRvcFxuICAgICAgICBcbiAgICAgICAgLy8gbGV0IGFjdGlvbiA9IHVwZGF0ZUNoYXJ0O1xuICAgICAgICBjb25zb2xlLmxvZyhcIm5ld1Njcm9sbFRvcFwiLCBuZXdTY3JvbGxUb3ApXG4gICAgICAgIGlmIChzY3JvbGxUb3AgPD0gNjAgJiZuZXdTY3JvbGxUb3AgPiA2MCkge1xuICAgICAgICAgICAgdXBkYXRlQ2hhcnQoc3RhcnREYXRlLCBlbmREYXRlKTtcbiAgICAgICAgICAgIC8vIGJhY2t3YXJkID0gdXBkYXRlQ2hhcnQ7XG4gICAgICAgICAgICAvLyBmb3J3YXJkKHN0YXJ0RGF0ZSwgZW5kRGF0ZSk7XG4gICAgICAgICAgICAvLyBmb3J3YXJkID0gZnVuY3Rpb24oKSB7fTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgXG4gICAgICAgIGlmICggc2Nyb2xsVG9wID49IDU5ICYmIG5ld1Njcm9sbFRvcCA8IDU5KSB7XG4gICAgICAgICAgICB1cGRhdGVDaGFydChzdGFydERhdGUsIG1pZERhdGUpO1xuICAgICAgICAgICAgLy8gZm9yd2FyZCA9IHVwZGF0ZUNoYXJ0O1xuICAgICAgICAgICAgLy8gYmFja3dhcmQoc3RhcnREYXRlLCBtaWREYXRlKTtcbiAgICAgICAgICAgIC8vIGJhY2t3YXJkID0gZnVuY3Rpb24gKCkge307XG4gICAgICAgIH1cbiAgICAgICAgc2Nyb2xsVG9wID0gbmV3U2Nyb2xsVG9wXG4gICAgfSk7XG4gICAgXG5cbiAgICBcblxuICAgIFxuICAgIH0pO1xuXG5cbiAgICB9XG5cbiAgLy8gYWNjZXNzb3IgLyBzZXR0ZXIgZnVuY3Rpb25zIGZvciB3aWR0aCBhbmQgaGVpZ2h0XG4gIGRyYXcud2lkdGggPSBmdW5jdGlvbiAodmFsdWUpIHtcbiAgICBpZiAoIWFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIHJldHVybiB3aWR0aDtcbiAgICB9XG5cbiAgICB3aWR0aCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIGRyYXcuaGVpZ2h0ID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0O1xuICAgIH1cblxuICAgIGhlaWdodCA9IHZhbHVlO1xuICAgIHJldHVybiBkcmF3O1xuICB9O1xuXG4gIC8vIHJldHVybiBkcmF3IGZ1bmN0aW9uXG4gIHJldHVybiBkcmF3O1xufVxuIiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vcmVmZXJlbmNlcy96X2V4YW1wbGUuanNcIjtcbmltcG9ydCBzaW1wbGVfZXhhbXBsZSBmcm9tIFwiLi9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzXCI7XG5cbi8vIGRhdGFcbmltcG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IGZyb20gXCIuL2RhdGEvZGF0YVRyYW5zZm9ybWVyLmpzXCI7XG5pbXBvcnQgeyAkMjAxOSwgJDIwMTlfc2VhcmNoVGVybXMsICQyMDE5X3NwbGl0UXVlcmllcyB9IGZyb20gXCIuL2RhdGEvdGVybXMuanNcIjtcblxuLy8gZDMgY2hhcnRcbmltcG9ydCB7IGNoYXJ0VGVtcGxhdGUgfSBmcm9tIFwiLi9kcmF3Q2hhcnQuanNcIjtcblxuaW1wb3J0ICcuLi9kaXN0L2Fzc2V0cy9zdHlsZXMvc3R5bGVzLnNjc3MnO1xuXG4vLyAvLyB0byBpbGx1c3RyYXRlIHN2ZyBwYXRoIG1pbmktbGFuZ3VhZ2Vcbi8vIC8vIGNvbnN0IGlsbHVzdHJhdGlvbiA9IHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4vLyAgICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuXG4vLyAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcblxuLy8gLy8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICBcbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIFxuICAvLy8vIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGNvbnN0ICQyMDE5X3JldHJpZXZlclByb21pc2VzID0gcmV0cmlldmVyKCQyMDE5X3NwbGl0UXVlcmllc1swXSk7XG4gIGNvbnNvbGUubG9nKFwiJDIwMTlfcmV0cmlldmVyUHJvbWlzZXNcIiwgJDIwMTlfcmV0cmlldmVyUHJvbWlzZXMpXG4gIFxuICAvLyBDQUxMIERSQVcgQ0hBUlQgRlVOQ1RJT05cbiAgY29uc29sZS5sb2coXCIkMjAxOV9zcGxpdHF1ZXJpZXNcIiwgJDIwMTlfc3BsaXRRdWVyaWVzKVxuICBcblxuICBjcmVhdGVEYXRhc2V0KCQyMDE5X3NwbGl0UXVlcmllc1sxXSwkMjAxOV9zcGxpdFF1ZXJpZXNbMl0sICQyMDE5X3JldHJpZXZlclByb21pc2VzKVxuICAudGhlbigoZCkgPT4ge1xuICAgICAgY29uc29sZS5sb2coXCJkYXRhc2V0XCIsIGQpXG4gICAgICBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGQpLmNhbGwoY2hhcnRUZW1wbGF0ZSgpKVxuICAgIH0pXG4gICAgXG5cbiAgLy8gc2ltcGxlX2V4YW1wbGUoKTtcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuXG59KTtcblxuXG4gIFxuICBcbi8vICAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2ludGVyYWN0aXZlXVBPSU5UUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbi8vICAgLy8gbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4vLyAgIC8vICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudmFsdWVzIH0pXG4vLyAgIC8vICAgLmVudGVyKClcbi8vICAgLy8gICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4vLyAgIC8vICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuLy8gICAvLyAgIC5hdHRyKFwiclwiLCAxKVxuLy8gICAvLyAgIC5hdHRyKFwiY2xhc3NcIiwgXCJwb2ludFwiKVxuLy8gICAvLyAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMSk7XG5cblxuIiwiLy8gZnVuY3Rpb24gdG8gc2VwYXJhdGUgb3V0IGxhYmVscyB0aGF0IG92ZXJsYXBcbmZ1bmN0aW9uIGFkZExhYmVsQ29vcmRzKGRhdGEsIGNoYXJ0SW5kZXhFbmQsIHNwYWNlLCB4U2NhbGUsIHlTY2FsZSkge1xuICBcbiAgbGV0IG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuXG4gIGxldCB5TGFiZWxWYWx1ZXMgPSBbXTtcbiAgbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gW107XG5cbiAgLy8gbGV0IHlMYWJlbFZhbHVlcyA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcbiAgLy8gbGV0IHlMYWJlbFZhbHVlc09yaWdpbmFsID0gZGF0YS5tYXAoZnVuY3Rpb24oZCkge1xuICAvLyAgIHJldHVybiBkO1xuICAvLyB9KVxuXG4gIGRhdGEuZm9yRWFjaChmdW5jdGlvbiAocykge1xuICAgIGxldCBsYXN0SW5kZXggPSBjaGFydEluZGV4RW5kIC0gMTtcblxuICAgIHMubGFiZWxYID0geFNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgcy5sYWJlbFkgPSB5U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCk7XG4gICAgLy8gaWYgdXNpbmcgbWF4IHZhbHVlIG9mIHRlcm0ncyBwb2ludCBhcyBsYWJlbFlcbiAgICAvLyBzLmxhYmVsWSA9IHlTY2FsZShkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAvLyAgIHJldHVybiB2LnBvaW50O1xuICAgIC8vIH0pIC0gMik7XG5cbiAgICB5TGFiZWxWYWx1ZXMucHVzaChzLmxhYmVsWSk7XG4gICAgeUxhYmVsVmFsdWVzT3JpZ2luYWwucHVzaChzLmxhYmVsWSk7XG4gIH0pO1xuXG4gIHdoaWxlICghbm9Db2xsaXNpb25zKSB7XG4gICAgbm9Db2xsaXNpb25zID0gdHJ1ZTtcblxuICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MSwgaSkgPT4ge1xuICAgICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYyLCBqKSA9PiB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgbGV0IHlEaWZmID0gTWF0aC5hYnMoeUxhYmVsVmFsdWVzW2pdIC0geUxhYmVsVmFsdWVzW2ldKTtcbiAgICAgICAgbGV0IGFkZERpZmYgPSBzcGFjZSAtIHlEaWZmO1xuXG4gICAgICAgIC8vIGxldCBtb3ZpbmdZID0geUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gPj0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPyBqIDogaTtcblxuICAgICAgICBpZiAoaSAhPT0gaiAmJiB5RGlmZiA8IHNwYWNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJqIGhpdFwiLCBpLCBqKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlEaWZmXCIseURpZmYpXG4gICAgICAgICAgbGV0IGdyZWF0ZXJJbmRleCA9XG4gICAgICAgICAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSAtIHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID4gMCA/IGogOiBpO1xuXG4gICAgICAgICAgeUxhYmVsVmFsdWVzW2dyZWF0ZXJJbmRleF0gKz0gYWRkRGlmZjtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZWRcIiwgeUxhYmVsVmFsdWVzKVxuICAgICAgICAgIG5vQ29sbGlzaW9ucyA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxuXG4gIC8vIGNvbnNvbGUubG9nKHlMYWJlbFZhbHVlcyk7XG5cbiAgLy8gcmV0dXJuIHlMYWJlbFZhbHVlcztcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMsIGkpIHtcbiAgICBzLmxhYmVsWSA9IHlMYWJlbFZhbHVlc1tpXTtcbiAgfSk7XG5cblxuICBcbn1cblxuXG4vLyBhZGRMYWJlbENvb3JkcyhbMCwgMywgNiwgOSwgMTIsIDE1XSlcbi8vIGFkZExhYmVsQ29vcmRzKFs0LCAzLCAxLCA1NSwgMiwgMV0pXG4vLyBbMTMsIDEwLDEsIDU1LCA3LCA0XVxuXG5tb2R1bGUuZXhwb3J0cyA9IHsgYWRkTGFiZWxDb29yZHMgfTsiLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0X2Z1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IDk2MDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA1O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gNTtcbiAgICAgICAgY29uc3QgYWRqID0gMzA7XG5cbiAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBTVkcgZmlyc3QgLSBlZGl0ZWQgYWRqXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgKC0xICogYWRqKSArIFwiIFwiICsgKC0xICogYWRqKSArIFwiIFwiICsgKHdpZHRoICsgMyAqIGFkaikgKyBcIiBcIiArIChoZWlnaHQgKyAzICogYWRqKSlcbiAgICAgICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVkLSViLSVZXCIpO1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gZDMuY3N2KFwiLi9kaXN0L2Fzc2V0cy90ZXN0LmNzdlwiKTtcblxuICAgICAgICBkYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9kYXRhXCIsIGRhdGEpXG4gICAgICAgICAgICBjb25zdCBzbGljZXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiArZFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnNcIiwgZGF0YS5jb2x1bW5zKTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzIHdpdGhvdXQgZGF0ZVwiLCBkYXRhLmNvbHVtbnMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgc2xpY2VkIGRhdGFzZXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9zbGljZXNcIiwgc2xpY2VzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGUgZWxlbWVudFwiLHNsaWNlc1swXS52YWx1ZXNbMF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFxuICAgICAgICAgICAgICAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCxcbiAgICAgICAgICAgICAgICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybnMgdW5kZWZpbmVkOlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleGFtcGxlX3hTY2FsZVwiLCB4U2NhbGUoKSk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCB5YXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhheGlzID0gZDNcbiAgICAgICAgICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gICAgICAgICAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAgICAgICAgICAgICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLm1lYXN1cmVtZW50KTsgfSk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh4YXhpcyk7XG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh5YXhpcylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHNsaWNlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBpZHMpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwic2VyaWVfbGFiZWxcIilcbiAgICAgICAgICAgICAgICAvLyAuZGF0dW0oZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIGlkZTogZC5pZCxcbiAgICAgICAgICAgICAgICAvLyAgICAgICAgIHZhbHVlZTogZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV1cbiAgICAgICAgICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgICAgICAgICAvLyB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArICh4U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0uZGF0ZSkgKyAxMClcbiAgICAgICAgICAgICAgICAgICAgICAgICsgXCIsXCIgKyAoeVNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLm1lYXN1cmVtZW50KSArIDUpICsgXCIpXCI7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInhcIiwgNSlcbiAgICAgICAgICAgICAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gKFwiU2VyaWUgXCIpICsgZC5pZCB9KVxuICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiY2xhc3NcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gZC52YWx1ZSB9IClcbiAgICAgICAgfSk7XG5cbiAgICAvLyB9KVxufSIsIlxuY29uc3QgZGF0YSA9IFszLCA2NiwgMiwgNzYsIDUsIDIwLCAxLCAzMCwgNTAsIDksIDgwLCA1LCA3XTtcbmNvbnN0IHRlcnIgPSBbNSwgNSwgNSwgNSwgODAsIDgwLCAyLCAzLCAxLCAyLCA2MCwgMSwgMiwgMzNdXG5jb25zdCBmbG93ZXIgPSBbWzUsIDVdLCBbMSwgMl0sIFs4MCwgODBdXVxuY29uc3QgYmVlID0gW3t2YWx1ZTogNywgbGFiZWw6Mn0sIHt2YWx1ZTogMSwgbGFiZWw6IDN9XVxuXG5mdW5jdGlvbiBjaGFydEEgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJ0aGlzIGlzIGNoYXJ0QVwiKVxuXG4gICAgbGV0IHdpZHRoID0gMjA7XG4gICAgbGV0IGhlaWdodCA9IDIwMDtcblxuICAgIGNvbnN0IHggPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMV0pLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgIGNvbnN0IHkgPSBkMy5zY2FsZUxpbmVhcigpLmRvbWFpbihbMCwgMTAwXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgIC5saW5lKClcbiAgICAgIC54KGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgIHJldHVybiB4KGkpO1xuICAgICAgfSlcbiAgICAgIC55KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiB5KGQpO1xuICAgICAgfSk7XG5cblxuICAgIGZ1bmN0aW9uIG15KHNlbGVjdGlvbikge1xuXG4gICAgICAgIGNvbnNvbGUubG9nKFwicmV0dXJuaW5nIG15XCIpXG5cbiAgICAgICAgc2VsZWN0aW9uLmVhY2goZnVuY3Rpb24gKGRhdGEpIHtcblxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ0aGlzXCIsIHRoaXMpXG4gICAgICAgICAgICBjb25zdCBzY2FsZXRlc3QgPSBkMy5taW4oZGF0YSwgZnVuY3Rpb24oZCl7XG4gICAgICAgICAgICAgIHJldHVybiBkLnZhbHVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInNjYWxldGVzdFwiLCBzY2FsZXRlc3QpXG5cbiAgICAgICAgICAgIC8vIFwidGhpc1wiIGlzIHRoZSBzZWxlY3RlZCBlbGVtZW50IChpbiB0aGlzIGNhc2UsIGRpdiB3aXRoIGlkPVwiI2NvbnRhaW5lclwiKVxuICAgICAgICAgICAgY29uc3QgY2hhcnQgPSBkMy5zZWxlY3QodGhpcylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImNoYXJ0XCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aCAqIGRhdGEubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpXG4gICAgXG4gICAgICAgICAgICBcblxuICAgICAgICAgICAgY2hhcnQuYXBwZW5kKFwicGF0aFwiKS5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoc3RyYXdiZXJyeSkge1xuICAgICAgICAgICAgICByZXR1cm4gbGluZShkYXRhKTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgfSlcblxuICAgIH1cblxuICAgIG15LndpZHRoID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gd2lkdGg7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB3aWR0aCA9IHZhbHVlO1xuICAgICAgICByZXR1cm4gbXk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbXkuaGVpZ2h0ID0gZnVuY3Rpb24odmFsdWUpIHtcbiAgICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gaGVpZ2h0O1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgaGVpZ2h0ID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gbXk7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2ltcGxlX2V4YW1wbGUgKCkge1xuXG4gICAgY29uc29sZS5sb2coXCJzaW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyB3aWR0aFwiLCBjaGFydEEoKS53aWR0aCgpKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRBJ3MgbXlcIiwgY2hhcnRBKCkpXG4gICAgXG4gICAgLy8gY29uc3QgY2hhcnRCID0gY2hhcnRBKCkuaGVpZ2h0KDMwMClcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIG15XCIsIGNoYXJ0QilcbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QidzIGhlaWdodFwiLCBjaGFydEIuaGVpZ2h0KCkpXG5cbiAgICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmRhdHVtKGRhdGEpLmNhbGwoY2hhcnRBKCkpXG5cbiAgLy8gZDMuc2VsZWN0KFwiI2NvbnRhaW5lcjJcIikuZGF0dW0oYmVlKS5jYWxsKGNoYXJ0QSgpKVxuXG5cbn0iXSwic291cmNlUm9vdCI6IiJ9