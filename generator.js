class Company{
    condtructor(){
        this.employees =[];

    }


    addEmployes(...names){
        this.employees = this.employees.concat(names);

    }
    *[Symbol.iterator](){
        for(let e of this.employees){
            yield e;
        }
    }
}





let count = 0;
let company =new Company();
company.addEmployes("tim","Sue","Joy");

for(let employee of company){
    count += 1;

}

//generator
function* countAppleSales () {
    var saleList = [3, 7, 5];
    for (var i = 0; i < saleList.length; i++) {
      yield saleList[i];
    }
  }

  var appleStore = countAppleSales(); // Generator { }
  console.log(appleStore.next()); // { value: 3, done: false }
  console.log(appleStore.next()); // { value: 7, done: false }
  console.log(appleStore.next()); // { value: 5, done: false }
  console.log(appleStore.next()); // { value: undefined, done: true }


// comprehensions

//let numbers =[];
//for (let n of [1,2,3]){
  //  numbers.push(n*n);
//}


//instead of the last code we can create the last function
//var numbers = [for(n of [1,2,3]) n*n];