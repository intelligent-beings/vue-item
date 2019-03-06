 <template>
	 <div class="base">
		 <div class="hom">
			 <router-link :class="{no:$route.path==='/hom'}" to="/hom">
				<span ><img src="../../../src/img/shouye2.png" ></span><br>
			 	<span>首页</span>
			 </router-link>
		</div>
		 <div class="mall" >
		 	<span :class="{no:$route.path==='/shopping'}" @click='goto("/shopping")'>
				<span ><img src="../../../src/img/mall.png" alt="" ></span><br> 
				<span>购物车</span>
			</span>
		</div>
		 <div class="huiyuan" >
			 <span :class="{no:$route.path==='/member'}" @click='goto("/member")'>
				<span> <img src="../../../src/img/shinshophuiyuan.png" alt=""></span><br>
				<span>会员</span>
			 </span>
			
		</div>
		 <div>
			 <span :class="{no:$route.path==='/seek'}" @click='goto("/seek")'>
				<span class="seek"><img src="../../../src/img/zoom-out.png" alt=""></span><br>
				<span>搜索</span>
			 </span>
			
		</div>
	 </div>
 </template>
 
 <script>
	  
 export default {
	 
	 methods:{
		 goto(path){
			  console.log(path);
			  
			 this.$router.replace(path)
		 }
	 }


 }
 
 </script>
<style lang="less" scoped>
 .base{
	 width:100%;
	 position:fixed;
	 bottom: 0;
	 left: 0;
	 border-top:1px solid #dbdbdb;
	 display: flex;	
	 padding:10px 0px;
	 z-index:100;
	//  background: yellow;
	div{
	 flex:4;
	 text-align:center;
		 display: block;
		 text-align: center;
	 span{
 		img{
	 		width:20px;
	 		height:20px;

		} 
	 }
	}
	.no{
		
		color:cornflowerblue;
		 
		
	}
 }
 </style>
 