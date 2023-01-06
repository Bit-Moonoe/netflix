//실제로 설치한 axios 라이브러리를 import
import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://api.themoviedb.org/3', // tmdb api url
});

export default instance;

// instance.get('tmdb API URL')
// => https://api.themoviedb.org/3/tmdb API URL