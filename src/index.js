import test_function from "./example.js";
import simple_example from "./simple.js";
import { $2019, $2019_searchTerms, $2019_sets } from "./terms.js";

import '../dist/assets/styles/styles.scss';


// parse the date and time; store data in variable dataA
const timeConv = d3.timeParse("%b %d, %Y");


function retriever (mainSet, groupedSet) {
  const retrievedPromises = [];

  groupedSet.forEach((set, index) => {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json(`./dist/assets/data/2019_${index}.json`));
  });

  return [mainSet.length, retrievedPromises];

}

const dataset = [];

function createDataset ([numWords, arrayOfPromises]) {


  let mainIndex = 0;
  let increment = 0;
  

  let initialSet = arrayOfPromises[0];
  let subseqSets = arrayOfPromises.slice(1);

  // first set
  return initialSet = initialSet.then(function(data) {
    while(increment < 5) {

      const slice = {
        term: $2019[mainIndex],
        values: data.map(function(d) {
          return {
            date: timeConv(d.formattedAxisTime),
            point: +d.value[mainIndex],
          };
        }),
      }

      dataset.push(slice);
      mainIndex += 1;
      increment += 1;
    }

    console.log("dataset with initial subset", dataset)
    return dataset
  })

  // subseqSets = 
  .then(function(dataset) {
    // console.log("achieved", dataset)
    // add subsequent sets

    let promises = [];
    subseqSets.forEach(promise => {

      let newPromise = promise.then(function(data) {

        console.log("part 2 main index", mainIndex)

        increment = 0;
        
        while(increment < 5 && mainIndex < numWords) {
          const slice = {
            term: $2019[mainIndex],
            values: data.map(function(d, index) {
              
              let numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)
              let denominator = d.value[0]; // comparison value in current promise
              let ratio;
              
              if (denominator === 0) {
                ratio = 0;
              } else {
                ratio = numerator/denominator;
              }
    
              let calibratedValue = Math.round(+d.value[1] * ratio);
              // console.log(numerator, denominator, ratio, calibratedValue)

              return {
                date: timeConv(d.formattedAxisTime),
                point: calibratedValue,
              };
            }),
          };

          dataset.push(slice);

          mainIndex += 1;
          increment += 1;

        };
        
        // console.log("dataset after all 1", dataset)

        return dataset;
      })

      promises.push(newPromise);
    })

    return Promise.all(promises).then((result) => {

      // console.log("promises yo", result[result.length - 1]);
      // return result[result.length - 1];
      console.log("dataset", dataset);
      return dataset;

    })



  })

  // .then(res => {console.log("res",res)})

  // console.log("slice", arrayOfPromises.slice(1,3))
  
  
  
}




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

// // to illustrate svg path mini-language
// // const illustration = svg.append("path")
//     // .attr("d", "M1, 5L20, 20L40, 10L60, 40L80, 5L100, 60")

// // stretch data values from 0 to the svg's width

// // const yScale = d3.scaleLinear().rangeRound([height, 0]);

document.addEventListener("DOMContentLoaded", function () {
  
  console.log("index.js content has loaded");
  
  //// console.log("search terms", searchTerms)

  const testArray = retriever($2019, $2019_sets);

  // console.log("testArray", testArray)

  // CALL DRAW CHART FUNCTION
  let test = createDataset(testArray);
  // console.log('indexjs Test', test)

  createDataset(testArray).then((d) => {
    console.log("woohoo", d)
    // d3.select("#container").datum(d).call(chartTemplate())
  })
 

  // simple_example();
  // test_function();

});



//   // // append SVG
//   // const svg = d3.select("#container").append("svg")
//   //   .attr("preserveAspectRatio", "xMinYMin meet")
//   //   .attr("width", width)
//   //   .attr("height", height)
//   //   .attr("viewBox", `-${adj} -${adj} ${width + adj*3} ${height + adj*3}`)
//   //   .classed("svg-content", true);
  
  
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