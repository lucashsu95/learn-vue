<script setup>
import { defineProps } from 'vue';

defineProps(['data'])

defineEmits(['editItem', 'delItem']) // 可有可無，如果要在js裡做事情就要打

</script>
<template>
    <li class="list-group-item d-flex justify-content-between align-items-center py-3 px-5">
        <div>
            <div class="fs-4">{{ data.title }}</div>
        </div>
        <div class="d-flex align-items-center">
            <button class="btn btn-primary mx-3" @click="$emit('editItem', data.id)">edit</button>
            <button class="btn btn-close" @click="$emit('delItem', data.id)"></button>
        </div>
    </li>
</template>
