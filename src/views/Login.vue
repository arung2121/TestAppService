<template>
  <div class="login-container">
    <h2>Login</h2>
    <form @submit.prevent="handleLogin">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>

      <button type="submit">Login</button>

      <p v-if="error" class="error">{{ error }}</p>
    </form>

    <button type="button" @click="goToRegister">Register</button>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import axios from "axios";

// Reactive variables
const email = ref("");
const password = ref("");
const error = ref("");

// Router instance
const router = useRouter();

// Handle login
const handleLogin = async () => {
  error.value = "";

  try {
    const response = await axios.post(
      "https://localhost:7055/api/users/login",
      {
        username: email.value,
        password: password.value,
      }
    );

    if (response.status === 200) {
      const token = response.data.token;
      const userId = response.data.userId; 

      // Save JWT token to localStorage
      localStorage.setItem("jwtToken", token);
      localStorage.setItem('userId', userId);
      console.log(userId);

      // Navigate to products page (SPA navigation)
      router.push("/products");
    } else {
      error.value = "Invalid email or password";
    }
  } catch (err) {
    error.value =
      err.response?.data?.message || "Login failed. Please try again.";
    console.error("Login error:", err);
  }
};

// Navigate to register page
const goToRegister = () => {
  router.push("/register");
};
</script>

<style scoped>
.login-container {
  max-width: 400px;
  margin: 100px auto;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 8px;
}
.form-group {
  margin-bottom: 15px;
}
label {
  display: block;
  margin-bottom: 5px;
}
input {
  width: 100%;
  padding: 8px;
  box-sizing: border-box;
}
button {
  padding: 10px 20px;
  margin-top: 10px;
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
