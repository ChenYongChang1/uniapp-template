<template>
	<view class="tag-wrap">
		<slot></slot>
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
				
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	.tag-wrap{
		color: white;
		width: 32rpx;
		height: 32rpx;
		font-size: 22rpx;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: $default-color;
		text-indent: 0;
		border-radius:4rpx;
	}
</style>
