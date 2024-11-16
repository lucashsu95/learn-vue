<script setup>
import { computed, ref } from "vue";
import Product from "@/components/TheProduct.vue";
import Header from "@/components/TheHeader.vue";

// product
const products = ref([
  {
    price: 200,
    name: "香魚",
    amount: 0,
  },
  {
    price: 100,
    name: "玉米",
    amount: 0,
  },
]);

// Search
const searchText = ref("");
const product_total = computed(() =>
  products.value.reduce((sum, x) => {
    return sum + x.price * x.amount;
  }, 0)
);
</script>

<template>
  <div>
    <Header v-model="searchText"></Header>

    <section>
      <h2>搜尋的值:{{ searchText }}</h2>
      <hr />
    </section>
    
    <section class="container mt-5">
      <h1>購物車</h1>
      <template v-for="product in products">
        <Product
          :key="product.name"
          v-if="product.name.includes(searchText)"
          :product="product"
        ></Product>
      </template>
      <h5>Total:{{ product_total }}</h5>
    </section>
  </div>
</template>
