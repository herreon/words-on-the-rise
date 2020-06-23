export function updateCurrentMaxY(data, chartStartDate, chartEndDate, chartIndexStart, chartIndexEnd) {
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
  console.log("chartindexend", chartIndexEnd);

  return currentMaxY = d3.max(data, function (termSlice) {
    let valueArray = termSlice.values.slice(chartIndexStart, chartIndexEnd);

    return d3.max(valueArray, function (v) {
      return v.point;
    });
  });

//   console.log("currentMaxY", currentMaxY);
}
