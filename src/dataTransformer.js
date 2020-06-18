import { $2019, $2019_searchTerms, $2019_sets } from "./terms.js";

// parse the date and time; store data in variable dataA
const timeConv = d3.timeParse("%b %d, %Y");

function changeYToMovingAverage (dataset) {
    // interval is the num weeks over which the movingAverage is calculated
    const interval = 3;

    dataset.forEach(function (termSlice) {
        const averageChecker = [];
      const averages = termSlice.values.map(function (v, i) {
        // console.log("v", v)
        // console.log("i", i)
        // console.log("d.values", d.values)

        if (i < interval) {
          return;
        }

        let movingTotal = 0;

        termSlice.values.slice(i - interval, i).forEach(function (v) {
          movingTotal += v.point;
        });

        const movingAverage = Math.round(movingTotal / interval);

        averageChecker.push([v.point, movingAverage])

        // console.log("movingTotal", movingTotal);
        // console.log("movingAverage", movingAverage);

        return {
          date: v.date,
          point: movingAverage,
        };
      });
      console.log("averages",averageChecker)
      termSlice.values = averages.slice(interval);
    });
}

// mainSet is an array of (terms for the year) only
// for the groupedSet (subdatasets), store corresponding file-fetching promises in the array "retrievedPromises"
function retriever (mainSet, groupedSet) {
  const retrievedPromises = [];

  groupedSet.forEach((set, index) => {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json(`./dist/assets/data/2019_${index}.json`));
  });

  return [mainSet.length, retrievedPromises];
}


// returns a promise that creates the dataset for d3 to use
// takes in input args that were returned from the function "retriever"
function createDataset ([numWords, arrayOfPromises]) {
    
    // this will store the dataset for d3 to use
    const dataset = [];

    // keeps track of the index of each term
    let mainIndex = 0;

    // returns the appropriate relative value, using the value of the comparison term as a reference
    function calibrate(d, index, dValueIndex) {
        
        let numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)
        let denominator = d.value[0]; // comparison value in current promise
        let ratio;
        // console.log("d, index", d, index)
        if (denominator === 0) {
        ratio = 0;
        } else {
        ratio = numerator / denominator;
        }
        return Math.round(+d.value[dValueIndex] * ratio);
    }


    console.log("start createDataset")

 
  // takes in a promise, and its index in the arrayOfPromises (to tell if it is the first or subsequent subdatasets)
  // returns a promise that writes the data in appropriate format for d3 to use
  function getData (promise, promiseIndex) {

    return promise.then(function(data) {

        // console.log("promisedata", data)

      let increment = 0;  // keeps track of the index within each subdataset
      let maxQueries = 5; // max num of Google Trends API queries

      while (increment < maxQueries && mainIndex < numWords) {
    
        const slice = {
          term: $2019[mainIndex],
          values: data.map(function (d, index) {
              console.log("ddddddd" , d)
              let point = (promiseIndex === 0 ) ? +d.value[mainIndex] : calibrate(d, index, increment + 1)
            return {
              date: timeConv(d.formattedAxisTime),
              // point: +d.value[mainIndex]
              point: point,
            //   movingAveragePoint: getMovingAverage(12, index)
            };
            
          }),
        };

        console.log("slice", slice)
        dataset.push(slice);
        
        increment += 1;
        mainIndex += 1;  
      }
      return dataset;

    })

  } 

  // each promise will be transformed to the data-writing promise and stored in newPromisesArray
  const newPromisesArray = []; 
  
  return getData(arrayOfPromises[0], 0) // create dataset from the first subdataset,
  // then (below) add data from subsequent subdatasets
  
  .then(res => {

    arrayOfPromises.slice(1).map(function(promise, index) {
      let newPromise = getData(promise, index + 1);
      // console.log("newpromise",newPromise)
      newPromisesArray.push(newPromise);
    })

    // console.log("dataset before promise.all", dataset)
    return Promise.all(newPromisesArray);    // execute all the new promises
  })

  .then(res=> {
    console.log("dataset", dataset)
    
    changeYToMovingAverage(dataset);
    // console.log("datasetAfter MovingAverage", dataset)

    return dataset;
  })
  
  
}

export { retriever, createDataset};
// module.exports = { retriever, createDataset }