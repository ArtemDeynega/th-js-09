// import './styles/main.scss';
// import { test } from './utils/utils';

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

import menuTemplate from './templates/menu.hbs';

const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const markup = menuTemplate(menuData);

const container = document.querySelector('.menu-container');
container.innerHTML = markup;
