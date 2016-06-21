"use strict";

function greatestCommonDivisor(p, q) {
  if (q === 0) {
    return p;
  }
  var r = p % q;
  return greatestCommonDivisor(q, r);
}
