
const data = [3, 66, 2, 76, 5, 20, 1, 30, 50, 9, 80, 5, 7];
const terr = [5, 5, 5, 5, 80, 80, 2, 3, 1, 2, 60, 1, 2, 33]

function chartA () {

    console.log("this is chartA")

    let width = 20;
    let height = 200;

    const x = d3.scaleLinear().domain([0, 1]).range([0, width]);
    const y = d3.scaleLinear().domain([0, 100]).rangeRound([height, 0]);

    const line = d3
      .line()
      .x(function (d, i) {
        return x(i);
      })
      .y(function (d) {
        return y(d);
      });


    function my(selection) {

        console.log("returning my")

        selection.each(function (data) {

            console.log("this", this)

            // "this" is the selected element (in this case, div with id="#container")
            const chart = d3.select(this)
                            .append("svg")
                            .attr("class", "chart")
                            .attr("width", width * data.length - 1)
                            .attr("height", height)
    
            

            chart.append("path").attr("d", function (d) {
              return line(data);
            });


        })

    }

    my.width = function(value) {
      if (!arguments.length) {
        return width;
      } else {
        width = value;
        return my;
      }
    }

    my.height = function(value) {
      if (!arguments.length) {
        return height;
      } else {
        height = value;
        return my;
      }
    }

    return my;
}


export default function simple_example () {

    console.log("simple.js content has loaded");

    // console.log("chartA's width", chartA().width())
    // console.log("chartA's my", chartA())
    
    const chartB = chartA().height(300)
    console.log("chartB's my", chartB)
    console.log("chartB's height", chartB.height())

  //   d3.select("#container").datum(data).call(chartA())
  //   console.log("chartA is complete")

   let c2 = d3.select("#container2")
  //  console.log("c2", c2)
   c2.datum(terr).call(chartB)


}