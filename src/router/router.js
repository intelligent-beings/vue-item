import Vue from "vue";
import VueRouter from "vue-router";
import hom from "../pages/hom/hom.vue";
import member from "../pages/member/member.vue";
import seek from "../pages/seek/seek.vue";
import shopping from "../pages/shopping_car/shopping_car.vue"
import newmsg from '../components/newmsg/newmsg.vue'
import detalis from '../components/detalis/detalis.vue';
import imgList from '../components/imgList/imgList.vue';
import imgDetails from '../components/imgDetails/imgDetails.vue'
import productList from '../components/productList/productList.vue'


Vue.use(VueRouter);


export default new VueRouter({
    mode:"history",
    
    routes:[
        { path: '/', redirect: '/home'},
        { path:"/hom", component:hom },
        { path:"/member", component:member },
        { path:"/seek", component:seek },
        { path:"/shopping", component:shopping },
        { path:"/hom/newmsg",component:newmsg },
        {path:'/hom/detalis/:id',component:detalis},
        {path:'/hom/imgList',component:imgList},
        {path:'/hom/imgList/:index',component:imgDetails},
        {path:'/hom/producList',component:productList}
    ]
})
