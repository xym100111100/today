<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title  font-size-extra-ll">
						我的
					</view>
					<view class="content">
						<image src="../../static/images/me/portrait.png" style="height: 102rpx; width: 102rpx;margin: 0 16rpx;" mode=""></image>
						<view class="">
							<view class="font-size-lg">
								张三三
							</view>
							<view class="font-size-medium phone ">
								1827****219
							</view>
						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="main">
			<navigator class="item-right" open-type="navigate" url="/pages/me/setting/setting" hover-class="none">
				<view class="list-item">
					<view class="item-left">
						<image class="left-img" src="../../static/images/me/setting.png" mode=""></image>
						<view class="">
							我的设置
						</view>
					</view>
					<view class="item-right">
						<image src="../../static/images/commen/forward.png" mode="" style="height: 28rpx; width: 16rpx;"></image>
					</view>
				</view>
			</navigator>

			<view class="list-item">
				<view class="item-left">
					<image class="left-img" src="../../static/images/me/service.png" mode=""></image>
					<view class="">
						客服热线
					</view>
				</view>
				<view class="item-right">
					<image src="../../static/images/commen/forward.png" mode="" style="height: 28rpx; width: 16rpx;"></image>
				</view>

			</view>

			<navigator open-type="navigate" url="/pages/me/flowing/flowing" hover-class="none">
				<view class="list-item">
					<view class="item-left">
						<image class="left-img" src="../../static/images/me/bill.png" mode=""></image>
						<view class="">
							交易流水
						</view>
					</view>
					<view class="item-right">

						<image src="../../static/images/commen/forward.png" mode="" style="height: 28rpx; width: 16rpx;"></image>

					</view>

				</view>
			</navigator>
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
				headerHeight: 'height:0px'
			}
		},
		onLoad() {
			wx.getSystemInfo({
				success: (res) => {
					this.headerHeight = 'height:' + parseInt(res.statusBarHeight + 31 + 7 + 108) + 'px';
				},
			});

		},
		methods: {
			goPage(url) {

			}
		}
	}
</script>

<style lang="less" scoped>
	.bm-container {
		display: flex;
		flex-direction: column;

		.header {
			position: relative;

			&__back {
				position: absolute;
				width: 100%;

			}

			&__content {
				width: 100%;
				position: absolute;
				color: #FFFFFF;

				.title {
					margin-bottom: 14rpx;
					height: 63px;
					line-height: 63px;
					text-align: center;

				}

				.content {
					height: 216rpx;
					display: flex;
					align-items: center;

					.phone {
						color: #EBEBEB;
					}
				}

			}

		}

		.main {
			background: white;
			flex-grow: 1;
			padding-left: 30rpx;
			margin-top: 20rpx;

			.list-item {
				border-bottom: solid 1rpx #EEEEEE;
				height: 102rpx;
				display: flex;
				justify-content: space-between;
				align-items: center;

				.item-left {
					display: flex;
					align-items: center;
					height: 102rpx;

					.left-img {
						height: 60rpx;
						width: 60rpx;
						padding-right: 24rpx;
					}
				}

				.item-right {
					width: 60rpx;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
				}


			}
		}
	}
</style>
