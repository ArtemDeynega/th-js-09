// import axios from 'axios';

export const getUsers = (page, limit) => {
    const baseUrl = `https://611bbc4622020a00175a46be.mockapi.io/users/?page=${page}&limit=${limit}`;

    return fetch(baseUrl, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    })
        .then(response => response.json())
        .then(data => data)
        .catch(error => console.log(error));
};

// export function getUsers() {
//     const response = axios.get(
//         `https://611bbc4622020a00175a46be.mockapi.io/api/v1/users/3`,
//     );
//     return response.data;
// }
