var co = require('co');

co(function* (){
    var now = Date.now();
    yield sleep200ms;
    console.log(Date.now() - now);
});

function sleep200ms(cb) {
    console.log(cb);
    setTimeout(cb, 200);
}