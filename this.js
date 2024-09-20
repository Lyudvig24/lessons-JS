// "use strict"

// function makeUser(){
//     return {
//         name: "john",
//         ref: this

//     };

// }

// let user = makeUser();

// console.log(user.ref)


// let user = {
    
//     name: "Joe",
//     lastName: "Baiden",
//     sayHi: function(){
//         console.log(this.name)
//     }
// }

// user.sayHi()


// function foo(){
//     console.log(this.name)
// }

// let user = {
//     name: "Joe",
//     age: 34

// }


// foo.bind(user)

// ================================================================

// function func(a){
//     console.log(this)
//     console.log(a)   
// }

// const obj = {
//     func: func
// }


// func(3,"prosty funkcian em kanche ira argumentov"); // this = obj

// func.call(obj,4,"funciain tvel me call metody"); // this = window kam undefined

// const  boundFunc = func.bind(obj,"funcian kanchel em bind metodov"); // this  = obj
// boundFunc(5,"bind metodov");

// new func(3,"new metody kveradarcne datark obj") // this = datark obj

// =================================================================




// const a  = {
//     age: 23,
//     foo: function(arr) {
//         arr.forEach(function(val){
//             console.log(this.age += val)
//         }.bind(this));
//     }
// }
// a.foo([22])











// const a = {
//     name: "Joe",
//     foo: function(f) {
//         console.log(this.name)
//     }

// };


// [1,2,3,4,5].forEach(a.foo.bind(a))


// function zoo(){
//     console.log(this.age)
// }

// const b = {
//     age: 44
// }

// const a = {
//     age: 34,
//     foo: zoo.bind(b)
// }

// a.foo()




// const data = {
//     name: "matos",
//     greet:  () => {
//         console.log(this.name)
//     },
//     greet2:  function (){
//         console.log(this.name)
//     },
// }

// data.greet();
// data.greet2();


// let calc = {
//     sum() {
//         return this.a + this.b;
//     },

//     mul() {
//         return this.a * this.b;
//     },

//     read() {
//         this.a = +prompt("a");
//         this.b = +prompt("b");
//     }
// };


// calc.read();

// console.log(calc.sum())

// console.log(calc.mul())




// function zoo (){
//     console.log(this.age);
// }

// const b = {
//     age: 44
// }

// const a = {
//     age: 33,
//     foo: zoo.bind(b)

// }

// a.foo()


// const a = {
//     name: "joe",
//     f: function (){
//         console.log(this.name)
//     }
// }

// const b = {
//     name: "Mike"
// };


// const d = {
//     name: "Ando"
// }

// a.f.call(d)



// function ballonDor(club, country){
//     console.log(this.name,club,country,this.count)
//  }
//  const messi = {
//     name : 'Messi',
//     count: '8'
//  }
 
 
//  const ronaldo = {
//    name : 'ronaldo',
//    count: '5'
//  }

// ballonDor.call()


// const obj = {
//     name: "JOe",
//     func: function() {
//         [1,2,3].forEach((val) => {
//             console.log(this)
//         });
//     }
// }


// obj.func()



// const a  = () => {
//     this.name = "joe";
// }


// const f = new a();
// console.log(a)



// function F () {
//     this.name = "joe",
//     this.sayHi = () => {
//         console.log(this.name)
//     };
// }

// const a  = new F();

// a.sayHi()

// function human(name) {
//     function displayName() {
//         console.log(name)
//     }
//     displayName()
// }

// human('Matos');


// const makeCounter = function (privateCounter) {
//     function changeBy(val) {
//       privateCounter += val;
//     }
//     return {
//       increment() {
//         changeBy(1);
//       },
  
//       decrement() {
//         changeBy(-1);
//       },
  
//       value() {
//         return privateCounter;
//       },
//     };
//   };
  
//   const counter1 = makeCounter(5);
//   const counter2 = makeCounter(6);
  
//   console.log(counter1.value()); // 0.
  
//   counter1.increment();
//   counter1.increment();
//   console.log(counter1.value()); // 2.
  
//   counter1.decrement();
//   console.log(counter1.value()); // 1.
//   console.log(counter2.value()); // 0.
  
// let x  = 7;

// function a (y) {
//     return x + y
// };

// console.log(a(3))

// function b (z) {
//     let x = 99
//     return z(4)
// };

// console.log(b(a));



// function a(x) {
//     return function(y) {
//         return function (z) {
//             return x + y + z
//         }
//     }
// }

// console.log(a)
// console.log(a(2))
// console.log(a(2)(4))
// console.log(a(2)(2)(4))




// function Cat() {
//     let numLives = 7;
//     let name = "Jack";
    
//     this.age = 5;
//     this.getName = () => {
//       return name;
//     };
//     this.getAge = () => {
//       return this.age;
//     };
//     this.catDies = () => {
//       numLives--;
//     };
//     this.isDead = () => {
//       return numLives <= 0;
//     };
//   };
  
//   let a = new Cat();
//   a.catDies();
//   a.catDies();
//   a.catDies();
//   a.catDies();
//   alert(a.isDead());   // Ի՞նչ կցուցադրի
//   a.catDies();
//   a.catDies();
//   a.catDies();
//   alert(a.isDead());   // Ի՞նչ կցուցադրի
//   alert(a.getName());  // Ի՞նչ կցուցադրի
//   a.age = 99;
//   alert(a.age);   


// function Accumulator(startingvalue){
//     this.value = startingvalue;

//     this.read = function() {
//         this.value += +prompt("inchkan avelcnenk");
//     };

// }

// let accumulator = new Accumulator(5)
// accumulator.read();
// console.log(accumulator.value)

