import axios  from "axios";

const api = axios.create({
  baseURL: 'https://localhost:7055'
});

export const cartMixin =
{
        mapProductToCartItem(product, quantity = 1) {
        return {
        productId: product.id,       // map id → ProductId
        id: product.id,
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
                const response = await api.post(`/api/cart/${userId}/add`, cartItem);
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
                const response = await api.delete(`/api/cart/${userId}/remove/${productId}`);
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
                const response = await api.get(`/api/cart/${userId}`);
                return response.data; 
            } 
            catch (error) {
                console.error("Error fetching cart:", error);
                return { userId, items: [] }; 
            }
        }
};
