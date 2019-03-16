import Vue from "vue";
import router from "./router/router.js";

// import { Header,Tabbar, TabItem ,Swipe,SwipeItem, Button, Toast,
//     Lazyload} from 'mint-ui';
 
import axios from 'axios';     //发请求库
import moment from "moment";    //时间格式化库
var Mock = require('mockjs')
import 'babel-polyfill';            //此为一个补丁,兼容ie9
import  VueJsonp  from  'vue-jsonp';        //发jsonp请求

import LyTab from 'ly-tab';     //列表滑动库
import MintUI from 'mint-ui'
import 'mint-ui/lib/style.css'
import VuePreview from 'vue2-preview'           //vue缩略图插件
import APP from './App.vue';

Vue.use(MintUI);
Vue.use(VuePreview);         //vue缩略图插件

Vue.use(VueJsonp);          //这是vue发送jsonp请求包

Vue.use(LyTab);

//时间格式化输出部分
Vue.filter('myfilter',function(datatime,format='YY-MM-DD HH:MM:ss'){
    // datatime形参接收:给定的时间字符串,第二个形参接收格式
    //用moment 模块来解决时间格式化问题
    //moment() 直接调用得到是当前 的时间
    //format函数是格式化函数 
    return moment(datatime).format(format)




})


Vue.prototype.site = '/api/'; //代理服务

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