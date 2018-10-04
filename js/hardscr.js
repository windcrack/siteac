'use strict';

let num = 33721 * 2;
console.log(num);

function pow() {
  var result = num;
  for (let i = 1; i < 3; i++) {
    result *= num;
  }
  return result;
}
console.log(pow());


