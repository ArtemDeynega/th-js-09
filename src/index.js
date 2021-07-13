import { reject } from 'lodash';
import './js/module-11';

// import { USER_NAME } from './utils/constants';

// import './styles/main.scss';
// import template from './templates/main.hbs';
// import data from './data/data.json';
// import {
//     setLocalStorage,
//     getLocalStorage,
// } from './utils/utils';

// import { throttle } from 'lodash';

// let tmpUserNameState = '';

// window.onload = () => {
//     const container = document.getElementById('container');

//     const isName = getLocalStorage();

//     //Важно

//     // localStorage.setItem('test', JSON.stringify(data));
//     // try {
//     //     const test = localStorage.getItem('test');
//     //     const test2 = JSON.parse(test);
//     //     console.log(test2.navItems);
//     // } catch (error) {
//     //     console.log(error);
//     // }

//     if (isName) {
//         const newData = Object.assign({}, data, {
//             name: isName,
//         });
//         container.innerHTML = template(newData);
//     } else {
//         container.innerHTML = template(data);

//         const nameInput =
//             document.getElementById('nameInput');
//         const saveUser =
//             document.getElementById('saveUser');

//         nameInput.addEventListener(
//             'input',
//             throttle(evt => {
//                 tmpUserNameState = evt.target.value;
//             }, 250),
//         );

//         saveUser.addEventListener('click', () => {
//             setLocalStorage(tmpUserNameState);
//             const newData = Object.assign({}, data, {
//                 name: tmpUserNameState,
//             });
//             container.innerHTML = template(newData);
//         });
//     }
// };

// Сеттеры Date
// Для установки даты существует 2 способа. Установим 1500000000000мс
// с начала эры Unix с помощью конструктора

// const date = new Date(2017, 6, 14, 5, 40, 0, 0);
// // проверим
// console.log(
//     `2017,6,14,5, 40 соотвествует ${date.getTime()}`,
// );
// /* С помощью методов set */
// // Создадим новый объект с текущей датой

// const secondDate = new Date();

// // Изменим год и в нем же месяц и день месяца
// secondDate.setFullYear(2017, 6, 14);
// // Изменим час и в не же минуты, секунды и милесекунды
// secondDate.setHours(5, 40, 0, 0);
// // Проверим
// console.log(
//     `2017,6,14,5,40 соотвествует ${secondDate.getTime()}`,
// );

// Форматирование и вывод дат
// let date = new Date();

// // формат ввода
// const options = {
//     weekday: 'long',
//     year: 'numeric',
//     month: 'short',
//     day: 'numeric',
//     hour: '2-digit',
//     minute: '2-digit',
// };

// // Украина
// const localeUk = date.toLocaleDateString('UK-uk', options);

// console.log(localeUk);

// // USA
// const localeUs = date.toLocaleDateString('en-US', options);
// console.log(localeUs);

// Promise API
// const promise = new Promise((resolve, reject) => {
//     /*
//      * Эта функция будет вызвана автоматически. В ней можно выполнять
//      * любые асинхронные операции. Когда они завершатся — нужно
//      * вызвать одно из: resolve(результат) при успешном выполнении,
//      * или reject(ошибка) при ошибке.
//      */
//     setTimeout(() => {
//         resolve(console.log('success!'));
//     }, 2000);
// });

// Promise and then

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         /*
//          * Если какое-то условие выполняется, то есть все хорошо,
//          * вызываем resolve и получает данные. Условие зависит от задачи.
//          */
//         resolve('Данные переданы в функцию resolve :)');
//         // Если что-то не так, вызываем reject и передаем ошибку
//         // reject("Данные переданны в функцию reject :(")
//     }, 2000);
// });
// // Выполнится мгновенно
// console.log('ПЕРЕД promise.then');

// const onResolve = data => {
//     console.log('ВНУТРИ promise.then - onResolve');
//     console.log(data); // "Данные переданы в функцию resolve :)"
// };

// const onReject = error => {
//     console.log('ВНУТРИ promise.then - onReject');
//     console.log(error); // 'Ошибка передана в функцию reject :(
// };

// promise.then(
//     // будет вызвана через 2 секунды, если обещание выполнится успешно
//     onResolve,
//     // будет вызвана через 2 секунды, если обещание выполнится с ошибкой
//     onReject,
// );

// // Выполнится мгновенно
// console.log('ПОСЛЕ promise.then');

// Если onResolve и onReject не содержат сложной логики, их объявляют как инлайн функции в методе then.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         // Если все ок, то вызывается resolve и передаем данные
//         resolve('Данные переданы в функцию resolve :)');
//         // Если что-то не так, вызываем reject и передаем ошибку
//         //         // reject("Данные переданны в функцию reject :(")
//     }, 2000);
// });
// // Выполнится мгновенно
// console.log('ПЕРЕД promise.then');

// promise.then(
//     // Будет вызвана через 2 секунды, если обещание выполнится успешно
//     data => {
//         console.log('ВНУТРИ promise.then ');
//         console.log(data); // "Данные переданы в функцию resolve :)"
//     },
//     error => {
//         console.log('ВНУТРИ promise.then ');
//         console.log(error); // 'Ошибка передана в функцию reject :(
//     },
// );
// // Выполнится мгновенно
// console.log('ПОСЛЕ promise.then');

// Promise and catch
// Создадим обещание, сделаем задержку на 2 секунды, вызовем reject, имитируя выполнение промиса с ошибкой.

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject('Произошла Ошибка! :(');
//     }, 2000);
// });
// /*
//  * then не выполнится так как в функции fn, внутри new Promise(fn),
//  * был вызван reject(). А catch как раз выполнится через 2 секунды
//  */
// promise
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });

// Promise adn finally
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve('Успех!');
//     }, 2000);
// });

// promise
//     .then(data => console.log(data))
//     .catch(error => console.log(error))
//     .finally(() => console.log('Финиш - finally()'));

//  Цепочки промисов

// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve(5);
//     }, 2000);
// });

// promise
//     .then(value => {
//         console.log(value); // 5
//         return value * 2;
//     })
//     .then(value => {
//         console.log(value); // 10
//         return value * 3;
//     })
//     .then(value => {
//         console.log(value); // 30
//         return value * 4;
//     })
//     .then(value => {
//         console.log(value); //120
//     })
//     .catch(error => {
//         console.log(error);
//     });

//  Цепочки промисов Статические методы класса Promise/ Promise.all()
const makePromise = (text, delay) => {
    return new Promise(resolve => {
        setTimeout(() => resolve(text), delay);
    });
};

const promiseA = makePromise('promiseA', 1000);
const promiseB = makePromise('promiseB', 3000);
/*
 * Выполнится спустя 3 секунды, когда выполнится второй промис с задержкой в 3c.
 * Первый выполнится через секунду и просто будет готов
 */
Promise.all([promiseA, promiseB])
    .then(result => console.log(result)) // ["promiseA", "promiseB"]
    .catch(error => console.lof(error));
