// function to separate out labels that overlap
function addLabelCoords(data, space, xScale, yScale) {
  let noCollisions = false;

  let yLabelValues = [];
  let yLabelValuesOriginal = [];

  // let yLabelValues = data.map(function(d) {
  //   return d;
  // })
  // let yLabelValuesOriginal = data.map(function(d) {
  //   return d;
  // })

  data.forEach(function (s) {
    let lastIndex = s.values.length - 1;

    s.labelX = xScale(s.values[lastIndex].date);
    s.labelY = yScale(s.values[lastIndex].point);

    yLabelValues.push(s.labelY);
    yLabelValuesOriginal.push(s.labelY);
  });

  while (!noCollisions) {
    noCollisions = true;

    yLabelValues.forEach((v1, i) => {
      yLabelValues.forEach((v2, j) => {
        // let count = 0;

        let yDiff = Math.abs(yLabelValues[j] - yLabelValues[i]);
        let addDiff = space - yDiff;

        // let movingY = yLabelValuesOriginal[j] >= yLabelValuesOriginal[i] ? j : i;

        if (i !== j && yDiff < space) {
          console.log("j hit", i, j);
          // console.log("yDiff",yDiff)
          let greaterIndex =
            yLabelValuesOriginal[j] - yLabelValuesOriginal[i] >= 0 ? j : i;

          yLabelValues[greaterIndex] += addDiff;
          // console.log("updated", yLabelValues)
          noCollisions = false;
        }
      });
    });
  }

  // console.log(yLabelValues);

  // return yLabelValues;

  data.forEach(function (s, i) {
    s.labelY = yLabelValues[i];
  });
}


// addLabelCoords([0, 3, 6, 9, 12, 15])
// addLabelCoords([4, 3, 1, 55, 2, 1])
// [13, 10,1, 55, 7, 4]

module.exports = { addLabelCoords };