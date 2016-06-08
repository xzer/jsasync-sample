require('babel-polyfill');
const tasks = require("./tasks.js");
const co = require('co');

for(var p in tasks){
  (function(){
    var step = tasks[p];
    var stepAsync = function(){
      return new Promise(function(resolve, reject){
        step(function(result){
          if(result.startsWith("stepErr")){
            reject(result);
          }else{
            resolve(result);
          }
        });
      });
    }
    tasks[p+"Async"] = stepAsync;
  })();
}

(async function(){
  
  var result1 = await tasks.step1Async();
  console.log(result1)

  var result2 = await tasks.step2Async();
  console.log(result2)
  
  //var resultErr = await tasks.stepErr();
  //console.log(resultErr)

  var result3 = await tasks.step3Async();
  console.log(result3)
  
})();
