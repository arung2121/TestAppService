import axios from 'axios';
import type {Cart, CartItem,Product} from '../models/types';

const API_URL = "https://localhost:7055/api/cart";

export const cartService = {

 mapProductToCartItem(product: Product, quantity = 1): CartItem {
    return {
      productId: product.id,  // map id → ProductId
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity
    };
  },

async getCart(userId : string)
{
  
   try{
     const response = await axios.get<Cart>(`${API_URL}/${userId}`);
     return response.data.items || [];
   }
   catch(err){
    console.error('Error fetching cart', err);
    return [];
   }
    
},

async addToCart(userId : string, cartItem : CartItem)
{
    //const cartItem = this.mapProductToCartItem(product);
    //return axios.post<Cart>(`${API_URL}/${userId}`, product)

    try {
      const response = await axios.post<Cart>(`${API_URL}/${userId}/add`, cartItem)
      console.log('cart updated', response.data);
      return response.data;
    } catch (error) {
      console.error('Error adding to cart:', error);
      throw error;
    }
},

async removeFromCart(userId: string, productId: string, removeAll : boolean) {
    //return axios.post<Cart>(`${API_URL}/${userId}/remove`, productId);
    const body = {
       productId,
       removeAll
    };
     try {
      const response = await axios.post<Cart>(`${API_URL}/${userId}/remove`, body);
      return response.data;
    } catch (error) {
      console.error('Error removing from cart:', error);
      throw error;
    }
  },
  placeOrder(userId: string) {
    return axios.post(`${API_URL}/${userId}/placeOrder`);
  }
}
