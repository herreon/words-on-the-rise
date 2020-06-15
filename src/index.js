import test_function from "./example.js";
import simple_example from "./simple.js";
import { searchTerms, $2019_1, $2019_2, $2019_3 } from "./terms.js";

import '../dist/assets/styles/styles.scss';

// searchTerms is the array of the most rising words of 2019
console.log("searchTerms", searchTerms)
// const termsModule = require("./terms.js");
// console.log(termsModule.searchTerms);

// parse the date and time; store data in variable dataA
const timeConv = d3.timeParse("%b %d, %Y");

let dA = d3.json("./dist/assets/data/2019_1.json");
let dB = d3.json("./dist/assets/data/2019_2.json");
let dC = d3.json("./dist/assets/data/2019_3.json");

let dataCarrier = [];

let dTest = dA.then(function(dAdata) {
  // let dataCarrier = [];

  let i;

  for (i = 0; i < 3; i++) {

    const dASlice = {
      term: $2019_1[i],
      values: dAdata.timelineData.map(function(d) {
        return {
          date: timeConv(d.formattedAxisTime),
          point: +d.value[i],
        };
      }),
    };

    dataCarrier.push(dASlice);
    // console.log("dASlice", dASlice)
  }

  console.log("before transform", dataCarrier[dataCarrier.length - 1]);
  

  dB.then(function(dBdata) {

    console.log("there")

    const newSlice = {
      term: $2019_2[1],
      values: dBdata.timelineData.map(function (d, i) {
        // console.log("d.value", d.value)
  
        let numerator = d.value[0];
        let denominator = dataCarrier[dataCarrier.length - 1].values[i].point;
        let ratio = numerator/denominator;
        let calc = Math.round(+d.value[1] / ratio) ;
        let calc2 = Math.round((+d.value[1] / ratio)*10)/10 ;
        
        // console.log("numerator", numerator);
        // console.log("denominator", denominator);
        // console.log("ratio", ratio);
        console.log("calc", calc);
        // console.log("math", Math.round(0.49) )

        return {
          date: timeConv(d.formattedAxisTime),
          point: calc,
        };
      }),
    }
    dataCarrier.push(newSlice);
  })
  
  console.log("after transform", dataCarrier);
  return dataCarrier;
});


// dA = dA.then(function(data) {
//   let dataCarrier = [];
//   let i;

//   for (i = 0; i < 3; i++) {
//     const dASlice = {
//       term: $2019_1[i],
//       values: data.timelineData.map(function (d) {
//         return {
//           date: timeConv(d.formattedAxisTime),
//           point: +d.value[i],
//         };
//       }),
//     };

//     //// console.log("slice", dASlice);

//     dataCarrier.push(dASlice);
//   }
//   console.log(dataCarrier);
//   return dataCarrier;
// })

// dB = dB.then(function(data) {
//   let dataCarrier = [];
//   let i;

//   for (i = 0; i < 2; i++) {
//     const dBSlice = {
//       term: $2019_2[i],
//       values: data.timelineData.map(function (d) {
//         return {
//           date: timeConv(d.formattedAxisTime),
//           point: +d.value[i],
//         };
//       }),
//     };


//     dataCarrier.push(dBSlice);
//   }
//   console.log(dataCarrier);
//   return dataCarrier;
// })

// console.log("dTest", dTest);

dC = dC.then(function(data) {
  let thiscarrier = [];
  let i;

  for (i = 0; i < 4; i++) {
    const dCSlice = {
      term: $2019_3[i],
      values: data.timelineData.map(function (d, index) {

        if(i===3){
          let premade = d.value[i];
          let mycreate = dataCarrier[i].values[index].point;
          console.log("compare", premade, mycreate)
        }

        return {
          date: timeConv(d.formattedAxisTime),
          point: +d.value[i],
        };
      }),
    };

    thiscarrier.push(dCSlice);
  }
  console.log("dC", thiscarrier);
  return thiscarrier;
})


// console.log("dC",dC)


// ORIGINAL
// let datasetA = d3.json("./dist/assets/data/2019_1.json");

// datasetA = datasetA.then(function(data) {

//   let dataCarrier = [];
//   let i;

//   for (i = 0; i < searchTerms.length; i++) {
//     const dataASlice = {
//       term: $2019[i],
//       values: data.map(function (d) {
//         return {
//           date: timeConv(d.formattedAxisTime),
//           point: +d.value[i]
//         }
//       })
//     }

//     //// console.log("slice", dataASlice);

//     dataCarrier.push(dataASlice);
//   }
//   return dataCarrier;
// })


// creating reusable chart
function chartTemplate() {

  // set the dimensions and margins of the svg
  let width = 600;
  let height = 400;
  let adj = 30;

  function draw(selection) {
    selection.each(function(data) {
      
      console.log("data", data);
      
      // SCALES: x-axis
      // define min and max values for domain on x-axis (time)
      const startDate = d3.min(data, function(d) {
        return d3.min(d.values, function(v) {
          return v.date
        })
      });

      const endDate = d3.max(data, function(d) {
        return d3.max(d.values, function(v) {
          return v.date
        })
      });

      // set domain and range of x-axis
      const xScale = d3.scaleTime().domain([startDate, endDate])
                        .range([0, width])
      
      // SCALES: y-axis
      // define max value for domain on y-axis (points)
      const maxY = d3.max(data, function(s) {
        return d3.max(s.values, function(v) {
            return v.point
        })
      })
      
      // set domain of y-axis
      const yScale = d3.scaleLinear().domain([0, maxY])
                        .rangeRound([height, 0])
      
      
      const line = d3.line()
                      .x(function (d) {
                        return xScale(d.date);
                      })
                      .y(function (d) {
                        return yScale(d.point);
                      });              


      // AXES
      const xAxis = d3.axisBottom()
                      .scale(xScale)
                      .ticks(d3.timeMonth.every(12))
                      .tickFormat(d3.timeFormat("%b %Y")) 
                      .tickSizeOuter(0)
                      
      // const yAxis = d3.axisLeft()
      //                 .scale(yScale)
      //                 .tickValues([])
      //                 .tickSizeOuter(0)

      // AXES: gridlines
      const yAxisGrid = d3.axisLeft()
                          .scale(yScale)
                          .tickSize(-width)
                          .tickFormat('')
                          .tickValues([100/3, 200/3, 100])
                          .tickSizeOuter(0)
                        
      // append svg
      const svg = d3
        .select(this)
        .append("svg")
        .attr("class", "chart")
        .attr("width", width)
        .attr("height", height)
        .attr("viewBox", `-${adj} -${adj} ${width + adj * 10} ${height + adj * 2}`)
        .attr("preserveAspectRatio", "xMinYMin meet");
                      
      // draw x-axis
      svg.append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis) // .call calls the function xAxis on the elements of the selection g
          
        
      // d3.selectAll("g.tick:last-of-type").text.append("Jan");
      // console.log("test", d3.selectAll("g.tick:last-of-type"))

      // draw y-axis
      svg.append("g")
        .attr("class", "y-axis-grid")
        .call(yAxisGrid)
        // .append("text")
        // .text("Frequency")
        // .attr("dy", "0.75em")
        // .attr("y", -40)
        // .style("text-anchor", "end");

        
      // draw lines
      const lines = svg.selectAll("lines").data(data).enter().append("g");

      lines
        .append("path")
        .attr("class", function(d, i) { return `line-${i}` })
        .attr("d", function(d) { return line(d.values) });

      // add labels to each line
      lines.append("text")
            .attr("class", function(d, i) { return `label-${i}` })
            .text(function(d) { return `⇽       ${d.term}`; })
            .attr("x", 5)
            .attr("transform", function (d) {
              const lastIndex = d.values.length - 1; // the index of the last data point
              const labelX = xScale(d.values[lastIndex].date) + 1;
              const labelY = yScale(d.values[lastIndex].point) + 1;
              return `translate(${labelX}, ${labelY})`
            })

    })    
  }

  // accessor / setter functions for width and height
  draw.width = function(value) {
    if (!arguments.length) {
      return width;
    }
    
    width = value;
    return draw;
  };

  draw.height = function(value) {
    if (!arguments.length) {
      return height;
    }

    height = value;
    return draw;
  };

  // return draw function
  return draw;

}

// to illustrate svg path mini-language
// const illustration = svg.append("path")
    // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")

// stretch data values from 0 to the svg's width

// const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  
  console.log("index.js content has loaded");
  
  //// console.log("search terms", searchTerms)

  // CALL DRAW CHART FUNCTION
  // datasetA.then((d) => {
  //   d3.select("#container").datum(d).call(chartTemplate())
  // })
 

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