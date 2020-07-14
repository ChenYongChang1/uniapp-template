<template>
	<view class="">
		<!-- 自定义的h5 tabbar -->
			list
	</view>
</template>

<script>
	import H5Bar from '@/myComponents/common/H5Bar.vue';
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
				H5Bar
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	
</style>
