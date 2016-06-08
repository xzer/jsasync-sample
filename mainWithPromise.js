const tasks = require("./tasks.js");
const Promise = require('promise');

for(var p in tasks){
  (function(){
    var step = tasks[p];
    var stepAsync = function(){
      return new Promise(function(resolve, reject){
        step(function(result){
          resolve(result);
        });
      });
    }
    tasks[p+"Async"] = stepAsync;
  })();
}

tasks.step1Async().then(function(result){
  console.log(result);
  return tasks.step2Async();
}).then(function(result){
  console.log(result);
  return tasks.step3Async();
}).then(function(result){
  console.log(result);
  throw result;
}).catch(function(err){
  console.log("error from:" + err);
})