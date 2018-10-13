"use strict";

let calculation = document.getElementById('start'),
  valueBudget = document.querySelector('.budget-value'),
  valueDaybudget = document.querySelector('.daybudget-value'),
  valueLevel = document.querySelector('.level-value'),
  valueExpenses = document.querySelector('.expenses-value'),
  valueOptExpensises = document.querySelector('.optionalexpenses-value'),
  valueIncome = document.querySelector('.income-value'),
  valueMonth = document.querySelector('.monthsavings-value'),
  valueYearsavings = document.querySelector('.yearsavings-value'),
  itemExpress = document.querySelectorAll('.expenses-item'),
  btn = document.getElementsByClassName('data'),
  btnExpenses = document.getElementsByTagName('button')[0],
  btnExpenses1 = document.getElementsByTagName('button')[1],
  btnExpenses2 = document.getElementsByTagName('button')[2],
  itemOptional = document.querySelectorAll('.optionalexpenses-item'),
  IncomeChoose = document.querySelector('.choose-income'),
  savings = document.querySelector('#savings'),
  summ = document.querySelector('.choose-sum'),
  percent = document.querySelector('.choose-percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value');

let money, time;


btnExpenses1.disabled = true;
btnExpenses2.disabled = true;

calculation.addEventListener('click', function (event) {
    event.preventDefault();
    time = prompt('Введите  дату в формате YYYY-MM-DD', '');
    money = +prompt("Вашь бюджет на месяц", "");

    while (isNaN(money) || money == "" || money == null) {
      money = +prompt("Вашь бюджет на месяц", "");

    }
    appData.budget = money;
    appData.timeData = time;
    valueBudget.textContent = money.toFixed();
    year.value = new Date(Date.parse(time)).getFullYear();
    month.value = new Date(Date.parse(time)).getMonth() + 1;
    day.value = new Date(Date.parse(time)).getDay();
    btnExpenses1.disabled = false;
    btnExpenses2.disabled = false;
});

let doubleSum = 0;
btnExpenses.addEventListener('click', function () {
  let sum = 0;
  for (let i = 0; i < itemExpress.length; i++) {
    let a = itemExpress[i].value,
        b = itemExpress[++i].value;
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log('done');
      appData.expenses[a] = b;
      sum += +b;
      doubleSum = sum;
    } else {
      i = i - 1;
    }
  }
  btnExpenses.disabled = false;
  valueExpenses.textContent = sum;
});

btnExpenses1.addEventListener('click', function () {
  for (let i = 0; i < itemOptional.length; i++) {
    let q = itemOptional[i].value;
    appData.optionalExpenes[i] = q;
    valueOptExpensises.textContent += appData.optionalExpenes[i] + " ";
  }
});

btnExpenses2.addEventListener('click', function () {
   
  if (appData.budget != undefined) {
    appData.moneyPerDay = ((appData.budget + doubleSum) / 30).toFixed();
    valueDaybudget.textContent = appData.moneyPerDay;

    if (appData.moneyPerDay < 100) {
      valueLevel.textContent = "Минимальный уровень достатка";
    } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
      valueLevel.textContent = "Средний уровень достатка";
    } else if (appData.moneyPerDay > 2000) {
      valueLevel.textContent = "Высокий уровень достатка";
    } else {
      valueLevel.textContent = "Что то пошло не так";
    }
  }else{
    valueDaybudget.textContent = 'Произошла ошибка';
  }
});

IncomeChoose.addEventListener('input', function () {
  let items = IncomeChoose.value;
  // items += ", " + second;
  appData.income = items.split(', ');
  valueIncome.textContent = appData.income;
});

savings.addEventListener('click', function () {
  if (appData.saving == true) {
    appData.saving = false;
  }else{
    appData.saving = true;
  }
});

summ.addEventListener('input', function () {
  if (appData.saving == true){
    let summa = +summ.value,
        prec = +percent.value;
    appData.monthIncome = summa / 100 / 12 * prec;
    appData.yearIncome = summa / 100 * prec;

    valueMonth.textContent = appData.monthIncome.toFixed(1);
    valueYearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

percent.addEventListener('input', function () {
  if (appData.saving == true){
    let summa = +summ.value,
      prec = +percent.value;
    appData.monthIncome = summa / 100 / 12 * prec;
    appData.yearIncome = summa / 100 * prec;

    valueMonth.textContent = appData.monthIncome.toFixed(1);
    valueYearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenes: {},
  income: [],
  timeData: time,
  saving: false
};
 

