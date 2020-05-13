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

    var xAxis = d3.axisBottom().ticks(d3.timeMonth.every(12)).tickFormat(d3.timeFormat("%b %Y")) // .ticks(d3.timeYear.every(1))
    // .tickFormat(d3.timeFormat("%Y"))
    .scale(xScale);
    var yAxis = d3.axisLeft().ticks(slices[0].values.length / 10).scale(yScale); //----------------------------[prep]LINES------------------------------//

    var line = d3.line().x(function (d) {
      return xScale(d.date);
    }).y(function (d) {
      return yScale(d.point);
    }); // let id = 0;
    // const ids = function () {
    //     return "line-" + id++;
    // }
    //-----------------------------[drawing]AXES------------------------------//

    svg.append("g").attr("class", "axis").attr("transform", "translate(0," + height + ")").call(xAxis);
    svg.append("g").attr("class", "axis").call(yAxis).append("text").text("Frequency").attr("dy", "0.75em").attr("y", -40).style("text-anchor", "end"); //----------------------------[drawing]LINES------------------------------//

    var lines = svg.selectAll("lines").data(slices).enter().append("g");
    lines.append("path").attr("d", function (d) {
      return line(d.values);
    }); // test_function();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJjYWxsIiwidGV4dCIsInNlYXJjaFRlcm1zIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb24iLCJmb3JFYWNoIiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwicG9pbnQiLCJ2YWx1ZSIsInB1c2giLCJzdGFydERhdGUiLCJtaW4iLCJzIiwidiIsImVuZERhdGUiLCJtYXhZIiwieEF4aXMiLCJheGlzQm90dG9tIiwidGltZU1vbnRoIiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsInlBeGlzIiwibGluZSIsIngiLCJ5IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLFNBQVNBLGFBQVQsR0FBMEI7QUFFckM7QUFDSUMsU0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFFQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsRUFBWixDQVRpQyxDQVdqQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JDLE1BQXhCLENBQStCLEtBQS9CLEVBQ1BDLElBRE8sQ0FDRixxQkFERSxFQUNxQixlQURyQixFQUVQQSxJQUZPLENBRUYsU0FGRSxFQUVVLENBQUMsQ0FBRCxHQUFLTCxHQUFOLEdBQWEsR0FBYixHQUFvQixDQUFDLENBQUQsR0FBS0EsR0FBekIsR0FBZ0MsR0FBaEMsSUFBdUNKLEtBQUssR0FBRyxJQUFJSSxHQUFuRCxJQUEwRCxHQUExRCxJQUFpRUgsTUFBTSxHQUFHLElBQUlHLEdBQTlFLENBRlQsRUFHUE0sS0FITyxDQUdELFNBSEMsRUFHVVAsT0FIVixFQUlQTyxLQUpPLENBSUQsUUFKQyxFQUlTUixNQUpULEVBS1BTLE9BTE8sQ0FLQyxhQUxELEVBS2dCLElBTGhCLENBQVosQ0FaaUMsQ0FtQmpDOztBQUVBLE1BQU1DLFFBQVEsR0FBR04sRUFBRSxDQUFDTyxTQUFILENBQWEsVUFBYixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR1IsRUFBRSxDQUFDUyxHQUFILENBQU8sd0JBQVAsQ0FBaEI7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUN6Qm5CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJrQixJQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQXRCLENBQTBCLFVBQVVDLEVBQVYsRUFBYztBQUNuRCxhQUFPO0FBQ0hBLFVBQUUsRUFBRUEsRUFERDtBQUVIQyxjQUFNLEVBQUVOLElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQVVHLENBQVYsRUFBYTtBQUMxQixpQkFBTztBQUNIQyxnQkFBSSxFQUFFYixRQUFRLENBQUNZLENBQUMsQ0FBQ0MsSUFBSCxDQURYO0FBRUhDLHVCQUFXLEVBQUUsQ0FBQ0YsQ0FBQyxDQUFDRixFQUFEO0FBRlosV0FBUDtBQUlILFNBTE87QUFGTCxPQUFQO0FBU0gsS0FWYyxDQUFmLENBRnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQXhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCbUIsTUFBOUIsRUFsQnlCLENBbUJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFDQSxRQUFNUyxNQUFNLEdBQUdyQixFQUFFLENBQUNzQixTQUFILEdBQWVDLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUk3QixLQUFKLENBQXJCLENBQWY7QUFDQSxRQUFNOEIsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsV0FBSCxHQUFpQkMsVUFBakIsQ0FBNEIsQ0FBQy9CLE1BQUQsRUFBUyxDQUFULENBQTVCLENBQWY7QUFFQTBCLFVBQU0sQ0FBQ00sTUFBUCxDQUNJM0IsRUFBRSxDQUFDNEIsTUFBSCxDQUFVakIsSUFBVixFQUFnQixVQUFVTyxDQUFWLEVBQWE7QUFDekIsYUFBT1osUUFBUSxDQUFDWSxDQUFDLENBQUNDLElBQUgsQ0FBZjtBQUNILEtBRkQsQ0FESjtBQU1BSyxVQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFDLENBQUQsRUFDVjNCLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT2pCLE1BQVAsRUFBZSxVQUFVa0IsQ0FBVixFQUFhO0FBQ3hCLGFBQU85QixFQUFFLENBQUM2QixHQUFILENBQU9DLENBQUMsQ0FBQ2IsTUFBVCxFQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDakMsZUFBT0EsQ0FBQyxDQUFDRSxXQUFGLEdBQWdCLENBQXZCO0FBQ0gsT0FGTSxDQUFQO0FBR0gsS0FKRCxDQURVLENBQWQsRUF6Q3lCLENBaUR6QjtBQUNBO0FBR0E7O0FBRUEsUUFBTVcsS0FBSyxHQUFHL0IsRUFBRSxDQUFDZ0MsUUFBSCxHQUFjQyxLQUFkLENBQW9CckIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSyxNQUFWLENBQWlCaUIsTUFBckMsRUFBNkNDLEtBQTdDLENBQW1EWCxNQUFuRCxDQUFkLENBdkR5QixDQXlEekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQXpCLE9BQUcsQ0FDRUcsTUFETCxDQUNZLEdBRFosRUFFS0MsSUFGTCxDQUVVLE9BRlYsRUFFbUIsTUFGbkIsRUFHS2lDLElBSEwsQ0FHVUwsS0FIVixFQUlLN0IsTUFKTCxDQUlZLE1BSlosRUFLS0MsSUFMTCxDQUtVLFdBTFYsRUFLdUIsYUFMdkIsRUFNS0EsSUFOTCxDQU1VLElBTlYsRUFNZ0IsUUFOaEIsRUFPS0EsSUFQTCxDQU9VLEdBUFYsRUFPZSxDQVBmLEVBUUtDLEtBUkwsQ0FRVyxhQVJYLEVBUTBCLEtBUjFCLEVBU0tpQyxJQVRMLENBU1UsV0FUVixFQXRGeUIsQ0FpR3pCO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0gsR0E1R0QsRUF4QmlDLENBc0lyQztBQUNILEM7Ozs7Ozs7Ozs7OztBQ3ZJRDtBQUFBO0FBQUE7O0FBQ0EsSUFBTUMsV0FBVyxHQUFHQyxtQkFBTyxDQUFDLDhDQUFELENBQTNCOztBQUVBQyxRQUFRLENBQUNDLGdCQUFULENBQTBCLGtCQUExQixFQUE4QyxZQUFZO0FBRXhEakQsU0FBTyxDQUFDQyxHQUFSLENBQVksNkJBQVo7QUFDQUQsU0FBTyxDQUFDQyxHQUFSLENBQVksY0FBWixFQUE0QjZDLFdBQTVCLEVBSHdELENBS3hEO0FBQ0E7O0FBQ0EsTUFBTTVDLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxFQUFaLENBWHdELENBYXhEOztBQUNBLE1BQU1DLEdBQUcsR0FBR0MsRUFBRSxDQUNYQyxNQURTLENBQ0YsWUFERSxFQUVUQyxNQUZTLENBRUYsS0FGRSxFQUdUQyxJQUhTLENBR0oscUJBSEksRUFHbUIsZUFIbkIsRUFJVjtBQUNBO0FBTFUsR0FNVEEsSUFOUyxDQU1KLFNBTkksRUFPUCxDQUFDLENBQUQsR0FBS0wsR0FBTixHQUFhLEdBQWIsR0FDQyxDQUFDLENBQUQsR0FBS0EsR0FETixHQUNhLEdBRGIsSUFFQ0osS0FBSyxHQUFHSSxHQUFHLEdBQUcsQ0FGZixJQUVvQixHQUZwQixJQUdDSCxNQUFNLEdBQUdHLEdBQUcsR0FBRyxDQUhoQixDQVBRLEVBWVRNLEtBWlMsQ0FZSCxTQVpHLEVBWVFQLE9BWlIsRUFhVE8sS0FiUyxDQWFILFFBYkcsRUFhT1IsTUFiUCxFQWNUUyxPQWRTLENBY0QsYUFkQyxFQWNjLElBZGQsQ0FBWixDQWR3RCxDQThCeEQ7QUFDQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUdOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhLFdBQWIsQ0FBakI7QUFDQSxNQUFNQyxPQUFPLEdBQUdSLEVBQUUsQ0FBQzBDLElBQUgsQ0FBUSx5QkFBUixDQUFoQjtBQUVBbEMsU0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUMzQixRQUFJQyxNQUFNLEdBQUcsRUFBYjtBQUVBMEIsZUFBVyxDQUFDSyxPQUFaLENBQW9CLFVBQUFDLElBQUksRUFBSTtBQUUxQixVQUFNOUIsS0FBSyxHQUFHO0FBQ1o4QixZQUFJLEVBQUVBLElBRE07QUFFWjNCLGNBQU0sRUFBRU4sSUFBSSxDQUFDaUMsSUFBRCxDQUFKLENBQVc3QixHQUFYLENBQWUsVUFBVUcsQ0FBVixFQUFhO0FBQ2xDLGlCQUFPO0FBQ0xDLGdCQUFJLEVBQUViLFFBQVEsQ0FBQ1ksQ0FBQyxDQUFDMkIsaUJBQUgsQ0FEVDtBQUVMQyxpQkFBSyxFQUFFLENBQUM1QixDQUFDLENBQUM2QixLQUFGLENBQVEsQ0FBUjtBQUZILFdBQVA7QUFJRCxTQUxPO0FBRkksT0FBZDtBQVVBbkMsWUFBTSxDQUFDb0MsSUFBUCxDQUFZbEMsS0FBWjtBQUNELEtBYkQ7QUFlQXRCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBc0JtQixNQUF0QixFQWxCMkIsQ0FvQjNCO0FBQ0E7O0FBQ0EsUUFBTVMsTUFBTSxHQUFHckIsRUFBRSxDQUFDc0IsU0FBSCxHQUFlQyxLQUFmLENBQXFCLENBQUMsQ0FBRCxFQUFJN0IsS0FBSixDQUFyQixDQUFmO0FBQ0EsUUFBTThCLE1BQU0sR0FBR3hCLEVBQUUsQ0FBQ3lCLFdBQUgsR0FBaUJDLFVBQWpCLENBQTRCLENBQUMvQixNQUFELEVBQVMsQ0FBVCxDQUE1QixDQUFmLENBdkIyQixDQTBCM0I7O0FBQ0EsUUFBTXNELFNBQVMsR0FBR2pELEVBQUUsQ0FBQ2tELEdBQUgsQ0FBT3RDLE1BQVAsRUFBZSxVQUFVdUMsQ0FBVixFQUFhO0FBQzVDLGFBQU9uRCxFQUFFLENBQUNrRCxHQUFILENBQU9DLENBQUMsQ0FBQ2xDLE1BQVQsRUFBaUIsVUFBVW1DLENBQVYsRUFBYTtBQUNuQyxlQUFPQSxDQUFDLENBQUNqQyxJQUFUO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FKaUIsQ0FBbEI7QUFNQSxRQUFNa0MsT0FBTyxHQUFHckQsRUFBRSxDQUFDNkIsR0FBSCxDQUFPakIsTUFBUCxFQUFlLFVBQVV1QyxDQUFWLEVBQWE7QUFDMUMsYUFBT25ELEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT3NCLENBQUMsQ0FBQ2xDLE1BQVQsRUFBaUIsVUFBVW1DLENBQVYsRUFBYTtBQUNuQyxlQUFPQSxDQUFDLENBQUNqQyxJQUFUO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FKZSxDQUFoQixDQWpDMkIsQ0F3QzNCOztBQUNBLFFBQU1tQyxJQUFJLEdBQUd0RCxFQUFFLENBQUM2QixHQUFILENBQU9qQixNQUFQLEVBQWUsVUFBVXVDLENBQVYsRUFBYTtBQUN2QyxhQUFPbkQsRUFBRSxDQUFDNkIsR0FBSCxDQUFPc0IsQ0FBQyxDQUFDbEMsTUFBVCxFQUFpQixVQUFTbUMsQ0FBVCxFQUFZO0FBQ2xDLGVBQU9BLENBQUMsQ0FBQ04sS0FBVDtBQUNELE9BRk0sQ0FBUDtBQUdELEtBSlksQ0FBYixDQXpDMkIsQ0ErQzNCOztBQUNBekIsVUFBTSxDQUFDTSxNQUFQLENBQWMsQ0FBQ3NCLFNBQUQsRUFBWUksT0FBWixDQUFkLEVBaEQyQixDQWtEM0I7O0FBQ0E3QixVQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFDLENBQUQsRUFBSTJCLElBQUosQ0FBZCxFQW5EMkIsQ0FxRDNCO0FBQ0E7QUFDQTtBQUNBO0FBR0Y7O0FBRUEsUUFBTUMsS0FBSyxHQUFHdkQsRUFBRSxDQUNid0QsVUFEVyxHQUVYdkIsS0FGVyxDQUVMakMsRUFBRSxDQUFDeUQsU0FBSCxDQUFhQyxLQUFiLENBQW1CLEVBQW5CLENBRkssRUFHWEMsVUFIVyxDQUdBM0QsRUFBRSxDQUFDNEQsVUFBSCxDQUFjLE9BQWQsQ0FIQSxFQUlaO0FBQ0E7QUFMWSxLQU1YekIsS0FOVyxDQU1MZCxNQU5LLENBQWQ7QUFRQSxRQUFNd0MsS0FBSyxHQUFHN0QsRUFBRSxDQUNiZ0MsUUFEVyxHQUVYQyxLQUZXLENBRUxyQixNQUFNLENBQUMsQ0FBRCxDQUFOLENBQVVLLE1BQVYsQ0FBaUJpQixNQUFqQixHQUEwQixFQUZyQixFQUdYQyxLQUhXLENBR0xYLE1BSEssQ0FBZCxDQXJFNkIsQ0EwRTdCOztBQUVBLFFBQU1zQyxJQUFJLEdBQUc5RCxFQUFFLENBQ1o4RCxJQURVLEdBRVZDLENBRlUsQ0FFUixVQUFVN0MsQ0FBVixFQUFhO0FBQUUsYUFBT0csTUFBTSxDQUFDSCxDQUFDLENBQUNDLElBQUgsQ0FBYjtBQUF3QixLQUYvQixFQUdWNkMsQ0FIVSxDQUdSLFVBQVU5QyxDQUFWLEVBQWE7QUFBRSxhQUFPTSxNQUFNLENBQUNOLENBQUMsQ0FBQzRCLEtBQUgsQ0FBYjtBQUF5QixLQUhoQyxDQUFiLENBNUU2QixDQWlGN0I7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQS9DLE9BQUcsQ0FDQUcsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsTUFGakIsRUFHR0EsSUFISCxDQUdRLFdBSFIsRUFHcUIsaUJBQWlCUixNQUFqQixHQUEwQixHQUgvQyxFQUlHeUMsSUFKSCxDQUlRbUIsS0FKUjtBQU1BeEQsT0FBRyxDQUNBRyxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixNQUZqQixFQUdHaUMsSUFISCxDQUdReUIsS0FIUixFQUlHM0QsTUFKSCxDQUlVLE1BSlYsRUFLR21DLElBTEgsQ0FLUSxXQUxSLEVBTUdsQyxJQU5ILENBTVEsSUFOUixFQU1jLFFBTmQsRUFPR0EsSUFQSCxDQU9RLEdBUFIsRUFPYSxDQUFDLEVBUGQsRUFRR0MsS0FSSCxDQVFTLGFBUlQsRUFRd0IsS0FSeEIsRUE5RjZCLENBd0c3Qjs7QUFFQSxRQUFNNkQsS0FBSyxHQUFHbEUsR0FBRyxDQUNkbUUsU0FEVyxDQUNELE9BREMsRUFFWHZELElBRlcsQ0FFTkMsTUFGTSxFQUdYdUQsS0FIVyxHQUlYakUsTUFKVyxDQUlKLEdBSkksQ0FBZDtBQU1BK0QsU0FBSyxDQUNGL0QsTUFESCxDQUNVLE1BRFYsRUFFR0MsSUFGSCxDQUVRLEdBRlIsRUFFYSxVQUFVZSxDQUFWLEVBQWE7QUFBRSxhQUFPNEMsSUFBSSxDQUFDNUMsQ0FBQyxDQUFDRCxNQUFILENBQVg7QUFBd0IsS0FGcEQsRUFoSDZCLENBcUg3QjtBQUVDLEdBdkhEO0FBeUhELENBNUpELEU7Ozs7Ozs7Ozs7O0FDSEEsSUFBTXFCLFdBQVcsR0FBRyxDQUFDLFdBQUQsRUFBYyxRQUFkLENBQXBCO0FBRUE4QixNQUFNLENBQUNDLE9BQVAsR0FBaUIvQixXQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICAvLyBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAvLyAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgLy8gICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgLy8gICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgIC8vICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAvLyAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgLy8gICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICAvLyBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgLy8gY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgLy8gICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgLy8gfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIC8vIHN2Z1xuICAgICAgICAgICAgLy8gICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAvLyAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgIC8vICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAvLyAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8gY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgIC8vICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAvLyAgICAgLmVudGVyKClcbiAgICAgICAgICAgIC8vICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgLy8gbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgLy8gICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG5cbiAgICAgICAgfSk7XG5cbiAgICAvLyB9KVxufSIsImltcG9ydCB0ZXN0X2Z1bmN0aW9uIGZyb20gXCIuL2V4YW1wbGUuanNcIjtcbmNvbnN0IHNlYXJjaFRlcm1zID0gcmVxdWlyZShcIi4vc2VhcmNoVGVybXMuanNcIik7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uICgpIHtcblxuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcbiAgY29uc29sZS5sb2coXCJzZWFyY2ggdGVybXNcIiwgc2VhcmNoVGVybXMpXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXVNWRy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vIFxuICAvLyBzZXQgdGhlIGRpbWVuc2lvbnMgYW5kIG1hcmdpbnMgb2YgdGhlIGdyYXBoXG4gIGNvbnN0IHdpZHRoID0gODAwO1xuICBjb25zdCBoZWlnaHQgPSA0MDA7XG4gIGNvbnN0IG1hcmdpbiA9IDU7XG4gIGNvbnN0IHBhZGRpbmcgPSA1O1xuICBjb25zdCBhZGogPSA4MDtcblxuICAvLyBhcHBlbmQgU1ZHXG4gIGNvbnN0IHN2ZyA9IGQzXG4gICAgLnNlbGVjdChcIiNjb250YWluZXJcIilcbiAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgIC8vIC5hdHRyKFwid2lkdGhcIiwgd2lkdGgpXG4gICAgLy8gLmF0dHIoXCJoZWlnaHRcIiwgaGVpZ2h0KjIpXG4gICAgLmF0dHIoXCJ2aWV3Qm94XCIsXG4gICAgICAoLTEgKiBhZGopICsgXCIgXCIgK1xuICAgICAgKC0xICogYWRqKSArIFwiIFwiICtcbiAgICAgICh3aWR0aCArIGFkaiAqIDMpICsgXCIgXCIgK1xuICAgICAgKGhlaWdodCArIGFkaiAqIDMpXG4gICAgKVxuICAgIC5zdHlsZShcInBhZGRpbmdcIiwgcGFkZGluZylcbiAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgIC5jbGFzc2VkKFwic3ZnLWNvbnRlbnRcIiwgdHJ1ZSk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXURBVEEtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAvLyBwYXJzZSB0aGUgZGF0ZSBhbmQgdGltZVxuICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiViICVkLCAlWVwiKTtcbiAgY29uc3QgZGF0YXNldCA9IGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL2RhdGEuanNvblwiKTtcblxuICBkYXRhc2V0LnRoZW4oZnVuY3Rpb24gKGRhdGEpIHtcbiAgICBsZXQgc2xpY2VzID0gW107XG5cbiAgICBzZWFyY2hUZXJtcy5mb3JFYWNoKHRlcm0gPT4ge1xuXG4gICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgdGVybTogdGVybSxcbiAgICAgICAgdmFsdWVzOiBkYXRhW3Rlcm1dLm1hcChmdW5jdGlvbiAoZCkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBkYXRlOiB0aW1lQ29udihkLmZvcm1hdHRlZEF4aXNUaW1lKSxcbiAgICAgICAgICAgIHBvaW50OiArZC52YWx1ZVswXVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH1cblxuICAgICAgc2xpY2VzLnB1c2goc2xpY2UpO1xuICAgIH0pXG5cbiAgICBjb25zb2xlLmxvZyhcInNsaWNlc1wiLCBzbGljZXMpO1xuXG4gICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICAgIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG4gICAgXG5cbiAgICAvLyBkZWZpbmUgbWluIGFuZCBtYXggdmFsdWVzIGZvciBkb21haW4gb24geC1heGlzICh0aW1lKVxuICAgIGNvbnN0IHN0YXJ0RGF0ZSA9IGQzLm1pbihzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZDMubWluKHMudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5kYXRlXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgY29uc3QgZW5kRGF0ZSA9IGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbiAodikge1xuICAgICAgICByZXR1cm4gdi5kYXRlXG4gICAgICB9KVxuICAgIH0pO1xuXG4gICAgXG4gICAgLy8gZGVmaW5lIG1heCB2YWx1ZSBmb3IgZG9tYWluIG9uIHktYXhpcyAocG9pbnRzKVxuICAgIGNvbnN0IG1heFkgPSBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24odikge1xuICAgICAgICByZXR1cm4gdi5wb2ludFxuICAgICAgfSlcbiAgICB9KVxuXG4gICAgLy8gc2V0IGRvbWFpbiBvZiB4LWF4aXNcbiAgICB4U2NhbGUuZG9tYWluKFtzdGFydERhdGUsIGVuZERhdGVdKVxuICAgIFxuICAgIC8vIHNldCBkb21haW4gb2YgeS1heGlzXG4gICAgeVNjYWxlLmRvbWFpbihbMCwgbWF4WV0pXG5cbiAgICAvLyBGT1IgVEVTVElORyBET01BSU4gVkFMVUVTXG4gICAgLy8gY29uc29sZS5sb2coXCJtaW5YXCIsIHN0YXJ0RGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJtYXhYXCIsIGVuZERhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibWF4WVwiLCBtYXhZKTtcblxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIGNvbnN0IHhBeGlzID0gZDNcbiAgICAuYXhpc0JvdHRvbSgpXG4gICAgLnRpY2tzKGQzLnRpbWVNb250aC5ldmVyeSgxMikpXG4gICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVZXCIpKVxuICAgIC8vIC50aWNrcyhkMy50aW1lWWVhci5ldmVyeSgxKSlcbiAgICAvLyAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJVlcIikpXG4gICAgLnNjYWxlKHhTY2FsZSk7XG5cbiAgY29uc3QgeUF4aXMgPSBkM1xuICAgIC5heGlzTGVmdCgpXG4gICAgLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoIC8gMTApXG4gICAgLnNjYWxlKHlTY2FsZSk7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGNvbnN0IGxpbmUgPSBkM1xuICAgIC5saW5lKClcbiAgICAueChmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgLnkoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgfSk7XG5cbiAgLy8gbGV0IGlkID0gMDtcbiAgLy8gY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAvLyAgICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gIC8vIH1cbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bZHJhd2luZ11BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJ0cmFuc2xhdGUoMCxcIiArIGhlaWdodCArIFwiKVwiKVxuICAgIC5jYWxsKHhBeGlzKVxuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAuY2FsbCh5QXhpcylcbiAgICAuYXBwZW5kKFwidGV4dFwiKVxuICAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpXG4gICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgIC5hdHRyKFwieVwiLCAtNDApXG4gICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIik7XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2RyYXdpbmddTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGNvbnN0IGxpbmVzID0gc3ZnXG4gICAgLnNlbGVjdEFsbChcImxpbmVzXCIpXG4gICAgLmRhdGEoc2xpY2VzKVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImdcIik7XG5cbiAgbGluZXNcbiAgICAuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG5cbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuICBcbiAgfSk7XG5cbn0pOyIsImNvbnN0IHNlYXJjaFRlcm1zID0gW1widnNjbyBnaXJsXCIsIFwiYm9vbWVyXCJdO1xuXG5tb2R1bGUuZXhwb3J0cyA9IHNlYXJjaFRlcm1zOyJdLCJzb3VyY2VSb290IjoiIn0=