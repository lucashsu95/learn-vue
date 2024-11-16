<script setup>
defineProps(['modelValue'])
defineEmits(['update:modelValue'])
</script>

<template>
    <header class="navbar navbar-dark bg-dark px-5">
        <div class="navbar-brand">Navbar</div>
        <form action="" class="d-flex gap-2">
            <input class="form-control" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" />
            <button class="btn btn-outline-success">Search</button>
        </form>
    </header>
</template>