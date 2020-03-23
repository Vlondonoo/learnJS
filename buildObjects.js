// rember to numbers parse
// number = '3'
// number.ParseInt(number)


//Math functions
Math.cosh(1);



//Arrays

var arry = [1,5,10]
var match = arry.find(item => item >10);

var matchIndex = arry.findIndex(item => item>3);
var fillarray = arry.fill(a) // fill all the index with a
arry.length();


// arry comprenhension
//var ary = [for (i of [1,2,3]) i];






//promise
 

var promise  = new Promise(function(resolve, reject){
resolve(1);
reject(Error('an error'));
});

promise.then(function(data){
    //data should be 1
});


//short cut about promises
var previwsPromise  = Promise.resolve(3);
var promise = Promise.resolve(previwsPromise);
promise.then(function(data){
    // data shoul be 3
});


var promise = Promise.reject(Error('bad error'));
promise.catch(function(error){
    // error message should be 'bad error'
});






