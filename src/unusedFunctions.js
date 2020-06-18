// function to separate out labels that overlap
function addLabelCoords(dataset) {
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

  yLabelValues.forEach((v1, i) => {
    yLabelValues.forEach((v2, j) => {
      let count = 0;
      let yDiff = Math.abs(v2 - v1);
      let movingY = yLabelValuesOriginal[j] >= yLabelValuesOriginal[i] ? j : i;
      if (i !== j && yDiff < 3) {
        // console.log(i, j, yLabelValues[i], yLabelValues[j]);
        count += 1;
        yLabelValues[movingY] = v2 + space;
        // console.log("after edit", i, j, yLabelValues[i], yLabelValues[j]);
      }
    });
  });

  data.forEach(function (s, i) {
    s.labelY = yLabelValues[i];
  });
  // console.log("ylabelvalues", yLabelValues)
}
