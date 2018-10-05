"use strict";

let money = +prompt("Вашь бюджет на месяц", ""),
    time = prompt('Введите  дату в формате YYYY-MM-DD', '');

let appData = {
    budjet: money,
    expenses: {},
    optionalExpenes: {},
    income: [],
    timeData: time,
    saving: false
}

// for(let i= 0; i < 2; i++){
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//     }else if (i = 1) {
//         continue;
//     }
// }
// Вариант 1
let num = 0;
while (num < 2) {
let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
    b = prompt("Во сколько обойдется?", "");
    if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
        console.log('done');
        appData.expenses[a] = b;
        }
        num++;
}
// Вариант 2
// let i = 0;
// do{
//     let a = prompt("Введите обязательную статью расходов в этом месяце", ""),
//         b = prompt("Во сколько обойдется?", "");
//     if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null && a != '' && b != '' && a.length < 50) {
//         console.log('done');
//         appData.expenses[a] = b;
//         }
//         i++;
// }while (i < 2);
appData.moneyPerDay = appData.budjet / 30;
alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("Минимальный уровень достатка");
}else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
     console.log("Средний уровень достатка");
}else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}else{
    console.log("Что то пошло не так")
}

