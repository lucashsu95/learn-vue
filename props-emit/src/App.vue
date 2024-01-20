<script setup>
import { computed, ref } from 'vue';
import TheProduct from './components/TheProduct.vue';
import TheHeader from './components/TheHeader.vue';

// product
const products = ref([
  {
    price: 200,
    name: '香魚',
    amount: 0,
  },
  {
    price: 100,
    name: '玉米',
    amount: 0,
  },
])

// Search 
const searchText = ref('')
const product_total = computed(() => products.value.reduce((sum, x) => {
  return sum + x.price * x.amount;
}, 0));
</script>

<template>
  <TheHeader v-model="searchText"></TheHeader>
  <section>
    <h2>
      搜尋的值:{{ searchText }}
    </h2>
    <hr>
  </section>
  <section class="container mt-5">
    <h1>購物車</h1>
    <template v-for="product in products" :key="product.name">
      <TheProduct v-if="product.name.includes(searchText)" :product="product"></TheProduct>
    </template>
    <h5>Total:{{ product_total }}</h5>
  </section>
</template>
