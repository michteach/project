/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// let numberOfFilms;

// function start() {
//    numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");

//    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
//     numberOfFilms = +prompt("Сколько фильмов вы уже посмотрели?", "");
//    }
// }

// start();

// let personalMovieDB= {
//     count: numberOfFilms,
//     movies: {},
//     actors: {},
//     genres: [],
//     privat: true
// };



// function rememberMyFilms() {
//     for (let i = 0; i < 2; i++) {
//         const a = prompt('Один из последних просмотренных фильмов?', ''),
//          b = +prompt('На сколько оцените его?', '');
    
//          if (a != null && b !=null && a !='' && b != '' && a.length < 50) {
//             personalMovieDB.movies[a] = b;
//             console.log('done');
//          }   else {
//              console.log('error');
//              i--;
//          }
//     }
// }

// rememberMyFilms();

// function detectPersonalLevel() {
//     if(personalMovieDB.count < 10) {
//         console.log('Просмотрено мало');
//     } else if(personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
//         console.log('Просмотрено средне');
//     } else if(personalMovieDB.count >= 30) {
//         console.log('Киноман!');
//     } else {
//         console.log('Ошибка!');
//     }
// }

// detectPersonalLevel();

// function showMyDB(hidden) {
//    if(!hidden) {
//        console.log(personalMovieDB);
//    }
// }

// showMyDB(personalMovieDB.privat);

// function writeYourGenres() {
//     for(let i = 1; i <= 3; i++) {
//         personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//     }
// }

// writeYourGenres();

const options = {
    name: 'Tags',
    subname: 'Meta',
    color: {
        bg: 'red',
        border: 'green'
    },
    makeTest: function() {
        console.log("Test");
    }
};

let counter = 0;

for(let key in options) {

    if(typeof (options[key]) === 'object') {
        for(let i in options[key]) {
            console.log(`Ключ ${i} со значением ${options[key][i]}`);
        
        }
    } else {
        console.log(`Ключ ${key} со значением ${options[key]}`);
       // counter++;
    }
}

options.makeTest();

//console.log(counter);
// console.log(Object.values(options));

const {border, bg} = options.color;

//console.log(Object.values({border, bg}));
console.log(Object.values({border, bg}));