"use strict";

let money = prompt("Вашь бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
var appData = {
  moneyM: money,
  timeData: time,
  expenses: {},
  optionalExpenes: {},
  income: [],
  savings: true
};
let q1 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.quest1 = q1;
let a1 = prompt("Во сколько обойдется?", "");
appData.expenses.answer1 = a1;
let q2 = prompt("Введите обязательную статью расходов в этом месяце", "");
appData.expenses.quest2 = q2;
let a2 = prompt("Во сколько обойдется?", "");
appData.expenses.answer2 = a2;
console.log(appData.moneyM);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenes);
console.log(appData.income);
console.log(appData.savings);
console.log(appData.expenses.quest1 + ":" + appData.expenses.answer1);
console.log(appData.expenses.quest2 + ":" + appData.expenses.answer2);
  let day = 30;
function moneyDay(moneyDay){
    moneyDay = appData.moneyM / day;
   alert('Вашь бюджет на день ' + Math.ceil(moneyDay) + " рублей.");
}
moneyDay();


