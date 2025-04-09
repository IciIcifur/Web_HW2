import axios from 'axios';

export const apiClient = axios.create({
    baseURL: 'https://dog.ceo/api',
    headers: {
        'Content-Type': 'application/json',
    },
});