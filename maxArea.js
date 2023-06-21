function maxArea(arr) {
  // intitialize variable to store the max area
  let area = 0;

  // traverse through the array
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      // calculate the area and update the area if there is one that is greater
      area = Math.max(area, Math.min(arr[j], arr[i]) * (j - i));
    }
  }
  // return the max area calculated
  return area;
}

module.exports = maxArea;
