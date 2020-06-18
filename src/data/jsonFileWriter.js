const fs = require("fs");
const googleTrends = require("google-trends-api");

const termsModule = require("./terms.js");
const $2019_searchTerms = termsModule.$2019_searchTerms;
const $2019_splitQueries = termsModule.$2019_splitQueries;


function arrayDataGenerator (query, startTime, endTime, fileName) {

  console.log("new query", query)

  googleTrends.interestOverTime({
    keyword: query,
    startTime: startTime,
    endTime: endTime,
    geo: "US"
  })

  .then(res => {
    // console.log("res", res)
    
    let output = JSON.parse(res).default.timelineData;
    return JSON.stringify(output, null, 2);

  })

  .then(res => {
    // console.log(res)
    fs.writeFile(__dirname + `/../dist/assets/data/${fileName}.json`, res, function (err) {
      if (err) { console.log(err); }
      else { console.log('write operation complete.') }
    })
  })
  .catch(err => console.log("there is an error!", err))
}


$2019_splitQueries[0].forEach((query, i) => {
  const startTime = new Date(2017, 11, 1);
  const endTime = new Date(2019, 12, 31);
  // const endTime = new Date(2019, 6, 30);
  const fileName = `2019_${i}`;
  
  arrayDataGenerator(query, startTime, endTime, fileName);
})
