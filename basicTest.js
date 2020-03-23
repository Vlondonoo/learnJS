
// function decoration
function vero(){
    console.log("messages")
}

vero();

//function expression

let nuevaFuncion = function(){
    console.log("new funciotn")
}
;
nuevaFuncion()

// return values
 function returnedFuncion(codigo){

    return codigo +1
 }

 let nuevoValor = returnedFuncion(3)
 console.log(nuevoValor)



 //modify web
 function showMessage(message){
      document.getElementById('message').textContent= message;
      const changeColor = document.getElementById('message')
     changeColor.style.color = 'blue'
 };

 showMessage("genial")


 // symbols and objects
 let mySymbol = Symbol();
 let person = { 
     name : 'vero', apellido : 'londono',[mySymbol] : 'secretInfo'}


// tiempos

let now = new Date();
console.log(now.getTime())


//forEach
var numbers = [65, 44, 12, 4];
numbers.forEach(function myFunction(item){
console.log(item)
});



// default Parameters
// if he parameter name is passe by it will take the value name
//if no it will take the value by default in this case Scott
var doWork = function(name = "Scott"){
return name;
};
var result = doWork();

// rest parameters
// call a   lot parameter into the funtion when y dont know how many will be
var doWorked = function(name, ...numbers){
    numbers.forEach(function num(n){
        result += n;
    });
    return result;
    };
    var results = doWorked("Scott",1,1,3)


    //arrow functions
    var numbers= [1,2,3,4]
    numbers.forEach(n =>{
        var result = n+n;
        return result;
    })

    var doubled = numbers.map(n => n*2);
    // result of doubled is [2, 4, 6, 8]

    //Spread operator
   // this is to divide an array
    var spreadValue = function(x,y,z){
       
        return x+y+z;
        };
        var results = spreadValue(...[1,2,3])

    //Template literals
 // subtitute values
        
 var testLiterals = function(name){
    return `hello $(name)`;

}

var testing= testLiterals("Scott");







//Clases

class Employee {
  doWork (){
      return "complete";
  }
}
// instance
var e = new Employee();



//for loop

for( let i = 0 ; i<= 3;i++){
    console.log(i)
};

//for of    //to objects that iterab;e
let numbers = [ 1,2,3,4];

for (let i of numbers){
    console.log(i)
}


// generator function

let numbers = function* (){

    yield 1;
    yield 2;
}