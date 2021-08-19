import './styles/main.scss';
<<<<<<< Updated upstream

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
=======
import template from './templates/main.hbs';
import { doRequests, getUsers } from './utils/requests';
import { API_METHODS } from './utils/constants';

let page = 1;
let dataState = [];
let inputState = '';
let isEditID = null;
const limit = 16;

window.onload = async () => {
    const wrapper = document.getElementById('contentWrapper');
    const getData = await doRequests(API_METHODS.GET);

    if (getData) {
        contentWrapper.innerHTML = template({ data: getData });
    }

    const addBtn = document.getElementById('addBtn');

    // --------

    const modal = new bootstrap.Modal(
        document.getElementById('exampleModal'),
    );

    const toDoInput = document.getElementById('toDoName');
    const createToDo = document.getElementById('saveData');
    const btnContainer = document.querySelectorAll('.btn-container');

    btnContainer.forEach(btn => {
        btn.addEventListener('click', async e => {
            if (e.target.nodeName === 'I') {
                const isEdit = e.target.classList.contains('btnEdit');
                const toDoId = e.target.dataset.id;
                if (isEdit) {
                    const toDoName = e.target.dataset.name;
                    toDoInput.value = toDoName;
                    isEditID = toDoId;

                    modal.show();
                } else {
                    const deleteResult = await doRequests(
                        API_METHODS.DELETE,
                        {},
                        toDoId,
                    );

                    if (deleteResult) {
                        window.location.reload();
                    }
                }
            }
        });
    });

    addBtn.addEventListener('click', () => {
        modal.show();
    });

    toDoInput.addEventListener('input', e => {
        if (e.target.value.trim() !== '') {
            inputState = e.target.value;
        }
    });

    createToDo.addEventListener('click', async () => {
        if (isEditID) {
            const editResult = await doRequests(
                API_METHODS.PUT,
                {
                    todo_name: inputState,
                },
                isEditID,
            );

            if (editResult) {
                modal.hide();
                window.location.reload();
            }
        } else {
            if (inputState !== '') {
                const addResult = await doRequests(API_METHODS.POST, {
                    todo_name: inputState,
                    completed: false,
                });

                if (addResult) {
                    modal.hide();
                    window.location.reload();
                }
            } else {
                alert('Поле ввода не может быть пустым.');
            }
>>>>>>> Stashed changes
        }
    });
};
