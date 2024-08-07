<template>
  <header
    class="sticky top-0 bg-gradient-to-r from-blue-500 to-purple-600 shadow-lg z-10 font-serif"
  >
    <div class="container mx-auto p-2 flex justify-between items-center">
      <h1 @click="goToDashboard" class="text-2xl font-bold text-white cursor-pointer hover: to-blue-200 transition-transform transform hover:scale-105 relative ">Software Installer</h1>
      <div class="flex items-center space-x-10 relative">
        <button
          @click="toggleDropdown"
          class="bg-white hover:bg-gray-300 text-black font-bold py-2 px-2 rounded-full flex items-center border-transparent overflow-hidden cursor-pointer shadow-md focus:outline-none"
        >
          <i class="pi pi-user mr-2 text-base"></i>
        </button>
        <transition name="fade">
          <div
            v-if="dropdownOpen"
            class="absolute top-12 right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-50"
          >
            <button
              class="block w-full text-left px-3 py-2 text-gray-700 hover:bg-gray-100 transition-colors duration-150 pi pi-sign-out"
              @click="logout"
            >
              Logout
            </button>
          </div>
        </transition>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      dropdownOpen: false
    }
  },
  methods: {
    toggleDropdown() {
      this.dropdownOpen = !this.dropdownOpen
    },
    logout() {
      localStorage.removeItem('userToken')

      this.$router.push({ name: 'Login' })

      this.dropdownOpen = false
    },
    goToDashboard() {
      if (this.$route.name !== 'Dashboard') {
        this.$router.push({ name: 'Dashboard' })
      }
    }
  }
}
</script>

<style>
header {
  transition: all 0.3s ease;
}

.container {
  max-width: 1280px;
  margin: 0% auto;
}

.bg-gradient-to-r {
  background-image: linear-gradient(to right, #3b82f6, #9333ea);
}

.shadow-lg {
  box-shadow:
    0 10px 15px -3px rgba(0, 0, 0, 0.1),
    0 4px 6px -2px rgba(0, 0, 0, 0.05);
}

button {
  transition:
    background-color 0.3s ease,
    transform 0.3s ease;
  margin: 0%;
}

button:hover {
  transform: scale(1.05);
}

button:active {
  transform: scale(0.95);
}

i {
  transition: color 0.3s ease;
}

i:hover {
  color: #4b5563;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>
