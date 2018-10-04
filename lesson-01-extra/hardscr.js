'use strict';

let num = 3*3*7*2*1;

console.log(num);

function pow() {
  var result = num;
  for (let i = 1; i < 3; i++) {
    result *= num;
    
  }
  return result;
}
alert(pow());


