<script setup>
import useUser from '../utility/useUser'
import useRoute from "../utility/useRoute";
import UserForm from '../components/UserForm.vue'

const { gotoUrl } = useRoute();
const { addUser } = useUser();

const onSubmit = (obj) => {
  gotoUrl("UserList");
  addUser(obj)
}
</script>

<!-- <script>
import { ref, computed } from "vue";
export default {
  props: {
    msg: String
  },
  setup() {
    const firstName = ref("");
    const lastName = ref("");
    // const fullName = computed(() => {
    //   let fName = firstName.value;
    //   let lName = lastName.value;
    //   return `${fName} ${lName}`;
    // });
    const nameArray = ref([]);
    return {
      firstName,
      lastName,
      // fullName,
      nameArray,
    };
  },
  computed: {
    fullName() {
      let fName = this.firstName;
      let lName = this.lastName;
      return `${fName} ${lName}`;
    }
  },
  methods: {
    onSubmit() {
      this.nameArray.push(this.fullName);
      this.firstName = "";
      this.lastName = "";
    },
  },
};
</script> -->

<template>
  <h1>Composition API</h1>
  <div class="mb-10">
    <UserForm @submit="onSubmit($event)" />
  </div>
</template>

<style scoped>
.list {
  margin: 0;
  padding: 0;
  list-style: none;
}
</style>
