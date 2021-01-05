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
							交易流水
						</view>
						<view style="height: 56rpx;width: 56rpx;">

						</view>
					</view>

				</view>
			</view>
		</view>
		<view class="main" :style="paddingTop">
			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>



			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>


			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>


			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
					</view>
				</view>
			</view>

			<view class="list">
				<view class="item">
					<view class="left">
						流水号：
					</view>
					<view class="">
						20201220124588
					</view>
				</view>
				<view class="money">
					+ 450.00
				</view>
				<view class="item">
					<view class="left">
						时间：
					</view>
					<view class="">
						2020-12-20 14：00
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


		.header {
			position: fixed;
			z-index: 100;

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
			background: #F8F8F8;

			.list {
				background: white;
				position: relative;
				padding: 19rpx 0;
				margin-bottom: 12rpx;

				.item {
					display: flex;
					padding-top: 12rpx;

					.left {
						width: 138rpx;
						text-align: right;
					}

				}

				.money {
					text-align: right;
					position: absolute;
					right: 10rpx;
					top: 30%;
				}
			}
		}


	}
</style>
