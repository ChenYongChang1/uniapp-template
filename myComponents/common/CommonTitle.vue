<template>
	<view class="title-wrap">
		<view class="title-name">
			{{title}}
		</view>
		<view class="right-handle" @click="goRouter">
			{{rightHandle.name}}{{rightHandle.name?'>':''}}	
		</view>
	</view>
</template>

<script>
	 export default {
	        data() {
	            return {
	            }
	        },
			props:{
				title:{
					type:String,
					default:""
				},
				rightHandle:{
					type:Object,
					default(){
						return {
							name:'',
							url:''
						}
					}
				}
			},
			onTabItemTap(e){
				//console.log(e);
				// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
				console.log(e);
			},
			onLoad(query) {
				console.log(456)
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
				goRouter(){
					this.$navi(this.rightHandle.url);
				}
			},
			computed:{
				
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	.title-wrap{
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: rgba(74, 74, 74, 1);
		font-size: 36rpx;
		font-weight: 600;
		position: relative;
		text-indent: 20rpx;
		.title-name{
			&::before{
				content: '';
				display: block;
				position: absolute;
				left: 0;
				top: 0;
				width: 10rpx;
				height: 100%;
				background-color: $default-color;
			}
		}
		.right-handle{
			color:$default-color;
			font-size: 24rpx;
		}
	}
</style>
