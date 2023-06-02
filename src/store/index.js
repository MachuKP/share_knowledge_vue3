import { defineStore } from "pinia";
import { computed, readonly, ref } from "vue";

export const useLoginStore = defineStore("login", () => {
  const isLogin = ref(false);
  const getLogin = computed(() => readonly(isLogin))
  function login() {
    isLogin.value = true
  }
  function logout() {
    isLogin.value = false
  }
  return {
    getLogin,
    login,
    logout
  }
});

// state, getters, actions version(option stores)

// export const useCounterStore = defineStore("counter", {
//   state: () => ({ isLogin: false }),
//   getters: {
//     getLogin: (state) => readonly(state),
//   },
//   actions: {
//     login() {
//       isLogin = true;
//     },
//   },
// });
