// We start with the following problem specification: The input is a sequence of pairs of integers,
// where each integer represents an object of some type and we are to interpret the pair p q as meaning “p is connected to q.”
// We assume that “is connected to” is an equivalence relation, which means that it is
// ■ Reflexive : p is connected to p.
// ■ Symmetric : If p is connected to q, then q is connected to p.
// ■ Transitive : If p is connected to q and q is connected to r, then p is connected to r.
//
// Our goal is to write a program to filter out extraneous pairs
// (pairs where both objects are in the same equivalence class) from the sequence.
// In other words, when the program reads a pair p q from the input,
// it should write the pair to the output only if the pairs it has seen
// to that point do not imply that p is connected to q.
// If the previous pairs do imply that p is connected to q,
// then the program should ignore the pair p q and proceed to read in the next pair.

var UF = {
  count: 0,
  id: [],
  main: function(array) {
    var n = array.length;

  }
}

function unionFind(n) {
  var count = n;
  id = [];
  for (var i = 0; i < n; i++) {
    id[i] = i;
  }
}

function count() {
  return count;
}

function connected(p, q) {
  return find(p) == find(q);
}

function find(p) {
  return id[p];
}

function union(p, q) {
  var pID = find(p);
  var qID = find(q);

  if (pID == qID) {
    return;
  }

  for (var i = 0; i < id.length; i++) {
    if (id[i] == pID) {
      id[i] == qID;
    }
  }
  count--;
}

function main(array) {
  // var n =
  var uf = [n];
  while (true) {
    // var p =
    // var q =
    if ( connected(p, q) ) {
      continue;
    }
    union(p, q);
  }
  ctn = count();
  return count();
}
