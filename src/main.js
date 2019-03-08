import Vue from "vue";

import router from "./router/router.js";
import { Header,Tabbar, TabItem ,Swipe,SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
import APP from './App.vue';
import axios from 'axios';
var Mock = require('mockjs')
// import 'babel-polyfill';            //此为一个补丁,发请求兼容ie9
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);

Vue.prototype.$axios= axios;  //将请求挂载到实例原型链上




new Vue({
    el:'#app',
    data:{
        show:true,
    },
    components:{
        APP,
    },
    template:"<APP></APP>",
    router

})