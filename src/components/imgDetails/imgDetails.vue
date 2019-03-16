<template>
    <div class="details ">
        <div class="details_h">
            <h3>这是很美丽的衣服吧</h3>
        </div>
        <div class="details_cent">
            <span>发表时间:{{''|myfilter()}}</span>
            <span>点击次数:0</span>
        </div>
        <hr>
         
        <!-- <div style="height: 1000px; background-color: pink;"></div> -->
         
        <vue-preview
        :list="imglist"
        :thumbImageStyle="{width: '80px', height: '80px', margin: '10px'}"
        :previewBoxStyle="{border: '1px solid #eee'}"
        :tapToClose="true"
        @close="closeHandler"
        @destroy="destroyHandler"
        />
        <content>
            功能性: 保暖发热材质: 羊绒尺码: S M L XL 2XL 3XL
            面料: 羊绒图案: 纯色风格: 通勤领子: 连帽毛线粗细: 
            常规毛线颜色分类: 浅灰色 驼色 酒红色 黑色 中灰色 米驼色 雾霾蓝色 藏蓝色 大红色 
            定制颜色联系客服袖型: 插肩袖组合形式: 
            单件货号: XK-011
            面料主材质含量: 95%及以上
            年份/季节: 2018年秋季
            袖长: 长袖
            款式: 套头
            厚薄: 常规款
            衣长: 常规款
            服装版型: 直筒
        </content>
        <review></review>
    </div>
</template>

<script>
import review from '../../common/review/review';
export default {

    data(){
        return {
           imglist:[],
          
        }
    },
    components:{
        review      //评论组件

     },
    created(){
        this.getimg();
        
        
    },
    methods:{
        //请求图片
          getimg(){
            this.$jsonp('http://list.ydui.org/getdata.php',{type:'backposition'})
            .then((res)=>{
                
                console.log(res);
                
                this.imglist = res
            })
            .catch((error)=>{console.log(error)})
          },
        // 缩略图点击事件
        closeHandler(){},
        destroyHandler(){},
        mm(){
            console.log(2);
            
        }
    } 

        
    
       
}




</script>
<style lang="less" scoped>
    .details{

         .details_h{
             text-align: center;
             
        }
        h3{
            color:#0080ff;
            text-align: center;
        }
        .details_cent{
            display:flex;
            justify-content: space-between;
            padding:0 0.2rem;
            font-size:0.2rem;
        }
        .details_img{
            .details_imgsmal{
                width:1rem;
            }
            .details_imgmax{
               width:8rem;
               height:8rem;
            }
           
        }
        content{
            font-size: 0.3rem;
            line-height:0.5rem;
        }
        }
</style>
