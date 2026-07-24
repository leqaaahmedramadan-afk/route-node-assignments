// Name: leqaa Ahmed   4-7pm //
//part1://
//1-//
let  x =  Number("123") ;
console.log(x+7);
//2-//
function checkfalsy(y){
if (!y ){
return "invalid";
     
} }
console.log(checkfalsy(NaN));
//3-//
for (let i = 1; i <= 10; i++) {
    if (!(i %2==0)){
      console.log(i); 

}}
  
//4-//
  let numbers = [1,2,3,4,5];
 let even = numbers.filter(num => num %2==0);
console.log(even);
//5-//
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let arr3 = [...arr1,...arr2];
console.log(arr3);
//6-//
let day = 2;
switch (day) {
    case 1:
      console.log("Sunday");
        
        break;
 case 2:
      console.log("Monday");
        
        break;
    case 3:
      console.log("Tuesday");
        
        break;
 case 4:
      console.log("Wednesday");
              break;

    case 5:
      console.log("Thursday");
        
        break;
    case 6:
      console.log("Friday");
        
        break;
 case 7:
      console.log("Saturday");    
        break;
        
}
//7-//
 let arr7= ["a", "ab", "abc"]
 let answer = arr7.map(len => len.length );
console.log(answer);
//8-//
function div(num8) {
    if ((num8%3==0 )&&(num8%5==0)) {
           return "Divisible by both";            }    
          }
      
      console.log(div(15));
      //9-//
      const square = (a) => {
    return a*a;
};
      console.log(square(5));
      //10-//
      const person = {
        name: 'John',
         age: 25} ;
       const string10 = ({name,age}) => {
    return name +"is"+age+" years old";
};   
      console.log(string10(person));
            
  //11-//
   function sum(...numbers11) {
    let total = 0
    for ( let i = 0; i< numbers11.length;i++    ) {
         total += numbers11[i] }
         return total
        
    }
    console.log(sum(1,2,3,4,5));
//12-//

   const wait3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("Success");
    }, 3000);
});

wait3.then((result) => {
    console.log(result);
});
//13 -//
function largestnum(...numbers13) {
    let maxnum = numbers13[0];
    for (let i = 1; i < numbers13.length; i++) {
        if (numbers13[i] > maxnum) {
            maxnum = numbers13[i];
        }
    }
    return maxnum;
}
console.log(largestnum(1, 3, 7, 2, 4));
//14-//
 const obj = {
  name: "John",
  age : 30,
 }
function obj14(obj) {
  
    return Object.keys(obj);
}

console.log(obj14(obj));
//15-//
const string15 = "The quick brown fox"
function split15(string15) {
  return  string15.split (" ")
    
}
console.log(split15(string15));








    //part2://
/*1- forEach is a method in array that runs a function on every element 
for...of is a type of loop.

JavaScript moves declarations to the top of scope
var gives undefined.
let and const give an error because of TDZ.
 They are known but we cannot use them before declaration.

3- == compares only the value. If the type is different, it converts automatically.
=== compares the value and the type and it does not convert.

4- try-catch is used in Promise. If there is an error, it executes what is inside catch.

5- Type Conversion means we convert by ourselves like Number().
Type Coercion means it converts automatically by itself, like operations. In addition, 
if there is a number with a text, it converts automatically.*/
