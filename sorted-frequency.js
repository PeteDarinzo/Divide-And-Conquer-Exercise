function sortedFrequency(arr, val) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
  let middleVal = arr[middleIdx];
  let leftVal = arr[leftIdx];
  let rightVal = arr[rightIdx];

  if ((leftVal === val) && (rightVal === val)) {
    return rightIdx - leftIdx + 1;
  }

  if ((leftVal <= val) && (val < middleVal)) {
    rightIdx = middleIdx - 1;
  } else if ((middleVal === val) && (rightVal === V))

}

module.exports = sortedFrequency