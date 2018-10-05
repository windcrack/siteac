"use strict";

let money =prompt("Вашь буджет на месяц", ""),
    time = prompt('Введите  дату в формате YYYY-MM-DD', '');

let appData = {
    budjut: money,
    expenses: {},
    optionalExpenes: {},
    income: [],
    timeData: time,
    saving: false
}

let a1 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a2 = prompt("Во сколько обойдется?", ""),
    a3 = prompt("Введите обязательную статью расходов в этом месяце", ""),
    a4 = prompt("Во сколько обойдется?", "");
appData.expenses.a1 = a2;
appData.expenses.a3 = a4;

alert(appData.budjut / 30);
console.log(appData);
