import axios from 'axios';

const API_URL = 'https://localhost:7055/api/';
const ELASTIC_API_URL = 'http://localhost:9200/'

export const productService = {
    async getProducts(){
        const token = localStorage.getItem('jwtToken');
        const config = {
            headers:
            {
                Authorization : `Bearer ${token}`
            }
        };
        return axios.get(`${API_URL}products`,config);
        },

    async searchProducts(query){
        const token = localStorage.getItem('jwtToken');
        const config = {
            headers:
            {
                Authorization : `Bearer ${token}`
            }
        };
        console.log(query);
        return axios.post(`${ELASTIC_API_URL}products/_search`,query);
    }
};