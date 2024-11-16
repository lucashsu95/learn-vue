<script setup>
import { onMounted, ref } from 'vue';
import TheTodoItem from '@/components/TheTodoItem.vue';
import $ from 'jquery';

let id = 0;
const title = ref('')
const datas = ref([
  {
    id: ++id,
    title: 'lorem',
  }
])

onMounted(() => {
  console.log($('h1'));
  $('h1').text('TodoList')
})

const addItem = () => {
  datas.value.push({ id: ++id, title: title.value, })
  title.value = '';
}
const editItem = id => {
  const item = datas.value.find(x => x.id == id)
  const new_text = prompt('請輸入要更改後的值', item.title)
  item.title = new_text
}
const delItem = id => {
  datas.value = datas.value.filter(x => x.id !== id)
}

</script>

<template>
  <div class="container" style="max-width: 600px;">
    <div class="row my-5">
      <h1></h1>
      <p class="my-5 d-flex gap-2">
        <input v-model="title" type="text" class="form-control border border-info">
        <button class="btn btn-primary" @click="addItem">Add</button>
      </p>
      <hr>
      <ul class="list-group shadow p-0">
        <TheTodoItem v-for="data in datas" :key="data.id" :data="data" @del-item="delItem" @edit-item="editItem">
        </TheTodoItem>
      </ul>
    </div>
  </div>
</template>
