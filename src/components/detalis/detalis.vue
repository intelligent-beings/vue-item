<template>
    <div>
     <div class="titles">
         <h3>{{messages.name}}</h3>
     </div>
     <div class="titles_time">
        <span>
            发表时间:{{messages.stock}}
        </span>
        <span>
            点击次数:{{messages.price}}
        </span>
     </div>
     <div class="titles_text">
         {{messages.subImages}} 
          {{messages.subtitle}}
 
     </div>
    </div>
</template>
<script>
export default {
    
data(){
    return {
        id:this.$route.params.id,
        messages:{}
    }
},
created(){
    this.getdetalis()
},
methods:{
    // ajax请求
    getdetalis(){
        this.$axios.get('http://118.126.92.176:8080/hemu/get_product_list')
        .then((res)=>{
            
            if (res.data.status===1){
                
                console.log('~~调用了');
                this.messages = res.data.data[0] 
                console.log( res.data);
                
            }
            

        })
        .catch((error)=>{
            console.log(error);
            
        })  


    }
}



}


</script>
<style scoped lang='less'>
    @import './less/datalis.less';
</style>