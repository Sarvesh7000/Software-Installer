<template>
  <div class="p-5">
    <!-- Header -->
    <Title heading="Activation Details"></Title>

    <!-- Search Option -->
    <div class="mb-4">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Search"
        class="p-3 border border-gray-300 rounded w-full focus:outline-none focus:ring-2 focus:ring-blue-500 font-sans"
      />
      <!-- <i class="pi pi-search text-black"></i> -->
    </div>

    <!-- Table -->
    <div class="overflow-x-auto bg-white shadow-lg rounded-lg">
      <DataTable :value="filteredEntries" tableStyle="min-width: 50rem" class="w-full">
        <Column field="code" header="IP Address"></Column>
        <Column field="name" header="MAC Address"></Column>
        <Column field="category" header="Hard Disk Serial No"></Column>
        <Column field="quantity" header="Email"></Column>
      </DataTable>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ActivationDetails',
  data() {
    return {
      searchQuery: '',
      entries: [
        {
          id: '1000',
          code: '192.108.10.2',
          name: '198.27.60.5',
          category: 'dfufud78',
          quantity: 'sdhjqg@gmail.com'
        },
        {
          id: '1001',
          code: '192.108.10.1',
          name: '127.68.86.2',
          category: 'wgdu7dfg',
          quantity: 'asdbk@gmail.com'
        },
        {
          id: '1002',
          code: '192.108.10.6',
          name: '156.38.27.29',
          category: 'wdgu6dd',
          quantity: 'sabdk@gmail.com'
        },
        {
          id: '1003',
          code: '192.108.10.5',
          name: '27.25.34.23',
          category: 'wdvj6dj',
          quantity: 'ashd@gmail.com'
        },
        {
          id: '1004',
          code: '192.108.10.4',
          name: '23.64.13.6',
          category: 'sdhd7jh',
          quantity: 'dgsk@gmail.com'
        }
      ]
    }
  },
  computed: {
    filteredEntries() {
      return this.entries.filter((entry) => {
        return Object.values(entry).some((value) =>
          value.toString().toLowerCase().includes(this.searchQuery.toLowerCase())
        )
      })
    }
  }
}
</script>

<style scoped>
body {
  background-color: #f3f4f6;
  margin: 0;
}

header {
  background-color: white;
}

input[type='text'] {
  border: 1px solid #d1d5db;
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
