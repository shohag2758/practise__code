// let i = 0;
// let txt = "";

// let personalHobby = {
//   name: "Mohiuddin",
//   cars: ["BMW", "Volvo", "Saab", "Ford"],
//   year: 2022,
//   objectMethod: function(){
//        return this.cars.forEach((a) => { console.log(`${this.name} will buy ${a}`)
//       })
//   }}

//  personalHobby.objectMethod()

// var cars = ["BMW", "Volvo", "Saab", "Ford"];
// var i = 0;
// var text = "";

// cars.forEach(myFc);

// function myFc(a){
//   console.log(a)
// }

// let typeHere , cloneR , displayResult;

// typeHere = document.querySelector('.type__here');
// cloneR = document.querySelector('.show__result');
// displayResult = document.querySelector('.display');

// function dataTrans(){

//   setTimeout(
//     ()=>{
//     displayResult.innerHTML = this.value
//    }, 1000
//   )

// }

// typeHere.addEventListener("keyup", dataTrans);

//constractor

// let house = function(price,location){
//     this.price = price;
//     this.location = location
// }

// let demand = new house('120000','south Banasree');

// console.log(demand)

// let salaryMethod = {
//   salary(){
//     console.log("ur salary is ....")
//   },

//   age(){
//       console.log("ur age is ....")
//   }

// };

// let prog = function(name,price){
//   let cars = Object.create(salaryMethod);

// cars.name = name;
// cars.price = price;

// return cars;

// }

// let toyota = new prog('frod','20 milion');
// let person = new prog('samiul','3200');

// toyota.salary()

// console.log(toyota)
// console.log(person)

// let mySalary = {
//   name: 'mohiuddin',
//   salary: '12000',
//   age: 25
// }

// let newSalary = Object.create(mySalary)
// console.log(newSalary)

// class person{

//     constructor(myName, myClass, mySub){
//         this.myName = myName;
//         this.myClass = myClass;
//         this.mySub = mySub;
//     }

//     myWish() {
//         console.log("i want to be a programer");
//       }
//       myHobby() {
//         console.log("i want to be a criminal");
//       }

// }

// let firstName = new person("mohiuddin", "Honours", "Accounting");

// console.log(firstName);

// //////////// test area//////////////

class TimeOuter{
  constructor(name,year,price){
    this.name = name;
    this.year = year;
    this.price = price;
  }

  companyAsset (x){
    return x - this.year
  }


}

let timeSpace = new Date();

let shiftTime = timeSpace.getFullYear();

let cars = new TimeOuter("Frod",2014,"400000");

console.log(cars.companyAsset(shiftTime))