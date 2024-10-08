function getIntersection(arr1,arr2){
  const newArr= arr1.filter(it=>it.includes(arr2));
  return [...new Set(newArr)];
}
/*

function getIntersection(arr1, arr2) {
  // your code here
  const newArr = arr1.filter(it => arr2.includes(it));
  return [...new Set(newArr)];
} 
The getIntersection function finds the common elements between two arrays, arr1 and arr2. Here's a breakdown of how it works:

Filtering: The filter method is applied to arr1. For each element (it) in arr1, it checks if that element is included in arr2 using the includes method. This creates a new array (newArr) that contains only the elements found in both arr1 and arr2.

Removing Duplicates: The new Set(newArr) creates a Set from newArr. A Set automatically removes any duplicate values, so if there are any repeated elements in the intersection, they will only appear once.

Returning an Array: Finally, the spread operator (...) converts the Set back into an array, which is returned as the result of the function.

*/
