<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="(item) in Lunbo" :key="item.id"> 
               <img :src="item.mainImage">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 六格 -->
        <ul>
            <li ></li>
        </ul>

    </div>
</template>

<script>
import{Taoust} from "mint-ui"

export default {
    
    data(){
        return{
            Lunbo:[ ],

        }
    },
    created(){
        this.getLun()
    },
    methods:{
       getLun(){
        
           this.$axios.get('http://118.126.92.176:8080/hemu/get_product_list')
           .then((res)=>{
               
            //    console.log(res.data)
               if(res.data.status === 1){
                   console.log(res.data.data)
                    this.Lunbo =res.data.data
                   
               }
           }).catch(function (error) {
                console.log(error);
            }); 
       },
    
    }

}

</script>
<style scoped lang='less'>
 @import url('./less/hom.less');
div{
    width:100%;
    overflow-x: hidden;
   
    .mint-swipe{
        height:150px;
       
        img{
            width:100%;
            height:100%;
        }
 }
 li{
     height:30px;
     background:red;
 }
 }
</style>