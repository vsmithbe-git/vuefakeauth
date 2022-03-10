<script setup>
import {ref} from "vue";
import {useRouter} from "vue-router";
import useAuth from '../composable/useAuth';

const {isAuthenticated,  login} = useAuth();
const username = ref("");
const password = ref("");

const router = useRouter();

const logginIn = () => {
  login(username.value, password.value);
  if(isAuthenticated.value){
    router.push("/");
  }

};
</script>

<template>
<div class="flex flex-col space-y-12 items-center justify-center min-h-screen-nonav">
Logged in: {{isAuthenticated}} 
  <div class="bg-gray-200 flex shadow-2xl rounded-lg justify-center items-center overflow-hidden"> 
    
      <img class = "h-64" src="../assets/bglogin.png" alt="Login BG">
  <form @submit.prevent="logginIn" class="flex flex-col p-4 space-y-4">
    <input type="text" class="border-2 p-2 rounded-lg" placeholder="Username" v-model = "username"/>
    <input type="password" class="border-2 p-2 rounded-lg" placeholder="Password" v-model = "password"/>
    <button type="submit" @submit.prevent="logginIn" class="bg-indigo-600 text-indigo-200 py-2 rounded-lg">Login</button>
  </form>
  </div>
  </div>
 </template>