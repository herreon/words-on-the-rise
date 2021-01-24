import "core-js/stable";
import "regenerator-runtime/runtime";
import { addLabelCoords } from "./addlabelCoords.js";
import * as getDates from "./getDates.js";
// import { renderDef, eraseDef } from "./termDefs.js"


// creating reusable chart
export function chartA() {
  // set the dimensions and margins of the svg
  let width = 1200 * 0.7;
  let height = 800 * 0.8;
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

      // date of peak interest for vsco (max date for second frame)
      const vscoPeakDate = getDates.getTermPeakDate(data, "vsco");
      // console.log("vscopeakdate", vscoPeakDate)

      // date of 1st week of 2020 (max date for third frame)
      const janDate = new Date(2020, 0, 8);

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
      addLabelCoords(data, chartIndexEnd, 10, xScale, yScale);

      // AXES
      const xAxis = d3.axisBottom(xScale);
      // .scale(xScale)

      xAxis
          // .ticks(d3.timeMonth.every(12))
          .ticks(4)
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
          .attr("viewBox", `-${adj * 0} -${adj * 2} ${width + adj*1} ${height + adj*7}`)
          // .attr("viewBox", `-${adj * 2} -${adj * 4} ${width + adj * 4} ${height + adj * 9}`)
          .attr("preserveAspectRatio", "xMidYMid meet");

      
      // add chart title
      svg.append("text").attr("class", "chart-title")
      .text("Search Interest 2018-2019")
      .attr("y", adj)

      // add chart subtitle
      svg.append("text").attr("class", "chart-subtitle")
      .text("Moving 6-Week Average for Rising New Words")
      .attr("y", adj/3*5 + 3)


      // add footnotes to chart
      svg.append("text")
      .attr("class", "footnote footnote-0")
      .text(`Don't know what the word means? Click on the word to see Google search results in a new tab.`)
      .attr("y", `${height + adj*3}`)

      svg.append("text")
      .attr("class", "footnote footnote-1")
      .text(`*A new word is a word which had a lower Search Interest prior to 2019, which then grew over the year.`)
      .attr("y", `${height + adj*4}`)
      
      svg.append("text")
      .attr("class", "footnote footnote-2")
      .text(`†For example, searches for "meaning of vsco", or "what does ok boomer mean".`)
      .attr("y", `${height + adj/3*14}` )
 

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
        .attr("y", yScale(maxY))
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
        .curve(d3.curveBasis);

      const lines = svg.selectAll("lines").data(data).enter().append("g");
      
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

    
      // svg.attr("clip-path", "url(#date-clip)")
      // .style("fill", "lightgrey");

      
      // FUNCTION TO UPDATE CHART PER FRAME
      function updateChart(newStartDate, newEndDate) {
        const t = d3
          .transition()
          .ease(d3.easeCubicInOut)
          // .ease(d3.easeCubic)
          .delay(300)
          .duration(1000);
        
        svg.selectAll("*").interrupt();

        // console.log("CHART IS UPDATING");

        chartStartDate = newStartDate;
        chartEndDate = newEndDate;
        
        updateMaxY(data, chartStartDate, chartEndDate);
        
        xScale.domain([chartStartDate, chartEndDate]);
        svg.select(".x-axis").transition(t).call(xAxis);
        
        yScale.domain([0, maxY]);
        addLabelCoords(data, chartIndexEnd, 14, xScale, yScale);


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

      function removeChart () {
      
        svg.selectAll("*").interrupt();

        lines
          .selectAll(".line")
          .transition()
          .attr("d", function (d) {
            return line(d.values);
          })
          .attr("stroke-dashoffset", pathLength)
          .attr("stroke-dasharray", pathLength);

        lines.selectAll(".label").transition().attr("x", pathLength);
      }

      
      
      // Add mousover interactive elements
      svg.selectAll(".hover-line, .label, .line")
      .on("mouseover", function (termSlice, i, nodes) {
          
        // console.log("this", this)
        // console.log("termSlice", termSlice)
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

        // render quick definition 
        // renderDef(termSlice, i)

      })

      .on("mouseout", function (d, i, nodes) {
        const selected_i = Math.floor(i / 3);

        const selected = d3
            .selectAll(`.line-${selected_i}, .label-${selected_i}`)
            .style("opacity", 0.4)
            .style("stroke-width", 1);

        selected.transition();

        // remove quick definition
        // eraseDef()
        
        
      })

      .on("click", function(d) {
        window.open(`http://www.google.com/search?q=what+does+${d.term}+mean`)
      })


      d3.selectAll(".panel")
      .attr("class", function(p, i) {
          return `panel panel-${i}`
      })
      
      
      const scrollDiv = document.getElementById("text-1");
      const svgDiv = document.getElementsByClassName("x-axis")[0];
      // console.log("svgDiv", svgDiv)
      const HEIGHT = window.innerHeight;
      // console.log("HEIGHT", HEIGHT)
      
      const frames = []; // stores the panels
      const boundRects = []; // stores the bounding client rectangles of each panel
      

      let firstUpdate = 0; // keeps track of whether the first frame was rendered

      document.getElementsByClassName("panel").forEach((p, i) => {
        let frame = p;
        frames.push(frame);
        boundRects.push(frame.getBoundingClientRect());
      })

      const updates = [ 
        [minDate, juneDate],
        [minDate, vscoPeakDate],
        [minDate, janDate],
        [minDate, maxDate]
      ]

      // console.log("frames", frames)

      // when user scrolls down to chart from the title page, execute the first frame animation
      document.addEventListener('scroll', function(e) {
        // console.log("svg.bottom", svgDiv.getBoundingClientRect().bottom)
        // console.log("height", HEIGHT)

        if (svgDiv.getBoundingClientRect().bottom < HEIGHT && firstUpdate < 1) {
          // console.log("rendered first chart frame");

          updateChart(updates[0][0], updates[0][1]);
          firstUpdate += 1;
        }
      })
      
      let currentPanels;
      let currentPanel;
      let currentPanelIndex; // index of the current panel on screen
      let storePreviousPanel;
      
      // subsequent frame animations depend on scrolling
      scrollDiv.addEventListener('scroll', function(e) {

        frames.forEach((f, i) => {
          boundRects[i] = f.getBoundingClientRect();
        });

        // console.log("boundRects", boundRects)
        
        currentPanels = boundRects.filter(function(b) {
          return ( (b.top >= 0 && b.top <= HEIGHT*0.5) || (b.bottom < HEIGHT && b.bottom > 0) )
          // return (b.bottom < HEIGHT && b.bottom > 0)
        })
        
        // console.log("currentPanels", currentPanels)

        currentPanel = currentPanels[currentPanels.length - 1];
        currentPanelIndex = boundRects.indexOf(currentPanel);
       
        if (currentPanels.length > 1) {
          storePreviousPanel = currentPanels[0]
        } 
        
        // if panel changed,
        if ((storePreviousPanel) && (storePreviousPanel !== currentPanel)) {

          // since panel changed, update chart accordingly
          updateChart(updates[currentPanelIndex][0], updates[currentPanelIndex][1]);
        } 

        storePreviousPanel = currentPanel;

        // console.log("storePreviousPanel", storePreviousPanel)
        // console.log("currentPanel", currentPanel)
          
      })
          
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
