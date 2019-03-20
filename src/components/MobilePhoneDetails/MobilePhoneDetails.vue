<template>
    <!-- 手机详情页 -->
    <div id="capian">
		<div class="pian1">
			<mt-swipe :auto="4000">
            	<mt-swipe-item  v-for="item in sweip" :key="item.id"> 
               		<img :src="item.img_url">
            	</mt-swipe-item>
        	</mt-swipe>	
		</div>	
		<div class="pian2">
			<div class="title_p">
				<p>小火手机DAJFL</p>
			</div>
			<hr>	
			<div class="jiage_x">
				<span class="xx">市场价:&nbsp;&nbsp;${{list.market}}</span>&nbsp;&nbsp;
					<span>销售价:
						<span >${{list.place}}</span>
					</span>
			</div>
			<div class="shuliang">
				<span>购卖数量: 
				 <el-input-number v-model="num1" @change="handleChange" :min="1" :max="10" label="描述文字">
				 </el-input-number>
				</span>
			</div>
			<div class="but">
				<el-button type="primary" size="mini">立即购买</el-button>
				<el-button type="danger" size="mini">加入购物车</el-button>
			</div>
			
		</div>	
		<div class="pian3">
			<div class="argument">商品参数</div>
			<hr>
			<div class="huohao">商品货号:&nbsp;&nbsp;{{list.no}}</div>
			<div class="number">剩于数量:&nbsp;&nbsp;{{list.stock}} </div>
			<div class="time">上架时间:&nbsp;&nbsp;{{list.date}}</div>
			<hr>
			<mt-button type="primary" size="large" plain @click="Introduce(id)">图文你介绍</mt-button>
			<mt-button type="danger" size="large" plain @click="gotoComment(id)">商品评论</mt-button>
		</div>
	</div>
</template>

<script>
  
export default {

	data(){
		return{
			sweip:[],
			num1:1,						//按钮基数
			list:{}
		}
	},
	
	created(){
		this.getdata();
	 
	},
	methods:{
		 getdata(){
				 
			this.$axios.get('https://easy-mock.com/mock/5c8e161fc12de836b2636537/productList')
            .then((res)=>{			//这里注意this 指向的问题
                 if(res.data.status===0){
                    //  this.msg = res.data.message;
                    this.sweip = res.data.message;  //concat 合并字符串或数组,对象	轮播图数据 
										this.list = res.data.list;			//商品参数
									 	console.log(this.list)
								 }
			})
			.catch(function(error){
				  console.log(erroer);
			})

			

    },
		
  
		//购卖数量 按钮函数 
		handleChange(value) {
					console.log(value);
				},
		Introduce(id){
			//图文作介绍路由跳转
			this.$router.push({path:'/hom/MobilePhoneBy/'+this.id,name:'mpb'})
		},
		gotoComment(id){

		}
		
				
	}



}

</script>
<style lang="less" scoped>
	@import url('./less/index.less');
</style>
