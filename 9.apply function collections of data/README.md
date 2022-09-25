### Map
: creates a new array populated with the results of calling a provided function on every element in the calling array.


example
const array1 = [1, 4, 9, 16];
const map1 = array1.map(x => x * 2);

console.log(map1);
// expected output: Array [2, 8, 18, 32]


### Arrow function 
:fast and concise way to write a function
example:
(param) => {
  const a = 1;
  return a + param;
}

### Array.find()
:The find() method returns the first element in the provided array that satisfies the provided testing function.


### Filter
:method creates a shallow copy of a portion of a given array, filtered down to just the elements from the given array that pass the test implemented by the provided function.

example:
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);
// expected output: Array ["exuberant", "destruction", "present"]



### Some and Every
:every() method is used to check whether all the elements of the array satisfy the given condition or not. The Array. some() method is used to check whether at least one of the elements of the array satisfies the given condition or not.


###  Reduce
:executes a reducer function on each element of the array resulting in a single value.
