//
//
//  0 Создать функцию isWorkingAgePerson, которая будет проверять, трудоспособного ли человек возраста (от 16 до 65). Функция принимает в качестве параметра возраст человека и возвращает значение булевского типа.

// const age = Number(prompt("Enter your Age"));
// console.log(isWorkingAgePerson(age));

// function isWorkingAgePerson(age) {
//   return age > 16 && age < 65;
// }

// *********************************************************
//
//
// 1 Функция, которая запрашивает число и проверяет, простое ли оно (простое число делиться без остатка на себя и на единицу).

// const numberValue = Number(prompt("input number"));
// console.log(simpleNumber(numberValue));
// function simpleNumber(numberValue) {
//   if (numberValue % numberValue === 0 && numberValue % 1 === 0) {
//     return "simple";
//   } else return "no simple ";
// }

// *****************************************************
//
//

// 2   Создать функцию checkMultiplicity, которая принимает два числа и проверяет, делится ли первое на второе нацело:
//
//
// const firstNumber = Number(prompt("Enter first number"));
// const secondNumber = Number(prompt("Enter second number"));
// console.log(checkMltipliciti(firstNumber, secondNumber));
// function checkMltipliciti(firstNumber, secondNumber) {
//   return firstNumber % secondNumber === 0;
// }
//
//
// *************************************************
//
//
// 3 Проверка возможности треугольника. Создать функцию которая принимает длины треугольника; функция возвращает true, если треугольник возможен, и false, если нет.
//
//
// const a = Number(prompt(" enter side a"));
// const b = Number(prompt("enter side b"));
// const c = Number(prompt("enter side c"));
// console.log(isTriangle(a, b, c));

// function isTriangle(a, b, c) {
//   return a + b >= c && b + c >= a && a + c >= b;
// }
//
//
// *************************************************

// 4 Написать функции расчета площадей (или поверхности) следующих фигур/тел: треугольника, прямоугольника (или конуса, параллелепипеда) в зависимости от переданных размеров фигур. Функция должна возвращать вычисленное значение.
//
//
// const a = Number(prompt("enter side a"));
// const b = Number(prompt("enter side b"));
// const c = Number(prompt("enter side c"));
// let area = 0;

// if (c === 0) {
//   console.log("area Rectangle = ", areaRectangle(a, b));
// } else {
//   console.log("area Parallelepiped =", areaParallelepiped(a, b, c));
// }

// function areaRectangle(a, b) {
//   area = area + a * b;
//   return area;
// }

// function areaParallelepiped(a, b, c) {
//   area = area + (2 * a ** 2 + 2 * b ** 2 + 2 * c ** 2);
//   return area;
// }

// **************************************************

// const a = Number(prompt("side a"));
// const h = Number(prompt("height triangle"));
// let area = 0;

// const areaTriangle = function (a, h) {
//   return (area = area + 0.5 * a * h);
// };

// console.log(areaTriangle(a, h));
//
//
// ******************************************************

/**
 *The formula for calculating the area of ​​​​the lateral surface of a cone
 * @param {number} r - base circle radius
 * @param {number} l - cone generatrix length
 * @returns
 */
const lateralSurfaceAreaCone = function (r, l) {
  return 3.14 * r * l;
};

console.log(lateralSurfaceAreaCone(5, 6));
