import { addLabelCoords } from "./labelCoords.js"

// creating reusable chart
export function chartTemplate() {
  // set the dimensions and margins of the svg
  let width = 1200*0.6;
  let height = 800*0.6;
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

        // renders chart 
        function render(chartStartDate, chartEndDate) {

        }

        
        // const midDate = new Date((startDate.getTime() + endDate.getTime()) / 2);
        const midDate = new Date(2019, 5, 30)

        let chartStartDate = startDate;
        let chartEndDate = midDate;
        let chartIndexStart;
        let chartIndexEnd;
        let currentMaxY;

        
        console.log("chartStartDate", chartStartDate)
        console.log("chartMidDate", chartEndDate)
    

        
        // console.log("chartIndexEnd date", data[0].values[chartIndexEnd].date);
        // console.log("chartIndexStart, chartIndexEnd", chartIndexStart, chartIndexEnd);

        function updateCurrentMaxY () {

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

            // console.log(data[0].values[chartIndexEnd])
            console.log("chartindexend", chartIndexEnd)

            currentMaxY =  d3.max(data, function (termSlice) {
              let valueArray = termSlice.values.slice(
                chartIndexStart,
                chartIndexEnd
              );

              return d3.max(valueArray, function (v) {
                return v.point;
              });
            });

            console.log("currentMaxY", currentMaxY)

        }

        updateCurrentMaxY();

        // define max value for domain on y-axis (points)
        // currentMaxY = d3.max(data, function (termSlice) {

        //   let valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);
   
        //   return d3.max(valueArray, function (v) {
        //     return v.point;
        //   });
        // });
        
        // set domain and range of x-axis
        const xScale = d3
            .scaleTime()
            .domain([chartStartDate, chartEndDate])
            .range([0, width]);
            
        // set domain of y-axis
        const yScale = d3.scaleLinear().domain([0, currentMaxY]).rangeRound([height, 0]);
        
        // add label coordinates to dataset's termSlices
        addLabelCoords(data, chartIndexEnd, 12, xScale, yScale);
        
        // AXES
        const xAxis = d3.axisBottom(xScale)
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
            .tickValues([currentMaxY/ 3, 2 * currentMaxY / 3, currentMaxY])
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
        const clip = svg.append("defs")
            .append("clipPath")
            .attr("id", "date-clip")
            .append("rect")
            .attr("x", xScale(chartStartDate))
            //   .attr("x", xScale(startDate))
            .attr("y", yScale(currentMaxY))
            //   .attr("y", yScale(maxY - midMax))
            .attr("width", width)
            .attr("height", height);
        
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

        const hoverLines = lines
                            .append("path")
                            .attr("class", "hover-line")
                            // .attr("d", function(d) { return line(d.splined)})
                            .attr("d", function(d) { return line(d.values)})


        const t = d3.transition()
        .ease(d3.easeCubic)
        .delay(1000)
        .duration(5000)

    
        function updateChart(newStartDate, newEndDate) {

            svg.selectAll("*").interrupt();


            console.log("CHART IS UPDATING")
            // console.log("updateChart",d3.selection.event)
            
            // const extent = [newStartDate, newEndDate];
            // console.log("extent", extent)

            // const test1 = xScale.invert(extent[0])
            // const test2 = xScale.invert(extent[1])
            // console.log("updateChart", test1, test2)
            chartStartDate = newStartDate;
            chartEndDate = newEndDate;

            xScale.domain([chartStartDate, chartEndDate])

            // console.log("x axis", svg.select(".x-axis"))
            // console.log("x axis", xAxis)

            svg.select(".x-axis").transition(t).call(xAxis);
            // svg.select(".x-axis").transition().delay(1000).call(xAxis);
            
            updateCurrentMaxY();
            
      
            yScale.domain([0, currentMaxY]);
            
            lines.selectAll(".line")
            // .transition().delay(1000)
            .transition(t)
            .attr("d", function (d) {
                return line(d.values);
            })

            lines
              .selectAll(".hover-line")
            //   .transition().delay(1000)
                .transition(t)
              .attr("d", function (d) {
                return line(d.values);
              });


            addLabelCoords(data, chartIndexEnd, 12, xScale, yScale);

            lines.selectAll(".label")
            // .transition().delay(1000)
                .transition(t)
              .attr("x", 5)
              .attr("transform", function (d, i) {
                return `translate(${d.labelX}, ${d.labelY})`;
              })
            

            // console.log("chartindexend", chartIndexEnd)
            
            // .transition().delay(1000)


        }
    
    // updateChart(startDate, endDate) 

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
    
    
    let scrollTop = 0;
    let newScrollTop = 0;

    let thing = d3.select("#graph-1");
    // let thing = d3.select("#text-1");
    // let thing = document.getElementById("graph-1");

    // console.log("thing", thing)
    // console.log("inner", window.innerHeight, window.innerWidth)

    let HEIGHT = window.innerHeight
    let WIDTH = window.innerWidth

    // let crucialText = d3.selectAll("#panel").filter(function(d, i) { return i === 0})
    let crucialText = document.getElementById("panel").getElementsByTagName("p")[0]
    // console.log("crucial text", crucialText)
    // console.log("crucial top", crucialTop)
    
    // thing.addEventListener('scroll', function(e){
    //     let crucialTop = crucialText.getBoundingClientRect();
    //     console.log('y', crucialTop)
    //     if(crucialTop.y - WIDTH < 0) {

    //         updateChart(startDate, endDate)
    //     }
    // })


    // let forward = updateChart; 
    // let backward;

    thing.on("scroll.scroller", function() {
        console.log("scroooooling")
        newScrollTop = thing.node().scrollTop
        
        // let action = updateChart;
        console.log("newScrollTop", newScrollTop)
        if (scrollTop <= 60 &&newScrollTop > 60) {
            updateChart(startDate, endDate);
            // backward = updateChart;
            // forward(startDate, endDate);
            // forward = function() {};
        }
        
        
        if ( scrollTop >= 59 && newScrollTop < 59) {
            updateChart(startDate, midDate);
            // forward = updateChart;
            // backward(startDate, midDate);
            // backward = function () {};
        }
        scrollTop = newScrollTop
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
