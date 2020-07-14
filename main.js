import Vue from 'vue';
import App from './App';
import http from "./http.js";
import store from "store/index.js";
// import router from './router';
import '@/assets/css/common.scss';
import  { navi } from './utils/navigator.js';
Vue.config.productionTip = false;
// 挂载导航
Vue.prototype.$navi = navi;
// 挂载store
Vue.prototype.$store = store;
// 挂载http
Vue.prototype.$http = http;
App.mpType = 'app';
const app = new Vue({
	store,
	...App
})
app.$mount(); //为了兼容小程序及app端必须这样写才有效果
