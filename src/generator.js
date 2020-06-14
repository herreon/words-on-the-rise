const fs = require("fs");
const googleTrends = require("google-trends-api");

const searchTerms = require("./searchTerms.js");

// let allTerms = {};

function arrayDataGenerator () {
  googleTrends.interestOverTime({
    keyword: searchTerms,
    startTime: new Date(2017, 11, 1),
    geo: "US"
  })
  .then(termResult => {
    console.log("res", termResult)
    // console.log(JSON.parse(termResult).default.timelineData)
    // let output = JSON.parse(termResult).default.timelineData;
    // console.log(JSON.stringify(output, null, 2));
    // return JSON.stringify(output, null, 2);
  })
  
  // .then(test => {
  //   fs.writeFile(__dirname + '/../dist/assets/data.json', test, function (err) {
  //     if (err) { console.log(err); }
  //     else { console.log('write operation complete.') }
  //   })
  // })
  
  .catch(err => console.log("there is an error!", err))
}


console.log(searchTerms);
arrayDataGenerator();