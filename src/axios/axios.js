import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://skynetcloud-727s.firebaseio.com/'
});

export default instance;