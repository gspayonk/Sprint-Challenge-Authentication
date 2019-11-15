import axios from 'axios';

export default () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://localhost:3300',
        headers: {
            authorization: token
        }
    });
};