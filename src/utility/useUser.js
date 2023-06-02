import { ref } from "vue";

const userArray = ref([]);

export default function useUser() {

  function addUser(user) {
    userArray.value.push(user)
  } 

  function deleteUser(id) {
    for(let i = 0; i < userArray.value.length; i++) {
      if(userArray.value[i].id == id) {
        userArray.value.splice(i, 1)
      }
    }
  }

  return {
    userArray,
    addUser,
    deleteUser
  };
};