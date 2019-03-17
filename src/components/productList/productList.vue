<template>
    <div id="producList">
        <!-- 商品采购列表 -->
        <router-link to="#" class="msg" v-for="item in msg" :key="item.id">
            <img :src="item.img_url">
            <h5>{{item.title}}</h5>
            <div class="producList_jia">
                <div>
                    <span>${{item.sell_place}}</span>
                    <span class="text">${{item.stock}}</span>
                </div>
                <div>
                    <span>热卖中</span>
                    <span>剩于:{{item.quantiy}}</span>
                </div>
            </div>
        </router-link>
        <mt-button icon="more" size="large" type="danger"
            @click="getmes"
        >加载更多</mt-button>
    </div>
</template>

<script>
export default {

    data(){
        return{
            msg:[]
        }
    },
    
    created(){
		 
        this.getmes()   //组件创建后调用请求生成数据 
		
	},
	methods:{
		//get请求图片列表
		getmes(){
				 
			this.$axios.get('https://www.easy-mock.com/mock/5c8e161fc12de836b2636537/productList')
			.then((res )=>{			//这里注意this 指向的问题
                 if(res.data.status===0){
                    //  this.msg = res.data.message;
                     this.msg= this.msg.concat( res.data.message)   //concat 合并字符串或数组,对象
                 }
			})
			.catch(function(error){
				  console.log(erroer);
					
			 
			})

			

        },
        
         
	}


}

</script>
<style lang="less" scoped>
 @import './productList.less/productList.less';
</style>
