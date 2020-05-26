function print(text) {
  console.log(text);
}


function isValid(name) {
  return  name !== undefined
  && name !== null
   && name.length > 3
   && !name.includes(" ");

}

  function sayHello() {
    const userName = prompt('Введите ваше имя');

    if (isValid(userName)) {
      print(`Welcome back, ${userName}!`);
    } else {
      print('Некорректное имя');
    }
  }
  sayHello('user');
