<template>
  <!-- Your HTML goes here -->
  <div class="register-container">
    <h2>Register</h2>
    <form @submit.prevent="handleRegister">
      <div class="form-group">
        <label for="email">Email</label>
        <input v-model="email" type="email" id="email" required />
      </div>

      <div class="form-group">
        <label for="password">Password</label>
        <input v-model="password" type="password" id="password" required />
      </div>
      
    <div class="form-group">
    <label for="secretQuestion">Secret Question:</label>
    <select v-model="secretQuestion" id="secretQuestion" required>
      <option value="" disabled>Select a Question</option>
      <option v-for="question in secretQuestions" :key="question" :value="question">
        {{ question }}
      </option>
    </select>
   </div>
    
      <div class="form-group">
        <label for="secretAnswer">Answer:</label>
        <input type="text" id="secretAnswer" v-model="secretAnswer" required />
      </div>

      <button type="submit">Register</button>
    </form>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'

const email = ref('')
const password = ref('')
const secretQuestion = ref('')
const secretAnswer = ref('')

const secretQuestions = [
  "What is your mother's maiden name?",
  "What was your first pet's name?",
  "What was the name of your first school?",
  "What is your favorite book?"
]

const handleRegister = async () => {
  // Your registration logic here
  try {
    const userData = {
      email: email.value,
      password: password.value,
      secretQuestion: secretQuestion.value,
      secretAnswer: secretAnswer.value
    }

    const response = await axios.post('https://localhost:7055/api/users/register', userData)
    alert(response.data.message)
  } catch (err) {
    console.error(err)
    alert('Registration failed')
  }
}
  
</script>

<style scoped>
.register-container {
  max-width: 400px;
  margin: 50px auto;
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
  background-color: #42b983;
  color: white;
  border: none;
  cursor: pointer;
}
</style>
