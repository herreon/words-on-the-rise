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
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@100;300;400&family=\\aillium+Web:wght@300&display=swap);"]);
exports.push([module.i, "@import url(https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@100;300;400&family=Titillium+Web:wght@300&display=swap);"]);
// Module
exports.push([module.i, "/* http://meyerweb.com/eric/tools/css/reset/ \n   v2.0 | 20110126\n   License: none (public domain)\n*/\nhtml, body, div, span, applet, object, iframe,\nh1, h2, h3, h4, h5, h6, p, blockquote, pre,\na, abbr, acronym, address, big, cite, code,\ndel, dfn, em, img, ins, kbd, q, s, samp,\nsmall, strike, strong, sub, sup, tt, var,\nb, u, i, center,\ndl, dt, dd, ol, ul, li,\nfieldset, form, label, legend,\ntable, caption, tbody, tfoot, thead, tr, th, td,\narticle, aside, canvas, details, embed,\nfigure, figcaption, footer, header, hgroup,\nmenu, nav, output, ruby, section, summary,\ntime, mark, audio, video {\n  margin: 0;\n  padding: 0;\n  border: 0;\n  font-size: 100%;\n  font: inherit;\n  vertical-align: baseline; }\n\n/* HTML5 display-role reset for older browsers */\narticle, aside, details, figcaption, figure,\nfooter, header, hgroup, menu, nav, section {\n  display: block; }\n\nbody {\n  line-height: 1; }\n\nol, ul {\n  list-style: none; }\n\nblockquote, q {\n  quotes: none; }\n\nblockquote:before, blockquote:after,\nq:before, q:after {\n  content: '';\n  content: none; }\n\ntable {\n  border-collapse: collapse;\n  border-spacing: 0; }\n\n@use \"sass:list\";\npath {\n  fill: none;\n  stroke: black; }\n\n/* variables */\n#container svg {\n  padding: 20px; }\n\n/* AXES */\n/* ticks */\n.axis {\n  stroke: #706f6f;\n  stroke-width: 0.5;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .tick {\n  stroke-dasharray: 5, 5;\n  stroke: #D4D9E2;\n  stroke-opacity: 0.3;\n  shape-rendering: crispEdges; }\n\n.y-axis-grid .domain {\n  stroke-opacity: 0; }\n\n/* .axis line {\nstroke: #706f6f;\nstroke-width: 0.5;\nshape-rendering: crispEdges;\n} */\n/* axis contour */\n.axis path {\n  stroke: #706f6f;\n  stroke-width: 0.7;\n  shape-rendering: crispEdges; }\n\n/* axis text */\n.axis text {\n  fill: #2b2929;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 110%; }\n\n/* LINE CHART */\n/* line */\n.line-0, .label-0 {\n  fill: none;\n  stroke: #E15D20;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-0 {\n  fill: #E15D20;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-1, .label-1 {\n  fill: none;\n  stroke: #B50001;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-1 {\n  fill: #B50001;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-2, .label-2 {\n  fill: none;\n  stroke: #00A608;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-2 {\n  fill: #00A608;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-3, .label-3 {\n  fill: none;\n  stroke: #1B3CF0;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-3 {\n  fill: #1B3CF0;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-4, .label-4 {\n  fill: none;\n  stroke: #00A6CC;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-4 {\n  fill: #00A6CC;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-5, .label-5 {\n  fill: none;\n  stroke: #831794;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-5 {\n  fill: #831794;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-6, .label-6 {\n  fill: none;\n  stroke: #DBAE7E;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-6 {\n  fill: #DBAE7E;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-7, .label-7 {\n  fill: none;\n  stroke: #F6B2D5;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-7 {\n  fill: #F6B2D5;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line-8, .label-8 {\n  fill: none;\n  stroke: #FF0100;\n  opacity: 0.5;\n  cursor: default;\n  padding: 1000px; }\n\n.label-8 {\n  fill: #FF0100;\n  font-family: \"Roboto\", sans-serif;\n  font-size: 70%;\n  text-transform: uppercase; }\n\n.line {\n  stroke-width: 1; }\n\n.hover-line {\n  fill: none;\n  stroke: #d2d2d2;\n  opacity: 0;\n  stroke-width: 20; }\n\n.label {\n  padding: 100;\n  font-size: 12px; }\n\n/* interactive elements */\n/* TOOLTIP */\n.tooltip {\n  fill: #2b2929;\n  font-family: arial;\n  font-size: 20px; }\n\n/* POINTS */\n.point {\n  stroke: none;\n  fill: #9c9c9c; }\n\n/* for experimenting - coloring elements */\n/* svg {\n    background-color: orange;\n} */\n#intro {\n  background-color: white;\n  height: 100vh;\n  width: 100%;\n  padding: 0px 60px 0px 30px;\n  box-sizing: border-box;\n  display: flex; }\n\n#title, #text-1 {\n  font-family: 'Roboto', sans-serif;\n  font-weight: 300;\n  line-height: 1.6; }\n\n#title {\n  width: 60%;\n  display: flex;\n  flex-direction: column;\n  padding: 100px 0 100px 0;\n  box-sizing: border-box;\n  text-align: left;\n  justify-content: center;\n  text-align: center; }\n\n#title h1 {\n  font-family: 'Titillium Web', sans-serif;\n  font-size: 60px;\n  color: #062f87;\n  line-height: 1;\n  box-sizing: border-box;\n  margin-bottom: 20px; }\n\n#title p:last-of-type {\n  padding: 0 10% 0 10%; }\n\n#subtitle {\n  font-style: italic;\n  font-size: 14px;\n  padding-bottom: 60px; }\n\n#text-1 {\n  width: 40%;\n  box-sizing: border-box;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center; }\n\n#text-1 > a {\n  text-decoration: none;\n  box-sizing: border-box;\n  text-align: center;\n  width: 300px;\n  padding: 10px;\n  margin-right: 30px;\n  background-color: #cfecf8;\n  font-weight: bold;\n  border-radius: 25px; }\n\n#text-1 > a:hover {\n  background-color: #8bd3ee;\n  color: white;\n  font-weight: normal; }\n\n#graph-1 {\n  display: flex; }\n\n.svg-container {\n  width: 720px;\n  height: 480px;\n  background-color: yellow;\n  position: sticky;\n  top: 0px; }\n\n#panel {\n  padding: 25vh 10vh 25vh 10vh; }\n\n#banner-1, #banner-2 {\n  background-color: red;\n  height: 80px;\n  width: 100%; }\n\nhtml {\n  scroll-behavior: smooth; }\n", ""]);
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

      Object(_labelCoords_js__WEBPACK_IMPORTED_MODULE_0__["addLabelCoords"])(data, 12, xScale, yScale); // AXES

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
      } // updateChart() 


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

  var $2019_retrieverPromises = Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["retriever"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][0]);
  console.log("$2019_retrieverPromises", $2019_retrieverPromises); // CALL DRAW CHART FUNCTION

  console.log("$2019_splitqueries", _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"]);
  Object(_data_dataTransformer_js__WEBPACK_IMPORTED_MODULE_2__["createDataset"])(_data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][1], _data_terms_js__WEBPACK_IMPORTED_MODULE_3__["$2019_splitQueries"][2], $2019_retrieverPromises).then(function (d) {
    d3.select("#container").datum(d).call(Object(_drawChart_js__WEBPACK_IMPORTED_MODULE_4__["chartTemplate"])());
  }); // const zoom = d3.zoom()
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
  //  d3.select("#svg").on("mouseover", function (d, i) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzPzBhNWEiLCJ3ZWJwYWNrOi8vLy4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovLy8uL3NyYy9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZGF0YS90ZXJtcy5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvZHJhd0NoYXJ0LmpzIiwid2VicGFjazovLy8uL3NyYy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zcmMvbGFiZWxDb29yZHMuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzIiwid2VicGFjazovLy8uL3NyYy9yZWZlcmVuY2VzL3pfc2ltcGxlLmpzIl0sIm5hbWVzIjpbInRpbWVDb252IiwiZDMiLCJ0aW1lUGFyc2UiLCJyZXRyaWV2ZXIiLCJxdWVyeVN1YnNldHMiLCJyZXRyaWV2ZXJQcm9taXNlcyIsImZvckVhY2giLCJzcGxpdFF1ZXJ5IiwiaW5kZXgiLCJwdXNoIiwianNvbiIsImNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UiLCJkYXRhc2V0IiwiaW50ZXJ2YWwiLCJ0ZXJtU2xpY2UiLCJhdmVyYWdlcyIsInZhbHVlcyIsIm1hcCIsInYiLCJpIiwibW92aW5nVG90YWwiLCJzbGljZSIsInBvaW50IiwibW92aW5nQXZlcmFnZSIsIk1hdGgiLCJyb3VuZCIsImRhdGUiLCJjcmVhdGVEYXRhc2V0IiwicXVlcmllc0FycmF5IiwidGVybXNBcnJheSIsImFycmF5T2ZQcm9taXNlcyIsImNhbGlicmF0ZSIsInJhd2RhdGFTbGljZSIsInJhd2RhdGFJbmRleCIsInJWYWx1ZUluZGV4IiwibnVtZXJhdG9yIiwiZGVub21pbmF0b3IiLCJ2YWx1ZSIsInJhdGlvIiwiZ2V0RGF0YSIsInByb21pc2UiLCJwcm9taXNlSW5kZXgiLCJ0aGVuIiwicmF3ZGF0YSIsImluY3JlbWVudCIsIm1heE51bU9mUXVlcmllcyIsImxlbmd0aCIsInF1ZXJpZXNBcnJheUluZGV4IiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwibmV3UHJvbWlzZXNBcnJheSIsImZpcnN0U3Vic2V0IiwicmVtYWluaW5nUHJvbWlzZXMiLCJQcm9taXNlIiwiYWxsIiwicmVzIiwiJDIwMTkiLCJvbmVIaXQiLCIkMjAxOCIsIiQyMDE3IiwiJDIwMTYiLCIkMjAxNSIsInNlYXJjaFRlcm1zR2VuZXJhdG9yIiwiYXJyYXkiLCJzZWFyY2hUZXJtcyIsInNwbGl0dGVyIiwiam9pbkluZGV4Iiwiam9pblRlcm0iLCJzcGxpY2UiLCJncm91cCIsInF1ZXJ5U3Vic2V0IiwiY29uY2F0IiwiJDIwMTlfc2VhcmNoVGVybXMiLCIkMjAxOV9zcGxpdFF1ZXJpZXMiLCJtb2R1bGUiLCJleHBvcnRzIiwiY2hhcnRUZW1wbGF0ZSIsIndpZHRoIiwiaGVpZ2h0IiwiYWRqIiwiZHJhdyIsInNlbGVjdGlvbiIsImVhY2giLCJkYXRhIiwic3RhcnREYXRlIiwibWluIiwiZCIsImVuZERhdGUiLCJtYXgiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJkb21haW4iLCJyYW5nZSIsIm1heFkiLCJzIiwieVNjYWxlIiwic2NhbGVMaW5lYXIiLCJyYW5nZVJvdW5kIiwiYWRkTGFiZWxDb29yZHMiLCJ4QXhpcyIsImF4aXNCb3R0b20iLCJ0aWNrcyIsInRpbWVNb250aCIsImV2ZXJ5IiwidGlja0Zvcm1hdCIsInRpbWVGb3JtYXQiLCJ0aWNrU2l6ZU91dGVyIiwieUF4aXMiLCJheGlzTGVmdCIsInNjYWxlIiwidGlja1ZhbHVlcyIsInlBeGlzR3JpZCIsInRpY2tTaXplIiwic3ZnIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsIm1pZERhdGUiLCJEYXRlIiwibWlkTWF4IiwiZmlsdGVyIiwidmFsIiwiY29uc29sZSIsImxvZyIsImNsaXAiLCJjYWxsIiwibGluZSIsIngiLCJ5IiwiY3VydmUiLCJjdXJ2ZUJhc2lzIiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInRleHQiLCJsYWJlbFgiLCJsYWJlbFkiLCJob3ZlckxpbmVzIiwidXBkYXRlQ2hhcnQiLCJuZXdTdGFydERhdGUiLCJuZXdFbmREYXRlIiwibmV3U3RhcnRJbmRleCIsIm5ld0VuZEluZGV4IiwidHJhbnNpdGlvbiIsImRlbGF5Iiwic3R5bGUiLCJvbiIsIm5vZGVzIiwic2VsZWN0ZWRfaSIsImZsb29yIiwic2VsZWN0ZWQiLCJyYWlzZSIsImFyZ3VtZW50cyIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsIiQyMDE5X3JldHJpZXZlclByb21pc2VzIiwiZGF0dW0iLCJzcGFjZSIsIm5vQ29sbGlzaW9ucyIsInlMYWJlbFZhbHVlcyIsInlMYWJlbFZhbHVlc09yaWdpbmFsIiwibGFzdEluZGV4IiwidjEiLCJ2MiIsImoiLCJ5RGlmZiIsImFicyIsImFkZERpZmYiLCJncmVhdGVySW5kZXgiLCJ0ZXN0X2Z1bmN0aW9uIiwibWFyZ2luIiwicGFkZGluZyIsImNsYXNzZWQiLCJjc3YiLCJzbGljZXMiLCJjb2x1bW5zIiwiaWQiLCJtZWFzdXJlbWVudCIsImV4dGVudCIsImMiLCJ5YXhpcyIsInhheGlzIiwidGltZURheSIsImlkcyIsInRlcnIiLCJmbG93ZXIiLCJiZWUiLCJsYWJlbCIsImNoYXJ0QSIsIm15Iiwic2NhbGV0ZXN0IiwiY2hhcnQiLCJzdHJhd2JlcnJ5Iiwic2ltcGxlX2V4YW1wbGUiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNB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QUNELEtBRkQsTUFFTztBQUNMQSxXQUFLLEdBQUd4QyxLQUFSO0FBQ0EsYUFBT3dKLEVBQVA7QUFDRDtBQUNGLEdBUEQ7O0FBU0FBLElBQUUsQ0FBQy9HLE1BQUgsR0FBWSxVQUFTekMsS0FBVCxFQUFnQjtBQUMxQixRQUFJLENBQUNtSCxTQUFTLENBQUMxRyxNQUFmLEVBQXVCO0FBQ3JCLGFBQU9nQyxNQUFQO0FBQ0QsS0FGRCxNQUVPO0FBQ0xBLFlBQU0sR0FBR3pDLEtBQVQ7QUFDQSxhQUFPd0osRUFBUDtBQUNEO0FBQ0YsR0FQRDs7QUFTQSxTQUFPQSxFQUFQO0FBQ0g7O0FBR2MsU0FBU0ksY0FBVCxHQUEyQjtBQUV0Q3ZFLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDhCQUFaLEVBRnNDLENBSXRDO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUVGO0FBR0QsQyIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsInZhciBhcGkgPSByZXF1aXJlKFwiIS4uLy4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiKTtcbiAgICAgICAgICAgIHZhciBjb250ZW50ID0gcmVxdWlyZShcIiEhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Nhc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGVzLnNjc3NcIik7XG5cbiAgICAgICAgICAgIGNvbnRlbnQgPSBjb250ZW50Ll9fZXNNb2R1bGUgPyBjb250ZW50LmRlZmF1bHQgOiBjb250ZW50O1xuXG4gICAgICAgICAgICBpZiAodHlwZW9mIGNvbnRlbnQgPT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgIGNvbnRlbnQgPSBbW21vZHVsZS5pZCwgY29udGVudCwgJyddXTtcbiAgICAgICAgICAgIH1cblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5pbnNlcnQgPSBcImhlYWRcIjtcbm9wdGlvbnMuc2luZ2xldG9uID0gZmFsc2U7XG5cbnZhciB1cGRhdGUgPSBhcGkoY29udGVudCwgb3B0aW9ucyk7XG5cblxuXG5tb2R1bGUuZXhwb3J0cyA9IGNvbnRlbnQubG9jYWxzIHx8IHt9OyIsIi8vIEltcG9ydHNcbnZhciBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gPSByZXF1aXJlKFwiLi4vLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiKTtcbmV4cG9ydHMgPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oZmFsc2UpO1xuZXhwb3J0cy5wdXNoKFttb2R1bGUuaWQsIFwiQGltcG9ydCB1cmwoaHR0cHM6Ly9mb250cy5nb29nbGVhcGlzLmNvbS9jc3MyP2ZhbWlseT1Sb2JvdG8rTW9ubzp3Z2h0QDMwMCZmYW1pbHk9Um9ib3RvOndnaHRAMTAwOzMwMDs0MDAmZmFtaWx5PVxcXFxhaWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG5leHBvcnRzLnB1c2goW21vZHVsZS5pZCwgXCJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2NzczI/ZmFtaWx5PVJvYm90bytNb25vOndnaHRAMzAwJmZhbWlseT1Sb2JvdG86d2dodEAxMDA7MzAwOzQwMCZmYW1pbHk9VGl0aWxsaXVtK1dlYjp3Z2h0QDMwMCZkaXNwbGF5PXN3YXApO1wiXSk7XG4vLyBNb2R1bGVcbmV4cG9ydHMucHVzaChbbW9kdWxlLmlkLCBcIi8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxcbiAgIHYyLjAgfCAyMDExMDEyNlxcbiAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXFxuKi9cXG5odG1sLCBib2R5LCBkaXYsIHNwYW4sIGFwcGxldCwgb2JqZWN0LCBpZnJhbWUsXFxuaDEsIGgyLCBoMywgaDQsIGg1LCBoNiwgcCwgYmxvY2txdW90ZSwgcHJlLFxcbmEsIGFiYnIsIGFjcm9ueW0sIGFkZHJlc3MsIGJpZywgY2l0ZSwgY29kZSxcXG5kZWwsIGRmbiwgZW0sIGltZywgaW5zLCBrYmQsIHEsIHMsIHNhbXAsXFxuc21hbGwsIHN0cmlrZSwgc3Ryb25nLCBzdWIsIHN1cCwgdHQsIHZhcixcXG5iLCB1LCBpLCBjZW50ZXIsXFxuZGwsIGR0LCBkZCwgb2wsIHVsLCBsaSxcXG5maWVsZHNldCwgZm9ybSwgbGFiZWwsIGxlZ2VuZCxcXG50YWJsZSwgY2FwdGlvbiwgdGJvZHksIHRmb290LCB0aGVhZCwgdHIsIHRoLCB0ZCxcXG5hcnRpY2xlLCBhc2lkZSwgY2FudmFzLCBkZXRhaWxzLCBlbWJlZCxcXG5maWd1cmUsIGZpZ2NhcHRpb24sIGZvb3RlciwgaGVhZGVyLCBoZ3JvdXAsXFxubWVudSwgbmF2LCBvdXRwdXQsIHJ1YnksIHNlY3Rpb24sIHN1bW1hcnksXFxudGltZSwgbWFyaywgYXVkaW8sIHZpZGVvIHtcXG4gIG1hcmdpbjogMDtcXG4gIHBhZGRpbmc6IDA7XFxuICBib3JkZXI6IDA7XFxuICBmb250LXNpemU6IDEwMCU7XFxuICBmb250OiBpbmhlcml0O1xcbiAgdmVydGljYWwtYWxpZ246IGJhc2VsaW5lOyB9XFxuXFxuLyogSFRNTDUgZGlzcGxheS1yb2xlIHJlc2V0IGZvciBvbGRlciBicm93c2VycyAqL1xcbmFydGljbGUsIGFzaWRlLCBkZXRhaWxzLCBmaWdjYXB0aW9uLCBmaWd1cmUsXFxuZm9vdGVyLCBoZWFkZXIsIGhncm91cCwgbWVudSwgbmF2LCBzZWN0aW9uIHtcXG4gIGRpc3BsYXk6IGJsb2NrOyB9XFxuXFxuYm9keSB7XFxuICBsaW5lLWhlaWdodDogMTsgfVxcblxcbm9sLCB1bCB7XFxuICBsaXN0LXN0eWxlOiBub25lOyB9XFxuXFxuYmxvY2txdW90ZSwgcSB7XFxuICBxdW90ZXM6IG5vbmU7IH1cXG5cXG5ibG9ja3F1b3RlOmJlZm9yZSwgYmxvY2txdW90ZTphZnRlcixcXG5xOmJlZm9yZSwgcTphZnRlciB7XFxuICBjb250ZW50OiAnJztcXG4gIGNvbnRlbnQ6IG5vbmU7IH1cXG5cXG50YWJsZSB7XFxuICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgYm9yZGVyLXNwYWNpbmc6IDA7IH1cXG5cXG5AdXNlIFxcXCJzYXNzOmxpc3RcXFwiO1xcbnBhdGgge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogYmxhY2s7IH1cXG5cXG4vKiB2YXJpYWJsZXMgKi9cXG4jY29udGFpbmVyIHN2ZyB7XFxuICBwYWRkaW5nOiAyMHB4OyB9XFxuXFxuLyogQVhFUyAqL1xcbi8qIHRpY2tzICovXFxuLmF4aXMge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjU7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLnRpY2sge1xcbiAgc3Ryb2tlLWRhc2hhcnJheTogNSwgNTtcXG4gIHN0cm9rZTogI0Q0RDlFMjtcXG4gIHN0cm9rZS1vcGFjaXR5OiAwLjM7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4ueS1heGlzLWdyaWQgLmRvbWFpbiB7XFxuICBzdHJva2Utb3BhY2l0eTogMDsgfVxcblxcbi8qIC5heGlzIGxpbmUge1xcbnN0cm9rZTogIzcwNmY2ZjtcXG5zdHJva2Utd2lkdGg6IDAuNTtcXG5zaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7XFxufSAqL1xcbi8qIGF4aXMgY29udG91ciAqL1xcbi5heGlzIHBhdGgge1xcbiAgc3Ryb2tlOiAjNzA2ZjZmO1xcbiAgc3Ryb2tlLXdpZHRoOiAwLjc7XFxuICBzaGFwZS1yZW5kZXJpbmc6IGNyaXNwRWRnZXM7IH1cXG5cXG4vKiBheGlzIHRleHQgKi9cXG4uYXhpcyB0ZXh0IHtcXG4gIGZpbGw6ICMyYjI5Mjk7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDExMCU7IH1cXG5cXG4vKiBMSU5FIENIQVJUICovXFxuLyogbGluZSAqL1xcbi5saW5lLTAsIC5sYWJlbC0wIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNFMTVEMjA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMCB7XFxuICBmaWxsOiAjRTE1RDIwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtMSwgLmxhYmVsLTEge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0I1MDAwMTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC0xIHtcXG4gIGZpbGw6ICNCNTAwMDE7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS0yLCAubGFiZWwtMiB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjMDBBNjA4O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTIge1xcbiAgZmlsbDogIzAwQTYwODtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTMsIC5sYWJlbC0zIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICMxQjNDRjA7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtMyB7XFxuICBmaWxsOiAjMUIzQ0YwO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNCwgLmxhYmVsLTQge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogIzAwQTZDQztcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC00IHtcXG4gIGZpbGw6ICMwMEE2Q0M7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS01LCAubGFiZWwtNSB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjODMxNzk0O1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTUge1xcbiAgZmlsbDogIzgzMTc5NDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lLTYsIC5sYWJlbC02IHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNEQkFFN0U7XFxuICBvcGFjaXR5OiAwLjU7XFxuICBjdXJzb3I6IGRlZmF1bHQ7XFxuICBwYWRkaW5nOiAxMDAwcHg7IH1cXG5cXG4ubGFiZWwtNiB7XFxuICBmaWxsOiAjREJBRTdFO1xcbiAgZm9udC1mYW1pbHk6IFxcXCJSb2JvdG9cXFwiLCBzYW5zLXNlcmlmO1xcbiAgZm9udC1zaXplOiA3MCU7XFxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlOyB9XFxuXFxuLmxpbmUtNywgLmxhYmVsLTcge1xcbiAgZmlsbDogbm9uZTtcXG4gIHN0cm9rZTogI0Y2QjJENTtcXG4gIG9wYWNpdHk6IDAuNTtcXG4gIGN1cnNvcjogZGVmYXVsdDtcXG4gIHBhZGRpbmc6IDEwMDBweDsgfVxcblxcbi5sYWJlbC03IHtcXG4gIGZpbGw6ICNGNkIyRDU7XFxuICBmb250LWZhbWlseTogXFxcIlJvYm90b1xcXCIsIHNhbnMtc2VyaWY7XFxuICBmb250LXNpemU6IDcwJTtcXG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7IH1cXG5cXG4ubGluZS04LCAubGFiZWwtOCB7XFxuICBmaWxsOiBub25lO1xcbiAgc3Ryb2tlOiAjRkYwMTAwO1xcbiAgb3BhY2l0eTogMC41O1xcbiAgY3Vyc29yOiBkZWZhdWx0O1xcbiAgcGFkZGluZzogMTAwMHB4OyB9XFxuXFxuLmxhYmVsLTgge1xcbiAgZmlsbDogI0ZGMDEwMDtcXG4gIGZvbnQtZmFtaWx5OiBcXFwiUm9ib3RvXFxcIiwgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNzAlO1xcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTsgfVxcblxcbi5saW5lIHtcXG4gIHN0cm9rZS13aWR0aDogMTsgfVxcblxcbi5ob3Zlci1saW5lIHtcXG4gIGZpbGw6IG5vbmU7XFxuICBzdHJva2U6ICNkMmQyZDI7XFxuICBvcGFjaXR5OiAwO1xcbiAgc3Ryb2tlLXdpZHRoOiAyMDsgfVxcblxcbi5sYWJlbCB7XFxuICBwYWRkaW5nOiAxMDA7XFxuICBmb250LXNpemU6IDEycHg7IH1cXG5cXG4vKiBpbnRlcmFjdGl2ZSBlbGVtZW50cyAqL1xcbi8qIFRPT0xUSVAgKi9cXG4udG9vbHRpcCB7XFxuICBmaWxsOiAjMmIyOTI5O1xcbiAgZm9udC1mYW1pbHk6IGFyaWFsO1xcbiAgZm9udC1zaXplOiAyMHB4OyB9XFxuXFxuLyogUE9JTlRTICovXFxuLnBvaW50IHtcXG4gIHN0cm9rZTogbm9uZTtcXG4gIGZpbGw6ICM5YzljOWM7IH1cXG5cXG4vKiBmb3IgZXhwZXJpbWVudGluZyAtIGNvbG9yaW5nIGVsZW1lbnRzICovXFxuLyogc3ZnIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xcbn0gKi9cXG4jaW50cm8ge1xcbiAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XFxuICBoZWlnaHQ6IDEwMHZoO1xcbiAgd2lkdGg6IDEwMCU7XFxuICBwYWRkaW5nOiAwcHggNjBweCAwcHggMzBweDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4OyB9XFxuXFxuI3RpdGxlLCAjdGV4dC0xIHtcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxuICBsaW5lLWhlaWdodDogMS42OyB9XFxuXFxuI3RpdGxlIHtcXG4gIHdpZHRoOiA2MCU7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIHBhZGRpbmc6IDEwMHB4IDAgMTAwcHggMDtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWFsaWduOiBsZWZ0O1xcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7IH1cXG5cXG4jdGl0bGUgaDEge1xcbiAgZm9udC1mYW1pbHk6ICdUaXRpbGxpdW0gV2ViJywgc2Fucy1zZXJpZjtcXG4gIGZvbnQtc2l6ZTogNjBweDtcXG4gIGNvbG9yOiAjMDYyZjg3O1xcbiAgbGluZS1oZWlnaHQ6IDE7XFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcbiAgbWFyZ2luLWJvdHRvbTogMjBweDsgfVxcblxcbiN0aXRsZSBwOmxhc3Qtb2YtdHlwZSB7XFxuICBwYWRkaW5nOiAwIDEwJSAwIDEwJTsgfVxcblxcbiNzdWJ0aXRsZSB7XFxuICBmb250LXN0eWxlOiBpdGFsaWM7XFxuICBmb250LXNpemU6IDE0cHg7XFxuICBwYWRkaW5nLWJvdHRvbTogNjBweDsgfVxcblxcbiN0ZXh0LTEge1xcbiAgd2lkdGg6IDQwJTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICBkaXNwbGF5OiBmbGV4O1xcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjsgfVxcblxcbiN0ZXh0LTEgPiBhIHtcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxuICB3aWR0aDogMzAwcHg7XFxuICBwYWRkaW5nOiAxMHB4O1xcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xcbiAgYmFja2dyb3VuZC1jb2xvcjogI2NmZWNmODtcXG4gIGZvbnQtd2VpZ2h0OiBib2xkO1xcbiAgYm9yZGVyLXJhZGl1czogMjVweDsgfVxcblxcbiN0ZXh0LTEgPiBhOmhvdmVyIHtcXG4gIGJhY2tncm91bmQtY29sb3I6ICM4YmQzZWU7XFxuICBjb2xvcjogd2hpdGU7XFxuICBmb250LXdlaWdodDogbm9ybWFsOyB9XFxuXFxuI2dyYXBoLTEge1xcbiAgZGlzcGxheTogZmxleDsgfVxcblxcbi5zdmctY29udGFpbmVyIHtcXG4gIHdpZHRoOiA3MjBweDtcXG4gIGhlaWdodDogNDgwcHg7XFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB5ZWxsb3c7XFxuICBwb3NpdGlvbjogc3RpY2t5O1xcbiAgdG9wOiAwcHg7IH1cXG5cXG4jcGFuZWwge1xcbiAgcGFkZGluZzogMjV2aCAxMHZoIDI1dmggMTB2aDsgfVxcblxcbiNiYW5uZXItMSwgI2Jhbm5lci0yIHtcXG4gIGJhY2tncm91bmQtY29sb3I6IHJlZDtcXG4gIGhlaWdodDogODBweDtcXG4gIHdpZHRoOiAxMDAlOyB9XFxuXFxuaHRtbCB7XFxuICBzY3JvbGwtYmVoYXZpb3I6IHNtb290aDsgfVxcblwiLCBcIlwiXSk7XG4vLyBFeHBvcnRzXG5tb2R1bGUuZXhwb3J0cyA9IGV4cG9ydHM7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxuLypcbiAgTUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcbiAgQXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cbi8vIGNzcyBiYXNlIGNvZGUsIGluamVjdGVkIGJ5IHRoZSBjc3MtbG9hZGVyXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXNlU291cmNlTWFwKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IGNzc1dpdGhNYXBwaW5nVG9TdHJpbmcoaXRlbSwgdXNlU291cmNlTWFwKTtcblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgcmV0dXJuIFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChjb250ZW50LCBcIn1cIik7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBjb250ZW50O1xuICAgIH0pLmpvaW4oJycpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZnVuYy1uYW1lc1xuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gKG1vZHVsZXMsIG1lZGlhUXVlcnksIGRlZHVwZSkge1xuICAgIGlmICh0eXBlb2YgbW9kdWxlcyA9PT0gJ3N0cmluZycpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1wYXJhbS1yZWFzc2lnblxuICAgICAgbW9kdWxlcyA9IFtbbnVsbCwgbW9kdWxlcywgJyddXTtcbiAgICB9XG5cbiAgICB2YXIgYWxyZWFkeUltcG9ydGVkTW9kdWxlcyA9IHt9O1xuXG4gICAgaWYgKGRlZHVwZSkge1xuICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB0aGlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICB2YXIgaWQgPSB0aGlzW2ldWzBdO1xuXG4gICAgICAgIGlmIChpZCAhPSBudWxsKSB7XG4gICAgICAgICAgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpZF0gPSB0cnVlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IG1vZHVsZXMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19pXSk7XG5cbiAgICAgIGlmIChkZWR1cGUgJiYgYWxyZWFkeUltcG9ydGVkTW9kdWxlc1tpdGVtWzBdXSkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29udGludWVcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYVF1ZXJ5KSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYVF1ZXJ5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMl0gPSBcIlwiLmNvbmNhdChtZWRpYVF1ZXJ5LCBcIiBhbmQgXCIpLmNvbmNhdChpdGVtWzJdKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiBsaXN0O1xufTtcblxuZnVuY3Rpb24gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtLCB1c2VTb3VyY2VNYXApIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdIHx8ICcnOyAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLWRlc3RydWN0dXJpbmdcblxuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodXNlU291cmNlTWFwICYmIHR5cGVvZiBidG9hID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSB0b0NvbW1lbnQoY3NzTWFwcGluZyk7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCAnJykuY29uY2F0KHNvdXJjZSwgXCIgKi9cIik7XG4gICAgfSk7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoc291cmNlVVJMcykuY29uY2F0KFtzb3VyY2VNYXBwaW5nXSkuam9pbignXFxuJyk7XG4gIH1cblxuICByZXR1cm4gW2NvbnRlbnRdLmpvaW4oJ1xcbicpO1xufSAvLyBBZGFwdGVkIGZyb20gY29udmVydC1zb3VyY2UtbWFwIChNSVQpXG5cblxuZnVuY3Rpb24gdG9Db21tZW50KHNvdXJjZU1hcCkge1xuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdW5kZWZcbiAgdmFyIGJhc2U2NCA9IGJ0b2EodW5lc2NhcGUoZW5jb2RlVVJJQ29tcG9uZW50KEpTT04uc3RyaW5naWZ5KHNvdXJjZU1hcCkpKSk7XG4gIHZhciBkYXRhID0gXCJzb3VyY2VNYXBwaW5nVVJMPWRhdGE6YXBwbGljYXRpb24vanNvbjtjaGFyc2V0PXV0Zi04O2Jhc2U2NCxcIi5jb25jYXQoYmFzZTY0KTtcbiAgcmV0dXJuIFwiLyojIFwiLmNvbmNhdChkYXRhLCBcIiAqL1wiKTtcbn0iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIGlzT2xkSUUgPSBmdW5jdGlvbiBpc09sZElFKCkge1xuICB2YXIgbWVtbztcbiAgcmV0dXJuIGZ1bmN0aW9uIG1lbW9yaXplKCkge1xuICAgIGlmICh0eXBlb2YgbWVtbyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIFRlc3QgZm9yIElFIDw9IDkgYXMgcHJvcG9zZWQgYnkgQnJvd3NlcmhhY2tzXG4gICAgICAvLyBAc2VlIGh0dHA6Ly9icm93c2VyaGFja3MuY29tLyNoYWNrLWU3MWQ4NjkyZjY1MzM0MTczZmVlNzE1YzIyMmNiODA1XG4gICAgICAvLyBUZXN0cyBmb3IgZXhpc3RlbmNlIG9mIHN0YW5kYXJkIGdsb2JhbHMgaXMgdG8gYWxsb3cgc3R5bGUtbG9hZGVyXG4gICAgICAvLyB0byBvcGVyYXRlIGNvcnJlY3RseSBpbnRvIG5vbi1zdGFuZGFyZCBlbnZpcm9ubWVudHNcbiAgICAgIC8vIEBzZWUgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2stY29udHJpYi9zdHlsZS1sb2FkZXIvaXNzdWVzLzE3N1xuICAgICAgbWVtbyA9IEJvb2xlYW4od2luZG93ICYmIGRvY3VtZW50ICYmIGRvY3VtZW50LmFsbCAmJiAhd2luZG93LmF0b2IpO1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vO1xuICB9O1xufSgpO1xuXG52YXIgZ2V0VGFyZ2V0ID0gZnVuY3Rpb24gZ2V0VGFyZ2V0KCkge1xuICB2YXIgbWVtbyA9IHt9O1xuICByZXR1cm4gZnVuY3Rpb24gbWVtb3JpemUodGFyZ2V0KSB7XG4gICAgaWYgKHR5cGVvZiBtZW1vW3RhcmdldF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICB2YXIgc3R5bGVUYXJnZXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKHRhcmdldCk7IC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG5cbiAgICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAvLyBUaGlzIHdpbGwgdGhyb3cgYW4gZXhjZXB0aW9uIGlmIGFjY2VzcyB0byBpZnJhbWUgaXMgYmxvY2tlZFxuICAgICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIG1lbW9bdGFyZ2V0XSA9IHN0eWxlVGFyZ2V0O1xuICAgIH1cblxuICAgIHJldHVybiBtZW1vW3RhcmdldF07XG4gIH07XG59KCk7XG5cbnZhciBzdHlsZXNJbkRvbSA9IFtdO1xuXG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IHN0eWxlc0luRG9tLmxlbmd0aDsgaSsrKSB7XG4gICAgaWYgKHN0eWxlc0luRG9tW2ldLmlkZW50aWZpZXIgPT09IGlkZW50aWZpZXIpIHtcbiAgICAgIHJlc3VsdCA9IGk7XG4gICAgICBicmVhaztcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcblxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIgaXRlbSA9IGxpc3RbaV07XG4gICAgdmFyIGlkID0gb3B0aW9ucy5iYXNlID8gaXRlbVswXSArIG9wdGlvbnMuYmFzZSA6IGl0ZW1bMF07XG4gICAgdmFyIGNvdW50ID0gaWRDb3VudE1hcFtpZF0gfHwgMDtcbiAgICB2YXIgaWRlbnRpZmllciA9IFwiXCIuY29uY2F0KGlkLCBcIiBcIikuY29uY2F0KGNvdW50KTtcbiAgICBpZENvdW50TWFwW2lkXSA9IGNvdW50ICsgMTtcbiAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICB2YXIgb2JqID0ge1xuICAgICAgY3NzOiBpdGVtWzFdLFxuICAgICAgbWVkaWE6IGl0ZW1bMl0sXG4gICAgICBzb3VyY2VNYXA6IGl0ZW1bM11cbiAgICB9O1xuXG4gICAgaWYgKGluZGV4ICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRG9tW2luZGV4XS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlc0luRG9tLnB1c2goe1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiBhZGRTdHlsZShvYmosIG9wdGlvbnMpLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgc3R5bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzdHlsZScpO1xuICB2YXIgYXR0cmlidXRlcyA9IG9wdGlvbnMuYXR0cmlidXRlcyB8fCB7fTtcblxuICBpZiAodHlwZW9mIGF0dHJpYnV0ZXMubm9uY2UgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgdmFyIG5vbmNlID0gdHlwZW9mIF9fd2VicGFja19ub25jZV9fICE9PSAndW5kZWZpbmVkJyA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICAgIGlmIChub25jZSkge1xuICAgICAgYXR0cmlidXRlcy5ub25jZSA9IG5vbmNlO1xuICAgIH1cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGF0dHJpYnV0ZXMpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgIHN0eWxlLnNldEF0dHJpYnV0ZShrZXksIGF0dHJpYnV0ZXNba2V5XSk7XG4gIH0pO1xuXG4gIGlmICh0eXBlb2Ygb3B0aW9ucy5pbnNlcnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICBvcHRpb25zLmluc2VydChzdHlsZSk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIHRhcmdldCA9IGdldFRhcmdldChvcHRpb25zLmluc2VydCB8fCAnaGVhZCcpO1xuXG4gICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkbid0IGZpbmQgYSBzdHlsZSB0YXJnZXQuIFRoaXMgcHJvYmFibHkgbWVhbnMgdGhhdCB0aGUgdmFsdWUgZm9yIHRoZSAnaW5zZXJ0JyBwYXJhbWV0ZXIgaXMgaW52YWxpZC5cIik7XG4gICAgfVxuXG4gICAgdGFyZ2V0LmFwcGVuZENoaWxkKHN0eWxlKTtcbiAgfVxuXG4gIHJldHVybiBzdHlsZTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlKSB7XG4gIC8vIGlzdGFuYnVsIGlnbm9yZSBpZlxuICBpZiAoc3R5bGUucGFyZW50Tm9kZSA9PT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIHN0eWxlLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGUpO1xufVxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5cblxudmFyIHJlcGxhY2VUZXh0ID0gZnVuY3Rpb24gcmVwbGFjZVRleHQoKSB7XG4gIHZhciB0ZXh0U3RvcmUgPSBbXTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHJlcGxhY2UoaW5kZXgsIHJlcGxhY2VtZW50KSB7XG4gICAgdGV4dFN0b3JlW2luZGV4XSA9IHJlcGxhY2VtZW50O1xuICAgIHJldHVybiB0ZXh0U3RvcmUuZmlsdGVyKEJvb2xlYW4pLmpvaW4oJ1xcbicpO1xuICB9O1xufSgpO1xuXG5mdW5jdGlvbiBhcHBseVRvU2luZ2xldG9uVGFnKHN0eWxlLCBpbmRleCwgcmVtb3ZlLCBvYmopIHtcbiAgdmFyIGNzcyA9IHJlbW92ZSA/ICcnIDogb2JqLm1lZGlhID8gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKS5jb25jYXQob2JqLmNzcywgXCJ9XCIpIDogb2JqLmNzczsgLy8gRm9yIG9sZCBJRVxuXG4gIC8qIGlzdGFuYnVsIGlnbm9yZSBpZiAgKi9cblxuICBpZiAoc3R5bGUuc3R5bGVTaGVldCkge1xuICAgIHN0eWxlLnN0eWxlU2hlZXQuY3NzVGV4dCA9IHJlcGxhY2VUZXh0KGluZGV4LCBjc3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBjc3NOb2RlID0gZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKTtcbiAgICB2YXIgY2hpbGROb2RlcyA9IHN0eWxlLmNoaWxkTm9kZXM7XG5cbiAgICBpZiAoY2hpbGROb2Rlc1tpbmRleF0pIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKGNoaWxkTm9kZXNbaW5kZXhdKTtcbiAgICB9XG5cbiAgICBpZiAoY2hpbGROb2Rlcy5sZW5ndGgpIHtcbiAgICAgIHN0eWxlLmluc2VydEJlZm9yZShjc3NOb2RlLCBjaGlsZE5vZGVzW2luZGV4XSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHN0eWxlLmFwcGVuZENoaWxkKGNzc05vZGUpO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhcHBseVRvVGFnKHN0eWxlLCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IG9iai5jc3M7XG4gIHZhciBtZWRpYSA9IG9iai5tZWRpYTtcbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG5cbiAgaWYgKG1lZGlhKSB7XG4gICAgc3R5bGUuc2V0QXR0cmlidXRlKCdtZWRpYScsIG1lZGlhKTtcbiAgfSBlbHNlIHtcbiAgICBzdHlsZS5yZW1vdmVBdHRyaWJ1dGUoJ21lZGlhJyk7XG4gIH1cblxuICBpZiAoc291cmNlTWFwICYmIGJ0b2EpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgaWYgKHN0eWxlLnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZS5zdHlsZVNoZWV0LmNzc1RleHQgPSBjc3M7XG4gIH0gZWxzZSB7XG4gICAgd2hpbGUgKHN0eWxlLmZpcnN0Q2hpbGQpIHtcbiAgICAgIHN0eWxlLnJlbW92ZUNoaWxkKHN0eWxlLmZpcnN0Q2hpbGQpO1xuICAgIH1cblxuICAgIHN0eWxlLmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5cbnZhciBzaW5nbGV0b24gPSBudWxsO1xudmFyIHNpbmdsZXRvbkNvdW50ZXIgPSAwO1xuXG5mdW5jdGlvbiBhZGRTdHlsZShvYmosIG9wdGlvbnMpIHtcbiAgdmFyIHN0eWxlO1xuICB2YXIgdXBkYXRlO1xuICB2YXIgcmVtb3ZlO1xuXG4gIGlmIChvcHRpb25zLnNpbmdsZXRvbikge1xuICAgIHZhciBzdHlsZUluZGV4ID0gc2luZ2xldG9uQ291bnRlcisrO1xuICAgIHN0eWxlID0gc2luZ2xldG9uIHx8IChzaW5nbGV0b24gPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykpO1xuICAgIHVwZGF0ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgZmFsc2UpO1xuICAgIHJlbW92ZSA9IGFwcGx5VG9TaW5nbGV0b25UYWcuYmluZChudWxsLCBzdHlsZSwgc3R5bGVJbmRleCwgdHJ1ZSk7XG4gIH0gZWxzZSB7XG4gICAgc3R5bGUgPSBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucyk7XG4gICAgdXBkYXRlID0gYXBwbHlUb1RhZy5iaW5kKG51bGwsIHN0eWxlLCBvcHRpb25zKTtcblxuICAgIHJlbW92ZSA9IGZ1bmN0aW9uIHJlbW92ZSgpIHtcbiAgICAgIHJlbW92ZVN0eWxlRWxlbWVudChzdHlsZSk7XG4gICAgfTtcbiAgfVxuXG4gIHVwZGF0ZShvYmopO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlU3R5bGUobmV3T2JqKSB7XG4gICAgaWYgKG5ld09iaikge1xuICAgICAgaWYgKG5ld09iai5jc3MgPT09IG9iai5jc3MgJiYgbmV3T2JqLm1lZGlhID09PSBvYmoubWVkaWEgJiYgbmV3T2JqLnNvdXJjZU1hcCA9PT0gb2JqLnNvdXJjZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIHVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICByZW1vdmUoKTtcbiAgICB9XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307IC8vIEZvcmNlIHNpbmdsZS10YWcgc29sdXRpb24gb24gSUU2LTksIHdoaWNoIGhhcyBhIGhhcmQgbGltaXQgb24gdGhlICMgb2YgPHN0eWxlPlxuICAvLyB0YWdzIGl0IHdpbGwgYWxsb3cgb24gYSBwYWdlXG5cbiAgaWYgKCFvcHRpb25zLnNpbmdsZXRvbiAmJiB0eXBlb2Ygb3B0aW9ucy5zaW5nbGV0b24gIT09ICdib29sZWFuJykge1xuICAgIG9wdGlvbnMuc2luZ2xldG9uID0gaXNPbGRJRSgpO1xuICB9XG5cbiAgbGlzdCA9IGxpc3QgfHwgW107XG4gIHZhciBsYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucyk7XG4gIHJldHVybiBmdW5jdGlvbiB1cGRhdGUobmV3TGlzdCkge1xuICAgIG5ld0xpc3QgPSBuZXdMaXN0IHx8IFtdO1xuXG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChuZXdMaXN0KSAhPT0gJ1tvYmplY3QgQXJyYXldJykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGFzdElkZW50aWZpZXJzLmxlbmd0aDsgaSsrKSB7XG4gICAgICB2YXIgaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tpXTtcbiAgICAgIHZhciBpbmRleCA9IGdldEluZGV4QnlJZGVudGlmaWVyKGlkZW50aWZpZXIpO1xuICAgICAgc3R5bGVzSW5Eb21baW5kZXhdLnJlZmVyZW5jZXMtLTtcbiAgICB9XG5cbiAgICB2YXIgbmV3TGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKG5ld0xpc3QsIG9wdGlvbnMpO1xuXG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG5cbiAgICAgIHZhciBfaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihfaWRlbnRpZmllcik7XG5cbiAgICAgIGlmIChzdHlsZXNJbkRvbVtfaW5kZXhdLnJlZmVyZW5jZXMgPT09IDApIHtcbiAgICAgICAgc3R5bGVzSW5Eb21bX2luZGV4XS51cGRhdGVyKCk7XG5cbiAgICAgICAgc3R5bGVzSW5Eb20uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgbGFzdElkZW50aWZpZXJzID0gbmV3TGFzdElkZW50aWZpZXJzO1xuICB9O1xufTsiLCJpbXBvcnQgeyAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi90ZXJtcy5qc1wiO1xuXG4vLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZTsgc3RvcmUgZGF0YSBpbiB2YXJpYWJsZSBkYXRhQVxuY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG5cblxuLy8gZnVuY3Rpb24gcmV0cmlldmVyIHN0b3JlcyBwcm9taXNlcyB0aGF0IGZldGNoIGRhdGEgZnJvbSB0aGUgZmlsZSB0aGF0IFxuLy8gY29ycmVzcG9uZHMgdG8gdGhlIGluZGV4IGluIHRoZSBhcnJheSBxdWVyeVN1YnNldHMuXG4vLyBJbnB1dCBhcmcgXCJxdWVyaWVzQXJyYXlcIiBpcyBhIFwidGVybXMtb25seVwiIGFycmF5IChlLmcuICQyMDE5KVxuLy8gSW5wdXQgYXJyYXkgXCJxdWVyeVN1YnNldHNcIiBjb250YWlucyBzdWJzZXRzIG9mIHF1ZXJpZXMsIHJldHVybmVkIGZyb20gZnVuY3Rpb24gc3BsaXR0ZXIgaW4gdGVybXMuanNcbmZ1bmN0aW9uIHJldHJpZXZlciAocXVlcnlTdWJzZXRzKSB7XG4gIGNvbnN0IHJldHJpZXZlclByb21pc2VzID0gW107XG5cbiAgcXVlcnlTdWJzZXRzLmZvckVhY2goKHNwbGl0UXVlcnksIGluZGV4KSA9PiB7XG4gICAgLy8gbGV0IGRhdGFzZXROYW1lID0gYGRhdGFzZXRfJHtpbmRleH1gO1xuICAgIHJldHJpZXZlclByb21pc2VzLnB1c2goZDMuanNvbihgLi9kaXN0L2Fzc2V0cy9kYXRhLzIwMTlfJHtpbmRleH0uanNvbmApKTtcbiAgfSk7XG5cbiAgcmV0dXJuIHJldHJpZXZlclByb21pc2VzO1xufVxuXG5cbi8vIGZ1bmN0aW9uIHRvIGNoYW5nZSBhbGwgcG9pbnQgdmFsdWVzIHRvIGEgbW92aW5nIGF2ZXJhZ2UgKG9mIGludGVydmFsID0geCB3ZWVrcylcbmZ1bmN0aW9uIGNoYW5nZVlUb01vdmluZ0F2ZXJhZ2UgKGRhdGFzZXQpIHtcbiAgICAvLyBpbnRlcnZhbCBpcyB0aGUgbnVtIHdlZWtzIG92ZXIgd2hpY2ggdGhlIG1vdmluZ0F2ZXJhZ2UgaXMgY2FsY3VsYXRlZFxuICAgIGNvbnN0IGludGVydmFsID0gNjtcblxuICAgIGRhdGFzZXQuZm9yRWFjaChmdW5jdGlvbiAodGVybVNsaWNlKSB7XG5cbiAgICAgIC8vIGNvbnN0IGF2ZXJhZ2VDaGVja2VyID0gW107XG4gICAgICBcbiAgICAgIGNvbnN0IGF2ZXJhZ2VzID0gdGVybVNsaWNlLnZhbHVlcy5tYXAoZnVuY3Rpb24gKHYsIGkpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJ2XCIsIHYpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiaVwiLCBpKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImQudmFsdWVzXCIsIGQudmFsdWVzKVxuXG4gICAgICAgIGlmIChpIDwgaW50ZXJ2YWwpIHtcbiAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgbW92aW5nVG90YWwgPSAwO1xuXG4gICAgICAgIHRlcm1TbGljZS52YWx1ZXMuc2xpY2UoaSAtIGludGVydmFsLCBpKS5mb3JFYWNoKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgbW92aW5nVG90YWwgKz0gdi5wb2ludDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgY29uc3QgbW92aW5nQXZlcmFnZSA9IE1hdGgucm91bmQobW92aW5nVG90YWwgLyBpbnRlcnZhbCk7XG5cbiAgICAgICAgLy8gYXZlcmFnZUNoZWNrZXIucHVzaChbdi5wb2ludCwgbW92aW5nQXZlcmFnZV0pXG5cbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJtb3ZpbmdUb3RhbFwiLCBtb3ZpbmdUb3RhbCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW92aW5nQXZlcmFnZVwiLCBtb3ZpbmdBdmVyYWdlKTtcblxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgIGRhdGU6IHYuZGF0ZSxcbiAgICAgICAgICBwb2ludDogbW92aW5nQXZlcmFnZSxcbiAgICAgICAgfTtcbiAgICAgIH0pO1xuICAgIC8vICAgY29uc29sZS5sb2coXCJhdmVyYWdlc1wiLGF2ZXJhZ2VDaGVja2VyKVxuICAgICAgdGVybVNsaWNlLnZhbHVlcyA9IGF2ZXJhZ2VzLnNsaWNlKGludGVydmFsKTtcbiAgICB9KTtcbn1cblxuXG4vLyByZXR1cm5zIGEgcHJvbWlzZSB0aGF0IGNyZWF0ZXMgdGhlIGRhdGFzZXQgZm9yIHRoZSBkMyBjaGFydCBkcmF3aW5nIGZ1bmN0aW9uIHRvIHVzZVxuLy8gdGFrZXMgaW4gaW5wdXQgYXJncyB0aGF0IHdlcmUgcmV0dXJuZWQgZnJvbSB0aGUgZnVuY3Rpb24gXCJyZXRyaWV2ZXJcIlxuZnVuY3Rpb24gY3JlYXRlRGF0YXNldCAocXVlcmllc0FycmF5LCB0ZXJtc0FycmF5LCBhcnJheU9mUHJvbWlzZXMpIHtcbiAgICBcbiAgLy8gdGhpcyB3aWxsIHN0b3JlIHRoZSBkYXRhc2V0IGZvciBkMyB0byB1c2VcbiAgY29uc3QgZGF0YXNldCA9IFtdO1xuXG4gIC8vIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCBvZiBlYWNoIHRlcm1cbiAgLy8gbGV0IG1haW5JbmRleCA9IDA7XG5cbiAgLy8gcmV0dXJucyB0aGUgYXBwcm9wcmlhdGUgcmVsYXRpdmUgdmFsdWUgb2YgZWFjaCB0ZXJtIGluIGEgcXVlcnlTdWJzZXQsIFxuICAvLyB1c2luZyB0aGUgcG9pbnQgdmFsdWUgb2YgdGhlIGNvbW1vbiBxdWVyeSBhcyBhIHJlZmVyZW5jZVxuICBmdW5jdGlvbiBjYWxpYnJhdGUocmF3ZGF0YVNsaWNlLCByYXdkYXRhSW5kZXgsIHJWYWx1ZUluZGV4KSB7XG4gICAgICBcbiAgICAgIGxldCBudW1lcmF0b3IgPSBkYXRhc2V0WzBdLnZhbHVlc1tyYXdkYXRhSW5kZXhdLnBvaW50OyAvLyBjb21wYXJpc29uIHZhbHVlIGluIHByZXZpb3VzIHByb21pc2UgKGFscmVhZHkgaW4gdmFyIGRhdGFzZXQpXG4gICAgICBsZXQgZGVub21pbmF0b3IgPSByYXdkYXRhU2xpY2UudmFsdWVbMF07IC8vIGNvbXBhcmlzb24gdmFsdWUgaW4gY3VycmVudCBwcm9taXNlXG4gICAgICBsZXQgcmF0aW87XG4gICAgICBcbiAgICAgIGlmIChkZW5vbWluYXRvciA9PT0gMCkge1xuICAgICAgcmF0aW8gPSAwO1xuICAgICAgfSBlbHNlIHtyYXRpbyA9IG51bWVyYXRvciAvIGRlbm9taW5hdG9yO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gTWF0aC5yb3VuZCgrcmF3ZGF0YVNsaWNlLnZhbHVlW3JWYWx1ZUluZGV4XSAqIHJhdGlvKTtcbiAgfVxuXG5cbiAgLy8gdGFrZXMgaW4gYSBwcm9taXNlLCBhbmQgaXRzIGluZGV4IGluIHRoZSBhcnJheU9mUHJvbWlzZXMgKHRvIHRlbGwgaWYgaXQgd2lsbCBhY2Nlc3MgdGhlIGZpcnN0IG9yIHN1YnNlcXVlbnQgc3ViZGF0YXNldHMpXG4gIC8vIHJldHVybnMgYSBwcm9taXNlIHRoYXQgd3JpdGVzIHRoZSBkYXRhIGludG8gY29uc3QgXCJkYXRhc2V0XCIsIGluIGFwcHJvcHJpYXRlIGZvcm1hdCBcbiAgZnVuY3Rpb24gZ2V0RGF0YSAocHJvbWlzZSwgcHJvbWlzZUluZGV4KSB7XG5cbiAgICByZXR1cm4gcHJvbWlzZS50aGVuKGZ1bmN0aW9uKHJhd2RhdGEpIHtcbiAgICBcbiAgICAgIGxldCBpbmNyZW1lbnQgPSBwcm9taXNlSW5kZXggPT09IDAgPyAwIDogMTsgIC8vIGtlZXBzIHRyYWNrIG9mIHRoZSBpbmRleCB3aXRoaW4gZWFjaCBzdWJkYXRhc2V0XG4gICAgICBsZXQgbWF4TnVtT2ZRdWVyaWVzID0gNTsgLy8gbWF4IG51bSBvZiBxdWVyaWVzIGluIGEgc2luZ2xlIGNhbGwgdXNpbmcgR29vZ2xlIFRyZW5kcyBBUElcblxuICAgICAgd2hpbGUgKGluY3JlbWVudCA8IG1heE51bU9mUXVlcmllcyAmJiBkYXRhc2V0Lmxlbmd0aCA8IHF1ZXJpZXNBcnJheS5sZW5ndGgpIHtcblxuICAgICAgICBsZXQgcXVlcmllc0FycmF5SW5kZXggPSBwcm9taXNlSW5kZXggKiAobWF4TnVtT2ZRdWVyaWVzIC0gMSkgKyBpbmNyZW1lbnQ7XG5cbiAgICAgICAgLy8gZWFjaCBzbGljZSBjb250YWlucyBhbGwgaW5mbyBmb3IgYSB0ZXJtXG4gICAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICAgIHRlcm06IHRlcm1zQXJyYXlbcXVlcmllc0FycmF5SW5kZXhdLFxuICAgICAgICAgIHZhbHVlczogcmF3ZGF0YS5tYXAoZnVuY3Rpb24gKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4KSB7XG5cbiAgICAgICAgICAgICAgbGV0IHBvaW50ID1cbiAgICAgICAgICAgICAgICBwcm9taXNlSW5kZXggPT09IDAgPyArcmF3ZGF0YVNsaWNlLnZhbHVlW2luY3JlbWVudF1cbiAgICAgICAgICAgICAgICAgIDogY2FsaWJyYXRlKHJhd2RhdGFTbGljZSwgcmF3ZGF0YUluZGV4LCBpbmNyZW1lbnQpO1xuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihyYXdkYXRhU2xpY2UuZm9ybWF0dGVkQXhpc1RpbWUpLFxuXG4gICAgICAgICAgICAgIHBvaW50OiBwb2ludCxcbiAgICAgICAgXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgXG4gICAgICAgICAgfSksXG4gICAgICAgIH07XG5cbiAgICAgICAgZGF0YXNldC5wdXNoKHNsaWNlKTtcbiAgICAgICAgXG4gICAgICAgIGluY3JlbWVudCArPSAxO1xuICBcbiAgICAgIH1cbiAgICAgIHJldHVybiBkYXRhc2V0O1xuXG4gICAgfSlcblxuICB9IFxuXG5cbiAgLy8gZWFjaCBwcm9taXNlIHdpbGwgYmUgdHJhbnNmb3JtZWQgdG8gdGhlIGRhdGEtd3JpdGluZyBwcm9taXNlIGFuZCBzdG9yZWQgaW4gbmV3UHJvbWlzZXNBcnJheVxuICBjb25zdCBuZXdQcm9taXNlc0FycmF5ID0gYXJyYXlPZlByb21pc2VzLm1hcChmdW5jdGlvbihwcm9taXNlLCBpbmRleCkge1xuICAgICAgcmV0dXJuIGdldERhdGEocHJvbWlzZSwgaW5kZXgpO1xuICB9KVxuXG4gIHJldHVybiBuZXdQcm9taXNlc0FycmF5WzBdLnRoZW4oZmlyc3RTdWJzZXQgPT4ge1xuICAgICAgY29uc3QgcmVtYWluaW5nUHJvbWlzZXMgPSBuZXdQcm9taXNlc0FycmF5LnNsaWNlKDEpO1xuICAgICAgcmV0dXJuIFByb21pc2UuYWxsKHJlbWFpbmluZ1Byb21pc2VzKTtcbiAgfSlcbiAgLnRoZW4ocmVzID0+IHtcbiAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFzZXRcIiwgZGF0YXNldClcbiAgICBcbiAgICBjaGFuZ2VZVG9Nb3ZpbmdBdmVyYWdlKGRhdGFzZXQpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwiZGF0YXNldEFmdGVyIE1vdmluZ0F2ZXJhZ2VcIiwgZGF0YXNldClcblxuICAgIHJldHVybiBkYXRhc2V0O1xuICB9KVxuICBcbiAgXG59XG5cbmV4cG9ydCB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9O1xuLy8gbW9kdWxlLmV4cG9ydHMgPSB7IHJldHJpZXZlciwgY3JlYXRlRGF0YXNldCB9IiwiLy9cInRlcm1zLW9ubHlcIiBhcnJheXNcblxuY29uc3QgJDIwMTkgPSBbXG4gICAgXCJvayBib29tZXJcIixcbiAgICBcInZzY29cIixcbiAgICBcInNmc1wiLFxuICAgIFwiZnlwXCIsXG4gICAgXCJzL3VcIixcbiAgICBcIm5nbFwiLFxuICAgIFwic2ltcFwiLFxuICAgIFwiaXlreWtcIixcbiAgICBcInNiXCJcbiAgICAvLyBcImFuZCBpIG9vcFwiLFxuICAgIC8vIFwic2tza3NrXCIsXG4gICAgLy8gXCJ5a3R2XCJcbl1cblxuY29uc3Qgb25lSGl0ID0gW1wic2xhdHRcIiwgXCJhbnRzXCJdO1xuXG5cbmNvbnN0ICQyMDE4ID0gW1xuICBcImluY2VsXCIsXG4gIFwidXd1XCIsXG4gIFwibXVrYmFuZ1wiLFxuICBcImliZlwiLFxuICBcImJsb2NrY2hhaW5cIixcbiAgXCJybmdcIixcbiAgXCJqaXRcIixcbiAgXCJqdXVsaW5nXCIsXG4gIFwiZ2VreXVtZVwiLFxuICBcInphZGR5XCIsXG4gIFwid3RtXCIsXG4gIFwid2lnXCIsXG5dO1xuXG5jb25zdCAkMjAxNyA9IFtcbiAgXCJub24gYmluYXJ5XCIsXG4gIFwiYml0Y29pblwiLFxuICBcInNub3dmbGFrZVwiLFxuICBcInBtb3lzXCIsXG4gIFwibWFnYVwiLFxuICBcIndhc3BcIixcbiAgXCJib3VqaWVcIixcbiAgXCJ0cm9sbHNcIixcbl07XG5cbmNvbnN0ICQyMDE2ID0gW1xuICBcImdhc2xpZ2h0aW5nXCIsXG4gIFwic2p3XCIsXG4gIFwiYm9vbGluXCIsXG4gIFwid29rZVwiLFxuICBcInNoaWxsXCIsXG4gIFwicXVhc2hcIixcbiAgXCJicmFuZGlzaFwiLFxuICBcInRyaWdnZXJlZFwiLFxuICBcInNob29rXCIsXG4gIFwiYmlnbHlcIixcbiAgXCJob2xvc2V4dWFsXCIsXG4gIFwidmV4aW5nXCIsXG4gIFwiYm91Z2hcIixcbiAgXCJqdWp1XCIsXG4gIFwid2F2eVwiLFxuXTtcblxuY29uc3QgJDIwMTUgPSBbXG4gIFwic2ltbWVyXCIsXG4gIFwibmV0ZmxpeCBhbmQgY2hpbGxcIixcbiAgXCJjaGFwb1wiLFxuICBcInN0b29wXCIsXG4gIFwiYmxhc2VcIixcbiAgXCJwbGViXCIsXG4gIFwibG93a2V5XCIsXG4gIFwidG9tZVwiLFxuICBcIndhcFwiLFxuICBcInNodWRkZXJcIixcbiAgXCJidXJudFwiLFxuICBcInZhcGVcIixcbl07XG5cbi8vIHRha2VzIGluIGEgXCJ0ZXJtcy1vbmx5XCIgYXJyYXk7XG4vLyByZXR1cm5zIGFuIGFycmF5IG9mIHRoZSBhY3R1YWwgc2VhcmNoIHF1ZXJpZXMgdG8gYmUgbWFkZSB1c2luZyB0aGUgR29vZ2xlIFRyZW5kcyBBUElcbmZ1bmN0aW9uIHNlYXJjaFRlcm1zR2VuZXJhdG9yKGFycmF5KSB7XG4gICAgY29uc3Qgc2VhcmNoVGVybXMgPSBbXTtcblxuICAgIGFycmF5LmZvckVhY2goKHRlcm0pID0+IHtcbiAgICAgICAgc2VhcmNoVGVybXMucHVzaChgd2hhdCBkb2VzICR7dGVybX0gbWVhbmApO1xuICAgIH0pO1xuXG4gICAgLy8gY29uc29sZS5sb2coc2VhcmNoVGVybXMpO1xuICAgIHJldHVybiBzZWFyY2hUZXJtcztcbn07XG5cbi8vIElucHV0IGFyZyBcInF1ZXJpZXNBcnJheVwiIGlzIHRoZSBhcnJheSBvZiBzZWFyY2ggcXVlcmllczsgXG4vLyBcIm1heE51bU9mUXVlcmllc1wiIGlzIHRoZSBtYXggbnVtIG9mIHF1ZXJpZXMgYWxsb3dlZCBvbiBHb29nbGUgVHJlbmRzIEFQSTtcbi8vIFwiam9pbkluZGV4XCIgaXMgdGhlIGluZGV4IG9mIHRoZSBjb21tb24gcXVlcnkgb24gd2hpY2ggd2UgY2FsaWJyYXRlIGVhY2ggc3ViZGF0YXNldC5cbi8vIEZ1bmN0aW9uIHNwbGl0dGVyIHJldHVybnMgYW4gYXJyYXkgb2YgcXVlcnlTdWJzZXRzLCBhbmQgYSBhIHRlcm1zLW9ubHkgYXJyYXkgcmVhcnJhbmdlZCB3aXRoIHRoZSBjb21tb24gdGVybSBhdCBpbmRleCAwLlxuLy8gRWFjaCBxdWVyeVN1YnNldCBpcyBhbiBhcnJheSB0aGF0IGNvbnRhaW5zIHRoZSBjb21tb24gcXVlcnkgYWxvbmcgd2l0aCBvdGhlciBxdWVyaWVzOyBzdWJhcnJheS5sZW5ndGggPSBtYXhOdW1PZlF1ZXJpZXMuXG4vLyBMYXRlciwgZWFjaCBxdWVyeVN1YnNldCBpcyB1c2VkIHRvIG1ha2UgMSBBUEkgY2FsbCB0byBvYnRhaW4gYSBkYXRhU3Vic2V0LlxuZnVuY3Rpb24gc3BsaXR0ZXIocXVlcmllc0FycmF5LCBtYXhOdW1PZlF1ZXJpZXMsIGpvaW5JbmRleCwgdGVybXNBcnJheSkge1xuXG4gIC8vIHJlbW92ZSB0aGUgY29tbW9uIHF1ZXJ5IGZyb20gdGhlIHF1ZXJpZXNBcnJheSBvbiB3aGljaCB3ZSdsbCBpdGVyYXRlIG92ZXIgdG8gZ2V0IHRoZSBzdWJzZXRzIG9mIHF1ZXJpZXMsXG4gIC8vIGFuZCBzYXZlIHRoZSBjb21tb24gcXVlcnkgdG8gY29uc3Qgam9pblRlcm1cbiAgY29uc3Qgam9pblRlcm0gPSBxdWVyaWVzQXJyYXkuc3BsaWNlKGpvaW5JbmRleCwgMSk7XG5cbiAgY29uc3QgaW50ZXJ2YWwgPSBtYXhOdW1PZlF1ZXJpZXMgLSAxO1xuXG4gIGxldCBxdWVyeVN1YnNldHMgPSBbXTtcblxuICBmb3IgKGxldCBpID0gMDsgaSA8IHF1ZXJpZXNBcnJheS5sZW5ndGg7ICkge1xuICAgIC8vIGVhY2ggc2V0IG9mIHF1ZXJpZXMgZXhjbHVkaW5nIGNvbW1vbiBxdWVyeVxuICAgIGNvbnN0IGdyb3VwID0gcXVlcmllc0FycmF5LnNsaWNlKGksIGkgKyBpbnRlcnZhbCk7XG5cbiAgICAvLyBlYWNoIHN1YmFycmF5IGhhcyB0aGUgY29tbW9uIHF1ZXJ5IGFzIHRoZSBmaXJzdCBlbGVtZW50LCBmb2xsb3dlZCBieSBvdGhlciBxdWVyaWVzXG4gICAgY29uc3QgcXVlcnlTdWJzZXQgPSBqb2luVGVybS5jb25jYXQoZ3JvdXApO1xuXG4gICAgcXVlcnlTdWJzZXRzLnB1c2gocXVlcnlTdWJzZXQpO1xuXG4gICAgLy8ganVtcCB0byB0aGUgbmV4dCBlbGVtZW50IGluIGFycmF5IHdoaWNoIGhhc24ndCB5ZXQgYmVlbiBhZGRlZCB0byBhIHF1ZXJ5U3Vic2V0XG4gICAgaSArPSBpbnRlcnZhbDtcbiAgfVxuXG4gIHF1ZXJpZXNBcnJheSA9IGpvaW5UZXJtLmNvbmNhdChxdWVyaWVzQXJyYXkpO1xuICB0ZXJtc0FycmF5ID0gdGVybXNBcnJheS5zcGxpY2Uoam9pbkluZGV4LCAxKS5jb25jYXQodGVybXNBcnJheSlcbiAgXG5cbiAgcmV0dXJuIFtxdWVyeVN1YnNldHMsIHF1ZXJpZXNBcnJheSwgdGVybXNBcnJheV07XG59XG5cblxuY29uc3QgJDIwMTlfc2VhcmNoVGVybXMgPSBzZWFyY2hUZXJtc0dlbmVyYXRvcigkMjAxOSk7XG5jb25zdCAkMjAxOV9zcGxpdFF1ZXJpZXMgPSBzcGxpdHRlcigkMjAxOV9zZWFyY2hUZXJtcywgNSwgJDIwMTlfc2VhcmNoVGVybXMubGVuZ3RoIC8gMiwgJDIwMTkpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHsgJDIwMTlfc3BsaXRRdWVyaWVzIH07IiwiaW1wb3J0IHsgYWRkTGFiZWxDb29yZHMgfSBmcm9tIFwiLi9sYWJlbENvb3Jkcy5qc1wiXG5cbi8vIGNyZWF0aW5nIHJldXNhYmxlIGNoYXJ0XG5leHBvcnQgZnVuY3Rpb24gY2hhcnRUZW1wbGF0ZSgpIHtcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBzdmdcbiAgbGV0IHdpZHRoID0gMTIwMCowLjY7XG4gIGxldCBoZWlnaHQgPSA4MDAqMC42O1xuICBsZXQgYWRqID0gMzA7XG5cblxuICBmdW5jdGlvbiBkcmF3KHNlbGVjdGlvbikge1xuICAgIHNlbGVjdGlvbi5lYWNoKGZ1bmN0aW9uIChkYXRhKSB7XG5cbiAgICAgIC8vIFNDQUxFUzogeC1heGlzXG4gICAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgIHJldHVybiBkMy5taW4oZC52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgXG4gICAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGQzLm1heChkLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHYuZGF0ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwic3RhcnREYXRlXCIsIHN0YXJ0RGF0ZSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJlbmREYXRlXCIsIGVuZERhdGUpXG5cbiAgICAgIC8vIHNldCBkb21haW4gYW5kIHJhbmdlIG9mIHgtYXhpc1xuICAgICAgY29uc3QgeFNjYWxlID0gZDNcbiAgICAgICAgLnNjYWxlVGltZSgpXG4gICAgICAgIC5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgICAgIC5yYW5nZShbMCwgd2lkdGhdKTtcblxuXG4gICAgICAvLyBTQ0FMRVM6IHktYXhpc1xuICAgICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAgICAgbGV0IG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdi5wb2ludDtcbiAgICAgICAgfSk7XG4gICAgICB9KTtcblxuICAgICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCBtYXhZXSkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgXG5cbiAgICAvLyBhZGQgbGFiZWwgY29vcmRpbmF0ZXMgdG8gZGF0YXNldCdzIHRlcm1TbGljZXNcbiAgICAgIGFkZExhYmVsQ29vcmRzKGRhdGEsIDEyLCB4U2NhbGUsIHlTY2FsZSk7XG4gICAgICBcblxuICAgIFxuXG5cbiAgICAgIC8vIEFYRVNcbiAgICAgIGNvbnN0IHhBeGlzID0gZDNcbiAgICAgICAgLmF4aXNCb3R0b20oeFNjYWxlKVxuICAgICAgICAvLyAuc2NhbGUoeFNjYWxlKVxuICAgIHhBeGlzLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIGNvbnN0IHlBeGlzID0gZDMuYXhpc0xlZnQoKVxuICAgICAgICAgICAgICAgICAgICAgIC5zY2FsZSh5U2NhbGUpXG4gICAgICAgICAgICAgICAgICAgICAgLnRpY2tWYWx1ZXMoW10pXG4gICAgICAgICAgICAgICAgICAgICAgLnRpY2tTaXplT3V0ZXIoMClcblxuICAgICAgLy8gQVhFUzogZ3JpZGxpbmVzXG4gICAgICBjb25zdCB5QXhpc0dyaWQgPSBkM1xuICAgICAgICAuYXhpc0xlZnQoKVxuICAgICAgICAuc2NhbGUoeVNjYWxlKVxuICAgICAgICAudGlja1NpemUoLXdpZHRoKVxuICAgICAgICAudGlja0Zvcm1hdChcIlwiKVxuICAgICAgICAudGlja1ZhbHVlcyhbbWF4WS8gMywgMiAqIG1heFkgLyAzLCBtYXhZXSlcbiAgICAgICAgLnRpY2tTaXplT3V0ZXIoMCk7XG5cbiAgICAgIC8vIGFwcGVuZCBzdmdcbiAgICAgIGNvbnN0IHN2ZyA9IGQzXG4gICAgICAgIC5zZWxlY3QodGhpcylcbiAgICAgICAgLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KVxuICAgICAgICAuYXR0cihcbiAgICAgICAgICBcInZpZXdCb3hcIixcbiAgICAgICAgICBgLSR7YWRqICogMn0gLSR7YWRqICogM30gJHt3aWR0aCArIGFkaiAqIDEwfSAke2hlaWdodCArIGFkaiAqIDJ9YFxuICAgICAgICApXG4gICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgXG4gICAgICAgIC8vIGRhdGUgdXAgdG8gd2hpY2ggY2xpcCBwYXRoIGlzIGFwcGVuZGVkXG4gICAgICAgIGNvbnN0IG1pZERhdGUgPSBuZXcgRGF0ZSgyMDE5LCA1LCAzMCk7XG4gICAgICAgIGNvbnN0IG1pZE1heCA9IGQzLm1heChkYXRhLCBmdW5jdGlvbiAocykge1xuICAgICAgICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcy5maWx0ZXIodmFsID0+IHZhbC5kYXRlIDw9IG1pZERhdGUpLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwibWlkRGF0ZVwiLCBtaWREYXRlKTtcbiAgICAgICAgY29uc29sZS5sb2coXCJtaWRNYXhcIiwgbWlkTWF4KTtcbiAgICAgICAgXG4gICAgICAgIC8vIGFwcGVuZCBjbGlwIHBhdGhcbiAgICAgICAgY29uc3QgY2xpcCA9IHN2Zy5hcHBlbmQoXCJkZWZzXCIpXG4gICAgICAgICAgLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgICAgICAgLmF0dHIoXCJpZFwiLCBcImRhdGUtY2xpcFwiKVxuICAgICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgICAgICAgLmF0dHIoXCJ4XCIsIHhTY2FsZShzdGFydERhdGUpKVxuICAgICAgICAvLyAgIC5hdHRyKFwieFwiLCB4U2NhbGUoc3RhcnREYXRlKSlcbiAgICAgICAgICAuYXR0cihcInlcIiwgeVNjYWxlKG1heFkpKVxuICAgICAgICAvLyAgIC5hdHRyKFwieVwiLCB5U2NhbGUobWF4WSAtIG1pZE1heCkpXG4gICAgICAgICAgLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAgICAgICAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQpO1xuXG4gICAgICAvLyBkcmF3IHgtYXhpc1xuICAgICAgc3ZnXG4gICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ4LWF4aXNcIilcbiAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgYHRyYW5zbGF0ZSgwLCAke2hlaWdodH0pYClcbiAgICAgICAgLmNhbGwoeEF4aXMpOyAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gICAgICAvLyBkMy5zZWxlY3RBbGwoXCJnLnRpY2s6bGFzdC1vZi10eXBlXCIpLnRleHQuYXBwZW5kKFwiSmFuXCIpO1xuICAgICAgLy8gY29uc29sZS5sb2coXCJ0ZXN0XCIsIGQzLnNlbGVjdEFsbChcImcudGljazpsYXN0LW9mLXR5cGVcIikpXG5cbiAgICAgIC8vIGRyYXcgeS1heGlzXG4gICAgICBzdmcuYXBwZW5kKFwiZ1wiKS5hdHRyKFwiY2xhc3NcIiwgXCJ5LWF4aXMtZ3JpZFwiKS5jYWxsKHlBeGlzR3JpZCk7XG4gICAgICAvLyAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgLy8gLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAgIC8vIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgIC8vIC5hdHRyKFwieVwiLCAtNDApXG4gICAgICAvLyAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuXG4gICAgICAvLyBkcmF3IGxpbmVzXG4gICAgICBjb25zdCBsaW5lID0gZDNcbiAgICAgICAgLmxpbmUoKVxuXG4gICAgICAgIC54KGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgcmV0dXJuIHhTY2FsZSh2LmRhdGUpO1xuICAgICAgICAgIC8vIHJldHVybiBkWzBdO1xuICAgICAgICB9KVxuICAgICAgICAueShmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB5U2NhbGUodi5wb2ludCk7XG4gICAgICAgICAgLy8gcmV0dXJuIGRbMV07XG4gICAgICAgIH0pXG4gICAgICAgIC8vIC5jdXJ2ZShkMyAuY3VydmVDYXRtdWxsUm9tLmFscGhhKDAuNSkpO1xuICAgICAgICAuY3VydmUoZDMuY3VydmVCYXNpcyk7XG5cbiAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpLmRhdGEoZGF0YSkuZW50ZXIoKS5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICBsaW5lc1xuICAgICAgLmFwcGVuZChcInBhdGhcIilcbiAgICAgIFxuICAgICAgICAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgcmV0dXJuIGBsaW5lIGxpbmUtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiBsaW5lKGQudmFsdWVzKTtcbiAgICAgICAgICAvLyAgIHJldHVybiBsaW5lKGQuc3BsaW5lZCk7XG4gICAgICAgIH0pXG4gICAgICAgIC5hdHRyKFwiY2xpcC1wYXRoXCIsIFwidXJsKCNkYXRlLWNsaXApXCIpO1xuXG4gICAgICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICAgICAgbGluZXNcbiAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbiAoZCwgaSkge1xuICAgICAgICAgIHJldHVybiBgbGFiZWwgbGFiZWwtJHtpfWA7XG4gICAgICAgIH0pXG4gICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIGDih70gICAgICAgJHtkLnRlcm19YDtcbiAgICAgICAgfSlcbiAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gICAgICAgICAgICByZXR1cm4gYHRyYW5zbGF0ZSgke2QubGFiZWxYfSwgJHtkLmxhYmVsWX0pYDtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhc3RJbmRleCA9IGQudmFsdWVzLmxlbmd0aCAtIDE7XG4gICAgICAgICAgICAvLyBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbGFzdEluZGV4XS5kYXRlKTtcbiAgICAgICAgICAgIC8vIGNvbnN0IGxhYmVsWSA9IHlTY2FsZShkLnZhbHVlc1tsYXN0SW5kZXhdLnBvaW50KTtcbiAgICAgICAgLy8gICByZXR1cm4gYHRyYW5zbGF0ZSgke2xhYmVsWH0sICR7bGFiZWxZfSlgO1xuICAgICAgICB9KVxuXG4gICAgICAgIGNvbnN0IGhvdmVyTGluZXMgPSBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJob3Zlci1saW5lXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIC5hdHRyKFwiZFwiLCBmdW5jdGlvbihkKSB7IHJldHVybiBsaW5lKGQuc3BsaW5lZCl9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24oZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyl9KVxuXG5cbiAgICAvLyBjb25zdCB0ID0gZDMudHJhbnNpdGlvbigpXG4gICAgLy8gLmRlbGF5KDEpXG4gICAgLy8gLmR1cmF0aW9uKClcblxuICAgIFxuICAgIFxuICAgIGZ1bmN0aW9uIHVwZGF0ZUNoYXJ0KCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInVwZGF0ZUNoYXJ0XCIsZDMuc2VsZWN0aW9uLmV2ZW50KVxuICAgICAgICBjb25zdCBuZXdTdGFydERhdGUgPSBuZXcgRGF0ZSgyMDE3LCAxMSwgMSk7XG4gICAgICAgIGNvbnN0IG5ld0VuZERhdGUgID0gbmV3IERhdGUoMjAxOSwgNiwgMzEpO1xuICAgICAgICAvLyBjb25zdCBleHRlbnQgPSBbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJleHRlbnRcIiwgZXh0ZW50KVxuXG4gICAgICAgIC8vIGNvbnN0IHRlc3QxID0geFNjYWxlLmludmVydChleHRlbnRbMF0pXG4gICAgICAgIC8vIGNvbnN0IHRlc3QyID0geFNjYWxlLmludmVydChleHRlbnRbMV0pXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidXBkYXRlQ2hhcnRcIiwgdGVzdDEsIHRlc3QyKVxuICAgICAgICB4U2NhbGUuZG9tYWluKFtuZXdTdGFydERhdGUsIG5ld0VuZERhdGVdKVxuXG4gICAgICAgIGxldCBuZXdTdGFydEluZGV4O1xuICAgICAgICBsZXQgbmV3RW5kSW5kZXg7XG5cbiAgICAgICAgLy8gY29uc3QgbmV3RGF0YVBvaW50cyA9IFxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGFbMF0udmFsdWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoZGF0YVswXS52YWx1ZXNbaV0uZGF0ZSA+PSBuZXdTdGFydERhdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmV3U3RhcnRJbmRleCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YVswXS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKGRhdGFbMF0udmFsdWVzW2ldLmRhdGUgPiBuZXdFbmREYXRlKSB7XG4gICAgICAgICAgICAgICAgbmV3RW5kSW5kZXggPSBpO1xuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICBcblxuICAgICAgICAvLyBmaWx0ZXIoKHZhbCwgaSkgPT4ge1xuICAgICAgICAgICAgLy8gcmV0dXJuIGkgPj0gMVxuICAgICAgICAgICAgLy8gcmV0dXJuIHZhbC5kYXRlID49IG5ld1N0YXJ0RGF0ZSAmJiB2YWwuZGF0ZSA8PSBuZXdFbmREYXRlOyBcbiAgICAgICAgLy8gfSlcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnN0IG5ld1N0YXJ0SW5kZXggPSBuZXdEYXRhUG9pbnRzWzBdXG5cbiAgICAgICAgLy8gY29uc3QgbmV3RW5kSW5kZXggPSBuZXdEYXRhUG9pbnRzW25ld0RhdGFQb2ludHMgLSAxXVxuXG5cbiAgICAgICAgY29uc29sZS5sb2coXCJuZXdpXCIgLCBuZXdTdGFydEluZGV4LCBuZXdFbmRJbmRleClcblxuICAgICAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgICAgIG1heFkgPSBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKHMpIHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic1wiLCBzKVxuICAgICAgICAgICAgcyA9IHMudmFsdWVzLnNsaWNlKG5ld1N0YXJ0SW5kZXgsIG5ld0VuZEluZGV4KVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzXCIsIHMpXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInMubGVuZ3RoXCIsIHMubGVuZ3RoKVxuICAgICAgICAgICAgcmV0dXJuIGQzLm1heChzLCBmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgIHJldHVybiB2LnBvaW50O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuXG4gICAgICAvLyBzZXQgZG9tYWluIG9mIHktYXhpc1xuICAgIC8vICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5kb21haW4oWzAsIG1heFldKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcbiAgICAgICAgLy8geVNjYWxlLmRvbWFpbihbbmV3U3RhcnREYXRlLCBuZXdFbmREYXRlXSlcbiAgICAgICAgLy8gdXBkYXRlIHggYXhpc1xuICAgICAgICBzdmcuc2VsZWN0KFwiLngtYXhpc1wiKS5jYWxsKHhBeGlzKS50cmFuc2l0aW9uKCkuZGVsYXkoMTAwMCk7XG4gICAgICAgIC8vIHN2Zy5zZWxlY3QoXCIueS1heGlzXCIpLmNhbGwoeUF4aXMpLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKTtcbiAgICAgICAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwieFNjYWxlXCIsIHhTY2FsZShuZXdTdGFydERhdGUpKVxuICAgICAgICBjb25zb2xlLmxvZyhcInlTY2FsZVwiLCB5U2NhbGUobWF4WSkpXG4gICAgICAgIHlTY2FsZS5kb21haW4oWzAsIG1heFldKVxuICAgICAgICAvLyBhZGRTcGxpbmVkVmFsdWVzKClcblxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImxpbmVzXCIsIGxpbmVzKVxuICAgICAgICBsaW5lcy5zZWxlY3RBbGwoXCIubGluZVwiKVxuICAgICAgICBcbiAgICAgICAgICAudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApXG4gICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibGluZSB0cmFuc2l0aW9uXCIpXG4gICAgICAgICAgICAgICAgcmV0dXJuIGxpbmUoZC52YWx1ZXMpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgIH1cbiAgICBcbiAgICAvLyB1cGRhdGVDaGFydCgpIFxuXG4gICAgc3ZnLmF0dHIoXCJjbGlwLXBhdGhcIiwgXCJ1cmwoI2RhdGUtY2xpcClcIikuc3R5bGUoJ2ZpbGwnLCBcImxpZ2h0Z3JleVwiKTtcbiAgICBcbiAgICBzdmdcbiAgICAgIC5zZWxlY3RBbGwoXCIuaG92ZXItbGluZSwgLmxhYmVsLCAubGluZVwiKVxuICAgICAgLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuICAgICAgICAvLyAgIGNvbnNvbGUubG9nKFwibW91c2luXCIsIGkpXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwidGhpc1wiLCB0aGlzKSAgXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZFwiLCBkKVxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImlcIiwgaSlcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJub2Rlc1wiLCBub2RlcylcbiAgICAgICAgXG4gICAgICAgIC8vIG5vZGVzID0gW2xpbmUoMCksIGxhYmVsKDApLCBob3Zlci1saW5lKDApLCBsaW5lKDEpLCBsYWJlbCgxKSwgaG92ZXItbGluZSgxKS4uLl1cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRfaSA9IE1hdGguZmxvb3IoaS8zKVxuICAgICAgICBcbiAgICAgICAgLy8gaW5jcmVhc2Ugb3BhY2l0eSBvZiBib3RoIGxpbmUgYW5kIGxhYmVsXG4gICAgICAgIGNvbnN0IHNlbGVjdGVkID0gZDNcbiAgICAgICAgICAuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9LCAubGFiZWwtJHtzZWxlY3RlZF9pfWApXG4gICAgICAgICAgLnJhaXNlKClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIFxuICAgICAgICBzZWxlY3RlZC50cmFuc2l0aW9uKClcblxuICAgICAgICAvLyBhcHBseSB0aGlja2VyIHN0cm9rZSBvbmx5IHRvIGxpbmVcbiAgICAgICAgZDMuc2VsZWN0QWxsKGAubGluZS0ke3NlbGVjdGVkX2l9YCkuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgNSk7XG4gICAgICAgIFxuICAgICAgICAvLyBjb25zb2xlLmxvZyhcInRyYW5zaXRpb25cIix0KVxuICAgICAgICBcbiAgICB9KVxuICAgIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkLCBpLCBub2Rlcykge1xuXG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwibW91c291dFwiLCBpKVxuICAgIFxuICAgICAgICBjb25zdCBzZWxlY3RlZF9pID0gTWF0aC5mbG9vcihpIC8gMyk7XG5cbiAgICAgICAgY29uc3Qgc2VsZWN0ZWQgPSBkM1xuICAgICAgICAgIC5zZWxlY3RBbGwoYC5saW5lLSR7c2VsZWN0ZWRfaX0sIC5sYWJlbC0ke3NlbGVjdGVkX2l9YClcbiAgICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDAuNClcbiAgICAgICAgICAuc3R5bGUoXCJzdHJva2Utd2lkdGhcIiwgMSk7XG5cbiAgICAgICAgc2VsZWN0ZWQudHJhbnNpdGlvbigpO1xuICAgIH0pO1xuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuICAgIFxuXG4gICAgXG5cbiAgICB9KTtcblxuXG4gICAgfVxuXG4gIC8vIGFjY2Vzc29yIC8gc2V0dGVyIGZ1bmN0aW9ucyBmb3Igd2lkdGggYW5kIGhlaWdodFxuICBkcmF3LndpZHRoID0gZnVuY3Rpb24gKHZhbHVlKSB7XG4gICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICByZXR1cm4gd2lkdGg7XG4gICAgfVxuXG4gICAgd2lkdGggPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICBkcmF3LmhlaWdodCA9IGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgIGlmICghYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgcmV0dXJuIGhlaWdodDtcbiAgICB9XG5cbiAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICByZXR1cm4gZHJhdztcbiAgfTtcblxuICAvLyByZXR1cm4gZHJhdyBmdW5jdGlvblxuICByZXR1cm4gZHJhdztcbn1cbiIsImltcG9ydCB0ZXN0X2Z1bmN0aW9uIGZyb20gXCIuL3JlZmVyZW5jZXMvel9leGFtcGxlLmpzXCI7XG5pbXBvcnQgc2ltcGxlX2V4YW1wbGUgZnJvbSBcIi4vcmVmZXJlbmNlcy96X3NpbXBsZS5qc1wiO1xuXG4vLyBkYXRhXG5pbXBvcnQgeyByZXRyaWV2ZXIsIGNyZWF0ZURhdGFzZXQgfSBmcm9tIFwiLi9kYXRhL2RhdGFUcmFuc2Zvcm1lci5qc1wiO1xuaW1wb3J0IHsgJDIwMTksICQyMDE5X3NlYXJjaFRlcm1zLCAkMjAxOV9zcGxpdFF1ZXJpZXMgfSBmcm9tIFwiLi9kYXRhL3Rlcm1zLmpzXCI7XG5cbi8vIGQzIGNoYXJ0XG5pbXBvcnQgeyBjaGFydFRlbXBsYXRlIH0gZnJvbSBcIi4vZHJhd0NoYXJ0LmpzXCI7XG5cbmltcG9ydCAnLi4vZGlzdC9hc3NldHMvc3R5bGVzL3N0eWxlcy5zY3NzJztcblxuLy8gLy8gdG8gaWxsdXN0cmF0ZSBzdmcgcGF0aCBtaW5pLWxhbmd1YWdlXG4vLyAvLyBjb25zdCBpbGx1c3RyYXRpb24gPSBzdmcuYXBwZW5kKFwicGF0aFwiKVxuLy8gICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcblxuLy8gLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG5cbi8vIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBcbiAgLy8vLyBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICBjb25zdCAkMjAxOV9yZXRyaWV2ZXJQcm9taXNlcyA9IHJldHJpZXZlcigkMjAxOV9zcGxpdFF1ZXJpZXNbMF0pO1xuICBjb25zb2xlLmxvZyhcIiQyMDE5X3JldHJpZXZlclByb21pc2VzXCIsICQyMDE5X3JldHJpZXZlclByb21pc2VzKVxuICBcbiAgLy8gQ0FMTCBEUkFXIENIQVJUIEZVTkNUSU9OXG4gIGNvbnNvbGUubG9nKFwiJDIwMTlfc3BsaXRxdWVyaWVzXCIsICQyMDE5X3NwbGl0UXVlcmllcylcbiAgXG5cbiAgY3JlYXRlRGF0YXNldCgkMjAxOV9zcGxpdFF1ZXJpZXNbMV0sJDIwMTlfc3BsaXRRdWVyaWVzWzJdLCAkMjAxOV9yZXRyaWV2ZXJQcm9taXNlcylcbiAgLnRoZW4oKGQpID0+IHtcbiAgICAgIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZCkuY2FsbChjaGFydFRlbXBsYXRlKCkpXG4gICAgfSlcbiAgICBcbiAgXG5cbiAgICAvLyBjb25zdCB6b29tID0gZDMuem9vbSgpXG4gICAgLy8gICAgICAgICAgICAgICAgIC5zY2FsZUV4dGVudCgpXG4gICAgLy8gICAgICAgICAgICAgICAgIC5leHRlbnQoWzAsMF0sIFs4MDAsODAwXSlcblxuICAgIC8vIGQzLnNlbGVjdChcInN2Z1wiKS5jYWxsKHpvb20pXG4gICAgLy8gY29uc3QgaXRoaW5rID0gZDMuc2VsZWN0QWxsKFwiLmNoYXJ0XCIpLmZpbHRlcihmdW5jdGlvbihkLCBpKSB7XG4gICAgLy8gICByZXR1cm4gaSA9PT0gMFxuICAgIC8vIH0pXG4gICAgLy8gY29uc29sZS5sb2coXCJpdGhpbmtcIiwgaXRoaW5rKVxuICAgIC8vIGl0aGlua1xuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXIyXCIpLmFwcGVuZChcImNsaXBQYXRoXCIpXG4gICAgLy8gICAgICAgLmF0dHIoXCJpZFwiLCBcImRhdGUtY2xpcFwiKVxuICAgIC8vICAgICAgIC5hcHBlbmQoXCJyZWN0XCIpXG4gICAgLy8gICAgICAgLmF0dHIoXCJ4XCIsIDApXG4gICAgLy8gICAgICAgLmF0dHIoXCJ5XCIsIDIwMClcbiAgICAvLyAgICAgICAuYXR0cihcIndpZHRoXCIsIDQwMClcbiAgICAvLyAgICAgICAuYXR0cihcImhlaWdodFwiLCA2MDApO1xuICAgIFxuXG5cbi8vICBkMy5zZWxlY3QoXCIjc3ZnXCIpLm9uKFwibW91c2VvdmVyXCIsIGZ1bmN0aW9uIChkLCBpKSB7XG4gIC8vICBjb25zb2xlLmxvZyhcInRlc3Qgd29ya2VkXCIsIHRoaXMpO1xuXG4gIC8vICBkMy5zZWxlY3RBbGwoXCIjZGF0ZS1jbGlwXCIpLmF0dHIoXCJ3aWR0aFwiLCB4U2NhbGUoZW5kRGF0ZSkpLnRyYW5zaXRpb24oKTtcbi8vICB9KTtcblxuICAvLyBzaW1wbGVfZXhhbXBsZSgpO1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG5cbn0pO1xuXG5cbiAgXG4gIFxuLy8gICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuLy8gICAvLyBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbi8vICAgLy8gICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbi8vICAgLy8gICAuZW50ZXIoKVxuLy8gICAvLyAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbi8vICAgLy8gICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbi8vICAgLy8gICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4vLyAgIC8vICAgLmF0dHIoXCJyXCIsIDEpXG4vLyAgIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4vLyAgIC8vICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTsiLCIvLyBmdW5jdGlvbiB0byBzZXBhcmF0ZSBvdXQgbGFiZWxzIHRoYXQgb3ZlcmxhcFxuZnVuY3Rpb24gYWRkTGFiZWxDb29yZHMoZGF0YSwgc3BhY2UsIHhTY2FsZSwgeVNjYWxlKSB7XG4gIGxldCBub0NvbGxpc2lvbnMgPSBmYWxzZTtcblxuICBsZXQgeUxhYmVsVmFsdWVzID0gW107XG4gIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IFtdO1xuXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXMgPSBkYXRhLm1hcChmdW5jdGlvbihkKSB7XG4gIC8vICAgcmV0dXJuIGQ7XG4gIC8vIH0pXG4gIC8vIGxldCB5TGFiZWxWYWx1ZXNPcmlnaW5hbCA9IGRhdGEubWFwKGZ1bmN0aW9uKGQpIHtcbiAgLy8gICByZXR1cm4gZDtcbiAgLy8gfSlcblxuICBkYXRhLmZvckVhY2goZnVuY3Rpb24gKHMpIHtcbiAgICBsZXQgbGFzdEluZGV4ID0gcy52YWx1ZXMubGVuZ3RoIC0gMTtcblxuICAgIHMubGFiZWxYID0geFNjYWxlKHMudmFsdWVzW2xhc3RJbmRleF0uZGF0ZSk7XG4gICAgcy5sYWJlbFkgPSB5U2NhbGUocy52YWx1ZXNbbGFzdEluZGV4XS5wb2ludCk7XG5cbiAgICB5TGFiZWxWYWx1ZXMucHVzaChzLmxhYmVsWSk7XG4gICAgeUxhYmVsVmFsdWVzT3JpZ2luYWwucHVzaChzLmxhYmVsWSk7XG4gIH0pO1xuXG4gIHdoaWxlICghbm9Db2xsaXNpb25zKSB7XG4gICAgbm9Db2xsaXNpb25zID0gdHJ1ZTtcblxuICAgIHlMYWJlbFZhbHVlcy5mb3JFYWNoKCh2MSwgaSkgPT4ge1xuICAgICAgeUxhYmVsVmFsdWVzLmZvckVhY2goKHYyLCBqKSA9PiB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG5cbiAgICAgICAgbGV0IHlEaWZmID0gTWF0aC5hYnMoeUxhYmVsVmFsdWVzW2pdIC0geUxhYmVsVmFsdWVzW2ldKTtcbiAgICAgICAgbGV0IGFkZERpZmYgPSBzcGFjZSAtIHlEaWZmO1xuXG4gICAgICAgIC8vIGxldCBtb3ZpbmdZID0geUxhYmVsVmFsdWVzT3JpZ2luYWxbal0gPj0geUxhYmVsVmFsdWVzT3JpZ2luYWxbaV0gPyBqIDogaTtcblxuICAgICAgICBpZiAoaSAhPT0gaiAmJiB5RGlmZiA8IHNwYWNlKSB7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJqIGhpdFwiLCBpLCBqKTtcbiAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcInlEaWZmXCIseURpZmYpXG4gICAgICAgICAgbGV0IGdyZWF0ZXJJbmRleCA9XG4gICAgICAgICAgICB5TGFiZWxWYWx1ZXNPcmlnaW5hbFtqXSAtIHlMYWJlbFZhbHVlc09yaWdpbmFsW2ldID49IDAgPyBqIDogaTtcblxuICAgICAgICAgIHlMYWJlbFZhbHVlc1tncmVhdGVySW5kZXhdICs9IGFkZERpZmY7XG4gICAgICAgICAgLy8gY29uc29sZS5sb2coXCJ1cGRhdGVkXCIsIHlMYWJlbFZhbHVlcylcbiAgICAgICAgICBub0NvbGxpc2lvbnMgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfSk7XG4gIH1cblxuICAvLyBjb25zb2xlLmxvZyh5TGFiZWxWYWx1ZXMpO1xuXG4gIC8vIHJldHVybiB5TGFiZWxWYWx1ZXM7XG5cbiAgZGF0YS5mb3JFYWNoKGZ1bmN0aW9uIChzLCBpKSB7XG4gICAgcy5sYWJlbFkgPSB5TGFiZWxWYWx1ZXNbaV07XG4gIH0pO1xufVxuXG5cbi8vIGFkZExhYmVsQ29vcmRzKFswLCAzLCA2LCA5LCAxMiwgMTVdKVxuLy8gYWRkTGFiZWxDb29yZHMoWzQsIDMsIDEsIDU1LCAyLCAxXSlcbi8vIFsxMywgMTAsMSwgNTUsIDcsIDRdXG5cbm1vZHVsZS5leHBvcnRzID0geyBhZGRMYWJlbENvb3JkcyB9OyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRlc3RfZnVuY3Rpb24gKCkge1xuXG4gICAgLy8gZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGUuanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuXG4gICAgICAgIGNvbnN0IHdpZHRoID0gOTYwO1xuICAgICAgICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gICAgICAgIGNvbnN0IG1hcmdpbiA9IDU7XG4gICAgICAgIGNvbnN0IHBhZGRpbmcgPSA1O1xuICAgICAgICBjb25zdCBhZGogPSAzMDtcblxuICAgICAgICAvLyB3ZSBhcmUgYXBwZW5kaW5nIFNWRyBmaXJzdCAtIGVkaXRlZCBhZGpcbiAgICAgICAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCAoLTEgKiBhZGopICsgXCIgXCIgKyAoLTEgKiBhZGopICsgXCIgXCIgKyAod2lkdGggKyAzICogYWRqKSArIFwiIFwiICsgKGhlaWdodCArIDMgKiBhZGopKVxuICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWQtJWItJVlcIik7XG4gICAgICAgIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuXG4gICAgICAgIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX2RhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlX3NsaWNlc1wiLCBzbGljZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkEgYXJyYXlcIixzbGljZXNbMF0udmFsdWVzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5J3MgbGVuZ3RoXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgICAgICAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICAgICAgICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgICAgICAgICAgIHhTY2FsZS5kb21haW4oXG4gICAgICAgICAgICAgICAgZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICB5U2NhbGUuZG9tYWluKFswLFxuICAgICAgICAgICAgICAgIGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBdKTtcblxuICAgICAgICAgICAgLy8gcmV0dXJucyB1bmRlZmluZWQ6XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImV4YW1wbGVfeFNjYWxlXCIsIHhTY2FsZSgpKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAgICAgICAgICAgY29uc3QgeGF4aXMgPSBkM1xuICAgICAgICAgICAgICAgIC5heGlzQm90dG9tKClcbiAgICAgICAgICAgICAgICAudGlja3MoZDMudGltZURheS5ldmVyeSgxKSlcbiAgICAgICAgICAgICAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJWRcIikpXG4gICAgICAgICAgICAgICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAgICAgICAgICAgICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAgICAgICAgICAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAgICAgICAgICAgbGV0IGlkID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgICAgICAgICAgIH1cblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0yLiBEUkFXSU5HLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHhheGlzKTtcblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5jYWxsKHlheGlzKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInlcIiwgNilcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAgICAgICAgICAgICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgICAgICAgICAgICAgLmRhdGEoc2xpY2VzKVxuICAgICAgICAgICAgICAgIC5lbnRlcigpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIik7XG5cbiAgICAgICAgICAgIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIGlkcylcbiAgICAgICAgICAgICAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJzZXJpZV9sYWJlbFwiKVxuICAgICAgICAgICAgICAgIC8vIC5kYXR1bShmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgIC8vICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIC8vICAgICAgICAgaWRlOiBkLmlkLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgdmFsdWVlOiBkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgIC8vICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5kYXRlKSArIDEwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBcIixcIiArICh5U2NhbGUoZC52YWx1ZXNbZC52YWx1ZXMubGVuZ3RoIC0gMV0ubWVhc3VyZW1lbnQpICsgNSkgKyBcIilcIjtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieFwiLCA1KVxuICAgICAgICAgICAgICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiAoXCJTZXJpZSBcIikgKyBkLmlkIH0pXG4gICAgICAgICAgICAgICAgLy8gLmF0dHIoXCJjbGFzc1wiLCBmdW5jdGlvbihkKSB7IHJldHVybiBkLnZhbHVlIH0gKVxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiXG5jb25zdCBkYXRhID0gWzMsIDY2LCAyLCA3NiwgNSwgMjAsIDEsIDMwLCA1MCwgOSwgODAsIDUsIDddO1xuY29uc3QgdGVyciA9IFs1LCA1LCA1LCA1LCA4MCwgODAsIDIsIDMsIDEsIDIsIDYwLCAxLCAyLCAzM11cbmNvbnN0IGZsb3dlciA9IFtbNSwgNV0sIFsxLCAyXSwgWzgwLCA4MF1dXG5jb25zdCBiZWUgPSBbe3ZhbHVlOiA3LCBsYWJlbDoyfSwge3ZhbHVlOiAxLCBsYWJlbDogM31dXG5cbmZ1bmN0aW9uIGNoYXJ0QSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInRoaXMgaXMgY2hhcnRBXCIpXG5cbiAgICBsZXQgd2lkdGggPSAyMDtcbiAgICBsZXQgaGVpZ2h0ID0gMjAwO1xuXG4gICAgY29uc3QgeCA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxXSkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeSA9IGQzLnNjYWxlTGluZWFyKCkuZG9tYWluKFswLCAxMDBdKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgIGNvbnN0IGxpbmUgPSBkM1xuICAgICAgLmxpbmUoKVxuICAgICAgLngoZnVuY3Rpb24gKGQsIGkpIHtcbiAgICAgICAgcmV0dXJuIHgoaSk7XG4gICAgICB9KVxuICAgICAgLnkoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgcmV0dXJuIHkoZCk7XG4gICAgICB9KTtcblxuXG4gICAgZnVuY3Rpb24gbXkoc2VsZWN0aW9uKSB7XG5cbiAgICAgICAgY29uc29sZS5sb2coXCJyZXR1cm5pbmcgbXlcIilcblxuICAgICAgICBzZWxlY3Rpb24uZWFjaChmdW5jdGlvbiAoZGF0YSkge1xuXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInRoaXNcIiwgdGhpcylcbiAgICAgICAgICAgIGNvbnN0IHNjYWxldGVzdCA9IGQzLm1pbihkYXRhLCBmdW5jdGlvbihkKXtcbiAgICAgICAgICAgICAgcmV0dXJuIGQudmFsdWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwic2NhbGV0ZXN0XCIsIHNjYWxldGVzdClcblxuICAgICAgICAgICAgLy8gXCJ0aGlzXCIgaXMgdGhlIHNlbGVjdGVkIGVsZW1lbnQgKGluIHRoaXMgY2FzZSwgZGl2IHdpdGggaWQ9XCIjY29udGFpbmVyXCIpXG4gICAgICAgICAgICBjb25zdCBjaGFydCA9IGQzLnNlbGVjdCh0aGlzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiY2hhcnRcIilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuYXR0cihcIndpZHRoXCIsIHdpZHRoICogZGF0YS5sZW5ndGggLSAxKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodClcbiAgICBcbiAgICAgICAgICAgIFxuXG4gICAgICAgICAgICBjaGFydC5hcHBlbmQoXCJwYXRoXCIpLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChzdHJhd2JlcnJ5KSB7XG4gICAgICAgICAgICAgIHJldHVybiBsaW5lKGRhdGEpO1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICB9KVxuXG4gICAgfVxuXG4gICAgbXkud2lkdGggPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiB3aWR0aDtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHdpZHRoID0gdmFsdWU7XG4gICAgICAgIHJldHVybiBteTtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBteS5oZWlnaHQgPSBmdW5jdGlvbih2YWx1ZSkge1xuICAgICAgaWYgKCFhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICAgIHJldHVybiBoZWlnaHQ7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBoZWlnaHQgPSB2YWx1ZTtcbiAgICAgICAgcmV0dXJuIG15O1xuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiBteTtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzaW1wbGVfZXhhbXBsZSAoKSB7XG5cbiAgICBjb25zb2xlLmxvZyhcInNpbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAvLyBjb25zb2xlLmxvZyhcImNoYXJ0QSdzIHdpZHRoXCIsIGNoYXJ0QSgpLndpZHRoKCkpXG4gICAgLy8gY29uc29sZS5sb2coXCJjaGFydEEncyBteVwiLCBjaGFydEEoKSlcbiAgICBcbiAgICAvLyBjb25zdCBjaGFydEIgPSBjaGFydEEoKS5oZWlnaHQoMzAwKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgbXlcIiwgY2hhcnRCKVxuICAgIC8vIGNvbnNvbGUubG9nKFwiY2hhcnRCJ3MgaGVpZ2h0XCIsIGNoYXJ0Qi5oZWlnaHQoKSlcblxuICAgIC8vIGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuZGF0dW0oZGF0YSkuY2FsbChjaGFydEEoKSlcblxuICAvLyBkMy5zZWxlY3QoXCIjY29udGFpbmVyMlwiKS5kYXR1bShiZWUpLmNhbGwoY2hhcnRBKCkpXG5cblxufSJdLCJzb3VyY2VSb290IjoiIn0=