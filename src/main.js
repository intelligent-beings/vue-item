import Vue from "vue";

import router from "./router/router.js";
import { Header,Tabbar, TabItem ,Swipe,SwipeItem} from 'mint-ui';
import 'mint-ui/lib/style.css';
import APP from './App.vue'

Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);



new Vue({
    el:'#app',
    data:{

    },
    components:{
        APP,
    },
    template:"<APP></APP>",
    router

})