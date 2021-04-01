<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <div class="logo"></div>

  <input class="input" type="text" placeholder="请输入秘密" />
  <router-view></router-view>
  <!-- <MyIndex /> -->

  <router-link to="/">Go to Home</router-link>
  <router-link to="/about">Go to About</router-link>
  <router-link to="/anttemplate">Go to anttemplate</router-link>
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import MyIndex from "comps/MyIndex.vue";
import logo from "@/assets/logo.png";
import { ref } from "vue";

// export const repositories = ref(0);
// fetch("/api/users")
//   .then((res) => res.json())
//   .then((json) => repositories = json);

console.log(import.meta.env.VITE_APP_TITLE);
console.log(import.meta.env.VITE_SOME_KEY);
</script>

<style scoped>
.logo {
  background-image: url(@/assets/logo.png);
  width: 200px;
  height: 200px;
}

.input {
  transform: translateX(-10px);
}
::placeholder {
  color: blueviolet;
}
</style>
