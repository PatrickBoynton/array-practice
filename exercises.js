// ---------------------
// Define a function that takes a string and an integer of i and creates a new array of length i where each value is equal to the string passed in
// myFunction('sunshine', 3) => ['sunshine', 'sunshine', 'sunshine'];
// ---------------------

// Put your answer below -------------------------

function buildArray(str, i) {
  const newArray = [];
  for (var j = 0; j <= i; j++) {
    test.push(str);
  }

  return newArray;
}








// -----------------------------------------------

// ---------------------
// Define a function that takes an array and reverses all the values in an array
// The function should not mutate the original array
// ---------------------

// Put your answer below -------------------------
function reverseArray(array) {
  return array.slice().reverse();
}









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes all falsy values from the array
// ---------------------

// Put your answer below -------------------------

function falsyRemover(arr) {
  // Found on SO. Filters out any truthy items.
  falsy = arr.filter(item => item);

  return falsy;
}







// -----------------------------------------------

// ---------------------
// Define a function that takes an array of nested arrays and returns an object composed of propeties equal to each nested array
// const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];
// returns { name: 'Charlie', color: 'brown', age: 10 };
// ---------------------

// Put your answer below -------------------------
const myArray = [['name', 'Charlie'], ['color', 'brown'], ['age', 10]];

function convertArray(myArray) {
  const dict = {};

  for (var i = 0; i < myArray.length; i++) {
    // Array[i] is the individual nested array.
    // Array[i][0], is the property name. Array[i][1] is the value.
    // In each array there are only two elements, so no need for a loop.
    //  Got this by realizing this was kind of a matrix (multi dimensional array)
    dict[myArray[i][0]] =  myArray[i][1];
  }

  console.log(dict);

  return dict;
}









// -----------------------------------------------

// ---------------------
// Define a function that takes an array and removes duplicate values
// [1,2,3,4,5,4,3] should return [1,2,3,4,5]
// ---------------------

// Put your answer below -------------------------
function removeDuplicates(arr) {
  // Iterates over the array passed in, then kicks out any that aren't unique.
  // If index is equal to the item they exist already.
  // Found an example on SO.
  return arr.filter((item, index) => arr.indexOf(item) === index);
}



// -----------------------------------------------

// ---------------------
// Define a function that takes two arrays and returns true if they have identical values (order does not matter), it should return false otherwise
// [1,2,3,4] and [1,2,3,4] should return true
// [1,2,3,4,5] and [1,2,3,4] should return false
// [1,2,3,4] and [1,2,3,4,4] should return false
// [1,2,3,4] and [1,4,3,2] should return true
// ---------------------

// Put your answer below -------------------------
const array1 = [1, 2, 3, 4, 7, 5, 3];
const array2 = [2, 3, 4, 1, 5, 7, 7];

function ArrayChecker(arr1, arr2) {
  arr1.sort();
  arr2.sort();
  if (arr1.length !== arr2.length) {
    return false;
  }
  //  Found several examples of this, this checks each arr2 index,
  // against arr1s value. Played around and this works on different sizes.
  //  and even if one array is empty and the other is not. There is also a some.

  return arr1.every((value, index) => value === arr2[index]);
}


console.log(ArrayChecker(array1, array2));










// -----------------------------------------------

//////////////////////////////////////////////////
//////////////////////////////////////////////////
//            ___  ____  _  ____  ______        //
//           / _ )/ __ \/ |/ / / / / __/        //
//          / _  / /_/ /    / /_/ /\ \          //
//         /____/\____/_/|_/\____/___/          //
//                                              //
//////////////////////////////////////////////////
//////////////////////////////////////////////////

// ---------------------
// Define a function that takes an array and returns a new array with all sub-array elements concatenated into it
// [0, 1, 2, [3, 4]] should return [0, 1, 2, 3, 4]
// [0, 1, 2, [[[3, 4]]]] should return [0, 1, 2, 3, 4]
// DO NOT USE Array.prototype.flat()
// ---------------------

// Put your answer below -------------------------










// -----------------------------------------------
