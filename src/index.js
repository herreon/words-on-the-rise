import test_function from "./z_example.js";
import simple_example from "./z_simple.js";

// data
import { retriever, createDataset } from "./dataTransformer.js";
import { $2019, $2019_searchTerms, $2019_sets } from "./terms.js";

// d3 chart
import { chartTemplate } from "./drawChart.js";

import '../dist/assets/styles/styles.scss';

// // to illustrate svg path mini-language
// // const illustration = svg.append("path")
//     // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")

// // stretch data values from 0 to the svg's width

// // const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  
  console.log("index.js content has loaded");
  
  //// console.log("search terms", searchTerms)

  const testArray = retriever($2019, $2019_sets);
  console.log("testArray", testArray)
  // let test = createDataset(testArray);
  // console.log('indexjs Test', test)

  // CALL DRAW CHART FUNCTION

  createDataset(testArray).then((d) => {
    console.log("woohoo", d)
    d3.select("#container").datum(d).call(chartTemplate())
  })
 

  // simple_example();
  // test_function();

});


  
  
//   // //----------------------------[interactive]POINTS------------------------------//

//   // lines.selectAll("points")
//   //   .data(function (d) { return d.values })
//   //   .enter()
//   //   .append("circle")
//   //   .attr("cx", function (d) { return xScale(d.date); })
//   //   .attr("cy", function (d) { return yScale(d.point); })
//   //   .attr("r", 1)
//   //   .attr("class", "point")
//   //   .style("opacity", 1);