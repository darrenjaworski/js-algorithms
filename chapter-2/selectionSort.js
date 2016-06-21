// One of the simplest sorting algorithms works as follows:
// First, find the smallest item in the array and exchange it with the first entry (itself if the first entry is already the smallest).
// Then, find the next smallest item and exchange it with the second entry. Continue in this way until the entire array is sorted.
// This method is called selection sort because it works by repeatedly selecting the smallest remaining item.

function selectionSort(array) {
  "use strict";

  var n = array.length;

  for (var i = 0; i < n; i++) {
    var min = i;

    for (var j = i + 1; j < n; j++) {
      if ( array[j] < array[min] ) {
        min = j;
      }
    }

    swap(array, i, min);
  }
  return array;
}

function swap(array, firstIndex, secondIndex) {
  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}

var items = ['b', 'a', 'd', 'e', 'c'];

selectionSort(items);

console.log(items);
