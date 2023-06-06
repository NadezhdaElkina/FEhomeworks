

// Задание 1
// Пользователь вводит ТРИ числа вывести в консоль наибольшее из них. 
// В этой задаче необходимо сделать проверку на число 
// (нужно убедиться, что пользователь ввел именно число)


let num1, num2, num3;
let maxOfTwoNum;

do {
  num1 = prompt('Enter the first number:');
  if (isNaN(num1) || num1.trim() === '') {
    alert('This is not a number. Please enter a valid number. ');
  }
} while (isNaN(num1) || num1.trim() === '');

do {
  num2 = prompt('Enter the second number:');
  if (isNaN(num2) || num2.trim() === '') {
    alert('This is not a number. Please enter a valid number.');
  }
} while (isNaN(num2) || num2.trim() === '');

do {
  num3 = prompt('Enter the third number:');
  if (isNaN(num3) || num3.trim() === '') {
    alert('This is not a number. Please enter a valid number.');
  }
} while (isNaN(num3) || num3.trim() === '');


if (num1 === num2 && num1 === num3){
  alert(`All numbers are equal`);
}
if (num1 === num2 && num1 > num3){
  let maxOfTwoNum = num1;
  alert(`First and second numbers are equal and larger than third. Largest numbers value is ${maxOfTwoNum}`);
}
if(num2 === num3 && num2 > num1){
  maxOfTwoNum = num2;
  alert(`Second and third numbers are equal and larger than first. Largest numbers value is ${maxOfTwoNum}`);
}
if (num3 === num1 && num1 > num2) {
  maxOfTwoNum = num3;
  alert(`First and third numbers are equal and larger than second. Largest numbers value is ${maxOfTwoNum}`);
}

let maxNum = Math.max(num1, num2, num3);
console.log(maxNum);
alert(`The largest number is: ${maxNum}`);





// Задание 2
// Используя конструкцию switch, напишите программу, которая переводит числа в слова.
// Например: пользователь вводит число 2, программа выводит «Два». 
// Программу необходимо сделать для цифр от 0 до 5 (включительно)
    



let number = prompt('Enter a number from 0 to 5:');
let numberToWord;

if (isNaN(number) || number.trim() === '') {
  alert('This is not a number. Please enter a valid number.');
} else {
  switch (Number(number)) {
    case 0:
      numberToWord = 'zero';
      break;
    case 1:
      numberToWord = 'one';
      break;
    case 2:
      numberToWord = 'two';
      break;
    case 3:
      numberToWord = 'three';
      break;
    case 4:
      numberToWord = 'four';
      break;
    case 5:
      numberToWord = 'five';
      break;
    default:
      numberToWord = 'Number is out of range 0 to 5 or not a number';
  }
  console.log(numberToWord);
  alert(`The number ${number} is equivalent to ${numberToWord}`);
}





// Задание 3
// Дан следующий код:

// let age = 10;

// if (age < 10) {
//   console.log('hi!');
// } else if (age < 20) {
//   console.log('hello!');
// } else {
//   console.log('good day!');
// }
// Необходимо переписать этот код используя тернарный оператор

let age = 10;
console.log(age < 10 ? 'hi!' : age < 20 ? 'hello!' : 'good day!');


// Задание 4
// Написать программу для проверки таблицы умножения:
// Пользователь вводит число a
// Пользователь вводит число b
// Пользователь вводит ответ на a * b
// Нам необходимо проверить ответ пользователя на корректность,
// если пользователь ответил неправильно то выводим ответ вида: 
// Ошибка! Правильный ответ: correctAnswer
// Где correctAnswer - это переменная, в которой находится правильный ответ
// Если пользователь ввел правильный ответ, то выводим сообщение вида: Правильно!


let a, b, c;

do {
    a = prompt('Enter number a:');
    a = a.trim();
    if (isNaN(a) || a === '') {
      alert('This is not a number. Please enter a valid number.');
    }
} while (isNaN(a) || a === '');

do {
    b = prompt('Enter number b:');
    b = b.trim();
    if (isNaN(b) || b === '') {
      alert('This is not a number. Please enter a valid number.');
    }
} while (isNaN(b) || b === '');  

do {
    let c = prompt('What is a * b? Please enter your answer');
    c.trim();
    if (isNaN(c) || c === '') {
      alert('This is not a number. Please enter a valid number.');
    }
} while (isNaN(c) || c === '');  
  
let correctAnswer = a * b;
  
if (c === correctAnswer) {
    alert(' Your answer is right!');
} else {
    alert(`Error! The correct answer is:  ${correctAnswer}`);
}
