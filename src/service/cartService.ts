import axios from 'axios';
import type {Cart, CartItem,Product} from '../models/types';

const API_URL = "https://localhost:7055/api/cart";

export const cartService = {
getCart(userId : string)
{
    return axios.get<Cart>(`${API_URL}/${userId}`);
},

addToCart(userId : string, product : CartItem)
{
    return axios.post<Cart>(`${API_URL}/${userId}`, product)
},

removeFromCart(userId: string, productId: string) {
    return axios.post<Cart>(`${API_URL}/${userId}/remove`, productId);
  },
  placeOrder(userId: string) {
    return axios.post(`${API_URL}/${userId}/placeOrder`);
  }
}
