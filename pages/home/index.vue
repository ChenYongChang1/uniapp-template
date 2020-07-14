<template>
	<view class="container">
		<H5Bar/>
		<view class="serarch-head">
			<text class="grade-name">初三</text>
			<view class="search-box"  @click='$navi("/pages/home/search")'>
				<icon type="search" size="13"/>
				<div class="input">
					搜索课程
				</div>
			</view>
			<view class="shopping-wrap">
				<image src="../../static/imgs/shopping-car.png" class="shopping-car"></image>
			</view>
		</view>
		<view class="subject-wrap">
			<scroll-view class="scroll-view" scroll-x="true" @scroll="scroll">
				<view class="subject-item" v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :class="subjectIndex === index?'active':''" :key='item' @click="changeSubjectIndex(index)">{{item}}</view>
			</scroll-view>
		</view>
		<view class="content-swiper-wrap">
			<swiper class="content-swiper" @change='pageChange' :current="subjectIndex">
				<swiper-item class="content-swiper-item" :item-id='index + ""' v-for="(item,index) in [1,2,3,4,5,6,7,8,9]" :key='item'>
					<HomePage />
				</swiper-item>
			</swiper>
		</view>
	</view>
</template>

<script>
	import { baseUrl } from '@/env.js';
	import H5Bar from '@/myComponents/common/H5Bar.vue';
	import HomePage from '@/myComponents/home/HomePage.vue';
	import HomeList from '@/myComponents/home/HomeList.vue';
	export default {
		data() {
			return {
				indicatorDots: true,
				autoplay: true,
				interval: 5000,
				duration: 500,
				subjectIndex:0
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
			},
			pageChange(e){
				this.subjectIndex = e.detail.current;
			},
			changeSubjectIndex(index){
				this.subjectIndex = index;
			}
		},
		mounted(){
		},
		components:{
			H5Bar,
			HomePage,
			HomeList
		}
	}
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	.container {
		.serarch-head{
			height: 64rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0 30rpx;
		}
		.search-box{
			display: flex;
			justify-content: flex-start;
			align-items: center;
			flex: 1;
			background-color: #F6F7F8;
			border-radius: 30rpx;
			height: 64rpx;
			margin: 0 30rpx;
			icon{
				margin: 0 20rpx;
			}
			.input{
				font-size:28rpx;
				color: #B7BEC7;
			}
		}
		.grade-name{
			text-align: center;
			line-height: 64rpx;
		}
		.shopping-wrap{
			display: flex;
			justify-content: center;
			align-items: center;
		}
		.shopping-car{
			width: 46rpx;
			height: 40rpx;
		}
		.subject-wrap{
			margin: 0 30rpx;
			box-sizing: border-box;
		}
		.subject-item{
			margin-right: 44rpx;
			display: inline-block;
			height: 80rpx;
			position: relative;
			line-height: 80rpx;
			font-size: 28rpx;
			color: #333333;
			&:last-child{
				margin-right: 0;
			}
		}
		.active{
			font-size: 40rpx;
			font-weight: 600;
			color: $default-color;
			&::after{
				content: '';
				display: block;
				position: absolute;
				bottom: 0;
				left: 50%;
				transform: translatex(-50%);
				width: 26rpx;
				height: 6rpx;
				border-radius: 3rpx;
				background-color: $default-color;
			}
		}
		.content-swiper-wrap{
			width: 100vw;
			position: absolute;
			top: 170rpx;
			left: 0;
			bottom: 0;
			.content-swiper{
				height: 100%;
			}
		}
	}
</style>
