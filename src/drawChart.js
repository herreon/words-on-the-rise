import { addLabelCoords } from "./labelCoords.js"

// creating reusable chart
export function chartTemplate() {
  // set the dimensions and margins of the svg
  let width = 800;
  let height = 800;
  let adj = 30;


  function draw(selection) {
    selection.each(function (data) {

      // SCALES: x-axis
      // define min and max values for domain on x-axis (time)
      const startDate = d3.min(data, function (d) {
        return d3.min(d.values, function (v) {
          return v.date;
        });
      });

      
      const endDate = d3.max(data, function (d) {
          return d3.max(d.values, function (v) {
              return v.date;
            });
        });
        
        // console.log("startDate", startDate)
        // console.log("endDate", endDate)

      // set domain and range of x-axis
      const xScale = d3
        .scaleTime()
        .domain([startDate, endDate])
        .range([0, width]);


      // SCALES: y-axis
      // define max value for domain on y-axis (points)
      let maxY = d3.max(data, function (s) {
        return d3.max(s.values, function (v) {
          return v.point;
        });
      });

      // set domain of y-axis
      const yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]);
    

    // add label coordinates to dataset's termSlices
      addLabelCoords(data, 12, xScale, yScale);
      

    


      // AXES
      const xAxis = d3
        .axisBottom(xScale)
        // .scale(xScale)
    xAxis.ticks(d3.timeMonth.every(12))
        .tickFormat(d3.timeFormat("%b %Y"))
        .tickSizeOuter(0);

      const yAxis = d3.axisLeft()
                      .scale(yScale)
                      .tickValues([])
                      .tickSizeOuter(0)

      // AXES: gridlines
      const yAxisGrid = d3
        .axisLeft()
        .scale(yScale)
        .tickSize(-width)
        .tickFormat("")
        .tickValues([maxY/ 3, 2 * maxY / 3, maxY])
        .tickSizeOuter(0);

      // append svg
      const svg = d3
        .select(this)
        .append("svg")
        .attr("class", "chart")
        .attr("width", width)
        .attr("height", height)
        .attr(
          "viewBox",
          `-${adj * 2} -${adj * 3} ${width + adj * 10} ${height + adj * 2}`
        )
        .attr("preserveAspectRatio", "xMinYMin meet")
        
        // date up to which clip path is appended
        const midDate = new Date(2019, 5, 30);
        const midMax = d3.max(data, function (s) {
            return d3.max(s.values.filter(val => val.date <= midDate), function (v) {
                return v.point;
            });
            
        });
        console.log("midDate", midDate);
        console.log("midMax", midMax);
        
        // append clip path
        const clip = svg.append("defs")
          .append("clipPath")
          .attr("id", "date-clip")
          .append("rect")
          .attr("x", xScale(startDate))
        //   .attr("x", xScale(startDate))
          .attr("y", yScale(maxY))
        //   .attr("y", yScale(maxY - midMax))
          .attr("width", width)
          .attr("height", height);

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


      // draw lines
      const line = d3
        .line()

        .x(function (v) {
          return xScale(v.date);
          // return d[0];
        })
        .y(function (v) {
          return yScale(v.point);
          // return d[1];
        })
        // .curve(d3 .curveCatmullRom.alpha(0.5));
        .curve(d3.curveBasis);

      const lines = svg.selectAll("lines").data(data).enter().append("g");

      lines
      .append("path")
      
        .attr("class", function (d, i) {
          return `line line-${i}`;
        })
        .attr("d", function (d) {
          return line(d.values);
          //   return line(d.splined);
        })
        .attr("clip-path", "url(#date-clip)");

      // add labels to each line
      lines
        .append("text")
        .attr("class", function (d, i) {
          return `label label-${i}`;
        })
        .text(function (d) {
          return `⇽       ${d.term}`;
        })
        .attr("x", 5)
        .attr("transform", function (d, i) {
            return `translate(${d.labelX}, ${d.labelY})`;
            // const lastIndex = d.values.length - 1;
            // const labelX = xScale(d.values[lastIndex].date);
            // const labelY = yScale(d.values[lastIndex].point);
        //   return `translate(${labelX}, ${labelY})`;
        })

        const hoverLines = lines.append("path")
                                .attr("class", "hover-line")
                                // .attr("d", function(d) { return line(d.splined)})
                                .attr("d", function(d) { return line(d.values)})


    // const t = d3.transition()
    // .delay(1)
    // .duration()

    
    
    function updateChart() {
        // console.log("updateChart",d3.selection.event)
        const newStartDate = new Date(2017, 11, 1);
        const newEndDate  = new Date(2019, 6, 31);
        // const extent = [newStartDate, newEndDate];
        // console.log("extent", extent)

        // const test1 = xScale.invert(extent[0])
        // const test2 = xScale.invert(extent[1])
        // console.log("updateChart", test1, test2)
        xScale.domain([newStartDate, newEndDate])

        let newStartIndex;
        let newEndIndex;

        // const newDataPoints = 
        for (let i = 0; i < data[0].values.length; i++) {
            if (data[0].values[i].date >= newStartDate) {
                    newStartIndex = i;
                    break;
                }
        }

        for (let i = 0; i < data[0].values.length; i++) {
            
            if (data[0].values[i].date > newEndDate) {
                newEndIndex = i;
                break
            }
        }
       

        // filter((val, i) => {
            // return i >= 1
            // return val.date >= newStartDate && val.date <= newEndDate; 
        // })
        
        // const newStartIndex = newDataPoints[0]

        // const newEndIndex = newDataPoints[newDataPoints - 1]


        console.log("newi" , newStartIndex, newEndIndex)

        // define max value for domain on y-axis (points)
        maxY = d3.max(data, function (s) {
            // console.log("s", s)
            s = s.values.slice(newStartIndex, newEndIndex)
            // console.log("s", s)
            // console.log("s.length", s.length)
            return d3.max(s, function (v) {
                return v.point;
            });
        });

      // set domain of y-axis
    //   const yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]);
        // yScale.domain([newStartDate, newEndDate])
        // update x axis
        svg.select(".x-axis").call(xAxis).transition().delay(1000);
        // svg.select(".y-axis").call(yAxis).transition().delay(1000);
        
        // console.log("xScale", xScale(newStartDate))
        console.log("yScale", yScale(maxY))
        yScale.domain([0, maxY])
        // addSplinedValues()

        // console.log("lines", lines)
        lines.selectAll(".line")
        
          .transition().delay(1000)
          .attr("d", function (d) {
            //   console.log("line transition")
                return line(d.values);
            });


    }
    
    // updateChart() 

    svg.attr("clip-path", "url(#date-clip)").style('fill', "lightgrey");
    
    svg
      .selectAll(".hover-line, .label, .line")
      .on("mouseover", function (d, i, nodes) {
        //   console.log("mousin", i)
        // console.log("this", this)  
        // console.log("d", d)
        // console.log("i", i)
        // console.log("nodes", nodes)
        
        // nodes = [line(0), label(0), hover-line(0), line(1), label(1), hover-line(1)...]
        const selected_i = Math.floor(i/3)
        
        // increase opacity of both line and label
        const selected = d3
          .selectAll(`.line-${selected_i}, .label-${selected_i}`)
          .raise()
          .style("opacity", 1)
        
        selected.transition()

        // apply thicker stroke only to line
        d3.selectAll(`.line-${selected_i}`).style("stroke-width", 5);
        
        // console.log("transition",t)
        
    })
    .on("mouseout", function (d, i, nodes) {

        // console.log("mousout", i)
    
        const selected_i = Math.floor(i / 3);

        const selected = d3
          .selectAll(`.line-${selected_i}, .label-${selected_i}`)
          .style("opacity", 0.4)
          .style("stroke-width", 1);

        selected.transition();
    });
    
    
    
    
    
    

    

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
