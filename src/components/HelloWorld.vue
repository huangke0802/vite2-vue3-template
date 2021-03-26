<template>
  <h1 :class="example.blue">{{ msg }}</h1>

  <p>
    <a href="https://vitejs.dev/guide/features.html" target="_blank"
      >Vite Documentation</a
    >
    |
    <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
  </p>

  <button @click="state.count++">count is: {{ state.count }}</button>
  <p>
    Edit
    <code>components/HelloWorld.vue</code> to test hot module replacement.
  </p>

  <div>
    <p v-for="item in courses" :key="item.id">{{ item.id }}-{{ item.name }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps, reactive } from "vue";

import example from "@/styles/example.module.css";

defineProps({
  msg: String,
});

const state = reactive({ count: 0 });

type Course = {
  id: number;
  name: string;
};

const courses = reactive<Course[]>([
  { id: 1, name: "Vue" },
  { id: 2, name: "react" },
]);
</script>

<style scoped lang="scss">
$link-color: rgb(54, 189, 20);
a {
  color: $link-color;
}
</style>
