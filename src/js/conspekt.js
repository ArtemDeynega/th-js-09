// const settings = {
//     theme: 'dark',
//     isAuthenticated: true,
//     options: [1, 2, 3],
// };

// localStorage.setItem('settings', JSON.stringify(settings));

// const savedSettings = localStorage.getItem('settings');
// const parsedSettings = JSON.parse(savedSettings);

// console.log(savedSettings);
// console.log(parsedSettings);

// пример испольвоания  Web Storage API
const output = document.querySelector('#js-output');
const input = document.querySelector('#js-input');
const btn = document.querySelector('#js-btn');

const updateView = () => {
    output.textContent =
        localStorage.getItem('goit-js-module-12') || '';
};

const handleClick = () => {
    localStorage.setItem('goit-js-module-12', input.value);
    updateView();
};

updateView();
btn.addEventListener('click', handleClick);
