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
const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS', 'lit-html'],
};

const source = document
    .querySelector('#menu-template')
    .innerHTML.trim();

const template = Handlebars.compile(source);

/*
  Создадим переменную markup, в которую запишем 
  результат работы функции-шаблона template
*/

const markup = template(menuData);

console.log(markup);

/*
  Пример выше похож на операцию «поиск-и-замена»: шаблон просто 
  заменил {{title}} на значение свойства menuData.title. 
  После чего в результат попал сначала текст <ul>, 
  потом выполнился {{#each items}}, который последовательно 
  сгенерировал элементы списка, и затем список был закрыт </ul>.
*/

/*
  В js выберем контейнер по id, после чего используя 
  свойство innerHTML присвоим туда нашу строку.
*/
const container = document.querySelector('#munu-container');

container.innerHTML = markup;
