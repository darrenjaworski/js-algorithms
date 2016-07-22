function sequentialSearch(array, key) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == key) {
      return true;
    }
  }
  return false;
}

var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 35];

// return true
console.log( sequentialSearch(items, 7) );

// return false
console.log( sequentialSearch(items, 12) );
