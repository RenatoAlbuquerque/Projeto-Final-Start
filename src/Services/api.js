import axios from "axios";

const APIKEY = 'd7f6c12f64msh94a335035113f20p1879f7jsn81f38943d30f'

const api = axios.create({
    baseURL: 'https://makeup.p.rapidapi.com',

    headers: {
        'x-rapidapi-host': 'makeup.p.rapidapi.com',
        'x-rapidapi-key': APIKEY
        }   
    
    

})

export default api