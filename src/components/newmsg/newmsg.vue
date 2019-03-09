<template>
    <ul class="mui-table-view">
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
					<img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
					<div class="mui-media-body">
						<h4>幸福</h4>
						<p class='mui-ellipsis'>
							<span>发表时间:2018-1-1&nbsp; &nbsp;&nbsp;</span>
							<span>点击: 0次</span>
						</p>
					</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="../../img/muwu.jpg">
				<div class="mui-media-body">
					木屋
					<p class='mui-ellipsis'>
							<span>发表时间:2018-1-1&nbsp; &nbsp;&nbsp;</span>
							<span>点击: 0次</span>
						</p>
				</div>
			</a>
		</li>
		<li class="mui-table-view-cell mui-media">
			<a href="javascript:;">
				<img class="mui-media-object mui-pull-left" src="../../img/cbd.jpg">
				<div class="mui-media-body">
					CBD
					<p class='mui-ellipsis'>
							<span>发表时间:2018-1-1&nbsp; &nbsp;&nbsp;</span>
							<span>点击: 0次</span>
						</p>
				</div>
			</a>
		</li>
	</ul>
</template>

<script>
export default {


	data(){
		return{

		}
	},
	methods:{
		getnewmsg(){

			this.$axios.get('',function(res,rep){
				if(req.status===0){
					this.data= req.message
				}


			}).then(function(req){

			})

			

		}
	}
}

</script>
<style lang="less" scoped>
	@import "./css/newmsg.less";

</style>

 