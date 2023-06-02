import { createWebHistory, createRouter } from "vue-router";
import Home from "../pages/Home.vue";
import User from "../pages/User.vue";
import Login from "../pages/Login.vue";
import NotFound from "../pages/NotFound.vue";
import SWPeople from "../pages/SWPeople.vue";
import { useLoginStore } from "../store/index";

const routes = [
  { path: "/", name: "Home", component: Home },
  { path: "/user", name: "UserList", component: User },
  { path: "/swpeople", name: "SWPeople", component: SWPeople },
  { path: "/:path(.*)*", name: "NotFound", component: NotFound },
  { path: "/login", name: "Login", component: Login },
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});

//can use with async try, catch
router.beforeEach((to, from) => {
  const loginStore = useLoginStore();
  if (to.name !== "Login" && !loginStore.getLogin.value) {
    //return false will block routing
    return { name: "Login" };
  }
});
