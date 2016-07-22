Javascript implementations of algorithms from [Algorithms 4th Edition](https://www.amazon.com/Algorithms-4th-Robert-Sedgewick/dp/032157351X) and [Introduction to Algorithms 3rd Edition](https://www.amazon.com/Introduction-Algorithms-3rd-MIT-Press/dp/0262033844).

## sorting summary

### selection sort

- not stable
- in place
- order of growth to running time: N^2
- extra space: 1

### insertion sort

- is stable
- in place
- order of growth of running time: between N and N^2
- extra space: 1

### shellsort

- not stable
- in place
- order of growth of running time: N log N
- extra space: 1

### quicksort

- not stable
- in place
- order of growth of running time: N log N
- extra space: lg N

### 3 way quicksort

- not stable
- in place
- order of growth of running time: between N and N log N
- extra space: lg N

### mergesort

- is stable
- not in place
- order of growth of running time: N log N
- extra space: N

### heapsort

- not stable
- in place
- order of growth of running time: N log N
- extra space: 1

### bubble sort

- stable
- in place
- order of growth of running time: between N and N ^ 2
- extra space: 1


## Definitions

### Stability

A sorting method is stable if it preserves the relative order of equal keys in the array. For a stable sorting method - If shuffled cards are sorted by suits then the cards would maintain their shuffled order within their suit. For unstable, the cards would be sorted by suit, but within suits the shuffled order would be changed.
