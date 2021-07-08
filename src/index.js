import { USER_NAME } from './utils/constants';

import './styles/main.scss';
import template from './templates/main.hbs';
import data from './data/data.json';
import {
    setLocalStorage,
    getLocalStorage,
} from './utils/utils';

import { throttle } from 'lodash';

let tmpUserNameState = '';

window.onload = () => {
    const container = document.getElementById('container');

    const isName = getLocalStorage();

    //Важно

    // localStorage.setItem('test', JSON.stringify(data));
    // try {
    //     const test = localStorage.getItem('test');
    //     const test2 = JSON.parse(test);
    //     console.log(test2.navItems);
    // } catch (error) {
    //     console.log(error);
    // }

    if (isName) {
        const newData = Object.assign({}, data, {
            name: isName,
        });
        container.innerHTML = template(newData);
    } else {
        container.innerHTML = template(data);

        const nameInput =
            document.getElementById('nameInput');
        const saveUser =
            document.getElementById('saveUser');

        nameInput.addEventListener(
            'input',
            throttle(evt => {
                tmpUserNameState = evt.target.value;
            }, 250),
        );

        saveUser.addEventListener('click', () => {
            setLocalStorage(tmpUserNameState);
            const newData = Object.assign({}, data, {
                name: tmpUserNameState,
            });
            container.innerHTML = template(newData);
        });
    }
};
