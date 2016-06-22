// The idea is to rearrange the array to give it the property that taking every hth entry (starting anywhere) yields a sorted subsequence.
// Such an array is said to be h-sorted. Put another way, an h-sorted array is h independent sorted subsequences, interleaved together.

// h has to be type cast to an integer, thus the use of parseInt().

function shellsort(array) {
  "use strict";

  var n = array.length;
  var h = 1;
  while (h < n/3) {
    h = parseInt(3 * h + 1);
  }
  while (h >= 1) {

    for (var i = h; i < n; i++) {

      for (var j = i; j >= h && array[j] < array[j - h]; j -= h) {
        swap(array, j, j-h);
      }

    }
    h = parseInt(h/3);
  }
  return array;
}

function swap(array, firstIndex, secondIndex) {
  "use strict";

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

var items = [10, 20, 5, 4, -7, 100, 50];

shellsort(items);

console.log(items);
