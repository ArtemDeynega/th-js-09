// Таймаут
// const btn = document.querySelector('#js-button');

// const onClick = () => {
//     setTimeout(() => {
//         alert('I love async JS!');
//     }, 2000);
// };

// btn.addEventListener('click', onClick);

// function sayHello() {
//     console.log('Hello!');
// }

// const timerId = setTimeout(sayHello, 5000);

// clearTimeout(timerId);

// Интревалы
// const startBtn = document.querySelector('.js-start');
// const stopBtn = document.querySelector('.js-stop');

// let timerId = null;
// // При клике на Старт, запустим интервал,
// // будем каждую секунду выводить в консоль строку,
// // используем Date.now для уникального числа,
// // чтобы строки в консоли были разные
// startBtn.addEventListener('click', () => {
//     timerId = setInterval(() => {
//         console.log(`I love async JS! ${Date.now()}`);
//     }, 1000);
// });

// stopBtn.addEventListener('click', () => {
//     clearInterval(timerId);
//     console.log('setInterval stopped!');
// });

//this внутри функций-интервалов

// const obj = {
//     classicFoo() {
//         setTimeout(function () {
//             console.log(`${this} in object scope`);
//             // window
//         }, 1000);
//     },
//     arrowFoo() {
//         setTimeout(() => {
//             console.log(`${this} in object scope`);
//             // obj
//         }, 1000);
//     },
// };

// setTimeout(function () {
//     console.log(`${this} in global scope`);
//     // window
// }, 1000);
// setTimeout(() => {
//     //window
//     console.log(`${this} is global scope`);
// }, 1000);

// obj.classicFoo();
// obj.arrowFoo();

// Класс Date
// const date = new Date();

// console.log(date);

// Datestring
// const date = new Date('March 4, 2017');
// console.log(date);

// 7 аргументов
// const date = new Date(2000, 5, 8, 12, 0, 0, 0);
// console.log(date);

// Unix время

// const date = new Date(1000000);
// const date = Date.now();
// console.log(date);

//Геттеры Date
// const date = new Date();
// // показывает текущую дату
// console.log('Date: ' + date);
// // возвращает день месяца от 1 до 31
// console.log('getDate(): ' + date.getDate());
// // возвращает день недели от 0 до 6
// console.log('getDay(): ' + date.getDay());
// // возвращает месяц от 0 до 11
// console.log('getMonth(): ' + date.getMonth());
// // возвращает год из 4 цифр
// console.log('getFullYear(): ' + date.getUTCFullYear());
// // возвращает час
// console.log('getHours(): ' + date.getHours());
// // возвращает минуты
// console.log('getMinutes(): ' + date.getMinutes());
// // возвращает секунды
// console.log('getSeconds(): ' + date.getSeconds());
// // возвращает милесекунды
// console.log('getMilliseconds(): ' + date.getMilliseconds());
// // возвращает кол-во миллисекунд прошедших со старта эпохи Unix
// console.log('getTime(): ' + date.getTime());

// const date = new Date();
// // проверим количество мс с с начала эпохи Unix
// console.log(`Время с начала эпохи Unix: ${date.getTime()}`);

// let result = 'Date: ';
// result += date.getFullYear() + '/'; // год
// result += date.getMonth() + '/'; // месяц
// result += date.getDate() + '. Day of week: '; //день недели начиная с 1
// result += date.getDay() + '.'; // день нечиная с 0

// result += ' Time: ' + date.getHours() + ':'; // часы
// result += date.getMinutes() + ':'; //минуты
// result += date.getSeconds() + ':'; // секунды
// result += date.getMilliseconds() + ''; // милесекунды
// // строка должна показать текущее время и дату

// console.log(result);
