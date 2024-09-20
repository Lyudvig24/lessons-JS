
// console.log(document.getElementById('text'));

// if(document.getElementById('text')){
//     let element = document.getElementById("text");
//     element.textContent = element.textContent.toUpperCase(); 
// };







// let names = ['armen','karapet','syuzi','poxos','gugush','sako'];

// let [left,right] = [0, names.length -1]

// while(left < names.length/2) {
//     let saveNames = names[left];
//     names[left] = names[right];
//     names[right]  = saveNames;


//     left++;
//     right--;

// }

// console.log(names)


// let nums = [2,3,5,7,12,46,213,325,7,1];

// let mylist = [];

// let multiply = 0;   

// while(multiply < nums.length) {
//     mylist[multiply] = nums[multiply] * 2;
//     multiply += 1;
// }   
//  console.log(mylist);


// let nums = [12,3,4,6,8,24];

// let mylist = [];

// let i = 0;
// let i2 = 0;

// while(i < nums.length) {
//     if (nums[i] % 2 !== 0) {    
//         mylist[i2] = nums[i];
//         i2++;
//     }
//    i++;    
// }

// console.log(mylist);



// let a = 9;

// if (a > 0) {
//   let b = 2;

//   if (b > 0) {
//     let a = 3
//     console.log(a+b);

//   }



//     b = 4;
//     console.log(b+a)


//     let i = 0;
//     while(i < 2) {
//         console.log(i+b+a)
//         i = i +2;

// }
// console.log(i)

// }
// console.log(a)


// let reverse = function(arr) {
//     let resultArr = [];

// let i = 0;
// let i2 = arr.length-1;

// while(i2 >= 0) {
//     resultArr[i] = arr[i2]
//     i = i + 1;
//     i2 = i2 -1;     
// }

// return resultArr;

// };

// console.log(reverse([1,2,3,4,5]))


// let factorial = function(num) {

//     let result = 1;

//     while(num > 1) {
//         result = result * num
//        num = num -1;
//     }
//     return result;
// };

// console.log(factorial(5))




// for (let index = 0; index < nums.length; index++) {
//     const element = nums[index];
//     console.log(index, element)

// }




// let nums = [1,2,3,4,5,6];

// nums = nums.map(function(element,index){
//     return element
// }); 

// console.log(nums);


// let peoples = [
//     {
//         name: "Joe",
//         lastName: "Bayden"
//     },
//     {
//         name: "mike",
//         lastName:"jakcson"
//     }
// ];

// let names = []
// let surname = []
// peoples.forEach(function(val) {
//     names.push(val.name)
//     surname.push(val.lastName)


// });

// console.log(names)
// console.log(surname)




// let nums = [1,2,34,55,12,45,14];

// const myarr = nums.filter(function(value) {

//     if(value % 2 === 0){

//         return value
//     }
// });

// console.log(myarr)



// let peoples = [
//     {
//         name:"joe",
//         age: 16
//     },
//     {
//         name:"mike",
//         age:34
//     },

//     {
//         name:"jane",
//         age: 18

//     }
// ];

// let result = peoples.filter(function(persons) {

// return persons.age >=18;
// }).map(function(persons) {
//     return persons.name
// });

// console.log(result)



// let persons =  {
//     name:"jake",
//     age: 34,
//     phone:77408520    
// };




// Save data to localStorage
// let cn = 0
// localStorage.setItem('count', cn++);


// // Retrieve the username
// const stcn = localStorage.getItem('count');

// console.log(stcn);

// const user = {
//     name: 'John Doe',
//     age: 30,
//     email: 'john.doe@example.com'
// };
// localStorage.setItem('user', JSON.stringify(user));




// let arr = [2,3,4,5,6]

// let a = arr.reduce(function(aggr,value) {
//     console.log(aggr);  
//     return aggr + value;
// },0);

// console.log(a);


// let nums = [12,3,4,5,6]

// for(i of nums) {
//     console.log(i)
// };



// let a = [12, 3, 5, 6, 1]

// let b = [11, 13, 14, 15]

// let concate = function (c, d) {
//     let result = [];
//     c.forEach(function (val) {
//         result.push(val)
//     });
//     d.forEach(function(val) {
//         result.push(val)
//     });
//     return result;
// };

// console.log(concate(a,b))


// const nums = [19,19,2,3,5,5,5];
// const mydict = {}
// nums.forEach(function(val){
//     if(!mydict[val]) {
//         mydict[val] = 0;
//     }
//     mydict[val] += 1;
// });

// const dictValues = Object.values(mydict);

// if(dictValues.includes(2) && dictValues.includes(3)) {
//     console.log(true)
// } else {
//     console.log(false)
// }


// let words = ['cat', 'car', 'fear', 'ce'];
// let maxwords = ''
// words.forEach(function(val){
//     if(val.length > maxwords.length) {
//         maxwords = val
//     }
// });

// console.log(maxwords)


// let a = [1,2,3,4,1]

// console.log(a.at()) 


// let nums = [12,3,1,5,6]

// let num = [12,3,1,5,6]

// let numbers = nums.concat(num)


// console.log(numbers)


// let arr = ['a','b','c','d','e']

// console.log(arr.copyWithin(2,3,1))




// const arr = [1, 2, 3, 5];
// const found = arr.find(function (el) {
//     if (el > 4) {
//         console.log(el);
//     }
// });


// const myarr = [0, 1, [2, [3, [4, 5]]]]

// console.log(myarr.flat(4))


// let arr = [1,2,1,1,1];
// let a = arr[0];

// let flag = true;


// for(el of arr){
//     if(el!== a) {
//         flag = false;
//         break;
//     };
// };


// console.log(flag)



// let arr = [1,2,3,45,1]

// for(let i = 0; i<arr.length;i++){
//     console.log(i,arr[i]);
// };


// let words = 'a b c d';
// let arr = [];

// for(i of words){
//     if(i===' '){
//         continue;
//     };
//     arr.push(i);

// }
// console.log(arr);


// let num = 2
// console.log(3 * ++num)



// let question = prompt("what is the official name of Javasrcipt ? ");
// if (question === "ECMAScript"){
//     console.log("Right");
// }

// else {
//     console.log("Wrong")
// };

// let johnHasCar = true;

// johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")

// alert( johnHasCar ); // "У Джона нет машины!"


// let gretting = '';

// gretting &&= gretting + "hello";

// console.log(gretting)

// console.log(!!null);




// let person = prompt("ove or ? ")


// if (person === "Admin") {

// let pass = prompt("Grek paroly");

// if (pass === "es em") {
//     console.log("Barev dzez");

// } else if (pass === '' || pass === null) {
//     console.log("Atmen");

// } else {
//     console.log("Sxal parol");
// } 


// } else if (person === '' || person === null) {
//     console.log("Atmen");

// } else {
//     console.log("Hajox")

// };



// function transform (arr) {
//     const women = arr.filter(function(el){
//         return el.gender === "female";
//     });


//     let data = women.map(function(el){
//         return {
//             firstName: el.fn,
//             lastName: el.ln,
//             phoneNum: el.ph
//         };
//     });

//     return data;
// };
// console.log(transform([
//         {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//         {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//         {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//         {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
//   ]));





// console.log(JSON.stringify(transform([
//     {fn: "Joe", ln: "Mikaelyan", ph: "039 323 233", gender: "male" },
//     {fn: "Mike", ln: "Hovsepyan", ph: "039 323 233", gender: "male" },
//     {fn: "Jane", ln: "Karapetyan", ph: "039 323 233", gender: "female" },
//     {fn: "Jill", ln: "Isahakyan", ph: "039 323 233", gender: "female" }
// ]
// )));


// const persons = [
//     { name: "Joe", age: 13, hairColor: "red" },
//     { name: "Mike", age: 10, hairColor: "brown" },
//     { name: "Jane", age: 4, hairColor: "red" },
//     { name: "Susan", age: 30, hairColor: "brown" }
// ];

// function getAvgAgeByColor(arr,hair) {
//     const hairColor = arr.filter(function(el) {
//         return el.hairColor === hair;
//     });
    
//     const sum = hairColor.reduce(function(aggr, value){
//         return aggr += value.age;
//     }, 0);

//     return sum / hairColor.length;
// };

// console.log(getAvgAgeByColor(persons,'brown'))


// const persons =  [
//         { name: "Joe", age: 13, hairColor: "red" },
//         { name: "Mike", age: 10, hairColor: "brown" },
//         { name: "Jane", age: 4, hairColor: "red" },
//         { name: "Susan", age: 30, hairColor: "brown" }
//     ];


// function getAvgAgeByColor (arr,hair) {
//     const  hariColor = arr.filter(function(el){
//         return el.hariColor = hair;
//     });

//     const sum = hariColor.reduce(function(aggr,value){
//         return aggr += value.age
//     }, 0)

//     return sum / hariColor.lenght
// };

// console.log(getAvgAgeByColor(persons,'red'))



// const persons =  [
//     { name: "Joe", age: 13, hairColor: "red" },
//     { name: "Mike", age: 10, hairColor: "brown" },
//     { name: "Jane", age: 4, hairColor: "red" },
//     { name: "Susan", age: 30, hairColor: "brown" }
// ];

// function getAvgAgeByColor (arr,color) {
//     const haircolor = arr.filter(function(el){
//         return el.hairColor === color;
//     });
        
//     const sum = haircolor.reduce(function(aggr,value){
//         return aggr += value.age;
//     },0);
//         return sum / haircolor.length;  
// };

// console.log(getAvgAgeByColor(persons,'brown'))




// const persons = [
//     {
//      name: "Joe", 
//      friends: [
//         { name: "Susan", age: 12 }, 
//         { name: "Jane", age: 43 }, 
//         { name: "Susan", age: 33 }
//       ]
//     }, 
//     {
//      name: "Liz", 
//      friends: [
//         { name: "Mila", age: 12 }, 
//         { name: "Susan", age: 43 }, 
//         { name: "Jane", age: 33 }
//       ]
//     },
//     {
//      name: "Mike", 
//      friends: [
//         { name: "Susan", age: 12 }, 
//         { name: "Susan", age: 43 }, 
//         { name: "Susan", age: 33 }
//       ]
//     }
//    ]


 
// function getPersonNameFirendsCount (people,friendName) {

//     let filteredPeople = people.map(function(personObj){

//         return {
//             name: personObj.name,
//             count: personObj.friends.filter(function(friendObj){
//                 return friendObj.name === friendName;   
//             }).length
//         };

//     });

    

//     const max =  filteredPeople.reduce(function(aggr, val){
//         if(aggr === undefined) {
//             return val;
//         }
//         if(val.count > aggr.count) {
//             return val;
//         }
//         return aggr;

//     },undefined);

//     return max.name;

// };

// console.log(getPersonNameFirendsCount(persons,"Susan"))
   






// let firstName = null;
// let lastName = null;
// let nickName = "Суперкодер";

// console.log(firstName || lastName || nickName || "Аноним");
 

// let num1 = 10,
//     num2 = 20,
//     result;

// result ??= num1 ?? num2;


// console.log(result);


// let sum = 0;

// while (true) {

//   let value = +prompt("Введите число", '');
    
//   if (!value) break; // (*)

//   sum += value;

// }
// console.log( 'Сумма: ' + sum );



// for (let i = 0; i<10; i++) {
    
//     if(i % 2 ) {

//     console.log(i);
//     };
    
// };



// const number = +prompt ("enter a number ")

// switch (number) {

//     case 0:
//         console.log("rihgt ")
//         break;

//     case 1:
//         console.log("Duk grel ek 1")
//         break;

//     case 2:
//     case 3:
//     console.log("duk grel ek 2 kam 3")
//     break;

//     default:
//         console.log("chka ytpes case")

// };  


// function removeIndex (array,index) {
//     return array.filter(function(val,i){
//         return i !== index;
//     });

// }

// console.log(removeIndex([2,1,3,41,5],3));



// function showMessage(from, text ) {
//     if(text === undefined) {
//         text ??= "ches avelcre"
//     }
//     console.log( from + ": " + text );
//   }
  
//   showMessage("Аня");


// function checkAge(age) {
//     if (age >= 18) {
//       return true;
//     } else {
//       return confirm('А родители разрешили?');
//     }
//   }
  
//   let age = prompt('Сколько вам лет?', 18);
  
//   if ( checkAge(age) ) {
//     console.log( 'Доступ получен' );
//   } else {
//     console.log( 'Доступ закрыт' );
//   }


// function toNumber(binaryStr) {
//     return  binaryStr.split('').reverse().map(function(val,i){
//         if (val === '1') {
//          return Math.pow(2,i)
//         }
//         return 0

//     }).reduce (function(aggr,val){
//         return aggr + val;
//     },0)
// }
// console.log(toNumber('101'));


// function _log(a){
//     return console.log(JSON.stringify(a))
// }


// let arr = [
//     { name: "Apple", color: "red" },
//     { name: "Banana", color: "yellow" },
//     { name: "Orange", color: "orange" },
//     { name: "Apple", color: "yellow" }
// ];


// function filterToColor(fruits,color) {
//     return filteredFruits = fruits.filter(function(val){
//         const values = Object.values(val)
        
//         for(let i = 0; i < values.length; i++) {
//             if((""+values[i]).search(color) !== -1) {
//                 console.log(color)
//                 return true;
//             }
//         }
//         return false;
//     })
// }

// _log(filterToColor(arr, 'llow'));



// let arr = ['hello','world','good','gilr','gril']

// function search (arr,item) {
//     return arr.filter(function(i){
//         return i.includes(item)
//     })
        

// }
// console.log(search(arr,'he'))

// let nums = [123]

// function reverse (nums) {
//    const revNums = "" + nums ; 
//    const newNums = revNums.split('')
//         .reverse()
//         .join('')
//    return +newNums;

// }

// console.log(reverse(nums))



// function keysCount(str) {
//     const  countKeys = str.split('').reduce(function(aggr,val){
//         if(aggr[val] === undefined){
//             aggr[val] = 1;
//         } else {
//             aggr[val] +=  1;
//         }
//          return aggr;

//     },{});

//     Object.keys(countKeys).forEach(function(i){
//         console.log(`${i}: ${countKeys[i]}`)
//     });
//  }

// (keysCount("heelo-world"))





// function max(arr) {
//     let maxVal = arr[0];
//     for (let i = 0; i < arr.length; i++) {
//         const val = arr[i];
//         if (val > maxVal) {
//             maxVal = val
//         };
//     };
//     return maxVal;

// }
// console.log(max([1,2,3,4,100]))





// function ask(question, yes, no) {
//     if (confirm(question)) yes()
//     else no();
//   }
  
//   function showOk() {
//     console.log( "Вы согласны." );
//   }
  
//   function showCancel() {
//     console.log( "Вы отменили выполнение." );
//   }
  
//   // использование: функции showOk, showCancel передаются в качестве аргументов ask
//   ask("Вы согласны?", showOk, showCancel);


// let age = prompt ('how old are you ? ')

// if (age < 18) {
//     function welcome () {
//         console.log("Barev pujur");
//     }
// } else {
//     function welcome() {
//         console.log("barev dzez");
//     }
// }

// welcome()

// function isAdult(age, callback) {
//     const boolValue = age >= 18;
//     return callback(boolValue);
// };


// function limit(bool) {
//     if (bool === true) {
//         console.log("es chapahas em")
//     }else {
//         console.log("anchpaahas em ")
//     }
// }

// isAdult(17,limit)


// function odd_even(callback) {
//     let num = prompt("enter a number")
//     return callback(num)
// }

// let parz = function(num) {
//     if(num % 2 === 0) {
//         console.log("even")
//     } else {
//         console.log("odd")
//     }
// }

// odd_even(parz)


// function factorial(num) {
//     if(num <= 1) {
//         return  1;
//     }
//     return num * factorial(num-1)
// }

// console.log(factorial(10))



// function forEach(arr,func) {
//     for(let i = 0;i < arr.length;i++){
//         func(arr[i],i)
//     }
// }


// function forEach(arr,func) {
//     function loop (i){
//         if (i >= arr.length){
//             return;
//         }
//         func(arr[i],i)
//          loop(i + 1);
//     }
//     loop(0);
// }   



// forEach([5,4,1,3],function(val,i){
//     console.log(val + " at index " + i)
// })



// function pow(x,y) {
//     if(y === 0){
//         return 1;
//     }
//     return  x * pow (x,y-1);
// }   

// console.log(pow(5,8))


// function sum(arr) {
//     return arr.reduce(function(aggr,val){
//         if(Array.isArray(val)){
//             return aggr + sum(val);
//         }
//         return aggr + val 
//     },0)
// }

// console.log(sum([1,2,3,[134,1],[4,2,4,1,5,1],[67]]))




// let double = n => n * 2;

// console.log(double(3))


// let age = prompt("how old are you")

// let welcome = (age < 18 ) ?
// () => console.log("barev"):
// () => console.log("barev dzez");


// welcome()



// const data  = {

//     greet2: () => {
//         console.log(this)
//         console.log(this.name)
//     },

//     greet: function () {
//         console.log(this)
//         console.log(this.name)
//     },
//     name: "joe",
// }

// data.greet2()
// data.greet()



// function pow(x, n) {
//     let result = 1;
//     //              <--
//     for (let i = 0; i < n; i++) {
//       result *= x;
//     }
//     //              <--
//     return result;
//   }

// console.log(pow(2,5))



// function pow(x,n) {
//     if(n < 0 ) {
//         console.log("N-y chi krna bacasakan tiv exni")
//     } else {
//         let result = 1;

//         for(let i = 0; i < n; i++) {
//             result *= x
//         }

//         return result
//     }
// }

// console.log(pow(2,4))


// const a = [1,2,3]

// a[1] = 4

// console.log(a)

// let user = {
//     name: "John",
//     age: 30
//   };
  


//   let key = prompt("Что вы хотите узнать о пользователе?");
//   alert( user[key] );




// let user = {
//     name: "john"
// }

// function isEmpty(obj) {
//     for (let key in obj) {
//         return false;
//         }

//  return true;
// }
// console.log(isEmpty(user))


// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
// }

// let sum = 0
// for (let key in salaries) {
//     sum += salaries[key];
// }

// console.log(sum)



// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

  

//   function multiply(obj) {
//     for(let key in obj) {
//         if(typeof obj[key] == 'number') {
//             obj[key] *= 2
//         }
//     } return obj
//   } 

// console.log(multiply(menu))

// let user = {
//     name: "john"
// }

// let admin = user

// console.log(admin)



// let user = {
//     name: 'john',
//     age: 30,
// };

// user.sayHi = function(){
//     console.log("barev")
// }

// user.sayHi()


// const vowels = ['a','e','i','o','u']

// function vowelsCount(arr) {
//     let max = 0;
//     let str = '';
//     for(let item of arr){
        
//         let currVowel = 0;
//         for(char of item) {
          
//             if(vowels.includes(char.toLowerCase())) {
//                 currVowel += 1
//             }
//         }
//         if(currVowel > max) {
//             max = currVowel;
//             str = item;
//         }
//     }
//     return str;
// }

// console.log(vowelsCount(['hellloo','gooooddd']))


// let x = 5;

// do {
//     console.log(x++)

// } while(x > 5 && x <10)


