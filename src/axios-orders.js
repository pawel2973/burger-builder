import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-33f7f.firebaseio.com/'
});

export default instance;