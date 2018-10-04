"use strict";

let moneyMonth = prompt("Вашь бюджет на месяц?", "");
let nameShop = prompt("Название вашего магазина?", "");
let mainList = {
  moneyM: moneyMonth,
  nameS: nameShop,
  shopGoods: [],
  employers: {},
  open: true
};
console.log(mainList.moneyM);
console.log(mainList.nameS);
console.log(mainList.shopGoods);
console.log(mainList.employers);
console.log(mainList.open);
for(let i = 0; i < 3; i++){
  var typeArticle = prompt("Какой товар будем продовать?", "");
  mainList.shopGoods[i] = typeArticle;
}
console.log(mainList.shopGoods);
  let day = 30;
function moneyDay(moneyDay){
   moneyDay = mainList.moneyM / day;
   alert('Вашь бюджет на день ' + Math.ceil(moneyDay) + " рублей.");
}
moneyDay();