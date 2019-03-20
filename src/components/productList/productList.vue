<template>
    <div id="producList">
        <!-- 商品采购列表 -->
        <div class="msg" v-for="item in msg" :key="item.id" @click="goto(item.id)"  >
            
        
            <img :src="item.img_url">
            <h5>{{item.title}}</h5>
            <div class="producList_jia">
                <div>
                    <span>现价:${{item.sell_place}}</span>
                    <span class="text">原价:${{item.sell}}</span>
                </div>
                <div>
                    <span>热卖中</span>
                    <span>剩于:{{item.stock}}</span>
                </div>
            </div>
        </div>
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
		console.log(this.msg)
	},
	methods:{
		//get请求图片列表&加载更多
		getmes(){
				 
			this.$axios.get('https://easy-mock.com/mock/5c8e161fc12de836b2636537/productList')
            .then((res )=>{			//这里注意this 指向的问题
            console.log(res.data.message)
                 if(res.data.status===0){
                    //  this.msg = res.data.message;
                     this.msg= this.msg.concat( res.data.message)   //concat 合并字符串或数组,对象
                 }
			})
			.catch(function(error){
				  console.log(erroer);
					
			 
			})

			

        },
        
        
        goto(id){
            // this.$router.push('/hom/MobilePhoneDetails/'+id);
            // this.$router.push({path:'/hom/MobilePhoneDetails/'+id })
            this.$router.push({name:'MPD', params: {id:id}})
            // this.$router.push({path:'/hom/MobilePhoneDetails/',query:{id}})

        }
        
         
	}


}

</script>
<style lang="less" scoped>
 @import './productList.less/productList.less';
</style>
