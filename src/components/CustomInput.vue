<script setup>
import { watch, ref, toRef } from "vue";

const props = defineProps({
  name: String,
  label: String,
  isSubmit: Boolean,
});

const emit = defineEmits(["emitValue"]);

const refValue = ref("");
const blurValue = ref(false);
const validateValue = ref(true);
const submitting = toRef(props, "isSubmit");

// watchEffect(() => {
//   if(state.firstName.trim().length == 0) {
//     validateFirst.value = false
//   } else {
//     validateFirst.value = true
//   }
// })

watch([refValue, blurValue, submitting], (newState) => {
  if (newState[0].trim().length == 0) {
    validateValue.value = false;
  } else {
    validateValue.value = true;
  }
  emit("emitValue", { value: newState[0], validate: validateValue.value });
});
</script>

<template>
  <div class="mb-15">
    <label :for="name">{{ label }}</label>
    <input
      type="text"
      :name="name"
      :id="name"
      @blur="blurValue = true"
      v-model="refValue"
    />
    <div v-if="!validateValue">Please Enter {{ label }}</div>
  </div>
</template>

<style scoped>
label {
  margin-right: 10px;
}
.mb-15 {
  margin-bottom: 15px;
}
</style>
