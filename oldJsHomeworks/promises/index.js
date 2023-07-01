

// Сделайте запрос по адресу https://reqres.in/api/users?page=1, 
// обработайте ответ и выведите в консоль только тех юзеров у 
// которых в поле last_name не менее 5ти символов


fetch('https://reqres.in/api/users?page=1')
.then((responseObj) => responseObj.json())
.then(({data}) => {
    data.forEach((obj) => {
        if(obj.first_name.length >= 5){
            console.log(obj);
        }
    })
})


// Сделайте запрос по адресу https://reqes.in/api/users?page=1, 
// обработайте ошибку этого запроса и выведите в консоль "Не удалось загрузить данные"

fetch('https://reqes.in/api/users?page=1')
.catch(() => {
    console.log('Не удалось загрузить данные');
})


// Cделайте запрос https://reqres.in/api/users?page=1, ПОСЛЕ чего найдте id 
// пользователя под именем и фамилией Emma Wong, сделайте следующий запрос 
// на https://reqres.in/api/users/${id}, ПОСЛЕ выведите данные пользователя в консоль

fetch('https://reqres.in/api/users?page=1')
.then(responseObj => responseObj.json())
.then(({data}) => {
    emmaWong = data.find(({first_name, last_name}) =>
        first_name === 'Emma' && last_name === 'Wong');
    if (emmaWong) {
        console.log('Emma Wong has been found!');
    }
    return emmaWong;
})
.then((emmaWong) => {
    return fetch(`https://reqres.in/api/users/${emmaWong.id}`)
})
.then((responseObj) => responseObj.json())
.then(({data}) => {
    console.log(`Emma's data is `, data);
})