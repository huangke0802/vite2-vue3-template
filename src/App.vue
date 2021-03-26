<template>
  <img alt="Vue logo" src="@/assets/logo.png" />
  <img alt="Vue logo" :src="logo" />
  <HelloWorld msg="Hello Vue 3 + Vite" />

  <div class="logo"></div>

  <input class="input" type="text" placeholder="请输入秘密" />
</template>

<script setup>
import HelloWorld from "comps/HelloWorld.vue";
import logo from "@/assets/logo.png";

fetch("/api/users")
  .then((res) => res.json())
  .then((json) => console.log(json));
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
