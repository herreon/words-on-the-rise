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
function test_function () {

    // document.addEventListener("DOMContentLoaded", function () {
        console.log("example.js content has loaded");

        const width = 960;
        const height = 500;
        const margin = 5;
        const padding = 5;
        const adj = 30;

        // we are appending SVG first - edited adj
        const svg = d3.select("#container").append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", (-1 * adj) + " " + (-1 * adj) + " " + (width + 3 * adj) + " " + (height + 3 * adj))
            .style("padding", padding)
            .style("margin", margin)
            .classed("svg-content", true);

        //-----------------------------DATA------------------------------//

        const timeConv = d3.timeParse("%d-%b-%Y");
        const dataset = d3.csv("./dist/assets/test.csv");

        dataset.then(function (data) {
            console.log("example_data", data)
            const slices = data.columns.slice(1).map(function (id) {
                return {
                    id: id,
                    values: data.map(function (d) {
                        return {
                            date: timeConv(d.date),
                            measurement: +d[id]
                        };
                    })
                };
            });


            //    console.log("Column headers", data.columns);
            //  console.log("Column headers without date", data.columns.slice(1));
            //    // returns the sliced dataset
            console.log("example_slices", slices);
            //    // returns the first slice
            //    console.log("First slice",slices[0]);
            //    // returns the array in the first slice
            //    console.log("A array",slices[0].values);
            //    // returns the date of the first row in the first slice
            //    console.log("Date element",slices[0].values[0].date);
            //    // returns the array's length
            //    console.log("Array length",(slices[0].values).length);


            //----------------------------SCALES-----------------------------//

            // stretch data values from 0 to the svg's width
            const xScale = d3.scaleTime().range([0, width]);
            const yScale = d3.scaleLinear().rangeRound([height, 0]);

            xScale.domain(
                d3.extent(data, function (d) {
                    return timeConv(d.date);
                })
            );

            yScale.domain([0,
                d3.max(slices, function (c) {
                    return d3.max(c.values, function (d) {
                        return d.measurement + 4;
                    });
                })
            ]);

            // returns undefined:
            // console.log("example_xScale", xScale());


            //-----------------------------AXES------------------------------//

            const yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale);

            const xaxis = d3
                .axisBottom()
                .ticks(d3.timeDay.every(1))
                .tickFormat(d3.timeFormat("%b %d"))
                .scale(xScale);

            //----------------------------LINES------------------------------//

            const line = d3.line()
                .x(function (d) { return xScale(d.date); })
                .y(function (d) { return yScale(d.measurement); });

            let id = 0;
            const ids = function () {
                return "line-" + id++;
            }


            //-------------------------2. DRAWING----------------------------//

            //-----------------------------AXES------------------------------//


            svg
                .append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xaxis);

            svg
                .append("g")
                .attr("class", "axis")
                .call(yaxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("dy", "0.75em")
                .attr("y", 6)
                .style("text-anchor", "end")
                .text("Frequency");

            //----------------------------LINES------------------------------//

            const lines = svg.selectAll("lines")
                .data(slices)
                .enter()
                .append("g");

            lines.append("path")
                .attr("class", ids)
                .attr("d", function (d) { return line(d.values); });

            lines.append("text")
                .attr("class", "serie_label")
                // .datum(function (d) {
                //     return {
                //         ide: d.id,
                //         valuee: d.values[d.values.length - 1]
                //     };
                // })
                .attr("transform", function (d) {
                    return "translate(" + (xScale(d.values[d.values.length - 1].date) + 10)
                        + "," + (yScale(d.values[d.values.length - 1].measurement) + 5) + ")";
                })
                .attr("x", 5)
                .text(function (d) { return ("Serie ") + d.id })
                // .attr("class", function(d) { return d.value } )
        });

    // })
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
!(function webpackMissingModule() { var e = new Error("Cannot find module '../dist/assets/styles.scss'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());



const searchTerms = __webpack_require__(/*! ./searchTerms.js */ "./src/searchTerms.js");

document.addEventListener("DOMContentLoaded", function () {

  console.log("index.js content has loaded");
  console.log("search terms", searchTerms)

  //-----------------------------[prep]SVG------------------------------// 
  // set the dimensions and margins of the graph
  const width = 800;
  const height = 400;
  const margin = 5;
  const padding = 5;
  const adj = 80;

  // append SVG
  const svg = d3.select("#container").append("svg")
    .attr("preserveAspectRatio", "xMinYMin meet")
    // .attr("width", width)
    // .attr("height", height*2)
    .attr("viewBox",
      (-1 * adj) + " " +
      (-1 * adj) + " " +
      (width + adj * 3) + " " +
      (height + adj * 3)
    )
    .style("padding", padding)
    .style("margin", margin)
    .classed("svg-content", true);

  //-----------------------------[prep]DATA------------------------------//
  // parse the date and time
  const timeConv = d3.timeParse("%b %d, %Y");
  const dataset = d3.json("./dist/assets/data.json");

  dataset.then(function (data) {
    let slices = [];
    let i;

    for (i = 0; i < searchTerms.length; i++){
      const slice = {
        term: searchTerms[i],
        values: data.map(function (d) {
          return {
            date: timeConv(d.formattedAxisTime),
            point: +d.value[i]
          }
        })
      }
      slices.push(slice)
    }
    
    // for reference: previous way of creating slices
    // searchTerms.forEach(term => {

    //   const slice = {
    //     term: term,
    //     values: data[term].map(function (d) {
    //       return {
    //         date: timeConv(d.formattedAxisTime),
    //         point: +d.value[0]
    //       }
    //     })
    //   }

    //   slices.push(slice);
    // })

    console.log("slices", slices);

    //----------------------------[prep]SCALES-----------------------------//
    // stretch data values from 0 to the svg's width
    const xScale = d3.scaleTime().range([0, width]);
    const yScale = d3.scaleLinear().rangeRound([height, 0]);
    

    // define min and max values for domain on x-axis (time)
    const startDate = d3.min(slices, function (s) {
      return d3.min(s.values, function (v) {
        return v.date
      })
    });

    const endDate = d3.max(slices, function (s) {
      return d3.max(s.values, function (v) {
        return v.date
      })
    });

    
    // define max value for domain on y-axis (points)
    const maxY = d3.max(slices, function (s) {
      return d3.max(s.values, function(v) {
        return v.point
      })
    })

    // set domain of x-axis
    xScale.domain([startDate, endDate])
    
    // set domain of y-axis
    yScale.domain([0, maxY])

    // FOR TESTING DOMAIN VALUES
    // console.log("minX", startDate);
    // console.log("maxX", endDate);
    // console.log("maxY", maxY);


  //-----------------------------[prep]AXES------------------------------//
  
  const xAxis = d3
    .axisBottom()
    .ticks(d3.timeMonth.every(12))
    .tickFormat(d3.timeFormat("%b %Y"))
    // .ticks(d3.timeYear.every(1))
    // .tickFormat(d3.timeFormat("%Y"))
    .scale(xScale);

  const yAxis = d3
    .axisLeft()
    .ticks(slices[0].values.length / 10)
    .scale(yScale);

  //----------------------------[prep]LINES------------------------------//
  
  // accessor function. Takes in the data array and extracts the x,y coordinates
  const line = d3
    .line()
    .x(function (d) { return xScale(d.date); })
    .y(function (d) { return yScale(d.point); });
  
  // to illustrate line.y()
  // const line = d3
  //   .line()
  //   .x(function (d) { return xScale(d.date); })
  //   .y(function (d) { return d.point; });
  
  // to differentiate lines
  let lineId = 0;
  const lineIds = function () {
      return "line-" + lineId++;
  }

  //----------------------------[prep]TOOLTIP------------------------------//
  
  const tooltip = d3.select("body").append("div") // currently experimenting with select
    .attr("class", "tooltip")
    .style("opacity", 0)
    .style("position", "absolute");
  
  // experimenting with selectors
  // console.log("g", d3.select("g")); // selecting g returns an empty array
  // console.log("g2", d3.selectAll("g")); // similar to above; no elements returned
  // console.log("g3", d3.select("body"));
  // console.log("svg", d3.select("svg")); 

  //-----------------------------[drawing]AXES------------------------------//

  svg
    .append("g")
    .attr("class", "axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis) // .call calls the function xAxis on the elements of the selection g

  svg
    .append("g")
    .attr("class", "axis")
    .call(yAxis)
    .append("text")
    .text("Frequency")
    .attr("dy", "0.75em")
    .attr("y", -40)
    .style("text-anchor", "end");

  //----------------------------[drawing]LINES------------------------------//

  const lines = svg.selectAll("lines")
    .data(slices)
    .enter()
    .append("g")

  lines.append("path")
    .attr("class", lineIds) // differentiate lines
    .attr("d", function (d) { return line(d.values); })
  

  // add labels to each line
  lines.append("text")
    .attr("class", "term_label" + " a")
    .text(function (d) { return d.term })
    .attr("x", 5)
    .attr("transform", function (d) {
      const numPoints = d.values.length - 1; // the index of the last data point
      const labelX = xScale(d.values[numPoints].date) + 10;
      const labelY = yScale(d.values[numPoints].point) + 5;
      return "translate(" + labelX + "," + labelY + ")";
    })
    

  // to illustrate svg path mini-language
    // svg.append("path")
    // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")
  
  
  //----------------------------[interactive]POINTS------------------------------//

  lines.selectAll("points")
    .data(function (d) { return d.values })
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d.date); })
    .attr("cy", function (d) { return yScale(d.point); })
    .attr("r", 1)
    .attr("class", "point")
    .style("opacity", 1);

  //----------------------------[interactive]EVENTS------------------------------//

  // add invisible circles to increase responsive area
  lines.selectAll("points")
    .data(function (d) { return (d.values); })
    .enter()
    .append("circle")
    .attr("cx", function (d) { return xScale(d.date); })
    .attr("cy", function (d) { return yScale(d.point); })
    .attr('r', 10)
    .style("opacity", 0)

    // configure events
    .on('mouseover', function (d) {
      
      tooltip.transition()
        .delay(30)
        .duration(200)
        .style("opacity", 1);
        // .style("fill", "red") // removed because unnecessary
      
      tooltip.html(d.point)
      .attr("cx", ( xScale(d.date) ))
      .attr("cy", ( yScale(d.point) ));
      // .style("left", (d3.event.pageX + 25) + "px")
      // .style("top", (d3.event.pageY) + "px");

      const selection = d3.select(this) // [this] is the invisible circle
        .raise(); // .raise() re-inserts each selected element, in order, as the last child of its parent
      
      // console.log(this);
      // console.log(d);
      
      selection
        .transition()
        .delay("20")
        .duration("200")
        .attr("r", 6)
        .style("opacity", 1)
        .style("fill", "#ed3700");
      })
      

  .on("mouseout", function (d) {
      tooltip.transition()
        .duration(200)
        .style("opacity", 0);
      
    const selection = d3.select(this);

    selection
      .transition()
      .delay("20")
      .duration("200")
      .attr("r", 10)
      .style("opacity", 0);
    });
  
  // test transitions 1
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

const searchTerms = ["vsco girl",
"boomer"
];

const waiting = [
    "and I oop",
    "asmr",
    "e girl",
    "sfs",
    "ngl",
    "simp",
    "uwu",
    "gaslighting",
    "lol"
]

module.exports = searchTerms;

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2V4YW1wbGUuanMiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIiwid2VicGFjazovLy8uL3NyYy9zZWFyY2hUZXJtcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7OztRQUdBO1FBQ0E7O1FBRUE7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwwQ0FBMEMsZ0NBQWdDO1FBQzFFO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0Esd0RBQXdELGtCQUFrQjtRQUMxRTtRQUNBLGlEQUFpRCxjQUFjO1FBQy9EOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSx5Q0FBeUMsaUNBQWlDO1FBQzFFLGdIQUFnSCxtQkFBbUIsRUFBRTtRQUNySTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDJCQUEyQiwwQkFBMEIsRUFBRTtRQUN2RCxpQ0FBaUMsZUFBZTtRQUNoRDtRQUNBO1FBQ0E7O1FBRUE7UUFDQSxzREFBc0QsK0RBQStEOztRQUVySDtRQUNBOzs7UUFHQTtRQUNBOzs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQUE7QUFBZTs7QUFFZjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLGFBQWE7OztBQUdiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTs7O0FBR0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLGlDQUFpQyx1QkFBdUIsRUFBRTtBQUMxRCxpQ0FBaUMsOEJBQThCLEVBQUU7O0FBRWpFO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTs7QUFFQTs7O0FBR0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EseUNBQXlDLHVCQUF1QixFQUFFOztBQUVsRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQjtBQUNwQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQSxvQ0FBb0MsMkJBQTJCO0FBQy9ELCtDQUErQyxpQkFBaUI7QUFDaEUsU0FBUzs7QUFFVCxRQUFRO0FBQ1IsQzs7Ozs7Ozs7Ozs7O0FDdEpBO0FBQUE7QUFBQTtBQUF5QztBQUNMOztBQUVwQyxvQkFBb0IsbUJBQU8sQ0FBQyw4Q0FBa0I7O0FBRTlDOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZUFBZSx3QkFBd0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7O0FBRUE7QUFDQSxRQUFROztBQUVSOztBQUVBO0FBQ0E7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUCxLQUFLOztBQUVMO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLHVCQUF1QixFQUFFO0FBQzlDLHFCQUFxQix3QkFBd0IsRUFBRTs7QUFFL0M7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHVCQUF1QixFQUFFO0FBQ2pELHdCQUF3QixnQkFBZ0IsRUFBRTs7QUFFMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQztBQUN0QywwQ0FBMEMscUJBQXFCO0FBQy9EO0FBQ0EsMEM7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLDZCQUE2Qix1QkFBdUIsRUFBRTs7O0FBR3REO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnQkFBZ0I7QUFDeEM7QUFDQTtBQUNBLDRDQUE0QztBQUM1QztBQUNBO0FBQ0E7QUFDQSxLQUFLOzs7QUFHTDtBQUNBO0FBQ0E7OztBQUdBOztBQUVBO0FBQ0Esd0JBQXdCLGtCQUFrQjtBQUMxQztBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QixFQUFFO0FBQ3ZELDhCQUE4Qix3QkFBd0IsRUFBRTtBQUN4RDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLHdCQUF3QixtQkFBbUIsRUFBRTtBQUM3QztBQUNBO0FBQ0EsOEJBQThCLHVCQUF1QixFQUFFO0FBQ3ZELDhCQUE4Qix3QkFBd0IsRUFBRTtBQUN4RDtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUJBQWlCOztBQUVqQjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTzs7O0FBR1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixtREFBbUQ7QUFDakY7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaURBQWlELHVDQUF1Qzs7O0FBR3hGO0FBQ0E7O0FBRUEsR0FBRzs7QUFFSCxDQUFDLEU7Ozs7Ozs7Ozs7O0FDeFNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLDZCIiwiZmlsZSI6ImJ1bmRsZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vc3JjL2luZGV4LmpzXCIpO1xuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gdGVzdF9mdW5jdGlvbiAoKSB7XG5cbiAgICAvLyBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiRE9NQ29udGVudExvYWRlZFwiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiZXhhbXBsZS5qcyBjb250ZW50IGhhcyBsb2FkZWRcIik7XG5cbiAgICAgICAgY29uc3Qgd2lkdGggPSA5NjA7XG4gICAgICAgIGNvbnN0IGhlaWdodCA9IDUwMDtcbiAgICAgICAgY29uc3QgbWFyZ2luID0gNTtcbiAgICAgICAgY29uc3QgcGFkZGluZyA9IDU7XG4gICAgICAgIGNvbnN0IGFkaiA9IDMwO1xuXG4gICAgICAgIC8vIHdlIGFyZSBhcHBlbmRpbmcgU1ZHIGZpcnN0IC0gZWRpdGVkIGFkalxuICAgICAgICBjb25zdCBzdmcgPSBkMy5zZWxlY3QoXCIjY29udGFpbmVyXCIpLmFwcGVuZChcInN2Z1wiKVxuICAgICAgICAgICAgLmF0dHIoXCJwcmVzZXJ2ZUFzcGVjdFJhdGlvXCIsIFwieE1pbllNaW4gbWVldFwiKVxuICAgICAgICAgICAgLmF0dHIoXCJ2aWV3Qm94XCIsICgtMSAqIGFkaikgKyBcIiBcIiArICgtMSAqIGFkaikgKyBcIiBcIiArICh3aWR0aCArIDMgKiBhZGopICsgXCIgXCIgKyAoaGVpZ2h0ICsgMyAqIGFkaikpXG4gICAgICAgICAgICAuc3R5bGUoXCJwYWRkaW5nXCIsIHBhZGRpbmcpXG4gICAgICAgICAgICAuc3R5bGUoXCJtYXJnaW5cIiwgbWFyZ2luKVxuICAgICAgICAgICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAgICAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgICAgICAgY29uc3QgdGltZUNvbnYgPSBkMy50aW1lUGFyc2UoXCIlZC0lYi0lWVwiKTtcbiAgICAgICAgY29uc3QgZGF0YXNldCA9IGQzLmNzdihcIi4vZGlzdC9hc3NldHMvdGVzdC5jc3ZcIik7XG5cbiAgICAgICAgZGF0YXNldC50aGVuKGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfZGF0YVwiLCBkYXRhKVxuICAgICAgICAgICAgY29uc3Qgc2xpY2VzID0gZGF0YS5jb2x1bW5zLnNsaWNlKDEpLm1hcChmdW5jdGlvbiAoaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBpZDogaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5kYXRlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZWFzdXJlbWVudDogK2RbaWRdXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgICAgICAvLyAgICBjb25zb2xlLmxvZyhcIkNvbHVtbiBoZWFkZXJzXCIsIGRhdGEuY29sdW1ucyk7XG4gICAgICAgICAgICAvLyAgY29uc29sZS5sb2coXCJDb2x1bW4gaGVhZGVycyB3aXRob3V0IGRhdGVcIiwgZGF0YS5jb2x1bW5zLnNsaWNlKDEpKTtcbiAgICAgICAgICAgIC8vICAgIC8vIHJldHVybnMgdGhlIHNsaWNlZCBkYXRhc2V0XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImV4YW1wbGVfc2xpY2VzXCIsIHNsaWNlcyk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJGaXJzdCBzbGljZVwiLHNsaWNlc1swXSk7XG4gICAgICAgICAgICAvLyAgICAvLyByZXR1cm5zIHRoZSBhcnJheSBpbiB0aGUgZmlyc3Qgc2xpY2VcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQSBhcnJheVwiLHNsaWNlc1swXS52YWx1ZXMpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgZGF0ZSBvZiB0aGUgZmlyc3Qgcm93IGluIHRoZSBmaXJzdCBzbGljZVxuICAgICAgICAgICAgLy8gICAgY29uc29sZS5sb2coXCJEYXRlIGVsZW1lbnRcIixzbGljZXNbMF0udmFsdWVzWzBdLmRhdGUpO1xuICAgICAgICAgICAgLy8gICAgLy8gcmV0dXJucyB0aGUgYXJyYXkncyBsZW5ndGhcbiAgICAgICAgICAgIC8vICAgIGNvbnNvbGUubG9nKFwiQXJyYXkgbGVuZ3RoXCIsKHNsaWNlc1swXS52YWx1ZXMpLmxlbmd0aCk7XG5cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tU0NBTEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICAvLyBzdHJldGNoIGRhdGEgdmFsdWVzIGZyb20gMCB0byB0aGUgc3ZnJ3Mgd2lkdGhcbiAgICAgICAgICAgIGNvbnN0IHhTY2FsZSA9IGQzLnNjYWxlVGltZSgpLnJhbmdlKFswLCB3aWR0aF0pO1xuICAgICAgICAgICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcblxuICAgICAgICAgICAgeFNjYWxlLmRvbWFpbihcbiAgICAgICAgICAgICAgICBkMy5leHRlbnQoZGF0YSwgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRpbWVDb252KGQuZGF0ZSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIHlTY2FsZS5kb21haW4oWzAsXG4gICAgICAgICAgICAgICAgZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGQzLm1heChjLnZhbHVlcywgZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkLm1lYXN1cmVtZW50ICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIF0pO1xuXG4gICAgICAgICAgICAvLyByZXR1cm5zIHVuZGVmaW5lZDpcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiZXhhbXBsZV94U2NhbGVcIiwgeFNjYWxlKCkpO1xuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1BWEVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgeWF4aXMgPSBkMy5heGlzTGVmdCgpLnRpY2tzKHNsaWNlc1swXS52YWx1ZXMubGVuZ3RoKS5zY2FsZSh5U2NhbGUpO1xuXG4gICAgICAgICAgICBjb25zdCB4YXhpcyA9IGQzXG4gICAgICAgICAgICAgICAgLmF4aXNCb3R0b20oKVxuICAgICAgICAgICAgICAgIC50aWNrcyhkMy50aW1lRGF5LmV2ZXJ5KDEpKVxuICAgICAgICAgICAgICAgIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlYiAlZFwiKSlcbiAgICAgICAgICAgICAgICAuc2NhbGUoeFNjYWxlKTtcblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tTElORVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gICAgICAgICAgICBjb25zdCBsaW5lID0gZDMubGluZSgpXG4gICAgICAgICAgICAgICAgLngoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgICAgICAgICAgICAgIC55KGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5tZWFzdXJlbWVudCk7IH0pO1xuXG4gICAgICAgICAgICBsZXQgaWQgPSAwO1xuICAgICAgICAgICAgY29uc3QgaWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBcImxpbmUtXCIgKyBpZCsrO1xuICAgICAgICAgICAgfVxuXG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLTIuIERSQVdJTkctLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG5cbiAgICAgICAgICAgIHN2Z1xuICAgICAgICAgICAgICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeGF4aXMpO1xuXG4gICAgICAgICAgICBzdmdcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgXCJheGlzXCIpXG4gICAgICAgICAgICAgICAgLmNhbGwoeWF4aXMpXG4gICAgICAgICAgICAgICAgLmFwcGVuZChcInRleHRcIilcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInJvdGF0ZSgtOTApXCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJkeVwiLCBcIjAuNzVlbVwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwieVwiLCA2KVxuICAgICAgICAgICAgICAgIC5zdHlsZShcInRleHQtYW5jaG9yXCIsIFwiZW5kXCIpXG4gICAgICAgICAgICAgICAgLnRleHQoXCJGcmVxdWVuY3lcIik7XG5cbiAgICAgICAgICAgIC8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLUxJTkVTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAgICAgICAgICAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAgICAgICAgICAgICAuZGF0YShzbGljZXMpXG4gICAgICAgICAgICAgICAgLmVudGVyKClcbiAgICAgICAgICAgICAgICAuYXBwZW5kKFwiZ1wiKTtcblxuICAgICAgICAgICAgbGluZXMuYXBwZW5kKFwicGF0aFwiKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiY2xhc3NcIiwgaWRzKVxuICAgICAgICAgICAgICAgIC5hdHRyKFwiZFwiLCBmdW5jdGlvbiAoZCkgeyByZXR1cm4gbGluZShkLnZhbHVlcyk7IH0pO1xuXG4gICAgICAgICAgICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJjbGFzc1wiLCBcInNlcmllX2xhYmVsXCIpXG4gICAgICAgICAgICAgICAgLy8gLmRhdHVtKGZ1bmN0aW9uIChkKSB7XG4gICAgICAgICAgICAgICAgLy8gICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBpZGU6IGQuaWQsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICB2YWx1ZWU6IGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdXG4gICAgICAgICAgICAgICAgLy8gICAgIH07XG4gICAgICAgICAgICAgICAgLy8gfSlcbiAgICAgICAgICAgICAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJ0cmFuc2xhdGUoXCIgKyAoeFNjYWxlKGQudmFsdWVzW2QudmFsdWVzLmxlbmd0aCAtIDFdLmRhdGUpICsgMTApXG4gICAgICAgICAgICAgICAgICAgICAgICArIFwiLFwiICsgKHlTY2FsZShkLnZhbHVlc1tkLnZhbHVlcy5sZW5ndGggLSAxXS5tZWFzdXJlbWVudCkgKyA1KSArIFwiKVwiO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgICAgICAgICAgICAgLnRleHQoZnVuY3Rpb24gKGQpIHsgcmV0dXJuIChcIlNlcmllIFwiKSArIGQuaWQgfSlcbiAgICAgICAgICAgICAgICAvLyAuYXR0cihcImNsYXNzXCIsIGZ1bmN0aW9uKGQpIHsgcmV0dXJuIGQudmFsdWUgfSApXG4gICAgICAgIH0pO1xuXG4gICAgLy8gfSlcbn0iLCJpbXBvcnQgdGVzdF9mdW5jdGlvbiBmcm9tIFwiLi9leGFtcGxlLmpzXCI7XG5pbXBvcnQgJy4uL2Rpc3QvYXNzZXRzL3N0eWxlcy5zY3NzJztcblxuY29uc3Qgc2VhcmNoVGVybXMgPSByZXF1aXJlKFwiLi9zZWFyY2hUZXJtcy5qc1wiKTtcblxuZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcIkRPTUNvbnRlbnRMb2FkZWRcIiwgZnVuY3Rpb24gKCkge1xuXG4gIGNvbnNvbGUubG9nKFwiaW5kZXguanMgY29udGVudCBoYXMgbG9hZGVkXCIpO1xuICBjb25zb2xlLmxvZyhcInNlYXJjaCB0ZXJtc1wiLCBzZWFyY2hUZXJtcylcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdU1ZHLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy8gXG4gIC8vIHNldCB0aGUgZGltZW5zaW9ucyBhbmQgbWFyZ2lucyBvZiB0aGUgZ3JhcGhcbiAgY29uc3Qgd2lkdGggPSA4MDA7XG4gIGNvbnN0IGhlaWdodCA9IDQwMDtcbiAgY29uc3QgbWFyZ2luID0gNTtcbiAgY29uc3QgcGFkZGluZyA9IDU7XG4gIGNvbnN0IGFkaiA9IDgwO1xuXG4gIC8vIGFwcGVuZCBTVkdcbiAgY29uc3Qgc3ZnID0gZDMuc2VsZWN0KFwiI2NvbnRhaW5lclwiKS5hcHBlbmQoXCJzdmdcIilcbiAgICAuYXR0cihcInByZXNlcnZlQXNwZWN0UmF0aW9cIiwgXCJ4TWluWU1pbiBtZWV0XCIpXG4gICAgLy8gLmF0dHIoXCJ3aWR0aFwiLCB3aWR0aClcbiAgICAvLyAuYXR0cihcImhlaWdodFwiLCBoZWlnaHQqMilcbiAgICAuYXR0cihcInZpZXdCb3hcIixcbiAgICAgICgtMSAqIGFkaikgKyBcIiBcIiArXG4gICAgICAoLTEgKiBhZGopICsgXCIgXCIgK1xuICAgICAgKHdpZHRoICsgYWRqICogMykgKyBcIiBcIiArXG4gICAgICAoaGVpZ2h0ICsgYWRqICogMylcbiAgICApXG4gICAgLnN0eWxlKFwicGFkZGluZ1wiLCBwYWRkaW5nKVxuICAgIC5zdHlsZShcIm1hcmdpblwiLCBtYXJnaW4pXG4gICAgLmNsYXNzZWQoXCJzdmctY29udGVudFwiLCB0cnVlKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdREFUQS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIC8vIHBhcnNlIHRoZSBkYXRlIGFuZCB0aW1lXG4gIGNvbnN0IHRpbWVDb252ID0gZDMudGltZVBhcnNlKFwiJWIgJWQsICVZXCIpO1xuICBjb25zdCBkYXRhc2V0ID0gZDMuanNvbihcIi4vZGlzdC9hc3NldHMvZGF0YS5qc29uXCIpO1xuXG4gIGRhdGFzZXQudGhlbihmdW5jdGlvbiAoZGF0YSkge1xuICAgIGxldCBzbGljZXMgPSBbXTtcbiAgICBsZXQgaTtcblxuICAgIGZvciAoaSA9IDA7IGkgPCBzZWFyY2hUZXJtcy5sZW5ndGg7IGkrKyl7XG4gICAgICBjb25zdCBzbGljZSA9IHtcbiAgICAgICAgdGVybTogc2VhcmNoVGVybXNbaV0sXG4gICAgICAgIHZhbHVlczogZGF0YS5tYXAoZnVuY3Rpb24gKGQpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgZGF0ZTogdGltZUNvbnYoZC5mb3JtYXR0ZWRBeGlzVGltZSksXG4gICAgICAgICAgICBwb2ludDogK2QudmFsdWVbaV1cbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgICBzbGljZXMucHVzaChzbGljZSlcbiAgICB9XG4gICAgXG4gICAgLy8gZm9yIHJlZmVyZW5jZTogcHJldmlvdXMgd2F5IG9mIGNyZWF0aW5nIHNsaWNlc1xuICAgIC8vIHNlYXJjaFRlcm1zLmZvckVhY2godGVybSA9PiB7XG5cbiAgICAvLyAgIGNvbnN0IHNsaWNlID0ge1xuICAgIC8vICAgICB0ZXJtOiB0ZXJtLFxuICAgIC8vICAgICB2YWx1ZXM6IGRhdGFbdGVybV0ubWFwKGZ1bmN0aW9uIChkKSB7XG4gICAgLy8gICAgICAgcmV0dXJuIHtcbiAgICAvLyAgICAgICAgIGRhdGU6IHRpbWVDb252KGQuZm9ybWF0dGVkQXhpc1RpbWUpLFxuICAgIC8vICAgICAgICAgcG9pbnQ6ICtkLnZhbHVlWzBdXG4gICAgLy8gICAgICAgfVxuICAgIC8vICAgICB9KVxuICAgIC8vICAgfVxuXG4gICAgLy8gICBzbGljZXMucHVzaChzbGljZSk7XG4gICAgLy8gfSlcblxuICAgIGNvbnNvbGUubG9nKFwic2xpY2VzXCIsIHNsaWNlcyk7XG5cbiAgICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1TQ0FMRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gICAgLy8gc3RyZXRjaCBkYXRhIHZhbHVlcyBmcm9tIDAgdG8gdGhlIHN2ZydzIHdpZHRoXG4gICAgY29uc3QgeFNjYWxlID0gZDMuc2NhbGVUaW1lKCkucmFuZ2UoWzAsIHdpZHRoXSk7XG4gICAgY29uc3QgeVNjYWxlID0gZDMuc2NhbGVMaW5lYXIoKS5yYW5nZVJvdW5kKFtoZWlnaHQsIDBdKTtcbiAgICBcblxuICAgIC8vIGRlZmluZSBtaW4gYW5kIG1heCB2YWx1ZXMgZm9yIGRvbWFpbiBvbiB4LWF4aXMgKHRpbWUpXG4gICAgY29uc3Qgc3RhcnREYXRlID0gZDMubWluKHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5taW4ocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmRhdGVcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBjb25zdCBlbmREYXRlID0gZDMubWF4KHNsaWNlcywgZnVuY3Rpb24gKHMpIHtcbiAgICAgIHJldHVybiBkMy5tYXgocy52YWx1ZXMsIGZ1bmN0aW9uICh2KSB7XG4gICAgICAgIHJldHVybiB2LmRhdGVcbiAgICAgIH0pXG4gICAgfSk7XG5cbiAgICBcbiAgICAvLyBkZWZpbmUgbWF4IHZhbHVlIGZvciBkb21haW4gb24geS1heGlzIChwb2ludHMpXG4gICAgY29uc3QgbWF4WSA9IGQzLm1heChzbGljZXMsIGZ1bmN0aW9uIChzKSB7XG4gICAgICByZXR1cm4gZDMubWF4KHMudmFsdWVzLCBmdW5jdGlvbih2KSB7XG4gICAgICAgIHJldHVybiB2LnBvaW50XG4gICAgICB9KVxuICAgIH0pXG5cbiAgICAvLyBzZXQgZG9tYWluIG9mIHgtYXhpc1xuICAgIHhTY2FsZS5kb21haW4oW3N0YXJ0RGF0ZSwgZW5kRGF0ZV0pXG4gICAgXG4gICAgLy8gc2V0IGRvbWFpbiBvZiB5LWF4aXNcbiAgICB5U2NhbGUuZG9tYWluKFswLCBtYXhZXSlcblxuICAgIC8vIEZPUiBURVNUSU5HIERPTUFJTiBWQUxVRVNcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1pblhcIiwgc3RhcnREYXRlKTtcbiAgICAvLyBjb25zb2xlLmxvZyhcIm1heFhcIiwgZW5kRGF0ZSk7XG4gICAgLy8gY29uc29sZS5sb2coXCJtYXhZXCIsIG1heFkpO1xuXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtwcmVwXUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuICBcbiAgY29uc3QgeEF4aXMgPSBkM1xuICAgIC5heGlzQm90dG9tKClcbiAgICAudGlja3MoZDMudGltZU1vbnRoLmV2ZXJ5KDEyKSlcbiAgICAudGlja0Zvcm1hdChkMy50aW1lRm9ybWF0KFwiJWIgJVlcIikpXG4gICAgLy8gLnRpY2tzKGQzLnRpbWVZZWFyLmV2ZXJ5KDEpKVxuICAgIC8vIC50aWNrRm9ybWF0KGQzLnRpbWVGb3JtYXQoXCIlWVwiKSlcbiAgICAuc2NhbGUoeFNjYWxlKTtcblxuICBjb25zdCB5QXhpcyA9IGQzXG4gICAgLmF4aXNMZWZ0KClcbiAgICAudGlja3Moc2xpY2VzWzBdLnZhbHVlcy5sZW5ndGggLyAxMClcbiAgICAuc2NhbGUoeVNjYWxlKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bcHJlcF1MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuICAvLyBhY2Nlc3NvciBmdW5jdGlvbi4gVGFrZXMgaW4gdGhlIGRhdGEgYXJyYXkgYW5kIGV4dHJhY3RzIHRoZSB4LHkgY29vcmRpbmF0ZXNcbiAgY29uc3QgbGluZSA9IGQzXG4gICAgLmxpbmUoKVxuICAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4geVNjYWxlKGQucG9pbnQpOyB9KTtcbiAgXG4gIC8vIHRvIGlsbHVzdHJhdGUgbGluZS55KClcbiAgLy8gY29uc3QgbGluZSA9IGQzXG4gIC8vICAgLmxpbmUoKVxuICAvLyAgIC54KGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgLy8gICAueShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC5wb2ludDsgfSk7XG4gIFxuICAvLyB0byBkaWZmZXJlbnRpYXRlIGxpbmVzXG4gIGxldCBsaW5lSWQgPSAwO1xuICBjb25zdCBsaW5lSWRzID0gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIFwibGluZS1cIiArIGxpbmVJZCsrO1xuICB9XG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tW3ByZXBdVE9PTFRJUC0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG4gIFxuICBjb25zdCB0b29sdGlwID0gZDMuc2VsZWN0KFwiYm9keVwiKS5hcHBlbmQoXCJkaXZcIikgLy8gY3VycmVudGx5IGV4cGVyaW1lbnRpbmcgd2l0aCBzZWxlY3RcbiAgICAuYXR0cihcImNsYXNzXCIsIFwidG9vbHRpcFwiKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcbiAgICAuc3R5bGUoXCJwb3NpdGlvblwiLCBcImFic29sdXRlXCIpO1xuICBcbiAgLy8gZXhwZXJpbWVudGluZyB3aXRoIHNlbGVjdG9yc1xuICAvLyBjb25zb2xlLmxvZyhcImdcIiwgZDMuc2VsZWN0KFwiZ1wiKSk7IC8vIHNlbGVjdGluZyBnIHJldHVybnMgYW4gZW1wdHkgYXJyYXlcbiAgLy8gY29uc29sZS5sb2coXCJnMlwiLCBkMy5zZWxlY3RBbGwoXCJnXCIpKTsgLy8gc2ltaWxhciB0byBhYm92ZTsgbm8gZWxlbWVudHMgcmV0dXJuZWRcbiAgLy8gY29uc29sZS5sb2coXCJnM1wiLCBkMy5zZWxlY3QoXCJib2R5XCIpKTtcbiAgLy8gY29uc29sZS5sb2coXCJzdmdcIiwgZDMuc2VsZWN0KFwic3ZnXCIpKTsgXG5cbiAgLy8tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLVtkcmF3aW5nXUFYRVMtLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0vL1xuXG4gIHN2Z1xuICAgIC5hcHBlbmQoXCJnXCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcImF4aXNcIilcbiAgICAuYXR0cihcInRyYW5zZm9ybVwiLCBcInRyYW5zbGF0ZSgwLFwiICsgaGVpZ2h0ICsgXCIpXCIpXG4gICAgLmNhbGwoeEF4aXMpIC8vIC5jYWxsIGNhbGxzIHRoZSBmdW5jdGlvbiB4QXhpcyBvbiB0aGUgZWxlbWVudHMgb2YgdGhlIHNlbGVjdGlvbiBnXG5cbiAgc3ZnXG4gICAgLmFwcGVuZChcImdcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIFwiYXhpc1wiKVxuICAgIC5jYWxsKHlBeGlzKVxuICAgIC5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLnRleHQoXCJGcmVxdWVuY3lcIilcbiAgICAuYXR0cihcImR5XCIsIFwiMC43NWVtXCIpXG4gICAgLmF0dHIoXCJ5XCIsIC00MClcbiAgICAuc3R5bGUoXCJ0ZXh0LWFuY2hvclwiLCBcImVuZFwiKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1bZHJhd2luZ11MSU5FUy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS8vXG5cbiAgY29uc3QgbGluZXMgPSBzdmcuc2VsZWN0QWxsKFwibGluZXNcIilcbiAgICAuZGF0YShzbGljZXMpXG4gICAgLmVudGVyKClcbiAgICAuYXBwZW5kKFwiZ1wiKVxuXG4gIGxpbmVzLmFwcGVuZChcInBhdGhcIilcbiAgICAuYXR0cihcImNsYXNzXCIsIGxpbmVJZHMpIC8vIGRpZmZlcmVudGlhdGUgbGluZXNcbiAgICAuYXR0cihcImRcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIGxpbmUoZC52YWx1ZXMpOyB9KVxuICBcblxuICAvLyBhZGQgbGFiZWxzIHRvIGVhY2ggbGluZVxuICBsaW5lcy5hcHBlbmQoXCJ0ZXh0XCIpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInRlcm1fbGFiZWxcIiArIFwiIGFcIilcbiAgICAudGV4dChmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC50ZXJtIH0pXG4gICAgLmF0dHIoXCJ4XCIsIDUpXG4gICAgLmF0dHIoXCJ0cmFuc2Zvcm1cIiwgZnVuY3Rpb24gKGQpIHtcbiAgICAgIGNvbnN0IG51bVBvaW50cyA9IGQudmFsdWVzLmxlbmd0aCAtIDE7IC8vIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBkYXRhIHBvaW50XG4gICAgICBjb25zdCBsYWJlbFggPSB4U2NhbGUoZC52YWx1ZXNbbnVtUG9pbnRzXS5kYXRlKSArIDEwO1xuICAgICAgY29uc3QgbGFiZWxZID0geVNjYWxlKGQudmFsdWVzW251bVBvaW50c10ucG9pbnQpICsgNTtcbiAgICAgIHJldHVybiBcInRyYW5zbGF0ZShcIiArIGxhYmVsWCArIFwiLFwiICsgbGFiZWxZICsgXCIpXCI7XG4gICAgfSlcbiAgICBcblxuICAvLyB0byBpbGx1c3RyYXRlIHN2ZyBwYXRoIG1pbmktbGFuZ3VhZ2VcbiAgICAvLyBzdmcuYXBwZW5kKFwicGF0aFwiKVxuICAgIC8vIC5hdHRyKFwiZFwiLCBcIk0xLCA1TDIwLCAyMEw0MCwgMTBMNjAsIDQwTDgwLCA1TDEwMCwgNjBcIilcbiAgXG4gIFxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdUE9JTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICBsaW5lcy5zZWxlY3RBbGwoXCJwb2ludHNcIilcbiAgICAuZGF0YShmdW5jdGlvbiAoZCkgeyByZXR1cm4gZC52YWx1ZXMgfSlcbiAgICAuZW50ZXIoKVxuICAgIC5hcHBlbmQoXCJjaXJjbGVcIilcbiAgICAuYXR0cihcImN4XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB4U2NhbGUoZC5kYXRlKTsgfSlcbiAgICAuYXR0cihcImN5XCIsIGZ1bmN0aW9uIChkKSB7IHJldHVybiB5U2NhbGUoZC5wb2ludCk7IH0pXG4gICAgLmF0dHIoXCJyXCIsIDEpXG4gICAgLmF0dHIoXCJjbGFzc1wiLCBcInBvaW50XCIpXG4gICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcblxuICAvLy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS1baW50ZXJhY3RpdmVdRVZFTlRTLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLy9cblxuICAvLyBhZGQgaW52aXNpYmxlIGNpcmNsZXMgdG8gaW5jcmVhc2UgcmVzcG9uc2l2ZSBhcmVhXG4gIGxpbmVzLnNlbGVjdEFsbChcInBvaW50c1wiKVxuICAgIC5kYXRhKGZ1bmN0aW9uIChkKSB7IHJldHVybiAoZC52YWx1ZXMpOyB9KVxuICAgIC5lbnRlcigpXG4gICAgLmFwcGVuZChcImNpcmNsZVwiKVxuICAgIC5hdHRyKFwiY3hcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHhTY2FsZShkLmRhdGUpOyB9KVxuICAgIC5hdHRyKFwiY3lcIiwgZnVuY3Rpb24gKGQpIHsgcmV0dXJuIHlTY2FsZShkLnBvaW50KTsgfSlcbiAgICAuYXR0cigncicsIDEwKVxuICAgIC5zdHlsZShcIm9wYWNpdHlcIiwgMClcblxuICAgIC8vIGNvbmZpZ3VyZSBldmVudHNcbiAgICAub24oJ21vdXNlb3ZlcicsIGZ1bmN0aW9uIChkKSB7XG4gICAgICBcbiAgICAgIHRvb2x0aXAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kZWxheSgzMClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKTtcbiAgICAgICAgLy8gLnN0eWxlKFwiZmlsbFwiLCBcInJlZFwiKSAvLyByZW1vdmVkIGJlY2F1c2UgdW5uZWNlc3NhcnlcbiAgICAgIFxuICAgICAgdG9vbHRpcC5odG1sKGQucG9pbnQpXG4gICAgICAuYXR0cihcImN4XCIsICggeFNjYWxlKGQuZGF0ZSkgKSlcbiAgICAgIC5hdHRyKFwiY3lcIiwgKCB5U2NhbGUoZC5wb2ludCkgKSk7XG4gICAgICAvLyAuc3R5bGUoXCJsZWZ0XCIsIChkMy5ldmVudC5wYWdlWCArIDI1KSArIFwicHhcIilcbiAgICAgIC8vIC5zdHlsZShcInRvcFwiLCAoZDMuZXZlbnQucGFnZVkpICsgXCJweFwiKTtcblxuICAgICAgY29uc3Qgc2VsZWN0aW9uID0gZDMuc2VsZWN0KHRoaXMpIC8vIFt0aGlzXSBpcyB0aGUgaW52aXNpYmxlIGNpcmNsZVxuICAgICAgICAucmFpc2UoKTsgLy8gLnJhaXNlKCkgcmUtaW5zZXJ0cyBlYWNoIHNlbGVjdGVkIGVsZW1lbnQsIGluIG9yZGVyLCBhcyB0aGUgbGFzdCBjaGlsZCBvZiBpdHMgcGFyZW50XG4gICAgICBcbiAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMpO1xuICAgICAgLy8gY29uc29sZS5sb2coZCk7XG4gICAgICBcbiAgICAgIHNlbGVjdGlvblxuICAgICAgICAudHJhbnNpdGlvbigpXG4gICAgICAgIC5kZWxheShcIjIwXCIpXG4gICAgICAgIC5kdXJhdGlvbihcIjIwMFwiKVxuICAgICAgICAuYXR0cihcInJcIiwgNilcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAxKVxuICAgICAgICAuc3R5bGUoXCJmaWxsXCIsIFwiI2VkMzcwMFwiKTtcbiAgICAgIH0pXG4gICAgICBcblxuICAub24oXCJtb3VzZW91dFwiLCBmdW5jdGlvbiAoZCkge1xuICAgICAgdG9vbHRpcC50cmFuc2l0aW9uKClcbiAgICAgICAgLmR1cmF0aW9uKDIwMClcbiAgICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICAgIFxuICAgIGNvbnN0IHNlbGVjdGlvbiA9IGQzLnNlbGVjdCh0aGlzKTtcblxuICAgIHNlbGVjdGlvblxuICAgICAgLnRyYW5zaXRpb24oKVxuICAgICAgLmRlbGF5KFwiMjBcIilcbiAgICAgIC5kdXJhdGlvbihcIjIwMFwiKVxuICAgICAgLmF0dHIoXCJyXCIsIDEwKVxuICAgICAgLnN0eWxlKFwib3BhY2l0eVwiLCAwKTtcbiAgICB9KTtcbiAgXG4gIC8vIHRlc3QgdHJhbnNpdGlvbnMgMVxuICAvLyBkMy5zZWxlY3QoXCJib2R5XCIpXG4gIC8vIC50cmFuc2l0aW9uKClcbiAgLy8gLmRlbGF5KDIwMDApXG4gIC8vIC5vbihcInN0YXJ0XCIsIGZ1bmN0aW9uKCkge2QzLnNlbGVjdCh0aGlzKS5zdHlsZShcImJhY2tncm91bmQtY29sb3JcIiwgXCJncmVlblwiKX0pIC8vIHdvcmtzIHRoZSBzYW1lIGlmIHlvdSByZXBsYWNlIFt0aGlzXSB3aXRoIFtcImJvZHlcIl1cbiAgLy8gLnN0eWxlKFwiYmFja2dyb3VuZC1jb2xvclwiLCBcInJlZFwiKVxuICBcbiAgLy8gdGVzdCB0cmFuc2l0aW9ucyAyXG4gIC8vIGQzLnNlbGVjdChcImJvZHlcIilcbiAgLy8gLnRyYW5zaXRpb24oKS5kZWxheSgxMDAwKS5kdXJhdGlvbigyMDAwKVxuICAvLyAuc3R5bGVUd2VlbihcImJhY2tncm91bmQtY29sb3JcIiwgZnVuY3Rpb24oKSB7IHJldHVybiBkMy5pbnRlcnBvbGF0ZShcImdyZWVuXCIsIFwicmVkXCIpfSlcbiAgXG5cbiAgLy8gcnVuIGRhdGEgdmlzdWFsaXphdGlvbiBmcm9tIGV4YW1wbGUuanNcbiAgLy8gdGVzdF9mdW5jdGlvbigpO1xuICBcbiAgfSk7XG5cbn0pOyIsImNvbnN0IHNlYXJjaFRlcm1zID0gW1widnNjbyBnaXJsXCIsXG5cImJvb21lclwiXG5dO1xuXG5jb25zdCB3YWl0aW5nID0gW1xuICAgIFwiYW5kIEkgb29wXCIsXG4gICAgXCJhc21yXCIsXG4gICAgXCJlIGdpcmxcIixcbiAgICBcInNmc1wiLFxuICAgIFwibmdsXCIsXG4gICAgXCJzaW1wXCIsXG4gICAgXCJ1d3VcIixcbiAgICBcImdhc2xpZ2h0aW5nXCIsXG4gICAgXCJsb2xcIlxuXVxuXG5tb2R1bGUuZXhwb3J0cyA9IHNlYXJjaFRlcm1zOyJdLCJzb3VyY2VSb290IjoiIn0=