import test_function from "./references/z_example.js";
import simple_example from "./references/z_simple.js";

// data
import { retriever, createDataset } from "./data/dataTransformer.js";
import { $2019, $2019_searchTerms, $2019_splitQueries } from "./data/terms.js";

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

  const $2019_retrieverPromises = retriever($2019_splitQueries[0]);
  console.log("$2019_retrieverPromises", $2019_retrieverPromises)
  
  // CALL DRAW CHART FUNCTION
  console.log("$2019_splitqueries", $2019_splitQueries)
  

  createDataset($2019_splitQueries[1],$2019_splitQueries[2], $2019_retrieverPromises)
  .then((d) => {
      d3.select("#container").datum(d).call(chartTemplate())
    })
    
  

    // const zoom = d3.zoom()
    //                 .scaleExtent()
    //                 .extent([0,0], [800,800])

    // d3.select("svg").call(zoom)
    // const ithink = d3.selectAll(".chart").filter(function(d, i) {
    //   return i === 0
    // })
    // console.log("ithink", ithink)
    // ithink
    // d3.select("#container2").append("clipPath")
    //       .attr("id", "date-clip")
    //       .append("rect")
    //       .attr("x", 0)
    //       .attr("y", 200)
    //       .attr("width", 400)
    //       .attr("height", 600);
    


//  d3.select("#svg").on("mouseover", function (d, i) {
  //  console.log("test worked", this);

  //  d3.selectAll("#date-clip").attr("width", xScale(endDate)).transition();
//  });

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