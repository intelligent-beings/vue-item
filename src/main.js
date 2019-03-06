import Vue from "vue";

import router from "./router/router.js";
import { Header,Tabbar, TabItem } from 'mint-ui';
import 'mint-ui/lib/style.css';
import App from './App.vue'

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);




new Vue({
    el:'#app',
    data:{

    },
    components:{
        App
    },
    template:"<App/>",
    router

})