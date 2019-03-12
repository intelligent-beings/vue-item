<template>
    <div>
        <!-- 轮播图 -->
        <mt-swipe :auto="4000">
            <mt-swipe-item  v-for="(item) in Lunbo" :key="item.id"> 
               <img :src="item.mainImage">
            </mt-swipe-item>
        </mt-swipe>
        <!-- 六格 -->
        <ul class="xuan">
            <li>
                <router-link to="/hom/newmsg">
                    <img src="../../img/user.png" alt="">
                    <div>新闻咨询</div>
                </router-link>
            </li> 
             <li>
                <router-link to="/hom/imgList">
                    <img src="../../img/user.png" alt="">
                    <div>商品采购</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <img src="../../img/user.png" alt="">
                    <div>图片显示</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <img src="../../img/user.png" alt="">
                    <div>图片显示</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <img src="../../img/user.png" alt="">
                    <div>图片显示</div>
                </router-link>
            </li>
            <li>
                <router-link to="/">
                    <img src="../../img/user.png" alt="">
                    <div>图片显示</div>
                </router-link>
            </li>
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
                  
                    this.Lunbo =res.data.data
                   
               }
           }).catch(function (error) {
                Taoust(erroer)
            }); 
       },
    
    }

}

</script>
<style <style lang="less" scoped>
div{
    width:100%;
    height: auto;
    overflow-x:hidden;
    .mint-swipe{
        height:3.5rem;   
        img{
            width:100%;
            height:100%;
        }
    }
    .xuan{
        display:flex;
        justify-content: space-around;
        flex-wrap:wrap;
        li{
        @init:100%;
            width:(@init/3);
            text-align: center;
            a{
                text-decoration:none; 
                color:#333; 
                outline-color: aliceblue;
                display:inline-block;
                img{
                    width:50px;
                    height:50px;
                }
                
            }
        }
    }
 }
</style>