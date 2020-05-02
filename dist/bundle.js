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

// const test = require('./assets/test.csv')
document.addEventListener("DOMContentLoaded", function () {
  console.log("index.js dom content has loaded");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImRvY3VtZW50IiwiYWRkRXZlbnRMaXN0ZW5lciIsImNvbnNvbGUiLCJsb2ciLCJ3aWR0aCIsImhlaWdodCIsIm1hcmdpbiIsInBhZGRpbmciLCJhZGoiLCJzdmciLCJkMyIsInNlbGVjdCIsImFwcGVuZCIsImF0dHIiLCJzdHlsZSIsImNsYXNzZWQiLCJ0aW1lQ29udiIsInRpbWVQYXJzZSIsImRhdGFzZXQiLCJqc29uIiwidGhlbiIsImRhdGEiLCJzbGljZXMiLCJmb3JFYWNoIiwiZCJdLCJtYXBwaW5ncyI6IjtRQUFBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDbEZBO0FBRUFBLFFBQVEsQ0FBQ0MsZ0JBQVQsQ0FBMEIsa0JBQTFCLEVBQThDLFlBQVc7QUFDdkRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlDQUFaO0FBRUEsTUFBTUMsS0FBSyxHQUFHLEdBQWQ7QUFDQSxNQUFNQyxNQUFNLEdBQUcsR0FBZjtBQUNBLE1BQU1DLE1BQU0sR0FBRyxDQUFmO0FBQ0EsTUFBTUMsT0FBTyxHQUFHLENBQWhCO0FBQ0EsTUFBTUMsR0FBRyxHQUFHLEVBQVosQ0FQdUQsQ0FTdkQ7O0FBQ0EsTUFBTUMsR0FBRyxHQUFHQyxFQUFFLENBQUNDLE1BQUgsQ0FBVSxZQUFWLEVBQ0dDLE1BREgsQ0FDVSxLQURWLEVBRUdDLElBRkgsQ0FFUSxxQkFGUixFQUUrQixlQUYvQixFQUdHQSxJQUhILENBR1EsU0FIUixFQUdtQixNQUNUTCxHQURTLEdBQ0gsSUFERyxHQUVUQSxHQUZTLEdBRUgsR0FGRyxJQUdSSixLQUFLLEdBQUdJLEdBQUcsR0FBQyxDQUhKLElBR1MsR0FIVCxJQUlSSCxNQUFNLEdBQUdHLEdBQUcsR0FBQyxDQUpMLENBSG5CLEVBUUdNLEtBUkgsQ0FRUyxTQVJULEVBUW9CUCxPQVJwQixFQVNHTyxLQVRILENBU1MsUUFUVCxFQVNtQlIsTUFUbkIsRUFVR1MsT0FWSCxDQVVXLGFBVlgsRUFVMEIsSUFWMUIsQ0FBWixDQVZ1RCxDQXNCdkQ7QUFFQTs7QUFDQSxNQUFNQyxRQUFRLEdBQUdOLEVBQUUsQ0FBQ08sU0FBSCxDQUFhLFlBQWIsQ0FBakIsQ0F6QnVELENBMEJ2RDs7QUFDQSxNQUFNQyxPQUFPLEdBQUdSLEVBQUUsQ0FBQ1MsSUFBSCxDQUFRLDZCQUFSLENBQWhCO0FBRUFELFNBQU8sQ0FBQ0UsSUFBUixDQUFhLFVBQVNDLElBQVQsRUFBZTtBQUMxQm5CLFdBQU8sQ0FBQ0MsR0FBUixDQUFZLE1BQVosRUFBb0JrQixJQUFwQjtBQUVBLFFBQU1DLE1BQU0sR0FBR0QsSUFBSSxDQUFDRSxPQUFMLENBQWEsVUFBU0MsQ0FBVCxFQUFZO0FBQ3RDdEIsYUFBTyxDQUFDQyxHQUFSLENBQVlxQixDQUFaLEVBRHNDLENBRXRDO0FBQ0E7QUFDRCxLQUpjLENBQWYsQ0FIMEIsQ0FVMUI7QUFDQTtBQUNGOztBQUNHdEIsV0FBTyxDQUFDQyxHQUFSLENBQVksUUFBWixFQUFxQm1CLE1BQXJCLEVBYnlCLENBYzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUVBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBR0MsR0FqSEQ7QUFtSEQsQ0FoSkQsRSIsImZpbGUiOiJidW5kbGUuanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHt9O1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIi8vIGNvbnN0IHRlc3QgPSByZXF1aXJlKCcuL2Fzc2V0cy90ZXN0LmNzdicpXG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICBjb25zb2xlLmxvZyhcImluZGV4LmpzIGRvbSBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgY29uc3Qgd2lkdGggPSA5NjA7XG4gIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgY29uc3QgcGFkZGluZyA9IDU7XG4gIGNvbnN0IGFkaiA9IDMwO1xuICBcbiAgLy8gd2UgYXJlIGFwcGVuZGluZyBTVkcgZmlyc3RcbiAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKVxuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJzdmdcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsIFwiLVwiXG4gICAgICAgICAgICAgICAgICAgICAgKyBhZGogKyBcIiAtXCIgICBcbiAgICAgICAgICAgICAgICAgICAgICArIGFkaiArIFwiIFwiXG4gICAgICAgICAgICAgICAgICAgICAgKyAod2lkdGggKyBhZGoqMykgKyBcIiBcIlxuICAgICAgICAgICAgICAgICAgICAgICsgKGhlaWdodCArIGFkaiozKSlcbiAgICAgICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAgICAgLnN0eWxlKFwibWFyZ2luXCIsIG1hcmdpbilcbiAgICAgICAgICAgICAgICAuY2xhc3NlZChcInN2Zy1jb250ZW50XCIsIHRydWUpO1xuXG4gIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1EQVRBLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVkLSViLSVZXCIpO1xuICBjb25zdCB0aW1lQ29udiA9IGQzLnRpbWVQYXJzZShcIiVCICUtZCwgJVlcIik7XG4gIC8vIGNvbnN0IGRhdGFzZXQgPSBkMy5jc3YoXCIuL2Rpc3QvYXNzZXRzL3Rlc3QuY3N2XCIpO1xuICBjb25zdCBkYXRhc2V0ID0gZDMuanNvbihcIi4vZGlzdC9hc3NldHMvdnNjb0dpcmwuanNvblwiKTtcbiAgICBcbiAgZGF0YXNldC50aGVuKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICBjb25zb2xlLmxvZyhcImRhdGFcIiwgZGF0YSk7XG5cbiAgICBjb25zdCBzbGljZXMgPSBkYXRhLmZvckVhY2goZnVuY3Rpb24oZCkge1xuICAgICAgY29uc29sZS5sb2coZClcbiAgICAgIC8vIGQuZGF0ZSA9IHBhcnNlVGltZShkLmtleSk7XG4gICAgICAvLyBkLm1lc2FzdXJlbWVudCA9ICtkLnZhbHVlXG4gICAgfSlcbiAgICAgICAgICAgICAgICAgIFxuXG4gICAgLy8gY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVyc1wiLCBkYXRhLmNvbHVtbnMpO1xuICAgIC8vICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzIHdpdGhvdXQgZGF0ZVwiLCBkYXRhLmNvbHVtbnMuc2xpY2UoMSkpO1xuICAvLyAvLyAgICAvLyByZXR1cm5zIHRoZSBzbGljZWQgZGF0YXNldFxuICAgICBjb25zb2xlLmxvZyhcIlNsaWNlc1wiLHNsaWNlcyk7XG4gIC8vIC8vICAgIC8vIHJldHVybnMgdGhlIGZpcnN0IHNsaWNlXG4gIC8vIC8vICAgIGNvbnNvbGUubG9nKFwiRmlyc3Qgc2xpY2VcIixzbGljZXNbMF0pO1xuICAvLyAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgLy8gLy8gICAgY29uc29sZS5sb2coXCJBIGFycmF5XCIsc2xpY2VzWzBdLnZhbHVlcyk7XG4gIC8vIC8vICAgIC8vIHJldHVybnMgdGhlIGRhdGUgb2YgdGhlIGZpcnN0IHJvdyBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgLy8gLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAvLyAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSdzIGxlbmd0aFxuICAvLyAvLyAgICBjb25zb2xlLmxvZyhcIkFycmF5IGxlbmd0aFwiLChzbGljZXNbMF0udmFsdWVzKS5sZW5ndGgpO1xuXG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIC8vIC8vIHN0cmV0Y2ggZGF0YSB2YWx1ZXMgZnJvbSAwIHRvIHRoZSBzdmcncyB3aWR0aFxuICAvLyBjb25zdCB4U2NhbGUgPSBkMy5zY2FsZVRpbWUoKS5yYW5nZShbMCwgd2lkdGhdKTtcbiAgLy8gY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAvLyB4U2NhbGUuZG9tYWluKFxuICAvLyAgIGQzLmV4dGVudChkYXRhLCBmdW5jdGlvbiAoZCkge1xuICAvLyAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gIC8vICAgfSlcbiAgLy8gKTtcblxuICAvLyB5U2NhbGUuZG9tYWluKFswLCBcbiAgLy8gICBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAvLyAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgLy8gICAgICAgcmV0dXJuIGQubWVhc3VyZW1lbnQgKyA0O1xuICAvLyAgICAgfSk7XG4gIC8vICAgfSlcbiAgLy8gXSk7XG5cbiAgLy8gLy8gY29uc3QgdGVzdHggPSBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgLy8gLy8gICByZXR1cm4gdGltZUNvbnYoZC5kYXRlKTtcbiAgLy8gLy8gfSk7XG5cbiAgLy8gLy8gY29uc3QgdGVzdHkgPSBkMy5tYXgoc2xpY2VzLCBmdW5jdGlvbiAoYykge1xuICAvLyAvLyAgIHJldHVybiBkMy5tYXgoYy52YWx1ZXMsIGZ1bmN0aW9uIChkKSB7XG4gIC8vIC8vICAgICByZXR1cm4gZC5tZWFzdXJlbWVudCArIDQ7XG4gIC8vIC8vICAgfSk7XG4gIC8vIC8vIH0pO1xuXG4gIC8vIC8vIGNvbnNvbGUubG9nKHRlc3R4LCB0ZXN0eSk7XG4gIC8vIGNvbnNvbGUubG9nKFwieFNjYWxlXCIsIHhTY2FsZSgpKTtcbiAgXG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICBcbiAgLy8gY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gIC8vIGNvbnN0IHhheGlzID0gZDNcbiAgLy8gICAuYXhpc0JvdHRvbSgpXG4gIC8vICAgLnRpY2tzKGQzLnRpbWVEYXkuZXZlcnkoMSkpXG4gIC8vICAgLnRpY2tGb3JtYXQoZDMudGltZUZvcm1hdChcIiViICVkXCIpKVxuICAvLyAgIC5zY2FsZSh4U2NhbGUpO1xuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gIC8vICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAvLyAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gIC8vIGxldCBpZCA9IDA7XG4gIC8vIGNvbnN0IGlkcyA9IGZ1bmN0aW9uICgpIHtcbiAgLy8gICByZXR1cm4gXCJsaW5lLVwiICsgaWQrKztcbiAgLy8gfVxuXG5cbiAgLy8gLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tMi4gRFJBV0lORy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cbiAgXG5cbiAgLy8gc3ZnXG4gIC8vICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAvLyAgIC5hdHRyKFwidHJhbnNmb3JtXCIsIFwidHJhbnNsYXRlKDAsXCIgKyBoZWlnaHQgKyBcIilcIilcbiAgLy8gICAuY2FsbCh4YXhpcyk7XG5cbiAgLy8gc3ZnXG4gIC8vICAgLmFwcGVuZChcImdcIilcbiAgLy8gICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAvLyAgIC5jYWxsKHlheGlzKVxuICAvLyAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gIC8vICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgXCJyb3RhdGUoLTkwKVwiKVxuICAvLyAgIC5hdHRyKFwiZHlcIiwgXCIwLjc1ZW1cIilcbiAgLy8gICAuYXR0cihcInlcIiwgNilcbiAgLy8gICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKVxuICAvLyAgIC50ZXh0KFwiRnJlcXVlbmN5XCIpO1xuXG4gIC8vIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyBjb25zdCBsaW5lcyA9IHN2Zy5zZWxlY3RBbGwoXCJsaW5lc1wiKVxuICAvLyAgIC5kYXRhKHNsaWNlcylcbiAgLy8gICAuZW50ZXIoKVxuICAvLyAgIC5hcHBlbmQoXCJnXCIpO1xuXG4gIC8vIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgLy8gICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KTtcblxuXG4gIH0pO1xuXG59KTsiXSwic291cmNlUm9vdCI6IiJ9