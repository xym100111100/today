<template>
	<view :class="[theme]" class="td-container">
		<view class="header" :style="calculationHeight">
			<image class="header__position-img" src="../../static/images/index/index-back.png" :style="calculationHeight" />
			<view class="header__position">
				<myStatusBar />
				<view class="header__title font-size-extra-ll">
					东兴边民贸易平台
				</view>

				<view class="header__content">
					<view class="top">
						<view class="top__left">
							<image class="icon" src="../../static/images/index/account.png" mode="widthFix" />
							<text class="username">张三</text>
						</view>
						<view @click="openPopup('rule')" class="top__right">
							<image class="icon" src="../../static/images/index/rule.png" mode="widthFix" />
						</view>
					</view>
					<view v-if="!isReport" class="before">
						<view class="middle">
							<view class="">
								前面等待的边民 <text class="number text-color-secondary">5433</text>位
							</view>
							<view class="">
								预计打卡后参加交易日期
							</view>
							<view class="date text-color-secondary">
								2020年12月21日
							</view>
						</view>
						<view class="bottom" @tap="openPopup('report')">
							打卡签到
						</view>
					</view>
					<view class="after" v-if="isReport">
						<view class="order-num font-size-extra-llg">
							<text>交易号</text>
							<text class="number">B123456</text>
						</view>
						<view class="font-size-ll">
							前面等待边民<text class="text-color-secondary ">34543</text>位
						</view>
						<view class="font-size-ll">
							预计<text class="text-color-secondary  ">2020年23月21日</text>参加交易
						</view>
					</view>

				</view>

			</view>
		</view>
		<view class="main">
			<view class="main__date">
				2020年12月20日
			</view>
			<view class="main__content-list">
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back.png" mode="widthFix"></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日上架
								</view>
								<view class="">
									商品总价
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back2.png" mode="widthFix"></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日成交
								</view>
								<view class="">
									订单笔数
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>
				<view class="item">
					<image class="item__back-img" src="../../static/images/index/list-back3.png" mode="widthFix"></image>
					<view class="itm-content">
						<view class="content-left">
							<image class="left__img" src="../../static/images/index/ding-dang.png" mode=""></image>
							<view class="lift_text">
								<view class="">
									当日成交
								</view>
								<view class="">
									订单金额
								</view>
							</view>

						</view>
						<view class="content-right">
							42442332 <text class="unit">元</text>
						</view>
					</view>
				</view>

			</view>
		</view>
		<uni-popup ref="rule" type="center">
			<view class="bm-popup">
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black font-size-lg">
						规则说明
					</view>
					<image @tap="closePopup('rule')" class="icon" src="../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content">
					<view>1.每日边民贸易交易需打卡确认是否参加。</view>
					<view>2.每日20：00后开始次日签到打卡。</view>
					<view>3.先打卡先排序，每日8：00开始交易。</view>
					<view>4.排到后，需进行订单确认，到号后系统会发起通知发送至用户微信通知服务。</view>
					<view>5.超过15分钟未确认订单的，将进行重新排号，订单资格顺延至下一位排队用户。</view>
					<view>6.如有疑问，请咨询各自边民组长或电话咨询400-8888-8888。</view>
				</view>
			</view>
		</uni-popup>

		<uni-popup ref="report" type="center">
			<view class="bm-popup" style="width: 600rpx;" >
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black font-size-lg">
						签到打卡
					</view>
					<image @tap="closePopup('report')" class="icon" src="../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content2">
					<view >
						<image class="img"  src="../../static/images/commen/report.png" mode=""></image>
					</view>
					<view class="">
						请你再次确认与边贸交易
					</view>
					<view class="btn">
						确认打卡
					</view>
				</view>
			</view>
		</uni-popup>

	</view>
</template>
<script>
	import myStatusBar from "@/components/myStatusBar/myStatusBar.vue"
	import uniPopup from '@/components/uni-popup/uni-popup.vue'

	export default {
		components: {
			myStatusBar,
			uniPopup
		},

		data() {
			return {
				calculationHeight: 'height:540rpx',
				isReport: false,
				popupName: 'report',

			};
		},
		computed: {

			theme() {
				return this.$store.state.theme.name;
			}
		},
		created() {

		},
		onLoad() {

			wx.getSystemInfo({
				success: (res) => {
					this.calculationHeight = 'height:' + parseInt(res.statusBarHeight + 205 + 63) + 'px';
				},
			});
		},
		methods: {
			report() {

			},
			openPopup(val) {
				this.$refs[val].open()
			},
			closePopup(val) {
				this.$refs[val].close()
			}
		},

	};
</script>
<style lang="less" scoped>
	.td-container {
		.header {
			color: #FFFFFF;
			width: 100%;

			&__position-img {
				height: 100%;
				width: 100%;
				position: absolute;
			}

			&__position {
				position: absolute;
				width: 100%;
			}

			&__title {
				height: 63px;
				line-height: 63px;
				padding-left: 24rpx;
				text-align: center;
			}

			&__content {
				height: 205px;

				.top {
					display: flex;
					justify-content: space-between;
					height: 64rpx;
					align-items: center;
					padding-top: 24rpx;
					margin-top: 14rpx;
					border-top: solid 1rpx rgba(245, 245, 245, 0.4);

					&__left {
						padding-left: 24rpx;

						.icon {
							height: 64rpx;
							width: 64rpx;
						}

						height: 64rpx;
						display: flex;
						align-items: center;

						.username {
							padding-left: 18rpx;
							font-size: 32rpx;
						}
					}

					&__right {
						display: flex;
						align-items: center;
						height: 64rpx;
						margin-right: 24rpx;

						.icon {
							height: 47rpx;
							width: 48rpx;

						}
					}
				}

				.before {
					.middle {
						width: 328rpx;
						margin: 0 auto;
						font-size: 28rpx;
						text-align: center;
						margin-top: 14rpx;

						.number,
						.date {
							padding: 0 3rpx;
							font-size: 40rpx;
						}

					}

					.bottom {
						margin: 0 auto;
						width: 240rpx;
						height: 72rpx;
						background: #FFFFFF;
						border-radius: 36rpx;
						margin-top: 41rpx;
						text-align: center;
						color: #F3433D;
						line-height: 72rpx;
					}
				}

				.after {
					margin: 0 auto;
					width: 444rpx;
					text-align: center;

					.order-num {
						margin-top: 20rpx;
						margin-bottom: 52rpx;

						.number {
							padding-left: 10rpx;
						}
					}

				}





			}

		}

		.main {

			&__date {
				margin: 20rpx;
				width: 244rpx;
				height: 44rpx;
				font-size: 32rpx;
				font-weight: 500;
				color: #666666;
				line-height: 44rpx;
			}

			&__content-list {
				.item {
					height: 204rpx;
					position: relative;

					&__back-img {
						position: absolute;
						width: 100%;
						height: 100%;
					}

					.itm-content {
						position: absolute;
						display: flex;
						justify-content: space-between;
						width: 100%;
						box-sizing: border-box;
						padding: 0 30rpx;
						align-items: center;
						height: 100%;

						.content-left {
							display: flex;

							.left__img {
								height: 84rpx;
								width: 84rpx;
							}

							.lift_text {
								padding-left: 24rpx;
								font-size: 32rpx;
								color: #666666;
							}
						}

						.content-right {
							font-size: 40rpx;
							color: #F3433D;

							.unit {
								font-size: 28rpx;
								padding-left: 8rpx;
							}
						}

					}

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

		.bm-content {
			box-sizing: border-box;
			padding: 35rpx;

		}
		
		.bm-content2 {
			text-align: center;
			    padding-bottom: 1rpx;
			.img{
				height: 100rpx;
				width: 100rpx;
				padding: 30rpx 0  13rpx 0 ;
			}
			.btn{
				width: 260rpx;
				height: 76rpx;
				background: #F3433D;
				border-radius: 40rpx;
				margin: 43rpx auto;
				color: white;
				line-height: 76rpx;
			}
		
		}
		



	}
</style>
