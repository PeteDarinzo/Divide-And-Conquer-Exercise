function sortedFrequency(arr, val) {
  let leftIdx = findFirst(arr, val);
  if (leftIdx === -1) return leftIdx;
  let rightIdx = findLast(arr, val);
  return rightIdx - leftIdx + 1;

  function findFirst(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) { // before all elements in the array have been searched
      let mid = Math.floor((low + high) / 2);
      if ((mid === 0 || num > arr[mid - 1] && arr[mid] === num)) {
        // if the beginning of the array is reached
        // or the previous number in the array is less than the sought value
        // and the current value is the sought value
        // return the index, this is the first value
        return mid;
      } else if (num > arr[mid]) {
        // if the current number is less than the sought value
        // repeat on the upper half of the first half of the array
        return findFirst(arr, num, mid + 1, high);
      } else {
        // if the current number is equal to the sought value
        // repeat on the lower half of the first half of the array
        return findFirst(arr, num, low, mid - 1);
      }
    }
    return - 1;
  }

  function findLast(arr, num, low = 0, high = arr.length - 1) {
    if (high >= low) {
      let mid = Math.floor((low + high) / 2)
      if ((mid === arr.length - 1 || num < arr[mid + 1]) && arr[mid] === num) {
        return mid;
      } else if (num < arr[mid]) {
        return findLast(arr, num, low, mid - 1)
      } else {
        return findLast(arr, num, mid + 1, high)
      }
    }
    return -1
  }

}

module.exports = sortedFrequency