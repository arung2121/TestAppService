<template>
  <div class="products">
    <h1>Products</h1>
    <router-link to="/cart">🛒 View Cart ({{ cart.items.length }})</router-link>
    <div v-if="loading" class="loading">Loading...</div>

    <div v-else class="product-grid">
      <div v-for="product in products" :key="product.id" class="product-card">
        <img
          :src="product.imageUrl"
          :alt="product.name"
          class="product-image"
        />
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-desc">{{ product.description }}</p>
        <p class="product-price">💲{{ product.price }}</p>
        <button class="add-cart-btn" @click="addToCart(product)">
          Add to Cart
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { productService } from "../service/productService.js";
import { cart } from "../store/cartStore.js";

const products = ref([]);
const loading = ref(true);

const addToCart = (product) => {
  cart.add(product);
  alert(`${product.name} added to cart!`);
};

onMounted(async () => {
  try {
    const response = await productService.getProducts();
    products.value = response.data;
  } catch (error) {
    console.log("Failed to load products", error);
  } finally {
    loading.value = false;
  }
});
</script>

<style scoped>
.products {
  padding: 20px;
  text-align: center;
}

.loading {
  font-size: 1.2rem;
  color: #555;
}

.product-grid {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  margin-top: 20px;
}

.product-card {
  background: #fff;
  border: 1px solid #ddd;
  border-radius: 12px;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
  width: 220px;
  padding: 16px;
  text-align: center;
  transition: transform 0.2s ease, box-shadow 0.2s ease;
}

.product-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
}

.product-image {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 8px;
}

.product-name {
  font-size: 1.1rem;
  margin: 10px 0 5px;
  color: #222;
}

.product-desc {
  font-size: 0.9rem;
  color: #666;
  min-height: 40px;
}

.product-price {
  font-weight: bold;
  color: #333;
  margin: 10px 0;
}

.add-cart-btn {
  background-color: #0078d7;
  color: white;
  border: none;
  padding: 8px 12px;
  border-radius: 8px;
  cursor: pointer;
  transition: background-color 0.2s;
}

.add-cart-btn:hover {
  background-color: #005fa3;
}
</style>
