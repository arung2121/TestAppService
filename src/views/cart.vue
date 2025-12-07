<template>
 
    <div class="cart">
      <h1>Your Cart</h1>
    
     <div v-if="cart.items.length===0">Cart is empty</div>

     <div v-else>
      <div v-for="item in cart.items" :key="item.id" class="cart-item">
        <img :src="item.imageUrl" :alt="item.name" class="cart-item-image" />
        <div>
          <h3>{{ item.name }}</h3>
          <p>💲{{ item.price }} x {{ item.quantity }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
     </div> 
     <h2>Total: 💲{{ cart.getTotal() }}</h2>
      <button @click="placeOrder">Place Order</button>
    </div>
  </div>
  
</template>

<script  lang="ts" setup>
import { cart } from "../store/cartStore.js";

const removeFromCart = (id : string) => {
  cart.remove(id);
};

const placeOrder = () => {
  // Call your API here, e.g.,
  // await axios.post('/api/cart/{userId}/placeorder')
  alert(`Order placed! Total: 💲${cart.getTotal()}`);
  cart.clear();
};
</script>




<style scoped>
.cart {
  max-width: 800px;
  margin: 40px auto;
  padding: 20px;
  background-color: #fefefe;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

.cart h1 {
  text-align: center;
  margin-bottom: 30px;
  font-size: 2rem;
  color: #333;
}

.cart-item {
  display: flex;
  align-items: center;
  padding: 15px;
  border-bottom: 1px solid #ddd;
}

.cart-item:last-child {
  border-bottom: none;
}

.cart-item-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 8px;
  margin-right: 20px;
}

.cart-item div {
  flex: 1;
  display: flex;
  flex-direction: column;
}

.cart-item h3 {
  margin: 0 0 8px;
  font-size: 1.1rem;
  color: #333;
}

.cart-item p {
  margin: 0 0 10px;
  font-size: 1rem;
  color: #555;
}

.cart-item button {
  align-self: flex-start;
  padding: 6px 12px;
  font-size: 0.9rem;
  color: #fff;
  background-color: #e74c3c;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

.cart-item button:hover {
  background-color: #c0392b;
}

h2 {
  text-align: right;
  margin-top: 20px;
  font-size: 1.5rem;
  color: #333;
}

button {
  padding: 10px 20px;
  font-size: 1rem;
  color: #fff;
  background-color: #3498db;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-top: 15px;
  float: right;
}

button:hover {
  background-color: #2980b9;
}

/* Empty cart message */
.cart > div:first-child {
  text-align: center;
  font-size: 1.2rem;
  color: #777;
  margin-top: 20px;
}
</style>

