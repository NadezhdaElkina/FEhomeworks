// Задание 1

// Дан случайный массив чисел (создайте самостоятельно).
// С помощью метода .filter() отфильтруйте массив так,
// чтобы в новый массив вошли только четные двухзначные числа из исходного.

const numbers = [];
for (let i = 0; i < 10; i++) {
  const randomNumber = Math.floor(Math.random() * 100);
  numbers.push(randomNumber);
}
console.log(numbers);

const filteredNumbers = numbers.filter(
  (num) => num % 2 === 0 && num >= 10 && num <= 99
);

console.log(filteredNumbers);




// Задание 2

// Пользователь вводит 10 случайных значений.
// Каждое значение необходимо записать в массив.
// С помощью метода .every() проверить были ли все
// введенные пользователем данные – числами.

// const numbers = [];
// const count = 10;

// for (let i = 1; i <= count; i++) {
//  const userInput = prompt(`Введите число номер ${i} из ${count}:`);
//  numbers.push(userInput);
// }

// добавила сюда проверку на null (при отмене) и на пустую строку(или строку с пробелами), чтобы избежать их преобразования в 0.
// const areAllNumbers = numbers.every(num => num !== null && !isNaN(num) && num.trim() !== ''); 

// if (areAllNumbers) {
//  console.log("Все введенные значения являются числами");
// } else {
//  console.log("Некоторые из введенных значений не являются числами");
// }



// Задание 3

// Дан массив объектов

// const arr = [
//   {a: 2, b: 1},
//   {a: 5, b: 12},
//   {a: 95, b: 7}
// ]
// Используя ТОЛЬКО методы массивов (циклы запрещены):

// Вывести в консоль 'its valid', если во всех объектах поле a > b,
// вывести 'its invalid' если хотя бы в одном объекте a<=b
// На основе массива arr, создать массив объектов у которых поле b возведено в квадрат пример:
// const arr2 = [
//   {a: 2, b: 1},
//   {a: 5, b: 144},
//   {a: 95, b: 49}
// ];

const arr = [
  { a: 2, b: 1 },
  { a: 5, b: 12 },
  { a: 95, b: 7 },
];

const isValid = arr.every((item) => item.a > item.b);

console.log(isValid ? "its valid" : "its invalid");

const arr2 = arr.map((item) => ({ ...item, b: Math.pow(item.b, 2) }));

console.log(arr2);
