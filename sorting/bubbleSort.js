// Not included in text. But replicated here for my own amusement.
// Simple. Loops through an array comparing the index to the element to the right.
// If the left is bigger than the right, then swap.
// Otherwise continue.


function bubbleSort(array) {
  "use strict";

  var n = array.length;
  var swapped;

  do {

    swapped = false;
    for (var i = 0; i < n; i++) {
      var left = i;
      var right = i + 1;

      if (array[left] > array[right]) {
        swap(array, left, right);
        swapped = true;
      }

    }

  } while (swapped);

  return array;
}

function swap(array, first, second) {
  "use strict";

  var temp = array[first];
  array[first] = array[second];
  array[second] = temp;

  return array;
}

var items = [10, 5, 8, 4, 9];

bubbleSort(items);

console.log(items);
