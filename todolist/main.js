const { ref, createApp, onMounted } = Vue;
const app = createApp({
    setup() {
        const inp = ref('')
        let id = 0
        const data = ref([{ id: ++id, text: 'lorem', }])

        const addItem = () => {
            data.value.push({ id: ++id, text: inp.value })
            inp.value = ''
        }
        const editItem = id => {
            const item = data.value.find(d => d.id === id);
            const text = prompt("請輸入要更改後的文字", item.text);
            item.text = text;
        };
        const delItem = id => {
            data.value = data.value.filter(x => x.id != id)
            console.log(data.value, id);
        }

        return {
            data,
            inp,
            addItem,
            editItem,
            delItem,
        }
    }
})

app.component('todo-item', {
    props: ['data'],
    template: `
    <li class="list-group-item d-flex justify-content-between align-items-center">
        <div class="fs-3">
            {{ data.text }}
        </div>
        <div>
            <button @click="$emit('edit',data.id)" class="btn btn-primary mx-3">edit</button>
            <button @click="$emit('del',data.id)" class="btn btn-close"></button>
        </div>
    </li>
    `
})

app.mount('#app')