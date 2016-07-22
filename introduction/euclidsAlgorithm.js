function greatestCommonDivisor(p, q) {
  "use strict";

  if (q === 0) {
    return p;
  }
  var r = p % q;
  return greatestCommonDivisor(q, r);
}

var answer = greatestCommonDivisor(125, 50);

console.log(answer);
