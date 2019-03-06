 
 
 <template>
     <div id="hebody">
        
        <mt-header fixed title="Header"></mt-header>
        
         
        <router-view></router-view>
        <baseRouter></baseRouter>
     </div>
 </template>
 
 <script>
 import baseRouter from "./components/baseRouter/baseRouter.vue"
  
 export default {

     components:{

        baseRouter,
         
     }


 }
 
 </script>
 <style scoped>
  
    #hebody{
      padding: 40px;
    }

 </style>