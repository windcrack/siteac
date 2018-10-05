"use strict";

let money = prompt("Вашь бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a1 = prompt("Во сколько обойдется?", "");
let q2 = prompt("Введите обязательную статью расходов в этом месяце", "");
let a2 = prompt("Во сколько обойдется?", "");
var appData = {
  moneyM: money,
  timeData: time,
  expenses: {
    
  },
  optionalExpenes: {},
  income: [],
  savings: true
};
appData.expenses[q1] = a1;
appData.expenses[q2] = a2;
console.log(appData.moneyM);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenes);
console.log(appData.income);
console.log(appData.savings);

  let day = 30;
function moneyDay(moneyDay){
    moneyDay = appData.moneyM / day;
   alert('Вашь бюджет на день ' + Math.ceil(moneyDay) + " рублей.");
}
moneyDay();


