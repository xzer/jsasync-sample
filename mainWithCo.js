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

co(function* (){
  var result1 = yield tasks.step1Async();
  console.log(result1);
  var result2 = yield tasks.step2Async();
  console.log(result2);
  var result3 = yield tasks.step3Async();
  console.log(result3);
  
  yield tasks.stepErrAsync();
  
}).then(function(result){
  console.log("finish");
}).catch(function(err){
  console.log("error from:" + err);
});
