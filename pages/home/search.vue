<template>
	<view class="">
		搜索
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
	
</style>
