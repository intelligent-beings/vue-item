 
 
 <template>
     <div id="hebody">
        <mt-header fixed title="Header"></mt-header>
        <router-link to='/hom'></router-link>   
        <router-link to='/member'></router-link> 
        <router-link to='/seek'></router-link>       
        <router-link to='/shopping_car'></router-link> 
        <router-view></router-view>
        <base_router></base_router>
     </div>
 </template>
 
 <script>
 import base_router from "./components/base_router/base_router.vue"
 export default {

     components:{

        base_router,
        

     }


 }
 
 </script>
 <style scoped>
    #hebody{
      margin: 40px;
    }
 </style>