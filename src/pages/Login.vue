<script setup>
import { useLoginStore } from "../store/index";
import { router } from '../router/index'

const { login } = useLoginStore();


const onLogin = () => {
  login();
  router.push("/")
};
</script>

<template>
  <h2>You Can Login Here</h2>
  <button @click="onLogin">Login</button>
</template>
