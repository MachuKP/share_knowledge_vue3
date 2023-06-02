<script setup>
import { reactive, computed, ref, toRef } from "vue";
import Input from "./CustomInput.vue"

const emit = defineEmits(["submit"]);

const state = reactive({
  firstName: "",
  lastName: "",
  fullName: computed(() => {
    return `${state.firstName} ${state.lastName}`;
  })
});

const validateFirst = ref(true)
const validateLast = ref(true)

// --toRef--
const firstRef = toRef(state, "firstName");
const lastRef = toRef(state, "lastName");

const submitting = ref(false);

const setFirstName = (event) => {
  firstRef.value = event.value;
  validateFirst.value = event.validate;
}

const setLastName = (event) => {
  lastRef.value = event.value;
  validateLast.value = event.validate;
}

const handleSumbit = () => {
  let userObj = {
    id: crypto.randomUUID(),
    fullName: state.fullName,
  };
  submitting.value = true;
  if (validateFirst.value && validateLast.value) {
    emit("submit", userObj);
    state.firstName = "";
    state.lastName = "";
  }
};
</script>

<template>
  <form @submit.prevent="handleSumbit">
    <Input
      name="firstName"
      label="First Name"
      @emitValue="setFirstName($event)"
      :isSubmit="submitting"
    />
    <Input
      name="lastName"
      label="Last Name"
      @emitValue="setLastName($event)"
      :isSubmit="submitting"
    />
    <button type="submit" @click="submitting = true">Submit</button>
  </form>
</template>
