import test_function from "./example.js";
import '../dist/assets/styles/styles.scss';

const searchTerms = require("./searchTerms.js");

document.addEventListener("DOMContentLoaded", function () {

  console.log("index.js content has loaded");
  console.log("search terms", searchTerms)

  //-----------------------------[prep]SVG------------------------------// 
  // set the dimensions and margins of the graph
  const width = 800;
  const height = 400;
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