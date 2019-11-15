import axios from './axiosWithAuth';

export default async () => {
    const result = await axios()
        .get('/api/jokes')
        .then(res => res);
    return result;
};