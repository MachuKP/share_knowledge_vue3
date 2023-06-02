<script setup>
import useUser from '../utility/useUser'
const { userArray, deleteUser } = useUser();

const onDelete = (id) => {
  deleteUser(id)
}
</script>

<template>
  <h1>User</h1>
  <ul class="list">
    <li v-for="name in userArray">
      {{ name.fullName }}
      <button @click="onDelete(name.id)">Delete</button>
    </li>
  </ul>
</template>
