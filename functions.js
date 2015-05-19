/*
 * PROBLEM `checkData`: (easy)
 * Write a function that takes a string and checks to make sure that the string
 * has a length of exactly three. Return true if the string length is three or
 * false if it is not three.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function checkData(inputString) {
	// your code goes here
	if(typeof inputString !== 'string'){

		throw 'Invalid Input';
	}

	if (inputString.length === 3) {

		return true;
	}
	else{

		return false;
	}
}

checkData('aba');

/*
 * PROBLEM `concatenateArrays`: (easy)
 * Write a function that, given two arrays of integers a and b, returns an array
 * that is formed by the elements of a followed by the elements of b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function concatenateArrays(a, b) {

	// your code goes here


	if(a === null || b === null){//checks if variables are null
	 	throw 'Invalid Input';
	}
	// checks if variable is an array and checks the values of the array
	 else if(Array.isArray(a) && Array.isArray(b)){

		checkVals(a);
		checkVals(b);
		//returns new array after all tests
		var newArray = a.concat(b);
			//console.log(newArray);
			return newArray;
	 } 
	 else{
	 	throw 'Invalid Input';
	 }

	//checks if values are integers and not decimals
	function checkVals(array){
		for(var i = 0; i < array.length; i++){

			if(typeof array[i] !== 'number'){

				throw 'Invalid Input';
			}
			if(array[i] % 1 !== 0){
				throw 'Invalid Input';
			}
		}
			
	}

	
}

var arrayA = [1,2,3,4,5];
var arrayC = [true];
var arrayB = [6,7,8,9,10];

concatenateArrays(arrayA, arrayB);



/*
 * PROBLEM `fixProperNoun`: (easy)
 * Proper nouns always begin with a capital letter, followed by small letters.
 * Write a function called `fixProperNoun` that takes a potentially improperly
 * capitalized proper noun and returns the same noun with the proper
 * capitalization.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function fixProperNoun(noun) {



	// your code goes here

	var string2;
	var string3;
	//checks var is a string, not empty, and is not a whitespace
	if(typeof noun !== 'string' || noun === ' ' || noun.length === 0){

		throw 'Invalid Input';
	}
	//splits string into an array
	var string = noun.split('');

	//changes all letters in array into lowercase
	for(var i = 0; i< string.length; i++){

		if(string[i] === string[i].toUpperCase()){

			var lowCase = string[i].toLowerCase();
			string[i] = lowCase;
		}
	}

	//
	for(var i = 0; i < string.length; i ++){

		if(i === 0){

			var capLetter = string[i].toUpperCase();

			string[i] = capLetter;
			//puts elements into one string
			string2 = string.join();
			//removes commas from string
			string3 = string2.replace( /,/g, "" );
		}
		
	}return string3;

	
}

var name = 'Ramona';
fixProperNoun(name);

/*
 * PROBLEM `sortLetters`: (easy)
 * Write a function called `sortLetters` that returns a string that sorts all 
 * the letters from a given string in the alphabetical order.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function sortLetters(inputString) {
	// your code goes here

	if(typeof inputString !== 'string'){

		throw 'Invalid Input';
	}
	//splits string into an array
	var newString = inputString.split('');
	//sorts array
	newString.sort();
	//joins elements in array and returns a string
	var finalString = newString.join();
	finalString = finalString.replace(/,/g,'');
	//console.log(finalString);
	return finalString;

}
var array = 'the quick brown fox jumps over the lazy dog';

sortLetters(array);

/*
 * PROBLEM `absVal`: (easy)
 * Write a function called `absVal` that return the absolute value of a given 
 * integer. Don't use Math.abs(...)
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */
function absVal(integer) {
	// your code goes here
	//checks if integer is a number, not a decimal, and does not equal to false
	if(typeof integer !== 'number' || integer === false || integer %1  !== 0  ){
		throw 'Invalid Input';
	}

	if(integer >= 0){

		return integer;
	}else if (integer < 0 ){

		return (integer * -1);
	}

}

absVal(7);

/*
 * PROBLEM `myMin`: (easy)
 * Write a function called `myMin` that takes two integers and returns the
 * smaller of the two numbers.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function myMin(a, b){
 	//checks if integer is a number, not a decimal, not NaN and does not equal a false val
 	checkNum(a);
 	checkNum(b);
	function checkNum(num){
 			if(typeof num !== 'number' || num === 'false' || Number.isNaN(num) || num % 1 !== 0){
 				throw 'Invalid Input';
 			}
 	}
 		if(a < b){

 			return a;

 		}else if( b < a ){

 			return b;

 		}else if (a === b){

 			return a;
 		}
 }
myMin(2, 3);

/*
 * PROBLEM `myMax`: (easy) - Actual Interview Question
 * Write a function called `myMax` that takes an array of integers and returns
 * the largest.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without using a for loop.
 */

 function myMax (array){

 	var max = 0;
 	checkVal(array);
 	function checkVal(array){

	 	if(array === null){
	 		throw 'Invalid Input';
	 	}else if(Array.isArray(array)){
			
			for(var i = 0; i < array.length; i++){
				
				if(typeof array[i] !== 'number' || array[i] % 1 !== 0){
	 				throw 'Invalid Input';
	 			}
	 		}
		}else{
		 	throw 'Invalid Input';
		}
	}

 	for(var i = 0; i < array.length; i++){
	
		if(array[i] > max ){

 			max = array[i];
 		}

 	}return max;

 }

 array = [2,3,6];

myMax(array);
/*
 * PROBLEM `getMonth`: (easy)
 * Write a function called `getMonth` that maps a given integer to a month.
 *
 * For example:
 * getMonth(1) == 'January'
 * getMonth(3) == 'March'
 * etc.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

function getMonth(num){

	var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

	if(typeof num !== 'number' || num === 'false' || Number.isNaN(num) || num % 1 !== 0){
		throw 'Invalid Input';

	}else if(num < 1 || num > 12){

		throw 'Invalid Input';
	}
	//console.log(months[num - 1]);
	return months[num - 1];
}

number = 5;

getMonth(number);
/*
 * PROBLEM `randomElement`: (medium)
 * Create a function called `randomElement` that takes an array of values and
 * returns one randomly selected value from that array.
 */

 function randomElement(array){

 	if(array === null){
		
		return 0

 	}else if(Array.isArray(array)){

 		var rand = Math.floor(Math.random()* array.length);
 		//console.log(array[rand]);
 		return array[rand];
 	}else{

 		throw 'Invalid Input';

 	}

 }

array = [1,2, 'b']
randomElement([]);
/*
 * PROBLEM `studentPairs`: (medium)
 * Create a javascript function called `studentPairs` that takes an array of
 * student names and returns an array of randomly selected pairs of students
 * (array of arrays).
 */

 function studentPairs(array){

 	var newArray = [];
 	var pairs = [];
 	var i = 0;
		
 		//shuffles the array: starts the array at the last position and decreases value
 		for(var i = array.length -1; i > 0; i--){
 			//chooses random number between 0 and 5
 			var rand = Math.floor(Math.random()* (i+1));
 			//console.log(rand);
 			//gets the value of the random position
 			var temp = array[rand];
 			//swap the value of random position with the value of i
 			array[rand] = array[i];
 			array[i] = temp;
 		}

 		//console.log(array);
 		//array.splice(i, 1);
 		for(var i = 0; i < array.length; i++){
 				//takes the first two names and puts them into an array
 				pairs = [];
 				pairs [i] = array [i ];
 				pairs [i + 1] = array [i + 1];
 				//removes the names from the array
 				array.splice(1, 1);
 				//adds pair to a new array
 				newArray [i] = pairs;			
 		}
 		//console.log(newArray);
 		return newArray;
 }

var array = ['jay', 'john', 'sam', 'sara', 'jim', 'bob'];
 studentPairs(array);

/*
 * PROBLEM `sumSquares`: (medium)
 * Write a function called `sumSquares` that returns the sum of squares of all
 * integers from 1 up to and including a given positive, non-zero integer N.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function sumSquares(num){

 	var sum = 0;

 	if(typeof num !== 'number' || num === 'false' || num % 1 !== 0){
		
		throw 'Invalid Input';

	}else{

		for(var i = 1; i <= num; i++){
	
			sum = (i*i) + sum;			
		}
		return sum;
	}

 }

var num = 1;
 sumSquares(num);

/* 
 * PROBLEM `findMaxDiff`: (medium)
 * Given an array of integers, write a function called `findMaxDiff` that finds
 * the maximal difference between any two adjacent elements.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function findMaxDiff(array){

 	var max = 0;
 	var dif = 0;
 	checkVal(array);
 	function checkVal(array){

 	
	 	if(array === null){
	 		throw 'Invalid Input';
	 	}
	 	else if(Array.isArray(array)){

	 		if(array.length < 1){
 				
 				return 0;
 			}	
			for(var i = 0; i < array.length; i++){
				
				if(typeof array[i] !== 'number' || array[i] % 1 !== 0){
	 				throw 'Invalid Input';
	 			}
	 		}
		}
			else{
		 		throw 'Invalid Input';
		}
	}

	for(var i =0; i < array.length; i++){
		//subtracts values
		dif = array[i] - array[i +1];
		//checks value is negative and then converts it to positive
		if(dif < 0){
			dif = dif* -1;
		}//compares dif value to the max value and returns biggest number
		 if(dif > max){
			max = dif;
		}
	}return max;
 }

 var array = [1,2,3,4];

 findMaxDiff([3,7]);


/*
 * PROBLEM `insertDashes`: (medium)
 * Write a function called `insertDashes` that transforms a given sentence into
 * a new one with dashes between each two consecutive letters.
 * For example: insertDashes('abba test') => a-b-b-a t-e-s-t
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function insertDashes(string){

 	var newString;
 	var newArray;
 	var finalArray = [];
 	var finalString;

 	//checks validation
 	if(string === null){
	 		
	 		throw 'Invalid Input';
	 	}
	else if(typeof string === 'string'){

		newArray = string.split('');
		dash(newArray);				
 	}else{

 		throw 'Invalid Input';
 	}
 	//adds dash
  	function dash(newArray){

 		for(var i = 0 ; i < newArray.length; i++){
 			//checks if there is space or characters
 			 if(newArray[i] !== ' ' && newArray[i+ 1] !== ' ' ){
 				//adds character and dash to new array
 				finalArray.push(newArray[i]);
	 			finalArray.push(['-']);	 			
	 		}
	 		else {
	 			
	 			finalArray.push(newArray[i]);
	 		}
	 	}	
 	}//removes the extra dash	
 	finalArray.pop();
 	//converts string to array
	finalString = finalArray.join();
 	finalString = finalString.replace(/,/g,'');	 	
 	return finalString;
 }



var string = '123'
 insertDashes('1 23');
 // console.log('funct ' +insertDashes('aaa no'));

/* 
 * PROBLEM `mySubstring`mySubstring: (medium)
 * Implement a function called `mySubstring` that can output the substring of 
 * the given string within specified bounds.
 * 
 * For example: mySubstring('abcde', 2, 3) === 'cd'
 * 
 * Don't use String.substring in your solution.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function mySubstring(string, a, b){

 	checkString(string);
 	
 	checkNum(b);
    checkNum(a);
 	var newArray;
 	var finalArray = [];
 	var finalString;

 	//creates substring
 	for(var i = a; i < newArray.length; i++){

 		if( i >= a && i <= b){
 			
 			finalArray[i] = newArray[i];
 				//console.log(i)
 		}
 		
 	}//converts array to string
 	finalString = finalArray.join();
 	finalString = finalString.replace(/,/g,'');
 	//console.log(finalString)
 	return finalString;

 	//validates string
 	function checkString(string){
		if( typeof string !== 'string'){
 			
 			throw 'Invalid Input';
		}else{

			newArray = string.split('');
		}
 	}//validates number
 	function checkNum(num){
		if(typeof num !== 'number' || num === 'false' || num % 1 !== 0){
			
			throw 'Invalid Input';
		}else if(num > string.length){

			throw 'Invalid Input';
		}
 	}	
}


 mySubstring('abcde', 2, 3 );

/*
 * PROBLEM `splitSwap`: (medium)
 * Write a function called `splitSwap` that swaps two halves of a given array.
 * If the array has an odd number of elements the array should be split in half
 * by rounding down the number of elements divided by two.
 * 
 * For example: splitSwap([1,2,3,4,5]) === [3,4,5,1,2]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function splitSwap(array){
 	// console.log('orig ' + array);
 	//validates array
 	var half;
 	var newArray= [];
 	var newArray2 = [];
 	var finalArray = [];
 	checkVal(array);
 	function checkVal(array){

 	
	 	if(array === false){
	 		throw 'Invalid Input';
	 	}
	 	else if(Array.isArray(array)){

	 		if(array.length === 0){
	 			//console.log('orig ' + true);
	 			// throw 'Invalid Input';
	 		}

	 		half = array.length/2;
	 		//console.log(half);
	 		if(half %2 != 0){

	 			half = Math.floor(half);
	 		}
	 	
	 		// console.log('half ' + half);
	 		// console.log(array);
	 		// console.log('array.length ' +array.length)
	 		//puts the second half of the array in newArray
	 		for(var i = 0; i < array.length; i++){
			//console.log('array[i] '+array[i])
				if(i >= half){
			 		newArray.push(array[i]);
				}
	 			
	 		}//puts the first half of the array in newArray2
	 		for(var i = 0; i < array.length; i++){

	 			if(i < half){

	 				newArray2[i] = array[i];
	 			}
	 		}
	 		// console.log('array ' +newArray);
	 		//joins both arrays into a new array
	 		finalArray = newArray.concat(newArray2);

	 		// console.log('final ' +finalArray);
	 		return finalArray;
	 		
		}
		else{
		 	throw 'Invalid Input';
		}
	}



 }

 splitSwap([]);

/*
 * PROBLEM `smallMultiples`: (medium)
 * For given n and k write a function called `smallMultiples` that returns the
 * count of the number of multiples of k that are not greater than n.
 *
 * For example smallMultiples(4, 1) === 3 because 1*2, 1*3 and 1*4 are not
 * greater than 4.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

 function smallMultiples(n, k){

checkNum(n);
checkNum(k);
var sum = 0;
var count = 0;
 	function checkNum(num){
		if(typeof num !== 'number' || num === 'false' || Number.isNaN(num)){
			
			throw 'Invalid Input';
		}

 	}

 	for(var i = 1; i < k; i++){

 		sum = i* k;
 			// console.log(i +' x ' + k +' = '+sum)
 		if( sum < n)
 		{

 			//console.log('i*n '+i*n);
 			count ++;
 		}

 		
 	}
 		// console.log('count ' + count);
 		return count
 }

 smallMultiples(13, 7);

/* 
 * PROBLEM `rot13`: (hard)
 * Create a function called `rot13` that takes an unencrypted string and returns
 * the [ROT-13](http://en.wikipedia.org/wiki/ROT13) version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `derot13`: (hard)
 * Create a function called `derot13` that takes a ROT-13 encrypted string and
 * returns the decrypted version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `rotn`: (hard)
 * Create a function called `rotn` that takes an unencrypted string and an
 * integer (n) and returns the ROT-N version of that string.
 *
 * The input should only contain lower-case alphabetic characters. If the input
 * is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `findBoth`: (hard)
 * Write a function called `findBoth` that takes two arrays of integers a and b 
 * returns an array that includes only the elements that appear in both a and b.
 * A value should not appear more than once in the returned array.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `countBoth`: (hard)
 * Write a function called `countBoth` that takes two arrays of integers a and 
 * b. The function should return the number of elements that exist in both a and
 * b.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `isDiagonalMatrix`: (hard)
 * In linear algebra, a square matrix (array of arrays) is called a diagonal 
 * matrix if all entries outside the main diagonal are zero (the diagonal from 
 * the upper left to the lower right).
 * For example:
 * [
 *   [1, 0, 0],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is a diagonal matrix.
 *
 * [
 *   [1, 0, 2],
 *   [0, 2, 0],
 *   [0, 0, 3]
 * ]
 * is not a diagonal matrix.
 *
 * [
 *   [1, 0, 0],
 *   [0, 2, 0]
 * ]
 * is not a diagonal matrix.
 *
 * Write a function called `isDiagonalMatrix` that takes a matrix and returns
 * true if the matrix is a diagonal matrix. Otherwise return false.
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `isAnagram`: (hard) - Actual Interview Question
 * An anagram is a type of word play, the result of rearranging the letters of a
 * word or phrase to produce a new word or phrase, using all the original
 * letters exactly once.
 *
 * Write a function called `isAnagram` that takes two arrays of strings of equal 
 * lengths arr1 and arr2. The function should return a new array of the same 
 * length as the input with boolean values at each position i. The boolean value
 * at position i of the result array should be true if the strings at position i
 * in arr1 and arr2 are anagrams of each other. Otherwise the boolean at
 * position i of the result array should be false.
 *
 * For example:
 * isAnagram(
 * 		['cinema', 'shot', 'aba', 'rain'],
 * 		['iceman', 'hots', 'bab', 'train']
 * ) === [true, true, false, false];
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/*
 * PROBLEM `validateParentheses`: (hard) - Actual Interview Question
 * Write a function called `validateParentheses` that takes a string of
 * parentheses. The string can contain the following characters repeated any
 * number of times in any order: ()[]{}
 *
 * The function should return true if the parentheses are in a valid order and
 * false if they are not. One type of parentheses cannot close before it has
 * been opened and one type of parentheses cannot be closed while a different
 * type of parentheses is open. All parentheses that are opened must also be
 * closed.
 *
 * For example:
 * validateParentheses(']') === false;
 * validateParentheses('[') === false;
 * validateParentheses('[]') === true;
 * validateParentheses('{[]}') === true;
 * validateParentheses('([)]') === false;
 * validateParentheses('{[(){()}]}') === true;
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 */

/* 
 * PROBLEM `flattenArray`: (hard) - Actual Interview Question
 * Write a function called flattenArray that takes an array of any type of
 * element, and flattens it, such that any element in the given array that is an
 * array is converted to a list of non-arrays. For example:
 *
 * flattenArray([1, {a: [2, 3]}, 4, [5, [6]], [[7], 8, 9], 10])
 * === [1, {a: [2, 3]}, 4, 5, 6, 7, 8, 9, 10]
 *
 * If the input is invalid throw an 'Invalid Input' exception.
 *
 * Insane mode: do this without recursion.
 */



