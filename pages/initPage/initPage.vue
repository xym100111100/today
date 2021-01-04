<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title font-size-lg">
						模版页面{{action}}
					</view>
				</view>
			</view>
		</view>
		
		<!-- 1:以上为自定义头部信息，尽量尽量不要在上面再加内容，
		     不管下一个元素是不是还要继续绝对定位，应该在下一个
			 元素中写绝对定位而不是写在头部里面，因为不同的手机，
			 会因为px和rpx的转换比不一样，当高度越高的时候差距
			 就会越大，这样就会一些高度对不齐的问题
		 -->
		
		<view class="main" :style="paddingTop">
			
         32423432
		</view>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	import myList from "@/components/myLIst/myList.vue"

	export default {
		components: {
			myStatusBar,
			myList
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},
		onPullDownRefresh() {
			this.action = '下拉'
			this.onRefresh()
		},
		onReachBottom() {
			this.action = '上拉'
		},

		data() {
			return {
				action: '开始',
				headerHeight: 'height:0px',
				paddingTop: 'padding-top:0px',
				
			}
		},

		onLoad() {
			wx.getSystemInfo({
				success: (res) => {
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';
					this.paddingTop = 'padding-top:' + parseInt(res.statusBarHeight + 7 + 31 + 7) + 'px';
				},
			});

		},
		methods: {
			onRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
			},
		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		height: 100%;
		display: flex;
		flex-direction: column;

		.header {
			position: fixed;

			&__back {
				position: absolute;
				width: 100%;

			}

			&__content {
				width: 100%;
				position: absolute;

				.title {
					height: 62rpx;
					margin-bottom: 14rpx;
					line-height: 62rpx;
					color: #FFFFFF;
					text-align: center;
				}

				.content {
					height: 216rpx;
				}

			}

		}


	}
</style>
