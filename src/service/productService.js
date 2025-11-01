import axios from 'axios';

const API_URL = 'https://localhost:7055/api/';

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
        }
};