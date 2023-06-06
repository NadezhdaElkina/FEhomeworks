
// Задание 1

// Дан массив объектов.
// Каждому объекту из этого массива необходимо добавить метод .sayHello() 
// который выводит сообщение вида "Hello! My name is {NAME}", где NAME - это поле name каждого объекта


const persons = [
    {
        name: 'One',
        age: 1,
    },
    {
        name: 'Two',
        age: 2
    },
    {
        name: 'Three',
        age: 3
    },
    {
        name: 'Four',
        age: 4
    }
];



function sayHello () {
    console.log (`Hello, my name is ${this.name}`);
};

persons.forEach((person) => {
    person.sayHello = sayHello;
});
  

  persons[0].sayHello(); 
  persons[1].sayHello(); 
  persons[2].sayHello(); 
  persons[3].sayHello(); 


//   Задание 2

// используя setTimeout и .forEach(), вызовите метод .sayHello() 
// у каждого объекта с задержкой в 1 секунду


persons.forEach((person, index) => {
  setTimeout(() => {
    person.sayHello();
  }, (index + 1) * 1000);
});


//   Задание 3

// используя объект

// const creature = { name: 'Ctulhu', eyes: 8 };
// заставьте creature воспользоваться методом .sayHello() 
// любого объекта из массива, при этом не добавляя этот метод в creature

const creature = { name: 'Ctulhu', eyes: 8 };

persons[0].sayHello.call(creature);




// Задание 4

// напишите функцию которая принимает коллбэк (метод .sayHello() любого объекта из массива) 
// эта функция должна выводить сообщение вида "Ladies and Gentlemen, here is our person: "
// после чего должна запускать коллбэк (метод .sayHello() любого объекта из массива) пример:
// presentation(persons[0].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// // =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is One" // это результат запуска коллбэка persons[0].sayHello

// presentation(persons[1].sayHello) // возможно тут при передаче коллбэка что-то надо поменять
// // =====>>>>>
// "Ladies and Gentlemen, here is our person: "
// "Hello! My name is Two" // это результат запуска коллбэка persons[1].sayHello



function presentation (callback) {
    console.log (`Ladies and Genelmen, here is our person!`);
    callback();
};
  
presentation(persons[0].sayHello.bind(persons[0]));
presentation(persons[1].sayHello.bind(persons[1]));
presentation(persons[2].sayHello.bind(persons[2]));
presentation(persons[3].sayHello.bind(persons[3]));
