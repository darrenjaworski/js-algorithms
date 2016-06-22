// Quicksort is a divide-and-conquer method for sorting.
// It works by partitioning an array into two subarrays, then sorting the subarrays independently.
// Quicksort is complementary to mergesort: for mergesort, we break the array into two subarrays to be sorted
// and then combine the ordered subarrays to make the whole ordered array;
// for quicksort, we rearrange the array such that, when the two subarrays are sorted, the whole array is ordered.
// In the first instance, we do the two recursive calls before working on the whole array;
// in the second instance, we do the two recursive calls after working on the whole array.
// For mergesort, the array is divided in half; for quicksort, the position of the partition depends on the contents of the array.

function quicksort(array) {
  "use strict";

  sort(array, 0, array.length - 1);
  return array;
}

function sort(array, low, hi) {
  "use strict";

  if (hi <= low) {
    return;
  }

  var j = partition(array, low, hi);
  j = parseInt(j);

  sort(array, low, j - 1);
  sort(array, j + 1, hi);
  return array;
}

function partition(array, low, hi) {
  "use strict";

  var i = low;
  var j = hi + 1;
  var value = array[low];

  while (true) {

    while ( array[++i] < value ) {
      if (i == hi) {
        break;
      }
    }

    while ( value < array[--j] ) {
      if (j == low) {
        break;
      }
    }

    if (i >= j) {
      break;
    }

    swap(array, i, j);
  }

  swap(array, low, j);
  return j;
}

function swap(array, firstIndex, secondIndex) {
  "use strict";

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

var items = [10, 12, 4, 5, 11, 20, 1, 4];

quicksort(items);

console.log(items);
