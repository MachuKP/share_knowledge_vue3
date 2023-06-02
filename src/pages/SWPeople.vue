<script setup>
import { onMounted, ref } from 'vue'
import useService from '../utility/useService';

const data = ref()
const { getRequest } = useService();
onMounted(async() => {
    data.value = await getRequest("https://swapi.dev/api/people")
})
</script>

<template>
<ul>
    <li v-for="item in data.results">
        Name: {{ item.name }}
        <button>Detail</button>
    </li>
</ul>
</template>