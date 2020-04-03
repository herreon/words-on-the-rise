<!DOCTYPE html>
<html lang="en">
    
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>wordsOnTheRise</title>
    <script src="./main.js"></script>
    <script src="https://d3js.org/d3.v5.min.js"></script>
    
    <style></style>
</head>

<body>
    <h1>Words on the Rise</h1>
    <h2> coming soon </h2>
    <div id="container" class="svg-container"></div>
    <script class="test"></script>
    <div class="test"></div>
</body>

<script>
// //------------------------1. PREPARATION-------------------------//
//     //-----------------------------SVG-------------------------------//
//     const width = 960;
//     const height = 500;
//     const margin = 5;
//     const padding = 5;
//     const adj = 30;
//     // we are appending SVG first
//     const svg = d3
//         .select("div#container")
//         .append("svg")
//         .attr("preserveAspectRatio", "xMinYMin meet")
//         .attr(
//             "viewBox",
//             "-" +
//             adj +
//             " -" +
//             adj +
//             " " +
//             (width + adj * 3) +
//             " " +
//             (height + adj * 3)
//         )
//         .style("padding", padding)
//         .style("margin", margin)
//         .classed("svg-content", true);

//     //-----------------------------DATA------------------------------//

//     const timeConv = d3.timeParse("%d-%b-%Y");
//     //   const dataset = d3.csv("../src/data.csv");
//     const dataset = d3.csv("./src/data.csv");


//     dataset.then(function (data) {
//         const slices = data.columns.slice(1).map(function (id) {
//             return {
//                 id: id,
//                 values: data.map(function (d) {
//                     return {
//                         date: timeConv(d.date),
//                         measurement: +d[id]
//                     };
//                 })
//             };
//         });

//         // console.log("Column headers", data.columns);
//         // console.log("Column headers without date", data.columns.slice(1));
//         // // returns the sliced dataset
//         // console.log("Slices", slices);
//         // // returns the first slice
//         // console.log("First slice", slices[0]);
//         // // returns the array in the first slice
//         // console.log("A array", slices[0].values);
//         // // returns the date of the first row in the first slice
//         // console.log("Date element", slices[0].values[0].date);
//         // // returns the array's length
//         // console.log("Array length", (slices[0].values).length);

//         //----------------------------SCALES-----------------------------//

//         const xScale = d3.scaleTime().range([0, width]);
//         const yScale = d3.scaleLinear().rangeRound([height, 0]);

//         xScale.domain(
//             d3.extent(data, function (d) {
//                 return timeConv(d.date);
//             })
//         );

//         yScale.domain([
//             0,
//             d3.max(slices, function (c) {
//                 return d3.max(c.values, function (d) {
//                     return d.measurement + 4;
//                 });
//             })
//         ]);

//         //-----------------------------AXES------------------------------//

//         const yaxis = d3.axisLeft().scale(yScale);
//         const xaxis = d3.axisBottom().scale(xScale);

//         //----------------------------LINES------------------------------//

//         //-------------------------2. DRAWING----------------------------//

//         //-----------------------------AXES------------------------------//

//         svg
//             .append("g")
//             .attr("class", "axis")
//             .attr("transform", "translate(0," + height + ")")
//             .call(xaxis);

//         svg
//             .append("g")
//             .attr("class", "axis")
//             .call(yaxis);

//         //----------------------------LINES------------------------------//
//     });
// </script>
</html>
