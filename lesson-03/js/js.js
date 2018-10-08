function lernJS(lang, callback) {
  console.log("Я учу "+ lang);
  callback();
}

function done(){
  console.log("Я прошёл 3 урок");
}

lernJS("JavaScript", done);