 <template>
	 <div class="base">
		 <div class="hom">
			 <span  @click='goto("/hom")'>
				<span><img src="../../../src/img/shouye2.png" alt=""></span><br>
			 	<span>首页</span>
			 </span>
		</div>
		 <div class="mall" >
		 	<span  @click='goto("/shopping")'>
				<span><img src="../../../src/img/mall.png" alt=""></span><br>
				<span>购物车</span>
			</span>
		</div>
		 <div class="huiyuan" >
			 <span @click='goto("/member")'>
				<span> <img src="../../../src/img/shinshophuiyuan.png" alt=""></span><br>
				<span>会员</span>
			 </span>
			
		</div>
		 <div>
			 <span  @click='goto("/seek")'>
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
			  
			 this.$router.push()
		 }
	 }


 }
 
 </script>
<style lang="less" scoped>
 .base{
	 width:100%;
	 position: absolute;
	 bottom: 0;
	 left: 0;
	 border-top:1px solid red;
	 display: flex;	
	 padding-top:5px;
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
 }
 </style>
 