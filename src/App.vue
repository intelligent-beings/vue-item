 
 
 <template>
     <div class="hebody">
        <!-- 头部 -->
        <mt-header fixed title="Header"></mt-header>

        <transition name="xx">
        <router-view ></router-view>
         <!-- 活动组件  -->
        </transition>
             <!--底部 -->  
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
      width:100%;
      height:100%;
      padding-top: 0.8rem;
      padding-bottom:1.2rem
    };
 
 </style>