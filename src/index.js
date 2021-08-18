import axios from 'axios';

const BASE_URL =
    'https://611bbc4622020a00175a46be.mockapi.io/api/v1/';

const COLECTIONS = 'users/';
const user1 = {
    name: 'Anton Pivovarov',
    phone: '+380986654532',
    email: 'anton.piv@gmail.com',
};

// axios
//     .get(`${COLECTIONS}2`)
//     .then(response => console.log(response.data))
//     .catch(error => console.log(error.message));

async function fetchConnections(userId) {
    const response = await axios.get(`${COLECTIONS}${userId}`);
    return response.data;
}
fetchConnections(3)
    .then(data => console.log(data))
    .catch(error => error.message);
