<template>
 
    <div class="cart">
      <h1>Your Cart</h1>
    
     <div v-if="cart.length===0">Cart is empty</div>

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

<script setup>
import { cart } from "../store/cartStore.js";

const removeFromCart = (id) => {
  cart.remove(id);
};

const placeOrder = () => {
  // Call your API here, e.g.,
  // await axios.post('/api/cart/{userId}/placeorder')
  alert(`Order placed! Total: 💲${cart.getTotal()}`);
  cart.clear();
};
</script>
