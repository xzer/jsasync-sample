function logNext(n){
  console.log(n.value, n.done);
}


function* idMaker(){
  var index = 0;
  while(index < 3)
    yield index++;
}

var gen = idMaker();

logNext(gen.next()); // 0
logNext(gen.next()); // 1
logNext(gen.next()); // 2
logNext(gen.next()); // undefined

//process.exit(0)

function* anotherGenerator(i) {
  yield i + 1;
  yield i + 2;
  yield i + 3;
}

function* generator(i){
  yield i;
  yield* anotherGenerator(i);
  yield i + 10;
}

var gen = generator(10);

logNext(gen.next()); // 10
logNext(gen.next()); // 11
logNext(gen.next()); // 12
logNext(gen.next()); // 13
logNext(gen.next()); // 20
logNext(gen.next()); // undefined

//process.exit(0)

var gen = generator(10);

for(var next of gen){
  console.log(next);
}



