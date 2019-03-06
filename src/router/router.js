import Vue from "vue";
import VueRouter from "vue-router";
import hom from "../pages/hom/hom.vue";
import member from "../pages/member/member.vue";
import seek from "../pages/seek/seek.vue";
import shopping from "../pages/shopping_car/shopping_car.vue"





Vue.use(VueRouter);


export default new VueRouter({
    mode:"history",
    
    routes:[
        { path:"/hom", component:hom },
        { path:"/member", component:member },
        { path:"/seek", component:seek },
        { path:"/shopping", component:shopping },
        {
            path: '/', 
            redirect: '/home' 
        }
    
    ]
})
