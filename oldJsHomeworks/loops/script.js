

// задание 1
// Написать программу, которая определяет количество положительных, отрицательных чисел и нулей.
// Пользователь вводит числа с помощью prompt() до тех пор пока не нажмет отмена. 
// Пример вывода: Положительных: 2 шт. Отрицательных: 5 шт. Нулей: 3 шт.


let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

while (true) {
  let input = prompt("Введите число:");

  if (input === null) {
    break;
  }

  if (isNaN(input) || input.trim() === '') {
    alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
    continue;
  }

  if (Number(input) > 0) {
    positiveCount++;
  } else if (Number(input) < 0) {
    negativeCount++;
  } else {
    zeroCount++;
  }
}

alert(`Положительных: ${positiveCount} шт.\nОтрицательных: ${negativeCount} шт.\nНулей: ${zeroCount} шт.`);


// вариант 2 (с циклом for)

// let positiveCount = 0;
// let negativeCount = 0;
// let zeroCount = 0;

// for (let i = 0; i >= 0; i++) {
//   let input = prompt("Введите число:");

//   if (input === null) {
//     break;
//   }

//   if (isNaN(input) || input.trim() === '') {
//     alert("Вы ввели некорректное значение. Пожалуйста, введите число.");
//     continue;
//   }

//   if (Number(input) > 0) {
//     positiveCount++;
//   } else if (Number(input) < 0) {
//     negativeCount++;
//   } else {
//     zeroCount++;
//   }
// }

// alert(`Положительных: ${positiveCount} шт.\nОтрицательных: ${negativeCount} шт.\nНулей: ${zeroCount} шт.`);



// задание 2 
// Написать программу, которая выводит среднее арифметическое n чисел введенных пользователем. 
// Ввод чисел прекращается, когда нажали отмена, после чего выводится среднее арифметическое.


//Вариант 1


let sum = 0;
let count = 0;

do{
    let inputNumber = prompt('Введите число');

    if (inputNumber === null){
        break;
    }
    
    inputNumber = inputNumber.trim();

    if(isFinite(inputNumber) || inputNumber === ''){

        alert('Вы ввели не число. Попробуйте еще раз');
        continue;
    }
    else {
        sum += Number(inputNumber);
        count++
    }

}while(true);

const average = sum / count;

alert(`Среднее арифметическое введенных чисел равно  ${average}`);



// Вариант 2

// let sum = 0;
// let count = 0;

// for (let i = 0; i >= 0; i++){
//     let inputNumber = prompt('Enter a number');

//     if(inputNumber === null){
//         break;
//     }
      
//     inputNumber = inputNumber.trim();

//     if(isNaN(inputNumber) || inputNumber === ''){
//         alert(`You've entered a non-numeric value. Try again.`)
//         continue;
//     }
//     else{
//         sum+=Number(inputNumber);
//         count++
//     }
// }

// const average = sum / count;

// alert(`The arithmetic mean of the entered numbers is ${average}`);



// Задание 3
// Написать программу, в которой пользователя просят ввести числа 5 раз. 
// Причем каждое последующее число должно быть больше предыдущего, 
// иначе вывести текст: ошибка! в консоль и прекратить ввод.

// Вариант 1 с циклом for

let lastNum = -Infinity;


for (let i = 0; i < 5; i++){
    let currentNum = prompt('Enter a number');
       
    if(isNaN(currentNum) || currentNum.trim() === ''){
        alert('you have entered a non-numeric value. Please, try again.')
        continue;
    }
    currentNum = Number(currentNum);

    if (currentNum < lastNum){
       console.log('Error!')
       break;
    } 
    else{
        lastNum = currentNum;
    }
}

// Вариант 2 с циклом while

// let lastNum = -Infinity;
// let i = 0;

// while (i < 5) {
//   let currentNum = prompt('Enter a number');
    
//   if (isNaN(currentNum) || currentNum.trim() === '') {
//     alert('you have entered a non-numeric value. Please, try again.')
//     continue;
//   }
  
//   currentNum = Number(currentNum);

//   if (currentNum < lastNum) {
//     console.log('Error!')
//     break;
//   } 
//   else {
//     lastNum = currentNum;
//   }
  
//   i++;
// }


// Вариант 3 с циклом do - while


// let lastNum = -Infinity;
// let i = 0;

// do {
//   let currentNum = prompt('Enter a number');
    
//   if (isNaN(currentNum) || currentNum.trim() === '') {
//     alert('you have entered a non-numeric value. Please, try again.')
//     continue;
//   }
  
//   currentNum = Number(currentNum);

//   if (currentNum < lastNum) {
//     console.log('Error!')
//     break;
//   } 
//   else {
//     lastNum = currentNum;
//   }
  
//   i++;
// } while (i < 5);



// Задание 4 

// Написать программу-генератор популярных песен. Пользователь вводит число. Вывести количество pam равное этом числу. Строка должна начинаться с param. Например: Вводим 3 Программа выводит: "param-pam-pam-pam" Вводим 5 Программа выводит: "param-pam-pam-pam-pam-pam" ==В этом задании запрещено использовать .repeat() (все делаем циклом)==

// Вариант 1 с циклом while


let input;

while (true) {

  input = prompt('Введите число:');
  if (input === null) { 
    break;
  }
  
  
  if (isNaN(input) || input.trim() === '' || Number(input) <= 0) { 
    alert('Введите положительное число!');
    continue;
  }
  
  input = Number(input);
  let result = "param";
  for (let i = 0; i < input; i++) {
    result += "-pam";
  }
  
  console.log(result);
  break;
}

// Вариант 2 с циклом for

// let input;

// for (let i = 0; i >= 0; i++) {
//   input = prompt('Введите число:');
//   if (input === null) {
//     break;
//   }

//   if (isNaN(input) || input.trim() === '' || Number(input) <= 0) {
//     alert('Введите положительное число!');
//     continue;
//   }

//   input = Number(input);
//   let result = 'param';
//   for (let i = 0; i < input; i++) {
//     result += '-pam';
//   }

//   console.log(result);
//   break;
// }





