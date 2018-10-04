'use strict';

let num = 3*3*7*2*1;

console.log(num);

function pow(result, pow) {
  result = num;
  for (let i = 1; i < pow; i++) {
    result *= num;
    
  }
  return result;
}
alert(pow());


