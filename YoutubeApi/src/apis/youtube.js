import axios from 'axios';
const KEY = 'AIzaSyAxwxA6WfGw_qMYk6JN9KeUPUDBf1FqZ10';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})