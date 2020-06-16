// creating reusable chart
export function chartTemplate() {
  // set the dimensions and margins of the svg
  let width = 600;
  let height = 800;
  let adj = 30;

  function draw(selection) {
    selection.each(function (data) {
      console.log("data", data);

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

      const line = d3
        .line()
        .x(function (d) {
          return xScale(d.date);
        })
        .y(function (d) {
          return yScale(d.point);
        });

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
      const lines = svg.selectAll("lines").data(data).enter().append("g");

      lines
        .append("path")
        .attr("class", function (d, i) {
          return `line-${i}`;
        })
        .attr("d", function (d) {
          return line(d.values);
        });

      // add labels to each line
      lines
        .append("text")
        .attr("class", function (d, i) {
          return `label-${i}`;
        })
        .text(function (d) {
          return `⇽       ${d.term}`;
        })
        .attr("x", 5)
        .attr("transform", function (d) {
          const lastIndex = d.values.length - 1; // the index of the last data point
          const labelX = xScale(d.values[lastIndex].date) + 1;
          const labelY = yScale(d.values[lastIndex].point) + 1;
          return `translate(${labelX}, ${labelY})`;
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
