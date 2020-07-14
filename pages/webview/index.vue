<template>
	<view class="">
		<view class="test">
			123
		</view>
		  <web-view :webview-styles="webviewStyles" src="https://uniapp.dcloud.io/static/web-view.html"></web-view>
	</view>
</template>

<script>
	 export default {
	        data() {
	            return {
	                webviewStyles: {
	                    progress: {
	                        color: '#FF3333'
	                    }
	                },
					url:''
	            }
	        },
			created(query) {
				
			},
			onLoad(query) {
				console.log(query);
				this.url=decodeURIComponent(query.url);
			}
	    }
</script>

<style scoped lang="scss">
	.test{
		position: fixed;
		top: 150rpx;
		right: 150rpx;
	}
</style>
