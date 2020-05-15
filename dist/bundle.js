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
    }; //----------------------------[prep]TOOLTIP------------------------------//


    var tooltip = d3.select("body").append("div") // currently experimenting with select
    .attr("class", "tooltip").style("opacity", 0).style("position", "absolute"); // experimenting with selectors
    // console.log("g", d3.select("g")); // selecting g returns an empty array
    // console.log("g2", d3.selectAll("g")); // similar to above; no elements returned
    // console.log("g3", d3.select("body"));
    // console.log("svg", d3.select("svg")); 
    //-----------------------------[drawing]AXES------------------------------//

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

      var labelX = xScale(d.values[numPoints].date) + 10;
      var labelY = yScale(d.values[numPoints].point) + 5;
      return "translate(" + labelX + "," + labelY + ")";
    }); // to illustrate svg path mini-language
    // svg.append("path")
    // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
    //----------------------------[interactive]POINTS------------------------------//

    lines.selectAll("points").data(function (d) {
      return d.values;
    }).enter().append("circle").attr("cx", function (d) {
      return xScale(d.date);
    }).attr("cy", function (d) {
      return yScale(d.point);
    }).attr("r", 1).attr("class", "point").style("opacity", 1); //----------------------------[interactive]EVENTS------------------------------//
    // add invisible circles to increase responsive area

    lines.selectAll("points").data(function (d) {
      return d.values;
    }).enter().append("circle").attr("cx", function (d) {
      return xScale(d.date);
    }).attr("cy", function (d) {
      return yScale(d.point);
    }).attr('r', 10).style("opacity", 0) // configure events
    .on('mouseover', function (d) {
      tooltip.transition().duration(200).delay(30).style("opacity", 1); // .style("fill", "red") // removed because unnecessary

      tooltip.html(d.point).attr("cx", xScale(d.date)).attr("cy", yScale(d.point)); // .style("left", (d3.event.pageX + 25) + "px")
      // .style("top", (d3.event.pageY) + "px");

      var selection = d3.select(this) // [this] is the invisible circle
      .raise(); // .raise() re-inserts each selected element, in order, as the last child of its parent
      // console.log(this);
      // console.log(d);

      selection.transition().delay("20").duration("200").attr("r", 6).style("opacity", 1).style("fill", "#ed3700");
    }).on("mouseout", function (d) {
      tooltip.transition().duration(200).style("opacity", 0);
      var selection = d3.select(this);
      selection.transition().delay("20").duration("200").attr("r", 10).style("opacity", 0);
    }); // test transitions 1
    // d3.select("body")
    // .transition()
    // .delay(2000)
    // .on("start", function() {d3.select(this).style("background-color", "green")}) // works the same if you replace [this] with ["body"]
    // .style("background-color", "red")
    // test transitions 2
    // d3.select("body")
    // .transition().delay(1000).duration(2000)
    // .styleTween("background-color", function() { return d3.interpolate("green", "red")})
    // run data visualization from example.js
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6WyJ0ZXN0X2Z1bmN0aW9uIiwiY29uc29sZSIsImxvZyIsIndpZHRoIiwiaGVpZ2h0IiwibWFyZ2luIiwicGFkZGluZyIsImFkaiIsInN2ZyIsImQzIiwic2VsZWN0IiwiYXBwZW5kIiwiYXR0ciIsInN0eWxlIiwiY2xhc3NlZCIsInRpbWVDb252IiwidGltZVBhcnNlIiwiZGF0YXNldCIsImNzdiIsInRoZW4iLCJkYXRhIiwic2xpY2VzIiwiY29sdW1ucyIsInNsaWNlIiwibWFwIiwiaWQiLCJ2YWx1ZXMiLCJkIiwiZGF0ZSIsIm1lYXN1cmVtZW50IiwieFNjYWxlIiwic2NhbGVUaW1lIiwicmFuZ2UiLCJ5U2NhbGUiLCJzY2FsZUxpbmVhciIsInJhbmdlUm91bmQiLCJkb21haW4iLCJleHRlbnQiLCJtYXgiLCJjIiwieWF4aXMiLCJheGlzTGVmdCIsInRpY2tzIiwibGVuZ3RoIiwic2NhbGUiLCJ4YXhpcyIsImF4aXNCb3R0b20iLCJ0aW1lRGF5IiwiZXZlcnkiLCJ0aWNrRm9ybWF0IiwidGltZUZvcm1hdCIsImxpbmUiLCJ4IiwieSIsImlkcyIsImNhbGwiLCJ0ZXh0IiwibGluZXMiLCJzZWxlY3RBbGwiLCJlbnRlciIsInNlYXJjaFRlcm1zIiwicmVxdWlyZSIsImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImpzb24iLCJmb3JFYWNoIiwidGVybSIsImZvcm1hdHRlZEF4aXNUaW1lIiwicG9pbnQiLCJ2YWx1ZSIsInB1c2giLCJzdGFydERhdGUiLCJtaW4iLCJzIiwidiIsImVuZERhdGUiLCJtYXhZIiwieEF4aXMiLCJ0aW1lTW9udGgiLCJ5QXhpcyIsImxpbmVJZCIsImxpbmVJZHMiLCJ0b29sdGlwIiwibnVtUG9pbnRzIiwibGFiZWxYIiwibGFiZWxZIiwib24iLCJ0cmFuc2l0aW9uIiwiZHVyYXRpb24iLCJkZWxheSIsImh0bWwiLCJzZWxlY3Rpb24iLCJyYWlzZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFFO1FBQ0EsaURBQWlELGNBQWM7UUFDL0Q7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLHlDQUF5QyxpQ0FBaUM7UUFDMUUsZ0hBQWdILG1CQUFtQixFQUFFO1FBQ3JJO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMkJBQTJCLDBCQUEwQixFQUFFO1FBQ3ZELGlDQUFpQyxlQUFlO1FBQ2hEO1FBQ0E7UUFDQTs7UUFFQTtRQUNBLHNEQUFzRCwrREFBK0Q7O1FBRXJIO1FBQ0E7OztRQUdBO1FBQ0E7Ozs7Ozs7Ozs7Ozs7QUNsRkE7QUFBQTtBQUFlLFNBQVNBLGFBQVQsR0FBMEI7QUFFckM7QUFDSUMsU0FBTyxDQUFDQyxHQUFSLENBQVksK0JBQVo7QUFFQSxNQUFNQyxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsRUFBWixDQVRpQyxDQVdqQzs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JDLE1BQXhCLENBQStCLEtBQS9CLEVBQ1BDLElBRE8sQ0FDRixxQkFERSxFQUNxQixlQURyQixFQUVQQSxJQUZPLENBRUYsU0FGRSxFQUVVLENBQUMsQ0FBRCxHQUFLTCxHQUFOLEdBQWEsR0FBYixHQUFvQixDQUFDLENBQUQsR0FBS0EsR0FBekIsR0FBZ0MsR0FBaEMsSUFBdUNKLEtBQUssR0FBRyxJQUFJSSxHQUFuRCxJQUEwRCxHQUExRCxJQUFpRUgsTUFBTSxHQUFHLElBQUlHLEdBQTlFLENBRlQsRUFHUE0sS0FITyxDQUdELFNBSEMsRUFHVVAsT0FIVixFQUlQTyxLQUpPLENBSUQsUUFKQyxFQUlTUixNQUpULEVBS1BTLE9BTE8sQ0FLQyxhQUxELEVBS2dCLElBTGhCLENBQVosQ0FaaUMsQ0FtQmpDOztBQUVBLE1BQU1DLFFBQVEsR0FBR04sRUFBRSxDQUFDTyxTQUFILENBQWEsVUFBYixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR1IsRUFBRSxDQUFDUyxHQUFILENBQU8sd0JBQVAsQ0FBaEI7QUFFQUQsU0FBTyxDQUFDRSxJQUFSLENBQWEsVUFBVUMsSUFBVixFQUFnQjtBQUN6Qm5CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEJrQixJQUE1QjtBQUNBLFFBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxPQUFMLENBQWFDLEtBQWIsQ0FBbUIsQ0FBbkIsRUFBc0JDLEdBQXRCLENBQTBCLFVBQVVDLEVBQVYsRUFBYztBQUNuRCxhQUFPO0FBQ0hBLFVBQUUsRUFBRUEsRUFERDtBQUVIQyxjQUFNLEVBQUVOLElBQUksQ0FBQ0ksR0FBTCxDQUFTLFVBQVVHLENBQVYsRUFBYTtBQUMxQixpQkFBTztBQUNIQyxnQkFBSSxFQUFFYixRQUFRLENBQUNZLENBQUMsQ0FBQ0MsSUFBSCxDQURYO0FBRUhDLHVCQUFXLEVBQUUsQ0FBQ0YsQ0FBQyxDQUFDRixFQUFEO0FBRlosV0FBUDtBQUlILFNBTE87QUFGTCxPQUFQO0FBU0gsS0FWYyxDQUFmLENBRnlCLENBZXpCO0FBQ0E7QUFDQTs7QUFDQXhCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCbUIsTUFBOUIsRUFsQnlCLENBbUJ6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTs7QUFDQSxRQUFNUyxNQUFNLEdBQUdyQixFQUFFLENBQUNzQixTQUFILEdBQWVDLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUk3QixLQUFKLENBQXJCLENBQWY7QUFDQSxRQUFNOEIsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsV0FBSCxHQUFpQkMsVUFBakIsQ0FBNEIsQ0FBQy9CLE1BQUQsRUFBUyxDQUFULENBQTVCLENBQWY7QUFFQTBCLFVBQU0sQ0FBQ00sTUFBUCxDQUNJM0IsRUFBRSxDQUFDNEIsTUFBSCxDQUFVakIsSUFBVixFQUFnQixVQUFVTyxDQUFWLEVBQWE7QUFDekIsYUFBT1osUUFBUSxDQUFDWSxDQUFDLENBQUNDLElBQUgsQ0FBZjtBQUNILEtBRkQsQ0FESjtBQU1BSyxVQUFNLENBQUNHLE1BQVAsQ0FBYyxDQUFDLENBQUQsRUFDVjNCLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT2pCLE1BQVAsRUFBZSxVQUFVa0IsQ0FBVixFQUFhO0FBQ3hCLGFBQU85QixFQUFFLENBQUM2QixHQUFILENBQU9DLENBQUMsQ0FBQ2IsTUFBVCxFQUFpQixVQUFVQyxDQUFWLEVBQWE7QUFDakMsZUFBT0EsQ0FBQyxDQUFDRSxXQUFGLEdBQWdCLENBQXZCO0FBQ0gsT0FGTSxDQUFQO0FBR0gsS0FKRCxDQURVLENBQWQsRUF6Q3lCLENBaUR6QjtBQUNBO0FBR0E7O0FBRUEsUUFBTVcsS0FBSyxHQUFHL0IsRUFBRSxDQUFDZ0MsUUFBSCxHQUFjQyxLQUFkLENBQW9CckIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSyxNQUFWLENBQWlCaUIsTUFBckMsRUFBNkNDLEtBQTdDLENBQW1EWCxNQUFuRCxDQUFkO0FBRUEsUUFBTVksS0FBSyxHQUFHcEMsRUFBRSxDQUNYcUMsVUFEUyxHQUVUSixLQUZTLENBRUhqQyxFQUFFLENBQUNzQyxPQUFILENBQVdDLEtBQVgsQ0FBaUIsQ0FBakIsQ0FGRyxFQUdUQyxVQUhTLENBR0V4QyxFQUFFLENBQUN5QyxVQUFILENBQWMsT0FBZCxDQUhGLEVBSVROLEtBSlMsQ0FJSGQsTUFKRyxDQUFkLENBekR5QixDQStEekI7O0FBRUEsUUFBTXFCLElBQUksR0FBRzFDLEVBQUUsQ0FBQzBDLElBQUgsR0FDUkMsQ0FEUSxDQUNOLFVBQVV6QixDQUFWLEVBQWE7QUFBRSxhQUFPRyxNQUFNLENBQUNILENBQUMsQ0FBQ0MsSUFBSCxDQUFiO0FBQXdCLEtBRGpDLEVBRVJ5QixDQUZRLENBRU4sVUFBVTFCLENBQVYsRUFBYTtBQUFFLGFBQU9NLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDRSxXQUFILENBQWI7QUFBK0IsS0FGeEMsQ0FBYjtBQUlBLFFBQUlKLEVBQUUsR0FBRyxDQUFUOztBQUNBLFFBQU02QixHQUFHLEdBQUcsU0FBTkEsR0FBTSxHQUFZO0FBQ3BCLGFBQU8sVUFBVTdCLEVBQUUsRUFBbkI7QUFDSCxLQUZELENBdEV5QixDQTJFekI7QUFFQTs7O0FBR0FqQixPQUFHLENBQ0VHLE1BREwsQ0FDWSxHQURaLEVBRUtDLElBRkwsQ0FFVSxPQUZWLEVBRW1CLE1BRm5CLEVBR0tBLElBSEwsQ0FHVSxXQUhWLEVBR3VCLGlCQUFpQlIsTUFBakIsR0FBMEIsR0FIakQsRUFJS21ELElBSkwsQ0FJVVYsS0FKVjtBQU1BckMsT0FBRyxDQUNFRyxNQURMLENBQ1ksR0FEWixFQUVLQyxJQUZMLENBRVUsT0FGVixFQUVtQixNQUZuQixFQUdLMkMsSUFITCxDQUdVZixLQUhWLEVBSUs3QixNQUpMLENBSVksTUFKWixFQUtLQyxJQUxMLENBS1UsV0FMVixFQUt1QixhQUx2QixFQU1LQSxJQU5MLENBTVUsSUFOVixFQU1nQixRQU5oQixFQU9LQSxJQVBMLENBT1UsR0FQVixFQU9lLENBUGYsRUFRS0MsS0FSTCxDQVFXLGFBUlgsRUFRMEIsS0FSMUIsRUFTSzJDLElBVEwsQ0FTVSxXQVRWLEVBdEZ5QixDQWlHekI7O0FBRUEsUUFBTUMsS0FBSyxHQUFHakQsR0FBRyxDQUFDa0QsU0FBSixDQUFjLE9BQWQsRUFDVHRDLElBRFMsQ0FDSkMsTUFESSxFQUVUc0MsS0FGUyxHQUdUaEQsTUFIUyxDQUdGLEdBSEUsQ0FBZDtBQUtBOEMsU0FBSyxDQUFDOUMsTUFBTixDQUFhLE1BQWIsRUFDS0MsSUFETCxDQUNVLE9BRFYsRUFDbUIwQyxHQURuQixFQUVLMUMsSUFGTCxDQUVVLEdBRlYsRUFFZSxVQUFVZSxDQUFWLEVBQWE7QUFBRSxhQUFPd0IsSUFBSSxDQUFDeEIsQ0FBQyxDQUFDRCxNQUFILENBQVg7QUFBd0IsS0FGdEQ7QUFJQStCLFNBQUssQ0FBQzlDLE1BQU4sQ0FBYSxNQUFiLEVBQ0tDLElBREwsQ0FDVSxPQURWLEVBQ21CLGFBRG5CLEVBRUk7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBUEosS0FRS0EsSUFSTCxDQVFVLFdBUlYsRUFRdUIsVUFBVWUsQ0FBVixFQUFhO0FBQzVCLGFBQU8sZ0JBQWdCRyxNQUFNLENBQUNILENBQUMsQ0FBQ0QsTUFBRixDQUFTQyxDQUFDLENBQUNELE1BQUYsQ0FBU2lCLE1BQVQsR0FBa0IsQ0FBM0IsRUFBOEJmLElBQS9CLENBQU4sR0FBNkMsRUFBN0QsSUFDRCxHQURDLElBQ01LLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDRCxNQUFGLENBQVNDLENBQUMsQ0FBQ0QsTUFBRixDQUFTaUIsTUFBVCxHQUFrQixDQUEzQixFQUE4QmQsV0FBL0IsQ0FBTixHQUFvRCxDQUQxRCxJQUMrRCxHQUR0RTtBQUVILEtBWEwsRUFZS2pCLElBWkwsQ0FZVSxHQVpWLEVBWWUsQ0FaZixFQWFLNEMsSUFiTCxDQWFVLFVBQVU3QixDQUFWLEVBQWE7QUFBRSxhQUFRLFFBQUQsR0FBYUEsQ0FBQyxDQUFDRixFQUF0QjtBQUEwQixLQWJuRCxFQTVHeUIsQ0EwSHJCO0FBQ1AsR0EzSEQsRUF4QmlDLENBcUpyQztBQUNILEM7Ozs7Ozs7Ozs7OztBQ3RKRDtBQUFBO0FBQUE7O0FBQ0EsSUFBTW1DLFdBQVcsR0FBR0MsbUJBQU8sQ0FBQyw4Q0FBRCxDQUEzQjs7QUFFQUMsUUFBUSxDQUFDQyxnQkFBVCxDQUEwQixrQkFBMUIsRUFBOEMsWUFBWTtBQUV4RDlELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FELFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGNBQVosRUFBNEIwRCxXQUE1QixFQUh3RCxDQUt4RDtBQUNBOztBQUNBLE1BQU16RCxLQUFLLEdBQUcsR0FBZDtBQUNBLE1BQU1DLE1BQU0sR0FBRyxHQUFmO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLENBQWY7QUFDQSxNQUFNQyxPQUFPLEdBQUcsQ0FBaEI7QUFDQSxNQUFNQyxHQUFHLEdBQUcsRUFBWixDQVh3RCxDQWF4RDs7QUFDQSxNQUFNQyxHQUFHLEdBQUdDLEVBQUUsQ0FBQ0MsTUFBSCxDQUFVLFlBQVYsRUFBd0JDLE1BQXhCLENBQStCLEtBQS9CLEVBQ1RDLElBRFMsQ0FDSixxQkFESSxFQUNtQixlQURuQixFQUVWO0FBQ0E7QUFIVSxHQUlUQSxJQUpTLENBSUosU0FKSSxFQUtQLENBQUMsQ0FBRCxHQUFLTCxHQUFOLEdBQWEsR0FBYixHQUNDLENBQUMsQ0FBRCxHQUFLQSxHQUROLEdBQ2EsR0FEYixJQUVDSixLQUFLLEdBQUdJLEdBQUcsR0FBRyxDQUZmLElBRW9CLEdBRnBCLElBR0NILE1BQU0sR0FBR0csR0FBRyxHQUFHLENBSGhCLENBTFEsRUFVVE0sS0FWUyxDQVVILFNBVkcsRUFVUVAsT0FWUixFQVdUTyxLQVhTLENBV0gsUUFYRyxFQVdPUixNQVhQLEVBWVRTLE9BWlMsQ0FZRCxhQVpDLEVBWWMsSUFaZCxDQUFaLENBZHdELENBNEJ4RDtBQUNBOztBQUNBLE1BQU1DLFFBQVEsR0FBR04sRUFBRSxDQUFDTyxTQUFILENBQWEsV0FBYixDQUFqQjtBQUNBLE1BQU1DLE9BQU8sR0FBR1IsRUFBRSxDQUFDdUQsSUFBSCxDQUFRLHlCQUFSLENBQWhCO0FBRUEvQyxTQUFPLENBQUNFLElBQVIsQ0FBYSxVQUFVQyxJQUFWLEVBQWdCO0FBQzNCLFFBQUlDLE1BQU0sR0FBRyxFQUFiO0FBRUF1QyxlQUFXLENBQUNLLE9BQVosQ0FBb0IsVUFBQUMsSUFBSSxFQUFJO0FBRTFCLFVBQU0zQyxLQUFLLEdBQUc7QUFDWjJDLFlBQUksRUFBRUEsSUFETTtBQUVaeEMsY0FBTSxFQUFFTixJQUFJLENBQUM4QyxJQUFELENBQUosQ0FBVzFDLEdBQVgsQ0FBZSxVQUFVRyxDQUFWLEVBQWE7QUFDbEMsaUJBQU87QUFDTEMsZ0JBQUksRUFBRWIsUUFBUSxDQUFDWSxDQUFDLENBQUN3QyxpQkFBSCxDQURUO0FBRUxDLGlCQUFLLEVBQUUsQ0FBQ3pDLENBQUMsQ0FBQzBDLEtBQUYsQ0FBUSxDQUFSO0FBRkgsV0FBUDtBQUlELFNBTE87QUFGSSxPQUFkO0FBVUFoRCxZQUFNLENBQUNpRCxJQUFQLENBQVkvQyxLQUFaO0FBQ0QsS0FiRDtBQWVBdEIsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFzQm1CLE1BQXRCLEVBbEIyQixDQW9CM0I7QUFDQTs7QUFDQSxRQUFNUyxNQUFNLEdBQUdyQixFQUFFLENBQUNzQixTQUFILEdBQWVDLEtBQWYsQ0FBcUIsQ0FBQyxDQUFELEVBQUk3QixLQUFKLENBQXJCLENBQWY7QUFDQSxRQUFNOEIsTUFBTSxHQUFHeEIsRUFBRSxDQUFDeUIsV0FBSCxHQUFpQkMsVUFBakIsQ0FBNEIsQ0FBQy9CLE1BQUQsRUFBUyxDQUFULENBQTVCLENBQWYsQ0F2QjJCLENBMEIzQjs7QUFDQSxRQUFNbUUsU0FBUyxHQUFHOUQsRUFBRSxDQUFDK0QsR0FBSCxDQUFPbkQsTUFBUCxFQUFlLFVBQVVvRCxDQUFWLEVBQWE7QUFDNUMsYUFBT2hFLEVBQUUsQ0FBQytELEdBQUgsQ0FBT0MsQ0FBQyxDQUFDL0MsTUFBVCxFQUFpQixVQUFVZ0QsQ0FBVixFQUFhO0FBQ25DLGVBQU9BLENBQUMsQ0FBQzlDLElBQVQ7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUppQixDQUFsQjtBQU1BLFFBQU0rQyxPQUFPLEdBQUdsRSxFQUFFLENBQUM2QixHQUFILENBQU9qQixNQUFQLEVBQWUsVUFBVW9ELENBQVYsRUFBYTtBQUMxQyxhQUFPaEUsRUFBRSxDQUFDNkIsR0FBSCxDQUFPbUMsQ0FBQyxDQUFDL0MsTUFBVCxFQUFpQixVQUFVZ0QsQ0FBVixFQUFhO0FBQ25DLGVBQU9BLENBQUMsQ0FBQzlDLElBQVQ7QUFDRCxPQUZNLENBQVA7QUFHRCxLQUplLENBQWhCLENBakMyQixDQXdDM0I7O0FBQ0EsUUFBTWdELElBQUksR0FBR25FLEVBQUUsQ0FBQzZCLEdBQUgsQ0FBT2pCLE1BQVAsRUFBZSxVQUFVb0QsQ0FBVixFQUFhO0FBQ3ZDLGFBQU9oRSxFQUFFLENBQUM2QixHQUFILENBQU9tQyxDQUFDLENBQUMvQyxNQUFULEVBQWlCLFVBQVNnRCxDQUFULEVBQVk7QUFDbEMsZUFBT0EsQ0FBQyxDQUFDTixLQUFUO0FBQ0QsT0FGTSxDQUFQO0FBR0QsS0FKWSxDQUFiLENBekMyQixDQStDM0I7O0FBQ0F0QyxVQUFNLENBQUNNLE1BQVAsQ0FBYyxDQUFDbUMsU0FBRCxFQUFZSSxPQUFaLENBQWQsRUFoRDJCLENBa0QzQjs7QUFDQTFDLFVBQU0sQ0FBQ0csTUFBUCxDQUFjLENBQUMsQ0FBRCxFQUFJd0MsSUFBSixDQUFkLEVBbkQyQixDQXFEM0I7QUFDQTtBQUNBO0FBQ0E7QUFHRjs7QUFFQSxRQUFNQyxLQUFLLEdBQUdwRSxFQUFFLENBQ2JxQyxVQURXLEdBRVhKLEtBRlcsQ0FFTGpDLEVBQUUsQ0FBQ3FFLFNBQUgsQ0FBYTlCLEtBQWIsQ0FBbUIsRUFBbkIsQ0FGSyxFQUdYQyxVQUhXLENBR0F4QyxFQUFFLENBQUN5QyxVQUFILENBQWMsT0FBZCxDQUhBLEVBSVo7QUFDQTtBQUxZLEtBTVhOLEtBTlcsQ0FNTGQsTUFOSyxDQUFkO0FBUUEsUUFBTWlELEtBQUssR0FBR3RFLEVBQUUsQ0FDYmdDLFFBRFcsR0FFWEMsS0FGVyxDQUVMckIsTUFBTSxDQUFDLENBQUQsQ0FBTixDQUFVSyxNQUFWLENBQWlCaUIsTUFBakIsR0FBMEIsRUFGckIsRUFHWEMsS0FIVyxDQUdMWCxNQUhLLENBQWQsQ0FyRTZCLENBMEU3QjtBQUVBOztBQUNBLFFBQU1rQixJQUFJLEdBQUcxQyxFQUFFLENBQ1owQyxJQURVLEdBRVZDLENBRlUsQ0FFUixVQUFVekIsQ0FBVixFQUFhO0FBQUUsYUFBT0csTUFBTSxDQUFDSCxDQUFDLENBQUNDLElBQUgsQ0FBYjtBQUF3QixLQUYvQixFQUdWeUIsQ0FIVSxDQUdSLFVBQVUxQixDQUFWLEVBQWE7QUFBRSxhQUFPTSxNQUFNLENBQUNOLENBQUMsQ0FBQ3lDLEtBQUgsQ0FBYjtBQUF5QixLQUhoQyxDQUFiLENBN0U2QixDQWtGN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOztBQUNBLFFBQUlZLE1BQU0sR0FBRyxDQUFiOztBQUNBLFFBQU1DLE9BQU8sR0FBRyxTQUFWQSxPQUFVLEdBQVk7QUFDeEIsYUFBTyxVQUFVRCxNQUFNLEVBQXZCO0FBQ0gsS0FGRCxDQTFGNkIsQ0E4RjdCOzs7QUFFQSxRQUFNRSxPQUFPLEdBQUd6RSxFQUFFLENBQUNDLE1BQUgsQ0FBVSxNQUFWLEVBQWtCQyxNQUFsQixDQUF5QixLQUF6QixFQUFnQztBQUFoQyxLQUNiQyxJQURhLENBQ1IsT0FEUSxFQUNDLFNBREQsRUFFYkMsS0FGYSxDQUVQLFNBRk8sRUFFSSxDQUZKLEVBR2JBLEtBSGEsQ0FHUCxVQUhPLEVBR0ssVUFITCxDQUFoQixDQWhHNkIsQ0FxRzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFFQUwsT0FBRyxDQUNBRyxNQURILENBQ1UsR0FEVixFQUVHQyxJQUZILENBRVEsT0FGUixFQUVpQixNQUZqQixFQUdHQSxJQUhILENBR1EsV0FIUixFQUdxQixpQkFBaUJSLE1BQWpCLEdBQTBCLEdBSC9DLEVBSUdtRCxJQUpILENBSVFzQixLQUpSLEVBN0c2QixDQWlIZDs7QUFFZnJFLE9BQUcsQ0FDQUcsTUFESCxDQUNVLEdBRFYsRUFFR0MsSUFGSCxDQUVRLE9BRlIsRUFFaUIsTUFGakIsRUFHRzJDLElBSEgsQ0FHUXdCLEtBSFIsRUFJR3BFLE1BSkgsQ0FJVSxNQUpWLEVBS0c2QyxJQUxILENBS1EsV0FMUixFQU1HNUMsSUFOSCxDQU1RLElBTlIsRUFNYyxRQU5kLEVBT0dBLElBUEgsQ0FPUSxHQVBSLEVBT2EsQ0FBQyxFQVBkLEVBUUdDLEtBUkgsQ0FRUyxhQVJULEVBUXdCLEtBUnhCLEVBbkg2QixDQTZIN0I7O0FBRUEsUUFBTTRDLEtBQUssR0FBR2pELEdBQUcsQ0FBQ2tELFNBQUosQ0FBYyxPQUFkLEVBQ1h0QyxJQURXLENBQ05DLE1BRE0sRUFFWHNDLEtBRlcsR0FHWGhELE1BSFcsQ0FHSixHQUhJLENBQWQ7QUFLQThDLFNBQUssQ0FBQzlDLE1BQU4sQ0FBYSxNQUFiLEVBQ0dDLElBREgsQ0FDUSxPQURSLEVBQ2lCcUUsT0FEakIsRUFDMEI7QUFEMUIsS0FFR3JFLElBRkgsQ0FFUSxHQUZSLEVBRWEsVUFBVWUsQ0FBVixFQUFhO0FBQUUsYUFBT3dCLElBQUksQ0FBQ3hCLENBQUMsQ0FBQ0QsTUFBSCxDQUFYO0FBQXdCLEtBRnBELEVBcEk2QixDQXlJN0I7O0FBQ0ErQixTQUFLLENBQUM5QyxNQUFOLENBQWEsTUFBYixFQUNHQyxJQURILENBQ1EsT0FEUixFQUNpQixlQUFlLElBRGhDLEVBRUc0QyxJQUZILENBRVEsVUFBVTdCLENBQVYsRUFBYTtBQUFFLGFBQU9BLENBQUMsQ0FBQ3VDLElBQVQ7QUFBZSxLQUZ0QyxFQUdHdEQsSUFISCxDQUdRLEdBSFIsRUFHYSxDQUhiLEVBSUdBLElBSkgsQ0FJUSxXQUpSLEVBSXFCLFVBQVVlLENBQVYsRUFBYTtBQUM5QixVQUFNd0QsU0FBUyxHQUFHeEQsQ0FBQyxDQUFDRCxNQUFGLENBQVNpQixNQUFULEdBQWtCLENBQXBDLENBRDhCLENBQ1M7O0FBQ3ZDLFVBQU15QyxNQUFNLEdBQUd0RCxNQUFNLENBQUNILENBQUMsQ0FBQ0QsTUFBRixDQUFTeUQsU0FBVCxFQUFvQnZELElBQXJCLENBQU4sR0FBbUMsRUFBbEQ7QUFDQSxVQUFNeUQsTUFBTSxHQUFHcEQsTUFBTSxDQUFDTixDQUFDLENBQUNELE1BQUYsQ0FBU3lELFNBQVQsRUFBb0JmLEtBQXJCLENBQU4sR0FBb0MsQ0FBbkQ7QUFDQSxhQUFPLGVBQWVnQixNQUFmLEdBQXdCLEdBQXhCLEdBQThCQyxNQUE5QixHQUF1QyxHQUE5QztBQUNELEtBVEgsRUExSTZCLENBc0o3QjtBQUNFO0FBQ0E7QUFHRjs7QUFFQTVCLFNBQUssQ0FBQ0MsU0FBTixDQUFnQixRQUFoQixFQUNHdEMsSUFESCxDQUNRLFVBQVVPLENBQVYsRUFBYTtBQUFFLGFBQU9BLENBQUMsQ0FBQ0QsTUFBVDtBQUFpQixLQUR4QyxFQUVHaUMsS0FGSCxHQUdHaEQsTUFISCxDQUdVLFFBSFYsRUFJR0MsSUFKSCxDQUlRLElBSlIsRUFJYyxVQUFVZSxDQUFWLEVBQWE7QUFBRSxhQUFPRyxNQUFNLENBQUNILENBQUMsQ0FBQ0MsSUFBSCxDQUFiO0FBQXdCLEtBSnJELEVBS0doQixJQUxILENBS1EsSUFMUixFQUtjLFVBQVVlLENBQVYsRUFBYTtBQUFFLGFBQU9NLE1BQU0sQ0FBQ04sQ0FBQyxDQUFDeUMsS0FBSCxDQUFiO0FBQXlCLEtBTHRELEVBTUd4RCxJQU5ILENBTVEsR0FOUixFQU1hLENBTmIsRUFPR0EsSUFQSCxDQU9RLE9BUFIsRUFPaUIsT0FQakIsRUFRR0MsS0FSSCxDQVFTLFNBUlQsRUFRb0IsQ0FScEIsRUE3SjZCLENBdUs3QjtBQUVBOztBQUNBNEMsU0FBSyxDQUFDQyxTQUFOLENBQWdCLFFBQWhCLEVBQ0d0QyxJQURILENBQ1EsVUFBVU8sQ0FBVixFQUFhO0FBQUUsYUFBUUEsQ0FBQyxDQUFDRCxNQUFWO0FBQW9CLEtBRDNDLEVBRUdpQyxLQUZILEdBR0doRCxNQUhILENBR1UsUUFIVixFQUlHQyxJQUpILENBSVEsSUFKUixFQUljLFVBQVVlLENBQVYsRUFBYTtBQUFFLGFBQU9HLE1BQU0sQ0FBQ0gsQ0FBQyxDQUFDQyxJQUFILENBQWI7QUFBd0IsS0FKckQsRUFLR2hCLElBTEgsQ0FLUSxJQUxSLEVBS2MsVUFBVWUsQ0FBVixFQUFhO0FBQUUsYUFBT00sTUFBTSxDQUFDTixDQUFDLENBQUN5QyxLQUFILENBQWI7QUFBeUIsS0FMdEQsRUFNR3hELElBTkgsQ0FNUSxHQU5SLEVBTWEsRUFOYixFQU9HQyxLQVBILENBT1MsU0FQVCxFQU9vQixDQVBwQixFQVNFO0FBVEYsS0FVR3lFLEVBVkgsQ0FVTSxXQVZOLEVBVW1CLFVBQVUzRCxDQUFWLEVBQWE7QUFFNUJ1RCxhQUFPLENBQUNLLFVBQVIsR0FDR0MsUUFESCxDQUNZLEdBRFosRUFFR0MsS0FGSCxDQUVTLEVBRlQsRUFHRzVFLEtBSEgsQ0FHUyxTQUhULEVBR29CLENBSHBCLEVBRjRCLENBTTFCOztBQUVGcUUsYUFBTyxDQUFDUSxJQUFSLENBQWEvRCxDQUFDLENBQUN5QyxLQUFmLEVBQ0N4RCxJQURELENBQ00sSUFETixFQUNja0IsTUFBTSxDQUFDSCxDQUFDLENBQUNDLElBQUgsQ0FEcEIsRUFFQ2hCLElBRkQsQ0FFTSxJQUZOLEVBRWNxQixNQUFNLENBQUNOLENBQUMsQ0FBQ3lDLEtBQUgsQ0FGcEIsRUFSNEIsQ0FXNUI7QUFDQTs7QUFFQSxVQUFNdUIsU0FBUyxHQUFHbEYsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixFQUFnQjtBQUFoQixPQUNma0YsS0FEZSxFQUFsQixDQWQ0QixDQWVoQjtBQUVaO0FBQ0E7O0FBRUFELGVBQVMsQ0FDTkosVUFESCxHQUVHRSxLQUZILENBRVMsSUFGVCxFQUdHRCxRQUhILENBR1ksS0FIWixFQUlHNUUsSUFKSCxDQUlRLEdBSlIsRUFJYSxDQUpiLEVBS0dDLEtBTEgsQ0FLUyxTQUxULEVBS29CLENBTHBCLEVBTUdBLEtBTkgsQ0FNUyxNQU5ULEVBTWlCLFNBTmpCO0FBT0MsS0FyQ0wsRUF3Q0N5RSxFQXhDRCxDQXdDSSxVQXhDSixFQXdDZ0IsVUFBVTNELENBQVYsRUFBYTtBQUN6QnVELGFBQU8sQ0FBQ0ssVUFBUixHQUNHQyxRQURILENBQ1ksR0FEWixFQUVHM0UsS0FGSCxDQUVTLFNBRlQsRUFFb0IsQ0FGcEI7QUFJRixVQUFNOEUsU0FBUyxHQUFHbEYsRUFBRSxDQUFDQyxNQUFILENBQVUsSUFBVixDQUFsQjtBQUVBaUYsZUFBUyxDQUNOSixVQURILEdBRUdFLEtBRkgsQ0FFUyxJQUZULEVBR0dELFFBSEgsQ0FHWSxLQUhaLEVBSUc1RSxJQUpILENBSVEsR0FKUixFQUlhLEVBSmIsRUFLR0MsS0FMSCxDQUtTLFNBTFQsRUFLb0IsQ0FMcEI7QUFNQyxLQXJESCxFQTFLNkIsQ0FpTzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVDLEdBalBEO0FBbVBELENBcFJELEU7Ozs7Ozs7Ozs7O0FDSEEsSUFBTStDLFdBQVcsR0FBRyxDQUFDLFdBQUQsRUFBYyxRQUFkLENBQXBCO0FBRUFpQyxNQUFNLENBQUNDLE9BQVAsR0FBaUJsQyxXQUFqQixDIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9leGFtcGxlLmpzXCI7XG5jb25zdCBzZWFyY2hUZXJtcyA9IHJlcXVpcmUoXCIuL3NlYXJjaFRlcm1zLmpzXCIpO1xuXG5kb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG5cbiAgY29uc29sZS5sb2coXCJpbmRleC5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHRlcm1zXCIsIHNlYXJjaFRlcm1zKVxuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1TVkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vLyBcbiAgLy8gc2V0IHRoZSBkaW1lbnNpb25zIGFuZCBtYXJnaW5zIG9mIHRoZSBncmFwaFxuICBjb25zdCB3aWR0aCA9IDgwMDtcbiAgY29uc3QgaGVpZ2h0ID0gNDAwO1xuICBjb25zdCBtYXJnaW4gPSA1O1xuICBjb25zdCBwYWRkaW5nID0gNTtcbiAgY29uc3QgYWRqID0gODA7XG5cbiAgLy8gYXBwZW5kIFNWR1xuICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgIC5hdHRyKFwicHJlc2VydmVBc3BlY3RSYXRpb1wiLCBcInhNaW5ZTWluIG1lZXRcIilcbiAgICAvLyAuYXR0cihcIndpZHRoXCIsIHdpZHRoKVxuICAgIC8vIC5hdHRyKFwiaGVpZ2h0XCIsIGhlaWdodCoyKVxuICAgIC5hdHRyKFwidmlld0JveFwiLFxuICAgICAgKC0xICogYWRqKSArIFwiIFwiICtcbiAgICAgICgtMSAqIGFkaikgKyBcIiBcIiArXG4gICAgICAod2lkdGggKyBhZGogKiAzKSArIFwiIFwiICtcbiAgICAgIChoZWlnaHQgKyBhZGogKiAzKVxuICAgIClcbiAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgLy8gcGFyc2UgdGhlIGRhdGUgYW5kIHRpbWVcbiAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlYiAlZCwgJVlcIik7XG4gIGNvbnN0IGRhdGFzZXQgPSBkMy5qc29uKFwiLi9kaXN0L2Fzc2V0cy9kYXRhLmpzb25cIik7XG5cbiAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgbGV0IHNsaWNlcyA9IFtdO1xuXG4gICAgc2VhcmNoVGVybXMuZm9yRWFjaCh0ZXJtID0+IHtcblxuICAgICAgY29uc3Qgc2xpY2UgPSB7XG4gICAgICAgIHRlcm06IHRlcm0sXG4gICAgICAgIHZhbHVlczogZGF0YVt0ZXJtXS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSksXG4gICAgICAgICAgICBwb2ludDogK2QudmFsdWVbMF1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG5cbiAgICAgIHNsaWNlcy5wdXNoKHNsaWNlKTtcbiAgICB9KVxuXG4gICAgY29uc29sZS5sb2coXCJzbGljZXNcIiwgc2xpY2VzKTtcblxuICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgICBjb25zdCB5U2NhbGUgPSBkMy5zY2FsZUxpbmVhcigpLnJhbmdlUm91bmQoW2hlaWdodCwgMF0pO1xuICAgIFxuXG4gICAgLy8gZGVmaW5lIG1pbiBhbmQgbWF4IHZhbHVlcyBmb3IgZG9tYWluIG9uIHgtYXhpcyAodGltZSlcbiAgICBjb25zdCBzdGFydERhdGUgPSBkMy5taW4oc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGQzLm1pbihzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIGNvbnN0IGVuZERhdGUgPSBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAocykge1xuICAgICAgcmV0dXJuIGQzLm1heChzLnZhbHVlcywgZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgcmV0dXJuIHYuZGF0ZVxuICAgICAgfSlcbiAgICB9KTtcblxuICAgIFxuICAgIC8vIGRlZmluZSBtYXggdmFsdWUgZm9yIGRvbWFpbiBvbiB5LWF4aXMgKHBvaW50cylcbiAgICBjb25zdCBtYXhZID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uKHYpIHtcbiAgICAgICAgcmV0dXJuIHYucG9pbnRcbiAgICAgIH0pXG4gICAgfSlcblxuICAgIC8vIHNldCBkb21haW4gb2YgeC1heGlzXG4gICAgeFNjYWxlLmRvbWFpbihbc3RhcnREYXRlLCBlbmREYXRlXSlcbiAgICBcbiAgICAvLyBzZXQgZG9tYWluIG9mIHktYXhpc1xuICAgIHlTY2FsZS5kb21haW4oWzAsIG1heFldKVxuXG4gICAgLy8gRk9SIFRFU1RJTkcgRE9NQUlOIFZBTFVFU1xuICAgIC8vIGNvbnNvbGUubG9nKFwibWluWFwiLCBzdGFydERhdGUpO1xuICAgIC8vIGNvbnNvbGUubG9nKFwibWF4WFwiLCBlbmREYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1heFlcIiwgbWF4WSk7XG5cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuICBjb25zdCB4QXhpcyA9IGQzXG4gICAgLmF4aXNCb3R0b20oKVxuICAgIC50aWNrcyhkMy50aW1lTW9udGguZXZlcnkoMTIpKVxuICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlWVwiKSlcbiAgICAvLyAudGlja3MoZDMudGltZVllYXIuZXZlcnkoMSkpXG4gICAgLy8gLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiVZXCIpKVxuICAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gIGNvbnN0IHlBeGlzID0gZDNcbiAgICAuYXhpc0xlZnQoKVxuICAgIC50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCAvIDEwKVxuICAgIC5zY2FsZSh5U2NhbGUpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIC8vIGFjY2Vzc29yIGZ1bmN0aW9uLiBUYWtlcyBpbiB0aGUgZGF0YSBhcnJheSBhbmQgZXh0cmFjdHMgdGhlIHgseSBjb29yZGluYXRlc1xuICBjb25zdCBsaW5lID0gZDNcbiAgICAubGluZSgpXG4gICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pO1xuICBcbiAgLy8gdG8gaWxsdXN0cmF0ZSBsaW5lLnkoKVxuICAvLyBjb25zdCBsaW5lID0gZDNcbiAgLy8gICAubGluZSgpXG4gIC8vICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAvLyAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnBvaW50OyB9KTtcbiAgXG4gIC8vIHRvIGRpZmZlcmVudGlhdGUgbGluZXNcbiAgbGV0IGxpbmVJZCA9IDA7XG4gIGNvbnN0IGxpbmVJZHMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICByZXR1cm4gXCJsaW5lLVwiICsgbGluZUlkKys7XG4gIH1cblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1UT09MVElQLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIGNvbnN0IHRvb2x0aXAgPSBkMy5zZWxlY3QoXCJib2R5XCIpLmFwcGVuZChcImRpdlwiKSAvLyBjdXJyZW50bHkgZXhwZXJpbWVudGluZyB3aXRoIHNlbGVjdFxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJ0b29sdGlwXCIpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuICAgIC5zdHlsZShcInBvc2l0aW9uXCIsIFwiYWJzb2x1dGVcIik7XG4gIFxuICAvLyBleHBlcmltZW50aW5nIHdpdGggc2VsZWN0b3JzXG4gIC8vIGNvbnNvbGUubG9nKFwiZ1wiLCBkMy5zZWxlY3QoXCJnXCIpKTsgLy8gc2VsZWN0aW5nIGcgcmV0dXJucyBhbiBlbXB0eSBhcnJheVxuICAvLyBjb25zb2xlLmxvZyhcImcyXCIsIGQzLnNlbGVjdEFsbChcImdcIikpOyAvLyBzaW1pbGFyIHRvIGFib3ZlOyBubyBlbGVtZW50cyByZXR1cm5lZFxuICAvLyBjb25zb2xlLmxvZyhcImczXCIsIGQzLnNlbGVjdChcImJvZHlcIikpO1xuICAvLyBjb25zb2xlLmxvZyhcInN2Z1wiLCBkMy5zZWxlY3QoXCJzdmdcIikpOyBcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW2RyYXdpbmddQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgICAuY2FsbCh4QXhpcykgLy8gLmNhbGwgY2FsbHMgdGhlIGZ1bmN0aW9uIHhBeGlzIG9uIHRoZSBlbGVtZW50cyBvZiB0aGUgc2VsZWN0aW9uIGdcblxuICBzdmdcbiAgICAuYXBwZW5kKFwiZ1wiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgLmNhbGwoeUF4aXMpXG4gICAgLmFwcGVuZChcInRleHRcIilcbiAgICAudGV4dChcIkZyZXF1ZW5jeVwiKVxuICAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgICAuYXR0cihcInlcIiwgLTQwKVxuICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtkcmF3aW5nXUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAgIC5kYXRhKHNsaWNlcylcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJnXCIpXG5cbiAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgIC5hdHRyKFwiY2xhc3NcIiwgbGluZUlkcykgLy8gZGlmZmVyZW50aWF0ZSBsaW5lc1xuICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pXG4gIFxuXG4gIC8vIGFkZCBsYWJlbHMgdG8gZWFjaCBsaW5lXG4gIGxpbmVzLmFwcGVuZChcInRleHRcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidGVybV9sYWJlbFwiICsgXCIgYVwiKVxuICAgIC50ZXh0KGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnRlcm0gfSlcbiAgICAuYXR0cihcInhcIiwgNSlcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgY29uc3QgbnVtUG9pbnRzID0gZC52YWx1ZXMubGVuZ3RoIC0gMTsgLy8gdGhlIGluZGV4IG9mIHRoZSBsYXN0IGRhdGEgcG9pbnRcbiAgICAgIGNvbnN0IGxhYmVsWCA9IHhTY2FsZShkLnZhbHVlc1tudW1Qb2ludHNdLmRhdGUpICsgMTA7XG4gICAgICBjb25zdCBsYWJlbFkgPSB5U2NhbGUoZC52YWx1ZXNbbnVtUG9pbnRzXS5wb2ludCkgKyA1O1xuICAgICAgcmV0dXJuIFwidHJhbnNsYXRlKFwiICsgbGFiZWxYICsgXCIsXCIgKyBsYWJlbFkgKyBcIilcIjtcbiAgICB9KVxuICAgIFxuXG4gIC8vIHRvIGlsbHVzdHJhdGUgc3ZnIHBhdGggbWluaS1sYW5ndWFnZVxuICAgIC8vIHN2Zy5hcHBlbmQoXCJwYXRoXCIpXG4gICAgLy8gLmF0dHIoXCJkXCIsIFwiTTEsIDVMMjAsIDIwTDQwLCAxMEw2MCwgNDBMODAsIDVMMTAwLCA2MFwiKVxuICBcbiAgXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtpbnRlcmFjdGl2ZV1QT0lOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIGxpbmVzLnNlbGVjdEFsbChcInBvaW50c1wiKVxuICAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7IHJldHVybiBkLnZhbHVlcyB9KVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgfSlcbiAgICAuYXR0cihcInJcIiwgMSlcbiAgICAuYXR0cihcImNsYXNzXCIsIFwicG9pbnRcIilcbiAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtpbnRlcmFjdGl2ZV1FVkVOVFMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIC8vIGFkZCBpbnZpc2libGUgY2lyY2xlcyB0byBpbmNyZWFzZSByZXNwb25zaXZlIGFyZWFcbiAgbGluZXMuc2VsZWN0QWxsKFwicG9pbnRzXCIpXG4gICAgLmRhdGEoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChkLnZhbHVlcyk7IH0pXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwiY2lyY2xlXCIpXG4gICAgLmF0dHIoXCJjeFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geFNjYWxlKGQuZGF0ZSk7IH0pXG4gICAgLmF0dHIoXCJjeVwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KVxuICAgIC5hdHRyKCdyJywgMTApXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKVxuXG4gICAgLy8gY29uZmlndXJlIGV2ZW50c1xuICAgIC5vbignbW91c2VvdmVyJywgZnVuY3Rpb24gKGQpIHtcbiAgICAgIFxuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLmRlbGF5KDMwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpO1xuICAgICAgICAvLyAuc3R5bGUoXCJmaWxsXCIsIFwicmVkXCIpIC8vIHJlbW92ZWQgYmVjYXVzZSB1bm5lY2Vzc2FyeVxuICAgICAgXG4gICAgICB0b29sdGlwLmh0bWwoZC5wb2ludClcbiAgICAgIC5hdHRyKFwiY3hcIiwgKCB4U2NhbGUoZC5kYXRlKSApKVxuICAgICAgLmF0dHIoXCJjeVwiLCAoIHlTY2FsZShkLnBvaW50KSApKTtcbiAgICAgIC8vIC5zdHlsZShcImxlZnRcIiwgKGQzLmV2ZW50LnBhZ2VYICsgMjUpICsgXCJweFwiKVxuICAgICAgLy8gLnN0eWxlKFwidG9wXCIsIChkMy5ldmVudC5wYWdlWSkgKyBcInB4XCIpO1xuXG4gICAgICBjb25zdCBzZWxlY3Rpb24gPSBkMy5zZWxlY3QodGhpcykgLy8gW3RoaXNdIGlzIHRoZSBpbnZpc2libGUgY2lyY2xlXG4gICAgICAgIC5yYWlzZSgpOyAvLyAucmFpc2UoKSByZS1pbnNlcnRzIGVhY2ggc2VsZWN0ZWQgZWxlbWVudCwgaW4gb3JkZXIsIGFzIHRoZSBsYXN0IGNoaWxkIG9mIGl0cyBwYXJlbnRcbiAgICAgIFxuICAgICAgLy8gY29uc29sZS5sb2codGhpcyk7XG4gICAgICAvLyBjb25zb2xlLmxvZyhkKTtcbiAgICAgIFxuICAgICAgc2VsZWN0aW9uXG4gICAgICAgIC50cmFuc2l0aW9uKClcbiAgICAgICAgLmRlbGF5KFwiMjBcIilcbiAgICAgICAgLmR1cmF0aW9uKFwiMjAwXCIpXG4gICAgICAgIC5hdHRyKFwiclwiLCA2KVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDEpXG4gICAgICAgIC5zdHlsZShcImZpbGxcIiwgXCIjZWQzNzAwXCIpO1xuICAgICAgfSlcbiAgICAgIFxuXG4gIC5vbihcIm1vdXNlb3V0XCIsIGZ1bmN0aW9uIChkKSB7XG4gICAgICB0b29sdGlwLnRyYW5zaXRpb24oKVxuICAgICAgICAuZHVyYXRpb24oMjAwKVxuICAgICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgICAgXG4gICAgY29uc3Qgc2VsZWN0aW9uID0gZDMuc2VsZWN0KHRoaXMpO1xuXG4gICAgc2VsZWN0aW9uXG4gICAgICAudHJhbnNpdGlvbigpXG4gICAgICAuZGVsYXkoXCIyMFwiKVxuICAgICAgLmR1cmF0aW9uKFwiMjAwXCIpXG4gICAgICAuYXR0cihcInJcIiwgMTApXG4gICAgICAuc3R5bGUoXCJvcGFjaXR5XCIsIDApO1xuICAgIH0pO1xuICBcbiAgLy8gdGVzdCB0cmFuc2l0aW9ucyAxXG4gIC8vIGQzLnNlbGVjdChcImJvZHlcIilcbiAgLy8gLnRyYW5zaXRpb24oKVxuICAvLyAuZGVsYXkoMjAwMClcbiAgLy8gLm9uKFwic3RhcnRcIiwgZnVuY3Rpb24oKSB7ZDMuc2VsZWN0KHRoaXMpLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcImdyZWVuXCIpfSkgLy8gd29ya3MgdGhlIHNhbWUgaWYgeW91IHJlcGxhY2UgW3RoaXNdIHdpdGggW1wiYm9keVwiXVxuICAvLyAuc3R5bGUoXCJiYWNrZ3JvdW5kLWNvbG9yXCIsIFwicmVkXCIpXG4gIFxuICAvLyB0ZXN0IHRyYW5zaXRpb25zIDJcbiAgLy8gZDMuc2VsZWN0KFwiYm9keVwiKVxuICAvLyAudHJhbnNpdGlvbigpLmRlbGF5KDEwMDApLmR1cmF0aW9uKDIwMDApXG4gIC8vIC5zdHlsZVR3ZWVuKFwiYmFja2dyb3VuZC1jb2xvclwiLCBmdW5jdGlvbigpIHsgcmV0dXJuIGQzLmludGVycG9sYXRlKFwiZ3JlZW5cIiwgXCJyZWRcIil9KVxuICBcblxuICAvLyBydW4gZGF0YSB2aXN1YWxpemF0aW9uIGZyb20gZXhhbXBsZS5qc1xuICAvLyB0ZXN0X2Z1bmN0aW9uKCk7XG4gIFxuICB9KTtcblxufSk7IiwiY29uc3Qgc2VhcmNoVGVybXMgPSBbXCJ2c2NvIGdpcmxcIiwgXCJib29tZXJcIl07XG5cbm1vZHVsZS5leHBvcnRzID0gc2VhcmNoVGVybXM7Il0sInNvdXJjZVJvb3QiOiIifQ==