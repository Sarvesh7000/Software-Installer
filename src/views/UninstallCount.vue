<template>
    <div class="min-h-screen bg-white p-0">
        <div class="bg-gray-200 p-0 flex justify-between items-center">
            <h1 class="text-xl font-bold mb-4">Uninstall Data</h1>
        </div>
      
      <!-- Table -->
      <div class="overflow-x-auto">
        <DataTable :value="entries" tableStyle="min-width: 50rem">
          <Column field="code" header="Email"></Column>
          <Column field="name" header="MAC Address"></Column>
          <Column field="category" header="SSD Serial No"></Column>
          <Column field="quantity" header="App Uninstall Count"></Column>
          <Column field="price" header="App List"></Column>
        </DataTable>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Uninstall',
    data() {
      return {
        entries: [
        {
          id: '1000',
          code: 'kbkbd@gmail.com',
          name: '27.25.34.23',
          // description: 'Product Description',
          // image: 'bamboo-watch.jpg',
          price: 'App A , App B',
          category: 'kjdwn3',
          quantity: 2,
          // inventoryStatus: 'INSTOCK',
          // rating: 5
        },
        {
          id: '1001',
          code: 'dwbjw@gmail.com',
          name: '37.38.28.1',
          // description: 'Product Description',
          // image: 'bamboo-watch.jpg',
          price: 'App C , App B , App E',
          category: 'jsdkn3',
          quantity: 3,
          // inventoryStatus: 'INSTOCK',
          // rating: 5
        },
        {
          id: '1002',
          code: 'sdkfj@gmail.com',
          name: '27.25.34.23',
          // description: 'Product Description',
          // image: 'bamboo-watch.jpg',
          price: 'App A , App E , App B',
          category: 'wkjd3nn',
          quantity: 3,
          // inventoryStatus: 'INSTOCK',
          // rating: 5
        },
        {
          id: '1003',
          code: 'sdjbh@gmail.com',
          name: '35.28.19.0',
          // description: 'Product Description',
          // image: 'bamboo-watch.jpg',
          price: 'App A , App D ',
          category: 'adbhkw2n',
          quantity: 2,
          // inventoryStatus: 'INSTOCK',
          // rating: 5
        },
        {
          id: '1004',
          code: 'jdb@gmail.com',
          name: '77.20.84.0',
          // description: 'Product Description',
          // image: 'bamboo-watch.jpg',
          price: 'App C',
          category: 'wjheb3n',
          quantity: 1,
          // inventoryStatus: 'INSTOCK',
          // rating: 5
        },
      ]
        
        
      };
    }
  };
  </script>
  
  <style>
  </style>
  