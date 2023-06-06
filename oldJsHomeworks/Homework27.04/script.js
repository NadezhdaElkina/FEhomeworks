"use strict";

// Задача 1
// Создать класс Programmer, инстанс которого обладает полями name,
// stack (массив строк, типа [«Python», «PHP», «Java»]), и методом .code()
// (который перебирает массив stack и выводит сообщения вида «Oleg is coding on Python»,
// «Oleg is coding on PHP», «Oleg is coding on Java»). Метод code должен храниться в прототипе класса.
// Переопределить метод toString у инстансов Programmer, чтобы они выводили сообщение вида «Hello my name is Oleg»

class Programmer {
  constructor(name, stack) {
    this.name = name;
    this.stack = stack;
  }

  code() {
    this.stack.forEach((language) => {
      console.log(`${this.name} is coding on ${language}`);
    });
  }

  toString() {
    return `Hello my name is ${this.name}`;
  }
}

const programmer = new Programmer("Oleg", ["Python", "PHP", "Java"]);

console.log(programmer.toString());

programmer.code();

// Задача 2
// Создать массив из 10 случайных инстансов Programmer, и отфильтровать их
// с помощью функции getSeniorDeveloper так, чтобы в результирующий массив
// попали только те Programmer, у которы длина массива stack больше 4.

const programmers = [
  new Programmer("Tony Stark", [
    "Java",
    "Go",
    "C",
    "C#",
    "C++",
    "Kotlin",
    "Rust",
  ]),
  new Programmer("Peter Parker", ["Java", "Python", "C++", "Ruby"]),
  new Programmer("Dr. Strange", [
    "Arduino",
    "COBOL",
    "ADA",
    "Assembler",
    "Lisp",
    "Forth",
  ]),
  new Programmer("Rocket", ["Racket", "Pascal", "Perl", "Kotlin", "Scala"]),
  new Programmer("Dr. Robert Bruce Banner", [
    "R",
    "Julia",
    "MatLab",
    "Haskell",
    "J",
    "Rust",
  ]),
  new Programmer("Valerchik", ["Agda", "Coq", "Idris"]),
  new Programmer("Steve Rogers", ["Basic", "Bash", "PHP", "Powershell"]),
  new Programmer("Vision", ["Machine code"]),
  new Programmer("Peter Quill", ["JS", "SQL", "SmallTalk"]),
  new Programmer("Groot", ["Brainfuck", "Whitespace"]),
];

Programmer.getSeniorDeveloper = (programmers) =>
  programmers.filter((programmer) => programmer.stack.length > 4);

const seniorDevelopers = Programmer.getSeniorDeveloper(programmers);

console.log(seniorDevelopers);

// Задача 3.
// Напишите функцию, которая вычисляет длину линий в стандартной двухмерной системе координат.
// Координаты начала и конца линий должны храниться в объектах.

// Создайте три линии.
// Вычислите их длины с помощью функции
// Проверьте, могут ли три линии сформировать треугольник
// Помните: Длину линии можно найти по теореме Пифагора.
// Стороны могут сформировать треугольник если длина каждой стороны треугольника
// должны быть меньше суммы длин остальных сторон.

class Point {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
}

const point1 = new Point(86, 16);
const point2 = new Point(37, 56);
const point3 = new Point(36, 87);
const point4 = new Point(25, 49);
const point5 = new Point(56, 24);
const point6 = new Point(58, 75);

class Line {
  constructor(p1, p2) {
    this.p1 = p1;
    this.p2 = p2;
  }

  get length() {
    const katet1 = this.p1.x - this.p2.x;
    const katet2 = this.p1.y - this.p2.y;
    return Math.sqrt(katet1 ** 2 + katet2 ** 2);
  }
  static canLinesFormATriangle(line1, line2, line3) {
    return (
      line1.length + line2.length > line3.length &&
      line2.length + line3.length > line1.length &&
      line1.length + line3.length > line2.length
    );
  }
}

const line1 = new Line(point1, point2);
const line2 = new Line(point3, point4);
const line3 = new Line(point5, point6);

console.log(Line.canLinesFormATriangle(line1, line2, line3));

// Задача 4

// Создать конструктор Car, который принимает параметры model, color, price.
// Конструктор должен возвращать объект в котором присутствуют вышеназванные
// поля со значениями. Каждый представитель класса Car должен обладать
// методом run() который выводит сообщение вида : MODEL + “ ” + COLOR + ” is running”.

class Car {
  constructor(model, color, price) {
    this.model = model;
    this.color = color;
    this.price = price;
  }

  static run(car) {
    console.log(`${car.model} ${car.color} is running`);
  }
}

const car1 = new Car("DeLorean DMC-12", "gray", 1234567890);
const car2 = new Car("Batmobile", "black", 999999999);

console.log(car1);
console.log(car2);

// class Car {
//     constructor(model, color, price){
//         this.model = model;
//         this.color = color;
//         this.price = price;
//     }

//     run() {
//         console.log(`${this.car.model} ${this.car.color} is running`);
//     }
// }

// car1.run();
// car2.run();

// Задача 5

// Создать конструктор Book, с помощью этого конструктора создать массив из 8 книг (объектов).
// Каждая книга должна представлять из себя объект, в котором есть три поля:
// author, bookName, pageAmount. Создать функцию getBiggerBook(),
// которая принимает массив книг и возвращает ОДНУ книгу с наибольшим количеством страниц

class Book {
  constructor(author, bookName, pageAmount) {
    this.author = author;
    this.bookName = bookName;
    this.pageAmount = pageAmount;
  }

  static getBiggerBook(books) {
    let biggerBook = books[0];
    books.forEach((book) => {
      if (book.pageAmount > biggerBook.pageAmount) {
        biggerBook = book;
      }
    });
    return biggerBook;
  }
}

const myFavoriteBooks = [
  new Book("Donald Knuth", "Art of computer programming", 720),
  new Book("Evgeni Kliuev", "Between two stools", 177),
  new Book("Immanuel Kant", "Critique of pure reason", 784),
  new Book("Jean Baudrillard", "Simulacres et simulation", 320),
  new Book("Pelevin", "Chapaiev and void", 416),
  new Book("Stanislaw Lem", "Cyberiada", 608),
  new Book("Folk", "Kurochka Ryaba", 10),
  new Book("Umberto Eco", "Baudolino", 624),
];

const bookWithMostPages = Book.getBiggerBook(myFavoriteBooks);
console.log(bookWithMostPages);

// Задача 6

// Создать класс Timer, инстанс которого запускает таймер и выводит в консоль
// прошедшее время в секундах (1 2 3 4 5 и тд) инстанс должен обладать методами
// .start() .stop() которые запускают и останавливают таймер а также методом
// .reset() который сбрасывает таймер на 0. С помощью Timer вы должны создать
// несколько таймеров и убедится в том, что они работают независимо друг от друга.
// останавливайте таймер через некоторое время после запуска с помощью setTimeout()

class Timer {
  constructor() {
    this.intervalId = null;
    this.time = 0;
  }

  start() {
    this.intervalId = setInterval(() => {
      console.log(++this.time);
    }, 1000);
  }

  stop() {
    clearInterval(this.intervalId);
  }

  reset() {
    this.time = 0;
  }
}

const timer = new Timer();

timer.start();

setTimeout(() => {
  timer.reset();
  setTimeout(() => {
        timer.stop();
    }, 3000);
}, 5000);
