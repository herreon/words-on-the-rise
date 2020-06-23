import { addLabelCoords } from "./addlabelCoords.js";
import * as getDates from "./getDates.js";

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

            // max date for the first frame
            const juneDate = new Date(2019, 5, 30);

            // date of peak interest for vsco
            const vscoPeakDate = getDates.getTermPeakDate(data, "vsco");
            // console.log("vscopeakdate", vscoPeakDate)

            // date of 1st week of 2020
            const janDate = new Date(2020, 0, 8);
            // console.log("vscopeakdate", vscoPeakDate)

            chartStartDate = minDate;
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
                .attr("viewBox", `-${adj * 2} -${adj * 3} ${width + adj * 10} ${height + adj * 2}`
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

            // append clip path
            const clip = svg
                .append("defs")
                .append("clipPath")
                .attr("id", "date-clip")
                .append("rect")
                .attr("x", xScale(chartStartDate))
                //   .attr("x", xScale(minDate))
                .attr("y", yScale(maxY))
                //   .attr("y", yScale(maxY - midMax))
                .attr("width", width)
                .attr("height", height);
            
            svg.attr("clip-path", "url(#date-clip)").style("fill", "lightgrey");

            // draw lines
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
                });

            const hoverLines = lines
                .append("path")
                .attr("class", "hover-line")
                // .attr("d", function(d) { return line(d.splined)})
                .attr("d", function (d) {
                return line(d.values);
                });

            const t = d3.transition().ease(d3.easeCubic).delay(1000).duration(5000);

            // FUNCTION TO UPDATE CHART
            function updateChart(newStartDate, newEndDate) {
                svg.selectAll("*").interrupt();

                console.log("CHART IS UPDATING");
            
                chartStartDate = newStartDate;
                chartEndDate = newEndDate;

                xScale.domain([chartStartDate, chartEndDate]);

                // console.log("x axis", svg.select(".x-axis"))
                // console.log("x axis", xAxis)

                svg.select(".x-axis").transition(t).call(xAxis);
                // svg.select(".x-axis").transition().delay(1000).call(xAxis);

                updateMaxY(data, chartStartDate, chartEndDate);

                yScale.domain([0, maxY]);

                lines.selectAll(".line")
                    .transition(t)
                    .attr("d", function (d) {
                        return line(d.values);
                    });

                lines
                    .selectAll(".hover-line")
                    //   .transition().delay(1000)
                    .transition(t)
                    .attr("d", function (d) {
                        return line(d.values);
                    });

                addLabelCoords(data, chartIndexEnd, 12, xScale, yScale);

                lines
                    .selectAll(".label")
                    // .transition().delay(1000)
                    .transition(t)
                    .attr("x", 5)
                    .attr("transform", function (d, i) {
                        return `translate(${d.labelX}, ${d.labelY})`;
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

            let thing = d3.select("#graph-1");
            // let thing = d3.select("#text-1");
            // let thing = document.getElementById("graph-1");

            // console.log("thing", thing)
            // console.log("inner", window.innerHeight, window.innerWidth)

            let HEIGHT = window.innerHeight;
            let WIDTH = window.innerWidth;

            // let crucialText = d3.selectAll("#panel").filter(function(d, i) { return i === 0})
            // let crucialText = document.getElementsByClassName("panel").getElementsByTagName("p")[0]
            // console.log("crucial text", crucialText)
            // console.log("crucial top", crucialTop)

            // thing.addEventListener('scroll', function(e){
            //     let crucialTop = crucialText.getBoundingClientRect();
            //     console.log('y', crucialTop)
            //     if(crucialTop.y - WIDTH < 0) {

            //         updateChart(minDate, maxDate)
            //     }
            // })

            // let forward = updateChart;
            // let backward;

            thing.on("scroll.scroller", function () {
                console.log("scroooooling");
                newScrollTop = thing.node().scrollTop;

                // let action = updateChart;
                console.log("newScrollTop", newScrollTop);
                if (scrollTop <= 60 && newScrollTop > 60) {
                updateChart(minDate, maxDate);
                // backward = updateChart;
                // forward(minDate, endDate);
                // forward = function() {};
                }

                if (scrollTop >= 59 && newScrollTop < 59) {
                updateChart(minDate, midDate);
                // forward = updateChart;
                // backward(minDate, midDate);
                // backward = function () {};
                }
                scrollTop = newScrollTop;
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
