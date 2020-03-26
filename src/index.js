document.addEventListener("DOMContentLoaded", function() {
  console.log("hello");
  
  // getting test data from gist
  const testData = () => {d3.csv("https://gist.githubusercontent.com/herreon/e269f2355aefc4abbbaff6528664b997/raw/7a50cc28506d418128d9b228a19dc329a2d5159c/test.csv")
    .then(data => {
        console.log(data);
    })};

  
//   document.getElementsByClassName("test")[0].innerHTML = testData();
const vscoGirl = () => {d3.json()}
  document.getElementsByClassName("test")[0].innerHTML = data;
  

  
});
