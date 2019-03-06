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