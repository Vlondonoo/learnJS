
class Employee {

    // keep variables as references
    constructor(name){
        this._name;
    }
    doWork (){
        return "complete";
    }
    getName(){
        return  this._name;
    }

    get name(){
        return this._name.toUpperCase();
    }


  }
  // instance
  var e = new Employee();

 let varlue= e.doWork;