function findFloor(arr, x) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;

  while (leftIdx <= rightIdx) {
    let middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];
    let leftVal = arr[leftIdx];
    let rightVal = arr[rightIdx];

    if ((x <= middleVal) && (x > leftVal)) {
      rightIdx = middleIdx - 1;
    } else if ((middleVal < x) && (x <= rightVal)) {
      rightIdx = rightIdx - 1;
    } else if (leftVal >= x) {
      return -1;
    }
    else if (rightVal < x) {
      return rightVal;
    }
  }
  return -1;
}

module.exports = findFloor