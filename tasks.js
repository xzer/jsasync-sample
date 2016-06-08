function createStep(stepName){
  var step = function(cb){
    setTimeout(function(){
      console.log(`${stepName} finished`);
      cb(stepName + " OK");
    }, 1000);
  };
  return step;
}

module.exports={
  step1: createStep("step1"),
  step2: createStep("step2"),
  step3: createStep("step3"),
  stepErr: createStep("stepErr")
}