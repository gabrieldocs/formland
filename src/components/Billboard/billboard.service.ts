import axios from "axios";


const api = axios.create({
    baseURL: 'https://api.quotable.io',
    timeout: 1000,
    headers: {
        'Accept' : 'application/json'
    }
});

export function getRandomQuote(): Promise<any> {
    return api.get('/random')
        .then((response) => response.data);
}

export default api;
