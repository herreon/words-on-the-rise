import { $2019, $2019_searchTerms, $2019_sets } from "./terms.js";

// const dataset = [];

// parse the date and time; store data in variable dataA
const timeConv = d3.timeParse("%b %d, %Y");

// for the groupedSet, store corresponding file-fetching promises in an array
function retriever (mainSet, groupedSet) {
  const retrievedPromises = [];

  groupedSet.forEach((set, index) => {
    // let datasetName = `dataset_${index}`;
    retrievedPromises.push(d3.json(`./dist/assets/data/2019_${index}.json`));
  });

  return [mainSet.length, retrievedPromises];

}


// function to create dataset for d3 to use
function createDataset ([numWords, arrayOfPromises]) {
    
    let dataset = [];

  console.log("start createDataset")

  let mainIndex = 0;
  
  function getData (promise, promiseIndex) {

    return promise.then(function(data) {

      // console.log("lloop", data)

      let increment = 0;

      while (increment < 5 && mainIndex < numWords) {

        function calibrate(d, index) {

          let numerator = dataset[0].values[index].point; // comparison value in previous promise (already in var dataset)
          let denominator = d.value[0]; // comparison value in current promise
          let ratio;
              
          if (denominator === 0) {
            ratio = 0;
          } else {
            ratio = numerator/denominator;
          }
    
          return Math.round(+d.value[1] * ratio);

        }

        const slice = {
          term: $2019[mainIndex],
          values: data.map(function (d, index) {
            return {
              date: timeConv(d.formattedAxisTime),
              // point: +d.value[mainIndex]
              point: (promiseIndex === 0 ) ? +d.value[mainIndex] : calibrate(d, index)
            };
          }),
        };

        // console.log("slice", slice)

        dataset.push(slice);
        
        increment += 1;
        // console.log("increment", increment);

        mainIndex += 1;  
      }
      return dataset;

    })


  } 

  const newPromisesArray = [];
  
  return getData(arrayOfPromises[0], 0)
  
  .then(res => {

    arrayOfPromises.slice(1).map(function(promise, index) {
      let newPromise = getData(promise, index + 1);
      // console.log("newpromise",newPromise)
      newPromisesArray.push(newPromise);
    })

    return Promise.all(newPromisesArray);    
  })

  .then(res=> {
    console.log("dataset", dataset)
    return dataset;
  })
  
  
}

export { retriever, createDataset};
// module.exports = { retriever, createDataset }