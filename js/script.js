"use strict";

let money = prompt("Вашь бюджет на месяц?", "");
let time = prompt("Введите дату в формате YYYY-MM-DD", "");
let quest1 = "Введите обязательную статью расходов в этом месяце";
let quest2 = "Во сколько обойдется?";
let appData = {
  moneyM: money,
  timeData: time,
  expenses: {
    
  },
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

let answer1 = prompt("Введите обязательную статью расходов в этом месяце", "");
let answer2 = prompt("Во сколько обойдется?", "");
appData.expenses[quest1] = answer1;
appData.expenses[quest2] = answer2;
console.log(appData.expenses);
  let day = 30;
function moneyDay(moneyDay){
    moneyDay = appData.moneyM / day;
   alert('Вашь бюджет на день ' + Math.ceil(moneyDay) + " рублей.");
}
moneyDay();


