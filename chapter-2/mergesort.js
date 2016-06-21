// The algorithms that we consider in this section are based on a simple operation
// known as merging: combining two ordered arrays to make one larger ordered array.
// This operation immediately leads to a simple recursive sort method
// known as mergesort: to sort an array, divide it into two halves,
// sort the two halves (recursively), and then merge the results.
//
// To understand mergesort, it is worthwhile to consider carefully the dynamics of the method calls.
// To sort a[0..15], the sort() method calls itself to sort a[0..7]
// then calls itself to sort a[0..3] and a[0..1] before finally doing the first merge of a[0] with a[1] after calling
// itself to sort a[0] and then a[1] (for brevity, we omit the calls for the base-case 1-entry sorts in the trace).
// Then the next merge is a[2] with a[3] and then a[0..1] with a[2..3] and so forth.
// We see that the sort code simply provides an organized way to sequence the calls to the merge() method.

function topDownMergesort(array) {
  "use-strict";

  sort(array, 0, array.length - 1);

  return array;
}

function sort(array, low, hi) {
  "use-strict";

  if (hi <= low) {
    return;
  }

  var mid = low + (hi - low) / 2;
  mid = parseInt(mid);

  sort(array, low, mid);
  sort(array, mid + 1, hi);
  merge(array, low, mid, hi);
}

// abstract in-place merge

function merge(array, low, mid, hi) {
  "use-strict";

  var i = low;
  var j = mid + 1;
  var aux = [];

  for (var k = low; k <= hi; k++) {
    aux[k] = array[k];
  }

  for (k = low; k <= hi; k++) {
    if (i > mid) {
      array[k] = aux[j++];
    } else if (j > hi) {
      array[k] = aux[i++];
    } else if (aux[j] < aux[i]) {
      array[k] = aux[j++];
    } else {
      array[k] = aux[i++];
    }
  }

  return array;
}

// Another way to implement mergesort is to organize the merges so that
// we do all the merges of tiny subarrays on one pass, then do a second pass
// to merge those subarrays in pairs, and so forth, continuing until we do a merge that encompasses the whole array.
// This method requires even less code than the standard recursive implementation.
// We start by doing a pass of 1-by-1 merges (considering individual items as subarrays of size 1),
// then a pass of 2-by-2 merges (merge subarrays of size 2 to make subarrays of size 4),
// then 4-by-4 merges, and so forth. The second subarray may be smaller than the first in the last merge
// on each pass (which is no problem for merge()), but otherwise all merges involve subarrays
// of equal size, doubling the sorted subarray size for the next pass.

function bottomUpMergesort(array) {
  "use-strict";

  var n = array.length;
  for (var sz = 1; sz < n; sz = sz + sz) {

    for (low = 0; low < n - sz; low += sz + sz) {
      merge(array, low, low + sz - 1, Math.min(low + sz + sz - 1, n - 1));
    }

  }
}


var items = [8, 9, 2, 4, 1, 7, 3, 5, 6];
var itemsCopy = items.slice();

topDownMergesort(items);
bottomUpMergesort(itemsCopy);

console.log(items, itemsCopy);
