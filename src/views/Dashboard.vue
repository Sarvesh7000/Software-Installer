<template>
  <div class="p-5">
    <Title heading="Dashboard" />
    <!-- Cards Section -->
    <div class="mt-10 flex flex-wrap justify-left space-x-8 p-2">

      <!-- Card 1  Activation-Details -->
      <div
        @click="$router.push({ name: 'ActivationDetails' })"
        class="cursor-pointer w-96 h-72 rounded overflow-hidden shadow-lg bg-red-50 hover:bg-red-200 transition-transform transform hover:scale-105 relative"
      >
        <div class="flex justify-center py-10">
          <i class="pi pi-verified text-red-600" style="font-size: 4rem"></i>
        </div>
        <div class="absolute inset-x-0 bottom-0 px-10 pb-8 text-center">
          <div class="font-bold text-3xl mb-5 text-gray-500 hover:text-black">
            Activation Details: 5
          </div>
        </div>
      </div>

      <!-- Card 2 Installed-Count -->
      <div
        @click="$router.push({ name: 'Report', params: { reportType: 'INSTALL' } })"
        class="cursor-pointer w-96 h-72 rounded overflow-hidden shadow-lg bg-green-50 hover:bg-green-200 transition-transform transform hover:scale-105 relative"
      >
        <div class="flex justify-center py-10">
          <i class="pi pi-download text-green-600" style="font-size: 4rem"></i>
        </div>
        <div class="absolute inset-x-0 bottom-0 px-10 pb-8 text-center">
          <div class="font-bold text-3xl mb-5 text-gray-500 hover:text-black">
            Installed Count: 5
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dashboard'
}
</script>

<style scoped>
.transition-transform {
  transition: transform 0.3s ease;
}
</style>
