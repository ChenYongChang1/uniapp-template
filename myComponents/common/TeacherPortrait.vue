<template>
	<view class="teacher-portrait-wrap">
		<!-- <image src="/static/imgs/teacher-portrait.png" mode=""></image> -->
	</view>
</template>

<script>
	 export default {
	        data() {
	            return {
	            }
	        },
			props:{
				
			},
			onTabItemTap(e){
				//console.log(e);
				// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
				console.log(e);
			},
			onLoad(query) {
				
			},
			created(query) {
			},
			
			mounted() {
				
			},
			beforeDestroy(){
				
			},
			destroyed() {
				
			},
			methods:{
				
			},
			computed:{
				
			},
			components:{
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	.teacher-portrait-wrap{
		width: 60rpx;
		height: 60rpx;
		border-radius: 50%;
		background-image: url('~@/static/imgs/teacher-portrait.png');
		background-size: 100%;
		background-repeat: no-repeat;
	}
</style>
