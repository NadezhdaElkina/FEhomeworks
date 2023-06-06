// задание 1

const car = {
  model: "tesla",
  adress: {
    country: {
      city: {
        name: "Boston",
        street: {
          name: "pushkina",
          number: 2,
        },
      },
    },
    region: ["Iowa", "Texas", "California"],
  },
  specs: {
    price: {
      low: 2000,
      mid: 3000,
      high: 5000,
    },
    engine: {
      power: 400,
      lowPower: 100,
    },
  },
};

// С помощью деструктуризации запишите в отдельны переменные:
// 1.1 Название города в котором находится авто

const {
  adress: {
    country: {
      city: { name: city },
    },
  },
} = car;

// 1.2 Четвертый регион из поля region (по умолчанию значение должно быть 'Arizona')

const {
  adress: {
    country: {
      region: [, , , region = "Arizona"],
    },
  },
} = car;

// 1.3 Поле high, объекта price

const {
  specs: {
    price: { high },
  },
} = car;

// 1.4 Из объекта specs записать поле fuelConsumption, которое по умолчанию должно являться объектом вида:
// { city: 12, mix: 10, country: 8 }

const {
  specs: { fuelConsumption = { city: 12, mix: 10, country: 8 } },
} = car;

// Задание 2
// Дан объект:
// const student = { math: 5, biology: 3, language: 2, isOboltus: true };
// 2.1 Напишите программу, которая умножит все ЧИСЛОВЫЕ (и только числовые)
// значения на 2 и перезапишет каждое свойство объекта (числового типа).

const student = { math: 5, biology: 3, language: 2, isOboltus: true };

for (let key in student) {
  if (typeof student[key] === "number") {
    student[key] *= 2;
  }
}

console.log(student);

// 2.2 Напишите программу, которая посчитает среднее арифметическое всех оценок студента.
// Если средняя оценка (после умножения) будет больше 5, то поле isOboltus должно стать false.

//использовала результат предыдущего for in, который перезаписал умноженные на 2 значения оценок

let sum = 0;
let count = 0;

for (let key in student) {
  if (typeof student[key] === "number") {
    sum += student[key];
    count++;
  }
}

const average = sum / count;

if (average > 5) {          
  student.isOboltus = false;
}

console.log(student); // 6.666666666666667  от сердца аж отлегло



// ну или два в одном с исходным объектом, сразу умножить и проверить на isOboltus:

// const student = { math: 5, biology: 3, language: 2, isOboltus: true };

// let sum = 0;
// let count = 0;

// for (let key in student) {
//   if (typeof student[key] === "number") {
//     student[key] *= 2;
//     sum += student[key];
//     count++;
//   }
// }

// const average = sum / count;
// if (average > 5) {
//   student.isOboltus = false;
// }

// console.log(student);
