

function heapsort(array) {
  "use strict";

  var n = array.length;

  for (var k = Math.floor(n / 2); k >= 0; k--) {
    sink(array, k, n);
  }

  while ((n - 1) > 0) {
    var v = n - 1;
    swap(array, 0, v);
    sink(array, 0, v);
    n--;
  }

  return array;
}

// top-down reheapify or sink
function sink(array, k, n) {
  "use strict";

  var left = 2 * k + 1;
  var right = 2 * k + 2;
  var largest = k;

  if (left < n && array[left] > array[largest]) {
    largest = left;
  }

  if (right < n && array[right] > array[largest]) {
    largest = right;
  }

  if (largest != k) {
    swap(array, k, largest);
    sink(array, largest, n);
  }

  return array;
}

function swap(array, firstIndex, secondIndex) {
  "use strict";

  var temp = array[firstIndex];
  array[firstIndex] = array[secondIndex];
  array[secondIndex] = temp;
  return array;
}

var items = [13, 10, 12, 4, 5, 11, 20, 1, 4, 20];

heapsort(items);

console.log(items);
