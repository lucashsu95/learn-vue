<script setup>
import { computed } from "vue";
const props = defineProps({
  product: {
    type: Object,
  },
});
const emit = defineEmits(["update:product"]);

const userProduct = computed({
  get() {
    return props.product;
  },
  set(val) {
    emit("update:product", val);
  },
});
</script>
<template>
  <div class="card d-flex m-3 p-4 shadow" style="width: 18rem">
    <h3>{{ userProduct.name }}</h3>
    <div
      class="text-light bg-success px-2 py-1 my-2 rounded"
      style="width: max-content"
    >
      ${{ userProduct.price }}
    </div>
    <p class="d-flex gap-3">
      <button
        @click="() => (userProduct.amount = Math.max(0, --userProduct.amount))"
        class="btn btn-primary"
      >
        -
      </button>
      <input type="number" v-model="userProduct.amount" class="form-control" />
      <button @click="userProduct.amount++" class="btn btn-primary">+</button>
    </p>
  </div>
</template>
