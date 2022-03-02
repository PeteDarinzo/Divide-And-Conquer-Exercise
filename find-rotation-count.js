
/** COPIED FROM SPRINGBOARD SOLUTION */

function findRotationCount(arr, leftIdx = 0, rightIdx = arr.length - 1) {

  if (rightIdx < leftIdx) return 0; // if the beginning of the array is reached, there is no rotation
  if (rightIdx === leftIdx) return leftIdx;
  let midIdx = Math.floor((leftIdx + rightIdx) / 2);

  // if the next sequential value is lower than the current, that index is the rotation count
  if (midIdx < rightIdx && arr[midIdx + 1] < arr[midIdx]) {
    return midIdx + 1
  }

  // if the previous value is higher than the current, the current index is the rotation count
  if (midIdx > leftIdx && arr[midIdx] < arr[midIdx - 1]) {
    return midIdx;
  }

  // if the value to the right is higher than the mid, continue searching the left half of the array
  if (arr[rightIdx] > arr[midIdx]) {
    return findRotationCount(arr, leftIdx, midIdx - 1);
  }
  
  return findRotationCount(arr, midIdx + 1, rightIdx);

}

module.exports = findRotationCount