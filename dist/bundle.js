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

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no static exports found */
/***/ (function(module, exports) {

// import * as generator from "./generator.js";
document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js dom content has loaded"); // generator.dataGenerator();

  var width = 960;
  var height = 500;
  var margin = 5;
  var padding = 5;
  var adj = 30; // we are appending SVG first

  var svg = d3.select("#container").append("svg").attr("preserveAspectRatio", "xMinYMin meet").attr("viewBox", "-" + adj + " -" + adj + " " + (width + adj * 3) + " " + (height + adj * 3)).style("padding", padding).style("margin", margin).classed("svg-content", true); //-----------------------------DATA------------------------------//
  // const timeConv = d3.timeParse("%d-%b-%Y");

  var timeConv = d3.timeParse("%B %-d, %Y"); // const dataset = d3.csv("./dist/assets/test.csv");

  var dataset = d3.json("./dist/assets/vscoGirl.json");
  dataset.then(function (data) {
    console.log("data", data);
    var slices = data.forEach(function (d) {
      console.log(d); // d.date = parseTime(d.key);
      // d.mesasurement = +d.value
    }); // console.log("Column headers", data.columns);
    //  console.log("Column headers without date", data.columns.slice(1));
    // //    // returns the sliced dataset

    console.log("Slices", slices); // //    // returns the first slice
    // //    console.log("First slice",slices[0]);
    // //    // returns the array in the first slice
    // //    console.log("A array",slices[0].values);
    // //    // returns the date of the first row in the first slice
    // //    console.log("Date element",slices[0].values[0].date);
    // //    // returns the array's length
    // //    console.log("Array length",(slices[0].values).length);
    // //----------------------------SCALES-----------------------------//
    // // stretch data values from 0 to the svg's width
    // const xScale = d3.scaleTime().range([0, width]);
    // const yScale = d3.scaleLinear().rangeRound([height, 0]);
    // xScale.domain(
    //   d3.extent(data, function (d) {
    //     return timeConv(d.date);
    //   })
    // );
    // yScale.domain([0, 
    //   d3.max(slices, function (c) {
    //     return d3.max(c.values, function (d) {
    //       return d.measurement + 4;
    //     });
    //   })
    // ]);
    // // const testx = d3.extent(data, function (d) {
    // //   return timeConv(d.date);
    // // });
    // // const testy = d3.max(slices, function (c) {
    // //   return d3.max(c.values, function (d) {
    // //     return d.measurement + 4;
    // //   });
    // // });
    // // console.log(testx, testy);
    // console.log("xScale", xScale());
    // //-----------------------------AXES------------------------------//
    // const yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale);
    // const xaxis = d3
    //   .axisBottom()
    //   .ticks(d3.timeDay.every(1))
    //   .tickFormat(d3.timeFormat("%b %d"))
    //   .scale(xScale);
    // //----------------------------LINES------------------------------//
    // const line = d3.line()
    //   .x(function (d) { return xScale(d.date); })
    //   .y(function (d) { return yScale(d.measurement); });
    // let id = 0;
    // const ids = function () {
    //   return "line-" + id++;
    // }
    // //-------------------------2. DRAWING----------------------------//
    // //-----------------------------AXES------------------------------//
    // svg
    //   .append("g")
    //   .attr("class", "axis")
    //   .attr("transform", "translate(0," + height + ")")
    //   .call(xaxis);
    // svg
    //   .append("g")
    //   .attr("class", "axis")
    //   .call(yaxis)
    //   .append("text")
    //   .attr("transform", "rotate(-90)")
    //   .attr("dy", "0.75em")
    //   .attr("y", 6)
    //   .style("text-anchor", "end")
    //   .text("Frequency");
    // //----------------------------LINES------------------------------//
    // const lines = svg.selectAll("lines")
    //   .data(slices)
    //   .enter()
    //   .append("g");
    // lines.append("path")
    //   .attr("d", function (d) { return line(d.values); });
  });
});

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJhZGoiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsImNsYXNzZWQiLCJ0aW1lQ29udiIsInRpbWVQYXJzZSIsImRhdGFzZXQiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzbGljZXMiLCJmb3JFYWNoIiwiZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFFdkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaLEVBRnVELENBSXZEOztBQUVBLE1BQU1DLEtBQUssR0FBRyxHQUFkO0FBQ0EsTUFBTUMsTUFBTSxHQUFHLEdBQWY7QUFDQSxNQUFNQyxNQUFNLEdBQUcsQ0FBZjtBQUNBLE1BQU1DLE9BQU8sR0FBRyxDQUFoQjtBQUNBLE1BQU1DLEdBQUcsR0FBRyxFQUFaLENBVnVELENBWXZEOztBQUNBLE1BQU1DLEdBQUcsR0FBR0MsRUFBRSxDQUFDQyxNQUFILENBQVUsWUFBVixFQUNHQyxNQURILENBQ1UsS0FEVixFQUVHQyxJQUZILENBRVEscUJBRlIsRUFFK0IsZUFGL0IsRUFHR0EsSUFISCxDQUdRLFNBSFIsRUFHbUIsTUFDVEwsR0FEUyxHQUNILElBREcsR0FFVEEsR0FGUyxHQUVILEdBRkcsSUFHUkosS0FBSyxHQUFHSSxHQUFHLEdBQUMsQ0FISixJQUdTLEdBSFQsSUFJUkgsTUFBTSxHQUFHRyxHQUFHLEdBQUMsQ0FKTCxDQUhuQixFQVFHTSxLQVJILENBUVMsU0FSVCxFQVFvQlAsT0FScEIsRUFTR08sS0FUSCxDQVNTLFFBVFQsRUFTbUJSLE1BVG5CLEVBVUdTLE9BVkgsQ0FVVyxhQVZYLEVBVTBCLElBVjFCLENBQVosQ0FidUQsQ0F5QnZEO0FBRUE7O0FBQ0EsTUFBTUMsUUFBUSxHQUFHTixFQUFFLENBQUNPLFNBQUgsQ0FBYSxZQUFiLENBQWpCLENBNUJ1RCxDQTZCdkQ7O0FBQ0EsTUFBTUMsT0FBTyxHQUFHUixFQUFFLENBQUNTLElBQUgsQ0FBUSw2QkFBUixDQUFoQjtBQUVBRCxTQUFPLENBQUNFLElBQVIsQ0FBYSxVQUFTQyxJQUFULEVBQWU7QUFDMUJuQixXQUFPLENBQUNDLEdBQVIsQ0FBWSxNQUFaLEVBQW9Ca0IsSUFBcEI7QUFFQSxRQUFNQyxNQUFNLEdBQUdELElBQUksQ0FBQ0UsT0FBTCxDQUFhLFVBQVNDLENBQVQsRUFBWTtBQUN0Q3RCLGFBQU8sQ0FBQ0MsR0FBUixDQUFZcUIsQ0FBWixFQURzQyxDQUV0QztBQUNBO0FBQ0QsS0FKYyxDQUFmLENBSDBCLENBVTFCO0FBQ0E7QUFDRjs7QUFDR3RCLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLFFBQVosRUFBcUJtQixNQUFyQixFQWJ5QixDQWM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBRUE7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUdDLEdBakhEO0FBbUhELENBbkpELEUiLCJmaWxlIjoiYnVuZGxlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0bW9kdWxlc1ttb2R1bGVJZF0uY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cbiBcdFx0Ly8gRmxhZyB0aGUgbW9kdWxlIGFzIGxvYWRlZFxuIFx0XHRtb2R1bGUubCA9IHRydWU7XG5cbiBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbiBcdFx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xuIFx0fVxuXG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBtb2R1bGVzO1xuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5jID0gaW5zdGFsbGVkTW9kdWxlcztcblxuIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBuYW1lLCBnZXR0ZXIpIHtcbiBcdFx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBuYW1lKSkge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuIFx0XHR9XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3RcbiBcdC8vIG1vZGUgJiAxOiB2YWx1ZSBpcyBhIG1vZHVsZSBpZCwgcmVxdWlyZSBpdFxuIFx0Ly8gbW9kZSAmIDI6IG1lcmdlIGFsbCBwcm9wZXJ0aWVzIG9mIHZhbHVlIGludG8gdGhlIG5zXG4gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3RcbiBcdC8vIG1vZGUgJiA4fDE6IGJlaGF2ZSBsaWtlIHJlcXVpcmVcbiBcdF9fd2VicGFja19yZXF1aXJlX18udCA9IGZ1bmN0aW9uKHZhbHVlLCBtb2RlKSB7XG4gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuIFx0XHRpZihtb2RlICYgOCkgcmV0dXJuIHZhbHVlO1xuIFx0XHRpZigobW9kZSAmIDQpICYmIHR5cGVvZiB2YWx1ZSA9PT0gJ29iamVjdCcgJiYgdmFsdWUgJiYgdmFsdWUuX19lc01vZHVsZSkgcmV0dXJuIHZhbHVlO1xuIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIobnMpO1xuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkobnMsICdkZWZhdWx0JywgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdmFsdWUgfSk7XG4gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbiBcdFx0cmV0dXJuIG5zO1xuIFx0fTtcblxuIFx0Ly8gZ2V0RGVmYXVsdEV4cG9ydCBmdW5jdGlvbiBmb3IgY29tcGF0aWJpbGl0eSB3aXRoIG5vbi1oYXJtb255IG1vZHVsZXNcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubiA9IGZ1bmN0aW9uKG1vZHVsZSkge1xuIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbiBcdFx0XHRmdW5jdGlvbiBnZXREZWZhdWx0KCkgeyByZXR1cm4gbW9kdWxlWydkZWZhdWx0J107IH0gOlxuIFx0XHRcdGZ1bmN0aW9uIGdldE1vZHVsZUV4cG9ydHMoKSB7IHJldHVybiBtb2R1bGU7IH07XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbiBcdFx0cmV0dXJuIGdldHRlcjtcbiBcdH07XG5cbiBcdC8vIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbFxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqZWN0LCBwcm9wZXJ0eSkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iamVjdCwgcHJvcGVydHkpOyB9O1xuXG4gXHQvLyBfX3dlYnBhY2tfcHVibGljX3BhdGhfX1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5wID0gXCJcIjtcblxuXG4gXHQvLyBMb2FkIGVudHJ5IG1vZHVsZSBhbmQgcmV0dXJuIGV4cG9ydHNcbiBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IFwiLi9zcmMvaW5kZXguanNcIik7XG4iLCIvLyBpbXBvcnQgKiBhcyBnZW5lcmF0b3IgZnJvbSBcIi4vZ2VuZXJhdG9yLmpzXCI7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgZG9tIGNvbnRlbnQgaGFzIGxvYWRlZFwiKTtcblxuICAvLyBnZW5lcmF0b3IuZGF0YUdlbmVyYXRvcigpO1xuXG4gIGNvbnN0IHdpZHRoID0gOTYwO1xuICBjb25zdCBoZWlnaHQgPSA1MDA7XG4gIGNvbnN0IG1hcmdpbiA9IDU7XG4gIGNvbnN0IHBhZGRpbmcgPSA1O1xuICBjb25zdCBhZGogPSAzMDtcbiAgXG4gIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0XG4gIGNvbnN0IHN2ZyA9IGQzLnNlbGVjdChcIiNjb250YWluZXJcIilcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwic3ZnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwidmlld0JveFwiLCBcIi1cIlxuICAgICAgICAgICAgICAgICAgICAgICsgYWRqICsgXCIgLVwiICAgXG4gICAgICAgICAgICAgICAgICAgICAgKyBhZGogKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICsgKHdpZHRoICsgYWRqKjMpICsgXCIgXCJcbiAgICAgICAgICAgICAgICAgICAgICArIChoZWlnaHQgKyBhZGoqMykpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgICAgICAgICAgICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgLy8gY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlQiAlLWQsICVZXCIpO1xuICAvLyBjb25zdCBkYXRhc2V0ID0gZDMuY3N2KFwiLi9kaXN0L2Fzc2V0cy90ZXN0LmNzdlwiKTtcbiAgY29uc3QgZGF0YXNldCA9IGQzLmpzb24oXCIuL2Rpc3QvYXNzZXRzL3ZzY29HaXJsLmpzb25cIik7XG4gICAgXG4gIGRhdGFzZXQudGhlbihmdW5jdGlvbihkYXRhKSB7XG4gICAgY29uc29sZS5sb2coXCJkYXRhXCIsIGRhdGEpO1xuXG4gICAgY29uc3Qgc2xpY2VzID0gZGF0YS5mb3JFYWNoKGZ1bmN0aW9uKGQpIHtcbiAgICAgIGNvbnNvbGUubG9nKGQpXG4gICAgICAvLyBkLmRhdGUgPSBwYXJzZVRpbWUoZC5rZXkpO1xuICAgICAgLy8gZC5tZXNhc3VyZW1lbnQgPSArZC52YWx1ZVxuICAgIH0pXG4gICAgICAgICAgICAgICAgICBcblxuICAgIC8vIGNvbnNvbGUubG9nKFwiQ29sdW1uIGhlYWRlcnNcIiwgZGF0YS5jb2x1bW5zKTtcbiAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgLy8gLy8gICAgLy8gcmV0dXJucyB0aGUgc2xpY2VkIGRhdGFzZXRcbiAgICAgY29uc29sZS5sb2coXCJTbGljZXNcIixzbGljZXMpO1xuICAvLyAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAvLyAvLyAgICBjb25zb2xlLmxvZyhcIkZpcnN0IHNsaWNlXCIsc2xpY2VzWzBdKTtcbiAgLy8gLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkgaW4gdGhlIGZpcnN0IHNsaWNlXG4gIC8vIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAvLyAvLyAgICAvLyByZXR1cm5zIHRoZSBkYXRlIG9mIHRoZSBmaXJzdCByb3cgaW4gdGhlIGZpcnN0IHNsaWNlXG4gIC8vIC8vICAgIGNvbnNvbGUubG9nKFwiRGF0ZSBlbGVtZW50XCIsc2xpY2VzWzBdLnZhbHVlc1swXS5kYXRlKTtcbiAgLy8gLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgLy8gLy8gICAgY29uc29sZS5sb2coXCJBcnJheSBsZW5ndGhcIiwoc2xpY2VzWzBdLnZhbHVlcykubGVuZ3RoKTtcblxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVNDQUxFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgLy8gY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gIC8vIGNvbnN0IHlTY2FsZSA9IGQzLnNjYWxlTGluZWFyKCkucmFuZ2VSb3VuZChbaGVpZ2h0LCAwXSk7XG5cbiAgLy8geFNjYWxlLmRvbWFpbihcbiAgLy8gICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgLy8gICAgIHJldHVybiB0aW1lQ29udihkLmRhdGUpO1xuICAvLyAgIH0pXG4gIC8vICk7XG5cbiAgLy8geVNjYWxlLmRvbWFpbihbMCwgXG4gIC8vICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgLy8gICAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gIC8vICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgLy8gICAgIH0pO1xuICAvLyAgIH0pXG4gIC8vIF0pO1xuXG4gIC8vIC8vIGNvbnN0IHRlc3R4ID0gZDMuZXh0ZW50KGRhdGEsIGZ1bmN0aW9uIChkKSB7XG4gIC8vIC8vICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gIC8vIC8vIH0pO1xuXG4gIC8vIC8vIGNvbnN0IHRlc3R5ID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgLy8gLy8gICByZXR1cm4gZDMubWF4KGMudmFsdWVzLCBmdW5jdGlvbiAoZCkge1xuICAvLyAvLyAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAvLyAvLyAgIH0pO1xuICAvLyAvLyB9KTtcblxuICAvLyAvLyBjb25zb2xlLmxvZyh0ZXN0eCwgdGVzdHkpO1xuICAvLyBjb25zb2xlLmxvZyhcInhTY2FsZVwiLCB4U2NhbGUoKSk7XG4gIFxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG4gIC8vIGNvbnN0IHlheGlzID0gZDMuYXhpc0xlZnQoKS50aWNrcyhzbGljZXNbMF0udmFsdWVzLmxlbmd0aCkuc2NhbGUoeVNjYWxlKTtcblxuICAvLyBjb25zdCB4YXhpcyA9IGQzXG4gIC8vICAgLmF4aXNCb3R0b20oKVxuICAvLyAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAvLyAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgLy8gICAuc2NhbGUoeFNjYWxlKTtcblxuICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgLy8gY29uc3QgbGluZSA9IGQzLmxpbmUoKVxuICAvLyAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgLy8gICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQubWVhc3VyZW1lbnQpOyB9KTtcblxuICAvLyBsZXQgaWQgPSAwO1xuICAvLyBjb25zdCBpZHMgPSBmdW5jdGlvbiAoKSB7XG4gIC8vICAgcmV0dXJuIFwibGluZS1cIiArIGlkKys7XG4gIC8vIH1cblxuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tQVhFUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuXG4gIC8vIHN2Z1xuICAvLyAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgLy8gICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gIC8vICAgLmNhbGwoeGF4aXMpO1xuXG4gIC8vIHN2Z1xuICAvLyAgIC5hcHBlbmQoXCJnXCIpXG4gIC8vICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgLy8gICAuY2FsbCh5YXhpcylcbiAgLy8gICAuYXBwZW5kKFwidGV4dFwiKVxuICAvLyAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwicm90YXRlKC05MClcIilcbiAgLy8gICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gIC8vICAgLmF0dHIoXCJ5XCIsIDYpXG4gIC8vICAgLnN0eWxlKFwidGV4dC1hbmNob3JcIiwgXCJlbmRcIilcbiAgLy8gICAudGV4dChcIkZyZXF1ZW5jeVwiKTtcblxuICAvLyAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgLy8gY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgLy8gICAuZGF0YShzbGljZXMpXG4gIC8vICAgLmVudGVyKClcbiAgLy8gICAuYXBwZW5kKFwiZ1wiKTtcblxuICAvLyBsaW5lcy5hcHBlbmQoXCJwYXRoXCIpXG4gIC8vICAgLmF0dHIoXCJkXCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiBsaW5lKGQudmFsdWVzKTsgfSk7XG5cblxuICB9KTtcblxufSk7Il0sInNvdXJjZVJvb3QiOiIifQ==