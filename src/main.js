import 'es6-promise/auto'
import { createApp } from "vue";
import App from "./App.vue";
import router from './router'
import Vuex from 'vuex'
import Antd from 'ant-design-vue';
import 'ant-design-vue/dist/antd.css';

//全局样式
import "@/styles/app.css";


createApp(App).use(router).use(Vuex).use(Antd).mount("#app");
