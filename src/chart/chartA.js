import "core-js/stable";
import "regenerator-runtime/runtime";
import { addLabelCoords } from "./addlabelCoords.js";
import * as getDates from "./getDates.js";
import { resolve } from "../../webpack.config.js";

// import { termSliceValues } from "./getDates.js";

// creating reusable chart
export function chartA() {
  // set the dimensions and margins of the svg
  let width = 1200 * 0.6;
  let height = 800 * 0.6;
  let adj = 30;

  // the following variables are used to render the actual date ranges on the chart
  let chartStartDate;
  let chartEndDate;
  let chartIndexStart;
  let chartIndexEnd;
  let maxY;
    
  
  // based on the chart start and end dates, determines which values to 
  // look at (chartIndexStart & chartIndexEnd), then determines the maxY value
  function updateMaxY (data, chartStartDate, chartEndDate) {
    
      for (let i = 0; i < data[0].values.length; i++) {
          if (data[0].values[i].date >= chartStartDate) {
              chartIndexStart = i;
              break;
          }
      }

      for (let i = 0; i < data[0].values.length; i++) {
          
          if (data[0].values[i].date > chartEndDate) {
              chartIndexEnd = i;
              break;
          }

          chartIndexEnd = data[0].values.length;
      }


      maxY = d3.max(data, function (termSlice) {
          let valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);

          return d3.max(valueArray, function (v) {
              return v.point;
          });
      });
  }
    
    
  function draw(selection) {
      selection.each(function (data) {

      const hardMaxY = d3.max(data, function (termSlice) {
        return d3.max(termSlice.values, function (v) {
          return v.point;
        });
      });

      console.log("hard max y", hardMaxY)
      // define date min and max values for each chart frame

      // define min date for entire dataset
      const minDate = d3.min(data, function (d) {
          return d3.min(d.values, function (v) {
          return v.date;
          });
      });

      // define max date for entire dataset
      const maxDate = d3.max(data, function (d) {
          return d3.max(d.values, function (v) {
          return v.date;
          });
      });

      // define mid date for entire dataset
      const midDate = new Date((minDate.getTime() + maxDate.getTime()) / 2);
      // console.log("maxDate", maxDate)

      // max date for the first frame
      const juneDate = new Date(2019, 5, 30);

      // date of peak interest for vsco
      const vscoPeakDate = getDates.getTermPeakDate(data, "vsco");
      // console.log("vscopeakdate", vscoPeakDate)

      // date of 1st week of 2020
      const janDate = new Date(2020, 0, 8);
      // console.log("vscopeakdate", vscoPeakDate)

      chartStartDate = minDate;
      // chartEndDate = new Date(2019, 6, 30);
      chartEndDate = juneDate;
      updateMaxY(data, chartStartDate, chartEndDate);
      // console.log("maxY updated", maxY)

      // set domain and range of x-axis
      const xScale = d3
          .scaleTime()
          .domain([chartStartDate, chartEndDate])
          .range([0, width]);

      // set domain of y-axis
      const yScale = d3
          .scaleLinear()
          .domain([0, maxY])
          .rangeRound([height, 0]);


      // add label coordinates to dataset's termSlices
      addLabelCoords(data, chartIndexEnd, 12, xScale, yScale);

      // AXES
      const xAxis = d3.axisBottom(xScale);
      // .scale(xScale)

      xAxis
          .ticks(d3.timeMonth.every(12))
          .tickFormat(d3.timeFormat("%b %Y"))
          .tickSizeOuter(0);

      const yAxis = d3.axisLeft().scale(yScale).tickValues([]).tickSizeOuter(0);

      // AXES: gridlines
      const yAxisGrid = d3
          .axisLeft()
          .scale(yScale)
          .tickSize(-width)
          .tickFormat("")
          .tickValues([maxY / 3, (2 * maxY) / 3, maxY])
          .tickSizeOuter(0);

      // append svg
      const svg = d3
          .select(this)
          .append("svg")
          .attr("class", "chart")
          .attr("width", width)
          .attr("height", height)
          .attr("viewBox", `-${adj * 2} -${adj * 3} ${width + adj * 10} ${height + adj * 2}`)
          .attr("preserveAspectRatio", "xMinYMin meet");

      // draw x-axis
      svg
          .append("g")
          .attr("class", "x-axis")
          .attr("transform", `translate(0, ${height})`)
          .call(xAxis); // .call calls the function xAxis on the elements of the selection g

      // d3.selectAll("g.tick:last-of-type").text.append("Jan");
      // console.log("test", d3.selectAll("g.tick:last-of-type"))

      // draw y-axis
      svg.append("g").attr("class", "y-axis-grid").call(yAxisGrid);
      // .append("text")
      // .text("Frequency")
      // .attr("dy", "0.75em")
      // .attr("y", -40)
      // .style("text-anchor", "end");

      // append clip path
      const clip = svg
        .append("defs")
        .append("clipPath")
        .attr("id", "date-clip")
        .append("rect")
        .attr("x", xScale(chartStartDate))
        //   .attr("x", xScale(minDate))
        .attr("y", yScale(maxY))
        // .attr("y", yScale(hardMaxY))
        //   .attr("y", yScale(maxY - midMax))
        .attr("width", width)
        .attr("height", height);
      
  
      const line = d3
        .line()
        .x(function (v) {
          return xScale(v.date);
        })
        .y(function (v) {
          return yScale(v.point);
        })
        .curve(d3.curveBasis)
        

      const lines = svg
        .selectAll("lines")
        .data(data)
        .enter()
        .append("g")
        
      
      lines.append("path")
        .attr("class", function (d, i) {
          return `line line-${i}`;
        })
        .attr("d", function (d) {
          return line(d.values);
        })
        .attr("clip-path", "url(#date-clip");
      

      // for animation of line-drawing effect
      const pathLength = lines.selectAll("path").node().getTotalLength();
      
      lines.selectAll("path")
      .attr("stroke-dashoffset", pathLength)
      .attr("stroke-dasharray", pathLength)
      
      
      // add labels
      lines
      .append("text")
      .attr("class", function (d, i) {
        return `label label-${i}`;
      })
      .text(function (d) {
        return `⇽       ${d.term}`;
      })
      .attr("x", pathLength)
      .attr("transform", function (d, i) {
        return `translate(${d.labelX}, ${d.labelY})`;
      });

      // add hover lines
      const hoverLines = lines
            .append("path")
            .attr("class", "hover-line")
          
      
      // lines.attr("clip-path", "url(#date-clip)");
      // svg.attr("clip-path", "url(#date-clip)").style("fill", "lightgrey");

      
      
      // FUNCTION TO UPDATE CHART PER FRAME
      function updateChart(newStartDate, newEndDate) {
        const t = d3.transition()
          .ease(d3.easeCubicInOut)
            // .ease(d3.easeCubic)
            .delay(300)
            .duration(1000);
        

        svg.selectAll("*").interrupt();

        console.log("CHART IS UPDATING");

        chartStartDate = newStartDate;
        chartEndDate = newEndDate;
        
        updateMaxY(data, chartStartDate, chartEndDate);
        
        xScale.domain([chartStartDate, chartEndDate]);
        svg.select(".x-axis").transition(t).call(xAxis);

        yScale.domain([0, maxY]);

        addLabelCoords(data, chartIndexEnd, 12, xScale, yScale);

        lines
          .selectAll(".line")
          .transition(t)
          .attr("stroke-dashoffset", 0)
          .attr("d", function (d) {
            return line(d.values);
          });

        // add labels to each line
        lines
          .selectAll(".label")
          .transition(t)
          // .transition().duration(1500)
          // .text(function (d) {
          //   return `⇽       ${d.term}`;
          // })
          .attr("x", 5)
          .attr("transform", function (d, i) {
            return `translate(${d.labelX}, ${d.labelY})`;
          });

        lines
          .selectAll(".hover-line")
          .transition(t)
          .attr("d", function (d) {
            return line(d.values);
          });
          
      }

      
      
      // Add mousover interactive elements
      svg.selectAll(".hover-line, .label, .line")
      .on("mouseover", function (d, i, nodes) {
          
        // console.log("this", this)
        // console.log("d", d)
        // console.log("i", i)
        // console.log("nodes", nodes)

        // nodes = [line(0), label(0), hover-line(0), line(1), label(1), hover-line(1)...]
        const selected_i = Math.floor(i / 3);

        // increase opacity of both line and label
        const selected = d3
            .selectAll(`.line-${selected_i}, .label-${selected_i}`)
            .raise()
            .style("opacity", 1);

        selected.transition();

        // apply thicker stroke only to line
        d3.selectAll(`.line-${selected_i}`).style("stroke-width", 5);

      })
      .on("mouseout", function (d, i, nodes) {
        const selected_i = Math.floor(i / 3);

        const selected = d3
            .selectAll(`.line-${selected_i}, .label-${selected_i}`)
            .style("opacity", 0.4)
            .style("stroke-width", 1);

        selected.transition();
      });


      // Add scrolling interactive elements
      let scrollTop = 0;
      let newScrollTop = 0;

      d3.selectAll(".panel").attr("class", function(p, i) {
          return `panel panel-${i}`
      })
      
      
      
      let scrollDiv = document.getElementById("text-1");

      const frames = []; // stores the panels
      const boundRects = []; // stores the bounding client rectangles of each panel

      document.getElementsByClassName("panel").forEach((p, i) => {
        let frame = document.getElementsByClassName(`panel-${i}`)[0];
        frames.push(frame);
        boundRects.push(frame.getBoundingClientRect());
      })

      console.log("frames", frames)
      
      const updates = [null, 
        [minDate, juneDate],
        [minDate, vscoPeakDate],
        [minDate, janDate],
        [minDate, maxDate]
      ]
      
      const tracker = Array(5).fill(0)
      console.log("tracker", tracker)
      
      let HEIGHT = window.innerHeight;
      let WIDTH = window.innerWidth;
      let toFirst = 0;
      let toSecond = 0;
      
      

      scrollDiv.addEventListener('scroll', function(e) {
        frames.forEach((f, i) => {
          boundRects[i] = f.getBoundingClientRect();
        })


        // console.log("boundRects", boundRects)
        const flower = boundRects[0].top;
        const flower2 = boundRects[0].bottom;
        const flower3 = boundRects[0].height;

        console.log("flower", flower, flower2, flower3)
        // if(flower < 0) {
        //   updateChart(updates[1][0], updates[1][1])
        // }

        // if b[0].bottom < 0 

        boundRects.forEach((b, i) => {

          if(b.bottom < 0){
            updateChart(updates[i + 1][0], updates[i + 1][1]);
          }
        })
          // if(b.top > 0 && b.bottom < HEIGHT )
        //   if (b.bottom < 900 && b.bottom > 400 ) {
        //     updateChart(updates[i+1][0], updates[i+1][1])
        //   }

          // if (b.top > -220) {
          //   console.log("i", i)
          //   updateChart(updates[i + 1][0], updates[i + 1][1]);
          // }
        // })
      })
          // console.log(scrollDiv.nodes)
          // let prevFrameOneTop = frameOneTop;
          // frameZeroBCR = frameZero.getBoundingClientRect();
          // frameOneBCR = frameOne.getBoundingClientRect();
          // let frameOneTop = frameOne.getBoundingClientRect().top;
          // console.log("0", frameZeroBCR.bottom)
          // console.log("1", frameOneBCR.top)
          // console.log("trigger", toFirst)

          // console.log(b.bottom)

          // boundRects.forEach((b, i) => {
          //   console.log(b.bottom)
          //   if (b.bottom < 0) {
          //     updates[i]();
          //   }
          // })

          // if (boundRects[0].bottom < 0 && toFirst === 0) {
          //     updateChart(minDate, juneDate);
          //     toFirst = 1;
          // }

          // if (frameZeroBCR.bottom < 0 && toFirst === 0) {
          //     updateChart(minDate, juneDate);
          //     toFirst = 1;
          // }

          // if (frameOneBCR.bottom < 0 && toSecond === 0) {
   
          //     updateChart(minDate, vscoPeakDate);
              
          //     toSecond = 1;
          

          // }

          // if(frameOneTop < 0 && frameOneBottom > 0 ) {
          //     updateChart(minDate, juneDate)
          // }
      


         
      });
  }

  // accessor / setter functions for width and height
  draw.width = function (value) {
    if (!arguments.length) {
      return width;
    }

    width = value;
    return draw;
  };

  draw.height = function (value) {
    if (!arguments.length) {
      return height;
    }

    height = value;
    return draw;
  };

  // return draw function
  return draw;
}
