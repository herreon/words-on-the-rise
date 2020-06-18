// creating reusable chart
export function chartTemplate() {
  // set the dimensions and margins of the svg
  let width = 800;
  let height = 800;
  let adj = 30;


  function draw(selection) {
    selection.each(function (data) {
      console.log("data_draw", data);
      
    
      // SCALES: x-axis
      // define min and max values for domain on x-axis (time)
      const startDate = d3.min(data, function (d) {
        return d3.min(d.values, function (v) {
          return v.date;
        });
      });

      console.log("startDate", startDate)

      const endDate = d3.max(data, function (d) {
        return d3.max(d.values, function (v) {
          return v.date;
        });
      });

      // set domain and range of x-axis
      const xScale = d3
        .scaleTime()
        .domain([startDate, endDate])
        .range([0, width]);

      // SCALES: y-axis
      // define max value for domain on y-axis (points)
      const maxY = d3.max(data, function (s) {
        return d3.max(s.values, function (v) {
          return v.point;
        });
      });

      // set domain of y-axis
      const yScale = d3.scaleLinear().domain([0, maxY]).rangeRound([height, 0]);

      // AXES
      const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(d3.timeMonth.every(12))
        .tickFormat(d3.timeFormat("%b %Y"))
        .tickSizeOuter(0);

      // const yAxis = d3.axisLeft()
      //                 .scale(yScale)
      //                 .tickValues([])
      //                 .tickSizeOuter(0)

      // AXES: gridlines
      const yAxisGrid = d3
        .axisLeft()
        .scale(yScale)
        .tickSize(-width)
        .tickFormat("")
        .tickValues([100 / 3, 200 / 3, 100])
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
          `-${adj} -${adj} ${width + adj * 10} ${height + adj * 2}`
        )
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

      // draw lines

      // function to separate out labels that overlap
      function addLabelCoords (dataset) {
          let yLabelValues = [];
          let yLabelValuesOriginal = [];
          let space = 15;

          data.forEach(function (s) {
              let lastIndex = s.values.length - 1;
              s.labelX = xScale(s.values[lastIndex].date);
              
              s.labelY = yScale(s.values[lastIndex].point);
              yLabelValues.push(s.labelY);
              yLabelValuesOriginal.push(s.labelY);
            });

            // console.log("ylabelvalues", yLabelValues)
            
            yLabelValues.forEach((v1,i) => {
                yLabelValues.forEach((v2, j) => {
                    let count = 0;
                    let yDiff = Math.abs(v2 - v1);
                    let movingY = (yLabelValuesOriginal[j] >= yLabelValuesOriginal[i]) ? (j) : (i)
                    if (i !== j && yDiff < 3) {
                        // console.log(i, j, yLabelValues[i], yLabelValues[j]);
                        count += 1;
                        yLabelValues[movingY] = v2 + space
                        // console.log("after edit", i, j, yLabelValues[i], yLabelValues[j]);
                    }
                })
            })
            
            data.forEach(function(s, i) {
                s.labelY = yLabelValues[i];
            })
            // console.log("ylabelvalues", yLabelValues)
        }

        // call function
        addLabelCoords(data)

        data.forEach(function(d, i) {
            // console.log("d", d)
            // console.log("d.values", d.values)
            const dates = d.values.map(function(v) {
                  return xScale(v.date)
              })

            const points = d.values.map(function(v) {
                  return v.point
              })

            //   console.log("dates", d.term, dates)
            //   console.log("points", d.term, points   )
              
              const splineDate = d3.interpolateBasis(dates)
            
            const splinePoint = d3.interpolateBasis(points)
            // console.log("quantDate", d3.quantize(splineDate, 113))
            // console.log("quantPoint", d3.quantize(splinePoint, 113));
              const originalNumOfPoints = d.values.length;
            const degree = 10 * originalNumOfPoints;

            d.splined = d3.zip(d3.quantize(splineDate, degree), d3.quantize(splinePoint, degree));

            // d.values[i].point = d3.quantize(spline, 113)[i]
        })

        console.log("newdata", data)
        
        // const spline = d3.interpolateBasis([0, 0.2, 1])

        // console.log("quant", d3.quantize(spline, 6))
        
        // console.log('spline', spline)

        const line = d3
        .line()
        .x(function (d) {
        //   return xScale(d.date);
          return d[0];
        })
        .y(function (d) {
          return yScale(d[1]);
        });

      const lines = svg.selectAll("lines").data(data).enter().append("g");

      lines
        .append("path")
        .attr("class", function (d, i) {
          return `line-${i}`;
        })
        .attr("d", function (d) {
          return line(d.splined);
        });

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
            const lastIndex = d.values.length - 1;
            const labelX = xScale(d.values[lastIndex].date);
            const labelY = yScale(d.values[lastIndex].point);


          return `translate(${labelX}, ${labelY})`;
        //   return `translate(${d.labelX}, ${d.labelY})`;
        })


    console.log(d3.selectAll(".label"))
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
