<template>
	<view :class="[theme]" class="bm-container">
		<view class="header" :style="headerHeight">
			<image class="header__back" :style="headerHeight" src="../../../static/images/me/back.png"></image>
			<view>
				<myStatusBar />
				<view class="header__content">
					<view class="title">

						<image @tap="goBack" src="../../../static/images/commen/goBack.png" mode="" style="height: 56rpx;width: 56rpx;"></image>
						<view class="font-size-32">
							订单详情
						</view>
						<view style="height: 56rpx;width: 56rpx;">

						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="main" :style="paddingTop">
			<view class="title">
				<view class="left font-size-32 text-color-F3433D">
					订单状态
				</view>
				<view class="right" @tap="openPopup('record')">
					<text class="font-size-30">记录</text>
					<image src="../../../static/images/commen/forward.png" style="height: 20rpx; width: 20rpx; padding-left: 10rpx;"
					 mode=""></image>
				</view>
			</view>

			<view class="content  ">

				<view class="item ">
					<view class="font-size-32">
						互市名称
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						商户
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						组长
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						互助社
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						时间
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
			</view>

			<view class="content">
				<view class="item">
					<view class="font-size-32">
						边民
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						商品
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						单价
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32">
						数量
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>
				<view class="item">
					<view class="font-size-32 ">
						金额
					</view>
					<view class="font-size-32 text-color-black-3">
						东兴市场
					</view>
				</view>

			</view>

			<view class="bottom">
				<view class="btn">
					确认按钮
				</view>
			</view>
		</view>
		<uni-popup ref="record" type="center">
			<view class="bm-popup">
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black-3 font-size-32">
						状态变更记录
					</view>
					<image @tap="closePopup('record')" class="icon" src="../../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="content">
					<view class="item">
						<view class="left ">
							订单创建：
						</view>
						<view class="">
							2020-03-06 14：00
						</view>
					</view>
					<view class="item">
						<view class="left">
							接单：
						</view>
						<view class="">
							2020-03-06 14：00
						</view>
					</view>
					<view class="item">
						<view class="left">
							通关：
						</view>
						<view class="">
							2020-03-06 14：00
						</view>
					</view>
					<view class="item">
						<view class="left">
							订单完成：
						</view>
						<view class="">
							2020-03-06 14：00
						</view>
					</view>
				</view>

			</view>
		</uni-popup>
	</view>
</template>

<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"

	export default {
		components: {
			myStatusBar,
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
				list: {
					isStatic: false, // 是否是静态json
					url: "/flow/handle/list",
					postData: {
						pageNum: 1,
						pageSize: 10,
						handleStatus: "done",
						handleType: "",
						businessType: "",
					},
				},
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
			goBack() {
				uni.navigateBack()
			},
			onRefresh() {
				setTimeout(() => {
					uni.stopPullDownRefresh()
				}, 2000)
			},
			openPopup(val) {
				this.$refs[val].open()
			},
			closePopup(val) {
				this.$refs[val].close()
			}
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
					display: flex;
					justify-content: space-between;
					align-items: center;
					padding: 0 22rpx;
					color: #FFFFFF;

				}

				.content {
					height: 216rpx;
				}

			}

		}

		.main {
			.title {
				height: 92rpx;
				display: flex;
				justify-content: space-between;
				padding: 0 26rpx;
				background: white;
				align-items: center;
			}

			.content {
				background: white;
				margin-top: 12rpx;


				.item {
					height: 92rpx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					border-bottom: 1rpx solid #F5F5F5;
					margin-left: 24rpx;
					padding-right: 26rpx;
				}
			}

			.bottom {
				background: white;
				margin-top: 12rpx;
				padding: 39rpx 0 32rpx 0;

				.btn {
					border-radius: 12rpx;
					background: #F3433D;
					width: 700rpx;
					margin: 0 auto;
					height: 76rpx;
					text-align: center;
					line-height: 76rpx;
					color: white;
					font-size: 36rpx;

				}
			}

		}


	}

	.bm-popup {
		width: 694rpx;
		background: #FFFFFF;
		border-radius: 16px;

		.popup-title {
			display: flex;
			justify-content: space-between;
			text-align: center;
			color: #333333;
			font-size: 32rpx;
			height: 88rpx;
			align-items: center;
			padding: 0 20rpx;
			border-bottom: solid 1rpx #E4E4E4;

			.icon {
				width: 44rpx;
				height: 44rpx;
			}
		}

		.content {
			margin: 56rpx 0rpx;
			padding-bottom: 39rpx;

			.item {
				display: flex;
				height: 73rpx;
				align-items: center;

				.left {
					width: 268rpx;
					text-align: right;
				}
			}
		}




	}
</style>
