const fs = require("fs");
const googleTrends = require("google-trends-api");

let searchPoints = {};

function vscoGirl () {googleTrends.interestOverTime(
  {
    keyword: "vsco girl",
    startTime: new Date(2017, 12, 01),
    geo: "US"
  })

  .then(results => {
    
    let resultsArray = JSON.parse(results).default.timelineData;

    console.log(resultsArray[0]);
    
    resultsArray.forEach(res => {
      searchPoints[res.formattedAxisTime] = res.value[0];  
    });

    let output = JSON.stringify(searchPoints, null, 2)
    fs.writeFile("vscoGirl.json", output, function(err){
      if(err) {console.log(err);}
      else {console.log('write operation complete.')}
    })
    
  
  })
// .then(res => console.log(res))
.catch(err => console.log("oh no error!", err))

}


vscoGirl();