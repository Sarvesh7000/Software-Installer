<template>
  <div class="bg-gray-100 h-screen p-5 overflow-hidden font-sans">
    <div class="dashboard-header text-xl p-4 font-bold text-gray-800 text-left">Dashboard</div>
    <!-- Cards Section -->
    <div class="mt-7 flex flex-wrap justify-left space-x-10">
      <!-- Card 1 -->
      <div @click="$router.push({ name: 'ActivationDetails' })" class="cursor-pointer w-96 h-72 rounded overflow-hidden shadow-lg bg-gradient-to-r from-red-400 to-red-500 hover:from-red-300 hover:to-red-400 transition-transform transform hover:scale-105 relative">
        <div class="flex justify-center py-10">
          <i class="pi pi-verified text-white" style="font-size: 4rem"></i>
        </div>
        <div class="absolute inset-x-0 bottom-0 px-10 pb-8 text-center">
          <div class="font-bold text-3xl mb-5 text-white">Activation Details: 5</div>
        </div>
      </div>
      <!-- Card 2 -->
      <div @click="$router.push({ name: 'Report', params: { reportType: 'INSTALL' } })" class="cursor-pointer w-96 h-72 rounded overflow-hidden shadow-lg bg-gradient-to-r from-green-400 to-green-500 hover:from-green-300 hover:to-green-400 transition-transform transform hover:scale-105 relative">
        <div class="flex justify-center py-10">
          <i class="pi pi-download text-white" style="font-size: 4rem"></i>
        </div>
        <div class="absolute inset-x-0 bottom-0 px-10 pb-8 text-center">
          <div class="font-bold text-3xl mb-5 text-white">Installed Count: 5</div>
        </div>
      </div>
      <!-- Card 3 -->
      
      <!-- <div @click="$router.push({ name: 'Report', params: { reportType: 'UNINSTALL' } })" class="cursor-pointer w-96 h-72 rounded overflow-hidden shadow-lg bg-gradient-to-r from-blue-400 to-blue-500 hover:from-blue-300 hover:to-blue-400 transition-transform transform hover:scale-105 relative">
        <div class="flex justify-center py-8">
          <i class="fa-solid fa-trash text-white" style="font-size: 4rem"></i>
        </div>
        <div class="absolute inset-x-0 bottom-0 px-10 pb-8 text-center">
          <div class="font-bold text-3xl mb-4 text-white">Uninstalled Count: 5</div>
        </div>
      </div> -->
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard',
};
</script>

<style scoped>
body {
  margin: 0;
  overflow: hidden;
}

header {
  height: 60px;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.pt-20 {
  padding-top: 80px; 
}


.transition-transform {
  transition: transform 0.3s ease;
}


.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}

.from-gray-200 {
  --tw-gradient-from: #e5e7eb;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(229 231 235 / 0));
}

.to-gray-400 {
  --tw-gradient-to: #9ca3af;
}

.from-red-400 {
  --tw-gradient-from: #f87171;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(248 113 113 / 0));
}

.to-red-500 {
  --tw-gradient-to: #ef4444;
}

.from-green-400 {
  --tw-gradient-from: #34d399;
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to, rgb(52 211 153 / 0));
}

.to-green-500 {
  --tw-gradient-to: #10b981;
}


.hover\:scale-105:hover {
  transform: scale(1.05);
}
</style>
