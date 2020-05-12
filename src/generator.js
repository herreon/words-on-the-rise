// import { searchTerms } from "./searchTerms.js";
const fs = require("fs");
const googleTrends = require("google-trends-api");

const searchTerms = require("./searchTerms.js");

let allTerms = {};

function dataGenerator () {

  searchTerms.forEach(term => {

    console.log("term", term)

    googleTrends.interestOverTime({
      keyword: term,
      startTime: new Date(2017, 11, 1),
      geo: "US"
    })

    .then(termResult => {

      // console.log("termResult", termResult)
      
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

dataGenerator();