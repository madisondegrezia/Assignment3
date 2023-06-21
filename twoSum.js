function twoSum(arr, target) {
  // checks if the array has 1 item in it or less
  if (arr.length <= 1) {
    throw "error";
  } else {
    // traverses through the array
    for (let i = 0; i < arr.length; i++) {
      for (let j = 0; j < arr.length; j++) {
        // if the values at the two indices add up to the target, return the indices
        if (arr[i] + arr[j] === target) {
          return [i, j];
        }
      }
    }
  }
}

module.exports = twoSum;
