
//Task 1
// const filterNums = (arr, number , string) => {
//     return arr.filter(function(item, arr) {
//         switch (string) {
//             case 'greater': return item > number;
//             case 'less': return item < number;
//             case undefined : 
//                 if(number === undefined){
//                     return item > 0;
//                 }else if (item > 0){
//                     return item > number;
//                 }
//             break;
//             default:
//                 console.log('Default');
//           }
//     });
// };

// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 11, 'greater'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 5, 'less'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], -30, 'less'));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5]));
// console.log(filterNums([-3, 3, 4, 0, 44, -11, 5], 9));

//Task 2
// const howMuchSec = (sec = 0, min = 0, hour = 0, day = 0, week = 0, months = 0, years = 0 ) => {
//     return sec + (min * 60) + (hour *  3600 ) + (day * 24 * 3600) + (week * 168 * 3600) + (months * 720 * 3600) + (years * 8640 * 3600);
// }
// console.log(howMuchSec(12, 3));
// console.log(howMuchSec(1, 33, 22));
// console.log(howMuchSec());
// console.log(howMuchSec(12, 3, 3, 3));
// console.log(howMuchSec(33, 33, 11));
// console.log(howMuchSec(12, 3));

//Task 3
    
const maxInterv = (...arr) => {
    let newArr = [];
    for (let i = 1; i < arr.length; i++) {
        newArr.push(arr[i] - arr[i - 1]);
      }
    for (let i = 0; i < arr.length-1; i++) {
        newArr.push(arr[i] - arr[i + 1]);
      }
     if(newArr.length > 0){
        return Math.max(...newArr);  
     }else{
        return 0;
     } 
}

console.log(maxInterv(3, 5, 2, 7));//5
console.log(maxInterv(3, 5, 2, 7, 11, 0, -2))//11
console.log(maxInterv(3, 5))//2
console.log(maxInterv(3));//0
console.log(maxInterv(3, 5, 2, 8));//6
console.log(maxInterv(3, 5, 2, 37, 11, 0, -2))//35
console.log(maxInterv(8));//0


//Task 4
// const sumOfLen = (...string) => {
//     return string.join('').length;
// }

// console.log(sumOfLen('hello', 'hi')); //7
// console.log(sumOfLen('hi')); //2
// console.log(sumOfLen()); //0
// console.log(sumOfLen('hello', 'hi', 'my name', 'is')); //16

//Task 5

// negate = function(x){ return -x; };
// halve = function(x){ return x / 2; };
// square = function(x){ return x * x; };
// double = function(x){ return 2 * x; };

// // const combineFunctions = (negate, halve, square) => {
// //     return square(halve(negate(x)));
// //     };

// const combineFunctions = compose(g, h, i);
// // combineFunctions(negate, halve, square) should return a function
// // square(halve(negate(x)))
// // combineFunctions(negate, double) should return a function
// // double(negate(x)))
// console.log(combineFunctions(x => x + 5)(3)); //8
