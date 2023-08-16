<script setup>
import { NCard } from 'naive-ui';
import TheForm from './components/TheForm.vue'
import TheTabs from './components/TheTabs.vue';
import TheSignAndLogin from './components/TheSignAndLogin.vue';
</script>
<template>
  <div class="container">

    <!-- component 1 -->
    <n-card>
      <TheForm></TheForm>
    </n-card>
    <hr>
    <!-- component 2 -->
    <TheTabs></TheTabs>
    <hr>
    <!-- component 3 -->
    <TheSignAndLogin></TheSignAndLogin>


  </div>
</template>


<style scoped>
.container {
  display: flex;
  justify-content: center;
  flex-direction: column;
  width: 80%;
}
</style>
