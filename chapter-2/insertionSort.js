// As in selection sort, the items to the left of the current index are in sorted order during the sort,
// but they are not in their final position, as they may have to be moved to make room for smaller items encountered later.
// The array is, however, fully sorted when the index reaches the right end.


function insertionSort(array) {
  "use strict";

  var n = array.length;
  for (var i = 1; i < n; i++) {

    for (var j = i; j > 0 && array[j] < array[j-1] ; j--) {
      swap(array, j, j-1);
    }

  }
  return array;
}

function insertionSortTwo(array) {
  "use strict";

  var n = array.length;
  var next;
  for (var i = 1; i < n; i++) {

    next = array[i];

    for (var j = i - 1; j >= 0; j--) {

      if (array[j] > next) {
        array[j+1] = array[j];
      } else {
        break;
      }

    }

    array[j+1] = next;
  }
  return array;
}

function swap(array, firstIndex, secondIndex) {
  "use strict";

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
}


var items = [5, 25, 10, 4, 1, 100];

insertionSort(items);

console.log(items);
