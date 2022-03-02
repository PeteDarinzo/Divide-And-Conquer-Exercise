function findRotatedIndex(arr, val) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    let middleVal = arr[middle];
    let leftVal = arr[left];
    let rightVal = arr[right];
    if (middleVal === val) {
      return middle;
    } else if ((leftVal > val) && (val < middleVal)) {
      left = middle + 1;
    } else if ((leftVal > val) && (val > middleVal)) {
      left = middle + 1;
    } else if ((leftVal < val) && (val > middleVal)) {
      left = middle + 1;
    } else if ((leftVal < val) && (val < middleVal)) {
      right = middle - 1;
    } else if ((leftVal === val)) {
      return left;
    } else if ((rightVal === val)) {
      return right;
    }
  }
  return - 1;
}

module.exports = findRotatedIndex