<template>
  <div class="min-h-screen bg-gray-100 p-5 font-sans">
    <!-- Header -->
     <div class="main-container">
      
       <div class="bg-white p-2 flex justify-between items-center shadow-md mb-5 rounded-lg">
         <h1 class="text-xl font-bold text-blue-900">Report</h1>
        </div>
        
        <!-- Table -->
        <div class="overflow-x-auto bg-white shadow-lg rounded-lg mb-5">
          <DataTable :value="entries" tableStyle="min-width: 50rem" class="w-full">
            <Column field="code" header="Email"></Column>
            <Column field="name" header="MAC Address"></Column>
            <Column field="category" header="SSD Serial No"></Column>
            <Column field="quantity" header="App Install Count"></Column>
            <Column field="price" header="App List"></Column>
            <Column header="Action">
              <template #body="slotProps">
            <Button text raised icon="pi pi-list" @click="toggleDetails(slotProps.data)" />
          </template>
        </Column>
      </DataTable>
    </div>

    <!-- Details Section -->
    <div v-if="selectedEntry" class="p-5 bg-white rounded-lg shadow-lg">
      <h2 class="text-xl font-bold text-blue-900 mb-4">Details</h2>
      <div class="grid grid-cols-2 gap-3">
        <div><strong>Email:</strong> {{ selectedEntry.code }}</div>
        <div><strong>MAC Address:</strong> {{ selectedEntry.name }}</div>
        <div><strong>SSD Serial No:</strong> {{ selectedEntry.category }}</div>
        <div><strong>App Install Count:</strong> {{ selectedEntry.quantity }}</div>
        <div class="col-span-2"><strong>App List:</strong> {{ selectedEntry.price }}</div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Report',
  props: {
    reportType: {
      type: String,
      default: '',
      required: true
    }
  },
  created() {
    if (!this.reportType) {
      this.$router.push({ name: 'Dashboard' });
    } else {
      console.log('Report type:', this.reportType);
    }
  },
  data() {
    return {
      entries: [
        {
          id: '1000',
          code: 'sdhjqg@gmail.com',
          name: '27.25.34.23',
          price: 'App A , App B',
          category: 'dfufud78',
          quantity: 2
        },
        {
          id: '1001',
          code: 'sdeiuqg@gmail.com',
          name: '23.64.13.6',
          price: 'App C , App D , App E',
          category: '2iud78',
          quantity: 3
        },
        {
          id: '1002',
          code: 'sdkjb@gmail.com',
          name: '57.25.68.23',
          price: 'App D , App E',
          category: 'asdb3b',
          quantity: 2
        },
        {
          id: '1003',
          code: 'aiudb@gmail.com',
          name: '18.37.26.9',
          price: 'App A , App B , App C , App D',
          category: 'dfufud78',
          quantity: 4
        },
        {
          id: '1004',
          code: 'asdib@gmail.com',
          name: '37.27.89.0',
          price: 'App A',
          category: 'sdgdgi3',
          quantity: 1
        }
      ],
      selectedEntry: null
    };
  },
  methods: {
    toggleDetails(data) {
      if (this.selectedEntry && this.selectedEntry.id === data.id) {
        this.selectedEntry = null;
      } else {
        this.selectedEntry = data;
      }
      console.log(data);
    }
  }
};
</script>

<style scoped>
body {
  background-color: #f3f4f6;
  margin: 0;
}

header {
  background-color: white;
}

.table-container {
  border-radius: 0.5rem;
  box-shadow:
    0 4px 6px -1px rgb(0 0 0 / 10%),
    0 2px 4px -2px rgb(0 0 0 / 10%);
}

.table-container table {
  width: 100%;
  min-width: 50rem;
  border-collapse: collapse;
}

.table-container th,
.table-container td {
  padding: 1rem;
  border-bottom: 1px solid #e5e7eb;
  text-align: left;
}

.table-container th {
  background-color: #f9fafb;
  font-weight: bold;
  color: #4b5563;
}

.table-container tr:nth-child(even) {
  background-color: #f3f4f6;
}

.table-container tr:hover {
  background-color: #e2e8f0;
}

input[type='text']::placeholder {
  color: #9ca3af;
}
</style>
