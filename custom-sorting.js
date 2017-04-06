var array = ["John", "Bob", "Alice", "Mary"];
array.sort();
console.log(array);

var array = [5, 2, 1, 3, 4];
array.sort();
console.log(array);

var array = [10, 2, 5, 1, 9];
array.sort();
console.log(array);


var array = [10, 2, 5, 1, 9];
array.sort(function(a, b){
  return a - b;
});
console.log(array);


///If compareFunction(a, b) is less than 0, sort a to a lower index than b,
// i.e. a comes first.
///If compareFunction(a, b) returns 0, leave a and b unchanged with respect
//to each other, but sorted with respect to all different elements. Note: the ECMAscript standard does not guarantee this behaviour, and thus not all browsers (e.g. Mozilla versions dating back to at least 2003) respect this.
///If compareFunction(a, b) is greater than 0, sort b to a lower index than a.
///compareFunction(a, b) must always return the same value when given a specific pair of elements a and b as its two arguments. If inconsistent results are returned then the sort order is undefined.
