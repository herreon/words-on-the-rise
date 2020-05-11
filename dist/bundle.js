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
    console.log("data", data);
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

    console.log("Slices", slices); //    // returns the first slice
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
    })]); // const testx = d3.extent(data, function (d) {
    //   return timeConv(d.date);
    // });
    // const testy = d3.max(slices, function (c) {
    //   return d3.max(c.values, function (d) {
    //     return d.measurement + 4;
    //   });
    // });
    // console.log(testx, testy);

    console.log("xScale", xScale()); //-----------------------------AXES------------------------------//

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
    lines.append("path").attr("d", function (d) {
      return line(d.values);
    });
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
 //------------------------1. PREPARATION------------------------//
//-----------------------------SVG------------------------------// 
// set the dimensions and margins of the graph

var width = 960;
var height = 500;
var margin = 5;
var padding = 5;
var adj = 30; // append SVG

var svg = d3.select("#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", -1 * adj + " " + -1 * adj + " " + (width + adj * 3) + " " + (height + adj * 3)).style("padding", padding).style("margin", margin).classed("svg-content", true); //-----------------------------DATA------------------------------//
// parse the date and time

var timeConv = d3.timeParse("%B %-d, %Y"); //----------------------------SCALES-----------------------------//
// stretch data values from 0 to the svg's width

var xScale = d3.scaleTime().range([0, width]);
var yScale = d3.scaleLinear().rangeRound([height, 0]);

function draw(data, searchTerm) {
  var currentTerm = data[searchTerm]; // console.log(
  //   d3.extent(currentTerm, function (d) {
  //     return timeConv(d.formattedAxisTime);
  //   })
  // );

  xScale.domain(d3.extent(currentTerm, function (d) {
    return timeConv(d.formattedAxisTime);
  }));
  yScale.domain([0, d3.max(data, function (c) {
    return c; //   return d3.max(c.values, function (d) {
    //     return d.measurement + 4;
    //   });
  })]);
  console.log("max test", d3.max(data, function (c) {
    return c.values;
  }));
}

;
document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js content has loaded"); // d3.json("./dist/assets/data.json").then(function(inputData) {
  //   // if (error) throw error;
  //   console.log(inputData);
  //   // draw(inputData, "boomer");
  // });

  d3.json("./dist/assets/data.json").then(function (data) {
    draw(data, "boomer");
  });
  Object(_example_js__WEBPACK_IMPORTED_MODULE_0__["default"])();
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbInRlc3RfZnVuY3Rpb24iLCJjb25zb2xlIiwibG9nIiwid2lkdGgiLCJoZWlnaHQiLCJtYXJnaW4iLCJwYWRkaW5nIiwiYWRqIiwic3ZnIiwiZDMiLCJzZWxlY3QiLCJhcHBlbmQiLCJhdHRyIiwic3R5bGUiLCJjbGFzc2VkIiwidGltZUNvbnYiLCJ0aW1lUGFyc2UiLCJkYXRhc2V0IiwiY3N2IiwidGhlbiIsImRhdGEiLCJzbGljZXMiLCJjb2x1bW5zIiwic2xpY2UiLCJtYXAiLCJpZCIsInZhbHVlcyIsImQiLCJkYXRlIiwibWVhc3VyZW1lbnQiLCJ4U2NhbGUiLCJzY2FsZVRpbWUiLCJyYW5nZSIsInlTY2FsZSIsInNjYWxlTGluZWFyIiwicmFuZ2VSb3VuZCIsImRvbWFpbiIsImV4dGVudCIsIm1heCIsImMiLCJ5YXhpcyIsImF4aXNMZWZ0IiwidGlja3MiLCJsZW5ndGgiLCJzY2FsZSIsInhheGlzIiwiYXhpc0JvdHRvbSIsInRpbWVEYXkiLCJldmVyeSIsInRpY2tGb3JtYXQiLCJ0aW1lRm9ybWF0IiwibGluZSIsIngiLCJ5IiwiaWRzIiwiY2FsbCIsInRleHQiLCJsaW5lcyIsInNlbGVjdEFsbCIsImVudGVyIiwiZHJhdyIsInNlYXJjaFRlcm0iLCJjdXJyZW50VGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwiZG9jdW1lbnQiLCJhZGRFdmVudExpc3RlbmVyIiwianNvbiJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Es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YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSlcbiAgICAgICAgICAgIGNvbnN0IHNsaWNlcyA9IGRhdGEuY29sdW1ucy5zbGljZSgxKS5tYXAoZnVuY3Rpb24gKGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGlkLFxuICAgICAgICAgICAgICAgICAgICB2YWx1ZXM6IGRhdGEubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZGF0ZSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWVhc3VyZW1lbnQ6ICtkW2lkXVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG5cblxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgICAgICAgICAgLy8gIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnMgd2l0aG91dCBkYXRlXCIsIGRhdGEuY29sdW1ucy5zbGljZSgxKSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICAgICAgICAgY29uc29sZS5sb2coXCJTbGljZXNcIiwgc2xpY2VzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGUgZWxlbWVudFwiLHNsaWNlc1swXS52YWx1ZXNbMF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFxuICAgICAgICAgICAgICAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCxcbiAgICAgICAgICAgICAgICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHRlc3R4ID0gZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHRlc3R5ID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIC8vICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgIC8vICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgICAgICAgICAvLyAgIH0pO1xuICAgICAgICAgICAgLy8gfSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRlc3R4LCB0ZXN0eSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcInhTY2FsZVwiLCB4U2NhbGUoKSk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCB5YXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICAgICAgICAgIGNvbnN0IHhheGlzID0gZDNcbiAgICAgICAgICAgICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAgICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gICAgICAgICAgICAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAgICAgICAgICAgICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgICAgICAgICAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLm1lYXN1cmVtZW50KTsgfSk7XG5cbiAgICAgICAgICAgIGxldCBpZCA9IDA7XG4gICAgICAgICAgICBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gICAgICAgICAgICB9XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgICAgICAgICAgc3ZnXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh4YXhpcyk7XG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh5YXhpcylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgICAgICAgICAgICAgIC5kYXRhKHNsaWNlcylcbiAgICAgICAgICAgICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vZXhhbXBsZS5qc1wiO1xuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTEuIFBSRVBBUkFUSU9OLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TVkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyBcbi8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbmNvbnN0IHdpZHRoID0gOTYwO1xuY29uc3QgaGVpZ2h0ID0gNTAwO1xuY29uc3QgbWFyZ2luID0gNTtcbmNvbnN0IHBhZGRpbmcgPSA1O1xuY29uc3QgYWRqID0gMzA7XG5cbi8vIGFwcGVuZCBTVkdcbmNvbnN0IHN2ZyA9IGQzXG4gIC5zZWxlY3QoXCIjY29udGFpbmVyXCIpXG4gIC5hcHBlbmQoXCJzdmdcIilcbiAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAuYXR0cihcInZpZXdCb3hcIixcbiAgICAoLTEqYWRqKSArIFwiIFwiICsgXG4gICAgKC0xKmFkaikgKyBcIiBcIiArIFxuICAgICh3aWR0aCArIGFkaiAqIDMpICsgXCIgXCIgKyBcbiAgICAoaGVpZ2h0ICsgYWRqICogMylcbiAgKVxuICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lXG5jb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVCICUtZCwgJVlcIik7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbi8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG5jb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG5cbmZ1bmN0aW9uIGRyYXcoZGF0YSwgc2VhcmNoVGVybSkge1xuICBjb25zdCBjdXJyZW50VGVybSA9IGRhdGFbc2VhcmNoVGVybV07XG4gIFxuICAvLyBjb25zb2xlLmxvZyhcbiAgLy8gICBkMy5leHRlbnQoY3VycmVudFRlcm0sIGZ1bmN0aW9uIChkKSB7XG4gIC8vICAgICByZXR1cm4gdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSk7XG4gIC8vICAgfSlcbiAgLy8gKTtcblxuICB4U2NhbGUuZG9tYWluKFxuICAgIGQzLmV4dGVudChjdXJyZW50VGVybSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIHJldHVybiB0aW1lQ29udihkLmZvcm1hdHRlZEF4aXNUaW1lKTtcbiAgICB9KVxuICApO1xuXG4gIHlTY2FsZS5kb21haW4oWzAsIGQzLm1heChkYXRhLCBmdW5jdGlvbiAoYykge1xuICAgIHJldHVybiBjXG4gICAgLy8gICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgIC8vICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gICAgLy8gICB9KTtcbiAgICB9KSxcbiAgXSk7XG5cbiAgY29uc29sZS5sb2coXCJtYXggdGVzdFwiLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gYy52YWx1ZXNcbiAgfSlcbiAgKVxuICBcbn07XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAvLyBkMy5qc29uKFwiLi9kaXN0L2Fzc2V0cy9kYXRhLmpzb25cIikudGhlbihmdW5jdGlvbihpbnB1dERhdGEpIHtcblxuICAvLyAgIC8vIGlmIChlcnJvcikgdGhyb3cgZXJyb3I7XG4gIC8vICAgY29uc29sZS5sb2coaW5wdXREYXRhKTtcbiAgLy8gICAvLyBkcmF3KGlucHV0RGF0YSwgXCJib29tZXJcIik7XG4gIC8vIH0pO1xuXG4gIGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL2RhdGEuanNvblwiKS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBkcmF3KGRhdGEsIFwiYm9vbWVyXCIpO1xuICB9KTtcbiAgXG4gIHRlc3RfZnVuY3Rpb24oKTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==