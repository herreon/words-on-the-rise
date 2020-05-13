export default function test_function () {

    // document.addEventListener("DOMContentLoaded", function () {
        console.log("example.js content has loaded");

        const width = 960;
        const height = 500;
        const margin = 5;
        const padding = 5;
        const adj = 30;

        // we are appending SVG first - edited adj
        const svg = d3.select("#container").append("svg")
            .attr("preserveAspectRatio", "xMinYMin meet")
            .attr("viewBox", (-1 * adj) + " " + (-1 * adj) + " " + (width + 3 * adj) + " " + (height + 3 * adj))
            .style("padding", padding)
            .style("margin", margin)
            .classed("svg-content", true);

        //-----------------------------DATA------------------------------//

        const timeConv = d3.timeParse("%d-%b-%Y");
        const dataset = d3.csv("./dist/assets/test.csv");

        dataset.then(function (data) {
            console.log("example_data", data)
            const slices = data.columns.slice(1).map(function (id) {
                return {
                    id: id,
                    values: data.map(function (d) {
                        return {
                            date: timeConv(d.date),
                            measurement: +d[id]
                        };
                    })
                };
            });


            //    console.log("Column headers", data.columns);
            //  console.log("Column headers without date", data.columns.slice(1));
            //    // returns the sliced dataset
            console.log("example_slices", slices);
            //    // returns the first slice
            //    console.log("First slice",slices[0]);
            //    // returns the array in the first slice
            //    console.log("A array",slices[0].values);
            //    // returns the date of the first row in the first slice
            //    console.log("Date element",slices[0].values[0].date);
            //    // returns the array's length
            //    console.log("Array length",(slices[0].values).length);


            //----------------------------SCALES-----------------------------//

            // stretch data values from 0 to the svg's width
            const xScale = d3.scaleTime().range([0, width]);
            const yScale = d3.scaleLinear().rangeRound([height, 0]);

            xScale.domain(
                d3.extent(data, function (d) {
                    return timeConv(d.date);
                })
            );

            yScale.domain([0,
                d3.max(slices, function (c) {
                    return d3.max(c.values, function (d) {
                        return d.measurement + 4;
                    });
                })
            ]);

            // returns undefined:
            // console.log("example_xScale", xScale());


            //-----------------------------AXES------------------------------//

            const yaxis = d3.axisLeft().ticks(slices[0].values.length).scale(yScale);

            const xaxis = d3
                .axisBottom()
                .ticks(d3.timeDay.every(1))
                .tickFormat(d3.timeFormat("%b %d"))
                .scale(xScale);

            //----------------------------LINES------------------------------//

            const line = d3.line()
                .x(function (d) { return xScale(d.date); })
                .y(function (d) { return yScale(d.measurement); });

            let id = 0;
            const ids = function () {
                return "line-" + id++;
            }


            //-------------------------2. DRAWING----------------------------//

            //-----------------------------AXES------------------------------//


            svg
                .append("g")
                .attr("class", "axis")
                .attr("transform", "translate(0," + height + ")")
                .call(xaxis);

            svg
                .append("g")
                .attr("class", "axis")
                .call(yaxis)
                .append("text")
                .attr("transform", "rotate(-90)")
                .attr("dy", "0.75em")
                .attr("y", 6)
                .style("text-anchor", "end")
                .text("Frequency");

            //----------------------------LINES------------------------------//

            const lines = svg.selectAll("lines")
                .data(slices)
                .enter()
                .append("g");

            lines.append("path")
                .attr("class", ids)
                .attr("d", function (d) { return line(d.values); });

            lines.append("text")
                .attr("class", "serie_label")
                // .datum(function (d) {
                //     return {
                //         ide: d.id,
                //         valuee: d.values[d.values.length - 1]
                //     };
                // })
                .attr("transform", function (d) {
                    return "translate(" + (xScale(d.values[d.values.length - 1].date) + 10)
                        + "," + (yScale(d.values[d.values.length - 1].measurement) + 5) + ")";
                })
                .attr("x", 5)
                .text(function (d) { return ("Serie ") + d.id })
                // .attr("class", function(d) { return d.value } )
        });

    // })
}