"use strict";

let startBtn = document.getElementById('start'),
  valueBudget = document.querySelector('.budget-value'),
  valueDaybudget = document.querySelector('.daybudget-value'),
  valueLevel = document.querySelector('.level-value'),
  valueExpenses = document.querySelector('.expenses-value'),
  valueOptExpensises = document.querySelector('.optionalexpenses-value'),
  valueInome = document.querySelector('.income-value'),
  valueYearsavings = document.querySelector('.yearsavings-value'),
  itemExpress = document.querySelector('.expenses-item'),
  btn = document.getElementsByClassName('data'),
  btnExpenses = document.getElementsByTagName('button')[0],
  btnExpenses1 = document.getElementsByTagName('button')[1],
  btnExpenses2 = document.getElementsByTagName('button')[2],
  itemOptional = document.querySelectorAll('.optionalexpenses-item'),
  IncomeChoose = document.querySelector('#income'),
  savings = document.querySelector('#savings'),
  summ = document.querySelector('#sum'),
  percent = document.querySelector('#percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');


let money, time;

function start() {
  money = +prompt("Вашь бюджет на месяц", "");
  time = prompt('Введите  дату в формате YYYY-MM-DD', '');

  while (isNaN(money) || money == "" || money == null) {
    money = +prompt("Вашь бюджет на месяц", "");
    
  }
}

start();

let appData = {
  budjet: money,
  expenses: {},
  optionalExpenes: {},
  income: [],
  timeData: time,
  saving: true,
  chooseExpenses: function () {
    for (let i = 0; i < 2; i++) {
      let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
        b = prompt("Во сколько обойдется?", "");
      if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
      } else {
        i = i - 1;
      }
    }
  },
  detectDayBudget: function () {
    appData.moneyPerDay = (appData.budjet / 30).toFixed(1);
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
  },
  detectLevel: function () {
    if (appData.moneyPerDay < 100) {
      console.log("Минимальный уровень достатка");
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      console.log("Средний уровень достатка");
    } else if (appData.moneyPerDay > 2000) {
      console.log("Высокий уровень достатка");
    } else {
      console.log("Что то пошло не так")
    }
  },
  checkSavings: function () {
    if (appData.saving == true) {
      let save = +prompt("Какова сумма накоплений?", ""),
        percent = +prompt("Под какой процент?", "");

      appData.monthIncome = save / 100 / 12 * percent;
      alert("Доход в месяц с вашего депозита: " + appData.monthIncome);
    }
  },
  chooseOptExpenses: function () {
    for (let i = 1; i <= 3; i++) {
      let q = prompt("Статья необязательных расходов?", "");
      appData.optionalExpenes[i] = q;
    }
  },
  chooseIncome: function () {
    let items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", ''); 
    let  second = prompt("Может что-то еще?");
    while (!isNaN(items) || items == null || items == ""){
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
      second = prompt("Может что-то еще?");
      }
    items += ", " + second;
    let check = items.split(', ');
    for (let i = 0; i < check.length; i++) {
        if (Number(check[i])) {
          alert(check[i] + " - вы ввели число!");
        }else{
          appData.income.push(check[i]);
        }
    }
    appData.income.sort();
    appData.income.forEach(function (item, i) {
      alert("Способы доп зароботка: " + (i+1) + " - " + item);
    });
  }
};
 for(let key in appData){
   console.log("Наша программа включает в себя данные: " + appData[key]);
 }
// console.log(appData);


