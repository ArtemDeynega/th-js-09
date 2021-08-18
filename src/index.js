import './styles/main.scss';

import template from './templates/main.hbs';
import { getUsers } from './utils/requests';

let page = 1;
let dataState = [];
const limit = 16;

window.onload = () => {
    const container = document.querySelector('#container');
    const load = document.querySelector('#load');
    getUsers(page, limit).then(users => {
        dataState = [...users.users];
        console.log(dataState);

        container.innerHTML = template({ pageContent: dataState });
    });
    // load.addEventListener('click', () => {
    //     getUsers(++page, limit).then(users => {
    //         dataState = [...dataState, ...users.users];
    //         console.log(dataState);

    //         container.innerHTML = template({
    //             pageContent: dataState,
    //         });
    //     });
    // });

    window.addEventListener('scroll', () => {
        const { scrollTop, clientHeight, scrollHeight } =
            document.documentElement;
        console.log({ scrollTop, clientHeight, scrollHeight });
        if (scrollTop + clientHeight > scrollHeight - 10) {
            getUsers(++page, limit).then(users => {
                dataState = [...dataState, ...users.users];
                container.innerHTML = template({
                    pageContent: dataState,
                });
            });
        }
    });
};
