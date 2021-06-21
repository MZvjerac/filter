import axios from 'axios';

const instance = axios.create({
    baseURL: process.env.NODE_ENV === 'development' 
        ? 'https://localhost:44379/api/v1' 
        : ''
});

export default instance;