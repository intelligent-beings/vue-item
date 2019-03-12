 <template>
     <div>
        <ly-tab
        v-model="selectedId"
        :items="items"
        :options="options">
        </ly-tab>
     </div>
 </template>
 
 <script>
 export default {

   data () {
    return {
      selectedId: 0,
      items: [
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
    }
  }
  }
 
 
 </script>
 <style scoped>
 </style>