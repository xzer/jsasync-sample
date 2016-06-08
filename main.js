const tasks = require("./tasks.js");

tasks.step1(function(result){
  console.log(result);
  tasks.step2(function(result){
    console.log(result);
    tasks.step3(function(result){
      console.log(result);
      console.log("finish");
    });
  })
})