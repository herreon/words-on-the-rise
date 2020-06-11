import test_function from "./example.js";
import simple_example from "./simple.js";

import '../dist/assets/styles/styles.scss';

// searchTerms is the array of the most rising words of 2019
const searchTerms = require("./searchTerms.js");

// creating reusable chart
function chartTemplate() {
  
  // set the dimensions and margins of the svg
  let width = 600;
  let height = 300;
  let adj = 100;

  // scales


  // axes



}


// // parse the date and time
// const timeConv = d3.timeParse("%b %d, %Y");
// const dataset = d3.json("./dist/assets/data.json");

// const slices = [];

// dataset.then(function (data) {
//   let i;

//   for (i = 0; i < searchTerms.length; i++) {
//     const slice = {
//       term: searchTerms[i],
//       values: data.map(function (d) {
//         return {
//           date: timeConv(d.formattedAxisTime),
//           point: +d.value[i]
//         }
//       })
//     }
//     slices.push(slice)
//   }
// })



// to illustrate svg path mini-language
// const illustration = svg.append("path")
    // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")

// stretch data values from 0 to the svg's width
// const xScale = d3.scaleTime().range([0, width]);
// const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  
  console.log("index.js content has loaded");
  // console.log("search terms", searchTerms)

  // console.log("slices", slices)

  // simple_example();
  // test_function();

  
});



  // // append SVG
  // const svg = d3.select("#container").append("svg")
  //   .attr("preserveAspectRatio", "xMinYMin meet")
  //   .attr("width", width)
  //   .attr("height", height)
  //   .attr("viewBox", `-${adj} -${adj} ${width + adj*3} ${height + adj*3}`)
  //   .classed("svg-content", true);

  // //-----------------------------[prep]DATA------------------------------//
  

  // dataset.then(function (data) {

  //   const countPoints = slices[0].values.length;


  //   //----------------------------[prep]SCALES-----------------------------//
   
    

  //   // define min and max values for domain on x-axis (time)
  //   const startDate = d3.min(slices, function (s) {
  //     return d3.min(s.values, function (v) {
  //       return v.date
  //     })
  //   });

  //   const endDate = d3.max(slices, function (s) {
  //     return d3.max(s.values, function (v) {
  //       return v.date
  //     })
  //   });

    
  //   // define max value for domain on y-axis (points)
  //   const maxY = d3.max(slices, function (s) {
  //     return d3.max(s.values, function(v) {
  //       return v.point
  //     })
  //   })

  //   // set domain of x-axis
  //   xScale.domain([startDate, endDate])
    
  //   // set domain of y-axis
  //   yScale.domain([0, maxY])

  //   // FOR TESTING DOMAIN VALUES
  //   // console.log("minX", startDate);
  //   // console.log("maxX", endDate);
  //   // console.log("maxY", maxY);


  // //-----------------------------[prep]AXES------------------------------//
  
  // const xAxis = d3
  //   .axisBottom()
  //   .ticks(d3.timeMonth.every(12))
  //   .tickFormat(d3.timeFormat("%b %Y"))
  //   // .ticks(d3.timeYear.every(1))
  //   // .tickFormat(d3.timeFormat("%Y"))
  //   .scale(xScale);

  // const yAxis = d3
  //   .axisLeft()
  //   .ticks(countPoints / 10)
  //   .scale(yScale);


  
  // //-----------------------------[drawing]AXES------------------------------//

  // svg
  //   .append("g")
  //   .attr("class", "axis")
  //   .attr("transform", "translate(0," + height + ")")
  //   .call(xAxis) // .call calls the function xAxis on the elements of the selection g

  // svg
  //   .append("g")
  //   .attr("class", "axis")
  //   .call(yAxis)
  //   .append("text")
  //   .text("Frequency")
  //   .attr("dy", "0.75em")
  //   .attr("y", -40)
  //   .style("text-anchor", "end");

  // //----------------------------[drawing]LINES------------------------------//

  // const lines = svg.selectAll("lines")
  //   .data(slices)
  //   .enter()
  //   .append("g")

  // lines.append("path")
  //   .attr("class", lineIds) // differentiate lines
  //   .attr("d", function (d) { return line(d.values); })
  

  // // add labels to each line
  // lines.append("text")
  //   .attr("class", "term_label" + " a")
  //   .text(function (d) { return d.term })
  //   .attr("x", 5)
  //   .attr("transform", function (d) {
  //     const numPoints = d.values.length - 1; // the index of the last data point
  //     const labelX = xScale(d.values[numPoints].date) + 10;
  //     const labelY = yScale(d.values[numPoints].point) + 5;
  //     return "translate(" + labelX + "," + labelY + ")";
  //   })
    

  
  
  
  // //----------------------------[interactive]POINTS------------------------------//

  // lines.selectAll("points")
  //   .data(function (d) { return d.values })
  //   .enter()
  //   .append("circle")
  //   .attr("cx", function (d) { return xScale(d.date); })
  //   .attr("cy", function (d) { return yScale(d.point); })
  //   .attr("r", 1)
  //   .attr("class", "point")
  //   .style("opacity", 1);


