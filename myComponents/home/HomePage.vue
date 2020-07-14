<template>
	<view class="home-page">
		<scroll-view scroll-y="true" style="height: 100%;">
			<swiper class="swiper"
				 :indicator-dots="indicatorDots" 
				 :autoplay="autoplay" 
				 :interval="interval" 
				 :duration="duration"
				 :circular='true'
				 indicator-active-color='#FFFFFF' 
				 indicator-color='rgba(255, 255, 255, 0.5)'
			 >
				<swiper-item>
					<view class="swiper-item" @click="goRouter">
						<image src="http://tfoneline.oss-cn-hangzhou.aliyuncs.com/cover/628f700ac68c4c77aeb05689d81f93a8/15886854000000.2977472691637686.png" class="swiper-banner"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="http://tfoneline.oss-cn-hangzhou.aliyuncs.com/cover/628f700ac68c4c77aeb05689d81f93a8/15886854000000.2977472691637686.png" class="swiper-banner"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image src="http://tfoneline.oss-cn-hangzhou.aliyuncs.com/cover/628f700ac68c4c77aeb05689d81f93a8/15886854000000.2977472691637686.png" class="swiper-banner"></image>
					</view>
				</swiper-item>
			</swiper>
			<view class="course-type">
				<view class="course-type-item">
					<image src="/static/imgs/public-icon.png" mode=""></image>
					<view>公开课</view>
				</view>
				<view class="course-type-item">
					<image src="/static/imgs/runtine-icon.png" mode=""></image>
					<view>常规课</view>
				</view>
				<view class="course-type-item">
					<image src="/static/imgs/trial-icon.png" mode=""></image>
					<view>短训课</view>
				</view>
				<view class="course-type-item">
					<image src="/static/imgs/consult-icon.png" mode=""></image>
					<view>选课咨询</view>
				</view>
			</view>
			<view class="recommend-wrap">
				<view class="recommend-title">
					<CommonTitle title='推荐课程'/>
				</view>
				<scroll-view class="scroll-view" scroll-x="true" :enable-flex='true'>
					<view class="recommend-item" v-for="item in [1,2,3,4,5]" :key='item'>
						<CourseCard />
					</view>
				</scroll-view>
			</view>
			<view class="recommend-wrap">
				<view class="recommend-title">
					<CommonTitle title='常规课' :right-handle='{name:"更多",url:""}'/>
				</view>
				<view class="">
					<view class="runtine-item" v-for="item in [1,2,3,4,5]" :key='item'>
						<CourseItem />
					</view>
				</view>
			</view>
		</swiper-item>
	</scroll-view>
	</view>
</template>

<script>
	import { baseUrl } from '@/env.js';
	import H5Bar from '@/myComponents/common/H5Bar.vue';
	import CommonTitle from '@/myComponents/common/CommonTitle.vue'
	import CourseCard from '@/myComponents/home/CourseCard.vue'
	import CourseItem from '@/myComponents/home/CourseItem.vue'
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500
			}
		},
		onPullDownRefresh(){
			// 下拉刷新
			console.log('fresh');
			setTimeout(()=>{
				uni.stopPullDownRefresh()
			},2000);
		},
		onTabItemTap(e){
			//console.log(e);
			// e的返回格式为json对象： {"index":0,"text":"首页","pagePath":"pages/index/index"}
			console.log(e);
		},
		onLoad(e) {
			console.log(e);
		},
		methods: {
			onEditorReady(){
				console.log('ready');
			},
			scroll(){
				
			},
			goRouter(){
				this.$navi('/pages/webview/index',{
					url:'123'
				})
			}
		},
		mounted(){
			console.log(123);
		},
		components:{
			CommonTitle,
			CourseCard,
			CourseItem,
			H5Bar
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	.home-page {
		height: 100%;
		.swiper{
			margin-top: 20rpx;
		}
		.swiper-item{
			padding: 0 30rpx;
			height: 100%;
			.swiper-banner{
				width: 100%;
				height: 100%;
				border-radius: 50rpx;
			}
		}
		.course-type{
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 48rpx;
			margin-top: 32rpx;
			.course-type-item{
				width: 94rpx;
				image{
					width: 94rpx;
					height: 94rpx;
					display: block;
				}
				view{
					width: 96rpx;
					font-size: 24rpx;
					color: #757F8A;
					text-align: center;
					margin-top: 12rpx;
				}
			}
		}
		.recommend-wrap{
			padding: 50rpx 0 0;
			.recommend-title{
				padding: 0 30rpx 20rpx;
			}
			.scroll-view{
				font-size: 0;
			}
			
			.scroll-view {
			  ::-webkit-scrollbar {  
					display: none;  
					width: 0 !important;  
					height: 0 !important;  
					-webkit-appearance: none;  
					background: transparent;  
				}
			}
			.recommend-item{
				display: inline-block;
				margin-right: 30rpx;
				&:first-child{
					margin-left: 30rpx;
				}
			}
			.runtine-item{
				margin: 0 30rpx 30rpx;
				padding: 40rpx 24rpx;
				box-sizing: border-box;
				background-color: #fff;
				box-shadow:0 4rpx 10rpx 0 rgba(7,61,125,0.1);
				border-radius:10rpx;
			}
		}
	}
</style>
