<template>

	<view class="header__content">
		<view class="top mb-50 ">
			<view class="top__left">
				<image class="icon" src="../../../static/images/index/account.png" mode="widthFix" />
				<text class="username">张三</text>
			</view>
			<view @click="openPopup('rule')" class="top__right">
				<image class="icon" src="../../../static/images/index/rule.png" mode="widthFix" />
			</view>
		</view>
		<view v-if="!isReport" class="before ">
			<view class="middle">
				<view class="mb-10  font-size-lgx">
					前面等待的边民 <text class="number text-color-white font-size-extra-llg">5433</text>位
				</view>
				<view class="mb-10 font-size-lgx ">
					预计打卡后参加交易日期
				</view>
				<view class="date text-color-white font-size-extra-llgx">
					2020年12月21日
				</view>
			</view>
			<view class="bottom font-size-lgx" @tap="openPopup('report')">
				打卡签到
			</view>
		</view>
		<view class="after" v-if="isReport">
			<view class="order-num font-size-lgx">
				<text>交易号</text>
				<text class="number font-size-extra-llgx">B123456</text>
			</view>
			<view class=" mb-20 font-size-extra-ll ">
				
				前面等待边民<text class="text-color-white font-size-extra-llgx ml-10 mr-10">34543</text>位
			</view>
			<view class="font-size-extra-ll">
				预计<text class="text-color-white  font-size-extra-llgx">2020年23月21日</text>参加交易
			</view>
			<view class="bottom font-size-extra-ll" @tap="openPopup('report')">
				取消排号
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
					<image @tap="closePopup('rule')" class="icon" src="../../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content text-color-black">
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
			<view class="bm-popup" style="width: 600rpx;">
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black font-size-lg">
						签到打卡
					</view>
					<image @tap="closePopup('report')" class="icon" src="../../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content2">
					<view>
						<image class="img" src="../../../static/images/commen/report.png" mode=""></image>
					</view>
					<view class="">
						请你再次确认与边贸交易
					</view>
					<view class="btn" @tap="closePopup('report',true)">
						确认打卡
					</view>
				</view>
			</view>
		</uni-popup>
	</view>
</template>

<script>
	export default {
		name: 'generalHeader',
		data() {
			return {
				isReport: false,
				popupName: 'report',
				contentHeight:'height:px'
			};
		},
		created(){
			wx.getSystemInfo({
				success: (res)=> {
					
					
				},
			});
		},
		methods: {
			openPopup(val) {
				this.$refs[val].open()
			},
			closePopup(val, comfim) {

				if (comfim) {
					this.isReport = true
				}
				this.$refs[val].close()
			}
		}

	}
</script>

<style lang="less" scoped>
	.header__content {
		height: 564rpx;

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
				width: 396rpx;
				margin: 0 auto;
				font-size: 28rpx;
				text-align: center;
				margin-top: 14rpx;

				.number,
				.date {
					padding: 0 6rpx;
					
				}

			}

			
		}

		.after {
			margin: 0 auto;
			width: 556rpx;
			text-align: center;

			.order-num {
				margin-top: 20rpx;
				margin-bottom: 20rpx;
				.number {
					padding-left: 10rpx;
				}
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

			.img {
				height: 100rpx;
				width: 100rpx;
				padding: 30rpx 0 13rpx 0;
			}

			.btn {
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
