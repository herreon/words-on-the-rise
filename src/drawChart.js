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
    

    // add label coordinates to dataset's termSlices
      addLabelCoords(data, 12, xScale, yScale);
      

    // VALUES: add splined values
      data.forEach(function (termSlice, i) {
        const dates = termSlice.values.map(function (v) {
            return xScale(v.date); // get array of dates mapped onto the browser
        });

        const points = termSlice.values.map(function (v) {
            return yScale(v.point);
        });

    
        const splineDate = d3.interpolateBasis(dates);
        
        const splinePoint = d3.interpolateBasis(points);

        //   console.log("quantDate", d3.quantize(splineDate, 113*2))
        //   console.log("quantPoint", d3.quantize(splinePoint, 113));
        //   console.log("quantPointmax", d3.min(d3.quantize(splinePoint, 110)));

        const originalNumOfPoints = termSlice.values.length;
        const degree = 21 * originalNumOfPoints;

        termSlice.splined = d3.zip(
            d3.quantize(splineDate, degree),
            d3.quantize(splinePoint, degree)
        );

    });

      // AXES
      const xAxis = d3
        .axisBottom()
        .scale(xScale)
        .ticks(d3.timeMonth.every(12))
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
      const line = d3.line()
        .x(function (d) {
        //   return xScale(d.date);
            return d[0];
        })
        .y(function (d) {
            // return yScale(d.point);
            return d[1];
        });

      const lines = svg.selectAll("lines").data(data).enter().append("g");

      lines
        .append("path")
        .attr("class", function (d, i) {
          return `line line-${i}`;
        })
        .attr("d", function (d) {
            // return line(d.values);
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
            return `translate(${d.labelX}, ${d.labelY})`;
            // const lastIndex = d.values.length - 1;
            // const labelX = xScale(d.values[lastIndex].date);
            // const labelY = yScale(d.values[lastIndex].point);
        //   return `translate(${labelX}, ${labelY})`;
        })

        const hoverLines = lines.append("path")
                                .attr("class", "hover-line")
                                .attr("d", function(d) { return line(d.splined)})


        // console.log("selectAll", d3.selectAll(".label"))
    // const t = d3.transition()
                // .delay("100")
                // .duration()
// console.log("come on", svg.selectAll(".hover-line").merge(svg.selectAll(".line")))
    svg
      .selectAll(".hover-line")
      .merge(svg.selectAll(".label"))
      .on("mouseover", function (d, i) {
          console.log(d)
        const selected = d3.selectAll(`.line-${i}, .label-${i}`).raise();
        selected.transition().delay("0").duration("10").style("opacity", 1);
      })
      .on("mouseout", function (d, i) {
        const selected = d3.selectAll(`.line-${i}, .label-${i}`);
        selected.transition().style("opacity", 0.2);
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
