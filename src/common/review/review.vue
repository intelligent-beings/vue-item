 <template>
 <!-- 评论 这是一个公用子组件
    import xx from 'url' 将子组件导入到引用组件中
    2.在引用组件中的components属性中注册
    3.在引用组件中以标签的形式写入注册组件 就行
 -->
 <div class="revew">
      <h3>发表评论</h3>
      <hr/>
      <textarea id="text" rows="8" placeholder='请输入评论' wrap="pyhsical"
        v-model="pinglun"
      ></textarea>
      <mt-button size="large" type="primary" @click="publis">发表</mt-button>
      <div class="revew_content" >
            <div class="revew_user" v-for="item in mes" :key="item.Id">
                <div>第一楼 用户名:匿名 发表时间:&nbsp;&nbsp;{{item|myfilter()}}</div>
                <div>{{item.name}}
                    {{item.subtitle}}
                    {{item.subImages}}
                </div>
            </div>
            
      </div>
      
      
      <mt-button size="large" plain  @click ="forMore" >加载更多</mt-button>
 </div>
    
 </template>
 
 <script>
 export default {

data(){

    return{
        pages:1,
        mes:[],         //所有数据 
        pinglun:''      //评论内容数据 
    }
},
created(){
   this.getnewmsg()

},
methods:{
        //发请求
     getnewmsg(){
        this.$axios.get('http://118.126.92.176:8080/hemu/get_product_list')
        .then((res)=>{
            
            if (res.data.status===1){
                //第一页=第一页+第二次请求内容
                this.mes = this.mes.concat(res.data.data) // concat函数连接字符串返回连接后结果 
                console.log(res.data);
                
            }
            

        })
        .catch((error)=>{
            console.log(error);
            
        })  


    },
    //下拉加载
    forMore(){
     
     this.pages++;
     this.getnewmsg();
     



    },
    //发表评论
    publis(){
       this.$axios.post('http://118.126.92.176:8080/hemu/get_product_list',{
            productId:this.pinglun.trim()

       }).then(function(res){
           

       })
       

    }

},


 }
 
 </script>
 <style lang=less scoped>
    @import url('./less/review.less');
 </style>