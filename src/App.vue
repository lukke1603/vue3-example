<script setup>
import BookTable from './components/BookTable.vue';

const books = reactive([
  { id: 1, name: 'Clean Code', author: 'Uncle Bob' },
  { id: 2, name: 'Clean Architecture', author: 'Uncle Bob' },
  { id: 3, name: 'Clean Coder', author: 'Uncle Bob' },
]);
</script>

<template>
  <BookTable :items="books" />
</template>

<style scoped></style>
