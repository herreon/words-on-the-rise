const fs = require("fs");
const googleTrends = require("google-trends-api");

let searchTerms = ["vsco girl", "boomer"];
let allTerms = {};

function dataGenerator () {

  searchTerms.forEach(term => {

    console.log(term)

    googleTrends.interestOverTime({
      keyword: term,
      startTime: new Date(2017, 12, 1),
      geo: "US"
    })

    .then(termResult => {
      
      let termArray = JSON.parse(termResult).default.timelineData;

      allTerms[term] = termArray;

      return JSON.stringify(allTerms, null, 2);

      // resultsArray.forEach(res => {
        // console.log(res)
        // searchPoints[res.formattedAxisTime] = res.value[0];
      // });

      // let output = JSON.stringify(searchPoints, null, 2)
      
    })

    .then(test => {
      fs.writeFile(__dirname + '/../dist/assets/data.json', test, function (err) {
        if (err) { console.log(err); }
        else { console.log('write operation complete.') }
      })
    })

    .catch(err => console.log("oh no error!", err))
  })

}

// .then(res => console.log(res))



// let termOutput = JSON.stringify(termArray, null, '\t')

dataGenerator();


const test = {"hell": [1, 2, 3], "here": [4, 5, 6]}