<template>
	<view class="course-card-wrap">
		<image src="http://tfoneline.oss-cn-hangzhou.aliyuncs.com/cover/628f700ac68c4c77aeb05689d81f93a8/15886854000000.2977472691637686.png" class="course-cover"></image>
		<view class="course-name text-ellipsis-2">
			<view class="course-tag">
				<Tag>春</Tag>
				<Tag>语</Tag>
			</view>
			<view class="text-content">
				【20春】高二生物等级考图表超助图表超助表超表超助图表超助表超助表超表超助图表超助表超助表超表超助图表超助表超助表超表超助图表超助表超
			</view>
		</view>
		<view class="course-info">
			<view class="course-info-person-num">
				<image src="../../static/imgs/portrait.png" mode="" class="portrait-icon"></image>
				<text>20人</text>
			</view>
			<view class="course-info-price">
				<text class="origin-price">￥1500</text>
				<text class="right-price">￥2000</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Tag from '@/myComponents/common/Tag.vue';
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
				Tag
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	$course-name-text-indent:77rpx;
	.course-card-wrap{
		width:384rpx;
		border-radius: 10rpx;
		background-color: white;
		overflow: hidden;
		box-shadow:0 4rpx 10rpx 0 rgba(7,61,125,0.1);
		margin-bottom: 10rpx;
		.course-cover{
			width: 100%;
			height: 208rpx;
		}
		.course-name{
			padding: 0 20rpx;
			width: 100%;
			box-sizing: border-box;
			position: relative;
			.text-content{
				width: 100%;
				text-indent: $course-name-text-indent;
				color: #131F3C;
				font-size: 28rpx;
				line-height: 44rpx;
			}
			.course-tag{
				position: absolute;
				left: 20rpx;
				top: 0;
				height: 44rpx;
				display: flex;
				justify-content: space-around;
				align-items: center;
				width: $course-name-text-indent;
			}
		}
		.course-info{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 16rpx 20rpx;
			margin-top: 10rpx;
		}
		.portrait-icon{
			width: 26rpx;
			height: 26rpx;
		}
		.course-info-person-num{
			image{
				margin-right: 4rpx;
			}
			color: #999999;
			font-size: 20rpx;
			display: flex;
			justify-content: flex-start;
			align-items: center;
		}
		.course-info-price{
			.origin-price{
				color: #999999;
				font-size: 24rpx;
				text-decoration: line-through;
			}
			.right-price{
				color: $default-red-color;
				font-size: 28rpx;
			}
		}
	}
</style>
