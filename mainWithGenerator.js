const tasks = require("./tasks.js");
const thunkify = require('thunkify');

for(var p in tasks){
  (function(){
    var step = tasks[p];
    var stepSync = thunkify(step)
    tasks[p+"Sync"] = stepSync;
  })();
}

tasks.step1Sync()(function(r){
  console.log(r);
})

function run(fn) {
  var gen = fn();

  function next(data) {
    var result = gen.next(data);
    if (result.done) return;
    result.value(next);
  }

  next();
}

run(function* (){
  var result1 = yield tasks.step1Sync()
  console.log(result1)
  var result2 = yield tasks.step2Sync()
  console.log(result2)
  var result3 = yield tasks.step3Sync()
  console.log(result3)
})

