import axios  from "axios";

const API_URL = 'https://localhost:7055';

export const cartMixin =
{
        mapProductToCartItem(product, quantity = 1) {
        return {
        ProductId: product.id,       // map id → ProductId
        name: product.name,
        description: product.description,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity
        };
    },
        async addToCart(userId , product )
        {
            const cartItem = this.mapProductToCartItem(product, 1);
            try{
                const response = await axios.post(`${API_URL}/api/cart/${userId}/add`, cartItem);
                console.log('cart updated', response.data);
                alert(`${product.name} added to cart`);
            }
            catch(error)
            {
                console.error('Error adding to cart:', error);
                alert('Failed to add item to cart.');
            }
        },
        async removeFromCart(userId , productId)
        {
            
             try{
                const response = await axios.delete(`${API_URL}api/cart/${userId}/remove/${productId}`);
                console.log('cart updated', response.data);
            }
            catch(error)
            {
                console.error('Error adding to cart:', error);
                alert('Failed to add item to cart.');
            }
        },
        async getCartItem(userId)
        {
            try {
                const response = await axios.get(`${API_URL}/api/cart/${userId}`);
                return response.data; 
            } 
            catch (error) {
                console.error("Error fetching cart:", error);
                return { userId, items: [] }; 
            }
        }
};
