

function binarySearch(key, array) {
  "use strict";

  var low = 0;
  var hi = array.length;

  while(low <= hi) {
    var mid = low + (hi - low) / 2;
    if (key < array[mid]) {
      hi = mid - 1;
    } else if (key > array[mid]) {
      low = mid + 1;
    } else {
      return mid;
    }
    return -1;
  }
}

// Brute-force implementation of binary search.
// Array does not need to be sorted.
// Inefficient.
function bruteForceBinarySearch(key, array) {
  "use strict";

  for (var i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return i;
    }
    return -1;
  }
}
