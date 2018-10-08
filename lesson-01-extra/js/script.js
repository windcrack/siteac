'use strict';
let num = 33721;
    num = 3*3*7*2*1;

console.log(num);

function pow(result) {
  result = num;
  for (let i = 1; i < 3; i++) {
    result *= num;
    result + "";
    result.substr(result.length - 8);
  }
  return result;
}
alert(pow());


