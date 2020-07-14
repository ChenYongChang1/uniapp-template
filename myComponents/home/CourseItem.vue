<template>
	<view class="">
		<view class="course-name">
			<view class="course-tag">
				<Tag>春</Tag>
				<Tag>语</Tag>
			</view>
			<view class="text-content">
				【20春】高二生物等级考图表超助图表超助表超表超助
			</view>
		</view>
		<view class="course-time">
			<text>2月12日 </text>
			<text>-</text>
			<text>4月27日</text>
			<text>10:15</text>
			<text>-</text>
			<text>12:30</text>
			<text> · </text>
			<text>共15讲</text>
		</view>
		<view class="course-bottom">
			<view class="teacher-name">
				<TeacherPortrait/>
				<text class="name">小叶老师</text>
			</view>
			<view class="price">
				<text>￥2800</text>
				<text>￥2800</text>
			</view>
		</view>
	</view>
</template>

<script>
	import Tag from '@/myComponents/common/Tag.vue';
	import TeacherPortrait from '@/myComponents/common/TeacherPortrait.vue';
	
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
				Tag,
				TeacherPortrait
			}
	    }
</script>

<style scoped lang="scss">
	@import '@/assets/css/variable.scss';
	 $course-name-text-indent:77rpx;
	.course-name{
		width: 100%;
		box-sizing: border-box;
		position: relative;
		.text-content{
			width: 100%;
			text-indent: $course-name-text-indent;
			color: #4A4A4A;
			font-size: 32rpx;
			line-height: 44rpx;
		}
		.course-tag{
			position: absolute;
			left: 0;
			top: 0;
			height: 44rpx;
			display: flex;
			justify-content: space-around;
			align-items: center;
			width: $course-name-text-indent;
		}

	}
	.course-time{
		display: flex;
		justify-content: flex-start;
		align-items: center;
		color: #666666;
		font-size: 24rpx;
		margin-top: 10rpx;
	}
	.course-bottom{
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top:32rpx;
		.teacher-name{
			color: #666666;
			font-size: 24rpx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.name{
				margin-left:10rpx;
			}
		}
		.price{
			text:first-child{
				color: #999999;
				font-size: 24rpx;
				text-decoration: line-through;
			}
			text:last-child{
				color: #F95353;
				font-size: 28rpx;
			}
		}
	}
</style>
