import { $2019_splitQueries } from "./terms.js";

// parse the date and time; store data in variable dataA
const timeConv = d3.timeParse("%b %d, %Y");

// 
function changeYToMovingAverage (dataset) {
    // interval is the num weeks over which the movingAverage is calculated
    const interval = 9;

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
    //   console.log("averages",averageChecker)
      termSlice.values = averages.slice(interval);
    });
}

// function retriever stores promises that fetch data from the file that 
// corresponds to the index in the array querySubsets.
// Input arg "termsArray" is a "terms-only" array (e.g. $2019)
// Input array "querySubsets" contains subsets of queries, returned from function splitter in terms.js
function retriever (querySubsets) {
  const retrieverPromises = [];

  querySubsets.forEach((splitQuery, index) => {
    // let datasetName = `dataset_${index}`;
    retrieverPromises.push(d3.json(`./dist/assets/data/2019_${index}.json`));
  });

  return retrieverPromises;
}


// returns a promise that creates the dataset for the d3 chart drawing function to use
// takes in input args that were returned from the function "retriever"
function createDataset (termsArray, arrayOfPromises) {
    
    // this will store the dataset for d3 to use
    const dataset = [];

    // // keeps track of the index of each term
    // let mainIndex = 0;

    // returns the appropriate relative value of each term in a querySubset, 
    // using the point value of the common query as a reference
    function calibrate(rawdataSlice, rawdataIndex, rValueIndex) {
        
        let numerator = dataset[0].values[rawdataIndex].point; // comparison value in previous promise (already in var dataset)
        let denominator = rawdataSlice.value[0]; // comparison value in current promise
        let ratio;
        
        if (denominator === 0) {
        ratio = 0;
        } else {ratio = numerator / denominator;
        }

        return Math.round(+rawdataSlice.value[rValueIndex] * ratio);
    }


 
  // takes in a promise, and its index in the arrayOfPromises (to tell if it will access the first or subsequent subdatasets)
  // returns a promise that writes the data into const "dataset", in appropriate format 
  function getData (promise, promiseIndex) {

    return promise.then(function(rawdata) {
    
      let increment = promiseIndex === 0 ? 0 : 1;  // keeps track of the index within each subdataset
      let maxNumOfQueries = 5; // max num of queries in a single call using Google Trends API

      while (increment < maxNumOfQueries && dataset.length < termsArray.length) {

        let termsArrayIndex = promiseIndex * (maxNumOfQueries - 1) + increment;

    
        const slice = {
          term: termsArray[termsArrayIndex],
          values: rawdata.map(function (rawdataSlice, rawdataIndex) {

              let point =
                promiseIndex === 0 ? +rawdataSlice.value[increment]
                  : calibrate(rawdataSlice, rawdataIndex, increment);

            return {
              date: timeConv(rawdataSlice.formattedAxisTime),

              point: point,
        
            };
            
          }),
        };

        dataset.push(slice);
        
        increment += 1;
  
      }
      return dataset;

    })

  } 


  // each promise will be transformed to the data-writing promise and stored in newPromisesArray
  const newPromisesArray = arrayOfPromises.map(function(promise, index) {
      return getData(promise, index);
  })

  return newPromisesArray[0].then(firstSubset => {
      const remainingPromises = newPromisesArray.slice(1);
      return Promise.all(remainingPromises);
  })
  .then(res => {
    console.log("dataset", dataset)
    
    changeYToMovingAverage(dataset);
    // console.log("datasetAfter MovingAverage", dataset)

    return dataset;
  })
  
  
}

export { retriever, createDataset };
// module.exports = { retriever, createDataset }