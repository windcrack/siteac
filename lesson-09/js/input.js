let age = document.getElementById('age'),
    name = document.getElementById('nameV'),
    sname = document.getElementById('sname'),
    btn = document.querySelector('button');
btn.addEventListener('click', function() {
  name = nameV;
  surname = sname;
  age = age.value;
  function showUser(surname, name) {
    alert('Пользователь ' + this.surname.value + " " + this.nameV.value + ", его возраст " + this.age.value);
  }
  showUser();
});
  
 


