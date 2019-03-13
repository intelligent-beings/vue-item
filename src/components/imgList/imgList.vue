 <template>
     <div>
       <!--title列表区 -->
        <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options">
        </ly-tab>
        <!-- 图片展示区 -->
        <div id="container">      
          <ul>
            <li v-for="item in list" :key="item.id">
              <img v-lazy ="item.img">
            </li>
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
      created(){
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
 <style scoped>
 img {
  width:100%;
  height: 5.7rem;
  margin: auto;
}
 </style>