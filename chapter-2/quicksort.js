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

  sort(array, low, j - 1);
  sort(array, j + 1, hi);
  return array;
}


// The crux of the method is the partitioning process, which rearranges the array
// to make the following three conditions hold:
// The entry a[j] is in its final place in the array, for some j.
// No entry in a[lo] through a[j-1] is greater than a[j].
// No entry in a[j+1] through a[hi] is less than a[j].
//
// This code partitions on the item 'value' in a[low].
// The main loop exits when the scan indices i and j cross.
// Within the loop, we increment i while a[i] is less than v and decrement j while a[j] is greater than v,
// then do an exchange to maintain the invariant property that no entries to the left of i are greater than v and no entries to the right of j are smaller than v.
// Once the indices meet, we complete the partitioning by exchanging a[lo] with a[j] (thus leaving the partitioning value in a[j]).

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

// This sort code partitions to put keys equal to the partitioning element in place
// and thus does not have to include those keys in the subarrays for the recursive calls.
// It is far more efficient than the standard quicksort implementation for arrays with large numbers of duplicate keys.

function quicksortThreeWay(array) {
  "use strict";

  threeWaySort(array, 0, array.length - 1);
  return array;
}


function threeWaySort(array, low, hi) {
  "use strict";

  if (hi <= low) {
    return;
  }

  var lt = low;
  var i = low + 1;
  var gt = hi;

  var v = array[low];

  while (i <= gt) {
    var compare = compareTo(array[i], v);

    if (compare < 0) {
      swap(array, lt++, i++);
    } else if (compare > 0) {
      swap(array, i, gt--);
    } else {
      i++;
    }

  }

  quicksortThreeWay(array, low, lt - 1);
  quicksortThreeWay(array, gt + 1, hi);

  return array;
}

function swap(array, firstIndex, secondIndex) {
  "use strict";

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
}

// Fun fact.
// The javascript built in Array.prototype.sort([compareFunction]) requires a compare function.
// Without which the default is to convert the item to a string and compare on Unicode code point order.
// This produces [ '1', '10', '2', '20', '3' ] from a shuffled version of that array.

function compareTo(first, second) {
  if (first > second) {
    return 1;
  }
  if (first < second) {
    return -1;
  }
  return 0;
}

var items = [10, 12, 4, 5, 11, 20, 1, 4];
var itemsCopy = items.slice();

quicksort(items);
quicksortThreeWay(itemsCopy);

console.log(items);
console.log(itemsCopy);
