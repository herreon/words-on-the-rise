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

    var xAxis = d3.axisBottom().ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")) // .ticks(d3.timeYear.every(1))
    // .tickFormat(d3.timeFormat("%Y"))
    .scale(xScale);
    var yAxis = d3.axisLeft().ticks(slices[0].values.length / 10).scale(yScale); //----------------------------[prep]LINES------------------------------//
    // accessor function. Takes in the data array and extracts the x,y coordinates

    var line = d3.line().x(function (d) {
      return xScale(d.date);
    }).y(function (d) {
      return yScale(d.point);
    }); // to illustrate line.y()
    // const line = d3
    //   .line()
    //   .x(function (d) { return xScale(d.date); })
    //   .y(function (d) { return d.point; });
    // to differentiate lines

    var lineId = 0;

    var lineIds = function lineIds() {
      return "line-" + lineId++;
    }; //-----------------------------[drawing]AXES------------------------------//


    svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")").call(xAxis); // .call calls the function xAxis on the elements of the selection g

    svg.append("g").attr("class", "axis").call(yAxis).append("text").text("Frequency").attr("dy", "0.75em").attr("y", -40).style("text-anchor", "end"); //----------------------------[drawing]LINES------------------------------//

    var lines = svg.selectAll("lines").data(slices).enter().append("g");
    lines.append("path").attr("class", lineIds) // differentiate lines
    .attr("d", function (d) {
      return line(d.values);
    }); // add labels to each line

    lines.append("text").attr("class", "term_label" + " a").text(function (d) {
      return d.term;
    }).attr("x", 5).attr("transform", function (d) {
      var numPoints = d.values.length - 1; // the index of the last data point

      return "translate(" + (xScale(d.values[numPoints].date) + 10) + "," + (yScale(d.values[numPoints].point) + 5) + ")";
    }); // to illustrate svg path mini-language
    // svg.append("path")
    // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
    // test_function();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJ4YXhpcyIsImF4aXNCb3R0b20iLCJ0aW1lRGF5IiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsImxpbmUiLCJ4IiwieSIsImlkcyIsImNhbGwiLCJ0ZXh0IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInNlYXJjaFRlcm1zIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb24iLCJmb3JFYWNoIiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwicG9pbnQiLCJ2YWx1ZSIsInB1c2giLCJzdGFydERhdGUiLCJtaW4iLCJzIiwidiIsImVuZERhdGUiLCJtYXhZIiwieEF4aXMiLCJ0aW1lTW9udGgiLCJ5QXhpcyIsImxpbmVJZCIsImxpbmVJZHMiLCJudW1Qb2ludHMiLCJt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LEdBRlIsRUFFYSxVQUFVZSxDQUFWLEVBQWE7QUFBRSxhQUFPd0IsSUFBSSxDQUFDeEIsQ0FBQyxDQUFDRCxNQUFILENBQVg7QUFBd0IsS0FGcEQsRUF2SDZCLENBNEg3Qjs7QUFDQStCLFNBQUssQ0FBQzlDLE1BQU4sQ0FBYSxNQUFiLEVBQ0dDLElBREgsQ0FDUSxPQURSLEVBQ2lCLGVBQWUsSUFEaEMsRUFFRzRDLElBRkgsQ0FFUSxVQUFVN0IsQ0FBVixFQUFhO0FBQUUsYUFBT0EsQ0FBQyxDQUFDdUMsSUFBVDtBQUFlLEtBRnRDLEVBR0d0RCxJQUhILENBR1EsR0FIUixFQUdhLENBSGIsRUFJR0EsSUFKSCxDQUlRLFdBSlIsRUFJcUIsVUFBVWUsQ0FBVixFQUFhO0FBQzlCLFVBQU11RCxTQUFTLEdBQUd2RCxDQUFDLENBQUNELE1BQUYsQ0FBU2lCLE1BQVQsR0FBa0IsQ0FBcEMsQ0FEOEIsQ0FDUzs7QUFDdkMsYUFBTyxnQkFBZ0JiLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDRCxNQUFGLENBQVN3RCxTQUFULEVBQW9CdEQsSUFBckIsQ0FBTixHQUFtQyxFQUFuRCxJQUNILEdBREcsSUFDSUssTUFBTSxDQUFDTixDQUFDLENBQUNELE1BQUYsQ0FBU3dELFNBQVQsRUFBb0JkLEtBQXJCLENBQU4sR0FBb0MsQ0FEeEMsSUFDNkMsR0FEcEQ7QUFFRCxLQVJILEVBN0g2QixDQXdJN0I7QUFDRTtBQUNBO0FBRUY7QUFFQyxHQTlJRDtBQWdKRCxDQWpMRCxFOzs7Ozs7Ozs7OztBQ0hBLElBQU1SLFdBQVcsR0FBRyxDQUFDLFdBQUQsRUFBYyxRQUFkLENBQXBCO0FBRUF1QixNQUFNLENBQUNDLE9BQVAsR0FBaUJ4QixXQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9leGFtcGxlLmpzXCI7XG5jb25zdCBzZWFyY2hUZXJtcyA9IHJlcXVpcmUoXCIuL3NlYXJjaFRlcm1zLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1TVkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyBcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBjb25zdCB3aWR0aCA9IDgwMDtcbiAgY29uc3QgaGVpZ2h0ID0gNDAwO1xuICBjb25zdCBtYXJnaW4gPSA1O1xuICBjb25zdCBwYWRkaW5nID0gNTtcbiAgY29uc3QgYWRqID0gODA7XG5cbiAgLy8gYXBwZW5kIFNWR1xuICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAvLyAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgIC8vIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCoyKVxuICAgIC5hdHRyKFwidmlld0JveFwiLFxuICAgICAgKC0xICogYWRqKSArIFwiIFwiICtcbiAgICAgICgtMSAqIGFkaikgKyBcIiBcIiArXG4gICAgICAod2lkdGggKyBhZGogKiAzKSArIFwiIFwiICtcbiAgICAgIChoZWlnaHQgKyBhZGogKiAzKVxuICAgIClcbiAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWVcbiAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG4gIGNvbnN0IGRhdGFzZXQgPSBkMy5qc29uKFwiLi9kaXN0L2Fzc2V0cy9kYXRhLmpzb25cIik7XG5cbiAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IHNsaWNlcyA9IFtdO1xuXG4gICAgc2VhcmNoVGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcblxuICAgICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICAgIHRlcm06IHRlcm0sXG4gICAgICAgIHZhbHVlczogZGF0YVt0ZXJtXS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSksXG4gICAgICAgICAgICBwb2ludDogK2QudmFsdWVbMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHNsaWNlcy5wdXNoKHNsaWNlKTtcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coXCJzbGljZXNcIiwgc2xpY2VzKTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuXG4gICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGQzLm1pbihzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIFxuICAgIC8vIGRlZmluZSBtYXggdmFsdWUgZm9yIGRvbWFpbiBvbiB5LWF4aXMgKHBvaW50cylcbiAgICBjb25zdCBtYXhZID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYucG9pbnRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHNldCBkb21haW4gb2YgeC1heGlzXG4gICAgeFNjYWxlLmRvbWFpbihbc3RhcnREYXRlLCBlbmREYXRlXSlcbiAgICBcbiAgICAvLyBzZXQgZG9tYWluIG9mIHktYXhpc1xuICAgIHlTY2FsZS5kb21haW4oWzAsIG1heFldKVxuXG4gICAgLy8gRk9SIFRFU1RJTkcgRE9NQUlOIFZBTFVFU1xuICAgIC8vIGNvbnNvbGUubG9nKFwibWluWFwiLCBzdGFydERhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibWF4WFwiLCBlbmREYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1heFlcIiwgbWF4WSk7XG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuICBjb25zdCB4QXhpcyA9IGQzXG4gICAgLmF4aXNCb3R0b20oKVxuICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAvLyAudGlja3MoZDMudGltZVllYXIuZXZlcnkoMSkpXG4gICAgLy8gLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiVZXCIpKVxuICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gIGNvbnN0IHlBeGlzID0gZDNcbiAgICAuYXhpc0xlZnQoKVxuICAgIC50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCAvIDEwKVxuICAgIC5zY2FsZSh5U2NhbGUpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIC8vIGFjY2Vzc29yIGZ1bmN0aW9uLiBUYWtlcyBpbiB0aGUgZGF0YSBhcnJheSBhbmQgZXh0cmFjdHMgdGhlIHgseSBjb29yZGluYXRlc1xuICBjb25zdCBsaW5lID0gZDNcbiAgICAubGluZSgpXG4gICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pO1xuICBcbiAgLy8gdG8gaWxsdXN0cmF0ZSBsaW5lLnkoKVxuICAvLyBjb25zdCBsaW5lID0gZDNcbiAgLy8gICAubGluZSgpXG4gIC8vICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAvLyAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnBvaW50OyB9KTtcbiAgXG4gIC8vIHRvIGRpZmZlcmVudGlhdGUgbGluZXNcbiAgbGV0IGxpbmVJZCA9IDA7XG4gIGNvbnN0IGxpbmVJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCJsaW5lLVwiICsgbGluZUlkKys7XG4gIH1cbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bZHJhd2luZ11BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgIC5jYWxsKHhBeGlzKSAvLyAuY2FsbCBjYWxscyB0aGUgZnVuY3Rpb24geEF4aXMgb24gdGhlIGVsZW1lbnRzIG9mIHRoZSBzZWxlY3Rpb24gZ1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAuY2FsbCh5QXhpcylcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgIC5hdHRyKFwieVwiLCAtNDApXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2RyYXdpbmddTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGNvbnN0IGxpbmVzID0gc3ZnLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgLmRhdGEoc2xpY2VzKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImdcIilcblxuICBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBsaW5lSWRzKSAvLyBkaWZmZXJlbnRpYXRlIGxpbmVzXG4gICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSlcbiAgXG5cbiAgLy8gYWRkIGxhYmVscyB0byBlYWNoIGxpbmVcbiAgbGluZXMuYXBwZW5kKFwidGV4dFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0ZXJtX2xhYmVsXCIgKyBcIiBhXCIpXG4gICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGQudGVybSB9KVxuICAgIC5hdHRyKFwieFwiLCA1KVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBjb25zdCBudW1Qb2ludHMgPSBkLnZhbHVlcy5sZW5ndGggLSAxOyAvLyB0aGUgaW5kZXggb2YgdGhlIGxhc3QgZGF0YSBwb2ludFxuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgKHhTY2FsZShkLnZhbHVlc1tudW1Qb2ludHNdLmRhdGUpICsgMTApXG4gICAgICAgICsgXCIsXCIgKyAoeVNjYWxlKGQudmFsdWVzW251bVBvaW50c10ucG9pbnQpICsgNSkgKyBcIilcIjtcbiAgICB9KVxuICAgIFxuXG4gIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuICAgIC8vIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuXG4gIC8vIHRlc3RfZnVuY3Rpb24oKTtcbiAgXG4gIH0pO1xuXG59KTsiLCJjb25zdCBzZWFyY2hUZXJtcyA9IFtcInZzY28gZ2lybFwiLCBcImJvb21lclwiXTtcblxubW9kdWxlLmV4cG9ydHMgPSBzZWFyY2hUZXJtczsiXSwic291cmNlUm9vdCI6IiJ9