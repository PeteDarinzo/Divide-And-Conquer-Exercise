function countZeroes(arr) {

  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  if ((arr[leftIdx] === 0) && (arr[rightIdx] === 0)) return arr.length;
  if ((arr[leftIdx] === 1) && (arr[rightIdx] === 1)) return 0;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    // if 0, shift down, if 1, shift up
    (middleVal === 0) ? rightIdx = middleIdx - 1 : leftIdx = middleIdx + 1;
  }
  return arr.length - leftIdx;
}

module.exports = countZeroes