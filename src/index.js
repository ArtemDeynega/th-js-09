import './styles/main.scss';
import './styles/_button.scss';
// import { test } from './utils/utils';
// import menuTemplate from './templates/menu.hbs';
import './js/conspekt';
import './js/storage';
import { load, save } from './js/storage';
import { doRequests, getUsers } from './utils/requests';

// test();

// class Test {
//     constructor(item) {
//         this.item = item;
//     }
//     consoleItem() {
//         console.log(this.item);
//     }
// }

// const test1 = new Test('Привет');

// test1.consoleItem();

// const menuData = {
//     title: 'Eat it createElement, templates rule!',
//     items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
// };

// const markup = menuTemplate(menuData);

// const container = document.querySelector('.menu-container');
// container.innerHTML = markup;

// const dog = {
//     name: 'Mango',
//     age: 3,
//     isHapy: true,
// };

// const dogJson = JSON.stringify(dog);

// console.log(dogJson);

// const json = '{"name":"Mango","age":3,"isHappy":true}';

// const dog = JSON.parse(json);
// console.log(dog);
