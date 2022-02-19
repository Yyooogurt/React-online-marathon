//Task 1
function getModifiedArray(array) {
    const newArray = [...array];
    newArray.splice(0, 1, "Start");
    newArray.splice(-1, 1, "End");
    return newArray;  
}
//Task 2
function combineArray(arr1, arr2) {
    return arr1.concat(arr2).filter(Number.isFinite);
 }
//Task 3
function longestLogin(loginList) {
    return loginList.reduce( function(word, longest){
        if(word.length > longest.length) return word
        else return longest
       },'');
   }

   function longestLogin(loginList) {
    
    let result = loginList.reduce( function(word, longest){
        return word.length > longest.length
             ? word
             : longest;
   },'');
    console.log(result);
   }
//Task 4
function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
 }
 function processArray(arr, factorial) {
     return arr.map( function doubleNumber(item) {
     return factorial(item);
   });
 }
//Task 5
function checkAdult(age) {
	// your code
	try {
		if (!age) {
			throw new Error("Please, enter your age");
		} else if (age < 0) {
			throw new Error("Please, enter positive number");
		} else if (typeof age != 'number') {
			throw new Error("Please, enter number");
		} else if (!Number.isInteger(age)) {
			throw new Error("Please, enter Integer number");
		} else if (age < 18) {
			throw new Error("Access denied - you are too young!");
		} else console.log("Access allowed");
	} catch (error) {
		console.log(`${error.name} ${error.message}`);
	} finally {
		console.log("Age verification complete");
	}
}
