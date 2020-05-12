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
    })]); // returns undefined:
    // console.log("example_xScale", xScale());
    //-----------------------------AXES------------------------------//

    var yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale); // const xaxis = d3
    //     .axisBottom()
    //     .ticks(d3.timeDay.every(1))
    //     .tickFormat(d3.timeFormat("%b %d"))
    //     .scale(xScale);
    //----------------------------LINES------------------------------//
    // const line = d3.line()
    //     .x(function (d) { return xScale(d.date); })
    //     .y(function (d) { return yScale(d.measurement); });
    // let id = 0;
    // const ids = function () {
    //     return "line-" + id++;
    // }
    //-------------------------2. DRAWING----------------------------//
    //-----------------------------AXES------------------------------//
    // svg
    //     .append("g")
    //     .attr("class", "axis")
    //     .attr("transform", "translate(0," + height + ")")
    //     .call(xaxis);

    svg.append("g").attr("class", "axis").call(yaxis).append("text").attr("transform", "rotate(-90)").attr("dy", "0.75em").attr("y", 6).style("text-anchor", "end").text("Frequency"); //----------------------------LINES------------------------------//
    // const lines = svg.selectAll("lines")
    //     .data(slices)
    //     .enter()
    //     .append("g");
    // lines.append("path")
    //     .attr("d", function (d) { return line(d.values); });
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


var searchTerms = __webpack_require__(/*! ./searchTerms.js */ "./src/searchTerms.js");

document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js content has loaded");
  console.log("search terms", searchTerms); //-----------------------------[prep]SVG------------------------------// 
  // set the dimensions and margins of the graph

  var width = 800;
  var height = 400;
  var margin = 5;
  var padding = 5;
  var adj = 80; // append SVG

  var svg = d3.select("#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet") // .attr("width", width)
  // .attr("height", height*2)
  .attr("viewBox", -1 * adj + " " + -1 * adj + " " + (width + adj * 3) + " " + (height + adj * 3)).style("padding", padding).style("margin", margin).classed("svg-content", true); //-----------------------------[prep]DATA------------------------------//
  // parse the date and time

  var timeConv = d3.timeParse("%b %d, %Y");
  var dataset = d3.json("./dist/assets/data.json");
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
    console.log("slices", slices); //----------------------------[prep]SCALES-----------------------------//
    // stretch data values from 0 to the svg's width

    var xScale = d3.scaleTime().range([0, width]);
    var yScale = d3.scaleLinear().rangeRound([height, 0]); // define min and max values for domain on x-axis (time)

    var startDate = d3.min(slices, function (s) {
      return d3.min(s.values, function (v) {
        return v.date;
      });
    });
    var endDate = d3.max(slices, function (s) {
      return d3.max(s.values, function (v) {
        return v.date;
      });
    }); // define max value for domain on y-axis (points)

    var maxY = d3.max(slices, function (s) {
      return d3.max(s.values, function (v) {
        return v.point;
      });
    }); // set domain of x-axis

    xScale.domain([startDate, endDate]); // set domain of y-axis

    yScale.domain([0, maxY]); // FOR TESTING DOMAIN VALUES
    // console.log("minX", startDate);
    // console.log("maxX", endDate);
    // console.log("maxY", maxY);
    //-----------------------------[prep]AXES------------------------------//

    var xAxis = d3.axisBottom().ticks(d3.timeMonth.every(6)).tickFormat(d3.timeFormat("%b %Y")).scale(xScale);
    var yAxis = d3.axisLeft().ticks(slices[0].values.length / 10).scale(yScale); //-----------------------------[drawing]AXES------------------------------//

    svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "axis").call(yAxis).append("text").text("Frequency") // .attr("transform", "rotate(-90)")
    .attr("dy", "0.75em").attr("y", -40).style("text-anchor", "end"); // test_function();
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJjYWxsIiwidGV4dCIsInNlYXJjaFRlcm1zIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb24iLCJmb3JFYWNoIiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwicG9pbnQiLCJ2YWx1ZSIsInB1c2giLCJzdGFydERhdGUiLCJtaW4iLCJzIiwidiIsImVuZERhdGUiLCJtYXhZIiwieEF4aXMiLCJheGlzQm90dG9tIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInlBeGlzIiwibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7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LENBQUM0RCxVQUFILENBQWMsT0FBZCxDQUpBLEVBS1h6QixLQUxXLENBS0xkLE1BTEssQ0FBZDtBQU9BLFFBQU13QyxLQUFLLEdBQUc3RCxFQUFFLENBQ2JnQyxRQURXLEdBRVhDLEtBRlcsQ0FFTHJCLE1BQU0sQ0FBQyxDQUFELENBQU4sQ0FBVUssTUFBVixDQUFpQmlCLE1BQWpCLEdBQTBCLEVBRnJCLEVBR1hDLEtBSFcsQ0FHTFgsTUFISyxDQUFkLENBcEU2QixDQXlFN0I7O0FBRUF6QixPQUFHLENBQ0FHLE1BREgsQ0FDVSxHQURWLEVBRUdDLElBRkgsQ0FFUSxPQUZSLEVBRWlCLE1BRmpCLEVBR0dBLElBSEgsQ0FHUSxXQUhSLEVBR3FCLGlCQUFpQlIsTUFBakIsR0FBMEIsR0FIL0MsRUFJR3lDLElBSkgsQ0FJUW1CLEtBSlI7QUFNQXhELE9BQUcsQ0FDQUcsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsTUFGakIsRUFHR2lDLElBSEgsQ0FHUXlCLEtBSFIsRUFJRzNELE1BSkgsQ0FJVSxNQUpWLEVBS0dtQyxJQUxILENBS1EsV0FMUixFQU1FO0FBTkYsS0FPR2xDLElBUEgsQ0FPUSxJQVBSLEVBT2MsUUFQZCxFQVFHQSxJQVJILENBUVEsR0FSUixFQVFhLENBQUMsRUFSZCxFQVNHQyxLQVRILENBU1MsYUFUVCxFQVN3QixLQVR4QixFQWpGNkIsQ0E0RjdCO0FBRUMsR0E5RkQ7QUFnR0QsQ0FuSUQsRTs7Ozs7Ozs7Ozs7QUNIQSxJQUFNa0MsV0FBVyxHQUFHLENBQUMsV0FBRCxFQUFjLFFBQWQsQ0FBcEI7QUFFQXdCLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQnpCLFdBQWpCLEMiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0ZXN0X2Z1bmN0aW9uICgpIHtcblxuICAgIC8vIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJleGFtcGxlLmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAgICAgICBjb25zdCB3aWR0aCA9IDk2MDtcbiAgICAgICAgY29uc3QgaGVpZ2h0ID0gNTAwO1xuICAgICAgICBjb25zdCBtYXJnaW4gPSA1O1xuICAgICAgICBjb25zdCBwYWRkaW5nID0gNTtcbiAgICAgICAgY29uc3QgYWRqID0gMzA7XG5cbiAgICAgICAgLy8gd2UgYXJlIGFwcGVuZGluZyBTVkcgZmlyc3QgLSBlZGl0ZWQgYWRqXG4gICAgICAgIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIikuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAuYXR0cihcInZpZXdCb3hcIiwgKC0xICogYWRqKSArIFwiIFwiICsgKC0xICogYWRqKSArIFwiIFwiICsgKHdpZHRoICsgMyAqIGFkaikgKyBcIiBcIiArIChoZWlnaHQgKyAzICogYWRqKSlcbiAgICAgICAgICAgIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVkLSViLSVZXCIpO1xuICAgICAgICBjb25zdCBkYXRhc2V0ID0gZDMuY3N2KFwiLi9kaXN0L2Fzc2V0cy90ZXN0LmNzdlwiKTtcblxuICAgICAgICBkYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9kYXRhXCIsIGRhdGEpXG4gICAgICAgICAgICBjb25zdCBzbGljZXMgPSBkYXRhLmNvbHVtbnMuc2xpY2UoMSkubWFwKGZ1bmN0aW9uIChpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBpZCxcbiAgICAgICAgICAgICAgICAgICAgdmFsdWVzOiBkYXRhLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmRhdGUpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1lYXN1cmVtZW50OiArZFtpZF1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0pO1xuXG5cbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnNcIiwgZGF0YS5jb2x1bW5zKTtcbiAgICAgICAgICAgIC8vICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzIHdpdGhvdXQgZGF0ZVwiLCBkYXRhLmNvbHVtbnMuc2xpY2UoMSkpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgc2xpY2VkIGRhdGFzZXRcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZV9zbGljZXNcIiwgc2xpY2VzKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIGFycmF5IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkRhdGUgZWxlbWVudFwiLHNsaWNlc1swXS52YWx1ZXNbMF0uZGF0ZSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgICAgICAgICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgICAgICAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuXG4gICAgICAgICAgICB4U2NhbGUuZG9tYWluKFxuICAgICAgICAgICAgICAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgeVNjYWxlLmRvbWFpbihbMCxcbiAgICAgICAgICAgICAgICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgXSk7XG5cbiAgICAgICAgICAgIC8vIHJldHVybnMgdW5kZWZpbmVkOlxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJleGFtcGxlX3hTY2FsZVwiLCB4U2NhbGUoKSk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCB5YXhpcyA9IGQzLmF4aXNMZWZ0KCkudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGgpLnNjYWxlKHlTY2FsZSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnN0IHhheGlzID0gZDNcbiAgICAgICAgICAgIC8vICAgICAuYXhpc0JvdHRvbSgpXG4gICAgICAgICAgICAvLyAgICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gICAgICAgICAgICAvLyAgICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAgICAgICAgICAgLy8gICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgICAgIC8vIGNvbnN0IGxpbmUgPSBkMy5saW5lKClcbiAgICAgICAgICAgIC8vICAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgICAgICAgICAvLyAgICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLm1lYXN1cmVtZW50KTsgfSk7XG5cbiAgICAgICAgICAgIC8vIGxldCBpZCA9IDA7XG4gICAgICAgICAgICAvLyBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAvLyAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gICAgICAgICAgICAvLyB9XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cblxuICAgICAgICAgICAgLy8gc3ZnXG4gICAgICAgICAgICAvLyAgICAgLmFwcGVuZChcImdcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAgICAgICAgIC8vICAgICAuY2FsbCh4YXhpcyk7XG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuY2FsbCh5YXhpcylcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ5XCIsIDYpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgICAgICAgICAgICAgICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgICAgICAgICAgLy8gICAgIC5kYXRhKHNsaWNlcylcbiAgICAgICAgICAgIC8vICAgICAuZW50ZXIoKVxuICAgICAgICAgICAgLy8gICAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gICAgICAgICAgICAvLyBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cblxuICAgICAgICB9KTtcblxuICAgIC8vIH0pXG59IiwiaW1wb3J0IHRlc3RfZnVuY3Rpb24gZnJvbSBcIi4vZXhhbXBsZS5qc1wiO1xuY29uc3Qgc2VhcmNoVGVybXMgPSByZXF1aXJlKFwiLi9zZWFyY2hUZXJtcy5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdU1ZHLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8gXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgY29uc3Qgd2lkdGggPSA4MDA7XG4gIGNvbnN0IGhlaWdodCA9IDQwMDtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgY29uc3QgcGFkZGluZyA9IDU7XG4gIGNvbnN0IGFkaiA9IDgwO1xuXG4gIC8vIGFwcGVuZCBTVkdcbiAgY29uc3Qgc3ZnID0gZDNcbiAgICAuc2VsZWN0KFwiI2NvbnRhaW5lclwiKVxuICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAvLyAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQqMilcbiAgICAuYXR0cihcInZpZXdCb3hcIixcbiAgICAgICgtMSAqIGFkaikgKyBcIiBcIiArXG4gICAgICAoLTEgKiBhZGopICsgXCIgXCIgK1xuICAgICAgKHdpZHRoICsgYWRqICogMykgKyBcIiBcIiArXG4gICAgICAoaGVpZ2h0ICsgYWRqICogMylcbiAgICApXG4gICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIC8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lXG4gIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuICBjb25zdCBkYXRhc2V0ID0gZDMuanNvbihcIi4vZGlzdC9hc3NldHMvZGF0YS5qc29uXCIpO1xuXG4gIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzbGljZXMgPSBbXTtcblxuICAgIHNlYXJjaFRlcm1zLmZvckVhY2godGVybSA9PiB7XG5cbiAgICAgIGNvbnN0IHNsaWNlID0ge1xuICAgICAgICB0ZXJtOiB0ZXJtLFxuICAgICAgICB2YWx1ZXM6IGRhdGFbdGVybV0ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgICAgICAgICAgcG9pbnQ6ICtkLnZhbHVlWzBdXG4gICAgICAgICAgfVxuICAgICAgICB9KVxuICAgICAgfVxuXG4gICAgICBzbGljZXMucHVzaChzbGljZSk7XG4gICAgfSlcblxuICAgIGNvbnNvbGUubG9nKFwic2xpY2VzXCIsIHNsaWNlcyk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcbiAgICBcblxuICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5taW4ocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmRhdGVcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmRhdGVcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgY29uc3QgbWF4WSA9IGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2LnBvaW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBzZXQgZG9tYWluIG9mIHgtYXhpc1xuICAgIHhTY2FsZS5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgXG4gICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICB5U2NhbGUuZG9tYWluKFswLCBtYXhZXSlcblxuICAgIC8vIEZPUiBURVNUSU5HIERPTUFJTiBWQUxVRVNcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1pblhcIiwgc3RhcnREYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1heFhcIiwgZW5kRGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJtYXhZXCIsIG1heFkpO1xuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICBcbiAgY29uc3QgeEF4aXMgPSBkM1xuICAgIC5heGlzQm90dG9tKClcbiAgICAudGlja3MoZDMudGltZU1vbnRoLmV2ZXJ5KDYpKVxuICAgIFxuICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAuc2NhbGUoeFNjYWxlKTtcblxuICBjb25zdCB5QXhpcyA9IGQzXG4gICAgLmF4aXNMZWZ0KClcbiAgICAudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGggLyAxMClcbiAgICAuc2NhbGUoeVNjYWxlKTtcbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bZHJhd2luZ11BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgIC5jYWxsKHhBeGlzKTtcblxuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAudGV4dChcIkZyZXF1ZW5jeVwiKVxuICAgIC8vIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgLmF0dHIoXCJ5XCIsIC00MClcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG4gIFxuICB9KTtcblxufSk7IiwiY29uc3Qgc2VhcmNoVGVybXMgPSBbXCJ2c2NvIGdpcmxcIiwgXCJib29tZXJcIl07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VhcmNoVGVybXM7Il0sInNvdXJjZVJvb3QiOiIifQ==