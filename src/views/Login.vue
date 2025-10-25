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
import { defineAsyncComponent, ref } from 'vue'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const error = ref('')
const router = useRouter()

const handleLogin = async () => {
  error.value = ''

  // Simulate API call (replace with real API)
  if (email.value === 'user@example.com' && password.value === 'password123') {
    alert('Login successful!')
    // Redirect or store token
  } else {
    error.value = 'Invalid email or password'
  }
}

const goToRegister = async () =>{
  router.push("/register");
}
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
}
.error {
  color: red;
  margin-top: 10px;
}
</style>
