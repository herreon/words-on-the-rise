import test_function from "./example.js";

//------------------------1. PREPARATION------------------------//
//-----------------------------SVG------------------------------// 
// set the dimensions and margins of the graph
const width = 960;
const height = 500;
const margin = 5;
const padding = 5;
const adj = 30;

// append SVG
const svg = d3
  .select("#container")
  .append("svg")
  .attr("preserveAspectRatio", "xMinYMin meet")
  .attr("viewBox",
    (-1*adj) + " " + 
    (-1*adj) + " " + 
    (width + adj * 3) + " " + 
    (height + adj * 3)
  )
  .style("padding", padding)
  .style("margin", margin)
  .classed("svg-content", true);

//-----------------------------DATA------------------------------//
// parse the date and time
const timeConv = d3.timeParse("%B %-d, %Y");

//----------------------------SCALES-----------------------------//
// stretch data values from 0 to the svg's width
const xScale = d3.scaleTime().range([0, width]);
const yScale = d3.scaleLinear().rangeRound([height, 0]);


function draw(data, searchTerm) {
  const currentTerm = data[searchTerm];
  
  // console.log(
  //   d3.extent(currentTerm, function (d) {
  //     return timeConv(d.formattedAxisTime);
  //   })
  // );

  xScale.domain(
    d3.extent(currentTerm, function (d) {
      return timeConv(d.formattedAxisTime);
    })
  );

  yScale.domain([0, d3.max(data, function (c) {
    return c
    //   return d3.max(c.values, function (d) {
    //     return d.measurement + 4;
    //   });
    }),
  ]);

  console.log("max test", d3.max(data, function (c) {
    return c.values
  })
  )
  
};

document.addEventListener("DOMContentLoaded", function () {

  console.log("index.js content has loaded");

  // d3.json("./dist/assets/data.json").then(function(inputData) {

  //   // if (error) throw error;
  //   console.log(inputData);
  //   // draw(inputData, "boomer");
  // });

  d3.json("./dist/assets/data.json").then(function(data) {
    draw(data, "boomer");
  });
  
  test_function();

});