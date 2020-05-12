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


var searchTerms = __webpack_require__(/*! ./searchTerms.js */ "./src/searchTerms.js"); //------------------------1. PREPARATION------------------------//
//-----------------------------SVG------------------------------// 
// set the dimensions and margins of the graph


var width = 960;
var height = 500;
var margin = 5;
var padding = 5;
var adj = 30; // append SVG

var svg = d3.select("#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", -1 * adj + " " + -1 * adj + " " + (width + adj * 3) + " " + (height + adj * 3)).style("padding", padding).style("margin", margin).classed("svg-content", true); //-----------------------------DATA------------------------------//
// parse the date and time

var timeConv = d3.timeParse("%b %d, %Y");
var dataset = d3.json("./dist/assets/data.json"); //----------------------------SCALES-----------------------------//
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
  console.log("index.js content has loaded");
  console.log("search terms", searchTerms);
  dataset.then(function (data) {
    var slices = [];
    searchTerms.forEach(function (term) {
      var slice = {
        term: term,
        values: data[term].map(function (d) {
          return {
            date: timeConv(d.formattedAxisTime),
            point: +d.value[0]
          };
        })
      };
      slices.push(slice);
    });
    console.log("slices", slices);
  }); // d3.json("./dist/assets/data.json").then(function(inputData) {
  //   // if (error) throw error;
  //   console.log(inputData);
  //   // draw(inputData, "boomer");
  // });
  // d3.json(dataset).then(function(data) {
  //   draw(data, "boomer");
  // });
  // test_function();
});

/***/ }),

/***/ "./src/searchTerms.js":
/*!****************************!*\
  !*** ./src/searchTerms.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

var searchTerms = ["vsco girl", "boomer"];
module.exports = searchTerms;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJ4YXhpcyIsImF4aXNCb3R0b20iLCJ0aW1lRGF5IiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsImxpbmUiLCJ4IiwieSIsImlkcyIsImNhbGwiLCJ0ZXh0IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInNlYXJjaFRlcm1zIiwicmVxdWlyZSIsImpzb24iLCJkcmF3Iiwic2VhcmNoVGVybSIsImN1cnJlbnRUZXJtIiwiZm9ybWF0dGVkQXhpc1RpbWUiLCJkb2N1bWVudCIsImFkZEV2ZW50TGlzdGVuZXIiLCJmb3JFYWNoIiwidGVybSIsInBvaW50IiwidmFsdWUiLCJwdXNoIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7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QUFZLGNBQVosRUFBNEIwRCxXQUE1QjtBQUVBM0MsU0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUMzQixRQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUVBdUMsZUFBVyxDQUFDUyxPQUFaLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUUxQixVQUFNL0MsS0FBSyxHQUFHO0FBQ1orQyxZQUFJLEVBQUVBLElBRE07QUFFWjVDLGNBQU0sRUFBRU4sSUFBSSxDQUFDa0QsSUFBRCxDQUFKLENBQVc5QyxHQUFYLENBQWUsVUFBVUcsQ0FBVixFQUFhO0FBQ2xDLGlCQUFPO0FBQ0xDLGdCQUFJLEVBQUViLFFBQVEsQ0FBQ1ksQ0FBQyxDQUFDdUMsaUJBQUgsQ0FEVDtBQUVMSyxpQkFBSyxFQUFFLENBQUM1QyxDQUFDLENBQUM2QyxLQUFGLENBQVEsQ0FBUjtBQUZILFdBQVA7QUFJRCxTQUxPO0FBRkksT0FBZDtBQVVBbkQsWUFBTSxDQUFDb0QsSUFBUCxDQUFZbEQsS0FBWjtBQUNELEtBYkQ7QUFlQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JtQixNQUF0QjtBQUNELEdBbkJELEVBTHdELENBMEJ4RDtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFFRCxDQXZDRCxFOzs7Ozs7Ozs7OztBQ3JFQSxJQUFNdUMsV0FBVyxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FBcEI7QUFFQWMsTUFBTSxDQUFDQyxPQUFQLEdBQWlCZixXQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyBjb25zdCB0ZXN0eCA9IGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgLy8gICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zdCB0ZXN0eSA9IGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAvLyAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgLy8gICB9KTtcbiAgICAgICAgICAgIC8vIH0pO1xuXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0ZXN0eCwgdGVzdHkpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJ4U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAvLyB9KVxufSIsImltcG9ydCB0ZXN0X2Z1bmN0aW9uIGZyb20gXCIuL2V4YW1wbGUuanNcIjtcbmNvbnN0IHNlYXJjaFRlcm1zID0gcmVxdWlyZShcIi4vc2VhcmNoVGVybXMuanNcIik7XG5cbi8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMS4gUFJFUEFSQVRJT04tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNWRy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vIFxuLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuY29uc3Qgd2lkdGggPSA5NjA7XG5jb25zdCBoZWlnaHQgPSA1MDA7XG5jb25zdCBtYXJnaW4gPSA1O1xuY29uc3QgcGFkZGluZyA9IDU7XG5jb25zdCBhZGogPSAzMDtcblxuLy8gYXBwZW5kIFNWR1xuY29uc3Qgc3ZnID0gZDNcbiAgLnNlbGVjdChcIiNjb250YWluZXJcIilcbiAgLmFwcGVuZChcInN2Z1wiKVxuICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gIC5hdHRyKFwidmlld0JveFwiLFxuICAgICgtMSphZGopICsgXCIgXCIgKyBcbiAgICAoLTEqYWRqKSArIFwiIFwiICsgXG4gICAgKHdpZHRoICsgYWRqICogMykgKyBcIiBcIiArIFxuICAgIChoZWlnaHQgKyBhZGogKiAzKVxuICApXG4gIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWVcbmNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuY29uc3QgZGF0YXNldCA9IGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL2RhdGEuanNvblwiKTtcblxuXG4vLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4vLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbmNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuXG5mdW5jdGlvbiBkcmF3KGRhdGEsIHNlYXJjaFRlcm0pIHtcbiAgY29uc3QgY3VycmVudFRlcm0gPSBkYXRhW3NlYXJjaFRlcm1dO1xuICBcbiAgLy8gY29uc29sZS5sb2coXG4gIC8vICAgZDMuZXh0ZW50KGN1cnJlbnRUZXJtLCBmdW5jdGlvbiAoZCkge1xuICAvLyAgICAgcmV0dXJuIHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpO1xuICAvLyAgIH0pXG4gIC8vICk7XG5cbiAgeFNjYWxlLmRvbWFpbihcbiAgICBkMy5leHRlbnQoY3VycmVudFRlcm0sIGZ1bmN0aW9uIChkKSB7XG4gICAgICByZXR1cm4gdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSk7XG4gICAgfSlcbiAgKTtcblxuICB5U2NhbGUuZG9tYWluKFswLCBkMy5tYXgoZGF0YSwgZnVuY3Rpb24gKGMpIHtcbiAgICByZXR1cm4gY1xuICAgIC8vICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAvLyAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgIC8vICAgfSk7XG4gICAgfSksXG4gIF0pO1xuXG4gIGNvbnNvbGUubG9nKFwibWF4IHRlc3RcIiwgZDMubWF4KGRhdGEsIGZ1bmN0aW9uIChjKSB7XG4gICAgcmV0dXJuIGMudmFsdWVzXG4gIH0pXG4gIClcbiAgXG59O1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzbGljZXMgPSBbXTtcblxuICAgIHNlYXJjaFRlcm1zLmZvckVhY2godGVybSA9PiB7XG4gICAgICBcbiAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICB0ZXJtOiB0ZXJtLFxuICAgICAgICB2YWx1ZXM6IGRhdGFbdGVybV0ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgcG9pbnQ6ICtkLnZhbHVlWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuICAgICAgXG4gICAgICBzbGljZXMucHVzaChzbGljZSk7XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKFwic2xpY2VzXCIsIHNsaWNlcyk7XG4gIH0pO1xuXG4gIC8vIGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL2RhdGEuanNvblwiKS50aGVuKGZ1bmN0aW9uKGlucHV0RGF0YSkge1xuXG4gIC8vICAgLy8gaWYgKGVycm9yKSB0aHJvdyBlcnJvcjtcbiAgLy8gICBjb25zb2xlLmxvZyhpbnB1dERhdGEpO1xuICAvLyAgIC8vIGRyYXcoaW5wdXREYXRhLCBcImJvb21lclwiKTtcbiAgLy8gfSk7XG5cbiAgLy8gZDMuanNvbihkYXRhc2V0KS50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgLy8gICBkcmF3KGRhdGEsIFwiYm9vbWVyXCIpO1xuICAvLyB9KTtcbiAgXG4gIC8vIHRlc3RfZnVuY3Rpb24oKTtcblxufSk7IiwiY29uc3Qgc2VhcmNoVGVybXMgPSBbXCJ2c2NvIGdpcmxcIiwgXCJib29tZXJcIl07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VhcmNoVGVybXM7Il0sInNvdXJjZVJvb3QiOiIifQ==