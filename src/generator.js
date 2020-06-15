const fs = require("fs");
const googleTrends = require("google-trends-api");

const termsModule = require("./terms.js");
const $2019 = termsModule.$2019;
const $2019_1 = termsModule.$2019_1;
const $2019_2 = termsModule.$2019_2;
const $2019_3 = termsModule.$2019_3;


// const $2019_1 = $2019.slice(0, 3);
console.log("$2019_1", $2019_1);
const $2019_1_fileName = "2019_1";

// const $2019_2 = $2019.slice(2, 4);
console.log("$2019_2", $2019_2);
const $2019_2_fileName = "2019_2";

// const $2019_3 = $2019.slice(0, 4);
console.log("$2019_3", $2019_3);
const $2019_3_fileName = "2019_3";

const startTime = new Date(2017, 11, 1);
const endTime = new Date(2019, 12, 31);

function arrayDataGenerator (keyword, startTime, endTime, fileName) {
  googleTrends.interestOverTime({
    keyword: keyword,
    startTime: startTime,
    endTime: endTime,
    geo: "US"
  })
  .then(termResult => {
    // console.log("res", termResult)
    
    let output = JSON.parse(termResult).default;
    let averages = JSON.parse(termResult).default.averages;
    
    console.log("termResult.average", averages);
    return JSON.stringify(output, null, 2);
    // return output;
  })

  .then(termResult => {
    // console.log(termResult)
    fs.writeFile(__dirname + `/../dist/assets/data/${fileName}.json`, termResult, function (err) {
      if (err) { console.log(err); }
      else { console.log('write operation complete.') }
    })
  })
  .catch(err => console.log("there is an error!", err))
}
// function arrayDataGenerator (keyword, startTime, endTime) {
//   googleTrends.interestOverTime({
//     keyword: termsModule.searchTerms,
//     startTime: new Date(2017, 11, 1),
//     endTime: new Date(2019, 12, 31),
//     geo: "US"  
//   })
//   .then(termResult => {
//     console.log("res", termResult)
//     // console.log(JSON.parse(termResult).default.timelineData)
//     let output = JSON.parse(termResult).default.timelineData;
//     // console.log(output)
//     return JSON.stringify(output, null, 2);
//   })
//   .then(termResult => {
//     // console.log(termResult)
//     fs.writeFile(__dirname + '/../dist/assets/data/2019_1.json', termResult, function (err) {
//       if (err) { console.log(err); }
//       else { console.log('write operation complete.') }
//     })
//   })
//   .catch(err => console.log("there is an error!", err))
// }


arrayDataGenerator($2019_1, startTime, endTime, $2019_1_fileName);
arrayDataGenerator($2019_2, startTime, endTime, $2019_2_fileName);
arrayDataGenerator($2019_3, startTime, endTime, $2019_3_fileName);

// arrayDataGenerator();

