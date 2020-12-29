<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
		<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png" mode="widthFix"></image>
		<view>
		   <myStatusBar/>
		   <view class="header__content">
			   <view class="title">
			     	排号
			   </view>
			   <view class="content">
					张三三
			   </view>
		     	
		   </view>
		</view>
		</view>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	
	export default {
		components: {
			myStatusBar
		},
		computed: {
			theme() {
				return this.$store.state.theme.name;
			}
		},
		data() {
			return {
				headerHeight:'height:0px'
			}
		},
		onLoad() {
				wx.getSystemInfo({
					success: (res) => {
						this.headerHeight = 'height:' + parseInt(res.statusBarHeight  + 31 + 7+ 108) + 'px';
					},
				});
			
		},
		methods: {
			
		}
	}
</script>

<style lang="less" scoped>
	.bm-container{
		.header{
			position: relative;
			&__back{
				position: absolute;
				width: 100%;
				
			}
			&__content{
				width: 100%;
				position: absolute;
				.title{
					height: 62rpx;
					margin-bottom: 14rpx;
				}
				.content{
					height: 216rpx;
				}
				
			}
			
		}
	}

</style>
