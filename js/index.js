//Таски на переменные:
// 1) Создайте две переменные a и b. Выведите в консоль результ их умножения.

const a = 2;
const b = 5;
console.log("a*b=", a * b);

//2) Создайте две переменные c и d. Выведите в консоль результат деления.

const c = 12;
const d = 3;
console.log("c/d=", c / d);

//3) Создайте две переменные e и f. Выведите в консоль результат сложения.

const e = 6;
const f = 7;
console.log("e+f=", e + f);

//4) Определите переменные со значениями 11, true, "java script", "100" и выведите их в консоль

const numberVariable = 11;
const booleansVariable = true;
const stringsVariable1 = "java script";
const stribgsVariable2 = "100";
console.log(
  numberVariable,
  booleansVariable,
  stringsVariable1,
  stribgsVariable2
);

//5) Переделайте приведенный код так, чтобы в нем использовались операции +=, -=, *=, /=, ++, --
// let num = 1;
// num = num + 11;
// num = num - 11;
// num = num * 11;
// num = num / 11;
// num = num + 1;
// num = num - 1;

// let num = 1;

// num += 11;
// num -= 11;
// num *= 11;
// num /= 11;
// num++;
// num--;
// console.log('num',num);

// *************************************************

// Таски на prompt (вводить с помощью prompt, выводить с помощью alert):

// 1) Запросить число у пользователя, возвести его в квадрат и вывести результат.

const numberAge = Number(prompt("enter your age"));
alert(numberAge ** 2);

// 2) Вывести среднее арифметическое двух чисел. Числа запрашивать у пользователя.

const firstNumber = Number(prompt("enter first number"));
const secondNumber = Number(prompt("enter second number"));

alert((firstNumber + secondNumber) / 2);

// 3) Перевести число минут в секунды и вывести результат. Число минут запрашивать у пользователя.

const minuteOftime = Number(prompt("enter time in minutes"));
alert(minuteOftime * 60);

// 4) Создайте переменную greeting со значением 'Hello, ' и объявите переменную userName. Спросите имя пользователя и занесите данное значение в переменную userName. Выведите сообщение с приветствием, например, 'Hello, Vasya!'.

const greeting = "Hello, ";
const userName = prompt("enter your name");
alert(greeting + userName);

// ***************************************************************

//Таски на условия:

//1) Спросить переменную у юзера. Если переменная равна числу 10, то выведите 'Верно', иначе выведите 'Неверно'.

const numberApple = prompt("your Iphone number");
if (numberApple <= 10) {
  alert("true");
} else {
  alert("false");
}

// 2) Напишите две проверки.
// Если переменная test равна true, то выведите 'Верно', иначе выведите 'Неверно'.
// Если переменная test не равна true, то выведите 'Верно', иначе выведите 'Неверно'
// Проверьте работу скрипта при test, равном true, false.

const isTest = true;
if (isTest) {
  alert("true");
} else {
  alert("false");
}

const isTest2 = false;
if (isTest) {
  alert("true");
} else {
  alert("false");
}

// 3) Вычислить сумму покупки с учетом скидки. Скидка 3% предоставляется, если сумма покупки больше 500 грн., а скидка 5% - если сумма покупки больше 800 грн. Сумму покупки вводит юзер.

const moneySpent = Number(prompt("giv me your maney"));
if (moneySpent > 500 && moneySpent <= 800) {
  alert(moneySpent - (moneySpent / 100) * 3);
} else if (moneySpent > 800) {
  alert(moneySpent - (moneySpent / 100) * 5);
}

//***************************************************************

// /******************************************************************/
// Таски на циклы.
// Каждую задачу решить циклами while, for.

// 1) Вывод чисел от 25 до 0 (порядок уменьшения).

// let i = 25;
// while (i != 0) {
//   console.log(i);
//   i--;
// }

// for (let i = 25; i != 0; i--) {
//   console.log(i);
// }

// 2) Вывод чисел от 10 до 50, которые кратны 5.

// let i = 10;
// while (i <= 50) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
//   i++;
// }

// for (let i = 10; i <= 50; i++) {
//   if (i % 5 === 0) {
//     console.log(i);
//   }
// }

// 3) Найти сумму чисел в пределах от 1 до 100.
// let i = 1;
// let sum = 0;
// while (i <= 100) {
//   sum = sum + i;
//   i++;

// }
// console.log(sum);

// let sum = 0;

// for (let i = 1; i <= 100; ++i) {
//   sum = sum + i;
// }
//   console.log(sum);

// Таски на switch..case.

// 1) Запросить у пользователя номер дня недели и вывести соответствующее полное строковое название (например, если пользователь вводит 7 - выводится сообщение "воскресенье"). предусмотреть ошибку введения (default).

// const daysNumber = Number(prompt("enter number day"));

// switch (daysNumber) {
//   case 1:
//     console.log("Monday");
//     break;
//   case 2:
//     console.log("Tuesday");
//     break;
//   case 3:
//     console.log("Wednesday");
//     break;
//   case 4:
//     console.log("Thursday");
//     break;
//   case 5:
//     console.log("Friday");
//     break;
//   case 6:
//     console.log("Saturday");
//     break;
//   case 7:
//     console.log("Sunday");
//     break;

//   default:
//     console.log("incorrect days number");
// }

// 2) В переменной day лежит какое-то число из интервала от 1 до 31. Определите, в какую декаду месяца попадает это число (в первую, вторую или третью).

// const day = Number(prompt("enter day"));

// switch (day) {
//   case 1:
//   case 2:
//   case 3:
//   case 4:
//   case 5:
//   case 6:
//   case 7:
//   case 8:
//   case 9:
//   case 10:
//     console.log("First Decade");
//     break;
//   case 11:
//   case 12:
//   case 13:
//   case 14:
//   case 15:
//   case 16:
//   case 17:
//   case 18:
//   case 19:
//   case 20:
//     console.log("Second Decade");
//     break;
//   case 21:
//   case 22:
//   case 23:
//   case 24:
//   case 25:
//   case 26:
//   case 27:
//   case 28:
//   case 29:
//   case 30:
//   case 31:
//     console.log("Third Decade");
//     break;

//   default:
//     console.log("incorrect days number");
// }

// const user2 = {
//   firstName: "test",
//   lastName: "testovich",
//   email: "test@gmail.com",
//   password: "qwerty",
//   weight: 70,
//   height: 1.75,
//   getFullName() {
//     return `${this.firstName} ${this.lastName}`;
//   },
//   getBMI() {
//     return this.weight / this.height ** 2;
//   },
// };

function Cat(fName, lName, age) {
  this.fName = fName;
  this.lName = lName;
  this.age = age;
}

const cat2 = new Cat("bars", "catovich", 12);
