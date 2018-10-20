// let options = {
//   width: 1024,
//   height: 1024,
//   name: "test"
// };

// console.log(options.name);
// options.bool = false;
// options.colors = {
//   boredr: "black",
//   bg: "red"
// };

// delete options.bool;

// console.log(options);

// for (let key in options){
//   console.log('Свойство :' + key + ' имеет значение ' + options[key]);
// }

// console.log(Object.keys(options).length);


// // let arr = ["fisrt", 2, 3, "four", 5];


// // // for(let i = 0; i  < arr.length; i++){
// // //     console.log(arr[i]);
// // // }
// // arr.forEach(function (item, i, mass) {
// //     console.log(i + ': ' + item + " (массив: " + mass + ")");
// // })
// // console.log(arr);


// // let mass = [1, 3, 4, 6, 7];

// // for(let key of mass){
// //   console.log(key);
// // }


// // let ans = prompt("", ""),
// //     arr = [];

// // arr = ans.split(',');
// // console.log(arr);


// // let arr = ["aawe", 'zzz', "pp", 'rga'];
// //     i = arr.join(", ");
// // console.log(i);

// let arr = [1, 15, 4];
// i = arr.sort(copareNum);

// function copareNum(a, b) {
//   return a-b;
// }
// console.log(arr);


// let soldier = {
//   health: 400,
//   armor: 100
// };

// let john = {
//   health: 100
// }
// john.__proto__= soldier;

// console.log(john);
// console.log(john.armor);

// Урок 9

// // function User(name, id) {
// //   this.name = name;
// //   this.id = id;
// //   this.human = true;
// //   this.hello = function () {
// //     console.log('Hello! ' + this.name);
// //   }
// // }
// // User.prototype.exit = function (name) {
// //   console.log('Пользователь ' + this.name + " ушёл");
// // }
// // let Ivan = new User('Ivan', 25);
// //     alex = new User('Alex', 20);


// // console.log(Ivan);
// // console.log(alex);
// // Ivan.exit();
// // 'use strict';
// // function showThis(a, b) {
// //   console.log(this);
// //   function sum() {
// //     console.log(this);
// //     return a + b;
// //   }
// //   console.log(sum());
// // }

// // showThis(4, 5);
// // showThis(5, 5);

// // let obj = {
// //   a: 20,
// //   b: 15,
// //   sum: function () {
// //     console.log(this);
// //     function shout() {
// //       console.log(this);
// //     }
// //     shout();
// //   }
// // }
// // obj.sum();

// let user = {
//   name: "John"
// };

// function sayName(surname) {
//   console.log(this);
//   console.log(this.name + surname);
// }

// console.log(sayName.call(user, 'Smith'));
// console.log(sayName.apply(user, ['Snow']));

// function count(number) {
//   return this * number;
// }

// let double = count.bind(2);
// console.log(double(3));
// console.log(double(10));

// // 1) просто вызываем функцию - window/undefined;
// // 2) Метод обьекта - this = обьект;
// // 3) Конструктор (new) - this = новый созданый объект;
// // 4) Указание конкретного контеста - call, apply, bind;