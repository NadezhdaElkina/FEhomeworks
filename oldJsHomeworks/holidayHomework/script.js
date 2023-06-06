// задание 1

// Создать функцию «переключатель» toggleMe(), которая при
// вызове чередует возвращаемые булевы значения (true, false).
// toggleMe() // true
// toggleMe() // false
// toggleMe() // true
// toggleMe() // false

let toggle = false;

const toggleMe = () => (toggle = !toggle);
console.log(toggleMe());
console.log(toggleMe());
console.log(toggleMe());

// задание 2

// Создать функцию counter(), которая способна считать количество
// своих вызовов (возвращает число). Если передать в эту функцию
// число как аргумент, то она должна возвращать счетчик начиная с этого числа.
// Пример:

// counter() // 1
// counter() // 2
// counter(6) // 7
// counter() // 8
// counter(11) // 12
// counter() // 13
// counter() // 14

function createCounter(num) {
  let counter = typeof num === "undefined" ? 0 : num;
  return function (num) {
    if (typeof num === "number") {
      counter = num;
    }
    counter++;
    return counter;
  };
}

const counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter(6));
console.log(counter());
console.log(counter(11));
console.log(counter());
console.log(counter());

//   Задание 3
//   Создать функцию classNameEditor(), задача которой "управлять" css-классами.
//   Функция должна принимать строку с названием css-класса и булево значние.
//   Если булево значение true, то функция должна добавлять переданный css-класс,
//   если false, то найти и удалить значение из css-класса. Функция всегда должна
//   возвращать текущее значение css-класса.

//   Пример:

// classNameEditor() // '' - вернется пустая строка
// classNameEditor('test', true) // 'test' - добавили класс 'test'
// classNameEditor('test', true) // 'test' - попытались добавить класс 'test' еще раз (не должно быть дублирующих классов)
// classNameEditor('smth', true) // 'test smth' - добавили класс 'smth'
// classNameEditor('test', false) // 'smth' - удалили класс 'test'
// classNameEditor('test', false) // 'smth' - удалили класс 'test' еще раз (это невозможно тк класс уже удален)

function getClassNameEditor() {
  const classNamesList = [];

  return function (className, isAdded) {
    if (className !== undefined && isAdded !== undefined) {
      if (isAdded) {
        if (!classNamesList.includes(className)) {
          classNamesList.push(className);
        }
      } else {
        let index = classNamesList.indexOf(className);
        if (index !== -1) {
          classNamesList.splice(index, 1);
        }
      }
    }
    return classNamesList.join(" ");
  };
}

const classNameEditor = getClassNameEditor();
console.log(classNameEditor(undefined, false));
console.log(classNameEditor("test", true));
console.log(classNameEditor("test", true));
console.log(classNameEditor("smth", true));
console.log(classNameEditor("test", false));
console.log(classNameEditor("test", false));

//   Задание 4

// Создать функцию checkLogin, которая принимает 4 параметра.
// 1 параметр - это логин, введенный пользователем, 2 – правильный логин,
// 3 – callback, который вызовется если логин верный, 4 – callback,
// который вызовется если логин ложный.
// Пример вызова:

// checkLogin('user-admin', 'admin', itsOk, itsNotOk);

function checkLogin(userLogin, correctLogin, onSuccess, onFailure) {
  if (userLogin === correctLogin) {
    onSuccess();
  } else {
    onFailure();
  }
}

const itsOk = () => console.log("Вход выполнен успешно");
const itsNotOk = () => console.log("Ошибка: неправильный логин");

checkLogin("user-admin", "admin", itsOk, itsNotOk);

// Задание 5

// Написать функцию которая принимает массив строк (имена) и два колбэка.
// функция добавляет к каждому элементу массива фамилию "Smith" после
// чего передает получившийся массив в первый колбэк. Когда первый колбэк отработает,
// возвращеное им значение нужно передать во второй колбэк.
// 1ый колбэк: это функция которая принимает массив строк, добавляет к каждой
// строке "Mr. " и возвращает получившийся массив. 2ой колбэк: функция которая
// принимает массив строк и выводит через alert() каждый элемент массива.

const names = ["John", "Jane", "Bob"];

function addSmitAndCallCallbacks(names, callback1, callback2) {
  const namesWithSmith = names.map((name) => `${name} Smith`);

  callback2(callback1(namesWithSmith));
}

addSmitAndCallCallbacks(
  names,
  (namesWithSmith) => namesWithSmith.map((name) => `Mr ${name}`),
  (namesWithMrAndSmith) =>
    namesWithMrAndSmith.forEach((name) => console.log(name))
);

// Задание 6

// Дан массив [1,1,1,4,4,5,1,6,6,74,74,74,3].
// Написать функцию, которая вернет массив только из тех чисел, которые повторялись в исходном.
// myFuncName([1,1,1,4,4,5,1,6,6,74,74,74,3]) //  [1,4,6,74]

function findDuplicateNumbers(arr) {
  const amountOfNumbers = {};
  arr.forEach((num) => {
    if (amountOfNumbers[num]) {
      amountOfNumbers[num]++;
    } else {
      amountOfNumbers[num] = 1;
    }
  });

  const duplicates = [];
  for (const num in amountOfNumbers) {
    if (amountOfNumbers[num] > 1) {
      duplicates.push(Number(num));
    }
  }

  return duplicates;
}

const arr = [1, 1, 1, 4, 4, 5, 1, 6, 6, 74, 74, 74, 3];
const result = findDuplicateNumbers(arr);
console.log(result);

// Задание 7

// Cоздать случайный двумерный массив (вложенные массивы разной длины) из 8 элементов.
// Обработать массив reduce() и вернуть тот массив сумма элементов которого наибольшая.

const createArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

const outerArray = [];

for (let i = 0; i < 8; i++) {
  const innerArray = createArray(4, 100);
  outerArray.push(innerArray);
}

// console.log(outerArray);

const maxArray = outerArray
  .map((innerArray) => ({
    innerArray,
    sum: innerArray.reduce((a, b) => a + b),
  }))
  .reduce((acc, obj) => (obj.sum > acc.sum ? obj : acc)).innerArray;

console.log(maxArray);

// Задаиние 8

// Дан случайный массив чисел. С помощью метода .filter() отфильтруйте массив так,
// чтобы в новый массив вошли только четные двухзначные числа из исходного.

const randomNumbersArray = createArray(10, 100); // использую функцию из предыдущего задания, которая генерит одномерный массив случайных чисел

console.log(randomNumbersArray);

const evenTwoDigitNumbers = randomNumbersArray.filter(
  (num) => num >= 10 && num <= 99 && num % 2 === 0
);

console.log(evenTwoDigitNumbers);

// Задание 9

// Дан массив объектов.
// С помощью метода reduce() преобразуйте его в объект вида:

// const fbPlayersByTeams = {
//     Juventus: [{}, {}, {}],
//     PSG: [{}],
//     Chelsea: [{}, {}],
//     Vedrich97: [{}],
//     Barcelona: [{}, {}]
// }
// Игроки должны быть сгруппированы по командам в соответствующие 
// поля объекта fbPlayersByTeams. Под {} в примере имеется ввиду 
// полный объект игрока (такая запись сделана для упрощенного понимания примера)

const fbTeam = [
     {
     playerName:"Messi",
     team:"Barcelona"
     },
     {
     playerName:"Suarez",
     team:"Barcelona"
     },
     {
     playerName:"Ronaldo",
     team:"Juventus"
     },
     {
     playerName:"Buffon",
     team:"Juventus"
     },
     {
     playerName: 'Valerchik',
     team: 'Vedrich97'
     },
     {
     playerName:"Gonsalo",
     team:"Juventus"
     },
     {
     playerName:"Pedro",
     team:"Chelsea"
     },
    {
     playerName:"Zuma",
     team:"Chelsea"
     },
     {
     playerName:"Rico",
     team:"PSG"
     }
 ];


const fbPlayersByTeams = fbTeam.reduce((acc, player) => {
  if (acc[player.team]) {
    acc[player.team].push(player);
  } else {
    acc[player.team] = [player];
  }
  return acc;
}, {});

console.log(fbPlayersByTeams);
