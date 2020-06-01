let calculator = {

read(a,b) {
this.a = a || +prompt (`Введите число`);
this.b = b || +prompt (`Введите число`);
},

 sum() {
   return this.a + this.b
 },

 mul(){
   return this.a * this.b
 },
};
calculator.read(3,2);
alert( calculator.sum() );
alert( calculator.mul() );

// НЕ УДАЛЯТЬ СТРОКУ, НУЖНА ДЛЯ ПРОВЕРКИ
window.calculator = calculator; // делает ваш калькулятор доступным глобально
