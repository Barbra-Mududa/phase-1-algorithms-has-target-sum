function hasTargetSum(array, target) {
  // Write your algorithm here
  
  if (array.length < 2) {
    return false
  }
  for (let index = 0; index < array.length - 1; index++) {
     for (let int = index + 1; int < array.length; int++) {
      let sum = array[indexOne] + array[int];
      if (sum === target) {
        return true;
      }
    }
  }
  return false
}

/* 
  Write the Big O time complexity of your function here
*/
//nested loop
// Quadratic time 0(n²)
/* 
  Add your pseudocode here
*/
// iterate over array of numbers
//if number selected gives desired value return true
/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
