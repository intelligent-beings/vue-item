<template>
    <div>
        <mt-swipe :auto="4000">
            <mt-swipe-item>1</mt-swipe-item>
            <mt-swipe-item>2</mt-swipe-item>
            <mt-swipe-item>3</mt-swipe-item>
        </mt-swipe>
    </div>
</template>

<script>

export default {
    
    data(){

        return{
            getLunbo:[ ],

        }
    },
    methods:{
       getLun(){
           this.$axios.get('url').then(function(res){
               console.log('1');
               
           })
           .catch(function(error){
               console.log('error');
               
           })
       }
    }

}

</script>
<style lang = 'less' scoped>
div{
    width:100%;
    overflow-y: hidden;}
    .mint-swipe{
        height:150px;
        background: yellow;
    }
     


</style>