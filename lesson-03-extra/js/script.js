let str = "урок-3-был слишком легким";
console.log(str.toUpperCase());
let strSpace = str.replace(/-/g, " ");
console.log(strSpace);
let word = strSpace.replace(/урок 3 был слишком/g, "");
console.log(word);
console.log(word.replace(/им/g, "оо"));

let arr = [20, 33, 1, "Человек", 2, 3];
    arr.splice(3, 1);
    for(let i = 0; i < arr.length; i++){
       console.log(Math.cbrt(arr[i]));
    }
function textFifty(strdots) {
    strdots = prompt("Введите строку более 50: ", "");
    if (!isNaN(strdots)) {
      alert("Вы ввели число!");
    }
    if(strdots.length > 50){
      strdots.slice(0, 50) + '...';
      console.log(strdots);
    }
    console.log(strdots.length); 
}

textFifty();