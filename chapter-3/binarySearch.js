function binarySearch(array, key) {
  var low = 0;
  var hi = array.length;

  while (low <= hi) {
    var mid = parseInt(low + (hi - low) / 2);
    if (key < array[mid]) {
      hi = mid - 1;
    } else if (key > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
  }
  return low;
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35];

console.log( binarySearch(items, 20) );
