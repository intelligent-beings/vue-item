<template>
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media">
			<!-- 遍历数组显示li里内容 -->
			<router-link :to="'/hom/detalis/'+item.id" v-for="item in msg" :key="item.id">
					<img class="mui-media-object mui-pull-left" :src="item.mainImage" >
					<div class="mui-media-body">
						<h4>{{item.name}}</h4>
						<p class='mui-ellipsis'>
							<span>发表时间:{{2018/1/13|myfilter()}}&nbsp; &nbsp;&nbsp;</span>
							<!-- 时间格式化函数调用myfilter -->
							<span>点击:{{item.price}}次</span>
						</p>
					</div>
			</router-link>
		</li>
	</ul>
</template> 
<script>   
export default {

	data(){
		return{
			msg:'',
			
		}
	},
	created(){
		 
		this.getnewmsg()
		
	},
	methods:{
		//get请求
		getnewmsg(){
				 
			this.$axios.get('http://118.126.92.176:8080/hemu/get_product_list')
			.then((response)=>{			//这里注意this 指向的问题
				 if (response.data.status===1){
					
					this.msg=response.data.data
					 
				 }

			})
			.catch(function(error){
				  console.log(erroer);
					
			 
			})

			

		}
	}
}

</script>
<style lang="less" scoped>
	@import "./css/newmsg.less";

</style>

 