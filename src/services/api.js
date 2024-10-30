import axios from 'axios';
//Base da URL: https://api.themoviedb.org/3/
//url da API: https://api.themoviedb.org/3/movie/now_playing?api_key=0849abd766fa4d653689fad8442d1983&language=pt-BR

//criando uma constante para armazenar a URL base da API
const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export default api;
