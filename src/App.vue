<script setup>
import { useLoginStore } from "./store/index"

const { getLogin, logout } = useLoginStore()
</script>

<template>
  <!-- --router-- -->
  <div v-if="getLogin">
    <router-link to="/">Home</router-link> |
    <router-link to="/user">User</router-link> |
    <router-link to="/swpeople">SWPeople</router-link> |
    <router-link to="/login" @click="logout">Logout</router-link>
  </div>
  <router-view />
</template>

