<template>
	<view class="header__content">
		<view class="top mb-50 ">
			<view class="top__left">
				<image class="icon" src="../../../static/images/index/account.png" mode="widthFix" />
				<text class="username">组名</text>
			</view>
			<view @click="openPopup('rule')" class="top__right">
				<image class="icon" src="../../../static/images/index/rule.png" mode="widthFix" />
			</view>
		</view>
		<!-- 签到排号start -->
		<view class="main" v-if="status==1">
			<view class=" pb-10 font-size-36">
				前面等待组长<text class="font-size-44">32432</text>位
			</view>
			<view class=" pb-10 font-size-36">
				预计打卡后参加交易日期
			</view>
			<view class=" pb-30 font-size-44">
				2020年12月21日
			</view>
			<view class="main__btn" @tap="status = 2">
				签到排号
			</view>

		</view>
		<!-- 签到排号end -->

		<!-- 等待交易start -->
		<view class="main" v-if="status==2">
			<view class=" pb-10 font-size-44">
				交易号<text class="pl-20">C32432</text>
			</view>
			<view class=" pb-10 font-size-36">
				前面等待组长<text class="font-size-44 pl-10 pr-10">2342</text>位
			</view>
			<view class=" pb-30 font-size-36">
				预计<text class="font-size-44">2020年12月11日</text>参加交易
			</view>
		</view>
		<!-- 等待交易end -->


		<!-- 等待确认start -->
		<view class="main" v-if="status==3">
			<view class=" pb-10 font-size-44">
				批次号<text class="pl-20">2342432432242</text>
			</view>
			<view class=" pb-10 font-size-36">
				当前订单状态：<text class="font-size-44 pl-10 ">已到号</text>
			</view>
			<view class=" pb-30 font-size-36">
				剩余确认时间<text class="font-size-44 pl-10 pr-10">22</text>秒，请及时确认
			</view>
			<view class="main__btn" @tap="status =4 ">
				立即确认
			</view>
		</view>
		<!-- 等待确定end -->


		<!-- 等待商户确认start -->
		<view class="main" v-if="status==4">
			<view class=" pb-10 font-size-44">
				批次号<text class="pl-20">2434242334</text>
			</view>
			<view class=" pb-10 font-size-36">
				当前订单状态：<text class="font-size-44 pl-10 pr-10">等待商户确认</text>
			</view>
			<view class=" pb-30 font-size-36">
				<text class="font-size-44">900</text>秒后系统默认通过
			</view>
		</view>
		<!-- 等待商户确认end -->



		<!-- 等待商户确认start -->
		<view class="main" v-if="status==5">
			<view class=" pb-10 font-size-44">
				批次号<text class="pl-20">2434242334</text>
			</view>
			<view class=" pb-10 font-size-36">
				当前订单状态：<text class="font-size-44 pl-10 pr-10">等待边民确认</text>
			</view>
			<view class="font-size-36 pb-30 ">
				<text class="">参与便民：</text><text>100人</text> <text class="pl-30">已经确认人数：</text><text>90人</text>
			</view>
			<view class="main__btn" @tap="status = 5">
				批次详情
			</view>
		</view>
		<!-- 等待商户确认end -->


		<!-- 申报阶段start -->
		<view class="main" v-if="status==6">
			<view class=" pb-10 font-size-44">
				批次号<text class="pl-20">2434242334</text>
			</view>
			<view class=" pb-10 font-size-36">
				当前订单状态：<text class="font-size-44 pl-10 pr-10">等待申报</text>
			</view>
			<view class="speed">
				<view class="">
					<view class="uni-padding-wrap uni-common-mt">
						<view class="progress-box">
							<progress percent="20"  stroke-width="3" />
						</view>
					</view>
				</view>
				
				
			</view>

		</view>
		<!-- 申报阶段end -->



		<uni-popup ref="rule" type="center">
			<view class="bm-popup">
				<view class="popup-title">
					<view class="icon">

					</view>
					<view class="text-color-black-3 font-size-32">
						规则说明
					</view>
					<image @tap="closePopup('rule')" class="icon" src="../../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content text-color-black-3">
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
					<view class="text-color-black-3 font-size-32">
						签到打卡
					</view>
					<image @tap="closePopup('report')" class="icon" src="../../../static/images/commen/close.png" mode=""></image>
				</view>
				<view class="bm-content2">
					<view>
						<image class="img" src="../../../static/images/commen/report.png" mode=""></image>
					</view>
					<view class="text-color-grey-6">
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
		name: 'groupHeader',
		data() {
			return {
				isReport: false,
				popupName: 'report',
				contentHeight: 'height:px',
				status: 6,
			};
		},
		created() {
			wx.getSystemInfo({
				success: (res) => {


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
		display: flex;
		flex-direction: column;

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

		.main {
			text-align: center;
			flex-grow: 1;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: center;

			&__btn {
				font-size: 36rpx;
				width: 240rpx;
				height: 72rpx;
				background: white;
				border-radius: 36rpx;
				text-align: center;
				line-height: 72rpx;
				margin: 0 auto;
				color: #F3433D;
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
