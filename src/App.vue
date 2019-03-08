 
 
 <template>
     <div class="hebody">
        
        <mt-header fixed title="Header"></mt-header>
        <transition name="xx">
        <router-view ></router-view>

        </transition>

        <baseRouter></baseRouter>
        
         
     </div>
 </template>
 
 <script>
 import baseRouter from "./components/baseRouter/baseRouter.vue"
  
 export default {

     components:{

        baseRouter,
         
     },
      
    


 }
 
 </script>
 <style scoped>
  
    .hebody{
       
      padding-top: 40px;
    };
 
 </style>