function getTermPeakDate(data, term) {


  let slice = data.filter((d) => {
    return d.term === term;
  })[0]

  let peakPoint = d3.max(slice.values, function(v) {
      return v.point;
  });

  let peakIndex = slice.values.findIndex(v => {
      return v.point === peakPoint;
  });

  // !!!!!!!! might have to +1 after peakIndex
  return slice.values[peakIndex].date;


}

module.exports = { getTermPeakDate }
