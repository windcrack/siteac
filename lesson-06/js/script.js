"use strict";

let startBtn = document.getElementById('start'),
  valueBudget = document.querySelector('.budget-value'),
  valueDaybudget = document.querySelector('.daybudget-value'),
  valueLevel = document.querySelector('.level-value'),
  valueExpenses = document.querySelector('.expenses-value'),
  valueOptExpensises = document.querySelector('.optionalexpenses-value'),
  valueIncome = document.querySelector('.income-value'),
  valueYearsavings = document.querySelector('.yearsavings-value'),
  valueMonthsavings = document.querySelector('.monthsavings-value'),
  itemExpress = document.querySelectorAll('.expenses-item'),
  btn = document.getElementsByClassName('data'),
  btnExpenses = document.getElementsByTagName('button')[0],
  btnExpenses1 = document.getElementsByTagName('button')[1],
  btnExpenses2 = document.getElementsByTagName('button')[2],
  itemOptional = document.querySelectorAll('.optionalexpenses-item'),
  IncomeChoose = document.querySelector('.choose-income'),
  savings = document.querySelector('#savings'),
  summ = document.querySelector('#sum'),
  percent = document.querySelector('#percent'),
  year = document.querySelector('.year-value'),
  month = document.querySelector('.month-value'),
  day = document.querySelector('.day-value'),
  body = document.querySelector('body');

let money, time;

btnExpenses.style.opacity = 0.5;
btnExpenses.style.cursor = 'not-allowed';
btnExpenses1.style.opacity = 0.5;
btnExpenses1.style.cursor = 'not-allowed';
btnExpenses2.style.opacity = 0.5;
btnExpenses2.style.cursor = 'not-allowed';
IncomeChoose.disabled = true;
IncomeChoose.style.cursor = 'not-allowed';
for(let i = 0; i < itemExpress.length; i++){
  itemExpress[i].disabled = true;
  itemExpress[i].style.cursor = 'not-allowed';
}
for (let i = 0; i < itemOptional.length; i++){
  itemOptional[i].disabled = true;
  itemOptional[i].style.cursor = 'not-allowed';
}

startBtn.addEventListener('click', function () {
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
  btnExpenses2.disabled = false;
  btnExpenses2.style.opacity = 1;
  btnExpenses2.style.cursor = 'pointer';
  for (let i = 0; i < itemExpress.length; i++) {
    itemExpress[i].disabled = false;
    itemExpress[i].style.cursor = 'text';
  }
  for (let i = 0; i < itemOptional.length; i++) {
    itemOptional[i].disabled = false;
    itemOptional[i].style.cursor = 'text';
  }
  IncomeChoose.disabled = false;
  IncomeChoose.style.cursor = 'text';
});

// let expI = function (expValue) {
//   for(let i = 0; i < itemExpress.length; i++){
//     if (typeof (expValue[++i] === "string")) {
//     if (expValue[i] != '') {
//       btnExpenses.disabled = false;
//       btnExpenses.style.opacity = 1;
//       btnExpenses.style.cursor = 'pointer';
//     } else {
//       btnExpenses.disabled = true;
//       btnExpenses.style.opacity = 0.5;
//       btnExpenses.style.cursor = 'not-allowed';
//     }
//   }
// }
// }

let expI = function () {
  let exp1 = itemExpress[0].value,
      exp2 = itemExpress[1].value,
      exp3 = itemExpress[2].value,
      exp4 = itemExpress[3].value;
  if (typeof (exp1 || exp3 === "string")) {
    if ((exp1 != '' && exp2 != '') || (exp3 != '' && exp4 != '')) {
      btnExpenses.disabled = false;
      btnExpenses.style.opacity = 1;
      btnExpenses.style.cursor = 'pointer';
    } else {
      btnExpenses.disabled = true;
      btnExpenses.style.opacity = 0.5;
      btnExpenses.style.cursor = 'not-allowed';
    }
  }
}

body.addEventListener('input', function (e) {
  let target = e.target;
  if (target.classList.contains('expenses-item')) {
    expI();
  }
});
// itemExpress.forEach(function (item) {
//   item.addEventListener('input', function (e) {
//     let target = e.target.value;
 
//     })
  
// });

itemOptional.forEach(function (item) {
  item.addEventListener('input', function (e) {
    let target = e.target.value;
    if (target == null && target == "" && target === 'string') {
      btnExpenses1.disabled = true;
      btnExpenses1.style.opacity = 0.5;
      btnExpenses1.style.cursor = 'not-allowed';
    } else {
      btnExpenses1.disabled = false;
      btnExpenses1.style.opacity = 1;
      btnExpenses1.style.cursor = 'pointer';
    }
  })
});

let summa = 0;
btnExpenses.addEventListener('click', function () {
  for (let i = 0; i < itemExpress.length; i++) {
    let a = itemExpress[i].value,
        b = itemExpress[++i].value;
    if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null && a != '' && b != '' && a.length < 50) {
      console.log('Всё верно');
      appData.expenses[a] = b;
      summa += +b;
    } else {
      i = i - 1;
    }
  }
  valueExpenses.textContent = summa;
});

btnExpenses1.addEventListener("click", function () {
  for (let i = 0; i < itemOptional.length; i++){
    let opt = itemOptional[i].value;
    appData.optionalExpenes[i] = opt;
    valueOptExpensises.textContent += appData.optionalExpenes[i] + " ";
  }
});

btnExpenses2.addEventListener('click', function () {
  if(appData.budget != undefined){
      appData.moneyPerDay = ((appData.budget + summa) / 30).toFixed();
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
    valueDaybudget.textContent = "Произошла ошибка";
  }
});

IncomeChoose.addEventListener('input', function () {
  let items = IncomeChoose.value;
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
  if (appData.saving == true) {
    let sum = +summ.value,
        per = +percent.value;
    appData.monthIncome = sum / 100 / 12 * per;
    appData.yearIncome = sum / 100 * per;
    valueMonthsavings.textContent = appData.monthIncome.toFixed(1);
    valueYearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

percent.addEventListener('input', function () {
  if (appData.saving == true) {
    let sum = +summ.value,
        per = +percent.value;
    appData.monthIncome = sum / 100 / 12 * per;
    appData.yearIncome = sum / 100 * per;
    valueMonthsavings.textContent = appData.monthIncome.toFixed(1);
    valueYearsavings.textContent = appData.yearIncome.toFixed(1);
  }
});

let appData = {
  budget: money,
  expenses: {},
  optionalExpenes: {},
  income: [],
  timeData: time,
  saving: false,
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
    let second = prompt("Может что-то еще?");
    while (!isNaN(items) || items == null || items == "") {
      items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", '');
      second = prompt("Может что-то еще?");
    }
    items += ", " + second;
    let check = items.split(', ');
    for (let i = 0; i < check.length; i++) {
      if (Number(check[i])) {
        alert(check[i] + " - вы ввели число!");
      } else {
        appData.income.push(check[i]);
      }
    }
    appData.income.sort();
    appData.income.forEach(function (item, i) {
      alert("Способы доп зароботка: " + (i + 1) + " - " + item);
    });
  }
};
for (let key in appData) {
  console.log("Наша программа включает в себя данные: " + appData[key]);
}
// console.log(appData);




// console.log(calculation);
// console.log(valueBudget);
// console.log(valueDaybudget);
console.log(btnExpenses);
console.log(btnExpenses1);
console.log(btnExpenses2);
console.log(itemOptional);
console.log(IncomeChoose);
console.log(savings);
console.log(summ);
console.log(percent);
console.log(year);
console.log(month);
console.log(day);
