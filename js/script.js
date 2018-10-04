"use strict";

let money = prompt("Вашь бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let appData = {
  moneyM: money,
  timeData: time,
  expenses: {},
  optionalExpenes: {},
  income: [],
  savings: true
};
console.log(appData.moneyM);
console.log(appData.timeData);
console.log(appData.expenses);
console.log(appData.optionalExpenes);
console.log(appData.income);
console.log(appData.savings);
// let quest1 = "Введите обязательную статью расходов в этом месяце";
// let quest2 = "Во сколько обойдется?";
let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = prompt("Во сколько обойдется?", "");
appData.expenses[0] = "Введите обязательную статью расходов в этом месяце : " + answer1;
appData.expenses[1] = "Во сколько обойдется? : " + answer2;
console.log(appData.expenses);
  let day = 30;
function moneyDay(moneyDay){
    moneyDay = appData.moneyM / day;
   alert('Вашь бюджет на день ' + Math.ceil(moneyDay) + " рублей.");
}
moneyDay();


