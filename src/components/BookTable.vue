<script setup>
const props = defineProps({
  items: {
    type: Array,
    default: [],
  },
  headers: {
    type: Array,
    default: [],
  },
});
</script>

<template>
  <table class="table-auto">
    <thead>
      <tr>
        <th v-for="header of headers" :key="header.key">{{ header.label }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item of items" :key="item.id">
        <td></td>
      </tr>
    </tbody>
  </table>
</template>
