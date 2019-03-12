import Vue from "vue";

import router from "./router/router.js";
import { Header,Tabbar, TabItem ,Swipe,SwipeItem, Button, Toast} from 'mint-ui';
import 'mint-ui/lib/style.css';
import APP from './App.vue';
import axios from 'axios';     //发请求库
import moment from "moment";
import LyTab from 'ly-tab';    //图片列表滑动库
 
var Mock = require('mockjs')
import 'babel-polyfill';            //此为一个补丁,发请求兼容ie9

//这是引入mint ui 里的组件定议部分
Vue.component(Header.name, Header);
Vue.component(Tabbar.name, Tabbar);
Vue.component(TabItem.name, TabItem);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component( Button.name, Button);
Vue.component(Toast.name, Toast);

Vue.use(LyTab);

//时间格式化输出部分
Vue.filter('myfilter',function(datatime,format='YY-MM-DD HH:MM:ss'){
    // datatime形参接收:给定的时间字符串,第二个形参接收格式
    //用moment 模块来解决时间格式化问题
    //moment() 直接调用得到是当前 的时间
    //format函数是格式化函数 
    return moment(datatime).format(format)




})




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