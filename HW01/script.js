
// Задача 1: Написать программу, которая получает через prompt одно число 
// и выводит одну из строк “число чётнoe”, “число нечётнoe”, “число равно нулю”.


const number = parseInt(prompt('Введите число'));

if (number === 0) {
  console.log('число равно нулю');
} else if (number % 2 === 0) {
  console.log('число чётное');
} else {
  console.log('число нечётное');
}



// Задача 2:Написать программу, которая получает значение из prompt и 
// выводит фразу “Это значение можно преобразовать в число” или 
// “Это значение преобразовать в число не получится. Получится NaN”.


const value = prompt('Введите значение');

if (!isNaN(parseFloat(value))) {
  console.log('Это значение можно преобразовать в число');
} else {
  console.log('Это значение преобразовать в число не получится. Получится NaN');
}
