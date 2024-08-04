<template>
  <div class="bg-gradient-to-r from-teal-400 via-teal-300 to-coral-400 flex items-center justify-center min-h-screen">
    <form @submit.prevent="handleSubmit" class="max-w-md w-full bg-white p-8 rounded-xl shadow-lg transform transition-transform duration-300 hover:scale-105">
      <h2 class="text-3xl font-bold mb-6 text-center text-gray-800">Login</h2>
      <div class="mb-4">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="username">Username</label>
        <input
          type="text"
          id="username"
          required
          v-model="username"
          class="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
          placeholder="Enter your username"
        />
      </div>
      <div class="mb-6 relative">
        <label class="block text-gray-700 text-sm font-bold mb-2" for="password">Password</label>
        <input
          :type="passwordFieldType"
          id="password"
          required
          v-model="password"
          class="shadow appearance-none border border-gray-300 rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out pr-12"
          placeholder="Enter your password"
        />
        <i
          :class="passwordToggleIcon"
          @click="togglePasswordVisibility"
          class="pi absolute right-3 top-9 transform -translate-y-1/2 cursor-pointer text-gray-500"
          style="font-size: 1.5rem;"
        ></i>
      </div>
      <div class="flex items-center justify-between">
        <button
          type="submit"
          class="bg-teal-600 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-500 transition duration-300 ease-in-out"
        >
          Login
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: '',
      password: '',
      passwordVisible: false
    }
  },
  computed: {
    passwordFieldType() {
      return this.passwordVisible ? 'text' : 'password'
    },
    passwordToggleIcon() {
      return this.passwordVisible ? 'pi pi-eye' : 'pi pi-eye-slash'
    }
  },
  methods: {
    handleSubmit() {
      if (this.username && this.password) {
        localStorage.setItem('userToken', 'dummyToken');
        this.$router.push({ name: 'Dashboard' });
      } else {
        alert('Please enter valid credentials');
      }
    },
    togglePasswordVisibility() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>

<style scoped>
body, #app {
  margin: 0;
  padding: 0;
  height: 100%;
  font-family: 'Arial', sans-serif;
}

.min-h-screen {
  height: 100vh;
}

.flex {
  display: flex;
}

.items-center {
  align-items: center;
}

.justify-center {
  justify-content: center;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #38B2AC, #81E6D9, #FC8181);
}

.shadow-lg {
  box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

.transition {
  transition: all 0.3s ease;
}

.rounded-xl {
  border-radius: 0.75rem;
}

.focus\:ring-2:focus {
  ring: 2px solid #38B2AC;
}

.transform {
  transform: scale(1);
}

.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
