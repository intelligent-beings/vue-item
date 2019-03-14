 <template>
     <div id="imglist">
       <!--title列表区 -->
        <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options">
        </ly-tab>
        <!-- 图片展示区 -->
        <div id="container">      
          <ul>
            <router-link 
                :to="'/hom/imgList/'+index" 
                v-for="(item,index) in list" :key="item.id" tag="li"
                
            >
              <img v-lazy ="item.img">
              <div class="texts">
                <span class="text_title">{{item.title}}</span>
              </div>  
            </router-link>
          </ul>
        </div>
     </div>
 </template>
 
 
<script>
  export default {

      data () {
        return {
          selectedId: 0,
          items:          //分类列表数据 
          [
            {label: '推荐'},
            {label: '热点'},
            {label: '社会'},
            {label: '汽车'},
            {label: '娱乐'},
            {label: '情感'},
            {label: '设计'},
            {label: '人工智能'},
          ],
          options: {
            activeColor: '#1d98bd'
            // 可在这里指定labelKey为你数据里文字对应的字段名
          },
          list:''   //请求回来图片的数据 
        }
      },
      created(){    //组件创建时调用请求数据 
      this.getimg();
      console.log(this.list)
      },
    // 
     methods:{
        //vue jsonp 请求
          getimg(){
            this.$jsonp('http://list.ydui.org/getdata.php',{type:'backposition'})
            .then((res)=>{
              this.list = res;
              console.log(res);
            })
            .catch((error)=>{console.log(error)})
          }
      }
}
 
</script>
<style lang="less" scoped>
#imglist{ 

    #container{
      text-align: center;
      
      ul{
        padding: 0 0.2rem;
      
        li{
          margin: 0.2rem 0;
          background: #e8e8e8;
          box-shadow: 0 0 0.2rem ;
          position: relative;
          img{
            width:100%;
            height:5rem;
            vertical-align: middle;
          }
          .texts{
              font-size: 0.25rem;
              position: absolute;
              bottom: 0;
              background-color: rgba(0, 0, 0, 0.4);
               
              .text_title{
                  color: #e8e8e8;
                
              }
          }
          image[lazy=loading] {
                width: 40px;
                height: 300px;
                margin: auto;
              
          }
        }  

      }
    }
}

  
</style>
